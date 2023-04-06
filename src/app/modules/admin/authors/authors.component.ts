import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { dialogData } from 'src/app/models/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthorsService } from 'src/app/Services/authors.service';
import { Author } from 'src/app/models/author';
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {
  authors!: Author[];
  dialog!: dialogData[]
  listData!: MatTableDataSource<Author>;
  displayedColumns: string[] = ['counter', 'First Name', 'Last Name', 'Date Of Birth', 'Photo', 'action'];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  searchKey!: string;
  constructor(public matDialog: MatDialog, private _authors: AuthorsService) {

  }
  ngOnInit(): void {
    this.getAuthors();
  }

  openDialog() {
    const dialogRef = this.matDialog.open(DialogBodyComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val)
          this.getAuthors();
      }
    })
  }
  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }
  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  getAuthors() {
    this._authors.getAllAuthors().subscribe({
      next: (res) => {
        this.listData = new MatTableDataSource(res.data)
        console.log(res.data);

        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;

      },
      error: console.log
    })
  }
  deleteAuthor(id: number) {
    this._authors.deleteAnAuthor(id).subscribe({
      next: (res) => {
        alert("Employee has Deleted Successfully");
        this.getAuthors()

      },
      error: console.log
    })
  }
  openEditDialog(data: Author) {
    const dialogRef = this.matDialog.open(DialogBodyComponent, {
      width: '400px',
      data,

    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val)
          this.getAuthors();
      }
    })

  }



  getNextData(currentSize: number, offset: number, limit: number) {


    this._authors.getPageAuthors(offset, limit)
      .subscribe((response: any) => {

        this.authors.length = currentSize;


        this.authors.push(...response.data);

        this.authors.length = response.total;



        this.listData = new MatTableDataSource<any>(this.authors);
        this.listData._updateChangeSubscription();

        this.listData.paginator = this.paginator;

      })
  }


  onPageChange(event: PageEvent) {

    let pageIndex = event.pageIndex;
    let pageSize = event.pageSize;

    //let previousIndex = event.previousPageIndex;

    let previousSize = pageSize * pageIndex;

    this.getNextData(previousSize, pageIndex, pageSize);


  }

}

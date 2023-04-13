import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';

// import { dialogData } from 'src/app/models/dialog';
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

  displayedColumns: string[] = ['counter', 'First Name', 'Last Name', 'Date Of Birth', 'bio', 'Photo', 'action'];
  authors!: Author[];
  listData!: MatTableDataSource<Author>;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  searchKey!: string;
  currentPageIndex: number = 1;
  totalPages!: number;

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
  /*   applyFilter() {
      this.listData.filter = this.searchKey.trim().toLowerCase();
    }
    onSearchClear() {
      this.searchKey = "";
      this.applyFilter();
    } */

  getAuthors() {
    this._authors.getAllAuthors().subscribe({

      next: (res) => {
        this.listData = new MatTableDataSource(res.data)
        // console.log(res.data);

        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;

      },
      error: console.log
    })
  }
  deleteAuthor(_id: string) {


    this._authors.deleteAnAuthor(_id).subscribe({
      next: (res) => {
        alert("Author has Deleted Successfully");
        this.getAuthors()

      },
      error: console.log
    })
  }
  openEditDialog(data: Author) {
    console.log(data);

    const dialogRef = this.matDialog.open(DialogBodyComponent, {
      width: '450px',
      data: data,

    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val)
          this.getAuthors();
      }
    })

  }


  onPreviousPage() {
    if (this.currentPageIndex > 1) {
      this.currentPageIndex--;
      this._authors.getPageAuthors(this.currentPageIndex).subscribe((result) => {
        this.currentPageIndex = result.currentPage;
        this.totalPages = result.pages;
        this.listData = new MatTableDataSource(result.data);
        this.listData.paginator = this.paginator;
      });
    }
  }

  onNextPage() {
    if (this.currentPageIndex < this.totalPages) {
      this.currentPageIndex++;
      console.log(this.currentPageIndex)
      this._authors.getPageAuthors(this.currentPageIndex).subscribe((result) => {
        this.totalPages = result.pages;
        this.listData = new MatTableDataSource(result.data);
        this.listData.paginator = this.paginator;
      });
    }
  }


}

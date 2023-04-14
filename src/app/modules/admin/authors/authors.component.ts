import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';

// import { dialogData } from 'src/app/models/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthorsService } from 'src/app/Services/authors.service';
import { Author } from 'src/app/models/author';
import { PhotoDialogComponent } from '../../user/photo-dialog/photo-dialog.component';
import { CoreService } from 'src/app/Services/core.service';
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  displayedColumns: string[] = ['counter', 'First Name', 'Last Name', 'Date Of Birth', 'bio', 'Photo', 'action'];
  authors!: Author[];
  listData!: MatTableDataSource<Author>;
  searchKey!: string;
  currentPageIndex: number = 1;
  totalPages!: number;
  loading: boolean = true;

  constructor(public matDialog: MatDialog,
    private _authors: AuthorsService,
    private _coreService: CoreService) {

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

  openPopup(photoUrl: string) {
    this.matDialog.open(PhotoDialogComponent, {
      data: { photoUrl }
    });
  }

  getAuthors() {
    this._authors.getPageAuthors(this.currentPageIndex).subscribe({

      next: (res) => {
        this.totalPages = res.pages;
        this.loading = false;
        this.listData = new MatTableDataSource(res.data)
      },
      error: console.log
    })
  }


  deleteAuthor(_id: string) {


    this._authors.deleteAnAuthor(_id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Category deleted!', 'done');

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
    this.loading = true;

    if (this.currentPageIndex > 1) {
      this.currentPageIndex--;
      this._authors.getPageAuthors(this.currentPageIndex).subscribe((result) => {
        this.totalPages = result.pages;
        this.listData = new MatTableDataSource(result.data);
        this.loading = false;

      });
    }
  }

  onNextPage() {
    this.loading = true;

    if (this.currentPageIndex < this.totalPages) {
      this.currentPageIndex++;
      console.log(this.currentPageIndex)
      this._authors.getPageAuthors(this.currentPageIndex).subscribe((result) => {
        this.totalPages = result.pages;
        this.listData = new MatTableDataSource(result.data);
        this.loading = false;

      });
    }
  }


}

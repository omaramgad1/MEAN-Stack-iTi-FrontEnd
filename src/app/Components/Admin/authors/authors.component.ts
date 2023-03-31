import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { dialogData } from 'src/app/models/dialog';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent {
  dialog!:dialogData[]
  // listData: MatTableDataSource<any>;
displayedColumns: string[] = ['First Name', 'Last Name', 'Date Of Birth', 'Photo','actions'];
// @ViewChild(MatSort) sort: MatSort;
// @ViewChild(MatPaginator) paginator: MatPaginator;
// searchKey: string;
constructor(public matDialog:MatDialog){}

openDialog(){
  const dialogRef= this.matDialog.open(DialogBodyComponent,{
 
    width:'400px',
    data:{
      formData:{}
    }
  });
}
// applyFilter() {
//   this.listData.filter = this.searchKey.trim().toLowerCase();
// }
// onSearchClear() {
//   this.searchKey = "";
//   this.applyFilter();
// }

}

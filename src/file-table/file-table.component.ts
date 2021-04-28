import { AfterViewInit,Component, OnInit, ViewChild } from '@angular/core';
import {getFile} from '../service/getFile.service'
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddemployeeComponent } from './addemployee/addemployee.component';


@Component({
  selector: 'app-file-table',
  templateUrl: './file-table.component.html',
  styleUrls: ['./file-table.component.css']
})
export class FileTableComponent implements OnInit {
displayedColumns: string[] = ['Position', 'Name', 'Salary', 'Age','Actions'];
  dataSource:any
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


file:any={};
employees:any[]=[];
public dialogRef:MatDialogRef<AddemployeeComponent>
  constructor(public http:getFile,private dialog: MatDialog) { }
/////////////////////////////////////////////////////////////////////////////////////
///////  get employees informations from API and charge the localStorage
/////////(this is an option we choose it to show you the actions in front)
  init(){
    this.http.getElements().subscribe(res=>{this.file=res; this.file.data.forEach(element => {
      this.employees.push(element);
      
    });
     localStorage.setItem("employees",  JSON.stringify( this.employees) ) ;
     this.dataSource= new MatTableDataSource (JSON.parse(localStorage.getItem('employees')));
     this.dataSource.paginator = this.paginator;   
     this.dataSource.sort = this.sort;
     
     })
  }
  
  ngOnInit() {
   this.init()

  }
////////////Delete employee front-End
   deleteEmployee(index){
   
   this.employees.splice(index,1)
   localStorage.setItem('employees',JSON.stringify(this.employees))
   this.dataSource= new MatTableDataSource(JSON.parse(localStorage.getItem('employees')))    
  }
///////////Open Modal to add a new employee
  addNewEmployee(){
   this.dialogRef = this.dialog.open(AddemployeeComponent,{
      width: '600px',
      height: '400px',
      });

      this.dialogRef.afterClosed().subscribe(()=>this.dataSource=new MatTableDataSource(JSON.parse(localStorage.getItem('employees')))  )
  }
  

  ///////Filter value
applyfilter(filterValue:string){

filterValue=filterValue.trim();
filterValue=filterValue.toLowerCase();
this.dataSource.filter=filterValue
  }
}

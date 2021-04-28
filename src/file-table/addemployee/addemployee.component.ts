import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
//////////////add new formGroup to get the new inforamtions from inputs
newEmployee=new FormGroup({
  employee_name:new FormControl('',Validators.required),
  id:new FormControl('',Validators.required),
  employee_age:new FormControl('',Validators.required),
  employee_salary:new FormControl('',Validators.required)

})

employees=[]

  constructor( private dialogRef: MatDialogRef<AddemployeeComponent>) { }

  ngOnInit() {
  }


  //////////// Submit the new employee and charge it in the local storage
newEmployeeAdd(){
  if(!this.newEmployee.valid){
    alert("Thanks to check  your form")
  } else{
  this.employees=JSON.parse(localStorage.getItem("employees"))
  this.employees.push(this.newEmployee.value)
  localStorage.setItem("employees",JSON.stringify(this.employees))
    this.dialogRef.close()
  }
  
  
}

}

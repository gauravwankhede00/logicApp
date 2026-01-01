import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { error } from 'console';


@Component({
  selector: 'app-employee-list',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
  http = inject(HttpClient);
  employeeList = signal<any[]>([]);
  departments = signal<any[]>([]);
  designations = signal<any[]>([]);
  form = new FormGroup({
    employeeId: new FormControl(0),
    fullName: new FormControl(""),
    email: new FormControl(""),
    phone: new FormControl(""),
    gender: new FormControl(""),
    dateOfJoining: new FormControl(""),
    departmentId: new FormControl(0),
    designationId: new FormControl(0),
    employeeType: new FormControl(""),
    salary: new FormControl(0),
  });
  title = signal<string>("Save");

  constructor() { this.getDepartment(); this.getEmployeeList(); }


  getDepartment() {
    this.http.get('https://api.freeprojectapi.com/api/EmployeeApp/GetDepartments').subscribe({
      next: (result: any) => {
        this.departments.set(result);
      }
    })
  }
  getDesignation() {
    const departmentId = this.form.controls["departmentId"].value;
    this.http.get('https://api.freeprojectapi.com/api/EmployeeApp/GetDesignationsByDeptId?deptId=' + departmentId).subscribe({
      next: (result: any) => {
        this.designations.set(result);
      },
      error: (error) => {
        alert(error);
      }
    })
  }
  getEmployeeList() {
    this.http.get("https://api.freeprojectapi.com/api/EmployeeApp/GetEmployees").subscribe({
      next: (res: any) => {
        this.employeeList.set(res);
      }
    });
  }
  edit(employee: any) {
    debugger;
    this.form = new FormGroup({
      employeeId: new FormControl(employee.employeeId),
      fullName: new FormControl(employee.fullName),
      email: new FormControl(employee.email),
      phone: new FormControl(employee.phone),
      gender: new FormControl(employee.gender),
      dateOfJoining: new FormControl(employee.dateOfJoining),
      departmentId: new FormControl(employee.departmentId),
      designationId: new FormControl(employee.designationId),
      employeeType: new FormControl(employee.employeeType),
      salary: new FormControl(employee.salary)
    });
  }
  createEmployee() {
    const data = this.form.value;
    this.http.post("https://api.freeprojectapi.com/api/EmployeeApp/CreateEmployee"
      , data).subscribe({
        next: (res) => {
          this.getEmployeeList();
        },
        error: (error) => {
          alert(error);
        }
      });
  }
  updateEmployee() {
    const data = this.form.value;
    this.http.put("https://api.freeprojectapi.com/api/EmployeeApp/UpdateEmployee/"+this.form.controls["employeeId"].value, data).subscribe({
      next: (res) => {
        this.getEmployeeList();
      },
      error: (error) => {
        alert(error);
      }
    });
  }
  saveDetails() {
    debugger;
    if (this.form.controls["employeeId"].value == 0) {
      this.createEmployee();
    } else {
      this.updateEmployee();
    }
  }
}

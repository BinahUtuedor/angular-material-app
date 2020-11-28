import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../shared//employee.service';
import { DepartmentService } from '../../shared/department.service';
import { NotificationService } from '../../shared/notification.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public service: EmployeeService,
    public departmentService: DepartmentService,
    private notificationSevice: NotificationService) { }

  ngOnInit(): void {
    // getEmployees() must be called before any of the other CRUD functions to first initialize the employeeList in the EmployeeService.
    this.service.getEmployees();
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onSubmit() {
    if(this.service.form.valid) {
      this.service.insertEmployee(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.notificationSevice.success(':: Submitted successfully');
    }
  }

}

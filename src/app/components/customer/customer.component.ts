import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = [];
  dataLoaded = false;
  dataCount = false;
  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.getCustomers();
  }
  getCustomers() {
    this.customerService.getCustomers().subscribe((response) => {
      this.dataCount = response.data.length > 0 ? true:false;
      this.customers = response.data;
      this.dataLoaded = true;
    });
  }
}

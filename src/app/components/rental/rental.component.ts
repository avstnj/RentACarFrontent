import { Component, OnInit } from '@angular/core';
import { RentalDetailModel } from 'src/app/models/rental/rentalDetailModel';
import { RentalService } from 'src/app/services/rental/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
})
export class RentalComponent implements OnInit {
  rentals: RentalDetailModel[] = [];
  dataLoaded = false;
  dataCount = false;
  constructor(private rentalService: RentalService) {}

  ngOnInit(): void {
    this.getAllDetails();
  }
  getAllDetails() {
    this.rentalService.getAllDetails().subscribe((response) => {
      this.dataCount = response.data.length > 0 ? true : false;
      this.rentals = response.data;
      this.dataLoaded = true;
    });
  }
}

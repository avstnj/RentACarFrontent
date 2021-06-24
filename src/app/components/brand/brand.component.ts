import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand/brand';
import { BrandService } from 'src/app/services/brand/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  dataLoaded = false;
  dataCount = false;
  currentBrand: Brand = { id: 0, name: "" };
  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }
  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.dataCount = response.data.length > 0 ? true : false;
      this.brands = response.data;
      this.dataLoaded = true;
    });
  }
  setCurrentBrand(brand: Brand) {
    console.log(brand);
    this.currentBrand = brand;
  }
  getCurrentBrandClass(brand: Brand){
    if(this.currentBrand==brand){
      return "list-group-item active";
    }else{
      return "list-group-item";
    }
  }

}

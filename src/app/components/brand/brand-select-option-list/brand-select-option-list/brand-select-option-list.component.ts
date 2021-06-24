import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Brand } from 'src/app/models/brand/brand';
import { BrandService } from 'src/app/services/brand/brand.service';

@Component({
  selector: 'app-brand-select-option-list',
  templateUrl: './brand-select-option-list.component.html',
  styleUrls: ['./brand-select-option-list.component.css']
})
export class BrandSelectOptionListComponent implements OnInit {
  brands: Brand[] = [];
  dataLoaded = false;
  dataCount = false;
  selectedBrand:string="0";
  @Output() brandFilter = new EventEmitter<string>();
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

  onChange(value:any){
    this.brandFilter.emit(value);
  }

}

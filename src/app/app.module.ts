import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';
import { HttpClientModule } from '@angular/common/http';
import { NaviComponent } from './components/navi/navi.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterCarPipe } from './pipes/filter-car.pipe';
import { FilterBrandPipe } from './pipes/filter-brand.pipe';
import { FilterColorPipe } from './pipes/filter-color.pipe';
import { FormsModule } from '@angular/forms';
import { BrandSelectOptionListComponent } from './components/brand/brand-select-option-list/brand-select-option-list/brand-select-option-list.component';
import { ColorSelectOptionListComponent } from './components/color/color-select-option-list/color-select-option-list/color-select-option-list.component';
import { ToastrModule } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { CreditcardComponent } from './components/creditcard/creditcard.component';
@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    CarComponent,
    RentalComponent,
    NaviComponent,
    CardetailComponent,
    FilterCarPipe,
    FilterBrandPipe,
    FilterColorPipe,
    BrandSelectOptionListComponent,
    ColorSelectOptionListComponent,
    CreditcardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbPaginationModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgbPaginationModule, 
    NgbAlertModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }

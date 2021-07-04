import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Color } from 'src/app/models/color/color';
import { ColorService } from 'src/app/services/color/color.service';

@Component({
  selector: 'app-color-select-option-list',
  templateUrl: './color-select-option-list.component.html',
  styleUrls: ['./color-select-option-list.component.css']
})
export class ColorSelectOptionListComponent implements OnInit {
  colors: Color[] = [];
  dataLoaded = false;
  selectedColor:string;
  @Output() colorFilter = new EventEmitter<string>();

  constructor(private colorService: ColorService) { }

  ngOnInit(): void {
    this.getColor();
  }
  getColor() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
      this.dataLoaded = true;
    });
  }

  // setColor(value: string) {
  // }
  onChange(value:any){
    this.colorFilter.emit(value);
  }

}

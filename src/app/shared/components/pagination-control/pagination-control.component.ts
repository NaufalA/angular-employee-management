import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {ButtonComponent} from "../button/button.component";
import {NgClass, NgForOf} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-pagination-control',
  templateUrl: './pagination-control.component.html',
  styleUrls: ['./pagination-control.component.scss'],
  imports: [
    ButtonComponent,
    NgClass,
    NgForOf
  ]
})
export class PaginationControlComponent implements OnChanges {
  @Input() disabled: boolean = false;
  @Input() page = 0;
  @Input() size = 10;
  @Input() count = 10;
  @Input() totalPages = 10;
  @Input() totalCount = 100;
  @Output() onChangePage = new EventEmitter<number>();
  @Output() onChangeSize = new EventEmitter<number>();

  changePage = (val: number) => {
    this.onChangePage.emit(val);
  }

  changeSize = (val: number) => {
    this.onChangeSize.emit(val);
  }

  pages: any[] = Array(10);

  ngOnChanges() {
    this.pages = Array(this.totalPages);
    console.log(this.pages);
  }
}

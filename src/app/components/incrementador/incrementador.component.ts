import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [],
})
export class IncrementadorComponent implements OnInit {
  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }
  @Input('valueProgress') progress: number = 15;
  @Input() btnClass: string = 'btn-primary';

  @Output() valueOut: EventEmitter<number> = new EventEmitter();

  changeValueBarProgress(value: number) {
    if (this.progress >= 100 && value >= 0) {
      this.valueOut.emit(100);
      return (this.progress = 100);
    }
    if (this.progress <= 100 && value < 0) {
      this.valueOut.emit(0);
      return (this.progress = 0);
    }
    this.progress = this.progress + value;
    this.valueOut.emit(this.progress);
  }

  onChange(newvalue: number) {
    if (newvalue >= 100) {
      this.progress = 100;
    } else if (newvalue <= 0) {
      this.progress = 0;
    } else {
      this.progress = newvalue;
    }
    this.valueOut.emit(this.progress);
  }
}

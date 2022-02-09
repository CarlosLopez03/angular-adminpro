import { Component } from '@angular/core';

@Component({
  selector: 'app-graphic1',
  templateUrl: './graphic1.component.html',
  styles: [],
})
export class Graphic1Component {
  public labels1 = ['Tacos', 'Cervezas', 'Whisky'];
  public data1 = {
    labels: this.labels1,
    datasets: [{ data: [999, 450, 777] }],
  };
}

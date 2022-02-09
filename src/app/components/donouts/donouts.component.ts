import { Component, Input } from '@angular/core';

import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-donouts',
  templateUrl: './donouts.component.html',
  styles: [],
})
export class DonoutsComponent {
  @Input() title: string = 'Sin titulo';

  @Input('labels') doughnutChartLabels: string[] = [
    'Label1',
    'Label2',
    'Label3',
  ];
  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{ data: [350, 450, 100] }, { data: [50, 150, 120] }],
  };
  public doughnutChartType: ChartType = 'doughnut';
}

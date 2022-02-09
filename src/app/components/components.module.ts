import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgChartsModule } from 'ng2-charts';

import { IncrementadorComponent } from './incrementador/incrementador.component';
import { DonoutsComponent } from './donouts/donouts.component';

@NgModule({
  declarations: [IncrementadorComponent, DonoutsComponent],
  imports: [CommonModule, FormsModule, NgChartsModule],
  exports: [IncrementadorComponent, DonoutsComponent],
})
export class ComponentsModule {}

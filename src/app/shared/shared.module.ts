import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { SidebardComponent } from './sidebard/sidebard.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [BreadcrumbsComponent, SidebardComponent, HeaderComponent],
  exports: [BreadcrumbsComponent, SidebardComponent, HeaderComponent],
  imports: [CommonModule],
})
export class SharedModule {}

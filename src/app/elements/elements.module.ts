import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  SharedModule  } from "../shared/shared.module";
import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { TimesDirective } from './times.directive';
import { SegmentsComponent } from './segments/segments.component';


@NgModule({
  declarations: [ElementsHomeComponent, PlaceholderComponent, TimesDirective, SegmentsComponent],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule
  ],
})
export class ElementsModule { }

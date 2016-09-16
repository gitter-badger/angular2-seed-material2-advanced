import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import {PlatformModule} from "../../../platform.module";


@NgModule({
  imports: [
    CommonModule,
    PlatformModule
  ],
  declarations: [AboutComponent],
  exports: [AboutComponent]
})
export class AboutModule { }

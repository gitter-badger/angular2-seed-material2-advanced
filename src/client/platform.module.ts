import { NgModule } from '@angular/core';
import {MaterialModule} from "./app/frameworks/material/material.module";


@NgModule({
  imports: [MaterialModule.forRoot()],
  exports: [MaterialModule]
})
export class PlatformModule { }

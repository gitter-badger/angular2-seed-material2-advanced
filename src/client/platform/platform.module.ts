import { NgModule } from '@angular/core';
import {MaterialModule} from './material/material.module';


/**
 * This module contains platform specific imports. This version holds any web-only imports. A different file
 * by the same name appears in the nativescript directory that will not load material design imports.
 */
@NgModule({
  imports: [MaterialModule.forRoot()],
  exports: [MaterialModule]
})
export class PlatformModule { }

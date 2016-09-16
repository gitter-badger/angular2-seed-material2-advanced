import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import {NameListService} from "../../frameworks/sample/services/name-list.service";
import {MdListModule} from '@angular2-material/list';
import { MdCardModule } from '@angular2-material/card';
import {MdInputModule} from '@angular2-material/input';
import {MultilingualModule} from "../../frameworks/i18n/multilingual.module";

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdListModule,
    MultilingualModule,
    FormsModule,
    MdInputModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: [NameListService]
})
export class HomeModule { }

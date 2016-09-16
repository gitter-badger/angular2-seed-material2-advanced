import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { NameListService } from '../../frameworks/sample/services/name-list.service';
import { MultilingualModule } from '../../frameworks/i18n/multilingual.module';
import {PlatformModule} from "../../../platform/index";

@NgModule({
  imports: [
    CommonModule,
    MultilingualModule,
    PlatformModule,
    FormsModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: [NameListService]
})
export class HomeModule { }

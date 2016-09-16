// angular
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// libs
import { StoreModule } from '@ngrx/store';

// app
import { ToolbarComponent } from './components/toolbar.component';
import { NavbarComponent } from './components/navbar.component';
import { nameListReducer, NameListService } from './services/name-list.service';
import { MultilingualModule } from '../i18n/multilingual.module';
import { multilingualReducer, MultilingualStateI } from '../i18n/services/multilingual.service';
import {PlatformModule} from "../../../platform.module";

// state
export interface AppStoreI {
  i18n: MultilingualStateI;
  names: Array<string>;
};

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MultilingualModule,
    PlatformModule,
    StoreModule.provideStore({
      i18n: multilingualReducer,
      names: nameListReducer
    })
  ],
  declarations: [
    ToolbarComponent,
    NavbarComponent
  ],
  providers: [
    NameListService
  ],
  exports: [
    ToolbarComponent,
    NavbarComponent,
    CommonModule,
    FormsModule,
    PlatformModule,
    RouterModule
  ]
})
export class SampleModule {

  constructor(@Optional() @SkipSelf() parentModule: SampleModule) {
    if (parentModule) {
      throw new Error('SampleModule already loaded; Import in root module only.');
    }
  }
}

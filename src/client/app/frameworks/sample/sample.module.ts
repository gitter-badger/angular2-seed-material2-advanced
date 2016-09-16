// angular
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// libs
import { StoreModule } from '@ngrx/store';
import { MdButtonModule } from '@angular2-material/button';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdIconModule, MdIconRegistry } from '@angular2-material/icon';

// app
import { ToolbarComponent } from './components/toolbar.component';
import { NavbarComponent } from './components/navbar.component';
import { nameListReducer, NameListService } from './services/name-list.service';
import { MultilingualModule } from '../i18n/multilingual.module';
import { multilingualReducer, MultilingualStateI } from '../i18n/services/multilingual.service';
import { MaterialModule } from '../material/material.module';

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
    MdButtonModule,
    MdToolbarModule,
    MdIconModule,
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
    NameListService,
    MdIconRegistry
  ],
  exports: [
    ToolbarComponent,
    NavbarComponent,
    CommonModule,
    FormsModule,
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

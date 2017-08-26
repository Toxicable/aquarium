import {MdInputModule} from '@angular/material';
import {NgModule } from '@angular/core';
import {MdSidenavModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {MdSliderModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdSelectModule} from '@angular/material';
import {MdTabsModule} from '@angular/material';
import {MdSnackBarModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import {MdGridListModule} from '@angular/material';

const IMPORTS = [
  MdTabsModule,
  MdInputModule,
  MdSidenavModule,
  MdToolbarModule,
  MdSliderModule,
  MdButtonModule,
  MdSelectModule,
  MdSnackBarModule,
  MdIconModule,
  MdGridListModule,
]

@NgModule({
  imports: [
    IMPORTS
  ],
  exports: [
    IMPORTS
  ]
})
export class AppMaterialModule { }

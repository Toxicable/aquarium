import {MdInputModule} from '@angular/material';
import {NgModule } from '@angular/core';
import {MdSidenavModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {MdSliderModule} from '@angular/material';

const IMPORTS = [
  MdInputModule,
  MdSidenavModule,
  MdToolbarModule,
  MdSliderModule,
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

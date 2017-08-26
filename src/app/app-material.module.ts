import {MdInputModule} from '@angular/material';
import {NgModule } from '@angular/core';
import {MdSidenavModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {MdSliderModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';

const IMPORTS = [
  MdInputModule,
  MdSidenavModule,
  MdToolbarModule,
  MdSliderModule,
  MdButtonModule,
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

import {MdInputModule} from '@angular/material';
import {NgModule } from '@angular/core';
import {MdSidenavModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';

const IMPORTS = [
  MdInputModule,
  MdSidenavModule,
  MdToolbarModule
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

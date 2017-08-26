import {MdInputModule} from '@angular/material';
import {NgModule } from '@angular/core';

const IMPORTS = [
  MdInputModule
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

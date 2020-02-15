import { NgModule } from '@angular/core';
import { NgPersonComponent } from './ng-person.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [NgPersonComponent],
  imports: [
    CommonModule
  ],
  exports: [NgPersonComponent]
})
export class NgPersonModule { }

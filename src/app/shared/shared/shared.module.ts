import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleAlertComponent } from '../sample-alert/sample-alert.component';



@NgModule({
  declarations: [SampleAlertComponent],
  imports: [
    CommonModule
  ],
  exports:[SampleAlertComponent]
})
export class SharedModule { }

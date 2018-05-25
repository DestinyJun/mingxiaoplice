import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisputeComponent } from './dispute.component';
import {DisputeRoutersModule} from './dispute.routers.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MainDisputeComponent} from './main-dispute/main-dispute.component';
import { FormDisputeComponent } from './form-dispute/form-dispute.component';

@NgModule({
  imports: [
    CommonModule,
    DisputeRoutersModule,
    ReactiveFormsModule
  ],
  declarations: [DisputeComponent, MainDisputeComponent, FormDisputeComponent]
})
export class DisputeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkflowComponent } from './workflow.component';
import {WorkflowRoutersModule} from './workflow.routers.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    WorkflowRoutersModule,
    ReactiveFormsModule
  ],
  declarations: [WorkflowComponent]
})
export class WorkflowModule { }

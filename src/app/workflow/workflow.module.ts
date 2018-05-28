import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkflowComponent } from './workflow.component';
import {WorkflowRoutersModule} from './workflow.routers.module';
import {ReactiveFormsModule} from '@angular/forms';
import { MianWorkflowComponent } from './mian-workflow/mian-workflow.component';
import { FromWorkflowComponent } from './from-workflow/from-workflow.component';

@NgModule({
  imports: [
    CommonModule,
    WorkflowRoutersModule,
    ReactiveFormsModule
  ],
  declarations: [WorkflowComponent, MianWorkflowComponent, FromWorkflowComponent]
})
export class WorkflowModule { }

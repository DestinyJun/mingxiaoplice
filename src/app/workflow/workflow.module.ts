import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkflowComponent } from './workflow.component';
import {WorkflowRoutersModule} from './workflow.routers.module';
import {ReactiveFormsModule} from '@angular/forms';
import { MianWorkflowComponent } from './mian-workflow/mian-workflow.component';
import { FromWorkflowComponent } from './from-workflow/from-workflow.component';
import { BaiduMapModule } from 'angular2-baidu-map';

@NgModule({
  imports: [
    CommonModule,
    WorkflowRoutersModule,
    ReactiveFormsModule,
    BaiduMapModule.forRoot({ ak: 'nc5Hm3Yt5iNdYtUTSwgB7Kc6Tw8PsO0U'})
  ],
  declarations: [WorkflowComponent, MianWorkflowComponent, FromWorkflowComponent]
})
export class WorkflowModule { }

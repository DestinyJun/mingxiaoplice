import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WorkflowComponent} from './workflow.component';
import {MianWorkflowComponent} from './mian-workflow/mian-workflow.component';
import {FromWorkflowComponent} from './from-workflow/from-workflow.component';
const loginRoutes: Routes = [
  {
    path: '',
    component: WorkflowComponent,
    children: [
      {path: '', redirectTo: 'main', pathMatch: 'full'},
      {path: 'main', component: MianWorkflowComponent},
      {path: 'formwork', component: FromWorkflowComponent}
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule],
  providers: []
})
export class WorkflowRoutersModule {}

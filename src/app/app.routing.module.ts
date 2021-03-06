import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
const routes: Routes = [
  {path: '', redirectTo: 'life', pathMatch: 'full'},
  {path: 'login', loadChildren: 'app/login/login.module#LoginModule'},
  {path: 'register', loadChildren: 'app/register/register.module#RegisterModule'},
  {path: 'alarm', loadChildren: 'app/alarm/alarm.module#AlarmModule'},
  {path: 'dispute', loadChildren: 'app/dispute/dispute.module#DisputeModule'},
  {path: 'workflow', loadChildren: 'app/workflow/workflow.module#WorkflowModule'},
  {path: 'feedback', loadChildren: 'app/feedback/feedback.module#FeedbackModule'},
  {path: 'life', loadChildren: 'app/life/life.module#LifeModule'},
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

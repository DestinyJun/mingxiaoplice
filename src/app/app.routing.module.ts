import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
const routes: Routes = [
  {path: '', redirectTo: 'dispute', pathMatch: 'full'},
  {path: 'login', loadChildren: 'app/login/login.module#LoginModule'},
  {path: 'register', loadChildren: 'app/register/register.module#RegisterModule'},
  {path: 'alarm', loadChildren: 'app/alarm/alarm.module#AlarmModule'},
  {path: 'dispute', loadChildren: 'app/dispute/dispute.module#DisputeModule'},
  {path: 'workflow', loadChildren: 'app/workflow/workflow.module#WorkflowModule'},
  /*{path: 'registerrs', component: RegisterRsComponent},
  {path: 'register/:invitecode/:name', component: RegisterComponent},
  {path: 'home', component: HomeComponent, canActivate: [LoginGuard]},
  {path: 'audit/:loginName/:grade', component: AuditListComponent},
  {path: 'friend/:title/:loginName', component: FriendInfoComponent},
  {path: 'qrcode/:name/:invitecode', component: QrcodeComponent}*/
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DisputeComponent} from './dispute.component';
import {MainDisputeComponent} from './main-dispute/main-dispute.component';
import {FormDisputeComponent} from './form-dispute/form-dispute.component';
const loginRoutes: Routes = [
  {
    path: '',
    component: DisputeComponent,
    children: [
      {path: '', redirectTo: 'disform', pathMatch: 'full'},
      // {path: 'main', component: MainDisputeComponent},
      {path: 'disform', component: FormDisputeComponent}
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule],
  providers: []
})
export class DisputeRoutersModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FeedbackComponent} from './feedback.component';
import {MianFeedbackComponent} from './mian-feedback/mian-feedback.component';
import {FromFeedbackComponent} from './from-feedback/from-feedback.component';
const loginRoutes: Routes = [
  {
    path: '',
    component: FeedbackComponent,
    children: [
      {path: '', redirectTo: 'main', pathMatch: 'full'},
      {path: 'main', component: MianFeedbackComponent},
      {path: 'formwork', component: FromFeedbackComponent}
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule],
  providers: []
})
export class FeedbackRoutersModule {}

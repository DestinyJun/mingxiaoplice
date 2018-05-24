import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TransactionComponent} from './transaction.component';
const loginRoutes: Routes = [
  {
    path: '',
    component: TransactionComponent,
    children: [
      // {path: '', redirectTo: 'main', pathMatch: 'full'},
      // {path: 'main', component: MainTransactionComponent}
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule],
  providers: []
})
export class TransactionRoutersModule {}

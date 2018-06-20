import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LifeComponent} from './life.component';
import {LifeMainComponent} from './life-main/life-main.component';
import {LifeListComponent} from './life-list/life-list.component';
const loginRoutes: Routes = [
  {
    path: '',
    component: LifeComponent,
    children: [
      {path: '', redirectTo: 'main', pathMatch: 'full'},
      {path: 'main', component: LifeMainComponent},
      {path: 'list', component: LifeListComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule],
  providers: []
})
export class LifeRoutersModule {}

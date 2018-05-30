import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AlarmComponent} from './alarm.component';
import {MainAlarmComponent} from './main-alarm/main-alarm.component';
import {FormAlarmComponent} from './form-alarm/form-alarm.component';
const loginRoutes: Routes = [
  {
    path: '',
    component: AlarmComponent,
    children: [
      {path: '', redirectTo: 'main', pathMatch: 'full'},
      {path: 'main', component: MainAlarmComponent},
      {path: 'alarmf', component: FormAlarmComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule],
  providers: []
})
export class AlarmRoutersModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AlarmComponent} from './alarm.component';
import {SecurityAlarmComponent} from './security-alarm/security-alarm.component';
import {PenalAlarmComponent} from './penal-alarm/penal-alarm.component';
import {SafetyAlarmComponent} from './safety-alarm/safety-alarm.component';
import {MainAlarmComponent} from './main-alarm/main-alarm.component';
const loginRoutes: Routes = [
  {
    path: '',
    component: AlarmComponent,
    children: [
      {path: '', redirectTo: 'main', pathMatch: 'full'},
      {path: 'main', component: MainAlarmComponent},
      {path: 'security', component: SecurityAlarmComponent},
      {path: 'penal', component: PenalAlarmComponent},
      {path: 'safety', component: SafetyAlarmComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule],
  providers: []
})
export class AlarmRoutersModule {}

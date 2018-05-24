import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlarmComponent } from './alarm.component';
import {AlarmRoutersModule} from './alarm.routers.module';
import { SecurityAlarmComponent } from './security-alarm/security-alarm.component';
import { PenalAlarmComponent } from './penal-alarm/penal-alarm.component';
import { SafetyAlarmComponent } from './safety-alarm/safety-alarm.component';
import { MainAlarmComponent } from './main-alarm/main-alarm.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CluesAlarmComponent } from './clues-alarm/clues-alarm.component';

@NgModule({
  imports: [
    CommonModule,
    AlarmRoutersModule,
    ReactiveFormsModule
  ],
  declarations: [AlarmComponent, SecurityAlarmComponent, PenalAlarmComponent, SafetyAlarmComponent, MainAlarmComponent, CluesAlarmComponent]
})
export class AlarmModule { }

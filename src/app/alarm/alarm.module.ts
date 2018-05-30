import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlarmComponent } from './alarm.component';
import {AlarmRoutersModule} from './alarm.routers.module';
import { MainAlarmComponent } from './main-alarm/main-alarm.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormAlarmComponent} from './form-alarm/form-alarm.component';

@NgModule({
  imports: [
    CommonModule,
    AlarmRoutersModule,
    ReactiveFormsModule
  ],
  declarations: [
    AlarmComponent,
    FormAlarmComponent,
    MainAlarmComponent,
  ]
})
export class AlarmModule { }

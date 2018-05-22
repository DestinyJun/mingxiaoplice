import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegisterRoutersModule} from './register.routers.module';
import {RegisterComponent} from './register.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RegisterRoutersModule
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }

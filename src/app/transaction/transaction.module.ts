import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from './transaction.component';
import {TransactionRoutersModule} from './transaction.routers.module';

@NgModule({
  imports: [
    CommonModule,
    TransactionRoutersModule
  ],
  declarations: [TransactionComponent]
})
export class TransactionModule { }

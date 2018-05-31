import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { BaiduMapModule } from 'angular2-baidu-map';
import {MianFeedbackComponent} from './mian-feedback/mian-feedback.component';
import {FromFeedbackComponent} from './from-feedback/from-feedback.component';
import {FeedbackRoutersModule} from './feedback.routers.module';
import {FeedbackComponent} from './feedback.component';

@NgModule({
  imports: [
    CommonModule,
    FeedbackRoutersModule,
    ReactiveFormsModule,
    BaiduMapModule.forRoot({ ak: 'nc5Hm3Yt5iNdYtUTSwgB7Kc6Tw8PsO0U'})
  ],
  declarations: [FeedbackComponent, MianFeedbackComponent, FromFeedbackComponent]
})
export class FeedbackModule { }

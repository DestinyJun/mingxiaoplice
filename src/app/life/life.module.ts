import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LifeComponent} from './life.component';
import {LifeMainComponent} from './life-main/life-main.component';
import {LifeRoutersModule} from './life.routers.module';
import {LifeListComponent} from './life-list/life-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LifeRoutersModule,
    ModalModule.forRoot()
  ],
  declarations: [LifeComponent, LifeMainComponent, LifeListComponent]
})
export class LifeModule {
}

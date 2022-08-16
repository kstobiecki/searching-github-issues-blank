import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {IssuesComponents} from './components';
import {SharedServices} from '../../shared/services';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../../material/material.module';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule
  ],
  exports: [
    ...IssuesComponents
  ],
  declarations: [
    ...IssuesComponents
  ],
  providers: [
    ...SharedServices
  ]
})
export class IssuesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { AboutComponent } from './about/about.component';
import { AboutRoutingModule } from './about-routing.module'

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatListModule
  ]
})
export class AboutModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { GalleryComponent } from './gallery/gallery.component';
import { DialogContentImg } from './gallery/gallery.component';
import { GalleryRoutingModule } from './gallery-routing.module';


@NgModule({
  declarations: [
    GalleryComponent,
    DialogContentImg,
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    MatDialogModule,
  ]
})
export class GalleryModule { }

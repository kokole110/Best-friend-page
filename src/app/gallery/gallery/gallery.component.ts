import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(event: Event){
    let el = event.target as HTMLImageElement;
    const dialogRef = this.dialog.open(DialogContentImg, {
      data: {
        imgUrl: el.getAttribute('src')
      }
    });
  }
}

@Component({
  selector: 'dialog-content-img',
  template: `<mat-dialog-content class="">
              <img src="{{ imageUrl }}" class="img-fluid dialog-img">
            </mat-dialog-content>`,
  styles: ['.dialog-img {max-height: 80vh;}']
})
export class DialogContentImg {
  imageUrl!: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.imageUrl = this.data.imgUrl;
  }
}

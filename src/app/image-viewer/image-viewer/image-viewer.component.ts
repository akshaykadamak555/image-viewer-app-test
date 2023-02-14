import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ImageViewerService } from '../image-viewer.service';
import { ImageViewer } from '../image-viewer.types';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss'],
})
export class ImageViewerComponent implements OnInit {
 @ViewChild('sidenav') sidenav: MatSidenav;
  imageData: ImageViewer = {
    imagePath: 'assets/hp-laptop.png',
    name: 'Hp 15s-fq5111TU Thin',
    size: '54.4 KB',
    caption: 'Configuration - HP 15s Intel Core i5 12th Gen - (8 GB/512 GB SSD/Windows 11 Home) 15s-fq5111TU Thin and Light Laptop  (15.6 inch, Natural Silver, 1.69 Kg, With MS Office)',
    width: '400',
    height: '400',
  };

  constructor(private imageViewerService: ImageViewerService) {
  }
  ngOnInit(): void {
    this.imageViewerService.imageInfo.next(this.imageData);
    this.imageViewerService.imageInfo.subscribe(result => {
      this.imageData = result;
    });

    this.imageViewerService.sidebarState.subscribe(state => {
      if(state) {
        this.sidenav.close();
      }
    })
  }
}

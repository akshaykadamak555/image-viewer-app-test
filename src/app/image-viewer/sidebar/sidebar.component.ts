import { Component, OnInit } from '@angular/core';
import { ImageViewerService } from '../image-viewer.service';
import { ImageViewer } from '../image-viewer.types';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  imageData: ImageViewer;

  constructor(private imageViewerService: ImageViewerService) {
  }

  ngOnInit(): void {
    this.imageViewerService.imageInfo.subscribe(result => {
      this.imageData = JSON.parse(JSON.stringify(result));
    })
  }

  onSave(): void {
    this.imageViewerService.imageInfo.next(this.imageData);
    this.imageViewerService.sidebarState.next(true);
  }

  onClose(): void {
    this.imageViewerService.sidebarState.next(true);
  }
}

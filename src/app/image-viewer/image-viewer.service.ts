import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ImageViewer } from './image-viewer.types';

@Injectable({
  providedIn: 'root',
})
export class ImageViewerService {
  imageInfo = new BehaviorSubject<ImageViewer>({});
  sidebarState = new BehaviorSubject<any>(false);
  constructor() {}
}

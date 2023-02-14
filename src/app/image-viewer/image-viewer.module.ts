import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageViewerRoutingModule } from './image-viewer-routing.module';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ImageViewerComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    ImageViewerRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    FormsModule
  ]
})
export class ImageViewerModule { }

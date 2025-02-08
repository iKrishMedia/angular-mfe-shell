import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './photos.component';

const routes: Routes = [
  {
    path: '',
    component: PhotosComponent,
  },
];
@NgModule({
  declarations: [PhotosComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PhotosModule {}

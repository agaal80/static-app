import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosComponent } from '../app/media/photos/photos.component';
import { AlbumsComponent } from '../app/media/albums/albums.component';

const appRoutes: Routes = [
  {path: 'photos', component: PhotosComponent},
  {path: 'albums', component: AlbumsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    AlbumsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

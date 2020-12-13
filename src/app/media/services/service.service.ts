import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
  getAlbums() {
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }
  // tslint:disable-next-line:typedef
  getPhotos(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }
}

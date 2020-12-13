import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.sass']
})
export class PhotosComponent implements OnInit {
  public photoResults: any;
  constructor(private service: ServiceService) { }
  ngOnInit(): void {
    this.service.getPhotos().subscribe((results) => {
      this.photoResults = results;
    });
  }

}

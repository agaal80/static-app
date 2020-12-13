import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.sass']
})
export class AlbumsComponent implements OnInit {
  public albumResults: any;
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.getAlbums().subscribe((results) => {
      this.albumResults = results;
    });
  }

}

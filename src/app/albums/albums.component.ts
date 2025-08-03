import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";

@Component({
  selector: 'app-albums',
  imports: [
      CommonModule,
      MatIconModule,
    MatTooltipModule
  ],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.scss'
})
export class AlbumsComponent {
  albums = ALBUMS
  protected readonly ALBUMS = ALBUMS;
}

interface Album {
  name: string;
  date: string;
  imageURL: string;
  dittoURL: string;
  bandcampURL: string;
}

const ALBUMS: Album[] = [
  {
    name: 'On Our Way',
    date: '2023',
    imageURL: '/on-our-way.jpg',
    dittoURL: 'https://ditto.fm/on-our-way-shorthop',
    bandcampURL: 'https://shorthop.bandcamp.com/album/on-our-way',
  },
  {
    name: 'Grow',
    date: '2022',
    imageURL: '/grow.jpg',
    dittoURL: 'https://ditto.fm/grow-shorthop',
    bandcampURL: 'https://shorthop.bandcamp.com/album/grow',
  },
  {
    name: 'Simplicity',
    date: '2019',
    imageURL: '/simplicity.jpg',
    dittoURL: 'https://ditto.fm/simplicity-shorthop',
    bandcampURL: 'https://shorthop.bandcamp.com/album/simplicity',
  }
]

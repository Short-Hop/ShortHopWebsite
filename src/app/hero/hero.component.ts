import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {AlbumsComponent} from "../albums/albums.component";

@Component({
  selector: 'app-hero.component',
  imports: [
      CommonModule,
      MatButtonModule,
      AlbumsComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}

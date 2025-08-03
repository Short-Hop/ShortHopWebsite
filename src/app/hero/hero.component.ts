import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {AlbumsComponent} from "../albums/albums.component";
import {SocialsComponent} from "../socials/socials.component";

@Component({
  selector: 'app-hero.component',
  imports: [
      CommonModule,
      MatButtonModule,
      AlbumsComponent,
      SocialsComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}

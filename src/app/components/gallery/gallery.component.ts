import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  public cards: number[] = [];

  ngOnInit() {
    for (let i = 0; i < 152; i++) {
      this.cards.push(i);
    }
  }
}

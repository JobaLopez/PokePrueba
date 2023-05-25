import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CardComponent } from './components/card/card.component';
import { IMAGE_LOADER, ImageLoaderConfig, NgOptimizedImage } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [{ 
    provide: IMAGE_LOADER, 
    useValue: (config: ImageLoaderConfig) => { 
      return `https://pokemonprueba.azureedge.net/gen-1/${config.src}.png` } 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

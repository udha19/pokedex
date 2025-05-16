import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from './components/detail/detail.component';
import { CardComponent } from './components/card/card.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import {
  LucideAngularModule,
  Sun,
  Moon,
  FilePenLine,
  ListPlus,
  AlignJustify,
  ImagePlus,
  SeparatorHorizontal,
  MessageSquareCode,
  Pencil,
  CircleX,
  Type,
  FileUp,
  Save,
  FileSearch2,
  Trash
} from 'lucide-angular';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    CardComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    LucideAngularModule.pick({
      Moon,
      Sun,
      FilePenLine,
      ListPlus,
      FileUp,
      AlignJustify,
      ImagePlus,
      SeparatorHorizontal,
      CircleX,
      MessageSquareCode,
      Save,
      Type,
      Pencil,
      FileSearch2,
      Trash
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

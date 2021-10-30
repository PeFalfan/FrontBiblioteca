import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { PiePaginaComponent } from './components/pie-pagina/pie-pagina.component';
import { AdminComponent } from './components/admin/admin.component';
import { AnimeComponent } from './components/anime/anime.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CabeceraComponent,
    PiePaginaComponent,
    AdminComponent,
    AnimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

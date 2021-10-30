import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss']
})
export class AnimeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.cargarAnimes();
  }

  async cargarAnimes(){
    fetch('http://localhost:8080/animes', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => response.json()).then(
      json => console.log(json)
    );

  }


  // TODO -- PRACTICAR ASYNC
  /*
  async cargarAnimes(){
    const request = await fetch('http//localhost:8080/animes', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'secure': 'false'
      }
    });
    const animes = await request.json;

    console.log(animes);
  }
  */
}

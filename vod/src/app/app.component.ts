import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediaService } from './services/index';

import { CATEGORY, VIDEO } from './models/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private categories: CATEGORY[];
  private videos: VIDEO[];
  private query: string;
  private user: string;

  constructor(private mediaService:MediaService, private router: Router){
    this.query = '';
  }

  ngOnInit(){
    this.getVideos();
    this.getCategories();
    this.login();
  }

  public login(){
    this.user = localStorage.getItem('user');
  }

  private logout(){
    localStorage.removeItem('user');
    this.user = null;
    this.router.navigate(['/start']);
  }

  private search(){
    this.router.navigate(['./filmy', '', this.query]);
  }
  
  private getCategories(){
    this.categories = this.mediaService.Categories();
  }

  private getVideos():void{
    this.videos = this.mediaService.Videos();
  }

}

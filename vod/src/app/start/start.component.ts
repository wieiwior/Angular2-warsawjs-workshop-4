import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediaService } from './../services/index';
import { CATEGORY, VIDEO } from './../models/index';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})

export class StartComponent implements OnInit {

  private categories: CATEGORY[];
  private videos: VIDEO[];
  private query: string;

  constructor(private mediaService:MediaService, private router: Router) { 
    this.query = '';
  }

  ngOnInit() {
    this.getCategories();
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

  private goCategory(category){
    this.router.navigate(['./filmy', category,'']);
  }

}

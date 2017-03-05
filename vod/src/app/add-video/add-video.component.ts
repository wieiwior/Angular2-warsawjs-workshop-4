import { Component, OnInit } from '@angular/core';
import { MediaService } from './../services/index';
import { CATEGORY, VIDEO } from './../models/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {
  
  private message: string;
  private categories: CATEGORY[];

  constructor(private mediaService:MediaService, private router: Router) { 
  }

  ngOnInit() {
    this.getCategories();
  }
  
  private getCategories(){
    this.categories = this.mediaService.Categories();
  }
  public addNewVideo(e){
        let title = e['title'].value;
        let description = e['description'].value;
        let categoryId = e['categoryId'].value;
        let is_free = e['is_free'].value;
        let populary = e['populary'].value;
        let id = e['hash'].value;
        let img = e['img'].value;    
        this.mediaService.addNewVideo(new VIDEO(title, description, categoryId, is_free, populary, id, img));
        this.router.navigate(['./filmy', this.mediaService.getNameById(categoryId), '']);
  }
}

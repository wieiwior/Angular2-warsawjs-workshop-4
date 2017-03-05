import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MediaService } from './../services/index';
import { VIDEO } from './../models/index';

import { SavePipe } from './../pipes/save.pipe';

@Component({
  selector: 'app-video-profile',
  templateUrl: './video-profile.component.html',
  styleUrls: ['./video-profile.component.css']
})
export class VideoProfileComponent implements OnInit {

  private id:string;
  private video:VIDEO;
  private yturl: string = ''; 
  private access:any;

  constructor(private activatedRoute: ActivatedRoute, private mediaService:MediaService) {
    this.activatedRoute.params.subscribe(
      (param: any) => {
        this.id = param['ytid'];
        this.getVideo();
      });
   }

  ngOnInit() {
    this.getVideo();    
  }

  private getVideo():void{
    let t = this;
    this.video = this.mediaService.Videos().filter(function(e:VIDEO){
      return e.id == t.id;
    })[0];

    this.access = this.video.is_free;
    this.yturl = 'https://www.youtube.com/embed/' + this.video.id + '?autoplay=0&color=white'

    if(localStorage.getItem('user')){
      this.access = true;
    }
  }

}

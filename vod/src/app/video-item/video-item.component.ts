import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { VIDEO } from './../models/index';


@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.css']
})
export class VideoItemComponent implements OnInit {

  @Input('video') video: VIDEO;

  private description: string;
  private title: string;

  constructor(private router: Router) {}

  ngOnInit() {
    if (this.video.description.length > 50) {
      this.description = this.video.description.substr(0, 50) + ' ...'
    } else {
      this.description = this.video.description;
    }

    if (this.video.title.length > 20) {
      this.title = this.video.title.substr(0, 20) + ' ...'
    } else {
      this.title = this.video.title;
    }
  }

  private profile(id){
    this.router.navigate(['./profile', id]);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MediaService } from './../services/index';
import { VIDEO, CATEGORY } from './../models/index';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  private categorySelected: string;
  private query: string;
  private videos: VIDEO[];
  private categories: CATEGORY[];

  private isLogged = false;

  constructor(private mediaService: MediaService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(
      (param: any) => {
        this.categorySelected = param['category'];
        this.query = param['query'];
        this.getCatregories();
        this.getVideos();
      });
  }

  ngOnInit() {
    this.getCatregories();
    this.getVideos();
  }

  private getCatregories(): void {
    this.categories = this.mediaService.Categories();
  }

  private getVideos(): void {
    let t = this;
    if (this.categorySelected) {

      let categoryId = this.categories.filter(function (e: CATEGORY) {
        return e.name == t.categorySelected
      })[0].id;

      this.videos = this.mediaService.Videos().filter(
        function (e: VIDEO) {
          return e.category == categoryId
        });

    } else if (this.query) {

      this.videos = this.mediaService.Videos().filter(
        function (e: VIDEO) {
          return e.title.indexOf(t.query) !== -1
        });

    }

  }

  private sort(direct) {
    this.videos = this.videos.sort(function (a, b) {
      var x = a['title']; 
      var y = b['title'];
      if (direct == 'asc') {
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      } else {
        return ((x > y) ? -1 : ((x < y) ? 1 : 0));
      }
    });
  }

}

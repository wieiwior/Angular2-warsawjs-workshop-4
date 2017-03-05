import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

import { LocationStrategy, PathLocationStrategy, HashLocationStrategy } from '@angular/common';

//services
import { MediaService} from './services/index'

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { VideosComponent } from './videos/videos.component';
import { VideoItemComponent } from './video-item/video-item.component';
import { VideoProfileComponent } from './video-profile/video-profile.component';
import { SavePipe } from './pipes/save.pipe';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddVideoComponent } from './add-video/add-video.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    VideosComponent,
    VideoItemComponent,
    VideoProfileComponent,
    SavePipe,
    LoginComponent,
    RegisterComponent,
    AddVideoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    MediaService,
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

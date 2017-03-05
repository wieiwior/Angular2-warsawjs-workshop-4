import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { VideosComponent } from './videos/videos.component';
import { VideoProfileComponent } from './video-profile/video-profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddVideoComponent } from './add-video/add-video.component';

const appRoutes: Routes = [

   { path: 'start', component: StartComponent },
   { path: 'filmy/:category/:query', component: VideosComponent },
   { path: 'profile/:ytid', component: VideoProfileComponent },
   { path: 'zaloguj', component: LoginComponent},
   { path: 'zarejestruj', component: RegisterComponent},
   { path: 'dodajVideo', component: AddVideoComponent},

  // otherwise redirect to home
  { path: '**', redirectTo: 'start' }
];

export const routing = RouterModule.forRoot(appRoutes, {useHash: true});
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageStreamVideoComponent } from './pages/page-stream-video/page-stream-video.component';
import { PageUsersComponent } from './pages/page-users/page-users.component';
import { PageVideosComponent } from './pages/page-videos/page-videos.component';

const routes: Routes = [
  {path: 'users', component: PageUsersComponent},
  {path: 'videos', component: PageVideosComponent},
  {path: 'stream/:filename', component: PageStreamVideoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

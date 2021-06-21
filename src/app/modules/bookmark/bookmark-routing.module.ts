import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmarkPageComponent } from './pages/bookmark-page/bookmark-page.component';


const routes: Routes = [
  {
    path: '', component: BookmarkPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookmarkoutingModule { }

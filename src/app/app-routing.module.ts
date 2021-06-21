import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    redirectTo: 'bookmark',
    pathMatch: 'full'
  },
  {
    path: 'bookmark',
    loadChildren: () => import('./modules/bookmark/bookmark.module').then(m => m.BookmarkModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

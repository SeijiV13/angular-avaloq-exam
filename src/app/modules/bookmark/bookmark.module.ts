import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkPageComponent } from './pages/bookmark-page/bookmark-page.component';
import { BookmarkItemComponent } from './components/bookmark-item/bookmark-item.component';
import {MatCardModule} from '@angular/material/card'


@NgModule({
  declarations: [BookmarkPageComponent, BookmarkItemComponent],
  imports: [
    CommonModule,
    //Material Modules
    MatCardModule
  ]
})
export class BookmarkModule { }

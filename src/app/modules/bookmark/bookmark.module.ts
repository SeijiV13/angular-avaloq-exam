import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkPageComponent } from './pages/bookmark-page/bookmark-page.component';
import { BookmarkItemComponent } from './components/bookmark-item/bookmark-item.component';
import { BookmarkoutingModule } from './bookmark-routing.module';
import { BookmarkFormComponent } from './components/bookmark-form/bookmark-form.component';

import { ModalModule } from 'src/app/shared/modules/modal/modal.module';

import { MatCardModule, MatIconModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import * as fromBookmark from './states/bookmark.reducer';
@NgModule({
  declarations: [BookmarkPageComponent, BookmarkItemComponent, BookmarkFormComponent],
  imports: [
    // Routes
    BookmarkoutingModule,
    CommonModule,
    // Material Modules
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    //Shared Module
    ModalModule,
    //Forms Module
    FormsModule,
    ReactiveFormsModule,
    //Store
    StoreModule.forFeature(fromBookmark.bookmarkFeatureKey, fromBookmark.reducer)
  ]
})
export class BookmarkModule { }

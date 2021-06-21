import { Component, OnInit, ViewChild } from '@angular/core';
import { Bookmark } from 'src/app/shared/models/bookmark.model';
import { ModalComponent } from 'src/app/shared/modules/modal/modal/modal.component';
import { BookmarkFormComponent } from '../../components/bookmark-form/bookmark-form.component';
import { Store } from '@ngrx/store';
import * as fromBookmark from '../../states';
import { deleteBookmark } from '../../states/bookmark.actions';

@Component({
  selector: 'app-bookmark-page',
  templateUrl: './bookmark-page.component.html',
  styleUrls: ['./bookmark-page.component.scss']
})
export class BookmarkPageComponent implements OnInit {
  bookmarks: Array<Bookmark> = [];
  groups: string[];
  @ViewChild('appModal') appModal: ModalComponent;
  constructor(private store: Store) { }

  ngOnInit() {
    this.getBookmarks();
  }

  // will dusplay all the bookmarks
  getBookmarks() {
    this.store.select(fromBookmark.selectBookmarks).subscribe((data) => {
      this.bookmarks = this.groupBy(data, 'group');
      this.groups = this.getGroups();
      // this.bookmarks = data;
    });
  }

  getGroups() {
   return  Object.keys(this.bookmarks).sort();
  }


  groupBy(array, key) {
    // Return the end result
    return array.reduce((result, currentValue) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );

      return result;
    }, {});
  };

  // call modal add bookmark
  addBookmark() {
     this.appModal.open(BookmarkFormComponent, 'add', "Add Bookmark");
  }

  executeAction(event: {action: string}, index: number) {

    if(event.action === 'delete') {
      this.store.dispatch(deleteBookmark({index}));
    }
  }

}

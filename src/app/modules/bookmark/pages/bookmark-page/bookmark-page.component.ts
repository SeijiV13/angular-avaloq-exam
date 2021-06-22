import { Component, OnInit, ViewChild } from '@angular/core';
import { Bookmark } from 'src/app/shared/models/bookmark.model';
import { ModalComponent } from 'src/app/shared/modules/modal/modal/modal.component';
import { BookmarkFormComponent } from '../../components/bookmark-form/bookmark-form.component';
import { Store } from '@ngrx/store';
import * as fromBookmark from '../../states';
import { deleteBookmark, createBookmark, setBookmarks } from '../../states/bookmark.actions';
import { GuidUtility } from 'src/app/shared/utilities/guid.utility';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bookmark-page',
  templateUrl: './bookmark-page.component.html',
  styleUrls: ['./bookmark-page.component.scss']
})
export class BookmarkPageComponent implements OnInit {
  bookmarks: Array<Bookmark> = [];
  groups: string[];
  guid = new GuidUtility();
  @ViewChild('appModal') appModal: ModalComponent;
  constructor(private store: Store) { }

  ngOnInit() {
    this.persistBookmark();
  }

  // will dusplay all the bookmarks
  getBookmarks() {
    this.store.select(fromBookmark.selectBookmarks).subscribe((data) => {
      if(data){
        this.saveToStorage(data);
      }
      this.groupBookmarks(data);

    });
  }

  groupBookmarks(data: Bookmark[]) {
    this.bookmarks = this.groupBy(data, 'group');
    this.groups = this.getGroups();
  }

  persistBookmark() {
    const bookmarks = localStorage.getItem('bookmarks');
    if(JSON.parse(bookmarks) && JSON.parse(bookmarks).length > 0) {
      this.store.dispatch(setBookmarks(JSON.parse(bookmarks)));
      this.groupBookmarks(JSON.parse(bookmarks));
    } else {
      this.getBookmarks();
    }
  }

  saveToStorage(data: Bookmark[]) {
    localStorage.setItem('bookmarks', JSON.stringify(data));
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
     const dialog = this.appModal.open(BookmarkFormComponent, 'add', 'Add Bookmark');
     (dialog.componentInstance as any).actionEmitter.subscribe(data => {
         this.executeAction(data)
     });
  }

  executeAction(event: {action: string, form: FormGroup}, index: number = 0) {

    if(event.action === 'delete') {
      this.store.dispatch(deleteBookmark({index}));
    }

    else if(event.action === 'add') {
      const bookmark: Bookmark = event.form.getRawValue();
      bookmark.id = this.guid.createGuid().toString();
      this.store.dispatch(createBookmark({bookmark}));
      event.form.reset();
    }
  }

}

import { createAction, props } from '@ngrx/store';
import { Bookmark } from 'src/app/shared/models/bookmark.model';

export const createBookmark = createAction(
  '[Bookmark] Create Bookmark',
  props<{bookmark :Bookmark}>()
);

export const deleteBookmark = createAction(
    '[Bookmark] Delete Bookmark',
    props<{index: number}>()
)

export const setBookmarks = createAction(
  '[Bookmark] Set Bookmarks',
  props<{bookmarks: Bookmark[]}>()
)
import { createReducer, on, Action, ActionCreator,} from '@ngrx/store';
import { Bookmark } from 'src/app/shared/models/bookmark.model';
import * as BookmarkActions from './bookmark.actions';


export interface BookmarkState {
    bookmarks: Bookmark[]
}
export const initialState = {
    bookmarks: [],
  };


const bookmarkReducer = createReducer(
    initialState,
    on(BookmarkActions.createBookmark, (state, {bookmark}) => (
        { ...state, 
            bookmarks: [...state.bookmarks, bookmark]
        })),
    on(BookmarkActions.deleteBookmark, (state, {index}) => (
        { ...state, 
            bookmarks: state.bookmarks.filter(data => data.id != index)
        })),


);



  export function reducer(state: BookmarkState | undefined, action: Action) {
    return bookmarkReducer(state, action);
  }


  export const bookmarkFeatureKey = 'bookmark';
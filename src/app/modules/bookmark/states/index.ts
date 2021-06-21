import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BookmarkState } from './bookmark.reducer';

export const featureKey = 'bookmark';
 
export interface AppState {
  bookmark: BookmarkState;
}

export const selectFeature = createFeatureSelector<AppState, BookmarkState>(featureKey);

export const selectBookmarks = createSelector(
  selectFeature,
  (state: BookmarkState) => state.bookmarks
);
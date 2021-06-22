# AngularAvaloqExam

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.

## Development server

To run the application execute the command `npm run start` and navigate to `http://localhost:4200`

## Solution for the Exam
I have created a bookmark module that contains the store feature for bookmark, I made a spearate module such that
it should be ready for lazy loading

```
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
```

I've used the concept of smart dumb compoents where I created the pages folder where my smart component is placed and components folder where
my dumb components are placed

### Smart Components
1. bookmark-page.component
   this contains all dispatching of actions such that this is the only component that communicates with the state
   it dispatches the create and delete bookmark depending on the action passed

   it also gets the list of created bookmarks in the state using a feature selector

### Dumb Components
1. bookmark-item.component
   this display a single bookmark item that has a @Input Decorator for title name and group

2. bookmark-form.component
   this holds the main form of creating the bookmark, it only emits to the parent to notify the smart componet if it needs to dispatch a createBookmark action


## NGRX Store

### Actions
 1. createBookmark - this accepts a model Bookmark which will add a new bookmark in the state
 2. deleteBookmark - this accepts the guid of the bookmark and will delete the bookmark with the selected guid

### Reducers

 1. Initial State - contains an array of bookmark property which will contain the list of bookmarks

 #### Create Bookmark - this will spread the list of bookmarks and add the new bookmark into a single array
 ```
    on(BookmarkActions.createBookmark, (state, {bookmark}) => (
        { ...state, 
            bookmarks: [...state.bookmarks, bookmark]
  ```

 ### Delete Bookmark - this will filter out the bookmark with the passed guid
  ```
    on(BookmarkActions.deleteBookmark, (state, {index}) => (
        { ...state, 
            bookmarks: state.bookmarks.filter(data => data.id != index)
        })),
  ```

  ### List of bookmarks
  ![Alt text](./assets/readme/images/bookmark-list.png "Title")

  ### Add bookmark modal
  ![Alt text](./assets/readme/images/bookmark-add.png "Title")
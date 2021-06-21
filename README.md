# AngularAvaloqExam

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.

## Development server

To run the application execute the command `npm run start` and navigate to `http://localhost:4200`

## Solution for the Exam
I have created a bookmark module that contains the store feature for bookmark, I made a spearate module such that
it should be ready for lazy loading



I've used the concep of smart dumb compoentns where I hage the pages folder where my smart component is placed and components folder where
my dum components are places

Smart Components
1. bookmark-page.component
   this contains all dispatching of actions such that this is the only component that communicates with the state
   it dispatches the create and delete bookmark depending on the action passed

   it also gets the list of created bookmarks in the state using a feature selector

Dumb Components
1. bookmark-item.component
   this display a single bookmark item that has a @Input Decorator for title name and group

2. bookmark-form.component
   this holds the main form of creating the bookmark, it only emits to the parent to notify the smart componet if it needs to dispatch a createBookmark action
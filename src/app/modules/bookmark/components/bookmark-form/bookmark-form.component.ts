import { Component, OnInit, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { createBookmark } from '../../states/bookmark.actions';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Bookmark } from 'src/app/shared/models/bookmark.model';
import { MAT_DIALOG_DATA } from '@angular/material';
import { GuidUtility } from 'src/app/shared/utilities/guid.utility';

@Component({
  selector: 'app-bookmark-form',
  templateUrl: './bookmark-form.component.html',
  styleUrls: ['./bookmark-form.component.scss']
})
export class BookmarkFormComponent implements OnInit {
  form: FormGroup;
  guid = new GuidUtility();
  constructor(private store: Store, private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: {action: string, title: string}
    ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.fb.group({
       name: ['', [Validators.required]],
       url: ['', [Validators.required]],
       group: ['', [Validators.required]]
    })
  }


  callAction() {
     if(this.form.valid) {
       const bookmark: Bookmark = this.form.getRawValue();
       bookmark.id = this.guid.createGuid().toString();
       this.store.dispatch(createBookmark({bookmark}));
       this.form.reset();
     }
  }

}

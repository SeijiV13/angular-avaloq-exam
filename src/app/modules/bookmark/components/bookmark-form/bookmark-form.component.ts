import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-bookmark-form',
  templateUrl: './bookmark-form.component.html',
  styleUrls: ['./bookmark-form.component.scss']
})
export class BookmarkFormComponent implements OnInit {
  form: FormGroup;
  @Output() actionEmitter = new EventEmitter();
  constructor( private fb: FormBuilder,
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
       this.actionEmitter.emit({action: 'add', form: this.form});
     }
  }

}

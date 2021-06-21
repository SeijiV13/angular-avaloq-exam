import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bookmark-item',
  templateUrl: './bookmark-item.component.html',
  styleUrls: ['./bookmark-item.component.scss']
})
export class BookmarkItemComponent implements OnInit {
   @Input() name: string;
   @Input() url: string;
   @Output() actionEmitter = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  emitAction(action) {
    this.actionEmitter.emit({action});
  }

}

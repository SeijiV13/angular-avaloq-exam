import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() title: string;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  open(component, action, title) {
    return this.dialog.open(component, {
      data: { action, title },
    });
  }

}

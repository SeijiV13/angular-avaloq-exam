import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import { MatDialogModule, MatCardModule, MatFormFieldModule, 
  MatInputModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';
import { BookmarkFormComponent } from 'src/app/modules/bookmark/components/bookmark-form/bookmark-form.component';
import { StoreModule } from '@ngrx/store';
import { ModalModule } from '../modal.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as fromBookmark from '../../../../modules/bookmark/states/bookmark.reducer';
describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule,  StoreModule.forRoot({}),  StoreModule.forFeature(fromBookmark.bookmarkFeatureKey, fromBookmark.reducer),
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatIconModule,
        MatDialogModule,
        // Shared Module
        ModalModule,
        // Forms Module
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,],
      declarations: [ ModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open dialog - open()', () => {
    component.open(BookmarkFormComponent, 'test', 'test');
  })
});

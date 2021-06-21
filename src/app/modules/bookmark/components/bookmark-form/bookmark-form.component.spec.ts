import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkFormComponent } from './bookmark-form.component';
import { StoreModule, Store } from '@ngrx/store';
import * as fromBookmark from '../../states/bookmark.reducer';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule,
  MatSelectModule, MatIconModule, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material';
import { ModalModule } from 'src/app/shared/modules/modal/modal.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('BookmarkFormComponent', () => {
  let component: BookmarkFormComponent;
  let fixture: ComponentFixture<BookmarkFormComponent>;
  let store: Store;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        Store
      ],
      imports: [ StoreModule.forRoot({}),  StoreModule.forFeature(fromBookmark.bookmarkFeatureKey, fromBookmark.reducer),
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
        BrowserAnimationsModule,
      ],
      declarations: [ BookmarkFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit the form as all fomr controll are valid - callAction()', () => {
    // arrange
    component.form.controls.name.setValue('test');
    component.form.controls.url.setValue('http://test.com');
    component.form.controls.group.setValue('work');

    // act
    component.callAction();
    // assert
    expect(component.form.pristine).toBeTruthy()

  });


  it('should not submit the form as all fomr controll are invalid - callAction()', () => {
    component.form.controls.name.setValue('');
    component.form.controls.url.setValue('http://test.com');
    component.form.controls.group.setValue('work');

    //act
    component.callAction();

    //assert
    expect(component.form.valid).toBeFalsy();
  });
});

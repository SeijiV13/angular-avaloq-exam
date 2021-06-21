import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkPageComponent } from './bookmark-page.component';
import { StoreModule } from '@ngrx/store';
import * as fromBookmark from '../../states/bookmark.reducer';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';
import { ModalModule } from 'src/app/shared/modules/modal/modal.module';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
describe('BookmarkPageComponent', () => {
  let component: BookmarkPageComponent;
  let fixture: ComponentFixture<BookmarkPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}),StoreModule.forFeature(fromBookmark.bookmarkFeatureKey, fromBookmark.reducer),
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
      ],
      declarations: [ BookmarkPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add bookmark - addbookMark()', () => {
    component.appModal = {
      open: () => { return { componentInstance: { actionEmitter: of({action: 'delete'}) } } }
    } as any;
    component.addBookmark();
  });


  it('should execute delete Action - executeAction()', () => {
    component.executeAction({action: 'delete',form: new FormBuilder().group({name: [''], password: ['']})}, 0);
  });

  it('should not execute delete Action - executeAction()', () => {
    component.executeAction({action: 'add', form: new FormBuilder().group({name: [''], password: ['']})}, 0);
  });

  it('should group array by keys - groupBy()', () => {
    const array = [{group: 1, name: 'test'}, {group: 1, name: 'test2'}, {group: 2, name :'test3'}];
    const test = { 1: [{group: 1, name: 'test'}, {group: 1, name: 'test2'}], 2: [{group: 2, name :'test3'}] }

    const result = component.groupBy(array, 'group');
    expect(result).toEqual(test);
  })
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleModifyFormComponent } from './article-modify-form.component';

describe('ArticleModifyFormComponent', () => {
  let component: ArticleModifyFormComponent;
  let fixture: ComponentFixture<ArticleModifyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleModifyFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleModifyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

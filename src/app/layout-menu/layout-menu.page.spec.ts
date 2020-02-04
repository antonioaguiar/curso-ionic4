import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LayoutMenuPage } from './layout-menu.page';

describe('LayoutMenuPage', () => {
  let component: LayoutMenuPage;
  let fixture: ComponentFixture<LayoutMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

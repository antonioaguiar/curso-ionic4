import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LayoutGridPage } from './layout-grid.page';

describe('LayoutGridPage', () => {
  let component: LayoutGridPage;
  let fixture: ComponentFixture<LayoutGridPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutGridPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutGridPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

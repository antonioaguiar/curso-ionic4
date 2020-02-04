import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LayoutTabsPage } from './layout-tabs.page';

describe('LayoutTabsPage', () => {
  let component: LayoutTabsPage;
  let fixture: ComponentFixture<LayoutTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutTabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

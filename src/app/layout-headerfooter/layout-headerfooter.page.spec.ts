import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LayoutHeaderfooterPage } from './layout-headerfooter.page';

describe('LayoutHeaderfooterPage', () => {
  let component: LayoutHeaderfooterPage;
  let fixture: ComponentFixture<LayoutHeaderfooterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutHeaderfooterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutHeaderfooterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

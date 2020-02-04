import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LayoutEstiloPage } from './layout-estilo.page';

describe('LayoutEstiloPage', () => {
  let component: LayoutEstiloPage;
  let fixture: ComponentFixture<LayoutEstiloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutEstiloPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutEstiloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComponentePage } from './componente.page';

describe('ComponentePage', () => {
  let component: ComponentePage;
  let fixture: ComponentFixture<ComponentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

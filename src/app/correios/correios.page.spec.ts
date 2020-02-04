import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CorreiosPage } from './correios.page';

describe('CorreiosPage', () => {
  let component: CorreiosPage;
  let fixture: ComponentFixture<CorreiosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorreiosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CorreiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

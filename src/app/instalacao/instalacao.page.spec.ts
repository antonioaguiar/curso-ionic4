import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstalacaoPage } from './instalacao.page';

describe('InstalacaoPage', () => {
  let component: InstalacaoPage;
  let fixture: ComponentFixture<InstalacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstalacaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstalacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

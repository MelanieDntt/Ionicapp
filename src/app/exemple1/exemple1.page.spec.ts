import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Exemple1Page } from './exemple1.page';

describe('Exemple1Page', () => {
  let component: Exemple1Page;
  let fixture: ComponentFixture<Exemple1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exemple1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Exemple1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

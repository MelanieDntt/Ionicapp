import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Exercice1Page } from './exercice1.page';

describe('Exercice1Page', () => {
  let component: Exercice1Page;
  let fixture: ComponentFixture<Exercice1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercice1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Exercice1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

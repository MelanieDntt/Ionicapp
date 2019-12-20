import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Exercice3Page } from './exercice3.page';

describe('Exercice3Page', () => {
  let component: Exercice3Page;
  let fixture: ComponentFixture<Exercice3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercice3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Exercice3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

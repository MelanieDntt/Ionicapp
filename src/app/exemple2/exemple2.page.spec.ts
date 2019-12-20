import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Exemple2Page } from './exemple2.page';

describe('Exemple2Page', () => {
  let component: Exemple2Page;
  let fixture: ComponentFixture<Exemple2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exemple2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Exemple2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

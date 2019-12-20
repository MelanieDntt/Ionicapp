import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalPokemonPage } from './modal-pokemon.page';

describe('ModalPokemonPage', () => {
  let component: ModalPokemonPage;
  let fixture: ComponentFixture<ModalPokemonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPokemonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalPokemonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

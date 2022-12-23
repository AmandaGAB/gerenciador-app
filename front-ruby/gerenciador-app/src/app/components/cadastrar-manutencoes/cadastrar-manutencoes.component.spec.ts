import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarManutencoesComponent } from './cadastrar-manutencoes.component';

describe('CadastrarManutencoesComponent', () => {
  let component: CadastrarManutencoesComponent;
  let fixture: ComponentFixture<CadastrarManutencoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarManutencoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarManutencoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

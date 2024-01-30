import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprendeEnlineaComponent } from './aprende-enlinea.component';

describe('AprendeEnlineaComponent', () => {
  let component: AprendeEnlineaComponent;
  let fixture: ComponentFixture<AprendeEnlineaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AprendeEnlineaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AprendeEnlineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaneloperaComponent } from './panelopera.component';

describe('PaneloperaComponent', () => {
  let component: PaneloperaComponent;
  let fixture: ComponentFixture<PaneloperaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaneloperaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaneloperaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

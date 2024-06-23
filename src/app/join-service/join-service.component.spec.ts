import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinServiceComponent } from './join-service.component';

describe('JoinServiceComponent', () => {
  let component: JoinServiceComponent;
  let fixture: ComponentFixture<JoinServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JoinServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JoinServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

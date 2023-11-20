import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignActivateComponent } from './campaign-activate.component';

describe('CampaignActivateComponent', () => {
  let component: CampaignActivateComponent;
  let fixture: ComponentFixture<CampaignActivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaignActivateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CampaignActivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

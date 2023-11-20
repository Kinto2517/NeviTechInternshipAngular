import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignDeactivateComponent } from './campaign-deactivate.component';

describe('CampaignDeactivateComponent', () => {
  let component: CampaignDeactivateComponent;
  let fixture: ComponentFixture<CampaignDeactivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaignDeactivateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CampaignDeactivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

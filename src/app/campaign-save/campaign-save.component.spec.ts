import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignSaveComponent } from './campaign-save.component';

describe('CampaignSaveComponent', () => {
  let component: CampaignSaveComponent;
  let fixture: ComponentFixture<CampaignSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaignSaveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CampaignSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

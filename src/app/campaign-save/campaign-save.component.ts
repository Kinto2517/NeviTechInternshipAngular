import { Component } from '@angular/core';
import { CampaignSave } from '../interfaces/campaignSave';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-campaign-save',
  templateUrl: './campaign-save.component.html',
  styleUrl: './campaign-save.component.css',
})
export class CampaignSaveComponent {
  constructor(private http: HttpClient) {}

  save() {
    const url = `http://localhost:8081/api/v1/campaign/save?title=${this.campaign.title}&description=${this.campaign.description}&category=${this.campaign.category}&userName=${this.campaign.username}`;
  
    this.http.post<CampaignSave>(url, {}).subscribe((data) => {
      console.log(data);
      console.log(this.campaign);
    });
  }

  campaign: CampaignSave = {
    title: 'Campaign 1',
    description: 'Description',
    category: 'TSS-OSS-OTHER-HAYAT',
    username: 'JohnDoe',
  };
}

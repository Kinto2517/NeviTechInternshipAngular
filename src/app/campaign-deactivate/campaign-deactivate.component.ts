import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignUpdate } from '../interfaces/campaignUpdate';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-campaign-deactivate',
  templateUrl: './campaign-deactivate.component.html',
  styleUrl: './campaign-deactivate.component.css',
})
export class CampaignDeactivateComponent {
  constructor(private http: HttpClient) {}

  deactivate() {
    const url = `http://localhost:8081/api/v1/campaign/deactivate?title=${this.campaign.title}&description=${this.campaign.description}&category=${this.campaign.category}`;

    this.http.put<CampaignUpdate>(url, {}).subscribe((data) => {
      console.log(data);
      console.log(this.campaign);
    });
  }
  campaign: CampaignUpdate = {
    title: 'Campaign Title',
    description: 'Campaign Description',
    category: 'Campaign Category',
  };
}

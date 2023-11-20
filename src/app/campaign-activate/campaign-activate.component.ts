import { Component } from '@angular/core';
import { CampaignUpdate } from '../interfaces/campaignUpdate';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-campaign-activate',
  templateUrl: './campaign-activate.component.html',
  styleUrl: './campaign-activate.component.css',
})
export class CampaignActivateComponent {

  constructor(private http: HttpClient) {}

  activate() {
    const url = `http://localhost:8081/api/v1/campaign/activate?title=${this.campaign.title}&description=${this.campaign.description}&category=${this.campaign.category}`;
  
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

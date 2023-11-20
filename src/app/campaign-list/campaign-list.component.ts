import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../campaign.service';
import { Campaign } from '../interfaces/campaign';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrl: './campaign-list.component.css'
})
export class CampaignListComponent implements OnInit{

  campaigns: Campaign[] = [];

  constructor(private campaignService: CampaignService) { }

  ngOnInit(): void {
    this.getCampaigns();
  }

  getCampaigns(): void {
    this.campaignService.getCampaigns()
    .subscribe(campaigns => this.campaigns = campaigns);
  }
}

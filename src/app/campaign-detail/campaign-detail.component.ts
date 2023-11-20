import { Component, OnInit } from '@angular/core';
import { Campaign } from '../interfaces/campaign';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CampaignService } from '../campaign.service';

@Component({
  selector: 'app-campaign-detail',
  templateUrl: './campaign-detail.component.html',
  styleUrl: './campaign-detail.component.css',
})
export class CampaignDetailComponent implements OnInit {
  campaign: Campaign | undefined;

  constructor(
    private route: ActivatedRoute,
    private campaignService: CampaignService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCampaign();
  }
  getCampaign(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.campaignService.getCampaign(id).subscribe((campaign) => (this.campaign = campaign));
  }

  goBack(): void {
    this.location.back();
  }
}

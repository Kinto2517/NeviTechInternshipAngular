import { Injectable } from '@angular/core';
import { Campaign } from './interfaces/campaign';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CampaignService {
  private apiUrl = 'http://localhost:8081/api/v1/campaign/all';
  private apiIdUrl = 'http://localhost:8081/api/v1/campaign/';

  constructor(private http: HttpClient) {}

  getCampaigns(): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(this.apiUrl);
  }

  getCampaign(id: number): Observable<Campaign> {
    const campaignUrl = `${this.apiIdUrl}${id}`;
    return this.http.get<Campaign>(campaignUrl);
  }
}

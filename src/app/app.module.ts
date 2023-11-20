import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';

import { AppRoutingModule } from './app-routing.module';
import { UserSaveComponent } from './user-save/user-save.component';
import { CampaignActivateComponent } from './campaign-activate/campaign-activate.component';
import { CampaignDeactivateComponent } from './campaign-deactivate/campaign-deactivate.component';
import { CampaignSaveComponent } from './campaign-save/campaign-save.component';
import { CampaignDetailComponent } from './campaign-detail/campaign-detail.component';
import { CampaignListComponent } from './campaign-list/campaign-list.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [
    AppComponent,
    MessagesComponent,
    UserSaveComponent,
    CampaignActivateComponent,
    CampaignDeactivateComponent,
    CampaignSaveComponent,
    CampaignDetailComponent,
    CampaignListComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

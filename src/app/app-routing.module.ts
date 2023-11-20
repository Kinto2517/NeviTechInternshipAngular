import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSaveComponent } from './user-save/user-save.component';
import { CampaignActivateComponent } from './campaign-activate/campaign-activate.component';
import { CampaignDeactivateComponent } from './campaign-deactivate/campaign-deactivate.component';
import { CampaignSaveComponent } from './campaign-save/campaign-save.component';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { CampaignDetailComponent } from './campaign-detail/campaign-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'campaigns', component: CampaignListComponent},
  { path: 'campaigns/:id', component: CampaignDetailComponent},
  { path: 'user-save', component: UserSaveComponent },
  { path: 'campaign-activate', component: CampaignActivateComponent },
  { path: 'campaign-deactivate', component: CampaignDeactivateComponent },
  { path: 'campaign-save', component: CampaignSaveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

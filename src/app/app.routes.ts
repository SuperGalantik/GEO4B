import { Routes } from '@angular/router';
import { WaterIntroduzioneComponent } from './geo4b-water/water-introduzione/water-introduzione.component';
import { WaterArchitetturaComponent } from './geo4b-water/water-architettura/water-architettura.component';
import { WaterFunzioniComponent } from './geo4b-water/water-funzioni/water-funzioni.component';
import { WaterRoadMapComponent } from './geo4b-water/water-road-map/water-road-map.component';
import { TelcoIntroduzioneComponent } from './geo4b-telco/telco-introduzione/telco-introduzione.component';
import { TelcoArchitetturaComponent } from './geo4b-telco/telco-architettura/telco-architettura.component';
import { TelcoRoadMapComponent } from './geo4b-telco/telco-road-map/telco-road-map.component';
import { TelcoFunzioniComponent } from './geo4b-telco/telco-funzioni/telco-funzioni.component';
import { AuthGuardService } from './auth-guard.service';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';

export const routes: Routes = 
[
    {
        path: 'geo4bwater', component: SidebarComponent, canActivate: [AuthGuardService], children: 
        [
            {path: 'intro',         component: WaterIntroduzioneComponent},
            {path: 'architettura',  component: WaterArchitetturaComponent},
            {path: 'funzioni',      component: WaterFunzioniComponent},
            {path: 'roadmap',       component: WaterRoadMapComponent},
        ]
    },

    {
        path: 'geo4btelco', component: SidebarComponent, canActivate: [AuthGuardService], children: 
        [
            {path: 'intro',         component: TelcoIntroduzioneComponent},
            {path: 'architettura',  component: TelcoArchitetturaComponent},
            {path: 'funzioni',      component: TelcoFunzioniComponent},
            {path: 'roadmap',       component: TelcoRoadMapComponent},
        ]
    },

    { path: 'geo4b', component: HomeComponent },

    { path: '**', redirectTo: '/geo4b' },
];

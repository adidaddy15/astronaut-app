import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { ProfileComponent } from './layouts/profile/profile.component';
import { inject } from '@angular/core';
import { CrewService } from './services/crew.service';
import { map, tap } from 'rxjs';
import { CrewMember } from './core/models/models';
import { StarlinkComponent } from './layouts/starlink/starlink.component';
import { StarlinkService } from './services/starlink.service';
import { StarlinkDetailsComponent } from './layouts/starlink-details/starlink-details.component';

export const routes: Routes = [
  {
    path: ':id',
    resolve: {
      crewMember: (route: ActivatedRouteSnapshot) => {
        const crewService = inject(CrewService);
        const id = route.paramMap.get('id') || '5ebf1b7323a9a60006e03a7b';
        return crewService.getCrewMemberById(id).pipe(
          tap((member: CrewMember) => crewService.setCrewMember(member)),
          map(() => null),
        );
      },
    },
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'starlink',
        component: StarlinkComponent,
        resolve: {
          starlinkSatellites: () => {
            const starlinkService = inject(StarlinkService);
            return starlinkService.getStarlinkSatellites();
          },
        },
      },
      {
        path: 'starlink/:id',
        component: StarlinkDetailsComponent,
        resolve: {
          starlink: (route: ActivatedRouteSnapshot) => {
            const starlinkService = inject(StarlinkService);
            const id = route.paramMap.get('id') || '1';
            return starlinkService.getStarlinkSatellite(id);
          },
        },
      },
      {
        path: '**',
        redirectTo: 'profile',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '5ebf1b7323a9a60006e03a7b',
  },
];

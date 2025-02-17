import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  CoreResponse,
  Launch,
  Payload,
  StarlinkSatellite,
} from '../../core/models/models';
import { LaunchesService } from '../../services/launches.service';
import { forkJoin, Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';
import { PayloadService } from '../../services/payload.service';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-starlink-details',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './starlink-details.component.html',
})
export class StarlinkDetailsComponent implements OnInit, OnDestroy {
  starlink: StarlinkSatellite = this.route.snapshot.data['starlink'];
  launchDetails!: Launch;
  launchDetailsSub!: Subscription;
  combinedMass: number = 0;
  coreMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private launchesService: LaunchesService,
    private payloadService: PayloadService,
    private coreService: CoreService,
  ) {}

  ngOnInit(): void {
    this.launchDetailsSub = this.launchesService
      .getLaunch(this.starlink.launch)
      .subscribe((launch: Launch) => {
        this.launchDetails = launch;

        if (launch.payloads.length) {
          this.getPayloads(launch.payloads);
        }

        if (launch.cores.length) {
          this.getCore(launch.cores[0].core);
        }
      });
  }

  ngOnDestroy(): void {
    this.launchDetailsSub.unsubscribe();
  }

  getPayloads(payloads: string[]): void {
    const requests = payloads.map((id) => this.payloadService.getPayload(id));

    forkJoin(requests).subscribe({
      next: (payloads: Payload[]) => {
        this.combinedMass = payloads.reduce(
          (sum, payload) => sum + (payload.mass_kg || 0),
          0,
        );
      },
      error: (error) => {
        console.error('Error getting payloads:', error);
      },
    });
  }

  getCore(coreId: string): void {
    this.coreService
      .getCore(coreId)
      .subscribe((core: CoreResponse) => (this.coreMessage = core.last_update));
  }
}

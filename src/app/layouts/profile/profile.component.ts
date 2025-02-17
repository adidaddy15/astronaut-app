import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrewMember, Launch } from '../../core/models/models';
import { FirstNamePipe } from '../../pipes/first-name.pipe';
import { LastNamePipe } from '../../pipes/last-name.pipe';
import { LaunchesService } from '../../services/launches.service';
import { CrewService } from '../../services/crew.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FirstNamePipe, LastNamePipe],
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit, OnDestroy {
  crewMember!: CrewMember;
  upcomingLaunches: Launch[] = [];
  launchesSubscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private crewService: CrewService,
    private launchesService: LaunchesService,
  ) {}

  ngOnInit(): void {
    this.crewMember = this.crewService.getCrewMember();
    this.launchesSubscription = this.launchesService
      .getUpcomingLaunches()
      .subscribe((launches: Launch[]) => (this.upcomingLaunches = launches));
  }

  ngOnDestroy(): void {
    this.launchesSubscription.unsubscribe();
  }
}

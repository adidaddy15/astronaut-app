import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { StarlinkSatellite } from '../../core/models/models';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-starlink',
  standalone: true,
  imports: [CommonModule, DatePipe, RouterModule],
  templateUrl: './starlink.component.html',
})
export class StarlinkComponent implements OnInit {
  starlinkSatellites: StarlinkSatellite[] =
    this.route.snapshot.data['starlinkSatellites'];
  filteredStarlinkSatellites: StarlinkSatellite[] = [];
  pagedStarlinkSatellites: StarlinkSatellite[] = [];
  Math = Math;
  tabs = ['by 3', 'by 5', 'by (3 and 5)', 'not by (3 and 5)'];
  activeTab = 0;
  page = 1;
  pageSize = 15;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.filterStarlinkSatellites(0);
  }

  filterStarlinkSatellites(divisibilityCase: number): void {
    this.filteredStarlinkSatellites = this.starlinkSatellites.filter(
      (satellite: StarlinkSatellite) => {
        const heightKm = Math.round(satellite.height_km ?? 0);

        if (!heightKm) return false;

        switch (divisibilityCase) {
          case 0:
            return heightKm % 3 === 0;
          case 1:
            return heightKm % 5 === 0;
          case 2:
            return heightKm % 3 === 0 && heightKm % 5 === 0;
          case 3:
            return heightKm % 3 !== 0 && heightKm % 5 !== 0;
          default:
            return false;
        }
      },
    );
    this.page = 1;
    this.pagedStarlinkSatellites = [];
    this.loadMoreItems();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    const bottom =
      event.target.documentElement.scrollHeight ===
      Math.round(event.target.documentElement.scrollTop + window.innerHeight);
    if (
      bottom &&
      this.page * this.pageSize <= this.filteredStarlinkSatellites.length
    ) {
      this.loadMoreItems();
    }
  }

  loadMoreItems(): void {
    const start = (this.page - 1) * this.pageSize;
    const end = this.page * this.pageSize;
    const newItems = this.filteredStarlinkSatellites.slice(start, end);
    this.pagedStarlinkSatellites = [
      ...this.pagedStarlinkSatellites,
      ...newItems,
    ];
    this.page++;
  }
}

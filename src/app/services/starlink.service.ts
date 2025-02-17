import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { moduleApiUrl } from '../core/data/data-utils';
import { StarlinkSatellite } from '../core/models/models';

@Injectable({
  providedIn: 'root',
})
export class StarlinkService {
  constructor(private http: HttpClient) {}

  getStarlinkSatellites(): Observable<StarlinkSatellite[]> {
    return this.http.get<StarlinkSatellite[]>(moduleApiUrl('/starlink'));
  }

  getStarlinkSatellite(id: string): Observable<StarlinkSatellite> {
    return this.http.get<StarlinkSatellite>(moduleApiUrl(`/starlink/${id}`));
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { moduleApiUrl } from '../core/data/data-utils';
import { Launch } from '../core/models/models';

@Injectable({
  providedIn: 'root',
})
export class LaunchesService {
  constructor(private http: HttpClient) {}

  getUpcomingLaunches(): Observable<Launch[]> {
    return this.http.get<Launch[]>(moduleApiUrl('/launches/upcoming'));
  }

  getLaunch(id: string): Observable<Launch> {
    return this.http.get<Launch>(moduleApiUrl(`/launches/${id}`));
  }
}

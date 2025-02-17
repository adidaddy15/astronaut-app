import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { moduleApiUrl } from '../core/data/data-utils';
import { CoreResponse, Payload } from '../core/models/models';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  constructor(private http: HttpClient) {}

  getCore(id: string): Observable<CoreResponse> {
    return this.http.get<CoreResponse>(moduleApiUrl(`/cores/${id}`));
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { moduleApiUrl } from '../core/data/data-utils';
import { Payload } from '../core/models/models';

@Injectable({
  providedIn: 'root',
})
export class PayloadService {
  constructor(private http: HttpClient) {}

  getPayload(id: string): Observable<Payload> {
    return this.http.get<Payload>(moduleApiUrl(`/payloads/${id}`));
  }
}

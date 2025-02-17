import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CrewMember } from '../core/models/models';
import { moduleApiUrl } from '../core/data/data-utils';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CrewService {
  private defaultCrewMember: CrewMember = {
    id: '',
    name: '',
    status: 'unknown',
    agency: '',
    image: '',
    wikipedia: '',
    launches: [],
  };
  private crewMemberSubject = new BehaviorSubject<CrewMember>(
    this.defaultCrewMember,
  );
  crewMember$ = this.crewMemberSubject.asObservable();

  constructor(private http: HttpClient) {}

  setCrewMember(member: CrewMember): void {
    this.crewMemberSubject.next(member);
  }

  getCrewMember(): CrewMember {
    return this.crewMemberSubject.getValue();
  }

  getCrewMemberById(id: string): Observable<CrewMember> {
    return this.http.get<CrewMember>(moduleApiUrl(`/crew/${id}`));
  }
}

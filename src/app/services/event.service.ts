import { Injectable } from '@angular/core';
import { SearchParams } from '../modules/common-marvel/classes/search-params';
import { EventDataWrapper } from '../modules/events/classes/event-data-wrapper';
import { getParams } from '../constants/service-constants';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {


  constructor(private http: HttpClient) { }

  getEventFromUrl(url?: string, params?: SearchParams) : Observable<EventDataWrapper> {
    return this.http.get<EventDataWrapper>(url.replace('http:', 'https:') + getParams());
  }
}

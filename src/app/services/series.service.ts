import { Injectable } from '@angular/core';
import { SearchParams } from '../modules/common-marvel/classes/search-params';
import { getParams } from '../constants/service-constants';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SeriesDataWrapper } from '../modules/series/classes/series-data-wrapper';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private http: HttpClient) { }

  getSerieFromUrl(url?: string, params?: SearchParams) : Observable<SeriesDataWrapper> {
    return this.http.get<SeriesDataWrapper>(url.replace('http:', 'https:') + getParams());
  }
}

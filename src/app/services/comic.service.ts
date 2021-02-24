import { Injectable } from '@angular/core';
import { ServiceConstants, getParams, url } from '../constants/service-constants';
import { HttpClient } from '@angular/common/http'
import { SearchParams } from '../modules/common-marvel/classes/search-params';
import { Observable } from 'rxjs/internal/Observable';
import { ComicDataWrapper } from '../modules/comics/classes/comic-data-wrapper';

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  constructor(private http: HttpClient) { }

  getComicFromUrl(url?: string, params?: SearchParams) : Observable<ComicDataWrapper> {
    console.log(url + getParams());
    return this.http.get<ComicDataWrapper>(url.replace('http', 'https') + getParams());
  }
}

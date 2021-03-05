import { Injectable } from '@angular/core';
import { SearchParams } from '../modules/common-marvel/classes/search-params';
import { getParams } from '../constants/service-constants';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { StoryDataWrapper } from '../modules/stories/classes/story-data-wrapper';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  constructor(private http: HttpClient) { }

  getStoryFromUrl(url?: string, params?: SearchParams) : Observable<StoryDataWrapper> {
    return this.http.get<StoryDataWrapper>(url.replace('http:', 'https:') + getParams());
  }
}

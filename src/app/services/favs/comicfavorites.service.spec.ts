import { TestBed } from '@angular/core/testing';

import { ComicfavoritesService } from './comicfavorites.service';

describe('ComicfavoritesService', () => {
  let service: ComicfavoritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComicfavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

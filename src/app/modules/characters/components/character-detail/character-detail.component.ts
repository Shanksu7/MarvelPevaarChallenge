import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CharacterService } from 'src/app/services/character.service';
import { ComicService } from 'src/app/services/comic.service';
import { EventService } from 'src/app/services/event.service';
import { SeriesService } from 'src/app/services/series.service';
import { StoriesService } from 'src/app/services/stories.service';
import Swal from 'sweetalert2';
import { Character } from '../../classes/character';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  character: Character;
  urls: any = [];
  theModal: any;
  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private storiesService: StoriesService,
    private comicService: ComicService,
    private eventService: EventService,
    private seriesService: SeriesService) {
    this.route.params.subscribe(data => {
      console.log(data);
      this.characterService.getCharacter(data.id).subscribe(char => {

        if (char.data.total > 0) {
          this.character = char.data.results[0];
          this.character.urls?.forEach(x => this.urls.push({name: x.type, resourceURI: x.url}));
          console.log(this.character);
        }
        else
          Swal.fire('Not found', 'character with id: ' + data.id + ' was not found');
      }, (error) => {
        console.log(error);
        Swal.fire('Error ' + error.error.code, error.error.status);
      });
    })
  }
  onClickWiki(item) {
    window.open(item.url, "_blank");
  }

  onClickComic(item) {
    console.log('comic');
    this.comicService.getComicFromUrl(item.url).subscribe(data => {
      let item = data.data?.results[0];
      this.showSwal(item);
    });
  }

  onClickStory(item) {
    console.log('story');
    this.storiesService.getStoryFromUrl(item.url).subscribe(data => {
      let item = data.data?.results[0];
      this.showSwal(item);
    });
  }

  onClickSerie(item) {
    console.log('serie');
    this.seriesService.getSerieFromUrl(item.url).subscribe(data => {
      let item = data.data?.results[0];
      this.showSwal(item);
    });
  }

  showSwal(item, htmlExtra?) {
    console.log(item);
    let detail = item.urls?.filter(x => x.type == 'detail')[0].url;
    let button = '<br><a href="' + detail + '" target="_blank">See more</button>'
    let image = item?.thumbnail?.path ? item.thumbnail.path + '/portrait_xlarge.' + item.thumbnail.extension : '';
    Swal.fire({
      title: item.title,
      imageUrl: image,
      showConfirmButton: true,
      html: (item.description ? item.description : '') + (htmlExtra ? htmlExtra : '') + (detail ? button : ''),
      
    });
  }

  ngOnInit(): void {
  }

}

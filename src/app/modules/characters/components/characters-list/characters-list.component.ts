import { Component, OnInit } from '@angular/core';
import { SearchParams } from 'src/app/modules/common-marvel/classes/search-params';
import { CharacterService } from 'src/app/services/character.service';
import Swal from 'sweetalert2';
import { Character } from '../../classes/character';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  
  selected: any;
  characters: Character[];
  charactersOriginal: Character[];
  closeResult: string;
  offSet: number = 0;
  startWith: string = '';
  nameFilter: string = '';
  lastSearch: string = '';
  showToTop: boolean = false;
  available: number;

  constructor(private characterService: CharacterService)
  {
  }

  ngOnInit(): void {
    this.search();
  }

  search() {
    let params = new SearchParams();
    this.lastSearch = this.startWith;
    params.limit = 10;
    params.nameStartsWith = this.startWith && this.startWith != '' ? this.startWith : null;
    params.offset = this.offSet;
    console.log(this.selected);
      switch(this.selected) {
        case '1':
          params.orderBy = 'name'  
          break;
        case '2':
          params.orderBy = '-name'
          break;          
        case '3':
          params.orderBy = 'modified'
          break;
        case '4':
          params.orderBy = '-modified'
          break;
        default:
          params.orderBy = null;
          break;
    } 
    console.log('data');
    console.log(params);
    this.characterService.getPaginatedCharacters(params).subscribe(data => 
    {
      this.available = data.data.total;
      this.charactersOriginal = data.data.results;
      this.characters = data.data.results;
      });
  }


  sort() {
    this.search();
  }

  searchButton() {
    this.search();
  }

  typeFilter() {
    let name = this.nameFilter;
    console.log(name);
    if (!name || name.length == 0)
    {
      this.characters = this.charactersOriginal;
    }
    else {
      this.characters = this.charactersOriginal.filter(x => x.name.toLowerCase().includes(name.toLowerCase()))
    }
  }

  onClear() {
    this.clear();
    this.search();
  }

  clear() {
    this.selected = 0;
    this.offSet = 0;
    this.startWith = '';
  }

  onScroll($event:Event){
    if (window.pageYOffset > 150)
      this.showToTop = true;
    else
      this.showToTop = false;
      
  }
  toTop() {
    window.scroll(0, 0);
    this.showToTop = false;
  }

  onPageChanged($event){
    console.log($event);
    this.offSet = ($event-1) * 10;
    this.search();
  }

}

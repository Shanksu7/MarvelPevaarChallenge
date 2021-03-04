import { Component, OnInit } from '@angular/core';
import { SearchParams } from 'src/app/modules/common-marvel/classes/search-params';
import { DataWrapper } from 'src/app/modules/common-marvel/interface/data-wrapper';
import { CharacterService } from 'src/app/services/character.service';
import Swal from 'sweetalert2';
import { Character } from '../../classes/character';
import { CharacterDataWrapper } from '../../classes/character-data-wrapper';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  counter: number = 0;
  selected: any;
  characters: Character[];
  charactersOriginal: Character[];
  closeResult: string;
  offSet: number = 0;
  startWith: string = '';
  nameFilter: string = '';
  constructor(private characterService: CharacterService)
  {
  }

  ngOnInit(): void {
    this.search();

  }

  search() {
    let params = new SearchParams();
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
      this.charactersOriginal = data.data.results;
      this.characters = data.data.results;
      });
  }

  nextPage() {
    this.offSet += 10;
    this.search();
  }

  prevPage() {
    this.offSet = this.offSet <= 10 ? 0 : this.offSet - 10;
    this.search();
  }

  sort() {
   /*
    if (this.selected == 1 || this.selected == 2) {
      console.log('name sort');
      let sortIndex = this.selected == 1 ? 1 : -1;
      this.characters = this.characters.sort((a, b) => {
        if(a.name < b.name) { return -1 * sortIndex; }
        if(a.name > b.name) { return  1 * sortIndex; }
        return 0;
      })
    }
    else {
      let sortIndex = this.selected == 3 ? 1 : -1;
      this.characters = this.characters.sort((a, b) => {
        if(a.modified < b.modified) { return -1 * sortIndex; }
        if(a.modified > b.modified) { return  1 * sortIndex; }
        return 0;
      })
    }
    console.log(this.selected);*/
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
    //this.sort();

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
}

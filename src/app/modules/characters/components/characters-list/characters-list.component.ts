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

  characters: Character[];

  closeResult: string;

  sortIndex: number = 1;
  btnSortAlpha: string = 'A-Z';
  offSet: number = 0;
  constructor(private characterService: CharacterService)
  {
  }

  ngOnInit(): void {
    this.search();

  }

  search() {
    let params = new SearchParams();
    params.limit = 10;
    params.offset = this.offSet;
    this.characterService.getPaginatedCharacters(params).subscribe(data => 
      {
      this.characters = data.data.results;
      this.sort();
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

  changeSort() {
    this.sortIndex *= -1;
    this.sort();    
  }

  sort() {
    this.btnSortAlpha = this.sortIndex == 1 ? 'A-Z' : 'Z-A';
    this.characters = this.characters.sort((a, b) => {
      if(a.name < b.name) { return -1*this.sortIndex; }
      if(a.name > b.name) { return 1*this.sortIndex; }
      return 0;
    })
  }

  searchButton(search) {
    Swal.fire('searching...', search);
  }
}

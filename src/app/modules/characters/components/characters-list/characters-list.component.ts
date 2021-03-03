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

  foods = [
    {value: 'A-Z', viewValue: 'A-Z'},
    {value: 'Z-A', viewValue: 'Z-A'},
  ];
  selected: any;
  characters: Character[];

  closeResult: string;

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

  sort() {
   
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
    console.log(this.selected);
  }

  searchButton(search) {
    Swal.fire('searching...', search);
  }

  onChange(search) {
    Swal.fire('dropdown...', search);
  }
}

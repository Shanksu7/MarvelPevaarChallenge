import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';
import Swal from 'sweetalert2';
import { Character } from '../../classes/character';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  character: Character;
  constructor(private route: ActivatedRoute, private characterService: CharacterService)
  {
    this.route.params.subscribe(data => {
      console.log(data);
      this.characterService.getCharacter(data.id).subscribe(char =>
      {
        if (char.data.total > 0)
          this.character = char.data.results[0];
        else
          Swal.fire('Not found', 'character with id: ' + data.id + ' was not found');
      }, (error) => {
          console.log(error);
        Swal.fire('Error ' + error.error.code, error.error.status);
      });
    })
  }

  ngOnInit(): void {
  }

}

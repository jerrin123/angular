import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-artform',
  templateUrl: './artform.component.html',
  styleUrls: ['./artform.component.css']
})
export class ArtformComponent {

  constructor(private router: Router,
    private hero:HeroService) {}
  artform=this.hero.giveData();
    gotohere(id: any){
      localStorage.setItem('id',id);
      this.router.navigate(['/single']);
    }
  

}

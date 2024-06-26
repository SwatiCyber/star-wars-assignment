import { Component, OnInit } from '@angular/core';
import { CommonModules } from '../shared/common.module';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from '../services/star-wars.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  standalone: true,
  imports: [CommonModules],
  providers: [StarWarsService]
})
export class DetailComponent implements OnInit {
  profile: any;

  constructor(
    private route: ActivatedRoute,
    private swapiService: StarWarsService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.swapiService.getCharacter(Number(id)).subscribe((data) => {
      this.profile = data;
    });
  }

  goBack(): void {
    window.history.back();
  }

}

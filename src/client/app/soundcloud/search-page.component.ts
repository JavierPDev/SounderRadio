import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SoundcloudService } from './soundcloud.service';

@Component({
  moduleId: module.id,
  selector: 'sp-search-page',
  templateUrl: 'search-page.component.html',
  styleUrls: ['search-page.component.css'],
})
export class SearchPageComponent implements OnInit {
  public searchTerm: string;
  public results[]: any;

  constructor(private _activatedRoute: ActivatedRoute,
             private _soundcloudService: SoundcloudService) {}

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.searchTerm = params.searchTerm;
      this._soundcloudService.search(this.searchTerm)
        .subscribe(res => this.results = res.json(),
                  err => console.log(err));
    });
  }

}



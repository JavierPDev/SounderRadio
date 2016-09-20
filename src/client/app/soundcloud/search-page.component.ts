import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToasterService } from 'angular2-toaster/angular2-toaster';

import { SoundcloudService } from './soundcloud.service';

@Component({
  moduleId: module.id,
  selector: 'sp-search-page',
  templateUrl: 'search-page.component.html',
  styleUrls: ['search-page.component.css'],
})
export class SearchPageComponent implements OnInit {
  private _cssClass: string = 'plain-background';
  public results: any[] = [];
  public searchCompleted: boolean = false;
  public searchTerm: string;

  constructor(private _activatedRoute: ActivatedRoute,
             private _soundcloudService: SoundcloudService,
             private _toasterService: ToasterService) {}

  ngOnInit() {
    document.body.classList.add(this._cssClass);
    this._activatedRoute.params.subscribe(params => {
      this.searchTerm = params.searchTerm;
      this._soundcloudService.search(this.searchTerm)
        .subscribe(res => {
          this.searchCompleted = true;
          this.results = res.json();
        },
          err => this._toasterService.pop('error', 'Error', err));
    });
  }

  ngOnDestroy() {
    document.body.classList.remove(this._cssClass);
  }
}



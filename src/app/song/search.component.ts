import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToasterService } from 'angular2-toaster/angular2-toaster';

import { SoundcloudService } from './soundcloud.service';

@Component({
  moduleId: module.id,
  selector: 'sr-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css'],
})
export class SearchComponent implements OnInit {
  public results: any[] = [];
  public searchCompleted: boolean = false;
  public searchTerm: string;
  private _cssClass: string = 'plain-background';

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _renderer: Renderer2,
    private _soundcloudService: SoundcloudService,
    private _toasterService: ToasterService
  ) {}

  ngOnInit() {
    this._renderer.addClass(document.body, this._cssClass);
    this._activatedRoute.params.subscribe(params => {
      this.searchTerm = params.searchTerm;
      this._soundcloudService.search(this.searchTerm)
        .subscribe(res => {
          this.searchCompleted = true;
          this.results = res.json();
        },
          err => this._toasterService.pop('error', 'Error', err)
        );
    });
  }

  ngOnDestroy() {
    this._renderer.removeClass(document.body, this._cssClass);
  }
}

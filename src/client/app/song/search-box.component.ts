import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'sp-search-box',
  templateUrl: 'search-box.component.html',
  styleUrls: ['search-box.component.css'],
})
export class SearchBoxComponent {
  @Input() clearAfterSubmission: boolean;
  @Input() searchTerm: string;

  constructor(private _router: Router) {}

  public search(): void {
    this._router.navigate(['search', this.searchTerm]);
    if (this.clearAfterSubmission) this.searchTerm = '';
  }
}


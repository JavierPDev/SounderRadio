import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { AboutModule } from './about.module';

export function main() {
   describe('About component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [AboutModule]
      });
    });

    it('should have correct links',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            let aboutDOMEl = fixture.debugElement.children[0].nativeElement;

	          // expect(aboutDOMEl.querySelectorAll('h1')[0].textContent).toEqual('About');
	          expect(aboutDOMEl.querySelectorAll('a')[0].href).toEqual('http://soundcloud.com/');
	          expect(aboutDOMEl.querySelectorAll('a')[1].href).toEqual('http://angular.io/');
	          expect(aboutDOMEl.querySelectorAll('a')[2].href).toEqual('https://github.com/mgechev/angular2-seed');
	          expect(aboutDOMEl.querySelectorAll('a')[3].href).toEqual('https://github.com/JavierPDev/SounderRadio');
          });
        }));
    });
}

@Component({
  selector: 'test-cmp',
  template: '<sr-about></sr-about>'
})
class TestComponent {}

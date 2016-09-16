// angular
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MdCardModule } from '@angular2-material/card';

// app
import {t} from '../../frameworks/test/index';
import {AboutComponent} from './about.component';

// test module configuration for each test
const testModuleConfig = () => {
  TestBed.configureTestingModule({
    imports: [
      MdCardModule
    ],
    declarations: [AboutComponent, TestComponent]
  });
};

export function main() {
  t.describe('@Component: AboutComponent', () => {

    t.be(testModuleConfig);

    t.it('should work',
      t.async(() => {
        TestBed.compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            let aboutDOMEl = fixture.debugElement.children[0].nativeElement;

	          t.e(aboutDOMEl.querySelectorAll('h2')[0].textContent).toEqual('Features');
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-about></sd-about>'
})
class TestComponent { }

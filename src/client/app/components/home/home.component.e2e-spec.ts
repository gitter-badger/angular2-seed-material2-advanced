import {t, selectDropdownByValue} from '../../frameworks/test/index';

declare var browser: any, element: any, by: any;

t.describe('Home', function() {

  t.be(function() {
    browser.get('/');
  });

  t.it('should have correct h2', function() {
      t.e(element(by.css('sd-home .home-title')).getText()).toEqual('I love technology!');
  });

  t.it('should have an input', function() {
    t.e(element(by.css('sd-home .home-form .home-input')).isPresent()).toEqual(true);
  });

  t.it('should have a list of computer scientists', function() {
    t.e(element(By.css('md-list')).all(By.css('h3')).getText())
      .toEqual(['Edsger Dijkstra', 'Donald Knuth', 'Alan Turing', 'Grace Hopper']);
  });

  t.it('should add a name to the list using the form', function() {
    element(by.css('sd-home .home-form .home-input input')).sendKeys('Tim Berners-Lee');
    element(by.css('sd-home .home-form .home-button')).click();

    t.e(element(By.css('md-list')).all(By.css('h3')).getText())
      .toEqual(['Edsger Dijkstra', 'Donald Knuth', 'Alan Turing', 'Grace Hopper', 'Tim Berners-Lee']);
  });

  t.it('language switcher should change language', function() {
    t.e(element(by.css('sd-home .home-title')).getText()).toEqual('I love technology!');
    selectDropdownByValue('sd-toolbar lang-switcher select', 'fr', 500);
    t.e(element(by.css('sd-home .home-title')).getText()).toEqual(`J'adore la technologie !`);
    t.e(element(by.css('sd-app sd-home')).all(by.tagName('p')).first().getText())
      .toEqual(`En récompense, voici une liste de géniaux informaticiens :`);
  });

});

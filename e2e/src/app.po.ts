import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
<<<<<<< HEAD
    return browser.get('/') as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
=======
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
>>>>>>> 61e73a4ddfeae9a36c93fed571e60c895b9079bd
  }
}

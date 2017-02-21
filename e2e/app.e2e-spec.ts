import { NpmLinkAngularTestModulePage } from './app.po';

describe('npm-link-angular-test-module App', () => {
  let page: NpmLinkAngularTestModulePage;

  beforeEach(() => {
    page = new NpmLinkAngularTestModulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

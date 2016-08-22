import { Testapp01Page } from './app.po';

describe('testapp01 App', function() {
  let page: Testapp01Page;

  beforeEach(() => {
    page = new Testapp01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

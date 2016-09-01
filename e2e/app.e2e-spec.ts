import { MixpitPage } from './app.po';

describe('mixpit App', function() {
  let page: MixpitPage;

  beforeEach(() => {
    page = new MixpitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { BigDataFrontPage } from './app.po';

describe('big-data-front App', () => {
  let page: BigDataFrontPage;

  beforeEach(() => {
    page = new BigDataFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

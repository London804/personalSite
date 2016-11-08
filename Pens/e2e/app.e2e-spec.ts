import { PensPage } from './app.po';

describe('pens App', function() {
  let page: PensPage;

  beforeEach(() => {
    page = new PensPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

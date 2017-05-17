import { SounderRadioPage } from './app.po';

describe('sounder-radio App', () => {
  let page: SounderRadioPage;

  beforeEach(() => {
    page = new SounderRadioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { KinesiologyPracticePage } from './app.po';

describe('kinesiology-practice App', function() {
  let page: KinesiologyPracticePage;

  beforeEach(() => {
    page = new KinesiologyPracticePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

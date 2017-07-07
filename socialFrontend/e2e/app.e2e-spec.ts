import { SocialEventPage } from './app.po';

describe('social-event App', () => {
  let page: SocialEventPage;

  beforeEach(() => {
    page = new SocialEventPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

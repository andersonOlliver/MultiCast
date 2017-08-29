import { MultiMusicItunesPage } from './app.po';

describe('multi-music-itunes App', () => {
  let page: MultiMusicItunesPage;

  beforeEach(() => {
    page = new MultiMusicItunesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

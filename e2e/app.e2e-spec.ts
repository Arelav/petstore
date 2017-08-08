import { PetstorePage } from './app.po';

describe('petstore App', () => {
  let page: PetstorePage;

  beforeEach(() => {
    page = new PetstorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

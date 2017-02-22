import { Ng2mPegcorpuPage } from './app.po';

describe('ng2m-pegcorpu App', function() {
  let page: Ng2mPegcorpuPage;

  beforeEach(() => {
    page = new Ng2mPegcorpuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

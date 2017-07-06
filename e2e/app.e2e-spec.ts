import { ROICalculatorPage } from './app.po';

describe('roi-calculator App', function() {
  let page: ROICalculatorPage;

  beforeEach(() => {
    page = new ROICalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

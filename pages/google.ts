import { Page, expect } from '@playwright/test';

export enum GoogleHomePageSelectors {
  searchInput = 'input[type="text"][title="Search"]',
  searchButton = 'input[value="Google Search"]',
}

export default class GoogleHomePage {
  baseUrl: string;
  page: Page;
  
  constructor(page: Page) {
    this.baseUrl = 'https://google.com/'
    this.page = page;
  };

  goToPage = async () => {
    await this.page.goto(this.baseUrl);
  };

  searchForText = async (searchText: string) => {
    await this.page.type(GoogleHomePageSelectors.searchInput, searchText);
    await this.page.click(GoogleHomePageSelectors.searchButton);
  };

  validateSearchResultExists = async (link: string) => {
    const linkSelector = `a[href='${link}']`;
    const searchResult = this.page.locator(linkSelector);

    await this.page.waitForSelector(linkSelector);
    await expect(searchResult).toBeVisible();
  };
}
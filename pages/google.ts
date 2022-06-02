import { Page, expect } from '@playwright/test';

export enum GoogleHomePageSelectors {
  searchInput = 'input[type="text"][title="Search"]',
  
  // Problem 1: define the selector for the "Google Search" button
  searchButton = '',
}

export default class GoogleHomePage {
  baseUrl: string;
  page: Page;
  
  constructor(page: Page) {
    this.baseUrl = 'https://google.com/';
    this.page = page;
  };

  goToPage = async () => {
    await this.page.goto(this.baseUrl);
  };

  searchForText = async (searchText: string) => {
    // Problem 2: Write a function that searches for the provided searchText argument
  };

  validateSearchResultExists = async (link: string) => {
    const linkSelector = `a[href='${link}']`;
    const searchResult = this.page.locator(linkSelector);

    await this.page.waitForSelector(linkSelector);
    await expect(searchResult).toBeVisible();
  };
}
import { test } from '@playwright/test';
import GoogleHomePage from '../pages/google';

const TELEVET_URL = 'https://televet.com/'

test('search for TeleVet', async ({ page }) => {
  const googleHomePage = new GoogleHomePage(page);
  await googleHomePage.goToPage();
  await googleHomePage.searchForText('TeleVet');
  await googleHomePage.validateSearchResultExists(TELEVET_URL);
});
import test, { expect } from "@playwright/test";

test('homepage has title, heading, paragraph and takes a screenshot',async({page})=>{
    await page.goto('/');
    await page.waitForNavigation();
    
    await expect(page).toHaveTitle(/Next\.js/);

    const heading = page.locator('h1');
    await expect(heading).toHaveText('Next js')

    const paragraph = page.locator('p');
    await expect(paragraph).toHaveText('Enjoying Playwright thing');

    await page.screenshot({path:'screenshots/homepage.png'})
})
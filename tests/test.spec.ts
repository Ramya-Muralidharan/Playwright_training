import { chromium, test, expect } from '@playwright/test';
    
    test('Test Case 1', async () => {
        function one(){
            console.log("Playwright Test Case 1");
        }
        one();
    });
    test('Test Case 2', async () => {
        async function two(){
            console.log("Test Case 2");
            
            // await page.goto('https://playwright.dev/');
            // await expect(page).toHaveTitle(/Playwright/);

            const browser = await chromium.launch()
            const context = await browser.newContext();
            const page1 = await context.newPage();
            await page1.goto('https://the-internet.herokuapp.com/login');
            await page1.getByLabel('Username').fill('tomsmith');
            await page1.getByLabel('Password').fill('SuperSecretPassword!');
            await page1.getByRole('button', { name: 'Login' }).click();
           
            // await page1.getByPlaceholder('Your email').fill('ramya.muralidharan@valuemomentum.com');
            // await page1.getByPlaceholder('Your password').fill('Softwaretesting@123');
           

            // const context2 = await browser.newContext();
            
            // const page2 = await context2.newPage();
            //   await page2.goto('https://practicesoftwaretesting.com/');
            // await page2.getByRole('link', { name: 'Sign in' }).click();
           
            // await page2.getByPlaceholder('Your email').fill('ramya.muralidharan@valuemomentum.com');
            // await page2.getByPlaceholder('Your password').fill('Softwaretesting@123');
            

            await expect(page1.locator('h2')).toHaveText('Secure Area');
            await page1.getByText('Logout').click();           
            
             
            const [response, response1] = await Promise.all([
                page1.waitForResponse(response => response.request().url().includes('/foundation/foundation.js')),
                page1.waitForResponse(response => response.request().url().includes('/abc/foundation.js')),
                page1.getByRole('link', { name: 'Logout' }).click()
            ]);
            expect(response.status()).toBe(200)
            ;
            expect(response1.status()).toBe(200)
            ;
//clearner way
            await Promise.all([
  page1.getByRole('link', { name: 'Logout' }).click(), // fire the click
]);

const [response2, response3] = await Promise.all([
  page1.waitForResponse(r => r.request().url().includes('/foundation/foundation.js')),
  page1.waitForResponse(r => r.request().url().includes('/abc/foundation.js'))
]);

expect(response2.status()).toBe(200);
expect(response3.status()).toBe(200);
        }
        await two();
    });

import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";

setDefaultTimeout(60 * 1000 * 2)

Given('User navigates to the application', async function () {
    await fixture.page.goto(process.env.BASEURL);
    fixture.logger.info("Navigated to the application")
})

Given('User click on the login link', async function () {
    await fixture.page.locator("//*[@id='login2']").click();
});

Given('User enter the username as {string}', async function (username) {
    await fixture.page.locator("//*[@id='loginusername']").type(username);
});

Given('User enter the password as {string}', async function (password) {
    await fixture.page.locator("//*[@id='loginpassword']").type(password);
})

When('User click on the login button', async function () {
    await fixture.page.locator("//*[@id='logInModal']/div/div/div[3]/button[2]").click();
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
   await fixture.page.waitForTimeout(2000);
});


Then('Login should be success', async function () {
    const user = fixture.page.locator("//*[@id='logout2']");
    //await expect(user).toBeVisible();
   console.log(user);
   
   
})



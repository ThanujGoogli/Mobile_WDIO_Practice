import { expect, browser, $ } from '@wdio/globals'

describe('Android Native Features Tests', () => {

    it.only('Access an Activity directly', async () => {

        await driver.startActivity({
            appPackage: 'io.appium.android.apis',
            appActivity: 'io.appium.android.apis.app.AlertDialogSamples'
        });

        const actionBar = await $('//android.view.ViewGroup[@resource-id="android:id/action_bar"]');
        await expect(actionBar).toBeDisplayed();
    })
})
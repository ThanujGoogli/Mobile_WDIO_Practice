import { expect, browser, $ } from '@wdio/globals'

describe('Android Native Features Tests', () => {

    it('Access an Activity directly', async () => {

        await driver.startActivity({
            appPackage: 'io.appium.android.apis',
            appActivity: 'io.appium.android.apis.app.AlertDialogSamples'
        });

        const actionBar = await $('//android.view.ViewGroup[@resource-id="android:id/action_bar"]');
        await expect(actionBar).toBeDisplayed();
    })

    it('Working with Dialog boxes', async () => {


        await driver.startActivity({
            appPackage: 'io.appium.android.apis',
            appActivity: 'io.appium.android.apis.app.AlertDialogSamples'
        });

        await $('~OK Cancel dialog with a message').click();

        //get Alert text

        console.log('ALERT TEXT -->', await driver.getAlertText());

        // await driver.acceptAlert();   //Accept the alert
        //await driver.dismissAlert();  //Dismiss the alert

        await $('//android.widget.Button[@resource-id="android:id/button1"]').click();  // To click on OK button

        await expect($('//android.widget.TextView[@resource-id="android:id/alertTitle"]')).not.toExist();
        
    })

    it('Vertical Scrolling', async () => {

        await $('~App').click();

        await $('~Activity').click();

        //Scroll to the element and click -- This is more stable and recommended way to scroll to an element and click
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');  //Scroll to the end of the page
        await $('~Secure Surfaces').click();  //This will not work as the element is not visible in the view port

    })

    it.only('Horizontal Scrolling', async () => {

        await $('~Views').click();
        await $('~Gallery').click();
        await $('~1. Photos').click();

        //Horizontal Scrolling
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');  //Scroll forward
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');  //Scroll backward

        await driver.pause(3000);
    })
})
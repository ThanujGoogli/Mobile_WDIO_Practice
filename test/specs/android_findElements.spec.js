import { expect, browser, $ } from '@wdio/globals'

describe.skip('Android Elements Tests', () => {
    it('Find element by accessibility ID', async () => {
        
        //find element by accessibility ID
        const appOption = await $('~Accessibility');

        //click on element
        await appOption.click();

        //assertion
        const actionBar = await $('~Accessibility Node Provider');
        await expect(actionBar).toBeDisplayed();
})
it('Find element by class name', async () => {

    // Find element by class name
        const className = await $('android.widget.TextView',{strict: false});

        console.log(await className.getText());

        // Assertion - verify partial text
        const actualText = await className.getText();
        expect(actualText).toContain('API Demos');
})
it('Find element by XPath', async () => {

    const App = await $('//android.widget.TextView[@content-desc="App"]');
    await App.click();
    //xpath - (//tagname[@attribute='value'])[index]

    const actionBar = await $('//android.widget.TextView[@content-desc="Alert Dialogs"]');
    await expect(actionBar).toBeDisplayed();
    await actionBar.click();

    //find by resource-id
    const ListDialog = await $('//android.widget.Button[@content-desc="List dialog"]');
    await ListDialog.click();

    //find by text
    const commandOne = await $('//android.widget.TextView[@text="Command one"]');
    await expect(commandOne).toBeDisplayed();
    await commandOne.click();

    const commandOneText = await $('//android.widget.TextView[@resource-id="android:id/message"]');
    await expect(commandOneText).toHaveText('You selected: 0 , Command one');
})
it('Find element by UIAutomator', async () => {

    //find element by UIAutomator
    const appOption = await $('android=new UiSelector().text("App")');
    await appOption.click();

    //assertion
    const actionBar = await $('~Action Bar');
    await expect(actionBar).toBeDisplayed();
})
it('Find multiple elements', async () => {

    //find multiple elements
    const listOfElements = await $$('android.widget.TextView');
    console.log("Total elements found: " + listOfElements.length);

    for(const element of listOfElements){
        console.log(await element.getText());
    }

    //assertion
    expect(listOfElements.length).toBeGreaterThan(0);
})
it('Text input field', async () => {

    const Views = await $('~Views');
    await Views.click();

    const AutoComplete = await $('~Auto Complete');
    await AutoComplete.click();

    const screenTop = await $('~1. Screen Top');
    await screenTop.click();

    const textInput = await $('//android.widget.AutoCompleteTextView[@resource-id="io.appium.android.apis:id/edit"]');
    await textInput.addValue('Canada');

    //assertion
    await expect(textInput).toHaveText('Canada');


})
})

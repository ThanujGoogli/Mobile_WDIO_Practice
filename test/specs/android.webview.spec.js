import AddNoteScreen from "../screenObjects/android/add-note-screen.js"

describe('Web Browser Access',()=>{

    it('Access external link and verify content in the browser',async()=>{

        //click on the nav icon
        await AddNoteScreen.Options.click();
        
        //click on FB link
        await $('//*[@text="Like us on Facebook"]').click();

        //get current context
        // console.log(await driver.getContext());

        //get all context
        await driver.getContexts();

        //switch to webview chrome context
        await driver.switchContext('WEBVIEW_chrome');

        //Assert cover image displayed

        const coverImg = await $('.img.coverPhoto')
        await expect(coverImg).toBeDisplayed();

        //Swicth back to application

        await driver.switchContext('NATIVE_APP');
        await driver.back();
    })
})
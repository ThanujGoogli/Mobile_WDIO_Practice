
describe('Add Notes',()=>{

    it('Skip tutorial',async()=>{

        await $('//android.widget.Button[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click()
        await expect($('//*[@text="Add note"]')).toBeDisplayed();
        
    })

    it('Add a note, save changes and verfiy note',async()=>{

        await $('//*[@text="Add note"]').click();
        await $('//*[@text="Text"]').click();
        await expect($('//*[@text="Editing"]')).toBeDisplayed();

        const noteTitle = await $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
        // Add note title 
        await noteTitle.addValue('Fav anime list');

        const noteBody = await $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
        //Add body
        await noteBody.addValue('One punch man \n Naurto \n Devil may cry');

        //Save changes
        await driver.back();
        // await driver.back();

        //Assertion
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed();
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText('One punch man \n Naurto \n Devil may cry')

    })

    it('Delete Note and Verify it in Thrash',async()=>{

        
        await driver.back();

        //Tap on Note
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').click()

        //Tap on Options
        await $('//android.widget.ImageButton[@content-desc="More"]').click();

        //Tap on Delete
        await $('//*[@text="Delete"]').click();
        //Tap on OK in Alter window
        await $('//*[@resource-id="android:id/button1"]').click();

        //Tap on Options - in Home screen
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();

        //Tap on TrashCan
        await $('//*[@text="Trash Can"]').click();

        //Assertion
        expect(await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')).toHaveText('Fav anime list');


    })
})
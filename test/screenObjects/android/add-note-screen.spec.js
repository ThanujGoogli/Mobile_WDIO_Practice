import AddNoteScreen from './screenobjects/android/add-note-screen.js'
describe('Add Notes',()=>{

    it('Skip tutorial',async()=>{

        await AddNoteScreen.skipButton.click()
        await expect(AddNoteScreen.AddNote).toBeDisplayed();
        
    })

    it('Add a note, save changes and verfiy note',async()=>{

        await AddNoteScreen.AddNote.click();
        await AddNoteScreen.Text.click();
        await expect(AddNoteScreen.EditText).toBeDisplayed();

        await AddNoteScreen.Title.addValue('Fav anime list');

        await AddNoteScreen.Body.addValue('One punch man \n Naurto \n Devil may cry');

        //Save changes
        await AddNoteScreen.saveNote();

        //Assertion
        await expect(AddNoteScreen.EditIcon).toBeDisplayed();
        await expect(AddNoteScreen.ViewNote).toHaveText('One punch man \n Naurto \n Devil may cry')

    })

    it.skip('Delete Note and Verify it in Thrash',async()=>{

        //Steps to add a note
        await $('//android.widget.Button[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click()
        await $('//*[@text="Add note"]').click();
        await $('//*[@text="Text"]').click();
        await expect($('//*[@text="Editing"]')).toBeDisplayed();
        const noteTitle = await $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
        await noteTitle.addValue('Fav anime list');
        await driver.back();
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
import AddNoteScreen from '../screenObjects/android/add-note-screen.js'
import DeleteNoteScreen from '../screenObjects/android/delete-note-screen.js'
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

    it('Delete Note and Verify it in Thrash',async()=>{

        //Back to Home screen
        await AddNoteScreen.saveNote();

        //Tap on Note
        await AddNoteScreen.FirstList.click()

        //Tap on Options
        await DeleteNoteScreen.MoreOption.click();

        //Tap on Delete
        await DeleteNoteScreen.Delete.click();
        //Tap on OK in Alter window
        await DeleteNoteScreen.OK.click();

        //Tap on Options - in Home screen
        await AddNoteScreen.Options.click();

        //Tap on TrashCan
        await AddNoteScreen.TrashCan.click();

        //Assertion
        expect(await AddNoteScreen.FirstList).toHaveText('Fav anime list');


    })
})
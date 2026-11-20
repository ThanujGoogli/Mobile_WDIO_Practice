class AddNoteScreen{

    get skipButton(){
        return $('//android.widget.Button[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
    }
    get AddNote(){
        return $('//*[@text="Add note"]');
    }
    get Text(){
        return $('//*[@text="Text"]');
    }
    get EditText(){
        return $('//*[@text="Editing"]')
    }

    get Title(){
        return $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
    }
    get Body(){
        return $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
    }
    get EditIcon(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');
    }
    get ViewNote(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]');
    }
    get FirstList(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }

    get Options(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }
    get TrashCan(){
        return $('//*[@text="Trash Can"]');
    }
    async saveNote(){

        await driver.back();
    }


}

export default new AddNoteScreen();

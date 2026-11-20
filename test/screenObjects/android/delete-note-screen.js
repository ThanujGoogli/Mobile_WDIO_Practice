class DeleteNoteScreen{

    get MoreOption(){
        return $('//android.widget.ImageButton[@content-desc="More"]');
    }
    get Delete(){
        return $('//*[@text="Delete"]');
    }
    get OK(){
        return $('//*[@resource-id="android:id/button1"]');
    }

}

export default new DeleteNoteScreen();
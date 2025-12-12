import AddNoteScreen from "./add-note.screen";

class EditNoteScreen {

    get firstNote() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }

    get moreIcon() {
        return $('~Diğer');
    }

    get deleteIcon() {
        return $('//*[@text="Sil"]');
    }

    get navIcon() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }

    get trashCanItem() {
        return $('//*[@text="Çöp Kutusu"]');
    }

    async skipTutorial() {

        const skipTutorialBtn = await AddNoteScreen.skipBtn;
        const isBtnDisplayed = await skipTutorialBtn.isDisplayed();
        
        if(isBtnDisplayed) {
            skipTutorialBtn.click();
            await expect(AddNoteScreen.addNoteTxt).toBeDisplayed();
        }
        
        else {
            await expect(AddNoteScreen.addNoteTxt).toBeDisplayed();
        }
    }

    async addAndSaveNote(noteHeading, noteBody) {

        await AddNoteScreen.addNoteTxt.click();
        await AddNoteScreen.textOption.click();
        await expect(AddNoteScreen.textEditing).toBeDisplayed();
        
        await AddNoteScreen.noteHeading.addValue(noteHeading);
        await AddNoteScreen.noteBody.addValue(noteBody);
        
        await AddNoteScreen.saveNote();
    }
}

export default new EditNoteScreen();
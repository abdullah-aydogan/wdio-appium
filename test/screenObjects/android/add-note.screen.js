class AddNoteScreen {

    get skipBtn() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
    }

    get addNoteTxt() {
        return $('//*[@text="Not Ekle"]');
    }

    get textOption() {
        return $('//*[@text="Metin"]');
    }

    get textEditing() {
        return $('//*[@text="Düzenleniyor"]');
    }

    get noteHeading() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
    }

    get noteBody() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
    }

    get editBtn() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');
    }

    get viewNote() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]');
    }

    async saveNote() {

        await driver.back();
        await driver.back();
    }
}

export default new AddNoteScreen();
describe('Delete Note', () => {

    it('Skip Tutorial', async () => {

        const skipTutorialBtn = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
        const isBtnDisplayed = await skipTutorialBtn.isDisplayed();

        if(isBtnDisplayed) {
            skipTutorialBtn.click();
            await expect($('//*[@text="Not Ekle"]')).toBeDisplayed();
        }

        else {
            await expect($('//*[@text="Not Ekle"]')).toBeDisplayed();
        }
    });

    it('Add a note, save changes & verify note', async () => {

        await $('//*[@text="Not Ekle"]').click();
        await $('//*[@text="Metin"]').click();
        await expect($('//*[@text="Düzenleniyor"]')).toBeDisplayed();

        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
            .addValue("Fav Anime List");

        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
            .addValue("Naruto\nOnePiece\nAOT");

        await driver.back();
        await driver.back();

        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]'))
            .toBeDisplayed();

        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'))
            .toHaveText("Naruto\nOnePiece\nAOT");
    });

    it('Delete a note & check the note in trash can', async () => {

        await driver.back();

        const note = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')
            .getText();

        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').click();
        await $('~Diğer').click();
        await $('//*[@text="Sil"]').click();
        
        await driver.acceptAlert();

        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();
        await $('//*[@text="Çöp Kutusu"]').click();

        const trashCanItem = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')
            .getText();

        await expect(trashCanItem).toEqual(note);
    });
});
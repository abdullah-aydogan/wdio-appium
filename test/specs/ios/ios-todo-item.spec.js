describe('Todo Item', () => {

    it('Create a Todo item', async () => {

        await $('//*[@name="Create list"]').click();
        await $('//*[@value="List Name"]').addValue("Things to do");
        await $('~Create').click();

        await expect(await $("~Things to do")).toBeExisting();

        await $("~Things to do").click();
        await $("//*[@name='Create item']").click();
        await $('//*[@value="Title"]').addValue("Buy groceries");
        await $("//*[@value='Due']").click();
        // await $("~Date Picker").click();
        await $("//XCUIElementTypeButton[@name='Wednesday, December 10']").click();
        // await $("//XCUIElementTypeWindow[@index=2]").click();
        await $("~Create").click();

        await expect(await $("~Buy groceries")).toBeExisting();
        await expect(await $("~Due 10 December 2025")).toBeExisting();
    });
});
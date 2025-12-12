import ListScreen from '../../screenObjects/ios/list.screen';

describe('Todo List', () => {

    it('Create a Todo list', async () => {

        await ListScreen.createListBtn.click();
        await ListScreen.listNameInput.addValue("Things to do today");
        await ListScreen.createBtn.click();

        await expect(await ListScreen.listNameField("Things to do today")).toBeExisting();
    });
});
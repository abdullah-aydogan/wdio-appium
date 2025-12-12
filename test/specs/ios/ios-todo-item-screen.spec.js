import ListScreen from '../../screenObjects/ios/list.screen';
import ItemScreen from '../../screenObjects/ios/item.screen';

describe('Todo Item', () => {

    before(async () => {

        await ListScreen.createListBtn.click();
        await ListScreen.listNameInput.addValue("Things to do today");
        await ListScreen.createBtn.click();
        
        await expect(await ListScreen.listNameField("Things to do today")).toBeExisting();

        await ListScreen.listNameField("Things to do today").click();
    });

    beforeEach(() => {
        console.log('BEFORE EACH HOOK!!');
    });

    after(() => {
        console.log('AFTER HOOK!!');
    });

    afterEach(() => {
        console.log('AFTER EACH HOOK!!');
    });

    it('Create a Todo item', async () => {

        await ItemScreen.createItem.click();
        await ItemScreen.title.addValue("Buy groceries");
        await ItemScreen.dueDate.click();
        await ItemScreen.timeBtn.click();
        await ItemScreen.createBtn.click();

        await expect(await ItemScreen.getByAccessibility("Buy groceries")).toBeExisting();
        await expect(await ItemScreen.getByAccessibility("Due 14 December 2025")).toBeExisting();
    });
});
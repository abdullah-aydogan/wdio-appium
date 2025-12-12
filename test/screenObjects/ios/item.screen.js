class ItemScreen {

    get createItem() {
        return $("//*[@name='Create item']");
    }

    get title() {
        return $('//*[@value="Title"]');
    }

    get dueDate() {
        return $("//*[@value='Due']");
    }

    get timeBtn() {
        return $("//XCUIElementTypeButton[@name='Sunday, December 14']");
    }

    get createBtn() {
        return $("~Create");
    }

    getByAccessibility(name) {
        return $(`~${name}`);
    }
}

export default new ItemScreen();
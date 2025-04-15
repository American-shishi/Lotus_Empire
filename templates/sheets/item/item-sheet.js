export class LotusItemSheet extends ItemSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["lotus", "sheet", "item"],
            template: "systems/Lotus_Empire/templates/sheets/item/item-sheet.html",
            width: 500,
            height: 300
        });
    }

    getData() {
        const data = super.getData();
        return data;
    }
}
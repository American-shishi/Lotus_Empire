export class LotusActorSheet extends ActorSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["lotus", "sheet", "actor"],
            template: "systems/Lotus_Empire/templates/sheets/actor/actor-sheet.html",
            width: 600,
            height: 400
        });
    }

    getData() {
        const data = super.getData();
        return data;
    }
}
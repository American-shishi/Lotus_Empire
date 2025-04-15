import { LotusActorSheet } from "./templates/sheets/actor/actor-sheet.js";
import { LotusItemSheet } from "./templates/sheets/item/item-sheet.js";

Hooks.once("init", async () => {
    console.log("Lotus Empire | Initializing system");

    game.lotus = {
        rollAttack: (actor) => {
            // Placeholder example
            const roll = new Roll("1d8 + @attributes.strength", actor.getRollData());
            roll.roll({ async: true }).then(r => {
                r.toMessage({
                    speaker: ChatMessage.getSpeaker({ actor }),
                    flavor: "Crane Stance Attack"
                });
            });
        }
    };

    CONFIG.Actor.documentClass = Actor;
    CONFIG.Item.documentClass = Item;

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("lotus-empire", LotusActorSheet, { makeDefault: true });

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("lotus-empire", LotusItemSheet, { makeDefault: true });
});

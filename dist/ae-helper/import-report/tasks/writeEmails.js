"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../../models");
const utils_1 = require("./utils");
exports.default = utils_1.newTask('WRITE_EMAILS', [], async (context) => {
    if (context.reportOfAll.mappedEmails == null)
        return;
    await utils_1.batchInsertWithProgress(context, models_1.Email, function* () {
        for (const mappedEmail of context.reportOfAll.mappedEmails) {
            const entity = new models_1.Email();
            entity.email = mappedEmail;
            yield entity;
        }
    }, { ignoreOnConflict: true });
});

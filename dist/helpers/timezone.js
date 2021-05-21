"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timezone = void 0;
const services_1 = require("./services");
const timezoneNames_1 = require("./timezoneNames");
const errors_1 = require("./errors");
class Timezone {
    async getFormatLastPeriod() {
    }
    static async getTeamUserTimezone(em, loginTeamUser) {
        let timezoneName = await services_1.getServices().config.get(em, 'vdev/user/timezone', { teamUserId: loginTeamUser.id, defaultValue: 'UTC' });
        if (!timezoneNames_1.allowTimezoneNameStrs.includes(timezoneName)) {
            throw new errors_1.ApiError('timezoneName must in allowTimezoneNameStrs!');
        }
        return timezoneName;
    }
}
exports.Timezone = Timezone;

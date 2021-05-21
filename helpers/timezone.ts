import { getServices } from "./services";
import { allowTimezoneNameStrs } from "./timezoneNames"
import { ApiError } from "./errors"

export class Timezone {
  protected async getFormatLastPeriod() {

  }

  public static async getTeamUserTimezone(em: any, loginTeamUser: any) {
    let timezoneName = await getServices().config.get(em, 'vdev/user/timezone', { teamUserId: loginTeamUser.id, defaultValue: 'UTC' });
    if (!allowTimezoneNameStrs.includes(timezoneName)) {
      throw new ApiError('timezoneName must in allowTimezoneNameStrs!');
    }
    return timezoneName;
  }
}

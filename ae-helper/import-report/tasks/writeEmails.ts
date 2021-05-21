import { Email } from "../../../models";
import { batchInsertWithProgress, newTask } from "./utils";

export default newTask('WRITE_EMAILS', [
], async (context) => {
  if (context.reportOfAll.mappedEmails == null) return;

  await batchInsertWithProgress(context, Email, function* () {
    for (const mappedEmail of context.reportOfAll.mappedEmails) {
      const entity = new Email();
      entity.email = mappedEmail;
      yield entity;
    }
  }, { ignoreOnConflict: true });
});

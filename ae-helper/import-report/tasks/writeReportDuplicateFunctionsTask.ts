import { ReportDuplicateFunction, ReportDuplicateGroup } from "../../../models";
import { batchInsertWithProgress, newTask } from "./utils";
import writeReportFunctionsTask, { WriteReportFunctionsTaskOutput } from "./writeReportFunctionsTask";
import * as Uuid from 'uuid';
import writeReportTask from "./writeReportTask";
import writeEmails from "./writeEmails";

export type WriteReportDuplicateFunctionsTaskOutput = {
  numDuplicateFunctions: number;
};

export default newTask<WriteReportDuplicateFunctionsTaskOutput>('WRITE_REPORT_DUPLICATE_FUNCTIONS', [
  writeReportFunctionsTask,
  writeReportTask,
  writeEmails,
], async (context, [{ cagNodeIdToFuncIdTbl }]: [WriteReportFunctionsTaskOutput]) => {
  if (context.reportOfAll.dryness == null) return;

  const duplicateFuncIds = new Set<string>();
  const groupEntities = [];
  const entities = [];
  for (const group of context.reportOfAll.dryness.drynessGroups) {
    const groupRecord = new ReportDuplicateGroup();
    groupEntities.push(groupRecord);
    groupRecord.id = Uuid.v4();
    groupRecord.duplicate_function_number = group.drynessFuncs.length;
    groupRecord.report_id = context.reportId;
    for (const func of group.drynessFuncs) {
      const record = new ReportDuplicateFunction();
      entities.push(record);
      record.report_id = context.reportId;
      record.report_duplicate_group_id = groupRecord.id;
      record.format_email = func.email;
      record.report_function_id = cagNodeIdToFuncIdTbl.get(func.funcId);
      duplicateFuncIds.add(func.funcId);
    }
  }

  await batchInsertWithProgress(context, ReportDuplicateGroup, () => groupEntities);
  await batchInsertWithProgress(context, ReportDuplicateFunction, () => entities);

  return {
    numDuplicateFunctions: duplicateFuncIds.size,
  };
});

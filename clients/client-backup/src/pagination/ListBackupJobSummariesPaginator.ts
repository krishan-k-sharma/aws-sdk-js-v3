// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { BackupClient } from "../BackupClient";
import {
  ListBackupJobSummariesCommand,
  ListBackupJobSummariesCommandInput,
  ListBackupJobSummariesCommandOutput,
} from "../commands/ListBackupJobSummariesCommand";
import { BackupPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: BackupClient,
  input: ListBackupJobSummariesCommandInput,
  ...args: any
): Promise<ListBackupJobSummariesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBackupJobSummariesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListBackupJobSummaries(
  config: BackupPaginationConfiguration,
  input: ListBackupJobSummariesCommandInput,
  ...additionalArguments: any
): Paginator<ListBackupJobSummariesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListBackupJobSummariesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof BackupClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Backup | BackupClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}

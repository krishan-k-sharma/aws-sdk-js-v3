// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListAnalysesCommand,
  ListAnalysesCommandInput,
  ListAnalysesCommandOutput,
} from "../commands/ListAnalysesCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: QuickSightClient,
  input: ListAnalysesCommandInput,
  ...args: any
): Promise<ListAnalysesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAnalysesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAnalyses(
  config: QuickSightPaginationConfiguration,
  input: ListAnalysesCommandInput,
  ...additionalArguments: any
): Paginator<ListAnalysesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAnalysesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof QuickSightClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected QuickSight | QuickSightClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}

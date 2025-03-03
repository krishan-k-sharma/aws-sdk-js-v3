// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ListLinksCommand, ListLinksCommandInput, ListLinksCommandOutput } from "../commands/ListLinksCommand";
import { OAMClient } from "../OAMClient";
import { OAMPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: OAMClient,
  input: ListLinksCommandInput,
  ...args: any
): Promise<ListLinksCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListLinksCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListLinks(
  config: OAMPaginationConfiguration,
  input: ListLinksCommandInput,
  ...additionalArguments: any
): Paginator<ListLinksCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListLinksCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof OAMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected OAM | OAMClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}

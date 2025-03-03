// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  SearchListingsCommand,
  SearchListingsCommandInput,
  SearchListingsCommandOutput,
} from "../commands/SearchListingsCommand";
import { DataZoneClient } from "../DataZoneClient";
import { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: DataZoneClient,
  input: SearchListingsCommandInput,
  ...args: any
): Promise<SearchListingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchListingsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateSearchListings(
  config: DataZonePaginationConfiguration,
  input: SearchListingsCommandInput,
  ...additionalArguments: any
): Paginator<SearchListingsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchListingsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof DataZoneClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DataZone | DataZoneClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}

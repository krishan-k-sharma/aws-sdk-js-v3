// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeDomainAutoTunesCommand,
  DescribeDomainAutoTunesCommandInput,
  DescribeDomainAutoTunesCommandOutput,
} from "../commands/DescribeDomainAutoTunesCommand";
import { OpenSearchClient } from "../OpenSearchClient";
import { OpenSearchPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: OpenSearchClient,
  input: DescribeDomainAutoTunesCommandInput,
  ...args: any
): Promise<DescribeDomainAutoTunesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDomainAutoTunesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeDomainAutoTunes(
  config: OpenSearchPaginationConfiguration,
  input: DescribeDomainAutoTunesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDomainAutoTunesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeDomainAutoTunesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof OpenSearchClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected OpenSearch | OpenSearchClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}

// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListConfigurationRevisionsCommand,
  ListConfigurationRevisionsCommandInput,
  ListConfigurationRevisionsCommandOutput,
} from "../commands/ListConfigurationRevisionsCommand";
import { KafkaClient } from "../KafkaClient";
import { KafkaPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: KafkaClient,
  input: ListConfigurationRevisionsCommandInput,
  ...args: any
): Promise<ListConfigurationRevisionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListConfigurationRevisionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListConfigurationRevisions(
  config: KafkaPaginationConfiguration,
  input: ListConfigurationRevisionsCommandInput,
  ...additionalArguments: any
): Paginator<ListConfigurationRevisionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListConfigurationRevisionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof KafkaClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Kafka | KafkaClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}

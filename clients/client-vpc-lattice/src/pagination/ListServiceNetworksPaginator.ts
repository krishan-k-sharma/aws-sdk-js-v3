// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListServiceNetworksCommand,
  ListServiceNetworksCommandInput,
  ListServiceNetworksCommandOutput,
} from "../commands/ListServiceNetworksCommand";
import { VPCLatticeClient } from "../VPCLatticeClient";
import { VPCLatticePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: VPCLatticeClient,
  input: ListServiceNetworksCommandInput,
  ...args: any
): Promise<ListServiceNetworksCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListServiceNetworksCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListServiceNetworks(
  config: VPCLatticePaginationConfiguration,
  input: ListServiceNetworksCommandInput,
  ...additionalArguments: any
): Paginator<ListServiceNetworksCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListServiceNetworksCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof VPCLatticeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected VPCLattice | VPCLatticeClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}

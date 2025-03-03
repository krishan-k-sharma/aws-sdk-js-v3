// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetTraceGraphCommand,
  GetTraceGraphCommandInput,
  GetTraceGraphCommandOutput,
} from "../commands/GetTraceGraphCommand";
import { XRayClient } from "../XRayClient";
import { XRayPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: XRayClient,
  input: GetTraceGraphCommandInput,
  ...args: any
): Promise<GetTraceGraphCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetTraceGraphCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetTraceGraph(
  config: XRayPaginationConfiguration,
  input: GetTraceGraphCommandInput,
  ...additionalArguments: any
): Paginator<GetTraceGraphCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetTraceGraphCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof XRayClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected XRay | XRayClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}

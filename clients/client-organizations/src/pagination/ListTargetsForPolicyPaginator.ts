// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListTargetsForPolicyCommand,
  ListTargetsForPolicyCommandInput,
  ListTargetsForPolicyCommandOutput,
} from "../commands/ListTargetsForPolicyCommand";
import { OrganizationsClient } from "../OrganizationsClient";
import { OrganizationsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: OrganizationsClient,
  input: ListTargetsForPolicyCommandInput,
  ...args: any
): Promise<ListTargetsForPolicyCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTargetsForPolicyCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListTargetsForPolicy(
  config: OrganizationsPaginationConfiguration,
  input: ListTargetsForPolicyCommandInput,
  ...additionalArguments: any
): Paginator<ListTargetsForPolicyCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTargetsForPolicyCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof OrganizationsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Organizations | OrganizationsClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}

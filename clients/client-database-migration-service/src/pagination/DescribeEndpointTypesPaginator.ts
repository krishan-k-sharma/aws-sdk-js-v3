// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeEndpointTypesCommand,
  DescribeEndpointTypesCommandInput,
  DescribeEndpointTypesCommandOutput,
} from "../commands/DescribeEndpointTypesCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: DatabaseMigrationServiceClient,
  input: DescribeEndpointTypesCommandInput,
  ...args: any
): Promise<DescribeEndpointTypesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeEndpointTypesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeEndpointTypes(
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeEndpointTypesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeEndpointTypesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeEndpointTypesCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof DatabaseMigrationServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DatabaseMigrationService | DatabaseMigrationServiceClient");
    }
    yield page;
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}

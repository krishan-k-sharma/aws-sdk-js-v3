// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeFolderContentsCommand,
  DescribeFolderContentsCommandInput,
  DescribeFolderContentsCommandOutput,
} from "../commands/DescribeFolderContentsCommand";
import { WorkDocsClient } from "../WorkDocsClient";
import { WorkDocsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: WorkDocsClient,
  input: DescribeFolderContentsCommandInput,
  ...args: any
): Promise<DescribeFolderContentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeFolderContentsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeFolderContents(
  config: WorkDocsPaginationConfiguration,
  input: DescribeFolderContentsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeFolderContentsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeFolderContentsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof WorkDocsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected WorkDocs | WorkDocsClient");
    }
    yield page;
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}

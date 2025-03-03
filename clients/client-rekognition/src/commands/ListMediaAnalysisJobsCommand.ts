// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ListMediaAnalysisJobsRequest, ListMediaAnalysisJobsResponse } from "../models/models_0";
import { de_ListMediaAnalysisJobsCommand, se_ListMediaAnalysisJobsCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListMediaAnalysisJobsCommand}.
 */
export interface ListMediaAnalysisJobsCommandInput extends ListMediaAnalysisJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListMediaAnalysisJobsCommand}.
 */
export interface ListMediaAnalysisJobsCommandOutput extends ListMediaAnalysisJobsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of media analysis jobs. Results are sorted by <code>CreationTimestamp</code> in descending order.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, ListMediaAnalysisJobsCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, ListMediaAnalysisJobsCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const input = { // ListMediaAnalysisJobsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListMediaAnalysisJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListMediaAnalysisJobsResponse
 * //   NextToken: "STRING_VALUE",
 * //   MediaAnalysisJobs: [ // MediaAnalysisJobDescriptions // required
 * //     { // MediaAnalysisJobDescription
 * //       JobId: "STRING_VALUE", // required
 * //       JobName: "STRING_VALUE",
 * //       OperationsConfig: { // MediaAnalysisOperationsConfig
 * //         DetectModerationLabels: { // MediaAnalysisDetectModerationLabelsConfig
 * //           MinConfidence: Number("float"),
 * //           ProjectVersion: "STRING_VALUE",
 * //         },
 * //       },
 * //       Status: "CREATED" || "QUEUED" || "IN_PROGRESS" || "SUCCEEDED" || "FAILED", // required
 * //       FailureDetails: { // MediaAnalysisJobFailureDetails
 * //         Code: "INTERNAL_ERROR" || "INVALID_S3_OBJECT" || "INVALID_MANIFEST" || "INVALID_OUTPUT_CONFIG" || "INVALID_KMS_KEY" || "ACCESS_DENIED" || "RESOURCE_NOT_FOUND" || "RESOURCE_NOT_READY" || "THROTTLED",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       CreationTimestamp: new Date("TIMESTAMP"), // required
 * //       CompletionTimestamp: new Date("TIMESTAMP"),
 * //       Input: { // MediaAnalysisInput
 * //         S3Object: { // S3Object
 * //           Bucket: "STRING_VALUE",
 * //           Name: "STRING_VALUE",
 * //           Version: "STRING_VALUE",
 * //         },
 * //       },
 * //       OutputConfig: { // MediaAnalysisOutputConfig
 * //         S3Bucket: "STRING_VALUE", // required
 * //         S3KeyPrefix: "STRING_VALUE",
 * //       },
 * //       KmsKeyId: "STRING_VALUE",
 * //       Results: { // MediaAnalysisResults
 * //         S3Object: {
 * //           Bucket: "STRING_VALUE",
 * //           Name: "STRING_VALUE",
 * //           Version: "STRING_VALUE",
 * //         },
 * //       },
 * //       ManifestSummary: { // MediaAnalysisManifestSummary
 * //         S3Object: {
 * //           Bucket: "STRING_VALUE",
 * //           Name: "STRING_VALUE",
 * //           Version: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListMediaAnalysisJobsCommandInput - {@link ListMediaAnalysisJobsCommandInput}
 * @returns {@link ListMediaAnalysisJobsCommandOutput}
 * @see {@link ListMediaAnalysisJobsCommandInput} for command's `input` shape.
 * @see {@link ListMediaAnalysisJobsCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Amazon Rekognition experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>Pagination token in the request is not valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Input parameter violated a constraint. Validate your parameter before calling the API
 *       operation again.</p>
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *  <p>The number of requests exceeded your throughput limit. If you want to increase this
 *       limit, contact Amazon Rekognition.</p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Rekognition is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RekognitionServiceException}
 * <p>Base exception class for all service exceptions from Rekognition service.</p>
 *
 * @example ListMediaAnalysisJobs
 * ```javascript
 * // Returns a list of media analysis jobs.
 * const input = {
 *   "MaxResults": 10
 * };
 * const command = new ListMediaAnalysisJobsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "MediaAnalysisJobs": [
 *     {
 *       "CompletionTimestamp": "2023-07-28T08:05:51.958000-07:00",
 *       "CreationTimestamp": "2023-07-28T08:05:51.958000-06:00",
 *       "Input": {
 *         "S3Object": {
 *           "Bucket": "input-bucket",
 *           "Name": "input-manifest.json"
 *         }
 *       },
 *       "JobId": "861a0645d98ef88efb75477628c011c04942d9d5f58faf2703c393c8cf8c1537",
 *       "JobName": "job-name",
 *       "ManifestSummary": {
 *         "S3Object": {
 *           "Bucket": "output-bucket",
 *           "Name": "output-location/861a0645d98ef88efb75477628c011c04942d9d5f58faf2703c393c8cf8c1537-manifest-summary.json"
 *         }
 *       },
 *       "OperationsConfig": {
 *         "DetectModerationLabels": {
 *           "MinConfidence": 50,
 *           "ProjectVersion": "arn:aws:rekognition:us-east-1:111122223333:project/my-project/version/1/1690556751958"
 *         }
 *       },
 *       "OutputConfig": {
 *         "S3Bucket": "output-bucket",
 *         "S3KeyPrefix": "output-location"
 *       },
 *       "Results": {
 *         "S3Object": {
 *           "Bucket": "output-bucket",
 *           "Name": "output-location/861a0645d98ef88efb75477628c011c04942d9d5f58faf2703c393c8cf8c1537-results.jsonl"
 *         }
 *       },
 *       "Status": "SUCCEEDED"
 *     }
 *   ]
 * }
 * *\/
 * // example id: listmediaanalysisjobs-1697650653077
 * ```
 *
 */
export class ListMediaAnalysisJobsCommand extends $Command<
  ListMediaAnalysisJobsCommandInput,
  ListMediaAnalysisJobsCommandOutput,
  RekognitionClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: ListMediaAnalysisJobsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RekognitionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMediaAnalysisJobsCommandInput, ListMediaAnalysisJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListMediaAnalysisJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "ListMediaAnalysisJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RekognitionService",
        operation: "ListMediaAnalysisJobs",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ListMediaAnalysisJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListMediaAnalysisJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMediaAnalysisJobsCommandOutput> {
    return de_ListMediaAnalysisJobsCommand(output, context);
  }
}

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

import { GetQueueAttributesRequest, GetQueueAttributesResult } from "../models/models_0";
import { de_GetQueueAttributesCommand, se_GetQueueAttributesCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SQSClientResolvedConfig } from "../SQSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetQueueAttributesCommand}.
 */
export interface GetQueueAttributesCommandInput extends GetQueueAttributesRequest {}
/**
 * @public
 *
 * The output of {@link GetQueueAttributesCommand}.
 */
export interface GetQueueAttributesCommandOutput extends GetQueueAttributesResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets attributes for the specified queue.</p>
 *          <note>
 *             <p>To determine whether a queue is <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html">FIFO</a>, you can check whether <code>QueueName</code> ends with the
 *                     <code>.fifo</code> suffix.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, GetQueueAttributesCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, GetQueueAttributesCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const input = { // GetQueueAttributesRequest
 *   QueueUrl: "STRING_VALUE", // required
 *   AttributeNames: [ // AttributeNameList
 *     "All" || "Policy" || "VisibilityTimeout" || "MaximumMessageSize" || "MessageRetentionPeriod" || "ApproximateNumberOfMessages" || "ApproximateNumberOfMessagesNotVisible" || "CreatedTimestamp" || "LastModifiedTimestamp" || "QueueArn" || "ApproximateNumberOfMessagesDelayed" || "DelaySeconds" || "ReceiveMessageWaitTimeSeconds" || "RedrivePolicy" || "FifoQueue" || "ContentBasedDeduplication" || "KmsMasterKeyId" || "KmsDataKeyReusePeriodSeconds" || "DeduplicationScope" || "FifoThroughputLimit" || "RedriveAllowPolicy" || "SqsManagedSseEnabled",
 *   ],
 * };
 * const command = new GetQueueAttributesCommand(input);
 * const response = await client.send(command);
 * // { // GetQueueAttributesResult
 * //   Attributes: { // QueueAttributeMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetQueueAttributesCommandInput - {@link GetQueueAttributesCommandInput}
 * @returns {@link GetQueueAttributesCommandOutput}
 * @see {@link GetQueueAttributesCommandInput} for command's `input` shape.
 * @see {@link GetQueueAttributesCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for SQSClient's `config` shape.
 *
 * @throws {@link InvalidAddress} (client fault)
 *  <p>The <code>accountId</code> is invalid.</p>
 *
 * @throws {@link InvalidAttributeName} (client fault)
 *  <p>The specified attribute doesn't exist.</p>
 *
 * @throws {@link InvalidSecurity} (client fault)
 *  <p>When the request to a queue is not HTTPS and SigV4.</p>
 *
 * @throws {@link QueueDoesNotExist} (client fault)
 *  <p>The specified queue doesn't exist.</p>
 *
 * @throws {@link RequestThrottled} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *          <ul>
 *             <li>
 *                <p>The rate of requests per second exceeds the Amazon Web Services KMS request quota for an
 *                     account and Region. </p>
 *             </li>
 *             <li>
 *                <p>A burst or sustained high rate of requests to change the state of the same KMS
 *                     key. This condition is often known as a "hot key."</p>
 *             </li>
 *             <li>
 *                <p>Requests for operations on KMS keys in a Amazon Web Services CloudHSM key store
 *                     might be throttled at a lower-than-expected rate when the Amazon Web Services
 *                     CloudHSM cluster associated with the Amazon Web Services CloudHSM key store is
 *                     processing numerous commands, including those unrelated to the Amazon Web Services CloudHSM key store.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>Error code 400. Unsupported operation.</p>
 *
 * @throws {@link SQSServiceException}
 * <p>Base exception class for all service exceptions from SQS service.</p>
 *
 */
export class GetQueueAttributesCommand extends $Command<
  GetQueueAttributesCommandInput,
  GetQueueAttributesCommandOutput,
  SQSClientResolvedConfig
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
  constructor(readonly input: GetQueueAttributesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SQSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetQueueAttributesCommandInput, GetQueueAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetQueueAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SQSClient";
    const commandName = "GetQueueAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSQS",
        operation: "GetQueueAttributes",
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
  private serialize(input: GetQueueAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetQueueAttributesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetQueueAttributesCommandOutput> {
    return de_GetQueueAttributesCommand(output, context);
  }
}

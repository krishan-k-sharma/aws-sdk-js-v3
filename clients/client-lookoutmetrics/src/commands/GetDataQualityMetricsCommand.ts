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

import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { GetDataQualityMetricsRequest, GetDataQualityMetricsResponse } from "../models/models_0";
import { de_GetDataQualityMetricsCommand, se_GetDataQualityMetricsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDataQualityMetricsCommand}.
 */
export interface GetDataQualityMetricsCommandInput extends GetDataQualityMetricsRequest {}
/**
 * @public
 *
 * The output of {@link GetDataQualityMetricsCommand}.
 */
export interface GetDataQualityMetricsCommandOutput extends GetDataQualityMetricsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns details about the requested data quality metrics.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, GetDataQualityMetricsCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, GetDataQualityMetricsCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const input = { // GetDataQualityMetricsRequest
 *   AnomalyDetectorArn: "STRING_VALUE", // required
 *   MetricSetArn: "STRING_VALUE",
 * };
 * const command = new GetDataQualityMetricsCommand(input);
 * const response = await client.send(command);
 * // { // GetDataQualityMetricsResponse
 * //   AnomalyDetectorDataQualityMetricList: [ // AnomalyDetectorDataQualityMetricList
 * //     { // AnomalyDetectorDataQualityMetric
 * //       StartTimestamp: new Date("TIMESTAMP"),
 * //       MetricSetDataQualityMetricList: [ // MetricSetDataQualityMetricList
 * //         { // MetricSetDataQualityMetric
 * //           MetricSetArn: "STRING_VALUE",
 * //           DataQualityMetricList: [ // DataQualityMetricList
 * //             { // DataQualityMetric
 * //               MetricType: "COLUMN_COMPLETENESS" || "DIMENSION_UNIQUENESS" || "TIME_SERIES_COUNT" || "ROWS_PROCESSED" || "ROWS_PARTIAL_COMPLIANCE" || "INVALID_ROWS_COMPLIANCE" || "BACKTEST_TRAINING_DATA_START_TIME_STAMP" || "BACKTEST_TRAINING_DATA_END_TIME_STAMP" || "BACKTEST_INFERENCE_DATA_START_TIME_STAMP" || "BACKTEST_INFERENCE_DATA_END_TIME_STAMP",
 * //               MetricDescription: "STRING_VALUE",
 * //               RelatedColumnName: "STRING_VALUE",
 * //               MetricValue: Number("double"),
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetDataQualityMetricsCommandInput - {@link GetDataQualityMetricsCommandInput}
 * @returns {@link GetDataQualityMetricsCommandOutput}
 * @see {@link GetDataQualityMetricsCommandInput} for command's `input` shape.
 * @see {@link GetDataQualityMetricsCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for LookoutMetricsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found. Check the ARN of the resource and try again.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request was denied due to too many requests being submitted at the same time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service. Check your input values and try
 *       again.</p>
 *
 * @throws {@link LookoutMetricsServiceException}
 * <p>Base exception class for all service exceptions from LookoutMetrics service.</p>
 *
 */
export class GetDataQualityMetricsCommand extends $Command<
  GetDataQualityMetricsCommandInput,
  GetDataQualityMetricsCommandOutput,
  LookoutMetricsClientResolvedConfig
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
  constructor(readonly input: GetDataQualityMetricsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutMetricsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDataQualityMetricsCommandInput, GetDataQualityMetricsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDataQualityMetricsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutMetricsClient";
    const commandName = "GetDataQualityMetricsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "LookoutMetrics",
        operation: "GetDataQualityMetrics",
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
  private serialize(input: GetDataQualityMetricsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDataQualityMetricsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDataQualityMetricsCommandOutput> {
    return de_GetDataQualityMetricsCommand(output, context);
  }
}

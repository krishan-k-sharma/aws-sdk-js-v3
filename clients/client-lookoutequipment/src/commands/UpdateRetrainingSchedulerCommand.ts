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

import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { UpdateRetrainingSchedulerRequest } from "../models/models_0";
import { de_UpdateRetrainingSchedulerCommand, se_UpdateRetrainingSchedulerCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateRetrainingSchedulerCommand}.
 */
export interface UpdateRetrainingSchedulerCommandInput extends UpdateRetrainingSchedulerRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRetrainingSchedulerCommand}.
 */
export interface UpdateRetrainingSchedulerCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Updates a retraining scheduler. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, UpdateRetrainingSchedulerCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, UpdateRetrainingSchedulerCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const input = { // UpdateRetrainingSchedulerRequest
 *   ModelName: "STRING_VALUE", // required
 *   RetrainingStartDate: new Date("TIMESTAMP"),
 *   RetrainingFrequency: "STRING_VALUE",
 *   LookbackWindow: "STRING_VALUE",
 *   PromoteMode: "MANAGED" || "MANUAL",
 * };
 * const command = new UpdateRetrainingSchedulerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateRetrainingSchedulerCommandInput - {@link UpdateRetrainingSchedulerCommandInput}
 * @returns {@link UpdateRetrainingSchedulerCommandOutput}
 * @see {@link UpdateRetrainingSchedulerCommandInput} for command's `input` shape.
 * @see {@link UpdateRetrainingSchedulerCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for LookoutEquipmentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request could not be completed because you do not have access to the resource.
 *       </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> The request could not be completed due to a conflict with the current state of the
 *          target resource. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> Processing of the request has failed because of an unknown error, exception or failure.
 *       </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource requested could not be found. Verify the resource ID and retry your
 *          request. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The input fails to satisfy constraints specified by Amazon Lookout for Equipment or a related Amazon Web Services
 *          service that's being utilized. </p>
 *
 * @throws {@link LookoutEquipmentServiceException}
 * <p>Base exception class for all service exceptions from LookoutEquipment service.</p>
 *
 * @example Updates a retraining scheduler
 * ```javascript
 * //
 * const input = {
 *   "ModelName": "sample-model",
 *   "RetrainingFrequency": "P1Y",
 *   "RetrainingStartDate": "2024-01-01T00:00:00Z"
 * };
 * const command = new UpdateRetrainingSchedulerCommand(input);
 * await client.send(command);
 * // example id: updates-a-retraining-scheduler-1694019840918
 * ```
 *
 */
export class UpdateRetrainingSchedulerCommand extends $Command<
  UpdateRetrainingSchedulerCommandInput,
  UpdateRetrainingSchedulerCommandOutput,
  LookoutEquipmentClientResolvedConfig
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
  constructor(readonly input: UpdateRetrainingSchedulerCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutEquipmentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateRetrainingSchedulerCommandInput, UpdateRetrainingSchedulerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateRetrainingSchedulerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutEquipmentClient";
    const commandName = "UpdateRetrainingSchedulerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSLookoutEquipmentFrontendService",
        operation: "UpdateRetrainingScheduler",
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
  private serialize(input: UpdateRetrainingSchedulerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateRetrainingSchedulerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateRetrainingSchedulerCommandOutput> {
    return de_UpdateRetrainingSchedulerCommand(output, context);
  }
}

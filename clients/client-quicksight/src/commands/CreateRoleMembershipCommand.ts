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

import { CreateRoleMembershipRequest, CreateRoleMembershipResponse } from "../models/models_2";
import { de_CreateRoleMembershipCommand, se_CreateRoleMembershipCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateRoleMembershipCommand}.
 */
export interface CreateRoleMembershipCommandInput extends CreateRoleMembershipRequest {}
/**
 * @public
 *
 * The output of {@link CreateRoleMembershipCommand}.
 */
export interface CreateRoleMembershipCommandOutput extends CreateRoleMembershipResponse, __MetadataBearer {}

/**
 * @public
 * <p>Use <code>CreateRoleMembership</code> to add an existing Amazon QuickSight group to an existing role.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateRoleMembershipCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateRoleMembershipCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // CreateRoleMembershipRequest
 *   MemberName: "STRING_VALUE", // required
 *   AwsAccountId: "STRING_VALUE", // required
 *   Namespace: "STRING_VALUE", // required
 *   Role: "ADMIN" || "AUTHOR" || "READER", // required
 * };
 * const command = new CreateRoleMembershipCommand(input);
 * const response = await client.send(command);
 * // { // CreateRoleMembershipResponse
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param CreateRoleMembershipCommandInput - {@link CreateRoleMembershipCommandInput}
 * @returns {@link CreateRoleMembershipCommandOutput}
 * @see {@link CreateRoleMembershipCommandInput} for command's `input` shape.
 * @see {@link CreateRoleMembershipCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link PreconditionNotMetException} (client fault)
 *  <p>One or more preconditions aren't met.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ResourceUnavailableException} (server fault)
 *  <p>This resource is currently unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 */
export class CreateRoleMembershipCommand extends $Command<
  CreateRoleMembershipCommandInput,
  CreateRoleMembershipCommandOutput,
  QuickSightClientResolvedConfig
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
  constructor(readonly input: CreateRoleMembershipCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateRoleMembershipCommandInput, CreateRoleMembershipCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateRoleMembershipCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "CreateRoleMembershipCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "QuickSight_20180401",
        operation: "CreateRoleMembership",
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
  private serialize(input: CreateRoleMembershipCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateRoleMembershipCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateRoleMembershipCommandOutput> {
    return de_CreateRoleMembershipCommand(output, context);
  }
}

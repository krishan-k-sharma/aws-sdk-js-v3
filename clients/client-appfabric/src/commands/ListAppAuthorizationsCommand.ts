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

import { AppFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppFabricClient";
import { ListAppAuthorizationsRequest, ListAppAuthorizationsResponse } from "../models/models_0";
import { de_ListAppAuthorizationsCommand, se_ListAppAuthorizationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAppAuthorizationsCommand}.
 */
export interface ListAppAuthorizationsCommandInput extends ListAppAuthorizationsRequest {}
/**
 * @public
 *
 * The output of {@link ListAppAuthorizationsCommand}.
 */
export interface ListAppAuthorizationsCommandOutput extends ListAppAuthorizationsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of all app authorizations configured for an app bundle.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppFabricClient, ListAppAuthorizationsCommand } from "@aws-sdk/client-appfabric"; // ES Modules import
 * // const { AppFabricClient, ListAppAuthorizationsCommand } = require("@aws-sdk/client-appfabric"); // CommonJS import
 * const client = new AppFabricClient(config);
 * const input = { // ListAppAuthorizationsRequest
 *   appBundleIdentifier: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAppAuthorizationsCommand(input);
 * const response = await client.send(command);
 * // { // ListAppAuthorizationsResponse
 * //   appAuthorizationSummaryList: [ // AppAuthorizationSummaryList // required
 * //     { // AppAuthorizationSummary
 * //       appAuthorizationArn: "STRING_VALUE", // required
 * //       appBundleArn: "STRING_VALUE", // required
 * //       app: "STRING_VALUE", // required
 * //       tenant: { // Tenant
 * //         tenantIdentifier: "STRING_VALUE", // required
 * //         tenantDisplayName: "STRING_VALUE", // required
 * //       },
 * //       status: "PendingConnect" || "Connected" || "ConnectionValidationFailed" || "TokenAutoRotationFailed", // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAppAuthorizationsCommandInput - {@link ListAppAuthorizationsCommandInput}
 * @returns {@link ListAppAuthorizationsCommandOutput}
 * @see {@link ListAppAuthorizationsCommandInput} for command's `input` shape.
 * @see {@link ListAppAuthorizationsCommandOutput} for command's `response` shape.
 * @see {@link AppFabricClientResolvedConfig | config} for AppFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure
 *          with an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has invalid or missing parameters.</p>
 *
 * @throws {@link AppFabricServiceException}
 * <p>Base exception class for all service exceptions from AppFabric service.</p>
 *
 */
export class ListAppAuthorizationsCommand extends $Command<
  ListAppAuthorizationsCommandInput,
  ListAppAuthorizationsCommandOutput,
  AppFabricClientResolvedConfig
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
  constructor(readonly input: ListAppAuthorizationsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppFabricClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAppAuthorizationsCommandInput, ListAppAuthorizationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAppAuthorizationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppFabricClient";
    const commandName = "ListAppAuthorizationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "FabricFrontEndService",
        operation: "ListAppAuthorizations",
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
  private serialize(input: ListAppAuthorizationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAppAuthorizationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAppAuthorizationsCommandOutput> {
    return de_ListAppAuthorizationsCommand(output, context);
  }
}

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

import {
  AttachCustomerManagedPolicyReferenceToPermissionSetRequest,
  AttachCustomerManagedPolicyReferenceToPermissionSetResponse,
} from "../models/models_0";
import {
  de_AttachCustomerManagedPolicyReferenceToPermissionSetCommand,
  se_AttachCustomerManagedPolicyReferenceToPermissionSetCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AttachCustomerManagedPolicyReferenceToPermissionSetCommand}.
 */
export interface AttachCustomerManagedPolicyReferenceToPermissionSetCommandInput
  extends AttachCustomerManagedPolicyReferenceToPermissionSetRequest {}
/**
 * @public
 *
 * The output of {@link AttachCustomerManagedPolicyReferenceToPermissionSetCommand}.
 */
export interface AttachCustomerManagedPolicyReferenceToPermissionSetCommandOutput
  extends AttachCustomerManagedPolicyReferenceToPermissionSetResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Attaches the specified customer managed policy to the specified <a>PermissionSet</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, AttachCustomerManagedPolicyReferenceToPermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, AttachCustomerManagedPolicyReferenceToPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const input = { // AttachCustomerManagedPolicyReferenceToPermissionSetRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   PermissionSetArn: "STRING_VALUE", // required
 *   CustomerManagedPolicyReference: { // CustomerManagedPolicyReference
 *     Name: "STRING_VALUE", // required
 *     Path: "STRING_VALUE",
 *   },
 * };
 * const command = new AttachCustomerManagedPolicyReferenceToPermissionSetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AttachCustomerManagedPolicyReferenceToPermissionSetCommandInput - {@link AttachCustomerManagedPolicyReferenceToPermissionSetCommandInput}
 * @returns {@link AttachCustomerManagedPolicyReferenceToPermissionSetCommandOutput}
 * @see {@link AttachCustomerManagedPolicyReferenceToPermissionSetCommandInput} for command's `input` shape.
 * @see {@link AttachCustomerManagedPolicyReferenceToPermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Occurs when a conflict with a previous successful write is detected. This generally
 *             occurs when the previous write did not have time to propagate to the host serving the
 *             current request. A retry (with appropriate backoff logic) is the recommended response to
 *             this exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure
 *             with an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a requested resource is not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Indicates that the principal has crossed the permitted number of resources that can be
 *             created.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates that the principal has crossed the throttling limits of the API
 *             operations.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because it contains a syntax error.</p>
 *
 * @throws {@link SSOAdminServiceException}
 * <p>Base exception class for all service exceptions from SSOAdmin service.</p>
 *
 */
export class AttachCustomerManagedPolicyReferenceToPermissionSetCommand extends $Command<
  AttachCustomerManagedPolicyReferenceToPermissionSetCommandInput,
  AttachCustomerManagedPolicyReferenceToPermissionSetCommandOutput,
  SSOAdminClientResolvedConfig
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
  constructor(readonly input: AttachCustomerManagedPolicyReferenceToPermissionSetCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOAdminClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    AttachCustomerManagedPolicyReferenceToPermissionSetCommandInput,
    AttachCustomerManagedPolicyReferenceToPermissionSetCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        AttachCustomerManagedPolicyReferenceToPermissionSetCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "AttachCustomerManagedPolicyReferenceToPermissionSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SWBExternalService",
        operation: "AttachCustomerManagedPolicyReferenceToPermissionSet",
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
  private serialize(
    input: AttachCustomerManagedPolicyReferenceToPermissionSetCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_AttachCustomerManagedPolicyReferenceToPermissionSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AttachCustomerManagedPolicyReferenceToPermissionSetCommandOutput> {
    return de_AttachCustomerManagedPolicyReferenceToPermissionSetCommand(output, context);
  }
}

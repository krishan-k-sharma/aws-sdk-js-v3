// smithy-typescript generated code
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
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

import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { SetPrincipalTagAttributeMapInput, SetPrincipalTagAttributeMapResponse } from "../models/models_0";
import { de_SetPrincipalTagAttributeMapCommand, se_SetPrincipalTagAttributeMapCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SetPrincipalTagAttributeMapCommand}.
 */
export interface SetPrincipalTagAttributeMapCommandInput extends SetPrincipalTagAttributeMapInput {}
/**
 * @public
 *
 * The output of {@link SetPrincipalTagAttributeMapCommand}.
 */
export interface SetPrincipalTagAttributeMapCommandOutput
  extends SetPrincipalTagAttributeMapResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>You can use this operation to use default (username and clientID) attribute or custom attribute mappings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, SetPrincipalTagAttributeMapCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, SetPrincipalTagAttributeMapCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const input = { // SetPrincipalTagAttributeMapInput
 *   IdentityPoolId: "STRING_VALUE", // required
 *   IdentityProviderName: "STRING_VALUE", // required
 *   UseDefaults: true || false,
 *   PrincipalTags: { // PrincipalTags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new SetPrincipalTagAttributeMapCommand(input);
 * const response = await client.send(command);
 * // { // SetPrincipalTagAttributeMapResponse
 * //   IdentityPoolId: "STRING_VALUE",
 * //   IdentityProviderName: "STRING_VALUE",
 * //   UseDefaults: true || false,
 * //   PrincipalTags: { // PrincipalTags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param SetPrincipalTagAttributeMapCommandInput - {@link SetPrincipalTagAttributeMapCommandInput}
 * @returns {@link SetPrincipalTagAttributeMapCommandOutput}
 * @see {@link SetPrincipalTagAttributeMapCommandInput} for command's `input` shape.
 * @see {@link SetPrincipalTagAttributeMapCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for CognitoIdentityClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Thrown when the service encounters an error during processing the request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Thrown for missing or bad input parameter(s).</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>Thrown when a user is not authorized to access the requested resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Thrown when the requested resource (for example, a dataset or record) does not
 *          exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Thrown when a request is throttled.</p>
 *
 * @throws {@link CognitoIdentityServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentity service.</p>
 *
 */
export class SetPrincipalTagAttributeMapCommand extends $Command<
  SetPrincipalTagAttributeMapCommandInput,
  SetPrincipalTagAttributeMapCommandOutput,
  CognitoIdentityClientResolvedConfig
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
  constructor(readonly input: SetPrincipalTagAttributeMapCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetPrincipalTagAttributeMapCommandInput, SetPrincipalTagAttributeMapCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SetPrincipalTagAttributeMapCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityClient";
    const commandName = "SetPrincipalTagAttributeMapCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSCognitoIdentityService",
        operation: "SetPrincipalTagAttributeMap",
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
  private serialize(input: SetPrincipalTagAttributeMapCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SetPrincipalTagAttributeMapCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SetPrincipalTagAttributeMapCommandOutput> {
    return de_SetPrincipalTagAttributeMapCommand(output, context);
  }
}

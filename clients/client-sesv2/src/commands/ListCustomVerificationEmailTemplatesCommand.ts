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
  ListCustomVerificationEmailTemplatesRequest,
  ListCustomVerificationEmailTemplatesResponse,
} from "../models/models_0";
import {
  de_ListCustomVerificationEmailTemplatesCommand,
  se_ListCustomVerificationEmailTemplatesCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListCustomVerificationEmailTemplatesCommand}.
 */
export interface ListCustomVerificationEmailTemplatesCommandInput extends ListCustomVerificationEmailTemplatesRequest {}
/**
 * @public
 *
 * The output of {@link ListCustomVerificationEmailTemplatesCommand}.
 */
export interface ListCustomVerificationEmailTemplatesCommandOutput
  extends ListCustomVerificationEmailTemplatesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists the existing custom verification email templates for your account in the current
 *                 Amazon Web Services Region.</p>
 *          <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using
 *                 custom verification email templates</a> in the <i>Amazon SES Developer
 *                 Guide</i>.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, ListCustomVerificationEmailTemplatesCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, ListCustomVerificationEmailTemplatesCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = { // ListCustomVerificationEmailTemplatesRequest
 *   NextToken: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new ListCustomVerificationEmailTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListCustomVerificationEmailTemplatesResponse
 * //   CustomVerificationEmailTemplates: [ // CustomVerificationEmailTemplatesList
 * //     { // CustomVerificationEmailTemplateMetadata
 * //       TemplateName: "STRING_VALUE",
 * //       FromEmailAddress: "STRING_VALUE",
 * //       TemplateSubject: "STRING_VALUE",
 * //       SuccessRedirectionURL: "STRING_VALUE",
 * //       FailureRedirectionURL: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCustomVerificationEmailTemplatesCommandInput - {@link ListCustomVerificationEmailTemplatesCommandInput}
 * @returns {@link ListCustomVerificationEmailTemplatesCommandOutput}
 * @see {@link ListCustomVerificationEmailTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListCustomVerificationEmailTemplatesCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 */
export class ListCustomVerificationEmailTemplatesCommand extends $Command<
  ListCustomVerificationEmailTemplatesCommandInput,
  ListCustomVerificationEmailTemplatesCommandOutput,
  SESv2ClientResolvedConfig
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
  constructor(readonly input: ListCustomVerificationEmailTemplatesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCustomVerificationEmailTemplatesCommandInput, ListCustomVerificationEmailTemplatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCustomVerificationEmailTemplatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "ListCustomVerificationEmailTemplatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SimpleEmailService_v2",
        operation: "ListCustomVerificationEmailTemplates",
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
    input: ListCustomVerificationEmailTemplatesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListCustomVerificationEmailTemplatesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListCustomVerificationEmailTemplatesCommandOutput> {
    return de_ListCustomVerificationEmailTemplatesCommand(output, context);
  }
}

// smithy-typescript generated code
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

import { EC2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2ProtocolClient";
import { NoInputAndOutputOutput } from "../models/models_0";
import { de_NoInputAndOutputCommand, se_NoInputAndOutputCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link NoInputAndOutputCommand}.
 */
export interface NoInputAndOutputCommandInput {}
/**
 * @public
 *
 * The output of {@link NoInputAndOutputCommand}.
 */
export interface NoInputAndOutputCommandOutput extends NoInputAndOutputOutput, __MetadataBearer {}

/**
 * @public
 * The example tests how requests and responses are serialized when there's
 * no request payload or response members.
 *
 * While this should be rare, code generators must support this.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2ProtocolClient, NoInputAndOutputCommand } from "@aws-sdk/aws-protocoltests-ec2"; // ES Modules import
 * // const { EC2ProtocolClient, NoInputAndOutputCommand } = require("@aws-sdk/aws-protocoltests-ec2"); // CommonJS import
 * const client = new EC2ProtocolClient(config);
 * const input = {};
 * const command = new NoInputAndOutputCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param NoInputAndOutputCommandInput - {@link NoInputAndOutputCommandInput}
 * @returns {@link NoInputAndOutputCommandOutput}
 * @see {@link NoInputAndOutputCommandInput} for command's `input` shape.
 * @see {@link NoInputAndOutputCommandOutput} for command's `response` shape.
 * @see {@link EC2ProtocolClientResolvedConfig | config} for EC2ProtocolClient's `config` shape.
 *
 * @throws {@link EC2ProtocolServiceException}
 * <p>Base exception class for all service exceptions from EC2Protocol service.</p>
 *
 */
export class NoInputAndOutputCommand extends $Command<
  NoInputAndOutputCommandInput,
  NoInputAndOutputCommandOutput,
  EC2ProtocolClientResolvedConfig
> {
  /**
   * @public
   */
  constructor(readonly input: NoInputAndOutputCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<NoInputAndOutputCommandInput, NoInputAndOutputCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2ProtocolClient";
    const commandName = "NoInputAndOutputCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsEc2",
        operation: "NoInputAndOutput",
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
  private serialize(input: NoInputAndOutputCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_NoInputAndOutputCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<NoInputAndOutputCommandOutput> {
    return de_NoInputAndOutputCommand(output, context);
  }
}

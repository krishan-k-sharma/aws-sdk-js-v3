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

import { ListVocabulariesRequest, ListVocabulariesResponse } from "../models/models_0";
import { de_ListVocabulariesCommand, se_ListVocabulariesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListVocabulariesCommand}.
 */
export interface ListVocabulariesCommandInput extends ListVocabulariesRequest {}
/**
 * @public
 *
 * The output of {@link ListVocabulariesCommand}.
 */
export interface ListVocabulariesCommandOutput extends ListVocabulariesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides a list of custom vocabularies that match the specified criteria. If no
 *             criteria are specified, all custom vocabularies are returned.</p>
 *          <p>To get detailed information about a specific custom vocabulary, use the  operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, ListVocabulariesCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, ListVocabulariesCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const input = { // ListVocabulariesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   StateEquals: "PENDING" || "READY" || "FAILED",
 *   NameContains: "STRING_VALUE",
 * };
 * const command = new ListVocabulariesCommand(input);
 * const response = await client.send(command);
 * // { // ListVocabulariesResponse
 * //   Status: "PENDING" || "READY" || "FAILED",
 * //   NextToken: "STRING_VALUE",
 * //   Vocabularies: [ // Vocabularies
 * //     { // VocabularyInfo
 * //       VocabularyName: "STRING_VALUE",
 * //       LanguageCode: "af-ZA" || "ar-AE" || "ar-SA" || "da-DK" || "de-CH" || "de-DE" || "en-AB" || "en-AU" || "en-GB" || "en-IE" || "en-IN" || "en-US" || "en-WL" || "es-ES" || "es-US" || "fa-IR" || "fr-CA" || "fr-FR" || "he-IL" || "hi-IN" || "id-ID" || "it-IT" || "ja-JP" || "ko-KR" || "ms-MY" || "nl-NL" || "pt-BR" || "pt-PT" || "ru-RU" || "ta-IN" || "te-IN" || "tr-TR" || "zh-CN" || "zh-TW" || "th-TH" || "en-ZA" || "en-NZ" || "vi-VN" || "sv-SE",
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       VocabularyState: "PENDING" || "READY" || "FAILED",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListVocabulariesCommandInput - {@link ListVocabulariesCommandInput}
 * @returns {@link ListVocabulariesCommandOutput}
 * @see {@link ListVocabulariesCommandInput} for command's `input` shape.
 * @see {@link ListVocabulariesCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for TranscribeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Your request didn't pass one or more validation tests. This can occur when the entity
 *             you're trying to delete doesn't exist or if it's in a non-terminal state (such as
 *                 <code>IN PROGRESS</code>). See the exception message field for more
 *             information.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>There was an internal error. Check the error message, correct the issue, and try your
 *             request again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You've either sent too many requests or your input file is too long. Wait before
 *             retrying your request, or use a smaller file and try your request again.</p>
 *
 * @throws {@link TranscribeServiceException}
 * <p>Base exception class for all service exceptions from Transcribe service.</p>
 *
 */
export class ListVocabulariesCommand extends $Command<
  ListVocabulariesCommandInput,
  ListVocabulariesCommandOutput,
  TranscribeClientResolvedConfig
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
  constructor(readonly input: ListVocabulariesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranscribeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListVocabulariesCommandInput, ListVocabulariesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListVocabulariesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "ListVocabulariesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Transcribe",
        operation: "ListVocabularies",
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
  private serialize(input: ListVocabulariesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListVocabulariesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListVocabulariesCommandOutput> {
    return de_ListVocabulariesCommand(output, context);
  }
}

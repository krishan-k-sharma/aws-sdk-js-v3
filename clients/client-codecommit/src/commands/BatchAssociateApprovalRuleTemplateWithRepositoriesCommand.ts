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

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import {
  BatchAssociateApprovalRuleTemplateWithRepositoriesInput,
  BatchAssociateApprovalRuleTemplateWithRepositoriesOutput,
} from "../models/models_0";
import {
  de_BatchAssociateApprovalRuleTemplateWithRepositoriesCommand,
  se_BatchAssociateApprovalRuleTemplateWithRepositoriesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchAssociateApprovalRuleTemplateWithRepositoriesCommand}.
 */
export interface BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput
  extends BatchAssociateApprovalRuleTemplateWithRepositoriesInput {}
/**
 * @public
 *
 * The output of {@link BatchAssociateApprovalRuleTemplateWithRepositoriesCommand}.
 */
export interface BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput
  extends BatchAssociateApprovalRuleTemplateWithRepositoriesOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates an association between an approval rule template and one or more specified repositories. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, BatchAssociateApprovalRuleTemplateWithRepositoriesCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, BatchAssociateApprovalRuleTemplateWithRepositoriesCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const input = { // BatchAssociateApprovalRuleTemplateWithRepositoriesInput
 *   approvalRuleTemplateName: "STRING_VALUE", // required
 *   repositoryNames: [ // RepositoryNameList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchAssociateApprovalRuleTemplateWithRepositoriesCommand(input);
 * const response = await client.send(command);
 * // { // BatchAssociateApprovalRuleTemplateWithRepositoriesOutput
 * //   associatedRepositoryNames: [ // RepositoryNameList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   errors: [ // BatchAssociateApprovalRuleTemplateWithRepositoriesErrorsList // required
 * //     { // BatchAssociateApprovalRuleTemplateWithRepositoriesError
 * //       repositoryName: "STRING_VALUE",
 * //       errorCode: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput - {@link BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput}
 * @returns {@link BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput}
 * @see {@link BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput} for command's `input` shape.
 * @see {@link BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link ApprovalRuleTemplateDoesNotExistException} (client fault)
 *  <p>The specified approval rule template does not exist. Verify that the name is correct and that you are signed in to the Amazon Web Services Region where the template
 *         was created, and then try again.</p>
 *
 * @throws {@link ApprovalRuleTemplateNameRequiredException} (client fault)
 *  <p>An approval rule template name is required, but was not specified.</p>
 *
 * @throws {@link EncryptionIntegrityChecksFailedException} (server fault)
 *  <p>An encryption integrity check failed.</p>
 *
 * @throws {@link EncryptionKeyAccessDeniedException} (client fault)
 *  <p>An encryption key could not be accessed.</p>
 *
 * @throws {@link EncryptionKeyDisabledException} (client fault)
 *  <p>The encryption key is disabled.</p>
 *
 * @throws {@link EncryptionKeyNotFoundException} (client fault)
 *  <p>No encryption key was found.</p>
 *
 * @throws {@link EncryptionKeyUnavailableException} (client fault)
 *  <p>The encryption key is not available.</p>
 *
 * @throws {@link InvalidApprovalRuleTemplateNameException} (client fault)
 *  <p>The name of the approval rule template is not valid. Template names must be between 1
 *             and 100 valid characters in length. For more information about limits in CodeCommit,
 *             see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">Quotas</a> in the <i>CodeCommit User Guide</i>.</p>
 *
 * @throws {@link MaximumRepositoryNamesExceededException} (client fault)
 *  <p>The maximum number of allowed repository names was exceeded. Currently, this number is 100.</p>
 *
 * @throws {@link RepositoryNamesRequiredException} (client fault)
 *  <p>At least one repository name object is required, but was not specified.</p>
 *
 * @throws {@link CodeCommitServiceException}
 * <p>Base exception class for all service exceptions from CodeCommit service.</p>
 *
 */
export class BatchAssociateApprovalRuleTemplateWithRepositoriesCommand extends $Command<
  BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput,
  BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput,
  CodeCommitClientResolvedConfig
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
  constructor(readonly input: BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeCommitClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput,
    BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        BatchAssociateApprovalRuleTemplateWithRepositoriesCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "BatchAssociateApprovalRuleTemplateWithRepositoriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeCommit_20150413",
        operation: "BatchAssociateApprovalRuleTemplateWithRepositories",
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
    input: BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_BatchAssociateApprovalRuleTemplateWithRepositoriesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput> {
    return de_BatchAssociateApprovalRuleTemplateWithRepositoriesCommand(output, context);
  }
}

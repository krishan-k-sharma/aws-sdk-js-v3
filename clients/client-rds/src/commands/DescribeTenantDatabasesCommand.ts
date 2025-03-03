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
  DescribeTenantDatabasesMessage,
  TenantDatabasesMessage,
  TenantDatabasesMessageFilterSensitiveLog,
} from "../models/models_1";
import { de_DescribeTenantDatabasesCommand, se_DescribeTenantDatabasesCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeTenantDatabasesCommand}.
 */
export interface DescribeTenantDatabasesCommandInput extends DescribeTenantDatabasesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeTenantDatabasesCommand}.
 */
export interface DescribeTenantDatabasesCommandOutput extends TenantDatabasesMessage, __MetadataBearer {}

/**
 * @public
 * <p>Describes the tenant databases in a DB instance that uses the multi-tenant
 *             configuration. Only RDS for Oracle CDB instances are supported.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeTenantDatabasesCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeTenantDatabasesCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DescribeTenantDatabasesMessage
 *   DBInstanceIdentifier: "STRING_VALUE",
 *   TenantDBName: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   Marker: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 * };
 * const command = new DescribeTenantDatabasesCommand(input);
 * const response = await client.send(command);
 * // { // TenantDatabasesMessage
 * //   Marker: "STRING_VALUE",
 * //   TenantDatabases: [ // TenantDatabasesList
 * //     { // TenantDatabase
 * //       TenantDatabaseCreateTime: new Date("TIMESTAMP"),
 * //       DBInstanceIdentifier: "STRING_VALUE",
 * //       TenantDBName: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       MasterUsername: "STRING_VALUE",
 * //       DbiResourceId: "STRING_VALUE",
 * //       TenantDatabaseResourceId: "STRING_VALUE",
 * //       TenantDatabaseARN: "STRING_VALUE",
 * //       CharacterSetName: "STRING_VALUE",
 * //       NcharCharacterSetName: "STRING_VALUE",
 * //       DeletionProtection: true || false,
 * //       PendingModifiedValues: { // TenantDatabasePendingModifiedValues
 * //         MasterUserPassword: "STRING_VALUE",
 * //         TenantDBName: "STRING_VALUE",
 * //       },
 * //       TagList: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeTenantDatabasesCommandInput - {@link DescribeTenantDatabasesCommandInput}
 * @returns {@link DescribeTenantDatabasesCommandOutput}
 * @see {@link DescribeTenantDatabasesCommandInput} for command's `input` shape.
 * @see {@link DescribeTenantDatabasesCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 */
export class DescribeTenantDatabasesCommand extends $Command<
  DescribeTenantDatabasesCommandInput,
  DescribeTenantDatabasesCommandOutput,
  RDSClientResolvedConfig
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
  constructor(readonly input: DescribeTenantDatabasesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTenantDatabasesCommandInput, DescribeTenantDatabasesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTenantDatabasesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeTenantDatabasesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: TenantDatabasesMessageFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "DescribeTenantDatabases",
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
  private serialize(input: DescribeTenantDatabasesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeTenantDatabasesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTenantDatabasesCommandOutput> {
    return de_DescribeTenantDatabasesCommand(output, context);
  }
}

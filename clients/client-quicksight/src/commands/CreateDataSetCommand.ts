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
  CreateDataSetRequest,
  CreateDataSetRequestFilterSensitiveLog,
  CreateDataSetResponse,
} from "../models/models_2";
import { de_CreateDataSetCommand, se_CreateDataSetCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateDataSetCommand}.
 */
export interface CreateDataSetCommandInput extends CreateDataSetRequest {}
/**
 * @public
 *
 * The output of {@link CreateDataSetCommand}.
 */
export interface CreateDataSetCommandOutput extends CreateDataSetResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a dataset. This operation doesn't support datasets that include uploaded files as a source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateDataSetCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateDataSetCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // CreateDataSetRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   DataSetId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   PhysicalTableMap: { // PhysicalTableMap // required
 *     "<keys>": { // PhysicalTable Union: only one key present
 *       RelationalTable: { // RelationalTable
 *         DataSourceArn: "STRING_VALUE", // required
 *         Catalog: "STRING_VALUE",
 *         Schema: "STRING_VALUE",
 *         Name: "STRING_VALUE", // required
 *         InputColumns: [ // InputColumnList // required
 *           { // InputColumn
 *             Name: "STRING_VALUE", // required
 *             Type: "STRING" || "INTEGER" || "DECIMAL" || "DATETIME" || "BIT" || "BOOLEAN" || "JSON", // required
 *             SubType: "FLOAT" || "FIXED",
 *           },
 *         ],
 *       },
 *       CustomSql: { // CustomSql
 *         DataSourceArn: "STRING_VALUE", // required
 *         Name: "STRING_VALUE", // required
 *         SqlQuery: "STRING_VALUE", // required
 *         Columns: [
 *           {
 *             Name: "STRING_VALUE", // required
 *             Type: "STRING" || "INTEGER" || "DECIMAL" || "DATETIME" || "BIT" || "BOOLEAN" || "JSON", // required
 *             SubType: "FLOAT" || "FIXED",
 *           },
 *         ],
 *       },
 *       S3Source: { // S3Source
 *         DataSourceArn: "STRING_VALUE", // required
 *         UploadSettings: { // UploadSettings
 *           Format: "CSV" || "TSV" || "CLF" || "ELF" || "XLSX" || "JSON",
 *           StartFromRow: Number("int"),
 *           ContainsHeader: true || false,
 *           TextQualifier: "DOUBLE_QUOTE" || "SINGLE_QUOTE",
 *           Delimiter: "STRING_VALUE",
 *         },
 *         InputColumns: [ // required
 *           {
 *             Name: "STRING_VALUE", // required
 *             Type: "STRING" || "INTEGER" || "DECIMAL" || "DATETIME" || "BIT" || "BOOLEAN" || "JSON", // required
 *             SubType: "FLOAT" || "FIXED",
 *           },
 *         ],
 *       },
 *     },
 *   },
 *   LogicalTableMap: { // LogicalTableMap
 *     "<keys>": { // LogicalTable
 *       Alias: "STRING_VALUE", // required
 *       DataTransforms: [ // TransformOperationList
 *         { // TransformOperation Union: only one key present
 *           ProjectOperation: { // ProjectOperation
 *             ProjectedColumns: [ // ProjectedColumnList // required
 *               "STRING_VALUE",
 *             ],
 *           },
 *           FilterOperation: { // FilterOperation
 *             ConditionExpression: "STRING_VALUE", // required
 *           },
 *           CreateColumnsOperation: { // CreateColumnsOperation
 *             Columns: [ // CalculatedColumnList // required
 *               { // CalculatedColumn
 *                 ColumnName: "STRING_VALUE", // required
 *                 ColumnId: "STRING_VALUE", // required
 *                 Expression: "STRING_VALUE", // required
 *               },
 *             ],
 *           },
 *           RenameColumnOperation: { // RenameColumnOperation
 *             ColumnName: "STRING_VALUE", // required
 *             NewColumnName: "STRING_VALUE", // required
 *           },
 *           CastColumnTypeOperation: { // CastColumnTypeOperation
 *             ColumnName: "STRING_VALUE", // required
 *             NewColumnType: "STRING" || "INTEGER" || "DECIMAL" || "DATETIME", // required
 *             SubType: "FLOAT" || "FIXED",
 *             Format: "STRING_VALUE",
 *           },
 *           TagColumnOperation: { // TagColumnOperation
 *             ColumnName: "STRING_VALUE", // required
 *             Tags: [ // ColumnTagList // required
 *               { // ColumnTag
 *                 ColumnGeographicRole: "COUNTRY" || "STATE" || "COUNTY" || "CITY" || "POSTCODE" || "LONGITUDE" || "LATITUDE",
 *                 ColumnDescription: { // ColumnDescription
 *                   Text: "STRING_VALUE",
 *                 },
 *               },
 *             ],
 *           },
 *           UntagColumnOperation: { // UntagColumnOperation
 *             ColumnName: "STRING_VALUE", // required
 *             TagNames: [ // ColumnTagNames // required
 *               "COLUMN_GEOGRAPHIC_ROLE" || "COLUMN_DESCRIPTION",
 *             ],
 *           },
 *           OverrideDatasetParameterOperation: { // OverrideDatasetParameterOperation
 *             ParameterName: "STRING_VALUE", // required
 *             NewParameterName: "STRING_VALUE",
 *             NewDefaultValues: { // NewDefaultValues
 *               StringStaticValues: [ // StringDatasetParameterValueList
 *                 "STRING_VALUE",
 *               ],
 *               DecimalStaticValues: [ // DecimalDatasetParameterValueList
 *                 Number("double"),
 *               ],
 *               DateTimeStaticValues: [ // DateTimeDatasetParameterValueList
 *                 new Date("TIMESTAMP"),
 *               ],
 *               IntegerStaticValues: [ // IntegerDatasetParameterValueList
 *                 Number("long"),
 *               ],
 *             },
 *           },
 *         },
 *       ],
 *       Source: { // LogicalTableSource
 *         JoinInstruction: { // JoinInstruction
 *           LeftOperand: "STRING_VALUE", // required
 *           RightOperand: "STRING_VALUE", // required
 *           LeftJoinKeyProperties: { // JoinKeyProperties
 *             UniqueKey: true || false,
 *           },
 *           RightJoinKeyProperties: {
 *             UniqueKey: true || false,
 *           },
 *           Type: "INNER" || "OUTER" || "LEFT" || "RIGHT", // required
 *           OnClause: "STRING_VALUE", // required
 *         },
 *         PhysicalTableId: "STRING_VALUE",
 *         DataSetArn: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   ImportMode: "SPICE" || "DIRECT_QUERY", // required
 *   ColumnGroups: [ // ColumnGroupList
 *     { // ColumnGroup
 *       GeoSpatialColumnGroup: { // GeoSpatialColumnGroup
 *         Name: "STRING_VALUE", // required
 *         CountryCode: "US",
 *         Columns: [ // ColumnList // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   ],
 *   FieldFolders: { // FieldFolderMap
 *     "<keys>": { // FieldFolder
 *       description: "STRING_VALUE",
 *       columns: [ // FolderColumnList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   Permissions: [ // ResourcePermissionList
 *     { // ResourcePermission
 *       Principal: "STRING_VALUE", // required
 *       Actions: [ // ActionList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   RowLevelPermissionDataSet: { // RowLevelPermissionDataSet
 *     Namespace: "STRING_VALUE",
 *     Arn: "STRING_VALUE", // required
 *     PermissionPolicy: "GRANT_ACCESS" || "DENY_ACCESS", // required
 *     FormatVersion: "VERSION_1" || "VERSION_2",
 *     Status: "ENABLED" || "DISABLED",
 *   },
 *   RowLevelPermissionTagConfiguration: { // RowLevelPermissionTagConfiguration
 *     Status: "ENABLED" || "DISABLED",
 *     TagRules: [ // RowLevelPermissionTagRuleList // required
 *       { // RowLevelPermissionTagRule
 *         TagKey: "STRING_VALUE", // required
 *         ColumnName: "STRING_VALUE", // required
 *         TagMultiValueDelimiter: "STRING_VALUE",
 *         MatchAllValue: "STRING_VALUE",
 *       },
 *     ],
 *     TagRuleConfigurations: [ // RowLevelPermissionTagRuleConfigurationList
 *       [ // RowLevelPermissionTagRuleConfiguration
 *         "STRING_VALUE",
 *       ],
 *     ],
 *   },
 *   ColumnLevelPermissionRules: [ // ColumnLevelPermissionRuleList
 *     { // ColumnLevelPermissionRule
 *       Principals: [ // PrincipalList
 *         "STRING_VALUE",
 *       ],
 *       ColumnNames: [ // ColumnNameList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   DataSetUsageConfiguration: { // DataSetUsageConfiguration
 *     DisableUseAsDirectQuerySource: true || false,
 *     DisableUseAsImportedSource: true || false,
 *   },
 *   DatasetParameters: [ // DatasetParameterList
 *     { // DatasetParameter
 *       StringDatasetParameter: { // StringDatasetParameter
 *         Id: "STRING_VALUE", // required
 *         Name: "STRING_VALUE", // required
 *         ValueType: "MULTI_VALUED" || "SINGLE_VALUED", // required
 *         DefaultValues: { // StringDatasetParameterDefaultValues
 *           StaticValues: [
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *       DecimalDatasetParameter: { // DecimalDatasetParameter
 *         Id: "STRING_VALUE", // required
 *         Name: "STRING_VALUE", // required
 *         ValueType: "MULTI_VALUED" || "SINGLE_VALUED", // required
 *         DefaultValues: { // DecimalDatasetParameterDefaultValues
 *           StaticValues: [
 *             Number("double"),
 *           ],
 *         },
 *       },
 *       IntegerDatasetParameter: { // IntegerDatasetParameter
 *         Id: "STRING_VALUE", // required
 *         Name: "STRING_VALUE", // required
 *         ValueType: "MULTI_VALUED" || "SINGLE_VALUED", // required
 *         DefaultValues: { // IntegerDatasetParameterDefaultValues
 *           StaticValues: [
 *             Number("long"),
 *           ],
 *         },
 *       },
 *       DateTimeDatasetParameter: { // DateTimeDatasetParameter
 *         Id: "STRING_VALUE", // required
 *         Name: "STRING_VALUE", // required
 *         ValueType: "MULTI_VALUED" || "SINGLE_VALUED", // required
 *         TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *         DefaultValues: { // DateTimeDatasetParameterDefaultValues
 *           StaticValues: [
 *             new Date("TIMESTAMP"),
 *           ],
 *         },
 *       },
 *     },
 *   ],
 *   FolderArns: [ // FolderArnList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateDataSetCommand(input);
 * const response = await client.send(command);
 * // { // CreateDataSetResponse
 * //   Arn: "STRING_VALUE",
 * //   DataSetId: "STRING_VALUE",
 * //   IngestionArn: "STRING_VALUE",
 * //   IngestionId: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param CreateDataSetCommandInput - {@link CreateDataSetCommandInput}
 * @returns {@link CreateDataSetCommandOutput}
 * @see {@link CreateDataSetCommandInput} for command's `input` shape.
 * @see {@link CreateDataSetCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
 *
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The resource specified already exists. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *  <p>This error indicates that you are calling an operation on an Amazon QuickSight
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			Amazon QuickSight currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 */
export class CreateDataSetCommand extends $Command<
  CreateDataSetCommandInput,
  CreateDataSetCommandOutput,
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
  constructor(readonly input: CreateDataSetCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDataSetCommandInput, CreateDataSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateDataSetCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "CreateDataSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDataSetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "QuickSight_20180401",
        operation: "CreateDataSet",
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
  private serialize(input: CreateDataSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateDataSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDataSetCommandOutput> {
    return de_CreateDataSetCommand(output, context);
  }
}

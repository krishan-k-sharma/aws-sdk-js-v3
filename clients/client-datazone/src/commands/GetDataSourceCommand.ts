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

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { GetDataSourceInput, GetDataSourceOutput, GetDataSourceOutputFilterSensitiveLog } from "../models/models_0";
import { de_GetDataSourceCommand, se_GetDataSourceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDataSourceCommand}.
 */
export interface GetDataSourceCommandInput extends GetDataSourceInput {}
/**
 * @public
 *
 * The output of {@link GetDataSourceCommand}.
 */
export interface GetDataSourceCommandOutput extends GetDataSourceOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gets an Amazon DataZone data source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetDataSourceCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetDataSourceCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // GetDataSourceInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetDataSourceCommand(input);
 * const response = await client.send(command);
 * // { // GetDataSourceOutput
 * //   id: "STRING_VALUE", // required
 * //   status: "CREATING" || "FAILED_CREATION" || "READY" || "UPDATING" || "FAILED_UPDATE" || "RUNNING" || "DELETING" || "FAILED_DELETION",
 * //   type: "STRING_VALUE",
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   domainId: "STRING_VALUE", // required
 * //   projectId: "STRING_VALUE", // required
 * //   environmentId: "STRING_VALUE", // required
 * //   configuration: { // DataSourceConfigurationOutput Union: only one key present
 * //     glueRunConfiguration: { // GlueRunConfigurationOutput
 * //       accountId: "STRING_VALUE",
 * //       region: "STRING_VALUE",
 * //       dataAccessRole: "STRING_VALUE",
 * //       relationalFilterConfigurations: [ // RelationalFilterConfigurations // required
 * //         { // RelationalFilterConfiguration
 * //           databaseName: "STRING_VALUE", // required
 * //           schemaName: "STRING_VALUE",
 * //           filterExpressions: [ // FilterExpressions
 * //             { // FilterExpression
 * //               type: "INCLUDE" || "EXCLUDE", // required
 * //               expression: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //     redshiftRunConfiguration: { // RedshiftRunConfigurationOutput
 * //       accountId: "STRING_VALUE",
 * //       region: "STRING_VALUE",
 * //       dataAccessRole: "STRING_VALUE",
 * //       relationalFilterConfigurations: [ // required
 * //         {
 * //           databaseName: "STRING_VALUE", // required
 * //           schemaName: "STRING_VALUE",
 * //           filterExpressions: [
 * //             {
 * //               type: "INCLUDE" || "EXCLUDE", // required
 * //               expression: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       redshiftCredentialConfiguration: { // RedshiftCredentialConfiguration
 * //         secretManagerArn: "STRING_VALUE", // required
 * //       },
 * //       redshiftStorage: { // RedshiftStorage Union: only one key present
 * //         redshiftClusterSource: { // RedshiftClusterStorage
 * //           clusterName: "STRING_VALUE", // required
 * //         },
 * //         redshiftServerlessSource: { // RedshiftServerlessStorage
 * //           workgroupName: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     },
 * //   },
 * //   recommendation: { // RecommendationConfiguration
 * //     enableBusinessNameGeneration: true || false,
 * //   },
 * //   enableSetting: "ENABLED" || "DISABLED",
 * //   publishOnImport: true || false,
 * //   assetFormsOutput: [ // FormOutputList
 * //     { // FormOutput
 * //       formName: "STRING_VALUE", // required
 * //       typeName: "STRING_VALUE",
 * //       typeRevision: "STRING_VALUE",
 * //       content: "STRING_VALUE",
 * //     },
 * //   ],
 * //   schedule: { // ScheduleConfiguration
 * //     timezone: "UTC" || "AFRICA_JOHANNESBURG" || "AMERICA_MONTREAL" || "AMERICA_SAO_PAULO" || "ASIA_BAHRAIN" || "ASIA_BANGKOK" || "ASIA_CALCUTTA" || "ASIA_DUBAI" || "ASIA_HONG_KONG" || "ASIA_JAKARTA" || "ASIA_KUALA_LUMPUR" || "ASIA_SEOUL" || "ASIA_SHANGHAI" || "ASIA_SINGAPORE" || "ASIA_TAIPEI" || "ASIA_TOKYO" || "AUSTRALIA_MELBOURNE" || "AUSTRALIA_SYDNEY" || "CANADA_CENTRAL" || "CET" || "CST6CDT" || "ETC_GMT" || "ETC_GMT0" || "ETC_GMT_ADD_0" || "ETC_GMT_ADD_1" || "ETC_GMT_ADD_10" || "ETC_GMT_ADD_11" || "ETC_GMT_ADD_12" || "ETC_GMT_ADD_2" || "ETC_GMT_ADD_3" || "ETC_GMT_ADD_4" || "ETC_GMT_ADD_5" || "ETC_GMT_ADD_6" || "ETC_GMT_ADD_7" || "ETC_GMT_ADD_8" || "ETC_GMT_ADD_9" || "ETC_GMT_NEG_0" || "ETC_GMT_NEG_1" || "ETC_GMT_NEG_10" || "ETC_GMT_NEG_11" || "ETC_GMT_NEG_12" || "ETC_GMT_NEG_13" || "ETC_GMT_NEG_14" || "ETC_GMT_NEG_2" || "ETC_GMT_NEG_3" || "ETC_GMT_NEG_4" || "ETC_GMT_NEG_5" || "ETC_GMT_NEG_6" || "ETC_GMT_NEG_7" || "ETC_GMT_NEG_8" || "ETC_GMT_NEG_9" || "EUROPE_DUBLIN" || "EUROPE_LONDON" || "EUROPE_PARIS" || "EUROPE_STOCKHOLM" || "EUROPE_ZURICH" || "ISRAEL" || "MEXICO_GENERAL" || "MST7MDT" || "PACIFIC_AUCKLAND" || "US_CENTRAL" || "US_EASTERN" || "US_MOUNTAIN" || "US_PACIFIC",
 * //     schedule: "STRING_VALUE",
 * //   },
 * //   lastRunStatus: "REQUESTED" || "RUNNING" || "FAILED" || "PARTIALLY_SUCCEEDED" || "SUCCESS",
 * //   lastRunAt: new Date("TIMESTAMP"),
 * //   lastRunErrorMessage: { // DataSourceErrorMessage
 * //     errorType: "ACCESS_DENIED_EXCEPTION" || "CONFLICT_EXCEPTION" || "INTERNAL_SERVER_EXCEPTION" || "RESOURCE_NOT_FOUND_EXCEPTION" || "SERVICE_QUOTA_EXCEEDED_EXCEPTION" || "THROTTLING_EXCEPTION" || "VALIDATION_EXCEPTION", // required
 * //     errorDetail: "STRING_VALUE",
 * //   },
 * //   lastRunAssetCount: Number("int"),
 * //   errorMessage: {
 * //     errorType: "ACCESS_DENIED_EXCEPTION" || "CONFLICT_EXCEPTION" || "INTERNAL_SERVER_EXCEPTION" || "RESOURCE_NOT_FOUND_EXCEPTION" || "SERVICE_QUOTA_EXCEEDED_EXCEPTION" || "THROTTLING_EXCEPTION" || "VALIDATION_EXCEPTION", // required
 * //     errorDetail: "STRING_VALUE",
 * //   },
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetDataSourceCommandInput - {@link GetDataSourceCommandInput}
 * @returns {@link GetDataSourceCommandOutput}
 * @see {@link GetDataSourceCommandInput} for command's `input` shape.
 * @see {@link GetDataSourceCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict while performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request has exceeded the specified service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 */
export class GetDataSourceCommand extends $Command<
  GetDataSourceCommandInput,
  GetDataSourceCommandOutput,
  DataZoneClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: GetDataSourceCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataZoneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDataSourceCommandInput, GetDataSourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetDataSourceCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataZoneClient";
    const commandName = "GetDataSourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetDataSourceOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "DataZone",
        operation: "GetDataSource",
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
  private serialize(input: GetDataSourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDataSourceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDataSourceCommandOutput> {
    return de_GetDataSourceCommand(output, context);
  }
}

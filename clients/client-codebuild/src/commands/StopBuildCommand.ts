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

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { StopBuildInput, StopBuildOutput } from "../models/models_0";
import { de_StopBuildCommand, se_StopBuildCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StopBuildCommand}.
 */
export interface StopBuildCommandInput extends StopBuildInput {}
/**
 * @public
 *
 * The output of {@link StopBuildCommand}.
 */
export interface StopBuildCommandOutput extends StopBuildOutput, __MetadataBearer {}

/**
 * @public
 * <p>Attempts to stop running a build.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, StopBuildCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, StopBuildCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const input = { // StopBuildInput
 *   id: "STRING_VALUE", // required
 * };
 * const command = new StopBuildCommand(input);
 * const response = await client.send(command);
 * // { // StopBuildOutput
 * //   build: { // Build
 * //     id: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     buildNumber: Number("long"),
 * //     startTime: new Date("TIMESTAMP"),
 * //     endTime: new Date("TIMESTAMP"),
 * //     currentPhase: "STRING_VALUE",
 * //     buildStatus: "SUCCEEDED" || "FAILED" || "FAULT" || "TIMED_OUT" || "IN_PROGRESS" || "STOPPED",
 * //     sourceVersion: "STRING_VALUE",
 * //     resolvedSourceVersion: "STRING_VALUE",
 * //     projectName: "STRING_VALUE",
 * //     phases: [ // BuildPhases
 * //       { // BuildPhase
 * //         phaseType: "SUBMITTED" || "QUEUED" || "PROVISIONING" || "DOWNLOAD_SOURCE" || "INSTALL" || "PRE_BUILD" || "BUILD" || "POST_BUILD" || "UPLOAD_ARTIFACTS" || "FINALIZING" || "COMPLETED",
 * //         phaseStatus: "SUCCEEDED" || "FAILED" || "FAULT" || "TIMED_OUT" || "IN_PROGRESS" || "STOPPED",
 * //         startTime: new Date("TIMESTAMP"),
 * //         endTime: new Date("TIMESTAMP"),
 * //         durationInSeconds: Number("long"),
 * //         contexts: [ // PhaseContexts
 * //           { // PhaseContext
 * //             statusCode: "STRING_VALUE",
 * //             message: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     source: { // ProjectSource
 * //       type: "CODECOMMIT" || "CODEPIPELINE" || "GITHUB" || "S3" || "BITBUCKET" || "GITHUB_ENTERPRISE" || "NO_SOURCE", // required
 * //       location: "STRING_VALUE",
 * //       gitCloneDepth: Number("int"),
 * //       gitSubmodulesConfig: { // GitSubmodulesConfig
 * //         fetchSubmodules: true || false, // required
 * //       },
 * //       buildspec: "STRING_VALUE",
 * //       auth: { // SourceAuth
 * //         type: "OAUTH", // required
 * //         resource: "STRING_VALUE",
 * //       },
 * //       reportBuildStatus: true || false,
 * //       buildStatusConfig: { // BuildStatusConfig
 * //         context: "STRING_VALUE",
 * //         targetUrl: "STRING_VALUE",
 * //       },
 * //       insecureSsl: true || false,
 * //       sourceIdentifier: "STRING_VALUE",
 * //     },
 * //     secondarySources: [ // ProjectSources
 * //       {
 * //         type: "CODECOMMIT" || "CODEPIPELINE" || "GITHUB" || "S3" || "BITBUCKET" || "GITHUB_ENTERPRISE" || "NO_SOURCE", // required
 * //         location: "STRING_VALUE",
 * //         gitCloneDepth: Number("int"),
 * //         gitSubmodulesConfig: {
 * //           fetchSubmodules: true || false, // required
 * //         },
 * //         buildspec: "STRING_VALUE",
 * //         auth: {
 * //           type: "OAUTH", // required
 * //           resource: "STRING_VALUE",
 * //         },
 * //         reportBuildStatus: true || false,
 * //         buildStatusConfig: {
 * //           context: "STRING_VALUE",
 * //           targetUrl: "STRING_VALUE",
 * //         },
 * //         insecureSsl: true || false,
 * //         sourceIdentifier: "STRING_VALUE",
 * //       },
 * //     ],
 * //     secondarySourceVersions: [ // ProjectSecondarySourceVersions
 * //       { // ProjectSourceVersion
 * //         sourceIdentifier: "STRING_VALUE", // required
 * //         sourceVersion: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     artifacts: { // BuildArtifacts
 * //       location: "STRING_VALUE",
 * //       sha256sum: "STRING_VALUE",
 * //       md5sum: "STRING_VALUE",
 * //       overrideArtifactName: true || false,
 * //       encryptionDisabled: true || false,
 * //       artifactIdentifier: "STRING_VALUE",
 * //       bucketOwnerAccess: "NONE" || "READ_ONLY" || "FULL",
 * //     },
 * //     secondaryArtifacts: [ // BuildArtifactsList
 * //       {
 * //         location: "STRING_VALUE",
 * //         sha256sum: "STRING_VALUE",
 * //         md5sum: "STRING_VALUE",
 * //         overrideArtifactName: true || false,
 * //         encryptionDisabled: true || false,
 * //         artifactIdentifier: "STRING_VALUE",
 * //         bucketOwnerAccess: "NONE" || "READ_ONLY" || "FULL",
 * //       },
 * //     ],
 * //     cache: { // ProjectCache
 * //       type: "NO_CACHE" || "S3" || "LOCAL", // required
 * //       location: "STRING_VALUE",
 * //       modes: [ // ProjectCacheModes
 * //         "LOCAL_DOCKER_LAYER_CACHE" || "LOCAL_SOURCE_CACHE" || "LOCAL_CUSTOM_CACHE",
 * //       ],
 * //     },
 * //     environment: { // ProjectEnvironment
 * //       type: "WINDOWS_CONTAINER" || "LINUX_CONTAINER" || "LINUX_GPU_CONTAINER" || "ARM_CONTAINER" || "WINDOWS_SERVER_2019_CONTAINER" || "LINUX_LAMBDA_CONTAINER" || "ARM_LAMBDA_CONTAINER", // required
 * //       image: "STRING_VALUE", // required
 * //       computeType: "BUILD_GENERAL1_SMALL" || "BUILD_GENERAL1_MEDIUM" || "BUILD_GENERAL1_LARGE" || "BUILD_GENERAL1_2XLARGE" || "BUILD_LAMBDA_1GB" || "BUILD_LAMBDA_2GB" || "BUILD_LAMBDA_4GB" || "BUILD_LAMBDA_8GB" || "BUILD_LAMBDA_10GB", // required
 * //       environmentVariables: [ // EnvironmentVariables
 * //         { // EnvironmentVariable
 * //           name: "STRING_VALUE", // required
 * //           value: "STRING_VALUE", // required
 * //           type: "PLAINTEXT" || "PARAMETER_STORE" || "SECRETS_MANAGER",
 * //         },
 * //       ],
 * //       privilegedMode: true || false,
 * //       certificate: "STRING_VALUE",
 * //       registryCredential: { // RegistryCredential
 * //         credential: "STRING_VALUE", // required
 * //         credentialProvider: "SECRETS_MANAGER", // required
 * //       },
 * //       imagePullCredentialsType: "CODEBUILD" || "SERVICE_ROLE",
 * //     },
 * //     serviceRole: "STRING_VALUE",
 * //     logs: { // LogsLocation
 * //       groupName: "STRING_VALUE",
 * //       streamName: "STRING_VALUE",
 * //       deepLink: "STRING_VALUE",
 * //       s3DeepLink: "STRING_VALUE",
 * //       cloudWatchLogsArn: "STRING_VALUE",
 * //       s3LogsArn: "STRING_VALUE",
 * //       cloudWatchLogs: { // CloudWatchLogsConfig
 * //         status: "ENABLED" || "DISABLED", // required
 * //         groupName: "STRING_VALUE",
 * //         streamName: "STRING_VALUE",
 * //       },
 * //       s3Logs: { // S3LogsConfig
 * //         status: "ENABLED" || "DISABLED", // required
 * //         location: "STRING_VALUE",
 * //         encryptionDisabled: true || false,
 * //         bucketOwnerAccess: "NONE" || "READ_ONLY" || "FULL",
 * //       },
 * //     },
 * //     timeoutInMinutes: Number("int"),
 * //     queuedTimeoutInMinutes: Number("int"),
 * //     buildComplete: true || false,
 * //     initiator: "STRING_VALUE",
 * //     vpcConfig: { // VpcConfig
 * //       vpcId: "STRING_VALUE",
 * //       subnets: [ // Subnets
 * //         "STRING_VALUE",
 * //       ],
 * //       securityGroupIds: [ // SecurityGroupIds
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     networkInterface: { // NetworkInterface
 * //       subnetId: "STRING_VALUE",
 * //       networkInterfaceId: "STRING_VALUE",
 * //     },
 * //     encryptionKey: "STRING_VALUE",
 * //     exportedEnvironmentVariables: [ // ExportedEnvironmentVariables
 * //       { // ExportedEnvironmentVariable
 * //         name: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     reportArns: [ // BuildReportArns
 * //       "STRING_VALUE",
 * //     ],
 * //     fileSystemLocations: [ // ProjectFileSystemLocations
 * //       { // ProjectFileSystemLocation
 * //         type: "EFS",
 * //         location: "STRING_VALUE",
 * //         mountPoint: "STRING_VALUE",
 * //         identifier: "STRING_VALUE",
 * //         mountOptions: "STRING_VALUE",
 * //       },
 * //     ],
 * //     debugSession: { // DebugSession
 * //       sessionEnabled: true || false,
 * //       sessionTarget: "STRING_VALUE",
 * //     },
 * //     buildBatchArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param StopBuildCommandInput - {@link StopBuildCommandInput}
 * @returns {@link StopBuildCommandOutput}
 * @see {@link StopBuildCommandInput} for command's `input` shape.
 * @see {@link StopBuildCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified Amazon Web Services resource cannot be found.</p>
 *
 * @throws {@link CodeBuildServiceException}
 * <p>Base exception class for all service exceptions from CodeBuild service.</p>
 *
 */
export class StopBuildCommand extends $Command<
  StopBuildCommandInput,
  StopBuildCommandOutput,
  CodeBuildClientResolvedConfig
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
  constructor(readonly input: StopBuildCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeBuildClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopBuildCommandInput, StopBuildCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, StopBuildCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "StopBuildCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeBuild_20161006",
        operation: "StopBuild",
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
  private serialize(input: StopBuildCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StopBuildCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopBuildCommandOutput> {
    return de_StopBuildCommand(output, context);
  }
}

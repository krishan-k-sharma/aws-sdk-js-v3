// smithy-typescript generated code
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { Credentials as __Credentials } from "@aws-sdk/types";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandler as __HttpHandler } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  CreateEnvironmentEC2CommandInput,
  CreateEnvironmentEC2CommandOutput,
} from "./commands/CreateEnvironmentEC2Command";
import {
  CreateEnvironmentMembershipCommandInput,
  CreateEnvironmentMembershipCommandOutput,
} from "./commands/CreateEnvironmentMembershipCommand";
import { DeleteEnvironmentCommandInput, DeleteEnvironmentCommandOutput } from "./commands/DeleteEnvironmentCommand";
import {
  DeleteEnvironmentMembershipCommandInput,
  DeleteEnvironmentMembershipCommandOutput,
} from "./commands/DeleteEnvironmentMembershipCommand";
import {
  DescribeEnvironmentMembershipsCommandInput,
  DescribeEnvironmentMembershipsCommandOutput,
} from "./commands/DescribeEnvironmentMembershipsCommand";
import {
  DescribeEnvironmentsCommandInput,
  DescribeEnvironmentsCommandOutput,
} from "./commands/DescribeEnvironmentsCommand";
import {
  DescribeEnvironmentStatusCommandInput,
  DescribeEnvironmentStatusCommandOutput,
} from "./commands/DescribeEnvironmentStatusCommand";
import { ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput } from "./commands/ListEnvironmentsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput } from "./commands/UpdateEnvironmentCommand";
import {
  UpdateEnvironmentMembershipCommandInput,
  UpdateEnvironmentMembershipCommandOutput,
} from "./commands/UpdateEnvironmentMembershipCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | CreateEnvironmentEC2CommandInput
  | CreateEnvironmentMembershipCommandInput
  | DeleteEnvironmentCommandInput
  | DeleteEnvironmentMembershipCommandInput
  | DescribeEnvironmentMembershipsCommandInput
  | DescribeEnvironmentStatusCommandInput
  | DescribeEnvironmentsCommandInput
  | ListEnvironmentsCommandInput
  | ListTagsForResourceCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateEnvironmentCommandInput
  | UpdateEnvironmentMembershipCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateEnvironmentEC2CommandOutput
  | CreateEnvironmentMembershipCommandOutput
  | DeleteEnvironmentCommandOutput
  | DeleteEnvironmentMembershipCommandOutput
  | DescribeEnvironmentMembershipsCommandOutput
  | DescribeEnvironmentStatusCommandOutput
  | DescribeEnvironmentsCommandOutput
  | ListEnvironmentsCommandOutput
  | ListTagsForResourceCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateEnvironmentCommandOutput
  | UpdateEnvironmentMembershipCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type Cloud9ClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of Cloud9Client class constructor that set the region, credentials and other options.
 */
export interface Cloud9ClientConfig extends Cloud9ClientConfigType {}

/**
 * @public
 */
export type Cloud9ClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of Cloud9Client class. This is resolved and normalized from the {@link Cloud9ClientConfig | constructor configuration interface}.
 */
export interface Cloud9ClientResolvedConfig extends Cloud9ClientResolvedConfigType {}

/**
 * @public
 * <fullname>Cloud9</fullname>
 *          <p>Cloud9 is a collection of tools that you can use to code, build, run, test, debug, and
 *       release software in the cloud.</p>
 *          <p>For more information about Cloud9, see the <a href="https://docs.aws.amazon.com/cloud9/latest/user-guide">Cloud9 User Guide</a>.</p>
 *          <p>Cloud9 supports these operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>CreateEnvironmentEC2</code>: Creates an Cloud9 development environment, launches
 *           an Amazon EC2 instance, and then connects from the instance to the environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreateEnvironmentMembership</code>: Adds an environment member to an
 *           environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteEnvironment</code>: Deletes an environment. If an Amazon EC2 instance is
 *           connected to the environment, also terminates the instance.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteEnvironmentMembership</code>: Deletes an environment member from an
 *           environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeEnvironmentMemberships</code>: Gets information about environment
 *           members for an environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeEnvironments</code>: Gets information about environments.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeEnvironmentStatus</code>: Gets status information for an
 *           environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListEnvironments</code>: Gets a list of environment identifiers.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListTagsForResource</code>: Gets the tags for an environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>TagResource</code>: Adds tags to an environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UntagResource</code>: Removes tags from an environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateEnvironment</code>: Changes the settings of an existing
 *           environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateEnvironmentMembership</code>: Changes the settings of an existing
 *           environment member for an environment.</p>
 *             </li>
 *          </ul>
 */
export class Cloud9Client extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  Cloud9ClientResolvedConfig
> {
  /**
   * The resolved configuration of Cloud9Client class. This is resolved and normalized from the {@link Cloud9ClientConfig | constructor configuration interface}.
   */
  readonly config: Cloud9ClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<Cloud9ClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}

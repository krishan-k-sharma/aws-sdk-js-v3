// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  _InstanceType,
  AccessScopeAnalysisFinding,
  AddedPrincipal,
  AddIpamOperatingRegion,
  AddPrefixListEntry,
  AddressAttribute,
  Affinity,
  ApplianceModeSupportValue,
  AutoPlacement,
  ByoipCidr,
  CapacityReservation,
  CapacityReservationInstancePlatform,
  CurrencyCodeValues,
  DnsSupportValue,
  EnaSrdSpecification,
  EndDateType,
  HostMaintenance,
  HostRecovery,
  InstanceEventWindow,
  Ipv6SupportValue,
  SecurityGroupReferencingSupportValue,
  SubnetAssociation,
  Tag,
  TagSpecification,
  TargetConfigurationRequest,
  TransitGatewayAssociationState,
  TransitGatewayAttachmentResourceType,
  TransitGatewayPolicyTableAssociation,
  TransitGatewayVpcAttachment,
  UnsuccessfulItem,
  VerifiedAccessInstance,
  VerifiedAccessSseSpecificationResponse,
  VerifiedAccessTrustProvider,
  VerifiedAccessTrustProviderFilterSensitiveLog,
} from "./models_0";
import {
  AttributeValue,
  BlockDeviceMapping,
  CapacityReservationPreference,
  CapacityReservationTarget,
  ClientConnectOptions,
  ClientLoginBannerOptions,
  ConnectionLogOptions,
  ConnectionTrackingSpecificationRequest,
  DiskImageFormat,
  FleetExcessCapacityTerminationPolicy,
  FleetLaunchTemplateConfigRequest,
  HostnameType,
  InstanceEventWindowTimeRangeRequest,
  InstanceRequirementsRequest,
  Ipam,
  IpamPool,
  IpamResourceDiscovery,
  IpamResourceTag,
  IpamScope,
  IpamTier,
  LaunchTemplate,
  LocalGatewayRoute,
  ManagedPrefixList,
  NetworkInsightsAccessScopeContent,
  Placement,
  PlatformValues,
  RequestIpamResourceTag,
  ResponseLaunchTemplateData,
  ResponseLaunchTemplateDataFilterSensitiveLog,
  SelfServicePortal,
  ShutdownBehavior,
  TargetCapacitySpecificationRequest,
  TargetCapacityUnitType,
  VolumeType,
} from "./models_1";
import {
  AutoAcceptSharedAttachmentsValue,
  DefaultRouteTableAssociationValue,
  DefaultRouteTablePropagationValue,
  DnsOptionsSpecification,
  IKEVersionsRequestListValue,
  IpAddressType,
  PayerResponsibility,
  Phase1DHGroupNumbersRequestListValue,
  Phase1EncryptionAlgorithmsRequestListValue,
  Phase1IntegrityAlgorithmsRequestListValue,
  Phase2DHGroupNumbersRequestListValue,
  Phase2EncryptionAlgorithmsRequestListValue,
  Phase2IntegrityAlgorithmsRequestListValue,
  SubnetCidrReservation,
  SubnetConfiguration,
  TrafficDirection,
  TrafficMirrorFilter,
  TrafficMirrorFilterRule,
  TrafficMirrorNetworkService,
  TrafficMirrorPortRangeRequest,
  TrafficMirrorRuleAction,
  TrafficMirrorSession,
  TransitGateway,
  TransitGatewayPrefixListReference,
  VerifiedAccessEndpoint,
  VerifiedAccessEndpointProtocol,
  VerifiedAccessGroup,
  VerifiedAccessSseSpecificationRequest,
  VpnConnection,
  VpnConnectionFilterSensitiveLog,
  VpnEcmpSupportValue,
  VpnTunnelLogOptionsSpecification,
} from "./models_2";
import {
  ArchitectureValues,
  BootModeValues,
  Byoasn,
  ConversionTask,
  ConversionTaskFilterSensitiveLog,
  Filter,
  FpgaImageAttribute,
  FpgaImageAttributeName,
  ImdsSupportValues,
  ImportImageLicenseConfigurationResponse,
  InstanceTagNotificationAttribute,
  IpamPoolCidr,
  LaunchPermission,
  PermissionGroup,
  SnapshotDetail,
  SnapshotDetailFilterSensitiveLog,
  TpmSupportValues,
  VirtualizationType,
} from "./models_3";
import {
  AnalysisStatus,
  ArchitectureType,
  AttributeBooleanValue,
  CreateVolumePermission,
  ExcessCapacityTerminationPolicy,
  HttpTokensState,
  InstanceAttributeName,
  InstanceAutoRecoveryState,
  InstanceMetadataEndpointState,
  InstanceMetadataOptionsResponse,
  InstanceMetadataProtocolState,
  InstanceMetadataTagsState,
  InstanceStatusEvent,
  LaunchTemplateConfig,
  LockState,
  Monitoring,
  PublicIpv4PoolRange,
  ReservedInstancesConfiguration,
  ScheduledInstance,
  SnapshotAttributeName,
  SnapshotTaskDetail,
  SnapshotTaskDetailFilterSensitiveLog,
} from "./models_4";
import {
  InstanceFamilyCreditSpecification,
  IpamComplianceStatus,
  IpamOverlapStatus,
  IpamResourceType,
  Purchase,
  SnapshotBlockPublicAccessState,
  TransitGatewayPropagationState,
  UnlimitedSupportedInstanceFamily,
  VerifiedAccessInstanceLoggingConfiguration,
  VolumeModification,
} from "./models_5";

/**
 * @public
 */
export interface GetIpamPoolCidrsResult {
  /**
   * @public
   * <p>Information about the CIDRs provisioned to an IPAM pool.</p>
   */
  IpamPoolCidrs?: IpamPoolCidr[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetIpamResourceCidrsRequest {
  /**
   * @public
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>One or more filters for the request. For more information about filtering, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-filter.html">Filtering CLI output</a>.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of results to return in the request.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The ID of the scope that the resource is in.</p>
   */
  IpamScopeId: string | undefined;

  /**
   * @public
   * <p>The ID of the IPAM pool that the resource is in.</p>
   */
  IpamPoolId?: string;

  /**
   * @public
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The resource type.</p>
   */
  ResourceType?: IpamResourceType;

  /**
   * @public
   * <p>The resource tag.</p>
   */
  ResourceTag?: RequestIpamResourceTag;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the resource.</p>
   */
  ResourceOwner?: string;
}

/**
 * @public
 * @enum
 */
export const IpamManagementState = {
  ignored: "ignored",
  managed: "managed",
  unmanaged: "unmanaged",
} as const;

/**
 * @public
 */
export type IpamManagementState = (typeof IpamManagementState)[keyof typeof IpamManagementState];

/**
 * @public
 * <p>The CIDR for an IPAM resource.</p>
 */
export interface IpamResourceCidr {
  /**
   * @public
   * <p>The IPAM ID for an IPAM resource.</p>
   */
  IpamId?: string;

  /**
   * @public
   * <p>The scope ID for an IPAM resource.</p>
   */
  IpamScopeId?: string;

  /**
   * @public
   * <p>The pool ID for an IPAM resource.</p>
   */
  IpamPoolId?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region for an IPAM resource.</p>
   */
  ResourceRegion?: string;

  /**
   * @public
   * <p>The Amazon Web Services account number of the owner of an IPAM resource.</p>
   */
  ResourceOwnerId?: string;

  /**
   * @public
   * <p>The ID of an IPAM resource.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The name of an IPAM resource.</p>
   */
  ResourceName?: string;

  /**
   * @public
   * <p>The CIDR for an IPAM resource.</p>
   */
  ResourceCidr?: string;

  /**
   * @public
   * <p>The type of IPAM resource.</p>
   */
  ResourceType?: IpamResourceType;

  /**
   * @public
   * <p>The tags for an IPAM resource.</p>
   */
  ResourceTags?: IpamResourceTag[];

  /**
   * @public
   * <p>The percentage of IP address space in use. To convert the decimal to a percentage, multiply the decimal by 100. Note the following:</p>
   *          <ul>
   *             <li>
   *                <p>For resources that are VPCs, this is the percentage of IP address space in the VPC that's taken up by subnet CIDRs.
   *          </p>
   *             </li>
   *             <li>
   *                <p>For resources that are subnets, if the subnet has an IPv4 CIDR provisioned to it, this is the percentage of IPv4 address space in the subnet that's in use. If the subnet has an IPv6 CIDR provisioned to it, the percentage of IPv6 address space in use is not represented. The percentage of IPv6 address space in use cannot currently be calculated.
   *          </p>
   *             </li>
   *             <li>
   *                <p>For resources that are public IPv4 pools, this is the percentage of IP address space in the pool that's been allocated to Elastic IP addresses (EIPs).
   *          </p>
   *             </li>
   *          </ul>
   */
  IpUsage?: number;

  /**
   * @public
   * <p>The compliance status of the IPAM resource. For more information on compliance statuses, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/monitor-cidr-compliance-ipam.html">Monitor CIDR usage by resource</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   */
  ComplianceStatus?: IpamComplianceStatus;

  /**
   * @public
   * <p>The management state of the resource. For more information about management states, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/monitor-cidr-compliance-ipam.html">Monitor CIDR usage by resource</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   */
  ManagementState?: IpamManagementState;

  /**
   * @public
   * <p>The overlap status of an IPAM resource. The overlap status tells you if the CIDR for a resource overlaps with another CIDR in the scope. For more information on overlap statuses, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/monitor-cidr-compliance-ipam.html">Monitor CIDR usage by resource</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   */
  OverlapStatus?: IpamOverlapStatus;

  /**
   * @public
   * <p>The ID of a VPC.</p>
   */
  VpcId?: string;
}

/**
 * @public
 */
export interface GetIpamResourceCidrsResult {
  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The resource CIDRs.</p>
   */
  IpamResourceCidrs?: IpamResourceCidr[];
}

/**
 * @public
 */
export interface GetLaunchTemplateDataRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;
}

/**
 * @public
 */
export interface GetLaunchTemplateDataResult {
  /**
   * @public
   * <p>The instance data.</p>
   */
  LaunchTemplateData?: ResponseLaunchTemplateData;
}

/**
 * @public
 */
export interface GetManagedPrefixListAssociationsRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Describes the resource with which a prefix list is associated.</p>
 */
export interface PrefixListAssociation {
  /**
   * @public
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The owner of the resource.</p>
   */
  ResourceOwner?: string;
}

/**
 * @public
 */
export interface GetManagedPrefixListAssociationsResult {
  /**
   * @public
   * <p>Information about the associations.</p>
   */
  PrefixListAssociations?: PrefixListAssociation[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetManagedPrefixListEntriesRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId: string | undefined;

  /**
   * @public
   * <p>The version of the prefix list for which to return the entries. The default is the current version.</p>
   */
  TargetVersion?: number;

  /**
   * @public
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Describes a prefix list entry.</p>
 */
export interface PrefixListEntry {
  /**
   * @public
   * <p>The CIDR block.</p>
   */
  Cidr?: string;

  /**
   * @public
   * <p>The description.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface GetManagedPrefixListEntriesResult {
  /**
   * @public
   * <p>Information about the prefix list entries.</p>
   */
  Entries?: PrefixListEntry[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetNetworkInsightsAccessScopeAnalysisFindingsRequest {
  /**
   * @public
   * <p>The ID of the Network Access Scope analysis.</p>
   */
  NetworkInsightsAccessScopeAnalysisId: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return with a single call.
   *    To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface GetNetworkInsightsAccessScopeAnalysisFindingsResult {
  /**
   * @public
   * <p>The ID of the Network Access Scope analysis.</p>
   */
  NetworkInsightsAccessScopeAnalysisId?: string;

  /**
   * @public
   * <p>The status of Network Access Scope Analysis.</p>
   */
  AnalysisStatus?: AnalysisStatus;

  /**
   * @public
   * <p>The findings associated with Network Access Scope Analysis.</p>
   */
  AnalysisFindings?: AccessScopeAnalysisFinding[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetNetworkInsightsAccessScopeContentRequest {
  /**
   * @public
   * <p>The ID of the Network Access Scope.</p>
   */
  NetworkInsightsAccessScopeId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface GetNetworkInsightsAccessScopeContentResult {
  /**
   * @public
   * <p>The Network Access Scope content.</p>
   */
  NetworkInsightsAccessScopeContent?: NetworkInsightsAccessScopeContent;
}

/**
 * @public
 */
export interface GetPasswordDataRequest {
  /**
   * @public
   * <p>The ID of the Windows instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface GetPasswordDataResult {
  /**
   * @public
   * <p>The ID of the Windows instance.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>The password of the instance. Returns an empty string if the password is not
   *             available.</p>
   */
  PasswordData?: string;

  /**
   * @public
   * <p>The time the data was last updated.</p>
   */
  Timestamp?: Date;
}

/**
 * @public
 * <p>Contains the parameters for GetReservedInstanceExchangeQuote.</p>
 */
export interface GetReservedInstancesExchangeQuoteRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *       and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *       Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The IDs of the Convertible Reserved Instances to exchange.</p>
   */
  ReservedInstanceIds: string[] | undefined;

  /**
   * @public
   * <p>The configuration of the target Convertible Reserved Instance to exchange for your
   *             current Convertible Reserved Instances.</p>
   */
  TargetConfigurations?: TargetConfigurationRequest[];
}

/**
 * @public
 * <p>The cost associated with the Reserved Instance.</p>
 */
export interface ReservationValue {
  /**
   * @public
   * <p>The hourly rate of the reservation.</p>
   */
  HourlyPrice?: string;

  /**
   * @public
   * <p>The balance of the total value (the sum of remainingUpfrontValue + hourlyPrice * number of hours remaining).</p>
   */
  RemainingTotalValue?: string;

  /**
   * @public
   * <p>The remaining upfront cost of the reservation.</p>
   */
  RemainingUpfrontValue?: string;
}

/**
 * @public
 * <p>The total value of the Convertible Reserved Instance.</p>
 */
export interface ReservedInstanceReservationValue {
  /**
   * @public
   * <p>The total value of the Convertible Reserved Instance that you are exchanging.</p>
   */
  ReservationValue?: ReservationValue;

  /**
   * @public
   * <p>The ID of the Convertible Reserved Instance that you are exchanging.</p>
   */
  ReservedInstanceId?: string;
}

/**
 * @public
 * <p>Information about the Convertible Reserved Instance offering.</p>
 */
export interface TargetConfiguration {
  /**
   * @public
   * <p>The number of instances the Convertible Reserved Instance offering can be applied to. This parameter is
   *       reserved and cannot be specified in a request</p>
   */
  InstanceCount?: number;

  /**
   * @public
   * <p>The ID of the Convertible Reserved Instance offering.</p>
   */
  OfferingId?: string;
}

/**
 * @public
 * <p>The total value of the new Convertible Reserved Instances.</p>
 */
export interface TargetReservationValue {
  /**
   * @public
   * <p>The total value of the Convertible Reserved Instances that make up the exchange. This is the sum of
   *       the list value, remaining upfront price, and additional upfront cost of the exchange.</p>
   */
  ReservationValue?: ReservationValue;

  /**
   * @public
   * <p>The configuration of the Convertible Reserved Instances that make up the exchange.</p>
   */
  TargetConfiguration?: TargetConfiguration;
}

/**
 * @public
 * <p>Contains the output of GetReservedInstancesExchangeQuote.</p>
 */
export interface GetReservedInstancesExchangeQuoteResult {
  /**
   * @public
   * <p>The currency of the transaction.</p>
   */
  CurrencyCode?: string;

  /**
   * @public
   * <p>If <code>true</code>, the exchange is valid. If <code>false</code>, the exchange cannot be completed.</p>
   */
  IsValidExchange?: boolean;

  /**
   * @public
   * <p>The new end date of the reservation term.</p>
   */
  OutputReservedInstancesWillExpireAt?: Date;

  /**
   * @public
   * <p>The total true upfront charge for the exchange.</p>
   */
  PaymentDue?: string;

  /**
   * @public
   * <p>The cost associated with the Reserved Instance.</p>
   */
  ReservedInstanceValueRollup?: ReservationValue;

  /**
   * @public
   * <p>The configuration of your Convertible Reserved Instances.</p>
   */
  ReservedInstanceValueSet?: ReservedInstanceReservationValue[];

  /**
   * @public
   * <p>The cost associated with the Reserved Instance.</p>
   */
  TargetConfigurationValueRollup?: ReservationValue;

  /**
   * @public
   * <p>The values of the target Convertible Reserved Instances.</p>
   */
  TargetConfigurationValueSet?: TargetReservationValue[];

  /**
   * @public
   * <p>Describes the reason why the exchange cannot be completed.</p>
   */
  ValidationFailureReason?: string;
}

/**
 * @public
 */
export interface GetSecurityGroupsForVpcRequest {
  /**
   * @public
   * <p>The VPC ID where the security group can be used.</p>
   */
  VpcId: string | undefined;

  /**
   * @public
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to return for this request.
   * 	To get the next page of items, make another request with the token returned in the output.
   * 	For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The filters. If using multiple filters, the results include security groups which match all filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>group-id</code>: The security group ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>description</code>: The security group's description.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>group-name</code>: The security group name.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code>: The security group owner ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>primary-vpc-id</code>: The VPC ID in which the security group was created.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>A security group that can be used by interfaces in the VPC.</p>
 */
export interface SecurityGroupForVpc {
  /**
   * @public
   * <p>The security group's description.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The security group name.</p>
   */
  GroupName?: string;

  /**
   * @public
   * <p>The security group owner ID.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The security group ID.</p>
   */
  GroupId?: string;

  /**
   * @public
   * <p>The security group tags.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The VPC ID in which the security group was created.</p>
   */
  PrimaryVpcId?: string;
}

/**
 * @public
 */
export interface GetSecurityGroupsForVpcResult {
  /**
   * @public
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The security group that can be used by interfaces in the VPC.</p>
   */
  SecurityGroupForVpcs?: SecurityGroupForVpc[];
}

/**
 * @public
 */
export interface GetSerialConsoleAccessStatusRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface GetSerialConsoleAccessStatusResult {
  /**
   * @public
   * <p>If <code>true</code>, access to the EC2 serial console of all instances is enabled for
   * 			your account. If <code>false</code>, access to the EC2 serial console of all instances
   * 			is disabled for your account.</p>
   */
  SerialConsoleAccessEnabled?: boolean;
}

/**
 * @public
 */
export interface GetSnapshotBlockPublicAccessStateRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface GetSnapshotBlockPublicAccessStateResult {
  /**
   * @public
   * <p>The current state of block public access for snapshots. Possible values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>block-all-sharing</code> - All public sharing of snapshots is blocked. Users in
   *           the account can't request new public sharing. Additionally, snapshots that were already
   *           publicly shared are treated as private and are not publicly available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-new-sharing</code>  - Only new public sharing of snapshots is blocked.
   *           Users in the account can't request new public sharing. However, snapshots that were
   *           already publicly shared, remain publicly available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unblocked</code>  - Public sharing is not blocked. Users can publicly share
   *           snapshots.</p>
   *             </li>
   *          </ul>
   */
  State?: SnapshotBlockPublicAccessState;
}

/**
 * @public
 * <p>The architecture type, virtualization type, and other attributes for the instance types.
 *          When you specify instance attributes, Amazon EC2 will identify instance types with those
 *          attributes.</p>
 *          <p>If you specify <code>InstanceRequirementsWithMetadataRequest</code>, you can't specify
 *          <code>InstanceTypes</code>.</p>
 */
export interface InstanceRequirementsWithMetadataRequest {
  /**
   * @public
   * <p>The architecture type.</p>
   */
  ArchitectureTypes?: ArchitectureType[];

  /**
   * @public
   * <p>The virtualization type.</p>
   */
  VirtualizationTypes?: VirtualizationType[];

  /**
   * @public
   * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will
   *          identify instance types with those attributes.</p>
   */
  InstanceRequirements?: InstanceRequirementsRequest;
}

/**
 * @public
 */
export interface GetSpotPlacementScoresRequest {
  /**
   * @public
   * <p>The instance types. We recommend that you specify at least three instance types. If you
   *          specify one or two instance types, or specify variations of a single instance type (for
   *          example, an <code>m3.xlarge</code> with and without instance storage), the returned
   *          placement score will always be low. </p>
   *          <p>If you specify <code>InstanceTypes</code>, you can't specify
   *             <code>InstanceRequirementsWithMetadata</code>.</p>
   */
  InstanceTypes?: string[];

  /**
   * @public
   * <p>The target capacity.</p>
   */
  TargetCapacity: number | undefined;

  /**
   * @public
   * <p>The unit for the target capacity.</p>
   *          <p>Default: <code>units</code> (translates to number of instances)</p>
   */
  TargetCapacityUnitType?: TargetCapacityUnitType;

  /**
   * @public
   * <p>Specify <code>true</code> so that the response returns a list of scored Availability Zones.
   *          Otherwise, the response returns a list of scored Regions.</p>
   *          <p>A list of scored Availability Zones is useful if you want to launch all of your Spot
   *          capacity into a single Availability Zone.</p>
   */
  SingleAvailabilityZone?: boolean;

  /**
   * @public
   * <p>The Regions used to narrow down the list of Regions to be scored. Enter the Region code,
   *          for example, <code>us-east-1</code>.</p>
   */
  RegionNames?: string[];

  /**
   * @public
   * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will
   *          identify instance types with those attributes.</p>
   *          <p>If you specify <code>InstanceRequirementsWithMetadata</code>, you can't specify
   *             <code>InstanceTypes</code>.</p>
   */
  InstanceRequirementsWithMetadata?: InstanceRequirementsWithMetadataRequest;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The Spot placement score for this Region or Availability Zone. The score is calculated
 *          based on the assumption that the <code>capacity-optimized</code> allocation strategy is
 *          used and that all of the Availability Zones in the Region can be used.</p>
 */
export interface SpotPlacementScore {
  /**
   * @public
   * <p>The Region.</p>
   */
  Region?: string;

  /**
   * @public
   * <p>The Availability Zone.</p>
   */
  AvailabilityZoneId?: string;

  /**
   * @public
   * <p>The placement score, on a scale from <code>1</code> to <code>10</code>. A score of
   *             <code>10</code> indicates that your Spot request is highly likely to succeed in this
   *          Region or Availability Zone. A score of <code>1</code> indicates that your Spot request is
   *          not likely to succeed. </p>
   */
  Score?: number;
}

/**
 * @public
 */
export interface GetSpotPlacementScoresResult {
  /**
   * @public
   * <p>The Spot placement score for the top 10 Regions or Availability Zones, scored on a scale
   *          from 1 to 10. Each score  reflects how likely it is that each Region or Availability Zone
   *          will succeed at fulfilling the specified target capacity  <i>at the time of the Spot
   *             placement score request</i>. A score of <code>10</code> means that your Spot
   *          capacity request is highly likely to succeed in that Region or Availability Zone. </p>
   *          <p>If you request a Spot placement score for Regions, a high score assumes that your fleet
   *          request will be configured to use all Availability Zones and the
   *             <code>capacity-optimized</code> allocation strategy. If you request a Spot placement
   *          score for Availability Zones, a high score assumes that your fleet request will be
   *          configured to use a single Availability Zone and the <code>capacity-optimized</code>
   *          allocation strategy.</p>
   *          <p>Different  Regions or Availability Zones might return the same score.</p>
   *          <note>
   *             <p>The Spot placement score serves as a recommendation only. No score guarantees that your
   *             Spot request will be fully or partially fulfilled.</p>
   *          </note>
   */
  SpotPlacementScores?: SpotPlacementScore[];

  /**
   * @public
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetSubnetCidrReservationsRequest {
  /**
   * @public
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>reservationType</code> - The type of reservation (<code>prefix</code> |
   *                     <code>explicit</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>subnet-id</code> - The ID of the subnet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The ID of the subnet.</p>
   */
  SubnetId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface GetSubnetCidrReservationsResult {
  /**
   * @public
   * <p>Information about the IPv4 subnet CIDR reservations.</p>
   */
  SubnetIpv4CidrReservations?: SubnetCidrReservation[];

  /**
   * @public
   * <p>Information about the IPv6 subnet CIDR reservations.</p>
   */
  SubnetIpv6CidrReservations?: SubnetCidrReservation[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetTransitGatewayAttachmentPropagationsRequest {
  /**
   * @public
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * @public
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-route-table-id</code> - The ID of the transit gateway route table.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>Describes a propagation route table.</p>
 */
export interface TransitGatewayAttachmentPropagation {
  /**
   * @public
   * <p>The ID of the propagation route table.</p>
   */
  TransitGatewayRouteTableId?: string;

  /**
   * @public
   * <p>The state of the propagation route table.</p>
   */
  State?: TransitGatewayPropagationState;
}

/**
 * @public
 */
export interface GetTransitGatewayAttachmentPropagationsResult {
  /**
   * @public
   * <p>Information about the propagation route tables.</p>
   */
  TransitGatewayAttachmentPropagations?: TransitGatewayAttachmentPropagation[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetTransitGatewayMulticastDomainAssociationsRequest {
  /**
   * @public
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId: string | undefined;

  /**
   * @public
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resource-id</code> - The ID of the resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-type</code> - The type of resource. The valid value is: <code>vpc</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the subnet association. Valid values are
   *                         <code>associated</code> | <code>associating</code> |
   *                         <code>disassociated</code> | <code>disassociating</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>subnet-id</code> - The ID of the subnet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-attachment-id</code> - The id of the transit gateway attachment.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>Describes the resources associated with the transit gateway multicast domain.</p>
 */
export interface TransitGatewayMulticastDomainAssociation {
  /**
   * @public
   * <p>The ID of the transit gateway attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * @public
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The type of resource, for example a VPC attachment.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType;

  /**
   * @public
   * <p> The ID of the Amazon Web Services account that owns the transit gateway multicast domain association resource.</p>
   */
  ResourceOwnerId?: string;

  /**
   * @public
   * <p>The subnet associated with the transit gateway multicast domain.</p>
   */
  Subnet?: SubnetAssociation;
}

/**
 * @public
 */
export interface GetTransitGatewayMulticastDomainAssociationsResult {
  /**
   * @public
   * <p>Information about the multicast domain associations.</p>
   */
  MulticastDomainAssociations?: TransitGatewayMulticastDomainAssociation[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetTransitGatewayPolicyTableAssociationsRequest {
  /**
   * @public
   * <p>The ID of the transit gateway policy table.</p>
   */
  TransitGatewayPolicyTableId: string | undefined;

  /**
   * @public
   * <p>The filters associated with the transit gateway policy table.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface GetTransitGatewayPolicyTableAssociationsResult {
  /**
   * @public
   * <p>Returns details about the transit gateway policy table association.</p>
   */
  Associations?: TransitGatewayPolicyTableAssociation[];

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetTransitGatewayPolicyTableEntriesRequest {
  /**
   * @public
   * <p>The ID of the transit gateway policy table.</p>
   */
  TransitGatewayPolicyTableId: string | undefined;

  /**
   * @public
   * <p>The filters associated with the transit gateway policy table.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>Describes the meta data tags associated with a transit gateway policy rule.</p>
 */
export interface TransitGatewayPolicyRuleMetaData {
  /**
   * @public
   * <p>The key name for the transit gateway policy rule meta data tag.</p>
   */
  MetaDataKey?: string;

  /**
   * @public
   * <p>The value of the key for the transit gateway policy rule meta data tag.</p>
   */
  MetaDataValue?: string;
}

/**
 * @public
 * <p>Describes a rule associated with a transit gateway policy.</p>
 */
export interface TransitGatewayPolicyRule {
  /**
   * @public
   * <p>The source CIDR block for the transit gateway policy rule.</p>
   */
  SourceCidrBlock?: string;

  /**
   * @public
   * <p>The port range for the transit gateway policy rule. Currently this is set to * (all).</p>
   */
  SourcePortRange?: string;

  /**
   * @public
   * <p>The destination CIDR block for the transit gateway policy rule.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * @public
   * <p>The port range for the transit gateway policy rule. Currently this is set to * (all).</p>
   */
  DestinationPortRange?: string;

  /**
   * @public
   * <p>The protocol used by the transit gateway policy rule.</p>
   */
  Protocol?: string;

  /**
   * @public
   * <p>The meta data tags used for the transit gateway policy rule.</p>
   */
  MetaData?: TransitGatewayPolicyRuleMetaData;
}

/**
 * @public
 * <p>Describes a transit gateway policy table entry</p>
 */
export interface TransitGatewayPolicyTableEntry {
  /**
   * @public
   * <p>The rule number for the transit gateway policy table entry.</p>
   */
  PolicyRuleNumber?: string;

  /**
   * @public
   * <p>The policy rule associated with the transit gateway policy table.</p>
   */
  PolicyRule?: TransitGatewayPolicyRule;

  /**
   * @public
   * <p>The ID of the target route table.</p>
   */
  TargetRouteTableId?: string;
}

/**
 * @public
 */
export interface GetTransitGatewayPolicyTableEntriesResult {
  /**
   * @public
   * <p>The entries for the transit gateway policy table.</p>
   */
  TransitGatewayPolicyTableEntries?: TransitGatewayPolicyTableEntry[];
}

/**
 * @public
 */
export interface GetTransitGatewayPrefixListReferencesRequest {
  /**
   * @public
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * @public
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>attachment.resource-id</code> - The ID of the resource for the attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.resource-type</code> - The type of resource for the
   *                     attachment. Valid values are <code>vpc</code> | <code>vpn</code> |
   *                         <code>direct-connect-gateway</code> | <code>peering</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.transit-gateway-attachment-id</code> - The ID of the attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>is-blackhole</code> - Whether traffic matching the route is blocked (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>prefix-list-id</code> - The ID of the prefix list.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>prefix-list-owner-id</code> - The ID of the owner of the prefix list.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the prefix list reference (<code>pending</code> | <code>available</code> | <code>modifying</code> | <code>deleting</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface GetTransitGatewayPrefixListReferencesResult {
  /**
   * @public
   * <p>Information about the prefix list references.</p>
   */
  TransitGatewayPrefixListReferences?: TransitGatewayPrefixListReference[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetTransitGatewayRouteTableAssociationsRequest {
  /**
   * @public
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * @public
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resource-id</code> - The ID of the resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-type</code> - The resource type. Valid values are <code>vpc</code>
   *                     | <code>vpn</code> | <code>direct-connect-gateway</code> | <code>peering</code>
   *                     | <code>connect</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-attachment-id</code> - The ID of the attachment.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>Describes an association between a route table and a resource attachment.</p>
 */
export interface TransitGatewayRouteTableAssociation {
  /**
   * @public
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * @public
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType;

  /**
   * @public
   * <p>The state of the association.</p>
   */
  State?: TransitGatewayAssociationState;
}

/**
 * @public
 */
export interface GetTransitGatewayRouteTableAssociationsResult {
  /**
   * @public
   * <p>Information about the associations.</p>
   */
  Associations?: TransitGatewayRouteTableAssociation[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetTransitGatewayRouteTablePropagationsRequest {
  /**
   * @public
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * @public
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resource-id</code> - The ID of the resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-type</code> - The resource type. Valid values are <code>vpc</code>
   *                     | <code>vpn</code> | <code>direct-connect-gateway</code> | <code>peering</code>
   *                     | <code>connect</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-attachment-id</code> - The ID of the attachment.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>Describes a route table propagation.</p>
 */
export interface TransitGatewayRouteTablePropagation {
  /**
   * @public
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * @public
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The type of resource. Note that the <code>tgw-peering</code> resource type has been deprecated.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType;

  /**
   * @public
   * <p>The state of the resource.</p>
   */
  State?: TransitGatewayPropagationState;

  /**
   * @public
   * <p>The ID of the transit gateway route table announcement.</p>
   */
  TransitGatewayRouteTableAnnouncementId?: string;
}

/**
 * @public
 */
export interface GetTransitGatewayRouteTablePropagationsResult {
  /**
   * @public
   * <p>Information about the route table propagations.</p>
   */
  TransitGatewayRouteTablePropagations?: TransitGatewayRouteTablePropagation[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetVerifiedAccessEndpointPolicyRequest {
  /**
   * @public
   * <p>The ID of the Verified Access endpoint.</p>
   */
  VerifiedAccessEndpointId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface GetVerifiedAccessEndpointPolicyResult {
  /**
   * @public
   * <p>The status of the Verified Access policy.</p>
   */
  PolicyEnabled?: boolean;

  /**
   * @public
   * <p>The Verified Access policy document.</p>
   */
  PolicyDocument?: string;
}

/**
 * @public
 */
export interface GetVerifiedAccessGroupPolicyRequest {
  /**
   * @public
   * <p>The ID of the Verified Access group.</p>
   */
  VerifiedAccessGroupId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface GetVerifiedAccessGroupPolicyResult {
  /**
   * @public
   * <p>The status of the Verified Access policy.</p>
   */
  PolicyEnabled?: boolean;

  /**
   * @public
   * <p>The Verified Access policy document.</p>
   */
  PolicyDocument?: string;
}

/**
 * @public
 */
export interface GetVpnConnectionDeviceSampleConfigurationRequest {
  /**
   * @public
   * <p>The <code>VpnConnectionId</code> specifies the Site-to-Site VPN connection used for the sample
   *             configuration.</p>
   */
  VpnConnectionId: string | undefined;

  /**
   * @public
   * <p>Device identifier provided by the <code>GetVpnConnectionDeviceTypes</code> API.</p>
   */
  VpnConnectionDeviceTypeId: string | undefined;

  /**
   * @public
   * <p>The IKE version to be used in the sample configuration file for your customer gateway
   *             device. You can specify one of the following versions: <code>ikev1</code> or
   *                 <code>ikev2</code>.</p>
   */
  InternetKeyExchangeVersion?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface GetVpnConnectionDeviceSampleConfigurationResult {
  /**
   * @public
   * <p>Sample configuration file for the specified customer gateway device.</p>
   */
  VpnConnectionDeviceSampleConfiguration?: string;
}

/**
 * @public
 */
export interface GetVpnConnectionDeviceTypesRequest {
  /**
   * @public
   * <p>The maximum number of results returned by <code>GetVpnConnectionDeviceTypes</code> in
   *             paginated output. When this parameter is used, <code>GetVpnConnectionDeviceTypes</code>
   *             only returns <code>MaxResults</code> results in a single page along with a
   *                 <code>NextToken</code> response element. The remaining results of the initial
   *             request can be seen by sending another <code>GetVpnConnectionDeviceTypes</code> request
   *             with the returned <code>NextToken</code> value. This value can be between 200 and 1000.
   *             If this parameter is not used, then <code>GetVpnConnectionDeviceTypes</code> returns all
   *             results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The <code>NextToken</code> value returned from a previous paginated
   *                 <code>GetVpnConnectionDeviceTypes</code> request where <code>MaxResults</code> was
   *             used and the results exceeded the value of that parameter. Pagination continues from the
   *             end of the previous results that returned the <code>NextToken</code> value. This value
   *             is null when there are no more results to return. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>List of customer gateway devices that have a sample configuration file available for
 *             use. You can also see the list of device types with sample configuration files available
 *             under <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/your-cgw.html">Your customer
 *                 gateway device</a> in the <i>Amazon Web Services Site-to-Site VPN User Guide</i>.</p>
 */
export interface VpnConnectionDeviceType {
  /**
   * @public
   * <p>Customer gateway device identifier.</p>
   */
  VpnConnectionDeviceTypeId?: string;

  /**
   * @public
   * <p>Customer gateway device vendor.</p>
   */
  Vendor?: string;

  /**
   * @public
   * <p>Customer gateway device platform.</p>
   */
  Platform?: string;

  /**
   * @public
   * <p>Customer gateway device software version.</p>
   */
  Software?: string;
}

/**
 * @public
 */
export interface GetVpnConnectionDeviceTypesResult {
  /**
   * @public
   * <p>List of customer gateway devices that have a sample configuration file available for
   *             use.</p>
   */
  VpnConnectionDeviceTypes?: VpnConnectionDeviceType[];

  /**
   * @public
   * <p>The <code>NextToken</code> value to include in a future
   *                 <code>GetVpnConnectionDeviceTypes</code> request. When the results of a
   *                 <code>GetVpnConnectionDeviceTypes</code> request exceed <code>MaxResults</code>,
   *             this value can be used to retrieve the next page of results. This value is null when
   *             there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetVpnTunnelReplacementStatusRequest {
  /**
   * @public
   * <p>The ID of the Site-to-Site VPN connection. </p>
   */
  VpnConnectionId: string | undefined;

  /**
   * @public
   * <p>The external IP address of the VPN tunnel.</p>
   */
  VpnTunnelOutsideIpAddress: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>Details for Site-to-Site VPN tunnel endpoint maintenance events.</p>
 */
export interface MaintenanceDetails {
  /**
   * @public
   * <p>Verify existence of a pending maintenance.</p>
   */
  PendingMaintenance?: string;

  /**
   * @public
   * <p>The timestamp after which Amazon Web Services will automatically apply maintenance.</p>
   */
  MaintenanceAutoAppliedAfter?: Date;

  /**
   * @public
   * <p>Timestamp of last applied maintenance.</p>
   */
  LastMaintenanceApplied?: Date;
}

/**
 * @public
 */
export interface GetVpnTunnelReplacementStatusResult {
  /**
   * @public
   * <p>The ID of the Site-to-Site VPN connection. </p>
   */
  VpnConnectionId?: string;

  /**
   * @public
   * <p>The ID of the transit gateway associated with the VPN connection.</p>
   */
  TransitGatewayId?: string;

  /**
   * @public
   * <p>The ID of the customer gateway.</p>
   */
  CustomerGatewayId?: string;

  /**
   * @public
   * <p>The ID of the virtual private gateway.</p>
   */
  VpnGatewayId?: string;

  /**
   * @public
   * <p>The external IP address of the VPN tunnel.</p>
   */
  VpnTunnelOutsideIpAddress?: string;

  /**
   * @public
   * <p>Get details of pending tunnel endpoint maintenance.</p>
   */
  MaintenanceDetails?: MaintenanceDetails;
}

/**
 * @public
 */
export interface ImportClientVpnClientCertificateRevocationListRequest {
  /**
   * @public
   * <p>The ID of the Client VPN endpoint to which the client certificate revocation list applies.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * @public
   * <p>The client certificate revocation list file. For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/cvpn-working-certificates.html#cvpn-working-certificates-generate">Generate a Client Certificate Revocation List</a> in the
   * 				<i>Client VPN Administrator Guide</i>.</p>
   */
  CertificateRevocationList: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface ImportClientVpnClientCertificateRevocationListResult {
  /**
   * @public
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

/**
 * @public
 * <p>Describes the client-specific data.</p>
 */
export interface ClientData {
  /**
   * @public
   * <p>A user-defined comment about the disk upload.</p>
   */
  Comment?: string;

  /**
   * @public
   * <p>The time that the disk upload ends.</p>
   */
  UploadEnd?: Date;

  /**
   * @public
   * <p>The size of the uploaded disk image, in GiB.</p>
   */
  UploadSize?: number;

  /**
   * @public
   * <p>The time that the disk upload starts.</p>
   */
  UploadStart?: Date;
}

/**
 * @public
 * <p>Describes the Amazon S3 bucket for the disk image.</p>
 */
export interface UserBucket {
  /**
   * @public
   * <p>The name of the Amazon S3 bucket where the disk image is located.</p>
   */
  S3Bucket?: string;

  /**
   * @public
   * <p>The file name of the disk image.</p>
   */
  S3Key?: string;
}

/**
 * @public
 * <p>Describes the disk container object for an import image task.</p>
 */
export interface ImageDiskContainer {
  /**
   * @public
   * <p>The description of the disk image.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The block device mapping for the disk.</p>
   */
  DeviceName?: string;

  /**
   * @public
   * <p>The format of the disk image being imported.</p>
   *          <p>Valid values: <code>OVA</code> | <code>VHD</code> | <code>VHDX</code> | <code>VMDK</code> | <code>RAW</code>
   *          </p>
   */
  Format?: string;

  /**
   * @public
   * <p>The ID of the EBS snapshot to be used for importing the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * @public
   * <p>The URL to the Amazon S3-based disk image being imported. The URL can either be a https URL (https://..) or an
   *    Amazon S3 URL (s3://..)</p>
   */
  Url?: string;

  /**
   * @public
   * <p>The S3 bucket for the disk image.</p>
   */
  UserBucket?: UserBucket;
}

/**
 * @public
 * <p>The request information of license configurations.</p>
 */
export interface ImportImageLicenseConfigurationRequest {
  /**
   * @public
   * <p>The ARN of a license configuration.</p>
   */
  LicenseConfigurationArn?: string;
}

/**
 * @public
 */
export interface ImportImageRequest {
  /**
   * @public
   * <p>The architecture of the virtual machine.</p>
   *          <p>Valid values: <code>i386</code> | <code>x86_64</code>
   *          </p>
   */
  Architecture?: string;

  /**
   * @public
   * <p>The client-specific data.</p>
   */
  ClientData?: ClientData;

  /**
   * @public
   * <p>The token to enable idempotency for VM import requests.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>A description string for the import image task.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Information about the disk containers.</p>
   */
  DiskContainers?: ImageDiskContainer[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>Specifies whether the destination AMI of the imported image should be encrypted. The default KMS key for EBS is used
   *    unless you specify a non-default KMS key using <code>KmsKeyId</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS Encryption</a> in the
   *     <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  Encrypted?: boolean;

  /**
   * @public
   * <p>The target hypervisor platform.</p>
   *          <p>Valid values: <code>xen</code>
   *          </p>
   */
  Hypervisor?: string;

  /**
   * @public
   * <p>An identifier for the symmetric KMS key to use when creating the
   *    encrypted AMI. This parameter is only required if you want to use a non-default KMS key; if this
   *    parameter is not specified, the default KMS key for EBS is used. If a <code>KmsKeyId</code> is
   *    specified, the <code>Encrypted</code> flag must also be set. </p>
   *          <p>The KMS key identifier may be provided in any of the following formats: </p>
   *          <ul>
   *             <li>
   *                <p>Key ID</p>
   *             </li>
   *             <li>
   *                <p>Key alias</p>
   *             </li>
   *             <li>
   *                <p>ARN using key ID. The ID ARN contains the <code>arn:aws:kms</code> namespace, followed by the Region of the key, the Amazon Web Services account ID of the key owner, the <code>key</code> namespace, and then the key ID. For example, arn:aws:kms:<i>us-east-1</i>:<i>012345678910</i>:key/<i>abcd1234-a123-456a-a12b-a123b4cd56ef</i>.</p>
   *             </li>
   *             <li>
   *                <p>ARN using key alias. The alias ARN contains the <code>arn:aws:kms</code> namespace, followed by the Region of the key, the Amazon Web Services account ID of the key owner, the <code>alias</code> namespace, and then the key alias. For example, arn:aws:kms:<i>us-east-1</i>:<i>012345678910</i>:alias/<i>ExampleAlias</i>. </p>
   *             </li>
   *          </ul>
   *          <p>Amazon Web Services parses <code>KmsKeyId</code> asynchronously, meaning that the action you call may appear to complete even
   *    though you provided an invalid identifier. This action will eventually report failure. </p>
   *          <p>The specified KMS key must exist in the Region that the AMI is being copied to.</p>
   *          <p>Amazon EBS does not support asymmetric KMS keys.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>The license type to be used for the Amazon Machine Image (AMI) after importing.</p>
   *          <p>Specify <code>AWS</code> to replace the source-system license with an Amazon Web Services
   *    license or <code>BYOL</code> to retain the source-system license. Leaving this parameter
   *    undefined is the same as choosing <code>AWS</code> when importing a Windows Server operating
   *    system, and the same as choosing <code>BYOL</code> when importing a Windows client operating
   *    system (such as Windows 10) or a Linux operating system.</p>
   *          <p>To use <code>BYOL</code>, you must have existing licenses with rights to use these licenses in a third party
   *    cloud, such as Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmimport-image-import.html#prerequisites-image">Prerequisites</a> in the
   *    VM Import/Export User Guide.</p>
   */
  LicenseType?: string;

  /**
   * @public
   * <p>The operating system of the virtual machine. If you import a VM that is compatible with
   *    Unified Extensible Firmware Interface (UEFI) using an EBS snapshot, you must specify a value for
   *    the platform.</p>
   *          <p>Valid values: <code>Windows</code> | <code>Linux</code>
   *          </p>
   */
  Platform?: string;

  /**
   * @public
   * <p>The name of the role to use when not using the default role, 'vmimport'.</p>
   */
  RoleName?: string;

  /**
   * @public
   * <p>The ARNs of the license configurations.</p>
   */
  LicenseSpecifications?: ImportImageLicenseConfigurationRequest[];

  /**
   * @public
   * <p>The tags to apply to the import image task during creation.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * @public
   * <p>The usage operation value. For more information, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmie_prereqs.html#prerequisites">Licensing options</a> in the <i>VM Import/Export User Guide</i>.</p>
   */
  UsageOperation?: string;

  /**
   * @public
   * <p>The boot mode of the virtual machine.</p>
   *          <note>
   *             <p>The <code>uefi-preferred</code> boot mode isn't supported for importing images. For more
   *     information, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/prerequisites.html#vmimport-boot-modes">Boot modes</a> in
   *     the <i>VM Import/Export User Guide</i>.</p>
   *          </note>
   */
  BootMode?: BootModeValues;
}

/**
 * @public
 */
export interface ImportImageResult {
  /**
   * @public
   * <p>The architecture of the virtual machine.</p>
   */
  Architecture?: string;

  /**
   * @public
   * <p>A description of the import task.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Indicates whether the AMI is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * @public
   * <p>The target hypervisor of the import task.</p>
   */
  Hypervisor?: string;

  /**
   * @public
   * <p>The ID of the Amazon Machine Image (AMI) created by the import task.</p>
   */
  ImageId?: string;

  /**
   * @public
   * <p>The task ID of the import image task.</p>
   */
  ImportTaskId?: string;

  /**
   * @public
   * <p>The identifier for the symmetric KMS key that was used to create the encrypted AMI.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>The license type of the virtual machine.</p>
   */
  LicenseType?: string;

  /**
   * @public
   * <p>The operating system of the virtual machine.</p>
   */
  Platform?: string;

  /**
   * @public
   * <p>The progress of the task.</p>
   */
  Progress?: string;

  /**
   * @public
   * <p>Information about the snapshots.</p>
   */
  SnapshotDetails?: SnapshotDetail[];

  /**
   * @public
   * <p>A brief status of the task.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>A detailed status message of the import task.</p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p>The ARNs of the license configurations.</p>
   */
  LicenseSpecifications?: ImportImageLicenseConfigurationResponse[];

  /**
   * @public
   * <p>Any tags assigned to the import image task.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The usage operation value.</p>
   */
  UsageOperation?: string;
}

/**
 * @public
 * <p>Describes a disk image.</p>
 */
export interface DiskImageDetail {
  /**
   * @public
   * <p>The size of the disk image, in GiB.</p>
   */
  Bytes: number | undefined;

  /**
   * @public
   * <p>The disk image format.</p>
   */
  Format: DiskImageFormat | undefined;

  /**
   * @public
   * <p>A presigned URL for the import manifest stored in Amazon S3 and presented here as an Amazon S3 presigned URL.
   *    For information about creating a presigned URL for an Amazon S3 object, read the "Query String Request Authentication
   *    Alternative" section of the <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html">Authenticating REST Requests</a> topic in the <i>Amazon Simple Storage Service Developer
   *     Guide</i>.</p>
   *          <p>For information about the import manifest referenced by this API action, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/manifest.html">VM Import Manifest</a>.</p>
   */
  ImportManifestUrl: string | undefined;
}

/**
 * @public
 * <p>Describes an EBS volume.</p>
 */
export interface VolumeDetail {
  /**
   * @public
   * <p>The size of the volume, in GiB.</p>
   */
  Size: number | undefined;
}

/**
 * @public
 * <p>Describes a disk image.</p>
 */
export interface DiskImage {
  /**
   * @public
   * <p>A description of the disk image.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Information about the disk image.</p>
   */
  Image?: DiskImageDetail;

  /**
   * @public
   * <p>Information about the volume.</p>
   */
  Volume?: VolumeDetail;
}

/**
 * @public
 * <p>Describes the user data for an instance.</p>
 */
export interface UserData {
  /**
   * @public
   * <p>The user data. If you are using an Amazon Web Services SDK or command line tool, Base64-encoding is performed for you, and you
   *    can load the text from a file. Otherwise, you must provide Base64-encoded text.</p>
   */
  Data?: string;
}

/**
 * @public
 * <p>Describes the launch specification for VM import.</p>
 */
export interface ImportInstanceLaunchSpecification {
  /**
   * @public
   * <p>Reserved.</p>
   */
  AdditionalInfo?: string;

  /**
   * @public
   * <p>The architecture of the instance.</p>
   */
  Architecture?: ArchitectureValues;

  /**
   * @public
   * <p>The security group IDs.</p>
   */
  GroupIds?: string[];

  /**
   * @public
   * <p>The security group names.</p>
   */
  GroupNames?: string[];

  /**
   * @public
   * <p>Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the
   *    operating system command for system shutdown).</p>
   */
  InstanceInitiatedShutdownBehavior?: ShutdownBehavior;

  /**
   * @public
   * <p>The instance type. For more information about the instance types that you can import, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmie_prereqs.html#vmimport-instance-types">Instance Types</a> in the
   *    VM Import/Export User Guide.</p>
   */
  InstanceType?: _InstanceType;

  /**
   * @public
   * <p>Indicates whether monitoring is enabled.</p>
   */
  Monitoring?: boolean;

  /**
   * @public
   * <p>The placement information for the instance.</p>
   */
  Placement?: Placement;

  /**
   * @public
   * <p>[EC2-VPC] An available IP address from the IP address range of the subnet.</p>
   */
  PrivateIpAddress?: string;

  /**
   * @public
   * <p>[EC2-VPC] The ID of the subnet in which to launch the instance.</p>
   */
  SubnetId?: string;

  /**
   * @public
   * <p>The Base64-encoded user data to make available to the instance.</p>
   */
  UserData?: UserData;
}

/**
 * @public
 */
export interface ImportInstanceRequest {
  /**
   * @public
   * <p>A description for the instance being imported.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The disk image.</p>
   */
  DiskImages?: DiskImage[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The launch specification.</p>
   */
  LaunchSpecification?: ImportInstanceLaunchSpecification;

  /**
   * @public
   * <p>The instance operating system.</p>
   */
  Platform: PlatformValues | undefined;
}

/**
 * @public
 */
export interface ImportInstanceResult {
  /**
   * @public
   * <p>Information about the conversion task.</p>
   */
  ConversionTask?: ConversionTask;
}

/**
 * @public
 */
export interface ImportKeyPairRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>A unique name for the key pair.</p>
   */
  KeyName: string | undefined;

  /**
   * @public
   * <p>The public key. For API calls, the text must be base64-encoded. For command line tools, base64 encoding is performed for you.</p>
   */
  PublicKeyMaterial: Uint8Array | undefined;

  /**
   * @public
   * <p>The tags to apply to the imported key pair.</p>
   */
  TagSpecifications?: TagSpecification[];
}

/**
 * @public
 */
export interface ImportKeyPairResult {
  /**
   * @public
   * <ul>
   *             <li>
   *                <p>For RSA key pairs, the key fingerprint is the MD5 public key fingerprint as specified in section 4 of RFC 4716.</p>
   *             </li>
   *             <li>
   *                <p>For ED25519 key pairs, the key fingerprint is the base64-encoded SHA-256 digest, which is the default for OpenSSH, starting with <a href="http://www.openssh.com/txt/release-6.8">OpenSSH 6.8</a>.</p>
   *             </li>
   *          </ul>
   */
  KeyFingerprint?: string;

  /**
   * @public
   * <p>The key pair name that you provided.</p>
   */
  KeyName?: string;

  /**
   * @public
   * <p>The ID of the resulting key pair.</p>
   */
  KeyPairId?: string;

  /**
   * @public
   * <p>The tags applied to the imported key pair.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>The disk container object for the import snapshot request.</p>
 */
export interface SnapshotDiskContainer {
  /**
   * @public
   * <p>The description of the disk image being imported.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The format of the disk image being imported.</p>
   *          <p>Valid values: <code>VHD</code> | <code>VMDK</code> | <code>RAW</code>
   *          </p>
   */
  Format?: string;

  /**
   * @public
   * <p>The URL to the Amazon S3-based disk image being imported. It can either be a https URL (https://..) or an Amazon
   *    S3 URL (s3://..).</p>
   */
  Url?: string;

  /**
   * @public
   * <p>The Amazon S3 bucket for the disk image.</p>
   */
  UserBucket?: UserBucket;
}

/**
 * @public
 */
export interface ImportSnapshotRequest {
  /**
   * @public
   * <p>The client-specific data.</p>
   */
  ClientData?: ClientData;

  /**
   * @public
   * <p>Token to enable idempotency for VM import requests.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The description string for the import snapshot task.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Information about the disk container.</p>
   */
  DiskContainer?: SnapshotDiskContainer;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>Specifies whether the destination snapshot of the imported image should be encrypted. The default KMS key for EBS is
   *    used unless you specify a non-default KMS key using <code>KmsKeyId</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS Encryption</a> in the
   *     <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  Encrypted?: boolean;

  /**
   * @public
   * <p>An identifier for the symmetric KMS key to use when creating the
   *    encrypted snapshot. This parameter is only required if you want to use a non-default KMS key; if this
   *    parameter is not specified, the default KMS key for EBS is used. If a <code>KmsKeyId</code> is
   *    specified, the <code>Encrypted</code> flag must also be set. </p>
   *          <p>The KMS key identifier may be provided in any of the following formats: </p>
   *          <ul>
   *             <li>
   *                <p>Key ID</p>
   *             </li>
   *             <li>
   *                <p>Key alias</p>
   *             </li>
   *             <li>
   *                <p>ARN using key ID. The ID ARN contains the <code>arn:aws:kms</code> namespace, followed by the Region of the key, the Amazon Web Services account ID of the key owner, the <code>key</code> namespace, and then the key ID. For example, arn:aws:kms:<i>us-east-1</i>:<i>012345678910</i>:key/<i>abcd1234-a123-456a-a12b-a123b4cd56ef</i>.</p>
   *             </li>
   *             <li>
   *                <p>ARN using key alias. The alias ARN contains the <code>arn:aws:kms</code> namespace, followed by the Region of the key, the Amazon Web Services account ID of the key owner, the <code>alias</code> namespace, and then the key alias. For example, arn:aws:kms:<i>us-east-1</i>:<i>012345678910</i>:alias/<i>ExampleAlias</i>. </p>
   *             </li>
   *          </ul>
   *          <p>Amazon Web Services parses <code>KmsKeyId</code> asynchronously, meaning that the action you call may appear to complete even
   *    though you provided an invalid identifier. This action will eventually report failure. </p>
   *          <p>The specified KMS key must exist in the Region that the snapshot is being copied to.</p>
   *          <p>Amazon EBS does not support asymmetric KMS keys.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>The name of the role to use when not using the default role, 'vmimport'.</p>
   */
  RoleName?: string;

  /**
   * @public
   * <p>The tags to apply to the import snapshot task during creation.</p>
   */
  TagSpecifications?: TagSpecification[];
}

/**
 * @public
 */
export interface ImportSnapshotResult {
  /**
   * @public
   * <p>A description of the import snapshot task.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The ID of the import snapshot task.</p>
   */
  ImportTaskId?: string;

  /**
   * @public
   * <p>Information about the import snapshot task.</p>
   */
  SnapshotTaskDetail?: SnapshotTaskDetail;

  /**
   * @public
   * <p>Any tags assigned to the import snapshot task.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface ImportVolumeRequest {
  /**
   * @public
   * <p>The Availability Zone for the resulting EBS volume.</p>
   */
  AvailabilityZone: string | undefined;

  /**
   * @public
   * <p>A description of the volume.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The disk image.</p>
   */
  Image: DiskImageDetail | undefined;

  /**
   * @public
   * <p>The volume size.</p>
   */
  Volume: VolumeDetail | undefined;
}

/**
 * @public
 */
export interface ImportVolumeResult {
  /**
   * @public
   * <p>Information about the conversion task.</p>
   */
  ConversionTask?: ConversionTask;
}

/**
 * @public
 */
export interface ListImagesInRecycleBinRequest {
  /**
   * @public
   * <p>The IDs of the AMIs to list. Omit this parameter to list all of the AMIs that
   *       are in the Recycle Bin. You can specify up to 20 IDs in a single request.</p>
   */
  ImageIds?: string[];

  /**
   * @public
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>Information about an AMI that is currently in the Recycle Bin.</p>
 */
export interface ImageRecycleBinInfo {
  /**
   * @public
   * <p>The ID of the AMI.</p>
   */
  ImageId?: string;

  /**
   * @public
   * <p>The name of the AMI.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the AMI.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The date and time when the AMI entered the Recycle Bin.</p>
   */
  RecycleBinEnterTime?: Date;

  /**
   * @public
   * <p>The date and time when the AMI is to be permanently deleted from the Recycle Bin.</p>
   */
  RecycleBinExitTime?: Date;
}

/**
 * @public
 */
export interface ListImagesInRecycleBinResult {
  /**
   * @public
   * <p>Information about the AMIs.</p>
   */
  Images?: ImageRecycleBinInfo[];

  /**
   * @public
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSnapshotsInRecycleBinRequest {
  /**
   * @public
   * <p>The maximum number of items to return for this request.
   * 	To get the next page of items, make another request with the token returned in the output.
   * 	For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token returned from a previous paginated request.
   *   Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The IDs of the snapshots to list. Omit this parameter to list all of the
   *       snapshots that are in the Recycle Bin.</p>
   */
  SnapshotIds?: string[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>Information about a snapshot that is currently in the Recycle Bin.</p>
 */
export interface SnapshotRecycleBinInfo {
  /**
   * @public
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * @public
   * <p>The date and time when the snaphsot entered the Recycle Bin.</p>
   */
  RecycleBinEnterTime?: Date;

  /**
   * @public
   * <p>The date and time when the snapshot is to be permanently deleted from the Recycle Bin.</p>
   */
  RecycleBinExitTime?: Date;

  /**
   * @public
   * <p>The description for the snapshot.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The ID of the volume from which the snapshot was created.</p>
   */
  VolumeId?: string;
}

/**
 * @public
 */
export interface ListSnapshotsInRecycleBinResult {
  /**
   * @public
   * <p>Information about the snapshots.</p>
   */
  Snapshots?: SnapshotRecycleBinInfo[];

  /**
   * @public
   * <p>The token to include in another request to get the next page of items.
   *   This value is <code>null</code> when there are no more items to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const LockMode = {
  compliance: "compliance",
  governance: "governance",
} as const;

/**
 * @public
 */
export type LockMode = (typeof LockMode)[keyof typeof LockMode];

/**
 * @public
 */
export interface LockSnapshotRequest {
  /**
   * @public
   * <p>The ID of the snapshot to lock.</p>
   */
  SnapshotId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The mode in which to lock the snapshot. Specify one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>governance</code> - Locks the snapshot in governance mode. Snapshots locked in governance
   *           mode can't be deleted until one of the following conditions are met:</p>
   *                <ul>
   *                   <li>
   *                      <p>The lock duration expires.</p>
   *                   </li>
   *                   <li>
   *                      <p>The snapshot is unlocked by a user with the appropriate permissions.</p>
   *                   </li>
   *                </ul>
   *                <p>Users with the appropriate IAM permissions can unlock the snapshot, increase or decrease the lock
   *           duration, and change the lock mode to <code>compliance</code> at any time.</p>
   *                <p>If you lock a snapshot in <code>governance</code> mode, omit <b>
   *           CoolOffPeriod</b>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>compliance</code> - Locks the snapshot in compliance mode. Snapshots locked in compliance
   *           mode can't be unlocked by any user. They can be deleted only after the lock duration expires. Users
   *           can't decrease the lock duration or change the lock mode to <code>governance</code>. However, users
   *           with appropriate IAM permissions can increase the lock duration at any time.</p>
   *                <p>If you lock a snapshot in <code>compliance</code> mode, you can optionally specify
   *           <b>CoolOffPeriod</b>.</p>
   *             </li>
   *          </ul>
   */
  LockMode: LockMode | undefined;

  /**
   * @public
   * <p>The cooling-off period during which you can unlock the snapshot or modify the lock settings after
   *       locking the snapshot in compliance mode, in hours. After the cooling-off period expires, you can't
   *       unlock or delete the snapshot, decrease the lock duration, or change the lock mode. You can increase
   *       the lock duration after the cooling-off period expires.</p>
   *          <p>The cooling-off period is optional when locking a snapshot in compliance mode. If you are locking
   *       the snapshot in governance mode, omit this parameter.</p>
   *          <p>To lock the snapshot in compliance mode immediately without a cooling-off period, omit this
   *       parameter.</p>
   *          <p>If you are extending the lock duration for a snapshot that is locked in compliance mode after
   *       the cooling-off period has expired, omit this parameter. If you specify a cooling-period in a such
   *       a request, the request fails.</p>
   *          <p>Allowed values: Min 1, max 72.</p>
   */
  CoolOffPeriod?: number;

  /**
   * @public
   * <p>The period of time for which to lock the snapshot, in days. The snapshot lock will automatically
   *       expire after this period lapses.</p>
   *          <p>You must specify either this parameter or <b>ExpirationDate</b>, but
   *       not both.</p>
   *          <p>Allowed values: Min: 1, max 36500</p>
   */
  LockDuration?: number;

  /**
   * @public
   * <p>The date and time at which the snapshot lock is to automatically expire, in the UTC time zone
   *       (<code>YYYY-MM-DDThh:mm:ss.sssZ</code>).</p>
   *          <p>You must specify either this parameter or <b>LockDuration</b>, but
   *       not both.</p>
   */
  ExpirationDate?: Date;
}

/**
 * @public
 */
export interface LockSnapshotResult {
  /**
   * @public
   * <p>The ID of the snapshot</p>
   */
  SnapshotId?: string;

  /**
   * @public
   * <p>The state of the snapshot lock. Valid states include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>compliance-cooloff</code> - The snapshot has been locked in
   *           compliance mode but it is still within the cooling-off period. The snapshot can't be
   *           deleted, but it can be unlocked and the lock settings can be modified by users with
   *           appropriate permissions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>governance</code> - The snapshot is locked in governance mode. The
   *           snapshot can't be deleted, but it can be unlocked and the lock settings can be
   *           modified by users with appropriate permissions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>compliance</code> - The snapshot is locked in compliance mode and the
   *           cooling-off period has expired. The snapshot can't be unlocked or deleted. The lock
   *           duration can only be increased by users with appropriate permissions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>expired</code> - The snapshot was locked in compliance or governance
   *           mode but the lock duration has expired. The snapshot is not locked and can be deleted.</p>
   *             </li>
   *          </ul>
   */
  LockState?: LockState;

  /**
   * @public
   * <p>The period of time for which the snapshot is locked, in days.</p>
   */
  LockDuration?: number;

  /**
   * @public
   * <p>The compliance mode cooling-off period, in hours.</p>
   */
  CoolOffPeriod?: number;

  /**
   * @public
   * <p>The date and time at which the compliance mode cooling-off period expires, in the UTC time zone
   *       (<code>YYYY-MM-DDThh:mm:ss.sssZ</code>).</p>
   */
  CoolOffPeriodExpiresOn?: Date;

  /**
   * @public
   * <p>The date and time at which the snapshot was locked, in the UTC time zone
   *       (<code>YYYY-MM-DDThh:mm:ss.sssZ</code>).</p>
   */
  LockCreatedOn?: Date;

  /**
   * @public
   * <p>The date and time at which the lock will expire, in the UTC time zone
   *       (<code>YYYY-MM-DDThh:mm:ss.sssZ</code>).</p>
   */
  LockExpiresOn?: Date;

  /**
   * @public
   * <p>The date and time at which the lock duration started, in the UTC time zone
   *       (<code>YYYY-MM-DDThh:mm:ss.sssZ</code>).</p>
   */
  LockDurationStartTime?: Date;
}

/**
 * @public
 */
export interface ModifyAddressAttributeRequest {
  /**
   * @public
   * <p>[EC2-VPC] The allocation ID.</p>
   */
  AllocationId: string | undefined;

  /**
   * @public
   * <p>The domain name to modify for the IP address.</p>
   */
  DomainName?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface ModifyAddressAttributeResult {
  /**
   * @public
   * <p>Information about the Elastic IP address.</p>
   */
  Address?: AddressAttribute;
}

/**
 * @public
 * @enum
 */
export const ModifyAvailabilityZoneOptInStatus = {
  not_opted_in: "not-opted-in",
  opted_in: "opted-in",
} as const;

/**
 * @public
 */
export type ModifyAvailabilityZoneOptInStatus =
  (typeof ModifyAvailabilityZoneOptInStatus)[keyof typeof ModifyAvailabilityZoneOptInStatus];

/**
 * @public
 */
export interface ModifyAvailabilityZoneGroupRequest {
  /**
   * @public
   * <p>The name of the Availability Zone group, Local Zone group, or Wavelength Zone
   *       group.</p>
   */
  GroupName: string | undefined;

  /**
   * @public
   * <p>Indicates whether you are opted in to the Local Zone group or Wavelength Zone group. The
   *       only valid value is <code>opted-in</code>. You must contact <a href="https://console.aws.amazon.com/support/home#/case/create%3FissueType=customer-service%26serviceCode=general-info%26getting-started%26categoryCode=using-aws%26services">Amazon Web Services Support</a> to opt out of a Local Zone or Wavelength Zone group.</p>
   */
  OptInStatus: ModifyAvailabilityZoneOptInStatus | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface ModifyAvailabilityZoneGroupResult {
  /**
   * @public
   * <p>Is <code>true</code> if the request succeeds, and an error otherwise.</p>
   */
  Return?: boolean;
}

/**
 * @public
 */
export interface ModifyCapacityReservationRequest {
  /**
   * @public
   * <p>The ID of the Capacity Reservation.</p>
   */
  CapacityReservationId: string | undefined;

  /**
   * @public
   * <p>The number of instances for which to reserve capacity. The number of instances can't be increased or
   * 		    	decreased by more than <code>1000</code> in a single request.</p>
   */
  InstanceCount?: number;

  /**
   * @public
   * <p>The date and time at which the Capacity Reservation expires. When a Capacity Reservation expires, the reserved capacity
   * 			is released and you can no longer launch instances into it. The Capacity Reservation's state changes to
   * 				<code>expired</code> when it reaches its end date and time.</p>
   *          <p>The Capacity Reservation is cancelled within an hour from the specified time. For example, if you specify
   * 			5/31/2019, 13:30:55, the Capacity Reservation is guaranteed to end between 13:30:55 and 14:30:55 on 5/31/2019.</p>
   *          <p>You must provide an <code>EndDate</code> value if <code>EndDateType</code> is
   * 				<code>limited</code>. Omit <code>EndDate</code> if <code>EndDateType</code> is
   * 				<code>unlimited</code>.</p>
   */
  EndDate?: Date;

  /**
   * @public
   * <p>Indicates the way in which the Capacity Reservation ends. A Capacity Reservation can have one of the following end
   * 			types:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>unlimited</code> - The Capacity Reservation remains active until you explicitly cancel it. Do not
   * 					provide an <code>EndDate</code> value if <code>EndDateType</code> is
   * 						<code>unlimited</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>limited</code> - The Capacity Reservation expires automatically at a specified date and time. You must
   * 					provide an <code>EndDate</code> value if <code>EndDateType</code> is
   * 						<code>limited</code>.</p>
   *             </li>
   *          </ul>
   */
  EndDateType?: EndDateType;

  /**
   * @public
   * <p>Reserved. Capacity Reservations you have created are accepted by default.</p>
   */
  Accept?: boolean;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>Reserved for future use.</p>
   */
  AdditionalInfo?: string;
}

/**
 * @public
 */
export interface ModifyCapacityReservationResult {
  /**
   * @public
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

/**
 * @public
 */
export interface ModifyCapacityReservationFleetRequest {
  /**
   * @public
   * <p>The ID of the Capacity Reservation Fleet to modify.</p>
   */
  CapacityReservationFleetId: string | undefined;

  /**
   * @public
   * <p>The total number of capacity units to be reserved by the Capacity Reservation Fleet. This value,
   * 			together with the instance type weights that you assign to each instance type used by the Fleet
   * 			determine the number of instances for which the Fleet reserves capacity. Both values are based on
   * 			units that make sense for your workload. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#target-capacity">Total target capacity</a>
   * 			in the Amazon EC2 User Guide.</p>
   */
  TotalTargetCapacity?: number;

  /**
   * @public
   * <p>The date and time at which the Capacity Reservation Fleet expires. When the Capacity Reservation
   * 			Fleet expires, its state changes to <code>expired</code> and all of the Capacity Reservations in the
   * 			Fleet expire.</p>
   *          <p>The Capacity Reservation Fleet expires within an hour after the specified time. For example, if you
   * 			specify <code>5/31/2019</code>, <code>13:30:55</code>, the Capacity Reservation Fleet is guaranteed
   * 			to expire between <code>13:30:55</code> and <code>14:30:55</code> on <code>5/31/2019</code>.</p>
   *          <p>You can't specify <b>EndDate</b> and <b>
   * 			RemoveEndDate</b> in the same request.</p>
   */
  EndDate?: Date;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>Indicates whether to remove the end date from the Capacity Reservation Fleet. If you remove the
   * 			end date, the Capacity Reservation Fleet does not expire and it remains active until you explicitly
   * 			cancel it using the <b>CancelCapacityReservationFleet</b> action.</p>
   *          <p>You can't specify <b>RemoveEndDate</b> and <b>
   * 			EndDate</b> in the same request.</p>
   */
  RemoveEndDate?: boolean;
}

/**
 * @public
 */
export interface ModifyCapacityReservationFleetResult {
  /**
   * @public
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

/**
 * @public
 * <p>Information about the DNS server to be used.</p>
 */
export interface DnsServersOptionsModifyStructure {
  /**
   * @public
   * <p>The IPv4 address range, in CIDR notation, of the DNS servers to be used. You can specify up to
   * 			two DNS servers. Ensure that the DNS servers can be reached by the clients. The specified values
   * 			overwrite the existing values.</p>
   */
  CustomDnsServers?: string[];

  /**
   * @public
   * <p>Indicates whether DNS servers should be used. Specify <code>False</code> to delete the existing DNS
   * 			servers.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 */
export interface ModifyClientVpnEndpointRequest {
  /**
   * @public
   * <p>The ID of the Client VPN endpoint to modify.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * @public
   * <p>The ARN of the server certificate to be used. The server certificate must be provisioned in
   * 			Certificate Manager (ACM).</p>
   */
  ServerCertificateArn?: string;

  /**
   * @public
   * <p>Information about the client connection logging options.</p>
   *          <p>If you enable client connection logging, data about client connections is sent to a
   * 			Cloudwatch Logs log stream. The following information is logged:</p>
   *          <ul>
   *             <li>
   *                <p>Client connection requests</p>
   *             </li>
   *             <li>
   *                <p>Client connection results (successful and unsuccessful)</p>
   *             </li>
   *             <li>
   *                <p>Reasons for unsuccessful client connection requests</p>
   *             </li>
   *             <li>
   *                <p>Client connection termination time</p>
   *             </li>
   *          </ul>
   */
  ConnectionLogOptions?: ConnectionLogOptions;

  /**
   * @public
   * <p>Information about the DNS servers to be used by Client VPN connections. A Client VPN endpoint can have
   * 			up to two DNS servers.</p>
   */
  DnsServers?: DnsServersOptionsModifyStructure;

  /**
   * @public
   * <p>The port number to assign to the Client VPN endpoint for TCP and UDP traffic.</p>
   *          <p>Valid Values: <code>443</code> | <code>1194</code>
   *          </p>
   *          <p>Default Value: <code>443</code>
   *          </p>
   */
  VpnPort?: number;

  /**
   * @public
   * <p>A brief description of the Client VPN endpoint.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Indicates whether the VPN is split-tunnel.</p>
   *          <p>For information about split-tunnel VPN endpoints, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/split-tunnel-vpn.html">Split-tunnel Client VPN endpoint</a> in the
   *         	<i>Client VPN Administrator Guide</i>.</p>
   */
  SplitTunnel?: boolean;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The IDs of one or more security groups to apply to the target network.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * @public
   * <p>The ID of the VPC to associate with the Client VPN endpoint.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>Specify whether to enable the self-service portal for the Client VPN endpoint.</p>
   */
  SelfServicePortal?: SelfServicePortal;

  /**
   * @public
   * <p>The options for managing connection authorization for new client connections.</p>
   */
  ClientConnectOptions?: ClientConnectOptions;

  /**
   * @public
   * <p>The maximum VPN session duration time in hours.</p>
   *          <p>Valid values: <code>8 | 10 | 12 | 24</code>
   *          </p>
   *          <p>Default value: <code>24</code>
   *          </p>
   */
  SessionTimeoutHours?: number;

  /**
   * @public
   * <p>Options for enabling a customizable text banner that will be displayed on
   * 			Amazon Web Services provided clients when a VPN session is established.</p>
   */
  ClientLoginBannerOptions?: ClientLoginBannerOptions;
}

/**
 * @public
 */
export interface ModifyClientVpnEndpointResult {
  /**
   * @public
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

/**
 * @public
 */
export interface ModifyDefaultCreditSpecificationRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The instance family.</p>
   */
  InstanceFamily: UnlimitedSupportedInstanceFamily | undefined;

  /**
   * @public
   * <p>The credit option for CPU usage of the instance family.</p>
   *          <p>Valid Values: <code>standard</code> | <code>unlimited</code>
   *          </p>
   */
  CpuCredits: string | undefined;
}

/**
 * @public
 */
export interface ModifyDefaultCreditSpecificationResult {
  /**
   * @public
   * <p>The default credit option for CPU usage of the instance family.</p>
   */
  InstanceFamilyCreditSpecification?: InstanceFamilyCreditSpecification;
}

/**
 * @public
 */
export interface ModifyEbsDefaultKmsKeyIdRequest {
  /**
   * @public
   * <p>The identifier of the Key Management Service (KMS) KMS key to use for Amazon EBS encryption.
   *       If this parameter is not specified, your KMS key for Amazon EBS is used. If <code>KmsKeyId</code> is
   *       specified, the encrypted state must be <code>true</code>.</p>
   *          <p>You can specify the KMS key using any of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID. For example, 1234abcd-12ab-34cd-56ef-1234567890ab.</p>
   *             </li>
   *             <li>
   *                <p>Key alias. For example, alias/ExampleAlias.</p>
   *             </li>
   *             <li>
   *                <p>Key ARN. For example, arn:aws:kms:us-east-1:012345678910:key/1234abcd-12ab-34cd-56ef-1234567890ab.</p>
   *             </li>
   *             <li>
   *                <p>Alias ARN. For example, arn:aws:kms:us-east-1:012345678910:alias/ExampleAlias.</p>
   *             </li>
   *          </ul>
   *          <p>Amazon Web Services authenticates the KMS key asynchronously. Therefore, if you specify an ID, alias, or ARN that is not valid,
   *       the action can appear to complete, but eventually fails.</p>
   *          <p>Amazon EBS does not support asymmetric KMS keys.</p>
   */
  KmsKeyId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface ModifyEbsDefaultKmsKeyIdResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the default KMS key for encryption by default.</p>
   */
  KmsKeyId?: string;
}

/**
 * @public
 */
export interface ModifyFleetRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>Indicates whether running instances should be terminated if the total target capacity of
   *          the EC2 Fleet is decreased below the current size of the EC2 Fleet.</p>
   *          <p>Supported only for fleets of type <code>maintain</code>.</p>
   */
  ExcessCapacityTerminationPolicy?: FleetExcessCapacityTerminationPolicy;

  /**
   * @public
   * <p>The launch template and overrides.</p>
   */
  LaunchTemplateConfigs?: FleetLaunchTemplateConfigRequest[];

  /**
   * @public
   * <p>The ID of the EC2 Fleet.</p>
   */
  FleetId: string | undefined;

  /**
   * @public
   * <p>The size of the EC2 Fleet.</p>
   */
  TargetCapacitySpecification?: TargetCapacitySpecificationRequest;

  /**
   * @public
   * <p>Reserved.</p>
   */
  Context?: string;
}

/**
 * @public
 */
export interface ModifyFleetResult {
  /**
   * @public
   * <p>If the request succeeds, the response returns <code>true</code>. If the request fails,
   *          no response is returned, and instead an error message is returned.</p>
   */
  Return?: boolean;
}

/**
 * @public
 * <p>Describes a load permission.</p>
 */
export interface LoadPermissionRequest {
  /**
   * @public
   * <p>The name of the group.</p>
   */
  Group?: PermissionGroup;

  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  UserId?: string;
}

/**
 * @public
 * <p>Describes modifications to the load permissions of an Amazon FPGA image (AFI).</p>
 */
export interface LoadPermissionModifications {
  /**
   * @public
   * <p>The load permissions to add.</p>
   */
  Add?: LoadPermissionRequest[];

  /**
   * @public
   * <p>The load permissions to remove.</p>
   */
  Remove?: LoadPermissionRequest[];
}

/**
 * @public
 * @enum
 */
export const OperationType = {
  add: "add",
  remove: "remove",
} as const;

/**
 * @public
 */
export type OperationType = (typeof OperationType)[keyof typeof OperationType];

/**
 * @public
 */
export interface ModifyFpgaImageAttributeRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the AFI.</p>
   */
  FpgaImageId: string | undefined;

  /**
   * @public
   * <p>The name of the attribute.</p>
   */
  Attribute?: FpgaImageAttributeName;

  /**
   * @public
   * <p>The operation type.</p>
   */
  OperationType?: OperationType;

  /**
   * @public
   * <p>The Amazon Web Services account IDs. This parameter is valid only when modifying the <code>loadPermission</code> attribute.</p>
   */
  UserIds?: string[];

  /**
   * @public
   * <p>The user groups. This parameter is valid only when modifying the <code>loadPermission</code> attribute.</p>
   */
  UserGroups?: string[];

  /**
   * @public
   * <p>The product codes. After you add a product code to an AFI, it can't be removed.
   * 		    This parameter is valid only when modifying the <code>productCodes</code> attribute.</p>
   */
  ProductCodes?: string[];

  /**
   * @public
   * <p>The load permission for the AFI.</p>
   */
  LoadPermission?: LoadPermissionModifications;

  /**
   * @public
   * <p>A description for the AFI.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A name for the AFI.</p>
   */
  Name?: string;
}

/**
 * @public
 */
export interface ModifyFpgaImageAttributeResult {
  /**
   * @public
   * <p>Information about the attribute.</p>
   */
  FpgaImageAttribute?: FpgaImageAttribute;
}

/**
 * @public
 */
export interface ModifyHostsRequest {
  /**
   * @public
   * <p>Specify whether to enable or disable auto-placement.</p>
   */
  AutoPlacement?: AutoPlacement;

  /**
   * @public
   * <p>The IDs of the Dedicated Hosts to modify.</p>
   */
  HostIds: string[] | undefined;

  /**
   * @public
   * <p>Indicates whether to enable or disable host recovery for the Dedicated Host. For more
   *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-recovery.html"> Host recovery</a>
   *             in the <i>Amazon EC2 User Guide</i>.</p>
   */
  HostRecovery?: HostRecovery;

  /**
   * @public
   * <p>Specifies the instance type to be supported by the Dedicated Host. Specify this
   *             parameter to modify a Dedicated Host to support only a specific instance type.</p>
   *          <p>If you want to modify a Dedicated Host to support multiple instance types in its
   *             current instance family, omit this parameter and specify <b>InstanceFamily</b> instead. You cannot specify <b>InstanceType</b> and <b>InstanceFamily</b> in the
   *             same request.</p>
   */
  InstanceType?: string;

  /**
   * @public
   * <p>Specifies the instance family to be supported by the Dedicated Host. Specify this
   *             parameter to modify a Dedicated Host to support multiple instance types within its
   *             current instance family.</p>
   *          <p>If you want to modify a Dedicated Host to support a specific instance type only, omit
   *             this parameter and specify <b>InstanceType</b> instead. You
   *             cannot specify <b>InstanceFamily</b> and <b>InstanceType</b> in the same request.</p>
   */
  InstanceFamily?: string;

  /**
   * @public
   * <p>Indicates whether to enable or disable host maintenance for the Dedicated Host. For
   *             more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-maintenance.html"> Host
   *                 maintenance</a> in the <i>Amazon EC2 User Guide</i>.</p>
   */
  HostMaintenance?: HostMaintenance;
}

/**
 * @public
 */
export interface ModifyHostsResult {
  /**
   * @public
   * <p>The IDs of the Dedicated Hosts that were successfully modified.</p>
   */
  Successful?: string[];

  /**
   * @public
   * <p>The IDs of the Dedicated Hosts that could not be modified. Check whether the setting
   *             you requested can be used.</p>
   */
  Unsuccessful?: UnsuccessfulItem[];
}

/**
 * @public
 */
export interface ModifyIdentityIdFormatRequest {
  /**
   * @public
   * <p>The ARN of the principal, which can be an IAM user, IAM role, or the root user. Specify
   *        <code>all</code> to modify the ID format for all IAM users, IAM roles, and the root user of
   *        the account.</p>
   */
  PrincipalArn: string | undefined;

  /**
   * @public
   * <p>The type of resource: <code>bundle</code> | <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
   *           <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
   *           <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
   *           <code>import-task</code> | <code>internet-gateway</code> | <code>network-acl</code>
   *           | <code>network-acl-association</code> | <code>network-interface</code> |
   *           <code>network-interface-attachment</code> | <code>prefix-list</code> |
   *           <code>route-table</code> | <code>route-table-association</code> |
   *           <code>security-group</code> | <code>subnet</code> |
   *           <code>subnet-cidr-block-association</code> | <code>vpc</code> |
   *           <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> | <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>.</p>
   *          <p>Alternatively, use the <code>all-current</code> option to include all resource types that are
   *           currently within their opt-in period for longer IDs.</p>
   */
  Resource: string | undefined;

  /**
   * @public
   * <p>Indicates whether the resource should use longer IDs (17-character IDs)</p>
   */
  UseLongIds: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyIdFormatRequest {
  /**
   * @public
   * <p>The type of resource: <code>bundle</code> | <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
   *            <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
   *            <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
   *            <code>import-task</code> | <code>internet-gateway</code> | <code>network-acl</code>
   *            | <code>network-acl-association</code> | <code>network-interface</code> |
   *            <code>network-interface-attachment</code> | <code>prefix-list</code> |
   *            <code>route-table</code> | <code>route-table-association</code> |
   *            <code>security-group</code> | <code>subnet</code> |
   *            <code>subnet-cidr-block-association</code> | <code>vpc</code> |
   *            <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> | <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>.</p>
   *          <p>Alternatively, use the <code>all-current</code> option to include all resource types that are
   *        currently within their opt-in period for longer IDs.</p>
   */
  Resource: string | undefined;

  /**
   * @public
   * <p>Indicate whether the resource should use longer IDs (17-character IDs).</p>
   */
  UseLongIds: boolean | undefined;
}

/**
 * @public
 * <p>Describes a launch permission modification.</p>
 */
export interface LaunchPermissionModifications {
  /**
   * @public
   * <p>The Amazon Web Services account ID, organization ARN, or OU ARN to add to the list of launch permissions for the AMI.</p>
   */
  Add?: LaunchPermission[];

  /**
   * @public
   * <p>The Amazon Web Services account ID, organization ARN, or OU ARN to remove from the list of launch permissions for the AMI.</p>
   */
  Remove?: LaunchPermission[];
}

/**
 * @public
 * <p>Contains the parameters for ModifyImageAttribute.</p>
 */
export interface ModifyImageAttributeRequest {
  /**
   * @public
   * <p>The name of the attribute to modify.</p>
   *          <p>Valid values: <code>description</code> | <code>imdsSupport</code> | <code>launchPermission</code>
   *          </p>
   */
  Attribute?: string;

  /**
   * @public
   * <p>A new description for the AMI.</p>
   */
  Description?: AttributeValue;

  /**
   * @public
   * <p>The ID of the AMI.</p>
   */
  ImageId: string | undefined;

  /**
   * @public
   * <p>A new launch permission for the AMI.</p>
   */
  LaunchPermission?: LaunchPermissionModifications;

  /**
   * @public
   * <p>The operation type.
   *        This parameter can be used only when the <code>Attribute</code> parameter is <code>launchPermission</code>.</p>
   */
  OperationType?: OperationType;

  /**
   * @public
   * <p>Not supported.</p>
   */
  ProductCodes?: string[];

  /**
   * @public
   * <p>The user groups.
   *        This parameter can be used only when the <code>Attribute</code> parameter is <code>launchPermission</code>.</p>
   */
  UserGroups?: string[];

  /**
   * @public
   * <p>The Amazon Web Services account IDs.
   *        This parameter can be used only when the <code>Attribute</code> parameter is <code>launchPermission</code>.</p>
   */
  UserIds?: string[];

  /**
   * @public
   * <p>The value of the attribute being modified.
   *        This parameter can be used only when the <code>Attribute</code> parameter is <code>description</code> or <code>imdsSupport</code>.</p>
   */
  Value?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an organization. This parameter can be used only when the <code>Attribute</code> parameter is <code>launchPermission</code>.</p>
   */
  OrganizationArns?: string[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an organizational unit (OU). This parameter can be used only when the <code>Attribute</code> parameter is <code>launchPermission</code>.</p>
   */
  OrganizationalUnitArns?: string[];

  /**
   * @public
   * <p>Set to <code>v2.0</code> to indicate that IMDSv2 is specified in the AMI. Instances
   *       launched from this AMI will have <code>HttpTokens</code> automatically set to
   *       <code>required</code> so that, by default, the instance requires that IMDSv2 is used when
   *       requesting instance metadata. In addition, <code>HttpPutResponseHopLimit</code> is set to
   *       <code>2</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-IMDS-new-instances.html#configure-IMDS-new-instances-ami-configuration">Configure
   *         the AMI</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <important>
   *             <p>Do not use this parameter unless your AMI software supports IMDSv2. After you set the value to <code>v2.0</code>,
   *         you can't undo it. The only way to “reset” your AMI is to create a new AMI from the underlying snapshot.</p>
   *          </important>
   */
  ImdsSupport?: AttributeValue;
}

/**
 * @public
 * <p>Describes information used to set up an EBS volume specified in a block device
 *             mapping.</p>
 */
export interface EbsInstanceBlockDeviceSpecification {
  /**
   * @public
   * <p>Indicates whether the volume is deleted on instance termination.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * @public
   * <p>The ID of the EBS volume.</p>
   */
  VolumeId?: string;
}

/**
 * @public
 * <p>Describes a block device mapping entry.</p>
 */
export interface InstanceBlockDeviceMappingSpecification {
  /**
   * @public
   * <p>The device name (for example, <code>/dev/sdh</code> or <code>xvdh</code>).</p>
   */
  DeviceName?: string;

  /**
   * @public
   * <p>Parameters used to automatically set up EBS volumes when the instance is
   *             launched.</p>
   */
  Ebs?: EbsInstanceBlockDeviceSpecification;

  /**
   * @public
   * <p>suppress the specified device included in the block device mapping.</p>
   */
  NoDevice?: string;

  /**
   * @public
   * <p>The virtual device name.</p>
   */
  VirtualName?: string;
}

/**
 * @public
 */
export interface BlobAttributeValue {
  Value?: Uint8Array;
}

/**
 * @public
 */
export interface ModifyInstanceAttributeRequest {
  /**
   * @public
   * <p>Enable or disable source/destination checks, which ensure that the instance is either
   *             the source or the destination of any traffic that it receives. If the value is
   *                 <code>true</code>, source/destination checks are enabled; otherwise, they are
   *             disabled. The default value is <code>true</code>. You must disable source/destination
   *             checks if the instance runs services such as network address translation, routing, or
   *             firewalls.</p>
   */
  SourceDestCheck?: AttributeBooleanValue;

  /**
   * @public
   * <p>The name of the attribute to modify.</p>
   *          <important>
   *             <p>You can modify the following attributes only: <code>disableApiTermination</code> |
   *                     <code>instanceType</code> | <code>kernel</code> | <code>ramdisk</code> |
   *                     <code>instanceInitiatedShutdownBehavior</code> | <code>blockDeviceMapping</code>
   *                 | <code>userData</code> | <code>sourceDestCheck</code> | <code>groupSet</code> |
   *                     <code>ebsOptimized</code> | <code>sriovNetSupport</code> |
   *                     <code>enaSupport</code> | <code>nvmeSupport</code> | <code>disableApiStop</code>
   *                 | <code>enclaveOptions</code>
   *             </p>
   *          </important>
   */
  Attribute?: InstanceAttributeName;

  /**
   * @public
   * <p>Modifies the <code>DeleteOnTermination</code> attribute for volumes that are currently
   *             attached. The volume must be owned by the caller. If no value is specified for
   *                 <code>DeleteOnTermination</code>, the default is <code>true</code> and the volume is
   *             deleted when the instance is terminated.</p>
   *          <p>To add instance store volumes to an Amazon EBS-backed instance, you must add them when
   *             you launch the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html#Using_OverridingAMIBDM">Update the block device mapping when launching an instance</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   */
  BlockDeviceMappings?: InstanceBlockDeviceMappingSpecification[];

  /**
   * @public
   * <p>If the value is <code>true</code>, you can't terminate the instance using the Amazon
   *             EC2 console, CLI, or API; otherwise, you can. You cannot use this parameter for Spot
   *             Instances.</p>
   */
  DisableApiTermination?: AttributeBooleanValue;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>Specifies whether the instance is optimized for Amazon EBS I/O. This optimization
   *             provides dedicated throughput to Amazon EBS and an optimized configuration stack to
   *             provide optimal EBS I/O performance. This optimization isn't available with all instance
   *             types. Additional usage charges apply when using an EBS Optimized instance.</p>
   */
  EbsOptimized?: AttributeBooleanValue;

  /**
   * @public
   * <p>Set to <code>true</code> to enable enhanced networking with ENA for the
   *             instance.</p>
   *          <p>This option is supported only for HVM instances. Specifying this option with a PV
   *             instance can make it unreachable.</p>
   */
  EnaSupport?: AttributeBooleanValue;

  /**
   * @public
   * <p>Replaces the security groups of the instance with the specified security groups.
   *             You must specify the ID of at least one security group, even if it's just the default
   *             security group for the VPC.</p>
   */
  Groups?: string[];

  /**
   * @public
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>Specifies whether an instance stops or terminates when you initiate shutdown from the
   *             instance (using the operating system command for system shutdown).</p>
   */
  InstanceInitiatedShutdownBehavior?: AttributeValue;

  /**
   * @public
   * <p>Changes the instance type to the specified value. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance
   *                 types</a> in the <i>Amazon EC2 User Guide</i>. If the instance type is
   *             not valid, the error returned is <code>InvalidInstanceAttributeValue</code>.</p>
   */
  InstanceType?: AttributeValue;

  /**
   * @public
   * <p>Changes the instance's kernel to the specified value. We recommend that you use
   *             PV-GRUB instead of kernels and RAM disks. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedKernels.html">PV-GRUB</a>.</p>
   */
  Kernel?: AttributeValue;

  /**
   * @public
   * <p>Changes the instance's RAM disk to the specified value. We recommend that you use
   *             PV-GRUB instead of kernels and RAM disks. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedKernels.html">PV-GRUB</a>.</p>
   */
  Ramdisk?: AttributeValue;

  /**
   * @public
   * <p>Set to <code>simple</code> to enable enhanced networking with the Intel 82599 Virtual
   *             Function interface for the instance.</p>
   *          <p>There is no way to disable enhanced networking with the Intel 82599 Virtual Function
   *             interface at this time.</p>
   *          <p>This option is supported only for HVM instances. Specifying this option with a PV
   *             instance can make it unreachable.</p>
   */
  SriovNetSupport?: AttributeValue;

  /**
   * @public
   * <p>Changes the instance's user data to the specified value. If you are using an Amazon Web Services SDK or command line tool, base64-encoding is performed for you, and you
   *             can load the text from a file. Otherwise, you must provide base64-encoded text.</p>
   */
  UserData?: BlobAttributeValue;

  /**
   * @public
   * <p>A new value for the attribute. Use only with the <code>kernel</code>,
   *                 <code>ramdisk</code>, <code>userData</code>, <code>disableApiTermination</code>, or
   *                 <code>instanceInitiatedShutdownBehavior</code> attribute.</p>
   */
  Value?: string;

  /**
   * @public
   * <p>Indicates whether an instance is enabled for stop protection. For more information,
   *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html#Using_StopProtection">Stop
   *                 Protection</a>.</p>
   *          <p></p>
   */
  DisableApiStop?: AttributeBooleanValue;
}

/**
 * @public
 * <p>Describes an instance's Capacity Reservation targeting option. You can specify only one parameter
 * 			at a time. If you specify <code>CapacityReservationPreference</code> and
 * 			<code>CapacityReservationTarget</code>, the request fails.</p>
 *          <p>Use the <code>CapacityReservationPreference</code> parameter to configure the instance
 * 			to run as an On-Demand Instance or to run in any <code>open</code> Capacity Reservation that has
 * 			matching attributes (instance type, platform, Availability Zone). Use the
 * 			<code>CapacityReservationTarget</code> parameter to explicitly target a specific
 * 			   	Capacity Reservation or a Capacity Reservation group.</p>
 */
export interface CapacityReservationSpecification {
  /**
   * @public
   * <p>Indicates the instance's Capacity Reservation preferences. Possible preferences include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>open</code> - The instance can run in any <code>open</code> Capacity Reservation that has matching attributes
   * 				(instance type, platform, Availability Zone).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>none</code> - The instance avoids running in a Capacity Reservation even if one is available. The
   * 					instance runs as an On-Demand Instance.</p>
   *             </li>
   *          </ul>
   */
  CapacityReservationPreference?: CapacityReservationPreference;

  /**
   * @public
   * <p>Information about the target Capacity Reservation or Capacity Reservation group.</p>
   */
  CapacityReservationTarget?: CapacityReservationTarget;
}

/**
 * @public
 */
export interface ModifyInstanceCapacityReservationAttributesRequest {
  /**
   * @public
   * <p>The ID of the instance to be modified.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>Information about the Capacity Reservation targeting option.</p>
   */
  CapacityReservationSpecification: CapacityReservationSpecification | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface ModifyInstanceCapacityReservationAttributesResult {
  /**
   * @public
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

/**
 * @public
 * <p>Describes the credit option for CPU usage of a burstable performance instance.</p>
 */
export interface InstanceCreditSpecificationRequest {
  /**
   * @public
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The credit option for CPU usage of the instance.</p>
   *          <p>Valid values: <code>standard</code> | <code>unlimited</code>
   *          </p>
   *          <p>T3 instances with <code>host</code> tenancy do not support the <code>unlimited</code>
   *             CPU credit option.</p>
   */
  CpuCredits?: string;
}

/**
 * @public
 */
export interface ModifyInstanceCreditSpecificationRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *                 Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>Information about the credit option for CPU usage.</p>
   */
  InstanceCreditSpecifications: InstanceCreditSpecificationRequest[] | undefined;
}

/**
 * @public
 * <p>Describes the burstable performance instance whose credit option for CPU usage was
 *             successfully modified.</p>
 */
export interface SuccessfulInstanceCreditSpecificationItem {
  /**
   * @public
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;
}

/**
 * @public
 * @enum
 */
export const UnsuccessfulInstanceCreditSpecificationErrorCode = {
  INCORRECT_INSTANCE_STATE: "IncorrectInstanceState",
  INSTANCE_CREDIT_SPECIFICATION_NOT_SUPPORTED: "InstanceCreditSpecification.NotSupported",
  INSTANCE_NOT_FOUND: "InvalidInstanceID.NotFound",
  INVALID_INSTANCE_ID: "InvalidInstanceID.Malformed",
} as const;

/**
 * @public
 */
export type UnsuccessfulInstanceCreditSpecificationErrorCode =
  (typeof UnsuccessfulInstanceCreditSpecificationErrorCode)[keyof typeof UnsuccessfulInstanceCreditSpecificationErrorCode];

/**
 * @public
 * <p>Information about the error for the burstable performance instance whose credit option
 *             for CPU usage was not modified.</p>
 */
export interface UnsuccessfulInstanceCreditSpecificationItemError {
  /**
   * @public
   * <p>The error code.</p>
   */
  Code?: UnsuccessfulInstanceCreditSpecificationErrorCode;

  /**
   * @public
   * <p>The applicable error message.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>Describes the burstable performance instance whose credit option for CPU usage was not
 *             modified.</p>
 */
export interface UnsuccessfulInstanceCreditSpecificationItem {
  /**
   * @public
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>The applicable error for the burstable performance instance whose credit option for
   *             CPU usage was not modified.</p>
   */
  Error?: UnsuccessfulInstanceCreditSpecificationItemError;
}

/**
 * @public
 */
export interface ModifyInstanceCreditSpecificationResult {
  /**
   * @public
   * <p>Information about the instances whose credit option for CPU usage was successfully
   *             modified.</p>
   */
  SuccessfulInstanceCreditSpecifications?: SuccessfulInstanceCreditSpecificationItem[];

  /**
   * @public
   * <p>Information about the instances whose credit option for CPU usage was not
   *             modified.</p>
   */
  UnsuccessfulInstanceCreditSpecifications?: UnsuccessfulInstanceCreditSpecificationItem[];
}

/**
 * @public
 */
export interface ModifyInstanceEventStartTimeRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the instance with the scheduled event.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The ID of the event whose date and time you are modifying.</p>
   */
  InstanceEventId: string | undefined;

  /**
   * @public
   * <p>The new date and time when the event will take place.</p>
   */
  NotBefore: Date | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceEventStartTimeResult {
  /**
   * @public
   * <p>Information about the event.</p>
   */
  Event?: InstanceStatusEvent;
}

/**
 * @public
 */
export interface ModifyInstanceEventWindowRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The name of the event window.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The ID of the event window.</p>
   */
  InstanceEventWindowId: string | undefined;

  /**
   * @public
   * <p>The time ranges of the event window.</p>
   */
  TimeRanges?: InstanceEventWindowTimeRangeRequest[];

  /**
   * @public
   * <p>The cron expression of the event window, for example, <code>* 0-4,20-23 * * 1,5</code>.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Only hour and day of the week values are supported.</p>
   *             </li>
   *             <li>
   *                <p>For day of the week values, you can specify either integers <code>0</code> through
   *                   <code>6</code>, or alternative single values <code>SUN</code> through
   *                   <code>SAT</code>.</p>
   *             </li>
   *             <li>
   *                <p>The minute, month, and year must be specified by <code>*</code>.</p>
   *             </li>
   *             <li>
   *                <p>The hour value must be one or a multiple range, for example, <code>0-4</code> or
   *                   <code>0-4,20-23</code>.</p>
   *             </li>
   *             <li>
   *                <p>Each hour range must be >= 2 hours, for example, <code>0-2</code> or
   *                   <code>20-23</code>.</p>
   *             </li>
   *             <li>
   *                <p>The event window must be >= 4 hours. The combined total time ranges in the event
   *                window must be >= 4 hours.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about cron expressions, see <a href="https://en.wikipedia.org/wiki/Cron">cron</a> on the <i>Wikipedia
   *             website</i>.</p>
   */
  CronExpression?: string;
}

/**
 * @public
 */
export interface ModifyInstanceEventWindowResult {
  /**
   * @public
   * <p>Information about the event window.</p>
   */
  InstanceEventWindow?: InstanceEventWindow;
}

/**
 * @public
 */
export interface ModifyInstanceMaintenanceOptionsRequest {
  /**
   * @public
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>Disables the automatic recovery behavior of your instance or sets it to
   *             default.</p>
   */
  AutoRecovery?: InstanceAutoRecoveryState;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface ModifyInstanceMaintenanceOptionsResult {
  /**
   * @public
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>Provides information on the current automatic recovery behavior of your
   *             instance.</p>
   */
  AutoRecovery?: InstanceAutoRecoveryState;
}

/**
 * @public
 */
export interface ModifyInstanceMetadataOptionsRequest {
  /**
   * @public
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>IMDSv2 uses token-backed sessions. Set the use of HTTP tokens to <code>optional</code>
   *             (in other words, set the use of IMDSv2 to <code>optional</code>) or
   *                 <code>required</code> (in other words, set the use of IMDSv2 to
   *                 <code>required</code>).</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>optional</code> - When IMDSv2 is optional, you can choose to retrieve instance metadata with or without
   *             a session token in your request. If you retrieve the IAM role credentials
   *             without a token, the IMDSv1 role credentials are returned. If you retrieve the IAM role credentials
   *             using a valid session token, the IMDSv2 role credentials are returned.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>required</code> - When IMDSv2 is required, you must send a session token
   *             with any instance metadata retrieval requests. In this state, retrieving the IAM role
   *             credentials always returns IMDSv2 credentials; IMDSv1 credentials are not available.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>optional</code>
   *          </p>
   */
  HttpTokens?: HttpTokensState;

  /**
   * @public
   * <p>The desired HTTP PUT response hop limit for instance metadata requests. The larger the
   *             number, the further instance metadata requests can travel. If no parameter is specified,
   *             the existing state is maintained.</p>
   *          <p>Possible values: Integers from 1 to 64</p>
   */
  HttpPutResponseHopLimit?: number;

  /**
   * @public
   * <p>Enables or disables the HTTP metadata endpoint on your instances. If this parameter is
   *             not specified, the existing state is maintained.</p>
   *          <p>If you specify a value of <code>disabled</code>, you cannot access your instance
   *             metadata.</p>
   */
  HttpEndpoint?: InstanceMetadataEndpointState;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>Enables or disables the IPv6 endpoint for the instance metadata service.
   *             Applies only if you enabled the HTTP metadata endpoint.</p>
   */
  HttpProtocolIpv6?: InstanceMetadataProtocolState;

  /**
   * @public
   * <p>Set to <code>enabled</code> to allow access to instance tags from the instance
   *             metadata. Set to <code>disabled</code> to turn off access to instance tags from the
   *             instance metadata. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#work-with-tags-in-IMDS">Work with
   *                 instance tags using the instance metadata</a>.</p>
   *          <p>Default: <code>disabled</code>
   *          </p>
   */
  InstanceMetadataTags?: InstanceMetadataTagsState;
}

/**
 * @public
 */
export interface ModifyInstanceMetadataOptionsResult {
  /**
   * @public
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>The metadata options for the instance.</p>
   */
  InstanceMetadataOptions?: InstanceMetadataOptionsResponse;
}

/**
 * @public
 * @enum
 */
export const HostTenancy = {
  dedicated: "dedicated",
  host: "host",
} as const;

/**
 * @public
 */
export type HostTenancy = (typeof HostTenancy)[keyof typeof HostTenancy];

/**
 * @public
 */
export interface ModifyInstancePlacementRequest {
  /**
   * @public
   * <p>The affinity setting for the instance.</p>
   */
  Affinity?: Affinity;

  /**
   * @public
   * <p>The name of the placement group in which to place the instance. For spread placement
   *             groups, the instance must have a tenancy of <code>default</code>. For cluster and
   *             partition placement groups, the instance must have a tenancy of <code>default</code> or
   *                 <code>dedicated</code>.</p>
   *          <p>To remove an instance from a placement group, specify an empty string ("").</p>
   */
  GroupName?: string;

  /**
   * @public
   * <p>The ID of the Dedicated Host with which to associate the instance.</p>
   */
  HostId?: string;

  /**
   * @public
   * <p>The ID of the instance that you are modifying.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The tenancy for the instance.</p>
   *          <note>
   *             <p>For T3 instances, you must launch the instance on a Dedicated Host to use a
   *                 tenancy of <code>host</code>. You can't change the tenancy from
   *                 <code>host</code> to <code>dedicated</code> or <code>default</code>.
   *                 Attempting to make one of these unsupported tenancy changes results in an
   *                 <code>InvalidRequest</code> error code.</p>
   *          </note>
   */
  Tenancy?: HostTenancy;

  /**
   * @public
   * <p>The number of the partition in which to place the instance. Valid only if the
   *             placement group strategy is set to <code>partition</code>.</p>
   */
  PartitionNumber?: number;

  /**
   * @public
   * <p>The ARN of the host resource group in which to place the instance. The instance must
   *             have a tenancy of <code>host</code> to specify this parameter.</p>
   */
  HostResourceGroupArn?: string;

  /**
   * @public
   * <p>The Group Id of a placement group. You must specify the Placement Group <b>Group Id</b> to launch an instance in a shared placement
   *             group.</p>
   */
  GroupId?: string;
}

/**
 * @public
 */
export interface ModifyInstancePlacementResult {
  /**
   * @public
   * <p>Is <code>true</code> if the request succeeds, and an error otherwise.</p>
   */
  Return?: boolean;
}

/**
 * @public
 * <p>Remove an operating Region from an IPAM. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.</p>
 *          <p>For more information about operating Regions, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/create-ipam.html">Create an IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>
 *          </p>
 */
export interface RemoveIpamOperatingRegion {
  /**
   * @public
   * <p>The name of the operating Region you want to remove.</p>
   */
  RegionName?: string;
}

/**
 * @public
 */
export interface ModifyIpamRequest {
  /**
   * @public
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the IPAM you want to modify.</p>
   */
  IpamId: string | undefined;

  /**
   * @public
   * <p>The description of the IPAM you want to modify.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Choose the operating Regions for the IPAM. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.</p>
   *          <p>For more information about operating Regions, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/create-ipam.html">Create an IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   */
  AddOperatingRegions?: AddIpamOperatingRegion[];

  /**
   * @public
   * <p>The operating Regions to remove.</p>
   */
  RemoveOperatingRegions?: RemoveIpamOperatingRegion[];

  /**
   * @public
   * <p>IPAM is offered in a Free Tier and an Advanced Tier. For more information about the features available in each tier and the costs associated with the tiers, see <a href="http://aws.amazon.com/vpc/pricing/">Amazon VPC pricing > IPAM tab</a>.</p>
   */
  Tier?: IpamTier;
}

/**
 * @public
 */
export interface ModifyIpamResult {
  /**
   * @public
   * <p>The results of the modification.</p>
   */
  Ipam?: Ipam;
}

/**
 * @public
 */
export interface ModifyIpamPoolRequest {
  /**
   * @public
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the IPAM pool you want to modify.</p>
   */
  IpamPoolId: string | undefined;

  /**
   * @public
   * <p>The description of the IPAM pool you want to modify.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>If true, IPAM will continuously look for resources within the CIDR range of this pool
   *          and automatically import them as allocations into your IPAM. The CIDRs that will be allocated for
   *          these resources must not already be allocated to other resources in order for the import to succeed. IPAM will import
   *          a CIDR regardless of its compliance with the pool's allocation rules, so a resource might be imported and subsequently
   *          marked as noncompliant. If IPAM discovers multiple CIDRs that overlap, IPAM will import the largest CIDR only. If IPAM
   *          discovers multiple CIDRs with matching CIDRs, IPAM will randomly import one of them only.
   *       </p>
   *          <p>A locale must be set on the pool for this feature to work.</p>
   */
  AutoImport?: boolean;

  /**
   * @public
   * <p>The minimum netmask length required for CIDR allocations in this IPAM pool to be compliant. Possible
   *          netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are  0 - 128. The minimum netmask
   *          length must be less than the maximum netmask length.</p>
   */
  AllocationMinNetmaskLength?: number;

  /**
   * @public
   * <p>The maximum netmask length possible for CIDR allocations in this IPAM pool to be compliant. Possible
   *          netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are  0 - 128.The maximum netmask
   *          length must be greater than the minimum netmask length.</p>
   */
  AllocationMaxNetmaskLength?: number;

  /**
   * @public
   * <p>The default netmask length for allocations added to this pool. If, for example, the CIDR assigned to this pool is 10.0.0.0/8 and you enter 16 here, new allocations will default to 10.0.0.0/16.</p>
   */
  AllocationDefaultNetmaskLength?: number;

  /**
   * @public
   * <p>Clear the default netmask length allocation rule for this pool.</p>
   */
  ClearAllocationDefaultNetmaskLength?: boolean;

  /**
   * @public
   * <p>Add tag allocation rules to a pool. For more information about allocation rules, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/create-top-ipam.html">Create a top-level pool</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   */
  AddAllocationResourceTags?: RequestIpamResourceTag[];

  /**
   * @public
   * <p>Remove tag allocation rules from a pool.</p>
   */
  RemoveAllocationResourceTags?: RequestIpamResourceTag[];
}

/**
 * @public
 */
export interface ModifyIpamPoolResult {
  /**
   * @public
   * <p>The results of the modification.</p>
   */
  IpamPool?: IpamPool;
}

/**
 * @public
 */
export interface ModifyIpamResourceCidrRequest {
  /**
   * @public
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the resource you want to modify.</p>
   */
  ResourceId: string | undefined;

  /**
   * @public
   * <p>The CIDR of the resource you want to modify.</p>
   */
  ResourceCidr: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services Region of the resource you want to modify.</p>
   */
  ResourceRegion: string | undefined;

  /**
   * @public
   * <p>The ID of the current scope that the resource CIDR is in.</p>
   */
  CurrentIpamScopeId: string | undefined;

  /**
   * @public
   * <p>The ID of the scope you want to transfer the resource CIDR to.</p>
   */
  DestinationIpamScopeId?: string;

  /**
   * @public
   * <p>Determines if the resource is monitored by IPAM. If a resource is monitored, the resource is discovered by IPAM and you can view details about the resource’s CIDR.</p>
   */
  Monitored: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyIpamResourceCidrResult {
  /**
   * @public
   * <p>The CIDR of the resource.</p>
   */
  IpamResourceCidr?: IpamResourceCidr;
}

/**
 * @public
 */
export interface ModifyIpamResourceDiscoveryRequest {
  /**
   * @public
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>A resource discovery ID.</p>
   */
  IpamResourceDiscoveryId: string | undefined;

  /**
   * @public
   * <p>A resource discovery description.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Add operating Regions to the resource discovery. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.</p>
   */
  AddOperatingRegions?: AddIpamOperatingRegion[];

  /**
   * @public
   * <p>Remove operating Regions.</p>
   */
  RemoveOperatingRegions?: RemoveIpamOperatingRegion[];
}

/**
 * @public
 */
export interface ModifyIpamResourceDiscoveryResult {
  /**
   * @public
   * <p>A resource discovery.</p>
   */
  IpamResourceDiscovery?: IpamResourceDiscovery;
}

/**
 * @public
 */
export interface ModifyIpamScopeRequest {
  /**
   * @public
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the scope you want to modify.</p>
   */
  IpamScopeId: string | undefined;

  /**
   * @public
   * <p>The description of the scope you want to modify.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface ModifyIpamScopeResult {
  /**
   * @public
   * <p>The results of the modification.</p>
   */
  IpamScope?: IpamScope;
}

/**
 * @public
 */
export interface ModifyLaunchTemplateRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *                 idempotency</a>.</p>
   *          <p>Constraint: Maximum 128 ASCII characters.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The ID of the launch template.</p>
   *          <p>You must specify either the <code>LaunchTemplateId</code> or the
   *                 <code>LaunchTemplateName</code>, but not both.</p>
   */
  LaunchTemplateId?: string;

  /**
   * @public
   * <p>The name of the launch template.</p>
   *          <p>You must specify either the <code>LaunchTemplateName</code> or the
   *                 <code>LaunchTemplateId</code>, but not both.</p>
   */
  LaunchTemplateName?: string;

  /**
   * @public
   * <p>The version number of the launch template to set as the default version.</p>
   */
  DefaultVersion?: string;
}

/**
 * @public
 */
export interface ModifyLaunchTemplateResult {
  /**
   * @public
   * <p>Information about the launch template.</p>
   */
  LaunchTemplate?: LaunchTemplate;
}

/**
 * @public
 */
export interface ModifyLocalGatewayRouteRequest {
  /**
   * @public
   * <p>The CIDR block used for destination matches. The value that you provide must match the CIDR of an existing route in the table.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * @public
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * @public
   * <p>
   *          The ID of the virtual interface group.
   *       </p>
   */
  LocalGatewayVirtualInterfaceGroupId?: string;

  /**
   * @public
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>
   *          The ID of the prefix list. Use a prefix list in place of <code>DestinationCidrBlock</code>. You
   *          cannot use <code>DestinationPrefixListId</code> and <code>DestinationCidrBlock</code> in the same request.
   *       </p>
   */
  DestinationPrefixListId?: string;
}

/**
 * @public
 */
export interface ModifyLocalGatewayRouteResult {
  /**
   * @public
   * <p>Information about the local gateway route table.</p>
   */
  Route?: LocalGatewayRoute;
}

/**
 * @public
 * <p>An entry for a prefix list.</p>
 */
export interface RemovePrefixListEntry {
  /**
   * @public
   * <p>The CIDR block.</p>
   */
  Cidr: string | undefined;
}

/**
 * @public
 */
export interface ModifyManagedPrefixListRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId: string | undefined;

  /**
   * @public
   * <p>The current version of the prefix list.</p>
   */
  CurrentVersion?: number;

  /**
   * @public
   * <p>A name for the prefix list.</p>
   */
  PrefixListName?: string;

  /**
   * @public
   * <p>One or more entries to add to the prefix list.</p>
   */
  AddEntries?: AddPrefixListEntry[];

  /**
   * @public
   * <p>One or more entries to remove from the prefix list.</p>
   */
  RemoveEntries?: RemovePrefixListEntry[];

  /**
   * @public
   * <p>The maximum number of entries for the prefix list. You cannot modify the entries
   *             of a prefix list and modify the size of a prefix list at the same time.</p>
   *          <p>If any of the resources that reference the prefix list cannot support the new
   *             maximum size, the modify operation fails. Check the state message for the IDs of
   *             the first ten resources that do not support the new maximum size.</p>
   */
  MaxEntries?: number;
}

/**
 * @public
 */
export interface ModifyManagedPrefixListResult {
  /**
   * @public
   * <p>Information about the prefix list.</p>
   */
  PrefixList?: ManagedPrefixList;
}

/**
 * @public
 * <p>Describes an attachment change.</p>
 */
export interface NetworkInterfaceAttachmentChanges {
  /**
   * @public
   * <p>The ID of the network interface attachment.</p>
   */
  AttachmentId?: string;

  /**
   * @public
   * <p>Indicates whether the network interface is deleted when the instance is terminated.</p>
   */
  DeleteOnTermination?: boolean;
}

/**
 * @public
 * <p>Contains the parameters for ModifyNetworkInterfaceAttribute.</p>
 */
export interface ModifyNetworkInterfaceAttributeRequest {
  /**
   * @public
   * <p>Information about the interface attachment. If modifying the <code>delete on
   * 				termination</code> attribute, you must specify the ID of the interface
   * 			attachment.</p>
   */
  Attachment?: NetworkInterfaceAttachmentChanges;

  /**
   * @public
   * <p>A description for the network interface.</p>
   */
  Description?: AttributeValue;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>Changes the security groups for the network interface. The new set of groups you specify replaces the current set. You must specify at least one group, even if it's just the default security group in the VPC. You must specify the ID of the security group, not the name.</p>
   */
  Groups?: string[];

  /**
   * @public
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId: string | undefined;

  /**
   * @public
   * <p>Enable or disable source/destination checks, which ensure that the instance
   *             is either the source or the destination of any traffic that it receives.
   *             If the value is <code>true</code>, source/destination checks are enabled;
   *             otherwise, they are disabled. The default value is <code>true</code>.
   *             You must disable source/destination checks if the instance runs services
   *             such as network address translation, routing, or firewalls.</p>
   */
  SourceDestCheck?: AttributeBooleanValue;

  /**
   * @public
   * <p>Updates the ENA Express configuration for the network interface that’s attached to the
   * 			instance.</p>
   */
  EnaSrdSpecification?: EnaSrdSpecification;

  /**
   * @public
   * <p>If you’re modifying a network interface in a dual-stack or IPv6-only subnet, you have
   *             the option to assign a primary IPv6 IP address. A primary IPv6 address is an IPv6 GUA
   *             address associated with an ENI that you have enabled to use a primary IPv6 address. Use
   *             this option if the instance that this ENI will be attached to relies on its IPv6 address
   *             not changing. Amazon Web Services will automatically assign an IPv6 address associated
   *             with the ENI attached to your instance to be the primary IPv6 address. Once you enable
   *             an IPv6 GUA address to be a primary IPv6, you cannot disable it. When you enable an IPv6
   *             GUA address to be a primary IPv6, the first IPv6 GUA will be made the primary IPv6
   *             address until the instance is terminated or the network interface is detached. If you
   *             have multiple IPv6 addresses associated with an ENI attached to your instance and you
   *             enable a primary IPv6 address, the first IPv6 GUA address associated with the ENI
   *             becomes the primary IPv6 address.</p>
   */
  EnablePrimaryIpv6?: boolean;

  /**
   * @public
   * <p>A connection tracking specification.</p>
   */
  ConnectionTrackingSpecification?: ConnectionTrackingSpecificationRequest;
}

/**
 * @public
 */
export interface ModifyPrivateDnsNameOptionsRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The type of hostname for EC2 instances. For IPv4 only subnets, an instance DNS name
   *             must be based on the instance IPv4 address. For IPv6 only subnets, an instance DNS name
   *             must be based on the instance ID. For dual-stack subnets, you can specify whether DNS
   *             names use the instance IPv4 address or the instance ID.</p>
   */
  PrivateDnsHostnameType?: HostnameType;

  /**
   * @public
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS A
   *             records.</p>
   */
  EnableResourceNameDnsARecord?: boolean;

  /**
   * @public
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA
   *             records.</p>
   */
  EnableResourceNameDnsAAAARecord?: boolean;
}

/**
 * @public
 */
export interface ModifyPrivateDnsNameOptionsResult {
  /**
   * @public
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an
   *             error.</p>
   */
  Return?: boolean;
}

/**
 * @public
 * <p>Contains the parameters for ModifyReservedInstances.</p>
 */
export interface ModifyReservedInstancesRequest {
  /**
   * @public
   * <p>The IDs of the Reserved Instances to modify.</p>
   */
  ReservedInstancesIds: string[] | undefined;

  /**
   * @public
   * <p>A unique, case-sensitive token you provide to ensure idempotency of your modification request. For more information, see
   *    		<a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The configuration settings for the Reserved Instances to modify.</p>
   */
  TargetConfigurations: ReservedInstancesConfiguration[] | undefined;
}

/**
 * @public
 * <p>Contains the output of ModifyReservedInstances.</p>
 */
export interface ModifyReservedInstancesResult {
  /**
   * @public
   * <p>The ID for the modification.</p>
   */
  ReservedInstancesModificationId?: string;
}

/**
 * @public
 * <p>Describes a security group rule.</p>
 *          <p>You must specify exactly one of the following parameters, based on the rule type:</p>
 *          <ul>
 *             <li>
 *                <p>CidrIpv4</p>
 *             </li>
 *             <li>
 *                <p>CidrIpv6</p>
 *             </li>
 *             <li>
 *                <p>PrefixListId</p>
 *             </li>
 *             <li>
 *                <p>ReferencedGroupId</p>
 *             </li>
 *          </ul>
 *          <p>When you modify a rule, you cannot change the rule type. For example, if the rule
 *             uses an IPv4 address range, you must use <code>CidrIpv4</code> to specify a new IPv4
 *             address range.</p>
 */
export interface SecurityGroupRuleRequest {
  /**
   * @public
   * <p>The IP protocol name (<code>tcp</code>, <code>udp</code>, <code>icmp</code>,
   *                 <code>icmpv6</code>) or number (see <a href="http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers</a>). </p>
   *          <p>Use <code>-1</code> to specify all protocols.</p>
   */
  IpProtocol?: string;

  /**
   * @public
   * <p>If the protocol is TCP or UDP, this is the start of the port range.
   *             If the protocol is ICMP or ICMPv6, this is the type number. A value of -1 indicates all ICMP/ICMPv6 types.
   *             If you specify all ICMP/ICMPv6 types, you must specify all ICMP/ICMPv6 codes.</p>
   */
  FromPort?: number;

  /**
   * @public
   * <p>If the protocol is TCP or UDP, this is the end of the port range.
   *             If the protocol is ICMP or ICMPv6, this is the code. A value of -1 indicates all ICMP/ICMPv6 codes.
   *             If you specify all ICMP/ICMPv6 types, you must specify all ICMP/ICMPv6 codes.</p>
   */
  ToPort?: number;

  /**
   * @public
   * <p>The IPv4 CIDR range. To specify a single IPv4 address, use the /32 prefix length. </p>
   */
  CidrIpv4?: string;

  /**
   * @public
   * <p>The IPv6 CIDR range. To specify a single IPv6 address, use the /128 prefix length.</p>
   */
  CidrIpv6?: string;

  /**
   * @public
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId?: string;

  /**
   * @public
   * <p>The ID of the security group that is referenced in the security group rule.</p>
   */
  ReferencedGroupId?: string;

  /**
   * @public
   * <p>The description of the security group rule.</p>
   */
  Description?: string;
}

/**
 * @public
 * <p>Describes an update to a security group rule.</p>
 */
export interface SecurityGroupRuleUpdate {
  /**
   * @public
   * <p>The ID of the security group rule.</p>
   */
  SecurityGroupRuleId: string | undefined;

  /**
   * @public
   * <p>Information about the security group rule.</p>
   */
  SecurityGroupRule?: SecurityGroupRuleRequest;
}

/**
 * @public
 */
export interface ModifySecurityGroupRulesRequest {
  /**
   * @public
   * <p>The ID of the security group.</p>
   */
  GroupId: string | undefined;

  /**
   * @public
   * <p>Information about the security group properties to update.</p>
   */
  SecurityGroupRules: SecurityGroupRuleUpdate[] | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface ModifySecurityGroupRulesResult {
  /**
   * @public
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   */
  Return?: boolean;
}

/**
 * @public
 * <p>Describes modifications to the list of create volume permissions for a volume.</p>
 */
export interface CreateVolumePermissionModifications {
  /**
   * @public
   * <p>Adds the specified Amazon Web Services account ID or group to the list.</p>
   */
  Add?: CreateVolumePermission[];

  /**
   * @public
   * <p>Removes the specified Amazon Web Services account ID or group from the list.</p>
   */
  Remove?: CreateVolumePermission[];
}

/**
 * @public
 */
export interface ModifySnapshotAttributeRequest {
  /**
   * @public
   * <p>The snapshot attribute to modify. Only volume creation permissions can be modified.</p>
   */
  Attribute?: SnapshotAttributeName;

  /**
   * @public
   * <p>A JSON representation of the snapshot attribute modification.</p>
   */
  CreateVolumePermission?: CreateVolumePermissionModifications;

  /**
   * @public
   * <p>The group to modify for the snapshot.</p>
   */
  GroupNames?: string[];

  /**
   * @public
   * <p>The type of operation to perform to the attribute.</p>
   */
  OperationType?: OperationType;

  /**
   * @public
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId: string | undefined;

  /**
   * @public
   * <p>The account ID to modify for the snapshot.</p>
   */
  UserIds?: string[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * @enum
 */
export const TargetStorageTier = {
  archive: "archive",
} as const;

/**
 * @public
 */
export type TargetStorageTier = (typeof TargetStorageTier)[keyof typeof TargetStorageTier];

/**
 * @public
 */
export interface ModifySnapshotTierRequest {
  /**
   * @public
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId: string | undefined;

  /**
   * @public
   * <p>The name of the storage tier. You must specify <code>archive</code>.</p>
   */
  StorageTier?: TargetStorageTier;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface ModifySnapshotTierResult {
  /**
   * @public
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * @public
   * <p>The date and time when the archive process was started.</p>
   */
  TieringStartTime?: Date;
}

/**
 * @public
 * <p>Contains the parameters for ModifySpotFleetRequest.</p>
 */
export interface ModifySpotFleetRequestRequest {
  /**
   * @public
   * <p>Indicates whether running instances should be terminated if the target capacity
   *             of the Spot Fleet request is decreased below the current size of the Spot Fleet.</p>
   *          <p>Supported only for fleets of type <code>maintain</code>.</p>
   */
  ExcessCapacityTerminationPolicy?: ExcessCapacityTerminationPolicy;

  /**
   * @public
   * <p>The launch template and overrides. You can only use this parameter if you specified a
   *             launch template (<code>LaunchTemplateConfigs</code>) in your Spot Fleet request. If you
   *             specified <code>LaunchSpecifications</code> in your Spot Fleet request, then omit this
   *             parameter.</p>
   */
  LaunchTemplateConfigs?: LaunchTemplateConfig[];

  /**
   * @public
   * <p>The ID of the Spot Fleet request.</p>
   */
  SpotFleetRequestId: string | undefined;

  /**
   * @public
   * <p>The size of the fleet.</p>
   */
  TargetCapacity?: number;

  /**
   * @public
   * <p>The number of On-Demand Instances in the fleet.</p>
   */
  OnDemandTargetCapacity?: number;

  /**
   * @public
   * <p>Reserved.</p>
   */
  Context?: string;
}

/**
 * @public
 * <p>Contains the output of ModifySpotFleetRequest.</p>
 */
export interface ModifySpotFleetRequestResponse {
  /**
   * @public
   * <p>If the request succeeds, the response returns <code>true</code>. If the request fails,
   *             no response is returned, and instead an error message is returned.</p>
   */
  Return?: boolean;
}

/**
 * @public
 */
export interface ModifySubnetAttributeRequest {
  /**
   * @public
   * <p>Specify <code>true</code> to indicate that network interfaces created in the
   *             specified subnet should be assigned an IPv6 address. This includes a network interface
   *             that's created when launching an instance into the subnet (the instance therefore
   *             receives an IPv6 address). </p>
   *          <p>If you enable the IPv6 addressing feature for your subnet, your network interface
   *             or instance only receives an IPv6 address if it's created using version
   *                 <code>2016-11-15</code> or later of the Amazon EC2 API.</p>
   */
  AssignIpv6AddressOnCreation?: AttributeBooleanValue;

  /**
   * @public
   * <p>Specify <code>true</code> to indicate that network interfaces attached to instances created in the
   *             specified subnet should be assigned a public IPv4 address.</p>
   */
  MapPublicIpOnLaunch?: AttributeBooleanValue;

  /**
   * @public
   * <p>The ID of the subnet.</p>
   */
  SubnetId: string | undefined;

  /**
   * @public
   * <p>Specify <code>true</code> to indicate that network interfaces  attached to instances created in the
   *             specified subnet should be assigned a customer-owned IPv4 address.</p>
   *          <p>When this value is <code>true</code>, you must specify the customer-owned IP pool using <code>CustomerOwnedIpv4Pool</code>.</p>
   */
  MapCustomerOwnedIpOnLaunch?: AttributeBooleanValue;

  /**
   * @public
   * <p>The customer-owned IPv4 address pool associated with the subnet.</p>
   *          <p>You must set this value when you specify <code>true</code> for <code>MapCustomerOwnedIpOnLaunch</code>.</p>
   */
  CustomerOwnedIpv4Pool?: string;

  /**
   * @public
   * <p>Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet
   *             should return synthetic IPv6 addresses for IPv4-only destinations.</p>
   */
  EnableDns64?: AttributeBooleanValue;

  /**
   * @public
   * <p>The type of hostname to assign to instances in the subnet at launch. For IPv4-only and dual-stack (IPv4 and IPv6) subnets, an
   *             instance DNS name can be based on the instance IPv4 address (ip-name) or the instance ID (resource-name). For IPv6 only subnets, an instance
   *             DNS name must be based on the instance ID (resource-name).</p>
   */
  PrivateDnsHostnameTypeOnLaunch?: HostnameType;

  /**
   * @public
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS A records.</p>
   */
  EnableResourceNameDnsARecordOnLaunch?: AttributeBooleanValue;

  /**
   * @public
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.</p>
   */
  EnableResourceNameDnsAAAARecordOnLaunch?: AttributeBooleanValue;

  /**
   * @public
   * <p>
   *             Indicates the device position for local network interfaces in this subnet. For example,
   *             <code>1</code> indicates local network interfaces in this subnet are the secondary
   *             network interface (eth1). A local network interface cannot be the primary network
   *             interface (eth0).
   *         </p>
   */
  EnableLniAtDeviceIndex?: number;

  /**
   * @public
   * <p>
   *             Specify <code>true</code> to indicate that local network interfaces at the current
   *             position should be disabled.
   *         </p>
   */
  DisableLniAtDeviceIndex?: AttributeBooleanValue;
}

/**
 * @public
 */
export interface ModifyTrafficMirrorFilterNetworkServicesRequest {
  /**
   * @public
   * <p>The ID of the Traffic Mirror filter.</p>
   */
  TrafficMirrorFilterId: string | undefined;

  /**
   * @public
   * <p>The network service, for example Amazon DNS, that you want to mirror.</p>
   */
  AddNetworkServices?: TrafficMirrorNetworkService[];

  /**
   * @public
   * <p>The network service, for example Amazon DNS, that you no longer want to mirror.</p>
   */
  RemoveNetworkServices?: TrafficMirrorNetworkService[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface ModifyTrafficMirrorFilterNetworkServicesResult {
  /**
   * @public
   * <p>The Traffic Mirror filter that the network service is associated with.</p>
   */
  TrafficMirrorFilter?: TrafficMirrorFilter;
}

/**
 * @public
 * @enum
 */
export const TrafficMirrorFilterRuleField = {
  description: "description",
  destination_port_range: "destination-port-range",
  protocol: "protocol",
  source_port_range: "source-port-range",
} as const;

/**
 * @public
 */
export type TrafficMirrorFilterRuleField =
  (typeof TrafficMirrorFilterRuleField)[keyof typeof TrafficMirrorFilterRuleField];

/**
 * @public
 */
export interface ModifyTrafficMirrorFilterRuleRequest {
  /**
   * @public
   * <p>The ID of the Traffic Mirror rule.</p>
   */
  TrafficMirrorFilterRuleId: string | undefined;

  /**
   * @public
   * <p>The type of traffic to assign to the rule.</p>
   */
  TrafficDirection?: TrafficDirection;

  /**
   * @public
   * <p>The number of the Traffic Mirror rule. This number must be unique for each Traffic Mirror rule in a given
   *          direction. The rules are processed in ascending order by rule number.</p>
   */
  RuleNumber?: number;

  /**
   * @public
   * <p>The action to assign to the rule.</p>
   */
  RuleAction?: TrafficMirrorRuleAction;

  /**
   * @public
   * <p>The destination ports that are associated with the Traffic Mirror rule.</p>
   */
  DestinationPortRange?: TrafficMirrorPortRangeRequest;

  /**
   * @public
   * <p>The port range to assign to the Traffic Mirror rule.</p>
   */
  SourcePortRange?: TrafficMirrorPortRangeRequest;

  /**
   * @public
   * <p>The protocol, for example TCP, to assign to the Traffic Mirror rule.</p>
   */
  Protocol?: number;

  /**
   * @public
   * <p>The destination CIDR block to assign to the Traffic Mirror rule.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * @public
   * <p>The source CIDR block to assign to the Traffic Mirror rule.</p>
   */
  SourceCidrBlock?: string;

  /**
   * @public
   * <p>The description to assign to the Traffic Mirror rule.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The properties that you want to remove from the Traffic Mirror filter rule.</p>
   *          <p>When you remove a property from a Traffic Mirror filter rule, the property is set to the default.</p>
   */
  RemoveFields?: TrafficMirrorFilterRuleField[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface ModifyTrafficMirrorFilterRuleResult {
  /**
   * @public
   * <p>Modifies a Traffic Mirror rule.</p>
   */
  TrafficMirrorFilterRule?: TrafficMirrorFilterRule;
}

/**
 * @public
 * @enum
 */
export const TrafficMirrorSessionField = {
  description: "description",
  packet_length: "packet-length",
  virtual_network_id: "virtual-network-id",
} as const;

/**
 * @public
 */
export type TrafficMirrorSessionField = (typeof TrafficMirrorSessionField)[keyof typeof TrafficMirrorSessionField];

/**
 * @public
 */
export interface ModifyTrafficMirrorSessionRequest {
  /**
   * @public
   * <p>The ID of the Traffic Mirror session.</p>
   */
  TrafficMirrorSessionId: string | undefined;

  /**
   * @public
   * <p>The Traffic Mirror target. The target must be in the same VPC as the source, or have a VPC peering connection with the source.</p>
   */
  TrafficMirrorTargetId?: string;

  /**
   * @public
   * <p>The ID of the Traffic Mirror filter.</p>
   */
  TrafficMirrorFilterId?: string;

  /**
   * @public
   * <p>The number of bytes in each packet to mirror. These are bytes after the VXLAN header. To mirror a subset, set this to the length (in bytes) to mirror. For example, if you set this value to 100, then the first 100 bytes that meet the filter criteria are copied to the target. Do not specify this parameter when you want to mirror the entire packet.</p>
   *          <p>For sessions with Network Load Balancer (NLB) traffic mirror targets, the default <code>PacketLength</code> will be set to 8500. Valid values are 1-8500. Setting a <code>PacketLength</code> greater than 8500 will result in an error response.</p>
   */
  PacketLength?: number;

  /**
   * @public
   * <p>The session number determines the order in which sessions are evaluated when an interface is used by multiple sessions. The first session with a matching filter is the one that mirrors the packets.</p>
   *          <p>Valid values are 1-32766.</p>
   */
  SessionNumber?: number;

  /**
   * @public
   * <p>The virtual network ID of the Traffic Mirror session.</p>
   */
  VirtualNetworkId?: number;

  /**
   * @public
   * <p>The description to assign to the Traffic Mirror session.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The properties that you want to remove from the Traffic Mirror session.</p>
   *          <p>When you remove a property from a Traffic Mirror session, the property is set to the default.</p>
   */
  RemoveFields?: TrafficMirrorSessionField[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface ModifyTrafficMirrorSessionResult {
  /**
   * @public
   * <p>Information about the Traffic Mirror session.</p>
   */
  TrafficMirrorSession?: TrafficMirrorSession;
}

/**
 * @public
 * <p>The transit gateway options.</p>
 */
export interface ModifyTransitGatewayOptions {
  /**
   * @public
   * <p>Adds IPv4 or IPv6 CIDR blocks for the transit gateway. Must be a size /24 CIDR block or larger for IPv4, or a size /64 CIDR block or larger for IPv6.</p>
   */
  AddTransitGatewayCidrBlocks?: string[];

  /**
   * @public
   * <p>Removes CIDR blocks for the transit gateway.</p>
   */
  RemoveTransitGatewayCidrBlocks?: string[];

  /**
   * @public
   * <p>Enable or disable Equal Cost Multipath Protocol support.</p>
   */
  VpnEcmpSupport?: VpnEcmpSupportValue;

  /**
   * @public
   * <p>Enable or disable DNS support.</p>
   */
  DnsSupport?: DnsSupportValue;

  /**
   * @public
   * <p>Enables you to reference a security group across VPCs attached to a transit gateway (TGW). Use this option to simplify security group management and control of instance-to-instance traffic across VPCs that are connected by transit gateway. You can also use this option to migrate from VPC peering (which was the only option that supported security group referencing) to transit gateways (which now also support security group referencing). This option is disabled by default and there are no additional costs to use this feature.</p>
   *          <p>For important information about this feature, see <a href="https://docs.aws.amazon.com/vpc/latest/tgw/tgw-transit-gateways.html#create-tgw">Create a transit gateway</a> in the <i>Amazon Web Services Transit Gateway Guide</i>.</p>
   */
  SecurityGroupReferencingSupport?: SecurityGroupReferencingSupportValue;

  /**
   * @public
   * <p>Enable or disable automatic acceptance of attachment requests.</p>
   */
  AutoAcceptSharedAttachments?: AutoAcceptSharedAttachmentsValue;

  /**
   * @public
   * <p>Enable or disable automatic association with the default association route table.</p>
   */
  DefaultRouteTableAssociation?: DefaultRouteTableAssociationValue;

  /**
   * @public
   * <p>The ID of the default association route table.</p>
   */
  AssociationDefaultRouteTableId?: string;

  /**
   * @public
   * <p>Enable or disable automatic propagation of routes to the default propagation route table.</p>
   */
  DefaultRouteTablePropagation?: DefaultRouteTablePropagationValue;

  /**
   * @public
   * <p>The ID of the default propagation route table.</p>
   */
  PropagationDefaultRouteTableId?: string;

  /**
   * @public
   * <p>A private Autonomous System Number (ASN) for the Amazon side of a BGP session.
   *             The range is 64512 to 65534 for 16-bit ASNs and 4200000000 to 4294967294 for 32-bit ASNs.</p>
   *          <p>The modify ASN operation is not allowed on a transit gateway with active BGP sessions. You must first delete all transit gateway attachments that have BGP configured prior to modifying the ASN on the transit gateway.</p>
   */
  AmazonSideAsn?: number;
}

/**
 * @public
 */
export interface ModifyTransitGatewayRequest {
  /**
   * @public
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId: string | undefined;

  /**
   * @public
   * <p>The description for the transit gateway.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The options to modify.</p>
   */
  Options?: ModifyTransitGatewayOptions;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface ModifyTransitGatewayResult {
  /**
   * @public
   * <p>Information about the transit gateway.</p>
   */
  TransitGateway?: TransitGateway;
}

/**
 * @public
 */
export interface ModifyTransitGatewayPrefixListReferenceRequest {
  /**
   * @public
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * @public
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId: string | undefined;

  /**
   * @public
   * <p>The ID of the attachment to which traffic is routed.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * @public
   * <p>Indicates whether to drop traffic that matches this route.</p>
   */
  Blackhole?: boolean;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface ModifyTransitGatewayPrefixListReferenceResult {
  /**
   * @public
   * <p>Information about the prefix list reference.</p>
   */
  TransitGatewayPrefixListReference?: TransitGatewayPrefixListReference;
}

/**
 * @public
 * <p>Describes the options for a VPC attachment.</p>
 */
export interface ModifyTransitGatewayVpcAttachmentRequestOptions {
  /**
   * @public
   * <p>Enable or disable DNS support. The default is <code>enable</code>.</p>
   */
  DnsSupport?: DnsSupportValue;

  /**
   * @public
   * <p>Enables you to reference a security group across VPCs attached to a transit gateway (TGW). Use this option to simplify security group management and control of instance-to-instance traffic across VPCs that are connected by transit gateway. You can also use this option to migrate from VPC peering (which was the only option that supported security group referencing) to transit gateways (which now also support security group referencing). This option is disabled by default and there are no additional costs to use this feature.</p>
   *          <p>For important information about this feature, see <a href="https://docs.aws.amazon.com/vpc/latest/tgw/tgw-vpc-attachments.html#create-vpc-attachment">Create a transit gateway attachment to a VPC</a> in the <i>Amazon Web Services Transit Gateway Guide</i>.</p>
   */
  SecurityGroupReferencingSupport?: SecurityGroupReferencingSupportValue;

  /**
   * @public
   * <p>Enable or disable IPv6 support. The default is <code>enable</code>.</p>
   */
  Ipv6Support?: Ipv6SupportValue;

  /**
   * @public
   * <p>Enable or disable support for appliance mode. If enabled, a traffic flow between a source and destination uses the same Availability Zone for the VPC attachment for the lifetime of that flow. The default is <code>disable</code>.</p>
   */
  ApplianceModeSupport?: ApplianceModeSupportValue;
}

/**
 * @public
 */
export interface ModifyTransitGatewayVpcAttachmentRequest {
  /**
   * @public
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * @public
   * <p>The IDs of one or more subnets to add. You can specify at most one subnet per Availability Zone.</p>
   */
  AddSubnetIds?: string[];

  /**
   * @public
   * <p>The IDs of one or more subnets to remove.</p>
   */
  RemoveSubnetIds?: string[];

  /**
   * @public
   * <p>The new VPC attachment options.</p>
   */
  Options?: ModifyTransitGatewayVpcAttachmentRequestOptions;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface ModifyTransitGatewayVpcAttachmentResult {
  /**
   * @public
   * <p>Information about the modified attachment.</p>
   */
  TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment;
}

/**
 * @public
 * <p>Describes a load balancer when creating an Amazon Web Services Verified Access endpoint using the
 *             <code>load-balancer</code> type.</p>
 */
export interface ModifyVerifiedAccessEndpointLoadBalancerOptions {
  /**
   * @public
   * <p>The IDs of the subnets.</p>
   */
  SubnetIds?: string[];

  /**
   * @public
   * <p>The IP protocol.</p>
   */
  Protocol?: VerifiedAccessEndpointProtocol;

  /**
   * @public
   * <p>The IP port number.</p>
   */
  Port?: number;
}

/**
 * @public
 * <p>Describes the options when modifying a Verified Access endpoint with the
 *             <code>network-interface</code> type.</p>
 */
export interface ModifyVerifiedAccessEndpointEniOptions {
  /**
   * @public
   * <p>The IP protocol.</p>
   */
  Protocol?: VerifiedAccessEndpointProtocol;

  /**
   * @public
   * <p>The IP port number.</p>
   */
  Port?: number;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessEndpointRequest {
  /**
   * @public
   * <p>The ID of the Verified Access endpoint.</p>
   */
  VerifiedAccessEndpointId: string | undefined;

  /**
   * @public
   * <p>The ID of the Verified Access group.</p>
   */
  VerifiedAccessGroupId?: string;

  /**
   * @public
   * <p>The load balancer details if creating the Verified Access endpoint as
   *          <code>load-balancer</code>type.</p>
   */
  LoadBalancerOptions?: ModifyVerifiedAccessEndpointLoadBalancerOptions;

  /**
   * @public
   * <p>The network interface options.</p>
   */
  NetworkInterfaceOptions?: ModifyVerifiedAccessEndpointEniOptions;

  /**
   * @public
   * <p>A description for the Verified Access endpoint.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessEndpointResult {
  /**
   * @public
   * <p>Details about the Verified Access endpoint.</p>
   */
  VerifiedAccessEndpoint?: VerifiedAccessEndpoint;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessEndpointPolicyRequest {
  /**
   * @public
   * <p>The ID of the Verified Access endpoint.</p>
   */
  VerifiedAccessEndpointId: string | undefined;

  /**
   * @public
   * <p>The status of the Verified Access policy.</p>
   */
  PolicyEnabled?: boolean;

  /**
   * @public
   * <p>The Verified Access policy document.</p>
   */
  PolicyDocument?: string;

  /**
   * @public
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The options for server side encryption.</p>
   */
  SseSpecification?: VerifiedAccessSseSpecificationRequest;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessEndpointPolicyResult {
  /**
   * @public
   * <p>The status of the Verified Access policy.</p>
   */
  PolicyEnabled?: boolean;

  /**
   * @public
   * <p>The Verified Access policy document.</p>
   */
  PolicyDocument?: string;

  /**
   * @public
   * <p>The options in use for server side encryption.</p>
   */
  SseSpecification?: VerifiedAccessSseSpecificationResponse;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessGroupRequest {
  /**
   * @public
   * <p>The ID of the Verified Access group.</p>
   */
  VerifiedAccessGroupId: string | undefined;

  /**
   * @public
   * <p>The ID of the Verified Access instance.</p>
   */
  VerifiedAccessInstanceId?: string;

  /**
   * @public
   * <p>A description for the Verified Access group.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessGroupResult {
  /**
   * @public
   * <p>Details about the Verified Access group.</p>
   */
  VerifiedAccessGroup?: VerifiedAccessGroup;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessGroupPolicyRequest {
  /**
   * @public
   * <p>The ID of the Verified Access group.</p>
   */
  VerifiedAccessGroupId: string | undefined;

  /**
   * @public
   * <p>The status of the Verified Access policy.</p>
   */
  PolicyEnabled?: boolean;

  /**
   * @public
   * <p>The Verified Access policy document.</p>
   */
  PolicyDocument?: string;

  /**
   * @public
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The options for server side encryption.</p>
   */
  SseSpecification?: VerifiedAccessSseSpecificationRequest;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessGroupPolicyResult {
  /**
   * @public
   * <p>The status of the Verified Access policy.</p>
   */
  PolicyEnabled?: boolean;

  /**
   * @public
   * <p>The Verified Access policy document.</p>
   */
  PolicyDocument?: string;

  /**
   * @public
   * <p>The options in use for server side encryption.</p>
   */
  SseSpecification?: VerifiedAccessSseSpecificationResponse;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessInstanceRequest {
  /**
   * @public
   * <p>The ID of the Verified Access instance.</p>
   */
  VerifiedAccessInstanceId: string | undefined;

  /**
   * @public
   * <p>A description for the Verified Access instance.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessInstanceResult {
  /**
   * @public
   * <p>Details about the Verified Access instance.</p>
   */
  VerifiedAccessInstance?: VerifiedAccessInstance;
}

/**
 * @public
 * <p>Options for CloudWatch Logs as a logging destination.</p>
 */
export interface VerifiedAccessLogCloudWatchLogsDestinationOptions {
  /**
   * @public
   * <p>Indicates whether logging is enabled.</p>
   */
  Enabled: boolean | undefined;

  /**
   * @public
   * <p>The ID of the CloudWatch Logs log group.</p>
   */
  LogGroup?: string;
}

/**
 * @public
 * <p>Describes Amazon Kinesis Data Firehose logging options.</p>
 */
export interface VerifiedAccessLogKinesisDataFirehoseDestinationOptions {
  /**
   * @public
   * <p>Indicates whether logging is enabled.</p>
   */
  Enabled: boolean | undefined;

  /**
   * @public
   * <p>The ID of the delivery stream.</p>
   */
  DeliveryStream?: string;
}

/**
 * @public
 * <p>Options for Amazon S3 as a logging destination.</p>
 */
export interface VerifiedAccessLogS3DestinationOptions {
  /**
   * @public
   * <p>Indicates whether logging is enabled.</p>
   */
  Enabled: boolean | undefined;

  /**
   * @public
   * <p>The bucket name.</p>
   */
  BucketName?: string;

  /**
   * @public
   * <p>The bucket prefix.</p>
   */
  Prefix?: string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the Amazon S3 bucket.</p>
   */
  BucketOwner?: string;
}

/**
 * @public
 * <p>Options for Verified Access logs.</p>
 */
export interface VerifiedAccessLogOptions {
  /**
   * @public
   * <p>Sends Verified Access logs to Amazon S3.</p>
   */
  S3?: VerifiedAccessLogS3DestinationOptions;

  /**
   * @public
   * <p>Sends Verified Access logs to CloudWatch Logs.</p>
   */
  CloudWatchLogs?: VerifiedAccessLogCloudWatchLogsDestinationOptions;

  /**
   * @public
   * <p>Sends Verified Access logs to Kinesis.</p>
   */
  KinesisDataFirehose?: VerifiedAccessLogKinesisDataFirehoseDestinationOptions;

  /**
   * @public
   * <p>The logging version.</p>
   *          <p>Valid values: <code>ocsf-0.1</code> | <code>ocsf-1.0.0-rc.2</code>
   *          </p>
   */
  LogVersion?: string;

  /**
   * @public
   * <p>Indicates whether to include trust data sent by trust providers in the logs.</p>
   */
  IncludeTrustContext?: boolean;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessInstanceLoggingConfigurationRequest {
  /**
   * @public
   * <p>The ID of the Verified Access instance.</p>
   */
  VerifiedAccessInstanceId: string | undefined;

  /**
   * @public
   * <p>The configuration options for Verified Access instances.</p>
   */
  AccessLogs: VerifiedAccessLogOptions | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessInstanceLoggingConfigurationResult {
  /**
   * @public
   * <p>The logging configuration for the Verified Access instance.</p>
   */
  LoggingConfiguration?: VerifiedAccessInstanceLoggingConfiguration;
}

/**
 * @public
 * <p>Modifies the configuration of the specified device-based Amazon Web Services Verified Access trust provider.</p>
 */
export interface ModifyVerifiedAccessTrustProviderDeviceOptions {
  /**
   * @public
   * <p> The URL Amazon Web Services Verified Access will use to verify the authenticity of the device tokens. </p>
   */
  PublicSigningKeyUrl?: string;
}

/**
 * @public
 * <p>Options for an OpenID Connect-compatible user-identity trust provider.</p>
 */
export interface ModifyVerifiedAccessTrustProviderOidcOptions {
  /**
   * @public
   * <p>The OIDC issuer.</p>
   */
  Issuer?: string;

  /**
   * @public
   * <p>The OIDC authorization endpoint.</p>
   */
  AuthorizationEndpoint?: string;

  /**
   * @public
   * <p>The OIDC token endpoint.</p>
   */
  TokenEndpoint?: string;

  /**
   * @public
   * <p>The OIDC user info endpoint.</p>
   */
  UserInfoEndpoint?: string;

  /**
   * @public
   * <p>The client identifier.</p>
   */
  ClientId?: string;

  /**
   * @public
   * <p>The client secret.</p>
   */
  ClientSecret?: string;

  /**
   * @public
   * <p>OpenID Connect (OIDC) scopes are used by an application during authentication to authorize access to a user's details. Each scope returns a specific set of user attributes.</p>
   */
  Scope?: string;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessTrustProviderRequest {
  /**
   * @public
   * <p>The ID of the Verified Access trust provider.</p>
   */
  VerifiedAccessTrustProviderId: string | undefined;

  /**
   * @public
   * <p>The options for an OpenID Connect-compatible user-identity trust provider.</p>
   */
  OidcOptions?: ModifyVerifiedAccessTrustProviderOidcOptions;

  /**
   * @public
   * <p>The options for a device-based trust provider. This parameter is required when the
   *          provider type is <code>device</code>.</p>
   */
  DeviceOptions?: ModifyVerifiedAccessTrustProviderDeviceOptions;

  /**
   * @public
   * <p>A description for the Verified Access trust provider.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The options for server side encryption.</p>
   */
  SseSpecification?: VerifiedAccessSseSpecificationRequest;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessTrustProviderResult {
  /**
   * @public
   * <p>Details about the Verified Access trust provider.</p>
   */
  VerifiedAccessTrustProvider?: VerifiedAccessTrustProvider;
}

/**
 * @public
 */
export interface ModifyVolumeRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the volume.</p>
   */
  VolumeId: string | undefined;

  /**
   * @public
   * <p>The target size of the volume, in GiB. The target volume size must be greater than or
   *       equal to the existing size of the volume.</p>
   *          <p>The following are the supported volumes sizes for each volume type:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>gp2</code> and <code>gp3</code>: 1-16,384</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io1</code> and <code>io2</code>: 4-16,384</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>st1</code> and <code>sc1</code>: 125-16,384</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>standard</code>: 1-1,024</p>
   *             </li>
   *          </ul>
   *          <p>Default: The existing size is retained.</p>
   */
  Size?: number;

  /**
   * @public
   * <p>The target EBS volume type of the volume. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">Amazon EBS volume types</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <p>Default: The existing type is retained.</p>
   */
  VolumeType?: VolumeType;

  /**
   * @public
   * <p>The target IOPS rate of the volume. This parameter is valid only for <code>gp3</code>, <code>io1</code>, and <code>io2</code> volumes.</p>
   *          <p>The following are the supported values for each volume type:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>gp3</code>: 3,000-16,000 IOPS</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io1</code>: 100-64,000 IOPS</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io2</code>: 100-64,000 IOPS</p>
   *             </li>
   *          </ul>
   *          <p>Default: The existing value is retained if you keep the same volume type. If you change
   *       the volume type to <code>io1</code>, <code>io2</code>, or <code>gp3</code>, the default is 3,000.</p>
   */
  Iops?: number;

  /**
   * @public
   * <p>The target throughput of the volume, in MiB/s. This parameter is valid only for <code>gp3</code> volumes.
   *       The maximum value is 1,000.</p>
   *          <p>Default: The existing value is retained if the source and target volume type is <code>gp3</code>.
   *       Otherwise, the default value is 125.</p>
   *          <p>Valid Range: Minimum value of 125. Maximum value of 1000.</p>
   */
  Throughput?: number;

  /**
   * @public
   * <p>Specifies whether to enable Amazon EBS Multi-Attach. If you enable Multi-Attach, you can attach the
   * 		volume to up to 16 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">
   * 			Nitro-based instances</a> in the same Availability Zone. This parameter is
   * 		supported with <code>io1</code> and <code>io2</code> volumes only. For more information, see
   * 		<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volumes-multi.html">
   * 			Amazon EBS Multi-Attach</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  MultiAttachEnabled?: boolean;
}

/**
 * @public
 */
export interface ModifyVolumeResult {
  /**
   * @public
   * <p>Information about the volume modification.</p>
   */
  VolumeModification?: VolumeModification;
}

/**
 * @public
 */
export interface ModifyVolumeAttributeRequest {
  /**
   * @public
   * <p>Indicates whether the volume should be auto-enabled for I/O operations.</p>
   */
  AutoEnableIO?: AttributeBooleanValue;

  /**
   * @public
   * <p>The ID of the volume.</p>
   */
  VolumeId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface ModifyVpcAttributeRequest {
  /**
   * @public
   * <p>Indicates whether the instances launched in the VPC get DNS hostnames. If enabled, instances in the VPC get DNS hostnames; otherwise, they do not.</p>
   *          <p>You cannot modify the DNS resolution and DNS hostnames attributes in the same request. Use separate requests for each attribute. You can only enable DNS hostnames if you've enabled DNS support.</p>
   */
  EnableDnsHostnames?: AttributeBooleanValue;

  /**
   * @public
   * <p>Indicates whether the DNS resolution is supported for the VPC. If enabled, queries to
   * 			the Amazon provided DNS server at the 169.254.169.253 IP address, or the reserved IP
   * 			address at the base of the VPC network range "plus two" succeed. If disabled, the Amazon
   * 			provided DNS service in the VPC that resolves public DNS hostnames to IP addresses is
   * 			not enabled.</p>
   *          <p>You cannot modify the DNS resolution and DNS hostnames attributes in the same request. Use separate requests for each attribute.</p>
   */
  EnableDnsSupport?: AttributeBooleanValue;

  /**
   * @public
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * @public
   * <p>Indicates whether Network Address Usage metrics are enabled for your VPC.</p>
   */
  EnableNetworkAddressUsageMetrics?: AttributeBooleanValue;
}

/**
 * @public
 */
export interface ModifyVpcEndpointRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the endpoint.</p>
   */
  VpcEndpointId: string | undefined;

  /**
   * @public
   * <p>(Gateway endpoint) Specify <code>true</code> to reset the policy document to the
   *             default policy. The default policy allows full access to the service.</p>
   */
  ResetPolicy?: boolean;

  /**
   * @public
   * <p>(Interface and gateway endpoints) A policy to attach to the endpoint that controls access to the service. The policy must
   *             be in valid JSON format.</p>
   */
  PolicyDocument?: string;

  /**
   * @public
   * <p>(Gateway endpoint) The IDs of the route tables to associate with the endpoint.</p>
   */
  AddRouteTableIds?: string[];

  /**
   * @public
   * <p>(Gateway endpoint) The IDs of the route tables to disassociate from the endpoint.</p>
   */
  RemoveRouteTableIds?: string[];

  /**
   * @public
   * <p>(Interface and Gateway Load Balancer endpoints) The IDs of the subnets in which to serve the endpoint.
   *             For a Gateway Load Balancer endpoint, you can specify only one subnet.</p>
   */
  AddSubnetIds?: string[];

  /**
   * @public
   * <p>(Interface endpoint) The IDs of the subnets from which to remove the endpoint.</p>
   */
  RemoveSubnetIds?: string[];

  /**
   * @public
   * <p>(Interface endpoint) The IDs of the security groups to associate with the endpoint network interfaces.</p>
   */
  AddSecurityGroupIds?: string[];

  /**
   * @public
   * <p>(Interface endpoint) The IDs of the security groups to disassociate from the endpoint network interfaces.</p>
   */
  RemoveSecurityGroupIds?: string[];

  /**
   * @public
   * <p>The IP address type for the endpoint.</p>
   */
  IpAddressType?: IpAddressType;

  /**
   * @public
   * <p>The DNS options for the endpoint.</p>
   */
  DnsOptions?: DnsOptionsSpecification;

  /**
   * @public
   * <p>(Interface endpoint) Indicates whether a private hosted zone is associated with the VPC.</p>
   */
  PrivateDnsEnabled?: boolean;

  /**
   * @public
   * <p>The subnet configurations for the endpoint.</p>
   */
  SubnetConfigurations?: SubnetConfiguration[];
}

/**
 * @public
 */
export interface ModifyVpcEndpointResult {
  /**
   * @public
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

/**
 * @public
 */
export interface ModifyVpcEndpointConnectionNotificationRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the notification.</p>
   */
  ConnectionNotificationId: string | undefined;

  /**
   * @public
   * <p>The ARN for the SNS topic for the notification.</p>
   */
  ConnectionNotificationArn?: string;

  /**
   * @public
   * <p>The events for the endpoint. Valid values are <code>Accept</code>,
   *                 <code>Connect</code>, <code>Delete</code>, and <code>Reject</code>.</p>
   */
  ConnectionEvents?: string[];
}

/**
 * @public
 */
export interface ModifyVpcEndpointConnectionNotificationResult {
  /**
   * @public
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  ReturnValue?: boolean;
}

/**
 * @public
 */
export interface ModifyVpcEndpointServiceConfigurationRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the service.</p>
   */
  ServiceId: string | undefined;

  /**
   * @public
   * <p>(Interface endpoint configuration) The private DNS name to assign to the endpoint service.</p>
   */
  PrivateDnsName?: string;

  /**
   * @public
   * <p>(Interface endpoint configuration) Removes the private DNS name of the endpoint service.</p>
   */
  RemovePrivateDnsName?: boolean;

  /**
   * @public
   * <p>Indicates whether requests to create an endpoint to your service must be accepted.</p>
   */
  AcceptanceRequired?: boolean;

  /**
   * @public
   * <p>The Amazon Resource Names (ARNs) of Network Load Balancers to add to your service
   *             configuration.</p>
   */
  AddNetworkLoadBalancerArns?: string[];

  /**
   * @public
   * <p>The Amazon Resource Names (ARNs) of Network Load Balancers to remove from your service
   *             configuration.</p>
   */
  RemoveNetworkLoadBalancerArns?: string[];

  /**
   * @public
   * <p>The Amazon Resource Names (ARNs) of Gateway Load Balancers to add to your service
   *             configuration.</p>
   */
  AddGatewayLoadBalancerArns?: string[];

  /**
   * @public
   * <p>The Amazon Resource Names (ARNs) of Gateway Load Balancers to remove from your service
   *             configuration.</p>
   */
  RemoveGatewayLoadBalancerArns?: string[];

  /**
   * @public
   * <p>The IP address types to add to your service configuration.</p>
   */
  AddSupportedIpAddressTypes?: string[];

  /**
   * @public
   * <p>The IP address types to remove from your service configuration.</p>
   */
  RemoveSupportedIpAddressTypes?: string[];
}

/**
 * @public
 */
export interface ModifyVpcEndpointServiceConfigurationResult {
  /**
   * @public
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

/**
 * @public
 */
export interface ModifyVpcEndpointServicePayerResponsibilityRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the service.</p>
   */
  ServiceId: string | undefined;

  /**
   * @public
   * <p>The entity that is responsible for the endpoint costs. The default is the endpoint owner.
   *             If you set the payer responsibility to the service owner, you cannot set it back to the
   *             endpoint owner.</p>
   */
  PayerResponsibility: PayerResponsibility | undefined;
}

/**
 * @public
 */
export interface ModifyVpcEndpointServicePayerResponsibilityResult {
  /**
   * @public
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  ReturnValue?: boolean;
}

/**
 * @public
 */
export interface ModifyVpcEndpointServicePermissionsRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the service.</p>
   */
  ServiceId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Names (ARN) of the principals.
   * 	        Permissions are granted to the principals in this list.
   * 	        To grant permissions to all principals, specify an asterisk (*).</p>
   */
  AddAllowedPrincipals?: string[];

  /**
   * @public
   * <p>The Amazon Resource Names (ARN) of the principals.
   * 	        Permissions are revoked for principals in this list.</p>
   */
  RemoveAllowedPrincipals?: string[];
}

/**
 * @public
 */
export interface ModifyVpcEndpointServicePermissionsResult {
  /**
   * @public
   * <p>Information about the added principals.</p>
   */
  AddedPrincipals?: AddedPrincipal[];

  /**
   * @public
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  ReturnValue?: boolean;
}

/**
 * @public
 * <p>The VPC peering connection options.</p>
 */
export interface PeeringConnectionOptionsRequest {
  /**
   * @public
   * <p>If true, enables a local VPC to resolve public DNS hostnames to private IP addresses
   *         when queried from instances in the peer VPC.</p>
   */
  AllowDnsResolutionFromRemoteVpc?: boolean;

  /**
   * @public
   * <p>Deprecated.</p>
   */
  AllowEgressFromLocalClassicLinkToRemoteVpc?: boolean;

  /**
   * @public
   * <p>Deprecated.</p>
   */
  AllowEgressFromLocalVpcToRemoteClassicLink?: boolean;
}

/**
 * @public
 */
export interface ModifyVpcPeeringConnectionOptionsRequest {
  /**
   * @public
   * <p>The VPC peering connection options for the accepter VPC.</p>
   */
  AccepterPeeringConnectionOptions?: PeeringConnectionOptionsRequest;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The VPC peering connection options for the requester VPC.</p>
   */
  RequesterPeeringConnectionOptions?: PeeringConnectionOptionsRequest;

  /**
   * @public
   * <p>The ID of the VPC peering connection.</p>
   */
  VpcPeeringConnectionId: string | undefined;
}

/**
 * @public
 * <p>Describes the VPC peering connection options.</p>
 */
export interface PeeringConnectionOptions {
  /**
   * @public
   * <p>If true, the public DNS hostnames of instances in the specified VPC resolve to private
   *             IP addresses when queried from instances in the peer VPC.</p>
   */
  AllowDnsResolutionFromRemoteVpc?: boolean;

  /**
   * @public
   * <p>Deprecated.</p>
   */
  AllowEgressFromLocalClassicLinkToRemoteVpc?: boolean;

  /**
   * @public
   * <p>Deprecated.</p>
   */
  AllowEgressFromLocalVpcToRemoteClassicLink?: boolean;
}

/**
 * @public
 */
export interface ModifyVpcPeeringConnectionOptionsResult {
  /**
   * @public
   * <p>Information about the VPC peering connection options for the accepter VPC.</p>
   */
  AccepterPeeringConnectionOptions?: PeeringConnectionOptions;

  /**
   * @public
   * <p>Information about the VPC peering connection options for the requester VPC.</p>
   */
  RequesterPeeringConnectionOptions?: PeeringConnectionOptions;
}

/**
 * @public
 * @enum
 */
export const VpcTenancy = {
  default: "default",
} as const;

/**
 * @public
 */
export type VpcTenancy = (typeof VpcTenancy)[keyof typeof VpcTenancy];

/**
 * @public
 */
export interface ModifyVpcTenancyRequest {
  /**
   * @public
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * @public
   * <p>The instance tenancy attribute for the VPC. </p>
   */
  InstanceTenancy: VpcTenancy | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface ModifyVpcTenancyResult {
  /**
   * @public
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an
   *             error.</p>
   */
  ReturnValue?: boolean;
}

/**
 * @public
 */
export interface ModifyVpnConnectionRequest {
  /**
   * @public
   * <p>The ID of the VPN connection.</p>
   */
  VpnConnectionId: string | undefined;

  /**
   * @public
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * @public
   * <p>The ID of the customer gateway at your end of the VPN connection.</p>
   */
  CustomerGatewayId?: string;

  /**
   * @public
   * <p>The ID of the virtual private gateway at the Amazon Web Services side of the VPN
   *             connection.</p>
   */
  VpnGatewayId?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface ModifyVpnConnectionResult {
  /**
   * @public
   * <p>Information about the VPN connection.</p>
   */
  VpnConnection?: VpnConnection;
}

/**
 * @public
 */
export interface ModifyVpnConnectionOptionsRequest {
  /**
   * @public
   * <p>The ID of the Site-to-Site VPN connection. </p>
   */
  VpnConnectionId: string | undefined;

  /**
   * @public
   * <p>The IPv4 CIDR on the customer gateway (on-premises) side of the VPN connection.</p>
   *          <p>Default: <code>0.0.0.0/0</code>
   *          </p>
   */
  LocalIpv4NetworkCidr?: string;

  /**
   * @public
   * <p>The IPv4 CIDR on the Amazon Web Services side of the VPN connection.</p>
   *          <p>Default: <code>0.0.0.0/0</code>
   *          </p>
   */
  RemoteIpv4NetworkCidr?: string;

  /**
   * @public
   * <p>The IPv6 CIDR on the customer gateway (on-premises) side of the VPN connection.</p>
   *          <p>Default: <code>::/0</code>
   *          </p>
   */
  LocalIpv6NetworkCidr?: string;

  /**
   * @public
   * <p>The IPv6 CIDR on the Amazon Web Services side of the VPN connection.</p>
   *          <p>Default: <code>::/0</code>
   *          </p>
   */
  RemoteIpv6NetworkCidr?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface ModifyVpnConnectionOptionsResult {
  /**
   * @public
   * <p>Information about the VPN connection.</p>
   */
  VpnConnection?: VpnConnection;
}

/**
 * @public
 */
export interface ModifyVpnTunnelCertificateRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services Site-to-Site VPN connection.</p>
   */
  VpnConnectionId: string | undefined;

  /**
   * @public
   * <p>The external IP address of the VPN tunnel.</p>
   */
  VpnTunnelOutsideIpAddress: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface ModifyVpnTunnelCertificateResult {
  /**
   * @public
   * <p>Information about the VPN connection.</p>
   */
  VpnConnection?: VpnConnection;
}

/**
 * @public
 * <p>The Amazon Web Services Site-to-Site VPN tunnel options to modify.</p>
 */
export interface ModifyVpnTunnelOptionsSpecification {
  /**
   * @public
   * <p>The range of inside IPv4 addresses for the tunnel. Any specified CIDR blocks must be
   *             unique across all VPN connections that use the same virtual private gateway. </p>
   *          <p>Constraints: A size /30 CIDR block from the <code>169.254.0.0/16</code> range. The
   *             following CIDR blocks are reserved and cannot be used:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>169.254.0.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>169.254.1.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>169.254.2.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>169.254.3.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>169.254.4.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>169.254.5.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>169.254.169.252/30</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  TunnelInsideCidr?: string;

  /**
   * @public
   * <p>The range of inside IPv6 addresses for the tunnel. Any specified CIDR blocks must be
   *             unique across all VPN connections that use the same transit gateway.</p>
   *          <p>Constraints: A size /126 CIDR block from the local <code>fd00::/8</code> range.</p>
   */
  TunnelInsideIpv6Cidr?: string;

  /**
   * @public
   * <p>The pre-shared key (PSK) to establish initial authentication between the virtual
   *             private gateway and the customer gateway.</p>
   *          <p>Constraints: Allowed characters are alphanumeric characters, periods (.), and
   *             underscores (_). Must be between 8 and 64 characters in length and cannot start with
   *             zero (0).</p>
   */
  PreSharedKey?: string;

  /**
   * @public
   * <p>The lifetime for phase 1 of the IKE negotiation, in seconds.</p>
   *          <p>Constraints: A value between 900 and 28,800.</p>
   *          <p>Default: <code>28800</code>
   *          </p>
   */
  Phase1LifetimeSeconds?: number;

  /**
   * @public
   * <p>The lifetime for phase 2 of the IKE negotiation, in seconds.</p>
   *          <p>Constraints: A value between 900 and 3,600. The value must be less than the value for
   *                 <code>Phase1LifetimeSeconds</code>.</p>
   *          <p>Default: <code>3600</code>
   *          </p>
   */
  Phase2LifetimeSeconds?: number;

  /**
   * @public
   * <p>The margin time, in seconds, before the phase 2 lifetime expires, during which the
   *                 Amazon Web Services side of the VPN connection performs an IKE rekey. The exact time
   *             of the rekey is randomly selected based on the value for
   *                 <code>RekeyFuzzPercentage</code>.</p>
   *          <p>Constraints: A value between 60 and half of <code>Phase2LifetimeSeconds</code>.</p>
   *          <p>Default: <code>540</code>
   *          </p>
   */
  RekeyMarginTimeSeconds?: number;

  /**
   * @public
   * <p>The percentage of the rekey window (determined by <code>RekeyMarginTimeSeconds</code>)
   *             during which the rekey time is randomly selected.</p>
   *          <p>Constraints: A value between 0 and 100.</p>
   *          <p>Default: <code>100</code>
   *          </p>
   */
  RekeyFuzzPercentage?: number;

  /**
   * @public
   * <p>The number of packets in an IKE replay window.</p>
   *          <p>Constraints: A value between 64 and 2048.</p>
   *          <p>Default: <code>1024</code>
   *          </p>
   */
  ReplayWindowSize?: number;

  /**
   * @public
   * <p>The number of seconds after which a DPD timeout occurs. A DPD timeout of 40 seconds means that the VPN endpoint will consider the peer dead 30 seconds after the first failed keep-alive.</p>
   *          <p>Constraints: A value greater than or equal to 30.</p>
   *          <p>Default: <code>40</code>
   *          </p>
   */
  DPDTimeoutSeconds?: number;

  /**
   * @public
   * <p>The action to take after DPD timeout occurs. Specify <code>restart</code> to restart
   *             the IKE initiation. Specify <code>clear</code> to end the IKE session.</p>
   *          <p>Valid Values: <code>clear</code> | <code>none</code> | <code>restart</code>
   *          </p>
   *          <p>Default: <code>clear</code>
   *          </p>
   */
  DPDTimeoutAction?: string;

  /**
   * @public
   * <p>One or more encryption algorithms that are permitted for the VPN tunnel for phase 1
   *             IKE negotiations.</p>
   *          <p>Valid values: <code>AES128</code> | <code>AES256</code> | <code>AES128-GCM-16</code> |
   *                 <code>AES256-GCM-16</code>
   *          </p>
   */
  Phase1EncryptionAlgorithms?: Phase1EncryptionAlgorithmsRequestListValue[];

  /**
   * @public
   * <p>One or more encryption algorithms that are permitted for the VPN tunnel for phase 2
   *             IKE negotiations.</p>
   *          <p>Valid values: <code>AES128</code> | <code>AES256</code> | <code>AES128-GCM-16</code> |
   *                 <code>AES256-GCM-16</code>
   *          </p>
   */
  Phase2EncryptionAlgorithms?: Phase2EncryptionAlgorithmsRequestListValue[];

  /**
   * @public
   * <p>One or more integrity algorithms that are permitted for the VPN tunnel for phase 1 IKE
   *             negotiations.</p>
   *          <p>Valid values: <code>SHA1</code> | <code>SHA2-256</code> | <code>SHA2-384</code> |
   *                 <code>SHA2-512</code>
   *          </p>
   */
  Phase1IntegrityAlgorithms?: Phase1IntegrityAlgorithmsRequestListValue[];

  /**
   * @public
   * <p>One or more integrity algorithms that are permitted for the VPN tunnel for phase 2 IKE
   *             negotiations.</p>
   *          <p>Valid values: <code>SHA1</code> | <code>SHA2-256</code> | <code>SHA2-384</code> |
   *                 <code>SHA2-512</code>
   *          </p>
   */
  Phase2IntegrityAlgorithms?: Phase2IntegrityAlgorithmsRequestListValue[];

  /**
   * @public
   * <p>One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for
   *             phase 1 IKE negotiations.</p>
   *          <p>Valid values: <code>2</code> | <code>14</code> | <code>15</code> | <code>16</code> |
   *                 <code>17</code> | <code>18</code> | <code>19</code> | <code>20</code> |
   *                 <code>21</code> | <code>22</code> | <code>23</code> | <code>24</code>
   *          </p>
   */
  Phase1DHGroupNumbers?: Phase1DHGroupNumbersRequestListValue[];

  /**
   * @public
   * <p>One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for
   *             phase 2 IKE negotiations.</p>
   *          <p>Valid values: <code>2</code> | <code>5</code> | <code>14</code> | <code>15</code> |
   *                 <code>16</code> | <code>17</code> | <code>18</code> | <code>19</code> |
   *                 <code>20</code> | <code>21</code> | <code>22</code> | <code>23</code> |
   *                 <code>24</code>
   *          </p>
   */
  Phase2DHGroupNumbers?: Phase2DHGroupNumbersRequestListValue[];

  /**
   * @public
   * <p>The IKE versions that are permitted for the VPN tunnel.</p>
   *          <p>Valid values: <code>ikev1</code> | <code>ikev2</code>
   *          </p>
   */
  IKEVersions?: IKEVersionsRequestListValue[];

  /**
   * @public
   * <p>The action to take when the establishing the tunnel for the VPN connection. By
   *             default, your customer gateway device must initiate the IKE negotiation and bring up the
   *             tunnel. Specify <code>start</code> for Amazon Web Services to initiate the IKE
   *             negotiation.</p>
   *          <p>Valid Values: <code>add</code> | <code>start</code>
   *          </p>
   *          <p>Default: <code>add</code>
   *          </p>
   */
  StartupAction?: string;

  /**
   * @public
   * <p>Options for logging VPN tunnel activity.</p>
   */
  LogOptions?: VpnTunnelLogOptionsSpecification;

  /**
   * @public
   * <p>Turn on or off tunnel endpoint lifecycle control feature.</p>
   */
  EnableTunnelLifecycleControl?: boolean;
}

/**
 * @public
 */
export interface ModifyVpnTunnelOptionsRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services Site-to-Site VPN connection.</p>
   */
  VpnConnectionId: string | undefined;

  /**
   * @public
   * <p>The external IP address of the VPN tunnel.</p>
   */
  VpnTunnelOutsideIpAddress: string | undefined;

  /**
   * @public
   * <p>The tunnel options to modify.</p>
   */
  TunnelOptions: ModifyVpnTunnelOptionsSpecification | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>Choose whether or not to trigger immediate tunnel replacement. This is only applicable when turning on or off <code>EnableTunnelLifecycleControl</code>.</p>
   *          <p>Valid values: <code>True</code> | <code>False</code>
   *          </p>
   */
  SkipTunnelReplacement?: boolean;
}

/**
 * @public
 */
export interface ModifyVpnTunnelOptionsResult {
  /**
   * @public
   * <p>Information about the VPN connection.</p>
   */
  VpnConnection?: VpnConnection;
}

/**
 * @public
 */
export interface MonitorInstancesRequest {
  /**
   * @public
   * <p>The IDs of the instances.</p>
   */
  InstanceIds: string[] | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>Describes the monitoring of an instance.</p>
 */
export interface InstanceMonitoring {
  /**
   * @public
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>The monitoring for the instance.</p>
   */
  Monitoring?: Monitoring;
}

/**
 * @public
 */
export interface MonitorInstancesResult {
  /**
   * @public
   * <p>The monitoring information.</p>
   */
  InstanceMonitorings?: InstanceMonitoring[];
}

/**
 * @public
 */
export interface MoveAddressToVpcRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The Elastic IP address.</p>
   */
  PublicIp: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Status = {
  inClassic: "InClassic",
  inVpc: "InVpc",
  moveInProgress: "MoveInProgress",
} as const;

/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 */
export interface MoveAddressToVpcResult {
  /**
   * @public
   * <p>The allocation ID for the Elastic IP address.</p>
   */
  AllocationId?: string;

  /**
   * @public
   * <p>The status of the move of the IP address.</p>
   */
  Status?: Status;
}

/**
 * @public
 */
export interface MoveByoipCidrToIpamRequest {
  /**
   * @public
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The BYOIP CIDR.</p>
   */
  Cidr: string | undefined;

  /**
   * @public
   * <p>The IPAM pool ID.</p>
   */
  IpamPoolId: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services account ID of the owner of the IPAM pool.</p>
   */
  IpamPoolOwner: string | undefined;
}

/**
 * @public
 */
export interface MoveByoipCidrToIpamResult {
  /**
   * @public
   * <p>The BYOIP CIDR.</p>
   */
  ByoipCidr?: ByoipCidr;
}

/**
 * @public
 * <p>Provides authorization for Amazon to bring a specific IP address range to a specific
 *           Amazon Web Services account using bring your own IP addresses (BYOIP). For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html#prepare-for-byoip">Configuring your BYOIP address range</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export interface CidrAuthorizationContext {
  /**
   * @public
   * <p>The plain-text authorization message for the prefix and account.</p>
   */
  Message: string | undefined;

  /**
   * @public
   * <p>The signed authorization message for the prefix and account.</p>
   */
  Signature: string | undefined;
}

/**
 * @public
 */
export interface ProvisionByoipCidrRequest {
  /**
   * @public
   * <p>The public IPv4 or IPv6 address range, in CIDR notation. The most specific IPv4 prefix that you can
   *          specify is /24. The most specific IPv6 prefix you can specify is /56. The address range cannot overlap with another address range that you've
   *          brought to this or another Region.</p>
   */
  Cidr: string | undefined;

  /**
   * @public
   * <p>A signed document that proves that you are authorized to bring the specified IP address
   *          range to Amazon using BYOIP.</p>
   */
  CidrAuthorizationContext?: CidrAuthorizationContext;

  /**
   * @public
   * <p>(IPv6 only) Indicate whether the address range will be publicly advertised to the
   *             internet.</p>
   *          <p>Default: true</p>
   */
  PubliclyAdvertisable?: boolean;

  /**
   * @public
   * <p>A description for the address range and the address pool.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The tags to apply to the address pool.</p>
   */
  PoolTagSpecifications?: TagSpecification[];

  /**
   * @public
   * <p>Reserved.</p>
   */
  MultiRegion?: boolean;
}

/**
 * @public
 */
export interface ProvisionByoipCidrResult {
  /**
   * @public
   * <p>Information about the address range.</p>
   */
  ByoipCidr?: ByoipCidr;
}

/**
 * @public
 * <p>Provides authorization for Amazon to bring an Autonomous System Number (ASN) to a specific Amazon Web Services account using bring your own ASN (BYOASN).
 *             For details on the format of the message and signature, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/tutorials-byoasn.html">Tutorial: Bring your ASN to IPAM</a> in the <i>Amazon VPC IPAM guide</i>.</p>
 */
export interface AsnAuthorizationContext {
  /**
   * @public
   * <p>The authorization context's message.</p>
   */
  Message: string | undefined;

  /**
   * @public
   * <p>The authorization context's signature.</p>
   */
  Signature: string | undefined;
}

/**
 * @public
 */
export interface ProvisionIpamByoasnRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>An IPAM ID.</p>
   */
  IpamId: string | undefined;

  /**
   * @public
   * <p>A public 2-byte or 4-byte ASN.</p>
   */
  Asn: string | undefined;

  /**
   * @public
   * <p>An ASN authorization context.</p>
   */
  AsnAuthorizationContext: AsnAuthorizationContext | undefined;
}

/**
 * @public
 */
export interface ProvisionIpamByoasnResult {
  /**
   * @public
   * <p>An ASN and BYOIP CIDR association.</p>
   */
  Byoasn?: Byoasn;
}

/**
 * @public
 * <p>A signed document that proves that you are authorized to bring the specified IP address range to Amazon using BYOIP.</p>
 */
export interface IpamCidrAuthorizationContext {
  /**
   * @public
   * <p>The plain-text authorization message for the prefix and account.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>The signed authorization message for the prefix and account.</p>
   */
  Signature?: string;
}

/**
 * @public
 */
export interface ProvisionIpamPoolCidrRequest {
  /**
   * @public
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the IPAM pool to which you want to assign a CIDR.</p>
   */
  IpamPoolId: string | undefined;

  /**
   * @public
   * <p>The CIDR you want to assign to the IPAM pool. Either "NetmaskLength" or "Cidr" is required. This value will be null if you specify "NetmaskLength" and will be filled in during the provisioning process.</p>
   */
  Cidr?: string;

  /**
   * @public
   * <p>A signed document that proves that you are authorized to bring a specified IP address range to Amazon using BYOIP. This option applies to public pools only.</p>
   */
  CidrAuthorizationContext?: IpamCidrAuthorizationContext;

  /**
   * @public
   * <p>The netmask length of the CIDR you'd like to provision to a pool. Can be used for provisioning Amazon-provided IPv6 CIDRs to top-level pools and for provisioning CIDRs to pools with source pools. Cannot be used to provision BYOIP CIDRs to top-level pools. Either "NetmaskLength" or "Cidr" is required.</p>
   */
  NetmaskLength?: number;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface ProvisionIpamPoolCidrResult {
  /**
   * @public
   * <p>Information about the provisioned CIDR.</p>
   */
  IpamPoolCidr?: IpamPoolCidr;
}

/**
 * @public
 */
export interface ProvisionPublicIpv4PoolCidrRequest {
  /**
   * @public
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the IPAM pool you would like to use to allocate this CIDR.</p>
   */
  IpamPoolId: string | undefined;

  /**
   * @public
   * <p>The ID of the public IPv4 pool you would like to use for this CIDR.</p>
   */
  PoolId: string | undefined;

  /**
   * @public
   * <p>The netmask length of the CIDR you would like to allocate to the public IPv4 pool.</p>
   */
  NetmaskLength: number | undefined;
}

/**
 * @public
 */
export interface ProvisionPublicIpv4PoolCidrResult {
  /**
   * @public
   * <p>The ID of the pool that you want to provision the CIDR to.</p>
   */
  PoolId?: string;

  /**
   * @public
   * <p>Information about the address range of the public IPv4 pool.</p>
   */
  PoolAddressRange?: PublicIpv4PoolRange;
}

/**
 * @public
 */
export interface PurchaseCapacityBlockRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The tags to apply to the Capacity Block during launch.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * @public
   * <p>The ID of the Capacity Block offering.</p>
   */
  CapacityBlockOfferingId: string | undefined;

  /**
   * @public
   * <p>The type of operating system for which to reserve capacity.</p>
   */
  InstancePlatform: CapacityReservationInstancePlatform | undefined;
}

/**
 * @public
 */
export interface PurchaseCapacityBlockResult {
  /**
   * @public
   * <p>The Capacity Reservation.</p>
   */
  CapacityReservation?: CapacityReservation;
}

/**
 * @public
 */
export interface PurchaseHostReservationRequest {
  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The currency in which the <code>totalUpfrontPrice</code>, <code>LimitPrice</code>, and
   *                 <code>totalHourlyPrice</code> amounts are specified. At this time, the only
   *             supported currency is <code>USD</code>.</p>
   */
  CurrencyCode?: CurrencyCodeValues;

  /**
   * @public
   * <p>The IDs of the Dedicated Hosts with which the reservation will be associated.</p>
   */
  HostIdSet: string[] | undefined;

  /**
   * @public
   * <p>The specified limit is checked against the total upfront cost of the reservation
   *             (calculated as the offering's upfront cost multiplied by the host count). If the total
   *             upfront cost is greater than the specified price limit, the request fails. This is used
   *             to ensure that the purchase does not exceed the expected upfront cost of the purchase.
   *             At this time, the only supported currency is <code>USD</code>. For example, to indicate
   *             a limit price of USD 100, specify 100.00.</p>
   */
  LimitPrice?: string;

  /**
   * @public
   * <p>The ID of the offering.</p>
   */
  OfferingId: string | undefined;

  /**
   * @public
   * <p>The tags to apply to the Dedicated Host Reservation during purchase.</p>
   */
  TagSpecifications?: TagSpecification[];
}

/**
 * @public
 */
export interface PurchaseHostReservationResult {
  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The currency in which the <code>totalUpfrontPrice</code> and
   *                 <code>totalHourlyPrice</code> amounts are specified. At this time, the only
   *             supported currency is <code>USD</code>.</p>
   */
  CurrencyCode?: CurrencyCodeValues;

  /**
   * @public
   * <p>Describes the details of the purchase.</p>
   */
  Purchase?: Purchase[];

  /**
   * @public
   * <p>The total hourly price of the reservation calculated per hour.</p>
   */
  TotalHourlyPrice?: string;

  /**
   * @public
   * <p>The total amount charged to your account when you purchase the reservation.</p>
   */
  TotalUpfrontPrice?: string;
}

/**
 * @public
 * <p>Describes the limit price of a Reserved Instance offering.</p>
 */
export interface ReservedInstanceLimitPrice {
  /**
   * @public
   * <p>Used for Reserved Instance Marketplace offerings. Specifies the limit price on the total order (instanceCount * price).</p>
   */
  Amount?: number;

  /**
   * @public
   * <p>The currency in which the <code>limitPrice</code> amount is specified.
   * 				At this time, the only supported currency is <code>USD</code>.</p>
   */
  CurrencyCode?: CurrencyCodeValues;
}

/**
 * @public
 * <p>Contains the parameters for PurchaseReservedInstancesOffering.</p>
 */
export interface PurchaseReservedInstancesOfferingRequest {
  /**
   * @public
   * <p>The number of Reserved Instances to purchase.</p>
   */
  InstanceCount: number | undefined;

  /**
   * @public
   * <p>The ID of the Reserved Instance offering to purchase.</p>
   */
  ReservedInstancesOfferingId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>Specified for Reserved Instance Marketplace offerings to limit the total order and ensure that the Reserved Instances are not purchased at unexpected prices.</p>
   */
  LimitPrice?: ReservedInstanceLimitPrice;

  /**
   * @public
   * <p>The time at which to purchase the Reserved Instance, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  PurchaseTime?: Date;
}

/**
 * @public
 * <p>Contains the output of PurchaseReservedInstancesOffering.</p>
 */
export interface PurchaseReservedInstancesOfferingResult {
  /**
   * @public
   * <p>The IDs of the purchased Reserved Instances. If your purchase crosses into a discounted
   *       pricing tier, the final Reserved Instances IDs might change. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts-reserved-instances-application.html#crossing-pricing-tiers">Crossing
   *         pricing tiers</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  ReservedInstancesId?: string;
}

/**
 * @public
 * <p>Describes a request to purchase Scheduled Instances.</p>
 */
export interface PurchaseRequest {
  /**
   * @public
   * <p>The number of instances.</p>
   */
  InstanceCount: number | undefined;

  /**
   * @public
   * <p>The purchase token.</p>
   */
  PurchaseToken: string | undefined;
}

/**
 * @public
 * <p>Contains the parameters for PurchaseScheduledInstances.</p>
 */
export interface PurchaseScheduledInstancesRequest {
  /**
   * @public
   * <p>Unique, case-sensitive identifier that ensures the idempotency of the request.
   *          For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The purchase requests.</p>
   */
  PurchaseRequests: PurchaseRequest[] | undefined;
}

/**
 * @public
 * <p>Contains the output of PurchaseScheduledInstances.</p>
 */
export interface PurchaseScheduledInstancesResult {
  /**
   * @public
   * <p>Information about the Scheduled Instances.</p>
   */
  ScheduledInstanceSet?: ScheduledInstance[];
}

/**
 * @public
 */
export interface RebootInstancesRequest {
  /**
   * @public
   * <p>The instance IDs.</p>
   */
  InstanceIds: string[] | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>Contains the parameters for RegisterImage.</p>
 */
export interface RegisterImageRequest {
  /**
   * @public
   * <p>The full path to your AMI manifest in Amazon S3 storage. The specified bucket must have the
   *    		<code>aws-exec-read</code> canned access control list (ACL) to ensure that it can be accessed
   *    		by Amazon EC2. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl">Canned ACLs</a> in the
   *    		<i>Amazon S3 Service Developer Guide</i>.</p>
   */
  ImageLocation?: string;

  /**
   * @public
   * <p>The architecture of the AMI.</p>
   *          <p>Default: For Amazon EBS-backed AMIs, <code>i386</code>.
   *         For instance store-backed AMIs, the architecture specified in the manifest file.</p>
   */
  Architecture?: ArchitectureValues;

  /**
   * @public
   * <p>The block device mapping entries.</p>
   *          <p>If you specify an Amazon EBS volume using the ID of an Amazon EBS snapshot, you can't specify the encryption state of the volume.</p>
   *          <p>If you create an AMI on an Outpost, then all backing snapshots must be on the same
   *       Outpost or in the Region of that Outpost. AMIs on an Outpost that include local snapshots can
   *       be used to launch instances on the same Outpost only. For more information, <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshots-outposts.html#ami">Amazon EBS local
   *         snapshots on Outposts</a> in the <i>Amazon EC2 User Guide</i>.</p>
   */
  BlockDeviceMappings?: BlockDeviceMapping[];

  /**
   * @public
   * <p>A description for your AMI.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>Set to <code>true</code> to enable enhanced networking with ENA for the AMI and any instances that you launch from the AMI.</p>
   *          <p>This option is supported only for HVM AMIs. Specifying this option with a PV AMI can make instances launched from the AMI unreachable.</p>
   */
  EnaSupport?: boolean;

  /**
   * @public
   * <p>The ID of the kernel.</p>
   */
  KernelId?: string;

  /**
   * @public
   * <p>A name for your AMI.</p>
   *          <p>Constraints: 3-128 alphanumeric characters, parentheses (()), square brackets ([]), spaces ( ), periods (.), slashes (/), dashes (-), single quotes ('), at-signs (@), or underscores(_)</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The billing product codes. Your account must be authorized to specify billing product codes.</p>
   *          <p>If your account is not authorized to specify billing product codes, you can publish AMIs
   *       that include billable software and list them on the Amazon Web Services Marketplace. You must first register as a seller
   *       on the Amazon Web Services Marketplace. For more information, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/user-guide-for-sellers.html">Getting started as a
   *         seller</a> and <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/ami-products.html">AMI-based
   *         products</a> in the <i>Amazon Web Services Marketplace Seller Guide</i>.</p>
   */
  BillingProducts?: string[];

  /**
   * @public
   * <p>The ID of the RAM disk.</p>
   */
  RamdiskId?: string;

  /**
   * @public
   * <p>The device name of the root device volume (for example, <code>/dev/sda1</code>).</p>
   */
  RootDeviceName?: string;

  /**
   * @public
   * <p>Set to <code>simple</code> to enable enhanced networking with the Intel 82599 Virtual Function interface for the AMI and any instances that you launch from the AMI.</p>
   *          <p>There is no way to disable <code>sriovNetSupport</code> at this time.</p>
   *          <p>This option is supported only for HVM AMIs. Specifying this option with a PV AMI can make instances launched from the AMI unreachable.</p>
   */
  SriovNetSupport?: string;

  /**
   * @public
   * <p>The type of virtualization (<code>hvm</code> | <code>paravirtual</code>).</p>
   *          <p>Default: <code>paravirtual</code>
   *          </p>
   */
  VirtualizationType?: string;

  /**
   * @public
   * <p>The boot mode of the AMI. A value of <code>uefi-preferred</code> indicates that the AMI supports both UEFI and Legacy BIOS.</p>
   *          <note>
   *             <p>The operating system contained in the AMI must be configured to support the specified boot mode.</p>
   *          </note>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-boot.html">Boot modes</a> in the
   *         <i>Amazon EC2 User Guide</i>.</p>
   */
  BootMode?: BootModeValues;

  /**
   * @public
   * <p>Set to <code>v2.0</code> to enable Trusted Platform Module (TPM) support. For more
   *       information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nitrotpm.html">NitroTPM</a> in the <i>Amazon EC2 User Guide</i>.</p>
   */
  TpmSupport?: TpmSupportValues;

  /**
   * @public
   * <p>Base64 representation of the non-volatile UEFI variable store. To retrieve the UEFI data,
   *       use the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceUefiData">GetInstanceUefiData</a> command. You can inspect and modify the UEFI data by using the
   *         <a href="https://github.com/awslabs/python-uefivars">python-uefivars tool</a> on
   *       GitHub. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/uefi-secure-boot.html">UEFI Secure Boot</a> in the
   *         <i>Amazon EC2 User Guide</i>.</p>
   */
  UefiData?: string;

  /**
   * @public
   * <p>Set to <code>v2.0</code> to indicate that IMDSv2 is specified in the AMI. Instances
   *       launched from this AMI will have <code>HttpTokens</code> automatically set to
   *         <code>required</code> so that, by default, the instance requires that IMDSv2 is used when
   *       requesting instance metadata. In addition, <code>HttpPutResponseHopLimit</code> is set to
   *         <code>2</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-IMDS-new-instances.html#configure-IMDS-new-instances-ami-configuration">Configure
   *         the AMI</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <note>
   *             <p>If you set the value to <code>v2.0</code>, make sure that your AMI software can support IMDSv2.</p>
   *          </note>
   */
  ImdsSupport?: ImdsSupportValues;
}

/**
 * @public
 * <p>Contains the output of RegisterImage.</p>
 */
export interface RegisterImageResult {
  /**
   * @public
   * <p>The ID of the newly registered AMI.</p>
   */
  ImageId?: string;
}

/**
 * @public
 * <p>Information about the tag keys to register for the current Region. You can either specify
 *       	individual tag keys or register all tag keys in the current Region. You must specify either
 *       	<code>IncludeAllTagsOfInstance</code> or <code>InstanceTagKeys</code> in the request</p>
 */
export interface RegisterInstanceTagAttributeRequest {
  /**
   * @public
   * <p>Indicates whether to register all tag keys in the current Region. Specify <code>true</code>
   *       	to register all tag keys.</p>
   */
  IncludeAllTagsOfInstance?: boolean;

  /**
   * @public
   * <p>The tag keys to register.</p>
   */
  InstanceTagKeys?: string[];
}

/**
 * @public
 */
export interface RegisterInstanceEventNotificationAttributesRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>Information about the tag keys to register.</p>
   */
  InstanceTagAttribute: RegisterInstanceTagAttributeRequest | undefined;
}

/**
 * @public
 */
export interface RegisterInstanceEventNotificationAttributesResult {
  /**
   * @public
   * <p>The resulting set of tag keys.</p>
   */
  InstanceTagAttribute?: InstanceTagNotificationAttribute;
}

/**
 * @public
 */
export interface RegisterTransitGatewayMulticastGroupMembersRequest {
  /**
   * @public
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId: string | undefined;

  /**
   * @public
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   */
  GroupIpAddress?: string;

  /**
   * @public
   * <p>The group members' network interface IDs to register with the  transit gateway multicast group.</p>
   */
  NetworkInterfaceIds: string[] | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>Describes the registered  transit gateway multicast group members.</p>
 */
export interface TransitGatewayMulticastRegisteredGroupMembers {
  /**
   * @public
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * @public
   * <p>The ID of the registered network interfaces.</p>
   */
  RegisteredNetworkInterfaceIds?: string[];

  /**
   * @public
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   */
  GroupIpAddress?: string;
}

/**
 * @public
 */
export interface RegisterTransitGatewayMulticastGroupMembersResult {
  /**
   * @public
   * <p>Information about the registered  transit gateway multicast group members.</p>
   */
  RegisteredMulticastGroupMembers?: TransitGatewayMulticastRegisteredGroupMembers;
}

/**
 * @public
 */
export interface RegisterTransitGatewayMulticastGroupSourcesRequest {
  /**
   * @public
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId: string | undefined;

  /**
   * @public
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   */
  GroupIpAddress?: string;

  /**
   * @public
   * <p>The group sources' network interface IDs to register with the  transit gateway multicast group.</p>
   */
  NetworkInterfaceIds: string[] | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>Describes the members registered with the  transit gateway multicast group.</p>
 */
export interface TransitGatewayMulticastRegisteredGroupSources {
  /**
   * @public
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * @public
   * <p>The IDs of the network interfaces members registered with the  transit gateway multicast group.</p>
   */
  RegisteredNetworkInterfaceIds?: string[];

  /**
   * @public
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   */
  GroupIpAddress?: string;
}

/**
 * @internal
 */
export const GetLaunchTemplateDataResultFilterSensitiveLog = (obj: GetLaunchTemplateDataResult): any => ({
  ...obj,
  ...(obj.LaunchTemplateData && {
    LaunchTemplateData: ResponseLaunchTemplateDataFilterSensitiveLog(obj.LaunchTemplateData),
  }),
});

/**
 * @internal
 */
export const GetPasswordDataResultFilterSensitiveLog = (obj: GetPasswordDataResult): any => ({
  ...obj,
  ...(obj.PasswordData && { PasswordData: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetVpnConnectionDeviceSampleConfigurationResultFilterSensitiveLog = (
  obj: GetVpnConnectionDeviceSampleConfigurationResult
): any => ({
  ...obj,
  ...(obj.VpnConnectionDeviceSampleConfiguration && { VpnConnectionDeviceSampleConfiguration: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ImageDiskContainerFilterSensitiveLog = (obj: ImageDiskContainer): any => ({
  ...obj,
  ...(obj.Url && { Url: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ImportImageRequestFilterSensitiveLog = (obj: ImportImageRequest): any => ({
  ...obj,
  ...(obj.DiskContainers && {
    DiskContainers: obj.DiskContainers.map((item) => ImageDiskContainerFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ImportImageResultFilterSensitiveLog = (obj: ImportImageResult): any => ({
  ...obj,
  ...(obj.SnapshotDetails && {
    SnapshotDetails: obj.SnapshotDetails.map((item) => SnapshotDetailFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const DiskImageDetailFilterSensitiveLog = (obj: DiskImageDetail): any => ({
  ...obj,
  ...(obj.ImportManifestUrl && { ImportManifestUrl: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DiskImageFilterSensitiveLog = (obj: DiskImage): any => ({
  ...obj,
  ...(obj.Image && { Image: DiskImageDetailFilterSensitiveLog(obj.Image) }),
});

/**
 * @internal
 */
export const UserDataFilterSensitiveLog = (obj: UserData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportInstanceLaunchSpecificationFilterSensitiveLog = (obj: ImportInstanceLaunchSpecification): any => ({
  ...obj,
  ...(obj.UserData && { UserData: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ImportInstanceRequestFilterSensitiveLog = (obj: ImportInstanceRequest): any => ({
  ...obj,
  ...(obj.DiskImages && { DiskImages: obj.DiskImages.map((item) => DiskImageFilterSensitiveLog(item)) }),
  ...(obj.LaunchSpecification && {
    LaunchSpecification: ImportInstanceLaunchSpecificationFilterSensitiveLog(obj.LaunchSpecification),
  }),
});

/**
 * @internal
 */
export const ImportInstanceResultFilterSensitiveLog = (obj: ImportInstanceResult): any => ({
  ...obj,
  ...(obj.ConversionTask && { ConversionTask: ConversionTaskFilterSensitiveLog(obj.ConversionTask) }),
});

/**
 * @internal
 */
export const SnapshotDiskContainerFilterSensitiveLog = (obj: SnapshotDiskContainer): any => ({
  ...obj,
  ...(obj.Url && { Url: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ImportSnapshotRequestFilterSensitiveLog = (obj: ImportSnapshotRequest): any => ({
  ...obj,
  ...(obj.DiskContainer && { DiskContainer: SnapshotDiskContainerFilterSensitiveLog(obj.DiskContainer) }),
});

/**
 * @internal
 */
export const ImportSnapshotResultFilterSensitiveLog = (obj: ImportSnapshotResult): any => ({
  ...obj,
  ...(obj.SnapshotTaskDetail && { SnapshotTaskDetail: SnapshotTaskDetailFilterSensitiveLog(obj.SnapshotTaskDetail) }),
});

/**
 * @internal
 */
export const ImportVolumeRequestFilterSensitiveLog = (obj: ImportVolumeRequest): any => ({
  ...obj,
  ...(obj.Image && { Image: DiskImageDetailFilterSensitiveLog(obj.Image) }),
});

/**
 * @internal
 */
export const ImportVolumeResultFilterSensitiveLog = (obj: ImportVolumeResult): any => ({
  ...obj,
  ...(obj.ConversionTask && { ConversionTask: ConversionTaskFilterSensitiveLog(obj.ConversionTask) }),
});

/**
 * @internal
 */
export const ModifyVerifiedAccessTrustProviderOidcOptionsFilterSensitiveLog = (
  obj: ModifyVerifiedAccessTrustProviderOidcOptions
): any => ({
  ...obj,
  ...(obj.ClientSecret && { ClientSecret: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ModifyVerifiedAccessTrustProviderRequestFilterSensitiveLog = (
  obj: ModifyVerifiedAccessTrustProviderRequest
): any => ({
  ...obj,
  ...(obj.OidcOptions && {
    OidcOptions: ModifyVerifiedAccessTrustProviderOidcOptionsFilterSensitiveLog(obj.OidcOptions),
  }),
});

/**
 * @internal
 */
export const ModifyVerifiedAccessTrustProviderResultFilterSensitiveLog = (
  obj: ModifyVerifiedAccessTrustProviderResult
): any => ({
  ...obj,
  ...(obj.VerifiedAccessTrustProvider && {
    VerifiedAccessTrustProvider: VerifiedAccessTrustProviderFilterSensitiveLog(obj.VerifiedAccessTrustProvider),
  }),
});

/**
 * @internal
 */
export const ModifyVpnConnectionResultFilterSensitiveLog = (obj: ModifyVpnConnectionResult): any => ({
  ...obj,
  ...(obj.VpnConnection && { VpnConnection: VpnConnectionFilterSensitiveLog(obj.VpnConnection) }),
});

/**
 * @internal
 */
export const ModifyVpnConnectionOptionsResultFilterSensitiveLog = (obj: ModifyVpnConnectionOptionsResult): any => ({
  ...obj,
  ...(obj.VpnConnection && { VpnConnection: VpnConnectionFilterSensitiveLog(obj.VpnConnection) }),
});

/**
 * @internal
 */
export const ModifyVpnTunnelCertificateResultFilterSensitiveLog = (obj: ModifyVpnTunnelCertificateResult): any => ({
  ...obj,
  ...(obj.VpnConnection && { VpnConnection: VpnConnectionFilterSensitiveLog(obj.VpnConnection) }),
});

/**
 * @internal
 */
export const ModifyVpnTunnelOptionsSpecificationFilterSensitiveLog = (
  obj: ModifyVpnTunnelOptionsSpecification
): any => ({
  ...obj,
  ...(obj.PreSharedKey && { PreSharedKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ModifyVpnTunnelOptionsRequestFilterSensitiveLog = (obj: ModifyVpnTunnelOptionsRequest): any => ({
  ...obj,
  ...(obj.TunnelOptions && { TunnelOptions: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ModifyVpnTunnelOptionsResultFilterSensitiveLog = (obj: ModifyVpnTunnelOptionsResult): any => ({
  ...obj,
  ...(obj.VpnConnection && { VpnConnection: VpnConnectionFilterSensitiveLog(obj.VpnConnection) }),
});

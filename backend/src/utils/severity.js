const CRITICAL_ACTIONS = [
  "CreateUser",
  "DeleteUser",
  "AttachUserPolicy",
  "AttachRolePolicy",
  "PutUserPolicy",
  "PutRolePolicy",
  "CreateAccessKey",
  "UpdateAssumeRolePolicy",
  "DeleteRole",
  "DeletePolicy"
];

const HIGH_ACTIONS = [
  "AuthorizeSecurityGroupIngress",
  "AuthorizeSecurityGroupEgress",
  "RevokeSecurityGroupIngress",
  "RevokeSecurityGroupEgress",
  "ModifySecurityGroupRules",
  "DeleteSecurityGroup",
  "DeleteBucketPolicy",
  "PutBucketPolicy",
  "PutBucketAcl",
  "DeleteBucket"
];

const MEDIUM_ACTIONS = [
  "RunInstances",
  "StopInstances",
  "StartInstances",
  "TerminateInstances",
  "ModifyInstanceAttribute",
  "CreateSecurityGroup",
  "ModifySecurityGroupRules"
];

export function classifySeverity(action, service) {
  const normalizedAction = String(action || "").trim();

  const normalizedService = String(service || "")
    .trim()
    .toLowerCase();

  // IAM privilege/security changes
  if (
    normalizedService.includes("iam") &&
    CRITICAL_ACTIONS.includes(normalizedAction)
  ) {
    return "CRITICAL";
  }

  // Explicit critical actions regardless of service
  if (CRITICAL_ACTIONS.includes(normalizedAction)) {
    return "CRITICAL";
  }

  // High-risk security changes
  if (HIGH_ACTIONS.includes(normalizedAction)) {
    return "HIGH";
  }

  // Medium-risk compute/security operations
  if (MEDIUM_ACTIONS.includes(normalizedAction)) {
    return "MEDIUM";
  }

  // S3 bucket creation is considered low risk for this project
  if (
    normalizedService.includes("s3") &&
    normalizedAction === "CreateBucket"
  ) {
    return "LOW";
  }

  // Default
  return "LOW";
}

export default classifySeverity;
import {
  CloudTrailClient,
  LookupEventsCommand
} from "@aws-sdk/client-cloudtrail";

const client = new CloudTrailClient({
  region: process.env.AWS_REGION || "ap-southeast-2"
});

export async function fetchRecentEvents(eventName = null) {
  const input = {
    MaxResults: 50
  };

  // If an event name is provided, search specifically for it
  if (eventName) {
    input.LookupAttributes = [
      {
        AttributeKey: "EventName",
        AttributeValue: eventName
      }
    ];
  }

  const command = new LookupEventsCommand(input);
  const response = await client.send(command);

  return response.Events || [];
}
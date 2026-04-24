 import * as Sentry from "@sentry/node"


Sentry.init({
  dsn: "https://cd61a8aeb7809421f0bbeb2ef6f11af0@o4511228609232896.ingest.de.sentry.io/4511228625616976",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});
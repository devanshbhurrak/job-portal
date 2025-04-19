// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://e51d7b65c961e52b481d7cd2160ddaf0@o4509179353366528.ingest.de.sentry.io/4509179358347344",
  integrations: [
    Sentry.mongooseIntegration()
  ]
});
<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the LogOS Next.js App Router project. Here is a summary of all changes made:

- **`instrumentation-client.ts`** (new) — Initializes PostHog on the client side using the Next.js 15.3+ instrumentation pattern. Enables session replay, error tracking, and automatic pageview capture via a reverse proxy.
- **`next.config.ts`** — Added `/ingest` reverse proxy rewrites so PostHog requests are routed through the LogOS domain, improving ad-blocker resilience. Also set `skipTrailingSlashRedirect: true`.
- **`src/lib/posthog-server.ts`** (new) — Singleton PostHog Node.js client for server-side event capture in API routes.
- **`.env.local`** — `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` added.
- **`src/sections/landing/Newsletter.tsx`** — Captures `newsletter_subscribed` on success and `newsletter_subscription_failed` on error.
- **`src/sections/chat/ChatWidget.tsx`** — Captures `chat_widget_opened` when the floating widget is opened and `chat_message_sent` (with `source: "widget"`) on each send. Also captures exceptions on send failure.
- **`src/sections/chat/Chat.tsx`** — Captures `chat_message_sent` (with `source: "full_page"`) on each send. Also captures exceptions on send failure.
- **`src/sections/landing/DemoVideo.tsx`** — Captures `demo_video_played` (with `current_time`) when the user starts playing the demo video.
- **`src/providers/ChatProvider.tsx`** — Passes `X-POSTHOG-DISTINCT-ID` and `X-POSTHOG-SESSION-ID` headers to the chat API route for cross-domain user correlation.
- **`src/app/api/chat/route.ts`** — Server-side: captures `chat_api_completed` (with `locale`, `message_count`, `has_context`) on success and `chat_api_error` (with error message) on failure. Reads distinct/session ID from request headers.

## Events

| Event | Description | File |
|---|---|---|
| `newsletter_subscribed` | User successfully subscribed to the newsletter | `src/sections/landing/Newsletter.tsx` |
| `newsletter_subscription_failed` | Newsletter subscription attempt resulted in an error | `src/sections/landing/Newsletter.tsx` |
| `chat_widget_opened` | User opened the floating chat widget | `src/sections/chat/ChatWidget.tsx` |
| `chat_message_sent` | User sent a message in the chat widget (`source: "widget"`) | `src/sections/chat/ChatWidget.tsx` |
| `chat_message_sent` | User sent a message in the full-page chat (`source: "full_page"`) | `src/sections/chat/Chat.tsx` |
| `demo_video_played` | User started playing the demo video on the landing page | `src/sections/landing/DemoVideo.tsx` |
| `chat_api_completed` | Server-side chat API request completed successfully | `src/app/api/chat/route.ts` |
| `chat_api_error` | Server-side chat API request failed | `src/app/api/chat/route.ts` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://us.posthog.com/project/153174/dashboard/1462411
- **Newsletter Subscriptions vs Failures**: https://us.posthog.com/project/153174/insights/SGcb26Ct
- **Chat Widget: Open → Message Funnel**: https://us.posthog.com/project/153174/insights/yWrFfiXL
- **Demo Video Plays**: https://us.posthog.com/project/153174/insights/Q6o3DVDK
- **Chat Messages by Source**: https://us.posthog.com/project/153174/insights/qrwSB6xQ
- **Chat API Health: Completions vs Errors**: https://us.posthog.com/project/153174/insights/Qc9RpA4w

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>

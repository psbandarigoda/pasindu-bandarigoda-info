# Pasindu Bandarigoda — Technology Strategy Advisor

Next.js site for [pasindubandarigoda.com](https://www.pasindubandarigoda.com).

## Stack

- **Next.js 15** (App Router, TypeScript)
- **Resend** — email notifications when someone submits the contact form
- **JSON file storage** — consultation inquiries saved to `data/leads.json`
- **Password-protected admin** — view and manage leads at `/admin`

## Setup

```bash
cp .env.example .env.local
# Edit .env.local with your Resend API key, admin password, and auth secret

npm install
npm run dev
```

Open [http://localhost:3030](http://localhost:3030). Admin dashboard: [http://localhost:3030/admin](http://localhost:3030/admin).

## Environment variables

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | Resend API key for inquiry emails |
| `RESEND_FROM` | Verified sender address in Resend |
| `NOTIFY_EMAIL` | Where inquiry notifications are sent |
| `ADMIN_PASSWORD` | Password for `/admin` login |
| `AUTH_SECRET` | Random string for session cookies (32+ chars) |
| `NEXT_PUBLIC_SITE_URL` | Production URL for emails and SEO |

## Deploy

Works on Vercel, Railway, Render, or any Node.js host.

**Note:** On serverless platforms (e.g. Vercel), the filesystem is ephemeral — use a persistent volume or mount `data/leads.json` via your host, or switch to a hosted database later.

# Delivery checklist — Stephen Chege

- [ ] Install dependencies: `npm install`
- [ ] Launch dev server: `npm run dev`
- [ ] Create Sanity project and copy ID into `.env.local`
- [ ] Sign into `/studio` and publish Website Content
- [ ] Replace stock portraits
- [ ] Upload authentic Mediacrest certificate image via Sanity
- [ ] Upload Stephen’s verified final PDF CV via Sanity; replace sample draft
- [ ] Check CV buttons and certificate display on the live site
- [ ] Verify actual bio, services, work history, and contact details
- [ ] Push code to GitHub and import it to Vercel
- [ ] Set Sanity environment variables in Vercel
- [ ] Add production URL to Sanity CORS origins (allow credentials)
- [ ] Deploy, check desktop/mobile, test `/studio` authentication
- [ ] Invite Stephen to Sanity as an editor and teach him to Publish
- [ ] Select a commercial-use Vercel plan
- [ ] Test contact email app behavior or integrate a real form backend


## Familiar tools section (new)
The homepage includes **Tools I am Familiar With**, grouped by communication, office & files, project management, scheduling & automation, design & social, and marketing & CRM. Logos are loaded from the Simple Icons CDN and can be overridden with a custom URL in Sanity. Update `Tools section introduction` and the `Familiar tools` list through Sanity Studio. Remove any tools Stephen has not genuinely used or practised with; the starter list is illustrative rather than verified. When a `siteSettings` document exists in Sanity, populate the `tools` array there to customize the displayed list (defaults are used only before a CMS value is supplied). The logos need an internet connection.

- [ ] Replace the decorative sample certificate image with Stephen's real Mediacrest certificate.
- [ ] Add Stephen's real international WhatsApp number in Sanity Studio or `NEXT_PUBLIC_WHATSAPP_NUMBER` in Vercel; test the floating button.

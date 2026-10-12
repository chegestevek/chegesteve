<!-- # Stephen Chege — Virtual Assistant Portfolio

A polished, responsive Virtual Assistant portfolio built with **Next.js, TypeScript, Tailwind-style custom CSS, Sanity Studio, and Vercel**. This project uses custom CSS rather than a Tailwind dependency to keep the handover simple. All text, services, training certificate, downloadable CV, testimonials and image fields can be managed from Sanity once connected.

## Run locally

Prerequisites: Node.js 20.9+ and npm.

```bash
npm install
npm run dev
```

Open **http://localhost:3000**. The site works **before connecting Sanity**, using starter copy and placeholder stock-photo URLs. The images require an internet connection. Change the dummy contact email before launch.

## Set up Stephen's no-code editing dashboard

1. Create a free Sanity account at https://www.sanity.io/manage and create a new project and `production` dataset.
2. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SANITY_PROJECT_ID` to the actual Sanity project ID (and dataset if different).
3. Restart `npm run dev`, then visit **http://localhost:3000/studio**. Log in as a member of the Sanity project.
4. Open **Website Content**, and create or edit the singleton document. Populate the fields for the homepage, About, Services, Certification and CV, and Contact.
5. **Publish** the document. Your public site reads published data and refreshes cached content around every 60 seconds. If it does not update immediately, refresh after about a minute.
6. In Sanity's project management, configure CORS for the origins where Studio runs, including `http://localhost:3000` and your Vercel/domain URL, **with credentials permitted**, so Studio authentication works.
7. Add Stephen as a Sanity project member with appropriate permissions; never share your own account password. Studio is authenticated by Sanity, not by a custom password on this website.

**Important:** New Sanity documents have initial starter tool and service lists. Existing empty documents can be populated using the **Load starter tools & services** document action. Empty Services and Tools arrays display no items once a Sanity document exists. Other missing content fields may still use starter content. For launch, ensure every important field is populated.

### CMS fields

- Hero: name, headings, introduction, profile portrait, availability
- About: heading, paragraphs, image, location and stats
- Services: editable array with predefined icons
- Certification: upload Stephen’s original Mediacrest Training College certificate image; replaces the old example-work section
- CV: upload the final PDF to **Stephen CV (PDF for visitor download)**. The public Download CV buttons will automatically use its Sanity asset URL.
- Testimonials: optional; hidden until real approved testimonials are entered
- Contact: email, phone, WhatsApp URL, LinkedIn URL, booking URL and text

**Editing scope:** The client edits the **content**, not page layouts, navigation structure, or source code. The Studio is mounted at `/studio`; it does not need a separate server or database.

## Deploy to Vercel

1. Commit this directory to a new GitHub repository (`.env.local` is ignored).
2. Create a Vercel project and import the GitHub repository. Use the standard Next.js framework preset and `npm run build`.
3. Under Vercel project **Settings → Environment Variables**, add `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET=production` for Production (and Preview if desired).
4. Deploy and add the resulting Vercel URL to Sanity CORS with credentials enabled. Add your custom domain in Vercel and also whitelist the custom domain in Sanity CORS if using `/studio` there.
5. Invite Stephen to the Sanity project. He logs in at `https://your-domain.com/studio` and changes content without editing code.
6. Choose a Vercel plan that permits commercial use; **Vercel Hobby is for personal, non-commercial projects**. Check current prices and terms before purchase.

Every later source-code push to the connected GitHub branch triggers deployment. Sanity content edits do **not** require a GitHub push; published content is fetched from Sanity.

## Contact form behavior

To keep launch simple and avoid server-side credentials, the contact form uses a **mailto:** link: submission prepares an email in the visitor's email application, and the visitor must actually send it. It is **not** a server-delivered form. For a more reliable production form, integrate Resend, Formspree, or another service and add spam protection; this is not implemented here.

## Before making the website public

- Replace the stock photos, sample CV, certificate placeholder, placeholder email, and marketing copy with verified information about Stephen. **Do not publish the sample CV as Stephen’s verified professional resume.**
- Add genuine approved testimonials only (the testimonials block is hidden initially).
- Populate real contact links, verify mobile appearance, and test that Stephen can publish updates.
- Review privacy rules if adding analytics, server-based forms, or tracking later.
- If deploying with no Sanity environment variables, the portfolio remains visible but the Studio displays setup instructions.

## Tech stack

- Next.js 15 App Router + React 19 + TypeScript
- Sanity Studio 4 + `next-sanity` (one CMS document for ease of editing)
- Lucide icons, responsive CSS
- Vercel deployment ready

**No dedicated Express/PostgreSQL backend is required** for this website: Sanity hosts the content and editing backend.

## Certificate photo and downloadable CV (new)

Section 03 is now **Training & Certification**. It no longer suggests Stephen has handled past client projects. It identifies the training provider as **Mediacrest Training College** based on the project owner's information. No certificate number, dates or specific award name are invented.

**To show his real certificate:** open `/studio` → Website Content → **Mediacrest certificate photo (upload original)** → choose the actual image → Publish. Until then, the site displays a tasteful *Certificate coming soon* placeholder, not a fake credential. Visitors can open the published certificate image.

**To make his actual CV downloadable:** open `/studio` → Website Content → **Stephen CV (PDF for visitor download)** → upload Stephen's finished PDF → Publish. Both download buttons then point to the Sanity-hosted PDF (it opens in a new tab; browser download behavior for remote files can vary). The starter file at `public/Stephen-Chege-CV-SAMPLE.pdf` is **only a labelled draft** based on the limited information provided and must be replaced before public launch. For a guaranteed browser attachment download, place the final PDF in `public/Stephen-Chege-CV.pdf` and update `cvUrl` fallback in `src/lib/content.ts`, or implement a file-proxy route.

Note: a certificate file or Stephen's final CV was **not attached** to this request, so neither can be truthfully included yet.


## Familiar tools section (new)
The homepage includes **Tools I am Familiar With**, grouped by communication, office & files, project management, scheduling & automation, design & social, and marketing & CRM. Logos are loaded from the Simple Icons CDN and can be overridden with a custom URL in Sanity. Update `Tools section introduction` and the `Familiar tools` list through Sanity Studio. Remove any tools Stephen has not genuinely used or practised with; the starter list is illustrative rather than verified. When a `siteSettings` document exists in Sanity, populate the `tools` array there to customize the displayed list (defaults are used only before a CMS value is supplied). The logos need an internet connection.


## Certificate sample + floating WhatsApp button (latest update)

- The **Training & Certification** section now displays `public/certificate-sample.jpg`. It is a clearly labelled **decorative sample, not Stephen's issued certificate**. Upload a real certificate to **Sanity Studio → Site Settings → Mediacrest certificate photo**, or replace `public/certificate-sample.jpg` for an offline fallback.
- A floating green WhatsApp icon appears in the bottom-right corner on desktop and mobile. For a real WhatsApp chat, supply Stephen's international-format number through **Sanity Studio → Site Settings → WhatsApp number** (example format `2547XXXXXXXX`), or set `NEXT_PUBLIC_WHATSAPP_NUMBER=2547XXXXXXXX` in Vercel environment variables / local `.env.local`. Do **not** paste a made-up phone number. Supported CMS inputs: international phone digits or an `https://wa.me/` link.
- Until a valid number is added, the floating icon intentionally links to the website's contact section rather than redirecting a visitor to the wrong person.
- If using Vercel environment variables, redeploy after saving them. Sanity fields take precedence over the environment fallback.

## Managing tools and services from Sanity (updated)

**Sanity is authoritative once Website Content has been published.** An empty Tools list now shows zero tools on the site; an empty Services list shows zero services. Hardcoded examples only display when the site is running without a Sanity project or before the first `siteSettings` document has been published. This fixes the problem where deleted items reappeared.

### Existing Sanity document shows “No items”
1. Start the website with a valid `NEXT_PUBLIC_SANITY_PROJECT_ID` and open `/studio` → **Website Content**.
2. In the document actions menu, select **Load starter tools & services**. Confirm the import. This loads **24 tools and 6 services only into empty lists**; existing non-empty lists are preserved. If the document has never been saved, first create and publish it.
3. Reload Studio when prompted. Scroll to **Familiar tools**; the items should now appear. Remove any tools that Stephen hasn't used, using the item action menu, then click **Publish**.
4. Refresh the public website after up to ~60 seconds. Only the published Sanity items are shown.
5. If you remove **all** tools, the website shows none. To repopulate an empty list intentionally, run the starter import action again.

**New documents:** The lists start with sample entries automatically. Review and remove unfamiliar tools before publishing. The import action requires an authenticated Sanity editor with write permissions. It modifies a Sanity draft, not the deployed source files; publish to make changes visible.

**Existing deployment note:** after pushing this updated code to Vercel, the public site may temporarily show no tools/services until you import and publish the starter lists in Studio. This is deliberate: it prevents unseen hardcoded items from reappearing.


## Projects gallery (Sanity-managed)
The Projects section is controlled entirely through the **Projects — add, edit or remove** list in Sanity Studio. Add a project title, description, and optional uploaded screenshot, category and outcome. Publish to show it; remove the last project to hide the whole section. See `PROJECTS-CMS-GUIDE.md`. -->

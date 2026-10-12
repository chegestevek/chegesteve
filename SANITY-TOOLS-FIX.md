# Fix: remove individual tools from Sanity Studio

1. Keep your existing `.env.local` with the same real Sanity project ID and dataset. Do not overwrite it when extracting this ZIP.
2. Start locally with `npm install` and `npm run dev`.
3. Open `/studio` -> Website Content.
4. Open the document actions menu and click **Load starter tools & services**. Confirm; this adds 24 tools and 6 services to the **draft only if each respective list is empty**. Existing non-empty lists are preserved.
5. Reload Studio when prompted, expand **Familiar tools**, remove any individual tool using its menu, and click **Publish**.
6. Reload the public website after about a minute. The site now uses only the lists actually published in Sanity. An empty list is respected; removed tools do not come back from demo defaults.

For a **brand-new Sanity Website Content document**, tools and services are prefilled automatically so you can remove unwanted entries before publishing.

Note: Source code changes must be deployed to Vercel before the production site gets this fix. The CMS data itself remains in your existing Sanity project and is not bundled into this ZIP.

# Projects section — Sanity editing guide

1. Start the website with `npm run dev` and open `http://localhost:3000/studio`.
2. Open **Website Content**. Scroll to **Projects — add, edit or remove**.
3. Click **Add item**. Enter project title and description; optionally add a category and an outcome.
4. Use **Project image or screenshot** to upload an image from your computer.
5. Click **Publish**. The Projects section appears automatically once at least one project is published.
6. To edit a project, expand its item, change text or replace its image, and publish.
7. To remove a project, use the item's action menu (usually three dots) → Remove, then Publish.
8. When the last project is removed, the entire Projects section hides automatically.

Only showcase work that Stephen actually completed, or explicitly label training exercises as practice projects. Do not publish fictitious client work.

**Existing Sanity documents:** This change does not overwrite any published data. Old archived `projects` entries, if present, will become visible with the new gallery. Review/delete those entries before publishing if they were illustrative placeholders.

**Images:** Sanity stores the image files. The frontend GROQ query resolves uploaded project images into URLs. Missing project images show a neutral placeholder. Public site updates can take up to approximately 60 seconds because of page data caching.

'use client';
import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';
import {siteSettings} from './src/sanity/schemaTypes/siteSettings';
import {loadStarterListsAction} from './src/sanity/loadStarterListsAction';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  name: 'default',
  title: 'Stephen Chege Content Studio',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: (S) => S.list().title('Edit website').items([
        S.listItem().title('Website Content').id('website').child(
          S.document().schemaType('siteSettings').documentId('siteSettings')
        ),
      ]),
    }),
  ],
  schema: {types: [siteSettings]},
  document: {
    actions: (prev, context) =>
      context.schemaType === 'siteSettings'
        ? [...prev.filter((action) => action.action !== 'delete' && action.action !== 'duplicate'), loadStarterListsAction]
        : prev,
  },
});

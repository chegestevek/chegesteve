import {useClient, type DocumentActionComponent} from 'sanity';
import {keyed, starterServices, starterTools} from './starterLists';

/** Optional one-time import for an existing Studio document with empty arrays.
 * Only imports empty lists; never overwrites lists with entries.
 * The results are saved as a draft: click Publish to update the public site.
 */
export const loadStarterListsAction: DocumentActionComponent = (props) => {
  const client = useClient({apiVersion: '2025-02-19'});
  return {
    label: 'Load starter tools & services',
    title: 'Populate empty lists so you can remove individual entries',
    onHandle: () => {
      void (async () => {
        try {
          const id = props.id;
          const published = await client.getDocument(id);
          const draftId = `drafts.${id}`;
          const draft = await client.getDocument(draftId);
          const current = draft ?? published;
          if (!current) {
            window.alert('First create and publish the Website Content document, then try again.');
            return;
          }
          const needsTools = !Array.isArray(current.tools) || current.tools.length === 0;
          const needsServices = !Array.isArray(current.services) || current.services.length === 0;
          if (!needsTools && !needsServices) {
            window.alert('Both lists already have items. You can remove tools directly from the Tools list.');
            return;
          }
          if (!window.confirm(`Import ${needsTools?'24 starter tools':''}${needsTools && needsServices?' and ':''}${needsServices?'6 starter services':''}? Existing non-empty lists will not be changed. Afterward remove any tools Stephen does not actually know and click Publish.`)) return;
          const fields: Record<string,unknown> = {};
          if (needsTools) fields.tools = keyed(starterTools);
          if (needsServices) fields.services = keyed(starterServices);
          // Create the draft from the full existing document to preserve other content.
          if (!draft) {
            const {_rev,_createdAt,_updatedAt,...rest} = current;
            await client.createIfNotExists({...rest, _id:draftId, _type:'siteSettings'});
          }
          await client.patch(draftId).set(fields).commit();
          window.alert('Starter items added to the draft. Reload Studio, remove any unwanted items, and click Publish.');
          window.location.reload();
        } catch(error) {
          window.alert(`Could not import starter items: ${error instanceof Error ? error.message : String(error)}`);
        } finally {
          props.onComplete();
        }
      })();
    }
  };
};

// Editable starter examples. Import these into Sanity, then remove any entries
// Stephen has not actually used. They are not claims of client experience.
export const starterServices = [
  {number:'01',icon:'calendar',title:'Calendar & Inbox Management',description:'Keep your day in order with smart scheduling, organized inboxes, meeting coordination, and thoughtful follow-ups.'},
  {number:'02',icon:'users',title:'Customer Support',description:'Give your customers the attention they deserve with prompt, friendly communication and reliable issue resolution.'},
  {number:'03',icon:'file',title:'Administrative Assistance',description:'Stay ahead of routine tasks, data entry, document preparation, online research, and organized digital filing.'},
  {number:'04',icon:'megaphone',title:'Social Media Support',description:'Stay visible with content scheduling, community engagement, basic content coordination, and consistent follow-through.'},
  {number:'05',icon:'chart',title:'Research & Data Organization',description:'Turn scattered information into clear spreadsheets, useful summaries, and actionable insights.'},
  {number:'06',icon:'plane',title:'Travel & Project Coordination',description:'From itineraries to checklists and deadlines, I keep the details together and projects moving.'}
];
export const starterTools = [
  {name:'Gmail',logoSlug:'gmail',category:'Communication'},
  {name:'Google Calendar',logoSlug:'googlecalendar',category:'Communication'},
  {name:'Google Meet',logoSlug:'googlemeet',category:'Communication'},
  {name:'Zoom',logoSlug:'zoom',category:'Communication'},
  {name:'Slack',logoSlug:'slack',category:'Communication'},
  {name:'Microsoft Teams',logoSlug:'microsoftteams',category:'Communication'},
  {name:'Google Drive',logoSlug:'googledrive',category:'Office & files'},
  {name:'Google Docs',logoSlug:'googledocs',category:'Office & files'},
  {name:'Google Sheets',logoSlug:'googlesheets',category:'Office & files'},
  {name:'Microsoft Word',logoSlug:'microsoftword',category:'Office & files'},
  {name:'Microsoft Excel',logoSlug:'microsoftexcel',category:'Office & files'},
  {name:'Dropbox',logoSlug:'dropbox',category:'Office & files'},
  {name:'Notion',logoSlug:'notion',category:'Project management'},
  {name:'Trello',logoSlug:'trello',category:'Project management'},
  {name:'Asana',logoSlug:'asana',category:'Project management'},
  {name:'ClickUp',logoSlug:'clickup',category:'Project management'},
  {name:'Calendly',logoSlug:'calendly',category:'Scheduling & automation'},
  {name:'Zapier',logoSlug:'zapier',category:'Scheduling & automation'},
  {name:'Canva',logoSlug:'canva',category:'Design & social'},
  {name:'Buffer',logoSlug:'buffer',category:'Design & social'},
  {name:'Meta Business Suite',logoSlug:'meta',category:'Design & social'},
  {name:'Mailchimp',logoSlug:'mailchimp',category:'Marketing & CRM'},
  {name:'HubSpot',logoSlug:'hubspot',category:'Marketing & CRM'},
  {name:'Zendesk',logoSlug:'zendesk',category:'Marketing & CRM'}
];
export const keyed = <T extends object>(items: readonly T[]): (T & {_key:string;_type:'object'})[] =>
 items.map((item,index)=>({...item,_type:'object' as const,_key:`starter-${index}-${'name' in item?String(item.name).toLowerCase().replace(/[^a-z0-9]+/g,'-'):'title' in item?String(item.title).toLowerCase().replace(/[^a-z0-9]+/g,'-'):'item'}`}));

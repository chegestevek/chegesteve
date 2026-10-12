import {defineField,defineType} from 'sanity';
import {starterTools,starterServices,keyed} from '../starterLists';
const text=(name:string,title:string)=>defineField({name,title,type:'string'});
const paragraph=(name:string,title:string)=>defineField({name,title,type:'text',rows:4});
export const siteSettings=defineType({
  name:'siteSettings', title:'Website content',type:'document',
  initialValue: {tools:keyed(starterTools), services:keyed(starterServices)},
  fields:[
    text('name','Name'),text('eyebrow','Hero small heading'),text('headline','Hero headline, first part'),text('highlightedHeadline','Hero headline, accent part'),paragraph('heroDescription','Hero introduction'),text('availability','Availability label'),
    defineField({name:'heroImage',title:'Hero portrait',type:'image',options:{hotspot:true}}),
    text('aboutEyebrow','About small heading'),text('aboutHeading','About heading'),paragraph('aboutParagraph1','About paragraph 1'),paragraph('aboutParagraph2','About paragraph 2'),
    defineField({name:'aboutImage',title:'About image',type:'image',options:{hotspot:true}}),
    text('location','Location'),text('experience','About stat 1'),text('clients','About stat 2'),paragraph('servicesIntro','Services introduction'),
    defineField({name:'services',title:'Services',type:'array',of:[{type:'object',fields:[text('number','Number (e.g. 01)'),defineField({name:'icon',title:'Icon',type:'string',options:{list:['calendar','users','file','megaphone','chart','plane']}}),text('title','Title'),paragraph('description','Description')],preview:{select:{title:'title',subtitle:'description'}}}]}),
    paragraph('toolsIntro','Tools section introduction (describe actual familiarity accurately)'),
    defineField({name:'tools',title:'Familiar tools (edit/remove any tool not actually used)',description:'Add only tools Stephen is genuinely familiar with. Logo slug uses the Simple Icons brand name identifier, e.g. gmail, notion, trello. A custom logo URL overrides the slug.',type:'array',of:[{type:'object',fields:[text('name','Tool name'),text('logoSlug','Simple Icons logo slug'),text('category','Category'),text('logoUrl','Custom logo URL (optional)')],preview:{select:{title:'name',subtitle:'category'}}}]}),
    paragraph('projectsIntro','Projects section introduction'),
    defineField({
      name:'projects',title:'Projects — add, edit or remove',
      description:'Add only real projects or clearly identified practice projects. Add a title, description and upload a photo or screenshot. Delete an entry here to remove it from the website after publishing.',
      type:'array',of:[{
        type:'object',name:'projectEntry',title:'Project',
        fields:[
          defineField({name:'title',title:'Project title',type:'string',validation:Rule=>Rule.required()}),
          paragraph('description','What I worked on / project description'),
          text('category','Project category (optional)'),
          text('outcome','Outcome / skills demonstrated (optional)'),
          defineField({name:'image',title:'Project image or screenshot',type:'image',options:{hotspot:true}}),
        ],
        preview:{select:{title:'title',subtitle:'category',media:'image'}},
      }],
    }),
    defineField({name:'certificateImage',title:'Mediacrest certificate photo (upload original)',type:'image',options:{hotspot:true}}),
    defineField({name:'cvFile',title:'Stephen CV (PDF for visitor download)',type:'file',options:{accept:'.pdf,application/pdf'}}),
    defineField({name:'testimonials',title:'Testimonials (real, approved client quotes only)',type:'array',of:[{type:'object',fields:[paragraph('quote','Quote'),text('name','Client name'),text('role','Client title / company'),text('initials','Initials')],preview:{select:{title:'name',subtitle:'role'}}}]}),
    text('email','Contact email'),text('phone','Phone (optional)'),text('whatsapp','WhatsApp number (international format) or https://wa.me/ link'),text('linkedin','LinkedIn URL (optional)'),text('calendly','Booking URL (optional)'),
    text('contactHeading','Contact heading'),paragraph('contactDescription','Contact description'),paragraph('footerDescription','Footer description')
  ],preview:{prepare:()=>({title:'Stephen Chege — Website Content'})}
});

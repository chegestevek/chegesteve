import { createClient } from 'next-sanity';
import { starterServices, starterTools } from '@/sanity/starterLists';

export type Service = { title:string; description:string; icon:string; number:string };
export type Project = { _key?:string; category:string; title:string; description:string; image:string; outcome:string };
export type VaTool = {name:string; logoSlug:string; category:string; logoUrl?:string};
export type Quote = { quote:string; name:string; role:string; initials:string };
export type SiteContent = {
  name:string; eyebrow:string; headline:string; highlightedHeadline:string; heroDescription:string;
  availability:string; heroImage:string; aboutImage:string; aboutEyebrow:string; aboutHeading:string;
  aboutParagraph1:string; aboutParagraph2:string; location:string; experience:string; clients:string;
  servicesIntro:string; services:Service[]; projectsIntro:string; projects:Project[]; testimonials:Quote[]; toolsIntro:string; tools:VaTool[];
  certificateImage:string; cvUrl:string; email:string; phone:string; whatsapp:string; linkedin:string; calendly:string;
  contactHeading:string; contactDescription:string; footerDescription:string;
};
export const defaults:SiteContent = {
  name:'Stephen Chege', eyebrow:'YOUR NEXT FAVORITE VIRTUAL ASSISTANT',
  headline:'Less busywork.', highlightedHeadline:'More brilliance.',
  heroDescription:'I help ambitious founders and growing teams reclaim their time through thoughtful administrative support, seamless coordination, and dependable execution.',
  availability:'Available for new collaborations',
  heroImage:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=85',
  aboutImage:'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85',
  aboutEyebrow:'A LITTLE ABOUT ME',aboutHeading:'The calm behind your big ideas.',
  aboutParagraph1:'Hi, I’m Stephen — a detail-oriented Virtual Assistant who believes the best support is the kind you barely have to think about. I bring structure to the busy days, clarity to the overflowing inbox, and momentum to the plans you want to bring to life.',
  aboutParagraph2:'Whether you need someone to own the day-to-day or jump in on a special project, I work with care, curiosity, and a genuine commitment to making your workday easier.',
  location:'Based in Kenya · Working worldwide',experience:'Reliable support',clients:'Global mindset',
  servicesIntro:'From the small details to the big moving parts, here’s how I make work feel lighter.',
  services:starterServices,
  toolsIntro:'A growing toolkit of popular platforms for communication, planning, organisation, design and client support. These are tools I am exploring and building confidence with through training and independent practice.',
  tools:starterTools,
  projectsIntro:'A selection of practical projects and work samples. Each entry describes what I created and learned.',
  projects:[],
  certificateImage:'', cvUrl:'/Stephen-Chege-CV-SAMPLE.pdf',
  testimonials:[],
  email:'hello@stephenchege.com',phone:'',whatsapp:'',linkedin:'',calendly:'',
  contactHeading:'Let’s make space for what matters.',contactDescription:'Have a project in mind or just need an extra pair of hands? Tell me what you’re working on. I’d love to help.',
  footerDescription:'Helping good ideas become great workdays.'
};
const id=process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset=process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const configured = Boolean(id && dataset);
const client=configured?createClient({projectId:id!,dataset,apiVersion:'2025-02-19',useCdn:false}):null;
const query=`*[_type == "siteSettings" && _id == "siteSettings"][0]{
  ..., "heroImage": coalesce(heroImage.asset->url, heroImageUrl),
  "aboutImage": coalesce(aboutImage.asset->url, aboutImageUrl),
  "certificateImage": coalesce(certificateImage.asset->url, certificateImageUrl),
  "cvUrl": coalesce(cvFile.asset->url, cvUrl),
  "projects": projects[]{..., "image": coalesce(image.asset->url, imageUrl)}
}`;
// Remove legacy introduction text even if an older version is still published in Sanity.
// This is intentionally scoped to the specific sentence requested for removal.
const removedIntroSentence = /I[’']m beginning my journey as a Virtual Assistant, building on professional training and a commitment to dependable support\./gi;
function withoutRemovedSentence(value: string): string {
  return value.replace(removedIntroSentence, '').replace(/\s{2,}/g, ' ').trim();
}
function cleanLegacyIntro(content: SiteContent): SiteContent {
  return {
    ...content,
    aboutParagraph1: withoutRemovedSentence(content.aboutParagraph1 || ''),
    aboutParagraph2: withoutRemovedSentence(content.aboutParagraph2 || ''),
    heroDescription: withoutRemovedSentence(content.heroDescription || ''),
  };
}
export async function getContent():Promise<SiteContent>{
  if(!client) return cleanLegacyIntro(defaults);
  try {
    const content=await client.fetch<Partial<SiteContent>|null>(query,{}, {next:{revalidate:60}});
    if(!content) return cleanLegacyIntro(defaults);
    // Once a Sanity document exists, arrays belong to Sanity exclusively.
    // Missing / empty arrays mean no entries, not "show hardcoded demo entries".
    // This lets deleting the final tool or service actually remove it on-site.
    return cleanLegacyIntro({
      ...defaults,
      ...Object.fromEntries(Object.entries(content).filter(([,v])=>v!==null && v!==undefined && v!=='')),
      tools: Array.isArray(content.tools) ? content.tools : [],
      services: Array.isArray(content.services) ? content.services : [],
      testimonials: Array.isArray(content.testimonials) ? content.testimonials : [],
      projects: Array.isArray(content.projects) ? content.projects : [],
    } as SiteContent);
  } catch(error){console.error('Sanity fetch failed; showing starter content.',error);return cleanLegacyIntro(defaults);}
}

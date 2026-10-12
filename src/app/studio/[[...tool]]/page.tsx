'use client';
import {NextStudio} from 'next-sanity/studio';
import config from '../../../../sanity.config';
export default function StudioPage(){
 if(!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return <main style={{fontFamily:'sans-serif',padding:48}}><h1>Studio not configured</h1><p>Create your Sanity project, then add NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET to Vercel environment variables.</p><a href="/">Return to website</a></main>;
 return <NextStudio config={config}/>;
}

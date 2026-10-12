import {getContent} from '@/lib/content';
import {Portfolio} from '@/components/Portfolio';
export default async function Home(){const content=await getContent();return <Portfolio data={content}/>}

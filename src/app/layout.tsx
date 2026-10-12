import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'Stephen Chege | Virtual Assistant',description:'Stephen Chege is a Virtual Assistant helping founders and teams with administrative support, inbox management, customer service and coordination.',openGraph:{title:'Stephen Chege | Virtual Assistant',description:'Less busywork. More brilliance.',type:'website'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}

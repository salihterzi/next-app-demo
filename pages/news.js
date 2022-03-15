import Link from "next/link";
import { Fragment } from "react"; 

function NewsPage()
{
 return(
     <Fragment>
         <h1>News Page</h1>
         <ul>
             <li>
                 <Link href="/nextjs-is-the-best">NexteJs is the best</Link>
             </li>
             <li>
                 End 
             </li>
         </ul>
     </Fragment> 
 )
}
export default NewsPage;
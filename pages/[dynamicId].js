import {useRouter} from 'next/router'
function DynamicPage()
{
    const router= useRouter();
    console.log(router.query.dynamicId);
 return <h1>Dynamic</h1>;
}
export default DynamicPage;
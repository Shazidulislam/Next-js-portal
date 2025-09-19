// import Link from "next/link";

// export default async function ArticlsID({params , searchParams}:{params:Promise<{articlID:"string"}>;searchParams:Promise<{lang?:"en"|"es"|"fr"}>}){
//     const {articlID} =  params;
//     const {lang} =  searchParams
//     return <>
//       <h1>This is Aritcal-id {articlID} </h1>
//       <p>Reading language & {lang}</p>
//       <div style={{display:"flex" , gap:"30px"}}>
//         <Link  href={`/articles/${articlID}?lang=en`}>English</Link>  
//         <Link  href={`/articles/${articlID}?lang=es`}>Spanish</Link>  
//         <Link  href={`/articles/${articlID}?lang=fr`}>French</Link>  
//       </div>
//     </>
// }
"use client"
import Link from "next/link";
import { use } from "react";

export default  function ArticlsID({params , searchParams}:{params:Promise<{articlID:"string"}>;searchParams:Promise<{lang?:"en"|"es"|"fr"}>}){
    const {articlID} = use(params) ;
    const {lang} =  use(searchParams)
    return <>
      <h1>This is Aritcal-id {articlID} </h1>
      <p>Reading language & {lang}</p>
      <div style={{display:"flex" , gap:"30px"}}>
        <Link  href={`/articles/${articlID}?lang=en`}>English</Link>  
        <Link  href={`/articles/${articlID}?lang=es`}>Spanish</Link>  
        <Link  href={`/articles/${articlID}?lang=fr`}>French</Link>  
      </div>
    </>
}
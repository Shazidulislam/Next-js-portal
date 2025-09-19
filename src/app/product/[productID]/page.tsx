import { Metadata } from "next";
type Props ={
    params :Promise<{ productID: string }>
}

export const generateMetadata =async({params}:Props): Promise<Metadata>    =>{

    const id = (await params).productID
    const title = await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`iphone ${id}`)
        })
    })
    return {
        title:`product ${title}`
    }

}

export default async function ProductDetils({
  params,
}:Props) {
    const productID= (await params ).productID
   return <>
    <h1>This Product ID {productID}</h1>
   </>;
}

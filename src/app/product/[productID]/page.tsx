import { Metadata } from "next";
type Props ={
    params :Promise<{ productID: string }>
}

export const generateMetadata =async({params}:Props): Promise<Metadata>    =>{

    const id = (await params).productID
    return {
        title:`product ${id}`
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

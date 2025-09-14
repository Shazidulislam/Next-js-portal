export default async function ProductDetils({
  params,
}: {
  params: Promise<{ productID: string }>;
}) {
    const {productID} = await params 
   return <>
    <h1>This Product ID {productID}</h1>
   </>;
}

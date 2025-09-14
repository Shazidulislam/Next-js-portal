import { notFound } from "next/navigation";

export default async function ReviweDeatils({
  params,
}: {
  params: Promise<{ productID: string; reviwsID: string }>;
}) {
    const {productID ,reviwsID } = await params
 
     if(parseInt(reviwsID) > 1000  ){
        notFound()
     }

  return (
    <>
      <h2>Here Is productID {productID} ,reviwsID {reviwsID}  </h2>
    </>
  );
}

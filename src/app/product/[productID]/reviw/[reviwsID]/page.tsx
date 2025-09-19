import { notFound } from "next/navigation";

function getRandomInt(count:number){
  return Math.floor(Math.random()*count);
}
export default async function ReviweDeatils({
  params,
}: {
  params: Promise<{ productID: string; reviwsID: string }>;
}) {
  const random = getRandomInt(2)


    const {productID ,reviwsID } = await params
     if(random === 1){
    throw new Error("Error loadig review!!!")

  }  
     if(parseInt(reviwsID) > 1000  ){
        notFound()
     }
  
 

  return (
    <>
      <h2>Here Is productID {productID} ,reviwsID {reviwsID}  </h2>
    </>
  );
}

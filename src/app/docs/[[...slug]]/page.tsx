export default async function DocDetails({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
    const {slug} = await params

    if(slug?.length > 1){
        return <>
        {
            slug?.map(slugs=> <h1 key={slugs}>Viwe Doc File --- {slugs}</h1>)
        }
        </>
    }
    else if(slug?.length === 1){
        return <>
         <h1>Viwe Doc File {slug[0]}</h1>
        </>
    }
  return (
    <>
      <h2>This Docs Home Page</h2>
    </>
  );
}

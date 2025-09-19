

export default function Reviw({error}:{error:Error}){
    return <>
      <h2>This is Reviw page</h2>
      <h1>{error.message}</h1>
     </>
}
import { Metadata } from "next"

export const metadata:Metadata ={
    title:{
        absolute:"Blog"
    }
}

export default async function Blog(){
     
    await new Promise(resolve =>{
        setTimeout(()=>{
            resolve("Intentional delay")
        },2000)
    })

    return <>
     <h2>This Blog page</h2>
    </>
}


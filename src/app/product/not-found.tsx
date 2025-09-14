"use client"
import { usePathname } from "next/navigation"

export default function Notfound(){
    const pathName= usePathname()
    const productID = pathName.split("/")[2]
    const reviwsID = pathName.split("/")[4]
    return <>
        <h1>This is 404 page</h1>
       <h2>Product Not Found for reviw {reviwsID} for {productID}</h2>
    </>
}
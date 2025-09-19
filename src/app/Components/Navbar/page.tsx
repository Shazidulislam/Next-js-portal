import Link from "next/link";

export default function Navbar(){
    return <>
      <nav style={{display:"flex" , gap:"20px" }}>
        <Link href={"/"} >Home</Link>
        <Link href={"/register"} >Register</Link>
        <Link href={"/login"} >Login</Link>
        <Link href={"/forget-password"} >ForgetPassword</Link>

        <h1>Other route</h1>

        <Link href={"/articles/breaking-news-123?lang=en"}>Read in English</Link>
        <Link href={"/articles/breaking-news-124?lang=fr"}>Read in Freanch</Link>
        <p>Other</p>
         <Link href={"/product/sisai"}>Products</Link>
      </nav>
    </>
}
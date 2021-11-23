import Link from "next/link"
import { useRouter } from "next/router"
import Layout from "@/components/Layout"

// 


const About = () => {
   const router = useRouter()
   console.log(router)
   return (
      <Layout title="About">
         <h1>About</h1>

      </Layout>
   )
}




export default About

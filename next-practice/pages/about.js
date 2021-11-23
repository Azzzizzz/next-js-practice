import Link from "next/link"
import { useRouter } from "next/router"

// 


const About = () => {
   const router = useRouter()
   console.log(router)
   return (
      <div>
         <h1>About</h1>
         <h3>{router.pathname}</h3>
         <Link href="/">Home</Link>
         <br />

         {/* to push to specific route */}
         <button onClick={() => router.push('/events')} >Home</button>
      </div>
   )
}

export default About

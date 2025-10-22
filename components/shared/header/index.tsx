

import Image from "next/image"
import Link from "next/link"
import { APP_NAME } from "@/lib/constants"
import Menu from "./menu"



const Header = () => {
  return (
    <header className="w-full border-b"> 
    <div className="wrapper flex-between">
        <div className="flex-start">
            <Link href="/" className="flex-start">
            <Image
            className="rounded-2xl"
                src="/images/logo.svg" 
                alt={`${APP_NAME} Logo`} 
                width={70} 
                height={70} 
                priority={true}
            />
           
            </Link>
        </div>
        <Menu />
    </div>
    </header>
  )
}

export default Header
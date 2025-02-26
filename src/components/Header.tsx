import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'

import React from 'react'
import { Button } from './ui/button'

const Header = () => {
  return (
    <header className="flex shadow-sm justify-between items-center p-4 gap-4 h-16 backdrop-blur-xl max-w-screen-xl mx-auto">
           <Link href='/' className='-ml-10'>
            <Image
             src='/logo.png' alt='logo' priority width={150} height={100}/>
           </Link>
           <div>
           <SignedOut>
              <SignInButton>
                <Button variant='outline'>Login</Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
           </div>
</header>
  )
}

export default Header

import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='w-full mt-20 flex items-center justify-center'>
      <SignIn />
    </div>
  )
}
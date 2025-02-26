import { ReactNode } from 'react'

const MaxWidthWrapper = ({
  children,
}: {
  children: ReactNode
}) => {
  return (
    <div
      className='h-full mx-auto w-full max-w-screen-xl px-3 md:px-10'>
      {children}
    </div>
  )
}

export default MaxWidthWrapper
import type { FC, PropsWithChildren } from 'react'

const Hero: FC<PropsWithChildren> = ({ children }) => {
  return <section className='min-h-screen flex flex-col items-center justify-center px-4'>{children}</section>
}

export default Hero
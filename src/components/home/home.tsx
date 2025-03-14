import type { FC, PropsWithChildren } from 'react'

const Home: FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className='flex min-h-dvh flex-col items-center justify-center px-4'>
      {children}
    </section>
  )
}

export default Home

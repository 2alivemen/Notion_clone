import TitleSection from '@/components/landing-page/title-section'
import { Button } from '@/components/ui/button'
import React from 'react'

const HomePage = () => {
  return (
    <section>
        <div className='overflow-hidden px-4 
        sm:px-6 
        mt-10
        sm:flex
        sm:flex-col
        gap-4
        md:justify-center
        md:items-center'>

          <TitleSection title='All in one collaboration and productivity ' pill='✨ Your work space, perfected'></TitleSection>
          <div className='bg-white
          p-[2px]
          mt-6
          rounded-xl
          bg-gradient-to-r
          from-primary
           to-brand-primaryBlue
           sm:w-[300px]
           '>

            <Button variant='btn-secondary' className='w-full
            mt-6
            rounded-[10px]
            p-6
            text-2xl
            bg-background'> Get ento Free</Button>
           </div>
        </div>
    </section>
  )
}

export default HomePage
import { Container } from '@repo/ui';
import { Searchbox } from '../navigation';
import { SiteLogo } from '../shared/site-logo';

export const Header = async () => { 


    return (
        <header className='bg-background border-b sticky top-0 z-20'>
          <Container className='flex justify-between gap-8'>
          <div className='flex flex-row-reverse gap-8 items-center lg:flex-row lg:justify-end lg:gap-4 xl:gap-8'>
              <SiteLogo />
          </div>
          <div className='flex justify-end flex-1 py-4'>
          
            <Searchbox />

        </div>
          </Container>
      </header>

        )

}
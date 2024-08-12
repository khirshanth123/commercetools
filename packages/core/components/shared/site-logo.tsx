import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const SiteLogo = () => (
  <Link href='/' className='shrink-0'>
    <Image className='relative left-[-0.5rem]' src='/next.svg' height={30} width={80} alt='Logo' />
  </Link>
);

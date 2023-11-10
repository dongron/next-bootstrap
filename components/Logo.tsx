import React from 'react';
import Image from 'next/image'


function Logo() {
  return <Image
    src="/logo.svg"
    alt="Comapny logo"
    width={244}
    height={44}
  />
}

export default Logo;

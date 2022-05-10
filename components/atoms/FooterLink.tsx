import styled from 'styled-components';
import React from 'react';
import { Image, Link } from '@chakra-ui/react';

interface IFooterLinkFields {
    name: String
}

function FooterLink({ name }: IFooterLinkFields) {
  return (
    <Link 
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      rel="noopener noreferrer"
    >
      <div>
        <span>{name}</span>
        <Image src="/mateus.jpg" alt="Vercel Logo" width="36" height="52" />
      </div>
    </Link>
  )
}



export default FooterLink;


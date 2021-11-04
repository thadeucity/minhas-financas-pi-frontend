import React from 'react';
import Link from 'next/link';
import { FiChevronLeft } from 'react-icons/fi';
import { TopBarContainer } from './styles';

interface TopBarProps {
  title: string;
  backHref: string;
}

export const TopBar: React.FC<TopBarProps> = ({ backHref, title }) => (
  <TopBarContainer>
    <Link href={backHref} passHref>
      <a>
        <FiChevronLeft />
      </a>
    </Link>
    <h1>{title}</h1>
  </TopBarContainer>
);

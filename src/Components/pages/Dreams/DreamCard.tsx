import Link from 'next/link';
import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { DreamCardContainer, ProgressBar } from './DreamCardStyles';

interface DreamCardProps {
  title: string;
  editLink: string;
  progress: number;
}

export const DreamCard: React.FC<DreamCardProps> = ({
  title,
  editLink,
  progress,
}) => (
  <Link href={editLink} passHref>
    <DreamCardContainer>
      <div className="dream_card__top_bar">
        <h2>{title}</h2>
        <FiEdit />
      </div>
      <ProgressBar progress={progress} />
    </DreamCardContainer>
  </Link>
);

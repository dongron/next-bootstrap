import type { FC } from 'react';
import Badge from 'react-bootstrap/Badge';
import Image from 'next/image';

type LanguageBadgeProps = {
  language: string;
  icon: string;
  className?: string;
};

const LanguageBadge: FC<LanguageBadgeProps> = ({ language, icon, className }) => {
  return (
    <Badge bg="light" text="dark" className={className}>
      <Image src={icon} width={18} height={18} />
      <span className="badge__label">{language}</span>
    </Badge>
  );
};

export default LanguageBadge;

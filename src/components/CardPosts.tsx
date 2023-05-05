import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
}

const CardPosts: React.FC<CardProps> = ({ id, title, imageUrl, description }) => {
  return (
    <Link key={id} to={`${id}`}>
      <div className="card">
        <img src={imageUrl} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default CardPosts;
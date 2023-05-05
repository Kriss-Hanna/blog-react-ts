import React from 'react';

interface CardProps {
  title: string;
  imageUrl: string;
  description: string;
}

const CardPosts: React.FC<CardProps> = ({ title, imageUrl, description }) => {
  return (
    <a>
      <div className="card">
        <img src={imageUrl} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default CardPosts;
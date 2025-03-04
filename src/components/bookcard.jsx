
// BookCard.jsx


import React from 'react';

const BookCard = ({ book }) => {
  const { image, name, genre, author } = book;

  return (
    <div className="book-card">
      <img src={image} alt={name} className="book-card-image" />
      <div className="book-card-info">
        <h3 className="book-card-title">{name}</h3>
        <p className="book-card-author">Author: {author}</p>
        <p className="book-card-genre">Genre: {genre}</p>
      </div>
    </div>
  );
};

export default BookCard;
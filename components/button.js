import React from 'react';

export default function Button({ children, onClick, className }) {
  return (
    <button
      className={`px-4 py-2 rounded-md shadow-md bg-primary hover:bg-secondary text-white font-medium ${className}`}
      onClick={onClick}
      type='submit'
    >
      {children}
    </button>
  );
}


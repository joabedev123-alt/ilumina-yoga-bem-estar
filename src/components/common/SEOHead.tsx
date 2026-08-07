import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
}

export const SEOHead: React.FC<SEOProps> = ({
  title,
  description = "ILUMINA — Yoga, movimento e experiências para cuidar do corpo, acalmar a mente e transformar o autocuidado em parte da sua rotina."
}) => {
  useEffect(() => {
    document.title = `${title} | ILUMINA — Yoga & Bem-Estar`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
};

const stripHtml = (html) => {
  if (!html || typeof html !== 'string') return '';
  return html.replace(/<[^>]*>/g, '');
};

const calculateReadingTime = (content) => {
  if (!content) return '1 minut de citit';
  
  const text = typeof content === 'string' ? content : 
    (content.content || content.excerpt || '');
  
  const wordsPerMinute = 200; // Average reading speed in Romanian
  const words = stripHtml(text).split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  
  if (minutes === 1) {
    return '1 minut de citit';
  }
  return `${minutes} minute de citit`;
};

export default calculateReadingTime;
import { useState, useEffect } from 'react';

interface UseTypewriterProps {
  text: string;
  speed?: number;
  startDelay?: number;
}

export const useTypewriter = ({ text, speed = 100, startDelay = 0 }: UseTypewriterProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
      let charIndex = 0;

      const typeInterval = setInterval(() => {
        if (charIndex < text.length) {
          setDisplayText(text.slice(0, charIndex + 1));
          charIndex++;
        } else {
          setIsTyping(false);
          clearInterval(typeInterval);
        }
      }, speed);

      return () => clearInterval(typeInterval);
    }, startDelay);

    return () => clearTimeout(timer);
  }, [text, speed, startDelay]);

  // Cursor blinking effect
  useEffect(() => {
    if (!isTyping) {
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 530);

      return () => clearInterval(cursorInterval);
    }
  }, [isTyping]);

  return {
    displayText,
    isTyping,
    showCursor,
  };
};
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface LLMOutputProps {
  fullText: string;
  containerRef?: React.RefObject<HTMLDivElement>;
  aborted?: boolean;
  setFinished: React.Dispatch<React.SetStateAction<boolean>>;
}

const LLMOutput: React.FC<LLMOutputProps> = ({ fullText, containerRef, aborted, setFinished }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (aborted && displayedText.length === 0) setFinished(false);
    if (aborted) return;
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 10);
      return () => clearTimeout(timeout);
    } else {
      setFinished(true);
    }
  }, [currentIndex, displayedText, aborted, fullText, setFinished]);

  useEffect(() => {
    if (!containerRef?.current) return;
    // Scroll to the bottom every time content changes
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [displayedText, containerRef]);

  return (
    <div className="text-left prose dark:prose-invert overflow-auto">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{displayedText}</ReactMarkdown>
    </div>
  );
};

export default LLMOutput;

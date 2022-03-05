import { IoDocumentText } from 'react-icons/io5';
import { IconType } from 'react-icons/lib';
import { SiGo, SiJavascript, SiRust, SiTypescript } from 'react-icons/si';

export const getFileIcon = (language?: string): IconType => {
  if (!language) {
    return IoDocumentText;
  }

  const icons = {
    ts: SiTypescript,
    js: SiJavascript,
    rust: SiRust,
    go: SiGo,
  } as Record<string, IconType>;
  return icons[language] || IoDocumentText;
};

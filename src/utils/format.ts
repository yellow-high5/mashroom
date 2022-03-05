import { IoDocumentText } from 'react-icons/io5';
import { IconType } from 'react-icons/lib';
import {
  SiCss3,
  SiDart,
  SiDeno,
  SiGo,
  SiGraphql,
  SiHtml5,
  SiJava,
  SiJavascript,
  SiPython,
  SiRuby,
  SiRust,
  SiTypescript,
} from 'react-icons/si';

export const getFileIcon = (language?: string): IconType => {
  if (!language) {
    return IoDocumentText;
  }

  const icons = {
    ts: SiTypescript,
    js: SiJavascript,
    deno: SiDeno,
    dart: SiDart,
    rust: SiRust,
    go: SiGo,
    java: SiJava,
    python: SiPython,
    ruby: SiRuby,
    html: SiHtml5,
    css: SiCss3,
    graphql: SiGraphql,
  } as Record<string, IconType>;
  return icons[language] || IoDocumentText;
};

export const getMinutesToRead = (wc?: number | null): string => {
  if (!wc) {
    return '- min';
  }

  return `${Math.round((wc * 14) / 400)} min`;
};

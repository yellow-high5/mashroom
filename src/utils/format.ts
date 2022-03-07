import {
  IoBrushOutline,
  IoCubeOutline,
  IoDocumentText,
  IoFileTrayOutline,
  IoLaptopOutline,
} from 'react-icons/io5';
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

export const getFileIcon = (language?: string): IconType | undefined => {
  if (!language) {
    return undefined;
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

export const getWorkIcon = (tag: string): IconType => {
  const icons = {
    Web: IoLaptopOutline,
    'CG-Work': IoCubeOutline,
    Illust: IoBrushOutline,
  } as Record<string, IconType>;
  return icons[tag] || IoFileTrayOutline;
};

export const getMinutesToRead = (wc?: number | null): string => {
  if (!wc) {
    return '- min';
  }

  return `${Math.round((wc * 14) / 400)} min`;
};

export const sanitizeBlogIndex = (title: string): string => {
  return title.replace(/\s+/g, '');
};

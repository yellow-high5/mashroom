import {
  IoColorPaletteOutline,
  IoCubeOutline,
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
  SiReact,
  SiRuby,
  SiRust,
  SiTypescript,
} from 'react-icons/si';

export const getFileIcon = (language?: string): IconType | undefined => {
  if (!language) {
    return undefined;
  }

  // https://react-icons.github.io/react-icons/icons?name=si
  const icons = {
    ts: SiTypescript,
    tsx: SiReact,
    js: SiJavascript,
    jsx: SiReact,
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
  return icons[language] || undefined;
};

export const getWorkIcon = (tag: string): IconType => {
  const icons = {
    App: IoLaptopOutline,
    CG: IoCubeOutline,
    Illust: IoColorPaletteOutline,
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
  return title.replace(/\s+/, '');
};

export const sanitizeMdxCode = (children?: React.ReactNode): string | undefined => {
  return children?.toString().replace(/\n$/, '');
};

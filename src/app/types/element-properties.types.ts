export interface ElementProperties {
  tag?: string;
  text?: string;
  color?: string;
  opacity?: number;
}

export interface Project {
  id: number;
  elements: ElementProperties[];
}

export const TAGS = ['h1', 'h2', 'p', 'div'];

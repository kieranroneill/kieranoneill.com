import { createElement } from 'react';
import { render } from 'react-dom';

// components
import App from './components/App';

export function onDOMContentLoaded(): void {
  const element: HTMLElement | null = document.getElementById('app');

  if (element) {
    render(createElement(App), element);
  }
}

window.addEventListener('DOMContentLoaded', onDOMContentLoaded);

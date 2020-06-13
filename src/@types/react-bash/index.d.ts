declare module 'react-bash' {
  import React from 'react';

  export interface Styles {
    body?: React.CSSProperties;
    form?: React.CSSProperties;
    greenCircle?: React.CSSProperties;
    header?: React.CSSProperties;
    input?: React.CSSProperties;
    prefix?: React.CSSProperties;
    ReactBash?: React.CSSProperties;
    redCircle?: React.CSSProperties;
    yellowCircle?: React.CSSProperties;
  }
  export interface CommandOptions {
    cwd: string;
    history: History[];
    settings: Settings;
    structure: Structure;
  }
  export interface Command {
    exec: (options: CommandOptions) => CommandOptions;
  }
  export type Extensions = Record<string, Command>;
  export interface History {
    value: string;
  }
  export interface Settings {
    user: User;
  }
  export type Structure = Object;
  export interface TerminalProps {
    extensions?: Extensions;
    history?: History[];
    prefix?: string;
    structure?: Structure;
    styles?: Styles;
    theme?: 'dark' | 'light';
    whoami: string;
  }
  export interface User {
    username: string;
  }

  export default class Terminal extends React.Component<
    TerminalProps,
    Readonly<{}>
  > {
    public static Themes: { DARK: string; LIGHT: string };
  }
}

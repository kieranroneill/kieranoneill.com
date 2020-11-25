declare module 'terminal-in-react' {
  import Component = React.Component;
  import CSSProperties = React.CSSProperties;

  export interface Arguments {
    _: string[];
    [key: string]: string;
  }
  export type CommandFunction = (
    args: Arguments,
    print: PrintFunction,
    runCommand: RunCommand
  ) => void;
  export interface Command {
    method: CommandFunction;
    options?: CommandOptions[];
  }
  export interface CommandOptions {
    defaultValue: string;
    description: string;
    name: string;
  }
  export type Commands = Record<string, Command | CommandFunction>;
  export type Descriptions = Record<string, string | boolean>;
  export interface PluginApi<Data> {
    checkVersion: (comparator: string, version: string) => boolean;
    focusInput: () => void;
    getData: () => Data;
    getPluginMethod: (pluginName: string, methodName: string) => any;
    os: string;
    printLine: (content: string | JSX) => void;
    releaseControl: () => void;
    removeLine: (lineNumber?: number) => void;
    runCommand: (cmdText: string, force?: boolean) => void;
    setCanScroll: (canScroll: boolean) => void;
    setData: (data: any) => void;
    setPromptPrefix: (promptPrefix: string) => void;
    setScrollPosition: (position: number) => void;
    setPromptSymbol: (promptSymbol: string) => void;
    takeControl: (
      controller: any,
      newPromptSymbol: string,
      newPromptPrefix: string
    ) => void;
    version: string;
  }
  export type PrintFunction = (input: string) => void;
  export type RunCommand = (cmd: string) => void;
  export type Shortcut = Record<string, string>;
  export interface Shortcuts {
    darwin: Shortcut;
    'darwin, linux': Shortcut;
    'darwin, win': Shortcut;
    'darwin, linux, win': Shortcut;
    'darwin, win, linux': Shortcut;
    linux: Shortcut;
    'linux, darwin': Shortcut;
    'linux, win': Shortcut;
    'linux, darwin, win': Shortcut;
    'linux, win, darwin': Shortcut;
    win: Shortcut;
    'win, darwin': Shortcut;
    'win, linux': Shortcut;
    'win, darwin, linux': Shortcut;
    'win, linux, darwin': Shortcut;
  }

  export class PluginBase<T> {
    public static commands: Commands;
    public static defaultData: any;
    public static descriptions: Descriptions;
    public static displayName: string;
    public static shortcuts: Shortcuts;
    public static version: string;

    protected api: PluginApi<T>;
    public commands: Commands;
    public descriptions: Descriptions;
    public shortcuts: Shortcuts;
    public getPublicMethods: () => any;

    constructor(api: PluginApi<T>, config?: any);
  }

  export default class Terminal extends Component<{
    style?: CSSProperties;
    color?: string;
    outputColor?: string;
    backgroundColor?: string;
    prompt?: string;
    barColor?: string;
    descriptions?: Descriptions;
    commands?: Commands;
    msg?: string;
    watchConsoleLogging?: boolean;
    commandPassThrough?: (cmd: string, print: () => void) => void;
    promptSymbol?: string;
    plugins?: any[];
    startState?: 'open' | 'maximised' | 'minimised' | 'closed';
    showActions?: boolean;
    hideTopBar?: boolean;
    allowTabs?: boolean;
    actionHandlers?: {
      handleClose?: (toogleClose: () => void) => void;
      handleMaximise?: (toggleMaximise: () => void) => void;
      handleMinimise?: (toggleMinimise: () => void) => void;
    };
  }> {}
}

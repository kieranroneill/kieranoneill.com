declare module 'terminal-in-react' {
  import Component = React.Component;
  import CSSProperties = React.CSSProperties;

  export interface PluginApi {
    checkVersion: (comparator: string, version: string) => boolean;
    focusInput: () => void;
    getData: () => any;
    getPluginMethod: (pluginName: string, methodName: string) => Function;
    os: string;
    printLine: (content: string) => void;
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

  export class PluginBase {
    static displayName: string;
    static version: string;
    static defaultData: any;

    static commands: any;
    static descriptions: Record<string, string>;
    static shortcuts: any;

    commands: any;
    descriptions: Record<string, string>;
    shortcuts: any;
    getPublicMethods: () => any;

    constructor(api: PluginApi, config?: any);
  }

  export default class Terminal extends Component<{
    style?: CSSProperties;
    color?: string;
    outputColor?: string;
    backgroundColor?: string;
    prompt?: string;
    barColor?: string;
    descriptions?: {};
    commands?: {};
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

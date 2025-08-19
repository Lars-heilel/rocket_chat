type LogLevel = 'LOG' | 'ERROR' | 'WARN' | 'DEBUG';
const STYLES = {
  log: 'color: #2ecc71; font-weight: bold;',
  error: 'color: #e74c3c; font-weight: bold;',
  warn: 'color: #f39c12; font-weight: bold;',
  debug: 'color: #3498db; font-weight: bold;',
  context: 'color: #9b59b6; font-weight: bold;',
};

export class Logger {
  private context: string;
  constructor(context: string) {
    this.context = context;
  }
  log(...args: unknown[]) {
    this.print('LOG', ...args);
  }
  error(...args: unknown[]) {
    this.print('ERROR', ...args);
  }
  warn(...args: unknown[]) {
    this.print('WARN', ...args);
  }
  debug(...args: unknown[]) {
    this.print('DEBUG', ...args);
  }
  private print(level: LogLevel, ...args: unknown[]) {
    if (import.meta.env.DEV) {
      const timestamp = new Date().toLocaleTimeString();
      const levelStyle = STYLES[level.toLowerCase() as keyof typeof STYLES];
      console.log(
        `%c[Logger] %c${level.padEnd(5)} %c[${this.context}]`,
        'color: #bdc3c7;',
        levelStyle,
        STYLES.context,
        `(${timestamp})`,
        ...args,
      );
    }
  }
}

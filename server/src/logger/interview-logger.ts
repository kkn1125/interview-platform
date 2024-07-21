import { format } from '@libs/format';
import { Injectable, LoggerService } from '@nestjs/common';

@Injectable()
export class InterviewLogger implements LoggerService {
  private readonly LEVELS: ('log' | 'info' | 'debug' | 'warn' | 'error')[] = [
    'log',
    'info',
    'debug',
    'warn',
    'error',
  ];
  private readonly ICON = {
    log: '🪵',
    info: '✨',
    debug: '🐛',
    warn: '⚠️',
    error: '🔥',
  };
  protected context: string = 'Server';

  log!: (message: any, ...optionalParams: [...any]) => void;
  info!: (message: any, ...optionalParams: [...any]) => void;
  debug!: (message: any, ...optionalParams: [...any]) => void;
  warn!: (message: any, ...optionalParams: [...any]) => void;
  error!: (message: any, ...optionalParams: [...any]) => void;

  protected get timestamp() {
    return format(new Date(), 'HH:mm:ss.SSS');
  }

  constructor(context?: string) {
    this.setContext(context);
  }

  setContext(context?: string) {
    if (context) {
      this.context = context;
    }

    for (const level of this.LEVELS) {
      this[level] = console.log.bind(
        this,
        this.ICON[level],
        this.timestamp,
        `${this.context}`,
        `[${level.toUpperCase()}]`,
        ' --- ',
      );
    }
  }
}

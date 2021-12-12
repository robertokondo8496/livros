import { Directive, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Directive({
  selector: '[livrosSrcDebounce]'
})
export class SrcDebounceDirective {

  @Input()
  public livrosSrcDebounce?: string;

  constructor() { }
  @HostBinding('attr.src')
  public get src(): string {
    return this.livrosSrcDebounce || '';
  }
}

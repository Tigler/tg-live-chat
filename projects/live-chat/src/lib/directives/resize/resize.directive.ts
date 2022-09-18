import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[tgResize]'
})
export class ResizeDirective implements OnInit {

  @Input() tgResize: Element | undefined;

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    if (this.tgResize) {
      let initHeight = this.el.nativeElement.offsetHeight;
      new ResizeObserver((data) => {
        // @ts-ignore
        this.el.nativeElement.style.height = initHeight - data[0].target.offsetHeight + 'px';
      }).observe(this.tgResize);
    }
  }

  updateHeightTarget() {
    // this.tgResize?.nativeElement.height = this.tgResize?.nativeElement.height
  }


}

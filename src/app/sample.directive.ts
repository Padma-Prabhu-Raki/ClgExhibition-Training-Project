import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[sample]'
})
export class SampleDirective {

  constructor(private element:ElementRef) { }

  @HostListener('mouseenter') onmousehover() {
    // console.log(this.element.nativeElement);
    
    this.element.nativeElement.style.color = 'lavendar'
    this.element.nativeElement.style['padding-left'] = '10px'; 
    this.element.nativeElement.style['background-color'] = 'blanchedalmond';
    this.element.nativeElement.style.border = '1px groove';
    this.element.nativeElement.style['border-color'] = 'violet'
    
  }

  @HostListener('mouseleave') onmouseleave(){
    // this.element.nativeElement.style.color='';
    this.element.nativeElement.style['padding-left'] = '200px'; 
    this.element.nativeElement.style['background-color'] = '';
    this.element.nativeElement.style.border = '';
  }
}

// rgb(40, 24, 218) dark blue color

// rgb(22,225,303) light color

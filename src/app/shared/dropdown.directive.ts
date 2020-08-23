import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

    constructor(private elRef: ElementRef, private renderer: Renderer2) {}

    @HostBinding('class.open')isOpen = false;

    ngOnInit(): void {
    }

    @HostListener('click')
    click() {
        this.isOpen = !this.isOpen;
    }   

}
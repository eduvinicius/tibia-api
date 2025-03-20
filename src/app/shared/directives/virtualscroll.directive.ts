import { Directive, ElementRef, Input, OnChanges, Output, EventEmitter, computed, effect, signal } from '@angular/core';

@Directive({
  selector: '[appVirtualScroll]',
  standalone: true,
})
export class VirtualScrollDirective<T> implements OnChanges {
  @Input() items: T[] = [];
  @Input() itemHeight = 100;
  @Input() containerHeight = 400;
  @Output() visibleItemsChange = new EventEmitter<T[]>(); // Emits visible items

  private readonly scrollTop = signal(0);
  private readonly element: HTMLElement;

  visibleItems = computed(() => {
    const totalItems = this.items.length;
    if (totalItems === 0) return [];

    const startIndex = Math.floor(this.scrollTop() / this.itemHeight);
    const visibleCount = Math.ceil(this.containerHeight / this.itemHeight) * 4; // Load extra items for smoother scroll
    const endIndex = Math.min(startIndex + visibleCount, totalItems);

    console.log(`Visible Range: ${startIndex} - ${endIndex} of ${totalItems}`);
    return this.items.slice(startIndex, endIndex);
  });

  constructor(private readonly el: ElementRef) {
    this.element = this.el.nativeElement;

    this.element.addEventListener('scroll', () => {
      this.scrollTop.set(this.element.scrollTop);
      console.log('Scroll Top:', this.scrollTop());
    });

    effect(() => {
      this.visibleItemsChange.emit(this.visibleItems());
      console.log('Visible Items:', this.visibleItems().length);
    });
  }

  ngOnChanges() {
    console.log('Total Items:', this.items.length);
  }
}

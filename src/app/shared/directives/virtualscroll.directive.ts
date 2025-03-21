import { Directive, ElementRef, Input, Output, EventEmitter, computed, effect, signal } from '@angular/core';

@Directive({
  selector: '[appVirtualScroll]',
  standalone: true,
})
export class VirtualScrollDirective<T> {
  @Input() items: T[] = [];
  @Input() itemHeight = 100;
  @Input() containerHeight = 400;
  @Output() visibleItemsChange = new EventEmitter<T[]>(); // Emite os itens visíveis

  private readonly scrollTop = signal(0);
  private readonly element: HTMLElement;

  visibleItems = computed(() => {
    const totalItems = this.items.length;
    if (totalItems === 0) return [];

    // Define o primeiro item baseado na rolagem
    const startIndex = Math.max(0, Math.floor(this.scrollTop() / this.itemHeight));

    // Número de itens que cabem na viewport (+1 para evitar corte)
    const visibleCount = Math.ceil(this.containerHeight / this.itemHeight) + 1;

    // Define o último índice, garantindo que não ultrapasse o tamanho da lista
    const endIndex = Math.min(startIndex + visibleCount, totalItems);

    return this.items.slice(startIndex, endIndex);
  });

  constructor(private readonly el: ElementRef) {
    this.element = this.el.nativeElement;

    this.element.addEventListener('scroll', () => {
      console.log(this.scrollTop())
      this.scrollTop.set(this.element.scrollTop);
    });

    effect(() => {
      this.visibleItemsChange.emit(this.visibleItems());
    });
  }
}

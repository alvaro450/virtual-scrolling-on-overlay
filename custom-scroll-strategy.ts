import { VirtualScrollStrategy } from '@angular/cdk/scrolling';

export class Test implements VirtualScrollStrategy {
 scrolledIndexChange: Observable<number>;
   attach(viewport: CdkVirtualScrollViewport): void {}
   detach(): void {}
   onContentScrolled(): void {}
   onDataLengthChanged(): void {}
   onContentRendered(): void {}
   onRenderedOffsetChanged(): void {}
   scrollToIndex(index: number, behavior: ScrollBehavior): void {}

}
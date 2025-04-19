import { Component, HostListener, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectImage } from './data/project-image.model';

@Component({
  selector: 'app-base-portfolio-page',
  imports: [RouterModule],
  templateUrl: './base-portfolio-page.component.html',
  styleUrl: './base-portfolio-page.component.css'
})
export class BasePortfolioPageComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() year: string = '';
  @Input() materials: string = '';
  @Input() images: ProjectImage[] = [];

  lightboxImage: ProjectImage | null = null;

  touchStartX = 0;
  touchEndX = 0;

  openLightbox(image: ProjectImage) {
    this.lightboxImage = image;
  }

  closeLightbox() {
    this.lightboxImage = null;
  }

  preloadFullImage(image: ProjectImage) {
    const img = new Image();
    img.src = image.assetFilePath;
  }

  navigateLightbox(direction: 'prev' | 'next') {
    if (!this.lightboxImage) return;

    const currentIndex = this.images.findIndex(
      (img) => img.assetFilePath === this.lightboxImage?.assetFilePath
    );

    let nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;

    if (nextIndex < 0 || nextIndex >= this.images.length) return;

    this.lightboxImage = this.images[nextIndex];
  }

  get hasNextImage(): boolean {
    if (!this.lightboxImage) return false;
    const currentIndex = this.images.findIndex(img => img.assetFilePath === this.lightboxImage!.assetFilePath);
    return currentIndex < this.images.length - 1;
  }

  get hasPrevImage(): boolean {
    if (!this.lightboxImage) return false;
    const currentIndex = this.images.findIndex(img => img.assetFilePath === this.lightboxImage!.assetFilePath);
    return currentIndex > 0;
  }

  @HostListener('window:keydown', ['$event'])
  handleKey(event: KeyboardEvent) {
    if (!this.lightboxImage) return;

    switch (event.key) {
      case 'ArrowRight':
        this.navigateLightbox('next');
        break;
      case 'ArrowLeft':
        this.navigateLightbox('prev');
        break;
      case 'Escape':
        this.closeLightbox();
        break;
    }
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  handleSwipe() {
    const swipeDistance = this.touchEndX - this.touchStartX;

    if (Math.abs(swipeDistance) > 50) { // minimum threshold
      if (swipeDistance > 0 && this.hasPrevImage) {
        this.navigateLightbox('prev');
      } else if (swipeDistance < 0 && this.hasNextImage) {
        this.navigateLightbox('next');
      }
    }
  }

}

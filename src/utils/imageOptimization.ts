// Image optimization utility
export const imageConfig = {
  // Define image sizes for responsive loading
  sizes: {
    thumbnail: '150px',
    small: '300px', 
    medium: '600px',
    large: '1200px',
    xlarge: '1920px'
  },
  
  // Quality settings
  quality: {
    low: 50,
    medium: 75,
    high: 90
  },
  
  // Supported formats
  formats: ['webp', 'avif', 'png', 'jpg'],
  
  // Lazy loading intersection observer options
  observerOptions: {
    rootMargin: '50px',
    threshold: 0.1
  }
};

// Generate optimized image URL (for services like Cloudinary, Vercel, etc.)
export function getOptimizedImageUrl(
  src: string, 
  width?: number, 
  quality: number = imageConfig.quality.medium,
  format: string = 'webp'
): string {
  // If using a CDN service like Cloudinary or Vercel, you can modify this function
  // For example: return `${src}?w=${width}&q=${quality}&fm=${format}`;
  // For now, return the original src with query params for future use
  const params = new URLSearchParams();
  if (width) params.set('w', width.toString());
  params.set('q', quality.toString());
  params.set('fm', format);
  
  // Return original src for now, but ready for CDN integration
  return src + (src.includes('?') ? '&' : '?') + params.toString();
}

// Generate responsive image srcSet
export function generateSrcSet(baseSrc: string): string {
  const sizes = [300, 600, 900, 1200];
  return sizes
    .map(size => `${getOptimizedImageUrl(baseSrc, size)} ${size}w`)
    .join(', ');
}

// Preload critical images
export function preloadImage(src: string, priority: 'high' | 'low' = 'low'): void {
  if (typeof window !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    if (priority === 'high') {
      link.setAttribute('fetchpriority', 'high');
    }
    document.head.appendChild(link);
  }
}

// Check if image format is supported
export function isFormatSupported(format: string): Promise<boolean> {
  return new Promise((resolve) => {
    const testImage = new Image();
    testImage.onload = () => resolve(true);
    testImage.onerror = () => resolve(false);
    
    const testSources: Record<string, string> = {
      webp: 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA',
      avif: 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgABogQEAwgMg8f8D///8WfhwB8+ErK42A='
    };
    
    testImage.src = testSources[format] || '';
  });
}
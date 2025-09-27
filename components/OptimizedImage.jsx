"use client";
import * as React from "react";
import "./OptimizedImage.css";

function OptimizedImage({ 
  src, 
  alt, 
  className = "", 
  loading = "lazy", 
  sizes,
  srcSet,
  width,
  height,
  priority = false,
  placeholder = true,
  onLoad,
  onError,
  ...props 
}) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);
  const [isInView, setIsInView] = React.useState(!loading || loading === "eager");
  const imgRef = React.useRef(null);

  // Intersection Observer for lazy loading
  React.useEffect(() => {
    if (loading === "eager" || priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [loading, priority]);

  const handleLoad = (e) => {
    setIsLoaded(true);
    onLoad?.(e);
  };

  const handleError = (e) => {
    setHasError(true);
    onError?.(e);
  };

  // Generate responsive srcSet if not provided
  const generateSrcSet = (baseSrc) => {
    if (srcSet) return srcSet;
    
    // Simple srcSet generation - in real app, you'd use an image CDN
    const baseUrl = baseSrc.split('?')[0];
    return `
      ${baseUrl}?w=400 400w,
      ${baseUrl}?w=800 800w,
      ${baseUrl}?w=1200 1200w,
      ${baseUrl}?w=1600 1600w
    `.trim();
  };

  // Generate sizes if not provided
  const generateSizes = () => {
    if (sizes) return sizes;
    return "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";
  };

  if (hasError) {
    return (
      <div 
        className={`optimized-image-error ${className}`}
        style={{ width, height }}
        role="img"
        aria-label={alt || "Image failed to load"}
      >
        <div className="error-icon" aria-hidden="true">📷</div>
        <span className="error-text">Image unavailable</span>
      </div>
    );
  }

  return (
    <div 
      ref={imgRef}
      className={`optimized-image-container ${className} ${isLoaded ? 'loaded' : ''}`}
      style={{ width, height }}
    >
      {placeholder && !isLoaded && (
        <div 
          className="image-placeholder"
          aria-hidden="true"
          style={{ width, height }}
        >
          <div className="placeholder-shimmer"></div>
        </div>
      )}
      
      {isInView && (
        <img
          src={src}
          alt={alt}
          srcSet={generateSrcSet(src)}
          sizes={generateSizes()}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          className={`optimized-image ${isLoaded ? 'loaded' : 'loading'}`}
          width={width}
          height={height}
          {...props}
        />
      )}
    </div>
  );
}

export default OptimizedImage;

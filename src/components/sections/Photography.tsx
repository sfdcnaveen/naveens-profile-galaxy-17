
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import AnimatedText from '../ui/AnimatedText';

interface PhotoItem {
  id: string;
  src: string;
  alt: string;
  category: string;
}

interface PhotographyProps {
  className?: string;
}

const Photography = ({ className }: PhotographyProps) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  
  const photos: PhotoItem[] = [
    {
      id: '1',
      src: "/images/astrography.jpg",
      alt: "Astrography",
      category: 'astrography'
    },
    {
      id: '2',
      src: "/images/flower1.jpg",
      alt: "Flower",
      category: 'flower'
    },
    {
      id: '3',
      src: "/images/mansmoking.jpg",
      alt: "Man Smoking",
      category: 'people'
    },
    {
      id: '4',
      src: "/images/manwithumbrella.jpg",
      alt: "Man with Umbrella",
      category: 'people'
    },
    {
      id: '5',
      src: "/images/statu34.jpg",
      alt: "Statue",
      category: 'architecture'
    },
    {
      id: '6',
      src: "/images/architecture.jpg",
      alt: "Architecture",
      category: 'architecture'
    },
    {
      id: '7',
      src: "/images/architecture2.jpg",
      alt: "Architecture 2",
      category: 'architecture'
    },
    {
      id: '8',
      src: "/images/architecture3.jpg",
      alt: "Architecture 3",
      category: 'architecture'
    },
    {
      id: '9',
      src: "/images/darknight.jpg",
      alt: "Dark Night",
      category: 'nature'
    },
    {
      id: '10',
      src: "/images/photo1.jpeg",
      alt: "Photo 1",
      category: 'other'
    },
    {
      id: '11',
      src: "/images/flower.jpg",
      alt: "Flower",
      category: 'flower'
    },
    {
      id: '12',
      src: "/images/flower3.jpg",
      alt: "Flower 3",
      category: 'flower'
    },
    {
      id: '13',
      src: "/images/pinkflowers.jpg",
      alt: "Pink Flowers",
      category: 'flower'
    },
    {
      id: '14',
      src: "/images/squirrel.jpg",
      alt: "Squirrel",
      category: 'animals'
    }
  ];
  
  const categories = ['all', 'astrography', 'flower', 'people', 'architecture', 'nature', 'other', 'animals'];
  
  const filteredPhotos = activeCategory === 'all'
    ? photos
    : photos.filter(photo => photo.category === activeCategory);
  
  return (
    <section 
      id="photography" 
      className={cn("py-16 md:py-24 bg-background", className)}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <AnimatedText 
            text="Photography" 
            className="text-3xl md:text-4xl font-bold mb-6" 
          />
          <AnimatedText 
            text="Capturing moments and perspectives through my lens — a collection of my mobile photography."
            delay={100}
            className="text-lg text-muted-foreground" 
          />
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium capitalize transition-all",
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-secondary text-foreground hover:bg-primary/10"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Photo Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div 
              key={photo.id}
              className="relative group overflow-hidden rounded-xl aspect-square cursor-pointer"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <div className="text-sm capitalize bg-primary/80 inline-block px-3 py-1 rounded-full mb-2">
                    {photo.category}
                  </div>
                  <p className="text-sm line-clamp-2">{photo.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Modal for photo preview */}
        {selectedPhoto && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <div 
              className="relative max-w-5xl w-full bg-white/10 backdrop-blur-lg rounded-xl p-2 max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-2"
                onClick={() => setSelectedPhoto(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="w-full h-full object-contain max-h-[80vh]"
              />
              <div className="p-4 text-white">
                <span className="bg-primary/80 inline-block px-3 py-1 rounded-full text-sm capitalize">
                  {selectedPhoto.category}
                </span>
                <p className="mt-2">{selectedPhoto.alt}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Photography;

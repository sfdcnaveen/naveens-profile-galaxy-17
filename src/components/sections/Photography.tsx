
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
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      alt: "Landscape photography of mountain hit by sun rays",
      category: 'nature'
    },
    {
      id: '2',
      src: "https://images.unsplash.com/photo-1527576539890-dfa815648363",
      alt: "Grayscale photo of low angle view of building",
      category: 'architecture'
    },
    {
      id: '3',
      src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      alt: "Ocean wave at beach",
      category: 'nature'
    },
    {
      id: '4',
      src: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
      alt: "Minimalist photography of brown wavy structure",
      category: 'architecture'
    },
    {
      id: '5',
      src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
      alt: "White concrete building during daytime",
      category: 'architecture'
    },
    {
      id: '6',
      src: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
      alt: "Grey tabby kitten",
      category: 'animals'
    },
    {
      id: '7',
      src: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
      alt: "Low angle photography of trees at daytime",
      category: 'nature'
    },
    {
      id: '8',
      src: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2",
      alt: "Four brown horses behind fence",
      category: 'animals'
    }
  ];
  
  const categories = ['all', 'nature', 'architecture', 'animals'];
  
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

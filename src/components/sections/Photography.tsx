
import React, { useState, useRef } from 'react';
import { cn } from "@/lib/utils";
import AnimatedText from '../ui/AnimatedText';
import { motion, useInView } from 'framer-motion';

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
      src: "/images/flower1.jpg",
      alt: "Flower",
      category: 'flower'
    },
    {
      id: '2',
      src: "/images/manwithumbrella.jpg",
      alt: "Man with Umbrella",
      category: 'people'
    },
    {
      id: '3',
      src: "/images/statu34.jpg",
      alt: "Statue",
      category: 'architecture'
    },
    {
      id: '4',
      src: "/images/architecture.jpg",
      alt: "Architecture",
      category: 'architecture'
    },
    {
      id: '5',
      src: "/images/architecture2.jpg",
      alt: "Architecture 2",
      category: 'architecture'
    },
    {
      id: '6',
      src: "/images/architecture3.jpg",
      alt: "Architecture 3",
      category: 'architecture'
    },
    {
      id: '7',
      src: "/images/darknight.jpg",
      alt: "Dark Night",
      category: 'nature'
    },
    {
      id: '8',
      src: "/images/flower.jpg",
      alt: "Flower",
      category: 'flower'
    },
    {
      id: '9',
      src: "/images/flower3.jpg",
      alt: "Flower 3",
      category: 'flower'
    },
    {
      id: '10',
      src: "/images/pinkflowers.jpg",
      alt: "Pink Flowers",
      category: 'flower'
    },
    {
      id: '11',
      src: "/images/portrait.jpg",
      alt: "Portrait",
      category: 'people'
    },
    {
      id: '12',
      src: "/images/squirrel.jpg",
      alt: "Squirrel",
      category: 'nature'
    },
    {
      id: '13',
      src: "/images/photo1.jpeg",
      alt: "Photo 1",
      category: 'other'
    }
  ];

  const categories = ['all', 'flower', 'people', 'architecture', 'nature', 'other'];

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
            text="In each frame, I find whispers of eternity—where light dances with shadow and ordinary moments transform into poetry."
            delay={100}
            className="text-lg text-muted-foreground italic"
          />
          <p className="mt-4 text-sm text-muted-foreground/80">Every photograph is a heartbeat frozen in time, a silent story waiting to be heard.</p>
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
                  ? "glass-dark text-white"
                  : "glass-card hover:glass-dark"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Photo Grid - Masonry style inspired by reference */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {filteredPhotos.map((photo, index) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              onClick={() => setSelectedPhoto(photo)}
              index={index}
            />
          ))}
        </div>

        {/* Modal for photo preview */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="relative max-w-5xl w-full glass-card rounded-xl p-2 max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 glass-dark rounded-full p-2 text-white hover:bg-white/20 transition-colors"
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
              <div className="p-4 bg-card/50 backdrop-blur-md">
                <span className="glass-dark inline-block px-3 py-1 rounded-full text-sm capitalize">
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

// New component for individual photo card with animation
interface PhotoCardProps {
  photo: PhotoItem;
  onClick: () => void;
  index: number;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo, onClick, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 }); // Trigger animation when 30% visible

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group mb-4 overflow-hidden rounded-xl cursor-pointer glass-card"
      onClick={onClick}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy" // Add lazy loading
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div className="p-4 text-white">
          <div className="glass-dark inline-block px-3 py-1 rounded-full text-sm mb-2 capitalize">
            {photo.category}
          </div>
          <p className="text-sm line-clamp-2">{photo.alt}</p>
        </div>
      </div>
    </motion.div>
  );
};


export default Photography;

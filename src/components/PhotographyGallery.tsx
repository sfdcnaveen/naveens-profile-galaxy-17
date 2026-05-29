'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './PhotographyGallery.module.css';
import { photographyImages } from '@/data/photography';

const ITEMS_PER_PAGE = 25;

export default function PhotographyGallery() {
    const [currentPage, setCurrentPage] = useState(1);
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const totalPages = Math.ceil(photographyImages.length / ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentImages = photographyImages.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const openLightbox = (globalIndex: number) => {
        setLightboxIndex(globalIndex);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxIndex(null);
        document.body.style.overflow = 'auto';
    };

    const showNextImage = useCallback(
        (e?: React.MouseEvent) => {
            if (e) e.stopPropagation();
            if (lightboxIndex !== null) {
                setLightboxIndex((lightboxIndex + 1) % photographyImages.length);
            }
        },
        [lightboxIndex]
    );

    const showPrevImage = useCallback(
        (e?: React.MouseEvent) => {
            if (e) e.stopPropagation();
            if (lightboxIndex !== null) {
                setLightboxIndex(
                    (lightboxIndex - 1 + photographyImages.length) % photographyImages.length
                );
            }
        },
        [lightboxIndex]
    );

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (lightboxIndex === null) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') showNextImage();
            if (e.key === 'ArrowLeft') showPrevImage();
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [lightboxIndex, showNextImage, showPrevImage]);

    return (
        <div className={styles.galleryContainer}>
            <div className={styles.grid}>
                {currentImages.map((src, idx) => {
                    const globalIndex = startIndex + idx;
                    return (
                        <div
                            key={globalIndex}
                            className={styles.gridItem}
                            onClick={() => openLightbox(globalIndex)}
                        >
                            <Image
                                src={src}
                                alt={`Photography ${globalIndex + 1}`}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                                className={styles.image}
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    );
                })}
            </div>

            {totalPages > 1 && (
                <div className={styles.pagination}>
                    <button
                        className={styles.pageBtn}
                        disabled={currentPage === 1}
                        onClick={handlePrevPage}
                    >
                        Previous
                    </button>
                    <span className={styles.pageInfo}>
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        className={styles.pageBtn}
                        disabled={currentPage === totalPages}
                        onClick={handleNextPage}
                    >
                        Next
                    </button>
                </div>
            )}

            {lightboxIndex !== null && (
                <div className={styles.lightbox} onClick={closeLightbox}>
                    <button className={styles.lightboxClose} onClick={closeLightbox}>
                        &times;
                    </button>
                    <button
                        className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
                        onClick={showPrevImage}
                    >
                        &#10094;
                    </button>

                    <div className={styles.lightboxImgWrapper} onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={photographyImages[lightboxIndex]}
                            alt={`Enlarged photo ${lightboxIndex + 1}`}
                            fill
                            className={styles.lightboxImg}
                        />
                    </div>

                    <button
                        className={`${styles.lightboxNav} ${styles.lightboxNext}`}
                        onClick={showNextImage}
                    >
                        &#10095;
                    </button>
                </div>
            )}
        </div>
    );
}

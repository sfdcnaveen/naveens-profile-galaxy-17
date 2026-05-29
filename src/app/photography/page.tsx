import React from 'react';
import GlobalHeader from '@/components/GlobalHeader';
import PhotographyHighlights from '@/components/PhotographyHighlights';
import PhotographyGallery from '@/components/PhotographyGallery';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Photography | Naveen Kumar Pasupuleti',
    description: 'A curated collection of mobile photography by Naveen.',
};

export default function PhotographyPage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <GlobalHeader />
            <main
                className="container"
                style={{ flexGrow: 1, paddingBottom: 'var(--slds-g-spacing-large)' }}
            >
                <PhotographyHighlights />
                <PhotographyGallery />
            </main>
        </div>
    );
}

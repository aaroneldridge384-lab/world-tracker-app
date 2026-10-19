'use client';

import { useRouter } from 'next/navigation';
import CharacterWizard from '@/components/CharacterWizard';
import { INITIAL_CHARACTERS } from '@/data/mockCampaign';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import type { CharacterSheet } from '@/types/campaign';

export default function CreateCharacterPage() {
    const router = useRouter();
    const [characters, setCharacters, isLoaded, storageError] = useLocalStorage('dnd-characters', INITIAL_CHARACTERS);

    const handleCharacterCreated = (character: CharacterSheet) => {
        setCharacters((current) => [character, ...current]);
        router.push('/');
    };

    if (!isLoaded) return <p className="text-center text-slate-400">Loading character creator…</p>;

    return (
        <main className="flex flex-col items-center gap-6">
            <header className="w-full max-w-2xl text-center">
                <p className="fantasy-kicker">A new legend begins</p>
                <h1 className="fantasy-heading mt-2 text-3xl font-bold sm:text-4xl">Character Forge</h1>
                <p className="mt-2 font-sans text-sm text-slate-400">Shape an adventurer, then send them into the world.</p>
            </header>
            {storageError && <p role="alert" className="w-full max-w-2xl rounded-lg border border-rose-800 bg-rose-950/40 p-3 font-sans text-sm text-rose-200">{storageError}</p>}
            <CharacterWizard
                onCharacterCreated={handleCharacterCreated}
                onCancel={() => router.push('/')}
            />
        </main>
    );
}

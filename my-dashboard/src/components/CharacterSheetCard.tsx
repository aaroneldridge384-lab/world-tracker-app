/**
 * @file CharacterSheetCard.tsx
 * @description Interactive React component displaying a D&D character sheet
 * with live HP controls and AI portrait generation.
 */

'use client';

import { useEffect, useState } from 'react';
import type { CharacterSheet } from '@/types/campaign';
import { calculateModifier, calculateSkillBonus, formatModifier } from '@/utils/dnd';

interface Props {
    character: CharacterSheet;
    onCharacterUpdate?: (character: CharacterSheet) => void;
    onCharacterDelete?: (id: string) => void;
}

export default function CharacterSheetCard({ character, onCharacterUpdate, onCharacterDelete }: Props) {
    const [hp, setHp] = useState(character.currentHp);
    const [avatarUrl, setAvatarUrl] = useState<string | null>(character.avatarUrl ?? null);
    const [isGenerating, setIsGenerating] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    useEffect(() => {
        setHp(character.currentHp);
        setAvatarUrl(character.avatarUrl ?? null);
    }, [character.currentHp, character.avatarUrl]);

    const handleHpChange = (delta: number) => {
        setHp((current) => {
            const next = Math.min(character.maxHp, Math.max(0, current + delta));
            if (next !== current) onCharacterUpdate?.({ ...character, currentHp: next });
            return next;
        });
    };

    const handleGenerateArt = async () => {
        setIsGenerating(true);
        setErrorMsg(null);
        try {
            const response = await fetch('/api/generate-art', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ characterName: character.name, prompt: character.appearanceDescription }),
            });
            if (!response.ok) {
                const result: { error?: string } = await response.json();
                throw new Error(result.error ?? 'Failed to generate portrait');
            }
            const data: { url?: string } = await response.json();
            if (!data.url) throw new Error('Portrait URL was not returned');
            setAvatarUrl(data.url);
            onCharacterUpdate?.({ ...character, avatarUrl: data.url });
        } catch (error) {
            setErrorMsg(error instanceof Error ? error.message : 'Could not summon portrait. Try again!');
        } finally {
            setIsGenerating(false);
        }
    };

    const statEntries = Object.entries(character.stats) as [keyof typeof character.stats, number][];
    const renderTags = (items: string[]) => items.length > 0
        ? items.map((item) => <span key={item} className="rounded-full border border-slate-700 bg-slate-800 px-2.5 py-1 text-[11px] text-slate-300">{item}</span>)
        : <span className="text-xs text-slate-500">None</span>;

    return (
        <article className="fantasy-panel w-full rounded-2xl p-5 text-slate-100 sm:p-6">
            <header className="flex flex-wrap items-start justify-between gap-4 border-b border-amber-200/10 pb-4">
                <div>
                    <p className="fantasy-kicker">Level {character.level} · {character.race} {character.characterClass}</p>
                    <h2 className="fantasy-heading mt-1 text-2xl font-bold">{character.name}</h2>
                    <p className="mt-1 font-sans text-xs text-slate-500">{character.background} · {character.alignment}</p>
                </div>
                {onCharacterDelete && (
                    <button
                        type="button"
                        onClick={() => onCharacterDelete(character.id)}
                        aria-label={`Delete ${character.name} from the party roster`}
                        className="rounded-lg border border-rose-800/70 bg-rose-950/40 px-3 py-2 font-sans text-xs font-semibold text-rose-200 transition hover:bg-rose-900/70"
                    >
                        Delete Character
                    </button>
                )}
                <div className="flex flex-wrap gap-2">
                    <div className="rounded-xl border border-amber-200/10 bg-[#090c12] px-3 py-2 text-center">
                        <span className="block text-[10px] uppercase text-slate-500">Armor Class</span>
                        <span className="text-xl font-bold text-white">{character.armorClass}</span>
                    </div>
                    <div className="rounded-xl border border-amber-200/10 bg-[#090c12] px-3 py-2 text-center">
                        <span className="block text-[10px] uppercase text-slate-500">Proficiency</span>
                        <span className="text-xl font-bold text-amber-400">{formatModifier(character.proficiencyBonus)}</span>
                    </div>
                    <div className="rounded-xl border border-amber-200/10 bg-[#090c12] px-3 py-2 text-center">
                        <span className="block text-[10px] uppercase text-slate-500">Hit Points</span>
                        <span className="text-xl font-bold text-emerald-400">{hp}<span className="text-sm text-slate-400"> / {character.maxHp}</span></span>
                        <div className="mt-1 flex justify-center gap-1">
                            <button type="button" onClick={() => handleHpChange(-1)} aria-label="Decrease HP" className="rounded border border-slate-700 bg-slate-800 px-2 py-0.5 text-xs hover:bg-slate-700">-1</button>
                            <button type="button" onClick={() => handleHpChange(1)} aria-label="Increase HP" className="rounded border border-slate-700 bg-slate-800 px-2 py-0.5 text-xs hover:bg-slate-700">+1</button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="mt-4 grid gap-5 md:grid-cols-[160px_1fr]">
                <section className="flex flex-col items-center gap-3">
                    <div className="flex h-40 w-40 items-center justify-center overflow-hidden rounded-2xl border border-amber-200/15 bg-[#090c12] text-center shadow-[0_0_35px_rgba(214,168,79,0.08)]">
                        {isGenerating ? (
                            <div className="flex flex-col items-center gap-2"><span className="h-6 w-6 animate-spin rounded-full border-2 border-amber-500 border-t-transparent" /><span className="animate-pulse text-xs text-amber-500">Weaving Arcana...</span></div>
                        ) : avatarUrl ? <img src={avatarUrl} alt={`${character.name} portrait`} className="h-full w-full object-cover" /> : <span className="text-xs text-slate-500">No Portrait Generated</span>}
                    </div>
                    <button type="button" onClick={handleGenerateArt} disabled={isGenerating} className="w-full rounded-lg bg-gradient-to-r from-amber-700 to-amber-500 px-3 py-2 font-sans text-xs font-bold text-[#17120a] shadow-lg shadow-amber-950/30 transition hover:brightness-110 disabled:cursor-wait disabled:opacity-50">
                        {isGenerating ? 'Summoning…' : '✨ Generate AI Portrait'}
                    </button>
                    {errorMsg && <p role="alert" className="text-center text-[11px] text-rose-400">{errorMsg}</p>}
                </section>

                <section>
                    <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">Ability Scores</h3>
                    <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
                        {statEntries.map(([statName, score]) => (
                            <div key={statName} className="rounded-xl border border-amber-200/10 bg-[#090c12] p-2 text-center">
                                <span className="block text-[10px] font-bold uppercase text-slate-400">{statName.slice(0, 3)}</span>
                                <span className="text-lg font-bold text-white">{score}</span>
                                <span className="block text-xs font-semibold text-amber-500">{formatModifier(calculateModifier(score))}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4">
                        <h3 className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">Visual Traits</h3>
                        <p className="rounded-lg border border-slate-800/60 bg-slate-950 p-3 text-xs italic leading-relaxed text-slate-300">{character.appearanceDescription}</p>
                    </div>
                </section>
            </div>

            <details className="mt-5 rounded-lg border border-slate-800 bg-slate-950 p-3">
                <summary className="cursor-pointer text-xs font-semibold uppercase tracking-wider text-slate-300">Character Details</summary>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div><h3 className="mb-2 text-xs text-slate-400">Skills and Check Bonuses</h3><div className="flex flex-wrap gap-1.5">{character.skills.map((skill) => <span key={skill.name} className={`rounded-full border px-2.5 py-1 text-[11px] ${skill.isProficient ? 'border-amber-700 bg-amber-950/40 text-amber-200' : 'border-slate-700 bg-slate-800 text-slate-400'}`}>{skill.name} {formatModifier(calculateSkillBonus(character.stats[skill.ability], skill.isProficient, character.proficiencyBonus))}</span>)}</div></div>
                    <div><h3 className="mb-2 text-xs text-slate-400">Racial Traits</h3><div className="flex flex-wrap gap-1.5">{renderTags(character.traits)}</div></div>
                    <div><h3 className="mb-2 text-xs text-slate-400">Granted Languages</h3><div className="flex flex-wrap gap-1.5">{renderTags(character.languages)}</div></div>
                    <div><h3 className="mb-2 text-xs text-slate-400">Class Features</h3><div className="flex flex-wrap gap-1.5">{renderTags(character.classFeatures)}</div></div>
                    <div><h3 className="mb-2 text-xs text-slate-400">Background Benefit</h3><div className="flex flex-wrap gap-1.5">{renderTags(character.backgroundFeature ? [character.backgroundFeature] : [])}</div></div>
                    <div><h3 className="mb-2 text-xs text-slate-400">Feats</h3><div className="flex flex-wrap gap-1.5">{renderTags(character.feats)}</div></div>
                    <div><h3 className="mb-2 text-xs text-slate-400">Prepared Spells</h3><div className="flex flex-wrap gap-1.5">{renderTags(character.spells)}</div></div>
                    <div><h3 className="mb-2 text-xs text-slate-400">Inventory</h3><div className="flex flex-wrap gap-1.5">{renderTags(character.inventory)}</div></div>
                </div>
            </details>
        </article>
    );
}
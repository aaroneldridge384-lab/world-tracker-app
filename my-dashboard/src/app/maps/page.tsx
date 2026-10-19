'use client';

import { useState } from 'react';
import MapCanvas from '@/components/MapCanvas';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import type { CampaignMap, StoryNode } from '@/types/campaign';

const INITIAL_MAPS: CampaignMap[] = [{
    id: 'map-default',
    name: 'Untitled Campaign Map',
    width: 1200,
    height: 750,
    drawings: [],
    pins: [],
    gridVisible: true,
    gridOpacity: 0.2,
    gridSize: 50,
    snapToGrid: false,
}];

const EMPTY_STORY_NODES: StoryNode[] = [];

export default function MapsPage() {
    const [maps, setMaps, isLoaded, storageError] = useLocalStorage('dnd-maps', INITIAL_MAPS);
    const [storyNodes, , storyLoaded] = useLocalStorage('dnd-story-nodes', EMPTY_STORY_NODES);
    const [selectedMapId, setSelectedMapId] = useState(INITIAL_MAPS[0].id);
    const selectedMap = maps.find((map) => map.id === selectedMapId) ?? maps[0];

    const addMap = () => {
        const map: CampaignMap = {
            id: crypto.randomUUID(),
            name: `Campaign Map ${maps.length + 1}`,
            width: 1200,
            height: 750,
            drawings: [],
            pins: [],
            gridVisible: true,
            gridOpacity: 0.2,
            gridSize: 50,
            snapToGrid: false,
        };
        setMaps((current) => [...current, map]);
        setSelectedMapId(map.id);
    };

    const updateMap = (updated: CampaignMap) => {
        setMaps((current) => current.map((map) => map.id === updated.id ? updated : map));
    };

    if (!isLoaded || !storyLoaded) return <p className="text-slate-400">Loading map studio…</p>;

    return (
        <main className="space-y-6">
            <header className="fantasy-panel flex flex-wrap items-end justify-between gap-4 rounded-2xl p-6 sm:p-8">
                <div>
                    <p className="fantasy-kicker">Chart the unknown</p>
                    <h1 className="fantasy-heading mt-2 text-3xl font-bold">Map Drawing Studio</h1>
                    <p className="mt-2 max-w-2xl font-sans text-sm text-slate-400">Sketch encounters and world regions. Map vectors and pins save automatically in this browser.</p>
                </div>
                <button type="button" onClick={addMap} className="rounded-lg border border-amber-200/20 bg-gradient-to-r from-amber-700 to-amber-500 px-4 py-2 font-sans text-sm font-bold text-[#17120a] shadow-lg shadow-amber-950/30 transition hover:brightness-110">＋ New Map</button>
            </header>
            {storageError && <p role="alert" className="rounded-lg border border-rose-800 bg-rose-950/40 p-3 font-sans text-sm text-rose-200">{storageError}</p>}
            <div className="fantasy-panel flex flex-wrap items-center gap-3 rounded-xl p-3">
                <label className="flex items-center gap-2 text-sm text-slate-300">
                    Map
                    <select value={selectedMap?.id ?? ''} onChange={(event) => setSelectedMapId(event.target.value)} className="rounded-lg border border-slate-700 bg-[#090c12] px-3 py-2 text-white">
                        {maps.map((map) => <option key={map.id} value={map.id}>{map.name}</option>)}
                    </select>
                </label>
                {selectedMap && (
                    <label className="flex flex-1 items-center gap-2 text-sm text-slate-300">
                        Rename
                        <input value={selectedMap.name} onChange={(event) => updateMap({ ...selectedMap, name: event.target.value })} className="min-w-40 flex-1 rounded-lg border border-slate-700 bg-[#090c12] px-3 py-2 text-white" />
                    </label>
                )}
            </div>
            {selectedMap ? (
                <MapCanvas map={selectedMap} storyNodes={storyNodes} onChange={updateMap} />
            ) : (
                <div className="fantasy-panel rounded-xl p-8 text-center font-sans text-slate-400">Create a map to begin.</div>
            )}
        </main>
    );
}

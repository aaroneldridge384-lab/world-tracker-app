/**
 * @file route.ts
 * @description Dynamic multi-subject image generation for D&D characters, city landscapes, and maps.
 */

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { prompt, characterName, type = 'character' } = body;

        let structuredPrompt = '';
        let width = 512;
        let height = 512;

        // 1. DYNAMIC PROMPT ROUTING BASED ON SUBJECT TYPE
        if (type === 'location' || type === 'city' || type === 'landscape') {
            // Landscape / City view: Wide aspect ratio, focus on architectural and environmental detail
            width = 768;
            height = 512;
            structuredPrompt = `epic high-fantasy matte painting of ${characterName || 'a sprawling medieval fantasy city'}, ${prompt}, panoramic view, detailed fantasy architecture, castle spires, dramatic atmospheric lighting, octane render, 8k resolution, trending on artstation`;
        } else if (type === 'map') {
            // Tactical Map view: Top-down / isometric view
            width = 768;
            height = 768;
            structuredPrompt = `top down battlemap, tabletop rpg cartography, ${prompt}, parchment texture, detailed terrain grid, dungeons and dragons map style, high resolution`;
        } else {
            // Character Portrait / Description
            width = 512;
            height = 512;
            structuredPrompt = `detailed fantasy RPG character portrait of ${characterName || 'an adventurer'}, ${prompt}, full body or bust view, highly detailed attire and weaponry, oil painting style, cinematic fantasy lighting, dnd character design`;
        }

        const encodedPrompt = encodeURIComponent(structuredPrompt);

        // 2. STABLE FREE ENDPOINT GENERATION (NO CREDIT KEYS NEEDED)
        // Seed randomization guarantees unique variations for descriptions
        const randomSeed = Math.floor(Math.random() * 1000000);
        const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=${width}&height=${height}&seed=${randomSeed}&nologo=true&enhance=true`;

        return NextResponse.json({ url: imageUrl });
    } catch (error) {
        console.error('Image generation error:', error);
        return NextResponse.json(
            { error: 'Failed to generate campaign artwork.' },
            { status: 500 }
        );
    }
}
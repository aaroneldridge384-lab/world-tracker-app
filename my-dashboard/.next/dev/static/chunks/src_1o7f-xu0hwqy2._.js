(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/create/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateCharacterPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CharacterWizard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CharacterWizard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockCampaign$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockCampaign.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLocalStorage.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function CreateCharacterPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [characters, setCharacters, isLoaded, storageError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"])('dnd-characters', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockCampaign$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_CHARACTERS"]);
    const handleCharacterCreated = (character)=>{
        setCharacters((current)=>[
                character,
                ...current
            ]);
        router.push('/');
    };
    if (!isLoaded) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-center text-slate-400",
        children: "Loading character creator…"
    }, void 0, false, {
        fileName: "[project]/src/app/create/page.tsx",
        lineNumber: 18,
        columnNumber: 27
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "flex flex-col items-center gap-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "w-full max-w-2xl text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "fantasy-kicker",
                        children: "A new legend begins"
                    }, void 0, false, {
                        fileName: "[project]/src/app/create/page.tsx",
                        lineNumber: 23,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "fantasy-heading mt-2 text-3xl font-bold sm:text-4xl",
                        children: "Character Forge"
                    }, void 0, false, {
                        fileName: "[project]/src/app/create/page.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 font-sans text-sm text-slate-400",
                        children: "Shape an adventurer, then send them into the world."
                    }, void 0, false, {
                        fileName: "[project]/src/app/create/page.tsx",
                        lineNumber: 25,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/create/page.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, this),
            storageError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "alert",
                className: "w-full max-w-2xl rounded-lg border border-rose-800 bg-rose-950/40 p-3 font-sans text-sm text-rose-200",
                children: storageError
            }, void 0, false, {
                fileName: "[project]/src/app/create/page.tsx",
                lineNumber: 27,
                columnNumber: 30
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CharacterWizard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onCharacterCreated: handleCharacterCreated,
                onCancel: ()=>router.push('/')
            }, void 0, false, {
                fileName: "[project]/src/app/create/page.tsx",
                lineNumber: 28,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/create/page.tsx",
        lineNumber: 21,
        columnNumber: 9
    }, this);
}
_s(CreateCharacterPage, "4BD2OlTvZTEbKrJ0Qjd8Ldwh+xA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"]
    ];
});
_c = CreateCharacterPage;
var _c;
__turbopack_context__.k.register(_c, "CreateCharacterPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CharacterWizard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CharacterWizard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dnd$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/dnd.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dndRules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/dndRules.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
/**
 * @file CharacterWizard.tsx
 * @description Step-by-step wizard auto-applying racial traits, languages, and class features.
 */ 'use client';
;
;
;
const ALIGNMENTS = [
    'LG',
    'NG',
    'CG',
    'LN',
    'TN',
    'CN',
    'LE',
    'NE',
    'CE'
];
function CharacterWizard({ onCharacterCreated, onCancel }) {
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    // Core Selections
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [race, setRace] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Wood Elf');
    const [characterClass, setCharacterClass] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Druid');
    const [background, setBackground] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Outlander');
    const [alignment, setAlignment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('NG');
    const [level, setLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    // Auto-populated fields
    const [languages, setLanguages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [traits, setTraits] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [classFeatures, setClassFeatures] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [backgroundFeature, setBackgroundFeature] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [maxHp, setMaxHp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10);
    const [armorClass, setArmorClass] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(14);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        strength: 10,
        dexterity: 14,
        constitution: 12,
        intelligence: 10,
        wisdom: 16,
        charisma: 8
    });
    const [proficientSkills, setProficientSkills] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [feats, setFeats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('War Caster');
    const [spells, setSpells] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Guidance, Entangle');
    const [inventory, setInventory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Quarterstaff, Leather Armor');
    const [appearanceDescription, setAppearanceDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const proficiencyBonus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dnd$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateProficiencyBonus"])(level);
    const racialBonuses = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dndRules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RACE_DATA"][race]?.abilityBonuses ?? {};
    const finalStats = {
        strength: Math.min(30, stats.strength + (racialBonuses.strength ?? 0)),
        dexterity: Math.min(30, stats.dexterity + (racialBonuses.dexterity ?? 0)),
        constitution: Math.min(30, stats.constitution + (racialBonuses.constitution ?? 0)),
        intelligence: Math.min(30, stats.intelligence + (racialBonuses.intelligence ?? 0)),
        wisdom: Math.min(30, stats.wisdom + (racialBonuses.wisdom ?? 0)),
        charisma: Math.min(30, stats.charisma + (racialBonuses.charisma ?? 0))
    };
    // AUTO-APPLY RACE TRAITS & LANGUAGES
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CharacterWizard.useEffect": ()=>{
            const raceRule = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dndRules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RACE_DATA"][race];
            if (raceRule) {
                setLanguages(raceRule.languages);
                setTraits(raceRule.traits);
            }
        }
    }["CharacterWizard.useEffect"], [
        race
    ]);
    // AUTO-APPLY BACKGROUND FEATURE, SKILL PROFICIENCIES & CLASS HP
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CharacterWizard.useEffect": ()=>{
            const classRule = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dndRules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLASS_DATA"][characterClass];
            const backgroundRule = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dndRules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BACKGROUND_DATA"][background];
            setClassFeatures(classRule?.features ?? []);
            setBackgroundFeature(backgroundRule?.feature ?? '');
            const defaultSkills = [
                ...classRule?.defaultProficiencies ?? [],
                ...backgroundRule?.skillProficiencies ?? []
            ];
            setProficientSkills(Object.fromEntries(defaultSkills.map({
                "CharacterWizard.useEffect": (skill)=>[
                        skill,
                        true
                    ]
            }["CharacterWizard.useEffect"])));
            if (classRule) {
                const conModifier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dnd$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateModifier"])(finalStats.constitution);
                const hpPerAdditionalLevel = Math.max(1, Math.floor(classRule.hitDie / 2) + 1 + conModifier);
                setMaxHp(Math.max(1, classRule.hitDie + conModifier + (level - 1) * hpPerAdditionalLevel));
            }
        }
    }["CharacterWizard.useEffect"], [
        background,
        characterClass,
        level,
        race,
        stats.constitution
    ]);
    const toggleSkill = (skillName)=>{
        setProficientSkills((prev)=>({
                ...prev,
                [skillName]: !prev[skillName]
            }));
    };
    const handleStatChange = (stat, val)=>{
        setStats((prev)=>({
                ...prev,
                [stat]: Math.max(1, Math.min(30, val))
            }));
    };
    const handleFinish = (e)=>{
        e.preventDefault();
        if (!name.trim()) return;
        const newCharacter = {
            id: `char-${Date.now()}`,
            name,
            race,
            characterClass,
            background,
            alignment,
            level,
            proficiencyBonus,
            stats: finalStats,
            skills: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dnd$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SKILLS"].map((s)=>({
                    ...s,
                    isProficient: !!proficientSkills[s.name]
                })),
            feats: feats.split(',').map((f)=>f.trim()).filter(Boolean),
            spells: spells.split(',').map((s)=>s.trim()).filter(Boolean),
            backgroundFeature,
            languages,
            traits,
            classFeatures,
            currentHp: maxHp,
            maxHp,
            armorClass,
            inventory: inventory.split(',').map((i)=>i.trim()).filter(Boolean),
            appearanceDescription: appearanceDescription || `${race} ${characterClass} with a distinctive adventurer presence.`
        };
        onCharacterCreated(newCharacter);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fantasy-panel w-full max-w-2xl space-y-6 rounded-2xl p-5 text-slate-100 shadow-2xl sm:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-amber-200/10 pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "fantasy-heading text-amber-300 text-xl font-bold",
                                children: "5e Character Creator"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                lineNumber: 142,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-sans text-xs text-slate-400",
                                children: [
                                    "Step ",
                                    step,
                                    " of 4"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                lineNumber: 143,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CharacterWizard.tsx",
                        lineNumber: 141,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-2 w-full overflow-hidden rounded-full border border-amber-200/10 bg-[#090c12]",
                        role: "progressbar",
                        "aria-label": "Character creation progress",
                        "aria-valuemin": 1,
                        "aria-valuemax": 4,
                        "aria-valuenow": step,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-r from-amber-700 to-amber-300 h-full transition-all duration-300",
                            style: {
                                width: `${step / 4 * 100}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/CharacterWizard.tsx",
                            lineNumber: 153,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CharacterWizard.tsx",
                        lineNumber: 145,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CharacterWizard.tsx",
                lineNumber: 140,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: step === 4 ? handleFinish : (e)=>{
                    e.preventDefault();
                    setStep(step + 1);
                },
                children: [
                    step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-bold uppercase tracking-wider text-slate-300",
                                children: "1. Identity & Ancestry"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                lineNumber: 165,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-slate-400 mb-1",
                                        children: "Character Name"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                        lineNumber: 167,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        required: true,
                                        value: name,
                                        onChange: (e)=>setName(e.target.value),
                                        placeholder: "e.g., Lyra Moonwhisper",
                                        className: "w-full rounded-lg border border-slate-700/80 bg-[#090c12] p-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:border-amber-400/60 focus:outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                        lineNumber: 168,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                lineNumber: 166,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs text-slate-400 mb-1",
                                                children: "Race / Ancestry"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 180,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: race,
                                                onChange: (e)=>setRace(e.target.value),
                                                className: "w-full rounded-lg border border-slate-700/80 bg-[#090c12] p-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:border-amber-400/60 focus:outline-none",
                                                children: Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dndRules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RACE_DATA"]).map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: r,
                                                        children: r
                                                    }, r, false, {
                                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 73
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 181,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                        lineNumber: 179,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs text-slate-400 mb-1",
                                                children: "Background"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 191,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: background,
                                                onChange: (e)=>setBackground(e.target.value),
                                                className: "w-full rounded-lg border border-slate-700/80 bg-[#090c12] p-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:border-amber-400/60 focus:outline-none",
                                                children: Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dndRules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BACKGROUND_DATA"]).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: item,
                                                        children: item
                                                    }, item, false, {
                                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 41
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 192,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                        lineNumber: 190,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                lineNumber: 178,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs text-slate-400 mb-1",
                                                children: "Alignment"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 206,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: alignment,
                                                onChange: (e)=>setAlignment(e.target.value),
                                                className: "w-full rounded-lg border border-slate-700/80 bg-[#090c12] p-2.5 text-sm text-slate-100",
                                                children: ALIGNMENTS.map((value)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: value,
                                                        children: value
                                                    }, value, false, {
                                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 64
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 207,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                        lineNumber: 205,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs text-slate-400 mb-1",
                                                children: "Level"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 216,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                min: "1",
                                                max: "20",
                                                value: level,
                                                onChange: (e)=>setLevel(Math.max(1, Math.min(20, Number(e.target.value)))),
                                                className: "w-full rounded-lg border border-slate-700/80 bg-[#090c12] p-2.5 text-sm text-slate-100"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 217,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                        lineNumber: 215,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                lineNumber: 204,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-slate-700/70 bg-[#0b0f16] p-3 rounded-lg text-xs space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-amber-500",
                                                children: "Auto-Applied Languages: "
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 231,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-300",
                                                children: languages.join(', ')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 232,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                        lineNumber: 230,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-amber-500",
                                                children: "Background Feature: "
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 235,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-300",
                                                children: backgroundFeature
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 236,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                        lineNumber: 234,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-amber-500",
                                                children: "Racial Traits: "
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 239,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-1 mt-1",
                                                children: traits.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-slate-800 px-2 py-0.5 rounded text-[11px] text-slate-300 border border-slate-700",
                                                        children: t
                                                    }, t, false, {
                                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                                        lineNumber: 242,
                                                        columnNumber: 41
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 240,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                        lineNumber: 238,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                lineNumber: 229,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CharacterWizard.tsx",
                        lineNumber: 164,
                        columnNumber: 21
                    }, this),
                    step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-bold uppercase tracking-wider text-slate-300",
                                children: "2. Class Mechanics"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                lineNumber: 255,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 gap-3 sm:grid-cols-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs text-slate-400 mb-1",
                                                children: "Class"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 258,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: characterClass,
                                                onChange: (e)=>setCharacterClass(e.target.value),
                                                className: "w-full rounded-lg border border-slate-700/80 bg-[#090c12] p-2 text-sm text-slate-100",
                                                children: Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dndRules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLASS_DATA"]).map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: c,
                                                        children: c
                                                    }, c, false, {
                                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 74
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 259,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                        lineNumber: 257,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs text-slate-400 mb-1",
                                                children: "Hit Points (Calculated)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 268,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                min: "1",
                                                value: maxHp,
                                                onChange: (e)=>setMaxHp(Number(e.target.value)),
                                                className: "w-full rounded-lg border border-slate-700/80 bg-[#090c12] p-2 text-sm text-slate-100 text-center"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 269,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                        lineNumber: 267,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs text-slate-400 mb-1",
                                                children: "Armor Class (AC)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 278,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                min: "1",
                                                value: armorClass,
                                                onChange: (e)=>setArmorClass(Number(e.target.value)),
                                                className: "w-full rounded-lg border border-slate-700/80 bg-[#090c12] p-2 text-sm text-slate-100 text-center"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 279,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                        lineNumber: 277,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                lineNumber: 256,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-slate-700/70 bg-[#0b0f16] p-3 rounded-lg text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-amber-500 block mb-1",
                                        children: "Auto-Applied Class Features:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                        lineNumber: 291,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-1",
                                        children: classFeatures.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-slate-800 px-2 py-0.5 rounded text-[11px] text-slate-300 border border-slate-700",
                                                children: f
                                            }, f, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 294,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                        lineNumber: 292,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                lineNumber: 290,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-slate-400 mb-2",
                                        children: "Ability Scores"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                        lineNumber: 302,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3",
                                        children: Object.keys(stats).map((st)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-lg border border-amber-200/10 bg-[#090c12] p-2 text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block text-[10px] uppercase font-bold text-slate-400",
                                                        children: st.slice(0, 3)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                                        lineNumber: 306,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        min: "1",
                                                        max: "30",
                                                        value: finalStats[st],
                                                        onChange: (e)=>handleStatChange(st, Number(e.target.value) - (racialBonuses[st] ?? 0)),
                                                        className: "my-1 w-full rounded border border-slate-700 bg-[#090c12] p-1 text-center text-sm font-bold text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                                        lineNumber: 307,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-bold text-amber-500",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dnd$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatModifier"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dnd$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateModifier"])(finalStats[st]))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                                        lineNumber: 315,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, st, true, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 305,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                        lineNumber: 303,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                lineNumber: 301,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CharacterWizard.tsx",
                        lineNumber: 254,
                        columnNumber: 21
                    }, this),
                    step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-bold uppercase tracking-wider text-slate-300",
                                        children: "3. Skills, Feats & Spells"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                        lineNumber: 329,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-amber-500",
                                        children: [
                                            "Proficiency Bonus: ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dnd$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatModifier"])(proficiencyBonus)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                        lineNumber: 330,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                lineNumber: 328,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-1",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dnd$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SKILLS"].map((sk)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: `flex items-center justify-between p-2 rounded-lg border text-xs cursor-pointer transition ${proficientSkills[sk.name] ? 'bg-amber-950/40 border-amber-600/60 text-white' : 'bg-[#090c12] border-slate-800 text-slate-400'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: sk.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 341,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: !!proficientSkills[sk.name],
                                                onChange: ()=>toggleSkill(sk.name),
                                                className: "accent-amber-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 342,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, sk.name, true, {
                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                        lineNumber: 334,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                lineNumber: 332,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs text-slate-400 mb-1",
                                                children: "Feats (comma separated)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 353,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: feats,
                                                onChange: (e)=>setFeats(e.target.value),
                                                placeholder: "e.g., War Caster",
                                                className: "w-full rounded-lg border border-slate-700/80 bg-[#090c12] p-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:border-amber-400/60 focus:outline-none"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 354,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                        lineNumber: 352,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs text-slate-400 mb-1",
                                                children: "Spells (comma separated)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 363,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: spells,
                                                onChange: (e)=>setSpells(e.target.value),
                                                placeholder: "e.g., Guidance, Entangle",
                                                className: "w-full rounded-lg border border-slate-700/80 bg-[#090c12] p-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:border-amber-400/60 focus:outline-none"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 364,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                        lineNumber: 362,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                lineNumber: 351,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CharacterWizard.tsx",
                        lineNumber: 327,
                        columnNumber: 21
                    }, this),
                    step === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-bold uppercase tracking-wider text-slate-300",
                                children: "4. Inventory & Visual Traits"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                lineNumber: 378,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-slate-400 mb-1",
                                        children: "Equipment (comma separated)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                        lineNumber: 380,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: inventory,
                                        onChange: (e)=>setInventory(e.target.value),
                                        placeholder: "Quarterstaff, Leather Armor",
                                        className: "w-full rounded-lg border border-slate-700/80 bg-[#090c12] p-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:border-amber-400/60 focus:outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                        lineNumber: 381,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                lineNumber: 379,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-slate-400 mb-1",
                                        children: "Visual Appearance Prompt"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                        lineNumber: 390,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        rows: 3,
                                        value: appearanceDescription,
                                        onChange: (e)=>setAppearanceDescription(e.target.value),
                                        placeholder: "A silver-haired wood elf in emerald robes holding an oak quarterstaff...",
                                        className: "w-full rounded-lg border border-slate-700/80 bg-[#090c12] p-2.5 text-xs text-slate-100 placeholder:text-slate-600 resize-none focus:border-amber-400/60 focus:outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                        lineNumber: 391,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                lineNumber: 389,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CharacterWizard.tsx",
                        lineNumber: 377,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 flex items-center justify-between border-t border-amber-200/10 pt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: step === 1 ? onCancel : ()=>setStep(step - 1),
                                className: "rounded-lg border border-slate-700 bg-slate-800/80 px-4 py-2 text-xs text-slate-200 transition hover:border-amber-300/30 hover:bg-slate-700",
                                children: step === 1 ? 'Cancel' : '← Back'
                            }, void 0, false, {
                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                lineNumber: 404,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "rounded-lg bg-gradient-to-r from-amber-700 to-amber-500 px-5 py-2 font-sans text-xs font-bold text-[#17120a] shadow-lg shadow-amber-950/30 transition hover:brightness-110 disabled:opacity-50",
                                children: step === 4 ? '✨ Forge Character Sheet' : 'Next Step →'
                            }, void 0, false, {
                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                lineNumber: 412,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CharacterWizard.tsx",
                        lineNumber: 403,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CharacterWizard.tsx",
                lineNumber: 160,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CharacterWizard.tsx",
        lineNumber: 138,
        columnNumber: 9
    }, this);
}
_s(CharacterWizard, "g/MeS5q+KfAnYz9jrlaSqyjwoCI=");
_c = CharacterWizard;
var _c;
__turbopack_context__.k.register(_c, "CharacterWizard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/dndRules.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @file dndRules.ts
 * @description Reference rules database for auto-populating racial traits,
 * languages, class features, and proficiency bonuses.
 */ __turbopack_context__.s([
    "BACKGROUND_DATA",
    ()=>BACKGROUND_DATA,
    "CLASS_DATA",
    ()=>CLASS_DATA,
    "RACE_DATA",
    ()=>RACE_DATA
]);
const RACE_DATA = {
    'Wood Elf': {
        languages: [
            'Common',
            'Elvish'
        ],
        abilityBonuses: {
            dexterity: 2,
            wisdom: 1
        },
        traits: [
            'Darkvision',
            'Fey Ancestry',
            'Trance',
            'Mask of the Wild (Fleet of Foot)'
        ]
    },
    'High Elf': {
        languages: [
            'Common',
            'Elvish',
            'Extra Language'
        ],
        abilityBonuses: {
            dexterity: 2,
            intelligence: 1
        },
        traits: [
            'Darkvision',
            'Fey Ancestry',
            'Trance',
            'Cantrip'
        ]
    },
    'Mountain Dwarf': {
        languages: [
            'Common',
            'Dwarvish'
        ],
        abilityBonuses: {
            strength: 2,
            constitution: 2
        },
        traits: [
            'Darkvision',
            'Dwarven Resilience',
            'Dwarven Combat Training',
            'Dwarven Armor Training'
        ]
    },
    'Human': {
        languages: [
            'Common',
            'One Extra Language'
        ],
        abilityBonuses: {
            strength: 1,
            dexterity: 1,
            constitution: 1,
            intelligence: 1,
            wisdom: 1,
            charisma: 1
        },
        traits: [
            'Versatile'
        ]
    },
    'Tiefling': {
        languages: [
            'Common',
            'Infernal'
        ],
        abilityBonuses: {
            charisma: 2,
            intelligence: 1
        },
        traits: [
            'Darkvision',
            'Hellish Resistance',
            'Hellfire Legacy'
        ]
    },
    'Halfling': {
        languages: [
            'Common',
            'Halfling'
        ],
        abilityBonuses: {
            dexterity: 2
        },
        traits: [
            'Lucky',
            'Brave',
            'Halfling Nimbleness'
        ]
    },
    'Dragonborn': {
        languages: [
            'Common',
            'Draconic'
        ],
        abilityBonuses: {
            strength: 2,
            charisma: 1
        },
        traits: [
            'Draconic Ancestry',
            'Breath Weapon',
            'Damage Resistance'
        ]
    },
    'Half-Orc': {
        languages: [
            'Common',
            'Orc'
        ],
        abilityBonuses: {
            strength: 2,
            constitution: 1
        },
        traits: [
            'Darkvision',
            'Relentless Endurance',
            'Savage Attacks'
        ]
    }
};
const CLASS_DATA = {
    Druid: {
        hitDie: 8,
        savingThrows: [
            'intelligence',
            'wisdom'
        ],
        features: [
            'Druidic Language',
            'Spellcasting',
            'Wild Shape'
        ],
        defaultProficiencies: [
            'Perception',
            'Survival'
        ]
    },
    Rogue: {
        hitDie: 8,
        savingThrows: [
            'dexterity',
            'intelligence'
        ],
        features: [
            'Expertise',
            'Sneak Attack (1d6)',
            'Thieves\' Cant'
        ],
        defaultProficiencies: [
            'Stealth',
            'Acrobatics',
            'Sleight of Hand',
            'Deception'
        ]
    },
    Wizard: {
        hitDie: 6,
        savingThrows: [
            'intelligence',
            'wisdom'
        ],
        features: [
            'Spellcasting',
            'Arcane Recovery'
        ],
        defaultProficiencies: [
            'Arcana',
            'History'
        ]
    },
    Fighter: {
        hitDie: 10,
        savingThrows: [
            'strength',
            'constitution'
        ],
        features: [
            'Fighting Style',
            'Second Wind'
        ],
        defaultProficiencies: [
            'Athletics',
            'Intimidation'
        ]
    },
    Cleric: {
        hitDie: 8,
        savingThrows: [
            'wisdom',
            'charisma'
        ],
        features: [
            'Spellcasting',
            'Divine Domain'
        ],
        defaultProficiencies: [
            'Insight',
            'Religion'
        ]
    },
    Paladin: {
        hitDie: 10,
        savingThrows: [
            'wisdom',
            'charisma'
        ],
        features: [
            'Divine Sense',
            'Lay on Hands'
        ],
        defaultProficiencies: [
            'Athletics',
            'Persuasion'
        ]
    },
    Bard: {
        hitDie: 8,
        savingThrows: [
            'dexterity',
            'charisma'
        ],
        features: [
            'Spellcasting',
            'Bardic Inspiration'
        ],
        defaultProficiencies: [
            'Performance',
            'Persuasion',
            'Deception'
        ]
    },
    Warlock: {
        hitDie: 8,
        savingThrows: [
            'wisdom',
            'charisma'
        ],
        features: [
            'Otherworldly Patron',
            'Pact Magic'
        ],
        defaultProficiencies: [
            'Arcana',
            'Intimidation'
        ]
    },
    Barbarian: {
        hitDie: 12,
        savingThrows: [
            'strength',
            'constitution'
        ],
        features: [
            'Rage',
            'Unarmored Defense'
        ],
        defaultProficiencies: [
            'Athletics',
            'Nature'
        ]
    },
    Ranger: {
        hitDie: 10,
        savingThrows: [
            'strength',
            'dexterity'
        ],
        features: [
            'Favored Enemy',
            'Natural Explorer'
        ],
        defaultProficiencies: [
            'Perception',
            'Survival'
        ]
    }
};
const BACKGROUND_DATA = {
    'Acolyte': {
        feature: 'Shelter of the Faithful',
        skillProficiencies: [
            'Insight',
            'Religion'
        ],
        toolProficiencies: [],
        bonusLanguages: 2
    },
    'Criminal': {
        feature: 'Criminal Contact',
        skillProficiencies: [
            'Deception',
            'Stealth'
        ],
        toolProficiencies: [
            'Gaming set',
            'Thieves\' tools'
        ],
        bonusLanguages: 0
    },
    'Folk Hero': {
        feature: 'Rustic Hospitality',
        skillProficiencies: [
            'Animal Handling',
            'Survival'
        ],
        toolProficiencies: [
            'Artisan\'s tools',
            'Land vehicles'
        ],
        bonusLanguages: 0
    },
    'Noble': {
        feature: 'Position of Privilege',
        skillProficiencies: [
            'History',
            'Persuasion'
        ],
        toolProficiencies: [
            'Gaming set'
        ],
        bonusLanguages: 1
    },
    'Sage': {
        feature: 'Researcher',
        skillProficiencies: [
            'Arcana',
            'History'
        ],
        toolProficiencies: [],
        bonusLanguages: 2
    },
    'Soldier': {
        feature: 'Military Rank',
        skillProficiencies: [
            'Athletics',
            'Intimidation'
        ],
        toolProficiencies: [
            'Gaming set',
            'Land vehicles'
        ],
        bonusLanguages: 0
    },
    'Outlander': {
        feature: 'Wanderer',
        skillProficiencies: [
            'Athletics',
            'Survival'
        ],
        toolProficiencies: [
            'Musical instrument'
        ],
        bonusLanguages: 1
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/mockCampaign.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INITIAL_CHARACTERS",
    ()=>INITIAL_CHARACTERS,
    "INITIAL_LOCATIONS",
    ()=>INITIAL_LOCATIONS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dnd$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/dnd.ts [app-client] (ecmascript)");
;
const INITIAL_CHARACTERS = [
    {
        id: 'char-1',
        name: 'Lyra Moonwhisper',
        race: 'Wood Elf',
        characterClass: 'Circle of the Land Druid',
        background: 'Outlander',
        alignment: 'NG',
        level: 4,
        proficiencyBonus: 2,
        stats: {
            strength: 8,
            dexterity: 14,
            constitution: 14,
            intelligence: 12,
            wisdom: 17,
            charisma: 10
        },
        currentHp: 31,
        maxHp: 31,
        armorClass: 14,
        skills: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dnd$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SKILLS"].map((skill)=>({
                ...skill,
                isProficient: [
                    'Perception',
                    'Survival'
                ].includes(skill.name)
            })),
        feats: [
            'War Caster'
        ],
        spells: [
            'Guidance',
            'Entangle',
            'Cure Wounds'
        ],
        backgroundFeature: 'Wanderer',
        languages: [
            'Common',
            'Elvish'
        ],
        traits: [
            'Darkvision',
            'Fey Ancestry',
            'Trance',
            'Mask of the Wild (Fleet of Foot)'
        ],
        classFeatures: [
            'Druidic Language',
            'Spellcasting',
            'Wild Shape'
        ],
        inventory: [
            'Quarterstaff',
            'Leather Armor',
            'Herbalism Kit',
            'Component Pouch'
        ],
        appearanceDescription: 'A weathered wood elf with silver hair, wearing deep emerald robes adorned with woven vines.'
    }
];
const INITIAL_LOCATIONS = [
    {
        id: 'loc-1',
        name: 'Oakhaven',
        type: 'Town',
        summary: 'A secluded woodland settlement built into the massive branches of ancient sentient redwoods.',
        notableFeatures: [
            'The Whispering Roots Tavern',
            'A guarded tree-bridge entrance',
            'High-altitude botanical gardens'
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useLocalStorage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLocalStorage",
    ()=>useLocalStorage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useLocalStorage(key, initialValue) {
    _s();
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialValue);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [storageError, setStorageError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLocalStorage.useEffect": ()=>{
            try {
                const storedValue = window.localStorage.getItem(key);
                if (storedValue !== null) {
                    setValue(JSON.parse(storedValue));
                }
            } catch  {
                setStorageError('Saved campaign data could not be read.');
            } finally{
                setIsLoaded(true);
            }
            const syncFromAnotherTab = {
                "useLocalStorage.useEffect.syncFromAnotherTab": (event)=>{
                    if (event.key !== key) return;
                    if (event.newValue === null) {
                        setValue(typeof initialValue === 'function' ? initialValue() : initialValue);
                        return;
                    }
                    try {
                        setValue(JSON.parse(event.newValue));
                    } catch  {
                        setStorageError('Campaign data changed in another tab but could not be read.');
                    }
                }
            }["useLocalStorage.useEffect.syncFromAnotherTab"];
            window.addEventListener('storage', syncFromAnotherTab);
            return ({
                "useLocalStorage.useEffect": ()=>window.removeEventListener('storage', syncFromAnotherTab)
            })["useLocalStorage.useEffect"];
        }
    }["useLocalStorage.useEffect"], [
        key,
        initialValue
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLocalStorage.useEffect": ()=>{
            if (!isLoaded) return;
            try {
                window.localStorage.setItem(key, JSON.stringify(value));
                setStorageError(null);
            } catch  {
                setStorageError('Campaign data could not be saved. Browser storage may be full.');
            }
        }
    }["useLocalStorage.useEffect"], [
        key,
        isLoaded,
        value
    ]);
    return [
        value,
        setValue,
        isLoaded,
        storageError
    ];
}
_s(useLocalStorage, "yDI0VwPdAvM/ojGqavtfhFIVbAU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/dnd.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @file dnd.ts
 * @description Rules engine helper functions for D&D 5e calculations.
 */ __turbopack_context__.s([
    "DEFAULT_SKILLS",
    ()=>DEFAULT_SKILLS,
    "calculateModifier",
    ()=>calculateModifier,
    "calculateProficiencyBonus",
    ()=>calculateProficiencyBonus,
    "calculateSkillBonus",
    ()=>calculateSkillBonus,
    "formatModifier",
    ()=>formatModifier
]);
function calculateModifier(statValue) {
    return Math.floor((statValue - 10) / 2);
}
function formatModifier(mod) {
    return mod >= 0 ? `+${mod}` : `${mod}`;
}
function calculateProficiencyBonus(level) {
    return Math.ceil(1 + level / 4);
}
function calculateSkillBonus(statValue, isProficient, proficiencyBonus) {
    const mod = calculateModifier(statValue);
    return isProficient ? mod + proficiencyBonus : mod;
}
const DEFAULT_SKILLS = [
    {
        name: 'Acrobatics',
        ability: 'dexterity'
    },
    {
        name: 'Animal Handling',
        ability: 'wisdom'
    },
    {
        name: 'Arcana',
        ability: 'intelligence'
    },
    {
        name: 'Athletics',
        ability: 'strength'
    },
    {
        name: 'Deception',
        ability: 'charisma'
    },
    {
        name: 'History',
        ability: 'intelligence'
    },
    {
        name: 'Insight',
        ability: 'wisdom'
    },
    {
        name: 'Intimidation',
        ability: 'charisma'
    },
    {
        name: 'Investigation',
        ability: 'intelligence'
    },
    {
        name: 'Medicine',
        ability: 'wisdom'
    },
    {
        name: 'Nature',
        ability: 'intelligence'
    },
    {
        name: 'Perception',
        ability: 'wisdom'
    },
    {
        name: 'Performance',
        ability: 'charisma'
    },
    {
        name: 'Persuasion',
        ability: 'charisma'
    },
    {
        name: 'Religion',
        ability: 'intelligence'
    },
    {
        name: 'Sleight of Hand',
        ability: 'dexterity'
    },
    {
        name: 'Stealth',
        ability: 'dexterity'
    },
    {
        name: 'Survival',
        ability: 'wisdom'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=src_1o7f-xu0hwqy2._.js.map
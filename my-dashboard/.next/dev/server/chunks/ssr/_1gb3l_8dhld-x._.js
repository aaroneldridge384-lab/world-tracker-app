(()=>{"use strict";module.exports = [
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockCampaign$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockCampaign.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CharacterSheetCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CharacterSheetCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CharacterWizard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CharacterWizard.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function Home() {
    const [characters, setCharacters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockCampaign$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INITIAL_CHARACTERS"]);
    const [isCreating, setIsCreating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleAddCharacter = (newChar)=>{
        setCharacters((prev)=>[
                newChar,
                ...prev
            ]);
        setIsCreating(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-slate-950 flex flex-col items-center justify-start p-6 space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-extrabold text-amber-500",
                        children: "D&D Campaign Manager"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 21,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-400 text-sm mt-1",
                        children: "Portfolio Project Prototype"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 22,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 bg-slate-900 p-1.5 rounded-xl border border-slate-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsCreating(false),
                        className: `px-4 py-2 text-xs font-semibold rounded-lg transition ${!isCreating ? 'bg-amber-600 text-white shadow' : 'text-slate-400 hover:text-white'}`,
                        children: [
                            "Party Roster (",
                            characters.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 26,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsCreating(true),
                        className: `px-4 py-2 text-xs font-semibold rounded-lg transition ${isCreating ? 'bg-amber-600 text-white shadow' : 'text-slate-400 hover:text-white'}`,
                        children: "+ 5e Creation Wizard"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 33,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 25,
                columnNumber: 13
            }, this),
            isCreating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CharacterWizard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onCharacterCreated: handleAddCharacter,
                onCancel: ()=>setIsCreating(false)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 43,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-6 w-full items-center",
                children: characters.map((character)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CharacterSheetCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        character: character
                    }, character.id, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 50,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 48,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/CharacterSheetCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CharacterSheetCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dnd$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/dnd.ts [app-ssr] (ecmascript)");
/**
 * @file CharacterSheetCard.tsx
 * @description Interactive React component displaying a D&D character sheet
 * with live HP controls and AI portrait generation.
 */ 'use client';
;
;
;
function CharacterSheetCard({ character }) {
    // State for HP tracking
    const [hp, setHp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(character.currentHp);
    // State for AI Art Generation
    const [avatarUrl, setAvatarUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(character.avatarUrl || null);
    const [isGenerating, setIsGenerating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorMsg, setErrorMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleHpChange = (delta)=>{
        setHp((prevHp)=>{
            const nextHp = prevHp + delta;
            return Math.min(character.maxHp, Math.max(0, nextHp));
        });
    };
    /**
     * Calls our Next.js API route (/api/generate-art) to generate character portrait
     */ const handleGenerateArt = async ()=>{
        setIsGenerating(true);
        setErrorMsg(null);
        try {
            const response = await fetch('/api/generate-art', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    characterName: character.name,
                    prompt: character.appearanceDescription
                })
            });
            if (!response.ok) {
                throw new Error('Failed to generate portrait');
            }
            const data = await response.json();
            setAvatarUrl(data.url);
        } catch (err) {
            setErrorMsg('Could not summon portrait. Try again!');
            console.error(err);
        } finally{
            setIsGenerating(false);
        }
    };
    const statEntries = Object.entries(character.stats);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-md w-full bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-xl space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-start border-b border-slate-800 pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-amber-500",
                                children: character.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/CharacterSheetCard.tsx",
                                lineNumber: 72,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-slate-400",
                                children: [
                                    "Level ",
                                    character.level,
                                    " • ",
                                    character.characterClass
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CharacterSheetCard.tsx",
                                lineNumber: 73,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CharacterSheetCard.tsx",
                        lineNumber: 71,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs uppercase tracking-wider text-slate-400 font-medium",
                                children: "Hit Points"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CharacterSheetCard.tsx",
                                lineNumber: 80,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg font-semibold text-emerald-400",
                                children: [
                                    hp,
                                    " / ",
                                    character.maxHp,
                                    " HP"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CharacterSheetCard.tsx",
                                lineNumber: 81,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-1 mt-1 justify-end",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleHpChange(-1),
                                        "aria-label": "Decrease HP",
                                        className: "px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-xs rounded border border-slate-700 transition",
                                        children: "-1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CharacterSheetCard.tsx",
                                        lineNumber: 85,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleHpChange(1),
                                        "aria-label": "Increase HP",
                                        className: "px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-xs rounded border border-slate-700 transition",
                                        children: "+1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CharacterSheetCard.tsx",
                                        lineNumber: 92,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CharacterSheetCard.tsx",
                                lineNumber: 84,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CharacterSheetCard.tsx",
                        lineNumber: 79,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CharacterSheetCard.tsx",
                lineNumber: 70,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-3 bg-slate-950 p-4 rounded-lg border border-slate-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-40 h-40 bg-slate-900 border border-slate-800 rounded-lg overflow-hidden flex items-center justify-center text-center p-2 relative",
                        children: isGenerating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-6 h-6 border-2 border-amber-500 border-t-transparent rounded-full animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CharacterSheetCard.tsx",
                                    lineNumber: 108,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-amber-500 animate-pulse",
                                    children: "Weaving Arcana..."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CharacterSheetCard.tsx",
                                    lineNumber: 109,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CharacterSheetCard.tsx",
                            lineNumber: 107,
                            columnNumber: 25
                        }, this) : avatarUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: avatarUrl,
                            alt: character.name,
                            className: "w-full h-full object-cover transition-opacity duration-300"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CharacterSheetCard.tsx",
                            lineNumber: 112,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-slate-500",
                            children: "No Portrait Generated"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CharacterSheetCard.tsx",
                            lineNumber: 118,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CharacterSheetCard.tsx",
                        lineNumber: 105,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleGenerateArt,
                        disabled: isGenerating,
                        className: "w-full py-2 px-4 bg-amber-600 hover:bg-amber-500 disabled:bg-slate-800 text-white font-semibold text-xs rounded-md transition shadow-md flex items-center justify-center gap-2",
                        children: isGenerating ? 'Summoning...' : '✨ Generate AI Portrait'
                    }, void 0, false, {
                        fileName: "[project]/src/components/CharacterSheetCard.tsx",
                        lineNumber: 122,
                        columnNumber: 17
                    }, this),
                    errorMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] text-rose-400",
                        children: errorMsg
                    }, void 0, false, {
                        fileName: "[project]/src/components/CharacterSheetCard.tsx",
                        lineNumber: 130,
                        columnNumber: 30
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CharacterSheetCard.tsx",
                lineNumber: 104,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xs uppercase tracking-wider text-slate-400 mb-1 font-semibold",
                        children: "Visual Traits"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CharacterSheetCard.tsx",
                        lineNumber: 135,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-slate-300 italic bg-slate-950 p-3 rounded-lg border border-slate-800/60 leading-relaxed",
                        children: [
                            '"',
                            character.appearanceDescription,
                            '"'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CharacterSheetCard.tsx",
                        lineNumber: 138,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CharacterSheetCard.tsx",
                lineNumber: 134,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xs uppercase tracking-wider text-slate-400 mb-2 font-semibold",
                        children: "Ability Scores"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CharacterSheetCard.tsx",
                        lineNumber: 145,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 gap-3",
                        children: statEntries.map(([statName, score])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-950 border border-slate-800 rounded-lg p-2 text-center flex flex-col justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-[10px] uppercase font-bold text-slate-400",
                                        children: statName.slice(0, 3)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CharacterSheetCard.tsx",
                                        lineNumber: 154,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-bold text-white",
                                        children: score
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CharacterSheetCard.tsx",
                                        lineNumber: 157,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-xs font-semibold text-amber-500",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dnd$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatModifier"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dnd$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateModifier"])(score))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CharacterSheetCard.tsx",
                                        lineNumber: 158,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, statName, true, {
                                fileName: "[project]/src/components/CharacterSheetCard.tsx",
                                lineNumber: 150,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/CharacterSheetCard.tsx",
                        lineNumber: 148,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CharacterSheetCard.tsx",
                lineNumber: 144,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xs uppercase tracking-wider text-slate-400 mb-2 font-semibold",
                        children: "Inventory"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CharacterSheetCard.tsx",
                        lineNumber: 168,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-1.5",
                        children: character.inventory.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs bg-slate-800 border border-slate-700/80 px-2.5 py-1 rounded-full text-slate-300",
                                children: item
                            }, idx, false, {
                                fileName: "[project]/src/components/CharacterSheetCard.tsx",
                                lineNumber: 173,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/CharacterSheetCard.tsx",
                        lineNumber: 171,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CharacterSheetCard.tsx",
                lineNumber: 167,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CharacterSheetCard.tsx",
        lineNumber: 67,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/CharacterWizard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CharacterWizard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dnd$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/dnd.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dndRules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/dndRules.ts [app-ssr] (ecmascript)");
/**
 * @file CharacterWizard.tsx
 * @description Step-by-step wizard auto-applying racial traits, languages, and class features.
 */ 'use client';
;
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
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    // Core Selections
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [race, setRace] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Wood Elf');
    const [characterClass, setCharacterClass] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Druid');
    const [background1, setBackground] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Outlander');
    const [alignment, setAlignment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('NG');
    const [level, setLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    // Auto-populated fields
    const [languages, setLanguages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [traits, setTraits] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [classFeatures, setClassFeatures] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [maxHp, setMaxHp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(10);
    const [armorClass, setArmorClass] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(14);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        strength: 10,
        dexterity: 14,
        constitution: 12,
        intelligence: 10,
        wisdom: 16,
        charisma: 8
    });
    const [proficientSkills, setProficientSkills1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [feats, setFeats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('War Caster');
    const [spells, setSpells] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Guidance, Entangle');
    const [inventory, setInventory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Quarterstaff, Leather Armor');
    const [appearanceDescription, setAppearanceDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const proficiencyBonus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dnd$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateProficiencyBonus"])(level);
    // AUTO-APPLY RACE TRAITS & LANGUAGES
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const raceRule = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dndRules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RACE_DATA"][race];
        if (raceRule) {
            setLanguages(raceRule.languages);
            setTraits(raceRule.traits);
        }
    }, [
        race
    ]);
    // AUTO-APPLY CLASS FEATURES & RECOMMENDED HP
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const classRule = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dndRules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CLASS_DATA"][characterClass];
        if (classRule) {
            setClassFeatures(classRule.features);
            // Auto-calculate Level 1 HP base: Hit Die + CON Modifier
            const conMod = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dnd$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateModifier"])(stats.constitution);
            setMaxHp(classRule.hitDie + conMod);
            // Auto-check default class skill proficiencies
            const newSkills = {};
            classRule.defaultProficiencies.forEach((skillName)=>{
                newSkills[skillName] = true;
            });
            setProficientSkills1(newSkills);
        }
    }, [
        characterClass,
        stats.constitution
    ]);
    const toggleSkill = (skillName)=>{
        setProficientSkills1((prev)=>({
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
            background: background1,
            alignment,
            level,
            proficiencyBonus,
            stats,
            skills: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dnd$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_SKILLS"].map((s)=>({
                    ...s,
                    isProficient: !!proficientSkills[s.name]
                })),
            feats: feats.split(',').map((f)=>f.trim()).filter(Boolean),
            spells: spells.split(',').map((s)=>s.trim()).filter(Boolean),
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-2xl w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-100 shadow-2xl space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-slate-800 pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-amber-500",
                                children: "5e Character Creator"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                lineNumber: 129,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-semibold text-slate-400",
                                children: [
                                    "Step ",
                                    step,
                                    " of 4"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                lineNumber: 130,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CharacterWizard.tsx",
                        lineNumber: 128,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-amber-500 h-full transition-all duration-300",
                            style: {
                                width: `${step / 4 * 100}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/CharacterWizard.tsx",
                            lineNumber: 133,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CharacterWizard.tsx",
                        lineNumber: 132,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CharacterWizard.tsx",
                lineNumber: 127,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: step === 4 ? handleFinish : (e)=>{
                    e.preventDefault();
                    setStep(step + 1);
                },
                children: [
                    step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-bold uppercase tracking-wider text-slate-300",
                                children: "1. Identity & Ancestry"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                lineNumber: 145,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-slate-400 mb-1",
                                        children: "Character Name"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                        lineNumber: 147,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        required: true,
                                        value: name,
                                        onChange: (e)=>setName(e.target.value),
                                        placeholder: "e.g., Lyra Moonwhisper",
                                        className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                        lineNumber: 148,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                lineNumber: 146,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs text-slate-400 mb-1",
                                                children: "Race / Ancestry"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 160,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: race,
                                                onChange: (e)=>setRace(e.target.value),
                                                className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-500",
                                                children: Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dndRules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RACE_DATA"]).map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: r,
                                                        children: r
                                                    }, r, false, {
                                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 73
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 161,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                        lineNumber: 159,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs text-slate-400 mb-1",
                                                children: "Background"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 171,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: background1,
                                                onChange: (e)=>setBackground(e.target.value),
                                                className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 172,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                        lineNumber: 170,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                lineNumber: 158,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-amber-500",
                                                children: "Auto-Applied Languages: "
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 184,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-300",
                                                children: languages.join(', ')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 185,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                        lineNumber: 183,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-amber-500",
                                                children: "Racial Traits: "
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 188,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-1 mt-1",
                                                children: traits.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-slate-800 px-2 py-0.5 rounded text-[11px] text-slate-300 border border-slate-700",
                                                        children: t
                                                    }, t, false, {
                                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 41
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 189,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                        lineNumber: 187,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                lineNumber: 182,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CharacterWizard.tsx",
                        lineNumber: 144,
                        columnNumber: 21
                    }, this),
                    step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-bold uppercase tracking-wider text-slate-300",
                                children: "2. Class Mechanics"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                lineNumber: 204,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-3 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs text-slate-400 mb-1",
                                                children: "Class"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 207,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: characterClass,
                                                onChange: (e)=>setCharacterClass(e.target.value),
                                                className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-sm text-white",
                                                children: Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dndRules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CLASS_DATA"]).map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: c,
                                                        children: c
                                                    }, c, false, {
                                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 74
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 208,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                        lineNumber: 206,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs text-slate-400 mb-1",
                                                children: "Hit Points (Calculated)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 217,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                min: "1",
                                                value: maxHp,
                                                onChange: (e)=>setMaxHp(Number(e.target.value)),
                                                className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-sm text-white text-center"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 218,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                        lineNumber: 216,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs text-slate-400 mb-1",
                                                children: "Armor Class (AC)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 227,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                min: "1",
                                                value: armorClass,
                                                onChange: (e)=>setArmorClass(Number(e.target.value)),
                                                className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-sm text-white text-center"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 228,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                        lineNumber: 226,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                lineNumber: 205,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-amber-500 block mb-1",
                                        children: "Auto-Applied Class Features:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                        lineNumber: 240,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-1",
                                        children: classFeatures.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-slate-800 px-2 py-0.5 rounded text-[11px] text-slate-300 border border-slate-700",
                                                children: f
                                            }, f, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 243,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                        lineNumber: 241,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                lineNumber: 239,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-slate-400 mb-2",
                                        children: "Ability Scores"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                        lineNumber: 251,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-3 gap-3",
                                        children: Object.keys(stats).map((st)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-slate-950 border border-slate-800 rounded-lg p-2 text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block text-[10px] uppercase font-bold text-slate-400",
                                                        children: st.slice(0, 3)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                                        lineNumber: 255,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        min: "1",
                                                        max: "30",
                                                        value: stats[st],
                                                        onChange: (e)=>handleStatChange(st, Number(e.target.value)),
                                                        className: "w-full bg-slate-900 border border-slate-700 rounded text-center text-sm font-bold text-white p-1 my-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                                        lineNumber: 256,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-bold text-amber-500",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dnd$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatModifier"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dnd$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateModifier"])(stats[st]))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, st, true, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 254,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                        lineNumber: 252,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                lineNumber: 250,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CharacterWizard.tsx",
                        lineNumber: 203,
                        columnNumber: 21
                    }, this),
                    step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-bold uppercase tracking-wider text-slate-300",
                                children: "3. Skills & Spellcasting"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                lineNumber: 277,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-1",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dnd$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_SKILLS"].map((sk)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: `flex items-center justify-between p-2 rounded-lg border text-xs cursor-pointer transition ${proficientSkills[sk.name] ? 'bg-amber-950/40 border-amber-600/60 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: sk.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 287,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: !!proficientSkills[sk.name],
                                                onChange: ()=>toggleSkill(sk.name),
                                                className: "accent-amber-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                                lineNumber: 288,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, sk.name, true, {
                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                        lineNumber: 280,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                lineNumber: 278,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CharacterWizard.tsx",
                        lineNumber: 276,
                        columnNumber: 21
                    }, this),
                    step === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-bold uppercase tracking-wider text-slate-300",
                                children: "4. Final Polish & AI Description"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                lineNumber: 302,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-slate-400 mb-1",
                                        children: "Visual Appearance Prompt"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                        lineNumber: 304,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        rows: 3,
                                        value: appearanceDescription,
                                        onChange: (e)=>setAppearanceDescription(e.target.value),
                                        placeholder: "A silver-haired wood elf in emerald robes holding an oak quarterstaff...",
                                        className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-white resize-none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CharacterWizard.tsx",
                                        lineNumber: 305,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                lineNumber: 303,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CharacterWizard.tsx",
                        lineNumber: 301,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center pt-4 border-t border-slate-800 mt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: step === 1 ? onCancel : ()=>setStep(step - 1),
                                className: "px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 font-semibold rounded-lg transition",
                                children: step === 1 ? 'Cancel' : '← Back'
                            }, void 0, false, {
                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                lineNumber: 318,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "px-5 py-2 bg-amber-600 hover:bg-amber-500 text-xs text-white font-semibold rounded-lg transition shadow-md",
                                children: step === 4 ? '✨ Forge Character Sheet' : 'Next Step →'
                            }, void 0, false, {
                                fileName: "[project]/src/components/CharacterWizard.tsx",
                                lineNumber: 326,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CharacterWizard.tsx",
                        lineNumber: 317,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CharacterWizard.tsx",
                lineNumber: 140,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CharacterWizard.tsx",
        lineNumber: 125,
        columnNumber: 9
    }, this);
}
;
// Inside CharacterWizard component:
const [backgroundFeature, setBackgroundFeature] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
// AUTO-APPLY BACKGROUND TRAITS & SKILLS
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
    const bgRule = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dndRules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BACKGROUND_DATA"][background];
    if (bgRule) {
        setBackgroundFeature(bgRule.feature);
        // Auto-check skill proficiencies granted by background
        setProficientSkills((prev)=>{
            const updated = {
                ...prev
            };
            bgRule.skillProficiencies.forEach((skill)=>{
                updated[skill] = true;
            });
            return updated;
        });
    }
}, [
    background
]);
}),
"[project]/src/data/dndRules.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @file dndRules.ts
 * @description Reference rules database for auto-populating racial traits,
 * languages, class features, and proficiency bonuses.
 */ __turbopack_context__.s([
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
}),
"[project]/src/data/mockCampaign.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INITIAL_CHARACTERS",
    ()=>INITIAL_CHARACTERS,
    "INITIAL_LOCATIONS",
    ()=>INITIAL_LOCATIONS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dnd$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/dnd.ts [app-ssr] (ecmascript)");
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
        skills: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dnd$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_SKILLS"].map((skill)=>({
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
}),
"[project]/src/utils/dnd.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
];})()

//# sourceMappingURL=_1gb3l_8dhld-x._.js.map
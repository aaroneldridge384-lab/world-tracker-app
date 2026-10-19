(()=>{"use strict";module.exports = [
"[project]/src/app/maps/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MapsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MapCanvas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MapCanvas.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLocalStorage.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const INITIAL_MAPS = [
    {
        id: 'map-default',
        name: 'Untitled Campaign Map',
        width: 1200,
        height: 750,
        drawings: [],
        pins: [],
        gridVisible: true,
        gridOpacity: 0.2,
        gridSize: 50,
        snapToGrid: false
    }
];
const EMPTY_STORY_NODES = [];
function MapsPage() {
    const [maps, setMaps, isLoaded, storageError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocalStorage"])('dnd-maps', INITIAL_MAPS);
    const [storyNodes, , storyLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocalStorage"])('dnd-story-nodes', EMPTY_STORY_NODES);
    const [selectedMapId, setSelectedMapId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(INITIAL_MAPS[0].id);
    const selectedMap = maps.find((map)=>map.id === selectedMapId) ?? maps[0];
    const addMap = ()=>{
        const map = {
            id: crypto.randomUUID(),
            name: `Campaign Map ${maps.length + 1}`,
            width: 1200,
            height: 750,
            drawings: [],
            pins: [],
            gridVisible: true,
            gridOpacity: 0.2,
            gridSize: 50,
            snapToGrid: false
        };
        setMaps((current)=>[
                ...current,
                map
            ]);
        setSelectedMapId(map.id);
    };
    const updateMap = (updated)=>{
        setMaps((current)=>current.map((map)=>map.id === updated.id ? updated : map));
    };
    if (!isLoaded || !storyLoaded) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-slate-400",
        children: "Loading map studio…"
    }, void 0, false, {
        fileName: "[project]/src/app/maps/page.tsx",
        lineNumber: 50,
        columnNumber: 43
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "fantasy-panel flex flex-wrap items-end justify-between gap-4 rounded-2xl p-6 sm:p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "fantasy-kicker",
                                children: "Chart the unknown"
                            }, void 0, false, {
                                fileName: "[project]/src/app/maps/page.tsx",
                                lineNumber: 56,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "fantasy-heading mt-2 text-3xl font-bold",
                                children: "Map Drawing Studio"
                            }, void 0, false, {
                                fileName: "[project]/src/app/maps/page.tsx",
                                lineNumber: 57,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 max-w-2xl font-sans text-sm text-slate-400",
                                children: "Sketch encounters and world regions. Map vectors and pins save automatically in this browser."
                            }, void 0, false, {
                                fileName: "[project]/src/app/maps/page.tsx",
                                lineNumber: 58,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/maps/page.tsx",
                        lineNumber: 55,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: addMap,
                        className: "rounded-lg border border-amber-200/20 bg-gradient-to-r from-amber-700 to-amber-500 px-4 py-2 font-sans text-sm font-bold text-[#17120a] shadow-lg shadow-amber-950/30 transition hover:brightness-110",
                        children: "＋ New Map"
                    }, void 0, false, {
                        fileName: "[project]/src/app/maps/page.tsx",
                        lineNumber: 60,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/maps/page.tsx",
                lineNumber: 54,
                columnNumber: 13
            }, this),
            storageError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "alert",
                className: "rounded-lg border border-rose-800 bg-rose-950/40 p-3 font-sans text-sm text-rose-200",
                children: storageError
            }, void 0, false, {
                fileName: "[project]/src/app/maps/page.tsx",
                lineNumber: 62,
                columnNumber: 30
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fantasy-panel flex flex-wrap items-center gap-3 rounded-xl p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-2 text-sm text-slate-300",
                        children: [
                            "Map",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: selectedMap?.id ?? '',
                                onChange: (event)=>setSelectedMapId(event.target.value),
                                className: "rounded-lg border border-slate-700 bg-[#090c12] px-3 py-2 text-white",
                                children: maps.map((map)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: map.id,
                                        children: map.name
                                    }, map.id, false, {
                                        fileName: "[project]/src/app/maps/page.tsx",
                                        lineNumber: 67,
                                        columnNumber: 44
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/maps/page.tsx",
                                lineNumber: 66,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/maps/page.tsx",
                        lineNumber: 64,
                        columnNumber: 17
                    }, this),
                    selectedMap && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex flex-1 items-center gap-2 text-sm text-slate-300",
                        children: [
                            "Rename",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: selectedMap.name,
                                onChange: (event)=>updateMap({
                                        ...selectedMap,
                                        name: event.target.value
                                    }),
                                className: "min-w-40 flex-1 rounded-lg border border-slate-700 bg-[#090c12] px-3 py-2 text-white"
                            }, void 0, false, {
                                fileName: "[project]/src/app/maps/page.tsx",
                                lineNumber: 73,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/maps/page.tsx",
                        lineNumber: 71,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/maps/page.tsx",
                lineNumber: 63,
                columnNumber: 13
            }, this),
            selectedMap ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MapCanvas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                map: selectedMap,
                storyNodes: storyNodes,
                onChange: updateMap
            }, void 0, false, {
                fileName: "[project]/src/app/maps/page.tsx",
                lineNumber: 78,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fantasy-panel rounded-xl p-8 text-center font-sans text-slate-400",
                children: "Create a map to begin."
            }, void 0, false, {
                fileName: "[project]/src/app/maps/page.tsx",
                lineNumber: 80,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/maps/page.tsx",
        lineNumber: 53,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/MapCanvas.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MapCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const PIN_ICONS = {
    encounter: '⚔️',
    trap: '⚠️',
    loot: '💰',
    secret: '❓',
    note: '📍'
};
function distanceToSegment(point, start, end) {
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const lengthSquared = dx * dx + dy * dy;
    const ratio = lengthSquared === 0 ? 0 : Math.max(0, Math.min(1, ((point.x - start.x) * dx + (point.y - start.y) * dy) / lengthSquared));
    return Math.hypot(point.x - (start.x + ratio * dx), point.y - (start.y + ratio * dy));
}
function segmentsFor(drawing) {
    if (drawing.type === 'rectangle' && drawing.points.length >= 2) {
        const [start, end] = drawing.points;
        const corners = [
            start,
            {
                x: end.x,
                y: start.y
            },
            end,
            {
                x: start.x,
                y: end.y
            },
            start
        ];
        return corners.slice(1).map((point, index)=>[
                corners[index],
                point
            ]);
    }
    return drawing.points.slice(1).map((point, index)=>[
            drawing.points[index],
            point
        ]);
}
function MapCanvas({ map, storyNodes, onChange }) {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const activeDrawingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [activeDrawing, setActiveDrawing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [tool, setTool] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('brush');
    const [pinKind, setPinKind] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('encounter');
    const [brushColor, setBrushColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('#f59e0b');
    const [brushWidth, setBrushWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(4);
    const [eraserMode, setEraserMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('point');
    const [selectedPinId, setSelectedPinId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDraggingPin, setIsDraggingPin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [canvasError, setCanvasError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const selectedPin = map.pins.find((pin)=>pin.id === selectedPinId) ?? null;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');
        if (!canvas || !context) return;
        const render = ()=>{
            context.clearRect(0, 0, map.width, map.height);
            context.fillStyle = '#020617';
            context.fillRect(0, 0, map.width, map.height);
            if (map.backgroundImage) {
                const image = new Image();
                image.onload = ()=>{
                    context.drawImage(image, 0, 0, map.width, map.height);
                    renderOverlay();
                };
                image.src = map.backgroundImage;
            } else {
                renderOverlay();
            }
        };
        const renderOverlay = ()=>{
            if (map.gridVisible) {
                context.save();
                context.globalAlpha = map.gridOpacity;
                context.strokeStyle = '#cbd5e1';
                context.lineWidth = 1;
                context.beginPath();
                for(let x = 0; x <= map.width; x += map.gridSize){
                    context.moveTo(x, 0);
                    context.lineTo(x, map.height);
                }
                for(let y = 0; y <= map.height; y += map.gridSize){
                    context.moveTo(0, y);
                    context.lineTo(map.width, y);
                }
                context.stroke();
                context.restore();
            }
            [
                ...map.drawings,
                ...activeDrawing ? [
                    activeDrawing
                ] : []
            ].forEach((drawing)=>drawShape(context, drawing));
            map.pins.forEach((pin)=>{
                context.font = '22px sans-serif';
                context.textAlign = 'center';
                context.textBaseline = 'middle';
                context.fillText(PIN_ICONS[pin.kind], pin.x, pin.y);
            });
        };
        render();
    }, [
        map,
        activeDrawing
    ]);
    const drawShape = (context, drawing)=>{
        if (drawing.points.length === 0 || drawing.type === 'eraser') return;
        const [start] = drawing.points;
        const end = drawing.points[drawing.points.length - 1];
        context.save();
        context.strokeStyle = drawing.color;
        context.lineWidth = drawing.width;
        context.lineCap = 'round';
        context.lineJoin = 'round';
        context.beginPath();
        if (drawing.type === 'brush' || drawing.type === 'line') {
            context.moveTo(start.x, start.y);
            drawing.points.slice(1).forEach((point)=>context.lineTo(point.x, point.y));
        } else if (drawing.type === 'rectangle') {
            context.rect(start.x, start.y, end.x - start.x, end.y - start.y);
        } else if (drawing.type === 'circle') {
            context.arc(start.x, start.y, Math.hypot(end.x - start.x, end.y - start.y), 0, Math.PI * 2);
        }
        context.stroke();
        context.restore();
    };
    const pointFromEvent = (event)=>{
        const bounds = event.currentTarget.getBoundingClientRect();
        let x = (event.clientX - bounds.left) * (map.width / bounds.width);
        let y = (event.clientY - bounds.top) * (map.height / bounds.height);
        if (map.snapToGrid) {
            x = Math.round(x / map.gridSize) * map.gridSize;
            y = Math.round(y / map.gridSize) * map.gridSize;
        }
        return {
            x: Math.max(0, Math.min(map.width, x)),
            y: Math.max(0, Math.min(map.height, y))
        };
    };
    const eraseAt = (point)=>{
        const near = (drawing)=>segmentsFor(drawing).some(([start, end])=>distanceToSegment(point, start, end) <= Math.max(12, drawing.width + 6));
        if (eraserMode === 'object') {
            onChange({
                ...map,
                drawings: map.drawings.filter((drawing)=>!near(drawing))
            });
            return;
        }
        const kept = [];
        map.drawings.forEach((drawing)=>{
            if (drawing.type !== 'brush') {
                if (!near(drawing)) kept.push(drawing);
                return;
            }
            let remaining = [];
            const flush = ()=>{
                if (remaining.length > 1) kept.push({
                    ...drawing,
                    id: crypto.randomUUID(),
                    points: remaining
                });
                remaining = [];
            };
            drawing.points.forEach((drawingPoint)=>{
                if (Math.hypot(point.x - drawingPoint.x, point.y - drawingPoint.y) <= Math.max(12, drawing.width + 6)) {
                    flush();
                } else {
                    remaining.push(drawingPoint);
                }
            });
            flush();
        });
        onChange({
            ...map,
            drawings: kept
        });
    };
    const handlePointerDown = (event)=>{
        if (tool === 'pin') {
            const point = pointFromEvent(event);
            const pin = {
                id: crypto.randomUUID(),
                x: point.x,
                y: point.y,
                kind: pinKind,
                title: `New ${pinKind}`,
                note: ''
            };
            onChange({
                ...map,
                pins: [
                    ...map.pins,
                    pin
                ]
            });
            setSelectedPinId(pin.id);
            return;
        }
        const point = pointFromEvent(event);
        if (tool === 'eraser') {
            eraseAt(point);
            return;
        }
        event.currentTarget.setPointerCapture(event.pointerId);
        const drawing = {
            id: crypto.randomUUID(),
            type: tool,
            points: [
                point
            ],
            color: brushColor,
            width: brushWidth
        };
        activeDrawingRef.current = drawing;
        setActiveDrawing(drawing);
    };
    const handlePointerMove = (event)=>{
        if (tool === 'eraser' && event.buttons > 0) {
            eraseAt(pointFromEvent(event));
            return;
        }
        const current = activeDrawingRef.current;
        if (!current) return;
        const next = {
            ...current,
            points: [
                ...current.points,
                pointFromEvent(event)
            ]
        };
        activeDrawingRef.current = next;
        setActiveDrawing(next);
    };
    const handlePointerUp = ()=>{
        const completed = activeDrawingRef.current;
        if (completed) onChange({
            ...map,
            drawings: [
                ...map.drawings,
                completed
            ]
        });
        activeDrawingRef.current = null;
        setActiveDrawing(null);
    };
    const updatePin = (id, patch)=>{
        onChange({
            ...map,
            pins: map.pins.map((pin)=>pin.id === id ? {
                    ...pin,
                    ...patch
                } : pin)
        });
    };
    const handlePinPointerDown = (event, pin)=>{
        event.stopPropagation();
        event.currentTarget.setPointerCapture(event.pointerId);
        setSelectedPinId(pin.id);
        setIsDraggingPin(true);
    };
    const handlePinPointerMove = (event, pin)=>{
        if (!isDraggingPin) return;
        const bounds = event.currentTarget.parentElement?.getBoundingClientRect();
        if (!bounds) return;
        let x = (event.clientX - bounds.left) * (map.width / bounds.width);
        let y = (event.clientY - bounds.top) * (map.height / bounds.height);
        if (map.snapToGrid) {
            x = Math.round(x / map.gridSize) * map.gridSize;
            y = Math.round(y / map.gridSize) * map.gridSize;
        }
        updatePin(pin.id, {
            x: Math.max(0, Math.min(map.width, x)),
            y: Math.max(0, Math.min(map.height, y))
        });
    };
    const importBackground = (file)=>{
        if (!file) return;
        setCanvasError(null);
        const objectUrl = URL.createObjectURL(file);
        const image = new Image();
        image.onload = ()=>{
            const scale = Math.min(1, 1600 / image.naturalWidth, 1600 / image.naturalHeight);
            const importCanvas = document.createElement('canvas');
            importCanvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
            importCanvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
            const context = importCanvas.getContext('2d');
            if (!context) {
                setCanvasError('Could not import that image.');
                URL.revokeObjectURL(objectUrl);
                return;
            }
            context.drawImage(image, 0, 0, importCanvas.width, importCanvas.height);
            onChange({
                ...map,
                backgroundImage: importCanvas.toDataURL('image/jpeg', 0.8)
            });
            URL.revokeObjectURL(objectUrl);
        };
        image.onerror = ()=>{
            setCanvasError('Could not read that image.');
            URL.revokeObjectURL(objectUrl);
        };
        image.src = objectUrl;
    };
    const exportPng = ()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const link = document.createElement('a');
        link.download = `${map.name.trim() || 'campaign-map'}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    };
    const toolButton = (value, label)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: ()=>setTool(value),
            "aria-pressed": tool === value,
            className: `rounded-lg border px-3 py-2 font-sans text-xs font-semibold transition ${tool === value ? 'border-amber-200/30 bg-amber-400/15 text-amber-200 shadow-[inset_0_0_18px_rgba(214,168,79,0.12)]' : 'border-slate-700/70 bg-slate-800/70 text-slate-300 hover:border-amber-200/20 hover:text-amber-100'}`,
            children: label
        }, value, false, {
            fileName: "[project]/src/components/MapCanvas.tsx",
            lineNumber: 303,
            columnNumber: 9
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "fantasy-panel flex flex-wrap items-center gap-2 rounded-xl p-3",
                children: [
                    toolButton('brush', 'Brush'),
                    toolButton('rectangle', 'Rectangle'),
                    toolButton('circle', 'Circle'),
                    toolButton('line', 'Line'),
                    toolButton('eraser', 'Eraser'),
                    toolButton('pin', 'Place Pin'),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "ml-1 flex items-center gap-2 text-xs text-slate-300",
                        children: [
                            "Color",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "color",
                                "aria-label": "Brush color",
                                value: brushColor,
                                onChange: (event)=>setBrushColor(event.target.value),
                                className: "h-8 w-10 rounded bg-transparent"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MapCanvas.tsx",
                                lineNumber: 325,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MapCanvas.tsx",
                        lineNumber: 323,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-2 text-xs text-slate-300",
                        children: [
                            "Width",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                "aria-label": "Brush width",
                                min: "1",
                                max: "24",
                                value: brushWidth,
                                onChange: (event)=>setBrushWidth(Number(event.target.value))
                            }, void 0, false, {
                                fileName: "[project]/src/components/MapCanvas.tsx",
                                lineNumber: 329,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MapCanvas.tsx",
                        lineNumber: 327,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-2 text-xs text-slate-300",
                        children: [
                            "Pin",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: pinKind,
                                onChange: (event)=>setPinKind(event.target.value),
                                className: "rounded-lg border border-slate-700 bg-[#090c12] px-2 py-1",
                                children: Object.keys(PIN_ICONS).map((kind)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: kind,
                                        children: kind
                                    }, kind, false, {
                                        fileName: "[project]/src/components/MapCanvas.tsx",
                                        lineNumber: 334,
                                        columnNumber: 63
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/MapCanvas.tsx",
                                lineNumber: 333,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MapCanvas.tsx",
                        lineNumber: 331,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MapCanvas.tsx",
                lineNumber: 316,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "fantasy-panel flex flex-wrap items-center gap-4 rounded-xl p-3 font-sans text-xs text-slate-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                checked: map.gridVisible,
                                onChange: (event)=>onChange({
                                        ...map,
                                        gridVisible: event.target.checked
                                    })
                            }, void 0, false, {
                                fileName: "[project]/src/components/MapCanvas.tsx",
                                lineNumber: 340,
                                columnNumber: 60
                            }, this),
                            "Grid"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MapCanvas.tsx",
                        lineNumber: 340,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-2",
                        children: [
                            "Grid opacity",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                "aria-label": "Grid opacity",
                                min: "0.05",
                                max: "0.8",
                                step: "0.05",
                                value: map.gridOpacity,
                                onChange: (event)=>onChange({
                                        ...map,
                                        gridOpacity: Number(event.target.value)
                                    })
                            }, void 0, false, {
                                fileName: "[project]/src/components/MapCanvas.tsx",
                                lineNumber: 341,
                                columnNumber: 72
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MapCanvas.tsx",
                        lineNumber: 341,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-2",
                        children: [
                            "Cell size",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                min: "10",
                                max: "100",
                                value: map.gridSize,
                                onChange: (event)=>onChange({
                                        ...map,
                                        gridSize: Math.max(10, Number(event.target.value))
                                    }),
                                className: "w-16 rounded-lg border border-slate-700 bg-[#090c12] px-2 py-1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MapCanvas.tsx",
                                lineNumber: 342,
                                columnNumber: 69
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MapCanvas.tsx",
                        lineNumber: 342,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                checked: map.snapToGrid,
                                onChange: (event)=>onChange({
                                        ...map,
                                        snapToGrid: event.target.checked
                                    })
                            }, void 0, false, {
                                fileName: "[project]/src/components/MapCanvas.tsx",
                                lineNumber: 343,
                                columnNumber: 60
                            }, this),
                            "Snap to grid"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MapCanvas.tsx",
                        lineNumber: 343,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-2",
                        children: [
                            "Eraser mode",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: eraserMode,
                                onChange: (event)=>setEraserMode(event.target.value),
                                className: "rounded-lg border border-slate-700 bg-[#090c12] px-2 py-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "point",
                                        children: "Point"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MapCanvas.tsx",
                                        lineNumber: 344,
                                        columnNumber: 246
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "object",
                                        children: "Object"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MapCanvas.tsx",
                                        lineNumber: 344,
                                        columnNumber: 282
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MapCanvas.tsx",
                                lineNumber: 344,
                                columnNumber: 71
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MapCanvas.tsx",
                        lineNumber: 344,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex cursor-pointer items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/70 px-3 py-2 transition hover:border-amber-300/30 hover:text-amber-100 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-amber-300",
                        children: [
                            "Import background",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                accept: "image/*",
                                "aria-label": "Import map background image",
                                onChange: (event)=>importBackground(event.target.files?.[0]),
                                className: "sr-only"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MapCanvas.tsx",
                                lineNumber: 345,
                                columnNumber: 295
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MapCanvas.tsx",
                        lineNumber: 345,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>onChange({
                                ...map,
                                backgroundImage: undefined
                            }),
                        className: "rounded-lg border border-slate-700 bg-slate-800/70 px-3 py-2 transition hover:border-amber-300/30",
                        children: "Clear background"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MapCanvas.tsx",
                        lineNumber: 346,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>onChange({
                                ...map,
                                drawings: []
                            }),
                        disabled: map.drawings.length === 0,
                        className: "rounded-lg border border-rose-900/70 bg-rose-950/40 px-3 py-2 font-sans text-xs text-rose-200 transition hover:bg-rose-900/70 disabled:cursor-not-allowed disabled:opacity-40",
                        children: "Clear annotations"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MapCanvas.tsx",
                        lineNumber: 347,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: exportPng,
                        className: "rounded-lg bg-gradient-to-r from-amber-700 to-amber-500 px-3 py-2 font-semibold text-[#17120a] shadow-lg shadow-amber-950/30 transition hover:brightness-110",
                        children: "Export PNG"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MapCanvas.tsx",
                        lineNumber: 348,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MapCanvas.tsx",
                lineNumber: 339,
                columnNumber: 13
            }, this),
            canvasError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "alert",
                className: "text-sm text-rose-300",
                children: canvasError
            }, void 0, false, {
                fileName: "[project]/src/components/MapCanvas.tsx",
                lineNumber: 351,
                columnNumber: 29
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dark-workspace relative mx-auto w-full overflow-hidden rounded-2xl border border-amber-200/15 bg-[#090c12] shadow-[0_20px_60px_rgba(0,0,0,0.5)]",
                style: {
                    maxWidth: map.width,
                    aspectRatio: `${map.width} / ${map.height}`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                        ref: canvasRef,
                        width: map.width,
                        height: map.height,
                        onPointerDown: handlePointerDown,
                        onPointerMove: handlePointerMove,
                        onPointerUp: handlePointerUp,
                        onPointerCancel: handlePointerUp,
                        className: "absolute inset-0 h-full w-full touch-none",
                        "aria-label": "Interactive campaign map canvas"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MapCanvas.tsx",
                        lineNumber: 353,
                        columnNumber: 17
                    }, this),
                    map.pins.map((pin)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            title: `${pin.title}${pin.note ? `: ${pin.note}` : ''}`,
                            "aria-label": `Edit ${pin.kind} pin ${pin.title}`,
                            onClick: ()=>setSelectedPinId(pin.id),
                            onPointerDown: (event)=>handlePinPointerDown(event, pin),
                            onPointerMove: (event)=>handlePinPointerMove(event, pin),
                            onPointerUp: ()=>setIsDraggingPin(false),
                            className: "absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-amber-300 bg-[#090c12]/90 text-base shadow-[0_0_16px_rgba(214,168,79,0.2)] transition hover:scale-110 hover:bg-amber-400/20",
                            style: {
                                left: `${pin.x / map.width * 100}%`,
                                top: `${pin.y / map.height * 100}%`
                            },
                            children: PIN_ICONS[pin.kind]
                        }, pin.id, false, {
                            fileName: "[project]/src/components/MapCanvas.tsx",
                            lineNumber: 365,
                            columnNumber: 21
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MapCanvas.tsx",
                lineNumber: 352,
                columnNumber: 13
            }, this),
            selectedPin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "fantasy-panel grid gap-3 rounded-xl p-4 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "space-y-1 font-sans text-xs text-slate-400",
                        children: [
                            "Pin title",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: selectedPin.title,
                                onChange: (event)=>updatePin(selectedPin.id, {
                                        title: event.target.value
                                    }),
                                className: "w-full rounded-lg border border-slate-700 bg-[#090c12] p-2 font-sans text-sm text-white"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MapCanvas.tsx",
                                lineNumber: 384,
                                columnNumber: 92
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MapCanvas.tsx",
                        lineNumber: 384,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "space-y-1 font-sans text-xs text-slate-400",
                        children: [
                            "Link to story node",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: selectedPin.storyNodeId ?? '',
                                onChange: (event)=>updatePin(selectedPin.id, {
                                        storyNodeId: event.target.value || undefined
                                    }),
                                className: "w-full rounded-lg border border-slate-700 bg-[#090c12] p-2 font-sans text-sm text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "No link"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MapCanvas.tsx",
                                        lineNumber: 385,
                                        columnNumber: 345
                                    }, this),
                                    storyNodes.map((node)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: node.id,
                                            children: node.title
                                        }, node.id, false, {
                                            fileName: "[project]/src/components/MapCanvas.tsx",
                                            lineNumber: 385,
                                            columnNumber: 404
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MapCanvas.tsx",
                                lineNumber: 385,
                                columnNumber: 101
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MapCanvas.tsx",
                        lineNumber: 385,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "space-y-1 font-sans text-xs text-slate-400 md:col-span-2",
                        children: [
                            "Pin note",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: selectedPin.note,
                                onChange: (event)=>updatePin(selectedPin.id, {
                                        note: event.target.value
                                    }),
                                rows: 2,
                                className: "w-full rounded-lg border border-slate-700 bg-[#090c12] p-2 font-sans text-sm text-white"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MapCanvas.tsx",
                                lineNumber: 386,
                                columnNumber: 105
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MapCanvas.tsx",
                        lineNumber: 386,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 md:col-span-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setSelectedPinId(null),
                                className: "rounded-lg border border-slate-700 bg-slate-800/80 px-3 py-2 font-sans text-xs text-white transition hover:border-amber-300/30",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MapCanvas.tsx",
                                lineNumber: 388,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    onChange({
                                        ...map,
                                        pins: map.pins.filter((pin)=>pin.id !== selectedPin.id)
                                    });
                                    setSelectedPinId(null);
                                },
                                className: "rounded-lg border border-rose-800 bg-rose-950/70 px-3 py-2 font-sans text-xs text-rose-200 transition hover:bg-rose-900",
                                children: "Delete Pin"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MapCanvas.tsx",
                                lineNumber: 389,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MapCanvas.tsx",
                        lineNumber: 387,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MapCanvas.tsx",
                lineNumber: 383,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MapCanvas.tsx",
        lineNumber: 315,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/hooks/useLocalStorage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLocalStorage",
    ()=>useLocalStorage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function useLocalStorage(key, initialValue) {
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialValue);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [storageError, setStorageError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
        const syncFromAnotherTab = (event)=>{
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
        };
        window.addEventListener('storage', syncFromAnotherTab);
        return ()=>window.removeEventListener('storage', syncFromAnotherTab);
    }, [
        key,
        initialValue
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isLoaded) return;
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
            setStorageError(null);
        } catch  {
            setStorageError('Campaign data could not be saved. Browser storage may be full.');
        }
    }, [
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
}),
];})()

//# sourceMappingURL=src_0-aac66cxwruh._.js.map
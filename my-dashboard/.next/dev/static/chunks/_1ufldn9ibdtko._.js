(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/src/app/story/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StoryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StoryGraph$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/StoryGraph.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockCampaign$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockCampaign.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLocalStorage.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const EMPTY_NODES = [];
const EMPTY_EDGES = [];
const EMPTY_NOTES = [];
const EMPTY_QUESTS = [];
function renderMentions(text, characters, locations, nodes) {
    const parts = text.split(/(\[\[[^\]]+\]\])/g);
    return parts.map((part, index)=>{
        const match = part.match(/^\[\[([^\]]+)\]\]$/);
        if (!match) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: part
        }, index, false, {
            fileName: "[project]/src/app/story/page.tsx",
            lineNumber: 19,
            columnNumber: 28
        }, this);
        const title = match[1].trim();
        const character = characters.find((item)=>item.name.toLowerCase() === title.toLowerCase());
        if (character) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: `/#${character.id}`,
            className: "text-amber-400 underline",
            children: title
        }, index, false, {
            fileName: "[project]/src/app/story/page.tsx",
            lineNumber: 22,
            columnNumber: 31
        }, this);
        const location = locations.find((item)=>item.name.toLowerCase() === title.toLowerCase());
        if (location) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: `/locations#${location.id}`,
            className: "text-emerald-400 underline",
            children: title
        }, index, false, {
            fileName: "[project]/src/app/story/page.tsx",
            lineNumber: 24,
            columnNumber: 30
        }, this);
        const node = nodes.find((item)=>item.title.toLowerCase() === title.toLowerCase());
        if (node) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: `/story#${node.id}`,
            className: "text-sky-400 underline",
            children: title
        }, index, false, {
            fileName: "[project]/src/app/story/page.tsx",
            lineNumber: 26,
            columnNumber: 26
        }, this);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-300",
            children: title
        }, index, false, {
            fileName: "[project]/src/app/story/page.tsx",
            lineNumber: 27,
            columnNumber: 16
        }, this);
    });
}
function StoryPage() {
    _s();
    const [characters, , charactersLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"])('dnd-characters', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockCampaign$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_CHARACTERS"]);
    const [locations, , locationsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"])('dnd-locations', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockCampaign$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_LOCATIONS"]);
    const [nodes, setNodes, nodesLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"])('dnd-story-nodes', EMPTY_NODES);
    const [edges, setEdges, edgesLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"])('dnd-story-edges', EMPTY_EDGES);
    const [notes, setNotes, notesLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"])('dnd-story-notes', EMPTY_NOTES);
    const [quests, setQuests, questsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"])('dnd-quests', EMPTY_QUESTS);
    const [seeded, setSeeded, seededLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"])('dnd-story-seeded', false);
    const [noteTitle, setNoteTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [noteBody, setNoteBody] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [questTitle, setQuestTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [questDescription, setQuestDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [questStatus, setQuestStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('active');
    const [questLinkId, setQuestLinkId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StoryPage.useEffect": ()=>{
            if (!charactersLoaded || !locationsLoaded || !nodesLoaded || !seededLoaded || seeded) return;
            const seededNodes = [
                ...characters.map({
                    "StoryPage.useEffect": (character, index)=>({
                            id: `character-${character.id}`,
                            title: character.name,
                            kind: 'Character',
                            description: `${character.race} ${character.characterClass}`,
                            x: 150,
                            y: 100 + index * 100,
                            linkedEntityId: character.id
                        })
                }["StoryPage.useEffect"]),
                ...locations.map({
                    "StoryPage.useEffect": (location, index)=>({
                            id: `location-${location.id}`,
                            title: location.name,
                            kind: 'Location',
                            description: location.summary,
                            x: 820,
                            y: 100 + index * 100,
                            linkedEntityId: location.id
                        })
                }["StoryPage.useEffect"])
            ];
            if (nodes.length === 0 && seededNodes.length > 0) setNodes(seededNodes);
            setSeeded(true);
        }
    }["StoryPage.useEffect"], [
        characters,
        charactersLoaded,
        locations,
        locationsLoaded,
        nodes,
        nodesLoaded,
        seeded,
        seededLoaded,
        setNodes,
        setSeeded
    ]);
    const saveNote = (event)=>{
        event.preventDefault();
        if (!noteTitle.trim() || !noteBody.trim()) return;
        setNotes((current)=>[
                {
                    id: crypto.randomUUID(),
                    title: noteTitle.trim(),
                    body: noteBody.trim(),
                    updatedAt: new Date().toISOString()
                },
                ...current
            ]);
        setNoteTitle('');
        setNoteBody('');
    };
    const addQuest = (event)=>{
        event.preventDefault();
        if (!questTitle.trim()) return;
        const questNode = {
            id: crypto.randomUUID(),
            title: questTitle.trim(),
            kind: 'Quest',
            description: questDescription.trim(),
            x: 500 + Math.random() * 120 - 60,
            y: 480
        };
        setNodes((current)=>[
                ...current,
                questNode
            ]);
        if (questLinkId) {
            setEdges((current)=>[
                    ...current,
                    {
                        id: crypto.randomUUID(),
                        from: questNode.id,
                        to: questLinkId,
                        label: 'involves'
                    }
                ]);
        }
        setQuests((current)=>[
                {
                    id: crypto.randomUUID(),
                    title: questTitle.trim(),
                    description: questDescription.trim(),
                    status: questStatus,
                    linkedNodeIds: [
                        questNode.id,
                        ...questLinkId ? [
                            questLinkId
                        ] : []
                    ]
                },
                ...current
            ]);
        setQuestTitle('');
        setQuestDescription('');
        setQuestStatus('active');
        setQuestLinkId('');
    };
    const updateQuestStatus = (id, status)=>{
        setQuests((current)=>current.map((quest)=>quest.id === id ? {
                    ...quest,
                    status
                } : quest));
    };
    const deleteQuest = (quest)=>{
        const questNodeId = quest.linkedNodeIds.find((id)=>nodes.some((node)=>node.id === id && node.kind === 'Quest'));
        setQuests((current)=>current.filter((item)=>item.id !== quest.id));
        if (questNodeId) {
            setNodes((current)=>current.filter((node)=>node.id !== questNodeId));
            setEdges((current)=>current.filter((edge)=>edge.from !== questNodeId && edge.to !== questNodeId));
        }
    };
    const deleteNote = (id)=>setNotes((current)=>current.filter((note)=>note.id !== id));
    const isLoaded = charactersLoaded && locationsLoaded && nodesLoaded && edgesLoaded && notesLoaded && questsLoaded && seededLoaded;
    if (!isLoaded) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-slate-400",
        children: "Loading campaign story…"
    }, void 0, false, {
        fileName: "[project]/src/app/story/page.tsx",
        lineNumber: 134,
        columnNumber: 27
    }, this);
    const activeQuests = quests.filter((quest)=>quest.status === 'active');
    const completedQuests = quests.filter((quest)=>quest.status === 'completed');
    const clues = quests.filter((quest)=>quest.status === 'clue');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-extrabold text-amber-500",
                        children: "Story & Campaign Knowledge"
                    }, void 0, false, {
                        fileName: "[project]/src/app/story/page.tsx",
                        lineNumber: 143,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-sm text-slate-400",
                        children: "Connect people, places, factions, quests, and clues. Use [[Name]] mentions in notes to link campaign entities."
                    }, void 0, false, {
                        fileName: "[project]/src/app/story/page.tsx",
                        lineNumber: 144,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/story/page.tsx",
                lineNumber: 142,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StoryGraph$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                nodes: nodes,
                edges: edges,
                characters: characters,
                locations: locations,
                onNodesChange: setNodes,
                onEdgesChange: setEdges
            }, void 0, false, {
                fileName: "[project]/src/app/story/page.tsx",
                lineNumber: 147,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid gap-5 xl:grid-cols-[1.1fr_1fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 rounded-xl border border-slate-800 bg-slate-900 p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-amber-500",
                                        children: "Campaign Notes"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/story/page.tsx",
                                        lineNumber: 159,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-400",
                                        children: "Write [[Character Name]] or [[Location Name]] to create links in the preview."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/story/page.tsx",
                                        lineNumber: 160,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/story/page.tsx",
                                lineNumber: 158,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: saveNote,
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: noteTitle,
                                        onChange: (event)=>setNoteTitle(event.target.value),
                                        placeholder: "Note title",
                                        required: true,
                                        className: "w-full rounded-lg bg-slate-950 p-2.5 text-sm text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/story/page.tsx",
                                        lineNumber: 163,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: noteBody,
                                        onChange: (event)=>setNoteBody(event.target.value),
                                        placeholder: "The party discovered [[Oakhaven]]...",
                                        rows: 4,
                                        required: true,
                                        className: "w-full rounded-lg bg-slate-950 p-2.5 text-sm text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/story/page.tsx",
                                        lineNumber: 164,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "rounded-lg bg-amber-700 px-3 py-2 text-xs font-semibold text-white hover:bg-amber-600",
                                        children: "Save Note"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/story/page.tsx",
                                        lineNumber: 165,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/story/page.tsx",
                                lineNumber: 162,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    notes.map((note)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "rounded-lg border border-slate-800 bg-slate-950 p-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start justify-between gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-semibold text-slate-100",
                                                            children: note.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/story/page.tsx",
                                                            lineNumber: 171,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>deleteNote(note.id),
                                                            className: "text-xs text-rose-300 hover:text-rose-200",
                                                            children: "Delete"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/story/page.tsx",
                                                            lineNumber: 172,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/story/page.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-2 whitespace-pre-wrap text-sm leading-relaxed text-slate-300",
                                                    children: renderMentions(note.body, characters, locations, nodes)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/story/page.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                                                    className: "mt-2 block text-[10px] text-slate-500",
                                                    children: [
                                                        "Updated ",
                                                        new Date(note.updatedAt).toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/story/page.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, note.id, true, {
                                            fileName: "[project]/src/app/story/page.tsx",
                                            lineNumber: 169,
                                            columnNumber: 29
                                        }, this)),
                                    notes.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-500",
                                        children: "No notes saved yet."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/story/page.tsx",
                                        lineNumber: 178,
                                        columnNumber: 48
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/story/page.tsx",
                                lineNumber: 167,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/story/page.tsx",
                        lineNumber: 157,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 rounded-xl border border-slate-800 bg-slate-900 p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-amber-500",
                                        children: "Quest Tracker"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/story/page.tsx",
                                        lineNumber: 184,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-400",
                                        children: "Track active quests, completed objectives, and unresolved clues."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/story/page.tsx",
                                        lineNumber: 185,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/story/page.tsx",
                                lineNumber: 183,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: addQuest,
                                className: "space-y-2 rounded-lg border border-slate-800 bg-slate-950 p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: questTitle,
                                        onChange: (event)=>setQuestTitle(event.target.value),
                                        placeholder: "Quest or clue title",
                                        required: true,
                                        className: "w-full rounded bg-slate-900 p-2 text-sm text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/story/page.tsx",
                                        lineNumber: 188,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: questDescription,
                                        onChange: (event)=>setQuestDescription(event.target.value),
                                        placeholder: "Objective, clue, or next step",
                                        rows: 2,
                                        className: "w-full rounded bg-slate-900 p-2 text-sm text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/story/page.tsx",
                                        lineNumber: 189,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-2 sm:grid-cols-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: questStatus,
                                                onChange: (event)=>setQuestStatus(event.target.value),
                                                className: "rounded bg-slate-900 p-2 text-sm text-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "active",
                                                        children: "Active Quest"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/story/page.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 185
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "completed",
                                                        children: "Completed Objective"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/story/page.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 229
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "clue",
                                                        children: "Unresolved Clue"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/story/page.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 283
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/story/page.tsx",
                                                lineNumber: 191,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: questLinkId,
                                                onChange: (event)=>setQuestLinkId(event.target.value),
                                                className: "rounded bg-slate-900 p-2 text-sm text-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "No related node"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/story/page.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 170
                                                    }, this),
                                                    nodes.map((node)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: node.id,
                                                            children: node.title
                                                        }, node.id, false, {
                                                            fileName: "[project]/src/app/story/page.tsx",
                                                            lineNumber: 192,
                                                            columnNumber: 232
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/story/page.tsx",
                                                lineNumber: 192,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/story/page.tsx",
                                        lineNumber: 190,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "rounded-lg bg-amber-700 px-3 py-2 text-xs font-semibold text-white hover:bg-amber-600",
                                        children: "Add Quest / Clue"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/story/page.tsx",
                                        lineNumber: 194,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/story/page.tsx",
                                lineNumber: 187,
                                columnNumber: 21
                            }, this),
                            [
                                {
                                    title: 'Active Quests',
                                    items: activeQuests
                                },
                                {
                                    title: 'Completed Objectives',
                                    items: completedQuests
                                },
                                {
                                    title: 'Unresolved Clues',
                                    items: clues
                                }
                            ].map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-semibold text-slate-200",
                                            children: [
                                                group.title,
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-500",
                                                    children: [
                                                        "(",
                                                        group.items.length,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/story/page.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 96
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/story/page.tsx",
                                            lineNumber: 203,
                                            columnNumber: 29
                                        }, this),
                                        group.items.map((quest)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                className: "rounded-lg border border-slate-800 bg-slate-950 p-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start justify-between gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        className: "font-semibold text-slate-100",
                                                                        children: quest.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/story/page.tsx",
                                                                        lineNumber: 208,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    quest.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-1 text-sm text-slate-400",
                                                                        children: quest.description
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/story/page.tsx",
                                                                        lineNumber: 209,
                                                                        columnNumber: 67
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/story/page.tsx",
                                                                lineNumber: 207,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>deleteQuest(quest),
                                                                className: "text-xs text-rose-300 hover:text-rose-200",
                                                                children: "Delete"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/story/page.tsx",
                                                                lineNumber: 211,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/story/page.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 flex flex-wrap gap-2",
                                                        children: quest.linkedNodeIds.map((id)=>{
                                                            const node = nodes.find((item)=>item.id === id);
                                                            return node ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: `/story#${id}`,
                                                                className: "rounded-full bg-slate-800 px-2.5 py-1 text-[11px] text-sky-300",
                                                                children: node.title
                                                            }, id, false, {
                                                                fileName: "[project]/src/app/story/page.tsx",
                                                                lineNumber: 216,
                                                                columnNumber: 59
                                                            }, this) : null;
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/story/page.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "mt-3 flex items-center gap-2 text-xs text-slate-400",
                                                        children: [
                                                            "Status",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: quest.status,
                                                                onChange: (event)=>updateQuestStatus(quest.id, event.target.value),
                                                                className: "rounded bg-slate-900 px-2 py-1 text-slate-100",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "active",
                                                                        children: "Active"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/story/page.tsx",
                                                                        lineNumber: 220,
                                                                        columnNumber: 213
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "completed",
                                                                        children: "Completed"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/story/page.tsx",
                                                                        lineNumber: 220,
                                                                        columnNumber: 251
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "clue",
                                                                        children: "Unresolved clue"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/story/page.tsx",
                                                                        lineNumber: 220,
                                                                        columnNumber: 295
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/story/page.tsx",
                                                                lineNumber: 220,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/story/page.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, quest.id, true, {
                                                fileName: "[project]/src/app/story/page.tsx",
                                                lineNumber: 205,
                                                columnNumber: 33
                                            }, this)),
                                        group.items.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500",
                                            children: "Nothing here yet."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/story/page.tsx",
                                            lineNumber: 224,
                                            columnNumber: 58
                                        }, this)
                                    ]
                                }, group.title, true, {
                                    fileName: "[project]/src/app/story/page.tsx",
                                    lineNumber: 202,
                                    columnNumber: 25
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/story/page.tsx",
                        lineNumber: 182,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/story/page.tsx",
                lineNumber: 156,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/story/page.tsx",
        lineNumber: 141,
        columnNumber: 9
    }, this);
}
_s(StoryPage, "PTBZj6tT++Q+OEIX1pQcrpZe2H0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"]
    ];
});
_c = StoryPage;
var _c;
__turbopack_context__.k.register(_c, "StoryPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/StoryGraph.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StoryGraph
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const NODE_COLORS = {
    Character: '#b45309',
    NPC: '#0369a1',
    Location: '#15803d',
    Quest: '#7e22ce',
    Faction: '#be123c'
};
function StoryGraph({ nodes, edges, characters, locations, onNodesChange, onEdgesChange }) {
    _s();
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dragRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [dragPosition, setDragPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [nodeKind, setNodeKind] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('NPC');
    const [nodeTitle, setNodeTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [nodeDescription, setNodeDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [linkedEntityId, setLinkedEntityId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [fromNode, setFromNode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [toNode, setToNode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [relationship, setRelationship] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('related to');
    const graphPoint = (clientX, clientY)=>{
        const svg = svgRef.current;
        if (!svg) return {
            x: 0,
            y: 0
        };
        const bounds = svg.getBoundingClientRect();
        return {
            x: (clientX - bounds.left) * (1000 / bounds.width),
            y: (clientY - bounds.top) * (600 / bounds.height)
        };
    };
    const positionOf = (node)=>dragPosition?.id === node.id ? {
            x: dragPosition.x,
            y: dragPosition.y
        } : {
            x: node.x,
            y: node.y
        };
    const beginDrag = (event, node)=>{
        event.stopPropagation();
        svgRef.current?.setPointerCapture(event.pointerId);
        const point = graphPoint(event.clientX, event.clientY);
        dragRef.current = {
            id: node.id,
            offsetX: point.x - node.x,
            offsetY: point.y - node.y
        };
        setDragPosition({
            id: node.id,
            x: node.x,
            y: node.y
        });
    };
    const moveDrag = (event)=>{
        const drag = dragRef.current;
        if (!drag) return;
        const point = graphPoint(event.clientX, event.clientY);
        setDragPosition({
            id: drag.id,
            x: Math.max(80, Math.min(920, point.x - drag.offsetX)),
            y: Math.max(40, Math.min(560, point.y - drag.offsetY))
        });
    };
    const finishDrag = (event)=>{
        const drag = dragRef.current;
        if (!drag) return;
        const point = graphPoint(event.clientX, event.clientY);
        const x = Math.max(80, Math.min(920, point.x - drag.offsetX));
        const y = Math.max(40, Math.min(560, point.y - drag.offsetY));
        onNodesChange(nodes.map((node)=>node.id === drag.id ? {
                ...node,
                x,
                y
            } : node));
        dragRef.current = null;
        setDragPosition(null);
    };
    const addNode = (event)=>{
        event.preventDefault();
        const title = nodeTitle.trim();
        if (!title) return;
        const index = nodes.length;
        const node = {
            id: crypto.randomUUID(),
            title,
            kind: nodeKind,
            description: nodeDescription.trim(),
            x: 140 + index % 4 * 220,
            y: 100 + Math.floor(index / 4) * 150,
            linkedEntityId: linkedEntityId || undefined
        };
        onNodesChange([
            ...nodes,
            node
        ]);
        setNodeTitle('');
        setNodeDescription('');
        setLinkedEntityId('');
    };
    const addRelationship = (event)=>{
        event.preventDefault();
        if (!fromNode || !toNode || fromNode === toNode || !relationship.trim()) return;
        onEdgesChange([
            ...edges,
            {
                id: crypto.randomUUID(),
                from: fromNode,
                to: toNode,
                label: relationship.trim()
            }
        ]);
        setRelationship('related to');
    };
    const linkedOptions = nodeKind === 'Character' ? characters.map((character)=>({
            id: character.id,
            title: character.name
        })) : nodeKind === 'Location' ? locations.map((location)=>({
            id: location.id,
            title: location.name
        })) : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "space-y-4 rounded-xl border border-slate-800 bg-slate-900 p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold text-amber-500",
                        children: "Story Thread Graph"
                    }, void 0, false, {
                        fileName: "[project]/src/components/StoryGraph.tsx",
                        lineNumber: 115,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-slate-400",
                        children: "Drag nodes to arrange them. Add a relationship to draw a labeled connection."
                    }, void 0, false, {
                        fileName: "[project]/src/components/StoryGraph.tsx",
                        lineNumber: 116,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/StoryGraph.tsx",
                lineNumber: 114,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-hidden rounded-lg border border-slate-800 bg-slate-950",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    ref: svgRef,
                    viewBox: "0 0 1000 600",
                    className: "w-full touch-none",
                    style: {
                        minHeight: 360
                    },
                    onPointerMove: moveDrag,
                    onPointerUp: finishDrag,
                    onPointerCancel: finishDrag,
                    "aria-label": "Interactive campaign story graph",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                                id: "story-arrow",
                                markerWidth: "8",
                                markerHeight: "8",
                                refX: "6",
                                refY: "3",
                                orient: "auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M0,0 L0,6 L7,3 z",
                                    fill: "#94a3b8"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StoryGraph.tsx",
                                    lineNumber: 131,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/StoryGraph.tsx",
                                lineNumber: 130,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/StoryGraph.tsx",
                            lineNumber: 129,
                            columnNumber: 21
                        }, this),
                        edges.map((edge)=>{
                            const from = nodes.find((node)=>node.id === edge.from);
                            const to = nodes.find((node)=>node.id === edge.to);
                            if (!from || !to) return null;
                            const a = positionOf(from);
                            const b = positionOf(to);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: a.x,
                                        y1: a.y,
                                        x2: b.x,
                                        y2: b.y,
                                        stroke: "#94a3b8",
                                        strokeWidth: "2",
                                        markerEnd: "url(#story-arrow)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StoryGraph.tsx",
                                        lineNumber: 142,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: (a.x + b.x) / 2,
                                        y: (a.y + b.y) / 2 - 8,
                                        fill: "#cbd5e1",
                                        textAnchor: "middle",
                                        fontSize: "13",
                                        children: edge.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StoryGraph.tsx",
                                        lineNumber: 143,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, edge.id, true, {
                                fileName: "[project]/src/components/StoryGraph.tsx",
                                lineNumber: 141,
                                columnNumber: 29
                            }, this);
                        }),
                        nodes.map((node)=>{
                            const point = positionOf(node);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                id: node.id,
                                transform: `translate(${point.x - 75}, ${point.y - 30})`,
                                onPointerDown: (event)=>beginDrag(event, node),
                                className: "cursor-grab active:cursor-grabbing",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        width: "150",
                                        height: "60",
                                        rx: "12",
                                        fill: NODE_COLORS[node.kind],
                                        stroke: "#fbbf24",
                                        strokeWidth: "1.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StoryGraph.tsx",
                                        lineNumber: 157,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "75",
                                        y: "24",
                                        fill: "white",
                                        textAnchor: "middle",
                                        fontSize: "11",
                                        fontWeight: "bold",
                                        children: node.title.slice(0, 22)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StoryGraph.tsx",
                                        lineNumber: 158,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "75",
                                        y: "43",
                                        fill: "#e2e8f0",
                                        textAnchor: "middle",
                                        fontSize: "10",
                                        children: node.kind
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StoryGraph.tsx",
                                        lineNumber: 159,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, node.id, true, {
                                fileName: "[project]/src/components/StoryGraph.tsx",
                                lineNumber: 150,
                                columnNumber: 29
                            }, this);
                        }),
                        nodes.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "500",
                            y: "300",
                            fill: "#94a3b8",
                            textAnchor: "middle",
                            children: "Add graph nodes below to map your story."
                        }, void 0, false, {
                            fileName: "[project]/src/components/StoryGraph.tsx",
                            lineNumber: 163,
                            columnNumber: 44
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/StoryGraph.tsx",
                    lineNumber: 119,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/StoryGraph.tsx",
                lineNumber: 118,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: addNode,
                        className: "space-y-2 rounded-lg border border-slate-800 bg-slate-950 p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold text-slate-200",
                                children: "Add Node"
                            }, void 0, false, {
                                fileName: "[project]/src/components/StoryGraph.tsx",
                                lineNumber: 169,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-2 sm:grid-cols-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: nodeKind,
                                        onChange: (event)=>{
                                            setNodeKind(event.target.value);
                                            setLinkedEntityId('');
                                        },
                                        className: "rounded bg-slate-900 p-2 text-sm text-white",
                                        children: [
                                            'Character',
                                            'NPC',
                                            'Location',
                                            'Quest',
                                            'Faction'
                                        ].map((kind)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: kind
                                            }, kind, false, {
                                                fileName: "[project]/src/components/StoryGraph.tsx",
                                                lineNumber: 172,
                                                columnNumber: 118
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StoryGraph.tsx",
                                        lineNumber: 171,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: nodeTitle,
                                        onChange: (event)=>setNodeTitle(event.target.value),
                                        placeholder: "Node title",
                                        required: true,
                                        className: "rounded bg-slate-900 p-2 text-sm text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StoryGraph.tsx",
                                        lineNumber: 174,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/StoryGraph.tsx",
                                lineNumber: 170,
                                columnNumber: 21
                            }, this),
                            linkedOptions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: linkedEntityId,
                                onChange: (event)=>{
                                    setLinkedEntityId(event.target.value);
                                    const item = linkedOptions.find((option)=>option.id === event.target.value);
                                    if (item) setNodeTitle(item.title);
                                },
                                className: "w-full rounded bg-slate-900 p-2 text-sm text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Link to an existing entity (optional)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StoryGraph.tsx",
                                        lineNumber: 176,
                                        columnNumber: 324
                                    }, this),
                                    linkedOptions.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: item.id,
                                            children: item.title
                                        }, item.id, false, {
                                            fileName: "[project]/src/components/StoryGraph.tsx",
                                            lineNumber: 176,
                                            columnNumber: 416
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/StoryGraph.tsx",
                                lineNumber: 176,
                                columnNumber: 50
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: nodeDescription,
                                onChange: (event)=>setNodeDescription(event.target.value),
                                placeholder: "Description",
                                rows: 2,
                                className: "w-full rounded bg-slate-900 p-2 text-sm text-white"
                            }, void 0, false, {
                                fileName: "[project]/src/components/StoryGraph.tsx",
                                lineNumber: 177,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "rounded-lg bg-amber-700 px-3 py-2 text-xs font-semibold text-white hover:bg-amber-600",
                                children: "Add Story Node"
                            }, void 0, false, {
                                fileName: "[project]/src/components/StoryGraph.tsx",
                                lineNumber: 178,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/StoryGraph.tsx",
                        lineNumber: 168,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: addRelationship,
                        className: "space-y-2 rounded-lg border border-slate-800 bg-slate-950 p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold text-slate-200",
                                children: "Connect Nodes"
                            }, void 0, false, {
                                fileName: "[project]/src/components/StoryGraph.tsx",
                                lineNumber: 181,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-2 sm:grid-cols-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: fromNode,
                                        onChange: (event)=>setFromNode(event.target.value),
                                        required: true,
                                        className: "rounded bg-slate-900 p-2 text-sm text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "From"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/StoryGraph.tsx",
                                                lineNumber: 183,
                                                columnNumber: 169
                                            }, this),
                                            nodes.map((node)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: node.id,
                                                    children: node.title
                                                }, node.id, false, {
                                                    fileName: "[project]/src/components/StoryGraph.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 220
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/StoryGraph.tsx",
                                        lineNumber: 183,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: toNode,
                                        onChange: (event)=>setToNode(event.target.value),
                                        required: true,
                                        className: "rounded bg-slate-900 p-2 text-sm text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "To"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/StoryGraph.tsx",
                                                lineNumber: 184,
                                                columnNumber: 165
                                            }, this),
                                            nodes.map((node)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: node.id,
                                                    children: node.title
                                                }, node.id, false, {
                                                    fileName: "[project]/src/components/StoryGraph.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 214
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/StoryGraph.tsx",
                                        lineNumber: 184,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/StoryGraph.tsx",
                                lineNumber: 182,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: relationship,
                                onChange: (event)=>setRelationship(event.target.value),
                                placeholder: "Relationship (e.g., member of)",
                                required: true,
                                className: "w-full rounded bg-slate-900 p-2 text-sm text-white"
                            }, void 0, false, {
                                fileName: "[project]/src/components/StoryGraph.tsx",
                                lineNumber: 186,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: nodes.length < 2,
                                className: "rounded-lg bg-slate-700 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-600 disabled:opacity-40",
                                children: "Add Relationship"
                            }, void 0, false, {
                                fileName: "[project]/src/components/StoryGraph.tsx",
                                lineNumber: 187,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: edges.map((edge)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>onEdgesChange(edges.filter((item)=>item.id !== edge.id)),
                                        className: "rounded-full bg-slate-800 px-2.5 py-1 text-[11px] text-slate-300",
                                        children: [
                                            edge.label,
                                            " ×"
                                        ]
                                    }, edge.id, true, {
                                        fileName: "[project]/src/components/StoryGraph.tsx",
                                        lineNumber: 188,
                                        columnNumber: 80
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/StoryGraph.tsx",
                                lineNumber: 188,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/StoryGraph.tsx",
                        lineNumber: 180,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/StoryGraph.tsx",
                lineNumber: 167,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/StoryGraph.tsx",
        lineNumber: 113,
        columnNumber: 9
    }, this);
}
_s(StoryGraph, "YDF8+1H54oSjcJjIll9mNYJIaiU=");
_c = StoryGraph;
var _c;
__turbopack_context__.k.register(_c, "StoryGraph");
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

//# sourceMappingURL=_1ufldn9ibdtko._.js.map
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
"[project]/src/app/locations/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LocationsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockCampaign$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockCampaign.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLocalStorage.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const EMPTY_STORY_NODES = [];
const LOCATION_TYPES = [
    'Continent',
    'Kingdom',
    'Town',
    'Dungeon'
];
function LocationsPage() {
    _s();
    const [locations, setLocations, isLoaded, storageError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"])('dnd-locations', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockCampaign$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_LOCATIONS"]);
    const [storyNodes, , storyLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"])('dnd-story-nodes', EMPTY_STORY_NODES);
    const [generatingId, setGeneratingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [artError, setArtError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [type, setType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Town');
    const [summary, setSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [features, setFeatures] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const addLocation = (event)=>{
        event.preventDefault();
        if (!name.trim()) return;
        const location = {
            id: crypto.randomUUID(),
            name: name.trim(),
            type,
            summary: summary.trim(),
            notableFeatures: features.split(',').map((feature)=>feature.trim()).filter(Boolean)
        };
        setLocations((current)=>[
                location,
                ...current
            ]);
        setName('');
        setSummary('');
        setFeatures('');
    };
    const updateLocation = (location, patch)=>{
        setLocations((current)=>current.map((item)=>item.id === location.id ? {
                    ...item,
                    ...patch
                } : item));
    };
    const generateLandscape = async (location)=>{
        setGeneratingId(location.id);
        setArtError(null);
        try {
            const response = await fetch('/api/generate-art', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    characterName: location.name,
                    prompt: location.summary || location.notableFeatures.join(', ') || location.type,
                    kind: 'landscape'
                })
            });
            if (!response.ok) throw new Error('Landscape generation failed');
            const data = await response.json();
            if (!data.url) throw new Error('Landscape URL was not returned');
            updateLocation(location, {
                artworkUrl: data.url
            });
        } catch (error) {
            setArtError(`Could not generate artwork for ${location.name}.`);
            console.error(error);
        } finally{
            setGeneratingId(null);
        }
    };
    if (!isLoaded || !storyLoaded) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-slate-400",
        children: "Loading world directory…"
    }, void 0, false, {
        fileName: "[project]/src/app/locations/page.tsx",
        lineNumber: 63,
        columnNumber: 43
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        id: "world-directory",
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-extrabold text-amber-500",
                        children: "World Directory"
                    }, void 0, false, {
                        fileName: "[project]/src/app/locations/page.tsx",
                        lineNumber: 68,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-sm text-slate-400",
                        children: "Build a persistent gazetteer of regions, settlements, and dungeons."
                    }, void 0, false, {
                        fileName: "[project]/src/app/locations/page.tsx",
                        lineNumber: 69,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/locations/page.tsx",
                lineNumber: 67,
                columnNumber: 13
            }, this),
            storageError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "alert",
                className: "rounded-lg border border-rose-800 bg-rose-950/40 p-3 text-sm text-rose-200",
                children: storageError
            }, void 0, false, {
                fileName: "[project]/src/app/locations/page.tsx",
                lineNumber: 72,
                columnNumber: 30
            }, this),
            artError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "alert",
                className: "rounded-lg border border-rose-800 bg-rose-950/40 p-3 text-sm text-rose-200",
                children: artError
            }, void 0, false, {
                fileName: "[project]/src/app/locations/page.tsx",
                lineNumber: 73,
                columnNumber: 26
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: addLocation,
                className: "grid gap-3 rounded-xl border border-slate-800 bg-slate-900 p-4 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-bold text-slate-100 md:col-span-2",
                        children: "Add a Location"
                    }, void 0, false, {
                        fileName: "[project]/src/app/locations/page.tsx",
                        lineNumber: 76,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: name,
                        onChange: (event)=>setName(event.target.value),
                        placeholder: "Name",
                        required: true,
                        className: "rounded-lg bg-slate-950 p-2.5 text-sm text-white"
                    }, void 0, false, {
                        fileName: "[project]/src/app/locations/page.tsx",
                        lineNumber: 77,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: type,
                        onChange: (event)=>setType(event.target.value),
                        className: "rounded-lg bg-slate-950 p-2.5 text-sm text-white",
                        children: LOCATION_TYPES.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: item,
                                children: item
                            }, item, false, {
                                fileName: "[project]/src/app/locations/page.tsx",
                                lineNumber: 79,
                                columnNumber: 51
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/locations/page.tsx",
                        lineNumber: 78,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: summary,
                        onChange: (event)=>setSummary(event.target.value),
                        placeholder: "Description or campaign notes",
                        rows: 2,
                        className: "rounded-lg bg-slate-950 p-2.5 text-sm text-white md:col-span-2"
                    }, void 0, false, {
                        fileName: "[project]/src/app/locations/page.tsx",
                        lineNumber: 81,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: features,
                        onChange: (event)=>setFeatures(event.target.value),
                        placeholder: "Notable features, comma separated",
                        className: "rounded-lg bg-slate-950 p-2.5 text-sm text-white"
                    }, void 0, false, {
                        fileName: "[project]/src/app/locations/page.tsx",
                        lineNumber: 82,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "rounded-lg bg-amber-700 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-600",
                        children: "Add Location"
                    }, void 0, false, {
                        fileName: "[project]/src/app/locations/page.tsx",
                        lineNumber: 83,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/locations/page.tsx",
                lineNumber: 75,
                columnNumber: 13
            }, this),
            locations.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "rounded-xl border border-slate-800 bg-slate-900 p-8 text-center text-slate-400",
                children: "No locations yet. Add one to begin your world directory."
            }, void 0, false, {
                fileName: "[project]/src/app/locations/page.tsx",
                lineNumber: 87,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-2",
                children: locations.map((location)=>{
                    const linkedNode = storyNodes.find((node)=>node.kind === 'Location' && node.linkedEntityId === location.id);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        id: location.id,
                        className: "scroll-mt-6 space-y-3 rounded-xl border border-slate-800 bg-slate-900 p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] uppercase tracking-wider text-amber-500",
                                                children: location.type
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/locations/page.tsx",
                                                lineNumber: 96,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-bold text-slate-100",
                                                children: location.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/locations/page.tsx",
                                                lineNumber: 97,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/locations/page.tsx",
                                        lineNumber: 95,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setLocations((current)=>current.filter((item)=>item.id !== location.id)),
                                        className: "text-xs text-rose-300 hover:text-rose-200",
                                        children: "Delete"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/locations/page.tsx",
                                        lineNumber: 99,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/locations/page.tsx",
                                lineNumber: 94,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                "aria-label": `Description of ${location.name}`,
                                value: location.summary,
                                onChange: (event)=>updateLocation(location, {
                                        summary: event.target.value
                                    }),
                                rows: 3,
                                className: "w-full resize-y rounded-lg bg-slate-950 p-3 text-sm text-slate-300"
                            }, void 0, false, {
                                fileName: "[project]/src/app/locations/page.tsx",
                                lineNumber: 101,
                                columnNumber: 33
                            }, this),
                            location.artworkUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: location.artworkUrl,
                                alt: `${location.name} fantasy landscape`,
                                className: "max-h-72 w-full rounded-lg border border-slate-800 object-cover"
                            }, void 0, false, {
                                fileName: "[project]/src/app/locations/page.tsx",
                                lineNumber: 102,
                                columnNumber: 57
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>generateLandscape(location),
                                disabled: generatingId === location.id,
                                className: "rounded-lg bg-amber-700 px-3 py-2 text-xs font-semibold text-white hover:bg-amber-600 disabled:bg-slate-700",
                                children: generatingId === location.id ? 'Weaving Arcana…' : location.artworkUrl ? 'Regenerate Landscape' : 'Generate AI Landscape'
                            }, void 0, false, {
                                fileName: "[project]/src/app/locations/page.tsx",
                                lineNumber: 103,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-1.5",
                                children: location.notableFeatures.map((feature)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full border border-slate-700 bg-slate-800 px-2.5 py-1 text-[11px] text-slate-300",
                                        children: feature
                                    }, feature, false, {
                                        fileName: "[project]/src/app/locations/page.tsx",
                                        lineNumber: 107,
                                        columnNumber: 80
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/locations/page.tsx",
                                lineNumber: 106,
                                columnNumber: 33
                            }, this),
                            linkedNode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/story#${linkedNode.id}`,
                                className: "inline-block text-xs text-sky-300 underline",
                                children: [
                                    "Open story node: ",
                                    linkedNode.title
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/locations/page.tsx",
                                lineNumber: 109,
                                columnNumber: 48
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-3",
                                children: [
                                    linkedNode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/story#${linkedNode.id}`,
                                        className: "text-xs text-emerald-300 underline",
                                        children: "View in story graph"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/locations/page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 52
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            const replacement = window.prompt('Notable features, separated by commas', location.notableFeatures.join(', '));
                                            if (replacement !== null) updateLocation(location, {
                                                notableFeatures: replacement.split(',').map((item)=>item.trim()).filter(Boolean)
                                            });
                                        },
                                        className: "text-xs text-slate-400 underline",
                                        children: "Edit features"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/locations/page.tsx",
                                        lineNumber: 112,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/locations/page.tsx",
                                lineNumber: 110,
                                columnNumber: 33
                            }, this)
                        ]
                    }, location.id, true, {
                        fileName: "[project]/src/app/locations/page.tsx",
                        lineNumber: 93,
                        columnNumber: 29
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/locations/page.tsx",
                lineNumber: 89,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/locations/page.tsx",
        lineNumber: 66,
        columnNumber: 9
    }, this);
}
_s(LocationsPage, "mOVDL0pNwUvaHDHUiChyLKXJGMY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"]
    ];
});
_c = LocationsPage;
var _c;
__turbopack_context__.k.register(_c, "LocationsPage");
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

//# sourceMappingURL=_1g725sm6yoz4-._.js.map
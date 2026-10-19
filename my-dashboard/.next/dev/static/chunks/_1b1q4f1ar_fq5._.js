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
"[project]/src/app/maps/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MapsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MapCanvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MapCanvas.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLocalStorage.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
    _s();
    const [maps, setMaps, isLoaded, storageError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"])('dnd-maps', INITIAL_MAPS);
    const [storyNodes, , storyLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"])('dnd-story-nodes', EMPTY_STORY_NODES);
    const [selectedMapId, setSelectedMapId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(INITIAL_MAPS[0].id);
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
    if (!isLoaded || !storyLoaded) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-slate-400",
        children: "Loading map studio…"
    }, void 0, false, {
        fileName: "[project]/src/app/maps/page.tsx",
        lineNumber: 50,
        columnNumber: 43
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-end justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-extrabold text-amber-500",
                                children: "Map Drawing Studio"
                            }, void 0, false, {
                                fileName: "[project]/src/app/maps/page.tsx",
                                lineNumber: 56,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm text-slate-400",
                                children: "Sketch encounters and world regions. Map vectors and pins save automatically in this browser."
                            }, void 0, false, {
                                fileName: "[project]/src/app/maps/page.tsx",
                                lineNumber: 57,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/maps/page.tsx",
                        lineNumber: 55,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: addMap,
                        className: "rounded-lg bg-amber-600 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-500",
                        children: "New Map"
                    }, void 0, false, {
                        fileName: "[project]/src/app/maps/page.tsx",
                        lineNumber: 59,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/maps/page.tsx",
                lineNumber: 54,
                columnNumber: 13
            }, this),
            storageError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "alert",
                className: "rounded-lg border border-rose-800 bg-rose-950/40 p-3 text-sm text-rose-200",
                children: storageError
            }, void 0, false, {
                fileName: "[project]/src/app/maps/page.tsx",
                lineNumber: 61,
                columnNumber: 30
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-2 text-sm text-slate-300",
                        children: [
                            "Map",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: selectedMap?.id ?? '',
                                onChange: (event)=>setSelectedMapId(event.target.value),
                                className: "rounded bg-slate-950 px-3 py-2 text-white",
                                children: maps.map((map)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: map.id,
                                        children: map.name
                                    }, map.id, false, {
                                        fileName: "[project]/src/app/maps/page.tsx",
                                        lineNumber: 66,
                                        columnNumber: 44
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/maps/page.tsx",
                                lineNumber: 65,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/maps/page.tsx",
                        lineNumber: 63,
                        columnNumber: 17
                    }, this),
                    selectedMap && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex flex-1 items-center gap-2 text-sm text-slate-300",
                        children: [
                            "Rename",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: selectedMap.name,
                                onChange: (event)=>updateMap({
                                        ...selectedMap,
                                        name: event.target.value
                                    }),
                                className: "min-w-40 flex-1 rounded bg-slate-950 px-3 py-2 text-white"
                            }, void 0, false, {
                                fileName: "[project]/src/app/maps/page.tsx",
                                lineNumber: 72,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/maps/page.tsx",
                        lineNumber: 70,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/maps/page.tsx",
                lineNumber: 62,
                columnNumber: 13
            }, this),
            selectedMap ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MapCanvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                map: selectedMap,
                storyNodes: storyNodes,
                onChange: updateMap
            }, void 0, false, {
                fileName: "[project]/src/app/maps/page.tsx",
                lineNumber: 77,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-slate-800 bg-slate-900 p-8 text-center text-slate-400",
                children: "Create a map to begin."
            }, void 0, false, {
                fileName: "[project]/src/app/maps/page.tsx",
                lineNumber: 79,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/maps/page.tsx",
        lineNumber: 53,
        columnNumber: 9
    }, this);
}
_s(MapsPage, "Paj/kbpN07VE3t/qyWooC/AyNBo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"]
    ];
});
_c = MapsPage;
var _c;
__turbopack_context__.k.register(_c, "MapsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/MapCanvas.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MapCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const activeDrawingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [activeDrawing, setActiveDrawing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [tool, setTool] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('brush');
    const [pinKind, setPinKind] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('encounter');
    const [brushColor, setBrushColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('#f59e0b');
    const [brushWidth, setBrushWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(4);
    const [eraserMode, setEraserMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('point');
    const [selectedPinId, setSelectedPinId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDraggingPin, setIsDraggingPin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [canvasError, setCanvasError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const selectedPin = map.pins.find((pin)=>pin.id === selectedPinId) ?? null;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapCanvas.useEffect": ()=>{
            const canvas = canvasRef.current;
            const context = canvas?.getContext('2d');
            if (!canvas || !context) return;
            const render = {
                "MapCanvas.useEffect.render": ()=>{
                    context.clearRect(0, 0, map.width, map.height);
                    context.fillStyle = '#020617';
                    context.fillRect(0, 0, map.width, map.height);
                    if (map.backgroundImage) {
                        const image = new Image();
                        image.onload = ({
                            "MapCanvas.useEffect.render": ()=>{
                                context.drawImage(image, 0, 0, map.width, map.height);
                                renderOverlay();
                            }
                        })["MapCanvas.useEffect.render"];
                        image.src = map.backgroundImage;
                    } else {
                        renderOverlay();
                    }
                }
            }["MapCanvas.useEffect.render"];
            const renderOverlay = {
                "MapCanvas.useEffect.renderOverlay": ()=>{
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
                    ].forEach({
                        "MapCanvas.useEffect.renderOverlay": (drawing)=>drawShape(context, drawing)
                    }["MapCanvas.useEffect.renderOverlay"]);
                    map.pins.forEach({
                        "MapCanvas.useEffect.renderOverlay": (pin)=>{
                            context.font = '22px sans-serif';
                            context.textAlign = 'center';
                            context.textBaseline = 'middle';
                            context.fillText(PIN_ICONS[pin.kind], pin.x, pin.y);
                        }
                    }["MapCanvas.useEffect.renderOverlay"]);
                }
            }["MapCanvas.useEffect.renderOverlay"];
            render();
        }
    }["MapCanvas.useEffect"], [
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
    const toolButton = (value, label)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: ()=>setTool(value),
            "aria-pressed": tool === value,
            className: `rounded-lg px-3 py-2 text-xs font-semibold ${tool === value ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`,
            children: label
        }, value, false, {
            fileName: "[project]/src/components/MapCanvas.tsx",
            lineNumber: 303,
            columnNumber: 9
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "flex flex-wrap items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 p-3",
                children: [
                    toolButton('brush', 'Brush'),
                    toolButton('rectangle', 'Rectangle'),
                    toolButton('circle', 'Circle'),
                    toolButton('line', 'Line'),
                    toolButton('eraser', 'Eraser'),
                    toolButton('pin', 'Place Pin'),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "ml-1 flex items-center gap-2 text-xs text-slate-300",
                        children: [
                            "Color",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "color",
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-2 text-xs text-slate-300",
                        children: [
                            "Width",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-2 text-xs text-slate-300",
                        children: [
                            "Pin",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: pinKind,
                                onChange: (event)=>setPinKind(event.target.value),
                                className: "rounded bg-slate-950 px-2 py-1",
                                children: Object.keys(PIN_ICONS).map((kind)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "flex flex-wrap items-center gap-4 rounded-xl border border-slate-800 bg-slate-900 p-3 text-xs text-slate-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-2",
                        children: [
                            "Grid opacity",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-2",
                        children: [
                            "Cell size",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                min: "10",
                                max: "100",
                                value: map.gridSize,
                                onChange: (event)=>onChange({
                                        ...map,
                                        gridSize: Math.max(10, Number(event.target.value))
                                    }),
                                className: "w-16 rounded bg-slate-950 px-2 py-1"
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-2",
                        children: [
                            "Eraser mode",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: eraserMode,
                                onChange: (event)=>setEraserMode(event.target.value),
                                className: "rounded bg-slate-950 px-2 py-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "point",
                                        children: "Point"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MapCanvas.tsx",
                                        lineNumber: 344,
                                        columnNumber: 219
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "object",
                                        children: "Object"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MapCanvas.tsx",
                                        lineNumber: 344,
                                        columnNumber: 255
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-2 rounded-lg bg-slate-800 px-3 py-2 hover:bg-slate-700",
                        children: [
                            "Import background",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                accept: "image/*",
                                onChange: (event)=>importBackground(event.target.files?.[0]),
                                className: "sr-only"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MapCanvas.tsx",
                                lineNumber: 345,
                                columnNumber: 130
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MapCanvas.tsx",
                        lineNumber: 345,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>onChange({
                                ...map,
                                backgroundImage: undefined
                            }),
                        className: "rounded-lg bg-slate-800 px-3 py-2 hover:bg-slate-700",
                        children: "Clear background"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MapCanvas.tsx",
                        lineNumber: 346,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: exportPng,
                        className: "rounded-lg bg-amber-700 px-3 py-2 text-white hover:bg-amber-600",
                        children: "Export PNG"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MapCanvas.tsx",
                        lineNumber: 347,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MapCanvas.tsx",
                lineNumber: 339,
                columnNumber: 13
            }, this),
            canvasError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "alert",
                className: "text-sm text-rose-300",
                children: canvasError
            }, void 0, false, {
                fileName: "[project]/src/components/MapCanvas.tsx",
                lineNumber: 350,
                columnNumber: 29
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-950 shadow-xl",
                style: {
                    maxWidth: map.width,
                    aspectRatio: `${map.width} / ${map.height}`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
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
                        lineNumber: 352,
                        columnNumber: 17
                    }, this),
                    map.pins.map((pin)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            title: `${pin.title}${pin.note ? `: ${pin.note}` : ''}`,
                            "aria-label": `Edit ${pin.kind} pin ${pin.title}`,
                            onClick: ()=>setSelectedPinId(pin.id),
                            onPointerDown: (event)=>handlePinPointerDown(event, pin),
                            onPointerMove: (event)=>handlePinPointerMove(event, pin),
                            onPointerUp: ()=>setIsDraggingPin(false),
                            className: "absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-amber-300 bg-slate-950/80 text-base shadow-lg",
                            style: {
                                left: `${pin.x / map.width * 100}%`,
                                top: `${pin.y / map.height * 100}%`
                            },
                            children: PIN_ICONS[pin.kind]
                        }, pin.id, false, {
                            fileName: "[project]/src/components/MapCanvas.tsx",
                            lineNumber: 364,
                            columnNumber: 21
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MapCanvas.tsx",
                lineNumber: 351,
                columnNumber: 13
            }, this),
            selectedPin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid gap-3 rounded-xl border border-slate-800 bg-slate-900 p-4 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "space-y-1 text-xs text-slate-400",
                        children: [
                            "Pin title",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: selectedPin.title,
                                onChange: (event)=>updatePin(selectedPin.id, {
                                        title: event.target.value
                                    }),
                                className: "w-full rounded bg-slate-950 p-2 text-sm text-white"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MapCanvas.tsx",
                                lineNumber: 383,
                                columnNumber: 82
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MapCanvas.tsx",
                        lineNumber: 383,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "space-y-1 text-xs text-slate-400",
                        children: [
                            "Link to story node",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: selectedPin.storyNodeId ?? '',
                                onChange: (event)=>updatePin(selectedPin.id, {
                                        storyNodeId: event.target.value || undefined
                                    }),
                                className: "w-full rounded bg-slate-950 p-2 text-sm text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "No link"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MapCanvas.tsx",
                                        lineNumber: 384,
                                        columnNumber: 298
                                    }, this),
                                    storyNodes.map((node)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: node.id,
                                            children: node.title
                                        }, node.id, false, {
                                            fileName: "[project]/src/components/MapCanvas.tsx",
                                            lineNumber: 384,
                                            columnNumber: 357
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MapCanvas.tsx",
                                lineNumber: 384,
                                columnNumber: 91
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MapCanvas.tsx",
                        lineNumber: 384,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "space-y-1 text-xs text-slate-400 md:col-span-2",
                        children: [
                            "Pin note",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: selectedPin.note,
                                onChange: (event)=>updatePin(selectedPin.id, {
                                        note: event.target.value
                                    }),
                                rows: 2,
                                className: "w-full rounded bg-slate-950 p-2 text-sm text-white"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MapCanvas.tsx",
                                lineNumber: 385,
                                columnNumber: 95
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MapCanvas.tsx",
                        lineNumber: 385,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 md:col-span-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setSelectedPinId(null),
                                className: "rounded-lg bg-slate-800 px-3 py-2 text-xs text-white",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MapCanvas.tsx",
                                lineNumber: 387,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    onChange({
                                        ...map,
                                        pins: map.pins.filter((pin)=>pin.id !== selectedPin.id)
                                    });
                                    setSelectedPinId(null);
                                },
                                className: "rounded-lg bg-rose-900 px-3 py-2 text-xs text-white",
                                children: "Delete Pin"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MapCanvas.tsx",
                                lineNumber: 388,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MapCanvas.tsx",
                        lineNumber: 386,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MapCanvas.tsx",
                lineNumber: 382,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MapCanvas.tsx",
        lineNumber: 315,
        columnNumber: 9
    }, this);
}
_s(MapCanvas, "UM4fcvkaPF1HWk/PsLXfaubU0YY=");
_c = MapCanvas;
var _c;
__turbopack_context__.k.register(_c, "MapCanvas");
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
]);})()

//# sourceMappingURL=_1b1q4f1ar_fq5._.js.map
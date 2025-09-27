(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BusinessIntelligencePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/noop-head.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function BusinessIntelligencePage() {
    _s();
    const shareUrl = ("TURBOPACK compile-time truthy", 1) ? window.location.href : ("TURBOPACK unreachable", undefined);
    const shareOnFacebook = ()=>{
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
    };
    const shareOnLinkedIn = ()=>{
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
    };
    const shareOnTwitter = ()=>{
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`, '_blank');
    };
    const faqs = [
        {
            question: "What does business intelligence software do?",
            answer: "Business intelligence software collects, analyzes, and visualizes data from various sources to help businesses make data-driven decisions, optimize operations, and identify trends and insights."
        },
        {
            question: "Is SQL a business intelligence tool?",
            answer: "SQL itself is not a BI tool, but it is a foundational language used within many BI tools to query databases and extract relevant data for analysis."
        },
        {
            question: "Is Microsoft Excel a business intelligence tool?",
            answer: "Microsoft Excel is not a full BI tool but is widely used for data analysis and visualization. It integrates with BI platforms like Power BI to enhance reporting capabilities."
        },
        {
            question: "What is the main purpose of business intelligence?",
            answer: "The primary goal of BI is to help organizations make better strategic, tactical, and operational decisions through data insights and performance monitoring."
        }
    ];
    const tocItems = [
        "What is business intelligence software?",
        "My top picks for business intelligence software",
        "Find your new BI software",
        "Business intelligence software benefits",
        "What is the business impact of business intelligence software?",
        "Choosing the best software for business intelligence platform",
        "Frequently Asked Questions (FAQ)",
        "More business intelligence resources"
    ];
    const [openTableauDetails, setOpenTableauDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openTableauFeatures, setOpenTableauFeatures] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openTableauPricing, setOpenTableauPricing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openSisenseDetails, setOpenSisenseDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openSisenseFeatures, setOpenSisenseFeatures] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openSisensePricing, setOpenSisensePricing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openQlikDetails, setOpenQlikDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openQlikFeatures, setOpenQlikFeatures] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openQlikPricing, setOpenQlikPricing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openZohoDetails, setOpenZohoDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openZohoFeatures, setOpenZohoFeatures] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openZohoPricing, setOpenZohoPricing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openIBMCognosDetails, setOpenIBMCognosDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openIBMCognosFeatures, setOpenIBMCognosFeatures] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openIBMCognosPricing, setOpenIBMCognosPricing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BusinessIntelligencePage.useEffect": ()=>{
            document.documentElement.style.scrollBehavior = "smooth";
            const handleScroll = {
                "BusinessIntelligencePage.useEffect.handleScroll": ()=>{
                    const sections = document.querySelectorAll("section[id]");
                    let current = 0;
                    sections.forEach({
                        "BusinessIntelligencePage.useEffect.handleScroll": (section, index)=>{
                            const sectionTop = section.offsetTop;
                            if (window.scrollY >= sectionTop - 150) {
                                current = index;
                            }
                        }
                    }["BusinessIntelligencePage.useEffect.handleScroll"]);
                    setActiveSection(current);
                }
            }["BusinessIntelligencePage.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "BusinessIntelligencePage.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["BusinessIntelligencePage.useEffect"];
        }
    }["BusinessIntelligencePage.useEffect"], []);
    const [openSection, setOpenSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const toggleSection = (section)=>{
        setOpenSection(openSection === section ? null : section);
    };
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const toggleFAQ = (index)=>{
        setActiveIndex(index === activeIndex ? null : index);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        children: "Business Intelligence Software Guide 2025 | Technology Advice"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                        lineNumber: 110,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Explore the best business intelligence software tools of 2025. Compare top BI platforms, features, pricing, and implementation strategies for data-driven decision making."
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                        lineNumber: 111,
                        columnNumber: 3
                    }, this),
                    "  "
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                lineNumber: 109,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-[#0E1F1C] text-white py-12 px-4 sm:px-8 lg:px-16 xl:px-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center text-sm text-white/80 mb-6 gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiHome"], {
                                    className: "text-lg"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "/"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-white",
                                    children: "Business Intelligence"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl sm:text-4xl md:text-5xl font-bold mb-6",
                            children: "Business Intelligence (BI) Software Guide 2025"
                        }, void 0, false, {
                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-4 text-white/90 text-sm mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCheckCircle"], {
                                    className: "text-green-400 mt-1 text-xl"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "leading-relaxed",
                                    children: "Technology Advice is able to offer our services for free because some vendors may pay us for web traffic or other sales opportunities. Our mission is to help technology buyers make better purchasing decisions, so we provide you with information for all vendors — even those that don't pay us."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 px-4 sm:px-8 lg:px-16 py-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            className: "lg:w-80 lg:sticky lg:top-24 lg:self-start",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-4xl shadow-sm border border-gray-200 p-6",
                                style: {
                                    scrollBehavior: "smooth"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-semibold text-gray-900 mb-4",
                                        children: "Table of contents"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                        lineNumber: 151,
                                        columnNumber: 5
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                        className: "space-y-2",
                                        children: tocItems.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>{
                                                    const section = document.getElementById(`section-${i}`);
                                                    if (section) {
                                                        window.scrollTo({
                                                            top: section.offsetTop - 120,
                                                            behavior: "smooth"
                                                        });
                                                    }
                                                },
                                                className: `block py-2 px-3 rounded-md text-sm cursor-pointer transition-colors duration-200 ${activeSection === i ? "bg-[#386861] text-white border-l-4 border-[#386861] font-medium" : "text-gray-600 hover:text-black hover:bg-gray-100"}`,
                                                children: item
                                            }, i, false, {
                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                lineNumber: 155,
                                                columnNumber: 9
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                        lineNumber: 153,
                                        columnNumber: 5
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-8 pt-6 border-t border-gray-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold text-gray-900 mb-4",
                                                children: "Share this article"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                lineNumber: 179,
                                                columnNumber: 7
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex space-x-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: shareOnFacebook,
                                                        className: "w-12 h-12 rounded-full bg-[#386861]text-white flex items-center justify-center hover:bg-blue-700 transition-colors duration-200",
                                                        "aria-label": "Share on Facebook",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-5 h-5",
                                                            fill: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                lineNumber: 187,
                                                                columnNumber: 13
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 186,
                                                            columnNumber: 11
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                        lineNumber: 181,
                                                        columnNumber: 9
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: shareOnLinkedIn,
                                                        className: "w-12 h-12 rounded-full bg-[#386861] text-white flex items-center justify-center hover:bg-blue-800 transition-colors duration-200",
                                                        "aria-label": "Share on LinkedIn",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-5 h-5",
                                                            fill: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                lineNumber: 196,
                                                                columnNumber: 13
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 195,
                                                            columnNumber: 11
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                        lineNumber: 190,
                                                        columnNumber: 9
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: shareOnTwitter,
                                                        className: "w-12 h-12 rounded-full bg-[#386861] text-white flex items-center justify-center hover:bg-blue-800 transition-colors duration-200",
                                                        "aria-label": "Share on Twitter",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-4 h-4",
                                                            fill: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                lineNumber: 205,
                                                                columnNumber: 13
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 204,
                                                            columnNumber: 11
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                        lineNumber: 199,
                                                        columnNumber: 9
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                lineNumber: 180,
                                                columnNumber: 7
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                        lineNumber: 178,
                                        columnNumber: 5
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                lineNumber: 150,
                                columnNumber: 3
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                            lineNumber: 149,
                            columnNumber: 12
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:w-3/4",
                            ref: contentRef,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    id: "1",
                                    className: "mb-16",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl sm:text-3xl font-bold text-gray-900 mb-6",
                                            children: "What is business intelligence software?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                            lineNumber: 218,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4 text-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "#",
                                                            className: "text-[#386861] font-medium underline",
                                                            children: "Business intelligence (BI) software"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 224,
                                                            columnNumber: 19
                                                        }, this),
                                                        " ",
                                                        "is any application that collects and processes large amounts of unstructured data from internal and external systems and prepares data for analysis..."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                    lineNumber: 223,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Business intelligence tools gather data from various sources, such as databases, spreadsheets..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                    lineNumber: 231,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Check out my picks for the top business intelligence software below."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                    lineNumber: 235,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "list-disc ml-5 space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "#",
                                                                    className: "text-[#386861] font-medium",
                                                                    children: "Tableau"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 239,
                                                                    columnNumber: 21
                                                                }, this),
                                                                ": Best for data visualization"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 238,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "#",
                                                                    className: "text-[#386861] font-medium",
                                                                    children: "Sisense"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 242,
                                                                    columnNumber: 21
                                                                }, this),
                                                                ": Best for embedded analytics"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 241,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "#",
                                                                    className: "text-[#386861] font-medium",
                                                                    children: "Qlik Sense"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 245,
                                                                    columnNumber: 21
                                                                }, this),
                                                                ": Best mobile BI software"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 244,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "#",
                                                                    className: "text-[#386861] font-medium",
                                                                    children: "Zoho Analytics"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 248,
                                                                    columnNumber: 21
                                                                }, this),
                                                                ": Best self-service BI software"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 247,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "#",
                                                                    className: "text-[#386861] font-medium",
                                                                    children: "IBM Cognos Analytics"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 251,
                                                                    columnNumber: 21
                                                                }, this),
                                                                ": Best for reporting"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 250,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                    lineNumber: 237,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-12 space-y-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "border-b",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between items-center cursor-pointer",
                                                                    onClick: ()=>toggleSection('updates'),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2 text-gray-700 font-semibold text-base",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaClock"], {
                                                                                    className: "text-gray-500"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 259,
                                                                                    columnNumber: 21
                                                                                }, this),
                                                                                "Update notes"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 258,
                                                                            columnNumber: 19
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            className: "w-6 h-6 flex items-center justify-center rounded bg-[#386861] text-white text-sm",
                                                                            children: openSection === 'updates' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaMinus"], {}, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                lineNumber: 263,
                                                                                columnNumber: 50
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPlus"], {}, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                lineNumber: 263,
                                                                                columnNumber: 64
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 262,
                                                                            columnNumber: 19
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 257,
                                                                    columnNumber: 17
                                                                }, this),
                                                                openSection === 'updates' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "pt-6 text-sm text-gray-800 space-y-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                    children: "December 23, 2024:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 268,
                                                                                    columnNumber: 24
                                                                                }, this),
                                                                                " A few minor updates..."
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 268,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                    children: "November 13, 2024:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 269,
                                                                                    columnNumber: 24
                                                                                }, this),
                                                                                " Updated all vendors..."
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 269,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 267,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 256,
                                                            columnNumber: 15
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "border-b",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between items-center cursor-pointer",
                                                                    onClick: ()=>toggleSection('methodology'),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2 text-gray-700 font-semibold text-base",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaClock"], {
                                                                                    className: "text-gray-500"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 277,
                                                                                    columnNumber: 21
                                                                                }, this),
                                                                                "Methodology"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 276,
                                                                            columnNumber: 19
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            className: "w-6 h-6 flex items-center justify-center rounded bg-[#386861] text-white text-sm",
                                                                            children: openSection === 'methodology' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaMinus"], {}, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                lineNumber: 281,
                                                                                columnNumber: 54
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPlus"], {}, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                lineNumber: 281,
                                                                                columnNumber: 68
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 280,
                                                                            columnNumber: 19
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 275,
                                                                    columnNumber: 17
                                                                }, this),
                                                                openSection === 'methodology' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "pt-6 text-sm text-gray-800 space-y-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: "At TechnologyAdvice, we assess a wide range of factors before selecting our top choices..."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                        lineNumber: 286,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 285,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 274,
                                                            columnNumber: 15
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                    lineNumber: 255,
                                                    columnNumber: 13
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                            lineNumber: 222,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                    lineNumber: 217,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    id: "section-2",
                                    className: "mb-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl sm:text-3xl font-bold text-gray-900 mb-6",
                                            children: "My top picks for business intelligence software"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                            lineNumber: 296,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-xl shadow-md border overflow-hidden mt-12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col md:flex-row justify-between items-start md:items-center p-6 border-b bg-[#F5F8F7]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-xl sm:text-2xl font-semibold text-gray-800",
                                                                children: "Tableau: Best for data visualization"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                lineNumber: 304,
                                                                columnNumber: 13
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 303,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "mt-4 md:mt-0 inline-block bg-[#386861] text-white text-sm font-medium px-4 py-2 rounded hover:bg-green-700 transition",
                                                            children: "Visit Website"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 308,
                                                            columnNumber: 11
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                    lineNumber: 302,
                                                    columnNumber: 5
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-6 py-4 border-b",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center text-sm text-gray-700 mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Overall Score"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 320,
                                                                    columnNumber: 13
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-semibold text-lg text-gray-800",
                                                                    children: "4.3/5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 321,
                                                                    columnNumber: 13
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 319,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full bg-gray-200 rounded-full h-2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-[#386861] h-2 rounded-full",
                                                                style: {
                                                                    width: "86%"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                lineNumber: 324,
                                                                columnNumber: 13
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 323,
                                                            columnNumber: 11
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                    lineNumber: 318,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-semibold text-gray-800 mb-2",
                                                                    children: "Pros"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 330,
                                                                    columnNumber: 13
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "space-y-2 text-gray-700",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex items-start gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-green-600 font-bold",
                                                                                    children: "+"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 333,
                                                                                    columnNumber: 17
                                                                                }, this),
                                                                                "Quick, attractive data visualization"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 332,
                                                                            columnNumber: 15
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex items-start gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-green-600 font-bold",
                                                                                    children: "+"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 337,
                                                                                    columnNumber: 17
                                                                                }, this),
                                                                                "Drag-and-drop interface good for beginners"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 336,
                                                                            columnNumber: 15
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex items-start gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-green-600 font-bold",
                                                                                    children: "+"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 341,
                                                                                    columnNumber: 17
                                                                                }, this),
                                                                                "Real-time data reflection"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 340,
                                                                            columnNumber: 15
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 331,
                                                                    columnNumber: 13
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 329,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-semibold text-gray-800 mb-2",
                                                                    children: "Cons"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 348,
                                                                    columnNumber: 13
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "space-y-2 text-gray-700",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex items-start gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-red-500 font-bold",
                                                                                    children: "–"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 351,
                                                                                    columnNumber: 17
                                                                                }, this),
                                                                                "Can be expensive"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 350,
                                                                            columnNumber: 15
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex items-start gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-red-500 font-bold",
                                                                                    children: "–"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 355,
                                                                                    columnNumber: 17
                                                                                }, this),
                                                                                "Experience needed to fully leverage capabilities"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 354,
                                                                            columnNumber: 15
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 349,
                                                                    columnNumber: 13
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 347,
                                                            columnNumber: 11
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                    lineNumber: 328,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-6 pb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-semibold text-gray-800 text-base mb-2",
                                                            children: "Why I picked Tableau"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 363,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm text-gray-700 leading-relaxed space-y-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "Tableau's data visualization capabilities and easy-to-use interface have always been this software's greatest strengths."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 365,
                                                                    columnNumber: 13
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "With the recent 2024.3 update, I'm seeing Tableau reinforce its position as a top player in the analytics space. The update introduces Tableau Cloud Manager, which allows me to manage licenses centrally without needing to license each user individually. This is a significant time-saver for enterprise clients, especially with data governance requirements. New features like the table viz extension, spatial parameters, and integration with Microsoft Teams further streamline Tableau's usability."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 369,
                                                                    columnNumber: 13
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "The 'Embedding Playground' is a nice addition, giving greater flexibility and creativity when embedding analytics—something I haven't found in other BI tools like Microsoft Power BI or Qlik. I also appreciate the new 'Custom Data Labels,' which improve data management with advanced categorization and discovery options that stand out compared to competitors."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 373,
                                                                    columnNumber: 13
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "Tableau's 'Dynamic Axis Ranges' bring impressive customization to visualizations, allowing me to adapt views to different datasets with ease—a level of flexibility that many other platforms don't match. Integration with Salesforce through the 'Native Lightning Web Component for Tableau' and the 'Tableau Cloud add-on for Google Workspace' enhances the analytics experience across platforms. This level of seamless integration is particularly valuable, especially when compared to Power BI, which, while strong within Microsoft's ecosystem, may not offer the same flexibility across different platforms."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 377,
                                                                    columnNumber: 13
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "The software's focus on enhancing user experience and customization, coupled with strategic integrations, positions it as a comprehensive tool for data-driven decision-making. In comparison to its key competitors, Tableau offers a unique combination of versatility, innovation, and user-centric design, making it an strong asset in any data-driven organization's toolkit."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 381,
                                                                    columnNumber: 13
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: "#",
                                                                    className: "text-[#386861] font-medium inline-block mt-4",
                                                                    children: "Also read: Top Tableau Alternatives For Visualizing & Analyzing Data"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 385,
                                                                    columnNumber: 13
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 364,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-8 border-t pt-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "flex items-center justify-between w-full text-left font-semibold text-gray-800",
                                                                    onClick: ()=>setOpenTableauDetails(!openTableauDetails),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "About Tableau"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 396,
                                                                            columnNumber: 15
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                            className: `transition-transform ${openTableauDetails ? 'rotate-180' : ''}`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 397,
                                                                            columnNumber: 15
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 392,
                                                                    columnNumber: 13
                                                                }, this),
                                                                openTableauDetails && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-4 text-sm text-gray-700 space-y-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            children: "Tableau, a leading data visualization BI tool, is designed to help businesses turn raw data into actionable insights. Its standout features include an intuitive drag-and-drop interface, real-time data analytics, and interactive dashboards that empower users to explore data in a user-friendly environment. Tableau's Data Blending and Cross-Database Joins enable the combination of data from multiple sources, and its Tableau Public allows the sharing of data visualizations to a wider audience."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 402,
                                                                            columnNumber: 17
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            children: "Users can present data in the form of charts, graphs, and other visual representations with dashboards and visualization tools. It also allows users to identify trends and patterns in data and make more informed decisions."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 405,
                                                                            columnNumber: 17
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 401,
                                                                    columnNumber: 15
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 391,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-6 border-t pt-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "flex items-center justify-between w-full text-left font-semibold text-gray-800",
                                                                    onClick: ()=>setOpenTableauFeatures(!openTableauFeatures),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Key Features"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 418,
                                                                            columnNumber: 15
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                            className: `transition-transform ${openTableauFeatures ? 'rotate-180' : ''}`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 419,
                                                                            columnNumber: 15
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 414,
                                                                    columnNumber: 13
                                                                }, this),
                                                                openTableauFeatures && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-4 text-sm text-gray-700 space-y-6",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "font-medium mb-1",
                                                                                    children: "Tableau Public"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 425,
                                                                                    columnNumber: 19
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: "This proprietary feature allows users to publish their data visualizations to the public, providing a platform for sharing and collaboration. It promotes transparency and broadens the reach of your insights, making data storytelling accessible to a wide audience."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 426,
                                                                                    columnNumber: 19
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 424,
                                                                            columnNumber: 17
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "font-medium mb-1",
                                                                                    children: "Tableau Pulse AI Insights"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 432,
                                                                                    columnNumber: 19
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: "This system allows for AI insights garnered from your data appearing throughout the Tableau system. Being tied to Salesforce, a leader in AI among B2B software vendors, has undoubtedly benefited Tableau as it brings forward its own AI tools."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 433,
                                                                                    columnNumber: 19
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 431,
                                                                            columnNumber: 17
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "font-medium mb-1",
                                                                                    children: "Data Blending"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 439,
                                                                                    columnNumber: 19
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: "Data blending allows users to combine data from multiple sources without the need for complex data warehouse solutions. This feature simplifies the process of analyzing disparate data, providing a comprehensive view of insights."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 440,
                                                                                    columnNumber: 19
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 438,
                                                                            columnNumber: 17
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "font-medium mb-1",
                                                                                    children: "Hyper Engine"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 446,
                                                                                    columnNumber: 19
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: "Tableau's Hyper Engine is a high-performance in-memory data engine technology that helps businesses analyze large datasets at impressive speed. This feature ensures efficient data exploration and rapid extraction of insights, enhancing the overall user experience."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 447,
                                                                                    columnNumber: 19
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 445,
                                                                            columnNumber: 17
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "font-medium mb-1",
                                                                                    children: "Mobile Optimized"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 453,
                                                                                    columnNumber: 19
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: "Tableau offers robust mobile support, allowing users to access, interact with, and explore their data visualizations on mobile devices. The platform provides a seamless experience across desktop and mobile, enabling decision-makers to access insights anywhere and anytime."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 454,
                                                                                    columnNumber: 19
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 452,
                                                                            columnNumber: 17
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "font-medium mb-1",
                                                                                    children: "Advanced Analytics"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 460,
                                                                                    columnNumber: 19
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: "Tableau includes advanced analytics capabilities, such as predictive modeling and statistical analysis. Users can leverage these tools to delve deeper into their data, identify trends, and make predictions based on historical data, enhancing strategic decision-making."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 461,
                                                                                    columnNumber: 19
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 459,
                                                                            columnNumber: 17
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "font-medium mb-1",
                                                                                    children: "Extensive Customization Options"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 467,
                                                                                    columnNumber: 19
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: "Tableau allows extensive customization of dashboards and reports with its powerful scripting capabilities using Tableau's Calculation Language. Users can manipulate data, customize visualizations, and fine-tune analytics to meet specific business requirements, enabling precise and meaningful data representation."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 468,
                                                                                    columnNumber: 19
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 466,
                                                                            columnNumber: 17
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 423,
                                                                    columnNumber: 15
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 413,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-6 border-t pt-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "flex items-center justify-between w-full text-left font-semibold text-gray-800",
                                                                    onClick: ()=>setOpenTableauPricing(!openTableauPricing),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Pricing & Ratings"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 482,
                                                                            columnNumber: 15
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                            className: `transition-transform ${openTableauPricing ? 'rotate-180' : ''}`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 483,
                                                                            columnNumber: 15
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 478,
                                                                    columnNumber: 13
                                                                }, this),
                                                                openTableauPricing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-4 text-sm text-gray-700 space-y-6",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "font-medium mb-2",
                                                                                    children: "Pricing"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 489,
                                                                                    columnNumber: 19
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                    className: "space-y-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                            children: "Free trial available"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                            lineNumber: 491,
                                                                                            columnNumber: 21
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                            children: "Free version available"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                            lineNumber: 492,
                                                                                            columnNumber: 21
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                            children: "Tableau Viewer: $15/user/month"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                            lineNumber: 493,
                                                                                            columnNumber: 21
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                            children: "Tableau Explorer: $40/user/month"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                            lineNumber: 494,
                                                                                            columnNumber: 21
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                            children: "Tableau Creator: $70/user/month"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                            lineNumber: 495,
                                                                                            columnNumber: 21
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 490,
                                                                                    columnNumber: 19
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 488,
                                                                            columnNumber: 17
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "font-medium mb-2",
                                                                                    children: "Our Ratings"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 500,
                                                                                    columnNumber: 19
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "space-y-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex justify-between",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "Pricing:"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 503,
                                                                                                    columnNumber: 23
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "4.2/5"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 504,
                                                                                                    columnNumber: 23
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                            lineNumber: 502,
                                                                                            columnNumber: 21
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex justify-between",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "General features and interface:"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 507,
                                                                                                    columnNumber: 23
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "4.3/5"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 508,
                                                                                                    columnNumber: 23
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                            lineNumber: 506,
                                                                                            columnNumber: 21
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex justify-between",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "Core features:"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 511,
                                                                                                    columnNumber: 23
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "5/5"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 512,
                                                                                                    columnNumber: 23
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                            lineNumber: 510,
                                                                                            columnNumber: 21
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex justify-between",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "Advanced features:"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 515,
                                                                                                    columnNumber: 23
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "4.5/5"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 516,
                                                                                                    columnNumber: 23
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                            lineNumber: 514,
                                                                                            columnNumber: 21
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex justify-between",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "Integration and compatibility:"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 519,
                                                                                                    columnNumber: 23
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "4.7/5"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 520,
                                                                                                    columnNumber: 23
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                            lineNumber: 518,
                                                                                            columnNumber: 21
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex justify-between",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "UX:"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 523,
                                                                                                    columnNumber: 23
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "3.6/5"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 524,
                                                                                                    columnNumber: 23
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                            lineNumber: 522,
                                                                                            columnNumber: 21
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 501,
                                                                                    columnNumber: 19
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 499,
                                                                            columnNumber: 17
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 487,
                                                                    columnNumber: 15
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 477,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "inline-block mt-4 px-4 py-2 bg-[#386861] text-white rounded hover:bg-green-700 transition-colors text-sm font-medium",
                                                            children: "Read our full review"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 533,
                                                            columnNumber: 13
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                    lineNumber: 362,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                            lineNumber: 301,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-xl shadow-md border overflow-hidden mt-12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col md:flex-row justify-between items-start md:items-center p-6 border-b bg-[#F5F8F7]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-xl sm:text-2xl font-semibold text-gray-800",
                                                                children: "Sisense: Best for embedded analytics"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                lineNumber: 548,
                                                                columnNumber: 9
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 547,
                                                            columnNumber: 7
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "mt-4 md:mt-0 inline-block bg-[#386861] text-white text-sm font-medium px-4 py-2 rounded hover:bg-green-700 transition",
                                                            children: "Visit Website"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 552,
                                                            columnNumber: 7
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                    lineNumber: 546,
                                                    columnNumber: 5
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-6 py-4 border-b",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center text-sm text-gray-700 mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Overall Score"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 565,
                                                                    columnNumber: 9
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-semibold text-lg text-gray-800",
                                                                    children: "4.1/5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 566,
                                                                    columnNumber: 9
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 564,
                                                            columnNumber: 7
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full bg-gray-200 rounded-full h-2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-[#386861] h-2 rounded-full",
                                                                style: {
                                                                    width: "82%"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                lineNumber: 569,
                                                                columnNumber: 9
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 568,
                                                            columnNumber: 7
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                    lineNumber: 563,
                                                    columnNumber: 5
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-semibold text-gray-800 mb-2",
                                                                    children: "Pros"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 577,
                                                                    columnNumber: 9
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "space-y-2 text-gray-700",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex items-start gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-green-600 font-bold",
                                                                                    children: "+"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 580,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                "Embedded analytics"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 579,
                                                                            columnNumber: 11
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex items-start gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-green-600 font-bold",
                                                                                    children: "+"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 584,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                "AI-powered Ask Data feature"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 583,
                                                                            columnNumber: 11
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex items-start gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-green-600 font-bold",
                                                                                    children: "+"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 588,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                "In-Chip technology"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 587,
                                                                            columnNumber: 11
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex items-start gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-green-600 font-bold",
                                                                                    children: "+"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 592,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                "Good customer support"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 591,
                                                                            columnNumber: 11
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex items-start gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-green-600 font-bold",
                                                                                    children: "+"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 596,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                "Handles large datasets well"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 595,
                                                                            columnNumber: 11
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 578,
                                                                    columnNumber: 9
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 576,
                                                            columnNumber: 7
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-semibold text-gray-800 mb-2",
                                                                    children: "Cons"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 604,
                                                                    columnNumber: 9
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "space-y-2 text-gray-700",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex items-start gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-red-500 font-bold",
                                                                                    children: "–"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 607,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                "Learning curve"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 606,
                                                                            columnNumber: 11
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex items-start gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-red-500 font-bold",
                                                                                    children: "–"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 611,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                "Resource intensive"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 610,
                                                                            columnNumber: 11
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 605,
                                                                    columnNumber: 9
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 603,
                                                            columnNumber: 7
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                    lineNumber: 574,
                                                    columnNumber: 5
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-6 pb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-semibold text-gray-800 text-base mb-2",
                                                            children: "Why I picked Sisense"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 620,
                                                            columnNumber: 7
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm text-gray-700 leading-relaxed space-y-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "Sisense's recent updates and features, particularly in embedded analytics, make it a compelling choice for businesses seeking a BI solution that offers deep integration capabilities, efficient data handling, and user-friendly interfaces. Unlike Power BI, Sisense provides distinct advantages in embedded analytics and data manipulation, although it may require stronger IT support for implementation and advanced analytics setup."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 622,
                                                                    columnNumber: 9
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: 'In Sisense\'s 2024.3 update, I found several enhancements that make it stand out as an embedded analytics solution. The new AI-powered "Ask Data" feature allows me to interact with data using natural language, instantly generating visualizations and making data exploration incredibly intuitive. The improved dashboard customization options also let me tailor views to specific needs, offering a flexible and personalized experience. Additionally, the expanded data connectivity means I can seamlessly pull data from more sources, which simplifies integrations. With faster load times and enhanced security measures, Sisense has proven to be both powerful and secure, making it an ideal choice for our analytics needs.'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 626,
                                                                    columnNumber: 9
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "In a head-to-head comparison with Microsoft Power BI, Sisense stands out for its ability to \"infuse analytics everywhere\", including within customer and employee applications and workflows. While both platforms offer robust data visualization and AI analytics, Sisense's Elasticube technology is notable for its fast query returns on large datasets. In my opinion, that's a critical feature for businesses handling vast amounts of data."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 630,
                                                                    columnNumber: 9
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "Sisense also fares well in its data integration capabilities, offering over 100 data connectors. While Power BI surpasses this with over 500 connectors, Sisense's Elasticube technology compensates by enabling efficient manipulation of diverse data sources. Sisense's drag-and-drop interface and interactive visualizations provide an easy-to-use platform for building custom BI dashboards, a feature well-received by its users."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 634,
                                                                    columnNumber: 9
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "The software's 'Fusion Embed' solution is designed specifically for building white-labeled analytic experiences in apps, a testament to its strong embedded analytics capabilities. This feature, along with Sisense's scalability and customization options with minimal coding, makes it an ideal choice for businesses looking to integrate analytics seamlessly into their products or services."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 638,
                                                                    columnNumber: 9
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "#",
                                                                    className: "text-[#386861] font-medium inline-block mt-4",
                                                                    children: "Also read: Top Sisense Alternatives For Embedded Analytics"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 642,
                                                                    columnNumber: 9
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 621,
                                                            columnNumber: 7
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-8 border-t pt-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "flex items-center justify-between w-full text-left font-semibold text-gray-800",
                                                                    onClick: ()=>setOpenSisenseDetails(!openSisenseDetails),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "About Sisense"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 653,
                                                                            columnNumber: 11
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronDown"], {
                                                                            className: `transition-transform ${openSisenseDetails ? 'rotate-180' : ''}`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 654,
                                                                            columnNumber: 11
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 649,
                                                                    columnNumber: 9
                                                                }, this),
                                                                openSisenseDetails && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-4 text-sm text-gray-700 space-y-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            children: "Sisense is a business intelligence platform specializing in embedded analytics. It enables organizations to integrate analytics into their applications and products, providing end-users with data insights directly within their workflow. Known for its powerful data processing capabilities and intuitive interface, Sisense helps businesses transform complex data into actionable insights."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 659,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            children: "The platform is particularly strong in handling large datasets and offers a unique In-Chip technology that accelerates data processing. Sisense serves a wide range of industries including healthcare, finance, retail, and technology, helping them make data-driven decisions."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 662,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 658,
                                                                    columnNumber: 11
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 648,
                                                            columnNumber: 7
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-6 border-t pt-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "flex items-center justify-between w-full text-left font-semibold text-gray-800",
                                                                    onClick: ()=>setOpenSisenseFeatures(!openSisenseFeatures),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Key Features"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 675,
                                                                            columnNumber: 11
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronDown"], {
                                                                            className: `transition-transform ${openSisenseFeatures ? 'rotate-180' : ''}`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 676,
                                                                            columnNumber: 11
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 671,
                                                                    columnNumber: 9
                                                                }, this),
                                                                openSisenseFeatures && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-4 text-sm text-gray-700 space-y-6",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "font-medium mb-1",
                                                                                    children: "Embedded Analytics"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 682,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: "Sisense's core strength lies in its ability to embed analytics directly into applications and workflows, enabling seamless data experiences for end-users without leaving their primary applications."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 683,
                                                                                    columnNumber: 15
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 681,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "font-medium mb-1",
                                                                                    children: "Elasticube Technology"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 689,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: "This proprietary technology enables fast querying of large datasets by creating optimized data models that can be shared across an organization."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 690,
                                                                                    columnNumber: 15
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 688,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "font-medium mb-1",
                                                                                    children: "AI-Powered Ask Data"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 696,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: "Natural language processing allows users to query data using everyday language, with the system automatically generating relevant visualizations."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 697,
                                                                                    columnNumber: 15
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 695,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "font-medium mb-1",
                                                                                    children: "In-Chip Technology"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 703,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: "Accelerates data processing by leveraging CPU cache memory rather than traditional RAM, resulting in faster performance with large datasets."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 704,
                                                                                    columnNumber: 15
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 702,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "font-medium mb-1",
                                                                                    children: "Fusion Embed"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 710,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: "A comprehensive solution for building white-labeled analytic experiences within applications with minimal coding requirements."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 711,
                                                                                    columnNumber: 15
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 709,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "font-medium mb-1",
                                                                                    children: "Extensive Data Connectivity"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 717,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: "Supports connections to over 100 data sources including databases, cloud services, and spreadsheets."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 718,
                                                                                    columnNumber: 15
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 716,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 680,
                                                                    columnNumber: 11
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 670,
                                                            columnNumber: 7
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-6 border-t pt-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "flex items-center justify-between w-full text-left font-semibold text-gray-800",
                                                                    onClick: ()=>setOpenSisensePricing(!openSisensePricing),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Pricing & Ratings"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 732,
                                                                            columnNumber: 11
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronDown"], {
                                                                            className: `transition-transform ${openSisensePricing ? 'rotate-180' : ''}`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 733,
                                                                            columnNumber: 11
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 728,
                                                                    columnNumber: 9
                                                                }, this),
                                                                openSisensePricing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-4 text-sm text-gray-700 space-y-6",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "font-medium mb-2",
                                                                                    children: "Pricing"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 739,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                    className: "space-y-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                            children: "Custom pricing based on deployment needs"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                            lineNumber: 741,
                                                                                            columnNumber: 17
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                            children: "Free trial available"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                            lineNumber: 742,
                                                                                            columnNumber: 17
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                            children: "Contact sales for specific pricing tiers"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                            lineNumber: 743,
                                                                                            columnNumber: 17
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 740,
                                                                                    columnNumber: 15
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 738,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "font-medium mb-2",
                                                                                    children: "Our Ratings"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 748,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "space-y-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex justify-between",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "Pricing:"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 751,
                                                                                                    columnNumber: 19
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "3.9/5"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 752,
                                                                                                    columnNumber: 19
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                            lineNumber: 750,
                                                                                            columnNumber: 17
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex justify-between",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "Embedded Analytics:"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 755,
                                                                                                    columnNumber: 19
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "4.8/5"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 756,
                                                                                                    columnNumber: 19
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                            lineNumber: 754,
                                                                                            columnNumber: 17
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex justify-between",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "Data Processing:"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 759,
                                                                                                    columnNumber: 19
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "4.6/5"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 760,
                                                                                                    columnNumber: 19
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                            lineNumber: 758,
                                                                                            columnNumber: 17
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex justify-between",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "Customization:"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 763,
                                                                                                    columnNumber: 19
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "4.4/5"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 764,
                                                                                                    columnNumber: 19
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                            lineNumber: 762,
                                                                                            columnNumber: 17
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex justify-between",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "Integration:"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 767,
                                                                                                    columnNumber: 19
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "4.3/5"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 768,
                                                                                                    columnNumber: 19
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                            lineNumber: 766,
                                                                                            columnNumber: 17
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex justify-between",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "UX:"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 771,
                                                                                                    columnNumber: 19
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "3.8/5"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 772,
                                                                                                    columnNumber: 19
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                            lineNumber: 770,
                                                                                            columnNumber: 17
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 749,
                                                                                    columnNumber: 15
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 747,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 737,
                                                                    columnNumber: 11
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "#",
                                                                    className: "inline-block mt-4 px-4 py-2 bg-[#386861] text-white rounded hover:bg-green-700 transition-colors text-sm font-medium",
                                                                    children: "Read our full review"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 780,
                                                                    columnNumber: 10
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 727,
                                                            columnNumber: 7
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                    lineNumber: 619,
                                                    columnNumber: 5
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                            lineNumber: 545,
                                            columnNumber: 3
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-xl shadow-md border overflow-hidden mt-12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col md:flex-row justify-between items-start md:items-center p-6 border-b bg-[#F5F8F7]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-xl sm:text-2xl font-semibold text-gray-800",
                                                                children: "Qlik Sense: Best mobile BI software"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                lineNumber: 792,
                                                                columnNumber: 9
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 791,
                                                            columnNumber: 7
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "mt-4 md:mt-0 inline-block bg-[#386861] text-white text-sm font-medium px-4 py-2 rounded hover:bg-green-700 transition",
                                                            children: "Visit Website"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 796,
                                                            columnNumber: 7
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                    lineNumber: 790,
                                                    columnNumber: 5
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-6 py-4 border-b",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center text-sm text-gray-700 mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Overall Score"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 809,
                                                                    columnNumber: 9
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-semibold text-lg text-gray-800",
                                                                    children: "4.0/5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 810,
                                                                    columnNumber: 9
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 808,
                                                            columnNumber: 7
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full bg-gray-200 rounded-full h-2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-[#386861] h-2 rounded-full",
                                                                style: {
                                                                    width: "80%"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                lineNumber: 813,
                                                                columnNumber: 9
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 812,
                                                            columnNumber: 7
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                    lineNumber: 807,
                                                    columnNumber: 5
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-semibold text-gray-800 mb-2",
                                                                    children: "Pros"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 820,
                                                                    columnNumber: 9
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "space-y-2 text-gray-700",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex items-start gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-green-600 font-bold",
                                                                                    children: "+"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 823,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                "Lower entry price"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 822,
                                                                            columnNumber: 11
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex items-start gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-green-600 font-bold",
                                                                                    children: "+"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 827,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                "Powerful visualization tools"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 826,
                                                                            columnNumber: 11
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex items-start gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-green-600 font-bold",
                                                                                    children: "+"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 831,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                "Associative data model"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 830,
                                                                            columnNumber: 11
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex items-start gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-green-600 font-bold",
                                                                                    children: "+"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 835,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                "Self-service analytics"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 834,
                                                                            columnNumber: 11
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex items-start gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-green-600 font-bold",
                                                                                    children: "+"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 839,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                "Quality Mobile BI"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 838,
                                                                            columnNumber: 11
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 821,
                                                                    columnNumber: 9
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 819,
                                                            columnNumber: 7
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-semibold text-gray-800 mb-2",
                                                                    children: "Cons"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 846,
                                                                    columnNumber: 9
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "space-y-2 text-gray-700",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex items-start gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-red-500 font-bold",
                                                                                    children: "–"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 849,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                "Slower with larger data sets"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 848,
                                                                            columnNumber: 11
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex items-start gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-red-500 font-bold",
                                                                                    children: "–"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 853,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                "Extra cost for add-ons"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 852,
                                                                            columnNumber: 11
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 847,
                                                                    columnNumber: 9
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 845,
                                                            columnNumber: 7
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                    lineNumber: 818,
                                                    columnNumber: 5
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-6 pb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-semibold text-gray-800 text-base mb-2",
                                                            children: "Why I picked Qlik Sense"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 862,
                                                            columnNumber: 7
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm text-gray-700 leading-relaxed space-y-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "One of the key upgrades includes the introduction of a flexible text object in the Dashboard bundle, allowing advanced styling of text, the addition of measures, and the incorporation of tables. This flexibility is vital for mobile users who need to tailor their dashboards on-the-go. Additionally, the Natural Language Insights object has been updated for better functionality and insights, with native support for all Qlik Cloud features. This enhancement significantly boosts data literacy, a crucial aspect for mobile users who often require quick and comprehensible data insights."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 864,
                                                                    columnNumber: 9
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "The updates also encompass improved font handling, ensuring consistent rendering across devices, which is critical for mobile interfaces, and a new line object that adds customization and detail to sheets, enhancing the mobile user experience. Moreover, the introduction of complex calculations in data tables and the ability to download images for straight table visualization in the Nebula-based straight table are particularly beneficial for mobile users who work with large datasets and require efficient data manipulation and reporting capabilities."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 868,
                                                                    columnNumber: 9
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "In comparison to its major competitors, Microsoft Power BI and Tableau, Qlik Sense holds its ground well. While Power BI is lauded for its integration with Microsoft solutions and dynamic report creation, it faces challenges with user accessibility and training. Similarly, Tableau, known for its powerful data visualization and flexibility, struggles with functionality and user-friendliness. In contrast, Qlik Sense's recent enhancements, particularly in mobile capabilities such as responsive design, a mobile application, and interactive dashboards, provide it with a competitive edge."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 872,
                                                                    columnNumber: 9
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "When considering Qlik Sense's comprehensive updates and its standing against Power BI and Tableau, it's evident that Qlik Sense offers a well-rounded and increasingly user-friendly experience for mobile users."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 876,
                                                                    columnNumber: 9
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "#",
                                                                    className: "text-[#386861] font-medium inline-block mt-4",
                                                                    children: "Also read: Top Qlik Sense Alternatives For Mobile BI"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 880,
                                                                    columnNumber: 9
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 863,
                                                            columnNumber: 7
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-8 border-t pt-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "flex items-center justify-between w-full text-left font-semibold text-gray-800",
                                                                    onClick: ()=>setOpenQlikDetails(!openQlikDetails),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "About Qlik Sense"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 891,
                                                                            columnNumber: 11
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronDown"], {
                                                                            className: `transition-transform ${openQlikDetails ? 'rotate-180' : ''}`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 892,
                                                                            columnNumber: 11
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 887,
                                                                    columnNumber: 9
                                                                }, this),
                                                                openQlikDetails && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-4 text-sm text-gray-700 space-y-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            children: "Qlik Sense is a modern business intelligence platform known for its associative analytics engine and mobile-first approach. It enables users to explore data freely across all devices while maintaining enterprise-grade security and governance."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 897,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            children: "The platform is designed with a strong focus on self-service visualization and discovery, allowing users to create personalized, interactive dashboards that work seamlessly on mobile devices."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 900,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 896,
                                                                    columnNumber: 11
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 886,
                                                            columnNumber: 7
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-6 border-t pt-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "flex items-center justify-between w-full text-left font-semibold text-gray-800",
                                                                    onClick: ()=>setOpenQlikFeatures(!openQlikFeatures),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Key Features"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 913,
                                                                            columnNumber: 11
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronDown"], {
                                                                            className: `transition-transform ${openQlikFeatures ? 'rotate-180' : ''}`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 914,
                                                                            columnNumber: 11
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 909,
                                                                    columnNumber: 9
                                                                }, this),
                                                                openQlikFeatures && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-4 text-sm text-gray-700 space-y-6",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "font-medium mb-1",
                                                                                    children: "Associative Analytics Engine"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 920,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: "Unique data indexing technology that reveals hidden insights by maintaining all possible data relationships."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 921,
                                                                                    columnNumber: 15
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 919,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "font-medium mb-1",
                                                                                    children: "Mobile-First Design"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 927,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: "Responsive interfaces and dedicated mobile apps that provide full functionality on smartphones and tablets."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 928,
                                                                                    columnNumber: 15
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 926,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "font-medium mb-1",
                                                                                    children: "Natural Language Processing"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 934,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: "AI-powered insights through conversational queries in plain language."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 935,
                                                                                    columnNumber: 15
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 933,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "font-medium mb-1",
                                                                                    children: "Augmented Analytics"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 941,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: "Automated insights and suggestions that highlight important trends and outliers."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 942,
                                                                                    columnNumber: 15
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 940,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "font-medium mb-1",
                                                                                    children: "Multi-Cloud Architecture"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 948,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: "Flexible deployment options across public and private clouds with centralized management."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 949,
                                                                                    columnNumber: 15
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 947,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 918,
                                                                    columnNumber: 11
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 908,
                                                            columnNumber: 7
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-6 border-t pt-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "flex items-center justify-between w-full text-left font-semibold text-gray-800",
                                                                    onClick: ()=>setOpenQlikPricing(!openQlikPricing),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Pricing & Ratings"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 963,
                                                                            columnNumber: 11
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronDown"], {
                                                                            className: `transition-transform ${openQlikPricing ? 'rotate-180' : ''}`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 964,
                                                                            columnNumber: 11
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 959,
                                                                    columnNumber: 9
                                                                }, this),
                                                                openQlikPricing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-4 text-sm text-gray-700 space-y-6",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "font-medium mb-2",
                                                                                    children: "Pricing"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 970,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                    className: "space-y-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                            children: "Business: $30/user/month"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                            lineNumber: 972,
                                                                                            columnNumber: 17
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                            children: "Enterprise: Custom pricing"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                            lineNumber: 973,
                                                                                            columnNumber: 17
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                            children: "Free trial available"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                            lineNumber: 974,
                                                                                            columnNumber: 17
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 971,
                                                                                    columnNumber: 15
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 969,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "font-medium mb-2",
                                                                                    children: "Our Ratings"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 979,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "space-y-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex justify-between",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "Mobile Experience:"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 982,
                                                                                                    columnNumber: 19
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "4.7/5"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 983,
                                                                                                    columnNumber: 19
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                            lineNumber: 981,
                                                                                            columnNumber: 17
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex justify-between",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "Visualization:"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 986,
                                                                                                    columnNumber: 19
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "4.5/5"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 987,
                                                                                                    columnNumber: 19
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                            lineNumber: 985,
                                                                                            columnNumber: 17
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex justify-between",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "Performance:"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 990,
                                                                                                    columnNumber: 19
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "4.0/5"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 991,
                                                                                                    columnNumber: 19
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                            lineNumber: 989,
                                                                                            columnNumber: 17
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex justify-between",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "Ease of Use:"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 994,
                                                                                                    columnNumber: 19
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "3.9/5"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 995,
                                                                                                    columnNumber: 19
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                            lineNumber: 993,
                                                                                            columnNumber: 17
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 980,
                                                                                    columnNumber: 15
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 978,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "#",
                                                                            className: "inline-block mt-4 px-4 py-2 bg-[#386861] text-white rounded hover:bg-green-700 transition-colors text-sm font-medium",
                                                                            children: "Read our full review"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1000,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 968,
                                                                    columnNumber: 11
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 958,
                                                            columnNumber: 7
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                    lineNumber: 861,
                                                    columnNumber: 5
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                            lineNumber: 789,
                                            columnNumber: 4
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-xl shadow-md border overflow-hidden mt-12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col md:flex-row justify-between items-start md:items-center p-6 border-b bg-[#F5F8F7]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-xl sm:text-2xl font-semibold text-gray-800",
                                                                children: "Zoho Analytics: Best self-service BI software"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                lineNumber: 1015,
                                                                columnNumber: 9
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 1014,
                                                            columnNumber: 7
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "mt-4 md:mt-0 inline-block bg- [#386861]text-white text-sm font-medium px-4 py-2 rounded hover:bg-green-700 transition",
                                                            children: "Visit Website"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 1019,
                                                            columnNumber: 7
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                    lineNumber: 1013,
                                                    columnNumber: 5
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-6 py-4 border-b",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center text-sm text-gray-700 mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Overall Score"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 1032,
                                                                    columnNumber: 9
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-semibold text-lg text-gray-800",
                                                                    children: "4.0/5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 1033,
                                                                    columnNumber: 9
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 1031,
                                                            columnNumber: 7
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full bg-gray-200 rounded-full h-2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-[#386861] h-2 rounded-full",
                                                                style: {
                                                                    width: "80%"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                lineNumber: 1036,
                                                                columnNumber: 9
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 1035,
                                                            columnNumber: 7
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                    lineNumber: 1030,
                                                    columnNumber: 5
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-semibold text-gray-800 mb-2",
                                                                    children: "Pros"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 1043,
                                                                    columnNumber: 9
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "space-y-2 text-gray-700",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex items-start gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-green-600 font-bold",
                                                                                    children: "+"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 1046,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                "Generative AI-Infused BI"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1045,
                                                                            columnNumber: 11
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex items-start gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-green-600 font-bold",
                                                                                    children: "+"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 1050,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                "Top-notch collaboration tools"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1049,
                                                                            columnNumber: 11
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex items-start gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-green-600 font-bold",
                                                                                    children: "+"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 1054,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                "Advanced analytics"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1053,
                                                                            columnNumber: 11
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex items-start gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-green-600 font-bold",
                                                                                    children: "+"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 1058,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                "Scalability"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1057,
                                                                            columnNumber: 11
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex items-start gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-green-600 font-bold",
                                                                                    children: "+"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 1062,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                "Competitive pricing"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1061,
                                                                            columnNumber: 11
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 1044,
                                                                    columnNumber: 9
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 1042,
                                                            columnNumber: 7
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-semibold text-gray-800 mb-2",
                                                                    children: "Cons"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 1069,
                                                                    columnNumber: 9
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "space-y-2 text-gray-700",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex items-start gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-red-500 font-bold",
                                                                                    children: "–"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 1072,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                "Bit of a learning curve"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1071,
                                                                            columnNumber: 11
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex items-start gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-red-500 font-bold",
                                                                                    children: "–"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 1076,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                "Inconsistencies in reporting"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1075,
                                                                            columnNumber: 11
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 1070,
                                                                    columnNumber: 9
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 1068,
                                                            columnNumber: 7
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                    lineNumber: 1041,
                                                    columnNumber: 5
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-6 pb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-semibold text-gray-800 text-base mb-2",
                                                            children: "Why I picked Zoho Analytics"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 1085,
                                                            columnNumber: 7
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm text-gray-700 leading-relaxed space-y-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "Zoho Analytics makes it easy for non-technical users to analyze complex data and create insightful reports without needing assistance from IT or data experts."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 1087,
                                                                    columnNumber: 9
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "The platform's AI assistant, Zia, allows users to ask data-related questions in natural language, making data analysis more accessible. In my opinion, it's one of the better assistants available right now within BI applications. Its capabilities alongside their Generative AI-Infused BI approach and a constantly improving platform, make it one of my favorite choices."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 1091,
                                                                    columnNumber: 9
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "Additionally, features like data blending, smart data alerts, and the ability to merge data from various sources further enhance its self-service functionality, making it an excellent choice for businesses looking for a comprehensive, easy-to-use BI solution. It's not the most simple, but I'd argue it's a good substitution for someone who considers a Sisense or IBM option to be a bit too daunting."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 1095,
                                                                    columnNumber: 9
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "In a September 2024 product update, Zoho Analytics added a variety of new features including unified metrics to eliminate duplication, audit and sync history for data import, and multi-server architecture. The latter will allow for better load distribution, and addresses past user concerns surrounding struggles with larger data sets."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 1099,
                                                                    columnNumber: 9
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: 'Zoho Analytics has recently enhanced its capabilities with Advanced Analytics for Jotform, allowing deeper insights into audience preferences and engagement. The integration of the "Notes" modules from multiple CRM modules in the Advanced Analytics Connector for Zoho CRM is a significant upgrade, offering users richer customer interaction insights.'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 1103,
                                                                    columnNumber: 9
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "#",
                                                                    className: "text-[#386861] font-medium inline-block mt-4",
                                                                    children: "Also read: Top Zoho Analytics Alternatives For Self-Service BI"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 1107,
                                                                    columnNumber: 9
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 1086,
                                                            columnNumber: 7
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-8 border-t pt-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "flex items-center justify-between w-full text-left font-semibold text-gray-800",
                                                                    onClick: ()=>setOpenZohoDetails(!openZohoDetails),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "About Zoho Analytics"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1118,
                                                                            columnNumber: 11
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronDown"], {
                                                                            className: `transition-transform ${openZohoDetails ? 'rotate-180' : ''}`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1119,
                                                                            columnNumber: 11
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 1114,
                                                                    columnNumber: 9
                                                                }, this),
                                                                openZohoDetails && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-4 text-sm text-gray-700 space-y-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            children: "Zoho Analytics is part of the Zoho suite of business applications, offering powerful yet affordable business intelligence and analytics capabilities. It's particularly strong in self-service analytics for small to medium businesses."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1124,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            children: "The platform integrates seamlessly with other Zoho applications as well as numerous third-party services, making it ideal for organizations already using Zoho's ecosystem."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1127,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 1123,
                                                                    columnNumber: 11
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 1113,
                                                            columnNumber: 7
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-6 border-t pt-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "flex items-center justify-between w-full text-left font-semibold text-gray-800",
                                                                    onClick: ()=>setOpenZohoFeatures(!openZohoFeatures),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Key Features"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1140,
                                                                            columnNumber: 11
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronDown"], {
                                                                            className: `transition-transform ${openZohoFeatures ? 'rotate-180' : ''}`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1141,
                                                                            columnNumber: 11
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 1136,
                                                                    columnNumber: 9
                                                                }, this),
                                                                openZohoFeatures && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-4 text-sm text-gray-700 space-y-6",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "font-medium mb-1",
                                                                                    children: "Zia AI Assistant"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 1147,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: "Advanced natural language processing that allows users to query data conversationally and get automated insights."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 1148,
                                                                                    columnNumber: 15
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1146,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "font-medium mb-1",
                                                                                    children: "Unified Business Analytics"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 1154,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: "Combine data from multiple Zoho apps and external sources into a single analytics platform."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 1155,
                                                                                    columnNumber: 15
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1153,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "font-medium mb-1",
                                                                                    children: "Collaborative Analytics"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 1161,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: "Share reports and dashboards with team members and collaborate in real-time with comments and annotations."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 1162,
                                                                                    columnNumber: 15
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1160,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "font-medium mb-1",
                                                                                    children: "White Labeling"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 1168,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: "Custom branding options for agencies and consultants who want to offer analytics as part of their services."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 1169,
                                                                                    columnNumber: 15
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1167,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "font-medium mb-1",
                                                                                    children: "Data Alerting"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 1175,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: "Set up automated alerts when data meets certain conditions or thresholds."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 1176,
                                                                                    columnNumber: 15
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1174,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 1145,
                                                                    columnNumber: 11
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 1135,
                                                            columnNumber: 7
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-6 border-t pt-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "flex items-center justify-between w-full text-left font-semibold text-gray-800",
                                                                    onClick: ()=>setOpenZohoPricing(!openZohoPricing),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Pricing & Ratings"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1190,
                                                                            columnNumber: 11
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronDown"], {
                                                                            className: `transition-transform ${openZohoPricing ? 'rotate-180' : ''}`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1191,
                                                                            columnNumber: 11
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 1186,
                                                                    columnNumber: 9
                                                                }, this),
                                                                openZohoPricing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-4 text-sm text-gray-700 space-y-6",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "font-medium mb-2",
                                                                                    children: "Pricing"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 1197,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                    className: "space-y-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                            children: "Basic: $24/month (2 users)"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                            lineNumber: 1199,
                                                                                            columnNumber: 17
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                            children: "Standard: $48/month (5 users)"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                            lineNumber: 1200,
                                                                                            columnNumber: 17
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                            children: "Premium: $115/month (15 users)"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                            lineNumber: 1201,
                                                                                            columnNumber: 17
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                            children: "Enterprise: $455/month (50 users)"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                            lineNumber: 1202,
                                                                                            columnNumber: 17
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 1198,
                                                                                    columnNumber: 15
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1196,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "font-medium mb-2",
                                                                                    children: "Our Ratings"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 1207,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "space-y-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex justify-between",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "Self-Service Capabilities:"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 1210,
                                                                                                    columnNumber: 19
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "4.8/5"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 1211,
                                                                                                    columnNumber: 19
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                            lineNumber: 1209,
                                                                                            columnNumber: 17
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex justify-between",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "AI Features:"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 1214,
                                                                                                    columnNumber: 19
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "4.5/5"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 1215,
                                                                                                    columnNumber: 19
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                            lineNumber: 1213,
                                                                                            columnNumber: 17
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex justify-between",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "Value for Money:"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 1218,
                                                                                                    columnNumber: 19
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "4.7/5"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 1219,
                                                                                                    columnNumber: 19
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                            lineNumber: 1217,
                                                                                            columnNumber: 17
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex justify-between",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "Integration:"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 1222,
                                                                                                    columnNumber: 19
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "4.3/5"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 1223,
                                                                                                    columnNumber: 19
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                            lineNumber: 1221,
                                                                                            columnNumber: 17
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 1208,
                                                                                    columnNumber: 15
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1206,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "#",
                                                                            className: "inline-block mt-4 px-4 py-2 bg-[#386861] text-white rounded hover:bg-green-700 transition-colors text-sm font-medium",
                                                                            children: "Read our full review"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1228,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 1195,
                                                                    columnNumber: 11
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 1185,
                                                            columnNumber: 7
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                    lineNumber: 1084,
                                                    columnNumber: 5
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                            lineNumber: 1012,
                                            columnNumber: 3
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-xl shadow-md border overflow-hidden mt-12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col md:flex-row justify-between items-start md:items-center p-6 border-b bg-[#F5F8F7]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-xl sm:text-2xl font-semibold text-gray-800",
                                                                children: "IBM Cognos Analytics: Best for reporting"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                lineNumber: 1243,
                                                                columnNumber: 9
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 1242,
                                                            columnNumber: 7
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "mt-4 md:mt-0 inline-block bg-[#386861] text-white text-sm font-medium px-4 py-2 rounded hover:bg-green-700 transition",
                                                            children: "Visit Website"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 1247,
                                                            columnNumber: 7
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                    lineNumber: 1241,
                                                    columnNumber: 5
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-6 py-4 border-b",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center text-sm text-gray-700 mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Overall Score"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 1260,
                                                                    columnNumber: 9
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-semibold text-lg text-gray-800",
                                                                    children: "4.0/5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 1261,
                                                                    columnNumber: 9
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 1259,
                                                            columnNumber: 7
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full bg-gray-200 rounded-full h-2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-[#386861] h-2 rounded-full",
                                                                style: {
                                                                    width: "80%"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                lineNumber: 1264,
                                                                columnNumber: 9
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 1263,
                                                            columnNumber: 7
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                    lineNumber: 1258,
                                                    columnNumber: 5
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-semibold text-gray-800 mb-2",
                                                                    children: "Pros"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 1271,
                                                                    columnNumber: 9
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "space-y-2 text-gray-700",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex items-start gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-green-600 font-bold",
                                                                                    children: "+"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 1274,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                "Full-featured BI suite"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1273,
                                                                            columnNumber: 11
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex items-start gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-green-600 font-bold",
                                                                                    children: "+"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 1278,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                "Effective dashboards and reports"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1277,
                                                                            columnNumber: 11
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex items-start gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-green-600 font-bold",
                                                                                    children: "+"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 1282,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                "AI-enabled exploration"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1281,
                                                                            columnNumber: 11
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex items-start gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-green-600 font-bold",
                                                                                    children: "+"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 1286,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                "Top-notch customer support"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1285,
                                                                            columnNumber: 11
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 1272,
                                                                    columnNumber: 9
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 1270,
                                                            columnNumber: 7
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-semibold text-gray-800 mb-2",
                                                                    children: "Cons"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 1293,
                                                                    columnNumber: 9
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "space-y-2 text-gray-700",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex items-start gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-red-500 font-bold",
                                                                                    children: "–"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 1296,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                "Complexity of use"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1295,
                                                                            columnNumber: 11
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex items-start gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-red-500 font-bold",
                                                                                    children: "–"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 1300,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                "Expensive compared to competitors"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1299,
                                                                            columnNumber: 11
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 1294,
                                                                    columnNumber: 9
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 1292,
                                                            columnNumber: 7
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                    lineNumber: 1269,
                                                    columnNumber: 5
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-6 pb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-semibold text-gray-800 text-base mb-2",
                                                            children: "Why I picked IBM Cognos Analytics"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 1309,
                                                            columnNumber: 7
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm text-gray-700 leading-relaxed space-y-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "IBM Cognos Analytics offers a powerful AI Assistant that simplifies data querying through natural language processing, enabling users to easily retrieve information and discover data patterns."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 1311,
                                                                    columnNumber: 9
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "A key strength of Cognos Analytics is its self-service capabilities, which are emphasized through features such as AI-assisted data arrangement and automated dashboards. These tools empower users to build their own reports and scorecards in an intuitive manner, facilitating both basic and advanced data analysis. The platform's AI assistant enhances this experience by allowing users to ask questions in natural language and receive suggested visualizations, making it accessible to users of varying skill levels."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 1315,
                                                                    columnNumber: 9
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "In the latest IBM Cognos Analytics release (11.2.4 FP4), I noticed several improvements that make my workflow smoother and more efficient. The update enhances dashboard functionality with new customization options and a more responsive layout, which helps me create visually appealing and informative dashboards faster. The data module editor has also been improved, making data prep easier with enhanced navigation and editing capabilities. Additionally, the performance boost in loading times and overall system responsiveness means I can access my insights more quickly, helping me make data-driven decisions without delay. These updates collectively make IBM Cognos Analytics a more powerful and user-friendly tool for my analytics needs."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 1319,
                                                                    columnNumber: 9
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "Data security and quality are other critical aspects where Cognos Analytics excels. It provides an environment with multiple levels of administrative permissions, enabling tailored access control and improving individual performance across different departments. This focus on security is a significant consideration for organizations dealing with sensitive or proprietary data."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 1323,
                                                                    columnNumber: 9
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "Compared to alternatives like Sisense and Zoho Analytics, which focus on ease of use through natural language querying and conversational interfaces, I find that IBM Cognos offers more depth for complex data modeling and advanced visual customization. This makes Cognos a better fit for organizations with skilled data teams or those, like us, who need high customization and control over data processes. The recent enhancements to data module editing and faster loading are especially valuable to me when managing large datasets, as I rely on both reliability and performance—something that some lighter, more user-friendly BI tools may not fully provide."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 1327,
                                                                    columnNumber: 9
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "#",
                                                                    className: "text-[#386861] font-medium inline-block mt-4",
                                                                    children: "Also read: What Is Data Governance?"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 1331,
                                                                    columnNumber: 9
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 1310,
                                                            columnNumber: 7
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-8 border-t pt-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "flex items-center justify-between w-full text-left font-semibold text-gray-800",
                                                                    onClick: ()=>setOpenIBMCognosDetails(!openIBMCognosDetails),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "About IBM Cognos Analytics"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1342,
                                                                            columnNumber: 11
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronDown"], {
                                                                            className: `transition-transform ${openIBMCognosDetails ? 'rotate-180' : ''}`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1343,
                                                                            columnNumber: 11
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 1338,
                                                                    columnNumber: 9
                                                                }, this),
                                                                openIBMCognosDetails && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-4 text-sm text-gray-700 space-y-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            children: "IBM Cognos Analytics is an enterprise-grade business intelligence platform that combines AI-powered automation with robust reporting capabilities. It's designed for large organizations that need to deliver consistent, governed reporting across multiple departments."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1348,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            children: "The platform is known for its deep integration with IBM's data and AI ecosystem, making it particularly strong for organizations invested in IBM's technology stack."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1351,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 1347,
                                                                    columnNumber: 11
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 1337,
                                                            columnNumber: 7
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-6 border-t pt-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "flex items-center justify-between w-full text-left font-semibold text-gray-800",
                                                                    onClick: ()=>setOpenIBMCognosFeatures(!openIBMCognosFeatures),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Key Features"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1364,
                                                                            columnNumber: 11
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronDown"], {
                                                                            className: `transition-transform ${openIBMCognosFeatures ? 'rotate-180' : ''}`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1365,
                                                                            columnNumber: 11
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 1360,
                                                                    columnNumber: 9
                                                                }, this),
                                                                openIBMCognosFeatures && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-4 text-sm text-gray-700 space-y-6",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "font-medium mb-1",
                                                                                    children: "AI-Powered Reporting"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 1371,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: "Automated report generation with natural language explanations of key insights and trends."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 1372,
                                                                                    columnNumber: 15
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1370,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "font-medium mb-1",
                                                                                    children: "Enterprise Governance"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 1378,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: "Robust security and data governance features for large organizations with complex compliance requirements."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 1379,
                                                                                    columnNumber: 15
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1377,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "font-medium mb-1",
                                                                                    children: "Dynamic Dashboards"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 1385,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: "Interactive dashboards that can be personalized by end-users while maintaining data governance."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 1386,
                                                                                    columnNumber: 15
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1384,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "font-medium mb-1",
                                                                                    children: "Advanced Data Modules"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 1392,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: "Powerful data modeling capabilities that allow business users to create sophisticated data models without IT assistance."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 1393,
                                                                                    columnNumber: 15
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1391,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "font-medium mb-1",
                                                                                    children: "Multi-Cloud Deployment"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 1399,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: "Flexible deployment options including IBM Cloud, AWS, Azure, and on-premises installations."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 1400,
                                                                                    columnNumber: 15
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1398,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 1369,
                                                                    columnNumber: 11
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 1359,
                                                            columnNumber: 7
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-6 border-t pt-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "flex items-center justify-between w-full text-left font-semibold text-gray-800",
                                                                    onClick: ()=>setOpenIBMCognosPricing(!openIBMCognosPricing),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Pricing & Ratings"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1414,
                                                                            columnNumber: 11
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronDown"], {
                                                                            className: `transition-transform ${openIBMCognosPricing ? 'rotate-180' : ''}`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1415,
                                                                            columnNumber: 11
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 1410,
                                                                    columnNumber: 9
                                                                }, this),
                                                                openIBMCognosPricing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-4 text-sm text-gray-700 space-y-6",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "font-medium mb-2",
                                                                                    children: "Pricing"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 1421,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                    className: "space-y-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                            children: "Starts at $10.60/user/month (annual billing)"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                            lineNumber: 1423,
                                                                                            columnNumber: 17
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                            children: "Enterprise pricing available"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                            lineNumber: 1424,
                                                                                            columnNumber: 17
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                            children: "Free trial available"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                            lineNumber: 1425,
                                                                                            columnNumber: 17
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 1422,
                                                                                    columnNumber: 15
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1420,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "font-medium mb-2",
                                                                                    children: "Our Ratings"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 1430,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "space-y-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex justify-between",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "Reporting Capabilities:"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 1433,
                                                                                                    columnNumber: 19
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "4.9/5"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 1434,
                                                                                                    columnNumber: 19
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                            lineNumber: 1432,
                                                                                            columnNumber: 17
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex justify-between",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "Enterprise Features:"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 1437,
                                                                                                    columnNumber: 19
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "4.7/5"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 1438,
                                                                                                    columnNumber: 19
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                            lineNumber: 1436,
                                                                                            columnNumber: 17
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex justify-between",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "AI Integration:"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 1441,
                                                                                                    columnNumber: 19
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "4.5/5"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 1442,
                                                                                                    columnNumber: 19
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                            lineNumber: 1440,
                                                                                            columnNumber: 17
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex justify-between",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "Ease of Use:"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 1445,
                                                                                                    columnNumber: 19
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "3.8/5"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                                    lineNumber: 1446,
                                                                                                    columnNumber: 19
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                            lineNumber: 1444,
                                                                                            columnNumber: 17
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                                    lineNumber: 1431,
                                                                                    columnNumber: 15
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1429,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "#",
                                                                            className: "inline-block mt-4 px-4 py-2 bg-[#386861] text-white rounded hover:bg-green-700 transition-colors text-sm font-medium",
                                                                            children: "Read our full review"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                            lineNumber: 1451,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                    lineNumber: 1419,
                                                                    columnNumber: 11
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                            lineNumber: 1409,
                                                            columnNumber: 7
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                    lineNumber: 1308,
                                                    columnNumber: 5
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                            lineNumber: 1240,
                                            columnNumber: 4
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-8 pt-6 ",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-700 leading-relaxed space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#",
                                                                className: "text-[#386861] font-medium underline",
                                                                children: "Reporting tools"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                lineNumber: 1466,
                                                                columnNumber: 17
                                                            }, this),
                                                            " let businesses generate reports and run queries on data. Users can access data from multiple sources, including databases and spreadsheets, to analyze and summarize data through these tools. Reporting tools give users pre-designed report templates for quicker report generation. These templates are often customizable. Users can add or remove fields, change the layout, or modify the formatting to suit their needs."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                        lineNumber: 1465,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Querying tools, on the other hand, enable users to extract specific data from a database or spreadsheet by running SQL queries. These tools offer users a way to construct queries without writing code."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                        lineNumber: 1469,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                lineNumber: 1464,
                                                columnNumber: 13
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                            lineNumber: 1463,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                    lineNumber: 295,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    id: "4",
                                    className: "mb-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-w-4xl mx-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl sm:text-3xl font-bold text-gray-900 mb-8",
                                                children: "Business intelligence software benefits"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                lineNumber: 1481,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-semibold text-gray-800 mb-2",
                                                        children: "Improved data quality"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                        lineNumber: 1487,
                                                        columnNumber: 7
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700",
                                                        children: "The best BI tools automatically identifies and cleans up inaccurate, incomplete, or duplicated data, ensuring that only high-quality data is used for analysis. Additionally, it enforces data standards and rules across different systems, ensuring data consistency and accuracy while reducing the risk of errors that can arise from manual data entry. Moreover, companies can gain a fuller picture of what is happening with their business by aggregating different data sources through business intelligence solutions."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                        lineNumber: 1490,
                                                        columnNumber: 7
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                lineNumber: 1486,
                                                columnNumber: 5
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-semibold text-gray-800 mb-2",
                                                        children: "Greater transparency"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                        lineNumber: 1501,
                                                        columnNumber: 7
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700",
                                                        children: "Business intelligence tools give real-time visibility into business operations and performance. This enables organizations to monitor progress and identify potential issues in real time. By providing a thorough view of key metrics, BI software empowers businesses to identify areas for improvement and take corrective action when necessary."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                        lineNumber: 1504,
                                                        columnNumber: 7
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                lineNumber: 1500,
                                                columnNumber: 5
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-semibold text-gray-800 mb-2",
                                                        children: "Better decision-making"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                        lineNumber: 1514,
                                                        columnNumber: 7
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 mb-3",
                                                        children: "The software equips organizations with valuable insights into their operations, informing strategic decisions across product development, marketing, sales, and other critical areas. Business intelligence tools also show useful information on employee productivity, revenue, and department-specific performance, allowing organizations to understand their strengths and weaknesses."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                        lineNumber: 1517,
                                                        columnNumber: 7
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700",
                                                        children: "By analyzing large volumes of data from different sources, BI software can identify trends and patterns and uncover opportunities. With competitors moving quickly, companies must expedite making accurate decisions to avoid losing customers and revenue."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                        lineNumber: 1523,
                                                        columnNumber: 7
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                lineNumber: 1513,
                                                columnNumber: 5
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-semibold text-gray-800 mb-2",
                                                        children: "Increased efficiency"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                        lineNumber: 1532,
                                                        columnNumber: 7
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700",
                                                        children: "Companies can optimize resources and streamline processes with business intelligence software, decreasing costs and increasing efficiency. The software lets businesses make data-driven decisions to reduce waste by providing information on inventory management, supply chain optimization, and production planning."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                        lineNumber: 1535,
                                                        columnNumber: 7
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                lineNumber: 1531,
                                                columnNumber: 5
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-semibold text-gray-800 mb-2",
                                                        children: "Enhanced business margins"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                        lineNumber: 1544,
                                                        columnNumber: 7
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700",
                                                        children: "Business intelligence software improves business margins by identifying areas where costs can be reduced, such as streamlining supply chains and optimizing inventory management. It can also determine opportunities for revenue growth, like finding high-value customers, analyzing sales trends, and developing marketing strategies. BI software enables organizations to better understand their competitors, market trends, and customer preferences, so they can promptly respond to changing market conditions."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                        lineNumber: 1547,
                                                        columnNumber: 7
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                lineNumber: 1543,
                                                columnNumber: 5
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-semibold text-gray-800 mb-2",
                                                        children: "Integration"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                        lineNumber: 1558,
                                                        columnNumber: 7
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700",
                                                        children: [
                                                            "It’s important to note many BI software solutions integrate with other software systems, including",
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#",
                                                                className: "text-[#386861] font-medium underline",
                                                                children: "customer relationship management (CRM)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                lineNumber: 1561,
                                                                columnNumber: 9
                                                            }, this),
                                                            ",",
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#",
                                                                className: "text-[#386861]font-medium underline",
                                                                children: "enterprise resource planning (ERP)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                lineNumber: 1565,
                                                                columnNumber: 9
                                                            }, this),
                                                            ", and",
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#",
                                                                className: "text-[#386861] font-medium underline",
                                                                children: "accounting software"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                lineNumber: 1569,
                                                                columnNumber: 9
                                                            }, this),
                                                            ". By doing so, companies obtain a more comprehensive view of their operations and performance by combining data from multiple sources. Business intelligence software is crucial for those seeking competitive advantage by utilizing data-driven insights to make better-informed decisions and adapt to shifting market conditions."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                        lineNumber: 1559,
                                                        columnNumber: 7
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                lineNumber: 1557,
                                                columnNumber: 5
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                        lineNumber: 1480,
                                        columnNumber: 3
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                    lineNumber: 1479,
                                    columnNumber: 10
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    id: "5",
                                    className: "mb-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-w-4xl mx-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl sm:text-3xl font-bold text-gray-900 mb-6",
                                                children: "What is the business impact of business intelligence software?"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                lineNumber: 1584,
                                                columnNumber: 5
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-4 text-gray-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "text-[#386861] font-medium underline",
                                                        children: "Business intelligence software"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                        lineNumber: 1589,
                                                        columnNumber: 7
                                                    }, this),
                                                    " ",
                                                    "has a significant impact on businesses by providing valuable insights into customer behavior, market trends, and operational inefficiencies, which directly affect a company’s bottom line. It assists organizations in increasing revenue, reducing costs, and improving overall performance."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                lineNumber: 1588,
                                                columnNumber: 5
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-4 text-gray-700",
                                                children: "Today, investing in business intelligence software rather than relying solely on spreadsheets is a logical decision for companies of any kind. BI software handles large volumes of data more efficiently, minimizes the risk of errors, offers a range of analytical tools and visualizations, and brings real-time data updates, which are crucial in fast-paced business environments."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                lineNumber: 1597,
                                                columnNumber: 5
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-4 text-gray-700",
                                                children: "BI software supports businesses better understanding their clients by analyzing customer data to identify trends and preferences. This, in turn, allows organizations to tailor their products and services to meet customer needs, leading to greater customer satisfaction, loyalty, sales, and revenue."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                lineNumber: 1604,
                                                columnNumber: 5
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-4 text-gray-700",
                                                children: "The software also helps businesses uncover operational inefficiencies and bottlenecks by analyzing production processes, supply chains, and employee performance data. Such analysis helps to determine underutilized resources and streamline operations, boosting efficiency and decreasing costs, eventually resulting in higher profitability."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                lineNumber: 1610,
                                                columnNumber: 5
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-4 text-gray-700",
                                                children: "Business intelligence tools facilitate more effective decision-making by presenting accurate and timely data on sales trends, supply chain performance, and other key business metrics. This data allows business leaders to make informed decisions, driving growth and keeping the business ahead of its competition. As a result, companies will respond to constantly changing market conditions and have better chances of achieving financial success."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                lineNumber: 1617,
                                                columnNumber: 5
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                        lineNumber: 1583,
                                        columnNumber: 3
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                    lineNumber: 1582,
                                    columnNumber: 1
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    id: "6",
                                    className: "mb-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-w-4xl mx-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl sm:text-3xl font-bold text-gray-900 mb-4",
                                                children: "Choosing the best software for business intelligence platform"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                lineNumber: 1628,
                                                columnNumber: 5
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-700 text-base",
                                                children: "Ready to start your business intelligence software comparison? Our Technology Advisors are here to help you find the perfect tool for your company’s projects. Call for a free 5-minute consultation, or complete the form at the bottom of this page for fast, free recommendations based on your needs."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                lineNumber: 1631,
                                                columnNumber: 5
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                        lineNumber: 1627,
                                        columnNumber: 3
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                    lineNumber: 1626,
                                    columnNumber: 1
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    id: "7",
                                    className: "mb-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-w-4xl mx-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl sm:text-3xl font-bold text-gray-900 mb-6",
                                                children: "Frequently Asked Questions (FAQ)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                lineNumber: 1642,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: faqs.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border-b pb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>toggleFAQ(index),
                                                                className: "flex items-center justify-between w-full text-left font-semibold text-gray-800",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: faq.question
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                        lineNumber: 1652,
                                                                        columnNumber: 17
                                                                    }, this),
                                                                    activeIndex === index ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaMinus"], {
                                                                        className: "text-[#386861]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                        lineNumber: 1654,
                                                                        columnNumber: 19
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPlus"], {
                                                                        className: "text-[#386861]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                        lineNumber: 1656,
                                                                        columnNumber: 19
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                lineNumber: 1648,
                                                                columnNumber: 15
                                                            }, this),
                                                            activeIndex === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-2 text-gray-700 text-sm",
                                                                children: faq.answer
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                                lineNumber: 1660,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                        lineNumber: 1647,
                                                        columnNumber: 13
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                                lineNumber: 1645,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                        lineNumber: 1641,
                                        columnNumber: 7
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                                    lineNumber: 1640,
                                    columnNumber: 4
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                            lineNumber: 215,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/Software-reviews/Business-Intelligence-Software/page.jsx",
                lineNumber: 146,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(BusinessIntelligencePage, "4tiy/csno2FCSSeLla52zfQgXWQ=");
_c = BusinessIntelligencePage;
var _c;
__turbopack_context__.k.register(_c, "BusinessIntelligencePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_Software-reviews_Business-Intelligence-Software_page_jsx_c2b66837._.js.map
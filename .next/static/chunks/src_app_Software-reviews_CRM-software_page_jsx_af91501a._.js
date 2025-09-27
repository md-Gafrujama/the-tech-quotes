(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/Software-reviews/CRM-software/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ProjectManagementPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/noop-head.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ProjectManagementPage() {
    _s();
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [productSearch, setProductSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [filterBy, setFilterBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Reviews");
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Featured");
    const [itemsPerPage, setItemsPerPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("10 per page");
    const [expandedSections, setExpandedSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [openSections, setOpenSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [openItems, setOpenItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [tableOfContents, setTableOfContents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: "CRM-recommendations",
            title: "Our top 11 CRM recommendations",
            active: false
        },
        {
            id: "new-CRM-software",
            title: "Find your new CRM software",
            active: false
        },
        {
            id: "key-features",
            title: "Key CRM features to consider for your use case",
            active: false
        },
        {
            id: "how-to-choose",
            title: "Choosing the right CRM and sales software",
            active: false
        },
        {
            id: "crm-faqs",
            title: "Frequently Asked Questions (FAQ)",
            active: false
        }
    ]);
    const toggleSection = (sectionKey, labelKey = null)=>{
        setExpandedSections((prev)=>({
                ...prev,
                [sectionKey]: !prev[sectionKey]
            }));
        if (labelKey) {
            setActiveSection((prev)=>prev === sectionKey ? null : sectionKey);
            setOpenSection((prev)=>prev === labelKey ? null : labelKey);
        }
        setOpenSections((prev)=>({
                ...prev,
                [sectionKey]: !prev[sectionKey]
            }));
    };
    const toggleItem = (index)=>{
        setOpenItems((prev)=>({
                ...prev,
                [index]: !prev[index]
            }));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectManagementPage.useEffect": ()=>{
            const checkMobile = {
                "ProjectManagementPage.useEffect.checkMobile": ()=>{
                    setIsMobile(window.innerWidth < 768);
                }
            }["ProjectManagementPage.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener("resize", checkMobile);
            return ({
                "ProjectManagementPage.useEffect": ()=>window.removeEventListener("resize", checkMobile)
            })["ProjectManagementPage.useEffect"];
        }
    }["ProjectManagementPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectManagementPage.useEffect": ()=>{
            const handleScroll = {
                "ProjectManagementPage.useEffect.handleScroll": ()=>{
                    const sections = document.querySelectorAll("section[id]");
                    const scrollPosition = window.scrollY + 100;
                    sections.forEach({
                        "ProjectManagementPage.useEffect.handleScroll": (section)=>{
                            const sectionTop = section.offsetTop;
                            const sectionHeight = section.clientHeight;
                            const sectionId = section.getAttribute("id");
                            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                                setTableOfContents({
                                    "ProjectManagementPage.useEffect.handleScroll": (prev)=>prev.map({
                                            "ProjectManagementPage.useEffect.handleScroll": (item)=>({
                                                    ...item,
                                                    active: item.id === sectionId
                                                })
                                        }["ProjectManagementPage.useEffect.handleScroll"])
                                }["ProjectManagementPage.useEffect.handleScroll"]);
                            }
                        }
                    }["ProjectManagementPage.useEffect.handleScroll"]);
                }
            }["ProjectManagementPage.useEffect.handleScroll"];
            // Set initial active state
            handleScroll();
            window.addEventListener("scroll", handleScroll);
            return ({
                "ProjectManagementPage.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["ProjectManagementPage.useEffect"];
        }
    }["ProjectManagementPage.useEffect"], []);
    const toolsContent = {
        HubSpot: {
            title: "HubSpot Sales Hub- Best for integrations",
            logo: "/images/hubspotsales.png",
            button: {
                text: "Visit Website",
                link: "#"
            },
            scores: [
                {
                    label: "Overall Score",
                    score: "4.5/5"
                },
                {
                    label: "Pricing",
                    score: "4.8/5"
                },
                {
                    label: "General features and Interface",
                    score: "4.4/5"
                },
                {
                    label: "Core features",
                    score: "4.5/5"
                },
                {
                    label: "Advanced features",
                    score: "3.8/5"
                },
                {
                    label: "Inegration and compatibility",
                    score: "4.8/5"
                },
                {
                    label: "UX",
                    score: "4.8/5"
                }
            ],
            pros: [
                "One of the most trusted names in the industry",
                "First-class automation and integration options",
                "CRM, email marketing, and website management in one place",
                "Free plan"
            ],
            cons: [
                "Higher-end cost structure for paid plans and added tools",
                "Best for use cases that need more than just CRM software"
            ],
            why: {
                intro: `HubSpot Sales Hub is recommended as the best CRM for integration options due to its unparalleled ease of integration, free offerings, and a user-friendly platform that simplifies complex processes. It’s the ideal choice for businesses that value a cohesive, interconnected suite of tools to streamline their operations.`,
                bullets: [
                    "HubSpot’s CRM earned near-perfect scores across the board, boasting a 95.83/100 for both API availability and integration ease, and a 100/100 for the breadth of native add-ons and third-party integrations. ",
                    "The ‘no contract required’ policy and free plan make the platform a rarity among competitors. This approach democratizes access to powerful CRM tools, and makes it an attractive option for businesses of all sizes."
                ],
                outro: `While Salesforce is often lauded for its extensive feature set and scalability, HubSpot Sales Hub is the go-to for businesses prioritizing ease of integration and user-friendly experiences. It’s particularly well-suited for companies that leverage a wide array of tools and require a CRM that can integrate with them.`,
                extras: {
                    "About ": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "HubSpot CRM is designed to help you streamline your business operations by integrating marketing, sales, and customer service into one seamless platform."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 168,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "Known for its user-friendly interface and comprehensive sales and marketing features, HubSpot CRM provides tools for contact management, email tracking, deal pipelines, and marketing automation. Its integration capabilities with popular business apps ensure you can manage all your customer interactions and data from a single platform. HubSpot’s free tier offers comprehensive functionalities, making it accessible for small businesses and startups, while scalable options are available for larger enterprises needing advanced features and customizations. Its extensive training resources also help to speed up adoption of the software."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 173,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    "Key Features": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Contact management:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 190,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Provides a detailed view of contacts, tracking every interaction automatically and allowing users to easily manage customer relationships."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 191,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Email tracking and notifications"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 196,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Enables real-time notifications when a contact opens an email, allowing sales teams to follow up effectively."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 199,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Pipeline management:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 204,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "Offers a visual dashboard for managing sales pipelines, helping teams to track deals and stages effectively."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 205,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Meeting scheduling:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 209,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "Provides a tool to simplify meeting scheduling by syncing with your calendar and allowing contacts to book time directly."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 210,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "AI-driven lead scoring:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 214,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "Uses predictive analytics and behavioral data to prioritize leads, helping sales teams focus on high-potential opportunities."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 217,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: [
                                    "Bidirectional integration:",
                                    " "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 222,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "Supports seamless integration with hundreds of third-party applications through a robust API, enhancing workflow automation and data synchronization."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 225,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    Pricing: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        herf: "/",
                                        children: "Free Trial "
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 235,
                                        columnNumber: 17
                                    }, this),
                                    "Available"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 234,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Free plan"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 238,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold  text-black mb-4",
                                children: [
                                    "Price: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        classname: "font-light",
                                        children: "$0/month"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 240,
                                        columnNumber: 24
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 239,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                className: "text-lg font-bold mb-2",
                                children: "Features:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 242,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Contact management"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 244,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Deal pipeline"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 245,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Quotes"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 246,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Live chat"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 247,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Meeting scheduling"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 248,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 243,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Starter Plan:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 250,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold  text-black mb-4",
                                children: [
                                    "Price:",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        classname: "font-light",
                                        children: [
                                            " ",
                                            "$20/seat/month billed monthly"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 253,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 251,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                className: "text-lg font-bold mb-2",
                                children: [
                                    "Features:",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        classname: "font-light",
                                        children: " Everything in Free, plus:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 260,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 258,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Sales automation"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 263,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Goals"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 264,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Sales content analytics"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 265,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Payments"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 266,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Task queues"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 267,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 262,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Professional Plan:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 269,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold  text-black mb-4",
                                children: [
                                    "Price:",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        classname: "font-light",
                                        children: [
                                            " ",
                                            "$100/seat/month billed monthly"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 272,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 270,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                className: "text-lg font-bold mb-2",
                                children: [
                                    "Features:",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        classname: "font-light",
                                        children: "Everything in Starter, plus:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 279,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 277,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Prospecting and lead management"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 282,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Sequences"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 283,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Forecasting"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 284,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Custom Reporting"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 285,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Sales Analytics"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 286,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Playbooks"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 287,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 281,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Enterprise Plan:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 289,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold  text-black mb-4",
                                children: [
                                    "Price:",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        classname: "font-light",
                                        children: "$150/seat/month billed monthly"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 292,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 290,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                className: "text-lg font-bold mb-2",
                                children: [
                                    "Features:",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        classname: "font-light",
                                        children: "Everything in Professional, plus:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 298,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 296,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Custom objects"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 303,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Predictive lead scoring"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 304,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Conversation intelligence"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 305,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Recurring revenue tracking"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 306,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Deal Journey Analytics"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 307,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 302,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "For more detailed pricing and features, visit HubSpot Sales Hub Pricing."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 309,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                }
            }
        },
        Zoho: {
            title: "Zoho CRM – Best for decentralized teams",
            logo: "/images/zoho.jpg",
            button: {
                text: "Visit Website",
                link: "#"
            },
            scores: [
                {
                    label: "Overall Score",
                    score: "4.5/5"
                },
                {
                    label: "Pricing",
                    score: "4.2/5"
                },
                {
                    label: "General features and Interface",
                    score: "4.3/5"
                },
                {
                    label: "Core features",
                    score: "4.8/5"
                },
                {
                    label: "Advanced features",
                    score: "4.4/5"
                },
                {
                    label: "Inegration and compatibility",
                    score: "5/5"
                },
                {
                    label: "UX",
                    score: "4.3/5"
                }
            ],
            pros: [
                "Remote-first functionality and support",
                "Amble collaboration tools for decentralized teams",
                "Additional tool sets for other critical business needs"
            ],
            cons: [
                "Free/low-cost plans have reduced functionality"
            ],
            why: {
                intro: `Zoho CRM is best for decentralized teams because it delivers a combination of flexibility, connectivity, and comprehensive features that are unmatched in the market. Its high scores in collaboration tools and mobile app functionality are not just numbers—they reflect a real-world efficacy that decentralized teams can rely on..`,
                bullets: [
                    "Zoho CRM scores an impressive 96/100 in advanced features, with perfect scores in multi-channel support and collaboration tools, essential for decentralized teams. Its ability to provide customer geo-location features and VOIP support further cements its position as the go-to CRM for teams operating remotely. ",
                    "TAdditionally, Zoho offers a more seamless experience across all devices compared to competitors."
                ],
                outro: `Zoho’s AI-powered Sales Assistant, Zia, offers smart sales forecasting, crucial for coordinating dispersed teams. SalesSignals keeps teams in sync with real-time, multi-channel notifications. Blueprint guides remote teams through each deal stage, providing process clarity. Zoho’s unique multi-channel support covers everything from email to social media, ensuring all team interactions are captured, irrespective of location..`,
                extras: {
                    "About ": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Zoho CRM is part of a larger platform that includes HR, accounting, operations, and more, placing it in a similar bracket to NetSuite. It’s accomplished this while still maintaining low overhead costs, thanks to its remote-first work environment."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 351,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "That prioritization of decentralized collaboration carries over to their suite of software solutions, including their CRM. With features and tools comparable to its peers in this list, but with the added bonus of designing the platform to function across time zones and national boundaries."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 358,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "The software is tailored to meet the needs of businesses of all sizes, with a free plan and no contract requirement. Its pricing structure is competitive, offering value for money and reflecting an understanding of diverse business models."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 365,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Zoho CRM’s interface is intuitive, scoring a 75/100 in design, and it supports a mild learning curve, ensuring new users can quickly adapt. The platform’s customizability is a standout feature, allowing businesses to tailor the CRM to their unique processes."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 371,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "In terms of product design, Zoho CRM has been crafted with the user in mind, offering a balance between functionality and simplicity. This balance is critical for user adoption and long-term engagement with the platform."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 378,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    "Key Features": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "AI-Powered Sales Assistant (Zia):"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 388,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Zoho CRM offers an AI-powered sales assistant called Zia that can predict trends, anomalies, and conversions, making sales forecasting smarter."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 391,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "SalesSignals:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 396,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "This feature provides real-time notifications from across multiple channels like phone, email, social media, and live chat, ensuring you never miss an interaction."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 397,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Blueprint:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 403,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "Zoho’s Blueprint feature helps businesses design and automate their sales processes, ensuring that salespeople know exactly what to do at each stage of the deal."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 404,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Meeting scheduling:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 409,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "Provides a tool to simplify meeting scheduling by syncing with your calendar and allowing contacts to book time directly."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 410,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Multi-Channel Support:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 414,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "Zoho CRM offers multi-channel support for phone, email, live chat, social media, and in-person meetings, keeping your team connected no matter how you communicate."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 415,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: [
                                    "Advanced analytics and forecasting:",
                                    " "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 420,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "Offers customizable reports and dashboards with advanced analytics capabilities, enabling precise sales forecasting and performance tracking."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 423,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    Pricing: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        herf: "/",
                                        children: "Free Trial "
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 433,
                                        columnNumber: 17
                                    }, this),
                                    "Available"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 432,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Free plan"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 436,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold  text-black mb-4",
                                children: [
                                    "Price:",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        classname: "font-light",
                                        children: " $0 (for 3 users)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 438,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 437,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                className: "text-lg font-bold mb-2",
                                children: "Features:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 440,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Basic CRM functionalities"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 442,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Limited to 3 users"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 443,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Lead and contact management"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 444,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 441,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Standard Edition:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 446,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold  text-black mb-4",
                                children: [
                                    "Price:",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        classname: "font-light",
                                        children: [
                                            " ",
                                            "$20/user/month billed monthly or $14/user/month billed annually"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 449,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 447,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                className: "text-lg font-bold mb-2",
                                children: "Features: "
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 455,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Sales tracking"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 457,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Custom dashboards"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 458,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Multiple pipelines"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 459,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Sales forecasting"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 460,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Social media management"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 461,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 456,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Professional Edition:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 463,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold  text-black mb-4",
                                children: [
                                    "Price:",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        classname: "font-light",
                                        children: [
                                            " ",
                                            "$35/user/month billed monthly or $23/user/month billed annually"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 466,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 464,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                className: "text-lg font-bold mb-2",
                                children: "Features: "
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 472,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Everything in Standard, plus:t"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 474,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Advanced customizations"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 475,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Process management"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 476,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 473,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Enterprise Edition:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 478,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold  text-black mb-4",
                                children: "Price: $52/user/month billed annually"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 479,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                className: "text-lg font-bold mb-2",
                                children: "Features:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 482,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Advanced customization"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 484,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Territory management"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 485,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "More extensive analytics and business intelligence tools"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 486,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "AI-driven sales insights"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 489,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 483,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Ultimate Edition:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 491,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold  text-black mb-4",
                                children: [
                                    "Price:",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        classname: "font-light",
                                        children: [
                                            " ",
                                            "$52/user/month billed annually"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 494,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 492,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                className: "text-lg font-bold mb-2",
                                children: [
                                    "Features:",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        classname: "font-light",
                                        children: "All Enterprise features, plus:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 501,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 499,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Higher storage"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 506,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Enhanced customization"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 507,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Advanced automation capabilities"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 508,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 505,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "For more detailed information on pricing and features, visit the Zoho CRM Pricing page."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 510,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                }
            }
        },
        Shapecrm: {
            title: "Shape CRM – Best for flexibility",
            logo: "/images/shapecrm.png",
            button: {
                text: "Visit Website",
                link: "#"
            },
            scores: [
                {
                    label: "Overall Score",
                    score: "4.4/5"
                },
                {
                    label: "Pricing",
                    score: "4.4/5"
                },
                {
                    label: "General features and Interface",
                    score: "4.1/5"
                },
                {
                    label: "Core features",
                    score: "4.6/5"
                },
                {
                    label: "Advanced features",
                    score: "4.4/5"
                },
                {
                    label: "Inegration and compatibility",
                    score: "4/5"
                },
                {
                    label: "UX",
                    score: "4.5/5"
                }
            ],
            pros: [
                "User-friendly interface",
                "Onboarding and training webinars offered daily",
                "Prioritized list views",
                "Industry-specific modules",
                "Flat fee"
            ],
            cons: [
                "eSignature functionality could be improved",
                "Higher price point"
            ],
            why: {
                intro: `Shape CRM’s design philosophy centers around user-driven customization. This approach is evident in its intuitive interface, which allows users to easily modify and adapt the platform to their specific needs, enhancing the overall user experience beyond standard CRM offerings.`,
                bullets: [
                    "It offers a compelling blend of industry-specific features, making it a top pick for businesses with specialized needs. And, it has all the bells and whistles. Scoring high in advanced features (not an easy feat), it offers a dedicated dialer that can be considered a full VoIP system, an AI chatbot and assistant, and geo-location integration options. ",
                    "Its flexibility also makes it a top choice for specific industries. Unlike many CRM systems that offer rigid, one-size-fits-all solutions, Shape CRM provides a highly customizable platform.",
                    "Shape CRM’s flexibility extends to its comprehensive automation tools for sales and marketing processes. These tools help automate repetitive tasks, increase productivity, and focus on high-quality leads. Its customizable workflows and task management capabilities make it easier to keep track of customer interactions and internal operations, ensuring efficient resource allocation and improved business outcomes."
                ],
                outro: `Comparatively, Zoho CRM also offers significant flexibility with its extensive customization options and a wide range of integrations. However, Shape CRM provides a more specialized approach with industry-specific templates and features designed to meet the unique needs of different sectors. Additionally, Shape CRM’s integration of communication tools, such as built-in call, text, and email functionalities, streamlines customer interactions and reduces the need for multiple systems.`,
                extras: {
                    "About ": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Shape CRM has carved a niche for itself by offering highly customizable solutions tailored to various industries. Originating as a tool to simplify complex business processes, it has evolved to include features like AI lead scoring and bi-directional texting. The platform is lauded for its scalability and extensive features."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 558,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "Recently, they’ve added bulk texting capabilities and enhanced payment options, further streamlining business communication and transactions. However, the cost could be a consideration for smaller enterprises."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 566,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                classname: "text-black mb-4",
                                children: "One of the few gripes I have about Shape is its pricing structure. At $99/month if billed annually, it is on the higher end per user. However, the platform does include about everything a sales team needs. A tiered pricing structure in the future could fix this, allowing customers to choose their optimal level features for the price."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 572,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    "Key Features": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Lead engine:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 584,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Offers landing pages, lead distribution, automated scheduling, and more."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 585,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Built-in phone dialer:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 589,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Call tracking, live monitoring, and intelligent call routing."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 590,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "AI chatbot:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 594,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "Transcription assistant, and text and image generator."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 595,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Dynamic data enrichment:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 598,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "Automatically enriches contact and lead profiles with relevant data from various sources, ensuring up-to-date and comprehensive customer information."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 601,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Predictive analytics: "
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 606,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "Utilizes machine learning algorithms to predict customer behavior and sales outcomes, helping businesses make data-driven decisions and optimize their sales strategies."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 607,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    Pricing: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-black mb-4",
                            children: "$99/month when billed annually."
                        }, void 0, false, {
                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                            lineNumber: 616,
                            columnNumber: 15
                        }, this)
                    }, void 0, false)
                }
            }
        },
        Pipedrive: {
            title: "Pipedrive – Best for pipeline management and optimization",
            logo: "/images/pipedrive.jpg",
            button: {
                text: "Visit Website",
                link: "#"
            },
            scores: [
                {
                    label: "Overall Score",
                    score: "4.2/5"
                },
                {
                    label: "Pricing",
                    score: "3.5/5"
                },
                {
                    label: "General features and Interface",
                    score: "4.3/5"
                },
                {
                    label: "Core features",
                    score: "4.6/5"
                },
                {
                    label: "Advanced features",
                    score: "3.5/5"
                },
                {
                    label: "Inegration and compatibility",
                    score: "4.8/5"
                },
                {
                    label: "UX",
                    score: "4/5"
                }
            ],
            pros: [
                "AI-powered lead tracking",
                "Helps teams focus their energy on more effective efforts",
                "Approachable interface"
            ],
            cons: [
                "Not as valuable for teams with existing, well-refined lead pipelines"
            ],
            why: {
                intro: `Pipedrive is best for businesses that prioritize sales process optimization. Its intuitive design, combined with powerful automation and analytics, makes it an ideal tool for sales teams to streamline their workflows.

Pipedrive’s visual sales pipeline breathes life into deal progression, streamlining the sales process in a digestible, visual format. Complemented by comprehensive Sales Reporting, users glean valuable insights into performance trends. With seamless Email Integration, tracking correspondence and automating follow-ups becomes effortless. Pipedrive’s Activity and Goal Tracking further keep sales efforts aligned, optimizing pipeline progress. For businesses seeking a clear view and control over their sales pipeline, Pipedrive has the right formula, making it a top recommendation in the CRM domain.`,
                bullets: [
                    "Pipedrive’s overall score of 83.3 out of 100, with a 4.2-star rating, is a testament to its balanced performance across various criteria. It excels in core features like sales pipeline, task automation, and email integration, which are pivotal for effective CRM functionality. ",
                    "Compared to other CRMs like Salesforce or HubSpot, Pipedrive is more accessible and less complex, making it ideal for small to medium-sized businesses or teams that require a straightforward, efficient sales process without the need for extensive customization or complex integrations.",
                    "Pipedrive is designed to help teams make the most of their leads, and focus on the ones most likely to convert. It does this through a variety of non-conventional CRM capabilities, including AI analytics, intelligence software, and prescriptive data insights. ",
                    "The interface is also carefully crafted to present the most relevant information in a visual, easy-to-digest manner. Properly implemented, Pipedrive can dramatically reduce the number of leads that slip through the cracks, and the number of dead ends chased by sales staff.",
                    "Recent additions include improved AI analytics and more third-party integrations."
                ],
                outro: `For more information on Pipedrive, check out Pipedrive Product Updates and Pipedrive Community.`,
                extras: {
                    "About ": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "HubSpot CRM is designed to help you streamline your business operations by integrating marketing, sales, and customer service into one seamless platform."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 662,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "Known for its user-friendly interface and comprehensive sales and marketing features, HubSpot CRM provides tools for contact management, email tracking, deal pipelines, and marketing automation. Its integration capabilities with popular business apps ensure you can manage all your customer interactions and data from a single platform. HubSpot’s free tier offers comprehensive functionalities, making it accessible for small businesses and startups, while scalable options are available for larger enterprises needing advanced features and customizations. Its extensive training resources also help to speed up adoption of the software."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 667,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    "Key Features": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Pipeline management:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 684,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Pipedrive offers a visual sales pipeline which allows users to effectively manage deals at different stages and streamline the sales process."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 685,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Sales reporting:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 690,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Pipedrive includes comprehensive sales reporting features to provide insights and monitor sales performance over time."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 691,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Email integration:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 696,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "O: Pipedrive provides seamless email integration, allowing users to send and receive emails directly from the CRM, track correspondence and automate follow-ups."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 697,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Activity and goal tracking:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 702,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "Pipedrive allows users to set and monitor goals and activities, keeping sales efforts aligned with business objectives."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 705,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Sales automation:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 709,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "Pipedrive’s workflow automation feature enables users to automate repetitive tasks, such as sending emails or updating deal stages, to save time and ensure consistency in sales processes"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 710,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Smart contact data: "
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 716,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "Pipedrive enriches contact profiles by pulling in data from social media and other online sources, providing users with comprehensive and up-to-date information about their contacts."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 717,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    Pricing: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        herf: "/",
                                        children: "Free Trial "
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 727,
                                        columnNumber: 17
                                    }, this),
                                    "Available"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 726,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Essential:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 730,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold  text-black mb-4",
                                children: [
                                    "Price:",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        classname: "font-light",
                                        children: "$24 per seat per month billed monthly or $14 per seat per month billed annually"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 733,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 731,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                className: "text-lg font-bold mb-2",
                                children: "Features:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 738,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Lead and pipeline management"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 740,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Data import"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 741,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "400+ integrations"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 742,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Contact reports"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 743,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Personalized onboarding"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 744,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 739,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Advanced:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 746,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold  text-black mb-4",
                                children: [
                                    "Price:",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        classname: "font-light",
                                        children: "$49 per seat per month billed monthly or $39 per seat per month billed annually"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 749,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 747,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                className: "text-lg font-bold mb-2",
                                children: [
                                    "Features:",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        classname: "font-light",
                                        children: "Everything from previous tier plus:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 756,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 754,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Full email sync"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 761,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Automations builder, including email sequences"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 762,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Call and email scheduling"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 763,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Live chat support"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 764,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 760,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Professional :"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 766,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold  text-black mb-4",
                                children: [
                                    "Price:",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        classname: "font-light",
                                        children: "$69 per seat per month billed monthly or $49 per seat per month billed annually"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 769,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 767,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                className: "text-lg font-bold mb-2",
                                children: [
                                    "Features:",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        classname: "font-light",
                                        children: "Everything from previous tiers plus:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 776,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 774,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "AI Sales Assistant"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 781,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Contract management"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 782,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Lead routing"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 783,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Team management"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 784,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Revenue forecasts"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 785,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Extra data entry and data quality settings"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 786,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 780,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Power:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 788,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold  text-black mb-4",
                                children: [
                                    "Price:",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        classmate: "font-light",
                                        children: [
                                            " ",
                                            "$79 per seat per month billed monthly or $64 per seat per month billed annually"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 791,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 789,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                className: "text-lg font-bold mb-2",
                                children: [
                                    "Features:",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        classmate: "font-light",
                                        children: "Everything from previous tiers plus:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 799,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 797,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Project planning"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 804,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "More control of account permissions and visibilities"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 805,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "24/7 live chat support"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 806,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Phone support"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 807,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 803,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Enterprise:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 809,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold  text-black mb-4",
                                children: [
                                    "Price:",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        classmate: "font-light",
                                        children: "$129 per seat per month billed monthly or $99 per seat per month billed annually"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 812,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 810,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                className: "text-lg font-bold mb-2",
                                children: [
                                    "Features:",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        classmate: "font-light",
                                        children: "Everything from previous tiers plus:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 819,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 817,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Unlimited reports and customizations"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 824,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Enhanced security preferences"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 825,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Maximize the number of automations and email syncs per seatt"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 826,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 823,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "For more detailed information on pricing and features, visit the Pipedrive Pricing page."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 830,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                }
            }
        },
        Salesforce: {
            title: "Salesforce Sales Cloud – Best for enterprises",
            logo: "/images/salesforce.png",
            button: {
                text: "Visit Website",
                link: "#"
            },
            scores: [
                {
                    label: "Overall Score",
                    score: "4/5"
                },
                {
                    label: "Pricing",
                    score: "2.7/5"
                },
                {
                    label: "General features and Interface",
                    score: "4.5/5"
                },
                {
                    label: "Advanced features",
                    score: "4.5/5"
                },
                {
                    label: "Inegration and compatibility",
                    score: "3.5/5"
                },
                {
                    label: "UX",
                    score: "3.5/5"
                }
            ],
            pros: [
                "Extensive integrations",
                "Enterprise-level software functionality for small teams",
                "Can be configured to almost any situation"
            ],
            cons: [
                "Mid-to-high pricing",
                "Complex implementation"
            ],
            why: {
                intro: `Salesforce is a market leader for a reason: it offers a comprehensive suite of advanced tools designed to adapt and grow alongside businesses. While the company offers solutions for businesses at every level, it is particularly well suited in areas crucial for enterprise-level operation. The AppExchange marketplace further enhances this flexibility, providing access to thousands of third-party applications that extend functionality beyond native features. This dynamic ecosystem, coupled with frequent updates and a large community of users and developers, helps Salesforce maintain its competitive edge.`,
                body: `Salesforce Sales Cloud is a top pick for enterprises because of its superior customization, integration options, and advanced features. With the Lightning App Builder, you can create custom applications without needing to code. Plus, the Salesforce AppExchange offers over 7,000 third-party apps, significantly enhancing your CRM’s functionality. While NetSuite also allows for customization and integrations, Salesforce’s broader ecosystem is much more user-friendly.`,
                content: `And with Salesforce’s Einstein AI tools, you get predictive analytics, lead scoring, and automated workflows that streamline your sales processes. These AI features are more advanced than what NetSuite offers, making Salesforce particularly effective for enhancing CRM activities. Salesforce’s real-time dashboards and customizable reports make it easy to access and understand key metrics, helping you make informed decisions quickly.`,
                outro: `NetSuite does integrate CRM with ERP, financials, and e-commerce capabilities, making it a solid choice for product-driven companies. However, Salesforce’s cloud-first approach means you benefit from frequent updates and a dynamic platform that evolves with your business. Salesforce’s clear and flexible pricing tiers also simplify budgeting and planning, unlike NetSuite’s less transparent pricing.`,
                extras: {
                    "About ": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Salesforce CRM, included in Salesforce Sales Cloud, has been a titan in the enterprise arena for years, and it has largely gained its clout on merit. Its comprehensive suite of features, scalability, and innovative approach to customer relationship management all serve to make it a strong contender in the space."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 870,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "While Salesforce’s comprehensive features and customization options are a boon for many large-scale businesses, they can also present a steep learning curve for new users. The platform’s depth, which allows for extensive tailoring, may require significant training and expertise to navigate effectively. This could lead to additional costs for organizations in terms of time and resources spent on training."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 877,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-black mb-4",
                                        children: "Integration capabilities are a strong point for Salesforce, offering connections with a multitude of business applications. Yet, this interconnectedness can sometimes lead to complexity, particularly when managing and troubleshooting integrations across various systems."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 887,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-black",
                                        children: "The user experience is generally user-friendly and is regularly updated to introduce new functionalities. Nonetheless, some users may find the frequent updates challenging to keep up with, potentially disrupting workflows as teams adapt to new features."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 894,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 886,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "Salesforce’s AI enhancements with Einstein and mobile experience improvements are commendable, positioning the platform at the forefront of innovation, but remember the cost associated with accessing these cutting-edge tools should be considered."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 902,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    "Key Features": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "360-degree customer view:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 912,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Brings together every interaction and piece of customer data, presenting a complete view of each client’s journey. This holistic perspective enables businesses to understand their customers better, enhancing relationship-building."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 915,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Einstein AI-powered analytics:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 921,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "elivers insightful predictive analytics. This technology provides proactive lead scoring, trend analysis, and accurate sales forecasts, driving strategic, data-informed decision-making."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 924,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: [
                                    "Extensive customization and integration:",
                                    " "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 931,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "Offers a range of modules and a flexible API for seamless integration with other tools, ensuring Salesforce adapts to your specific business needs and tech stack, not vice versa."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 934,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Meeting scheduling:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 939,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "Provides a tool to simplify meeting scheduling by syncing with your calendar and allowing contacts to book time directly."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 940,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Scalability and cloud-based structure:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 944,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "Cloud-based architecture enables secure, anywhere-access to your CRM data, facilitating collaboration and boosting productivity across your team."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 947,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    Pricing: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        herf: "/",
                                        children: "Free Trial "
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 957,
                                        columnNumber: 17
                                    }, this),
                                    "Available"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 956,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Starter Suite:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 960,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold  text-black mb-4",
                                children: "Price: $25/user/month billed monthly or annually"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 961,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                className: "text-lg font-bold mb-2",
                                children: "Features:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 964,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Setup and onboarding"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 966,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "lead, account, contact, and opportunity management"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 967,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "email integration"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 968,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 965,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Pro Suite:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 970,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold  text-black mb-4",
                                children: "Price: $100/user/month billed annually"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 971,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                className: "text-lg font-bold mb-2",
                                children: "Features: All Starter Suite features, plus:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 974,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Greater customization and automation"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 978,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Sales quoting and forecasting"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 979,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Real-time chat"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 980,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 977,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Enterprise:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 982,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold  text-black mb-4",
                                children: "Price: $165/user/month billed annually"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 983,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                className: "text-lg font-bold mb-2",
                                children: "Features: All Pro Suite features, plus:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 986,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Advanced pipeline management"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 990,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Deal insights"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 991,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Conversation intelligence"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 992,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Workflow and approvals automation"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 993,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 989,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Unlimited:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 995,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold  text-black mb-4",
                                children: "Price: $330/user/month billed annually"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 996,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                className: "text-lg font-bold mb-2",
                                children: "Features: All Enterprise features, plus::"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 999,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Predictive AI"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 1003,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Conversation intelligence"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 1004,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Sales engagement"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 1005,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Full sandbox"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 1006,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1002,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                }
            }
        },
        Oracle: {
            title: "Oracle NetSuite CRM – Best all-in-one solution",
            logo: "/images/oracle.png",
            button: {
                text: "Visit Website",
                link: "#"
            },
            scores: [
                {
                    label: "Overall Score",
                    score: "4/5"
                },
                {
                    label: "Pricing",
                    score: "2.5/5"
                },
                {
                    label: "General features and Interface",
                    score: "3.8/5"
                },
                {
                    label: "Core features",
                    score: "4.6/5"
                },
                {
                    label: "Advanced features",
                    score: "4/5"
                },
                {
                    label: "Inegration and compatibility",
                    score: "4.8/5"
                },
                {
                    label: "UX",
                    score: "3.8/5"
                }
            ],
            pros: [
                "Most comprehensive business tool on the list",
                "Full-fledged ERP capabilities",
                "360-degree customer view",
                "Scalability and flexibility"
            ],
            cons: [
                "Higher-end pricing",
                "No standalone CRM option"
            ],
            why: {
                intro: `Oracle NetSuite CRM is as comprehensive as it gets. It’s a remarkably versatile tool, particularly for businesses seeking an all-in-one cloud solution that integrates CRM with financials, e-commerce, and more..`,
                outro: `This powerhouse, cloud-based solution provides a 360-degree customer view, enabling businesses to see a full spectrum of customer interactions in real-time. Its advanced features, particularly in AI analytics and collaboration tools, make the platform stand out and clinch a spot in the 4 star range.`,
                outro: `One of the key advantages of NetSuite over competitors like Salesforce and Pipedrive is its comprehensive nature. While Salesforce excels in its CRM-specific functionalities, offering features like customizable dashboards, opportunity scoring, and a wide range of integrations, NetSuite provides a more holistic approach by integrating CRM with enterprise resource planning (ERP), accounting, and e-commerce capabilities. This makes NetSuite particularly well-suited for businesses that require extensive operational management alongside customer relationship management​.`,
                outro: `Compared with Pipedrive, NetSuite offers far better functionality. Pipedrive is favored for its ease of use and value for money, particularly for small to medium-sized businesses focusing on sales pipeline management. However, it lacks the depth of features offered by NetSuite, particularly in areas like inventory management and financials, which are crucial for larger or more complex businesses​ ​.`,
                extras: {
                    "About ": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Rounding out the 4-star range on our list is NetSuite CRM from Oracle. If that name sounds familiar, it should: NetSuite was an internet pioneer back when the internet still ran on dial-up. These days, the brand (now owned by Oracle) continues to offer advanced software and digital technology solutions to businesses around the world."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1045,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "NetSuite is noteworthy for numerous reasons, but above all else, they are a comprehensive solution. The CRM portion is only a fraction of the platform—the suite handles enterprise resource planning (ERP), accounting and financials, inventory tracking, and more. Organizations looking to use a single system to manage and optimize their entire business infrastructure need look no further."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1053,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "The overall design of Oracle NetSuite CRM also focuses on providing a comprehensive view of the customer lifecycle. While its interface and usability score moderately, the CRM’s strength lies in its ability to offer a 360-degree view of customers, integrating sales, customer service, and marketing effectively."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1062,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "This evolution into a comprehensive ecosystem addresses the growing need for interconnected business systems, offering a more efficient and unified approach to managing various business processes."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1069,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "That said, its greatest strength is also its biggest caveat. NetSuite is a package deal. Signing up for the CRM (or any individual business function) means signing up for the whole platform, so it works best for brands that stand to benefit from an entire workflow overhaul."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1075,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    "Key Features": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "360-Degree customer view:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1086,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Provides a comprehensive, real-time view of customer interactions across all channels, enhancing customer insight and service."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1089,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Sales force automation (SFA):"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1094,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Automates and streamlines the entire sales process, reducing errors and saving time.."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1097,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Marketing automation"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1102,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "Enables businesses to streamline campaign management and track marketing ROI effectively."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1103,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Customer service Management: :"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1107,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "Enhances customer satisfaction by providing tools for managing customer support and improving service delivery."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1110,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Advanced order management:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1114,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "NetSuite offers order management capabilities that streamline the order-to-cash process."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1117,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: [
                                    "Real-time analytics and reporting",
                                    " "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1121,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "Provides powerful, customizable dashboards and reports that deliver real-time insights into business performance."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1124,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    Pricing: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-black",
                            children: "Starting from $499/user/year"
                        }, void 0, false, {
                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                            lineNumber: 1132,
                            columnNumber: 15
                        }, this)
                    }, void 0, false)
                }
            }
        },
        //Insightly CRM – Best for easy-to-read analytics and reporting
        Insightly: {
            title: "Insightly CRM – Best for easy-to-read analytics and reporting",
            logo: "/images/insightly.png",
            button: {
                text: "Visit Website",
                link: "#"
            },
            scores: [
                {
                    label: "Overall Score",
                    score: "3.9/5"
                },
                {
                    label: "Pricing",
                    score: "4.2/5"
                },
                {
                    label: "General features and Interface",
                    score: "3.6/5"
                },
                {
                    label: "Core features",
                    score: "4.3/5"
                },
                {
                    label: "Advanced features",
                    score: "2.3/5"
                },
                {
                    label: "Inegration and compatibility",
                    score: "4.2/5"
                },
                {
                    label: "UX",
                    score: "3.8/5"
                }
            ],
            pros: [
                "Vast analytics and visualization options",
                "Robust automation tools",
                "Project management functionality",
                , 
            ],
            cons: [
                "Not as intuitive or easy to deploy as some tools"
            ],
            why: {
                intro: `Insightly’s design philosophy in its reporting and analytics features emphasizes simplicity and clarity. The platform allows users to easily create and customize reports, offering an experience that reduces the complexity often associated with data analysis.`,
                details: `Insightly pairs an easy-to-use interface with customizable reporting tools, making it ideal for businesses that need detailed insights without the complexity of more advanced systems. This makes Insightly particularly suitable for small to medium-sized businesses or those with limited resources for data analysis.

Despite the lower price tag compared to other software offering similar tools, it still boasts advanced reporting, allowing users to generate custom, in-depth reports revealing key business performance indicators.

Its dashboard visualization serves up crucial metrics at a glance, aiding quick, informed decisions. Coupled with precise sales forecasting, Insightly paints an accurate picture of future sales revenue. Plus, with smooth integration with platforms like Power BI and Excel, Insightly’s analytics game is seriously amplified.

For businesses that prioritize ease of use and straightforward data visualization, Insightly is a more suitable choice than Salesforce, which, while powerful, can be overwhelming for users new to CRM analytics. HubSpot also offers similar user-friendliness but may not match Insightly’s depth in customization options for reports.

Insightly might be a brand name you’re unfamiliar with, but rest assured, it has a quiver of features that’s just as full as some of the bigger names on this list. Automation options, project management, and plentiful integration options are just the beginning. What’s not a common bragging right is their robust analytics and reporting capabilities.

In many ways, Insightly doubles as business intelligence, providing extensive flexibility and functionality regarding data discovery and scrubbing; organizing and visualization; powerful analytics insights; and intuitive reporting options.

Insightly has even enhanced its reporting and analytics features recently, focusing on providing more customizable reporting options and integrating AI-driven insights.`,
                outro: `However, compared to competitors like Salesforce or Oracle NetSuite, Insightly’s advanced features like AI analytics and VOIP capabilities could be further developed. While it offers a solid foundation in CRM functionalities, expanding these advanced features could enhance its appeal to larger businesses or those with more complex CRM needs.`,
                extras: {
                    "About ": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1183,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1186,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1189,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1191,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1194,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    "Key Features": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Advanced reporting:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1201,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Insightly’s advanced reporting allows users to create customized, detailed reports, offering valuable insights into business performance."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1202,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Dashboard visualization:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1206,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Insightly provides dashboards for a quick visual representation of business health and metrics, aiding in swift decision-making."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1207,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Sales forecasting:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1211,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Insightly’s CRM includes sales forecasting features, enabling businesses to predict sales revenue using historical and real-time data."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1212,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Integrations:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1216,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Insightly integrates with popular software like Power BI and Excel, enhancing its reporting and analytics capabilities."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1217,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Workflow automation:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1221,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Insightly allows users to automate repetitive tasks and business processes through custom workflows."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1222,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Project management:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1226,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "Insightly combines CRM and project management features, enabling users to manage projects, track milestones, and collaborate with team members directly within the CRM platform."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1227,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true),
                    Pricing: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4 font-semibold",
                                children: "Free trial available"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1235,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-1",
                                children: "Plus Plan:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1237,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-1",
                                children: "Price: $35/user/month billed monthly or $29/user/month billed annually"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1238,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: "Features:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 1242,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 1242,
                                        columnNumber: 55
                                    }, this),
                                    "• Lead and contact management",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 1243,
                                        columnNumber: 36
                                    }, this),
                                    "• Project management",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 1244,
                                        columnNumber: 27
                                    }, this),
                                    "• Advanced reports",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 1245,
                                        columnNumber: 25
                                    }, this),
                                    "• Business dashboards"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1241,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-1",
                                children: "Professional Plan:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1249,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-1",
                                children: "Price: $59/user/month billed monthly or $49/user/month billed annually"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1250,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: "Features:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 1254,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 1254,
                                        columnNumber: 55
                                    }, this),
                                    "• All Plus Plan features, plus:",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 1255,
                                        columnNumber: 38
                                    }, this),
                                    "• Lead assignment and routing",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 1256,
                                        columnNumber: 36
                                    }, this),
                                    "• Workflow automation",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 1257,
                                        columnNumber: 28
                                    }, this),
                                    "• Custom page layouts"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1253,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-1",
                                children: "Enterprise Plan:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1261,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-1",
                                children: "Price: $129/user/month billed monthly or $99/user/month billed annually"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1262,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: "Features:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 1266,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 1266,
                                        columnNumber: 55
                                    }, this),
                                    "• All Professional Plan features, plus:",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 1267,
                                        columnNumber: 46
                                    }, this),
                                    "• Sandboxes",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 1268,
                                        columnNumber: 18
                                    }, this),
                                    "• Products and pricebooks",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 1269,
                                        columnNumber: 32
                                    }, this),
                                    "• Quotes",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 1270,
                                        columnNumber: 15
                                    }, this),
                                    "• Comprehensive audit logging"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1265,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "For more detailed information on pricing and features, visit the Insightly CRM page."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1274,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true)
                }
            }
        },
        //Keap CRM – Best for sales-marketing synergy
        Keap: {
            title: "Keap CRM – Best for sales-marketing synergyn",
            logo: "/images/keap.png",
            button: {
                text: "Visit Website",
                link: "#"
            },
            scores: [
                {
                    label: "Overall Score",
                    score: "3.8/5"
                },
                {
                    label: "Pricing",
                    score: "2.5/5"
                },
                {
                    label: "General features and Interface",
                    score: "4/5"
                },
                {
                    label: "Core features",
                    score: "4.5/5"
                },
                {
                    label: "Advanced features",
                    score: "2.5/5"
                },
                {
                    label: "Inegration and compatibility",
                    score: "4.6/5"
                },
                {
                    label: "UX",
                    score: "4.3/5"
                }
            ],
            pros: [
                "Sales and marketing automation",
                "Helps small teams accomplish more",
                "Easy to use"
            ],
            cons: [
                "May not be the right fit for larger, more complex workflows"
            ],
            why: {
                intro: `HubSpot has certainly made a name for itself in the CRM world, particularly when it comes to marketing automation. However, Keap steps up the game by offering a deeper integration between sales and marketing functions.`,
                outro: `The unified nature of Keap’s platform is a big plus. It allows for easier navigation and quicker setup, which can be a real time-saver. For businesses looking to bring their sales and marketing operations into harmony, Keap offers a straightforward path to achieving that goal.`,
                extras: {
                    "About": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Keap CRM is a bit of an oddity in this list. While it’s fully capable of providing top-tier service to larger brands the way Salesforce or HubSpot might, its positioning tends to focus more heavily on solopreneurs and other small businesses."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1318,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "To be fair, these are often the professionals who need the most support to keep their sales pipelines flowing. Certain “hats” have to be worn in every business—accounts receivable, sales, marketing, operations, logistics, project management, etc.—even when that business is a business of one. The fewer the heads there are in the crew, the more hats on a single head."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1322,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Keap aims to help these professionals by giving them somewhere else to put some of those hats, so to speak. Via robust sales, marketing, and financial automation tools, Keap streamlines some of the most difficult, tedious, and repetitious parts of the sales lifecycle."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1326,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Solopreneurs especially tend to be specialists in their product, with non-billable tasks being secondary skills at best. Keap gives these individuals and teams a way to get back to the work they do best, and rest easy about the duties that stress them out the most."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1330,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "While Keap excels in many areas, it could further strengthen its position against competitors by enhancing its AI analytics and AI chatbot functionalities. These improvements would provide even more sophisticated tools for businesses to analyze data and engage with customers, keeping pace with the trends of competitors."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1334,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true),
                    "Key Features": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Smart client management:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1342,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Keap’s CRM excels in organizing and updating client information, along with capturing new leads, all in one centralized, searchable database."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1343,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Advanced email automation:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1347,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Keap’s CRM not only offers email marketing but also delivers personalized, automated follow-ups that nurture client relationships and keep businesses top-of-mind."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1348,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Integrated appointments:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1352,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Keap seamlessly syncs calendars and sets up reminders, turning the scheduling of appointments with clients into a hassle-free process."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1353,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Billing and payment solutions:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1357,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Keap stands out with its invoicing features, which provide the ability to create, send, and track invoices, accept credit cards online, and automate payment reminders."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1358,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Lead capture and management:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1362,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Provides advanced lead capture tools, including customizable forms and landing pages, to efficiently gather and manage leads from multiple sources."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1363,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Sales pipeline automation:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1367,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "Offers automated sales pipeline management, enabling users to track leads, set tasks, and automate follow-ups to ensure no opportunities are missed."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1368,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true),
                    Pricing: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4 font-semibold",
                                children: "Free trial available"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1376,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: "Access to all Keap Services:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 1379,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 1379,
                                        columnNumber: 74
                                    }, this),
                                    "Price: Starts at $299/month billed monthly for 2 users and 1,500 contacts, or $249/month billed annually for 2 users and 1,500 contacts"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1378,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: "Features:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 1384,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 1384,
                                        columnNumber: 55
                                    }, this),
                                    "You get all Keap services in one subscription, including their CRM."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1383,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: "CRM features include:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 1389,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 1389,
                                        columnNumber: 67
                                    }, this),
                                    "• Contact management and segmentation",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 1390,
                                        columnNumber: 44
                                    }, this),
                                    "• Custom fields",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 1391,
                                        columnNumber: 22
                                    }, this),
                                    "• Company records storage",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 1392,
                                        columnNumber: 32
                                    }, this),
                                    "• Lead scoring",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 1393,
                                        columnNumber: 21
                                    }, this),
                                    "• Customizable dashboards"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1388,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "For more detailed information on pricing and features, visit the Keap Pricing page."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1397,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true)
                }
            }
        },
        //Copper CRM – Best for security
        Copper: {
            title: "Copper CRM – Best for security",
            logo: "/images/copper.png",
            button: {
                text: "Visit Website",
                link: "#"
            },
            scores: [
                {
                    label: "Overall Score",
                    score: "3.8/5"
                },
                {
                    label: "Pricing",
                    score: "3.3/5"
                },
                {
                    label: "General features and Interface",
                    score: "4/5"
                },
                {
                    label: "Core features",
                    score: "4.6/5"
                },
                {
                    label: "Advanced features",
                    score: "2.3/5"
                },
                {
                    label: "Inegration and compatibility",
                    score: "4.2/5"
                },
                {
                    label: "UX",
                    score: "4.5/5"
                }
            ],
            pros: [
                "Unparalleled Google Workspace compatibility",
                "End-user simplicity",
                "Security safeguards"
            ],
            cons: [
                "Fewer non-Google integrations",
                "Not optimal for organizations built on Office 365"
            ],
            why: {
                intro: `Larger, more established organizations often rely on Microsoft’s suite of apps and platforms to ensure secure collaboration. But Google Workspace is often a much more familiar space for newer brands with younger staff (many of whom used Gmail and Gsuite for their personal accounts). And Copper CRM is unmatched when it comes to Google Workspace interoperability.`,
                outro: `Depending on your use case, your current workflow, and the level of tech literacy in your organization, Copper CRM could very well be the fastest time-to-value option available.`,
                extras: {
                    "About": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Copper CRM offers a specialized solution for businesses deeply integrated with Google Workspace. Its primary strength lies in its seamless integration with Google’s suite of productivity tools, including Gmail, Google Calendar, and Google Drive. This integration provides a significant advantage for organizations already utilizing Google’s ecosystem."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1437,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "The platform’s user interface closely resembles that of Google products, which reduces the learning curve for users familiar with Google Workspace. This design choice enhances user adoption and efficiency, as team members can navigate the CRM with minimal additional training."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1441,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "One of Copper’s key features is its ability to automatically capture emails and calendar events. This automation significantly reduces the need for manual data entry, a common pain point in CRM usage. By streamlining this process, Copper allows sales teams to focus more on relationship-building and less on administrative tasks."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1445,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Copper CRM is particularly well-suited for small to mid-sized businesses looking to enhance their sales processes, contact management, and team collaboration. Its feature set, while comprehensive, is designed to be accessible and practical rather than overwhelming."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1449,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "The platform offers workflow automation capabilities, enabling businesses to create more efficient sales and customer service processes. Real-time integration ensures that data is consistently up-to-date across all connected Google applications, providing a unified view of customer interactions and business activities."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1453,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "While Copper excels in its Google Workspace integration, it’s important to note that this specialization may limit its appeal for businesses not heavily invested in the Google ecosystem. Organizations using alternative productivity suites or requiring extensive customization might find Copper’s offerings less suitable for their needs."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1457,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "For businesses leveraging Google Workspace and seeking a CRM solution that aligns seamlessly with their existing tools, Copper presents a compelling option. Its focus on simplicity, coupled with robust functionality, positions it as an effective tool for enhancing customer relationship management within the Google-centric work environment."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1461,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "To place higher on the list, it could further enhance its competitive edge by improving its AI analytics and AI chatbot functionalities. These advancements would provide businesses with more sophisticated tools for data analysis and customer engagement."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1465,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true),
                    "Key Features": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Google Workspace integration:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1473,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Integrates seamlessly with Google Workspace, allowing users to manage contacts, deals, and tasks directly from Gmail or other Workspace apps."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1474,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Robust security measures:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1478,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Includes role-based access controls, two-factor authentication, and regular user access reviews. Copper provides security training for employees and enforces a strict Employee Code of Conduct. Data is encrypted both in transit and at rest, with technical controls to guard against malware and unauthorized software."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1479,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Sales pipeline management:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1483,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Provides a visual sales pipeline that makes it easy to manage opportunities and track progress towards sales goals."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1484,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Automated data entry:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1488,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Uses automation to reduce the burden of manual data entry, automatically populating contact and company details."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1489,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Task automation:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1493,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Enables users to automate repetitive tasks, set reminders, and ensure timely follow-ups."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1494,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Reporting and insights:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1498,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "Provides advanced reporting and analytics capabilities, allowing users to generate detailed reports and gain actionable insights into sales performance and business metrics."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1499,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true),
                    Pricing: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4 font-semibold",
                                children: "Free trial available"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1507,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-1",
                                children: "Starter:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1509,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "$9/user/month"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1510,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-1",
                                children: "Basic:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1512,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "$23/user/month"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1513,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-1",
                                children: "Professional:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1515,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "$59/user/month"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1516,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-1",
                                children: "Business:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1518,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "$99/user/month"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1519,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true)
                }
            }
        },
        //ClickUp – Best for project management
        ClickUp: {
            title: "ClickUp – Best for project management",
            logo: "/images/clickup.png",
            button: {
                text: "Visit Website",
                link: "#"
            },
            scores: [
                {
                    label: "Overall Score",
                    score: "3.8/5"
                },
                {
                    label: "Pricing",
                    score: "4/5"
                },
                {
                    label: "General features and Interface",
                    score: "4.1/5"
                },
                {
                    label: "Core features",
                    score: "4.1/5"
                },
                {
                    label: "Advanced features",
                    score: "2/5"
                },
                {
                    label: "Inegration and compatibility",
                    score: "3.5/5"
                },
                {
                    label: "UX",
                    score: "4.3/5"
                }
            ],
            pros: [
                "First-rate CRM tool with first-rate PM functionality",
                "Competitive pricing",
                "Bonus features include real-time reporting, companion mobile app, and more"
            ],
            cons: [
                "Requires a bit more training and onboarding to implement"
            ],
            why: {
                intro: `ClickUp stands out for its integration of project management tools with CRM functionalities. This combination offers a unique value proposition for businesses seeking to unify their project workflows and customer relationship management within a single platform.`,
                outro: `ClickUp’s approach differs significantly from specialized CRM tools like Salesforce and HubSpot. Salesforce, a leader in the CRM sector, provides comprehensive features for sales, marketing, and customer service. It excels in customization, data analytics, and third-party integrations through its AppExchange ecosystem. Salesforce is particularly well-suited for large enterprises with complex requirements and substantial budgets. However, its extensive feature set comes with higher costs and a steeper learning curve, often requiring dedicated resources for effective implementation.`,
                extras: {
                    "About": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "ClickUp’s Task and Project Management tools bring a fresh perspective to CRM, prioritizing organization and tracking. The Collaboration Detection feature ensures that no work is duplicated—vital in customer relationship management. Goal Tracking aligns teams with overarching objectives, and Custom Views offer flexibility in visualizing client interactions. ClickUp is breaking down the silos, showing that project management and CRM can coexist and flourish in one platform, making it an unexpectedly fitting CRM choice."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1558,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "This vendor may come as a bit of a surprise, as ClickUp is primarily known as a project management platform. That reputation is well earned (and why it takes the title it does in this list). ClickUp also has a CRM platform—one that fills many of the needs discussed here."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1562,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "ClickUp’s foray into CRM features is a recent development, evolving from its core strength in task and project management."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1566,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "ClickUp already has a noteworthy share of the PM market, and picking up the CRM module can amplify the amount of benefit those teams get out of the vendor. Seeing as most other major brands in the PM space cost significantly more, it’s an excellent way to get powerful software tools without paying enterprise-level subscription fees."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1570,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "While ClickUp offers excellent task management and customization, its CRM features could benefit from more advanced sales tracking and marketing automation tools. Enhancing these aspects would make ClickUp a more comprehensive solution for businesses looking for an all-in-one platform for project management and customer relationship management."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1574,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    children: "Also read: Best CRM and Project Management Integrated Solutions"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                    lineNumber: 1579,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1578,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true),
                    "Key Features": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Task and project management:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1586,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "ClickUp excels in organizing tasks, allowing you to create, assign, prioritize, and track tasks all within a single platform."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1587,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Collaboration detection:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1591,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "ClickUp’s unique feature helps avoid duplicate work by showing who’s working on what in real-time."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1592,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Goal tracking:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1596,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "With ClickUp, you can set, track, and achieve goals across different teams and projects, ensuring everyone is aligned and focused."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1597,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Custom views:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1601,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "ClickUp allows you to customize how you view your tasks and projects, whether that’s in a list, board, box, calendar, or Gantt chart view."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1602,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Automation and integrations:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1606,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "Offers advanced automation capabilities that allow you to create custom workflows, automate routine tasks, and integrate seamlessly with over 1,000 other tools and applications, enhancing productivity and efficiency."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1607,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true),
                    Pricing: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-2 font-semibold",
                                children: "Free trial available"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1615,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4 font-semibold",
                                children: "Free plan available"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1616,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-1",
                                children: "Unlimited:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1618,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "$5/user/month"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1619,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-1",
                                children: "Business:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1621,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "$12/user/month"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1622,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-1",
                                children: "Business Plus:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1624,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "$19/user/month"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1625,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-1",
                                children: "Enterprise:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1627,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "Contact ClickUp for a customized quote"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1628,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true)
                }
            }
        },
        //Less Annoying CRM – Best for companies on a budget
        Annoying: {
            title: "Less Annoying CRM – Best for companies on a budget",
            logo: "/images/less-annoying.png",
            button: {
                text: "Visit Website",
                link: "#"
            },
            scores: [
                {
                    label: "Overall Score",
                    score: "3.5/5"
                },
                {
                    label: "Pricing",
                    score: "3.3/5"
                },
                {
                    label: "General features and Interface",
                    score: "3.3/5"
                },
                {
                    label: "Core features",
                    score: "3.9/5"
                },
                {
                    label: "Advanced features",
                    score: "1.5/5"
                },
                {
                    label: "Inegration and compatibility",
                    score: "3.3/5"
                },
                {
                    label: "UX",
                    score: "4.25/5"
                }
            ],
            pros: [
                "Easy to deploy",
                "Easy to use",
                "Lower-end cost"
            ],
            cons: [
                "Limited pre-built functionality",
                "Smaller integration library compared to competitors"
            ],
            why: {
                intro: `In the grand scheme of CRM software, Less Annoying CRM might seem overshadowed by giants like Salesforce and NetSuite, but it excels in its simplicity and affordability, particularly for small businesses. While Salesforce and NetSuite offer extensive features, they also come with higher complexity and costs that can be prohibitive for smaller enterprises. Less Annoying CRM focuses on delivering an intuitive, easy-to-use platform without the unnecessary frills, making it a strong contender for businesses looking for straightforward solutions.`,
                outro: `For those who find Salesforce’s vast array of features and customization options daunting or NetSuite’s ERP integration excessive, Less Annoying CRM presents a simpler, more manageable alternative. It provides the necessary tools to maintain customer relationships effectively, without the hassle and expense of more extensive systems. This focus on simplicity and affordability makes Less Annoying CRM a refreshing choice in the crowded CRM space.`,
                extras: {
                    "About ": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "With a low per-user cost, and intuitive functionality, it’s a perfect choice for teams that don’t have complex criteria for a CRM or sales software vendor to meet."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1666,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "If you’re looking to deploy quickly, onboard staff with minimal training, and want to limit your cloud software overhead, Less Annoying CRM fits the bill. And while the list of available customizations and pre-built integrations is smaller than other CRMs in this list, there are no contracts or limitations, making this CRM a strong choice for up-and-coming brands."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1669,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    "Key Features": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Simplicity:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1677,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Less Annoying CRM prides itself on its user-friendly design that makes it easy for small businesses to manage contacts and track leads without unnecessary complexity."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1678,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Customizability:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1682,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "The platform allows businesses to tailor the CRM to their specific needs, with customizable fields, layouts, and reports."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1683,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Collaboration features:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1687,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "The system is designed for team collaboration, allowing multiple users to share contacts, calendars, and notes."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1688,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Affordability:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1692,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "The CRM offers straightforward and low-cost pricing, making it an accessible solution for small businesses."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 1693,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true),
                    Pricing: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-black",
                            children: " $15/user/year"
                        }, void 0, false, {
                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                            lineNumber: 1701,
                            columnNumber: 15
                        }, this)
                    }, void 0, false)
                }
            }
        }
    };
    // Convert toolsContent object to array for mapping
    const toolsArray = Object.entries(toolsContent).map(([key, value])=>({
            id: key,
            ...value
        }));
    const faqData = [
        {
            question: "What is an example of a CRM program?",
            answer: "TSalesforce is a widely recognized CRM program that offers a variety of customer relationship management services."
        },
        {
            question: "What is the most popular CRM software?",
            answer: "ISalesforce is often considered the most popular CRM software due to its extensive features and widespread adoption across industries. But don’t let popularity keep you from checking out their competitors like Pipedrive and HubSpot. At a fraction of the cost and with a lot less work, they can provide a robust CRM system that will serve your business well."
        },
        {
            question: "What is CRM mainly used for?",
            answer: "CRM is primarily used for managing interactions with current and potential customers, streamlining processes, and improving profitability through organizing customer information and automating sales and marketing interactions."
        },
        {
            question: "Is Excel a CRM tool?",
            answer: "Excel is not a dedicated CRM tool; it is a spreadsheet application that can be used for basic data management but lacks the automation, integration, and analytics capabilities of specialized CRM software."
        },
        {
            question: "What is the point of having a CRM?",
            answer: `A CRM system helps businesses manage customer data, track interactions, and automate various marketing, sales, and customer service processes, leading to improved customer relationships and increased efficiency.`
        }
    ];
    const shareUrl = ("TURBOPACK compile-time truthy", 1) ? window.location.href : ("TURBOPACK unreachable", undefined);
    const shareTitle = "Best Project Management Software for 2025";
    const shareOnFacebook = ()=>{
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, "_blank");
    };
    const shareOnLinkedIn = ()=>{
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, "_blank");
    };
    const shareOnTwitter = ()=>{
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`, "_blank");
    };
    const crmData = [
        {
            id: 1,
            name: "HubSpot Sales Hub",
            image: "/images/hubspot.jpg",
            alt: "HubSpot Sales Hub",
            expertScore: 4.5,
            bestFor: "Best for integrations",
            visitUrl: "hubspot",
            keyFeatures: [
                "AI-driven lead scoring",
                "Bidirectional scoring",
                "Pipeline management"
            ],
            freeTrial: true,
            freeVersion: true
        },
        {
            id: 2,
            name: "Zoho CRM",
            image: "/images/zoho.jpg",
            alt: "Zoho CRM",
            expertScore: 4.5,
            bestFor: "Best for decentralized teams",
            visitUrl: "zoho",
            keyFeatures: [
                "SalesSignals",
                "Blueprint",
                "AI-powered sales assistant Zia"
            ],
            freeTrial: true,
            freeVersion: true
        },
        {
            id: 3,
            name: "Shape CRM",
            image: "/images/shapecrm.png",
            alt: "Shape CRM",
            expertScore: 4.4,
            bestFor: "Best for flexibility",
            visitUrl: "shape",
            keyFeatures: [
                "Industry-specific modules",
                "Dynamic data modeling",
                "Custom workflow automation"
            ],
            freeTrial: true,
            freeVersion: false
        },
        {
            id: 4,
            name: "Pipedrive",
            image: "/images/Pipedrive.jpg",
            alt: "Pipedrive",
            expertScore: 4.2,
            bestFor: "Best for pipeline management and optimization",
            visitUrl: "shape",
            keyFeatures: [
                "Streamlined lead routing",
                "Revenue Forecasting",
                "Smart contact management"
            ],
            freeTrial: true,
            freeVersion: false
        },
        {
            id: 5,
            name: "Salesforce Sales Cloud",
            image: "/images/salesforce.png",
            alt: "Salesforce Sales Cloud",
            expertScore: 4.0,
            bestFor: "Best CRM for enterprises",
            visitUrl: "shape",
            keyFeatures: [
                "360-degree customer view",
                "Einstein AI analytics",
                "Broad scalability"
            ],
            freeTrial: true,
            freeVersion: false
        },
        {
            id: 6,
            name: "Oracle Netsuite CRM",
            image: "/images/oracle.png",
            alt: "Oracle Netsuite CRM",
            expertScore: 4.0,
            bestFor: "Best all-in-one solutions",
            visitUrl: "shape",
            keyFeatures: [
                "Marketing automation",
                "Customer service management",
                "Advanced order management"
            ],
            freeTrial: true,
            freeVersion: false
        },
        {
            id: 7,
            name: "Insightly",
            image: "/images/insightly.png",
            alt: "Insightly",
            expertScore: 3.9,
            bestFor: "Best for easy-to-read analytics and reporting",
            visitUrl: "shape",
            keyFeatures: [
                "Advanced reporting",
                "Dashboard visualization",
                "Comprehensive forecasting"
            ],
            freeTrial: true,
            freeVersion: false
        },
        {
            id: 8,
            name: "Keap",
            image: "/images/keap.png",
            alt: "Keap",
            expertScore: 3.8,
            bestFor: "Best for sales and marketing synergy",
            visitUrl: "shape",
            keyFeatures: [
                "Smart client management",
                "Integrated appointments",
                "Pipeline automation"
            ],
            freeTrial: true,
            freeVersion: false
        },
        {
            id: 9,
            name: "Copper CRM",
            image: "/images/copper.png",
            alt: "Copper CRM",
            expertScore: 4.0,
            bestFor: "Best for security",
            visitUrl: "shape",
            keyFeatures: [
                "Google Workspace integration",
                "Robust security platform",
                "Automated data entry"
            ],
            freeTrial: true,
            freeVersion: false
        },
        {
            id: 10,
            name: "ClickUp",
            image: "/images/clickup.png",
            alt: "ClickUp",
            expertScore: 3.8,
            bestFor: "Best for project management",
            visitUrl: "shape",
            keyFeatures: [
                "Task and project management",
                "Collaboration detection",
                "Goal tracking"
            ],
            freeTrial: true,
            freeVersion: false
        },
        {
            id: 11,
            name: "Less Annoying CRM",
            image: "/images/salesforce.png",
            alt: "Less Annoying CRM",
            expertScore: 3.5,
            bestFor: "Best for simplicity",
            visitUrl: "shape",
            keyFeatures: [
                "Simple user interface",
                "Customizability",
                "Quite affordable"
            ],
            freeTrial: true,
            freeVersion: false
        }
    ];
    const renderStars = (score)=>{
        const stars = [];
        const fullStars = Math.floor(score);
        const hasHalfStar = score % 1 !== 0;
        for(let i = 0; i < fullStars; i++){
            stars.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5 text-yellow-400 fill-current",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                }, void 0, false, {
                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                    lineNumber: 1973,
                    columnNumber: 11
                }, this)
            }, i, false, {
                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                lineNumber: 1968,
                columnNumber: 9
            }, this));
        }
        if (hasHalfStar) {
            stars.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5 text-yellow-400 fill-current",
                viewBox: "0 0 24 24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "half",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "50%",
                                    stopColor: "currentColor"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                    lineNumber: 1987,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "50%",
                                    stopColor: "transparent"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                    lineNumber: 1988,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                            lineNumber: 1986,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                        lineNumber: 1985,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        fill: "url(#half)",
                        d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                        lineNumber: 1991,
                        columnNumber: 11
                    }, this)
                ]
            }, "half", true, {
                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                lineNumber: 1980,
                columnNumber: 9
            }, this));
        }
        return stars;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        children: "Best CRM Software for 2025 | Complete Guide"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                        lineNumber: 2005,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Comprehensive guide to choosing the best CRM software for your business needs."
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                        lineNumber: 2006,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:title",
                        content: "Best CRM Software for 2025"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                        lineNumber: 2012,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:description",
                        content: "Comprehensive guide to choosing the best CRM software for your business needs."
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                        lineNumber: 2016,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:image",
                        content: "https://blogs.compare-bazaar.com/images/blog3.webp"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                        lineNumber: 2020,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:image:width",
                        content: "1200"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                        lineNumber: 2024,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:image:height",
                        content: "627"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                        lineNumber: 2025,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:url",
                        content: "https://technology-advice.vercel.app/software-reviews/project-management"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                        lineNumber: 2026,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:type",
                        content: "article"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                        lineNumber: 2030,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:site_name",
                        content: "Technology Advice"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                        lineNumber: 2031,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                        lineNumber: 2034,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:title",
                        content: "Best CRM Software for 2025"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                        lineNumber: 2035,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:description",
                        content: "Comprehensive guide to choosing the best CRM software for your business needs."
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                        lineNumber: 2039,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:image",
                        content: "https://blogs.compare-bazaar.com/images/blog3.webp"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                        lineNumber: 2043,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "canonical",
                        href: "https://technology-advice.vercel.app/software-reviews/project-management"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                        lineNumber: 2048,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                lineNumber: 2004,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-[#0E1F1C] text-white relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-20 right-10 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 border border-white/10 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                        lineNumber: 2056,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-40 right-20 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border border-white/5 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                        lineNumber: 2057,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-20 left-10 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 border border-white/5 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                        lineNumber: 2058,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "pt-6 pb-8 sm:pt-8 sm:pb-12 lg:pt-12 lg:pb-16",
                                "aria-label": "Breadcrumb",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base lg:text-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            className: "text-white/80 hover:text-white transition-colors group",
                                            "aria-label": "Go to homepage",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                                className: "w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                lineNumber: 2073,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                            lineNumber: 2068,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            className: "text-white/80 hover:text-white transition-colors cursor-pointer",
                                            "aria-label": "Go to homepage",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Home"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                lineNumber: 2080,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                            lineNumber: 2075,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white/60",
                                            children: "›"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                            lineNumber: 2082,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white font-medium",
                                            children: "CRM"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                            lineNumber: 2083,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                    lineNumber: 2067,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 2063,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-6xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 sm:mb-12 lg:mb-16",
                                    children: [
                                        "Best CRM Software",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block mt-2 sm:mt-4",
                                            children: "2025"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                            lineNumber: 2091,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                    lineNumber: 2089,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 2088,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-4xl xl:max-w-5xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start space-x-3 sm:space-x-4 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                            className: "w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-400 flex-shrink-0 mt-0.5 sm:mt-1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                            lineNumber: 2100,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm sm:text-base lg:text-lg leading-relaxed text-white/90",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-white",
                                                        children: "Technology Advice"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                        lineNumber: 2103,
                                                        columnNumber: 19
                                                    }, this),
                                                    " ",
                                                    "is able to offer our services for free because some vendors may pay us for web traffic or other sales opportunities. Our mission is to help technology buyers make better purchasing decisions, so we provide you with information for all vendors — even those that don't pay us."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                lineNumber: 2102,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                            lineNumber: 2101,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                    lineNumber: 2099,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 2098,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                        lineNumber: 2061,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                lineNumber: 2054,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-gray-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  py-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col lg:flex-row gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                            lineNumber: 2131,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                            className: "space-y-2",
                                            children: tableOfContents.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `#${item.id}`,
                                                    className: `block py-2 px-3 rounded-md text-sm transition-colors duration-200 ${item.active ? "bg-[#386861] text-white border-l-4 border-[#386861] font-medium" : "text-gray-600 hover:text-black hover:bg-gray-100"}`,
                                                    children: item.title
                                                }, index, false, {
                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                    lineNumber: 2136,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                            lineNumber: 2134,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-8 pt-6 border-t border-gray-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-gray-900 mb-4",
                                                    children: "Share this article"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                    lineNumber: 2152,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex space-x-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: shareOnFacebook,
                                                            className: "w-12 h-12 rounded-full bg-[#386861] text-white flex items-center justify-center hover:bg-blue-700 transition-colors duration-200",
                                                            "aria-label": "Share on Facebook",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-5 h-5",
                                                                fill: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 2166,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                lineNumber: 2161,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 2156,
                                                            columnNumber: 21
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
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 2179,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                lineNumber: 2174,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 2169,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: shareOnTwitter,
                                                            className: "w-12 h-12 rounded-full bg-[#386861] text-white flex items-center justify-center hover:bg-blue-800 transition-colors duration-200",
                                                            "aria-label": "Share on X (Twitter)",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-4 h-4",
                                                                fill: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 2192,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                lineNumber: 2187,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 2182,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                    lineNumber: 2155,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                            lineNumber: 2151,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                    lineNumber: 2127,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 2126,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 max-w-4xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        id: "what-is-pm-software",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 transition-shadow duration-300 overflow-hidden p-6 sm:p-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                                    className: "mb-8",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "text-3xl sm:text-4xl font-bold text-gray-900 mb-4",
                                                        children: "CRM Software"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                        lineNumber: 2207,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                    lineNumber: 2206,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "prose prose-lg max-w-none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 leading-relaxed mb-6",
                                                            children: "CRM software manages and analyzes business contact and customer information by storing and organizing it effectively. Sales, marketing, and customer service teams use the CRM platform to automate the gathering and structuring of data related to customers, leads, partners, and crucial business relationships."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 2214,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 leading-relaxed mb-8",
                                                            children: "The processes and systems that help  improve a business’s relationships with their contacts may also be called customer relationship management.."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 2223,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 leading-relaxed mb-6",
                                                            children: "Below, we have scored and ranked some of the top CRM solutions in the market. Each has its own unique features and functions that make them best suited to various use cases."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 2227,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-3 mb-8",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-start space-x-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                className: "w-3 h-3 text-[#386861]",
                                                                                fill: "currentColor",
                                                                                viewBox: "0 0 20 20",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    fillRule: "evenodd",
                                                                                    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                                                    clipRule: "evenodd"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 2243,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 2238,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 2237,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-gray-700",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                    href: "#",
                                                                                    className: "text-[#386861] hover:text-green-700 font-medium underline",
                                                                                    children: "HubSpot Sales Hub:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 2251,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                " ",
                                                                                "Best for integrations"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 2250,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 2236,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-start space-x-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                className: "w-3 h-3 text-[#386861]",
                                                                                fill: "currentColor",
                                                                                viewBox: "0 0 20 20",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    fillRule: "evenodd",
                                                                                    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                                                    clipRule: "evenodd"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 2267,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 2262,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 2261,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-gray-700",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                    href: "#",
                                                                                    className: "text-[#386861] hover:text-green-700 font-medium underline",
                                                                                    children: "Zoho CRM:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 2275,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                " ",
                                                                                "Best for decentralized teams"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 2274,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 2260,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-start space-x-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                className: "w-3 h-3 text-[#386861]",
                                                                                fill: "currentColor",
                                                                                viewBox: "0 0 20 20",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    fillRule: "evenodd",
                                                                                    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                                                    clipRule: "evenodd"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 2291,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 2286,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 2285,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-gray-700",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                    href: "#",
                                                                                    className: "text-[#386861] hover:text-green-700 font-medium underline",
                                                                                    children: "Shape CRM:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 2299,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                " ",
                                                                                "Best for flexibility"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 2298,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 2284,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-start space-x-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                className: "w-3 h-3 text-[#386861]",
                                                                                fill: "currentColor",
                                                                                viewBox: "0 0 20 20",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    fillRule: "evenodd",
                                                                                    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                                                    clipRule: "evenodd"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 2315,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 2310,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 2309,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-gray-700",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                    href: "#",
                                                                                    className: "text-[#386861] hover:text-green-700 font-medium underline",
                                                                                    children: "Pipedrive:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 2323,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                " ",
                                                                                "Best for pipeline management and optimization"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 2322,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 2308,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-start space-x-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                className: "w-3 h-3 text-[#386861]",
                                                                                fill: "currentColor",
                                                                                viewBox: "0 0 20 20",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    fillRule: "evenodd",
                                                                                    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                                                    clipRule: "evenodd"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 2339,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 2334,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 2333,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-gray-700",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                    href: "#",
                                                                                    className: "text-[#386861] hover:text-green-700 font-medium underline",
                                                                                    children: "Salesforce Sales Cloud:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 2347,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                " ",
                                                                                "Best CRM for enterprises"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 2346,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 2332,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-start space-x-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                className: "w-3 h-3 text-[#386861]",
                                                                                fill: "currentColor",
                                                                                viewBox: "0 0 20 20",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    fillRule: "evenodd",
                                                                                    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                                                    clipRule: "evenodd"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 2363,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 2358,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 2357,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-gray-700",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                    href: "#",
                                                                                    className: "text-[#386861] hover:text-green-700 font-medium underline",
                                                                                    children: "Oracle NetSuite CRM:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 2371,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                " ",
                                                                                "Best all-in-one solution"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 2370,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 2356,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-start space-x-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                className: "w-3 h-3 text-[#386861]",
                                                                                fill: "currentColor",
                                                                                viewBox: "0 0 20 20",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    fillRule: "evenodd",
                                                                                    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                                                    clipRule: "evenodd"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 2387,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 2382,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 2381,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-gray-700",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                    href: "#",
                                                                                    className: "text-[#386861] hover:text-green-700 font-medium underline",
                                                                                    children: "Insightly CRM:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 2395,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                " ",
                                                                                "Best for easy-to-read analytics and reporting"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 2394,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 2380,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-start space-x-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                className: "w-3 h-3 text-[#386861]",
                                                                                fill: "currentColor",
                                                                                viewBox: "0 0 20 20",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    fillRule: "evenodd",
                                                                                    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                                                    clipRule: "evenodd"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 2411,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 2406,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 2405,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-gray-700",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                    href: "#",
                                                                                    className: "text-[#386861] hover:text-green-700 font-medium underline",
                                                                                    children: "Keap CRM:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 2419,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                " ",
                                                                                "Best for sales and marketing synergy"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 2418,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 2404,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-start space-x-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                className: "w-3 h-3 text-[#386861]",
                                                                                fill: "currentColor",
                                                                                viewBox: "0 0 20 20",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    fillRule: "evenodd",
                                                                                    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                                                    clipRule: "evenodd"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 2435,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 2430,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 2429,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-gray-700",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                    href: "#",
                                                                                    className: "text-[#386861] hover:text-green-700 font-medium underline",
                                                                                    children: "Copper CRM"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 2443,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                " ",
                                                                                "Best for security"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 2442,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 2428,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-start space-x-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                className: "w-3 h-3 text-[#386861]",
                                                                                fill: "currentColor",
                                                                                viewBox: "0 0 20 20",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    fillRule: "evenodd",
                                                                                    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                                                    clipRule: "evenodd"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 2459,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 2454,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 2453,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-gray-700",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                    href: "#",
                                                                                    className: "text-[#386861] hover:text-green-700 font-medium underline",
                                                                                    children: "ClickUp:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 2467,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                " ",
                                                                                "Best for project management"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 2466,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 2452,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-start space-x-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                className: "w-3 h-3 text-[#386861]",
                                                                                fill: "currentColor",
                                                                                viewBox: "0 0 20 20",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    fillRule: "evenodd",
                                                                                    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                                                    clipRule: "evenodd"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 2483,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 2478,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 2477,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-gray-700",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                    href: "#",
                                                                                    className: "text-[#386861] hover:text-green-700 font-medium underline",
                                                                                    children: "Less Annoying CRM:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 2491,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                " ",
                                                                                "BBest for simplicity"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 2490,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 2476,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 2235,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                    lineNumber: 2213,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                            lineNumber: 2204,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 2203,
                                        columnNumber: 15
                                    }, this),
                                    "Featured Partners Section",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 transition-shadow duration-300 overflow-hidden p-6 sm:p-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-2xl font-bold text-gray-900",
                                                        children: "Featured partners"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                        lineNumber: 2507,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center space-x-2 text-sm text-gray-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Advertisement"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                lineNumber: 2511,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-4 h-4 rounded-full bg-gray-400 flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-white  font-bold",
                                                                    children: "i"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 2513,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                lineNumber: 2512,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                        lineNumber: 2510,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                lineNumber: 2506,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gray-50 rounded-lg p-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center space-x-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex  space-x-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded flex items-center justify-center",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-white font-bold text-sm",
                                                                                children: "Z"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 2523,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 2522,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xl font-bold text-gray-900",
                                                                            children: [
                                                                                "Zoho",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 2529,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-lg",
                                                                                    children: "Projects"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 2530,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 2527,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 2521,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                lineNumber: 2520,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-full sm:w-auto",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "w-full sm:w-auto bg-[#386861] hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Visit Website"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 2536,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 2537,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 2535,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                lineNumber: 2534,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                        lineNumber: 2519,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-gray-600 mb-1",
                                                                        children: "Good For"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 2544,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-medium text-gray-900",
                                                                        children: "Any Company Size"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 2545,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                lineNumber: 2543,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-gray-600 mb-1",
                                                                        children: "Core Features"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 2550,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-medium text-gray-900",
                                                                        children: "Agile Development, Analytics / Reports, API, and 15 more"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 2551,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                lineNumber: 2549,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-gray-600 mb-1",
                                                                        children: "Integrations"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 2556,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-medium text-gray-900",
                                                                        children: "BitBucket, GitHub, Google Calendar, and 7 more"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 2557,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                lineNumber: 2555,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                        lineNumber: 2542,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                lineNumber: 2518,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 2505,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        id: "CRM-recommendations",
                                        className: "mt-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center mb-8 sm:mb-12",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                            className: "text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4",
                                                            children: "Our top 11 CRM recommendations"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 2567,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 2570,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                    lineNumber: 2566,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "overflow-x-auto",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                            className: "w-full min-w-full",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        className: "border-b border-gray-200 bg-gray-50",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "text-left py-3 sm:py-6 px-2 sm:px-8 font-semibold text-gray-700 text-sm sm:text-lg",
                                                                                children: "CRM Platform"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 2579,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "text-center py-3 sm:py-6 px-2 sm:px-6 font-semibold text-gray-700 text-sm sm:text-lg",
                                                                                children: "Expert Score"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 2582,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "text-center py-3 sm:py-6 px-2 sm:px-6 font-semibold text-gray-700 text-sm sm:text-lg",
                                                                                children: "Best for"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 2585,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "text-center py-3 sm:py-6 px-2 sm:px-6 font-semibold text-gray-700 text-sm sm:text-lg",
                                                                                children: "Key Features"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 2588,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "text-center py-3 sm:py-6 px-2 sm:px-6 font-semibold text-gray-700 text-sm sm:text-lg",
                                                                                children: "Free Trial"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 2591,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "text-center py-3 sm:py-6 px-2 sm:px-6 font-semibold text-gray-700 text-sm sm:text-lg",
                                                                                children: "Free Version"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 2594,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "text-center py-3 sm:py-6 px-2 sm:px-8 font-semibold text-gray-700 text-sm sm:text-lg",
                                                                                children: "Action"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 2597,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 2578,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 2577,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                    children: crmData.map((crm, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                            className: `border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 ${index % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "py-4 sm:py-8 px-2 sm:px-8",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "w-16 h-8 sm:w-32 sm:h-12 bg-white rounded-lg shadow-md flex items-center justify-center overflow-hidden flex-shrink-0",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                                    src: crm.image,
                                                                                                    alt: crm.alt,
                                                                                                    className: "w-full h-full object-contain"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                                    lineNumber: 2613,
                                                                                                    columnNumber: 37
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                                lineNumber: 2612,
                                                                                                columnNumber: 35
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "text-center sm:text-left",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "font-medium text-gray-800 text-xs sm:text-base",
                                                                                                    children: crm.name
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                                    lineNumber: 2620,
                                                                                                    columnNumber: 37
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                                lineNumber: 2619,
                                                                                                columnNumber: 35
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                        lineNumber: 2611,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 2610,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "py-4 sm:py-8 px-2 sm:px-6 text-center",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex flex-col items-center space-y-1 sm:space-y-2",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "text-lg sm:text-2xl font-bold text-gray-800",
                                                                                                children: crm.expertScore
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                                lineNumber: 2628,
                                                                                                columnNumber: 35
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "flex space-x-1 scale-75 sm:scale-100",
                                                                                                children: renderStars(crm.expertScore)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                                lineNumber: 2631,
                                                                                                columnNumber: 35
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                        lineNumber: 2627,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 2626,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "py-4 sm:py-8 px-2 sm:px-6 text-center",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "inline-block bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium",
                                                                                        children: crm.bestFor
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                        lineNumber: 2637,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 2636,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "py-4 sm:py-8 px-2 sm:px-6",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                        className: "space-y-1 sm:space-y-2",
                                                                                        children: crm.keyFeatures.map((feature, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                className: "text-xs sm:text-sm text-gray-600 flex items-start sm:items-center",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2 sm:mr-3 flex-shrink-0 mt-1.5 sm:mt-0"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                                        lineNumber: 2648,
                                                                                                        columnNumber: 39
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                        className: "leading-tight sm:leading-normal",
                                                                                                        children: feature
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                                        lineNumber: 2649,
                                                                                                        columnNumber: 39
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, idx, true, {
                                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                                lineNumber: 2644,
                                                                                                columnNumber: 37
                                                                                            }, this))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                        lineNumber: 2642,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 2641,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "py-4 sm:py-8 px-2 sm:px-6 text-center",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex justify-center",
                                                                                        children: crm.freeTrial ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                                className: "w-3 h-3 sm:w-5 sm:h-5 text-[#386861]"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                                lineNumber: 2660,
                                                                                                columnNumber: 39
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                            lineNumber: 2659,
                                                                                            columnNumber: 37
                                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "w-6 h-6 sm:w-8 sm:h-8 bg-red-100 rounded-full flex items-center justify-center",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                                className: "w-3 h-3 sm:w-5 sm:h-5 text-red-600"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                                lineNumber: 2664,
                                                                                                columnNumber: 39
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                            lineNumber: 2663,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                        lineNumber: 2657,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 2656,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "py-4 sm:py-8 px-2 sm:px-6 text-center",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex justify-center",
                                                                                        children: crm.freeVersion ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                                className: "w-3 h-3 sm:w-5 sm:h-5 text-[#386861]"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                                lineNumber: 2673,
                                                                                                columnNumber: 39
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                            lineNumber: 2672,
                                                                                            columnNumber: 37
                                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "w-6 h-6 sm:w-8 sm:h-8 bg-red-100 rounded-full flex items-center justify-center",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                                className: "w-3 h-3 sm:w-5 sm:h-5 text-red-600"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                                lineNumber: 2677,
                                                                                                columnNumber: 39
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                            lineNumber: 2676,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                        lineNumber: 2670,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 2669,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "py-4 sm:py-8 px-2 sm:px-8",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        className: "w-full sm:w-auto bg-[#386861] hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                children: "Visit Website"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                                lineNumber: 2684,
                                                                                                columnNumber: 35
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                                                className: "w-3 h-3 sm:w-4 sm:h-4"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                                lineNumber: 2685,
                                                                                                columnNumber: 35
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                        lineNumber: 2683,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 2682,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, crm.id, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 2604,
                                                                            columnNumber: 29
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 2602,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 2576,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                        lineNumber: 2575,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                    lineNumber: 2574,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center mt-12",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600 text-sm",
                                                        children: "* Scores and recommendations are based on expert analysis and user reviews"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                        lineNumber: 2696,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                    lineNumber: 2695,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                            lineNumber: 2565,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 2564,
                                        columnNumber: 15
                                    }, this),
                                    toolsArray.map((tool)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-2xl sm:rounded-3xl border mt-4  border-gray-200  p-6 mb-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: tool.logo,
                                                                        alt: `${tool.title} logo`,
                                                                        width: 48,
                                                                        height: 48,
                                                                        className: "object-contain"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 2725,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 2724,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                    className: "text-2xl font-bold text-black",
                                                                    children: tool.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 2733,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 2723,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: tool.button.link,
                                                            className: "bg-[#386861] text-white px-4 py-2 rounded-full text-sm hover:bg-green-700",
                                                            children: tool.button.text
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 2737,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                    lineNumber: 2722,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4 text-black mb-6",
                                                    children: tool.scores.map((score, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between text-sm font-medium mb-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: score.label
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 2750,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: score.score
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 2751,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 2749,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-full bg-gray-100 rounded-full h-2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "bg-[#386861] h-2 rounded-full",
                                                                        style: {
                                                                            width: `${parseFloat(score.score) / 5 * 100}%`
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 2754,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 2753,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 2748,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                    lineNumber: 2746,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid md:grid-cols-2 text-black gap-6 mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-lg font-semibold mb-2",
                                                                    children: "Pros"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 2770,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "list-disc pl-5 space-y-1",
                                                                    children: tool.pros.map((pro, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: pro
                                                                        }, index, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 2773,
                                                                            columnNumber: 29
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 2771,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 2769,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-lg font-semibold mb-2",
                                                                    children: "Cons"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 2778,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "list-disc pl-5 space-y-1",
                                                                    children: tool.cons.map((con, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: con
                                                                        }, index, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 2781,
                                                                            columnNumber: 29
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 2779,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 2777,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                    lineNumber: 2768,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-6 text-black",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg font-semibold mb-2",
                                                            children: [
                                                                "Why I chose ",
                                                                tool.title.split(":")[0]
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 2789,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mb-4",
                                                            children: tool.why.intro
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 2792,
                                                            columnNumber: 23
                                                        }, this),
                                                        tool.why.bullets && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "list-disc pl-5 space-y-1 mb-4",
                                                            children: tool.why.bullets.map((bullet, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: bullet
                                                                }, index, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 2796,
                                                                    columnNumber: 29
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 2794,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: tool.why.outro
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 2800,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                    lineNumber: 2788,
                                                    columnNumber: 21
                                                }, this),
                                                tool.why.extras && Object.entries(tool.why.extras).map(([label, content])=>{
                                                    const sectionKey = `${tool.id}-${label}`;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border-t text-black pt-4 mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>toggleSection(sectionKey),
                                                                className: "w-full flex justify-between items-center font-medium",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 2817,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[#386861]",
                                                                        children: openSections[sectionKey] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                                            className: "w-5 h-5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 2820,
                                                                            columnNumber: 37
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                            className: "w-5 h-5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 2822,
                                                                            columnNumber: 37
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 2818,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                lineNumber: 2813,
                                                                columnNumber: 31
                                                            }, this),
                                                            openSections[sectionKey] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-2 text-gray-700",
                                                                children: typeof content === "string" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: content
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 2829,
                                                                    columnNumber: 37
                                                                }, this) : content
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                lineNumber: 2827,
                                                                columnNumber: 33
                                                            }, this)
                                                        ]
                                                    }, sectionKey, true, {
                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                        lineNumber: 2809,
                                                        columnNumber: 29
                                                    }, this);
                                                })
                                            ]
                                        }, tool.id, true, {
                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                            lineNumber: 2717,
                                            columnNumber: 19
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        id: "new-CRM-software",
                                        className: "mt-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-6  md:p-8 lg:p-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-3 sm:gap-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-shrink-0",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                src: "/images/1CRM.png" // Replace with your actual logo path
                                                                                ,
                                                                                alt: "1CRM Logo",
                                                                                width: 80,
                                                                                height: 80,
                                                                                className: "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain",
                                                                                priority: true
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 2851,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 2850,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "min-w-0 flex-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                                    className: "text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2",
                                                                                    children: "1CRM"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 2863,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    href: "/reviews/zoho-projects",
                                                                                    className: "text-sm sm:text-base md:text-lg text-[#386861] hover:text-blue-800 hover:underline transition-colors duration-200 font-medium",
                                                                                    children: "Leave a Review"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 2866,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 2862,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 2848,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-shrink-0",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-[#386861] hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 2878,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            "Compare"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 2877,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 2876,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 2847,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-6 sm:mb-8",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-semibold text-gray-700",
                                                                        children: "Good for:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 2887,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-wrap items-center gap-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-gray-600",
                                                                                children: "Medium (250-999 Employees),"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 2891,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-gray-600",
                                                                                children: "Enterprise (5,000+ Employees),"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 2894,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-gray-600",
                                                                                children: "Large (1,000-4,999 Employees),"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 2897,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 2890,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                lineNumber: 2886,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 2885,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-6 sm:mb-8",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6",
                                                                    children: "Founded in 1997 and headquartered in Victoria, Canada, 1CRM develops an eponymous customer relationship management (CRM) tool. The 1CRM system helps its clients provide better online information to their customers while streamlining internal business processes and improving their cost model. 1CRM offers both an on-premise solution and a cloud-based service"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 2906,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "/learn-more/zoho-projects",
                                                                    className: "text-sm sm:text-base md:text-lg text-[#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-semibold",
                                                                    children: "Learn More About 1CRM"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 2916,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 2905,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-end",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "https://www.1crm.com/",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-[#386861] hover:bg-green-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group",
                                                                children: [
                                                                    "Visit Website",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                        className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 2933,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                lineNumber: 2926,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 2925,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                    lineNumber: 2846,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                lineNumber: 2845,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-6  md:p-8 lg:p-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-3 sm:gap-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-shrink-0",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                src: "/images/4Degrees.png" // Replace with your actual logo path
                                                                                ,
                                                                                alt: "4Degrees Logo",
                                                                                width: 80,
                                                                                height: 80,
                                                                                className: "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain",
                                                                                priority: true
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 2946,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 2945,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "min-w-0 flex-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                                    className: "text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2",
                                                                                    children: "4Degrees"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 2958,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    href: "/reviews/zoho-projects",
                                                                                    className: "text-sm sm:text-base md:text-lg text-[#386861] hover:text-blue-800 hover:underline transition-colors duration-200 font-medium",
                                                                                    children: "Leave a Review"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 2961,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 2957,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 2943,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-shrink-0",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-[#386861] hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 2973,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            "Compare"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 2972,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 2971,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 2942,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-6 sm:mb-8",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-semibold text-gray-700",
                                                                        children: "Good for:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 2982,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-wrap items-center gap-1",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-gray-600",
                                                                            children: "Any company size"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 2986,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 2985,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                lineNumber: 2981,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 2980,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-6 sm:mb-8",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6",
                                                                    children: "4Degrees is a cloud-based customer relationship management (CRM) solution, which helps businesses leverage their relationships. 4Degrees integrates into email, calendar, and a number of third party data sources to automatically populate a team's relationship network, minimize data entry about the people and companies in that network, and suggests ways to engage that network over time."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 2995,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "/learn-more/zoho-projects",
                                                                    className: "text-sm sm:text-base md:text-lg text-[#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-semibold",
                                                                    children: "Learn More About 4Degrees"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 3006,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 2994,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-end",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "https://www.4degrees.com/",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-[#386861] hover:bg-green-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group",
                                                                children: [
                                                                    "Visit Website",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                        className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 3023,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                lineNumber: 3016,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 3015,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                    lineNumber: 2941,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                lineNumber: 2940,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-6  md:p-8 lg:p-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-3 sm:gap-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-shrink-0",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                src: "/images/Aarialife.png" // Replace with your actual logo path
                                                                                ,
                                                                                alt: " 2Aarialife Technologies Logo",
                                                                                width: 80,
                                                                                height: 80,
                                                                                className: "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain",
                                                                                priority: true
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 3036,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 3035,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "min-w-0 flex-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                                    className: "text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2",
                                                                                    children: "Aarialife Technologies - A Zoho CRM Provider"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 3048,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    href: "/reviews/zoho-projects",
                                                                                    className: "text-sm sm:text-base md:text-lg text-[#386861] hover:text-blue-800 hover:underline transition-colors duration-200 font-medium",
                                                                                    children: "Leave a Review"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 3051,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 3047,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 3033,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-shrink-0",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-[#386861] hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 3063,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            "Compare"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 3062,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 3061,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 3032,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-6 sm:mb-8",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-semibold text-gray-700",
                                                                        children: "Good for:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 3072,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-wrap items-center gap-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-gray-600",
                                                                                children: "Medium (250-999 Employees),"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 3076,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-gray-600",
                                                                                children: "Large (1,000-4,999 Employees),"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 3080,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 3075,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                lineNumber: 3071,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 3070,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-6 sm:mb-8",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6",
                                                                    children: "Aarialife is a Zoho Premium Partner and has the knowledge, skills, and competency to consult and help implement a highly-customized solution to meet various customer's business and sales automation needs, while suggesting leading practices."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 3089,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "/learn-more/24SevenOffice",
                                                                    className: "text-sm sm:text-base md:text-lg text-[#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-semibold",
                                                                    children: "Learn More About Aarialife Technologies"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 3097,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 3088,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-end",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "https://www.aarialife.com/",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-[#386861] hover:bg-green-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group",
                                                                children: [
                                                                    "Visit Website",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                        className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 3114,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                lineNumber: 3107,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 3106,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                    lineNumber: 3031,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                lineNumber: 3030,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-6  md:p-8 lg:p-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-3 sm:gap-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-shrink-0",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                src: "/images/accelo.png" // Replace with your actual logo path
                                                                                ,
                                                                                alt: "Accelo Logo",
                                                                                width: 80,
                                                                                height: 80,
                                                                                className: "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain",
                                                                                priority: true
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 3127,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 3126,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "min-w-0 flex-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                                    className: "text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2",
                                                                                    children: "Accelo"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 3139,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    href: "/reviews/zoho-projects",
                                                                                    className: "text-sm sm:text-base md:text-lg text-[#386861]hover:text-blue-800 hover:underline transition-colors duration-200 font-medium",
                                                                                    children: "Leave a Review"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 3142,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 3138,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 3124,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-shrink-0",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-[#386861] hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 3154,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            "Compare"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 3153,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 3152,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 3123,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-6 sm:mb-8",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-semibold text-gray-700",
                                                                        children: "Good for:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 3163,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-wrap items-center gap-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-gray-600",
                                                                                children: "Medium (250-999 Employees),"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 3167,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-gray-600",
                                                                                children: "Large (1,000-4,999 Employees),"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 3171,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-gray-600",
                                                                                children: "Small (50-249 Employees)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 3174,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 3166,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                lineNumber: 3162,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 3161,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-6 sm:mb-8",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6",
                                                                    children: "Accelo is a comprehensive Professional Services Automation (PSA) platform designed to help service organizations streamline operations, manage projects, and improve profitability. By centralizing business processes, it provides full visibility, real-time insights, and automation, helping teams deliver work more efficiently and detect issues early. Accelo supports scalability and enables growth with integrated solutions for project, client, and financial management from quote-to-cash."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 3183,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "/learn-more/4castplus",
                                                                    className: "text-sm sm:text-base md:text-lg text-[#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-semibold",
                                                                    children: "Learn More About Accelo"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 3196,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 3182,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-end",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "https://www.accelo.com/",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-[#386861] hover:bg-green-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group",
                                                                children: [
                                                                    "Visit Website",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                        className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 3213,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                lineNumber: 3206,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 3205,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                    lineNumber: 3122,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                lineNumber: 3121,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-6  md:p-8 lg:p-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-3 sm:gap-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-shrink-0",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                src: "/images/Affinaquest.png" // Replace with your actual logo path
                                                                                ,
                                                                                alt: "Affinaquest Logo",
                                                                                width: 80,
                                                                                height: 80,
                                                                                className: "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain",
                                                                                priority: true
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 3226,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 3225,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "min-w-0 flex-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                                    className: "text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2",
                                                                                    children: "5day.io"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 3238,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    href: "/reviews/zoho-projects",
                                                                                    className: "text-sm sm:text-base md:text-lg text-[#386861] hover:text-blue-800 hover:underline transition-colors duration-200 font-medium",
                                                                                    children: "Leave a Review"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 3241,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 3237,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 3223,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-shrink-0",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-[#386861] hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 3253,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            "Compare"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 3252,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 3251,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 3222,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-6 sm:mb-8",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-semibold text-gray-700",
                                                                        children: "Good for:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 3262,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-wrap items-center gap-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-gray-600",
                                                                                children: "Medium (250-999 Employees),"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 3266,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-gray-600",
                                                                                children: "Enterprise (5,000+ Employees),"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 3269,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-gray-600",
                                                                                children: "Large (1,000-4,999 Employees)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 3272,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 3265,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                lineNumber: 3261,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 3260,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-6 sm:mb-8",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6",
                                                                    children: "Affinaquest is a full-featured customer relationship management (CRM) system built specifically for nonprofit organizations."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 3281,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "/learn-more/5day-io",
                                                                    className: "text-sm sm:text-base md:text-lg text-[#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-semibold",
                                                                    children: "Learn More About Affinaquest"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 3287,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 3280,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-end",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "https://www.affinaquest.com/",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-[#386861] hover:bg-green-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group",
                                                                children: [
                                                                    "Visit Website",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                        className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 3304,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                lineNumber: 3297,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 3296,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                    lineNumber: 3221,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                lineNumber: 3220,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-6  md:p-8 lg:p-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-3 sm:gap-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-shrink-0",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                src: "/images/Affinity.jpg" // Replace with your actual logo path
                                                                                ,
                                                                                alt: "Affinity Logo",
                                                                                width: 80,
                                                                                height: 80,
                                                                                className: "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain",
                                                                                priority: true
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 3317,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 3316,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "min-w-0 flex-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                                    className: "text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2",
                                                                                    children: "Affinity"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 3329,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    href: "/reviews/zoho-projects",
                                                                                    className: "text-sm sm:text-base md:text-lg text-[#386861]hover:text-blue-800 hover:underline transition-colors duration-200 font-medium",
                                                                                    children: "Leave a Review"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 3332,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 3328,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 3314,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-shrink-0",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-[#386861] hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 3344,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            "Compare"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 3343,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 3342,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 3313,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-6 sm:mb-8",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-semibold text-gray-700",
                                                                        children: "Good for:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 3353,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-wrap items-center gap-1",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-gray-600",
                                                                            children: "Any company size"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 3357,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 3356,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                lineNumber: 3352,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 3351,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-6 sm:mb-8",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6",
                                                                    children: "Affinity is a relationship intelligence platform enabling teams to leverage their network and close deals. Using patent-pending technology, Affinity allows teams to manage relationships by auto-populating the pipeline and allowing introductions to decision makers."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 3366,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "/learn-more/zoho-projects",
                                                                    className: "text-sm sm:text-base md:text-lg text-[#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-semibold",
                                                                    children: "Learn More About Affinity"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 3374,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 3365,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-end",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "https://www.affinity.co/",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-[#386861] hover:bg-green-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group",
                                                                children: [
                                                                    "Visit Website",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                        className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 3391,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                lineNumber: 3384,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 3383,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                    lineNumber: 3312,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                lineNumber: 3311,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-6  md:p-8 lg:p-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-3 sm:gap-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-shrink-0",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                src: "/images/AgencyBloc.png" // Replace with your actual logo path
                                                                                ,
                                                                                alt: "AgencyBloc Logo",
                                                                                width: 80,
                                                                                height: 80,
                                                                                className: "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain",
                                                                                priority: true
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 3404,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 3403,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "min-w-0 flex-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                                    className: "text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2",
                                                                                    children: "AgencyBloc"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 3416,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    href: "/reviews/zoho-projects",
                                                                                    className: "text-sm sm:text-base md:text-lg text-[#386861] hover:text-blue-800 hover:underline transition-colors duration-200 font-medium",
                                                                                    children: "Leave a Review"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 3419,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 3415,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 3401,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-shrink-0",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-[#386861] hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 3431,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            "Compare"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 3430,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 3429,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 3400,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-6 sm:mb-8",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-semibold text-gray-700",
                                                                        children: "Good for:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 3440,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-wrap items-center gap-1",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-gray-600",
                                                                            children: "Any company size"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 3444,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 3443,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                lineNumber: 3439,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 3438,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-6 sm:mb-8",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6",
                                                                    children: "AgencyBloc is an agency management system that helps life and health insurance agencies grow their business by organizing and automating their operations using a combination of an industry-specific CRM, commissions processing, and integrated marketing automation. AgencyBloc’s mission is to provide powerful solutions by making the convoluted straightforward."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 3453,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "/learn-more/zoho-projects",
                                                                    className: "text-sm sm:text-base md:text-lg text-[#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-semibold",
                                                                    children: "Learn More About AgencyBloc"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 3463,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 3452,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-end",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "https://www.agencybloc.com/",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-[#386861] hover:bg-green-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group",
                                                                children: [
                                                                    "Visit Website",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                        className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 3480,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                lineNumber: 3473,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 3472,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                    lineNumber: 3399,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                lineNumber: 3398,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-6  md:p-8 lg:p-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-3 sm:gap-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-shrink-0",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                src: "/images/AgentCubed.jpg" // Replace with your actual logo path
                                                                                ,
                                                                                alt: "AgentCubed Logo",
                                                                                width: 80,
                                                                                height: 80,
                                                                                className: "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain",
                                                                                priority: true
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 3493,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 3492,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "min-w-0 flex-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                                    className: "text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2",
                                                                                    children: "AgentCubed"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 3505,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    href: "/reviews/zoho-projects",
                                                                                    className: "text-sm sm:text-base md:text-lg text-[#386861]hover:text-blue-800 hover:underline transition-colors duration-200 font-medium",
                                                                                    children: "Leave a Review"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 3508,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 3504,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 3490,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-shrink-0",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-[#386861] hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 3520,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            "Compare"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 3519,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 3518,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 3489,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-6 sm:mb-8",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-semibold text-gray-700",
                                                                        children: "Good for:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 3529,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-wrap items-center gap-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-gray-600",
                                                                                children: "Medium (250-999 Employees),"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 3533,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-gray-600",
                                                                                children: "Enterprise (5,000+ Employees),"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 3536,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-gray-600",
                                                                                children: "Large (1,000-4,999 Employees),"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 3539,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 3532,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                lineNumber: 3528,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 3527,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-6 sm:mb-8",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6",
                                                                    children: "AgentCubed was developed as a lead management tool as well as a customer relationship management (CRM) solution for the insurance industry. It offers three different cloud-based products that cater to the needs of either agents, agencies, or call centers. AgentCubed provides free product demos, and its agency and call center solutions can be customized to the specific needs of the client depending on how many individuals will be using the system."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 3548,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "/learn-more/zoho-projects",
                                                                    className: "text-sm sm:text-base md:text-lg text-[#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-semibold",
                                                                    children: "Learn More About AgentCubed"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 3560,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 3547,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-end",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "https://www.agentcubed.com/",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-[#386861]  hover:bg-green-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group",
                                                                children: [
                                                                    "Visit Website",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                        className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 3577,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                lineNumber: 3570,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 3569,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                    lineNumber: 3488,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                lineNumber: 3487,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-6  md:p-8 lg:p-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-3 sm:gap-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-shrink-0",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                src: "/images/AgileCRM.png" // Replace with your actual logo path
                                                                                ,
                                                                                alt: "Agile CRM Logo",
                                                                                width: 80,
                                                                                height: 80,
                                                                                className: "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain",
                                                                                priority: true
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 3590,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 3589,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "min-w-0 flex-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                                    className: "text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2",
                                                                                    children: "Agile CRM"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 3602,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    href: "/reviews/zoho-projects",
                                                                                    className: "text-sm sm:text-base md:text-lg text-[#386861] hover:text-blue-800 hover:underline transition-colors duration-200 font-medium",
                                                                                    children: "Leave a Review"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 3605,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 3601,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 3587,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-shrink-0",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-[#386861] hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 3617,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            "Compare"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 3616,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 3615,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 3586,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-6 sm:mb-8",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-semibold text-gray-700",
                                                                        children: "Good for:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 3626,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-wrap items-center gap-1",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-gray-600",
                                                                            children: "Any company size"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 3630,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 3629,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                lineNumber: 3625,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 3624,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-6 sm:mb-8",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6",
                                                                    children: "With Agile CRM, it is possible to engage your sales force like never before by treating sales like a game. Features include custom leader boards, real-time alerts and advanced sales metrics. Track each and every key performance indicator (KPI) with cohort analysis, conversion reports and advanced analytics. Know your customer’s profile, social presence, web activity and track every interaction through a neatly arranged timeline tracking the customer’s journey"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 3639,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "/learn-more/zoho-projects",
                                                                    className: "text-sm sm:text-base md:text-lg text-[#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-semibold",
                                                                    children: "Learn More About Agile CRM"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 3651,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 3638,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-end",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "https://www.agilecrm.com/",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-[#386861] hover:bg-green-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group",
                                                                children: [
                                                                    "Visit Website",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                        className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 3668,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                lineNumber: 3661,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 3660,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                    lineNumber: 3585,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                lineNumber: 3584,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-6  md:p-8 lg:p-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-3 sm:gap-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-shrink-0",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                src: "/images/Amity.jpg" // Replace with your actual logo path
                                                                                ,
                                                                                alt: "Amity Logo",
                                                                                width: 80,
                                                                                height: 80,
                                                                                className: "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain",
                                                                                priority: true
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 3681,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 3680,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "min-w-0 flex-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                                    className: "text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2",
                                                                                    children: "Amity"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 3693,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    href: "/reviews/zoho-projects",
                                                                                    className: "text-sm sm:text-base md:text-lg text-[#386861] hover:text-blue-800 hover:underline transition-colors duration-200 font-medium",
                                                                                    children: "Leave a Review"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                    lineNumber: 3696,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 3692,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 3678,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-shrink-0",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-[#386861] hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 3708,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            "Compare"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 3707,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 3706,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 3677,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-6 sm:mb-8",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/learn-more/zoho-projects",
                                                                className: "text-sm sm:text-base md:text-lg text-[#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-semibold",
                                                                children: "Learn More About Amity"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                lineNumber: 3716,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 3715,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-end",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "https://www.amity.co/",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-[#386861]  hover:bg-green-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group",
                                                                children: [
                                                                    "Visit Website",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                        className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 3733,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                lineNumber: 3726,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 3725,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                    lineNumber: 3676,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                lineNumber: 3675,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 2844,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        id: "key-features",
                                        className: "mt-8 max-w-7xl mx-auto",
                                        children: [
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "max-w-none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16",
                                                        children: "Key CRM features to consider for your use case"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                        lineNumber: 3744,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-8 sm:mb-10 md:mb-12 lg:mb-16",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed",
                                                            children: "While there are certainly software solutions that are objectively “bad,” the majority of options in any given vertical will be valued by how well they satisfy the intended use case. Trying to apply the tool outside the parameters it was designed for may fail to meet expectations, but that does not necessarily mean the software itself is of poor quality. It’s just a bad match."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 3750,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                        lineNumber: 3749,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-12 sm:mb-16 md:mb-20 lg:mb-24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed",
                                                            children: [
                                                                "Below are some core areas of concern for CRM consumers to consider when shopping around to help them find a tool that aligns with their needs.",
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "/enterprise-project-management",
                                                                    className: "text-[#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-medium",
                                                                    children: "The Different Types of Roles & Responsibilities in a CRM"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 3767,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " "
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 3763,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                        lineNumber: 3762,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12",
                                                                children: "Contact management"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                lineNumber: 3779,
                                                                columnNumber: 3
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed mb-6",
                                                                children: "For CRM tools, the most foundational functionality is that of collecting and organizing contact information. At the very least, it needs to be a step up from simply dumping leads into a spreadsheet only to immediately be forgotten. Spreadsheets have their place, but they aren’t optimized for automation or to serve as living records. If a CRM can’t improve on manual data entry, manual data scrubbing, and manual retrieval, then it’s just Excel with extra steps."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                lineNumber: 3784,
                                                                columnNumber: 3
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed mb-4",
                                                                children: "Contact management features in CRM and sales software, it should be noted, vary widely from system to system. But the common upgrades to functionality will likely look familiar to anyone who’s been using digital devices in the past two decades:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                lineNumber: 3789,
                                                                columnNumber: 3
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "list-disc list-inside text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed space-y-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: "Automated data importing"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 3794,
                                                                        columnNumber: 5
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: "Data export flexibility (via EDI, CSV, or other formats)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 3795,
                                                                        columnNumber: 5
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: "Integrations with other platforms, apps, and databases"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 3796,
                                                                        columnNumber: 5
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: "Filters and search functions"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 3797,
                                                                        columnNumber: 5
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: "Analytics and reporting functions"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 3798,
                                                                        columnNumber: 5
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                lineNumber: 3793,
                                                                columnNumber: 3
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                        lineNumber: 3777,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                lineNumber: 3742,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12",
                                                        children: "Communication records"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                        lineNumber: 3806,
                                                        columnNumber: 3
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed mb-6",
                                                        children: "By now, nearly everyone is familiar with the “This call may be recorded for quality assurance purposes” line spoken to customers calling in to a business for support. Having a record of customer/client/lead interactions can be indispensable. And not just for maintaining excellent service, either."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                        lineNumber: 3811,
                                                        columnNumber: 3
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-6",
                                                        children: "Using recorded calls, chats, and other communication, businesses can achieve a multitude of important objectives, including:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                        lineNumber: 3815,
                                                        columnNumber: 3
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "list-disc list-inside text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed space-y-2 mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "Improving effectiveness of staff training, onboarding, company policies, and more"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                lineNumber: 3820,
                                                                columnNumber: 5
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "Compiling data for analytics (which can help identify patterns, predict trends, and even recommend strategies)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                lineNumber: 3821,
                                                                columnNumber: 5
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "Providing evidence to help navigate legal concerns and protect against loss"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                lineNumber: 3822,
                                                                columnNumber: 5
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                        lineNumber: 3819,
                                                        columnNumber: 3
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed",
                                                        children: "If benefits like these factor into your CRM and sales software choices, then be aware that some software includes functionality to support it, while some does not."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                        lineNumber: 3825,
                                                        columnNumber: 3
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                lineNumber: 3804,
                                                columnNumber: 16
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12",
                                                        children: "Integrations"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                        lineNumber: 3833,
                                                        columnNumber: 3
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-4",
                                                        children: "Implementing new software systems can be difficult, and onboarding users only becomes more problematic when the system doesn’t play well with existing solutions in the workflow."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                        lineNumber: 3838,
                                                        columnNumber: 3
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-4",
                                                        children: "Some CRMs are built as part of a larger platform of business solutions, and are intended to be used as a holistic unit. This is a bit of a trade-off, and some cost-benefit evaluations will be needed to determine if a complete workflow overhaul will net positive or negative returns for the trouble."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                        lineNumber: 3842,
                                                        columnNumber: 3
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-4",
                                                        children: "However, if maintaining the stability and functionality of other systems is of equal importance, then finding a CRM software that can integrate with them successfully is critical. Depending on what integrations are needed, there may be plug-ins or add-ons available already to users of the tool."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                        lineNumber: 3846,
                                                        columnNumber: 3
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-4",
                                                        children: "For less common integrations, some more code-heavy API customization may be necessary. In these cases, it’s a good idea to ask which side of the client-vendor partnership will be building the integration."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                        lineNumber: 3850,
                                                        columnNumber: 3
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed",
                                                        children: "What should be avoided is the addition of a CRM that only further complicates workflows and requires additional manual processes to hold the system together."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                        lineNumber: 3854,
                                                        columnNumber: 3
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                lineNumber: 3831,
                                                columnNumber: 16
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12",
                                                        children: "Marketing automation"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                        lineNumber: 3860,
                                                        columnNumber: 3
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-4",
                                                        children: "Marketing automation is a specific example of the integration concerns above, but it merits its own spot on this list due to the amount of overlap between marketing and sales efforts. Like other sales-adjacent functions, there are a lot of advantages to having the CRM trigger automatic tasks such as sending confirmation emails, email nurture campaigns, and more."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                        lineNumber: 3865,
                                                        columnNumber: 3
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-4",
                                                        children: "Worst-case scenario, similar to what’s mentioned above, is that the new CRM complicates already existing processes, rather than integrating or replacing them. If your CRM or sales software adds another step in the process of, for example, sending outreach emails because staff members have to manually dig for contact info in the database, that’s a net loss."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                        lineNumber: 3869,
                                                        columnNumber: 3
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-4",
                                                        children: "At the very least, the CRM should leave any existing processes intact and unhindered. Most likely, however, your organization will benefit from some form of integration, or a CRM that includes marketing automation features natively."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                        lineNumber: 3873,
                                                        columnNumber: 3
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                lineNumber: 3858,
                                                columnNumber: 1
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12",
                                                        children: "Quotes and invoicing"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                        lineNumber: 3880,
                                                        columnNumber: 3
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-4",
                                                        children: "Next in line for important functions in the sales process that may or may not be handled by sales team members are financials, such as quotes, invoices, and other AP/AR responsibilities. The same philosophy applies here as above. If an all-in-one solution upgrades your workflow, prioritize that aspect in your research."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                        lineNumber: 3885,
                                                        columnNumber: 3
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed",
                                                        children: "If integration will suffice, then double-check with vendors for the specific platforms you need to be interoperable. Even if your current process is efficient enough currently, be sure that the CRM software doesn’t create additional headaches for anyone in the workflow."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                        lineNumber: 3889,
                                                        columnNumber: 3
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                lineNumber: 3878,
                                                columnNumber: 1
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12",
                                                        children: "Data privacy"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                        lineNumber: 3896,
                                                        columnNumber: 3
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-4",
                                                        children: "Cybersecurity is, arguably, a priority for every organization (or, at least it should be). Some verticals deal with higher risk than others, however, and may need additional security protocols for their CRM to protect themselves or even to comply with industry mandates."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                        lineNumber: 3901,
                                                        columnNumber: 3
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-4",
                                                        children: "This is one that may require consulting with IT, InfoSec, or other I&O staff in the organization. Many of the technical details that factor into whether or not a CRM software is sufficiently secure may be outside the expertise of anyone without a background in computer systems, and it’s not one to leave to chance."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                        lineNumber: 3905,
                                                        columnNumber: 3
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed",
                                                        children: "Check with internal SMEs, and leverage their experience to further vet your shortlist of CRMs. It may even be worthwhile to have a 3rd-party vendor risk assessment done for any that meet all other criteria, just to cover your bases."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                        lineNumber: 3909,
                                                        columnNumber: 3
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                lineNumber: 3894,
                                                columnNumber: 1
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12",
                                                        children: "Project management"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                        lineNumber: 3916,
                                                        columnNumber: 3
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-4",
                                                        children: "This list of supplemental functions that might be relevant would be pretty long if it were comprehensive. All-in-one systems, analytics and reporting, ease of use, pipeline management, and many more might fit here. Many of these have been touched on above, and others are likely known quantities already."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                        lineNumber: 3921,
                                                        columnNumber: 3
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-4",
                                                        children: "So instead, this part of the list will finish with one final consideration: project management."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                        lineNumber: 3925,
                                                        columnNumber: 3
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-4",
                                                        children: "Organizations that have, until now, used less formalized workflow processes may not realize how much of an upgrade a well-designed project management strategy can be. As teams grow, workloads become heavier, and processes become more intricate and complex, tracking things on paper proves a substantial challenge."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                        lineNumber: 3929,
                                                        columnNumber: 3
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed",
                                                        children: "With effective implementation, project management tools can provide visibility and accountability across the board. Better still, it can help staff achieve greater levels of autonomy by giving them the tools needed to stay organized and on top of their responsibilities. Some CRM and sales software tools include project management (PM) features in their toolset, while others can integrate with popular platforms via APIs. Either way, for any team larger than a handful of employees, it’s worth discussing the potential value a CRM with PM enablement might bring to the table."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                        lineNumber: 3933,
                                                        columnNumber: 3
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                lineNumber: 3914,
                                                columnNumber: 1
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 3740,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        id: "how-to-choose",
                                        className: "mt-8 max-w-7xl mx-auto",
                                        children: [
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "max-w-none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16",
                                                        children: "Choosing the right CRM and sales software"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                        lineNumber: 3944,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-8 sm:mb-10 md:mb-12 lg:mb-16",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed",
                                                            children: "After diving into the world of CRM solutions, you’ve likely noticed there’s no shortage of options. This abundance is actually a good thing – it means you have the flexibility to find a CRM that fits your business like a glove, whether you’re running a small startup or managing a large company. If you’re a small business owner, you might be looking for something straightforward and budget-friendly. On the other hand, if you’re at the helm of a larger company, you might need a CRM with all the bells and whistles – think advanced features and seamless integrations with your existing tech stack."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 3950,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                        lineNumber: 3949,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                lineNumber: 3942,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 3940,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        id: "crm-faqs",
                                        className: "mt-8 max-w-7xl mx-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "max-w-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16",
                                                    children: "Frequently Asked Questions (FAQ)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                    lineNumber: 3970,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-0 -mt-8",
                                                    children: faqData.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "border-b border-gray-200",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>toggleItem(index),
                                                                    className: "w-full flex items-center justify-between py-6 sm:py-7 md:py-8 lg:py-9 text-left hover:bg-gray-50 transition-colors duration-200",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "text-base sm:text-lg md:text-xl lg:text-xl font-semibold text-gray-700 leading-relaxed pr-4 sm:pr-6 md:pr-8",
                                                                            children: item.question
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 3983,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-md flex items-center justify-center transition-all duration-200 ${openItems[index] ? "bg-[#386861] hover:bg-green-700" : "bg-[#386861] hover:bg-green-700"}`,
                                                                            children: openItems[index] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                                                className: "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 3996,
                                                                                columnNumber: 31
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                className: "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                                lineNumber: 3998,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                            lineNumber: 3988,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 3979,
                                                                    columnNumber: 25
                                                                }, this),
                                                                openItems[index] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "pb-6 sm:pb-7 md:pb-8 lg:pb-9 pr-12 sm:pr-16 md:pr-20 lg:pr-24 animate-in slide-in-from-top-2 duration-300",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed",
                                                                        children: item.answer
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                        lineNumber: 4006,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                                    lineNumber: 4005,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                            lineNumber: 3977,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                                    lineNumber: 3975,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                            lineNumber: 3968,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                        lineNumber: 3967,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                                lineNumber: 2202,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                        lineNumber: 2124,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                    lineNumber: 2123,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/Software-reviews/CRM-software/page.jsx",
                lineNumber: 2122,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(ProjectManagementPage, "9XfIaUY5wHtGy7NmY08yNxbSH7g=");
_c = ProjectManagementPage;
var _c;
__turbopack_context__.k.register(_c, "ProjectManagementPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_Software-reviews_CRM-software_page_jsx_af91501a._.js.map
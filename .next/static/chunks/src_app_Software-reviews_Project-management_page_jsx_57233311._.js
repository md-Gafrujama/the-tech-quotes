(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/Software-reviews/Project-management/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
            id: "what-is-pm-software",
            title: "What is project management software?",
            active: false
        },
        {
            id: "best-pm-software",
            title: "What is the best project management software?",
            active: false
        },
        {
            id: "find-new-software",
            title: "Find your new project management software",
            active: false
        },
        {
            id: "common-features",
            title: "Common project management software features",
            active: false
        },
        {
            id: "how-to-choose",
            title: "How to choose the right PM software for your project",
            active: false
        },
        {
            id: "pm-faqs",
            title: "Project management software FAQs",
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
        monday: {
            title: "monday.com: Best overall project management software",
            logo: "/images/monday.png",
            button: {
                text: "Visit Website",
                link: "#"
            },
            scores: [
                {
                    label: "User reviews",
                    score: "4.62/5"
                },
                {
                    label: "General features",
                    score: "4.38/5"
                },
                {
                    label: "Pricing",
                    score: "4.01/5"
                },
                {
                    label: "Interface",
                    score: "4.52/5"
                },
                {
                    label: "Task management",
                    score: "4.5/5"
                },
                {
                    label: "Integrations",
                    score: "4.5/5"
                },
                {
                    label: "Automation",
                    score: "4.9/5"
                },
                {
                    label: "Project planning and scheduling",
                    score: "4.9/5"
                },
                {
                    label: "Collaboration tools",
                    score: "4.25/5"
                },
                {
                    label: "Resource management",
                    score: "3.75/5"
                },
                {
                    label: "Reporting and analytics",
                    score: "4.9/5"
                },
                {
                    label: "User security and permissions",
                    score: "4.9/5"
                }
            ],
            pros: [
                "Can accommodate large-scale organizations.",
                "Straightforward communication and collaboration features.",
                "Advanced automation capabilities."
            ],
            cons: [
                "May not be ideal for small teams due to its cost and complexity.",
                "Steep learning curve.",
                "Mobile app's limitations on generating and viewing reports."
            ],
            why: {
                intro: `I chose monday.com for its essential features that efficiently support project management. It offers functionalities that streamline processes and help secure effective project oversight and coordination. Its highly customizable workflow will allow you to tailor the software to your needs:`,
                bullets: [
                    "Make informed decisions by leveraging its powerful visualization, with which you can view real-time data in ten different ways.",
                    "Save time and avoid human error by automating tasks.",
                    "Collaborate, share files, and update stakeholders through its neat cards and tagging system."
                ],
                outro: `Compared with other project management tools, monday.com has fewer integrations. Despite this minor disadvantage, monday.com is still the best PM software overall because it allows you to perform multiple project management tasks in one platform.`,
                extras: {
                    "About monday.com": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-black mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "https://monday.com",
                                    className: "text-green-600 hover:text-green-700 font-medium underline",
                                    children: [
                                        "monday.com",
                                        " "
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                    lineNumber: 174,
                                    columnNumber: 17
                                }, this),
                                "can help you streamline tasks, deadlines, and deliverables. It was initially created as a collaboration tool and eventually evolved into a comprehensive platform that can perform various project management functions. Nowadays, it is a leading tool for managing workflows, monitoring project progress, and improving communication. monday.com also offers other products including a CRM, making it one of the best CRM and project management software on the market today."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                            lineNumber: 173,
                            columnNumber: 15
                        }, this)
                    }, void 0, false),
                    "Key Features": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Customizable workflows and boards"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 193,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "With monday.com, you can fine-tune your workflows, views, and boards to align them with your project's needs. This level of adaptability provides a well-organized visual representation of tasks and projects. It also simplifies workflow comprehension for stakeholders and helps project managers to easily identify bottlenecks and track progress."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 196,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Automation capabilities"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 204,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "monday.com's no-code automation builder is quite intuitive; even those without technical expertise can easily set up automation rules. The platform also provides a variety of predefined automation recipes that cover common project management needs, such as:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 207,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black space-y-1 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Sending email notifications."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 215,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Updating item statuses."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 216,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Creating new items based on specific triggers or customized automation rules."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 217,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 214,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "By automating repetitive tasks, you can focus on the critical aspects of your work, thereby increasing overall productivity. Automation also helps maintain consistency in task management."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 222,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Collaborative platform"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 227,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "monday.com stands out as a collaboration and communication tool because of functionalities such as shared boards, commenting on tasks, sharing files, and updating statuses. Each task or item has its own conversation thread, allowing members to add updates, ask questions, and provide feedback directly. Having a definitive flow of communication encourages accountability, reduces miscommunication, and enhances team synergy."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 228,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    Pricing: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "monday.com's pricing can vary to scale with the team's size, and the cost may adjust based on the number of seats required. The pricing structure below (except for the Free plan) is based on a team of three."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 241,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "monday.com has a visually intuitive platform and offers a wide range of features. However, adding more users and requiring more advanced features for your business can become costly. monday.com's pricing is suitable for mid-sized organizations, as its mid-tier plans balance features and usability."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 247,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Free plan"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 254,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Free forever with up to two seats."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 256,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Includes basic features for personal use."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 257,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 255,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Basic plan"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 259,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "$27 per month (three seats, billed annually)."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 261,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "14-day free trial available, no credit card required."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 262,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Prioritized customer support."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 263,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "5 GB file storage."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 264,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Create a dashboard based on one board."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 265,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 260,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Standard plan"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 267,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "$36 per month (three seats, billed annually)."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 269,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "14-day free trial available, no credit card required."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 270,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "Includes Basic plan features, plus:",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "list-disc pl-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Timeline, Calendar, and Gantt views."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 274,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Automations (250 actions per month)."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 275,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Integrations (250 actions per month)."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 276,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Create a dashboard that combines five boards."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 277,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                lineNumber: 273,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 271,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 268,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Pro plan"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 281,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "$57 per month (three seats, billed annually)."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 283,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "14-day free trial available, no credit card required."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 284,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "Includes Standard plan features, plus:",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "list-disc pl-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Automations (25,000 actions per month)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 288,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Integrations (25,000 actions per month)."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 289,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Time tracking."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 290,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Formula column."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 291,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Create a dashboard that combines 10 boards."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 292,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                lineNumber: 287,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 285,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 282,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Enterprise plan"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 296,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Requires custom pricing."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 298,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "Includes Pro plan features, plus:",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "list-disc pl-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Enterprise-scale automations and integrations."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 302,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Enterprise-grade security and governance."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 303,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Multi-level permissions."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 304,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Enterprise support."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 305,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Advanced reporting and analytics."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 306,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Create a dashboard that combines 50 boards."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 307,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                lineNumber: 301,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 299,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 297,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    Gallery: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Gallery Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore tenetur asperiores facilis, sit dolorum sunt laborum magni quam repellendus adipisci quas fugiat vero consequatur incidunt."
                        }, void 0, false, {
                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                            lineNumber: 315,
                            columnNumber: 15
                        }, this)
                    }, void 0, false)
                }
            }
        },
        asana: {
            title: "Asana: Best project management software for ease of use",
            logo: "/images/asana.png",
            button: {
                text: "Visit Website",
                link: "#"
            },
            scores: [
                {
                    label: "User reviews",
                    score: "4.38/5"
                },
                {
                    label: "General features",
                    score: "4.53/5"
                },
                {
                    label: "Pricing",
                    score: "4.9/5"
                },
                {
                    label: "Interface",
                    score: "4.9/5"
                },
                {
                    label: "Task management",
                    score: "4.5/5"
                },
                {
                    label: "Integrations",
                    score: "4.25/5"
                },
                {
                    label: "Automation",
                    score: "2.5/5"
                },
                {
                    label: "Project planning and scheduling",
                    score: "4.9/5"
                },
                {
                    label: "Collaboration tools",
                    score: "4.75/5"
                },
                {
                    label: "Resource management",
                    score: "2.5/5"
                },
                {
                    label: "Reporting and analytics",
                    score: "4.9/5"
                },
                {
                    label: "User security and permissions",
                    score: "4.9/5"
                }
            ],
            pros: [
                "Intuitive interface with straightforward navigation.",
                "Free plan can accommodate up to 10 users."
            ],
            cons: [
                "Task assignments are limited to one person only, which can lead to bottlenecks.",
                "Limited exporting and importing functionality for reporting and analysis."
            ],
            why: {
                intro: `I chose Asana for its straightforward yet feature-rich interface that is easy to navigate, even for beginners. With fewer clicks than monday.com and Jira, you can quickly change views from list to board or timeline. Despite some limitations on assigning tasks and exporting functionality, Asana's organized software navigation makes it the go-to choice for businesses seeking to simplify workflow and manage tasks with less fuss and a gentle learning curve.`,
                extras: {
                    "About Asana": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-black mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "https://asana.com",
                                    className: "text-green-600 hover:text-green-700 font-medium underline",
                                    children: [
                                        "Asana",
                                        " "
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                    lineNumber: 362,
                                    columnNumber: 17
                                }, this),
                                "was initially designed as a tool to improve team collaboration and productivity. After years of development, Asana has become one of the best project management software solutions on the market for small businesses. Asana's key focus is to offer a clean and straightforward interface so that users with varying levels of technical expertise can use it. On top of its neat, user-friendly interface, Asana also provides robust task management capabilities, multiple project views, and collaboration features."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                            lineNumber: 361,
                            columnNumber: 15
                        }, this)
                    }, void 0, false),
                    "Key Features": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Multi-homing tasks across projects"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 382,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Asana lets your team add a single task to multiple projects or to multiple sections within a project, a feature called multi-homing. This feature ensures that all relevant stakeholders have access and visibility to the task and can collaborate on it. It's particularly useful for work with overlapping responsibilities or within integrated workflows."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 385,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Task covers"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 393,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Asana now offers task covers, a.k.a. thumbnail images for tasks, to make project management more intuitive and visually appealing. This picture provides a quick visual preview of what each assignment involves. With task covers, you'll get instant graphic context to recognize tasks more efficiently. This feature sets Asana apart by blending functionality with a personalized touch."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 394,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Workload view"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 403,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Asana's workload reporting feature visually represents the team's capacity and helps a project manager ensure no one is overwhelmed or underutilized. Unlike ClickUp's workload view, which displays data in color-coded bars, Asana presents the data in a neat graph to better understand the team's workload. This feature in Asana is available for Advanced and Enterprise customers."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 404,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    Pricing: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Asana's pricing structure is quite competitive, but if you require advanced features, you'll find them paywalled behind higher-tier plans. For mid-tier companies, Asana provides excellent value for money through its mid-tier plans, as they offer competent functionalities for their price."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 417,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Personal plan"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 425,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Free forever for up to 10 teammates."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 427,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Unlimited file storage (100 MB per file)."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 428,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Basic views like list, board, and calendar."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 429,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Basic search filters and status updates."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 430,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 426,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Starter plan"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 433,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "$10.99 per user per month (billed annually)."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 435,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "30-day free trial available, no credit card required ."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 436,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Includes Personal plan features, plus"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 437,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 434,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Up to 500 teammates."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 440,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "https://asana.com/ai",
                                                className: "text-green-600 hover:text-green-700 font-medium underline",
                                                children: [
                                                    "Asana Intelligence",
                                                    " "
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                lineNumber: 442,
                                                columnNumber: 19
                                            }, this),
                                            "(AI for work and project management)."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 441,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Gantt view."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 447,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Custom project templates and forms."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 448,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "250 automations per month."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 449,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 439,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Advanced plan"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 451,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "$24.99 per user per month (billed annually).."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 453,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "30-day free trial available, no credit card required."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 454,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "Includes Starter plan features, plus:",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "list-disc pl-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Set goals and connect them to work."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 458,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Workload feature to assess team bandwidth and load balance tasks."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 459,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "20 portfolios."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 463,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "25,000 automations per month. "
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 464,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Time tracking and advanced reporting."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 465,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Lock custom fields and scaled security. "
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 466,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                lineNumber: 457,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 455,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 452,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Enterprise plan"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 470,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Requires custom pricing."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 472,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "Includes Advanced plan features, plus:",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "list-disc pl-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "No user limit."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 477,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Advanced integrations with Salesforce, Tableau, and Power BI."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 478,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Resource management."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 482,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Advanced security and admin controls through SAML. "
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 483,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Premium support. "
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 484,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                lineNumber: 476,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 474,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 471,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Enterprise + plan"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 488,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Requires custom pricing."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 490,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Includes all Enterprise Plan features with additional customization and support options for large or complex organizations."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 491,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 489,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    Gallery: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Gallery Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore tenetur asperiores facilis, sit dolorum sunt laborum magni quam repellendus adipisci quas fugiat vero consequatur incidunt."
                        }, void 0, false, {
                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                            lineNumber: 501,
                            columnNumber: 15
                        }, this)
                    }, void 0, false)
                }
            }
        },
        wrike: {
            title: "Wrike: Most versatile project management software",
            logo: "/images/wrike-logo.png",
            button: {
                text: "Visit Website",
                link: "#"
            },
            scores: [
                {
                    label: "User reviews",
                    score: "4.16/5"
                },
                {
                    label: "General features",
                    score: "4.77/5"
                },
                {
                    label: "Pricing",
                    score: "4.41/5"
                },
                {
                    label: "Interface",
                    score: "4.05/5"
                },
                {
                    label: "Task management",
                    score: "4.5/5"
                },
                {
                    label: "Integrations",
                    score: "4.5/5"
                },
                {
                    label: "Automation",
                    score: "4/5"
                },
                {
                    label: "Project planning and scheduling",
                    score: "4.9/5"
                },
                {
                    label: "Collaboration tools",
                    score: "4.75/5"
                },
                {
                    label: "Resource management",
                    score: "3.75/5"
                },
                {
                    label: "Reporting and analytics",
                    score: "4.9/5"
                },
                {
                    label: "User security and permissions",
                    score: "3.75/5"
                }
            ],
            pros: [
                "Flexible project templates.",
                "Effortless task management.",
                "Quick access to customer support through its floating chat icon."
            ],
            cons: [
                "Can be overwhelming for beginners.",
                "Some users report slow load times."
            ],
            why: {
                intro: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "I chose Wrike because of its ability to adapt to different business models and",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "https://wrike.com/project-management-guide/",
                            className: "text-[#386861] hover:text-green-700 font-medium underline",
                            children: "project management strategies"
                        }, void 0, false, {
                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                            lineNumber: 547,
                            columnNumber: 13
                        }, this),
                        ". This versatility makes it a perfect choice for project managers handling multiple projects simultaneously. Even though some users think the platform's aesthetic is a bit lackluster, Wrike contains features essential for keeping track of tasks, deliverables, and progress."
                    ]
                }, void 0, true),
                outro: `While Asana offers a streamlined, high-level interface for work management, Wrike provides a granular and detailed way of resource allocation.`,
                extras: {
                    "About Wrike": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-black mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "https://wrike.com",
                                    className: "text-green-600 hover:text-green-700 font-medium underline",
                                    children: "Wrike"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                    lineNumber: 567,
                                    columnNumber: 17
                                }, this),
                                " ",
                                "provides robust task management features, real-time analytics, and reports within a simple, neat-looking platform. You can also rename the fields within a project or duplicate an existing project's format as a template. Its flexibility makes it a versatile tool catering to various business needs. It can also support the waterfall PM framework and Agile methodologies such as Scrum and Kanban."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                            lineNumber: 566,
                            columnNumber: 15
                        }, this)
                    }, void 0, false),
                    "Key Features": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Interactive Gantt charts"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 585,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: [
                                    "Wrike's Gantt chart feature is highly interactive and allows users to create, adjust, and link tasks directly within the chart. Wrike's interactive Gantt charts can easily identify task durations, dependencies, and milestones through intuitive drag-and-drop actions. Additionally, Wrike's Gantt chart can also perform a",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "https://wrike.com/project-management-guide/faq/what-is-critical-path-method/",
                                        className: "text-green-600 hover:text-green-700 font-medium underline",
                                        children: "critical path analysis"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 595,
                                        columnNumber: 17
                                    }, this),
                                    " ",
                                    "and highlight the sequence of tasks that directly impact the project's completion date."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 588,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Highly customizable workflows"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 604,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Wrike stands out for its versatility as project management software. Fields and labels can be adjusted easily to make sure the project meets its requirements. This level of flexibility offers a detailed visual map or representation of the workflow or project stages."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 607,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Wrike Lock"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 614,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "While other PM software solutions use third-party integrations for data encryption, Wrike developed Wrike Lock, which is available as a paid add-on feature. Wrike Lock is an additional layer of encryption on top of standard encryption for workspace data and files. It uses AES-256 encryption keys, and it allows project managers to have a clear view of who is accessing the data and when. This feature enables businesses to use cloud applications with fewer worries."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 615,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    Pricing: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Overall, Wrike's pricing and plans can accommodate a wide range of users, from individuals to large organizations. Furthermore, Wrike's Business plan offers a robust set of tools. However, its value for money might be less compelling than ClickUp's offerings at similar or lower price points."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 629,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Free plan"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 637,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Free forever for unlimited users."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 639,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Basic project and task management features."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 640,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Board and table views."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 641,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 638,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Team plan"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 644,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "$10.00 per user per month (billed annually)."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 646,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "14-day free trial available, no credit card required."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 647,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Everything from the Free plan, plus:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 648,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 645,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Unlimited projects, tasks, and subtasks."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 651,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Unlimited custom fields and request forms."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 652,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Up to 20 free collaborators."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 653,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Gantt charts."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 654,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Automations (50 actions/user/month)."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 655,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Analytics and calendar views."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 656,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Use case templates.."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 657,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "One-click sign-in."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 658,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "2 GB storage per user."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 659,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Generative AI tool."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 660,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 650,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Business plan"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 662,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "$25 per user, per month (billed annually)."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 664,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "5–200 users."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 665,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "14-day free trial available, no credit card required. "
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 666,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "Everything from the Team plan, plus:",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "list-disc pl-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Automations (200 actions/user/month)."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 670,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "AI risk prediction and work creation."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 671,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Resource management: workloads and time tracking."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 672,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Reports and unlimited dashboards. "
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 673,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "User groups and permissions."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 674,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "DAM Integrations and Cloud Content Connector. "
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 675,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Adobe Creative Cloud Extensions. "
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 676,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "5 GB storage per user. "
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 677,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                lineNumber: 669,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 667,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 663,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Enterprise plan"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 681,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Requires custom pricing."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 683,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "Everything from the Business plan, plus:",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "list-disc pl-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Unlimited users; five users minimum"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 688,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "SAML-based SSO (Users can sign in just once to access both Wrike and other associated applications)."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 689,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Two-factor authentication (2FA)."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 693,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Custom access roles. "
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 694,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Customizable user types."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 695,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: " Admin permissions."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 696,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Automations (1000 actions/user/month)."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 697,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "10 GB storage per user."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 698,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                lineNumber: 687,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 685,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 682,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Pinnacle plan"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 702,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Requires custom pricing."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 704,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Everything from the Enterprise plan, plus:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 705,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "list-disc pl-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Unlimited users; five users minimum"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                lineNumber: 707,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Locked spaces."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                lineNumber: 708,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Advanced reporting and BI."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                lineNumber: 709,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Team utilization and performance dashboard."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                lineNumber: 710,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Job roles."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                lineNumber: 711,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Budgeting and billable hours."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                lineNumber: 712,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Automations (1,500 actions/user/month)."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                lineNumber: 713,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 706,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 703,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    Gallery: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Gallery Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore tenetur asperiores facilis, sit dolorum sunt laborum magni quam repellendus adipisci quas fugiat vero consequatur incidunt."
                        }, void 0, false, {
                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                            lineNumber: 720,
                            columnNumber: 15
                        }, this)
                    }, void 0, false)
                }
            }
        },
        Jira: {
            title: "Jira: Best Agile project management software",
            logo: "/images/Jira.png",
            button: {
                text: "Visit Website",
                link: "#"
            },
            scores: [
                {
                    label: "User reviews",
                    score: "4.67/5"
                },
                {
                    label: "General features",
                    score: "4.9/5"
                },
                {
                    label: "Pricing",
                    score: "3.7/5"
                },
                {
                    label: "Interface",
                    score: "4.3/5"
                },
                {
                    label: "Task management",
                    score: "4.5/5"
                },
                {
                    label: "Integrations",
                    score: "4.75/5"
                },
                {
                    label: "Automation",
                    score: "4/5"
                },
                {
                    label: "Project planning and scheduling",
                    score: "4.9/5"
                },
                {
                    label: "Collaboration tools",
                    score: "4.75/5"
                },
                {
                    label: "Resource management",
                    score: "4.9/5"
                },
                {
                    label: "Reporting and analytics",
                    score: "4.9/5"
                },
                {
                    label: "User security and permissions",
                    score: "4.9/5"
                }
            ],
            pros: [
                "Designed to support Agile methodologies.",
                "Offers 4,000+ integrations through the Atlassian marketplace.",
                "Real-time tracking capabilities."
            ],
            cons: [
                "May not align well with the waterfall model.",
                "Complex initial setup."
            ],
            why: {
                intro: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "I chose Jira for its Agile-specific tools and templates. Its features, such as customizable boards, backlogs, sprints, and reports, make it ideal for organizations that follow the",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "https://www.atlassian.com/agile",
                            className: "text-[#386861] hover:text-green-700 font-medium underline",
                            children: "Scrum or Kanban"
                        }, void 0, false, {
                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                            lineNumber: 767,
                            columnNumber: 13
                        }, this),
                        " ",
                        "framework."
                    ]
                }, void 0, true),
                outro: `Furthermore, Jira's capacity to integrate into the Atlassian ecosystem and other productivity tools helps teams centralize project details and collaborate across different platforms. Its ability to tailor-fit workflows can help you modify Jira's functionalities to align with your project needs.`,
                extras: {
                    "About Jira": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "https://www.atlassian.com/software/jira",
                                        className: "text-green-600 hover:text-green-700 font-medium underline",
                                        children: "Jira"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 783,
                                        columnNumber: 17
                                    }, this),
                                    " ",
                                    "was primarily designed for software development and issue tracking. It has since evolved and developed its capabilities. Nowadays, even non-IT organizations use Jira for progress tracking and project management."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 782,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "Since Jira is part of the Atlassian ecosystem, it also offers a unified user experience for users who work with multiple Atlassian tools. Jira also has advanced capabilities for supporting Agile",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "https://www.atlassian.com/agile/project-management",
                                        className: "text-green-600 hover:text-green-700 font-medium underline",
                                        children: "project management methodologies"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 799,
                                        columnNumber: 17
                                    }, this),
                                    " ",
                                    "through better integration with CI/CD and Agile planning tools within the Atlassian suite."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 794,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    "Key Features": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Agile-focused features"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 812,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "In addition to offering Scrum or Kanban boards and sprint planning tools, Jira stands out as the go-to choice for Agile teams because of its Agile reporting tools. Other PM tools require third-party integrations to generate these charts and graphs, but Jira offers these reporting tools as native features. These reporting tools help provide a detailed view of team performance through Agile-specific reports such as velocity charts, burndown charts, and cumulative flow diagrams."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 813,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Extensive integration options"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 823,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "As part of the Atlassian ecosystem, Jira can integrate with other Atlassian products like Confluence, Bitbucket, and Trello. After setting up their Confluence accounts, Agile teams can directly link project documentation, requirements, and decision records to Jira issues and sprints. Additionally, by integrating with Atlassian’s control system, Agile teams can link commits, branches, and pull requests to Jira issues."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 826,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "In addition to integrating within the Atlassian ecosystem, Jira can also integrate with other tools outside this suite. These include software development tools, communication platforms, tracking apps, and customer relationship management (CRM) systems."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 836,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    Pricing: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "If you manage software development teams or organizations following Agile methodologies, Jira can provide great value for your money. Jira’s features and functionalities suit these Agile frameworks, such as generating detailed Agile reports like burndown charts, velocity charts, and cumulative flow diagrams."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 847,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Free plan"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 855,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Free forever for up to 10 users."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 857,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Unlimited project boards and tasks."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 858,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Automation (100 rule runs per month)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 859,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "100 email notifications per day."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 860,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "2 GB file storage."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 861,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Community support. "
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 862,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 856,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Standard Plan"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 865,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "$875 billed annually for 10 users."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 867,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Up to 50,000 users."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 868,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Everything from the Free plan, plus:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 869,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 866,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "User roles and permissions."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 872,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Audit logs."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 873,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "250 GB of storage."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 874,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Business hour support.."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 875,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Automation (1,700 rule runs per month)."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 876,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Unlimited email notifications."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 877,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 871,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Premium Plan"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 879,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "$1,700 billed annually for 10 users."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 881,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Up to 50,000 users."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 882,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "Everything from the Standard plan, plus:",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "list-disc pl-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Automation (1,000 rule runs per month per paid user)."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 887,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Unlimited storage."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 890,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "24/7 premium support."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 891,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                lineNumber: 886,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 884,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 880,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Enterprise plan"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 895,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Requires custom pricing."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 897,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Up to 50,000 users."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 898,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "Everything from the Premium plan, plus:",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "list-disc pl-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Multiple sites, up to 150."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 902,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "24/7 Enterprise support."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 903,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Unlimited automation."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 904,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Advanced admin controls and security. "
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 905,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                lineNumber: 901,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 899,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 896,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    Gallery: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Gallery Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore tenetur asperiores facilis, sit dolorum sunt laborum magni quam repellendus adipisci quas fugiat vero consequatur incidunt."
                        }, void 0, false, {
                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                            lineNumber: 913,
                            columnNumber: 15
                        }, this)
                    }, void 0, false)
                }
            }
        },
        ClickUp: {
            title: "ClickUp: Best project management software for resource management",
            logo: "/images/clickup.png",
            button: {
                text: "Visit Website",
                link: "#"
            },
            scores: [
                {
                    label: "User reviews",
                    score: "4.67/5"
                },
                {
                    label: "General features",
                    score: "4.9/5"
                },
                {
                    label: "Pricing",
                    score: "3.7/5"
                },
                {
                    label: "Interface",
                    score: "4.29/5"
                },
                {
                    label: "Task management",
                    score: "4.5/5"
                },
                {
                    label: "Integrations",
                    score: "4.75/5"
                },
                {
                    label: "Automation",
                    score: "4/5"
                },
                {
                    label: "Project planning and scheduling",
                    score: "4.9/5"
                },
                {
                    label: "Collaboration tools",
                    score: "4.75/5"
                },
                {
                    label: "Resource management",
                    score: "4.9/5"
                },
                {
                    label: "Reporting and analytics",
                    score: "4.9/5"
                },
                {
                    label: "User security and permissions",
                    score: "4.9/5"
                }
            ],
            pros: [
                "Native time-tracking feature is available for all paid plans.",
                "Competitive pricing structure for mid-sized companies."
            ],
            cons: [
                "Steep learning curve.",
                "Some integrations only offer basic connectivity."
            ],
            why: {
                intro: `I chose ClickUp because it demonstrates strength in resource management, which is integral to project management. Its native time tracking and extensive reporting features help project managers streamline workflow and effectively monitor resource utilization and project progress.`,
                outro: `
Despite drawbacks, such as the lack of phone support and limited mobile app functionality, ClickUp is still a great contender because of its advanced time-tracking feature that can help you allocate and manage resources efficiently.`,
                extras: {
                    "About ClickUp": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-black mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#",
                                    className: "text-green-600 hover:text-green-700 font-medium underline",
                                    children: "ClickUp"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                    lineNumber: 964,
                                    columnNumber: 17
                                }, this),
                                " ",
                                "is a cloud-based project management software initially developed as a team management platform. After further software development, ClickUp now offers features that enhance work and task management, making it a sound choice for streamlining workflows. With its highly customizable user interface (UI), ClickUp consolidates various work management and collaboration tools into a single interface."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                            lineNumber: 963,
                            columnNumber: 15
                        }, this)
                    }, void 0, false),
                    "Key Features": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Native time tracking"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 982,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "ClickUp's native time tracking, which is available on all paid plans, helps teams monitor time spent on specific tasks. While monday.com offers native time tracking with basic functionalities, ClickUp's time tracking is configurable and offers advanced capabilities. It allows users to manually input time entries and create custom statuses, workflows, and time-tracking settings specific to their project needs."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 983,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "This feature is helpful for companies that need to keep track of billable hours. Some examples include creative agencies, software development teams, and legal services. Native time tracking also enhances resource management by helping you accurately allocate resources and monitor ongoing tasks in real time."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 992,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Comprehensive reporting"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 1000,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "ClickUp offers reporting features that are well-suited to many different types of teams. You can quickly generate detailed reports based on project progress, team performance, and resource allocation. After you generate these reports, ClickUp can export them in PDF, CSV, and Excel formats. Combining this functionality with its native time-tracking feature gives ClickUp an edge in demonstrating distinction over its competitors."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 1003,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    Pricing: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Considering the comprehensive features this PM tool offers (even in its free plan), ClickUp stands out for its affordability. Additionally, ClickUp's Enterprise plan is worth considering for its flexibility and comprehensive feature set at potentially lower costs than its competitors."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 1017,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Free plan"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 1025,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Free forever, unlimited free plan members."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 1027,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "100 MB storage."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 1028,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Unlimited tasks."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 1029,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Collaborative documents and whiteboards."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 1030,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Real-time chat."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 1031,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Kanban board view and calendar view."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 1032,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Sprint management."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 1033,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "In-app video recording."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 1034,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "24/7 support."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 1035,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 1026,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Unlimited plan"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 1038,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "$7 per user per month (billed annually)."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 1040,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "14-day free trial; no credit card required."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 1041,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Everything in the Free plan, plus:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 1042,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 1039,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Unlimited storage and integrations."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 1045,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Gantt charts."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 1046,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Unlimited custom fields."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 1047,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Email in ClickUp (send and receive emails directly within a task)."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 1049,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Native time tracking and resource management."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 1053,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Agile reporting."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 1054,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Compatible with AI add-on ($7 per user per month)."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 1055,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 1044,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Business "
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 1057,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "$12 per user per month (billed annually)."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 1059,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "14-day free trial; no credit card required."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 1060,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "Everything in the Unlimited plan, plus:",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "list-disc pl-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Unlimited teams."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 1065,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Advanced time tracking."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 1066,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Timesheet and workload management."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 1067,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Timelines and mind maps. "
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 1068,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Custom exporting."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 1069,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Advanced automations. "
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 1070,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                lineNumber: 1064,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 1062,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 1058,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Enterprise "
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 1074,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Requires custom pricing."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 1076,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "Everything in the Business plan, plus:",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "list-disc pl-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Advanced permissions."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 1081,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Default personal views."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 1082,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Custom capacity in workload"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 1083,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Enterprise API."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 1084,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Live onboarding training."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 1085,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                lineNumber: 1080,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 1078,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 1075,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    Gallery: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Gallery Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore tenetur asperiores facilis, sit dolorum sunt laborum magni quam repellendus adipisci quas fugiat vero consequatur incidunt."
                        }, void 0, false, {
                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                            lineNumber: 1093,
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
            question: "What are the benefits of using project management tools?",
            answer: "The benefits of using project management tools include improved organization, increased efficiency, enhanced collaboration, and better visibility into project progress."
        },
        {
            question: "How does project management software improve productivity?",
            answer: "It streamlines task coordination and resource management, provides real-time data and analytics, and helps complete projects efficiently and within budget."
        },
        {
            question: "What are the cost considerations when choosing project management software?",
            answer: "Costs for project management software can vary based on features, the number of users, and the deployment type. It’s essential to consider both upfront costs and long-term value when selecting a tool."
        },
        {
            question: "What is the job of a project manager?",
            answer: "Project managers are responsible for the entire project from beginning to end and coordinate between different teams or departments. Project managers handle all aspects of the project, such as setting goals and timelines, creating budgets, delegating tasks, and communicating with stakeholders."
        },
        {
            question: "What are the five basics of project management?",
            answer: `
      There are five basic principles of success that you should follow to avoid project management mistakes:
      <ol>
        <li>Address questions and concerns at the beginning of the project.</li>
        <li>Create project goals that spell out details such as deadlines and deliverables.</li>
        <li>Define each person’s role(s) and communicate them clearly to your team.</li>
        <li>Track progress over time and proactively look for risks and roadblocks.</li>
        <li>Double-check that all deliverables have been met before finalizing the project.</li>
      </ol>
    `
        },
        {
            question: "What tools do project managers use?",
            answer: "Project managers use many tools to ensure their projects stay on track, such as time trackers, budgeting tools, meeting agendas, calendars, email, and more. The best project management software combines all these tools into one centralized platform so that project managers only have to use one login to access them all."
        },
        {
            question: "How many phases are there in project management?",
            answer: "There are five phases in the project management life cycle: initiation, planning, execution, monitoring, and closure five phases of project management."
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
    const evaluationCriteria = [
        {
            criteria: "User scores",
            weight: "5%"
        },
        {
            criteria: "General features",
            weight: "8%"
        },
        {
            criteria: "Pricing",
            weight: "10.5%"
        },
        {
            criteria: "Interface",
            weight: "10.5%"
        },
        {
            criteria: "Task management",
            weight: "10%"
        },
        {
            criteria: "Integrations",
            weight: "10%"
        },
        {
            criteria: "Automation",
            weight: "10%"
        },
        {
            criteria: "Project planning and scheduling",
            weight: "10%"
        },
        {
            criteria: "Collaboration tools",
            weight: "10%"
        },
        {
            criteria: "Resource management",
            weight: "7%"
        },
        {
            criteria: "Reporting and analysis",
            weight: "5%"
        },
        {
            criteria: "User security and permissions",
            weight: "4%"
        },
        {
            criteria: "TOTAL",
            weight: "100%"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        children: "Best Project Management Software for 2025 | Complete Guide"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                        lineNumber: 1209,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Comprehensive guide to choosing the best project management software for your business needs."
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                        lineNumber: 1212,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:title",
                        content: "Best Project Management Software for 2025"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                        lineNumber: 1218,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:description",
                        content: "Comprehensive guide to choosing the best project management software for your business needs."
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                        lineNumber: 1222,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:image",
                        content: "https://blogs.compare-bazaar.com/images/blog3.webp"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                        lineNumber: 1226,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:image:width",
                        content: "1200"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                        lineNumber: 1230,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:image:height",
                        content: "627"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                        lineNumber: 1231,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:url",
                        content: "https://technology-advice.vercel.app/software-reviews/project-management"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                        lineNumber: 1232,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:type",
                        content: "article"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                        lineNumber: 1236,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:site_name",
                        content: "Technology Advice"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                        lineNumber: 1237,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                        lineNumber: 1240,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:title",
                        content: "Best Project Management Software for 2025"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                        lineNumber: 1241,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:description",
                        content: "Comprehensive guide to choosing the best project management software for your business needs."
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                        lineNumber: 1245,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:image",
                        content: "https://blogs.compare-bazaar.com/images/blog3.webp"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                        lineNumber: 1249,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "canonical",
                        href: "https://technology-advice.vercel.app/software-reviews/project-management"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                        lineNumber: 1254,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                lineNumber: 1208,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-[#0E1F1C] text-white relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-20 right-10 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 border border-white/10 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                        lineNumber: 1262,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-40 right-20 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border border-white/5 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                        lineNumber: 1263,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-20 left-10 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 border border-white/5 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                        lineNumber: 1264,
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
                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                lineNumber: 1279,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                            lineNumber: 1274,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            className: "text-white/80 hover:text-white transition-colors cursor-pointer",
                                            "aria-label": "Go to homepage",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Home"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                lineNumber: 1286,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                            lineNumber: 1281,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white/60",
                                            children: "›"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                            lineNumber: 1288,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white font-medium",
                                            children: "Best Project Management Software for 2025"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                            lineNumber: 1289,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                    lineNumber: 1273,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 1269,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-6xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 sm:mb-12 lg:mb-16",
                                    children: [
                                        "Best Project Management Software for",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block mt-2 sm:mt-4",
                                            children: "2025"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                            lineNumber: 1299,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                    lineNumber: 1297,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 1296,
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
                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                            lineNumber: 1308,
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
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 1311,
                                                        columnNumber: 19
                                                    }, this),
                                                    " ",
                                                    "is able to offer our services for free because some vendors may pay us for web traffic or other sales opportunities. Our mission is to help technology buyers make better purchasing decisions, so we provide you with information for all vendors — even those that don't pay us."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                lineNumber: 1310,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                            lineNumber: 1309,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                    lineNumber: 1307,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 1306,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                        lineNumber: 1267,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                lineNumber: 1260,
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
                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                            lineNumber: 1339,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                            className: "space-y-2",
                                            children: tableOfContents.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `#${item.id}`,
                                                    className: `block py-2 px-3 rounded-md text-sm transition-colors duration-200 ${item.active ? "bg-green-50 text-[#386861] border-l-4 border-green-500 font-medium" : "text-gray-600 hover:text-black hover:bg-gray-100"}`,
                                                    children: item.title
                                                }, index, false, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 1344,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                            lineNumber: 1342,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-8 pt-6 border-t border-gray-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-gray-900 mb-4",
                                                    children: "Share this article"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 1360,
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
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 1374,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 1369,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 1364,
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
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 1387,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 1382,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 1377,
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
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 1400,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 1395,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 1390,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 1363,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                            lineNumber: 1359,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                    lineNumber: 1335,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 1334,
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
                                                        children: "What is project management software?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 1415,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 1414,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "prose prose-lg max-w-none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 leading-relaxed mb-6",
                                                            children: [
                                                                "Project management (PM) software helps businesses and organizations achieve their goals and objectives more efficiently and effectively. It guides project managers and stakeholders through different",
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: "#",
                                                                    className: "text-[#386861] hover:text-green-700 underline",
                                                                    children: "phases of the project management life cycle"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 1427,
                                                                    columnNumber: 23
                                                                }, this),
                                                                ", especially during",
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: "#",
                                                                    className: "text-[#386861] hover:text-green-700 underline",
                                                                    children: "project planning"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 1434,
                                                                    columnNumber: 23
                                                                }, this),
                                                                ", execution, and monitoring."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 1422,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 leading-relaxed mb-8",
                                                            children: [
                                                                "With functions that include",
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: "#",
                                                                    className: "text-[#386861] hover:text-green-700 underline",
                                                                    children: "project planning"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 1445,
                                                                    columnNumber: 23
                                                                }, this),
                                                                ",",
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: "#",
                                                                    className: "text-[#386861] hover:text-green-700 underline",
                                                                    children: "scheduling"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 1452,
                                                                    columnNumber: 23
                                                                }, this),
                                                                ",",
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: "#",
                                                                    className: "text-[#386861] hover:text-green-700 underline",
                                                                    children: "task management"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 1459,
                                                                    columnNumber: 23
                                                                }, this),
                                                                ", and resource allocation, the right",
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: "#",
                                                                    className: "text-[#386861] hover:text-green-700 underline",
                                                                    children: "project management"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 1466,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " ",
                                                                "tool enables teams to streamline the intricate project management process. Furthermore, these PM software solutions help stakeholders stay on the same page through features that enhance file sharing, communication, and",
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: "#",
                                                                    className: "text-[#386861] hover:text-green-700 underline",
                                                                    children: "collaboration"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 1476,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 1443,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 leading-relaxed mb-6",
                                                            children: "I reviewed seven project management software solutions and narrowed my list of recommendations to the best of the best:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 1485,
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
                                                                                className: "w-3 h-3 text-[#386861] ",
                                                                                fill: "currentColor",
                                                                                viewBox: "0 0 20 20",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    fillRule: "evenodd",
                                                                                    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                                                    clipRule: "evenodd"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                    lineNumber: 1500,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                lineNumber: 1495,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 1494,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-gray-700",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                    href: "#",
                                                                                    className: "text-[#386861] hover:text-green-700 font-medium underline",
                                                                                    children: "monday.com"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                    lineNumber: 1508,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                " ",
                                                                                "is the best overall project management software."
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 1507,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 1493,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-start space-x-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                className: "w-3 h-3 text-[#386861] ",
                                                                                fill: "currentColor",
                                                                                viewBox: "0 0 20 20",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    fillRule: "evenodd",
                                                                                    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                                                    clipRule: "evenodd"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                    lineNumber: 1524,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                lineNumber: 1519,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 1518,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-gray-700",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                    href: "#",
                                                                                    className: "text-[#386861] hover:text-green-700 font-medium underline",
                                                                                    children: "Asana"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                    lineNumber: 1532,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                " ",
                                                                                "is the best project management software for ease of use."
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 1531,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 1517,
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
                                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                    lineNumber: 1549,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                lineNumber: 1544,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 1543,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-gray-700",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                    href: "#",
                                                                                    className: "text-[#386861] hover:text-green-700 font-medium underline",
                                                                                    children: "Wrike"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                    lineNumber: 1557,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                " ",
                                                                                "is the most versatile project management software."
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 1556,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 1542,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-start space-x-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                className: "w-3 h-3 text-[#386861] ",
                                                                                fill: "currentColor",
                                                                                viewBox: "0 0 20 20",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    fillRule: "evenodd",
                                                                                    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                                                    clipRule: "evenodd"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                    lineNumber: 1573,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                lineNumber: 1568,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 1567,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-gray-700",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                    href: "#",
                                                                                    className: "text-[#386861] hover:text-green-700 font-medium underline",
                                                                                    children: "Jira"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                    lineNumber: 1581,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                " ",
                                                                                "is the best Agile project management software."
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 1580,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 1566,
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
                                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                    lineNumber: 1597,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                lineNumber: 1592,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 1591,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-gray-700",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                    href: "#",
                                                                                    className: "text-[#386861] hover:text-green-700 font-medium underline",
                                                                                    children: "ClickUp"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                    lineNumber: 1605,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                " ",
                                                                                "is the best project management software for resource management."
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 1604,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 1590,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 1492,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "border border-gray-200 rounded-lg",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>toggleSection("update-notes"),
                                                                            className: "w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors duration-200",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                    className: "text-lg font-semibold text-gray-900",
                                                                                    children: "Update notes"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                    lineNumber: 1625,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-[#386861]",
                                                                                    children: expandedSections["update-notes"] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                                                        className: "w-5 h-5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                        lineNumber: 1630,
                                                                                        columnNumber: 31
                                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                        className: "w-5 h-5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                        lineNumber: 1632,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                    lineNumber: 1628,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 1621,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        expandedSections["update-notes"] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "px-4 pb-4 border-t border-gray-200",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "pt-4",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                    className: "space-y-2 text-gray-700",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                            children: "• October 25, 2024: Kara Sherrer revised the copy for clarity and accuracy, in addition to adding more screenshots of each software."
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                            lineNumber: 1640,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                            children: [
                                                                                                "• February 23, 2024:",
                                                                                                " ",
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                    href: "#",
                                                                                                    className: "text-[#386861] hover:text-green-700 font-medium underline",
                                                                                                    children: [
                                                                                                        "Irene Casucian​",
                                                                                                        " "
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                                    lineNumber: 1647,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                "​ reviewed and revised the copy for clarity, accuracy, and depth. She added our expert recommendations to help project managers make informed decisions in selecting the right project management software for their needs. She also added dynamic design elements to improve the visual flow of information."
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                            lineNumber: 1645,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                    lineNumber: 1639,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                lineNumber: 1638,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 1637,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 1620,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "border border-gray-200 rounded-lg",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>toggleSection("methodology"),
                                                                            className: "w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors duration-200",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                    className: "text-lg font-semibold text-gray-900",
                                                                                    children: "Our methodology"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                    lineNumber: 1673,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-[#386861]",
                                                                                    children: expandedSections["methodology"] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                                                        className: "w-5 h-5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                        lineNumber: 1678,
                                                                                        columnNumber: 31
                                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                        className: "w-5 h-5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                        lineNumber: 1680,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                    lineNumber: 1676,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 1669,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        expandedSections["methodology"] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "px-4 pb-4 border-t border-gray-200",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "pt-4 space-y-4",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-gray-700",
                                                                                        children: "I picked my recommendations with you in mind."
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                        lineNumber: 1687,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-gray-700",
                                                                                        children: "First, I evaluated seven of the leading project management software options available today. To compile my research, I reviewed vendor demos, technical documentation, and user reviews from customers like you."
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                        lineNumber: 1690,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-gray-700",
                                                                                        children: "I then narrowed my selections to the platforms that best addressed the usual concerns among project management software users: task management, automation capabilities, integration, collaboration, scalability, project planning, and resource management."
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                        lineNumber: 1697,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-gray-700 mb-4",
                                                                                        children: "During our research, I evaluated the following vendors:"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                        lineNumber: 1705,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                                                                        className: "space-y-2 text-gray-700",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                children: [
                                                                                                    "1.",
                                                                                                    " ",
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                        href: "#",
                                                                                                        className: "text-[#386861] hover:text-green-700 underline",
                                                                                                        children: "monday.com"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                                        lineNumber: 1712,
                                                                                                        columnNumber: 35
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                                lineNumber: 1710,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                children: [
                                                                                                    "2.",
                                                                                                    " ",
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                        href: "#",
                                                                                                        className: "text-[#386861] hover:text-green-700 underline",
                                                                                                        children: "Jira"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                                        lineNumber: 1721,
                                                                                                        columnNumber: 35
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                                lineNumber: 1719,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                children: [
                                                                                                    "3.",
                                                                                                    " ",
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                        href: "#",
                                                                                                        className: "text-[#386861] hover:text-green-700 underline",
                                                                                                        children: "Trello"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                                        lineNumber: 1730,
                                                                                                        columnNumber: 35
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                                lineNumber: 1728,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                children: [
                                                                                                    "4.",
                                                                                                    " ",
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                        href: "#",
                                                                                                        className: "text-[#386861] hover:text-green-700 underline",
                                                                                                        children: "Asana"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                                        lineNumber: 1739,
                                                                                                        columnNumber: 35
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                                lineNumber: 1737,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                children: [
                                                                                                    "5.",
                                                                                                    " ",
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                        href: "#",
                                                                                                        className: "text-[#386861] hover:text-green-700 underline",
                                                                                                        children: "Airtable"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                                        lineNumber: 1748,
                                                                                                        columnNumber: 35
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                                lineNumber: 1746,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                children: [
                                                                                                    "6.",
                                                                                                    " ",
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                        href: "#",
                                                                                                        className: "text-[#386861] hover:text-green-700 underline",
                                                                                                        children: "Wrike"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                                        lineNumber: 1757,
                                                                                                        columnNumber: 35
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                                lineNumber: 1755,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                children: [
                                                                                                    "7.",
                                                                                                    " ",
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                        href: "#",
                                                                                                        className: "text-[#386861] hover:text-green-700 underline",
                                                                                                        children: "ClickUp"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                                        lineNumber: 1766,
                                                                                                        columnNumber: 35
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                                lineNumber: 1764,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                        lineNumber: 1709,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-gray-700 mt-4",
                                                                                        children: "As the market evolves, I continually reevaluate my choices so you always receive the best insight for purchasing decisions."
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                        lineNumber: 1774,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "mt-6",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                                className: "text-xl font-semibold text-gray-900 mb-4",
                                                                                                children: "Evaluation rubric"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                                lineNumber: 1782,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "overflow-x-auto",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                                                                    className: "w-full border-collapse border border-gray-300",
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                                                        children: evaluationCriteria.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                                                                className: index === evaluationCriteria.length - 1 ? "bg-gray-50 font-semibold" : "",
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                                        className: "border border-gray-300 px-4 py-3 text-gray-900",
                                                                                                                        children: item.criteria
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                                                        lineNumber: 1798,
                                                                                                                        columnNumber: 43
                                                                                                                    }, this),
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                                        className: "border border-gray-300 px-4 py-3 text-gray-900",
                                                                                                                        children: item.weight
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                                                        lineNumber: 1801,
                                                                                                                        columnNumber: 43
                                                                                                                    }, this)
                                                                                                                ]
                                                                                                            }, index, true, {
                                                                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                                                lineNumber: 1789,
                                                                                                                columnNumber: 41
                                                                                                            }, this))
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                                        lineNumber: 1787,
                                                                                                        columnNumber: 37
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                                    lineNumber: 1786,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                                lineNumber: 1785,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                        lineNumber: 1781,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                lineNumber: 1686,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 1685,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 1668,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 1618,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 1421,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                            lineNumber: 1412,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 1411,
                                        columnNumber: 15
                                    }, this),
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
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 1822,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center space-x-2 text-sm text-gray-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Advertisement"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 1826,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-4 h-4 rounded-full bg-gray-400 flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-white  font-bold",
                                                                    children: "i"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 1828,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 1827,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 1825,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                lineNumber: 1821,
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
                                                                    className: "flex items-center space-x-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-16 h-16 flex-shrink-0",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                src: "/images/project3.jpg",
                                                                                alt: "Zoho Logo",
                                                                                width: 64,
                                                                                height: 64,
                                                                                className: "w-full h-full object-contain",
                                                                                priority: false
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                lineNumber: 1838,
                                                                                columnNumber: 9
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 1837,
                                                                            columnNumber: 7
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xl font-bold text-gray-900",
                                                                            children: [
                                                                                "Zoho",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                    lineNumber: 1849,
                                                                                    columnNumber: 9
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-lg",
                                                                                    children: "Projects"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                    lineNumber: 1850,
                                                                                    columnNumber: 9
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 1847,
                                                                            columnNumber: 7
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 1836,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 1835,
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
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 1856,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 1857,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 1855,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 1854,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 1834,
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
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 1864,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-medium text-gray-900",
                                                                        children: "Any Company Size"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 1865,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 1863,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-gray-600 mb-1",
                                                                        children: "Core Features"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 1870,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-medium text-gray-900",
                                                                        children: "Agile Development, Analytics / Reports, API, and 15 more"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 1871,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 1869,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-gray-600 mb-1",
                                                                        children: "Integrations"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 1876,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-medium text-gray-900",
                                                                        children: "BitBucket, GitHub, Google Calendar, and 7 more"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 1877,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 1875,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 1862,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                lineNumber: 1833,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 1820,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        id: "best-pm-software",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-3xl font-bold mt-4 text-black mb-2",
                                                children: "What is the best project management software?"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                lineNumber: 1889,
                                                columnNumber: 17
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
                                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                lineNumber: 1903,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 1902,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                            className: "text-2xl font-bold text-black",
                                                                            children: tool.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 1911,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 1901,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: tool.button.link,
                                                                    className: "bg-[#386861] text-white px-4 py-2 rounded-full text-sm hover:bg-green-700",
                                                                    children: tool.button.text
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 1915,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 1900,
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
                                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                    lineNumber: 1928,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: score.score
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                    lineNumber: 1929,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 1927,
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
                                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                lineNumber: 1932,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 1931,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, index, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 1926,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 1924,
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
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 1948,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                            className: "list-disc pl-5 space-y-1",
                                                                            children: tool.pros.map((pro, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: pro
                                                                                }, index, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                    lineNumber: 1951,
                                                                                    columnNumber: 29
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 1949,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 1947,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "text-lg font-semibold mb-2",
                                                                            children: "Cons"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 1956,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                            className: "list-disc pl-5 space-y-1",
                                                                            children: tool.cons.map((con, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: con
                                                                                }, index, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                    lineNumber: 1959,
                                                                                    columnNumber: 29
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 1957,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 1955,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 1946,
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
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 1967,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mb-4",
                                                                    children: tool.why.intro
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 1970,
                                                                    columnNumber: 23
                                                                }, this),
                                                                tool.why.bullets && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "list-disc pl-5 space-y-1 mb-4",
                                                                    children: tool.why.bullets.map((bullet, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: bullet
                                                                        }, index, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 1974,
                                                                            columnNumber: 29
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 1972,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: tool.why.outro
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 1978,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 1966,
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
                                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                lineNumber: 1995,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[#386861]",
                                                                                children: openSections[sectionKey] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                                                    className: "w-5 h-5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                    lineNumber: 1998,
                                                                                    columnNumber: 37
                                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                    className: "w-5 h-5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                    lineNumber: 2000,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                lineNumber: 1996,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 1991,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    openSections[sectionKey] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-2 text-gray-700",
                                                                        children: typeof content === "string" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            children: content
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 2007,
                                                                            columnNumber: 37
                                                                        }, this) : content
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2005,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, sectionKey, true, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 1987,
                                                                columnNumber: 29
                                                            }, this);
                                                        })
                                                    ]
                                                }, tool.id, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 1895,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 1886,
                                        columnNumber: 15
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
                                                                        src: "/images/project3.jpg" // Replace with your actual logo path
                                                                        ,
                                                                        alt: "Zoho Projects Logo",
                                                                        width: 80,
                                                                        height: 80,
                                                                        className: "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain",
                                                                        priority: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2030,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 2029,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "min-w-0 flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                            className: "text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2",
                                                                            children: "Zoho Projects"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 2042,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "/reviews/zoho-projects",
                                                                            className: "text-sm sm:text-base md:text-lg text-[#386861] hover:text-blue-800 hover:underline transition-colors duration-200 font-medium",
                                                                            children: "Leave a Review"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 2045,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 2041,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 2027,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-[#386861] hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                        className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2057,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "Compare"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 2056,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 2055,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 2026,
                                                    columnNumber: 19
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
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 2066,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-600",
                                                                        children: "Micro (0-49 Employees),"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2070,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-600",
                                                                        children: "Medium (250-999 Employees),"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2073,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-600",
                                                                        children: "Enterprise (5,000+ Employees),"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2076,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-600",
                                                                        children: "Large (1,000-4,999 Employees),"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2079,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-600",
                                                                        children: "Small (50-249 Employees),"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2082,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-600",
                                                                        children: "Any Company Size"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2085,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 2069,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 2065,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 2064,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-6 sm:mb-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6",
                                                            children: "Zoho Projects is an online project management software that helps teams plan projects and track them efficiently to the finish line. By intuitive reporting of project progress and budget health, the solution enables teams to make quick decisions. Catering to all kinds of teams, Zoho Projects facilitates automating tasks, workflows, and project notifications in a bid to improve productivity."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 2092,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/learn-more/zoho-projects",
                                                            className: "text-sm sm:text-base md:text-lg text-[#386861]  hover:text-green-800 hover:underline transition-colors duration-200 font-semibold",
                                                            children: "Learn More About Zoho Projects"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 2102,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 2091,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-end",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "https://www.zoho.com/projects/",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-[#386861] hover:bg-green-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group",
                                                        children: [
                                                            "Visit Website",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 2119,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 2112,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 2111,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                            lineNumber: 2025,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 2024,
                                        columnNumber: 15
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
                                                                        src: "/images/2-plan.png" // Replace with your actual logo path
                                                                        ,
                                                                        alt: "2-Plan Logo",
                                                                        width: 80,
                                                                        height: 80,
                                                                        className: "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain",
                                                                        priority: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2132,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 2131,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "min-w-0 flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                            className: "text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2",
                                                                            children: "2-Plan"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 2144,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "/reviews/zoho-projects",
                                                                            className: "text-sm sm:text-base md:text-lg text-[#386861] hover:text-blue-800 hover:underline transition-colors duration-200 font-medium",
                                                                            children: "Leave a Review"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 2147,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 2143,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 2129,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-[#386861] hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                        className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2159,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "Compare"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 2158,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 2157,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 2128,
                                                    columnNumber: 19
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
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 2168,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-600",
                                                                        children: "Medium (250-999 Employees),"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2172,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-600",
                                                                        children: "Enterprise (5,000+ Employees),"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2175,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-600",
                                                                        children: "Large (1,000-4,999 Employees),"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2178,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 2171,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 2167,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 2166,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-6 sm:mb-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6",
                                                            children: "2-plan, a German company, has developed free project management software with many modules for business owners to track and manage all aspects of their business with greater efficacy. TechnologyAdvice can let prospective users engage with a free online demo, allowing for more thorough evaluation before they download one of 2-plan's project management software solutions."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 2187,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/learn-more/zoho-projects",
                                                            className: "text-sm sm:text-base md:text-lg text-[#386861]  hover:text-green-800 hover:underline transition-colors duration-200 font-semibold",
                                                            children: "Learn More About 2-Plan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 2197,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 2186,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-end",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "https://www.2-plan.com/",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-[#386861] hover:bg-green-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group",
                                                        children: [
                                                            "Visit Website",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 2214,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 2207,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 2206,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                            lineNumber: 2127,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 2126,
                                        columnNumber: 15
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
                                                                        src: "/images/24seven.png" // Replace with your actual logo path
                                                                        ,
                                                                        alt: " 24SevenOffice Logo",
                                                                        width: 80,
                                                                        height: 80,
                                                                        className: "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain",
                                                                        priority: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2227,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 2226,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "min-w-0 flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                            className: "text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2",
                                                                            children: "24SevenOffice"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 2239,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-[#386861] text-lg",
                                                                                        children: "★★★★★"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                        lineNumber: 2244,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                    lineNumber: 2243,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-sm sm:text-base font-medium text-gray-700",
                                                                                    children: "5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                    lineNumber: 2246,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-sm text-gray-500",
                                                                                    children: "( 1 review )"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                    lineNumber: 2247,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 2242,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 2238,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 2224,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text- [#386861]hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                        className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2255,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "Compare"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 2254,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 2253,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 2223,
                                                    columnNumber: 19
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
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 2264,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-600",
                                                                        children: "Medium (250-999 Employees),"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2268,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-600",
                                                                        children: "Enterprise (5,000+ Employees),"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2271,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-600",
                                                                        children: "Large (1,000-4,999 Employees),"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2274,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 2267,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 2263,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 2262,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-6 sm:mb-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6",
                                                            children: "24SevenOffice is optimized for companies that need a powerful, customizable project management solution. 24SevenOffice is versatile and powerful enough that many businesses consider the product to be a full enterprise resource planning (ERP) solution."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 2283,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/learn-more/24SevenOffice",
                                                            className: "text-sm sm:text-base md:text-lg text-[#386861]  hover:text-green-800 hover:underline transition-colors duration-200 font-semibold",
                                                            children: "Learn More About 24SevenOffice"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 2291,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 2282,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-end",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "https://www.24sevenoffice.com/",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-[#386861] hover:bg-green-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group",
                                                        children: [
                                                            "Visit Website",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 2308,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 2301,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 2300,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                            lineNumber: 2222,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 2221,
                                        columnNumber: 15
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
                                                                        src: "/images/4cast.png" // Replace with your actual logo path
                                                                        ,
                                                                        alt: "4castplus Logo",
                                                                        width: 80,
                                                                        height: 80,
                                                                        className: "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain",
                                                                        priority: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2321,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 2320,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "min-w-0 flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                            className: "text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2",
                                                                            children: "4castplus"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 2333,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-[#386861] text-lg",
                                                                                            children: "★★★★"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                            lineNumber: 2338,
                                                                                            columnNumber: 29
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-gray-300 text-lg",
                                                                                            children: "★"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                            lineNumber: 2339,
                                                                                            columnNumber: 29
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                    lineNumber: 2337,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-sm sm:text-base font-medium text-gray-700",
                                                                                    children: "4.8"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                    lineNumber: 2341,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-sm text-gray-500",
                                                                                    children: "( 7 reviews )"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                    lineNumber: 2342,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 2336,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 2332,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 2318,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-[#386861] hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                        className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2350,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "Compare"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 2349,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 2348,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 2317,
                                                    columnNumber: 19
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
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 2359,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-600",
                                                                        children: "Medium (250-999 Employees),"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2363,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-600",
                                                                        children: "Enterprise (5,000+ Employees),"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2366,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-600",
                                                                        children: "Large (1,000-4,999 Employees),"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2369,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 2362,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 2358,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 2357,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-6 sm:mb-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6",
                                                            children: "4castplus brings end-to-end project controls, procurement, and construction management capabilities in a web and cloud-based platform. It empowers construction, energy, utilities, and EPC companies to move from difficult spreadsheet-based management of large complex projects into an organized solution that keeps projects on budget, on schedule, and under control."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 2378,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/learn-more/4castplus",
                                                            className: "text-sm sm:text-base md:text-lg text-[#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-semibold",
                                                            children: "Learn More About 4castplus"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 2388,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 2377,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-end",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "https://www.4castplus.com/",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-[#386861] hover:bg-green-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group",
                                                        children: [
                                                            "Visit Website",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 2405,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 2398,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 2397,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                            lineNumber: 2316,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 2315,
                                        columnNumber: 15
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
                                                                        src: "/images/5day.png" // Replace with your actual logo path
                                                                        ,
                                                                        alt: "5day.io Logo",
                                                                        width: 80,
                                                                        height: 80,
                                                                        className: "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain",
                                                                        priority: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2418,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 2417,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "min-w-0 flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                            className: "text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2",
                                                                            children: "5day.io"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 2430,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "/reviews/zoho-projects",
                                                                            className: "text-sm sm:text-base md:text-lg text-[#386861] hover:text-blue-800 hover:underline transition-colors duration-200 font-medium",
                                                                            children: "Leave a Review"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 2433,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 2429,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 2415,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-[#386861] hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                        className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2445,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "Compare"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 2444,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 2443,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 2414,
                                                    columnNumber: 19
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
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 2454,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap items-center gap-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-600",
                                                                    children: "Micro (0-49 Employees),"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 2458,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 2457,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 2453,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 2452,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-6 sm:mb-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6",
                                                            children: "Managing projects is tough. And tools out there are complex beyond reason. 5day.io is a modern work management tool that makes managing projects, tasks, and collaboration easy."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 2467,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/learn-more/5day-io",
                                                            className: "text-sm sm:text-base md:text-lg text-[#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-semibold",
                                                            children: "Learn More About 5day.io"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 2474,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 2466,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-end",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "https://www.zoho.com/projects/",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-[#386861] hover:bg-green-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group",
                                                        children: [
                                                            "Visit Website",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 2491,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 2484,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 2483,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                            lineNumber: 2413,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 2412,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative overflow-hidden rounded-2xl bg-[#386861] mt-4 px-8 py-12",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 left-0 w-32 h-32 border rounded-full opacity-20 -translate-x-16 -translate-y-16"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                lineNumber: 2498,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-white text-2xl font-medium mb-8",
                                                        children: "Interested in seeing your product here?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 2500,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/list-product",
                                                        className: "inline-flex items-center bg-[#386861] text-white font-medium px-8 py-4 rounded-full transition-colors duration-200",
                                                        children: [
                                                            "List Your Product",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "ml-2 w-5 h-5",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M9 5l7 7-7 7"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 2514,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 2508,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 2503,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                lineNumber: 2499,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 2497,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "#",
                                            className: " hover:underline",
                                            children: "Why is TechnologyAdvice Free?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                            lineNumber: 2530,
                                            columnNumber: 3
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 2529,
                                        columnNumber: 1
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
                                                                        src: "/images/5pm.jpg" // Replace with your actual logo path
                                                                        ,
                                                                        alt: "5pm-Disarea Logo",
                                                                        width: 80,
                                                                        height: 80,
                                                                        className: "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain",
                                                                        priority: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2542,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 2541,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "min-w-0 flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                            className: "text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2",
                                                                            children: "5pm-Disarea"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 2554,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "/reviews/zoho-projects",
                                                                            className: "text-sm sm:text-base md:text-lg text-[#386861] hover:text-blue-800 hover:underline transition-colors duration-200 font-medium",
                                                                            children: "Leave a Review"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 2557,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 2553,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 2539,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-[#386861] hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                        className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2569,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "Compare"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 2568,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 2567,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 2538,
                                                    columnNumber: 19
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
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 2578,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-600",
                                                                        children: "Medium (250-999 Employees),"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2582,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-600",
                                                                        children: "Enterprise (5,000+ Employees),"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2585,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-600",
                                                                        children: "Large (1,000-4,999 Employees),"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2588,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 2581,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 2577,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 2576,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-6 sm:mb-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6",
                                                            children: "5pm is a web-based project management software solution that helps employees manage projects, tasks, notes, files, and time through an easily accessible cloud platform. Accessed through a customizable interface, 5pm also offers email integration, report generation, and an interactive drag-and-drop timeline with a Gantt-style view"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 2597,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/learn-more/zoho-projects",
                                                            className: "text-sm sm:text-base md:text-lg text-[#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-semibold",
                                                            children: "Learn More About 5pm-Disarea"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 2606,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 2596,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-end",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "https://www.5pmweb.com/",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-[#386861] hover:bg-green-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group",
                                                        children: [
                                                            "Visit Website",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 2623,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 2616,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 2615,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                            lineNumber: 2537,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 2536,
                                        columnNumber: 15
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
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2636,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 2635,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "min-w-0 flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                            className: "text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2",
                                                                            children: "Accelo"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 2648,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "/reviews/zoho-projects",
                                                                            className: "text-sm sm:text-base md:text-lg text-[#386861] hover:text-blue-800 hover:underline transition-colors duration-200 font-medium",
                                                                            children: "Leave a Review"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 2651,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 2647,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 2633,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-[#386861] hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                        className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2663,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "Compare"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 2662,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 2661,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 2632,
                                                    columnNumber: 19
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
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 2672,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-600",
                                                                        children: "Medium (250-999 Employees),"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2676,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-600",
                                                                        children: "Enterprise (5,000+ Employees),"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2679,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-600",
                                                                        children: "Large (1,000-4,999 Employees),"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2682,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-600",
                                                                        children: "Small (50-249 Employees),"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2685,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 2675,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 2671,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 2670,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-6 sm:mb-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6",
                                                            children: "Accelo is a comprehensive Professional Services Automation (PSA) platform designed to help service organizations streamline operations, manage projects, and improve profitability. By centralizing business processes, it provides full visibility, real-time insights, and automation, helping teams deliver work more efficiently and detect issues early. Accelo supports scalability and enables growth with integrated solutions for project, client, and financial management from quote-to-cash"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 2694,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/learn-more/zoho-projects",
                                                            className: "text-sm sm:text-base md:text-lg text-[#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-semibold",
                                                            children: "Learn More About Accelo"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 2706,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 2693,
                                                    columnNumber: 19
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
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 2723,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 2716,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 2715,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                            lineNumber: 2631,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 2630,
                                        columnNumber: 15
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
                                                                        src: "/images/acculynx.jpg" // Replace with your actual logo path
                                                                        ,
                                                                        alt: "AccuLynx Logo",
                                                                        width: 80,
                                                                        height: 80,
                                                                        className: "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain",
                                                                        priority: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2736,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 2735,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "min-w-0 flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                            className: "text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2",
                                                                            children: "AccuLynx"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 2748,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "/reviews/zoho-projects",
                                                                            className: "text-sm sm:text-base md:text-lg text-[#386861] hover:text-blue-800 hover:underline transition-colors duration-200 font-medium",
                                                                            children: "Leave a Review"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 2751,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 2747,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 2733,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-[#386861] hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                        className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2763,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "Compare"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 2762,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 2761,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 2732,
                                                    columnNumber: 19
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
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 2772,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-600",
                                                                        children: "Micro (0-49 Employees),"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2776,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-600",
                                                                        children: "Medium (250-999 Employees),"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2779,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-600",
                                                                        children: "Enterprise (5,000+ Employees),"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2782,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-600",
                                                                        children: "Large (1,000-4,999 Employees),"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2785,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-600",
                                                                        children: "Small (50-249 Employees),"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2788,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 2775,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 2771,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 2770,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-6 sm:mb-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6",
                                                            children: "AccuLynx is a business management cloud-based CRM designed for the roofing, gutter, siding, windows, and other exterior construction trades"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 2797,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/learn-more/zoho-projects",
                                                            className: "text-sm sm:text-base md:text-lg text-[#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-semibold",
                                                            children: "Learn More About AccuLynx"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 2803,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 2796,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-end",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "https://www.acculynx.com/",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-[#386861] hover:bg-green-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group",
                                                        children: [
                                                            "Visit Website",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 2820,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 2813,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 2812,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                            lineNumber: 2731,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 2730,
                                        columnNumber: 15
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
                                                                        src: "/images/aceproject.png" // Replace with your actual logo path
                                                                        ,
                                                                        alt: "AceProject Logo",
                                                                        width: 80,
                                                                        height: 80,
                                                                        className: "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain",
                                                                        priority: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2833,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 2832,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "min-w-0 flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                            className: "text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2",
                                                                            children: "AceProject"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 2845,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "/reviews/zoho-projects",
                                                                            className: "text-sm sm:text-base md:text-lg text-[#386861] hover:text-blue-800 hover:underline transition-colors duration-200 font-medium",
                                                                            children: "Leave a Review"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 2848,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 2844,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 2830,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-[#386861] hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                        className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2860,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "Compare"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 2859,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 2858,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 2829,
                                                    columnNumber: 19
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
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 2869,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-600",
                                                                        children: "Medium (250-999 Employees),"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2873,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-600",
                                                                        children: "Enterprise (5,000+ Employees),"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2876,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-600",
                                                                        children: "Large (1,000-4,999 Employees),"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2879,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 2872,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 2868,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 2867,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-6 sm:mb-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6",
                                                            children: "AceProject features a simple, intuitive input design and a visually rich interface, while still offering the capabilities and powerful features one expects in a sophisticated project management tool."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 2888,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/learn-more/zoho-projects",
                                                            className: "text-sm sm:text-base md:text-lg text-[#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-semibold",
                                                            children: "Learn More About AceProject"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 2895,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 2887,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-end",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "https://www.aceproject.com/",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-[#386861] hover:bg-green-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group",
                                                        children: [
                                                            "Visit Website",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 2912,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 2905,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 2904,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                            lineNumber: 2828,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 2827,
                                        columnNumber: 15
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
                                                                        src: "/images/aconex.jpg" // Replace with your actual logo path
                                                                        ,
                                                                        alt: "Aconex Logo",
                                                                        width: 80,
                                                                        height: 80,
                                                                        className: "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain",
                                                                        priority: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2925,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 2924,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "min-w-0 flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                            className: "text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2",
                                                                            children: "Aconex"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 2937,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "/reviews/zoho-projects",
                                                                            className: "text-sm sm:text-base md:text-lg text-[#386861] hover:text-blue-800 hover:underline transition-colors duration-200 font-medium",
                                                                            children: "Leave a Review"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 2940,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 2936,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 2922,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-[#386861] hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                        className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 2952,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "Compare"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 2951,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 2950,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 2921,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-6 sm:mb-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6",
                                                            children: "Aconex is a construction collaboration software platform used by field management, construction, and engineering firms."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 2960,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/learn-more/zoho-projects",
                                                            className: "text-sm sm:text-base md:text-lg text-[#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-semibold",
                                                            children: "Learn More About Aconex"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 2966,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 2959,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-end",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "https://www.aconex.com/",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-[#386861] hover:bg-green-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group",
                                                        children: [
                                                            "Visit Website",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 2983,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 2976,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 2975,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                            lineNumber: 2920,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 2919,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        id: "common-features",
                                        className: "mt-8 max-w-7xl mx-auto",
                                        children: [
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "max-w-none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16",
                                                        children: "Common project management software features"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 2994,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-8 sm:mb-10 md:mb-12 lg:mb-16",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed",
                                                            children: "Project management software covers a range of platforms, each with a slightly different mix of functionality. The best software for project management offers features that help the team build a project plan, track tasks through the different stages of the project, and collaborate on tasks to ensure on-time completion."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 3000,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 2999,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-12 sm:mb-16 md:mb-20 lg:mb-24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed",
                                                            children: [
                                                                "Not every project management system will include all these features, but many solutions are designed to help a",
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "/small-team-project-management",
                                                                    className: "text-[#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-medium",
                                                                    children: "small team"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 3015,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " ",
                                                                "or",
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "/enterprise-project-management",
                                                                    className: "text-[#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-medium",
                                                                    children: "enterprise"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 3022,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " ",
                                                                "corporation equally. When you prioritize the features you need from your project software, you'll be better equipped to find the right project management app for the projects you manage."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 3012,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 3011,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12",
                                                                children: "Scheduling"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 3038,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed",
                                                                children: "Scheduling a project involves constructing a project timeline, delegating tasks, and outlining the known checkpoints within the project. Project management software includes different types of scheduling features that give teams alternative ways to visualize their projects. While some project management tools use a traditional calendar view, more complex solutions like Gantt charts and horizontal project timelines help teams break large or complicated projects into manageable tasks. Scheduling features in a project management tool will help your team go from a mind map to a project plan quickly by giving insight into both time and resource management."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 3043,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 3036,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                lineNumber: 2992,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12",
                                                        children: "Forecasting"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 3062,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed",
                                                        children: [
                                                            "Forecasting features in PM tools use data from previous projects to predict the time and resource management considerations the team will need to complete the project. This project manager software feature helps project managers calculate the ROI of a project before significant resources have been invested. Forecasting takes into account the time spent on each task and the resources required to complete each task relative to the organization’s budget constraints and revenue goals. A forecasting tool can also",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/enterprise-project-management",
                                                                className: "text-[#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-medium",
                                                                children: "predict project risks"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 3077,
                                                                columnNumber: 21
                                                            }, this),
                                                            " ",
                                                            "and limitations that might potentially pose issues down the line."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 3067,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                lineNumber: 3060,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12",
                                                        children: "Resource management"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 3090,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed",
                                                        children: "Similar to forecasting, resource management features in project management software help project managers visualize where their business invests time, energy, and materials so the business can assess or change their plan when unforeseen challenges arise. It can be time-consuming to enter and set up a detailed inventory of company and human resources, but doing so allows project managers to anticipate bottlenecks and allocate resources."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 3095,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                lineNumber: 3088,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12",
                                                        children: "Budgeting and expense tracking"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 3109,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed",
                                                        children: "Although software that budgets for projects and businesses comes in standalone versions, certain PM software vendors include budgeting functions and expense tracking. These help companies run multiple projects at the same time while staying within budget. While budgeting software is somewhat self-explanatory, expense and project tracking software can provide PMs with the added benefit of knowing how team members accrue expenses throughout the lifespan of the project. Similar to time tracking, expense tracking provides valuable data that can be used to forecast future project costs and build budgets into upcoming project plans."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 3114,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                lineNumber: 3107,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12",
                                                        children: "Project, task, and contractor time management"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 3131,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed",
                                                        children: [
                                                            "As the name implies,",
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/enterprise-project-management",
                                                                className: "text- [#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-medium",
                                                                children: "time-tracking software"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 3138,
                                                                columnNumber: 21
                                                            }, this),
                                                            " ",
                                                            "tracks the amount of time each project contributor spends on their assigned tasks. Besides simply measuring productivity, time-tracking software also builds an archive of valuable data that can help businesses forecast completion dates for similar tasks or projects in the future. Time tracking is especially helpful when managing a remote team, contract workers, or part-time employees. In combination with collaboration features like messaging and alerts that enhance the project planning and execution experience, time tracking can keep the entire team on schedule."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 3136,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                lineNumber: 3129,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12",
                                                        children: "Task management"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 3159,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed",
                                                        children: [
                                                            "Task management refers to the assignment of different responsibilities to various members of the project team. Being able to quickly determine who’s contributed to what part of the project lets managers better identify bottlenecks and stay on top of the project’s progress.",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/enterprise-project-management",
                                                                className: "text-[#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-medium",
                                                                children: "Task management software"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 3170,
                                                                columnNumber: 21
                                                            }, this),
                                                            " ",
                                                            "is often used by solopreneurs and small teams, while project management software can manage hundreds of tasks that roll up to a larger project or set of projects."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 3164,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed",
                                                        children: [
                                                            "Also Read:",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/enterprise-project-management",
                                                                className: "text-[#386861]hover:text-green-800 hover:underline transition-colors duration-200 font-medium",
                                                                children: "Choose the Right Task Management Software: Types and Considerations"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 3182,
                                                                columnNumber: 21
                                                            }, this),
                                                            " "
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 3180,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed",
                                                        children: "While the concept of task management is simple, the software can be fairly robust. In the case of large, complex projects or multiple projects that span different departments, tasks are often interconnected or interdependent. Certain project management programs geared towards these types of undertakings feature the ability to assign tasks and dependencies to tasks, helping managers determine where a breakdown in productivity is occurring and assign the necessary resources to fix the problem. These features have increasingly added automation to speed the transition of tasks among team members and across the project workflow."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 3190,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                lineNumber: 3157,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12",
                                                        children: "Kanban charts for task management"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 3207,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed",
                                                        children: [
                                                            "Some PM tools rely on the",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/enterprise-project-management",
                                                                className: "text-[#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-medium",
                                                                children: "Kanban"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 3214,
                                                                columnNumber: 21
                                                            }, this),
                                                            " ",
                                                            "or project board method to visualize the working state of projects that require separate concurrent tasks. In a Kanban board project timeline, you organize each task on a digital card and move those cards across vertical lanes that represent work states."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 3212,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                lineNumber: 3205,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12",
                                                        children: "Gantt charts for task management"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 3230,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed",
                                                        children: [
                                                            "Task dependencies are often represented through",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/enterprise-project-management",
                                                                className: "text- [#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-medium",
                                                                children: "Gantt charts"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 3237,
                                                                columnNumber: 21
                                                            }, this),
                                                            " ",
                                                            "that show the estimated amount of time a task will take to complete. These project planning software charts also show the next tasks the team should perform, document which team member is in charge of which task, and facilitate work hand-offs or approvals. Gantt charts are a useful visual representation of the entire project plan in a compact space, and they can often be expanded or condensed to show more or less context where needed."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 3235,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                lineNumber: 3228,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12",
                                                        children: "Notes, tags, and linking for task management"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 3256,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed",
                                                        children: "Other common features of task management include notes, tags, and linking between tasks to show dependencies. Adding notes to a task helps keep track of individual changes to the project or provide references for the strategy associated with each task. Adding tags to tasks makes them easier to filter and find through unlimited projects in the management tool’s native search functionality. Linking tasks reminds stakeholders of other dependent tasks, gives further context to a single task, or provides context to interdependent tasks in multiple projects."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 3261,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                lineNumber: 3254,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12",
                                                        children: "Permission settings"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 3277,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed",
                                                        children: "Permission settings allow a project manager to decide who can view, edit, or change tasks and functions within the project. To manage a project effectively, a PM must judiciously mete out permissions and access across the software. Granular software permission settings help project managers avoid having to track down the sources of unauthorized changes to tasks or entire phases of the project. Permission settings are especially important for teams that administrate multiple projects across many departments using the same software for project management. Look for pre-set or role-based permission settings to manage unlimited users efficiently from a single dashboard."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 3282,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                lineNumber: 3275,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12",
                                                        children: "Automation"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 3300,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed",
                                                        children: "Task and workflow automation helps speed projects to completion. The software is programmed to respond to a defined event with an immediate response, saving time across many areas. For example, project assets may be sent for approval upon completion or alert notifications will be sent if budgets exceed a pre-set threshold. Automation features may also automatically schedule recurring tasks for completion, which reduces the amount of manual work the project manager is required to do on any given day."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 3305,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                lineNumber: 3298,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12",
                                                        children: "Analysis and report dashboards"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 3320,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed",
                                                        children: "Analysis and reporting functions let project managers visualize project data in ways that uncover time, resource, and work inefficiencies. This type of data can be critical to making mid-project pivots, especially if it’s presented in a dashboard that can provide a quick visual reference. If a task needs additional resources or a department is moving slower than others, in-depth analysis features will help PMs rectify or leverage the situation."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 3325,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                lineNumber: 3318,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12",
                                                        children: "Document sharing"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 3339,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed",
                                                        children: "While email remains a mainstay of the collaboration-focused work environment, project management and cloud computing software has enabled teams to share documents in ways that boost productivity and maximize time efficiency. Many project management software will allow users to upload documents and attach them to projects or tasks, making it easy to locate that project’s resources."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 3344,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed",
                                                        children: "The depth of such functionality varies from the simplicity of a collaboration system such as Google Drive to full-fledged wikis that house all of a project’s relevant materials. Comprehensive sharing solutions often feature audit trails and version control that record the history of each task and project. Audit trails let project managers view task progress and investigate challenges that team members may be experiencing."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 3353,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                lineNumber: 3337,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12",
                                                        children: "Internal messaging"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 3367,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed",
                                                        children: "Messaging and meeting functions that are built into the tool or integrated with the system strengthen communications between team members. These features come in standalone versions such as Slack but can also be found in comprehensive or all-in-one project management solutions. In-platform messaging feature lets teammates comment on documents, send messages directly to one another, and provide context in full-group documents."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 3372,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                lineNumber: 3365,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 2990,
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
                                                        children: "How to choose the right PM software for your project"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 3391,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-8 sm:mb-10 md:mb-12 lg:mb-16",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed",
                                                            children: "Selecting the best software for your project management needs is crucial because it directly impacts a project’s efficiency, productivity, and success. Selecting the right project management tool is all about understanding your project’s needs, picking out must-have features, knowing your team, and ensuring it provides excellent value for your money."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 3397,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 3396,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12",
                                                                children: "Understand project requirements"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 3410,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed",
                                                                children: "Clearly define your project’s scope, complexity, and specific needs. This understanding helps you identify a tool that aligns with the project’s goals and challenges."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 3415,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 3409,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12",
                                                                children: "Identify must-have features"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 3424,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed",
                                                                children: "Determine the essential features your project cannot do without. These may include task management, time tracking, or reporting capabilities, depending on the nature of your project."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 3429,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 3423,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12",
                                                                children: "Evaluate team size and collaboration needs"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 3439,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed",
                                                                children: "Consider how your team communicates and collaborates. Look for tools that support these needs through integrated chat functions, file sharing, or collaborative workspaces."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 3444,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 3438,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12",
                                                                children: "Consider integration capabilities"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 3453,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed",
                                                                children: "Assess the need for the PM tool to integrate with other software your team uses. Seamless integration can significantly improve workflow efficiency."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 3458,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 3452,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12",
                                                                children: "Assess user experience"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 3466,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed",
                                                                children: "Check if the tool is user-friendly and has a gentle learning curve. A good user experience increases adoption rates and overall productivity."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 3471,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 3465,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12",
                                                                children: "Determine budget and ROI"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 3479,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed",
                                                                children: "Consider the cost of the tool and weigh it against the expected return on investment. The tool should be cost-effective and contribute to the overall financial health of the project."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 3484,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed",
                                                                children: "If you’re looking for specific types of project management tools, visit our other project management categories for product overviews, reviews, and to get recommendations:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 3490,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mb-8",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "space-y-3 list-disc pl-5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                href: "#",
                                                                                className: "text-[#386861] hover:text-green-700 font-medium underline",
                                                                                children: "Agile Project Management Software"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                lineNumber: 3498,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 3497,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                href: "#",
                                                                                className: "text-[#386861] hover:text-green-700 font-medium underline",
                                                                                children: "Bug Tracking Software"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                lineNumber: 3506,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 3505,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                href: "#",
                                                                                className: "text-[#386861] hover:text-green-700 font-medium underline",
                                                                                children: "Enterprise Project Management Software"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                lineNumber: 3514,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 3513,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                href: "#",
                                                                                className: "text-[#386861] hover:text-green-700 font-medium underline",
                                                                                children: "Marketing Project Management Software"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                lineNumber: 3522,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 3521,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                href: "#",
                                                                                className: "text-[#386861] hover:text-green-700 font-medium underline",
                                                                                children: "Project Portfolio Management Software"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                lineNumber: 3530,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 3529,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                href: "#",
                                                                                className: "text-[#386861] hover:text-green-700 font-medium underline",
                                                                                children: "Time Tracking Software"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                lineNumber: 3538,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 3537,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                href: "#",
                                                                                className: "text-[#386861] hover:text-green-700 font-medium underline",
                                                                                children: "Visual Project Management Software"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                lineNumber: 3546,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 3545,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 3496,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                lineNumber: 3495,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                        lineNumber: 3478,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                lineNumber: 3389,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 3387,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        id: "pm-faqs",
                                        className: "mt-8 max-w-7xl mx-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "max-w-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16",
                                                    children: "Project management software FAQs"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 3563,
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
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 3576,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-md flex items-center justify-center transition-all duration-200 ${openItems[index] ? "bg-[#386861] hover:bg-green-700" : "bg-[#386861] hover:bg-green-700"}`,
                                                                            children: openItems[index] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                                                className: "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                lineNumber: 3589,
                                                                                columnNumber: 31
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                className: "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                                lineNumber: 3591,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                            lineNumber: 3581,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 3572,
                                                                    columnNumber: 25
                                                                }, this),
                                                                openItems[index] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "pb-6 sm:pb-7 md:pb-8 lg:pb-9 pr-12 sm:pr-16 md:pr-20 lg:pr-24 animate-in slide-in-from-top-2 duration-300",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed",
                                                                        children: item.answer
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                        lineNumber: 3599,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                                    lineNumber: 3598,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                            lineNumber: 3570,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                                    lineNumber: 3568,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                            lineNumber: 3561,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                        lineNumber: 3560,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                                lineNumber: 1410,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                        lineNumber: 1332,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                    lineNumber: 1331,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/Software-reviews/Project-management/page.jsx",
                lineNumber: 1330,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(ProjectManagementPage, "VNHEO7VhDOZQsp/Gr076qRd5+xY=");
_c = ProjectManagementPage;
var _c;
__turbopack_context__.k.register(_c, "ProjectManagementPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_Software-reviews_Project-management_page_jsx_57233311._.js.map
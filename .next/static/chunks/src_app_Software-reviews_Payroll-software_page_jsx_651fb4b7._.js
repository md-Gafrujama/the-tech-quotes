(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/Software-reviews/Payroll-software/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Payroll)
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
function Payroll() {
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
            id: "what-is-payroll-software?",
            title: "What is payroll software?",
            active: false
        },
        {
            id: "need-help",
            title: "Need Help? Talk to an HR Software Advisor",
            active: false
        },
        {
            id: "best-payroll-software",
            title: "Best payroll software",
            active: false
        },
        {
            id: "gusto",
            title: "1. Gusto",
            active: false
        },
        {
            id: "onpay",
            title: "2. OnPay",
            active: false
        },
        {
            id: "quickbooks",
            title: "3. QuickBooks Payroll",
            active: false
        },
        {
            id: "paycor",
            title: "4. Paycor",
            active: false
        },
        {
            id: "patriot",
            title: "5. Patriot Payroll",
            active: false
        },
        {
            id: "honorable-mention",
            title: "Honorable mention",
            active: false
        },
        {
            id: "find-your-new-payroll-software",
            title: "Find your new payroll software",
            active: false
        },
        {
            id: "payroll-faqs",
            title: "Payroll  software FAQs",
            active: false
        },
        {
            id: "related-payroll-software-resources",
            title: "Related payroll software resources",
            active: false
        },
        {
            id: "how-to-do-payroll-yourself",
            title: "How to Do Payroll Yourself: A Comprehensive Small Business Guide",
            active: false
        },
        {
            id: "adp-vs-paychex",
            title: "ADP vs Paychex: Payroll Comparison 2025",
            active: false
        },
        {
            id: "how-to-pay-employees?",
            title: "How to Pay Employees? Complete Guide for 2024",
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
        "Payroll.useEffect": ()=>{
            const checkMobile = {
                "Payroll.useEffect.checkMobile": ()=>{
                    setIsMobile(window.innerWidth < 768);
                }
            }["Payroll.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener("resize", checkMobile);
            return ({
                "Payroll.useEffect": ()=>window.removeEventListener("resize", checkMobile)
            })["Payroll.useEffect"];
        }
    }["Payroll.useEffect"], []);
    const payrollData = [
        {
            id: 1,
            name: "Gusto",
            image: "/images/gusto.png",
            alt: "Gusto",
            expertScore: 4.27,
            bestFor: "Best overall",
            startingPrice: "$49/mo. + $6/employee/mo.",
            contractorOnlyPayroll: "$35/mo. + $6/worker/mo.",
            learnmore: "Gusto product overview",
            visitUrl: "Gusto"
        },
        {
            id: 2,
            name: "OnPay",
            image: "/images/onpay.png",
            alt: "OnPay",
            expertScore: 4.11,
            bestFor: "Ease of use",
            startingPrice: "$49/mo. + $6/employee/mo.",
            contractorOnlyPayroll: "Included in payroll plan",
            learnmore: "OnPay product overview",
            visitUrl: "OnPay"
        },
        {
            id: 3,
            name: "QuickBooks Payroll",
            image: "/images/quickbooks.png",
            alt: "QuickBooks Payroll",
            expertScore: 4.08,
            bestFor: "Accounting integration",
            startingPrice: "$50/mo. + $6/employee/mo.",
            contractorOnlyPayroll: "$15/mo. for up to 20 contractors + $2/additional worker",
            learnmore: "",
            visitUrl: "QuickBooks Payroll"
        },
        {
            id: 4,
            name: "Paycor",
            image: "/images/paycor.jpg",
            alt: "Paycor",
            expertScore: 3.77,
            bestFor: "Growing businesses",
            startingPrice: "$99/mo. + $6/employee/mo.*",
            contractorOnlyPayroll: "Included in payroll plan",
            learnmore: "Paycor product overview",
            visitUrl: "Paycor"
        },
        {
            id: 5,
            name: "Patriot Payroll",
            image: "/images/patriot.jpg",
            alt: "Patriot Payroll",
            expertScore: 3.67,
            bestFor: "Affordability",
            startingPrice: "$37/mo. + $5/employee/mo.**",
            contractorOnlyPayroll: "Included in payroll plan",
            learnmore: "",
            visitUrl: "Patriot Payroll"
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Payroll.useEffect": ()=>{
            const handleScroll = {
                "Payroll.useEffect.handleScroll": ()=>{
                    const sections = document.querySelectorAll("section[id]");
                    const scrollPosition = window.scrollY + 100;
                    sections.forEach({
                        "Payroll.useEffect.handleScroll": (section)=>{
                            const sectionTop = section.offsetTop;
                            const sectionHeight = section.clientHeight;
                            const sectionId = section.getAttribute("id");
                            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                                setTableOfContents({
                                    "Payroll.useEffect.handleScroll": (prev)=>prev.map({
                                            "Payroll.useEffect.handleScroll": (item)=>({
                                                    ...item,
                                                    active: item.id === sectionId
                                                })
                                        }["Payroll.useEffect.handleScroll"])
                                }["Payroll.useEffect.handleScroll"]);
                            }
                        }
                    }["Payroll.useEffect.handleScroll"]);
                }
            }["Payroll.useEffect.handleScroll"];
            // Set initial active state
            handleScroll();
            window.addEventListener("scroll", handleScroll);
            return ({
                "Payroll.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Payroll.useEffect"];
        }
    }["Payroll.useEffect"], []);
    const toolsContent = {
        gusto: {
            title: " Gusto: Best overall project management software",
            logo: "/images/gusto.png",
            button: {
                text: "Visit Website",
                link: "#"
            },
            scores: [
                {
                    label: "User reviews",
                    score: "4.64/5"
                },
                {
                    label: "Pricing",
                    score: "4.06/5"
                },
                {
                    label: "Customer support",
                    score: "4/5"
                },
                {
                    label: "Platform and interface",
                    score: "4.23/5"
                },
                {
                    label: "HRIS features",
                    score: "4.63/5"
                },
                {
                    label: "Reporting and analytics",
                    score: "4.56/5"
                },
                {
                    label: "Payroll features",
                    score: "4.15/5"
                }
            ],
            pros: [
                "International contractor payroll in more than 120 countries.",
                "Gusto-brokered health insurance that integrates with payroll on all plans.",
                "Customer service is available by phone, email, or chat.",
                "Native employee financial wellness tools through Gusto Wallet app and Gusto debit card."
            ],
            cons: [
                "No dedicated account manager (unless with a Premium subscription).",
                "Check delivery is currently in beta and costs $1.50 per check.",
                "The lowest price plan is only for single-state payroll.",
                "Employer of Record (EOR) services to hire and pay global workers are limited to 12 countries."
            ],
            why: {
                intro: `Gusto’s simple but modern user interface (UI) helps you quickly establish basic payroll flows and maintain compliance requirements. It offers a wide range of payroll tools and services, such as its AutoPilot feature, which automatically approves pay runs, saving you time from manually doing payroll yourself. You also don’t have to worry about payroll tax filings and remittances, Gusto will handle these for you.`,
                bullets: [
                    " With a 4.27 out of 5 score, Gusto’s rating reflects its capability to offer accessible tools to both payroll newbies and experts while supporting their needs. In addition to full-service payroll, Gusto’s project tracking allows you to pay your contractors the right amount while providing you with data to make more accurate, competitive project bids to your clients. And if you decide to grow into an international business, Gusto can compliantly pay your global contractors and employees. It can even help you hire international employees with its EOR service—Gusto Global."
                ],
                outro: `For HR features, Gusto provides basic versions of several HR processes, like performance reviews, but it’s not the best choice if you need a full-scale human capital management (HCM) system. Paycor or Rippling are better options in this scenario. Both have feature-rich HR platforms that can handle simple to complex HR processes.`,
                extras: {
                    "About Gusto": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Gusto started as an employee and contractor payments company but now supports various HR functions like benefits administration, performance management, recruitment, and global payroll. As a full-service payroll company, it offers automatic deductions, remittances, and filings of federal, state, and local taxes. It can even handle minimum wage adjustments for tip credits and child support payments in 49 states (all but South Carolina). In contrast, many standalone payroll solutions for small businesses require you to process garnishments and local taxes manually."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 284,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "Gusto also supports global businesses with contractor payments in more than 120 countries. For its Gusto Global product, it partnered with Remote to offer EOR services for employers needing to hire and pay workers"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 287,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "While the coverage may be limited as of this writing, Gusto plans to expand its EOR services to other countries soon."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 291,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Gusto limitations"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 293,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "Even if it has started offering global hiring and payroll services, Gusto is not the most scalable solution in the market. Enterprise businesses, for example, will have difficulty finding crucial pay data insights, such as pay disparities and compensation benchmarks. This is because Gusto has limited report customization capabilities and completely lacks data visualization. Instead, you’ll need to export the reports to a spreadsheet program to create customized charts and gain data insights. "
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 296,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "Gusto also becomes tedious to use once you have more than 50 employees. Unless you upgrade to a higher tier, it still requires some manual data inputs for things like time tracking and new hire onboarding.  "
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 298,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    "Key Features": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Simple payroll interface"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 304,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Gusto’s payroll module features a progress bar with steps and instructions at the top so you stay on track and remember what information you need for payroll finalization. If you don’t enable Gusto’s AutoPilot function, running payroll takes only three steps: enter employee earnings and actual work hours, input time off details, and review and submit.  "
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 307,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "If you don’t have a native or integrated time-tracking module, Gusto makes the process somewhat less tedious than Rippling, which previously held the top spot in this list. This is because Gusto includes fields to adjust employees’ hours, earnings, deductions, and reimbursements on the same page. You only have to open the section to adjust the fields that apply to each employee. "
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 310,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "This is unlike Rippling, which separates hourly and salaried employees into different steps and puts each employee’s earnings and deductions in tabs. You will need to switch tabs and do long, horizontal scrolls to find and adjust the pay codes that apply to each employee. As a result, Rippling requires significantly more clicks to finish payroll than Gusto."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 313,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Payroll add-ons"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 315,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "Gusto offers several add-on features that benefit small businesses. It can help you save money with R&D tax credits or start a pay-as-you-go workers’ compensation policy through its partner, NEXT Insurance. If you sign up for its state tax registration add-on, Gusto will file and monitor all the paperwork needed to expand your business into new states. "
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 318,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "Further, Gusto has a free bill pay module. It allows you to create an electronic roster of all your vendors, upload bills from suppliers and subcontractors, and schedule payments. However, its features aren’t extensive—you can’t attribute codes, like utilities, to payments for accounting purposes or send transactions to stakeholders for approval. You also can’t filter or export bill payment data to your accounting application. Nevertheless, if you’re switching to Gusto after doing accounting and payroll processes yourself, it is a step up from manually maintaining billing and vendor profiles."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 321,
                                columnNumber: 10
                            }, this),
                            " "
                        ]
                    }, void 0, true),
                    "Pricing": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Gusto’s pricing starts at $49 monthly plus $6 per employee, per month (PEPM). You can choose between three tiers: Simple, Plus, and Premium. Similar to QuickBooks Payroll, Gusto also offers a contractor-only payroll plan for $35 per month plus $6 per contractor per month*. However, it isn’t as affordable as QuickBooks Payroll, which only costs $15 monthly for up to 20 workers plus $2 for each additional contractor."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 326,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Gusto contractor-only plan"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 329,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Monthly fee: $35 plus $6 per contractor."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                        lineNumber: 333,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Includes unlimited US contractor payments, four-day direct deposits, 1099-NECs at the end of the year, and new hire reporting, if required in your state. "
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                        lineNumber: 334,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 332,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Add-ons"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 336,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-black mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "list-disc pl-5 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "International contractor payments:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                        lineNumber: 341,
                                                        columnNumber: 9
                                                    }, this),
                                                    " Price varies by foreign exchange rate."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                lineNumber: 341,
                                                columnNumber: 5
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "State tax registration:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                        lineNumber: 342,
                                                        columnNumber: 9
                                                    }, this),
                                                    " Prices vary by state."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                lineNumber: 342,
                                                columnNumber: 5
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "R&D tax credits:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                        lineNumber: 343,
                                                        columnNumber: 9
                                                    }, this),
                                                    " Pay 15% of identified tax credits."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                lineNumber: 343,
                                                columnNumber: 5
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "Gusto Global:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                        lineNumber: 344,
                                                        columnNumber: 9
                                                    }, this),
                                                    " $699 PEPM."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                lineNumber: 344,
                                                columnNumber: 5
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "Health insurance broker integration:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                        lineNumber: 345,
                                                        columnNumber: 9
                                                    }, this),
                                                    " $6 per month per eligible employee."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                lineNumber: 345,
                                                columnNumber: 5
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "401(k) retirement savings:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                        lineNumber: 346,
                                                        columnNumber: 9
                                                    }, this),
                                                    " Price varies by 401(k) integration."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                lineNumber: 346,
                                                columnNumber: 5
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "Health Savings Accounts (HSAs):"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                        lineNumber: 347,
                                                        columnNumber: 9
                                                    }, this),
                                                    " $2.50 per month per participant.**"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                lineNumber: 347,
                                                columnNumber: 5
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "Flexible Spending Accounts (FSAs):"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                        lineNumber: 348,
                                                        columnNumber: 9
                                                    }, this),
                                                    " $4 per month per participant, with a $20 per month minimum.**"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                lineNumber: 348,
                                                columnNumber: 5
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "Dependent care FSAs:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                        lineNumber: 349,
                                                        columnNumber: 9
                                                    }, this),
                                                    " $4 per month per participant, with a $20 per month minimum.**"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                lineNumber: 349,
                                                columnNumber: 5
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "Commuter benefits:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                        lineNumber: 350,
                                                        columnNumber: 9
                                                    }, this),
                                                    " $4 per month per participant, with a $20 per month minimum.**"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                lineNumber: 350,
                                                columnNumber: 5
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "Workers’ compensation:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                        lineNumber: 351,
                                                        columnNumber: 9
                                                    }, this),
                                                    " Price of premiums only."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                lineNumber: 351,
                                                columnNumber: 5
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "Life and disability insurance:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                        lineNumber: 352,
                                                        columnNumber: 9
                                                    }, this),
                                                    " Price of premiums only."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                lineNumber: 352,
                                                columnNumber: 5
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "Next-day direct deposit:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                        lineNumber: 353,
                                                        columnNumber: 9
                                                    }, this),
                                                    " $15/mo. + $3 PEPM.***"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                lineNumber: 353,
                                                columnNumber: 5
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "Time tracking:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                        lineNumber: 354,
                                                        columnNumber: 9
                                                    }, this),
                                                    " $6 PEPM.***"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                lineNumber: 354,
                                                columnNumber: 5
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "Performance reviews:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                        lineNumber: 355,
                                                        columnNumber: 9
                                                    }, this),
                                                    " $3 PEPM.***"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                lineNumber: 355,
                                                columnNumber: 5
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "HR resources:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                        lineNumber: 356,
                                                        columnNumber: 9
                                                    }, this),
                                                    " $50/mo. + $5 PEPM (includes compliance alerts and access to HR experts and HR templates).***"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                lineNumber: 356,
                                                columnNumber: 5
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "Priority support and HR resources:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                        lineNumber: 357,
                                                        columnNumber: 9
                                                    }, this),
                                                    " $8 PEPM; only available with the Plus plan."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                lineNumber: 357,
                                                columnNumber: 5
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "Annually updated labor law posters:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                        lineNumber: 358,
                                                        columnNumber: 9
                                                    }, this),
                                                    " $8.99/mo. (onsite posters); $10/mo. for up to five employees, plus $1/mo. for each additional employee (ePoster service for remote employees)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                lineNumber: 358,
                                                columnNumber: 5
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                        lineNumber: 340,
                                        columnNumber: 3
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-2",
                                        children: "For new clients, Gusto waives the $35 monthly base fee for the first six months. This could change anytime, so please explore its website for the latest deals."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                        lineNumber: 361,
                                        columnNumber: 3
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "**"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                lineNumber: 365,
                                                columnNumber: 5
                                            }, this),
                                            " Annual $200 service charge covers HSAs, FSAs, dependent care FSAs, and commuter benefits."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                        lineNumber: 364,
                                        columnNumber: 3
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "***"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                lineNumber: 368,
                                                columnNumber: 5
                                            }, this),
                                            " Add-on only for the Simple plan; included for free with the Plus and Premium tiers."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                        lineNumber: 367,
                                        columnNumber: 3
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 339,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true)
                }
            }
        },
        onpay: {
            title: " OnPay: Best for ease of use",
            logo: "/images/onpay.png",
            button: {
                text: "Visit Website",
                link: "#"
            },
            scores: [
                {
                    label: "Overall Score",
                    score: "4.11/5"
                },
                {
                    label: "User reviews",
                    score: "4.07/5"
                },
                {
                    label: "Pricing",
                    score: "4.5/5"
                },
                {
                    label: "Customer support",
                    score: "3.75/5"
                },
                {
                    label: "Platform and interface",
                    score: "3.46/5"
                },
                {
                    label: "HRIS features",
                    score: "4.63/5"
                },
                {
                    label: "Reporting and analytics",
                    score: "4.06/5"
                },
                {
                    label: "Payroll features",
                    score: "4.05/5"
                }
            ],
            pros: [
                "Free setup and data migration.",
                "Specialized payroll services for particular industries like agriculture, churches, and nonprofits.",
                "Employee rosters, organizational charts, leave management, and customizable onboarding included."
            ],
            cons: [
                "Does not offer native time-tracking and accounting modules.",
                "Limited third-party integrations.",
                "Not suitable for fast-growing companies.",
                "No mobile app."
            ],
            why: {
                intro: `OnPay has an intuitive interface and uncomplicated payroll workflows that can accommodate multiple payroll schedules, worker types, and pay methods. Coming in with a score of 4.11 out of 5, OnPay makes running payroll easy with its simple-to-use features and automatic alerts that highlight payroll errors and discrepancies. It also comes with a suite of HR tools to meet minimum compliance requirements by state and industry, including PTO policy management, compliance audits, and an HR resource library.`,
                outro: `OnPay’s flat-rate pricing structure makes planning for and controlling long-term business costs much easier. However, this also makes OnPay less likely to innovate and offer more modern features at the same rate as competitors. Its one-price-fits-all feature means that adding more capabilities will result in profit loss for the company unless they raise prices or offer add-on modules for additional fees. If you want a small business payroll product that improves and adapts constantly, go with Gusto instead. Over the years, the company has added more functionalities to its platform, the latest include global payroll and EOR services.`,
                extras: {
                    "About OnPay": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "OnPay’s specialty may be payroll, but it has all the features you need to manage small business HR processes, such as time off management, benefits administration, task management, and customizable onboarding workflows. These all come standard with OnPay, unlike the other providers on my list that require you to purchase a higher subscription to get some of these features. "
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 415,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "OnPay may not have automatic pay run features, but its interface is straightforward, requiring just as many (or fewer) clicks as Gusto to complete payroll. Like Gusto, OnPay lets you add or adjust earnings and deductions on the same screen, avoiding extra clicks and cumbersome spreadsheets. You can also adjust specific employee pay information in a sidebar window without leaving the workflow. "
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 417,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "While it doesn’t offer a contractor-only plan like QuickBooks Payroll and Gusto, OnPay allows you to pay contractors within the same pay cycle as your regular employees. This avoids repeating the payroll process for your different worker classifications at the end of every pay period."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 419,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "OnPay limitations"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 421,
                                columnNumber: 10
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "OnPay is not the best choice if you expect to need more robust payroll features later. It supports unlimited and multi-state payroll but lacks global payroll functionality. OnPay may flag you of payroll errors as you process employee payments, but lacks in-app compliance checkers, so you’ll have to become familiar with new laws on minimum wages, PTO, and overtime in each state where your employees reside before running payroll. "
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 424,
                                columnNumber: 10
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "One of the biggest drawbacks, especially for businesses with mostly non-exempt hourly workers, is OnPay’s lack of native time-tracking or scheduling features. It does integrate with popular options like When I Work and Deputy, but QuickBooks Payroll may be a better choice if you want easy data transfers from time tracking to payroll.  "
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 426,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    "Key Features": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Employee engagement and recordkeeping"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 432,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "OnPay offers basic staff engagement and recordkeeping features that you rarely see in standalone payroll platforms, such as employee profile bios and customizable fun fact questions. Workers can view this information and work contact numbers directly in OnPay. This is useful if you have shift workers who need to reach team members to report emergencies like tardies or other shift changes. "
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 435,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "You can use its customizable forms to create documents for tracking business and staff information, such as collecting employee T-shirt sizes for an upcoming work event or tracking company equipment like computers and keys. Its e-signature capabilities also allow you to collect essential documents and obtain legal acknowledgments from employees. For instance, employees can electronically sign uniform deduction agreements to deduct the cost from their next paychecks. "
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 438,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "You can even create similar flows for handbook policies, including any that impact payroll processes, such as employee bonuses, reimbursements, and other deductions. Gusto may have similar functionalities but reserves it for its higher-paying plans. "
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 441,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Payroll reports builder"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 443,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "OnPay includes a payroll-specific reports dashboard, with links to important reports, like general ledger (GL) summary and payroll register, directly on the main page. Graphs also provide quick views of the number of employees paid each month and paid wages by type to track costs and turnover. "
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 446,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "You can save custom reports and views to access the data you need as it changes with each pay run. I was also impressed with OnPay’s report designer, which lets you filter and drag-and-drop report columns to adjust your view in real time without downloading data to a spreadsheet program of choice. This saves you time from downloading reports repeatedly. In contrast, Gusto only lets you choose the columns or data fields you want. You can’t rearrange the order without running the report and selecting the columns again. If you want an easier way of viewing and filtering data fields for your reports, use OnPay."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 448,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    "Pricing": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "OnPay has the simplest pricing of all the vendors on my list. For $49 per month plus $6 PEPM, you get access to OnPay’s entire platform, including payroll and basic HR features. These include: "
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 454,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Multi-state payroll."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                        lineNumber: 459,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Customized employee onboarding and task checklists."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                        lineNumber: 460,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Personnel file storage."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                        lineNumber: 461,
                                        columnNumber: 12
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "PTO management."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                        lineNumber: 462,
                                        columnNumber: 12
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "OnPay-brokered health insurance benefits."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                        lineNumber: 463,
                                        columnNumber: 12
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Company directory and organizational charts."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                        lineNumber: 465,
                                        columnNumber: 12
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "HR resource library."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                        lineNumber: 466,
                                        columnNumber: 12
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Customer support by phone, chat, and email."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                        lineNumber: 467,
                                        columnNumber: 12
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 458,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "OnPay’s feature is comparable to Gusto’s least expensive Simple plan, but OnPay has a slightly lower monthly base software fee ($40 vs $49) and surpasses Gusto Simple’s capabilities. It includes multi-state payroll—a feature that Gusto offers in its Plus and Premium tiers. OnPay’s tax filing service is also a bit better than QuickBooks Payroll because it covers federal, state, and local taxes; whereas QuickBooks Payroll will require you to upgrade to either its Premium and Elite plans if you want it to file local tax forms for you. With its competitive one-price-fits-all model, it’s a better choice for small establishments without major growth goals. However, if you have plans to grow, consider Paycor—its all-in-one platform can handle basic to advanced payroll and HR processes."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 472,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true)
                }
            }
        },
        quickbooks: {
            title: "QuickBooks Payroll: Best for its accounting integration",
            logo: "/images/quickbooks.png",
            button: {
                text: "Visit Website",
                link: "#"
            },
            scores: [
                {
                    label: "Overall Score",
                    score: "4.08/5"
                },
                {
                    label: "User reviews",
                    score: "3.99/5"
                },
                {
                    label: "Pricing",
                    score: "4.13/5"
                },
                {
                    label: "Customer support",
                    score: "3.88/5"
                },
                {
                    label: "Platform and interface",
                    score: "4.25/5"
                },
                {
                    label: "HRIS features",
                    score: "4.56/5"
                },
                {
                    label: "Reporting and analytics",
                    score: "3.86/5"
                },
                {
                    label: "Payroll features",
                    score: "4.05/5"
                }
            ],
            pros: [
                "Online chat support available 24/7.",
                "Tax penalty protection for any reason on its Elite subscription tier.",
                "Next-day or same-day direct deposits (depending on subscription tier).",
                "Direct integration with QuickBooks Time and other Intuit products.",
                "Personal HR advisor at Elite subscription tier."
            ],
            cons: [
                "Local tax filings are only available in Premium and Elite plans.",
                "Additional fees for tax filings in multiple states, unless on Elite plan.",
                "QuickBooks time and attendance features open in a separate application.",
                " Service capped at 150 employees."
            ],
            why: {
                intro: `QuickBooks Payroll is one of the top providers for small business payroll, with an interface, pricing, and features very similar to those of competitors like Gusto and OnPay. It earned 4.08 out of 5 and stands out for its accounting functions—even within its payroll product—and easy integration with Intuit QuickBooks products. It automatically syncs payroll data to your chart of accounts and offers data analysis tools, provided you have a QuickBooks Online subscription. You can even customize how it enters this data into your accounts to meet your business needs.`,
                bullets: [
                    "Customizable dashboards and workflows suit different team structures",
                    "Powerful reporting provides deep insights into project performance",
                    "Time tracking and resource management help optimize team capacity"
                ],
                outro: `While QuickBooks Payroll is an excellent choice if you want to save money by joining your payroll and accounting processes together, it lost points for its minimal HR and employee management features. For example, it relies on partnerships with Allstate Health Solutions and Mineral for benefits offerings and HR advisory services. It also doesn’t have Gusto’s hiring and performance management tools, OnPay’s detailed employee profiles, and Paycor’s feature-rich HR platform.`,
                extras: {
                    "About QuickBooks Payroll": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "As a small-business accounting giant, Intuit’s QuickBooks is highly likely one of the first software products you purchase alongside a payroll solution. If you get both QuickBooks Online and QuickBooks Payroll, you can manage accounting and payroll data from the same app so you can see a single view of your business’s cash flow. Running payroll in QuickBooks is also relatively easy. It automatically populates earnings for your salaried employees, but you’ll have to manually enter regular and overtime hours for your non-exempt hourly staff. However, upgrading to its higher subscription tiers grants you access to its native time and scheduling capabilities."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 524,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "In addition to attendance monitoring and staff scheduling, you get geolocation, geofencing, and mobile time clock tools. This is helpful if you employ mostly field workers without a central base of operations. Plus, as you progress subscription tiers, you access additional project tracking features.  By comparison, Paycor and Gusto are the only alternatives on my list that offers equivalent time tracking and scheduling support—although Paycor’s are add-on modules while Gusto’s scheduling tools are limited."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 526,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "QuickBooks Payroll limitations"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 528,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "QuickBooks Payroll is ideal to use if you’re a QuickBooks user or only need a standalone payroll option for your small business. It doesn’t support third-party integration options for strategic HR functions, such as recruitment and performance management. It also lacks an organizational chart and customized onboarding workflows. "
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 531,
                                columnNumber: 10
                            }, this)
                        ]
                    }, void 0, true),
                    "Key Features": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Contractor and vendor billing"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 537,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "If you bundle your QuickBooks Payroll subscription with QuickBooks Online, you can run payroll and vendor bill payments from the same system. QuickBooks’ is significantly more advanced than Gusto’s bill pay option. In addition to creating a list of vendors and paying them directly from the platform, it lets you set up multi-conditional approval workflows and log bills by categories to assist with expense management. This is great if you’re managing bills from multiple work locations and need certain employees to confirm bill accuracy, such as when bills exceed a certain dollar threshold."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 540,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "If you don’t have employees, QuickBooks offers a contractor payments option with accounting features. Besides being more affordable than Gusto’s contractor-only plan, it doesn’t restrict you from following typical employee payroll schedules. Instead, you can pay contractors per any pay agreement you make or alongside your regular billing cadences. This provides you more control over your company costs, allowing you to schedule payments during periods of higher revenue."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 543,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "General ledger integration"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 546,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "Exporting payroll ledgers to your accounting program of choice can be tedious, especially if your payroll platform doesn’t integrate with your accounting program. However, when you use QuickBooks Payroll and QuickBooks Online together, the system automatically records applicable pay data in your chart of accounts once you finalize payroll. While it automatically assigns default accounts to map your payroll based on wages, expenses, and liabilities, you can modify these settings to your liking. "
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 549,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "For example, you may use a particular account to monitor your contribution to payroll taxes outside of a general expense account. Besides helping you understand your tax liabilities, you can also use it to determine some of the costs associated with hiring a new employee for recruitment and headcount planning purposes."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 551,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    "Pricing": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "QuickBooks offers several different pricing plans and bundles, depending on whether you want only payroll features or payroll and accounting. If you want more information on QuickBooks payroll and accounting suites, check out its payroll and bookkeeping bundles. But if you only need small business payroll, its lowest-priced tier starts at $50 per month plus $6 PEPM. "
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 557,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Unlike the other payroll processing software on my list, it offers an affordable contractor-only plan and an option to get 50% off monthly base fees for your first three months* with QuickBooks Payroll. However, it lost points given the barebones HR features of its lowest-priced Core plan. You also need to upgrade to at least its Premium plan if you want automated local tax filings, time tracking tools, and 24/7 product support."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 560,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "QuickBooks contractor-only payments plan"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 562,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Monthly fee: $15 for 20 contractors plus $2 per additional worker."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                        lineNumber: 566,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Includes unlimited US contractor payments, next-day direct deposits, contractor self-setup tools, and unlimited electronic filings of 1099-MISC and 1099-NECs."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                        lineNumber: 567,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 565,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Note that these terms can change anytime, so please check their website for the latest new client promotions."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 573,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true)
                }
            }
        },
        paycor: {
            title: "Paycor: Best for growing businesses",
            logo: "/images/paycor.jpg",
            button: {
                text: "Visit Website",
                link: "#"
            },
            scores: [
                {
                    label: "Overall Score",
                    score: "3.77/5"
                },
                {
                    label: "User reviews",
                    score: "4.29/5"
                },
                {
                    label: "Pricing",
                    score: "1.69/5"
                },
                {
                    label: "Customer support",
                    score: "4.25/5"
                },
                {
                    label: "Platform and interface",
                    score: "4.38/5"
                },
                {
                    label: "HRIS features",
                    score: "4.25/5"
                },
                {
                    label: "Reporting and analytics",
                    score: "4.35/5"
                },
                {
                    label: "Payroll features",
                    score: "4.18/5"
                }
            ],
            pros: [
                "Multi-state payroll with automated local tax deductions and filings included in all plans.",
                "Robust employee self-service features, including earned wage access, via its mobile app.",
                "Capability to view multiple pay cycles months in advance for effective status change management.",
                "Automatic prorated pay for mid-cycle hourly employee pay rate changes (with Paycor’s time tracking add-on)."
            ],
            cons: [
                "Non-transparent pricing.",
                "Must purchase Essential plan or higher for onboarding, analytics, and PTO management modules.",
                "Time tracking, scheduling, and benefits administration are paid add-on modules.",
                "Difficult to navigate UI."
            ],
            why: {
                intro: `Paycor’s advanced analytics, in-app tax compliance alerts, and customizable payroll processes suit growing businesses that need more advanced and versatile pay controls. I was impressed with its pay grid for completing payroll functions, which lets me adjust how I wanted to see and complete payroll. It also allows me to do payroll faster since I don’t have to go through a set series of steps compared to competitors like Rippling and Gusto.`,
                outro: ` With a total score of 3.77 out of 5, Paycor also stands out for its wide range of HR tools that can support a small business’s growing HR needs. For example, unlike Patriot Payroll and QuickBooks Payroll, Paycor has a full-scale recruiting module that leverages artificial intelligence (AI) HR tools to source top prospects and engage passive candidates. Other features like compensation planning, pulse surveys, and career management support your long-term talent needs and align them with your company’s objectives and costs.`,
                outro: `However, its monthly fees aren’t published on its website—you have to call Paycor to request a quote. Plus, it does not include support for businesses with international teams. But if you need a customizable payroll system or more robust modules to complete your increasingly advanced HR needs, then Paycor is a great choice.`,
                extras: {
                    "About Paycor": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Paycor is an all-in-one human resources management system (HRMS) that offers modules for critical HR functions like payroll as well as auxiliary processes like learning and development. This versatility makes Paycor best suited for growing and established companies that need direct control over their payroll processes in a unified HR tech stack. "
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 618,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "It lets you add or modify existing payroll schedules as needed, and the system will automatically make the necessary adjustments. It has a customizable pay grid organized by rows of employees, which lets you add and remove columns for information like bonuses and commissions to fit your needs. You can even pay terminated employees without temporarily changing their employment status in the system. This is great if there was an error in the employee’s previous payroll and you need to pay them an adjustment after they’ve separated from the company."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 620,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "There are also buttons to automatically adjust an employee’s gross pay so the net pay is a specified amount, like in the case of bonus checks. Plus, Paycor has alerts for shortfalls, no pay, earnings, and hours based on your company’s needs."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 622,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Paycor limitations"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 625,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Paycor’s pay grid setup may increase payroll efficiency for large teams, but it can be overwhelming for small businesses and startups that need dedicated support. Without a step-by-step guide, newbies are less likely to remember to add or adjust critical pay items. Gusto, for instance, has a separate step just for keying PTO hours—a crucial data point that’s easy to miss if you’re managing payroll on top of multiple other HR functions."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 628,
                                columnNumber: 10
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Paycor also doesn’t support payroll outside of the U.S., so it’s a better option for domestic businesses with seasoned HR or payroll specialists that need flexibility over their pay processes."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 630,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true),
                    "Key Features": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Multiple employee payment methods"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 637,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Paycor lets you pay employees through direct deposits, paycards, or checks. It also offers on-demand pay, allowing employees to access up to 50% of their wages before payday through its mobile app. Free budgeting, financial counseling, and learning resources for employees also compete with the financial wellness resources offered by Gusto."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 640,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Another great feature is Paycor’s check-stuffing services to pay your unbanked employees. While most payroll platforms let you print live checks, it adds extra steps to the payroll process like ensuring you have the proper check stock paper and magnetic ink to manually print checks."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 643,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Custom reports and analytics"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 646,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "Before finalizing payroll, Paycor populates charts so you can view key information about payroll runs quickly. Doughnut charts allow you to see the breakdown of employer and employee tax liabilities, while a series of quick links lets you download popular reports, like your payroll journal. It even pre-populates employee pay stubs up to three days before paydays, enabling your workers to check their expected payouts and report pay errors."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 649,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "Paycor also has a report builder to craft customized reports from scratch. You can work off pre-existing reports by adding, renaming, or creating new columns for analysis. Many of the payroll reports also come with visualizations, like total compensation by month and department, to understand changes in labor costs without switching to your accounting software."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 651,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "Further, Paycor’s analytics module includes an AI digital assistant to ask questions and receive answers about your employee data in natural language. Meanwhile, benchmarking and predictive analytics let you compare pay practices with industry standards and adequately plan for the future."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 653,
                                columnNumber: 12
                            }, this)
                        ]
                    }, void 0, true),
                    "Pricing": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-black mb-4",
                            children: "If you have fewer than 50 employees, Paycor offers four small business plans: Basic, Essential, Core, and Complete. Paycor does not publish pricing on its website, but based on the quote I received, monthly fees start at $99 plus $6 PEPM. If you have 50 or more employees, you must contact Paycor’s sales team for a customized quote for its mid-market tier."
                        }, void 0, false, {
                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                            lineNumber: 660,
                            columnNumber: 13
                        }, this)
                    }, void 0, false)
                }
            }
        },
        patriot: {
            title: "Patriot Payroll: Best budget-friendly payroll software",
            logo: "/images/quickbooks.png",
            button: {
                text: "Visit Website",
                link: "#"
            },
            scores: [
                {
                    label: "Overall Score",
                    score: "3.67/5"
                },
                {
                    label: "User reviews",
                    score: "4.46/5"
                },
                {
                    label: "Pricing",
                    score: "4.56/5"
                },
                {
                    label: "Customer support",
                    score: "4/5"
                },
                {
                    label: "Platform and interface",
                    score: "2.88/5"
                },
                {
                    label: "HRIS features",
                    score: "1.88/5"
                },
                {
                    label: "Reporting and analytics",
                    score: "4.13/5"
                },
                {
                    label: "Payroll features",
                    score: "4.05/5"
                }
            ],
            pros: [
                "Simple yet intuitive payroll platform.",
                "Free payroll setup assistance.",
                "Time tracking, basic HRIS, and accounting tools are available as paid add-ons.",
                "Has an affordable full-service payroll plan and do-it-yourself (DIY) tax filing option."
            ],
            cons: [
                "Only integrates with QuickBooks Desktop or QuickBooks Online.",
                "Doesn’t file new hire reports (but can generate them).",
                "Multi-state payroll costs extra."
            ],
            why: {
                intro: `Patriot’s payroll module made my list of the best payroll software for small businesses mainly because of its affordability. For a monthly fee of $37 plus $5 PEPM, you get unlimited pay runs with tax payment and filing services. This is the lowest full-service payroll plan that I reviewed and comes with all of the essential tools you need to pay employees and contractors. If you have a limited budget and prefer to handle tax filings yourself, its basic plan only costs $17 per month plus $4 PEPM. It has all the features included in the full-service option but without tax filing services.`,
                outro: `It can handle multiple pay rates—max of five—and you can add a description to each rate. This makes it easy to track and differentiate pay rates for hourly employees who may be assigned to different roles with various pay rates. I also like that it lets you change employee hourly rates while running payroll without canceling or closing the pay run page. Other online payroll services will require you to update the employee’s pay rate in the system’s HRIS module before you can process payroll.`,
                outro: `Patriot Payroll earned an overall score of 3.67 out of 5, losing points for its limited HRIS features and third-party software integrations. It also only generates new hire reports, but you have to file these yourself. While it has over a dozen payroll report types, you need to get its HR add-on if you want employee-related reports like staff demographics and retirement plan contribution reports.`,
                extras: {
                    "About Patriot Payroll": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Similar to QuickBooks, Patriot offers software for payroll and accounting. Its platform has a simple but intuitive interface that helps streamline processes, making it easy for small businesses to learn and use its various features. With its payroll module, you get unlimited pay runs with automatic federal, state, and local tax deductions and filings—provided you sign up for its full-service plan. It offers several essential payroll features, such as multiple pay schedules and customizable money and deduction types, enabling you to create your own employee deductions and company-paid contributions and payments, such as special bonuses. "
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 705,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "If you have a multi-location business, you can assign employees to a primary work location in the system, which also includes a work-from-home option. Patriot Payroll will then calculate the applicable payroll taxes based on the employee’s work location. Plus, you don’t need to manually search for workers assigned to specific business sites when running payroll. Patriot Patriot has a filter option that lets you choose the work location, allowing you to process and review payroll only for specific teams."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 707,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Patriot Payroll limitations"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 709,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "Patriot Payroll may support unlimited pay runs for US-based workers, but it lacks Gusto’s global payment tools. Its contractor-only package also does not compete well with QuickBooks Payroll, which only costs $15 monthly for up to 20 workers; whereas Patriot charges $17 per month plus $4 PEPM if you’re on its basic plan. Plus, Patriot collects add-on fees for time tracking and multi-state payroll tax filings. And even if you get the HRIS add on, the features are very limited. This is unlike Gusto and OnPay, which include basic hiring tools and automated onboarding flows in their starter tiers. "
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 712,
                                columnNumber: 10
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "While you can get two-day direct deposits with Patriot Payroll, it only offers this to qualified customers. If you don’t meet Patriot’s requirements, you will only be entitled to a four-day option. This is unlike the other providers in this guide that don’t have qualifying assessments for two-day direct deposits. However, if you require fast payouts to expedite payroll processing times and don’t need a wide range of HR tools, consider QuickBooks Payroll as it offers a next-day option in its basic plan. "
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 714,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true),
                    "Key Features": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Net to gross payroll tool"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 721,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "While it may be easy to notify employees that they are eligible for a specific bonus, you have to constantly remind them that the amount they see may be subject to tax. Typically, workers find it difficult to determine the applicable payroll tax deductions—intead, they prefer knowing the take-home bonus amount they stand to get. With Patriot’s net to gross payroll tool, you don’t need to do manual calculations to figure this out. You simply input the bonus amount you want employees to receive and the system will automatically gross it up for taxes. This helps you save time and ensures payroll compliance."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 724,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Flexible payroll services"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 727,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "What I like about Patriot is that it provides full-service and DIY payroll options. If you have a very small team—let’s say, up to 10 employees—and are comfortable handling tax payments and filings, you can start with Patriot Payroll’s Basic plan. Once you exceed 10 workers, you can switch to its Full-service package, where Patriot will handle tax remittances and filings for you. "
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 730,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black",
                                children: "Patriot also offers flexible payroll setup options for new clients. If you’re familiar with using pay processing tools, you can follow its online wizard to create your Patriot Payroll account and complete setup requirements. If you need help, it also offers free payroll setup assistance. You only need to provide the necessary company and employee information and Patriot will handle the setup process for you. Plus, it provides extended weekday support. If you have questions about its features, you can contact the software support team via phone, email, or chat from Monday to Friday, 9 AM to 7 PM Eastern Time (ET)."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 732,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    "Pricing": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "You can get Patriot Payroll as a standalone solution or enhance its platform by selecting paid add-ons for time tracking and an HR software, a module that contains basic HR reporting and HRIS functionalities. There are two plans: Basic Payroll and Full Service Payroll. Both have similar features, except for the payroll tax filing services and tax filing guarantee included in the Full Service plan. "
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 738,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold mb-2",
                                children: "Add-ons"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 741,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 text-black mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "Time and attendance:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                lineNumber: 746,
                                                columnNumber: 5
                                            }, this),
                                            " $6 monthly plus $2 PEPM. Includes employee time cards, custom overtime rules, multiple job roles tracking, manager permissions, time tracking reports, and online clock ins/outs via the employee online portal or the My Patriot employee mobile app."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                        lineNumber: 745,
                                        columnNumber: 3
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "HR software:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                lineNumber: 750,
                                                columnNumber: 5
                                            }, this),
                                            " $6 monthly plus $2 PEPM. Includes document management, HR reports, HR manager permissions, and basic employee information management tools."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                        lineNumber: 749,
                                        columnNumber: 3
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "Multi-state tax payments and filings*:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                lineNumber: 754,
                                                columnNumber: 5
                                            }, this),
                                            " $12 monthly for each additional state."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                        lineNumber: 753,
                                        columnNumber: 3
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "Accounting Basic plan:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                lineNumber: 757,
                                                columnNumber: 5
                                            }, this),
                                            " $20 per month. Includes automatic bank imports, income and expense tracking, account reconciliation, credit card payments, financial reports, and unlimited customers, invoices, contractors, vendors, and payments."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                        lineNumber: 756,
                                        columnNumber: 3
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "Accounting Premium plan:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                lineNumber: 761,
                                                columnNumber: 5
                                            }, this),
                                            " $30 per month. Everything in Basic, plus recurring invoices, receipt management, send invoice payment reminders, user-based permissions, and the capability to create and send estimates."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                        lineNumber: 760,
                                        columnNumber: 3
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "Bookkeeping service:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                lineNumber: 765,
                                                columnNumber: 5
                                            }, this),
                                            " Starts at $100 per month plus a one-time onboarding fee (call for a quote); only available as an add-on to the Accounting Premium plan."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                        lineNumber: 764,
                                        columnNumber: 3
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 744,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black mb-4",
                                children: "This only applies to Full Service plan holders."
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 769,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true)
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
            question: "How does payroll software work?",
            answer: "Payroll software simplifies pay processing tasks, such as calculating paychecks, adding employees to the company payroll, maintaining payroll records, and ensuring compliance. The way it works may vary depending on how software providers design their systems, but the standard process includes inputting employee information, pay rates, and attendance or hours worked. The system takes this data to compute, deduct withholdings, support direct deposits, and enable the entire payroll process.You can also link modern payroll software to bank accounts for automatic salary disbursement. Payroll solutions also generate pay slips to show pay information and create relevant payroll and tax reports."
        },
        {
            question: "What is the business impact of payroll software?",
            answer: "Payroll software can be a great asset to any business, big or small. It streamlines payroll processes, decreases payroll and accounting staff labor, drives efficiency, and saves your HR team from doing repetitive administrative work. More importantly, it ensures accurate and timely wage payments, which is critical for employee satisfaction. Correct compensation is fundamental to the employee-employer relationship.Payroll systems also help you avoid or minimize compliance issues. Most payroll software providers offers compliance alerts, automatic updates, and payroll trends to ensure that you’re up-to-date with labor laws, tax rules, and regulatory changes."
        },
        {
            question: "What should small businesses look for in payroll software?",
            answer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-black space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Aside from ensuring that it has the pay processing features your business needs, you should consider the following factors when selecting payroll software:"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                        lineNumber: 800,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "list-disc pl-5 space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "Customer support:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                        lineNumber: 806,
                                        columnNumber: 7
                                    }, this),
                                    " You're trusting this company with your payroll and employee compensation. If support is hard to reach or unhelpful, that’s a red flag. Look for vendors with responsive customer service and check trusted review platforms like G2 or Capterra for user feedback."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 805,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "Transparent pricing:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                        lineNumber: 809,
                                        columnNumber: 7
                                    }, this),
                                    " Make sure you understand how the provider charges—most payroll companies have a monthly base fee plus a per-employee rate, and may charge extra for services like tax filing, off-cycle payrolls, and time tracking. Always request a full quote from a sales rep to avoid surprises."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 808,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "Free trial:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                        lineNumber: 812,
                                        columnNumber: 7
                                    }, this),
                                    " While not always available, a free trial can help you test the features and usability before committing. If one isn’t offered, ask for a live demo or temporary access so you can explore the platform hands-on."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 811,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "Flexibility:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                        lineNumber: 815,
                                        columnNumber: 7
                                    }, this),
                                    " Every business is different. Look for a provider that doesn’t require long-term contracts and is willing to adapt to your specific needs. A flexible provider can scale with you and adjust if your situation changes."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 814,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                        lineNumber: 804,
                        columnNumber: 3
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                lineNumber: 799,
                columnNumber: 1
            }, this)
        },
        {
            question: "What are the essential features of payroll software?",
            answer: "While this can vary depending on your business requirements, I recommend looking for a payroll system that offers unlimited pay runs, automatic tax calculations, and tax payment/filing services. These features help save you time and money, while ensuring compliance with payroll tax regulations. It should also support multiple pay types and pay schedules, including direct deposit payouts so you can conveniently and securely send payments directly into your employees’ bank accounts. Finally, for easy employee data updates, it should have HRIS functionalities with onboarding and offboarding tools and an employee self-service portal where your team can access their pay stubs, tax forms, and other documents."
        },
        {
            question: "How much does payroll cost for a small business?",
            answer: "For a small business payroll software, monthly fees typically range from $40 to more than $60 for one employee. Note that this usually includes per-employee and base software fees. This can cost more, depending on the provider, your headcount, pay runs each month, and the features and services included, such multi-state payrol and tax reporting."
        },
        {
            question: "What is the most used payroll software?",
            answer: "Some of the most commonly used payroll systems are included in this guide, such as Gusto, which topped my list of the best small business software for payroll. QuickBooks Payroll is also a popular option, especially for small businesses that already use its accounting system."
        }
    ];
    const shareUrl = ("TURBOPACK compile-time truthy", 1) ? window.location.href : ("TURBOPACK unreachable", undefined);
    const shareTitle = "Best Payroll Software for 2025";
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
            criteria: "User reviews",
            weight: "5%"
        },
        {
            criteria: "Pricing",
            weight: "8%"
        },
        {
            criteria: "Customer support",
            weight: "10.5%"
        },
        {
            criteria: "Platform and interface",
            weight: "10.5%"
        },
        {
            criteria: "HRIS features",
            weight: "10%"
        },
        {
            criteria: "Reporting and analytics",
            weight: "10%"
        },
        {
            criteria: "Payroll features",
            weight: "10%"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        children: "Best Payroll Software for Small Business | Complete Guide"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                        lineNumber: 882,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Comprehensive guide to choosing the best payroll software for your business needs."
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                        lineNumber: 885,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:title",
                        content: "Best Payroll Software for Small Business"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                        lineNumber: 891,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:description",
                        content: "Comprehensive guide to choosing the best payroll software for your business needs."
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                        lineNumber: 895,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:image",
                        content: "https://blogs.compare-bazaar.com/images/blog3.webp"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                        lineNumber: 899,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:image:width",
                        content: "1200"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                        lineNumber: 903,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:image:height",
                        content: "627"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                        lineNumber: 904,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:url",
                        content: "https://technology-advice.vercel.app/software-reviews/payroll"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                        lineNumber: 905,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:type",
                        content: "article"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                        lineNumber: 909,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:site_name",
                        content: "Technology Advice"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                        lineNumber: 910,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                        lineNumber: 913,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:title",
                        content: "Best Payroll Software for Small Business"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                        lineNumber: 914,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:description",
                        content: "Comprehensive guide to choosing the best payroll software for your business needs."
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                        lineNumber: 918,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:image",
                        content: "https://blogs.compare-bazaar.com/images/blog3.webp"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                        lineNumber: 922,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "canonical",
                        href: "https://technology-advice.vercel.app/software-reviews/payroll"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                        lineNumber: 927,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                lineNumber: 881,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-[#0E1F1C] text-white relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-20 right-10 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 border border-white/10 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                        lineNumber: 935,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-40 right-20 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border border-white/5 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                        lineNumber: 936,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-20 left-10 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 border border-white/5 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                        lineNumber: 937,
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
                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                lineNumber: 952,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                            lineNumber: 947,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            className: "text-white/80 hover:text-white transition-colors cursor-pointer",
                                            "aria-label": "Go to homepage",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Home"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                lineNumber: 959,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                            lineNumber: 954,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white/60",
                                            children: "›"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                            lineNumber: 961,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white font-medium",
                                            children: "Best Payroll Software for Small Business"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                            lineNumber: 962,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                    lineNumber: 946,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 942,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-6xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 sm:mb-12 lg:mb-16",
                                    children: [
                                        "Best Payroll Software for",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block mt-2 sm:mt-4",
                                            children: "Small Business"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                            lineNumber: 972,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                    lineNumber: 970,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 969,
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
                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                            lineNumber: 981,
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
                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                        lineNumber: 984,
                                                        columnNumber: 19
                                                    }, this),
                                                    " ",
                                                    "is able to offer our services for free because some vendors may pay us for web traffic or other sales opportunities. Our mission is to help technology buyers make better purchasing decisions, so we provide you with information for all vendors — even those that don't pay us."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                lineNumber: 983,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                            lineNumber: 982,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                    lineNumber: 980,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 979,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                        lineNumber: 940,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                lineNumber: 933,
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
                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                            lineNumber: 1012,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                            className: "space-y-2",
                                            children: tableOfContents.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `#${item.id}`,
                                                    className: `block py-2 px-3 rounded-md text-sm transition-colors duration-200 ${item.active ? "bg-[#386861] text-white border-l-4 border-[#386861] font-medium" : "text-gray-600 hover:text-black hover:bg-gray-100"}`,
                                                    children: item.title
                                                }, index, false, {
                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                    lineNumber: 1017,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                            lineNumber: 1015,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-8 pt-6 border-t border-gray-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-gray-900 mb-4",
                                                    children: "Share this article"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                    lineNumber: 1033,
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
                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                    lineNumber: 1047,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                lineNumber: 1042,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                            lineNumber: 1037,
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
                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                    lineNumber: 1060,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                lineNumber: 1055,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                            lineNumber: 1050,
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
                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                    lineNumber: 1073,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                lineNumber: 1068,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                            lineNumber: 1063,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                    lineNumber: 1036,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                            lineNumber: 1032,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                    lineNumber: 1008,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 1007,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 max-w-4xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        id: "what-is-payroll-software?",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 transition-shadow duration-300 overflow-hidden p-6 sm:p-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                                    className: "mb-8",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "text-3xl sm:text-4xl font-bold text-gray-900 mb-4",
                                                        children: "What is payroll software?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                        lineNumber: 1088,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                    lineNumber: 1087,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "prose prose-lg max-w-none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 leading-relaxed mb-6",
                                                            children: "Payroll software helps businesses to manage, organize, and automate the employee payment and tax filing processes. It eliminates time-consuming, payroll-related tasks for human resources (HR), reduces pay errors, and guarantees that employees receive payment on time."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                            lineNumber: 1095,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 leading-relaxed mb-6",
                                                            children: "Most payroll software solutions deliver direct deposit, expense management, employee self-service, time tracking, and reporting features. They can also calculate wages, deduct tax withholdings, pay government employment taxes, and even alert employers when it’s time to file tax forms. "
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                            lineNumber: 1096,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 leading-relaxed mb-6",
                                                            children: [
                                                                "For this guide, I reviewed seven market-leading payroll software solutions and narrowed the list to my top five recommendations. The best payroll software for small businesses are: ",
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: "#",
                                                                    className: "text-[#386861] hover:text-green-700 underline",
                                                                    children: "Gusto"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                    lineNumber: 1100,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " ",
                                                                "is the best payroll software overall.",
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: "#",
                                                                    className: "text-[#386861] hover:text-green-700 underline",
                                                                    children: "OnPay"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                    lineNumber: 1107,
                                                                    columnNumber: 3
                                                                }, this),
                                                                " ",
                                                                "is best for ease of use.",
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: "#",
                                                                    className: "text-[#386861] hover:text-green-700 underline",
                                                                    children: "QuickBooks Payroll"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                    lineNumber: 1114,
                                                                    columnNumber: 3
                                                                }, this),
                                                                " ",
                                                                "is best for its accounting integration.",
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: "#",
                                                                    className: "text-[#386861] hover:text-green-700 underline",
                                                                    children: "Paycor"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                    lineNumber: 1121,
                                                                    columnNumber: 3
                                                                }, this),
                                                                " ",
                                                                "is best for growing businesses.",
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: "#",
                                                                    className: "text-[#386861] hover:text-green-700 underline",
                                                                    children: "Patriot Payroll"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                    lineNumber: 1128,
                                                                    columnNumber: 3
                                                                }, this),
                                                                " ",
                                                                "is the best budget-friendly payroll software. Honorable mention:",
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: "#",
                                                                    className: "text-[#386861] hover:text-green-700 underline",
                                                                    children: "Rippling"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                    lineNumber: 1135,
                                                                    columnNumber: 3
                                                                }, this),
                                                                " ",
                                                                "is best for payroll automation."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                            lineNumber: 1098,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                lineNumber: 1155,
                                                                                columnNumber: 7
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-[#386861]",
                                                                                children: expandedSections["update-notes"] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                                                    className: "w-5 h-5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                    lineNumber: 1158,
                                                                                    columnNumber: 11
                                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                    className: "w-5 h-5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                    lineNumber: 1160,
                                                                                    columnNumber: 11
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                lineNumber: 1156,
                                                                                columnNumber: 7
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                        lineNumber: 1151,
                                                                        columnNumber: 5
                                                                    }, this),
                                                                    expandedSections["update-notes"] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "px-4 pb-4 border-t border-gray-200",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "pt-4 space-y-3 text-gray-700 text-sm",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                                            children: "Mar. 12, 2025:"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                            lineNumber: 1168,
                                                                                            columnNumber: 14
                                                                                        }, this),
                                                                                        " Robie Ann Ferrer verified pricing for each vendor and made minor edits to the copy to remove QuickBooks Payroll’s 30-day free trial as this is no longer available."
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                    lineNumber: 1168,
                                                                                    columnNumber: 11
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                                            children: "Jan. 29, 2025:"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                            lineNumber: 1169,
                                                                                            columnNumber: 14
                                                                                        }, this),
                                                                                        " Robie Ann Ferrer used a new scoring rubric with criteria and software options best suited for small business pay processing. As a result, RUN Powered by ADP was added to the rubric, while ADP Workforce Now, Paychex, APS Payroll, and Deel were removed. Then, she evaluated the newly added platforms and updated the scores of others on the list. Given the revised rubric, Gusto replaced Rippling as the best overall software for payroll, while Rippling moved to the honorable mentions list. Finally, Robie made revisions throughout the article to reflect rubric score adjustments, changed “best for” recommendations, and added up-to-date product information for all vendors."
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                    lineNumber: 1169,
                                                                                    columnNumber: 11
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                                            children: "Oct. 11, 2024:"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                            lineNumber: 1170,
                                                                                            columnNumber: 14
                                                                                        }, this),
                                                                                        " Robie Ann Ferrer verified pricing for each vendor and updated the list of countries where Gusto’s EOR services are available. She also added the Best For descriptions of the software in our Honorable Mentions list and updated the formatting for that section."
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                    lineNumber: 1170,
                                                                                    columnNumber: 11
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                                            children: "Sep. 18, 2024:"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                            lineNumber: 1171,
                                                                                            columnNumber: 14
                                                                                        }, this),
                                                                                        " We refined the page layout by adding new design elements to improve the visual flow of information."
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                    lineNumber: 1171,
                                                                                    columnNumber: 11
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                                            children: "Sep. 13, 2024:"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                            lineNumber: 1172,
                                                                                            columnNumber: 14
                                                                                        }, this),
                                                                                        " Robie Ann Ferrer verified pricing for each vendor, checked the availability of new features, and updated the copy to improve the page’s readability."
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                    lineNumber: 1172,
                                                                                    columnNumber: 11
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                                            children: "Sep. 12, 2024:"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                            lineNumber: 1173,
                                                                                            columnNumber: 14
                                                                                        }, this),
                                                                                        " We updated all mentions from Rippling Unity to Rippling Platform to reflect its rebranding."
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                    lineNumber: 1173,
                                                                                    columnNumber: 11
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                                            children: "Aug. 14, 2024:"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                            lineNumber: 1174,
                                                                                            columnNumber: 14
                                                                                        }, this),
                                                                                        " We added a note to highlight QuickBooks Payroll pricing changes."
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                    lineNumber: 1174,
                                                                                    columnNumber: 11
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                                            children: "Mar. 19, 2024:"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                            lineNumber: 1175,
                                                                                            columnNumber: 14
                                                                                        }, this),
                                                                                        " Irene Casucian verified pricing for each vendor, checked the availability of new features, and updated the copy to improve the page’s readability."
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                    lineNumber: 1175,
                                                                                    columnNumber: 11
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                                            children: "Jan. 18, 2024:"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                            lineNumber: 1176,
                                                                                            columnNumber: 14
                                                                                        }, this),
                                                                                        " Jessica Dennis reevaluated our top choices for 2024 using an objective scoring rubric. As a result, Rippling was added to the list as best overall, and Patriot was removed from the list. She also rewrote most of the article and updated product information, prices, and key features."
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                    lineNumber: 1176,
                                                                                    columnNumber: 11
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                            lineNumber: 1167,
                                                                            columnNumber: 9
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                        lineNumber: 1166,
                                                                        columnNumber: 7
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                lineNumber: 1150,
                                                                columnNumber: 3
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                            lineNumber: 1148,
                                                            columnNumber: 1
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
                                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                            lineNumber: 1189,
                                                                            columnNumber: 5
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-[#386861]",
                                                                            children: expandedSections["methodology"] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                                                className: "w-5 h-5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                lineNumber: 1192,
                                                                                columnNumber: 9
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                className: "w-5 h-5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                lineNumber: 1194,
                                                                                columnNumber: 9
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                            lineNumber: 1190,
                                                                            columnNumber: 5
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                    lineNumber: 1185,
                                                                    columnNumber: 3
                                                                }, this),
                                                                expandedSections["methodology"] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "px-4 pb-4 border-t border-gray-200",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "pt-4 space-y-4 text-gray-700 text-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                children: "To evaluate the best payroll software for small businesses, I collaborated with Irene Casucian, one of our expert research analysts, where we used a 52-point rubric to review and compare seven online payroll platforms. Our options included:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                lineNumber: 1202,
                                                                                columnNumber: 9
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                className: "list-disc pl-5 space-y-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                        children: "Gusto"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                        lineNumber: 1207,
                                                                                        columnNumber: 11
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                        children: "Rippling"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                        lineNumber: 1208,
                                                                                        columnNumber: 11
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                        children: "Patriot Payroll"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                        lineNumber: 1209,
                                                                                        columnNumber: 11
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                        children: "OnPay"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                        lineNumber: 1210,
                                                                                        columnNumber: 11
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                        children: "QuickBooks Payroll"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                        lineNumber: 1211,
                                                                                        columnNumber: 11
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                        children: "Paycor"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                        lineNumber: 1212,
                                                                                        columnNumber: 11
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                        children: "RUN Powered by ADP"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                        lineNumber: 1213,
                                                                                        columnNumber: 11
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                lineNumber: 1206,
                                                                                columnNumber: 9
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                children: "We looked for functionalities that streamline wage and tax calculations and automate payroll tax filings and payments. In addition to checking online user reviews, we researched the customization features, compliance tools, reporting, third-party software integrations, and customer support options offered. If available, we leveraged free trials and demos to assess each software’s functionality and ease of use."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                lineNumber: 1216,
                                                                                columnNumber: 9
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                children: "I also added my expert rating to each criterion, where I considered the effectiveness of that area or feature. Then, I narrowed down the list to my top five recommendations."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                lineNumber: 1220,
                                                                                columnNumber: 9
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "font-semibold text-base text-gray-900 mt-4",
                                                                                children: "Below is the breakdown of the evaluation criteria:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                lineNumber: 1224,
                                                                                columnNumber: 9
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                className: "list-disc pl-5 space-y-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                                                children: "Payroll features: 25%"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                                lineNumber: 1228,
                                                                                                columnNumber: 13
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                                lineNumber: 1228,
                                                                                                columnNumber: 41
                                                                                            }, this),
                                                                                            "We considered direct deposit timelines, automatic tax filings, contractor pay runs, garnishment payments, multiple employee pay options, and compliance. The top vendors automate most processes and offer coverage in all U.S. states."
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                        lineNumber: 1227,
                                                                                        columnNumber: 11
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                                                children: "Pricing: 20%"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                                lineNumber: 1232,
                                                                                                columnNumber: 13
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                                lineNumber: 1232,
                                                                                                columnNumber: 32
                                                                                            }, this),
                                                                                            "We rated transparent, affordable pricing, unlimited pay runs, free trials, and value-for-money. Platforms with better feature-to-price balance scored higher."
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                        lineNumber: 1231,
                                                                                        columnNumber: 11
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                                                children: "HRIS features: 15%"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                                lineNumber: 1236,
                                                                                                columnNumber: 13
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                                lineNumber: 1236,
                                                                                                columnNumber: 38
                                                                                            }, this),
                                                                                            "Platforms with onboarding/offboarding, new hire reporting, employee portals, and recordkeeping earned higher marks. We also considered benefit access across all states."
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                        lineNumber: 1235,
                                                                                        columnNumber: 11
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                                                children: "Platform and interface: 15%"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                                lineNumber: 1240,
                                                                                                columnNumber: 13
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                                lineNumber: 1240,
                                                                                                columnNumber: 47
                                                                                            }, this),
                                                                                            "Usability, security, scalability, and tech stack integration were factored into this score."
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                        lineNumber: 1239,
                                                                                        columnNumber: 11
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                                                children: "Customer support: 10%"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                                lineNumber: 1244,
                                                                                                columnNumber: 13
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                                lineNumber: 1244,
                                                                                                columnNumber: 41
                                                                                            }, this),
                                                                                            "We reviewed support channels, availability, knowledge bases, and access to bookkeeping or payroll experts."
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                        lineNumber: 1243,
                                                                                        columnNumber: 11
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                                                children: "Reporting and analytics: 10%"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                                lineNumber: 1248,
                                                                                                columnNumber: 13
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                                lineNumber: 1248,
                                                                                                columnNumber: 48
                                                                                            }, this),
                                                                                            "Strong compliance reporting, customizable templates, exports, and scheduled report features scored highest here."
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                        lineNumber: 1247,
                                                                                        columnNumber: 11
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                                                children: "User reviews: 5%"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                                lineNumber: 1252,
                                                                                                columnNumber: 13
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                                lineNumber: 1252,
                                                                                                columnNumber: 36
                                                                                            }, this),
                                                                                            "Ratings from Capterra, G2, and TrustRadius (3.5+ stars) contributed to this final category."
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                        lineNumber: 1251,
                                                                                        columnNumber: 11
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                lineNumber: 1226,
                                                                                columnNumber: 9
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                        lineNumber: 1201,
                                                                        columnNumber: 7
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                    lineNumber: 1200,
                                                                    columnNumber: 5
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                            lineNumber: 1184,
                                                            columnNumber: 1
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "border border-gray-200 rounded-lg",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>toggleSection("why-you-can-trust-my-advice"),
                                                                    className: "w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors duration-200",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "text-lg font-semibold text-gray-900",
                                                                            children: "Why you can trust my advice"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                            lineNumber: 1268,
                                                                            columnNumber: 5
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-[#386861]",
                                                                            children: expandedSections["why-you-can-trust-my-advice"] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                                                className: "w-5 h-5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                lineNumber: 1271,
                                                                                columnNumber: 9
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                className: "w-5 h-5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                lineNumber: 1273,
                                                                                columnNumber: 9
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                            lineNumber: 1269,
                                                                            columnNumber: 5
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                    lineNumber: 1264,
                                                                    columnNumber: 3
                                                                }, this),
                                                                expandedSections["why-you-can-trust-my-advice"] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "px-4 pb-4 border-t border-gray-200",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "pt-4 space-y-4 text-gray-700 text-sm",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            children: "My recommendations for the best payroll software for small companies are based on more than five years of experience writing about and evaluating payroll systems for small to mid-sized businesses (SMBs). I also have 10 years of expertise handling different facets of human resources, including managing HRIS, time tracking, and pay processing software. These allowed me to provide insights to help business owners determine which payroll platform best fits their needs. "
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                            lineNumber: 1281,
                                                                            columnNumber: 9
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                        lineNumber: 1280,
                                                                        columnNumber: 7
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                    lineNumber: 1279,
                                                                    columnNumber: 5
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                            lineNumber: 1263,
                                                            columnNumber: 1
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                    lineNumber: 1094,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                            lineNumber: 1085,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                        lineNumber: 1084,
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
                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                        lineNumber: 1294,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center space-x-2 text-sm text-gray-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Advertisement"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                lineNumber: 1298,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-4 h-4 rounded-full bg-gray-400 flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-white  font-bold",
                                                                    children: "i"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                    lineNumber: 1300,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                lineNumber: 1299,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                        lineNumber: 1297,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                lineNumber: 1293,
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
                                                                                children: "keka"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                lineNumber: 1310,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                            lineNumber: 1309,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xl font-bold text-gray-900",
                                                                            children: [
                                                                                "Keka HR",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                    lineNumber: 1316,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-lg",
                                                                                    children: "Projects"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                    lineNumber: 1317,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                            lineNumber: 1314,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                    lineNumber: 1308,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                lineNumber: 1307,
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
                                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                            lineNumber: 1323,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                            lineNumber: 1324,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                    lineNumber: 1322,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                lineNumber: 1321,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                        lineNumber: 1306,
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
                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                        lineNumber: 1331,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-medium text-gray-900",
                                                                        children: "Medium sized companies"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                        lineNumber: 1332,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                lineNumber: 1330,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-gray-600 mb-1",
                                                                        children: "Core Features"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                        lineNumber: 1337,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-medium text-gray-900",
                                                                        children: "API, Document Management / Sharing, Employee Self Service, and 3 more"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                        lineNumber: 1338,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                lineNumber: 1336,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-gray-600 mb-1",
                                                                        children: "Integrations"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                        lineNumber: 1343,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-medium text-gray-900",
                                                                        children: "QuickBooks Online, Tally"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                        lineNumber: 1344,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                lineNumber: 1342,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                        lineNumber: 1329,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                lineNumber: 1305,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                        lineNumber: 1292,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        id: "best-payroll-software",
                                        className: "mt-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center mb-8 sm:mb-12",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                            className: "text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4",
                                                            children: "Best payroll software"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                            lineNumber: 1356,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                            lineNumber: 1359,
                                                            columnNumber: 11
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                    lineNumber: 1355,
                                                    columnNumber: 9
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
                                                                                className: "text-left py-3 px-6 font-semibold text-gray-700 text-sm sm:text-base",
                                                                                children: "Platform"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                lineNumber: 1367,
                                                                                columnNumber: 19
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "text-center py-3 px-6 font-semibold text-gray-700 text-sm sm:text-base",
                                                                                children: "Score"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                lineNumber: 1368,
                                                                                columnNumber: 19
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "text-center py-3 px-6 font-semibold text-gray-700 text-sm sm:text-base",
                                                                                children: "Best For"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                lineNumber: 1369,
                                                                                columnNumber: 19
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "text-center py-3 px-6 font-semibold text-gray-700 text-sm sm:text-base",
                                                                                children: "Starting Price"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                lineNumber: 1370,
                                                                                columnNumber: 19
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "text-center py-3 px-6 font-semibold text-gray-700 text-sm sm:text-base",
                                                                                children: "Contractor Payroll"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                lineNumber: 1371,
                                                                                columnNumber: 19
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "text-center py-3 px-6 font-semibold text-gray-700 text-sm sm:text-base",
                                                                                children: "Learn More"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                lineNumber: 1372,
                                                                                columnNumber: 19
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "text-center py-3 px-6 font-semibold text-gray-700 text-sm sm:text-base",
                                                                                children: "Visit"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                lineNumber: 1373,
                                                                                columnNumber: 19
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                        lineNumber: 1366,
                                                                        columnNumber: 17
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                    lineNumber: 1365,
                                                                    columnNumber: 15
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                    children: payrollData.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                            className: "border-b border-gray-100 hover:bg-gray-50 transition",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "py-4 px-6 flex items-center space-x-3",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                            src: item.image,
                                                                                            alt: item.alt,
                                                                                            className: "w-12 h-12 object-contain"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                            lineNumber: 1380,
                                                                                            columnNumber: 23
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-sm font-medium text-gray-800",
                                                                                            children: item.name
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                            lineNumber: 1381,
                                                                                            columnNumber: 23
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                    lineNumber: 1379,
                                                                                    columnNumber: 21
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "py-4 px-6 text-center text-sm text-gray-700",
                                                                                    children: item.expertScore
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                    lineNumber: 1383,
                                                                                    columnNumber: 21
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "py-4 px-6 text-center text-sm text-gray-700",
                                                                                    children: item.bestFor
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                    lineNumber: 1384,
                                                                                    columnNumber: 21
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "py-4 px-6 text-center text-sm text-gray-700",
                                                                                    children: item.startingPrice
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                    lineNumber: 1385,
                                                                                    columnNumber: 21
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "py-4 px-6 text-center text-sm text-gray-700",
                                                                                    children: item.contractorOnlyPayroll
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                    lineNumber: 1386,
                                                                                    columnNumber: 21
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "py-4 px-6 text-center text-sm text-blue-600 underline",
                                                                                    children: item.learnmore ? item.learnmore : "N/A"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                    lineNumber: 1387,
                                                                                    columnNumber: 21
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "py-4 px-6 text-center",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                        href: item.visitUrl,
                                                                                        target: "_blank",
                                                                                        rel: "noopener noreferrer",
                                                                                        className: "text-white bg-[#386861] hover:bg-green-700 px-4 py-2 rounded text-sm",
                                                                                        children: "Visit"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                        lineNumber: 1391,
                                                                                        columnNumber: 23
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                    lineNumber: 1390,
                                                                                    columnNumber: 21
                                                                                }, this)
                                                                            ]
                                                                        }, item.id, true, {
                                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                            lineNumber: 1378,
                                                                            columnNumber: 19
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                    lineNumber: 1376,
                                                                    columnNumber: 15
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                            lineNumber: 1364,
                                                            columnNumber: 13
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                        lineNumber: 1363,
                                                        columnNumber: 11
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                    lineNumber: 1362,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center mt-12",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600 text-sm",
                                                        children: "This is for Patriot Payroll’s Full Service plan, which includes tax filing services. If you prefer to file tax forms yourself, Patriot offers a Basic Payroll package that costs $17 per month + $4 per employee monthly."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                        lineNumber: 1408,
                                                        columnNumber: 11
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                    lineNumber: 1407,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                            lineNumber: 1354,
                                            columnNumber: 7
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                        lineNumber: 1353,
                                        columnNumber: 1
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        id: "gusto",
                                        children: toolsArray.map((tool)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white rounded-xl border border-gray-200 mt-4 shadow-sm p-6 mb-8",
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
                                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                            lineNumber: 1431,
                                                                            columnNumber: 17
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                        lineNumber: 1430,
                                                                        columnNumber: 15
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                        className: "text-2xl font-bold text-black",
                                                                        children: tool.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                        lineNumber: 1439,
                                                                        columnNumber: 15
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                lineNumber: 1429,
                                                                columnNumber: 13
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: tool.button.link,
                                                                className: "bg-[#386861] text-white px-4 py-2 rounded-full text-sm hover:bg-green-700",
                                                                children: tool.button.text
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                lineNumber: 1441,
                                                                columnNumber: 13
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                        lineNumber: 1428,
                                                        columnNumber: 11
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
                                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                lineNumber: 1454,
                                                                                columnNumber: 19
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: score.score
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                lineNumber: 1455,
                                                                                columnNumber: 19
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                        lineNumber: 1453,
                                                                        columnNumber: 17
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-full bg-gray-100 rounded-full h-2",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "bg-[#386861] h-2 rounded-full",
                                                                            style: {
                                                                                width: `${parseFloat(score.score) / 5 * 100}%`
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                            lineNumber: 1458,
                                                                            columnNumber: 19
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                        lineNumber: 1457,
                                                                        columnNumber: 17
                                                                    }, this)
                                                                ]
                                                            }, index, true, {
                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                lineNumber: 1452,
                                                                columnNumber: 15
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                        lineNumber: 1450,
                                                        columnNumber: 11
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
                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                        lineNumber: 1472,
                                                                        columnNumber: 15
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                        className: "list-disc pl-5 space-y-1",
                                                                        children: tool.pros.map((pro, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                children: pro
                                                                            }, index, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                lineNumber: 1475,
                                                                                columnNumber: 19
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                        lineNumber: 1473,
                                                                        columnNumber: 15
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                lineNumber: 1471,
                                                                columnNumber: 13
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-lg font-semibold mb-2",
                                                                        children: "Cons"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                        lineNumber: 1480,
                                                                        columnNumber: 15
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                        className: "list-disc pl-5 space-y-1",
                                                                        children: tool.cons.map((con, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                children: con
                                                                            }, index, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                lineNumber: 1483,
                                                                                columnNumber: 19
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                        lineNumber: 1481,
                                                                        columnNumber: 15
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                lineNumber: 1479,
                                                                columnNumber: 13
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                        lineNumber: 1470,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-6 text-black",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-lg font-semibold mb-2",
                                                                children: [
                                                                    "Why I chose ",
                                                                    tool.title.split(':')[0]
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                lineNumber: 1491,
                                                                columnNumber: 13
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mb-4",
                                                                children: tool.why.intro
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                lineNumber: 1494,
                                                                columnNumber: 13
                                                            }, this),
                                                            tool.why.bullets && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "list-disc pl-5 space-y-1 mb-4",
                                                                children: tool.why.bullets.map((bullet, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: bullet
                                                                    }, index, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                        lineNumber: 1498,
                                                                        columnNumber: 19
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                lineNumber: 1496,
                                                                columnNumber: 15
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: tool.why.outro
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                lineNumber: 1502,
                                                                columnNumber: 13
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                        lineNumber: 1490,
                                                        columnNumber: 11
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
                                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                            lineNumber: 1514,
                                                                            columnNumber: 19
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[#386861]",
                                                                            children: openSections[sectionKey] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                                                className: "w-5 h-5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                lineNumber: 1517,
                                                                                columnNumber: 23
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                className: "w-5 h-5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                lineNumber: 1519,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                            lineNumber: 1515,
                                                                            columnNumber: 19
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                    lineNumber: 1510,
                                                                    columnNumber: 17
                                                                }, this),
                                                                openSections[sectionKey] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-2 text-gray-700",
                                                                    children: typeof content === 'string' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: content
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                        lineNumber: 1526,
                                                                        columnNumber: 23
                                                                    }, this) : content
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                    lineNumber: 1524,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, sectionKey, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                            lineNumber: 1509,
                                                            columnNumber: 15
                                                        }, this);
                                                    })
                                                ]
                                            }, tool.id, true, {
                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                lineNumber: 1426,
                                                columnNumber: 9
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                        lineNumber: 1417,
                                        columnNumber: 7
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
                                                                        src: "/images/keka.png" // Replace with your actual logo path
                                                                        ,
                                                                        alt: "keka Projects Logo",
                                                                        width: 80,
                                                                        height: 80,
                                                                        className: "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain",
                                                                        priority: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                        lineNumber: 1549,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                    lineNumber: 1548,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "min-w-0 flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                            className: "text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2",
                                                                            children: "Keka HR"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                            lineNumber: 1561,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "",
                                                                            className: "text-sm sm:text-base md:text-lg text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 font-medium",
                                                                            children: "Leave a Review"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                            lineNumber: 1564,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                    lineNumber: 1560,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                            lineNumber: 1546,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-blue-600 hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                        className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                        lineNumber: 1576,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "Compare"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                lineNumber: 1575,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                            lineNumber: 1574,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                    lineNumber: 1545,
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
                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                lineNumber: 1585,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap items-center gap-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-600",
                                                                    children: "Medium (250-999 Employees),"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                    lineNumber: 1589,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                lineNumber: 1588,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                        lineNumber: 1584,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                    lineNumber: 1583,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-6 sm:mb-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6",
                                                            children: "A true employee experience platform, Keka is the SME HR Tech space leader in India. It enables businesses to put to sleep mundane and tedious tasks of workplace administration. The product helps organisations in managing their HR processes from hire to retire while ensuring an awesome user experience to the employees. Keka follows an employee-first approach, making it easier for any company to make the journey from good to great. Learn More About Keka HR "
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                            lineNumber: 1600,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/learn-more/Keka-hr-projects",
                                                            className: "text-sm sm:text-base md:text-lg text-[#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-semibold",
                                                            children: "Learn More About Keka HR"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                            lineNumber: 1603,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                    lineNumber: 1599,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-end",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-[#386861] hover:bg-green-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group",
                                                        children: [
                                                            "Visit Website",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                lineNumber: 1620,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                        lineNumber: 1613,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                    lineNumber: 1612,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                            lineNumber: 1544,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                        lineNumber: 1543,
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
                                                                        src: "/images/access.png" // Replace with your actual logo path
                                                                        ,
                                                                        alt: "access Projects Logo",
                                                                        width: 80,
                                                                        height: 80,
                                                                        className: "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain",
                                                                        priority: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                        lineNumber: 1634,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                    lineNumber: 1633,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "min-w-0 flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                            className: "text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2",
                                                                            children: "Access SelectHR"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                            lineNumber: 1646,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "/reviews/zoho-projects",
                                                                            className: "text-sm sm:text-base md:text-lg text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 font-medium",
                                                                            children: "Leave a Review"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                            lineNumber: 1649,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                    lineNumber: 1645,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                            lineNumber: 1631,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-blue-600 hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                        className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                        lineNumber: 1661,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "Compare"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                lineNumber: 1660,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                            lineNumber: 1659,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                    lineNumber: 1630,
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
                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                lineNumber: 1670,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap items-center gap-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-600",
                                                                    children: "Medium (250-999 Employees), Enterprise (5,000+ Employees), Large (1,000-4,999 Employees)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                    lineNumber: 1674,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                lineNumber: 1673,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                        lineNumber: 1669,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                    lineNumber: 1668,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-6 sm:mb-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6",
                                                            children: "The Access Group develops business management solutions, specifically HR software. Their products are used by more than 5,000 customers in the United Kingdom, including corporate and non-profit organizations. Recently, the company has been rated among the fastest growing software developers in the UK and among the top places to work in the country. The company continues to evolve today."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                            lineNumber: 1685,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "",
                                                            className: "text-sm sm:text-base md:text-lg text-[#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-semibold",
                                                            children: "Learn More About Access SelectHR"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                            lineNumber: 1688,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                    lineNumber: 1684,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-end",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-[#386861] hover:bg-green-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group",
                                                        children: [
                                                            "Visit Website",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                lineNumber: 1705,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                        lineNumber: 1698,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                    lineNumber: 1697,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                            lineNumber: 1629,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                        lineNumber: 1628,
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
                                                                        src: "/images/accomplish.png" // Replace with your actual logo path
                                                                        ,
                                                                        alt: "accomplish Projects Logo",
                                                                        width: 80,
                                                                        height: 80,
                                                                        className: "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain",
                                                                        priority: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                        lineNumber: 1718,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                    lineNumber: 1717,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "min-w-0 flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                            className: "text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2",
                                                                            children: "Accomplish EP"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                            lineNumber: 1730,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "/reviews/zoho-projects",
                                                                            className: "text-sm sm:text-base md:text-lg text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 font-medium",
                                                                            children: "Leave a Review"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                            lineNumber: 1733,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                    lineNumber: 1729,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                            lineNumber: 1715,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-blue-600 hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                        className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                        lineNumber: 1745,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "Compare"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                lineNumber: 1744,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                            lineNumber: 1743,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                    lineNumber: 1714,
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
                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                lineNumber: 1754,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap items-center gap-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-600",
                                                                    children: "Medium (250-999 Employees), Large (1,000-4,999 Employees)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                    lineNumber: 1758,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                lineNumber: 1757,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                        lineNumber: 1753,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                    lineNumber: 1752,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-6 sm:mb-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6",
                                                            children: "Accomplish EP is a cloud-based human capital management (HCM) platform for small and mid-sized companies. It offers HR, payroll, time tracking, benefits, performance reviews, and compliance capabilities under a single concept application."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                            lineNumber: 1769,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/learn-more/Keka-hr-projects",
                                                            className: "text-sm sm:text-base md:text-lg text-[#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-semibold",
                                                            children: "Learn More About Accomplish EP"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                            lineNumber: 1772,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                    lineNumber: 1768,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-end",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-[#386861]hover:bg-green-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group",
                                                        children: [
                                                            "Visit Website",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                lineNumber: 1789,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                        lineNumber: 1782,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                    lineNumber: 1781,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                            lineNumber: 1713,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                        lineNumber: 1712,
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
                                                                        src: "/images/acquire.png" // Replace with your actual logo path
                                                                        ,
                                                                        alt: "acquire Projects Logo",
                                                                        width: 80,
                                                                        height: 80,
                                                                        className: "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain",
                                                                        priority: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                        lineNumber: 1802,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                    lineNumber: 1801,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "min-w-0 flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                            className: "text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2",
                                                                            children: "AcquireTM"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                            lineNumber: 1814,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "/reviews/zoho-projects",
                                                                            className: "text-sm sm:text-base md:text-lg text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 font-medium",
                                                                            children: "Leave a Review"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                            lineNumber: 1817,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                    lineNumber: 1813,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                            lineNumber: 1799,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-blue-600 hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                        className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                        lineNumber: 1829,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "Compare"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                lineNumber: 1828,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                            lineNumber: 1827,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                    lineNumber: 1798,
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
                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                lineNumber: 1838,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap items-center gap-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-600",
                                                                    children: "Micro (0-49 Employees), Medium (250-999 Employees), Large (1,000-4,999 Employees), Small (50-249 Employees)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                    lineNumber: 1842,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                lineNumber: 1841,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                        lineNumber: 1837,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                    lineNumber: 1836,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-6 sm:mb-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6",
                                                            children: "AcquireTM is a cloud-based applicant tracking and talent acquisition solution that provides a complete hiring platform for small or mid-sized businesses. AcquireTM provides an intuitive and easy to use solution that gives HR administrators, recruiters and hiring managers the tools they need to take control of hiring processes."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                            lineNumber: 1853,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/learn-more/Keka-hr-projects",
                                                            className: "text-sm sm:text-base md:text-lg text-[#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-semibold",
                                                            children: "Learn More About AcquireTM"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                            lineNumber: 1856,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                    lineNumber: 1852,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-end",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-[#386861] hover:bg-green-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group",
                                                        children: [
                                                            "Visit Website",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                lineNumber: 1873,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                        lineNumber: 1866,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                    lineNumber: 1865,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                            lineNumber: 1797,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                        lineNumber: 1796,
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
                                                                        src: "/images/adaptive.jpeg" // Replace with your actual logo path
                                                                        ,
                                                                        alt: "Zoho Projects Logo",
                                                                        width: 80,
                                                                        height: 80,
                                                                        className: "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain",
                                                                        priority: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                        lineNumber: 1885,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                    lineNumber: 1884,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "min-w-0 flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                            className: "text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2",
                                                                            children: "Adaptive Suite - Adaptive Insights"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                            lineNumber: 1897,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "/reviews/zoho-projects",
                                                                            className: "text-sm sm:text-base md:text-lg text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 font-medium",
                                                                            children: "Leave a Review"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                            lineNumber: 1900,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                    lineNumber: 1896,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                            lineNumber: 1882,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-blue-600 hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                        className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                        lineNumber: 1912,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "Compare"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                lineNumber: 1911,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                            lineNumber: 1910,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                    lineNumber: 1881,
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
                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                lineNumber: 1921,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap items-center gap-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-600",
                                                                    children: "Medium (250-999 Employees), Enterprise (5,000+ Employees), Large (1,000-4,999 Employees)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                    lineNumber: 1925,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                lineNumber: 1924,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                        lineNumber: 1920,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                    lineNumber: 1919,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-6 sm:mb-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6",
                                                            children: "Adaptive Suite is the only unified, cloud-based corporate performance management software on the market. Designed to be easy to use and implement, it is accessible from anywhere, an all-in-one package including the best business performance management software modules that Adaptive Insights distributes."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                            lineNumber: 1936,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/learn-more/Keka-hr-projects",
                                                            className: "text-sm sm:text-base md:text-lg text-[#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-semibold",
                                                            children: "Learn More About Adaptive Suite - Adaptive Insights"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                            lineNumber: 1939,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                    lineNumber: 1935,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-end",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-[#386861] hover:bg-green-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group",
                                                        children: [
                                                            "Visit Website",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                lineNumber: 1956,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                        lineNumber: 1949,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                    lineNumber: 1948,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                            lineNumber: 1880,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                        lineNumber: 1879,
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
                                                    children: "Payroll software FAQs"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                    lineNumber: 1969,
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
                                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                            lineNumber: 1982,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-md flex items-center justify-center transition-all duration-200 ${openItems[index] ? "bg-[#386861] hover:bg-green-700" : "bg-[#386861] hover:bg-green-700"}`,
                                                                            children: openItems[index] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                                                className: "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                lineNumber: 1995,
                                                                                columnNumber: 31
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                className: "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                                lineNumber: 1997,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                            lineNumber: 1987,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                    lineNumber: 1978,
                                                                    columnNumber: 25
                                                                }, this),
                                                                openItems[index] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "pb-6 sm:pb-7 md:pb-8 lg:pb-9 pr-12 sm:pr-16 md:pr-20 lg:pr-24 animate-in slide-in-from-top-2 duration-300",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed",
                                                                        children: item.answer
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                        lineNumber: 2005,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                                    lineNumber: 2004,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                            lineNumber: 1976,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                                    lineNumber: 1974,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                            lineNumber: 1967,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                        lineNumber: 1966,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                                lineNumber: 1083,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                        lineNumber: 1005,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                    lineNumber: 1004,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/Software-reviews/Payroll-software/page.jsx",
                lineNumber: 1003,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Payroll, "ZdM8dktJF/rnc6ZGAn+Xn65aZ9w=");
_c = Payroll;
var _c;
__turbopack_context__.k.register(_c, "Payroll");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_Software-reviews_Payroll-software_page_jsx_651fb4b7._.js.map
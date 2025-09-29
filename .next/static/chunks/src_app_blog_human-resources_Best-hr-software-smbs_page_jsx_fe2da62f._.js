(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Employeedisciplinary)
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
function Employeedisciplinary() {
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
    const [openNested, setOpenNested] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [tableOfContents, setTableOfContents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: "what-is-disciplinary-action",
            title: "What is disciplinary action (and why it matters)",
            active: false
        },
        {
            id: "when-to-use-disciplinary-action",
            title: "When to use disciplinary action and when not to",
            active: false
        },
        {
            id: "when-disciplinary-action-typically-applies",
            title: "When disciplinary action typically applies",
            active: false
        },
        {
            id: "when-it’s-best-to-hold-off",
            title: "When it’s best to hold off",
            active: false
        },
        {
            id: "disciplinary-models-and-sanctions",
            title: "Disciplinary models and sanctions",
            active: false
        },
        {
            id: "common-sanctions",
            title: "Common sanctions",
            active: false
        },
        {
            id: "before-you-start",
            title: "Before you start: What to have in place (and what to watch for)",
            active: false
        },
        {
            id: "disciplinary-action-form-template",
            title: "Disciplinary action form template",
            active: false
        },
        {
            id: "employee-disciplinary-process-steps",
            title: "Employee disciplinary process steps",
            active: false
        },
        {
            id: "common-mistakes-to-avoid",
            title: "Common mistakes to avoid",
            active: false
        },
        {
            id: "employee-disciplinary-action-FAQs",
            title: "Employee disciplinary action FAQs ",
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
    const toggleNested = (key)=>{
        setOpenNested(openNested === key ? null : key);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Employeedisciplinary.useEffect": ()=>{
            const checkMobile = {
                "Employeedisciplinary.useEffect.checkMobile": ()=>{
                    setIsMobile(window.innerWidth < 768);
                }
            }["Employeedisciplinary.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener("resize", checkMobile);
            return ({
                "Employeedisciplinary.useEffect": ()=>window.removeEventListener("resize", checkMobile)
            })["Employeedisciplinary.useEffect"];
        }
    }["Employeedisciplinary.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Employeedisciplinary.useEffect": ()=>{
            const handleScroll = {
                "Employeedisciplinary.useEffect.handleScroll": ()=>{
                    const sections = document.querySelectorAll("section[id]");
                    const scrollPosition = window.scrollY + 100;
                    sections.forEach({
                        "Employeedisciplinary.useEffect.handleScroll": (section)=>{
                            const sectionTop = section.offsetTop;
                            const sectionHeight = section.clientHeight;
                            const sectionId = section.getAttribute("id");
                            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                                setTableOfContents({
                                    "Employeedisciplinary.useEffect.handleScroll": (prev)=>prev.map({
                                            "Employeedisciplinary.useEffect.handleScroll": (item)=>({
                                                    ...item,
                                                    active: item.id === sectionId
                                                })
                                        }["Employeedisciplinary.useEffect.handleScroll"])
                                }["Employeedisciplinary.useEffect.handleScroll"]);
                            }
                        }
                    }["Employeedisciplinary.useEffect.handleScroll"]);
                }
            }["Employeedisciplinary.useEffect.handleScroll"];
            // Set initial active state
            handleScroll();
            window.addEventListener("scroll", handleScroll);
            return ({
                "Employeedisciplinary.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Employeedisciplinary.useEffect"];
        }
    }["Employeedisciplinary.useEffect"], []);
    const faqData = [
        {
            question: "Who should be involved in the disciplinary action process?",
            answer: "The employee’s manager usually leads the disciplinary process from start to finish. HR may also be involved to offer guidance, document meetings, or handle investigations. Typically, you will see more HR or executive team involvement as discipline steps progress, especially if you require approval from upper management for each step."
        },
        {
            question: "How long does an employer have to take disciplinary action?",
            answer: "Disciplinary action should occur as soon as reasonably possible following the behavior or incident. Generally, the earlier you see and correct the employee’s behavior, the less likely it is to become a bad habit. So, you should wait no longer than a day or two after the observed behavior to confront the employee."
        },
        {
            question: "Can I fire an employee without a written warning?",
            answer: "Technically, yes, as long as your employee works in an at-will state. But just because you can doesn’t mean you should. Written warnings demonstrate the reasons that led to termination, the steps you took to correct or help the employee change course, and that the employee was aware of their misconduct. They are crucial documents that can help you in the event of a lawsuit. "
        },
        {
            question: "What if the employee refused to sign the disciplinary action form?",
            answer: "You should document the refusal by writing “employee refused to sign” on the form. Add the date and have another manager present as a witness. Make sure the witness also signs the form. Then, give a copy of the form to the employee."
        }
    ];
    const posts = [
        {
            title: 'How to Do Payroll Yourself: A Comprehensive Small Business Guide',
            date: 'May 13, 2025',
            image: '/images/hr-2.jpg'
        },
        {
            title: 'Best Human Resources (HR) Software for Small Businesses in 2025',
            date: 'May 5, 2025',
            image: '/images/hr-3.jpg'
        },
        {
            title: 'Ziprecruiter vs Indeed:2025 Comparison for Employees',
            date: 'July 3, 2025',
            image: '/images/hr-4.jpg'
        }
    ];
    // Content for each section - you can modify these
    const sectionContent = {
        counseling: "Managers or HR representatives hold one-on-one conversations with employees to clarify expectations and correct the infraction or behavior before it worsens. This is your early-stage intervention, informal yet documented, and is typically used to address minor issues, such as incomplete work or a missed deadline.",
        verbal: "A verbal warning is a formal part of the disciplinary process, even if it doesn’t involve written consequences yet. The process is similar to an informal counseling session. But, despite the name, managers or HR staff should document the conversation, get signatures from meeting participants, and add it to the employee’s personnel file.",
        written: "A written warning is similar to a verbal warning but more serious. Managers, HR staff, or both have a conversation with the employee about the continued infractions and provide clear and time-bound expectations for improvement. All parties sign the warning to acknowledge it and place it in the employee’s personnel file.",
        retraining: "Retraining can happen at any time in the disciplinary process and involves training the employee again on proper procedures, processes, or policies.",
        demotion: "A more severe disciplinary action in which managers or HR teams move the employee into a lower position, typically a step below their current role. This is usually a result of poor employee performance and usually involves the loss of title and pay.",
        privileges: "Loss of privileges involves taking away particular freedoms due to an employee’s behavior. The best are tied directly to the employee’s misconduct. For example, you may take a company credit card away from an employee who consistently turns in expense reports late. Or, you may revoke the employee’s flex time benefit if the employee fails to work the minimum number of hours each week.",
        agreements: "Last-chance agreements are contracts with employees outlining the steps employees must take to correct their behaviors or face termination. As the name suggests, this is typically the “last chance” employees have to save their jobs. Many collective bargaining agreements (CBAs) include last-chance agreements as a step in the disciplinary action procedure for union employees.",
        paycut: "Pay cuts result in a compensation reduction due to employee misconduct. A word of caution: although pay cuts are legal, watch the timing of when they go into effect. You should have a conversation with the employee outlining the reason for the pay cut, note when it will go into effect, and document it. This allows employees to agree or disagree to work at this new rate and avoid violations of federal and state labor laws, like the Fair Labor Standards Act (FLSA).",
        suspension: "Suspension involves removing the employee from the workplace for a period of time. Depending on the seriousness of the infraction, suspensions may be paid or unpaid. You can use suspensions during investigations to keep the workplace safe as you understand the facts of the incident.",
        termination: "As the last step of any disciplinary action process, termination is the permanent dismissal of the employee from the workplace. In some cases, the employee’s behavior may be severe enough that termination occurs immediately following the behavior."
    };
    const AccordionItem = ({ title, section, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-b border-gray-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>toggleSection(section),
                    className: "w-full flex justify-between items-center py-4 text-left focus:outline-none hover:bg-gray-50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-800 font-medium",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                            lineNumber: 229,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-7 h-7 bg-[#386861] rounded flex items-center justify-center text-white font-bold",
                            children: openSections[section] ? "−" : "+"
                        }, void 0, false, {
                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                            lineNumber: 230,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                    lineNumber: 225,
                    columnNumber: 7
                }, this),
                openSections[section] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pb-4 text-gray-700",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                    lineNumber: 235,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
            lineNumber: 224,
            columnNumber: 5
        }, this);
    const shareUrl = ("TURBOPACK compile-time truthy", 1) ? window.location.href : ("TURBOPACK unreachable", undefined);
    const shareTitle = "Employee Disciplinary Action Guide + Form Template";
    const shareOnFacebook = ()=>{
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, "_blank");
    };
    const shareOnLinkedIn = ()=>{
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, "_blank");
    };
    const shareOnTwitter = ()=>{
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`, "_blank");
    };
    const NestedItem = ({ title, name, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-b border-gray-100",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>toggleNested(name),
                    className: "w-full flex justify-between items-center py-3 text-left focus:outline-none hover:bg-gray-50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-700 font-medium",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                            lineNumber: 275,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-6 h-6 bg-[#386861] rounded flex items-center justify-center text-white font-bold",
                            children: openNested === name ? "−" : "+"
                        }, void 0, false, {
                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                            lineNumber: 276,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                    lineNumber: 271,
                    columnNumber: 7
                }, this),
                openNested === name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pl-4 pr-2 pb-4",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                    lineNumber: 280,
                    columnNumber: 31
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
            lineNumber: 270,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        children: "Employee Disciplinary Action Guide + Form Template"
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                        lineNumber: 287,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Comprehensive guide to choosing the best payroll software for your business needs."
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                        lineNumber: 288,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:title",
                        content: "Best Payroll Software for Small Business"
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                        lineNumber: 294,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:description",
                        content: "Comprehensive guide to choosing the best payroll software for your business needs."
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                        lineNumber: 298,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:image",
                        content: "https://blogs.compare-bazaar.com/images/blog3.webp"
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                        lineNumber: 302,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:image:width",
                        content: "1200"
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                        lineNumber: 306,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:image:height",
                        content: "627"
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                        lineNumber: 307,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:url",
                        content: "https://technology-advice.vercel.app/software-reviews/payroll"
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                        lineNumber: 308,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:type",
                        content: "article"
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                        lineNumber: 312,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:site_name",
                        content: "Technology Advice"
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                        lineNumber: 313,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                        lineNumber: 316,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:title",
                        content: "Employee Disciplinary Action Guide + Form Template"
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                        lineNumber: 317,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:description",
                        content: "Employee Disciplinary Action Guide + Form Template"
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                        lineNumber: 321,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:image",
                        content: "https://blogs.compare-bazaar.com/images/blog3.webp"
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                        lineNumber: 325,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "canonical",
                        href: "https://technology-advice.vercel.app/software-reviews/payroll"
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                        lineNumber: 330,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                lineNumber: 286,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-[#0E1F1C] text-white relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-20 right-10 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 border border-white/10 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                        lineNumber: 338,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-40 right-20 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border border-white/5 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                        lineNumber: 339,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-20 left-10 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 border border-white/5 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                        lineNumber: 340,
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
                                            href: "#",
                                            className: "text-white/80 hover:text-white transition-colors group",
                                            "aria-label": "Go to homepage",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                                className: "w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                lineNumber: 355,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                            lineNumber: 350,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "#",
                                            className: "text-white/80 hover:text-white transition-colors cursor-pointer",
                                            "aria-label": "Go to homepage",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Home"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                lineNumber: 362,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                            lineNumber: 357,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white/60",
                                            children: "›"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                            lineNumber: 364,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white font-medium",
                                            children: "Employee Disciplinary Action Guide + Form Template"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                            lineNumber: 365,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                    lineNumber: 349,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                lineNumber: 345,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-6xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 sm:mb-12 lg:mb-16",
                                    children: [
                                        "Employee Disciplinary Action",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block mt-2 sm:mt-4",
                                            children: "Guide + Form Template"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                            lineNumber: 375,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                    lineNumber: 373,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                lineNumber: 372,
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
                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                            lineNumber: 385,
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
                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                        lineNumber: 388,
                                                        columnNumber: 19
                                                    }, this),
                                                    " ",
                                                    "is able to offer our services for free because some vendors may pay us for web traffic or other sales opportunities. Our mission is to help technology buyers make better purchasing decisions, so we provide you with information for all vendors — even those that don't pay us."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                lineNumber: 387,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                            lineNumber: 386,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                    lineNumber: 384,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                lineNumber: 383,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                        lineNumber: 343,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                lineNumber: 336,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-gray-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                lineNumber: 417,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                                className: "space-y-2",
                                                children: tableOfContents.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: `#${item.id}`,
                                                        className: `block py-2 px-3 rounded-md text-sm transition-colors duration-200 ${item.active ? "bg-[#386861] text-white border-l-4 border-[#386861] font-medium" : "text-gray-600 hover:text-black hover:bg-gray-100"}`,
                                                        children: item.title
                                                    }, index, false, {
                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                        lineNumber: 422,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                lineNumber: 420,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-8 pt-6 border-t border-gray-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-gray-900 mb-4",
                                                        children: "Share this article"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                        lineNumber: 438,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex space-x-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: shareOnFacebook,
                                                                className: "w-12 h-12 rounded-full bg-[#386861]  text-white flex items-center justify-center hover:bg-blue-700 transition-colors duration-200",
                                                                "aria-label": "Share on Facebook",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-5 h-5",
                                                                    fill: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                        lineNumber: 452,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 447,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                lineNumber: 442,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: shareOnLinkedIn,
                                                                className: "w-12 h-12 rounded-full bg-[#386861]  text-white flex items-center justify-center hover:bg-[#386861]  transition-colors duration-200",
                                                                "aria-label": "Share on LinkedIn",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-5 h-5",
                                                                    fill: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                        lineNumber: 465,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 460,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                lineNumber: 455,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: shareOnTwitter,
                                                                className: "w-12 h-12 rounded-full bg-[#386861]  text-white flex items-center justify-center hover:bg-[#386861]  transition-colors duration-200",
                                                                "aria-label": "Share on X (Twitter)",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-4 h-4",
                                                                    fill: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                        lineNumber: 478,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 473,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                lineNumber: 468,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                        lineNumber: 441,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                lineNumber: 437,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                        lineNumber: 413,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                    lineNumber: 412,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 max-w-4xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-700 italic leading-relaxed",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold not-italic",
                                                    children: "Disclaimer:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                    lineNumber: 490,
                                                    columnNumber: 17
                                                }, this),
                                                " ",
                                                "This article is not intended as legal advice. Please seek counsel from an employment law attorney to understand the requirements for your specific employee disciplinary action situation."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                            lineNumber: 489,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gray-50 border border-gray-300 rounded-2xl p-6 mb-6 shadow-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-gray-800 mb-4",
                                                    children: "Key takeaways"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                    lineNumber: 497,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start space-x-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-shrink-0 w-5 h-5 bg-[#386861] rounded-full flex items-center justify-center mt-0.5",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        className: "w-3 h-3 text-white",
                                                                        fill: "currentColor",
                                                                        viewBox: "0 0 20 20",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            fillRule: "evenodd",
                                                                            d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                                            clipRule: "evenodd"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 508,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                        lineNumber: 503,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 502,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-700 leading-relaxed",
                                                                    children: "The employee disciplinary action process is the guideline or policy businesses follow in the event of unwanted employee behaviors or policy violations."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 515,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 501,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start space-x-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-shrink-0 w-5 h-5 bg-[#386861] rounded-full flex items-center justify-center mt-0.5",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        className: "w-3 h-3 text-white",
                                                                        fill: "currentColor",
                                                                        viewBox: "0 0 20 20",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            fillRule: "evenodd",
                                                                            d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                                            clipRule: "evenodd"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 529,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                        lineNumber: 524,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 523,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-700 leading-relaxed",
                                                                    children: "Most companies follow a progressive disciplinary process with the following steps: counseling, verbal warning, written warning, final warning, and termination."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 536,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 522,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start space-x-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-shrink-0 w-5 h-5 bg-[#386861] rounded-full flex items-center justify-center mt-0.5",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        className: "w-3 h-3 text-white",
                                                                        fill: "currentColor",
                                                                        viewBox: "0 0 20 20",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            fillRule: "evenodd",
                                                                            d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                                            clipRule: "evenodd"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 550,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                        lineNumber: 545,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 544,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-700 leading-relaxed",
                                                                    children: "Each step of the disciplinary action process requires conversations with the employee and thorough documentation, which you can manage with the recordkeeping capabilities of HR software."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 557,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 543,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                    lineNumber: 500,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                            lineNumber: 496,
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
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 570,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center space-x-2 text-sm text-gray-500",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Advertisement"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 574,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-4 h-4 rounded-full bg-gray-400 flex items-center justify-center",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-white  font-bold",
                                                                        children: "i"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                        lineNumber: 576,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 575,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 573,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                    lineNumber: 569,
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
                                                                                    src: "/images/keka.png",
                                                                                    alt: "Keka HR Logo",
                                                                                    width: 64,
                                                                                    height: 64,
                                                                                    className: "w-full h-full object-contain",
                                                                                    priority: false
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                    lineNumber: 586,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                lineNumber: 585,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-xl font-bold text-gray-900",
                                                                                children: "Keka HR"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                lineNumber: 595,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                        lineNumber: 584,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 583,
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
                                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                lineNumber: 602,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                                className: "w-4 h-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                lineNumber: 603,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                        lineNumber: 601,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 600,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 582,
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
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 610,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-medium text-gray-900",
                                                                            children: "Medium sized companies"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 611,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 609,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-gray-600 mb-1",
                                                                            children: "Core Features"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 616,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-medium text-gray-900",
                                                                            children: "360 Degree Feedback, Applicant Tracking, Benefits Administration, and 10 more"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 617,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 615,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-gray-600 mb-1",
                                                                            children: "Integrations"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 623,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-medium text-gray-900",
                                                                            children: "QuickBooks Online, Tally"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 624,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 622,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 608,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                    lineNumber: 581,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-gray-50 rounded-lg mt-4 p-6",
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
                                                                                    src: "/images/monitask.png",
                                                                                    alt: "Monitask Logo",
                                                                                    width: 64,
                                                                                    height: 64,
                                                                                    className: "w-full h-full object-contain",
                                                                                    priority: false
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                    lineNumber: 635,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                lineNumber: 634,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-xl font-bold text-gray-900",
                                                                                children: "Monitask"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                lineNumber: 644,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                        lineNumber: 633,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 632,
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
                                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                lineNumber: 651,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                                className: "w-4 h-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                lineNumber: 652,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                        lineNumber: 650,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 649,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 631,
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
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 659,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-medium text-gray-900",
                                                                            children: "Any Company Size"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 660,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 658,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-gray-600 mb-1",
                                                                            children: "Core Features"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 665,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-medium text-gray-900",
                                                                            children: "Employee Shift Scheduling, Self-Service Portal, Time/Attendance Management, and 1 more"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 666,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 664,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-gray-600 mb-1",
                                                                            children: "Integrations"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 672,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-medium text-gray-900",
                                                                            children: "Asana, Basecamp, ClickUp, and 10 more"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 673,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 671,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 657,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                    lineNumber: 630,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                            lineNumber: 568,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-8 sm:mb-12 mt-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6",
                                                    children: "Disciplinary action isn't just a compliance formality. When done right, it reinforces expectations, supports individual accountability, and helps the entire team operate more effectively. When ignored or poorly handled, unresolved problems tend to grow, workplace dynamics become strained, and employees start questioning whether policies really apply to everyone."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                    lineNumber: 682,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6",
                                                    children: "That's why having a structured disciplinary action process is critical. It allows you to address issues fairly and consistently while protecting both the organization and the employee."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                    lineNumber: 692,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed",
                                                    children: "In this guide, I'll walk you through how to manage the process with clarity, documentation, and practical steps you can use. It also includes disciplinary action examples and a form template you can download for free."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                    lineNumber: 699,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                            lineNumber: 681,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                            id: "what-is-disciplinary-action",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-8 sm:mb-12",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8",
                                                        children: "What is disciplinary action (and why it matters)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                        lineNumber: 709,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6",
                                                        children: "Disciplinary action is a formal response to workplace behavior that violates company policies or disrupts business operations. At its best, it's a structured way to step in early to help employees course-correct before a small issue turns into a serious one."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                        lineNumber: 713,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-4",
                                                        children: "A strong disciplinary action helps:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                        lineNumber: 721,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "list-disc pl-6 sm:pl-8 mb-6 space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "text-gray-700 text-sm sm:text-base lg:text-lg",
                                                                children: "Reinforce accountability and trust across the team"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                lineNumber: 726,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "text-gray-700 text-sm sm:text-base lg:text-lg",
                                                                children: "Provide employees a fair chance to improve"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                lineNumber: 729,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "text-gray-700 text-sm sm:text-base lg:text-lg",
                                                                children: "Build documentation that protects against legal claims"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                lineNumber: 732,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                        lineNumber: 725,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6",
                                                        children: "Most employers use a step-based approach that usually starts with an investigation and a one-on-one meeting or coaching conversation. It progresses to verbal or written warnings, and may end in termination if things don't improve."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                        lineNumber: 737,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed",
                                                        children: "However, the point isn't to punish an employee for slipping up. It's about showing them how to get it right, with clarity, consistency, and a plan that supports both performance and fairness."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                        lineNumber: 744,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                lineNumber: 708,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                            lineNumber: 706,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-8 sm:mb-12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                    id: "when-to-use-disciplinary-action",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                            className: "text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8",
                                                            children: "When to use disciplinary action and when not to"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 756,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-8",
                                                            children: "It may be easy to reach for an employee disciplinary action form when someone misses the mark, but not every misstep warrants formal discipline. Sometimes what looks like misconduct is really a training gap, poor onboarding, unclear expectations, or a miscommunication."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 760,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                    lineNumber: 755,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                    id: "when-disciplinary-action-typically-applies",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6",
                                                            children: "When disciplinary action typically applies"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 769,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-4",
                                                            children: "While certainly not exhaustive, the list below includes some of the most common disciplinary action examples:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 773,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "list-disc pl-6 sm:pl-8 mb-6 space-y-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "text-gray-700 text-sm sm:text-base lg:text-lg",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                            children: "General misconduct:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 780,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        " Employee behavior that doesn't intentionally mean to harm others or the company, such as forgetting to lock the office door at the end of the day."
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 779,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "text-gray-700 text-sm sm:text-base lg:text-lg",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Workplace violence or threats.*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                        lineNumber: 786,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 785,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "text-gray-700 text-sm sm:text-base lg:text-lg",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Weapons or prohibited substances in the workplace.*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                        lineNumber: 789,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 788,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "text-gray-700 text-sm sm:text-base lg:text-lg",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Sexual harassment.*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                        lineNumber: 794,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 793,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "text-gray-700 text-sm sm:text-base lg:text-lg",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Theft of company or employee property.*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                        lineNumber: 797,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 796,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "text-gray-700 text-sm sm:text-base lg:text-lg",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                            children: "Time theft:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 800,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        " Purposefully changing or misrepresenting time clock data for more take-home pay."
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 799,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "text-gray-700 text-sm sm:text-base lg:text-lg",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Excessive attendance violations."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                        lineNumber: 804,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 803,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "text-gray-700 text-sm sm:text-base lg:text-lg",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Discrimination.*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                        lineNumber: 807,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 806,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "text-gray-700 text-sm sm:text-base lg:text-lg",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Falsifying documentation."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                        lineNumber: 810,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 809,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 778,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 text-sm sm:text-base lg:text-lg italic mb-8",
                                                            children: "*Some of these examples may warrant immediate termination depending on their severity."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 814,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                    lineNumber: 768,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border-2 border-[#386861] rounded-3xl p-4 sm:p-6 bg-green-50 mb-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start mb-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-4 h-4 bg-[#386861] rounded-full mt-1 mr-3 flex-shrink-0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 822,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-base sm:text-lg font-bold text-gray-900",
                                                                    children: "An example:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 823,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 821,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-4",
                                                            children: "Let's say you have a call center business with a company policy requiring employees to shut down their computers at the end of the day. This is important because the computers include sensitive, HIPAA-protected data from clients in the medical industry and a third-party maintenance crew comes in every night after hours to clean."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 827,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed",
                                                            children: "If you walk in one morning and notice that one of your employees did not turn off their computer after being trained on the policy, you may need to start the employee disciplinary process with a verbal warning."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 835,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                    lineNumber: 820,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                            lineNumber: 754,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                            id: "when-it’s-best-to-hold-off",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-8 sm:mb-12",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8",
                                                        children: "When it's best to hold off"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                        lineNumber: 847,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-4",
                                                        children: "There are times when disciplinary action may not be the right starting point, or at least not yet. These include:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                        lineNumber: 851,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "list-disc pl-6 sm:pl-8 mb-6 space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "text-gray-700 text-sm sm:text-base lg:text-lg",
                                                                children: "When the issue stems from unclear expectations, outdated SOPs, or poor communication."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                lineNumber: 857,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "text-gray-700 text-sm sm:text-base lg:text-lg",
                                                                children: "When the employee hasn't received proper training."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                lineNumber: 861,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "text-gray-700 text-sm sm:text-base lg:text-lg",
                                                                children: "When the behavior may be linked to a disability, religious need, caregiving duty, or medical condition, and accommodations haven't been addressed."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                lineNumber: 864,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "text-gray-700 text-sm sm:text-base lg:text-lg",
                                                                children: "When it's a first-time offense that appears accidental, not willful."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                lineNumber: 869,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                        lineNumber: 856,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-2",
                                                        children: [
                                                            "Similarly, performance issues, like failing to meet",
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "#",
                                                                className: "text-[#386861] hover:text-green-800 underline",
                                                                children: "key performance indicators (KPIs)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                lineNumber: 877,
                                                                columnNumber: 21
                                                            }, this),
                                                            " ",
                                                            "or",
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "#",
                                                                className: "text-[#386861] hover:text-green-800 underline",
                                                                children: "objectives and key results (OKRs)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                lineNumber: 884,
                                                                columnNumber: 21
                                                            }, this),
                                                            ", don't always qualify for disciplinary action. Unless you can prove it's intentional, addressing poor performance through focused manager-employee one-on-ones, further training, or",
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "#",
                                                                className: "text-[#386861] hover:text-green-800 underline",
                                                                children: "performance improvement plans (PIPs)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                lineNumber: 894,
                                                                columnNumber: 21
                                                            }, this),
                                                            " ",
                                                            "can be more effective. You may even learn their poor performance results from work practices that contribute to",
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "#",
                                                                className: "text-[#386861] hover:text-green-800 underline",
                                                                children: "employee burnout"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                lineNumber: 902,
                                                                columnNumber: 21
                                                            }, this),
                                                            " ",
                                                            "or",
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "#",
                                                                className: "text-[#386861] hover:text-green-800 underline",
                                                                children: "staff unhappiness"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                lineNumber: 909,
                                                                columnNumber: 21
                                                            }, this),
                                                            "."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                        lineNumber: 875,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border-2 border-[#386861] rounded-3xl p-4 sm:p-6 bg-green-50 mb-8",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start mb-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-4 h-4 bg-[#386861] rounded-full mt-1 mr-3 flex-shrink-0"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                        lineNumber: 921,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-base sm:text-lg font-bold text-gray-900",
                                                                        children: "An example:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                        lineNumber: 922,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                lineNumber: 920,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed",
                                                                children: "Let's say you're a foreperson at a manufacturing plant, and your team's goal is to assemble 50 products a day. Each of your team members must first fabricate several smaller parts to produce the larger product."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                lineNumber: 926,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mt-4",
                                                                children: "One of your team members consistently fails to meet this daily goal compared to the rest of their teammates. Instead of immediately disciplining them for their failure to meet objectives, consider the resources you can provide the employee to get them to where they need to be, such as extra training or more frequent check-ins to address concerns or questions."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                lineNumber: 932,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                        lineNumber: 919,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                lineNumber: 846,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                            lineNumber: 844,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                            id: "disciplinary-models-and-sanctions",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-8 sm:mb-12",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8",
                                                        children: "Disciplinary models and sanctions"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                        lineNumber: 947,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6",
                                                        children: "Most employee disciplinary action plans take one of three models: positive, progressive, or hybrid, which is a combination of both. You should choose a model and stick to it. Inconsistency in how policies or rules are followed, especially between departments, is where most HR headaches begin."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                        lineNumber: 951,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-lg sm:text-xl font-bold text-gray-900 mb-3",
                                                                children: "• Positive discipline:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                lineNumber: 961,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-4",
                                                                children: [
                                                                    "Positive discipline highlights the employee's positive behaviors during disciplinary conversations instead of reprimanding them. Managers balance this with",
                                                                    " ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "#",
                                                                        className: "text-[#386861] hover:text-green-700 underline",
                                                                        children: "employee feedback"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                        lineNumber: 968,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    " ",
                                                                    "and constructive criticism to change behaviors. Employees also take part in selecting or creating any corrective actions. If their behavior improves, employees receive positive reinforcement through recognition and rewards."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                lineNumber: 964,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-700 text-sm sm:text-base lg:text-lg italic mb-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Best for:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                        lineNumber: 980,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    " Coaching cultures, flat organizations, or teams where psychological safety is a top priority."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                lineNumber: 979,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                        lineNumber: 960,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-lg sm:text-xl font-bold text-gray-900 mb-3",
                                                                children: "• Progressive discipline:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                lineNumber: 987,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-4",
                                                                children: "This is the most common model. It has a rigid set of steps that HR departments and managers follow, where disciplinary actions become more severe as employees continue the unwanted behavior."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                lineNumber: 990,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-700 text-sm sm:text-base lg:text-lg italic",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Best for:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                        lineNumber: 997,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    " Large teams, compliance-driven work environments, and roles with high liability."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                lineNumber: 996,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                        lineNumber: 986,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-lg sm:text-xl font-bold text-gray-900 mb-3",
                                                                children: "• Hybrid model:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                lineNumber: 1002,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-4",
                                                                children: "Combining positive and progressive disciplinary techniques allows employers to take a more nuanced approach to employee misconduct or behavioral issues. For example, positive discipline can inform disciplinary conversations and strategies for recognizing employees as they improve. Meanwhile, progressive discipline tactics ensure discipline remains fair and consistent across employees in the same or similar situations in the workplace."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                lineNumber: 1005,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-700 text-sm sm:text-base lg:text-lg italic",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Best for:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                        lineNumber: 1016,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    " Companies with mixed workforces or evolving needs."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                lineNumber: 1015,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                        lineNumber: 1001,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                lineNumber: 946,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                            lineNumber: 944,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                            id: "common-sanctions",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-12",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6",
                                                        children: "Common sanctions"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                        lineNumber: 1024,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 text-lg mb-6",
                                                        children: "There are various types of disciplinary sanctions or employee corrective actions, and these should scale based on the severity of the issue. The goal is to apply a response that fits the situation, not underreacting to serious problems or overcorrecting minor ones."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                        lineNumber: 1028,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 text-lg mb-8",
                                                        children: "Whatever action you take, document the rationale behind it. Clear documentation helps ensure consistency, transparency, and legal defensibility."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                        lineNumber: 1036,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 text-lg mb-8",
                                                        children: "Below are some of the most common disciplinary sanctions:*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                        lineNumber: 1042,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-0 text-lg",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionItem, {
                                                                title: "Counseling or coaching",
                                                                section: "counseling",
                                                                children: sectionContent.counseling
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                lineNumber: 1047,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionItem, {
                                                                title: "Verbal warning",
                                                                section: "verbal",
                                                                children: sectionContent.verbal
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                lineNumber: 1054,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionItem, {
                                                                title: "Written warning",
                                                                section: "written",
                                                                children: sectionContent.written
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                lineNumber: 1058,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionItem, {
                                                                title: "Retraining",
                                                                section: "retraining",
                                                                children: sectionContent.retraining
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                lineNumber: 1062,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionItem, {
                                                                title: "Demotion",
                                                                section: "demotion",
                                                                children: sectionContent.demotion
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                lineNumber: 1066,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionItem, {
                                                                title: "Loss of privileges",
                                                                section: "privileges",
                                                                children: sectionContent.privileges
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                lineNumber: 1070,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionItem, {
                                                                title: "Last-chance agreements",
                                                                section: "agreements",
                                                                children: sectionContent.agreements
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                lineNumber: 1076,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionItem, {
                                                                title: "Pay cut",
                                                                section: "paycut",
                                                                children: sectionContent.paycut
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                lineNumber: 1082,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionItem, {
                                                                title: "Suspension",
                                                                section: "suspension",
                                                                children: sectionContent.suspension
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                lineNumber: 1085,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionItem, {
                                                                title: "Termination",
                                                                section: "termination",
                                                                children: sectionContent.termination
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                lineNumber: 1088,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                        lineNumber: 1046,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                lineNumber: 1023,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                            lineNumber: 1022,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-12",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 italic text-sm mb-8",
                                                children: "*Note: Be careful if you have an employment contract with the employee or a collective bargaining agreement (CBA). You may be unable to take particular disciplinary action under these contracts."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                lineNumber: 1096,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                            lineNumber: 1095,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                            id: "before-you-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-12",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6",
                                                            children: "Before you start: What to have in place (and what to watch for)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 1107,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 text-lg mb-6",
                                                            children: [
                                                                "Don't move into a formal discipline process without making sure your foundation is solid. You need a process that protects the employee's rights and the company's interests, in addition to manager training and legal and",
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "#",
                                                                    className: "text-[#386861] underline",
                                                                    children: "HR compliance"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1117,
                                                                    columnNumber: 21
                                                                }, this),
                                                                " ",
                                                                "checks."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 1112,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 text-lg mb-8",
                                                            children: "Here's what to put in place and what to verify."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 1123,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-0 text-lg",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionItem, {
                                                                    title: "Legal compliance",
                                                                    section: "legal",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-gray-700 text-lg mb-4",
                                                                            children: [
                                                                                "Most states, except for Montana, are at-will. At-will means you can fire an employee with or without reason, as long as it is not illegal. Disciplinary action is the same unless you have a CBA or employment contract that prevents you from making specific steps.",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                    lineNumber: 1136,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                    lineNumber: 1137,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                "However, you should be familiar with the laws of the states where your employees work. For example, some states prevent you from disciplining or firing employees for refusing to violate state law. Some examples include disciplining an employee for filing for workers' compensation or refusing to come to work because of jury duty obligations."
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 1130,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "p-4 border border-[#386861]rounded-md bg-green-50",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                    className: "text-[#386861] text-xl font-bold mb-2",
                                                                                    children: "💡 Federal laws on disciplinary action"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                    lineNumber: 1148,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-lg text-gray-700 mb-3",
                                                                                    children: "Federal laws do not prevent you from taking employee disciplinary action. However, you cannot discipline employees for situations outlined by the following laws."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                    lineNumber: 1151,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                    className: "list-disc ml-6 text-lg text-gray-700 space-y-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                    children: "Anti-discrimination laws:"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                                    lineNumber: 1159,
                                                                                                    columnNumber: 29
                                                                                                }, this),
                                                                                                " Laws that protect fairness and equality in hiring, employment decisions, and benefits access. Examples include Title VII of the Civil Rights Act, ADA, FMLA, PWFA, ADEA, GINA, and USERRA."
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                            lineNumber: 1158,
                                                                                            columnNumber: 27
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                    children: "Whistleblowing laws:"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                                    lineNumber: 1166,
                                                                                                    columnNumber: 29
                                                                                                }, this),
                                                                                                " Laws that protect workers from adverse employment actions should they notify regulatory agencies of workplace health or safety violations, discriminatory practices, or the use of lie detectors. The OSH Act of 1970 is one example."
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                            lineNumber: 1165,
                                                                                            columnNumber: 27
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                    children: "Unionizing:"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                                    lineNumber: 1174,
                                                                                                    columnNumber: 29
                                                                                                }, this),
                                                                                                " The",
                                                                                                " ",
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                                    href: "https://www.nlrb.gov",
                                                                                                    className: "text-[#386861] underline",
                                                                                                    target: "_blank",
                                                                                                    children: "National Labor Relations Act (NLRA)"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                                    lineNumber: 1175,
                                                                                                    columnNumber: 29
                                                                                                }, this),
                                                                                                " ",
                                                                                                "protects employees who collectively bargain or support a union from adverse employment action."
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                            lineNumber: 1173,
                                                                                            columnNumber: 27
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                    lineNumber: 1157,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm text-gray-500 mt-3 italic",
                                                                                    children: "Note: Some states include equivalent laws to the above. As a rule, always follow the law that provides more employee rights and protections."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                    lineNumber: 1186,
                                                                                    columnNumber: 25
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 1147,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1129,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionItem, {
                                                                    title: "A clear, written policy",
                                                                    section: "policy",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-lg text-gray-700 mb-4",
                                                                            children: [
                                                                                "You will need to align with all relevant stakeholders when creating your disciplinary action policy. Because it affects employees' tenure with the company, your executive teams must agree on the policy’s approach, scope, and list of progressive discipline steps. Once finalized, you should add this policy to your",
                                                                                " ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    href: "#",
                                                                                    className: "text-[#386861] underline",
                                                                                    children: "employee handbook"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                    lineNumber: 1205,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                " ",
                                                                                "for easy access."
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 1198,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-lg text-gray-700 mb-4",
                                                                            children: "At a minimum, your policy should include the following elements:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 1211,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "  divide-y",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NestedItem, {
                                                                                    title: "Employment relationship statement",
                                                                                    name: "employment",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-lg text-gray-700",
                                                                                        children: "These statements clarify the relationship between you and your employee. For example, if your employee works in an at-will state, you should note that their employment is at-will, and either you or the employee can terminate the relationship at any time, with or without reason. Or, note the terms of their employment relationship based on any contracts or CBAs."
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                        lineNumber: 1221,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                    lineNumber: 1217,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NestedItem, {
                                                                                    title: "Disciplinary action steps",
                                                                                    name: "steps",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-lg text-gray-700",
                                                                                        children: "These are the stages of your disciplinary action process, starting from the least severe to the most severe consequences. Each step should include the manager’s, HR staff’s, and employee’s responsibilities and include examples of behaviors that might warrant starting at a particular step."
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                        lineNumber: 1237,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                    lineNumber: 1233,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NestedItem, {
                                                                                    title: "Investigation process",
                                                                                    name: "investigation",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-lg text-gray-700",
                                                                                        children: "You may need to investigate incidents, behaviors, offenses, or complaints before taking disciplinary action to understand the best course of action. Detail this process, including who is involved in the investigation and response turnaround times."
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                        lineNumber: 1251,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                    lineNumber: 1247,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NestedItem, {
                                                                                    title: "Complaint process",
                                                                                    name: "complaint",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-lg text-gray-700",
                                                                                        children: "This details how employees can report a workplace concern or complaint to management. Like with the investigation process, explain who employees should contact, what they need to provide, and response turnaround times. You should also include language noting that employees can report these concerns without fear of retaliation."
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                        lineNumber: 1261,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                    lineNumber: 1260,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NestedItem, {
                                                                                    title: "Documentation process",
                                                                                    name: "docs",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-lg text-gray-700 mb-2",
                                                                                            children: "With each step, make clear what managers or HR staff need to document for the worker’s employment file. For example, typical documentation practices include:"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                            lineNumber: 1273,
                                                                                            columnNumber: 27
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                            className: "list-disc ml-6 text-lg text-gray-800 space-y-2",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                    children: "Basic employee information"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                                    lineNumber: 1280,
                                                                                                    columnNumber: 29
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                    children: "Description of the infraction"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                                    lineNumber: 1281,
                                                                                                    columnNumber: 29
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                    children: "Clear, relevant, and time-bound goals"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                                    lineNumber: 1282,
                                                                                                    columnNumber: 29
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                    children: "Resources to help the employee"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                                    lineNumber: 1283,
                                                                                                    columnNumber: 29
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                    children: "Next steps in the disciplinary process"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                                    lineNumber: 1284,
                                                                                                    columnNumber: 29
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                    children: "Signatures of managers, employees"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                                    lineNumber: 1285,
                                                                                                    columnNumber: 29
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                    children: "Feedback section for employee disagreement"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                                    lineNumber: 1286,
                                                                                                    columnNumber: 29
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                            lineNumber: 1279,
                                                                                            columnNumber: 27
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                    lineNumber: 1272,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NestedItem, {
                                                                                    title: "Right to skip or combine steps",
                                                                                    name: "skip",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-lg text-gray-700",
                                                                                        children: "Although you might indicate what offenses warrant starting at various steps in the disciplinary process, it’s impossible to predict every situation or behavior. To show this, include a statement that you hold the right to skip or combine steps in the disciplinary process based on the seriousness of the infraction."
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                        lineNumber: 1294,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                    lineNumber: 1290,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NestedItem, {
                                                                                    title: "Termination process",
                                                                                    name: "termination",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-lg text-gray-700",
                                                                                        children: [
                                                                                            "Explain the termination process should the employee’s behavior result in dismissal, including who approves the decision. You should also disclose relevant offboarding processes, such as benefits termination, last check procedures,",
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                                href: "#",
                                                                                                className: "text-[#386861] underline",
                                                                                                children: [
                                                                                                    " ",
                                                                                                    "severance pay"
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                                lineNumber: 1315,
                                                                                                columnNumber: 29
                                                                                            }, this),
                                                                                            ", filing for unemployment, and returning company equipment."
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                        lineNumber: 1309,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                    lineNumber: 1305,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NestedItem, {
                                                                                    title: "Appeal process",
                                                                                    name: "appeal",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-lg text-gray-700",
                                                                                        children: "Following any disciplinary action, detail how long employees have to submit an appeal. The appeal process should outline what should be included in the appeal, how long after the disciplinary action they have to submit any appeal (usually five business days), who should receive the appeal, and the response turnaround time."
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                        lineNumber: 1325,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                    lineNumber: 1324,
                                                                                    columnNumber: 25
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 1216,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1194,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 1127,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                    lineNumber: 1106,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-0 text-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionItem, {
                                                            title: "HR vs manager roles",
                                                            section: "hr",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-lg text-gray-700 mb-4",
                                                                    children: "Clarify who’s responsible for what. Generally:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1347,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "list-disc ml-6 text-lg text-gray-800 space-y-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                    children: "Managers"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                    lineNumber: 1352,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                " initiate and document early steps (e.g., coaching, verbal warnings)"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 1351,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                    children: "HR"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                    lineNumber: 1356,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                " reviews written warnings, ensures compliance, and leads serious actions (e.g., suspensions, terminations)"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 1355,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1350,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 1346,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionItem, {
                                                            title: "Manager training",
                                                            section: "training",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-lg text-gray-700 mb-4",
                                                                    children: [
                                                                        "Using an online platform to train managers and even HR teams is a good strategy.",
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "https://www.coassemble.com",
                                                                            target: "_blank",
                                                                            className: "text-[#386861] underline",
                                                                            children: "Learning management systems (LMSs)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 1368,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        ", like Coassemble, allow you to create courses for teaching leaders about the disciplinary process, including how to complete the necessary documentation."
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1365,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-lg text-gray-700 mb-4",
                                                                    children: "As a result, you can prepare your managers to handle situations, improve policy consistency, and foster more effective and constructive conversations with direct reports."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1379,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "rounded-md overflow-hidden shadow-md",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: "/images/action-4.jpg",
                                                                        alt: "Manager training preview showing Coassemble platform",
                                                                        width: 800,
                                                                        height: 400,
                                                                        className: "object-cover w-full"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                        lineNumber: 1387,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1386,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-gray-500 mt-2",
                                                                    children: [
                                                                        "Coassemble offers a disciplinary action template to train your people managers on effective disciplinary techniques and policy processes.",
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[#386861]",
                                                                            children: "Source: Coassemble"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 1400,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1396,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-4 text-center",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "https://coassemble.com",
                                                                        target: "_blank",
                                                                        rel: "noopener noreferrer",
                                                                        className: "inline-block bg-[#386861] hover:bg-green-500 text-white font-medium py-3 px-8 rounded-full transition-colors duration-200",
                                                                        children: "Visit Coassemble ↗"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                        lineNumber: 1404,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1403,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 1364,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                    lineNumber: 1344,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                            lineNumber: 1105,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                            id: "disciplinary-action-form-template"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                            lineNumber: 1416,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                            id: "employee-disciplinary-process-steps",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-12",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4",
                                                            children: "Employee disciplinary process steps"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 1423,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 text-lg mb-8",
                                                            children: "Each step of the disciplinary process should be documented and tied to specific policies. Here's a breakdown of what each step typically involves:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 1427,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-8",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-2xl font-semibold text-gray-900 mb-4",
                                                                    children: "Step 1: Identify the problem and investigate"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1434,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-700 text-lg mb-4",
                                                                    children: "Before taking any action, you need a clear, fact-based understanding of the issue at hand. That's where a workplace investigation comes in. Use it to determine what happened, when the incident occurred, who was involved, and whether any policies were violated."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1438,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-700 text-lg mb-4",
                                                                    children: "You should review and collect any relevant documentation, such as attendance logs, performance records, emails, and security footage. You should also get insights from relevant company sources: talk to those involved and gather written statements if needed. Your goal is to confirm whether this was an isolated incident or part of a pattern."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1446,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-700 text-lg mb-4",
                                                                    children: "If the incident or allegations are serious, such as sexual harassment, you may need to place the accused on a temporary suspension or leave of absence to look further. The length of time varies, but it's reasonable to expect you have outlined basic timelines."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1456,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-700 text-lg mb-4",
                                                                    children: "During this time, learn as much about the incident as you can. Consulting with employment law attorneys is a sub-optimal but sometimes necessary step at this stage."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1464,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-700 text-lg mb-4",
                                                                    children: "With evidence in hand, you will need to decide where to start in your disciplinary action process. If the investigation reveals that the employee's behavior was a minor infraction, you may want to start from step one in your progressive discipline process. However, if the misconduct may mean you skip your usual steps and go straight for termination."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1470,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 1433,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-8",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-2xl font-semibold text-gray-900 mb-4",
                                                                    children: "Step 2: Have a one-on-one meeting"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1482,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-700 text-lg mb-4",
                                                                    children: "Most disciplinary action plans start with a one-on-one meeting between the employee and their manager. Rather than called counseling or coaching sessions, this informal meeting is to give the manager a chance to address minor issues early, before they turn into a serious problem."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1486,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-700 text-lg mb-4",
                                                                    children: "The goal is to inform employees of the unwanted behavior and quickly course-correct. It is also about proactively building the relationship by setting clear expectations with your employees, or the workplace."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1494,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-700 text-lg mb-4",
                                                                    children: "These meetings should be a two-way conversation, not a lecture, and should follow constructive feedback best practices. They should also occur as soon as reasonably possible after the incident so that the employee can associate clear action plans with the feedback."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1501,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-700 text-lg mb-4",
                                                                    children: [
                                                                        "Use this time to ask the employee questions and understand the reasoning for their actions— you might even realize your",
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "#",
                                                                            className: "text-[#386861] underline",
                                                                            children: "implicit biases"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 1513,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        " ",
                                                                        "are clouding your judgment."
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1509,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-700 text-lg mb-4",
                                                                    children: 'For example, during a coaching conversation about excessive tardiness, you might learn the employee\'s frequent lateness resulted from a childcare issue. Action are to work on this. When thinking challenges your prior belief that all tardy employees are "lazy," with this knowledge, you can work with the employee to help them get to work on time, such as by highlighting your commuter benefits or adjusting their start and end times.'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1519,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-700 text-lg mb-4",
                                                                    children: "Although these initial conversations are more informal, you should still document them, such as a quick note in the employee's personnel file. Most HR software lets you upload this documentation into employees' electronic profiles. Other platforms, like Bob, let you schedule impromptu or regular meetings and create agendas, which help streamline and document disciplinary conversations for future reference."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1530,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 1481,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                    lineNumber: 1422,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-2xl font-bold text-gray-900 mb-4",
                                                            children: "Step 3: Issue a formal warning"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 1546,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-4 text-lg text-gray-700",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "The next step is issuing a formal warning if the employee's unwanted behavior escalates after two to three informal conversations. Formal warnings are official records of the employee's infraction placed in their personnel file."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1551,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        "Formal warnings consist of both a meeting with the employee plus written documentation. Because this is the first official record of disciplinary action, it's a good idea to include a",
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "#",
                                                                            className: "text-[#386861] hover:text-green-800 underline",
                                                                            children: "reliable witness"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 1564,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        " ",
                                                                        "in the meeting, with the manager and employee. Usually, that's someone from the HR department, but it can also be another manager or administrator willing to bear witness."
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1559,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "The conversation should cover the following:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1575,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "list-disc ml-6 text-lg space-y-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: "A detailed description of the offenses, including dates and any supporting evidence (such as time cards, handbook policies, videos, or emails)."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 1578,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: "An explanation of how this behavior affects the company or coworkers."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 1583,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: "The steps you have already taken to correct the behavior."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 1587,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: "Actionable and measurable objectives to fix the behavior."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 1591,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: [
                                                                                "Resources to help the employee succeed, such as",
                                                                                " ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    href: "#",
                                                                                    className: "text-[#386861] hover:text-green-800 underline",
                                                                                    children: "additional training"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                    lineNumber: 1597,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                " ",
                                                                                "or",
                                                                                " ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    href: "#",
                                                                                    className: "text-[#386861] hover:text-green-800 underline",
                                                                                    children: "policy reviews"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                    lineNumber: 1604,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                "."
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 1595,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: "Future disciplinary steps should the behavior continue."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 1612,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: "Time for questions and feedback from the employee."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 1615,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: "Explanation of your appeal process."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 1618,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1577,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "Documentation of the warning should include these same elements, plus an area for the manager, witness, and employee to sign and date."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1621,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "You should also add a refusal acknowledgment section if the form should employees disagree with the warning. Employees can sign here to acknowledge they received the warning but disagree with it. You can also offer space for employees to explain why they disagree."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1627,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        "Remember to provide ample time for the employee to dispute or explain their side of the issue on you would during regular manager-employee conversations. And you'd follow up conversations with HR or the",
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "#",
                                                                            className: "text-[#386861] hover:text-green-800 underline",
                                                                            children: "legal team"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 1640,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        " ",
                                                                        "to resolve."
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1635,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 1550,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                    lineNumber: 1545,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-lg text-gray-700 mb-4",
                                                            children: "Most disciplinary action plans require two to three formal warnings before progressing to the next step. Some companies also distinguish between verbal and written warnings, with verbal warnings a less severe first step."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 1652,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-lg text-gray-700 mb-6",
                                                            children: "Despite the name, verbal warnings should follow the same process as written warnings, including thorough documentation, business helping you in the event of a lawsuit, employees can reference it to understand their expectations going forward."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 1659,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                    lineNumber: 1651,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-2xl font-bold text-gray-900 mb-4",
                                                            children: "Step 4: Take last-chance actions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 1672,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-4 text-lg text-gray-700",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        "A",
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "#",
                                                                            className: "text-[#386861] hover:text-green-800 underline",
                                                                            children: "last-chance action"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 1679,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        " ",
                                                                        "is the step in your",
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "#",
                                                                            className: "text-[#386861] hover:text-green-800 underline",
                                                                            children: "disciplinary policy"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 1686,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        " ",
                                                                        "before termination. It occurs if the employee continues exhibiting behavior or performance issues after prior conversations and formal warnings."
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1677,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        "Depending on your",
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "#",
                                                                            className: "text-[#386861] hover:text-green-800 underline",
                                                                            children: "disciplinary action policy"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 1699,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        ", what you decide to take as your last-chance action can differ. Some of the most common include:"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1697,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "list-disc ml-6 space-y-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: "Final written warning"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 1710,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: "Paid or unpaid suspension"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 1711,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: "Loss of privileges"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 1712,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: [
                                                                                "Pay decrease or demotion (in line with",
                                                                                " ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    href: "#",
                                                                                    className: "text-[#386861] hover:text-green-800 underline",
                                                                                    children: "state and federal laws"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                    lineNumber: 1715,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                ")"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 1713,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: "Last-chance agreement"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 1723,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1709,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        "Like",
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "#",
                                                                            className: "text-[#386861]hover:text-green-800 underline",
                                                                            children: "formal warnings"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 1728,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        ", document whatever last-chance action you take, including what led to the decision. Hold a conversation with the employee along with a",
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "#",
                                                                            className: "text-[#386861] hover:text-green-800 underline",
                                                                            children: "reliable witness"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 1737,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        ". Stress to the employee that this is their last chance to improve and that future infractions could lead to termination."
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1726,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 1676,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                    lineNumber: 1671,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-2xl font-bold text-gray-900 mb-4",
                                                            children: "Step 5: Recommend for termination"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 1752,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-4 text-lg text-gray-700",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        "Termination is the last step in your",
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "#",
                                                                            className: "text-[#386861] hover:text-green-800 underline",
                                                                            children: "disciplinary process"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 1759,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        ". It occurs if the employee continues the same offenses after you've followed all other disciplinary steps and provided ample resources and support to help the employee improve."
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1757,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        "Because termination comes with several legal consequences, it's always wise to consult with your",
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "#",
                                                                            className: "text-[#386861] hover:text-green-800 underline",
                                                                            children: "HR department"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 1774,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        " ",
                                                                        "or",
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "#",
                                                                            className: "text-[#386861] hover:text-green-800 underline",
                                                                            children: "employment law attorney"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 1781,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        " ",
                                                                        "before you have the termination conversation with the employee. If you have",
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "#",
                                                                            className: "text-[#386861] hover:text-green-800 underline",
                                                                            children: "employment practices liability insurance (EPLI)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 1789,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        ", check if you have access to an",
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "#",
                                                                            className: "text-[#386861] hover:text-green-800 underline",
                                                                            children: "employee hotline"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 1796,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        " ",
                                                                        "in the event of a case of wrongful termination is warranted."
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1771,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        "Although unfortunate, remember that termination may be the best option if you followed the steps in your",
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "#",
                                                                            className: "text-[#386861] hover:text-green-800 underline",
                                                                            children: "disciplinary action policy"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 1809,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        " ",
                                                                        "and did everything in your power to help the employee improve. Termination allows you to find a more effective team player and may even improve team morale."
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1806,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 1756,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-[#386861] border border-[#386861] rounded-3xl p-4 mt-6",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "bg-green-100 rounded-full p-2 mr-3 mt-1",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            className: "w-9 h-9 text-[#386861]",
                                                                            fill: "currentColor",
                                                                            viewBox: "0 0 20 20",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                fillRule: "evenodd",
                                                                                d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
                                                                                clipRule: "evenodd"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                lineNumber: 1829,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 1824,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                        lineNumber: 1823,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-lg font-medium text-white",
                                                                                children: "Nervous about conducting the termination conversation?"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                lineNumber: 1837,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-lg text-white",
                                                                                children: [
                                                                                    "Learn tips and strategies to prepare for the conversation and hold an effective meeting in",
                                                                                    " ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                        href: "#",
                                                                                        className: "text-white hover:text-green-800 underline",
                                                                                        children: "How to Fire an Employee (and Stay out of Trouble)"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                        lineNumber: 1843,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    "."
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                lineNumber: 1840,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                        lineNumber: 1836,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                lineNumber: 1822,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 1821,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                    lineNumber: 1751,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-2xl font-bold text-gray-900 mb-4",
                                                            children: "Step 6: Record your decisions and maintain consistency"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 1858,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-4 text-slg text-gray-700",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        "Every",
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "#",
                                                                            className: "text-[#386861]  hover:text-green-800 underline",
                                                                            children: "disciplinary action"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 1865,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        " ",
                                                                        "or",
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "#",
                                                                            className: "text-[#386861]  hover:text-green-800 underline",
                                                                            children: "termination decision"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 1872,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        " ",
                                                                        "you make sets a precedent. Following your policy allows you to remain consistent with all employees in the same or similar situations. Record any deviations from policy and your reasoning for future reference."
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1863,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        "Beyond that, a standardized",
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "#",
                                                                            className: "text-[#386861]  hover:text-green-800 underline",
                                                                            children: "disciplinary procedure"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 1886,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        " ",
                                                                        "you follow demonstrates your commitment to treating all",
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "#",
                                                                            className: "text-[#386861]  hover:text-green-800 underline",
                                                                            children: "employees fairly"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 1893,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        " ",
                                                                        "and consistently according to their circumstances."
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1884,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 1862,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                    lineNumber: 1857,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                            lineNumber: 1420,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                            id: "common-mistakes-to-avoid",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl text-black sm:text-3xl lg:text-4xl font-semibold mb-4",
                                                    children: "Common mistakes to avoid"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                    lineNumber: 1905,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg text-black mb-4",
                                                    children: "Even with a solid process in place, it’s easy to make mistakes that weaken your disciplinary action plan, or cause confusion for the employee. Here are some of the pitfalls I see most often, and how to steer clear of them."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                    lineNumber: 1908,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "list-disc ml-5 space-y-2 text-lg text-black",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Using vague terms like “bad attitude”:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1917,
                                                                    columnNumber: 21
                                                                }, this),
                                                                " ",
                                                                "Words like this don’t explain the issue or hold up well in documentation. Be specific about what happened and describe the behavior, not the emotion behind it."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 1916,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Not checking for legal or accommodation issues first:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1923,
                                                                    columnNumber: 21
                                                                }, this),
                                                                " ",
                                                                "You should pause if there’s a chance the behavior is linked to a medical condition, family leave, or another legal reason. Talk to legal before moving forward."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 1922,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Forgetting to follow up after warnings:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1931,
                                                                    columnNumber: 21
                                                                }, this),
                                                                " If you don’t check in after a warning, the employee may think it wasn’t serious. Set a timeline and stick to it. Follow-through shows that expectations matter."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 1930,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Skipping early documentation:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1937,
                                                                    columnNumber: 21
                                                                }, this),
                                                                " Don’t wait until you’re writing a warning to start keeping records. A quick note about an earlier coaching conversation can help show you gave the employee a fair chance to improve."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 1936,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Applying different standards to different employees:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                    lineNumber: 1943,
                                                                    columnNumber: 21
                                                                }, this),
                                                                " ",
                                                                "Holding one employee accountable while giving another one a pass, especially for the same issue, can lead to trust issues and even legal problems. Discipline needs to be fair and consistent."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 1942,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                    lineNumber: 1915,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg text-black mt-4",
                                                    children: "Managing the employee disciplinary action policy can be stressful. It becomes even more so as your company grows and segments into different departments, divisions, and locations. Despite the shifts, you must maintain and follow the same disciplinary procedures for all your employees."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                    lineNumber: 1953,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg text-black mt-4",
                                                    children: [
                                                        "Investing in effective HR software can simplify disciplinary management as you expand. Most platforms include",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "text-[#386861]  underline hover:text-green-800",
                                                            children: "human resources information system (HRIS)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                            lineNumber: 1964,
                                                            columnNumber: 19
                                                        }, this),
                                                        " ",
                                                        "for tracking and storing personal data and monitoring employment changes. Other features include policy templates, automated workflows, and e-signature capabilities for efficient documentation and retention."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                    lineNumber: 1961,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                            lineNumber: 1904,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                            id: "employee-disciplinary-action-FAQs",
                                            className: "mt-8 max-w-7xl mx-auto",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "max-w-none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16",
                                                        children: "Frequently Asked Questions (FAQ)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                        lineNumber: 1982,
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
                                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                lineNumber: 1995,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: `flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-md flex items-center justify-center transition-all duration-200 ${openItems[index] ? "bg-[#386861]  hover:bg-green-700" : "bg-[#386861]  hover:bg-green-700"}`,
                                                                                children: openItems[index] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                                                    className: "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                    lineNumber: 2008,
                                                                                    columnNumber: 31
                                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                    className: "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                    lineNumber: 2010,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                                lineNumber: 2000,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                        lineNumber: 1991,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    openItems[index] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "pb-6 sm:pb-7 md:pb-8 lg:pb-9 pr-12 sm:pr-16 md:pr-20 lg:pr-24 animate-in slide-in-from-top-2 duration-300",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed",
                                                                            children: item.answer
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                            lineNumber: 2018,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                        lineNumber: 2017,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, index, true, {
                                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                                lineNumber: 1989,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                        lineNumber: 1987,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                lineNumber: 1980,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                            lineNumber: 1976,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                    lineNumber: 488,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                            lineNumber: 410,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                        lineNumber: 409,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 py-12 bg-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl sm:text-4xl font-bold text-[#111827] mb-8 text-center",
                                children: "Related posts"
                            }, void 0, false, {
                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                lineNumber: 2038,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                                children: posts.map((post, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#F9FAFB] rounded-2xl overflow-hidden shadow-sm border border-gray-200 flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-full h-52 sm:h-60 md:h-64",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: post.image,
                                                    alt: post.title,
                                                    fill: true,
                                                    className: "object-cover",
                                                    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
                                                    priority: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                    lineNumber: 2049,
                                                    columnNumber: 22
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                lineNumber: 2048,
                                                columnNumber: 20
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 sm:p-5 flex flex-col justify-between flex-grow",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[#111827] font-semibold text-base sm:text-lg leading-snug line-clamp-3",
                                                        children: post.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                        lineNumber: 2059,
                                                        columnNumber: 22
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-500 mt-3",
                                                        children: post.date
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                        lineNumber: 2062,
                                                        columnNumber: 22
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                                lineNumber: 2058,
                                                columnNumber: 20
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                        lineNumber: 2044,
                                        columnNumber: 18
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                                lineNumber: 2042,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                        lineNumber: 2037,
                        columnNumber: 8
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/blog/human-resources/Best-hr-software-smbs/page.jsx",
                lineNumber: 408,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Employeedisciplinary, "BOVenpAV4hi1tP6Cu1Dvy1uBU1g=");
_c = Employeedisciplinary;
var _c;
__turbopack_context__.k.register(_c, "Employeedisciplinary");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_blog_human-resources_Best-hr-software-smbs_page_jsx_fe2da62f._.js.map
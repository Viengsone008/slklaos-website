(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/admin-dashboard/projects/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/type.js [app-client] (ecmascript) <export default as Type>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DropzoneButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DropzoneButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilePreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FilePreview.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
// 📅 calendar bits
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$big$2d$calendar$2f$dist$2f$react$2d$big$2d$calendar$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-big-calendar/dist/react-big-calendar.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/parse.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$getDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/getDay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/locale/en-US.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectProgressOverview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProjectProgressOverview.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
const EMPTY_FORM = {
    title: "",
    category: "residential",
    location: "",
    year: "",
    duration: "",
    client: "",
    image: "",
    description: "",
    status: "planning",
    priority: "medium",
    key_features: "",
    challenge: "",
    solution: "",
    technical_details: "",
    materials_used: "",
    gallery_raw: "",
    testimonial: "",
    rating: 0,
    is_published: false
};
const localizer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$big$2d$calendar$2f$dist$2f$react$2d$big$2d$calendar$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateFnsLocalizer"])({
    format: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"],
    parse: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"],
    startOfWeek: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfWeek"],
    getDay: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$getDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDay"],
    locales: {
        "en-US": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enUS"]
    }
});
const sanitize = (data)=>{
    var _data_technical_details_list, _data_materials_used_list;
    const cleaned = {};
    Object.entries(data).forEach((param)=>{
        let [k, v] = param;
        if ([
            "gallery_raw",
            "brochureFile",
            "imageFile",
            "galleryFiles"
        ].includes(k)) return;
        const isEmptyArr = Array.isArray(v) && v.length === 0;
        if (v === "" || v === null || v === undefined || isEmptyArr) return;
        cleaned[k] = [
            "budget",
            "rating",
            "year"
        ].includes(k) ? Number(v) : v;
    });
    if ((_data_technical_details_list = data.technical_details_list) === null || _data_technical_details_list === void 0 ? void 0 : _data_technical_details_list.length) cleaned.technical_details = data.technical_details_list.map((i)=>"".concat(i.key, ": ").concat(i.value)).join("; ");
    if ((_data_materials_used_list = data.materials_used_list) === null || _data_materials_used_list === void 0 ? void 0 : _data_materials_used_list.length) cleaned.materials_used = data.materials_used_list.map((i)=>"".concat(i.key, ": ").concat(i.value)).join("; ");
    if (typeof data.gallery_raw === "string") {
        const arr = data.gallery_raw.split(",").map((s)=>s.trim()).filter(Boolean);
        if (arr.length) cleaned.gallery = arr;
    }
    return cleaned;
};
/* -------------------------------------------------------------------------- */ /* 2   UI helpers                                                             */ /* -------------------------------------------------------------------------- */ const StatusPill = (param)=>{
    let { status } = param;
    const map = {
        planning: "bg-blue-100 text-blue-700",
        in_progress: "bg-yellow-100 text-yellow-700",
        completed: "bg-green-100 text-green-700",
        on_hold: "bg-orange-100 text-orange-700"
    };
    var _map_status;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-xs px-2 py-0.5 rounded-full capitalize ".concat((_map_status = map[status]) !== null && _map_status !== void 0 ? _map_status : "bg-gray-100 text-gray-700"),
        children: status.replace("_", " ")
    }, void 0, false, {
        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
        lineNumber: 149,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_c = StatusPill;
const PriorityPill = (param)=>{
    let { priority } = param;
    const map = {
        low: "bg-gray-100 text-gray-700",
        medium: "bg-yellow-100 text-yellow-700",
        high: "bg-red-100 text-red-700"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-xs px-2 py-0.5 rounded-full capitalize ".concat(map[priority]),
        children: priority
    }, void 0, false, {
        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
        lineNumber: 158,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = PriorityPill;
const SummaryCardButton = (param)=>{
    let { label, value, icon, onClick } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "flex items-center justify-between p-4 bg-white rounded-lg shadow hover:ring-2 hover:ring-indigo-300 transition",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                        lineNumber: 172,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-2xl font-semibold text-gray-800",
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                        lineNumber: 173,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                lineNumber: 171,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-2 bg-slate-50 rounded-full",
                children: icon
            }, void 0, false, {
                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                lineNumber: 175,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
        lineNumber: 167,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c2 = SummaryCardButton;
const TopBar = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "h-14 flex items-center justify-between px-6 text-white",
        style: {
            background: "linear-gradient(to right, #3d9392, #1b3d5a)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 font-semibold",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                        lineNumber: 185,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    " Project Management Dashboard"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                lineNumber: 184,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "hidden md:flex items-center gap-6 text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "flex items-center gap-1 hover:opacity-75",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                lineNumber: 189,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            " Map View"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                        lineNumber: 188,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "flex items-center gap-1 hover:opacity-75",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                lineNumber: 192,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            " Site Logs"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                        lineNumber: 191,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "flex items-center gap-1 hover:opacity-75",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                lineNumber: 195,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            " Site Issues"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                        lineNumber: 194,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "flex items-center gap-1 hover:opacity-75",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                lineNumber: 198,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            " Visitor Logs"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                        lineNumber: 197,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                lineNumber: 187,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                        lineNumber: 202,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-7 h-7 rounded-full bg-white/20 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                            lineNumber: 204,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                        lineNumber: 203,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                lineNumber: 201,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
        lineNumber: 180,
        columnNumber: 2
    }, ("TURBOPACK compile-time value", void 0));
_c3 = TopBar;
const Toast = (param)=>{
    let { msg, type, onClose } = param;
    _s();
    const icons = {
        success: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
            className: "w-5 h-5 text-green-600"
        }, void 0, false, {
            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
            lineNumber: 212,
            columnNumber: 14
        }, ("TURBOPACK compile-time value", void 0)),
        error: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
            className: "w-5 h-5 text-red-600"
        }, void 0, false, {
            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
            lineNumber: 213,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0)),
        info: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
            className: "w-5 h-5 text-blue-600"
        }, void 0, false, {
            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
            lineNumber: 214,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        warning: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
            className: "w-5 h-5 text-yellow-600"
        }, void 0, false, {
            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
            lineNumber: 215,
            columnNumber: 14
        }, ("TURBOPACK compile-time value", void 0))
    };
    const bg = {
        success: "bg-green-50 border-green-200 text-green-800",
        error: "bg-red-50 border-red-200 text-red-800",
        info: "bg-blue-50 border-blue-200 text-blue-800",
        warning: "bg-yellow-50 border-yellow-200 text-yellow-800"
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Toast.useEffect": ()=>{
            const timer = setTimeout(onClose, 5000);
            return ({
                "Toast.useEffect": ()=>clearTimeout(timer)
            })["Toast.useEffect"];
        }
    }["Toast.useEffect"], [
        onClose
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: -20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                y: -20
            },
            transition: {
                duration: 0.5
            },
            className: "fixed top-4 left-1/2 -translate-x-1/2 max-w-xs w-full px-4 py-3 rounded-lg border shadow-md flex items-center gap-2 ".concat(bg[type]),
            children: [
                icons[type],
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm font-medium",
                    children: msg
                }, void 0, false, {
                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                    lineNumber: 240,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
            lineNumber: 232,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
        lineNumber: 231,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Toast, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c4 = Toast;
const ProjectCard = (param)=>{
    let { project: project1, onEdit: onEdit1, onDelete: onDelete1, onPreview: onPreview1, isAdmin } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-lg shadow group relative overflow-hidden",
        children: [
            project1.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-40 w-full overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: project1.image,
                    alt: project1.title,
                    className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                    lineNumber: 262,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                lineNumber: 261,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onEdit1(project1),
                        className: "text-blue-600 hover:text-blue-800",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                            lineNumber: 273,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                        lineNumber: 272,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onDelete1(project1),
                        className: "text-red-600 hover:text-red-800",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                            lineNumber: 277,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                lineNumber: 271,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onPreview1(project1),
                        className: "text-gray-600 hover:text-gray-800",
                        title: "Preview",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                            lineNumber: 285,
                            columnNumber: 5
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                        lineNumber: 284,
                        columnNumber: 3
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onEdit1(project1),
                        className: "text-blue-600 hover:text-blue-800",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                            lineNumber: 288,
                            columnNumber: 5
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                        lineNumber: 287,
                        columnNumber: 3
                    }, ("TURBOPACK compile-time value", void 0)),
                    isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onDelete1(project1),
                        className: "text-red-600 hover:text-red-800",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                            lineNumber: 292,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                        lineNumber: 291,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                lineNumber: 283,
                columnNumber: 1
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusPill, {
                                status: project1.status
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                lineNumber: 300,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PriorityPill, {
                                priority: project1.priority
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                lineNumber: 301,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                        lineNumber: 299,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    project1.is_published && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute top-2 left-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow",
                        children: "Published to Website"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                        lineNumber: 305,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    !project1.is_published && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute top-2 left-2 bg-gray-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow",
                        children: "Unpublished to Website"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                        lineNumber: 311,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-gray-800 mb-1 line-clamp-1",
                        children: project1.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                        lineNumber: 317,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600 line-clamp-2 mb-3",
                        children: project1.description
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                        lineNumber: 318,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1 text-sm text-gray-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                        lineNumber: 321,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ",
                                    project1.location
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                lineNumber: 320,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                        lineNumber: 324,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ",
                                    project1.year,
                                    " • ",
                                    project1.duration
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                lineNumber: 323,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                        lineNumber: 327,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ",
                                    project1.budget ? "$".concat(project1.budget.toLocaleString()) : "—"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                lineNumber: 326,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                        lineNumber: 319,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                lineNumber: 298,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
        lineNumber: 258,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c5 = ProjectCard;
const exportToCSV = function(data) {
    let filename = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "projects_export";
    const headers = [
        "title",
        "client",
        "status",
        "category",
        "location",
        "budget",
        "year"
    ];
    const rows = data.map((p)=>{
        var _p_budget, _p_year;
        return [
            p.title,
            p.client,
            p.status,
            p.category,
            p.location,
            (_p_budget = p.budget) !== null && _p_budget !== void 0 ? _p_budget : "",
            (_p_year = p.year) !== null && _p_year !== void 0 ? _p_year : ""
        ];
    });
    const csvContent = [
        headers,
        ...rows
    ].map((row)=>row.map((v)=>'"'.concat(String(v).replace(/"/g, '""'), '"')).join(",")).join("\n");
    const blob = new Blob([
        csvContent
    ], {
        type: "text/csv;charset=utf-8;"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "".concat(filename, "_").concat(new Date().toISOString(), ".csv"));
    link.click();
};
/* -------------------------------------------------------------------------- */ /* 3   Main component                                                         */ /* -------------------------------------------------------------------------- */ const ProjectManagement = ()=>{
    var _previewProject_gallery;
    _s1();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const isAdmin = (user === null || user === void 0 ? void 0 : user.role) === "admin";
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("latest");
    const [previewProject, setPreviewProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const openPreview = (p)=>setPreviewProject(p);
    const closePreview = ()=>setPreviewProject(null);
    const [projects, setProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [statusModal, setStatusModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [modalCategoryFilter, setModalCategoryFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(EMPTY_FORM);
    const [editingProject, setEditingProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [deleteConfirm, setDeleteConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        open: false,
        project: null
    });
    const reloadProjects = async ()=>{
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("projects").select("*").order("created_at", {
            ascending: false
        });
        if (error) {
            console.error(error);
            setToast({
                type: "error",
                msg: "Reload failed."
            });
            return;
        }
        setProjects(data);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectManagement.useEffect": ()=>{
            ({
                "ProjectManagement.useEffect": async ()=>{
                    setIsLoading(true);
                    try {
                        const [projRes, usrRes] = await Promise.all([
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("projects").select("*"),
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("users").select("id, name")
                        ]);
                        if (projRes.error || usrRes.error) throw projRes.error || usrRes.error;
                        var _projRes_data;
                        setProjects((_projRes_data = projRes.data) !== null && _projRes_data !== void 0 ? _projRes_data : []);
                        var _usrRes_data;
                        setUsers((_usrRes_data = usrRes.data) !== null && _usrRes_data !== void 0 ? _usrRes_data : []);
                    } catch (err) {
                        console.error(err);
                        setToast({
                            type: "error",
                            msg: "Failed to load data."
                        });
                    } finally{
                        setIsLoading(false);
                    }
                }
            })["ProjectManagement.useEffect"]();
        }
    }["ProjectManagement.useEffect"], []);
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("cards");
    const [showExportDropdown, setShowExportDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // optional: close dropdown when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectManagement.useEffect": ()=>{
            const handleClick = {
                "ProjectManagement.useEffect.handleClick": (e)=>{
                    if (!e.target.closest("#export-dropdown")) {
                        setShowExportDropdown(false);
                    }
                }
            }["ProjectManagement.useEffect.handleClick"];
            document.addEventListener("click", handleClick);
            return ({
                "ProjectManagement.useEffect": ()=>document.removeEventListener("click", handleClick)
            })["ProjectManagement.useEffect"];
        }
    }["ProjectManagement.useEffect"], []);
    /* ---- handlers for status modal ---- */ const openStatusModal = (status)=>{
        setModalCategoryFilter("all");
        setStatusModal(status);
    };
    const closeStatusModal = ()=>setStatusModal(null);
    /* -------------- UI state filters -------------- */ const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [categoryFilter, setCategoryFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [priorityFilter, setPriorityFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const filtered = projects.filter((p)=>(!search || p.title.toLowerCase().includes(search.toLowerCase())) && (statusFilter === "all" || p.status === statusFilter) && (categoryFilter === "all" || p.category === categoryFilter) && (priorityFilter === "all" || p.priority === priorityFilter));
    const openCreate = ()=>{
        setEditingProject(null);
        setFormData({
            ...EMPTY_FORM
        });
        setShowModal(true);
    };
    const openEdit = (p)=>{
        setEditingProject(p);
        var _p_gallery;
        setFormData({
            ...p,
            gallery_raw: ((_p_gallery = p.gallery) !== null && _p_gallery !== void 0 ? _p_gallery : []).join(", ")
        });
        setShowModal(true);
    };
    const closeModal = ()=>{
        setShowModal(false);
        setFormData({
            ...EMPTY_FORM
        });
        setEditingProject(null);
    };
    /* ------------------------------ save form ------------------------------ */ const saveProject = async ()=>{
        if (!formData.image && !formData.imageFile) {
            setToast({
                type: "error",
                msg: "Please provide a Hero image (URL or file)."
            });
            return;
        }
        setIsLoading(true);
        try {
            var _formData_title, _formData_location, _formData_technical_details_list, _formData_materials_used_list;
            /* ---------- 1. handle uploads (hero, gallery, brochure) ---------- */ // hero
            if (formData.imageFile) {
                const ext = formData.imageFile.name.split(".").pop();
                var _formData_title1;
                const safeTitle = ((_formData_title1 = formData.title) !== null && _formData_title1 !== void 0 ? _formData_title1 : "untitled").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                const filePath = "hero-images/".concat(safeTitle, "-").concat(Date.now(), ".").concat(ext);
                const { error: upErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from("project-images").upload(filePath, formData.imageFile, {
                    upsert: true
                });
                if (upErr) throw upErr;
                const { data: urlData, error: urlErr } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from("project-images").getPublicUrl(filePath);
                if (urlErr) throw urlErr;
                formData.image = urlData.publicUrl;
            }
            // gallery
            // gallery
            if (formData.galleryFiles && formData.galleryFiles.length > 0) {
                const galleryUrls = [];
                for (const file of formData.galleryFiles){
                    const ext = file.name.split(".").pop();
                    const cleanFilename = file.name.toLowerCase().replace(/\s+/g, "-") // replace spaces with hyphens
                    .replace(/[^a-z0-9.-]/g, ""); // remove special characters except dot and dash
                    var _formData_category;
                    const safeCat = ((_formData_category = formData.category) !== null && _formData_category !== void 0 ? _formData_category : "uncategorized").toLowerCase().replace(/[^a-z0-9]+/g, "-");
                    var _formData_title2;
                    const safeTitle = ((_formData_title2 = formData.title) !== null && _formData_title2 !== void 0 ? _formData_title2 : "untitled").toLowerCase().replace(/[^a-z0-9]+/g, "-");
                    const filePath = "gallery/".concat(safeCat, "/").concat(safeTitle, "/").concat(safeTitle, "-").concat(Date.now(), "-").concat(cleanFilename);
                    const { error: uploadError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from("project-gallery").upload(filePath, file, {
                        upsert: true
                    });
                    if (uploadError) throw uploadError;
                    const { data: urlData, error: urlErr } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from("project-gallery").getPublicUrl(filePath);
                    if (urlErr) throw urlErr;
                    galleryUrls.push(urlData.publicUrl);
                }
                formData.gallery = galleryUrls;
            }
            // brochure
            if ((editingProject === null || editingProject === void 0 ? void 0 : editingProject.brochure_url) && formData.brochureFile) {
                const old = editingProject.brochure_url.split("/project-brochures/")[1];
                if (old) await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from("project-brochures").remove([
                    old
                ]);
            }
            if (formData.brochureFile) {
                const ext = formData.brochureFile.name.split(".").pop();
                var _formData_category1;
                const safeCat = ((_formData_category1 = formData.category) !== null && _formData_category1 !== void 0 ? _formData_category1 : "uncategorized").toLowerCase().replace(/[^a-z0-9]+/g, "-");
                var _formData_title3;
                const safeTitle = ((_formData_title3 = formData.title) !== null && _formData_title3 !== void 0 ? _formData_title3 : "untitled").toLowerCase().replace(/[^a-z0-9]+/g, "-");
                const filePath = "brochures/".concat(safeCat, "/").concat(safeTitle, "/").concat(safeTitle, "-").concat(Date.now(), ".").concat(ext);
                const { error: brErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from("project-brochures").upload(filePath, formData.brochureFile, {
                    upsert: true,
                    cacheControl: "3600",
                    contentType: "application/pdf"
                });
                if (brErr) throw brErr;
                const { data: brUrl, error: brUrlErr } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from("project-brochures").getPublicUrl(filePath);
                if (brUrlErr) throw brUrlErr;
                formData.brochure_url = brUrl.publicUrl;
            }
            console.log("Inserting project with user_id:", user === null || user === void 0 ? void 0 : user.id);
            var _formData_image, _formData_gallery, _formData_brochure_url, _formData_technical_details_list_filter, _formData_materials_used_list_filter, _formData_is_published;
            /* ---------- 2. build payload ---------- */ const payload = {
                user_id: user === null || user === void 0 ? void 0 : user.id,
                title: ((_formData_title = formData.title) === null || _formData_title === void 0 ? void 0 : _formData_title.trim()) || 'Untitled Project',
                category: formData.category || 'residential',
                location: ((_formData_location = formData.location) === null || _formData_location === void 0 ? void 0 : _formData_location.trim()) || 'Unspecified',
                year: formData.year,
                duration: formData.duration,
                client: formData.client,
                image: (_formData_image = formData.image) !== null && _formData_image !== void 0 ? _formData_image : "",
                description: formData.description,
                status: formData.status,
                priority: formData.priority,
                budget: formData.budget,
                manager_id: formData.manager_id,
                start_date: formData.start_date,
                end_date: formData.end_date,
                rating: formData.rating,
                key_features: formData.key_features,
                challenge: formData.challenge,
                solution: formData.solution,
                technical_details: formData.technical_details,
                materials_used: formData.materials_used,
                testimonial: formData.testimonial,
                gallery: (_formData_gallery = formData.gallery) !== null && _formData_gallery !== void 0 ? _formData_gallery : [],
                brochure_url: (_formData_brochure_url = formData.brochure_url) !== null && _formData_brochure_url !== void 0 ? _formData_brochure_url : "",
                specifications: (_formData_technical_details_list_filter = (_formData_technical_details_list = formData.technical_details_list) === null || _formData_technical_details_list === void 0 ? void 0 : _formData_technical_details_list.filter((param)=>{
                    let { key, value } = param;
                    return key && value;
                })) !== null && _formData_technical_details_list_filter !== void 0 ? _formData_technical_details_list_filter : [],
                materials: (_formData_materials_used_list_filter = (_formData_materials_used_list = formData.materials_used_list) === null || _formData_materials_used_list === void 0 ? void 0 : _formData_materials_used_list.filter((param)=>{
                    let { key, value } = param;
                    return key && value;
                })) !== null && _formData_materials_used_list_filter !== void 0 ? _formData_materials_used_list_filter : [],
                is_published: (_formData_is_published = formData.is_published) !== null && _formData_is_published !== void 0 ? _formData_is_published : false
            };
            /* ---------- 3. DB write ---------- */ if (editingProject) {
                const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("projects").update(payload).eq("id", editingProject.id);
                if (error) throw error;
            } else {
                const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("projects").insert(payload, {
                    returning: "minimal"
                }); // one safe insert
                if (error) throw error;
            }
            await reloadProjects();
            setToast({
                type: "success",
                msg: editingProject ? "Project updated." : "Project created."
            });
            // close ONLY on success
            setTimeout(closeModal, 800);
        } catch (err) {
            var _this;
            console.error('[saveProject]', err); // keep this
            var _message;
            const msg = typeof err === 'string' ? err : (_message = (_this = err) === null || _this === void 0 ? void 0 : _this.message) !== null && _message !== void 0 ? _message : JSON.stringify(err, null, 2); // stringify if it’s a plain object
            setToast({
                type: 'error',
                msg
            });
        } finally{
            setIsLoading(false);
        }
    };
    /* ------------------------------ delete row ----------------------------- */ const deleteProject = async (p)=>{
        if ((user === null || user === void 0 ? void 0 : user.role) !== "admin") return;
        setIsLoading(true);
        try {
            if (p.brochure_url) {
                const path = p.brochure_url.split("/project-brochures/")[1];
                if (path) await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from("project-brochures").remove([
                    path
                ]);
            }
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("projects").delete().eq("id", p.id);
            if (error) {
                console.error("[deleteProject] Supabase error:", error); // 👈 this helps debugging
                throw error;
            }
            await reloadProjects();
            setToast({
                type: "success",
                msg: "Project deleted."
            });
        } catch (err) {
            console.error("[deleteProject] JS error:", err);
            setToast({
                type: "error",
                msg: "Delete failed."
            });
        } finally{
            setIsLoading(false);
        }
    };
    /* ------------------- derived counts ------------------- */ const total = projects.length;
    const planning = projects.filter((p)=>p.status === "planning").length;
    const in_progress = projects.filter((p)=>p.status === "in_progress").length;
    const completed = projects.filter((p)=>p.status === "completed").length;
    const onHold = projects.filter((p)=>p.status === "on_hold").length;
    const counts = {
        total,
        planning,
        in_progress,
        completed,
        onHold
    };
    const filteredProjects = projects.filter((p)=>{
        var _p_title, _p_client;
        return (statusModal === "all" || p.status === statusModal) && (modalCategoryFilter === "all" || p.category === modalCategoryFilter) && (((_p_title = p.title) === null || _p_title === void 0 ? void 0 : _p_title.toLowerCase().includes(searchTerm.toLowerCase())) || ((_p_client = p.client) === null || _p_client === void 0 ? void 0 : _p_client.toLowerCase().includes(searchTerm.toLowerCase())));
    }).sort((a, b)=>{
        if (sortBy === "latest") {
            return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        }
        if (sortBy === "oldest") {
            return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
        }
        if (sortBy === "status") {
            return a.status.localeCompare(b.status);
        }
        if (sortBy === "client") {
            return (a.client || "").localeCompare(b.client || "");
        }
        return 0;
    });
    const ProjectCalendarView = (param)=>{
        let { projects, onSelect } = param;
        // transform rows that have both dates
        const events = projects.filter((p)=>p.start_date && p.end_date).map((p)=>({
                id: p.id,
                title: p.title,
                start: new Date(p.start_date),
                end: new Date(p.end_date),
                resource: p
            }));
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$big$2d$calendar$2f$dist$2f$react$2d$big$2d$calendar$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Calendar"], {
            localizer: localizer,
            events: events,
            startAccessor: "start",
            endAccessor: "end",
            style: {
                height: "70vh",
                backgroundColor: "#f5f7fa"
            },
            onSelectEvent: (e)=>onSelect(e.resource)
        }, void 0, false, {
            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
            lineNumber: 724,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    };
    var _formData_title, _formData_description, _formData_category, _formData_client, _formData_status, _formData_priority, _formData_budget, _formData_location, _formData_year, _formData_duration, _formData_key_features, _formData_challenge, _formData_solution, _formData_technical_details_list, _formData_materials_used_list, _formData_testimonial, _formData_rating, _formData_galleryFiles, _formData_is_published;
    /* ------------------- rendering ------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen overflow-hidden flex flex-col",
        children: [
            toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Toast, {
                msg: toast.msg,
                type: toast.type,
                onClose: ()=>setToast(null)
            }, void 0, false, {
                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                lineNumber: 742,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TopBar, {}, void 0, false, {
                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                lineNumber: 749,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-semibold text-gray-800 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                        className: "w-6 h-6 text-blue-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                        lineNumber: 755,
                                        columnNumber: 88
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Projects"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                lineNumber: 755,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: openCreate,
                                        className: "bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                className: "inline w-4 h-4 mr-1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                lineNumber: 757,
                                                columnNumber: 139
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " New Project"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                        lineNumber: 757,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        id: "export-dropdown",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowExportDropdown(!showExportDropdown),
                                                className: "bg-[#1f4c6d] text-white px-4 py-2 rounded hover:bg-[#173a53] flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                        lineNumber: 765,
                                                        columnNumber: 3
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Export CSV"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                lineNumber: 761,
                                                columnNumber: 1
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            showExportDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-full right-0 z-20 mt-1 bg-white border shadow rounded min-w-[200px] text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "w-full text-left px-4 py-2 hover:bg-gray-100",
                                                        onClick: ()=>{
                                                            exportToCSV(projects, "all_projects");
                                                            setShowExportDropdown(false);
                                                        },
                                                        children: "Export All Projects"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                        lineNumber: 772,
                                                        columnNumber: 7
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "w-full text-left px-4 py-2 hover:bg-gray-100",
                                                        onClick: ()=>{
                                                            exportToCSV(projects.filter((p)=>p.status === "planning"), "planning_projects");
                                                            setShowExportDropdown(false);
                                                        },
                                                        children: "Export Planning"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                        lineNumber: 781,
                                                        columnNumber: 7
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "w-full text-left px-4 py-2 hover:bg-gray-100",
                                                        onClick: ()=>{
                                                            exportToCSV(projects.filter((p)=>p.status === "in_progress"), "in_progress_projects");
                                                            setShowExportDropdown(false);
                                                        },
                                                        children: "Export In Progress"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                        lineNumber: 790,
                                                        columnNumber: 7
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "w-full text-left px-4 py-2 hover:bg-gray-100",
                                                        onClick: ()=>{
                                                            exportToCSV(projects.filter((p)=>p.status === "completed"), "completed_projects");
                                                            setShowExportDropdown(false);
                                                        },
                                                        children: "Export Completed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                        lineNumber: 799,
                                                        columnNumber: 7
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "w-full text-left px-4 py-2 hover:bg-gray-100",
                                                        onClick: ()=>{
                                                            exportToCSV(projects.filter((p)=>p.status === "on_hold"), "on_hold_projects");
                                                            setShowExportDropdown(false);
                                                        },
                                                        children: "Export On Hold"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                        lineNumber: 808,
                                                        columnNumber: 7
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                lineNumber: 771,
                                                columnNumber: 5
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                        lineNumber: 760,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setViewMode(viewMode === "cards" ? "calendar" : "cards"),
                                        className: "bg-[#3d9392] text-white px-4 py-2 rounded hover:bg-[#1b3d5a] flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                lineNumber: 827,
                                                columnNumber: 3
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            viewMode === "cards" ? "Calendar" : "Card View"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                        lineNumber: 823,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                lineNumber: 756,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                        lineNumber: 754,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryCardButton, {
                                label: "Total Projects",
                                value: total,
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                    className: "w-6 h-6 text-indigo-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 841,
                                    columnNumber: 19
                                }, void 0),
                                onClick: ()=>openStatusModal("all")
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                lineNumber: 838,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryCardButton, {
                                label: "Planning",
                                value: planning,
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                    className: "w-5 h-5 text-blue-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 847,
                                    columnNumber: 19
                                }, void 0),
                                onClick: ()=>openStatusModal("planning")
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                lineNumber: 844,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryCardButton, {
                                label: "Active",
                                value: in_progress,
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                    className: "w-6 h-6 text-green-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 853,
                                    columnNumber: 19
                                }, void 0),
                                onClick: ()=>openStatusModal("in_progress")
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                lineNumber: 850,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryCardButton, {
                                label: "Completed",
                                value: completed,
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                    className: "w-6 h-6 text-yellow-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 859,
                                    columnNumber: 19
                                }, void 0),
                                onClick: ()=>openStatusModal("completed")
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                lineNumber: 856,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryCardButton, {
                                label: "On Hold",
                                value: onHold,
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                    className: "w-6 h-6 text-orange-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 865,
                                    columnNumber: 19
                                }, void 0),
                                onClick: ()=>openStatusModal("on_hold")
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                lineNumber: 862,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                        lineNumber: 837,
                        columnNumber: 4
                    }, ("TURBOPACK compile-time value", void 0)),
                    isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Loading…"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                        lineNumber: 875,
                        columnNumber: 3
                    }, ("TURBOPACK compile-time value", void 0)) : viewMode === "calendar" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectCalendarView, {
                        projects: projects,
                        onSelect: openPreview
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                        lineNumber: 877,
                        columnNumber: 3
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
                        children: projects.slice(0, 3).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectCard, {
                                project: p,
                                onEdit: openEdit,
                                onDelete: (p)=>setDeleteConfirm({
                                        open: true,
                                        project: p
                                    }),
                                onPreview: openPreview,
                                isAdmin: isAdmin
                            }, p.id, false, {
                                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                lineNumber: 881,
                                columnNumber: 7
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                        lineNumber: 879,
                        columnNumber: 3
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectProgressOverview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        projects: projects
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                        lineNumber: 893,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    statusModal !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: statusModal === "all" ? "All Projects" : "".concat(statusModal.replace("_", " ").replace(/\b\w/g, (c)=>c.toUpperCase()), " Projects"),
                        onClose: closeStatusModal,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 flex justify-end",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row sm:items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Search projects...",
                                            className: "w-full sm:w-auto border rounded p-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 910,
                                            columnNumber: 3
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: modalCategoryFilter,
                                                    onChange: (e)=>setModalCategoryFilter(e.target.value),
                                                    className: "border rounded px-3 py-1 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "all",
                                                            children: "All Categories"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                            lineNumber: 922,
                                                            columnNumber: 7
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        [
                                                            ...new Set(projects.map((p)=>p.category))
                                                        ].map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: cat,
                                                                children: cat
                                                            }, cat, false, {
                                                                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                                lineNumber: 924,
                                                                columnNumber: 9
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                    lineNumber: 917,
                                                    columnNumber: 5
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: sortBy,
                                                    onChange: (e)=>setSortBy(e.target.value),
                                                    className: "border rounded px-3 py-1 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "latest",
                                                            children: "Newest First"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                            lineNumber: 936,
                                                            columnNumber: 3
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "oldest",
                                                            children: "Oldest First"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                            lineNumber: 937,
                                                            columnNumber: 3
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "status",
                                                            children: "Status"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                            lineNumber: 938,
                                                            columnNumber: 3
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "client",
                                                            children: "Client Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                            lineNumber: 939,
                                                            columnNumber: 3
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                    lineNumber: 931,
                                                    columnNumber: 2
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 916,
                                            columnNumber: 3
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 908,
                                    columnNumber: 1
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                lineNumber: 907,
                                columnNumber: 5
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-6 md:grid-cols-1",
                                children: projects.filter((p)=>{
                                    var _p_title, _p_client;
                                    return (statusModal === "all" || p.status === statusModal) && (modalCategoryFilter === "all" || p.category === modalCategoryFilter) && (((_p_title = p.title) === null || _p_title === void 0 ? void 0 : _p_title.toLowerCase().includes(searchTerm.toLowerCase())) || ((_p_client = p.client) === null || _p_client === void 0 ? void 0 : _p_client.toLowerCase().includes(searchTerm.toLowerCase())));
                                }).sort((a, b)=>{
                                    if (sortBy === "latest") return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
                                    if (sortBy === "oldest") return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
                                    if (sortBy === "status") return a.status.localeCompare(b.status);
                                    if (sortBy === "client") return (a.client || "").localeCompare(b.client || "");
                                    return 0;
                                }).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectCard, {
                                        project: p,
                                        onEdit: openEdit,
                                        onDelete: (p)=>setDeleteConfirm({
                                                open: true,
                                                project: p
                                            }),
                                        onPreview: openPreview,
                                        isAdmin: (user === null || user === void 0 ? void 0 : user.role) === "admin"
                                    }, p.id, false, {
                                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                        lineNumber: 964,
                                        columnNumber: 5
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                lineNumber: 947,
                                columnNumber: 5
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                        lineNumber: 899,
                        columnNumber: 3
                    }, ("TURBOPACK compile-time value", void 0)),
                    toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 rounded text-sm ".concat(toast.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"),
                        children: toast.msg
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                        lineNumber: 980,
                        columnNumber: 19
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                lineNumber: 750,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            previewProject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Preview: ".concat(previewProject.title),
                onClose: closePreview,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6 max-h-[80vh] overflow-y-auto pr-1",
                    children: [
                        previewProject.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: previewProject.image,
                            alt: previewProject.title,
                            className: "w-full h-56 object-cover rounded"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                            lineNumber: 989,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 998,
                                            columnNumber: 50
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " ",
                                        previewProject.location
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 998,
                                    columnNumber: 9
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 999,
                                            columnNumber: 50
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Year: ",
                                        previewProject.year
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 999,
                                    columnNumber: 9
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1000,
                                            columnNumber: 50
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Duration: ",
                                        previewProject.duration
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1000,
                                    columnNumber: 9
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1001,
                                            columnNumber: 50
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Client: ",
                                        previewProject.client
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1001,
                                    columnNumber: 9
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1002,
                                            columnNumber: 50
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Category: ",
                                        previewProject.category
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1002,
                                    columnNumber: 9
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1003,
                                            columnNumber: 50
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Priority: ",
                                        previewProject.priority
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1003,
                                    columnNumber: 9
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1004,
                                            columnNumber: 50
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Status: ",
                                        previewProject.status
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1004,
                                    columnNumber: 9
                                }, ("TURBOPACK compile-time value", void 0)),
                                previewProject.budget && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1006,
                                            columnNumber: 52
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Budget: $",
                                        previewProject.budget.toLocaleString()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1006,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                previewProject.rating !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1009,
                                            columnNumber: 52
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Rating: ",
                                        previewProject.rating,
                                        " / 5"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1009,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                            lineNumber: 997,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold text-gray-900 mb-1",
                                    children: "Description"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1015,
                                    columnNumber: 9
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 whitespace-pre-line",
                                    children: previewProject.description
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1016,
                                    columnNumber: 9
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                            lineNumber: 1014,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0)),
                        previewProject.key_features && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold text-gray-900 mb-1",
                                    children: "Key Features"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1022,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 whitespace-pre-line",
                                    children: previewProject.key_features
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1023,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                            lineNumber: 1021,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        previewProject.challenge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold text-gray-900 mb-1",
                                    children: "Challenge"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1030,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 whitespace-pre-line",
                                    children: previewProject.challenge
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1031,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                            lineNumber: 1029,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        previewProject.solution && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold text-gray-900 mb-1",
                                    children: "Solution"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1038,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 whitespace-pre-line",
                                    children: previewProject.solution
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1039,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                            lineNumber: 1037,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        previewProject.technical_details && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold text-gray-900 mb-1",
                                    children: "Technical Details"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1046,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 whitespace-pre-line",
                                    children: previewProject.technical_details
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1047,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                            lineNumber: 1045,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        previewProject.materials_used && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold text-gray-900 mb-1",
                                    children: "Materials Used"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1054,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 whitespace-pre-line",
                                    children: previewProject.materials_used
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1055,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                            lineNumber: 1053,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        previewProject.testimonial && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold text-gray-900 mb-1",
                                    children: "Client Testimonial"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1062,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                    className: "text-gray-600 italic border-l-4 pl-4 border-blue-400",
                                    children: previewProject.testimonial
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1063,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                            lineNumber: 1061,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        previewProject.brochure_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: previewProject.brochure_url,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "inline-flex items-center px-4 py-2 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        className: "w-4 h-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                        lineNumber: 1078,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Download Brochure"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                lineNumber: 1072,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                            lineNumber: 1071,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        ((_previewProject_gallery = previewProject.gallery) === null || _previewProject_gallery === void 0 ? void 0 : _previewProject_gallery.length) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold text-gray-900 mb-2",
                                    children: "Gallery"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1087,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 sm:grid-cols-3 gap-2",
                                    children: previewProject.gallery.map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: img,
                                            alt: "Gallery ".concat(i),
                                            className: "rounded object-cover h-32 w-full"
                                        }, i, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1090,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1088,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                            lineNumber: 1086,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                    lineNumber: 985,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                lineNumber: 984,
                columnNumber: 3
            }, ("TURBOPACK compile-time value", void 0)),
            showModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: editingProject ? "Edit Project" : "New Project",
                onClose: closeModal,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: (e)=>{
                        e.preventDefault();
                        saveProject();
                    },
                    className: "space-y-4 max-h-[80vh] overflow-y-auto pr-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700",
                                    children: [
                                        "Project Title ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-500",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1109,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1108,
                                    columnNumber: 1
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center border px-3 py-2 rounded",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__["Type"], {
                                            className: "w-4 h-4 text-gray-500 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1113,
                                            columnNumber: 5
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            required: true,
                                            className: "w-full outline-none",
                                            placeholder: "E.g., Central Plaza Tower Renovation",
                                            value: (_formData_title = formData.title) !== null && _formData_title !== void 0 ? _formData_title : "",
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    title: e.target.value
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1114,
                                            columnNumber: 5
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1112,
                                    columnNumber: 3
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                            lineNumber: 1107,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700",
                                    children: [
                                        "Description ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-500",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1127,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1126,
                                    columnNumber: 1
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start border px-3 py-2 rounded",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                            className: "w-4 h-4 text-gray-500 mr-2 mt-1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1130,
                                            columnNumber: 5
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            required: true,
                                            className: "w-full outline-none",
                                            placeholder: "Brief overview of the project scope, objectives, or achievements",
                                            value: (_formData_description = formData.description) !== null && _formData_description !== void 0 ? _formData_description : "",
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    description: e.target.value
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1131,
                                            columnNumber: 5
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1129,
                                    columnNumber: 3
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                            lineNumber: 1125,
                            columnNumber: 5
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700",
                                            children: [
                                                "Category ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                    lineNumber: 1146,
                                                    columnNumber: 12
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1145,
                                            columnNumber: 1
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center border px-3 py-2 rounded",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                                    className: "w-4 h-4 text-gray-500 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                    lineNumber: 1150,
                                                    columnNumber: 5
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    required: true,
                                                    className: "w-full outline-none bg-transparent",
                                                    value: (_formData_category = formData.category) !== null && _formData_category !== void 0 ? _formData_category : "residential",
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            category: e.target.value
                                                        }),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "residential",
                                                            children: "Residential"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                            lineNumber: 1157,
                                                            columnNumber: 7
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "commercial",
                                                            children: "Commercial"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                            lineNumber: 1158,
                                                            columnNumber: 7
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "infrastructure",
                                                            children: "Infrastructure"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                            lineNumber: 1159,
                                                            columnNumber: 7
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "healthcare",
                                                            children: "Healthcare"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                            lineNumber: 1160,
                                                            columnNumber: 7
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "education",
                                                            children: "Education"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                            lineNumber: 1161,
                                                            columnNumber: 7
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                    lineNumber: 1151,
                                                    columnNumber: 5
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1149,
                                            columnNumber: 3
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1144,
                                    columnNumber: 10
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700",
                                            children: [
                                                "Client ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                    lineNumber: 1168,
                                                    columnNumber: 10
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1167,
                                            columnNumber: 1
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center border px-3 py-2 rounded",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                    className: "w-4 h-4 text-gray-500 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                    lineNumber: 1172,
                                                    columnNumber: 5
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    required: true,
                                                    className: "w-full outline-none",
                                                    placeholder: "E.g., ABC Construction Co., Ltd.",
                                                    value: (_formData_client = formData.client) !== null && _formData_client !== void 0 ? _formData_client : "",
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            client: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                    lineNumber: 1173,
                                                    columnNumber: 5
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1171,
                                            columnNumber: 3
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1166,
                                    columnNumber: 4
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700",
                                            children: [
                                                "Status ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                    lineNumber: 1186,
                                                    columnNumber: 10
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1185,
                                            columnNumber: 1
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center border px-3 py-2 rounded",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                    className: "w-4 h-4 text-gray-500 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                    lineNumber: 1190,
                                                    columnNumber: 5
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    required: true,
                                                    className: "w-full outline-none bg-transparent",
                                                    value: (_formData_status = formData.status) !== null && _formData_status !== void 0 ? _formData_status : "planning",
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            status: e.target.value
                                                        }),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "planning",
                                                            children: "Planning"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                            lineNumber: 1197,
                                                            columnNumber: 7
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "in_progress",
                                                            children: "In Progress"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                            lineNumber: 1198,
                                                            columnNumber: 7
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "completed",
                                                            children: "Completed"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                            lineNumber: 1199,
                                                            columnNumber: 7
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "on_hold",
                                                            children: "On Hold"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                            lineNumber: 1200,
                                                            columnNumber: 3
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                    lineNumber: 1191,
                                                    columnNumber: 5
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1189,
                                            columnNumber: 3
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1184,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700",
                                            children: [
                                                "Priority ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                    lineNumber: 1207,
                                                    columnNumber: 12
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1206,
                                            columnNumber: 1
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center border px-3 py-2 rounded",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                    className: "w-4 h-4 text-gray-500 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                    lineNumber: 1211,
                                                    columnNumber: 5
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    required: true,
                                                    className: "w-full outline-none bg-transparent",
                                                    value: (_formData_priority = formData.priority) !== null && _formData_priority !== void 0 ? _formData_priority : "medium",
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            priority: e.target.value
                                                        }),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "low",
                                                            children: "Low"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                            lineNumber: 1218,
                                                            columnNumber: 7
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "medium",
                                                            children: "Medium"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                            lineNumber: 1219,
                                                            columnNumber: 7
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "high",
                                                            children: "High"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                            lineNumber: 1220,
                                                            columnNumber: 7
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                    lineNumber: 1212,
                                                    columnNumber: 5
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1210,
                                            columnNumber: 3
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1205,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700",
                                            children: "Budget"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1227,
                                            columnNumber: 3
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center border px-3 py-2 rounded",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                    className: "w-4 h-4 text-gray-500 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                    lineNumber: 1229,
                                                    columnNumber: 5
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    className: "w-full outline-none",
                                                    placeholder: "E.g., 500000",
                                                    value: (_formData_budget = formData.budget) !== null && _formData_budget !== void 0 ? _formData_budget : "",
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            budget: Number(e.target.value)
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                    lineNumber: 1230,
                                                    columnNumber: 5
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1228,
                                            columnNumber: 3
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1226,
                                    columnNumber: 2
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700",
                                            children: [
                                                "Location ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                    lineNumber: 1243,
                                                    columnNumber: 12
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1242,
                                            columnNumber: 2
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center border px-3 py-2 rounded",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    className: "w-4 h-4 text-gray-500 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                    lineNumber: 1247,
                                                    columnNumber: 5
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    required: true,
                                                    className: "w-full outline-none",
                                                    placeholder: "E.g., Vientiane Capital, Laos",
                                                    value: (_formData_location = formData.location) !== null && _formData_location !== void 0 ? _formData_location : "",
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            location: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                    lineNumber: 1248,
                                                    columnNumber: 5
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1246,
                                            columnNumber: 3
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1241,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700",
                                            children: [
                                                "Completed Year ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                    lineNumber: 1260,
                                                    columnNumber: 18
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1259,
                                            columnNumber: 1
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center border px-3 py-2 rounded",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                    className: "w-4 h-4 text-gray-500 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                    lineNumber: 1264,
                                                    columnNumber: 5
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    required: true,
                                                    className: "w-full outline-none",
                                                    placeholder: "E.g., 2025",
                                                    value: (_formData_year = formData.year) !== null && _formData_year !== void 0 ? _formData_year : "",
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            year: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                    lineNumber: 1265,
                                                    columnNumber: 5
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1263,
                                            columnNumber: 3
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1258,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700",
                                            children: "Duration"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1277,
                                            columnNumber: 3
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center border px-3 py-2 rounded",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                    className: "w-4 h-4 text-gray-500 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                    lineNumber: 1279,
                                                    columnNumber: 5
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "w-full outline-none",
                                                    placeholder: "E.g., 8 months",
                                                    value: (_formData_duration = formData.duration) !== null && _formData_duration !== void 0 ? _formData_duration : "",
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            duration: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                    lineNumber: 1280,
                                                    columnNumber: 5
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1278,
                                            columnNumber: 3
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1276,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                            lineNumber: 1143,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700",
                                    children: "Key Features"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1297,
                                    columnNumber: 3
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start border px-3 py-2 rounded",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                            className: "w-4 h-4 text-gray-500 mr-2 mt-1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1299,
                                            columnNumber: 5
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            className: "w-full outline-none",
                                            rows: 3,
                                            placeholder: "E.g., Earthquake resistant, Energy-efficient lighting, LEED-certified",
                                            value: (_formData_key_features = formData.key_features) !== null && _formData_key_features !== void 0 ? _formData_key_features : "",
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    key_features: e.target.value
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1300,
                                            columnNumber: 5
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1298,
                                    columnNumber: 3
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                            lineNumber: 1296,
                            columnNumber: 1
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700",
                                    children: "The Challenge"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1312,
                                    columnNumber: 3
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start border px-3 py-2 rounded",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                            className: "w-4 h-4 text-gray-500 mr-2 mt-1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1314,
                                            columnNumber: 5
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            className: "w-full outline-none",
                                            rows: 3,
                                            placeholder: "Describe the project's initial problem or unique challenge...",
                                            value: (_formData_challenge = formData.challenge) !== null && _formData_challenge !== void 0 ? _formData_challenge : "",
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    challenge: e.target.value
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1315,
                                            columnNumber: 5
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1313,
                                    columnNumber: 3
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                            lineNumber: 1311,
                            columnNumber: 1
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700",
                                    children: "Our Solution"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1327,
                                    columnNumber: 3
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start border px-3 py-2 rounded",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                            className: "w-4 h-4 text-gray-500 mr-2 mt-1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1329,
                                            columnNumber: 5
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            className: "w-full outline-none",
                                            rows: 3,
                                            placeholder: "Briefly explain the implemented solution or strategy...",
                                            value: (_formData_solution = formData.solution) !== null && _formData_solution !== void 0 ? _formData_solution : "",
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    solution: e.target.value
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1330,
                                            columnNumber: 5
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1328,
                                    columnNumber: 3
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                            lineNumber: 1326,
                            columnNumber: 1
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700",
                                    children: "Technical Details"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1342,
                                    columnNumber: 3
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        ((_formData_technical_details_list = formData.technical_details_list) !== null && _formData_technical_details_list !== void 0 ? _formData_technical_details_list : []).map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2 items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        placeholder: "Label",
                                                        className: "w-1/2 px-2 py-1 border rounded",
                                                        value: item.key,
                                                        onChange: (e)=>{
                                                            var _formData_technical_details_list;
                                                            const updated = [
                                                                ...(_formData_technical_details_list = formData.technical_details_list) !== null && _formData_technical_details_list !== void 0 ? _formData_technical_details_list : []
                                                            ];
                                                            updated[index].key = e.target.value;
                                                            setFormData({
                                                                ...formData,
                                                                technical_details_list: updated
                                                            });
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                        lineNumber: 1346,
                                                        columnNumber: 9
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        placeholder: "Value",
                                                        className: "w-1/2 px-2 py-1 border rounded",
                                                        value: item.value,
                                                        onChange: (e)=>{
                                                            var _formData_technical_details_list;
                                                            const updated = [
                                                                ...(_formData_technical_details_list = formData.technical_details_list) !== null && _formData_technical_details_list !== void 0 ? _formData_technical_details_list : []
                                                            ];
                                                            updated[index].value = e.target.value;
                                                            setFormData({
                                                                ...formData,
                                                                technical_details_list: updated
                                                            });
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                        lineNumber: 1357,
                                                        columnNumber: 9
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: "text-red-500 text-sm",
                                                        onClick: ()=>{
                                                            var _formData_technical_details_list;
                                                            const updated = ((_formData_technical_details_list = formData.technical_details_list) !== null && _formData_technical_details_list !== void 0 ? _formData_technical_details_list : []).filter((_, i)=>i !== index);
                                                            setFormData({
                                                                ...formData,
                                                                technical_details_list: updated
                                                            });
                                                        },
                                                        children: "✕"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                        lineNumber: 1368,
                                                        columnNumber: 9
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                lineNumber: 1345,
                                                columnNumber: 7
                                            }, ("TURBOPACK compile-time value", void 0))),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "text-sm text-blue-600 underline",
                                            onClick: ()=>{
                                                var _formData_technical_details_list;
                                                return setFormData({
                                                    ...formData,
                                                    technical_details_list: [
                                                        ...(_formData_technical_details_list = formData.technical_details_list) !== null && _formData_technical_details_list !== void 0 ? _formData_technical_details_list : [],
                                                        {
                                                            key: "",
                                                            value: ""
                                                        }
                                                    ]
                                                });
                                            },
                                            children: "+ Add Technical Detail"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1380,
                                            columnNumber: 5
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1343,
                                    columnNumber: 3
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                            lineNumber: 1341,
                            columnNumber: 1
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700",
                                    children: "Materials Used"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1398,
                                    columnNumber: 3
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        ((_formData_materials_used_list = formData.materials_used_list) !== null && _formData_materials_used_list !== void 0 ? _formData_materials_used_list : []).map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2 items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        placeholder: "Material",
                                                        className: "w-1/2 px-2 py-1 border rounded",
                                                        value: item.key,
                                                        onChange: (e)=>{
                                                            var _formData_materials_used_list;
                                                            const updated = [
                                                                ...(_formData_materials_used_list = formData.materials_used_list) !== null && _formData_materials_used_list !== void 0 ? _formData_materials_used_list : []
                                                            ];
                                                            updated[index].key = e.target.value;
                                                            setFormData({
                                                                ...formData,
                                                                materials_used_list: updated
                                                            });
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                        lineNumber: 1402,
                                                        columnNumber: 9
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        placeholder: "Specification",
                                                        className: "w-1/2 px-2 py-1 border rounded",
                                                        value: item.value,
                                                        onChange: (e)=>{
                                                            var _formData_materials_used_list;
                                                            const updated = [
                                                                ...(_formData_materials_used_list = formData.materials_used_list) !== null && _formData_materials_used_list !== void 0 ? _formData_materials_used_list : []
                                                            ];
                                                            updated[index].value = e.target.value;
                                                            setFormData({
                                                                ...formData,
                                                                materials_used_list: updated
                                                            });
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                        lineNumber: 1413,
                                                        columnNumber: 9
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: "text-red-500 text-sm",
                                                        onClick: ()=>{
                                                            var _formData_materials_used_list;
                                                            const updated = ((_formData_materials_used_list = formData.materials_used_list) !== null && _formData_materials_used_list !== void 0 ? _formData_materials_used_list : []).filter((_, i)=>i !== index);
                                                            setFormData({
                                                                ...formData,
                                                                materials_used_list: updated
                                                            });
                                                        },
                                                        children: "✕"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                        lineNumber: 1424,
                                                        columnNumber: 9
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                lineNumber: 1401,
                                                columnNumber: 7
                                            }, ("TURBOPACK compile-time value", void 0))),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "text-sm text-blue-600 underline",
                                            onClick: ()=>{
                                                var _formData_materials_used_list;
                                                return setFormData({
                                                    ...formData,
                                                    materials_used_list: [
                                                        ...(_formData_materials_used_list = formData.materials_used_list) !== null && _formData_materials_used_list !== void 0 ? _formData_materials_used_list : [],
                                                        {
                                                            key: "",
                                                            value: ""
                                                        }
                                                    ]
                                                });
                                            },
                                            children: "+ Add Material"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1436,
                                            columnNumber: 5
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1399,
                                    columnNumber: 3
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                            lineNumber: 1397,
                            columnNumber: 1
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700",
                                    children: "Client Testimonial"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1454,
                                    columnNumber: 3
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start border px-3 py-2 rounded",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                            className: "w-4 h-4 text-gray-500 mr-2 mt-1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1456,
                                            columnNumber: 5
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            className: "w-full outline-none",
                                            rows: 3,
                                            placeholder: 'E.g., "We were impressed by the professionalism and attention to detail..."',
                                            value: (_formData_testimonial = formData.testimonial) !== null && _formData_testimonial !== void 0 ? _formData_testimonial : "",
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    testimonial: e.target.value
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1457,
                                            columnNumber: 5
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1455,
                                    columnNumber: 3
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                            lineNumber: 1453,
                            columnNumber: 1
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700",
                                    children: "Rating (0–5)"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1469,
                                    columnNumber: 3
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center border px-3 py-2 rounded",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                            className: "w-4 h-4 text-gray-500 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1471,
                                            columnNumber: 5
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            min: 0,
                                            max: 5,
                                            step: 1,
                                            className: "w-full outline-none",
                                            placeholder: "E.g., 4",
                                            value: (_formData_rating = formData.rating) !== null && _formData_rating !== void 0 ? _formData_rating : "",
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    rating: Number(e.target.value)
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1472,
                                            columnNumber: 5
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1470,
                                    columnNumber: 3
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                            lineNumber: 1468,
                            columnNumber: 1
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: [
                                        "Upload Hero Image ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-500",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1505,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1504,
                                    columnNumber: 3
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DropzoneButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    accept: {
                                        "image/*": []
                                    },
                                    onFiles: (files)=>setFormData({
                                            ...formData,
                                            imageFile: files[0]
                                        }),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                            className: "w-4 h-4 text-blue-700"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1512,
                                            columnNumber: 5
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: formData.imageFile ? "Replace Hero Image" : "Select / Drop Hero Image"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1513,
                                            columnNumber: 5
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1508,
                                    columnNumber: 3
                                }, ("TURBOPACK compile-time value", void 0)),
                                formData.imageFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilePreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    file: formData.imageFile,
                                    onRemove: ()=>setFormData({
                                            ...formData,
                                            imageFile: undefined
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1517,
                                    columnNumber: 5
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                            lineNumber: 1503,
                            columnNumber: 1
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-2 mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: "Upload Gallery Images"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1544,
                                    columnNumber: 3
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DropzoneButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    multiple: true,
                                    accept: {
                                        "image/*": []
                                    },
                                    className: "bg-purple-50 border-purple-300 hover:bg-purple-100",
                                    onFiles: (files)=>{
                                        var _formData_galleryFiles;
                                        return setFormData({
                                            ...formData,
                                            galleryFiles: [
                                                ...(_formData_galleryFiles = formData.galleryFiles) !== null && _formData_galleryFiles !== void 0 ? _formData_galleryFiles : [],
                                                ...files
                                            ]
                                        });
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                            className: "w-4 h-4 text-purple-700"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1559,
                                            columnNumber: 5
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Select / Drop Gallery Images"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1560,
                                            columnNumber: 5
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1548,
                                    columnNumber: 3
                                }, ("TURBOPACK compile-time value", void 0)),
                                ((_formData_galleryFiles = formData.galleryFiles) !== null && _formData_galleryFiles !== void 0 ? _formData_galleryFiles : []).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap mt-2",
                                    children: formData.galleryFiles.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilePreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            file: f,
                                            onRemove: ()=>setFormData({
                                                    ...formData,
                                                    galleryFiles: formData.galleryFiles.filter((_, idx)=>idx !== i)
                                                })
                                        }, i, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1566,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1564,
                                    columnNumber: 5
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                            lineNumber: 1543,
                            columnNumber: 1
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-2 mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: "Upload Project Brochure (PDF)"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1583,
                                    columnNumber: 3
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DropzoneButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    accept: {
                                        "application/pdf": []
                                    },
                                    className: "bg-[#e6f7f7] border-[#3d9392] hover:bg-[#d1f0ee] text-[#3d9392]",
                                    onFiles: (files)=>setFormData({
                                            ...formData,
                                            brochureFile: files[0]
                                        }),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1592,
                                            columnNumber: 5
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Select / Drop Brochure PDF"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1593,
                                            columnNumber: 5
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1587,
                                    columnNumber: 3
                                }, ("TURBOPACK compile-time value", void 0)),
                                formData.brochureFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilePreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    file: formData.brochureFile,
                                    onRemove: ()=>setFormData({
                                            ...formData,
                                            brochureFile: undefined
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1597,
                                    columnNumber: 5
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                            lineNumber: 1582,
                            columnNumber: 1
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700",
                                    children: "Publish to Website?"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1607,
                                    columnNumber: 3
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            required: true,
                                            type: "checkbox",
                                            id: "is_published",
                                            checked: (_formData_is_published = formData.is_published) !== null && _formData_is_published !== void 0 ? _formData_is_published : false,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    is_published: e.target.checked
                                                }),
                                            className: "h-5 w-5 text-blue-600 border-gray-300 rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1609,
                                            columnNumber: 5
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "is_published",
                                            className: "text-sm text-gray-700",
                                            children: "Yes, make this project public on the website."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1617,
                                            columnNumber: 5
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1608,
                                    columnNumber: 3
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                            lineNumber: 1606,
                            columnNumber: 14
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row justify-between items-center pt-4 gap-2",
                            children: [
                                toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Toast, {
                                    msg: toast.msg,
                                    type: toast.type,
                                    onClose: ()=>setToast(null)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1629,
                                    columnNumber: 3
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onPreview(project),
                                            className: "text-gray-600 hover:text-gray-800",
                                            title: "Preview",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                lineNumber: 1638,
                                                columnNumber: 5
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1637,
                                            columnNumber: 3
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onEdit(project),
                                            className: "text-blue-600 hover:text-blue-800",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                lineNumber: 1641,
                                                columnNumber: 5
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1640,
                                            columnNumber: 3
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onDelete(project),
                                            className: "text-red-600 hover:text-red-800",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                                lineNumber: 1645,
                                                columnNumber: 7
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1644,
                                            columnNumber: 5
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1636,
                                    columnNumber: 3
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: closeModal,
                                            className: "px-4 py-2 rounded border",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1651,
                                            columnNumber: 5
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: isLoading,
                                            className: "px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-50",
                                            children: isLoading ? editingProject ? "Updating..." : "Creating..." : editingProject ? "Update" : "Create"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                            lineNumber: 1658,
                                            columnNumber: 3
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                    lineNumber: 1650,
                                    columnNumber: 3
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                            lineNumber: 1626,
                            columnNumber: 1
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                    lineNumber: 1105,
                    columnNumber: 12
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                lineNumber: 1102,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: deleteConfirm.open && deleteConfirm.project && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "fixed inset-0 z-50 bg-black/50 flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            scale: 0.9,
                            opacity: 0
                        },
                        animate: {
                            scale: 1,
                            opacity: 1
                        },
                        exit: {
                            scale: 0.9,
                            opacity: 0
                        },
                        transition: {
                            duration: 0.2
                        },
                        className: "bg-white rounded-lg shadow-xl p-6 max-w-sm w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold text-gray-800 mb-2",
                                children: "Delete Project"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                lineNumber: 1696,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600 mb-4",
                                children: [
                                    'Are you sure you want to delete "',
                                    deleteConfirm.project.title,
                                    '"?'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                lineNumber: 1697,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setDeleteConfirm({
                                                open: false,
                                                project: null
                                            }),
                                        className: "px-4 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-100",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                        lineNumber: 1701,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: async ()=>{
                                            setDeleteConfirm({
                                                open: false,
                                                project: null
                                            });
                                            await deleteProject(deleteConfirm.project);
                                        },
                                        className: "px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700",
                                        children: "Delete"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                        lineNumber: 1707,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                                lineNumber: 1700,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                        lineNumber: 1689,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                    lineNumber: 1683,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
                lineNumber: 1681,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin-dashboard/projects/page.tsx",
        lineNumber: 739,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(ProjectManagement, "+VoFR4lJ32gVuyw2pt5nkG3Mw90=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c6 = ProjectManagement;
const __TURBOPACK__default__export__ = ProjectManagement;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "StatusPill");
__turbopack_context__.k.register(_c1, "PriorityPill");
__turbopack_context__.k.register(_c2, "SummaryCardButton");
__turbopack_context__.k.register(_c3, "TopBar");
__turbopack_context__.k.register(_c4, "Toast");
__turbopack_context__.k.register(_c5, "ProjectCard");
__turbopack_context__.k.register(_c6, "ProjectManagement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_admin-dashboard_projects_page_tsx_bf1e3d16._.js.map
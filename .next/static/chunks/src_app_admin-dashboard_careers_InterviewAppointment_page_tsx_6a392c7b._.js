(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$multi$2d$date$2d$picker$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-multi-date-picker/build/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript) <export default as UserPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function getTimeSlots(start, end, interval, lunchStart, lunchEnd) {
    const slots = [];
    let [h, m] = start.split(":").map(Number);
    let [eh, em] = end.split(":").map(Number);
    let [lh, lm] = lunchStart.split(":").map(Number);
    let [le, lem] = lunchEnd.split(":").map(Number);
    while(h < eh || h === eh && m < em){
        const timeStr = "".concat(String(h).padStart(2, "0"), ":").concat(String(m).padStart(2, "0"));
        if (timeStr < "".concat(String(lh).padStart(2, "0"), ":").concat(String(lm).padStart(2, "0")) || timeStr >= "".concat(String(le).padStart(2, "0"), ":").concat(String(lem).padStart(2, "0"))) {
            slots.push(timeStr);
        }
        m += interval;
        if (m >= 60) {
            h += Math.floor(m / 60);
            m = m % 60;
        }
    }
    return slots;
}
function exportSlotsToCSV(slots) {
    if (!slots.length) return;
    const header = [
        "Date",
        "Time",
        "Candidate"
    ];
    const rows = slots.map((slot)=>[
            slot.date,
            slot.time,
            slot.candidate || ""
        ]);
    const csvContent = [
        header,
        ...rows
    ].map((row)=>row.map((field)=>'"'.concat(String(field).replace(/"/g, '""'), '"')).join(",")).join("\n");
    const blob = new Blob([
        csvContent
    ], {
        type: "text/csv;charset=utf-8;"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "interview_slots.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}
const statusOptions = [
    "pending",
    "confirmed",
    "completed",
    "cancelled"
];
const InterviewAppointment = ()=>{
    _s();
    const [slots, setSlots] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [dates, setDates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [startTime, setStartTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("09:00");
    const [endTime, setEndTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("17:00");
    const [interval, setInterval] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(30);
    const [lunchStart, setLunchStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("12:00");
    const [lunchEnd, setLunchEnd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("13:00");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [assigningSlotId, setAssigningSlotId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [candidateName, setCandidateName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editingStatusId, setEditingStatusId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [statusValue, setStatusValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("pending");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InterviewAppointment.useEffect": ()=>{
            const fetchSlots = {
                "InterviewAppointment.useEffect.fetchSlots": async ()=>{
                    setLoading(true);
                    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("appointments").select("id, date, time, candidate_name, status") // <-- add status here
                    .order("date", {
                        ascending: true
                    }).order("time", {
                        ascending: true
                    });
                    if (!error && data) {
                        setSlots(data.map({
                            "InterviewAppointment.useEffect.fetchSlots": (row)=>({
                                    id: row.id,
                                    date: row.date,
                                    time: row.time,
                                    candidate: row.candidate_name || "",
                                    status: row.status || ""
                                })
                        }["InterviewAppointment.useEffect.fetchSlots"]));
                    }
                    setLoading(false);
                }
            }["InterviewAppointment.useEffect.fetchSlots"];
            fetchSlots();
        }
    }["InterviewAppointment.useEffect"], []);
    // Bulk slot creation
    const handleBulkCreateSlots = async ()=>{
        if (dates.length === 0 || !startTime || !endTime || !interval) return;
        setLoading(true);
        const allSlots = [];
        for (const dateObj of dates){
            const dateStr = dateObj instanceof Date ? dateObj.toISOString().split("T")[0] : dateObj.format("YYYY-MM-DD"); // react-multi-date-picker returns objects with format()
            const times = getTimeSlots(startTime, endTime, interval, lunchStart, lunchEnd);
            for (const time of times){
                allSlots.push({
                    date: dateStr,
                    time,
                    candidate_name: ""
                });
            }
        }
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("appointments").insert(allSlots).select();
        if (!error && data) {
            setSlots((prev)=>[
                    ...prev,
                    ...data.map((row)=>({
                            id: row.id,
                            date: row.date,
                            time: row.time,
                            candidate: row.candidate_name || ""
                        }))
                ]);
        }
        setLoading(false);
    };
    // Assign candidate to slot
    const handleAssignCandidate = async (slotId)=>{
        if (!candidateName) return;
        setLoading(true);
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("appointments").update({
            candidate_name: candidateName
        }).eq("id", slotId);
        if (!error) {
            setSlots(slots.map((slot)=>slot.id === slotId ? {
                    ...slot,
                    candidate: candidateName
                } : slot));
            setCandidateName("");
            setAssigningSlotId(null);
        }
        setLoading(false);
    };
    // Update status handler
    const handleUpdateStatus = async (slotId, newStatus)=>{
        setLoading(true);
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("appointments").update({
            status: newStatus
        }).eq("id", slotId);
        if (!error) {
            setSlots(slots.map((slot)=>slot.id === slotId ? {
                    ...slot,
                    status: newStatus
                } : slot));
            setEditingStatusId(null);
        }
        setLoading(false);
    };
    // Delete slot
    const handleDeleteSlot = async (slotId)=>{
        setLoading(true);
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("appointments").delete().eq("id", slotId);
        if (!error) {
            setSlots(slots.filter((slot)=>slot.id !== slotId));
        }
        setLoading(false);
    };
    // Delete all slots
    const handleDeleteAllSlots = async ()=>{
        if (!slots.length) return;
        if (!window.confirm("Are you sure you want to delete ALL slots? This cannot be undone.")) return;
        setLoading(true);
        const ids = slots.map((slot)=>slot.id);
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("appointments").delete().in("id", ids);
        if (!error) {
            setSlots([]);
        }
        setLoading(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-8xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mb-6 flex items-center gap-2 text-gray-900",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                        className: "w-6 h-6 text-orange-500"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    "Interview Appointment System"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold mb-3 text-gray-900",
                        children: "Bulk Slot Setup"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-4 items-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-semibold mb-2 text-gray-900",
                                        children: "Select Dates"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                        lineNumber: 204,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-50 border border-gray-300 rounded-lg p-4 flex flex-col items-center shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$multi$2d$date$2d$picker$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                value: dates,
                                                onChange: setDates,
                                                multiple: true,
                                                format: "YYYY-MM-DD",
                                                minDate: new Date(),
                                                className: "orange",
                                                placeholder: "Click to select one or more dates",
                                                style: {
                                                    width: "100%",
                                                    fontSize: "1rem",
                                                    padding: "0.5rem",
                                                    borderRadius: "0.5rem",
                                                    border: "1px solid #e5e7eb",
                                                    background: "#fff",
                                                    color: "#1f2937"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                                lineNumber: 208,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 text-xs text-gray-500 text-center",
                                                children: [
                                                    "Hold",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold bg-gray-200 px-1 py-0.5 rounded",
                                                        children: "Ctrl"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " ",
                                                    "(Windows) or",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold bg-gray-200 px-1 py-0.5 rounded",
                                                        children: "Cmd"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " ",
                                                    "(Mac) to select multiple dates."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                                lineNumber: 226,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            dates.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 flex flex-wrap gap-2 justify-center",
                                                children: dates.map((dateObj, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-medium",
                                                        children: dateObj.format ? dateObj.format("YYYY-MM-DD") : String(dateObj)
                                                    }, idx, false, {
                                                        fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                                lineNumber: 238,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                        lineNumber: 207,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                lineNumber: 203,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-semibold mb-1 text-gray-900",
                                        children: "Start Time"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                        lineNumber: 252,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "time",
                                        value: startTime,
                                        onChange: (e)=>setStartTime(e.target.value),
                                        className: "border rounded-lg px-3 py-2 w-32 text-gray-900"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                        lineNumber: 253,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                lineNumber: 251,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-semibold mb-1 text-gray-900",
                                        children: "End Time"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                        lineNumber: 261,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "time",
                                        value: endTime,
                                        onChange: (e)=>setEndTime(e.target.value),
                                        className: "border rounded-lg px-3 py-2 w-32 text-gray-900"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                        lineNumber: 262,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                lineNumber: 260,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-semibold mb-1 text-gray-900",
                                        children: "Interval (minutes)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                        lineNumber: 270,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: 5,
                                        max: 120,
                                        value: interval,
                                        onChange: (e)=>setInterval(Number(e.target.value)),
                                        className: "border rounded-lg px-3 py-2 w-24 text-gray-900"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                        lineNumber: 271,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                lineNumber: 269,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-semibold mb-1 text-gray-900",
                                        children: "Lunch Start"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                        lineNumber: 281,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "time",
                                        value: lunchStart,
                                        onChange: (e)=>setLunchStart(e.target.value),
                                        className: "border rounded-lg px-3 py-2 w-32 text-gray-900"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                        lineNumber: 282,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                lineNumber: 280,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-semibold mb-1 text-gray-900",
                                        children: "Lunch End"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                        lineNumber: 290,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "time",
                                        value: lunchEnd,
                                        onChange: (e)=>setLunchEnd(e.target.value),
                                        className: "border rounded-lg px-3 py-2 w-32 text-gray-900"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                        lineNumber: 291,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                lineNumber: 289,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleBulkCreateSlots,
                                className: "bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition ".concat(loading ? "opacity-50 cursor-not-allowed" : ""),
                                disabled: loading,
                                children: loading ? "Processing..." : "Create Slots"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                lineNumber: 298,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end mb-4 gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>exportSlotsToCSV(slots),
                        className: "bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition disabled:opacity-50",
                        disabled: slots.length === 0,
                        title: "Export to CSV",
                        children: "Export to CSV"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                        lineNumber: 309,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleDeleteAllSlots,
                        className: "bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition disabled:opacity-50",
                        disabled: loading || slots.length === 0,
                        title: "Delete All Slots",
                        children: "Delete All Slots"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                        lineNumber: 317,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                lineNumber: 308,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold mb-3 text-gray-900",
                        children: "Available Slots"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                        lineNumber: 328,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 text-gray-500",
                        children: "Loading slots..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                        lineNumber: 330,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : slots.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 text-gray-500",
                        children: "No slots created yet."
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                        lineNumber: 332,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : // Group slots by date and show day of week
                    (()=>{
                        // Group slots by date
                        const slotsByDate = {};
                        slots.forEach((slot)=>{
                            if (!slotsByDate[slot.date]) slotsByDate[slot.date] = [];
                            slotsByDate[slot.date].push(slot);
                        });
                        // Sort dates ascending
                        const sortedDates = Object.keys(slotsByDate).sort((a, b)=>new Date(a).getTime() - new Date(b).getTime());
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: sortedDates.map((date)=>{
                                const dayName = new Date(date).toLocaleDateString(undefined, {
                                    weekday: 'long'
                                });
                                const formattedDate = new Date(date).toLocaleDateString(undefined, {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric'
                                }); // e.g. 17 July 2025
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-bold text-orange-600 text-lg mb-2",
                                            children: [
                                                dayName,
                                                ":",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-2 text-gray-900 font-normal",
                                                    children: formattedDate
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                                    lineNumber: 357,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                            lineNumber: 355,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "divide-y divide-gray-200 text-gray-900",
                                            children: slotsByDate[date].map((slot)=>{
                                                const isAssigning = assigningSlotId === slot.id;
                                                const isEditingStatus = editingStatusId === slot.id;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "relative py-3 flex items-center justify-between cursor-pointer transition-colors duration-200\n                                ".concat(slot.candidate ? "bg-orange-50" : isAssigning ? "bg-blue-100 border-blue-400 border" : "hover:bg-gray-50", "\n                              "),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                    className: "w-5 h-5 text-orange-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                                                    lineNumber: 375,
                                                                    columnNumber: 33
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium",
                                                                    children: slot.time
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                                                    lineNumber: 376,
                                                                    columnNumber: 33
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                slot.candidate ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-green-600 font-semibold flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                                                            lineNumber: 381,
                                                                            columnNumber: 37
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        " ",
                                                                        slot.candidate
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                                                    lineNumber: 380,
                                                                    columnNumber: 35
                                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-500",
                                                                    children: "Unassigned"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                                                    lineNumber: 384,
                                                                    columnNumber: 35
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                                            lineNumber: 374,
                                                            columnNumber: 31
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2 items-center",
                                                            children: [
                                                                !slot.candidate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "flex items-center gap-1 font-semibold px-2 py-1 rounded transition\n                                      ".concat(isAssigning ? "bg-blue-600 text-white" : "text-blue-600 hover:bg-blue-100 hover:text-blue-800", "\n                                    "),
                                                                    onClick: ()=>setAssigningSlotId(slot.id),
                                                                    title: "Assign Candidate",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                                                            lineNumber: 399,
                                                                            columnNumber: 37
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        " Assign"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                                                    lineNumber: 390,
                                                                    columnNumber: 35
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                slot.candidate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "flex items-center justify-center px-2 py-1 rounded text-blue-600 hover:text-blue-800 hover:bg-blue-100",
                                                                    onClick: ()=>{
                                                                        setAssigningSlotId(slot.id);
                                                                        setCandidateName(slot.candidate);
                                                                    },
                                                                    title: "Edit/Reassign Candidate",
                                                                    "aria-label": "Edit",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                        className: "w-5 h-5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                                                        lineNumber: 413,
                                                                        columnNumber: 37
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                                                    lineNumber: 404,
                                                                    columnNumber: 35
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                isEditingStatus ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                            className: "px-2 py-1 rounded text-xs font-semibold bg-gray-200 text-gray-700 min-w-[90px]",
                                                                            value: statusValue,
                                                                            onChange: (e)=>setStatusValue(e.target.value),
                                                                            disabled: loading,
                                                                            children: statusOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: opt,
                                                                                    children: opt.charAt(0).toUpperCase() + opt.slice(1)
                                                                                }, opt, false, {
                                                                                    fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                                                                    lineNumber: 426,
                                                                                    columnNumber: 41
                                                                                }, ("TURBOPACK compile-time value", void 0)))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                                                            lineNumber: 419,
                                                                            columnNumber: 37
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            className: "ml-1 px-2 py-1 rounded bg-green-500 text-white text-xs font-semibold hover:bg-green-600",
                                                                            onClick: ()=>handleUpdateStatus(slot.id, statusValue),
                                                                            disabled: loading,
                                                                            children: "Save"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                                                            lineNumber: 429,
                                                                            columnNumber: 37
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            className: "ml-1 px-2 py-1 rounded bg-gray-300 text-gray-700 text-xs font-semibold hover:bg-gray-400",
                                                                            onClick: ()=>setEditingStatusId(null),
                                                                            disabled: loading,
                                                                            children: "Cancel"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                                                            lineNumber: 436,
                                                                            columnNumber: 37
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                                                    lineNumber: 418,
                                                                    columnNumber: 35
                                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "flex items-center justify-center px-2 py-1 rounded text-xs font-semibold bg-gray-200 text-gray-700 min-w-[90px] text-center hover:bg-gray-300",
                                                                    style: {
                                                                        height: "32px"
                                                                    },
                                                                    onClick: ()=>{
                                                                        setEditingStatusId(slot.id);
                                                                        setStatusValue(slot.status || "pending");
                                                                    },
                                                                    title: "Edit Status",
                                                                    children: slot.status ? slot.status.charAt(0).toUpperCase() + slot.status.slice(1) : "pending"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                                                    lineNumber: 445,
                                                                    columnNumber: 35
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "flex items-center justify-center px-2 py-1 rounded text-red-600 hover:text-red-800 hover:bg-red-100",
                                                                    onClick: ()=>{
                                                                        if (window.confirm("Are you sure you want to delete this slot?")) {
                                                                            handleDeleteSlot(slot.id);
                                                                        }
                                                                    },
                                                                    title: "Delete Slot",
                                                                    "aria-label": "Delete",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                        className: "w-5 h-5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                                                        lineNumber: 468,
                                                                        columnNumber: 35
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                                                    lineNumber: 458,
                                                                    columnNumber: 33
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                                            lineNumber: 387,
                                                            columnNumber: 31
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        isAssigning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center z-10 rounded-lg",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-white bg-opacity-90 p-6 rounded-lg shadow-lg flex gap-2 items-center",
                                                                onKeyDown: (e)=>{
                                                                    if (e.key === "Enter" && candidateName && !loading) {
                                                                        handleAssignCandidate(slot.id);
                                                                    }
                                                                    if (e.key === "Escape") {
                                                                        setAssigningSlotId(null);
                                                                        setCandidateName("");
                                                                    }
                                                                },
                                                                tabIndex: 0,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        className: "border rounded-lg px-3 py-2 w-48 text-gray-900",
                                                                        placeholder: "Candidate Name",
                                                                        value: candidateName,
                                                                        onChange: (e)=>setCandidateName(e.target.value),
                                                                        disabled: loading,
                                                                        autoFocus: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                                                        lineNumber: 487,
                                                                        columnNumber: 37
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handleAssignCandidate(slot.id),
                                                                        className: "bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition ".concat(loading || !candidateName ? "opacity-50 cursor-not-allowed" : ""),
                                                                        disabled: loading || !candidateName,
                                                                        children: "Assign"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                                                        lineNumber: 496,
                                                                        columnNumber: 37
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>{
                                                                            setAssigningSlotId(null);
                                                                            setCandidateName("");
                                                                        },
                                                                        className: "bg-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-400 transition",
                                                                        disabled: loading,
                                                                        children: "Cancel"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                                                        lineNumber: 503,
                                                                        columnNumber: 37
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                                                lineNumber: 474,
                                                                columnNumber: 35
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                                            lineNumber: 473,
                                                            columnNumber: 33
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, slot.id, true, {
                                                    fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                                    lineNumber: 364,
                                                    columnNumber: 29
                                                }, ("TURBOPACK compile-time value", void 0));
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                            lineNumber: 359,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, date, true, {
                                    fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                                    lineNumber: 354,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                            lineNumber: 345,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0));
                    })()
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
                lineNumber: 327,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx",
        lineNumber: 194,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(InterviewAppointment, "bd9JRBVkbkSz2+1/l5TUKeRSz1Q=");
_c = InterviewAppointment;
const __TURBOPACK__default__export__ = InterviewAppointment;
var _c;
__turbopack_context__.k.register(_c, "InterviewAppointment");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/admin-dashboard/careers/InterviewAppointment/page.tsx [app-client] (ecmascript)"));
}),
}]);

//# sourceMappingURL=src_app_admin-dashboard_careers_InterviewAppointment_page_tsx_6a392c7b._.js.map
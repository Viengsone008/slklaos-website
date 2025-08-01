module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/contexts/LanguageContext.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "LanguageProvider": ()=>LanguageProvider,
    "default": ()=>__TURBOPACK__default__export__,
    "languages": ()=>languages,
    "useLanguage": ()=>useLanguage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const languages = [
    {
        code: 'en',
        label: 'English',
        flag: '🇺🇸',
        nativeName: 'English',
        name: 'English'
    },
    {
        code: 'de',
        label: 'Deutsch',
        flag: '🇩🇪',
        nativeName: 'Deutsch',
        name: 'German'
    },
    {
        code: 'vi',
        label: 'Tiếng Việt',
        flag: '🇻🇳',
        nativeName: 'Tiếng Việt',
        name: 'Vietnamese'
    },
    {
        code: 'lo',
        label: 'Lao',
        flag: '🇱🇦',
        nativeName: 'ລາວ',
        name: 'Lao'
    },
    {
        code: 'th',
        label: 'ไทย',
        flag: '🇹🇭',
        nativeName: 'ไทย',
        name: 'Thai'
    },
    {
        code: 'hu',
        label: 'Magyar',
        flag: '🇭🇺',
        nativeName: 'Magyar',
        name: 'Hungarian'
    },
    {
        code: 'it',
        label: 'Italiano',
        flag: '🇮🇹',
        nativeName: 'Italiano',
        name: 'Italian'
    }
];
const GOOGLE_TRANSLATE_URL = 'https://translation.googleapis.com/language/translate/v2';
const GOOGLE_API_KEY = 'AIzaSyCBgu7_wcOokxRxrwle59tbJHw-2oxBHKQ';
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useLanguage = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
const LanguageProvider = ({ children })=>{
    const [currentLanguage, setCurrentLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('en');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dynamicTranslations, setDynamicTranslations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [isTranslating, setIsTranslating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Client-side hydration check
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsClient(true);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isClient) return;
        const initializeLanguage = ()=>{
            try {
                // Load saved language preference from localStorage
                const savedLanguage = localStorage.getItem('slk_language');
                if (savedLanguage && languages.some((lang)=>lang.code === savedLanguage)) {
                    setCurrentLanguage(savedLanguage);
                } else {
                    // Try to detect browser language
                    const browserLang = navigator.language.split('-')[0];
                    if (languages.some((lang)=>lang.code === browserLang)) {
                        setCurrentLanguage(browserLang);
                    }
                }
            } catch (error) {
                console.warn('Failed to load language preference:', error);
                // Fallback to English
                setCurrentLanguage('en');
            } finally{
                setIsLoading(false);
            }
        };
        // Small delay to ensure proper hydration
        const timer = setTimeout(initializeLanguage, 100);
        return ()=>clearTimeout(timer);
    }, [
        isClient
    ]);
    const setLanguage = (language)=>{
        if (!languages.some((lang)=>lang.code === language)) {
            console.warn(`Language ${language} is not supported`);
            return;
        }
        setCurrentLanguage(language);
        if (isClient) {
            try {
                localStorage.setItem('slk_language', language);
            } catch (error) {
                console.warn('Failed to save language preference:', error);
            }
        }
    };
    // Main translation function: always use dynamic translation (Google API), fallback to key
    const t = (text)=>{
        if (!text) return '';
        if (currentLanguage === 'en') return text;
        if (dynamicTranslations[text]) return dynamicTranslations[text];
        return text;
    };
    // Auto-translate all visible strings and cache them
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isClient || currentLanguage === 'en') return;
        setIsTranslating(true);
        console.log('[i18n] Attempting translation for language:', currentLanguage);
        // Find all visible strings in the DOM
        const elements = Array.from(document.querySelectorAll('[data-i18n]'));
        const texts = Array.from(new Set(elements.map((el)=>el.getAttribute('data-i18n') || '').filter(Boolean)));
        const toTranslate = texts.filter((t)=>!dynamicTranslations[t]);
        if (toTranslate.length === 0) {
            setIsTranslating(false);
            return;
        }
        const fetchTranslations = async ()=>{
            const newTranslations = {
                ...dynamicTranslations
            };
            for (const text of toTranslate){
                try {
                    const cacheKey = `slk_dyntrans_${currentLanguage}_${text}`;
                    const cached = localStorage.getItem(cacheKey);
                    if (cached) {
                        newTranslations[text] = cached;
                        continue;
                    }
                    console.log(`[i18n] Translating "${text}" to ${currentLanguage}`);
                    const res = await fetch(`${GOOGLE_TRANSLATE_URL}?key=${GOOGLE_API_KEY}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            q: text,
                            source: 'en',
                            target: currentLanguage
                        })
                    });
                    const data = await res.json();
                    console.log('[i18n] API response:', data);
                    const translated = data?.data?.translations?.[0]?.translatedText;
                    if (translated) {
                        newTranslations[text] = translated;
                        localStorage.setItem(cacheKey, translated);
                    } else {
                        console.warn('Google Translate API did not return a translation:', data);
                    }
                } catch (e) {
                    console.error('Translation API error:', e);
                }
            }
            setDynamicTranslations(newTranslations);
            setIsTranslating(false);
        };
        fetchTranslations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        currentLanguage,
        isClient
    ]);
    const value = {
        currentLanguage,
        setLanguage,
        t,
        languages,
        isLoading
    };
    // Don't render children until client-side hydration is complete
    if (!isClient || isLoading || isTranslating) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/src/contexts/LanguageContext.tsx",
                        lineNumber: 178,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: isTranslating ? 'Translating...' : 'Loading Language Settings...'
                    }, void 0, false, {
                        fileName: "[project]/src/contexts/LanguageContext.tsx",
                        lineNumber: 179,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/contexts/LanguageContext.tsx",
                lineNumber: 177,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/contexts/LanguageContext.tsx",
            lineNumber: 176,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/LanguageContext.tsx",
        lineNumber: 186,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = LanguageProvider;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/punycode [external] (punycode, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[externals]/net [external] (net, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}}),
"[externals]/tls [external] (tls, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/buffer [external] (buffer, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}}),
"[project]/src/lib/supabase.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "dbHelpers": ()=>dbHelpers,
    "subscriptions": ()=>subscriptions,
    "supabase": ()=>supabase
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-ssr] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://qawxuytlwqmsomsqlrsc.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhd3h1eXRsd3Ftc29tc3FscnNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA1ODgwODUsImV4cCI6MjA2NjE2NDA4NX0.brr4vdeM-DZl4jfOIrRxVhtBS8d5Wjpl7tC-n3F1Cos");
// Debug logging to help identify the issue
console.log('🔍 Supabase Environment Check:', {
    url: ("TURBOPACK compile-time truthy", 1) ? '✅ Present' : "TURBOPACK unreachable",
    key: ("TURBOPACK compile-time truthy", 1) ? '✅ Present' : "TURBOPACK unreachable",
    urlValue: ("TURBOPACK compile-time truthy", 1) ? `${supabaseUrl.substring(0, 20)}...` : "TURBOPACK unreachable",
    keyValue: ("TURBOPACK compile-time truthy", 1) ? `${supabaseAnonKey.substring(0, 20)}...` : "TURBOPACK unreachable"
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey, {
    auth: {
        persistSession: true,
        autoRefreshToken: true
    },
    // Add global performance options for better international access
    global: {
        // Increase timeout for international connections
        fetch: (url, options)=>{
            return fetch(url, {
                ...options,
                // Increase timeout to 30 seconds for slow international connections
                signal: options?.signal || (AbortSignal.timeout ? AbortSignal.timeout(30000) : undefined)
            });
        }
    },
    // Add database performance options
    db: {
        // Reduce schema caching time for better performance
        schema: 'public',
        // Disable automatic schema fetching to reduce initial load time
        autoRefreshToken: false
    },
    // Add realtime performance options
    realtime: {
        // Increase timeout for realtime connections
        timeout: 30000,
        // Increase heartbeat interval to reduce network traffic
        heartbeatIntervalMs: 15000
    }
});
// Test the connection
supabase.from('settings').select('count').limit(1).then(({ data, error })=>{
    if (error) {
        console.warn('⚠️ Supabase connection test failed:', error.message);
    } else {
        console.log('✅ Supabase connection successful');
    }
}).catch((err)=>{
    console.warn('⚠️ Supabase connection test error:', err.message);
});
const dbHelpers = {
    // Users
    async getUsers () {
        try {
            const { data, error } = await supabase.from('users').select('*').order('created_at', {
                ascending: false
            })// Add caching for better performance
            .abortSignal(AbortSignal.timeout(15000));
            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('❌ Error fetching users:', error);
            return [];
        }
    },
    async createUser (userData) {
        try {
            const { data, error } = await supabase.from('users').insert([
                userData
            ]).select().single();
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('❌ Error creating user:', error);
            throw error;
        }
    },
    async updateUser (id, userData) {
        try {
            const { data, error } = await supabase.from('users').update({
                ...userData,
                updated_at: new Date().toISOString()
            }).eq('id', id).select().single();
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('❌ Error updating user:', error);
            throw error;
        }
    },
    async deleteUser (id) {
        try {
            const { error } = await supabase.from('users').delete().eq('id', id);
            if (error) throw error;
        } catch (error) {
            console.error('❌ Error deleting user:', error);
            throw error;
        }
    },
    // Projects - with performance optimizations
    async getProjects () {
        try {
            // Use a more efficient query with fewer joins
            const { data, error } = await supabase.from('projects').select(`
          id, name, description, status, start_date, end_date, 
          budget, spent, progress, location, client_name,
          manager:manager_id(id, name, email)
        `).order('created_at', {
                ascending: false
            })// Add timeout for better international performance
            .abortSignal(AbortSignal.timeout(15000));
            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('❌ Error fetching projects:', error);
            return [];
        }
    },
    async createProject (projectData) {
        try {
            const { data: { session }, error: sessionError } = await supabase.auth.getSession();
            if (sessionError) throw sessionError;
            if (!session || !session.user) throw new Error("User not authenticated");
            const finalProjectData = {
                ...projectData,
                user_id: session.user.id // ✅ Required for RLS
            };
            const { data, error } = await supabase.from('projects').insert([
                finalProjectData
            ]).select().single();
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('❌ Error creating project:', error);
            throw error;
        }
    },
    async updateProject (id, projectData) {
        try {
            const { data, error } = await supabase.from('projects').update({
                ...projectData,
                updated_at: new Date().toISOString()
            }).eq('id', id).select().single();
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('❌ Error updating project:', error);
            throw error;
        }
    },
    // Tasks - with performance optimizations
    async getTasks (projectId) {
        try {
            // Use a more efficient query with fewer joins and fields
            let query = supabase.from('tasks').select(`
          id, title, description, status, priority, due_date,
          assigned_user:assigned_to(id, name),
          project:project_id(id, name)
        `).order('created_at', {
                ascending: false
            })// Add timeout for better international performance
            .abortSignal(AbortSignal.timeout(15000));
            if (projectId) {
                query = query.eq('project_id', projectId);
            }
            const { data, error } = await query;
            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('❌ Error fetching tasks:', error);
            return [];
        }
    },
    async createTask (taskData) {
        try {
            const { data, error } = await supabase.from('tasks').insert([
                taskData
            ]).select().single();
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('❌ Error creating task:', error);
            throw error;
        }
    },
    async updateTask (id, taskData) {
        try {
            const { data, error } = await supabase.from('tasks').update({
                ...taskData,
                updated_at: new Date().toISOString()
            }).eq('id', id).select().single();
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('❌ Error updating task:', error);
            throw error;
        }
    },
    async deleteContact (id) {
        try {
            const { error } = await supabase.from('contacts').delete().eq('id', id);
            if (error) throw error;
        } catch (error) {
            console.error('❌ Error deleting contact:', error);
            throw error;
        }
    },
    async deleteQuote (id) {
        try {
            const { error } = await supabase.from('quotes').delete().eq('id', id);
            if (error) throw error;
        } catch (error) {
            console.error('❌ Error deleting Quote:', error);
            throw error;
        }
    },
    // Materials - with performance optimizations
    async getMaterials () {
        try {
            const { data, error } = await supabase.from('materials').select('*').order('name', {
                ascending: true
            })// Add timeout for better international performance
            .abortSignal(AbortSignal.timeout(15000));
            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('❌ Error fetching materials:', error);
            return [];
        }
    },
    async createMaterial (materialData) {
        try {
            const { data, error } = await supabase.from('materials').insert([
                materialData
            ]).select().single();
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('❌ Error creating material:', error);
            throw error;
        }
    },
    async updateMaterial (id, materialData) {
        try {
            const { data, error } = await supabase.from('materials').update({
                ...materialData,
                updated_at: new Date().toISOString()
            }).eq('id', id).select().single();
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('❌ Error updating material:', error);
            throw error;
        }
    },
    // Documents - with performance optimizations
    async getDocuments () {
        try {
            // Use a more efficient query with fewer joins and fields
            const { data, error } = await supabase.from('documents').select(`
          id, title, description, type, category, file_url, 
          status, is_confidential, version, tags,
          uploaded_user:uploaded_by(name),
          project:project_id(name)
        `).order('created_at', {
                ascending: false
            })// Add timeout for better international performance
            .abortSignal(AbortSignal.timeout(15000));
            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('❌ Error fetching documents:', error);
            return [];
        }
    },
    async createDocument (documentData) {
        try {
            console.log('📄 Creating document with data:', documentData);
            // Ensure we have the current user's session
            const { data: { session }, error: sessionError } = await supabase.auth.getSession();
            if (sessionError) {
                console.error('❌ Session error:', sessionError);
                throw new Error('Authentication required to create documents');
            }
            if (!session) {
                throw new Error('User must be logged in to create documents');
            }
            console.log('✅ User session found:', session.user.id);
            // Ensure uploaded_by is set to current user
            const finalDocumentData = {
                ...documentData,
                uploaded_by: session.user.id
            };
            console.log('📄 Final document data:', finalDocumentData);
            const { data, error } = await supabase.from('documents').insert([
                finalDocumentData
            ]).select().single();
            if (error) {
                console.error('❌ Document creation error:', error);
                throw error;
            }
            console.log('✅ Document created successfully:', data);
            return data;
        } catch (error) {
            console.error('❌ Error creating document:', error);
            throw error;
        }
    },
    async updateDocument (id, documentData) {
        try {
            const { data, error } = await supabase.from('documents').update({
                ...documentData,
                updated_at: new Date().toISOString()
            }).eq('id', id).select().single();
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('❌ Error updating document:', error);
            throw error;
        }
    },
    // Contacts - with performance optimizations
    async getContacts () {
        try {
            // Use a more efficient query with fewer joins and fields
            const { data, error } = await supabase.from('contacts').select(`
          id, name, email, phone, company, service, subject, message,
          status, priority, source, lead_score, created_at,
          assigned_user:assigned_to(id, name)
        `).order('created_at', {
                ascending: false
            })// Add timeout for better international performance
            .abortSignal(AbortSignal.timeout(15000));
            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('❌ Error fetching contacts:', error);
            return [];
        }
    },
    async createContact (contactData) {
        try {
            const { data, error } = await supabase.from('contacts').insert([
                contactData
            ]).select().single();
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('❌ Error creating contact:', error);
            throw error;
        }
    },
    async updateContact (id, contactData) {
        try {
            const sanitizedData = sanitizeContactData(contactData);
            const { data, error } = await supabase.from('contacts').update({
                ...sanitizedData,
                updated_at: new Date().toISOString()
            }).eq('id', id).select().single();
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('❌ Error updating contact:', error);
            throw error;
        }
    },
    // Quotes - with performance optimizations
    async getQuotes () {
        try {
            // Use a more efficient query with fewer joins and fields
            const { data, error } = await supabase.from('quotes').select(`
          id, name, email, phone, company, project_type, budget_range,
          status, priority, source, estimated_value, created_at, project_details, customer_profile, 
          assigned_user:assigned_to(id, name)
        `).order('created_at', {
                ascending: false
            })// Add timeout for better international performance
            .abortSignal(AbortSignal.timeout(15000));
            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('❌ Error fetching quotes:', error);
            return [];
        }
    },
    async createQuote (quoteData) {
        try {
            console.log('🔍 Creating quote with data:', quoteData);
            const { data, error } = await supabase.from('quotes').insert([
                quoteData
            ]).select().single();
            if (error) {
                console.error('❌ Error creating quote:', error);
                throw error;
            }
            console.log('✅ Quote created successfully:', data);
            return data;
        } catch (error) {
            console.error('❌ Error creating quote:', error);
            throw error;
        }
    },
    async createQuote (quoteData) {
        console.log('📦 Received quoteData in dbHelpers:', quoteData);
        const { data, error } = await supabase.from('quotes').insert([
            quoteData
        ]).select().single();
        if (error) {
            console.error('❌ Supabase insert error:', error.message, error.details);
            throw error;
        }
        return data;
    },
    async updateQuote (id, quoteData) {
        try {
            const { data, error } = await supabase.from('quotes').update({
                ...quoteData,
                updated_at: new Date().toISOString()
            }).eq('id', id).select().single();
            console.log('🟢 updateQuote response:', {
                data,
                error
            });
            if (error) throw error;
            if (!data) throw new Error('No quote updated. Check if the ID exists and payload is valid.');
            return data;
        } catch (error) {
            console.error('❌ Error updating quote:', error);
            throw error;
        }
    },
    // Newsletter Subscribers - with performance optimizations
    async getNewsletterSubscribers () {
        try {
            const { data, error } = await supabase.from('newsletter_subscribers').select('*').order('created_at', {
                ascending: false
            })// Add timeout for better international performance
            .abortSignal(AbortSignal.timeout(15000));
            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('❌ Error fetching newsletter subscribers:', error);
            return [];
        }
    },
    async createNewsletterSubscriber (subscriberData) {
        try {
            const { data, error } = await supabase.from('newsletter_subscribers').insert([
                subscriberData
            ]).select().single();
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('❌ Error creating newsletter subscriber:', error);
            throw error;
        }
    },
    async updateNewsletterSubscriber (id, subscriberData) {
        try {
            const { data, error } = await supabase.from('newsletter_subscribers').update({
                ...subscriberData,
                updated_at: new Date().toISOString()
            }).eq('id', id).select().single();
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('❌ Error updating newsletter subscriber:', error);
            throw error;
        }
    },
    async deleteNewsletterSubscriber (id) {
        try {
            const { error } = await supabase.from('newsletter_subscribers').delete().eq('id', id);
            if (error) throw error;
        } catch (error) {
            console.error('❌ Error deleting newsletter subscriber:', error);
            throw error;
        }
    },
    // Posts - with performance optimizations
    async getPosts () {
        try {
            const { data, error } = await supabase.from('posts').select('*').order('created_at', {
                ascending: false
            })// Add timeout for better international performance
            .abortSignal(AbortSignal.timeout(15000));
            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('❌ Error fetching posts:', error);
            return [];
        }
    },
    async getPublishedPosts () {
        try {
            const { data, error } = await supabase.from('posts').select('*').eq('status', 'published').order('published_at', {
                ascending: false
            })// Add timeout for better international performance
            .abortSignal(AbortSignal.timeout(15000));
            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('❌ Error fetching published posts:', error);
            return [];
        }
    },
    async createPost (postData) {
        try {
            const { data, error } = await supabase.from('posts').insert([
                postData
            ]).select().single();
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('❌ Error creating post:', error);
            throw error;
        }
    },
    async updatePost (id, postData) {
        try {
            const { data, error } = await supabase.from('posts').update({
                ...postData,
                updated_at: new Date().toISOString()
            }).eq('id', id).select().single();
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('❌ Error updating post:', error);
            throw error;
        }
    },
    async deletePost (id) {
        try {
            const { error } = await supabase.from('posts').delete().eq('id', id);
            if (error) throw error;
        } catch (error) {
            console.error('❌ Error deleting post:', error);
            throw error;
        }
    },
    // Settings - with performance optimizations
    async getSettings () {
        try {
            const { data, error } = await supabase.from('settings').select('*').order('category', {
                ascending: true
            })// Add caching for better performance
            .maybeSingle().abortSignal(AbortSignal.timeout(15000));
            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('❌ Error fetching settings:', error);
            return [];
        }
    },
    async getPublicSettings () {
        try {
            const { data, error } = await supabase.from('settings').select('*').eq('is_public', true)// Add caching for better performance
            .maybeSingle().abortSignal(AbortSignal.timeout(15000));
            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('❌ Error fetching public settings:', error);
            return [];
        }
    },
    async updateSetting (key, value) {
        try {
            const { data, error } = await supabase.from('settings').upsert({
                key,
                value,
                updated_at: new Date().toISOString()
            }).select().single();
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('❌ Error updating setting:', error);
            throw error;
        }
    },
    // Dashboard statistics - with performance optimizations
    async getDashboardStats () {
        try {
            // Use a more efficient approach with fewer queries
            const { data: statsData, error: statsError } = await supabase.rpc('get_dashboard_stats').maybeSingle().abortSignal(AbortSignal.timeout(15000));
            if (statsError) {
                console.error('❌ Error fetching dashboard stats via RPC:', statsError);
                // Fallback to manual counting if RPC fails
                const [{ count: totalProjects }, { count: activeProjects }, { count: totalTasks }, { count: completedTasks }, { count: totalContacts }, { count: newContacts }, { count: totalQuotes }, { count: pendingQuotes }] = await Promise.all([
                    supabase.from('projects').select('*', {
                        count: 'exact',
                        head: true
                    }),
                    supabase.from('projects').select('*', {
                        count: 'exact',
                        head: true
                    }).eq('status', 'in_progress'),
                    supabase.from('tasks').select('*', {
                        count: 'exact',
                        head: true
                    }),
                    supabase.from('tasks').select('*', {
                        count: 'exact',
                        head: true
                    }).eq('status', 'completed'),
                    supabase.from('contacts').select('*', {
                        count: 'exact',
                        head: true
                    }),
                    supabase.from('contacts').select('*', {
                        count: 'exact',
                        head: true
                    }).eq('status', 'new'),
                    supabase.from('quotes').select('*', {
                        count: 'exact',
                        head: true
                    }),
                    supabase.from('quotes').select('*', {
                        count: 'exact',
                        head: true
                    }).eq('status', 'new')
                ]);
                return {
                    totalProjects: totalProjects || 0,
                    activeProjects: activeProjects || 0,
                    totalTasks: totalTasks || 0,
                    completedTasks: completedTasks || 0,
                    totalContacts: totalContacts || 0,
                    newContacts: newContacts || 0,
                    totalQuotes: totalQuotes || 0,
                    pendingQuotes: pendingQuotes || 0
                };
            }
            return statsData || {
                totalProjects: 0,
                activeProjects: 0,
                totalTasks: 0,
                completedTasks: 0,
                totalContacts: 0,
                newContacts: 0,
                totalQuotes: 0,
                pendingQuotes: 0
            };
        } catch (error) {
            console.error('❌ Error fetching dashboard stats:', error);
            return {
                totalProjects: 0,
                activeProjects: 0,
                totalTasks: 0,
                completedTasks: 0,
                totalContacts: 0,
                newContacts: 0,
                totalQuotes: 0,
                pendingQuotes: 0
            };
        }
    }
};
const subscriptions = {
    subscribeToProjects (callback, channelName = 'projects') {
        try {
            return supabase.channel(channelName).on('postgres_changes', {
                event: '*',
                schema: 'public',
                table: 'projects'
            }, callback).subscribe((status)=>{
                if (status !== 'SUBSCRIBED') {
                    console.warn(`⚠️ Project subscription status: ${status}`);
                }
            });
        } catch (error) {
            console.error('❌ Error subscribing to projects:', error);
            return null;
        }
    },
    subscribeToTasks (callback, channelName = 'tasks') {
        try {
            return supabase.channel(channelName).on('postgres_changes', {
                event: '*',
                schema: 'public',
                table: 'tasks'
            }, callback).subscribe((status)=>{
                if (status !== 'SUBSCRIBED') {
                    console.warn(`⚠️ Tasks subscription status: ${status}`);
                }
            });
        } catch (error) {
            console.error('❌ Error subscribing to tasks:', error);
            return null;
        }
    },
    subscribeToContacts (callback, channelName = 'contacts') {
        try {
            return supabase.channel(channelName).on('postgres_changes', {
                event: '*',
                schema: 'public',
                table: 'contacts'
            }, callback).subscribe((status)=>{
                if (status !== 'SUBSCRIBED') {
                    console.warn(`⚠️ Contacts subscription status: ${status}`);
                }
            });
        } catch (error) {
            console.error('❌ Error subscribing to contacts:', error);
            return null;
        }
    },
    subscribeToQuotes (callback, channelName = 'quotes') {
        try {
            return supabase.channel(channelName).on('postgres_changes', {
                event: '*',
                schema: 'public',
                table: 'quotes'
            }, callback).subscribe((status)=>{
                if (status !== 'SUBSCRIBED') {
                    console.warn(`⚠️ Quotes subscription status: ${status}`);
                }
            });
        } catch (error) {
            console.error('❌ Error subscribing to quotes:', error);
            return null;
        }
    }
};
function sanitizeContactData(contactData) {
    const sanitized = {
        ...contactData
    };
    // Convert empty string date fields to null
    [
        'created_at',
        'updated_at',
        'follow_up_date'
    ].forEach((field)=>{
        if (sanitized[field] === '') sanitized[field] = null;
    });
    // Convert empty string numbers to null
    [
        'lead_score',
        'estimated_value',
        'conversion_probability'
    ].forEach((field)=>{
        if (sanitized[field] === '') sanitized[field] = null;
        else if (typeof sanitized[field] === 'string' && sanitized[field] !== null) {
            const num = Number(sanitized[field]);
            sanitized[field] = isNaN(num) ? null : num;
        }
    });
    return sanitized;
}
}),
"[project]/src/contexts/AuthContext.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "AuthProvider": ()=>AuthProvider,
    "default": ()=>__TURBOPACK__default__export__,
    "useAuth": ()=>useAuth
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useAuth = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
const AuthProvider = ({ children })=>{
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // Load user from Supabase session on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const getSession = async ()=>{
            const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getSession();
            if (data.session && data.session.user) {
                const supaUser = data.session.user;
                setUser({
                    id: supaUser.id,
                    email: supaUser.email ?? "",
                    name: supaUser.user_metadata?.name ?? "",
                    role: supaUser.user_metadata?.role ?? "employee",
                    loginType: supaUser.user_metadata?.login_type ?? "employee",
                    department: supaUser.user_metadata?.department,
                    position: supaUser.user_metadata?.position,
                    permissions: supaUser.user_metadata?.permissions ?? []
                });
            } else {
                setUser(null);
            }
            setIsLoading(false);
        };
        getSession();
        // Listen for auth state changes
        const { data: listener } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.onAuthStateChange((_event, session)=>{
            if (session && session.user) {
                const supaUser = session.user;
                setUser({
                    id: supaUser.id,
                    email: supaUser.email ?? "",
                    name: supaUser.user_metadata?.name ?? "",
                    role: supaUser.user_metadata?.role ?? "employee",
                    loginType: supaUser.user_metadata?.login_type ?? "employee",
                    department: supaUser.user_metadata?.department,
                    position: supaUser.user_metadata?.position,
                    permissions: supaUser.user_metadata?.permissions ?? []
                });
            } else {
                setUser(null);
            }
        });
        return ()=>{
            listener?.subscription.unsubscribe();
        };
    }, []);
    // Login function using Supabase Auth
    const login = async (email, password, loginType)=>{
        setIsLoading(true);
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.signInWithPassword({
            email,
            password
        });
        setIsLoading(false);
        if (error || !data.user) return false;
        // Optionally check loginType in user_metadata
        const userLoginType = data.user.user_metadata?.login_type;
        if (userLoginType !== loginType) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
            setUser(null);
            return false;
        }
        setUser({
            id: data.user.id,
            email: data.user.email ?? "",
            name: data.user.user_metadata?.name ?? "",
            role: data.user.user_metadata?.role ?? "employee",
            loginType: data.user.user_metadata?.login_type ?? "employee",
            department: data.user.user_metadata?.department,
            position: data.user.user_metadata?.position,
            permissions: data.user.user_metadata?.permissions ?? []
        });
        return true;
    };
    // Logout function
    const logout = async ()=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
        setUser(null);
        router.push('/admin-login');
    };
    const value = {
        user,
        login,
        logout,
        isAuthenticated: !!user,
        isLoading
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/AuthContext.tsx",
        lineNumber: 142,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = AuthProvider;
}),
"[project]/src/contexts/DatabaseContext.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ConnectionStatus": ()=>ConnectionStatus,
    "DatabaseProvider": ()=>DatabaseProvider,
    "default": ()=>__TURBOPACK__default__export__,
    "useDatabase": ()=>useDatabase
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const DatabaseContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useDatabase = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(DatabaseContext);
    if (context === undefined) {
        throw new Error('useDatabase must be used within a DatabaseProvider');
    }
    return context;
};
// Enhanced helper functions
const isValidUUID = (uuid)=>{
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(uuid);
};
const sanitizeUUIDField = (value)=>{
    if (!value) return null;
    if (typeof value === 'string' && isValidUUID(value)) {
        return value;
    }
    return null;
};
const getCurrentUserId = async ()=>{
    try {
        const { data: { user } } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
        return user?.id || null;
    } catch (error) {
        console.warn('Could not get current user:', error);
        return null;
    }
};
// Cache configuration
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
const MAX_RETRY_ATTEMPTS = 3;
const RETRY_DELAY = 5000; // 5 seconds
const DatabaseProvider = ({ children })=>{
    // State management
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isOnline, setIsOnline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [lastSyncTime, setLastSyncTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pendingChanges, setPendingChanges] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [dataAccuracy, setDataAccuracy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(98);
    const [subscribers, setSubscribers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isInitialized, setIsInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cleanupFunctions, setCleanupFunctions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [connectionRetries, setConnectionRetries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [lastError, setLastError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Cache management
    const [cache, setCache] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Map());
    const retryTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const debounceTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Client-side hydration check
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsClient(true);
        setLastSyncTime(new Date());
    }, []);
    // Debounced real-time change handler
    const debouncedHandleRealtimeChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((payload)=>{
        if (debounceTimeoutRef.current) {
            clearTimeout(debounceTimeoutRef.current);
        }
        debounceTimeoutRef.current = setTimeout(()=>{
            handleRealtimeChange(payload);
        }, 200); // Debounce real-time updates by 200ms
    }, []);
    // Enhanced initialization
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isClient) return;
        const initializeDatabase = async ()=>{
            try {
                console.log('🚀 Initializing DatabaseProvider...');
                // Test database connection with error recovery
                await testConnection();
                const networkCleanup = setupNetworkMonitoring();
                const subscriptionCleanup = setupRealtimeSubscriptions();
                setCleanupFunctions([
                    networkCleanup,
                    subscriptionCleanup
                ]);
                setIsInitialized(true);
                setLastError(null);
                setConnectionRetries(0);
                console.log('✅ DatabaseProvider initialized successfully');
            } catch (error) {
                console.error('❌ Failed to initialize DatabaseProvider:', error);
                setLastError(error instanceof Error ? error.message : 'Initialization failed');
                // Retry initialization with exponential backoff
                if (connectionRetries < MAX_RETRY_ATTEMPTS) {
                    const delay = RETRY_DELAY * Math.pow(2, connectionRetries);
                    console.log(`⏳ Retrying initialization in ${delay / 1000}s...`);
                    retryTimeoutRef.current = setTimeout(()=>{
                        setConnectionRetries((prev)=>prev + 1);
                        initializeDatabase();
                    }, delay);
                } else {
                    // Initialize with limited functionality
                    setIsInitialized(true);
                    console.log('⚠️ DatabaseProvider initialized with limited functionality');
                }
            }
        };
        initializeDatabase();
        return ()=>{
            if (retryTimeoutRef.current) {
                clearTimeout(retryTimeoutRef.current);
            }
            if (debounceTimeoutRef.current) {
                clearTimeout(debounceTimeoutRef.current);
            }
            cleanupFunctions.forEach((cleanup)=>{
                try {
                    cleanup();
                } catch (error) {
                    console.error('Error during cleanup:', error);
                }
            });
        };
    }, [
        isClient,
        connectionRetries
    ]);
    // Enhanced connection testing
    const testConnection = async ()=>{
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('settings').select('id').limit(1);
            if (error) {
                throw new Error(`Database connection failed: ${error.message}`);
            }
            console.log('✅ Database connection successful');
            setIsOnline(true);
        } catch (error) {
            console.warn('⚠️ Database connection test failed:', error);
            setIsOnline(false);
            throw error;
        }
    };
    // Enhanced network monitoring
    const setupNetworkMonitoring = ()=>{
        if ("TURBOPACK compile-time truthy", 1) return ()=>{};
        //TURBOPACK unreachable
        ;
        const handleOnline = undefined;
        const handleOffline = undefined;
        // Enhanced sync interval with health checks
        const syncInterval = undefined;
    };
    // Enhanced real-time subscriptions
    const setupRealtimeSubscriptions = ()=>{
        if ("TURBOPACK compile-time truthy", 1) return ()=>{};
        //TURBOPACK unreachable
        ;
    };
    // Enhanced real-time change handler
    const handleRealtimeChange = (payload)=>{
        if (!isClient) return;
        console.log('📡 Real-time change detected:', payload);
        setLastSyncTime(new Date());
        // Invalidate relevant cache entries
        if (payload.table) {
            invalidateCache(payload.table);
        }
        // Notify subscribers with fresh data
        subscribers.forEach(async (callback)=>{
            try {
                // Always fetch fresh data for the changed table
                const freshData = await getAllRecords(payload.table);
                callback(freshData);
            } catch (error) {
                console.error('Error in subscriber callback:', error);
            }
        });
    };
    // Cache management functions
    const getCachedData = (type)=>{
        const cached = cache.get(type);
        const now = Date.now();
        if (cached && now < cached.expiry) {
            console.log('📦 Returning cached data for:', type);
            return cached.data;
        }
        return null;
    };
    const setCachedData = (type, data)=>{
        const now = Date.now();
        setCache((prev)=>new Map(prev.set(type, {
                data,
                timestamp: now,
                expiry: now + CACHE_DURATION
            })));
    };
    const invalidateCache = (type)=>{
        if (type) {
            setCache((prev)=>{
                const newCache = new Map(prev);
                newCache.delete(type);
                return newCache;
            });
        } else {
            setCache(new Map());
        }
    };
    const clearCache = (type)=>{
        invalidateCache(type);
        console.log(type ? `🧹 Cleared cache for ${type}` : '🧹 Cleared all cache');
    };
    // Enhanced retry connection function
    const retryConnection = async ()=>{
        if (connectionRetries >= MAX_RETRY_ATTEMPTS) {
            setLastError('Maximum retry attempts reached');
            return;
        }
        try {
            setConnectionRetries((prev)=>prev + 1);
            setLastError(null);
            console.log(`🔄 Retrying connection (attempt ${connectionRetries + 1}/${MAX_RETRY_ATTEMPTS})...`);
            await testConnection();
            setConnectionRetries(0);
            setLastError(null);
            setIsOnline(true);
            console.log('✅ Connection retry successful');
        } catch (error) {
            console.error('Retry failed:', error);
            setLastError(error instanceof Error ? error.message : 'Connection retry failed');
            if (connectionRetries < MAX_RETRY_ATTEMPTS - 1) {
                const delay = RETRY_DELAY * Math.pow(2, connectionRetries);
                setTimeout(retryConnection, delay);
            }
        }
    };
    // Enhanced getAllRecords with caching
    const getAllRecords = async (type)=>{
        if (!isClient || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dbHelpers"]) return [];
        // Check cache first
        if (type) {
            const cachedData = getCachedData(type);
            if (cachedData) {
                return cachedData;
            }
        }
        try {
            console.log('🔍 Getting fresh records for type:', type);
            let result = [];
            switch(type){
                case 'users':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dbHelpers"].getUsers();
                    break;
                case 'projects':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dbHelpers"].getProjects();
                    break;
                case 'tasks':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dbHelpers"].getTasks();
                    break;
                case 'materials':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dbHelpers"].getMaterials();
                    break;
                case 'documents':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dbHelpers"].getDocuments();
                    break;
                case 'contacts':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dbHelpers"].getContacts();
                    break;
                case 'quotes':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dbHelpers"].getQuotes();
                    break;
                case 'posts':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dbHelpers"].getPosts();
                    break;
                case 'settings':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dbHelpers"].getSettings();
                    break;
                case 'newsletter_subscribers':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dbHelpers"].getNewsletterSubscribers();
                    break;
                default:
                    const stats = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dbHelpers"].getDashboardStats();
                    result = [
                        stats
                    ];
            }
            // Cache the result
            if (type) {
                setCachedData(type, result);
            }
            return result;
        } catch (error) {
            console.error('❌ Error getting records:', error);
            // Return cached data if available, even if stale
            if (type) {
                const staleCache = cache.get(type);
                if (staleCache) {
                    console.log('⚠️ Returning stale cached data due to error');
                    return staleCache.data;
                }
            }
            return [];
        }
    };
    // Enhanced createRecord with cache invalidation
    const createRecord = async (type, data, authenticatedUserId)=>{
        if (!isClient || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dbHelpers"]) {
            throw new Error('Database not initialized');
        }
        try {
            console.log('➕ Creating new record:', {
                type,
                data
            });
            const currentUserId = authenticatedUserId || await getCurrentUserId();
            // Enhanced permission checking for user creation
            if (type === 'users') {
                if (!currentUserId) {
                    throw new Error('User must be authenticated to create users');
                }
                const { data: currentUser, error: userError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('users').select('role, is_active').eq('id', currentUserId).single();
                if (userError) {
                    console.error('❌ Error checking user permissions:', userError);
                    throw new Error('Unable to verify user permissions');
                }
                if (!currentUser || currentUser.role !== 'admin' || !currentUser.is_active) {
                    throw new Error('Only active admin users can create new users');
                }
                console.log('✅ Admin user verified, proceeding with user creation');
            }
            // Enhanced data mapping with validation
            let mappedData = data;
            if (type === 'users') {
                mappedData = {
                    name: data.name,
                    email: data.email,
                    role: data.role || 'employee',
                    login_type: data.login_type || data.role || 'employee',
                    department: data.department || null,
                    position: data.position || null,
                    permissions: data.permissions || [],
                    is_active: data.is_active !== undefined ? data.is_active : true
                };
            } else if (type === 'contacts') {
                mappedData = {
                    name: data.name,
                    email: data.email,
                    phone: data.phone || null,
                    company: data.company || null,
                    service: data.service || null,
                    subject: data.subject || null,
                    message: data.message,
                    preferred_contact: data.preferredContact || 'email',
                    urgency: data.urgency || 'medium',
                    status: 'new',
                    priority: data.priority || 'medium',
                    source: data.source || 'website',
                    assigned_to: sanitizeUUIDField(data.assigned_to),
                    lead_score: data.customerProfile?.leadScore || 50,
                    estimated_value: data.projectContext?.estimatedBudget || 0,
                    conversion_probability: data.internalNotes?.conversionProbability || 30,
                    customer_profile: data.customerProfile || {},
                    project_context: data.projectContext || {},
                    internal_notes: data.internalNotes || {},
                    follow_up_date: data.followUpDate || new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
                };
            } else if (type === 'quotes') {
                mappedData = {
                    name: data.name,
                    email: data.email,
                    phone: data.phone || null,
                    company: data.company || null,
                    project_type: data.project_type || null,
                    budget_range: data.budget_range || null,
                    timeline: data.timeline || null,
                    location: data.location || null,
                    description: data.description || null,
                    preferred_contact: data.preferred_contact || 'email',
                    status: data.status || 'new',
                    priority: data.priority || 'medium',
                    source: data.source || 'website',
                    estimated_value: data.estimated_value || 0,
                    assigned_to: sanitizeUUIDField(data.assigned_to),
                    lead_score: data.lead_score || 50,
                    win_probability: data.win_probability || 30,
                    customer_profile: data.customer_profile || {},
                    project_details: data.project_details || {},
                    sales_tracking: data.sales_tracking || {},
                    follow_up_date: data.follow_up_date || new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
                };
            } else if (type === 'documents') {
                mappedData = {
                    title: data.title,
                    description: data.description || null,
                    type: data.type,
                    category: data.category || null,
                    project_id: sanitizeUUIDField(data.project_id),
                    file_url: data.file_url || null,
                    file_size: data.file_size || null,
                    file_format: data.file_format || null,
                    version: data.version || '1.0',
                    status: data.status || 'draft',
                    approved_by: sanitizeUUIDField(data.approved_by),
                    tags: data.tags || [],
                    is_confidential: data.is_confidential || false,
                    expiry_date: data.expiry_date || null,
                    metadata: data.metadata || {}
                };
            } else if (type === 'projects') {
                mappedData = {
                    ...data,
                    manager_id: sanitizeUUIDField(data.manager_id)
                };
            } else if (type === 'tasks') {
                mappedData = {
                    ...data,
                    assigned_to: sanitizeUUIDField(data.assigned_to),
                    assigned_by: sanitizeUUIDField(data.assigned_by) || currentUserId,
                    project_id: sanitizeUUIDField(data.project_id)
                };
            } else if (type === 'newsletter_subscribers') {
                mappedData = {
                    email: data.email,
                    status: data.status || 'active',
                    source: data.source || null,
                    preferences: data.preferences || {}
                };
            }
            let result;
            switch(type){
                case 'users':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dbHelpers"].createUser(mappedData);
                    break;
                case 'projects':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dbHelpers"].createProject(mappedData);
                    break;
                case 'tasks':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dbHelpers"].createTask(mappedData);
                    break;
                case 'materials':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dbHelpers"].createMaterial(mappedData);
                    break;
                case 'documents':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dbHelpers"].createDocument(mappedData);
                    break;
                case 'contacts':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dbHelpers"].createContact(mappedData);
                    break;
                case 'quotes':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dbHelpers"].createQuote(mappedData);
                    break;
                case 'posts':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dbHelpers"].createPost(mappedData);
                    break;
                case 'newsletter_subscribers':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dbHelpers"].createNewsletterSubscriber(mappedData);
                    break;
                default:
                    throw new Error(`Unsupported record type: ${type}`);
            }
            console.log('✅ Record created successfully:', result);
            // Invalidate cache and update state
            invalidateCache(type);
            setLastSyncTime(new Date());
            setLastError(null);
            return result;
        } catch (error) {
            console.error('❌ Error creating record:', error);
            setLastError(error instanceof Error ? error.message : 'Create operation failed');
            throw error;
        }
    };
    // Enhanced updateRecord with cache invalidation
    const updateRecord = async (id, data, type, authenticatedUserId)=>{
        if (!isClient || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dbHelpers"]) {
            throw new Error('Database not initialized');
        }
        try {
            console.log('📝 Updating record:', {
                id,
                type,
                data
            });
            const currentUserId = authenticatedUserId || await getCurrentUserId();
            // Enhanced data sanitization
            let sanitizedData = {
                ...data
            };
            if (type === 'documents') {
                sanitizedData = {
                    ...data,
                    project_id: sanitizeUUIDField(data.project_id),
                    uploaded_by: sanitizeUUIDField(data.uploaded_by),
                    approved_by: sanitizeUUIDField(data.approved_by)
                };
            } else if (type === 'projects') {
                sanitizedData = {
                    ...data,
                    manager_id: sanitizeUUIDField(data.manager_id)
                };
            } else if (type === 'tasks') {
                sanitizedData = {
                    ...data,
                    assigned_to: sanitizeUUIDField(data.assigned_to),
                    assigned_by: sanitizeUUIDField(data.assigned_by),
                    project_id: sanitizeUUIDField(data.project_id)
                };
            } else if (type === 'contacts') {
                sanitizedData = {
                    ...data,
                    assigned_to: sanitizeUUIDField(data.assigned_to)
                };
            } else if (type === 'quotes') {
                sanitizedData = {
                    ...data,
                    assigned_to: sanitizeUUIDField(data.assigned_to)
                };
            }
            let result;
            switch(type){
                case 'users':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dbHelpers"].updateUser(id, sanitizedData);
                    break;
                case 'projects':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dbHelpers"].updateProject(id, sanitizedData);
                    break;
                case 'tasks':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dbHelpers"].updateTask(id, sanitizedData);
                    break;
                case 'materials':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dbHelpers"].updateMaterial(id, sanitizedData);
                    break;
                case 'documents':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dbHelpers"].updateDocument(id, sanitizedData);
                    break;
                case 'contacts':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dbHelpers"].updateContact(id, sanitizedData);
                    break;
                case 'quotes':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dbHelpers"].updateQuote(id, sanitizedData);
                    break;
                case 'posts':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dbHelpers"].updatePost(id, sanitizedData);
                    break;
                case 'newsletter_subscribers':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dbHelpers"].updateNewsletterSubscriber(id, sanitizedData);
                    break;
                default:
                    throw new Error(`Unsupported record type: ${type}`);
            }
            console.log('✅ Record updated successfully:', result);
            // Invalidate cache and update state
            invalidateCache(type);
            setLastSyncTime(new Date());
            setLastError(null);
            return result;
        } catch (error) {
            console.error('❌ Error updating record:', error);
            setLastError(error instanceof Error ? error.message : 'Update operation failed');
            throw error;
        }
    };
    // Enhanced deleteRecord with cache invalidation
    const deleteRecord = async (id, type)=>{
        if (!isClient || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dbHelpers"]) {
            throw new Error('Database not initialized');
        }
        try {
            console.log('🗑️ Deleting record:', {
                id,
                type
            });
            switch(type){
                case 'users':
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dbHelpers"].deleteUser(id);
                    break;
                case 'newsletter_subscribers':
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dbHelpers"].deleteNewsletterSubscriber(id);
                    break;
                case 'contacts':
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dbHelpers"].deleteContact(id);
                    break;
                case 'quotes':
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dbHelpers"].deleteQuote(id);
                    break;
                default:
                    throw new Error(`Delete not implemented for type: ${type}`);
            }
            console.log('✅ Record deleted successfully');
            // Invalidate cache and update state
            invalidateCache(type);
            setLastSyncTime(new Date());
            setLastError(null);
        } catch (error) {
            console.error('❌ Error deleting record:', error);
            setLastError(error instanceof Error ? error.message : 'Delete operation failed');
            throw error;
        }
    };
    // Enhanced subscription management
    const subscribeToChanges = (callback)=>{
        if (!isClient) return ()=>{};
        setSubscribers((prev)=>[
                ...prev,
                callback
            ]);
        return ()=>{
            setSubscribers((prev)=>prev.filter((cb)=>cb !== callback));
        };
    };
    const broadcastChange = (record, action)=>{
        if (!isClient) return;
        console.log(`📡 Broadcasting ${action} for record:`, record);
        setLastSyncTime(new Date());
        // Invalidate related cache
        if (record.type) {
            invalidateCache(record.type);
        }
    };
    // Enhanced statistics with error handling
    const getStatistics = async ()=>{
        const defaultStats = {
            totalProjects: 0,
            activeProjects: 0,
            totalTasks: 0,
            completedTasks: 0,
            totalContacts: 0,
            newContacts: 0,
            totalQuotes: 0,
            pendingQuotes: 0,
            dataAccuracy,
            isOnline,
            lastSyncTime: lastSyncTime?.toISOString(),
            pendingChanges,
            connectionRetries,
            lastError
        };
        if (!isClient || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dbHelpers"]) {
            return defaultStats;
        }
        try {
            const stats = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dbHelpers"].getDashboardStats();
            return {
                ...stats,
                dataAccuracy,
                isOnline,
                lastSyncTime: lastSyncTime?.toISOString(),
                pendingChanges,
                connectionRetries,
                lastError
            };
        } catch (error) {
            console.error('❌ Error getting statistics:', error);
            setLastError(error instanceof Error ? error.message : 'Statistics fetch failed');
            return defaultStats;
        }
    };
    // Enhanced recent activity with better error handling
    const getRecentActivity = async ()=>{
        if (!isClient || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dbHelpers"]) return [];
        try {
            const [contacts, quotes, projects] = await Promise.allSettled([
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dbHelpers"].getContacts(),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dbHelpers"].getQuotes(),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dbHelpers"].getProjects()
            ]);
            const allRecords = [];
            if (contacts.status === 'fulfilled') {
                allRecords.push(...contacts.value.map((r)=>({
                        ...r,
                        type: 'contact'
                    })));
            }
            if (quotes.status === 'fulfilled') {
                allRecords.push(...quotes.value.map((r)=>({
                        ...r,
                        type: 'quote'
                    })));
            }
            if (projects.status === 'fulfilled') {
                allRecords.push(...projects.value.map((r)=>({
                        ...r,
                        type: 'project'
                    })));
            }
            return allRecords.sort((a, b)=>new Date(b.created_at).getTime() - new Date(a.created_at).getTime()).slice(0, 15).map((record)=>({
                    id: record.id,
                    description: `${record.type} "${record.name || record.title || 'Unnamed'}" was created`,
                    user: 'System',
                    timestamp: record.created_at,
                    action: 'created',
                    validated: true,
                    accuracy: `${dataAccuracy}%`,
                    type: record.type
                }));
        } catch (error) {
            console.error('❌ Error getting recent activity:', error);
            setLastError(error instanceof Error ? error.message : 'Activity fetch failed');
            return [];
        }
    };
    // Enhanced validation
    const validateRecord = (record)=>{
        if (!record || typeof record !== 'object') return false;
        if (!record.id || typeof record.id !== 'string') return false;
        if (record.id.length === 0) return false;
        return true;
    };
    // Enhanced data integrity verification
    const verifyDataIntegrity = async ()=>{
        if (!isClient) {
            return {
                isValid: false,
                issues: [
                    'Client not initialized'
                ]
            };
        }
        const issues = [];
        try {
            // Test database connection
            await testConnection();
            // Check data accuracy threshold
            if (dataAccuracy < 95) {
                issues.push(`Data accuracy is below threshold: ${dataAccuracy}%`);
            }
            // Check network status
            if (!isOnline) {
                issues.push('System is offline');
            }
            // Check connection retry status
            if (connectionRetries > 0) {
                issues.push(`Connection retries: ${connectionRetries}/${MAX_RETRY_ATTEMPTS}`);
            }
            // Check for recent errors
            if (lastError) {
                issues.push(`Recent error: ${lastError}`);
            }
            return {
                isValid: issues.length === 0,
                issues
            };
        } catch (error) {
            issues.push(`Data integrity check failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
            return {
                isValid: false,
                issues
            };
        }
    };
    // Enhanced database refresh
    const refreshDatabase = ()=>{
        if (!isClient) return;
        console.log('🔄 Force refreshing database connection...');
        // Clear cache
        clearCache();
        // Reset state
        setLastSyncTime(new Date());
        setDataAccuracy(98);
        setPendingChanges(0);
        setLastError(null);
        setConnectionRetries(0);
        // Test connection
        testConnection().catch((error)=>{
            console.error('Failed to refresh connection:', error);
            setLastError('Refresh failed');
        });
    };
    // Context value
    const value = {
        getAllRecords,
        createRecord,
        updateRecord,
        deleteRecord,
        subscribeToChanges,
        broadcastChange,
        getStatistics,
        getRecentActivity,
        isOnline,
        lastSyncTime,
        pendingChanges,
        dataAccuracy,
        validateRecord,
        verifyDataIntegrity,
        refreshDatabase,
        clearCache,
        retryConnection,
        connectionRetries,
        lastError
    };
    // Enhanced loading screen with connection status
    if (!isClient || !isInitialized) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-screen bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center max-w-md mx-auto p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-6"
                    }, void 0, false, {
                        fileName: "[project]/src/contexts/DatabaseContext.tsx",
                        lineNumber: 1016,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold text-gray-900 mb-2",
                        children: "Initializing Database"
                    }, void 0, false, {
                        fileName: "[project]/src/contexts/DatabaseContext.tsx",
                        lineNumber: 1017,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 mb-4",
                        children: "Connecting to database and setting up real-time subscriptions..."
                    }, void 0, false, {
                        fileName: "[project]/src/contexts/DatabaseContext.tsx",
                        lineNumber: 1020,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    connectionRetries > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-3 h-3 bg-yellow-400 rounded-full animate-pulse mr-3"
                                }, void 0, false, {
                                    fileName: "[project]/src/contexts/DatabaseContext.tsx",
                                    lineNumber: 1027,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-yellow-800 text-sm",
                                    children: [
                                        "Retry attempt ",
                                        connectionRetries,
                                        "/",
                                        MAX_RETRY_ATTEMPTS
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/contexts/DatabaseContext.tsx",
                                    lineNumber: 1028,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/contexts/DatabaseContext.tsx",
                            lineNumber: 1026,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/contexts/DatabaseContext.tsx",
                        lineNumber: 1025,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    lastError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-red-50 border border-red-200 rounded-lg p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-800 text-sm",
                            children: lastError
                        }, void 0, false, {
                            fileName: "[project]/src/contexts/DatabaseContext.tsx",
                            lineNumber: 1037,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/contexts/DatabaseContext.tsx",
                        lineNumber: 1036,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/contexts/DatabaseContext.tsx",
                lineNumber: 1015,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/contexts/DatabaseContext.tsx",
            lineNumber: 1014,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DatabaseContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/DatabaseContext.tsx",
        lineNumber: 1048,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const ConnectionStatus = ()=>{
    const { isOnline, lastSyncTime, pendingChanges, connectionRetries, lastError } = useDatabase();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `fixed top-4 right-4 z-50 px-4 py-2 rounded-lg text-sm font-medium shadow-lg transition-all duration-200 ${isOnline ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-2 h-2 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'}`
                    }, void 0, false, {
                        fileName: "[project]/src/contexts/DatabaseContext.tsx",
                        lineNumber: 1063,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: isOnline ? 'Online' : 'Offline'
                    }, void 0, false, {
                        fileName: "[project]/src/contexts/DatabaseContext.tsx",
                        lineNumber: 1064,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    pendingChanges > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "bg-orange-500 text-white px-2 py-1 rounded-full text-xs",
                        children: [
                            pendingChanges,
                            " pending"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/contexts/DatabaseContext.tsx",
                        lineNumber: 1066,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    connectionRetries > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "bg-yellow-500 text-white px-2 py-1 rounded-full text-xs",
                        children: [
                            "Retry ",
                            connectionRetries
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/contexts/DatabaseContext.tsx",
                        lineNumber: 1071,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/contexts/DatabaseContext.tsx",
                lineNumber: 1062,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            lastSyncTime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs opacity-75 mt-1",
                children: [
                    "Last sync: ",
                    lastSyncTime.toLocaleTimeString()
                ]
            }, void 0, true, {
                fileName: "[project]/src/contexts/DatabaseContext.tsx",
                lineNumber: 1077,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            lastError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs text-red-600 mt-1 max-w-xs truncate",
                children: [
                    "Error: ",
                    lastError
                ]
            }, void 0, true, {
                fileName: "[project]/src/contexts/DatabaseContext.tsx",
                lineNumber: 1082,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/contexts/DatabaseContext.tsx",
        lineNumber: 1059,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = DatabaseProvider;
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__e5dd40ac._.js.map
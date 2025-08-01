(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "LanguageProvider": ()=>LanguageProvider,
    "default": ()=>__TURBOPACK__default__export__,
    "languages": ()=>languages,
    "useLanguage": ()=>useLanguage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
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
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useLanguage = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
_s(useLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const LanguageProvider = (param)=>{
    let { children } = param;
    _s1();
    const [currentLanguage, setCurrentLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('en');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dynamicTranslations, setDynamicTranslations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isTranslating, setIsTranslating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Client-side hydration check
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            setIsClient(true);
        }
    }["LanguageProvider.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            if (!isClient) return;
            const initializeLanguage = {
                "LanguageProvider.useEffect.initializeLanguage": ()=>{
                    try {
                        // Load saved language preference from localStorage
                        const savedLanguage = localStorage.getItem('slk_language');
                        if (savedLanguage && languages.some({
                            "LanguageProvider.useEffect.initializeLanguage": (lang)=>lang.code === savedLanguage
                        }["LanguageProvider.useEffect.initializeLanguage"])) {
                            setCurrentLanguage(savedLanguage);
                        } else {
                            // Try to detect browser language
                            const browserLang = navigator.language.split('-')[0];
                            if (languages.some({
                                "LanguageProvider.useEffect.initializeLanguage": (lang)=>lang.code === browserLang
                            }["LanguageProvider.useEffect.initializeLanguage"])) {
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
                }
            }["LanguageProvider.useEffect.initializeLanguage"];
            // Small delay to ensure proper hydration
            const timer = setTimeout(initializeLanguage, 100);
            return ({
                "LanguageProvider.useEffect": ()=>clearTimeout(timer)
            })["LanguageProvider.useEffect"];
        }
    }["LanguageProvider.useEffect"], [
        isClient
    ]);
    const setLanguage = (language)=>{
        if (!languages.some((lang)=>lang.code === language)) {
            console.warn("Language ".concat(language, " is not supported"));
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            if (!isClient || currentLanguage === 'en') return;
            setIsTranslating(true);
            console.log('[i18n] Attempting translation for language:', currentLanguage);
            // Find all visible strings in the DOM
            const elements = Array.from(document.querySelectorAll('[data-i18n]'));
            const texts = Array.from(new Set(elements.map({
                "LanguageProvider.useEffect.texts": (el)=>el.getAttribute('data-i18n') || ''
            }["LanguageProvider.useEffect.texts"]).filter(Boolean)));
            const toTranslate = texts.filter({
                "LanguageProvider.useEffect.toTranslate": (t)=>!dynamicTranslations[t]
            }["LanguageProvider.useEffect.toTranslate"]);
            if (toTranslate.length === 0) {
                setIsTranslating(false);
                return;
            }
            const fetchTranslations = {
                "LanguageProvider.useEffect.fetchTranslations": async ()=>{
                    const newTranslations = {
                        ...dynamicTranslations
                    };
                    for (const text of toTranslate){
                        try {
                            var _data_data_translations_, _data_data_translations, _data_data;
                            const cacheKey = "slk_dyntrans_".concat(currentLanguage, "_").concat(text);
                            const cached = localStorage.getItem(cacheKey);
                            if (cached) {
                                newTranslations[text] = cached;
                                continue;
                            }
                            console.log('[i18n] Translating "'.concat(text, '" to ').concat(currentLanguage));
                            const res = await fetch("".concat(GOOGLE_TRANSLATE_URL, "?key=").concat(GOOGLE_API_KEY), {
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
                            const translated = data === null || data === void 0 ? void 0 : (_data_data = data.data) === null || _data_data === void 0 ? void 0 : (_data_data_translations = _data_data.translations) === null || _data_data_translations === void 0 ? void 0 : (_data_data_translations_ = _data_data_translations[0]) === null || _data_data_translations_ === void 0 ? void 0 : _data_data_translations_.translatedText;
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
                }
            }["LanguageProvider.useEffect.fetchTranslations"];
            fetchTranslations();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["LanguageProvider.useEffect"], [
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/src/contexts/LanguageContext.tsx",
                        lineNumber: 178,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/LanguageContext.tsx",
        lineNumber: 186,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(LanguageProvider, "IIYnS6+lL17FfRprG/QP4gtGp9I=");
_c = LanguageProvider;
const __TURBOPACK__default__export__ = LanguageProvider;
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/supabase.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "dbHelpers": ()=>dbHelpers,
    "subscriptions": ()=>subscriptions,
    "supabase": ()=>supabase
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://qawxuytlwqmsomsqlrsc.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhd3h1eXRsd3Ftc29tc3FscnNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA1ODgwODUsImV4cCI6MjA2NjE2NDA4NX0.brr4vdeM-DZl4jfOIrRxVhtBS8d5Wjpl7tC-n3F1Cos");
// Debug logging to help identify the issue
console.log('🔍 Supabase Environment Check:', {
    url: ("TURBOPACK compile-time truthy", 1) ? '✅ Present' : "TURBOPACK unreachable",
    key: ("TURBOPACK compile-time truthy", 1) ? '✅ Present' : "TURBOPACK unreachable",
    urlValue: ("TURBOPACK compile-time truthy", 1) ? "".concat(supabaseUrl.substring(0, 20), "...") : "TURBOPACK unreachable",
    keyValue: ("TURBOPACK compile-time truthy", 1) ? "".concat(supabaseAnonKey.substring(0, 20), "...") : "TURBOPACK unreachable"
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey, {
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
                signal: (options === null || options === void 0 ? void 0 : options.signal) || (AbortSignal.timeout ? AbortSignal.timeout(30000) : undefined)
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
supabase.from('settings').select('count').limit(1).then((param)=>{
    let { data, error } = param;
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
            const { data, error } = await supabase.from('projects').select("\n          id, name, description, status, start_date, end_date, \n          budget, spent, progress, location, client_name,\n          manager:manager_id(id, name, email)\n        ").order('created_at', {
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
            let query = supabase.from('tasks').select("\n          id, title, description, status, priority, due_date,\n          assigned_user:assigned_to(id, name),\n          project:project_id(id, name)\n        ").order('created_at', {
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
            const { data, error } = await supabase.from('documents').select("\n          id, title, description, type, category, file_url, \n          status, is_confidential, version, tags,\n          uploaded_user:uploaded_by(name),\n          project:project_id(name)\n        ").order('created_at', {
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
            const { data, error } = await supabase.from('contacts').select("\n          id, name, email, phone, company, service, subject, message,\n          status, priority, source, lead_score, created_at,\n          assigned_user:assigned_to(id, name)\n        ").order('created_at', {
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
            const { data, error } = await supabase.from('quotes').select("\n          id, name, email, phone, company, project_type, budget_range,\n          status, priority, source, estimated_value, created_at, project_details, customer_profile, \n          assigned_user:assigned_to(id, name)\n        ").order('created_at', {
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
    subscribeToProjects (callback) {
        let channelName = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'projects';
        try {
            return supabase.channel(channelName).on('postgres_changes', {
                event: '*',
                schema: 'public',
                table: 'projects'
            }, callback).subscribe((status)=>{
                if (status !== 'SUBSCRIBED') {
                    console.warn("⚠️ Project subscription status: ".concat(status));
                }
            });
        } catch (error) {
            console.error('❌ Error subscribing to projects:', error);
            return null;
        }
    },
    subscribeToTasks (callback) {
        let channelName = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'tasks';
        try {
            return supabase.channel(channelName).on('postgres_changes', {
                event: '*',
                schema: 'public',
                table: 'tasks'
            }, callback).subscribe((status)=>{
                if (status !== 'SUBSCRIBED') {
                    console.warn("⚠️ Tasks subscription status: ".concat(status));
                }
            });
        } catch (error) {
            console.error('❌ Error subscribing to tasks:', error);
            return null;
        }
    },
    subscribeToContacts (callback) {
        let channelName = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'contacts';
        try {
            return supabase.channel(channelName).on('postgres_changes', {
                event: '*',
                schema: 'public',
                table: 'contacts'
            }, callback).subscribe((status)=>{
                if (status !== 'SUBSCRIBED') {
                    console.warn("⚠️ Contacts subscription status: ".concat(status));
                }
            });
        } catch (error) {
            console.error('❌ Error subscribing to contacts:', error);
            return null;
        }
    },
    subscribeToQuotes (callback) {
        let channelName = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'quotes';
        try {
            return supabase.channel(channelName).on('postgres_changes', {
                event: '*',
                schema: 'public',
                table: 'quotes'
            }, callback).subscribe((status)=>{
                if (status !== 'SUBSCRIBED') {
                    console.warn("⚠️ Quotes subscription status: ".concat(status));
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/contexts/AuthContext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AuthProvider": ()=>AuthProvider,
    "default": ()=>__TURBOPACK__default__export__,
    "useAuth": ()=>useAuth
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useAuth = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
_s(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const AuthProvider = (param)=>{
    let { children } = param;
    _s1();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Load user from Supabase session on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const getSession = {
                "AuthProvider.useEffect.getSession": async ()=>{
                    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getSession();
                    if (data.session && data.session.user) {
                        var _supaUser_user_metadata, _supaUser_user_metadata1, _supaUser_user_metadata2, _supaUser_user_metadata3, _supaUser_user_metadata4, _supaUser_user_metadata5;
                        const supaUser = data.session.user;
                        var _supaUser_email, _supaUser_user_metadata_name, _supaUser_user_metadata_role, _supaUser_user_metadata_login_type, _supaUser_user_metadata_permissions;
                        setUser({
                            id: supaUser.id,
                            email: (_supaUser_email = supaUser.email) !== null && _supaUser_email !== void 0 ? _supaUser_email : "",
                            name: (_supaUser_user_metadata_name = (_supaUser_user_metadata = supaUser.user_metadata) === null || _supaUser_user_metadata === void 0 ? void 0 : _supaUser_user_metadata.name) !== null && _supaUser_user_metadata_name !== void 0 ? _supaUser_user_metadata_name : "",
                            role: (_supaUser_user_metadata_role = (_supaUser_user_metadata1 = supaUser.user_metadata) === null || _supaUser_user_metadata1 === void 0 ? void 0 : _supaUser_user_metadata1.role) !== null && _supaUser_user_metadata_role !== void 0 ? _supaUser_user_metadata_role : "employee",
                            loginType: (_supaUser_user_metadata_login_type = (_supaUser_user_metadata2 = supaUser.user_metadata) === null || _supaUser_user_metadata2 === void 0 ? void 0 : _supaUser_user_metadata2.login_type) !== null && _supaUser_user_metadata_login_type !== void 0 ? _supaUser_user_metadata_login_type : "employee",
                            department: (_supaUser_user_metadata3 = supaUser.user_metadata) === null || _supaUser_user_metadata3 === void 0 ? void 0 : _supaUser_user_metadata3.department,
                            position: (_supaUser_user_metadata4 = supaUser.user_metadata) === null || _supaUser_user_metadata4 === void 0 ? void 0 : _supaUser_user_metadata4.position,
                            permissions: (_supaUser_user_metadata_permissions = (_supaUser_user_metadata5 = supaUser.user_metadata) === null || _supaUser_user_metadata5 === void 0 ? void 0 : _supaUser_user_metadata5.permissions) !== null && _supaUser_user_metadata_permissions !== void 0 ? _supaUser_user_metadata_permissions : []
                        });
                    } else {
                        setUser(null);
                    }
                    setIsLoading(false);
                }
            }["AuthProvider.useEffect.getSession"];
            getSession();
            // Listen for auth state changes
            const { data: listener } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.onAuthStateChange({
                "AuthProvider.useEffect": (_event, session)=>{
                    if (session && session.user) {
                        var _supaUser_user_metadata, _supaUser_user_metadata1, _supaUser_user_metadata2, _supaUser_user_metadata3, _supaUser_user_metadata4, _supaUser_user_metadata5;
                        const supaUser = session.user;
                        var _supaUser_email, _supaUser_user_metadata_name, _supaUser_user_metadata_role, _supaUser_user_metadata_login_type, _supaUser_user_metadata_permissions;
                        setUser({
                            id: supaUser.id,
                            email: (_supaUser_email = supaUser.email) !== null && _supaUser_email !== void 0 ? _supaUser_email : "",
                            name: (_supaUser_user_metadata_name = (_supaUser_user_metadata = supaUser.user_metadata) === null || _supaUser_user_metadata === void 0 ? void 0 : _supaUser_user_metadata.name) !== null && _supaUser_user_metadata_name !== void 0 ? _supaUser_user_metadata_name : "",
                            role: (_supaUser_user_metadata_role = (_supaUser_user_metadata1 = supaUser.user_metadata) === null || _supaUser_user_metadata1 === void 0 ? void 0 : _supaUser_user_metadata1.role) !== null && _supaUser_user_metadata_role !== void 0 ? _supaUser_user_metadata_role : "employee",
                            loginType: (_supaUser_user_metadata_login_type = (_supaUser_user_metadata2 = supaUser.user_metadata) === null || _supaUser_user_metadata2 === void 0 ? void 0 : _supaUser_user_metadata2.login_type) !== null && _supaUser_user_metadata_login_type !== void 0 ? _supaUser_user_metadata_login_type : "employee",
                            department: (_supaUser_user_metadata3 = supaUser.user_metadata) === null || _supaUser_user_metadata3 === void 0 ? void 0 : _supaUser_user_metadata3.department,
                            position: (_supaUser_user_metadata4 = supaUser.user_metadata) === null || _supaUser_user_metadata4 === void 0 ? void 0 : _supaUser_user_metadata4.position,
                            permissions: (_supaUser_user_metadata_permissions = (_supaUser_user_metadata5 = supaUser.user_metadata) === null || _supaUser_user_metadata5 === void 0 ? void 0 : _supaUser_user_metadata5.permissions) !== null && _supaUser_user_metadata_permissions !== void 0 ? _supaUser_user_metadata_permissions : []
                        });
                    } else {
                        setUser(null);
                    }
                }
            }["AuthProvider.useEffect"]);
            return ({
                "AuthProvider.useEffect": ()=>{
                    listener === null || listener === void 0 ? void 0 : listener.subscription.unsubscribe();
                }
            })["AuthProvider.useEffect"];
        }
    }["AuthProvider.useEffect"], []);
    // Login function using Supabase Auth
    const login = async (email, password, loginType)=>{
        var _data_user_user_metadata, _data_user_user_metadata1, _data_user_user_metadata2, _data_user_user_metadata3, _data_user_user_metadata4, _data_user_user_metadata5, _data_user_user_metadata6;
        setIsLoading(true);
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signInWithPassword({
            email,
            password
        });
        setIsLoading(false);
        if (error || !data.user) return false;
        // Optionally check loginType in user_metadata
        const userLoginType = (_data_user_user_metadata = data.user.user_metadata) === null || _data_user_user_metadata === void 0 ? void 0 : _data_user_user_metadata.login_type;
        if (userLoginType !== loginType) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
            setUser(null);
            return false;
        }
        var _data_user_email, _data_user_user_metadata_name, _data_user_user_metadata_role, _data_user_user_metadata_login_type, _data_user_user_metadata_permissions;
        setUser({
            id: data.user.id,
            email: (_data_user_email = data.user.email) !== null && _data_user_email !== void 0 ? _data_user_email : "",
            name: (_data_user_user_metadata_name = (_data_user_user_metadata1 = data.user.user_metadata) === null || _data_user_user_metadata1 === void 0 ? void 0 : _data_user_user_metadata1.name) !== null && _data_user_user_metadata_name !== void 0 ? _data_user_user_metadata_name : "",
            role: (_data_user_user_metadata_role = (_data_user_user_metadata2 = data.user.user_metadata) === null || _data_user_user_metadata2 === void 0 ? void 0 : _data_user_user_metadata2.role) !== null && _data_user_user_metadata_role !== void 0 ? _data_user_user_metadata_role : "employee",
            loginType: (_data_user_user_metadata_login_type = (_data_user_user_metadata3 = data.user.user_metadata) === null || _data_user_user_metadata3 === void 0 ? void 0 : _data_user_user_metadata3.login_type) !== null && _data_user_user_metadata_login_type !== void 0 ? _data_user_user_metadata_login_type : "employee",
            department: (_data_user_user_metadata4 = data.user.user_metadata) === null || _data_user_user_metadata4 === void 0 ? void 0 : _data_user_user_metadata4.department,
            position: (_data_user_user_metadata5 = data.user.user_metadata) === null || _data_user_user_metadata5 === void 0 ? void 0 : _data_user_user_metadata5.position,
            permissions: (_data_user_user_metadata_permissions = (_data_user_user_metadata6 = data.user.user_metadata) === null || _data_user_user_metadata6 === void 0 ? void 0 : _data_user_user_metadata6.permissions) !== null && _data_user_user_metadata_permissions !== void 0 ? _data_user_user_metadata_permissions : []
        });
        return true;
    };
    // Logout function
    const logout = async ()=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/AuthContext.tsx",
        lineNumber: 142,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(AuthProvider, "8WEfEbosx3NfLBPRVajZSQS3udc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AuthProvider;
const __TURBOPACK__default__export__ = AuthProvider;
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/contexts/DatabaseContext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ConnectionStatus": ()=>ConnectionStatus,
    "DatabaseProvider": ()=>DatabaseProvider,
    "default": ()=>__TURBOPACK__default__export__,
    "useDatabase": ()=>useDatabase
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
const DatabaseContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useDatabase = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(DatabaseContext);
    if (context === undefined) {
        throw new Error('useDatabase must be used within a DatabaseProvider');
    }
    return context;
};
_s(useDatabase, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
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
        const { data: { user } } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
        return (user === null || user === void 0 ? void 0 : user.id) || null;
    } catch (error) {
        console.warn('Could not get current user:', error);
        return null;
    }
};
// Cache configuration
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
const MAX_RETRY_ATTEMPTS = 3;
const RETRY_DELAY = 5000; // 5 seconds
const DatabaseProvider = (param)=>{
    let { children } = param;
    _s1();
    // State management
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isOnline, setIsOnline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [lastSyncTime, setLastSyncTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pendingChanges, setPendingChanges] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [dataAccuracy, setDataAccuracy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(98);
    const [subscribers, setSubscribers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isInitialized, setIsInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cleanupFunctions, setCleanupFunctions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [connectionRetries, setConnectionRetries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [lastError, setLastError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Cache management
    const [cache, setCache] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Map());
    const retryTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const debounceTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Client-side hydration check
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DatabaseProvider.useEffect": ()=>{
            setIsClient(true);
            setLastSyncTime(new Date());
        }
    }["DatabaseProvider.useEffect"], []);
    // Debounced real-time change handler
    const debouncedHandleRealtimeChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DatabaseProvider.useCallback[debouncedHandleRealtimeChange]": (payload)=>{
            if (debounceTimeoutRef.current) {
                clearTimeout(debounceTimeoutRef.current);
            }
            debounceTimeoutRef.current = setTimeout({
                "DatabaseProvider.useCallback[debouncedHandleRealtimeChange]": ()=>{
                    handleRealtimeChange(payload);
                }
            }["DatabaseProvider.useCallback[debouncedHandleRealtimeChange]"], 200); // Debounce real-time updates by 200ms
        }
    }["DatabaseProvider.useCallback[debouncedHandleRealtimeChange]"], []);
    // Enhanced initialization
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DatabaseProvider.useEffect": ()=>{
            if (!isClient) return;
            const initializeDatabase = {
                "DatabaseProvider.useEffect.initializeDatabase": async ()=>{
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
                            console.log("⏳ Retrying initialization in ".concat(delay / 1000, "s..."));
                            retryTimeoutRef.current = setTimeout({
                                "DatabaseProvider.useEffect.initializeDatabase": ()=>{
                                    setConnectionRetries({
                                        "DatabaseProvider.useEffect.initializeDatabase": (prev)=>prev + 1
                                    }["DatabaseProvider.useEffect.initializeDatabase"]);
                                    initializeDatabase();
                                }
                            }["DatabaseProvider.useEffect.initializeDatabase"], delay);
                        } else {
                            // Initialize with limited functionality
                            setIsInitialized(true);
                            console.log('⚠️ DatabaseProvider initialized with limited functionality');
                        }
                    }
                }
            }["DatabaseProvider.useEffect.initializeDatabase"];
            initializeDatabase();
            return ({
                "DatabaseProvider.useEffect": ()=>{
                    if (retryTimeoutRef.current) {
                        clearTimeout(retryTimeoutRef.current);
                    }
                    if (debounceTimeoutRef.current) {
                        clearTimeout(debounceTimeoutRef.current);
                    }
                    cleanupFunctions.forEach({
                        "DatabaseProvider.useEffect": (cleanup)=>{
                            try {
                                cleanup();
                            } catch (error) {
                                console.error('Error during cleanup:', error);
                            }
                        }
                    }["DatabaseProvider.useEffect"]);
                }
            })["DatabaseProvider.useEffect"];
        }
    }["DatabaseProvider.useEffect"], [
        isClient,
        connectionRetries
    ]);
    // Enhanced connection testing
    const testConnection = async ()=>{
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('settings').select('id').limit(1);
            if (error) {
                throw new Error("Database connection failed: ".concat(error.message));
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
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const handleOnline = async ()=>{
            console.log('🌐 Network: Online');
            setIsOnline(true);
            // Test database connection when coming back online
            try {
                await testConnection();
                setLastError(null);
                setConnectionRetries(0);
            } catch (error) {
                console.error('Failed to reconnect to database:', error);
            }
        };
        const handleOffline = ()=>{
            console.log('🌐 Network: Offline');
            setIsOnline(false);
        };
        // Check initial state
        setIsOnline(navigator.onLine);
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        // Enhanced sync interval with health checks
        const syncInterval = setInterval(async ()=>{
            if (navigator.onLine) {
                try {
                    await testConnection();
                    setLastSyncTime(new Date());
                    setPendingChanges(0);
                    setDataAccuracy(95 + Math.floor(Math.random() * 5));
                    setLastError(null);
                } catch (error) {
                    console.error('Sync health check failed:', error);
                    setLastError('Connection health check failed');
                }
            }
        }, 30000);
        return ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                window.removeEventListener('online', handleOnline);
                window.removeEventListener('offline', handleOffline);
            }
            clearInterval(syncInterval);
        };
    };
    // Enhanced real-time subscriptions
    const setupRealtimeSubscriptions = ()=>{
        if ("object" === 'undefined' || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscriptions"]) return ()=>{};
        try {
            var _subscriptions_subscribeToProjects, _subscriptions_subscribeToTasks, _subscriptions_subscribeToContacts, _subscriptions_subscribeToQuotes;
            console.log('📡 Setting up real-time subscriptions...');
            const channelId = Math.random().toString(36).substring(7);
            const channels = [
                (_subscriptions_subscribeToProjects = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscriptions"].subscribeToProjects) === null || _subscriptions_subscribeToProjects === void 0 ? void 0 : _subscriptions_subscribeToProjects.call(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscriptions"], debouncedHandleRealtimeChange, "projects-".concat(channelId)),
                (_subscriptions_subscribeToTasks = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscriptions"].subscribeToTasks) === null || _subscriptions_subscribeToTasks === void 0 ? void 0 : _subscriptions_subscribeToTasks.call(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscriptions"], debouncedHandleRealtimeChange, "tasks-".concat(channelId)),
                (_subscriptions_subscribeToContacts = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscriptions"].subscribeToContacts) === null || _subscriptions_subscribeToContacts === void 0 ? void 0 : _subscriptions_subscribeToContacts.call(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscriptions"], debouncedHandleRealtimeChange, "contacts-".concat(channelId)),
                (_subscriptions_subscribeToQuotes = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscriptions"].subscribeToQuotes) === null || _subscriptions_subscribeToQuotes === void 0 ? void 0 : _subscriptions_subscribeToQuotes.call(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscriptions"], debouncedHandleRealtimeChange, "quotes-".concat(channelId))
            ].filter(Boolean);
            console.log("✅ Set up ".concat(channels.length, " real-time subscriptions"));
            return ()=>{
                console.log('🧹 Cleaning up real-time subscriptions...');
                channels.forEach((channel)=>{
                    if (channel && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"]) {
                        try {
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].removeChannel(channel);
                        } catch (error) {
                            console.warn('Error removing channel:', error);
                        }
                    }
                });
            };
        } catch (error) {
            console.error('❌ Error setting up real-time subscriptions:', error);
            return ()=>{};
        }
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
        console.log(type ? "🧹 Cleared cache for ".concat(type) : '🧹 Cleared all cache');
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
            console.log("🔄 Retrying connection (attempt ".concat(connectionRetries + 1, "/").concat(MAX_RETRY_ATTEMPTS, ")..."));
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
        if (!isClient || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbHelpers"]) return [];
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
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbHelpers"].getUsers();
                    break;
                case 'projects':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbHelpers"].getProjects();
                    break;
                case 'tasks':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbHelpers"].getTasks();
                    break;
                case 'materials':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbHelpers"].getMaterials();
                    break;
                case 'documents':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbHelpers"].getDocuments();
                    break;
                case 'contacts':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbHelpers"].getContacts();
                    break;
                case 'quotes':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbHelpers"].getQuotes();
                    break;
                case 'posts':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbHelpers"].getPosts();
                    break;
                case 'settings':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbHelpers"].getSettings();
                    break;
                case 'newsletter_subscribers':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbHelpers"].getNewsletterSubscribers();
                    break;
                default:
                    const stats = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbHelpers"].getDashboardStats();
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
        if (!isClient || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbHelpers"]) {
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
                const { data: currentUser, error: userError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('users').select('role, is_active').eq('id', currentUserId).single();
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
                var _data_customerProfile, _data_projectContext, _data_internalNotes;
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
                    lead_score: ((_data_customerProfile = data.customerProfile) === null || _data_customerProfile === void 0 ? void 0 : _data_customerProfile.leadScore) || 50,
                    estimated_value: ((_data_projectContext = data.projectContext) === null || _data_projectContext === void 0 ? void 0 : _data_projectContext.estimatedBudget) || 0,
                    conversion_probability: ((_data_internalNotes = data.internalNotes) === null || _data_internalNotes === void 0 ? void 0 : _data_internalNotes.conversionProbability) || 30,
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
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbHelpers"].createUser(mappedData);
                    break;
                case 'projects':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbHelpers"].createProject(mappedData);
                    break;
                case 'tasks':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbHelpers"].createTask(mappedData);
                    break;
                case 'materials':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbHelpers"].createMaterial(mappedData);
                    break;
                case 'documents':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbHelpers"].createDocument(mappedData);
                    break;
                case 'contacts':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbHelpers"].createContact(mappedData);
                    break;
                case 'quotes':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbHelpers"].createQuote(mappedData);
                    break;
                case 'posts':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbHelpers"].createPost(mappedData);
                    break;
                case 'newsletter_subscribers':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbHelpers"].createNewsletterSubscriber(mappedData);
                    break;
                default:
                    throw new Error("Unsupported record type: ".concat(type));
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
        if (!isClient || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbHelpers"]) {
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
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbHelpers"].updateUser(id, sanitizedData);
                    break;
                case 'projects':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbHelpers"].updateProject(id, sanitizedData);
                    break;
                case 'tasks':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbHelpers"].updateTask(id, sanitizedData);
                    break;
                case 'materials':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbHelpers"].updateMaterial(id, sanitizedData);
                    break;
                case 'documents':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbHelpers"].updateDocument(id, sanitizedData);
                    break;
                case 'contacts':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbHelpers"].updateContact(id, sanitizedData);
                    break;
                case 'quotes':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbHelpers"].updateQuote(id, sanitizedData);
                    break;
                case 'posts':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbHelpers"].updatePost(id, sanitizedData);
                    break;
                case 'newsletter_subscribers':
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbHelpers"].updateNewsletterSubscriber(id, sanitizedData);
                    break;
                default:
                    throw new Error("Unsupported record type: ".concat(type));
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
        if (!isClient || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbHelpers"]) {
            throw new Error('Database not initialized');
        }
        try {
            console.log('🗑️ Deleting record:', {
                id,
                type
            });
            switch(type){
                case 'users':
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbHelpers"].deleteUser(id);
                    break;
                case 'newsletter_subscribers':
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbHelpers"].deleteNewsletterSubscriber(id);
                    break;
                case 'contacts':
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbHelpers"].deleteContact(id);
                    break;
                case 'quotes':
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbHelpers"].deleteQuote(id);
                    break;
                default:
                    throw new Error("Delete not implemented for type: ".concat(type));
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
        console.log("📡 Broadcasting ".concat(action, " for record:"), record);
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
            lastSyncTime: lastSyncTime === null || lastSyncTime === void 0 ? void 0 : lastSyncTime.toISOString(),
            pendingChanges,
            connectionRetries,
            lastError
        };
        if (!isClient || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbHelpers"]) {
            return defaultStats;
        }
        try {
            const stats = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbHelpers"].getDashboardStats();
            return {
                ...stats,
                dataAccuracy,
                isOnline,
                lastSyncTime: lastSyncTime === null || lastSyncTime === void 0 ? void 0 : lastSyncTime.toISOString(),
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
        if (!isClient || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbHelpers"]) return [];
        try {
            const [contacts, quotes, projects] = await Promise.allSettled([
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbHelpers"].getContacts(),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbHelpers"].getQuotes(),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbHelpers"].getProjects()
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
                    description: "".concat(record.type, ' "').concat(record.name || record.title || 'Unnamed', '" was created'),
                    user: 'System',
                    timestamp: record.created_at,
                    action: 'created',
                    validated: true,
                    accuracy: "".concat(dataAccuracy, "%"),
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
                issues.push("Data accuracy is below threshold: ".concat(dataAccuracy, "%"));
            }
            // Check network status
            if (!isOnline) {
                issues.push('System is offline');
            }
            // Check connection retry status
            if (connectionRetries > 0) {
                issues.push("Connection retries: ".concat(connectionRetries, "/").concat(MAX_RETRY_ATTEMPTS));
            }
            // Check for recent errors
            if (lastError) {
                issues.push("Recent error: ".concat(lastError));
            }
            return {
                isValid: issues.length === 0,
                issues
            };
        } catch (error) {
            issues.push("Data integrity check failed: ".concat(error instanceof Error ? error.message : 'Unknown error'));
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-screen bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center max-w-md mx-auto p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-6"
                    }, void 0, false, {
                        fileName: "[project]/src/contexts/DatabaseContext.tsx",
                        lineNumber: 1016,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold text-gray-900 mb-2",
                        children: "Initializing Database"
                    }, void 0, false, {
                        fileName: "[project]/src/contexts/DatabaseContext.tsx",
                        lineNumber: 1017,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 mb-4",
                        children: "Connecting to database and setting up real-time subscriptions..."
                    }, void 0, false, {
                        fileName: "[project]/src/contexts/DatabaseContext.tsx",
                        lineNumber: 1020,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    connectionRetries > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-3 h-3 bg-yellow-400 rounded-full animate-pulse mr-3"
                                }, void 0, false, {
                                    fileName: "[project]/src/contexts/DatabaseContext.tsx",
                                    lineNumber: 1027,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    lastError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-red-50 border border-red-200 rounded-lg p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DatabaseContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/DatabaseContext.tsx",
        lineNumber: 1048,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(DatabaseProvider, "Bpbcdw+u4Gn47ullhzD5lMnJUlY=");
_c = DatabaseProvider;
const ConnectionStatus = ()=>{
    _s2();
    const { isOnline, lastSyncTime, pendingChanges, connectionRetries, lastError } = useDatabase();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-4 right-4 z-50 px-4 py-2 rounded-lg text-sm font-medium shadow-lg transition-all duration-200 ".concat(isOnline ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-2 h-2 rounded-full ".concat(isOnline ? 'bg-green-500' : 'bg-red-500')
                    }, void 0, false, {
                        fileName: "[project]/src/contexts/DatabaseContext.tsx",
                        lineNumber: 1063,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: isOnline ? 'Online' : 'Offline'
                    }, void 0, false, {
                        fileName: "[project]/src/contexts/DatabaseContext.tsx",
                        lineNumber: 1064,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    pendingChanges > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    connectionRetries > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            lastSyncTime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            lastError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s2(ConnectionStatus, "gvgh6n9ayc6ydQsqFCLetjLKykg=", false, function() {
    return [
        useDatabase
    ];
});
_c1 = ConnectionStatus;
const __TURBOPACK__default__export__ = DatabaseProvider;
var _c, _c1;
__turbopack_context__.k.register(_c, "DatabaseProvider");
__turbopack_context__.k.register(_c1, "ConnectionStatus");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_af7014eb._.js.map
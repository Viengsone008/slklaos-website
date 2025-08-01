(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/contexts/SettingsContext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "SettingsProvider": ()=>SettingsProvider,
    "default": ()=>__TURBOPACK__default__export__,
    "useSettings": ()=>useSettings
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const defaultSettings = {
    // General Settings
    siteName: 'SLK Trading & Design Construction',
    siteDescription: 'Leading construction company in Laos offering design construction, waterproofing materials, and flooring materials.',
    siteUrl: 'https://slktrading.la',
    adminEmail: 'admin@slklaos.la',
    timezone: 'Asia/Vientiane',
    language: 'en',
    dateFormat: 'MM/DD/YYYY',
    timeFormat: '12',
    // Company Information
    companyName: 'SLK Trading & Design Construction Co., Ltd',
    companyAddress: 'Vientiane Capital, Laos',
    companyPhone: '+856 21 123 456',
    companyEmail: 'info@slktrading.la',
    companyWebsite: 'https://slktrading.la',
    // Security Settings
    sessionTimeout: 24,
    maxLoginAttempts: 5,
    passwordMinLength: 6,
    requireStrongPassword: true,
    enableTwoFactor: false,
    autoLogoutInactive: true,
    // Notification Settings
    emailNotifications: true,
    pushNotifications: false,
    notifyNewPosts: true,
    notifyUserRegistration: true,
    notifySystemUpdates: true,
    // Appearance Settings
    theme: 'light',
    primaryColor: '#f97316',
    secondaryColor: '#3b82f6',
    sidebarCollapsed: false,
    showAnimations: true,
    // Content Settings
    postsPerPage: 10,
    allowComments: false,
    moderateComments: true,
    defaultPostStatus: 'draft',
    autoSaveInterval: 30,
    // Backup Settings
    autoBackup: true,
    backupFrequency: 'weekly',
    backupRetention: 30,
    // Performance Settings
    enableCaching: true,
    cacheExpiration: 3600,
    optimizeImages: true,
    lazyLoading: true
};
const SettingsContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useSettings = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SettingsContext);
    if (context === undefined) {
        throw new Error('useSettings must be used within a SettingsProvider');
    }
    return context;
};
_s(useSettings, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const SettingsProvider = (param)=>{
    let { children } = param;
    _s1();
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultSettings);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Client-side hydration check
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsProvider.useEffect": ()=>{
            setIsClient(true);
        }
    }["SettingsProvider.useEffect"], []);
    // Load settings on client-side only
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsProvider.useEffect": ()=>{
            if (!isClient) return;
            loadSettings();
        }
    }["SettingsProvider.useEffect"], [
        isClient
    ]);
    // Apply settings when they change (client-side only)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsProvider.useEffect": ()=>{
            if (!isClient || !isLoaded) return;
            applyTheme();
            applyPrimaryColor();
            updateDocumentTitle();
            setupAutoLogout();
        }
    }["SettingsProvider.useEffect"], [
        settings,
        isClient,
        isLoaded
    ]);
    const loadSettings = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            const savedSettings = localStorage.getItem('slk_admin_settings');
            if (savedSettings) {
                const parsed = JSON.parse(savedSettings);
                setSettings({
                    ...defaultSettings,
                    ...parsed
                });
            }
        } catch (error) {
            console.error('Error loading settings:', error);
        } finally{
            setIsLoaded(true);
        }
    };
    const updateSettings = (newSettings)=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const updatedSettings = {
            ...settings,
            ...newSettings
        };
        setSettings(updatedSettings);
        try {
            localStorage.setItem('slk_admin_settings', JSON.stringify(updatedSettings));
            // Trigger notifications if enabled
            if (settings.emailNotifications && settings.notifySystemUpdates) {
                console.log('📧 Settings updated - notification would be sent if email service was configured');
            }
        } catch (error) {
            console.error('Error saving settings:', error);
        }
    };
    const resetSettings = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        setSettings(defaultSettings);
        try {
            localStorage.removeItem('slk_admin_settings');
        } catch (error) {
            console.error('Error resetting settings:', error);
        }
    };
    const exportSettings = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            const dataStr = JSON.stringify(settings, null, 2);
            const dataBlob = new Blob([
                dataStr
            ], {
                type: 'application/json'
            });
            const url = URL.createObjectURL(dataBlob);
            const link = document.createElement('a');
            link.href = url;
            link.download = "slk-settings-".concat(new Date().toISOString().split('T')[0], ".json");
            link.click();
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error exporting settings:', error);
        }
    };
    const importSettings = (settingsData)=>{
        updateSettings(settingsData);
    };
    const applyTheme = ()=>{
        if ("object" === 'undefined' || typeof document === 'undefined') return;
        try {
            const root = document.documentElement;
            if (settings.theme === 'dark') {
                root.classList.add('dark');
            } else if (settings.theme === 'light') {
                root.classList.remove('dark');
            } else if (settings.theme === 'auto') {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (prefersDark) {
                    root.classList.add('dark');
                } else {
                    root.classList.remove('dark');
                }
            }
            // Apply animations setting
            if (!settings.showAnimations) {
                root.style.setProperty('--animation-duration', '0s');
                root.style.setProperty('--transition-duration', '0s');
            } else {
                root.style.removeProperty('--animation-duration');
                root.style.removeProperty('--transition-duration');
            }
        } catch (error) {
            console.error('Error applying theme:', error);
        }
    };
    const applyPrimaryColor = ()=>{
        if ("object" === 'undefined' || typeof document === 'undefined') return;
        try {
            const root = document.documentElement;
            // Convert hex to RGB for CSS custom properties
            const hexToRgb = (hex)=>{
                const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                return result ? {
                    r: parseInt(result[1], 16),
                    g: parseInt(result[2], 16),
                    b: parseInt(result[3], 16)
                } : null;
            };
            const primaryRgb = hexToRgb(settings.primaryColor);
            const secondaryRgb = hexToRgb(settings.secondaryColor);
            if (primaryRgb) {
                root.style.setProperty('--color-primary', "".concat(primaryRgb.r, ", ").concat(primaryRgb.g, ", ").concat(primaryRgb.b));
                root.style.setProperty('--color-primary-hex', settings.primaryColor);
            }
            if (secondaryRgb) {
                root.style.setProperty('--color-secondary', "".concat(secondaryRgb.r, ", ").concat(secondaryRgb.g, ", ").concat(secondaryRgb.b));
                root.style.setProperty('--color-secondary-hex', settings.secondaryColor);
            }
        } catch (error) {
            console.error('Error applying primary color:', error);
        }
    };
    const updateDocumentTitle = ()=>{
        if (typeof document === 'undefined') return;
        try {
            document.title = "".concat(settings.siteName, " - Admin Panel");
            // Update meta description
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.setAttribute('content', settings.siteDescription);
            }
        } catch (error) {
            console.error('Error updating document title:', error);
        }
    };
    const setupAutoLogout = ()=>{
        if ("object" === 'undefined' || !settings.autoLogoutInactive) return;
        try {
            const timeoutDuration = settings.sessionTimeout * 60 * 60 * 1000; // Convert hours to milliseconds
            // Clear existing timeout
            const existingTimeout = localStorage.getItem('slk_auto_logout_timeout');
            if (existingTimeout) {
                clearTimeout(parseInt(existingTimeout));
            }
            // Set new timeout
            const timeoutId = setTimeout(()=>{
                console.log('🔒 Auto-logout triggered due to inactivity');
                try {
                    localStorage.removeItem('admin_user');
                    localStorage.removeItem('slk_extended_session');
                    localStorage.removeItem('slk_login_time');
                    window.location.href = '/admin';
                } catch (error) {
                    console.error('Error during auto-logout:', error);
                }
            }, timeoutDuration);
            localStorage.setItem('slk_auto_logout_timeout', timeoutId.toString());
        } catch (error) {
            console.error('Error setting up auto-logout:', error);
        }
    };
    const formatDate = (date)=>{
        try {
            const dateObj = typeof date === 'string' ? new Date(date) : date;
            // Check for invalid date
            if (isNaN(dateObj.getTime())) {
                return 'Invalid Date';
            }
            const options = {
                timeZone: settings.timezone
            };
            switch(settings.dateFormat){
                case 'MM/DD/YYYY':
                    options.month = '2-digit';
                    options.day = '2-digit';
                    options.year = 'numeric';
                    return dateObj.toLocaleDateString('en-US', options);
                case 'DD/MM/YYYY':
                    options.day = '2-digit';
                    options.month = '2-digit';
                    options.year = 'numeric';
                    return dateObj.toLocaleDateString('en-GB', options);
                case 'YYYY-MM-DD':
                    return dateObj.toISOString().split('T')[0];
                default:
                    return dateObj.toLocaleDateString();
            }
        } catch (error) {
            console.error('Error formatting date:', error);
            return 'Invalid Date';
        }
    };
    const formatTime = (date)=>{
        try {
            const dateObj = typeof date === 'string' ? new Date(date) : date;
            // Check for invalid date
            if (isNaN(dateObj.getTime())) {
                return 'Invalid Time';
            }
            const options = {
                timeZone: settings.timezone,
                hour12: settings.timeFormat === '12',
                hour: '2-digit',
                minute: '2-digit'
            };
            return dateObj.toLocaleTimeString(undefined, options);
        } catch (error) {
            console.error('Error formatting time:', error);
            return 'Invalid Time';
        }
    };
    const value = {
        settings,
        updateSettings,
        resetSettings,
        exportSettings,
        importSettings,
        applyTheme,
        formatDate,
        formatTime,
        isLoaded
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/SettingsContext.tsx",
        lineNumber: 424,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(SettingsProvider, "xJLyU0rg9ZKNharyHniLKcownsg=");
_c = SettingsProvider;
const __TURBOPACK__default__export__ = SettingsProvider;
var _c;
__turbopack_context__.k.register(_c, "SettingsProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/contexts/SocialShareContext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ClientOnlySocialShareProvider": ()=>ClientOnlySocialShareProvider,
    "SocialShareProvider": ()=>SocialShareProvider,
    "useSocialShare": ()=>useSocialShare
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-client] (ecmascript)");
;
;
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
// Dynamically import toast to prevent SSR issues
const toast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i).then((mod)=>mod.toast), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
// Dynamically import ToastContainer
const ToastContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i).then((mod)=>mod.ToastContainer), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = ToastContainer;
// Import CSS only on client side
if ("TURBOPACK compile-time truthy", 1) {
    __turbopack_context__.r("[project]/node_modules/react-toastify/dist/ReactToastify.css [app-client] (css, async loader)")(__turbopack_context__.i);
}
const SocialShareContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useSocialShare = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SocialShareContext);
    if (context === undefined) {
        throw new Error('useSocialShare must be used within a SocialShareProvider');
    }
    return context;
};
_s(useSocialShare, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const SocialShareProvider = (param)=>{
    let { children } = param;
    _s1();
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSharing, setIsSharing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastSharedPost, setLastSharedPost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sharingStats, setSharingStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        facebook: 0,
        instagram: 0,
        linkedin: 0,
        email: 0
    });
    // Client-side hydration check
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SocialShareProvider.useEffect": ()=>{
            setIsClient(true);
            // Load sharing stats from localStorage
            if ("TURBOPACK compile-time truthy", 1) {
                const savedStats = localStorage.getItem('sharingStats');
                if (savedStats) {
                    try {
                        setSharingStats(JSON.parse(savedStats));
                    } catch (error) {
                        console.error('Error loading sharing stats:', error);
                    }
                }
            }
        }
    }["SocialShareProvider.useEffect"], []);
    // Save stats to localStorage whenever they change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SocialShareProvider.useEffect": ()=>{
            if (isClient && "object" !== 'undefined') {
                localStorage.setItem('sharingStats', JSON.stringify(sharingStats));
            }
        }
    }["SocialShareProvider.useEffect"], [
        sharingStats,
        isClient
    ]);
    // Helper function to show toast notifications
    const showToast = async (type, message)=>{
        if (!isClient) return;
        try {
            const toastModule = await __turbopack_context__.r("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
            toastModule.toast[type](message);
        } catch (error) {
            console.error('Error showing toast:', error);
            // Fallback to console log
            console.log("".concat(type.toUpperCase(), ": ").concat(message));
        }
    };
    // Function to get base URL safely
    const getBaseUrl = ()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            return window.location.origin;
        }
        //TURBOPACK unreachable
        ;
    };
    // Function to share to Facebook
    const shareToFacebook = async (post)=>{
        try {
            setIsSharing(true);
            const res = await fetch('/api/share-facebook', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    post
                })
            });
            const data = await res.json();
            if (!res.ok) {
                console.error('Facebook API error:', data);
                throw new Error(data.error || 'Failed to share on Facebook');
            }
            setLastSharedPost(post);
            setSharingStats((prev)=>({
                    ...prev,
                    facebook: prev.facebook + 1
                }));
            await showToast('success', 'Shared to Facebook successfully!');
            return true;
        } catch (error) {
            console.error('❌ Error sharing to Facebook:', error);
            await showToast('error', 'Failed to share to Facebook. Please try again.');
            return false;
        } finally{
            setIsSharing(false);
        }
    };
    // Function to share to Instagram
    const shareToInstagram = async (post)=>{
        try {
            setIsSharing(true);
            console.log('🔄 Sharing to Instagram:', post.title);
            if (!isClient) {
                throw new Error('Social sharing only available on client side');
            }
            const shareData = {
                platform: 'instagram',
                post: {
                    id: post.id,
                    title: post.title,
                    excerpt: post.excerpt,
                    featuredImage: post.featuredImage,
                    url: "".concat(getBaseUrl(), "/news/").concat(post.id),
                    content: post.content ? post.content.substring(0, 200) + '...' : post.excerpt,
                    tags: post.tags
                }
            };
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].functions.invoke('share-to-social', {
                body: shareData
            });
            if (error) {
                console.error('Supabase function error:', error);
                throw error;
            }
            await new Promise((resolve)=>setTimeout(resolve, 1800));
            console.log('✅ Shared to Instagram successfully:', {
                postId: post.id,
                postTitle: post.title,
                timestamp: new Date().toISOString(),
                instagramMediaId: (data === null || data === void 0 ? void 0 : data.mediaId) || "ig_".concat(Date.now(), "_").concat(Math.floor(Math.random() * 1000))
            });
            setLastSharedPost(post);
            setSharingStats((prev)=>({
                    ...prev,
                    instagram: prev.instagram + 1
                }));
            await showToast('success', 'Shared to Instagram successfully!');
            return true;
        } catch (error) {
            console.error('❌ Error sharing to Instagram:', error);
            await showToast('error', 'Failed to share to Instagram. Please try again.');
            return false;
        } finally{
            setIsSharing(false);
        }
    };
    // Function to share to LinkedIn
    const shareToLinkedIn = async (post)=>{
        try {
            setIsSharing(true);
            console.log('🔄 Sharing to LinkedIn:', post.title);
            if (!isClient) {
                throw new Error('Social sharing only available on client side');
            }
            const shareData = {
                platform: 'linkedin',
                post: {
                    id: post.id,
                    title: post.title,
                    excerpt: post.excerpt,
                    featuredImage: post.featuredImage,
                    url: "".concat(getBaseUrl(), "/news/").concat(post.id),
                    content: post.content ? post.content.substring(0, 200) + '...' : post.excerpt,
                    tags: post.tags
                }
            };
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].functions.invoke('share-to-social', {
                body: shareData
            });
            if (error) {
                console.error('Supabase function error:', error);
                throw error;
            }
            await new Promise((resolve)=>setTimeout(resolve, 1600));
            console.log('✅ Shared to LinkedIn successfully:', {
                postId: post.id,
                postTitle: post.title,
                timestamp: new Date().toISOString(),
                linkedinPostId: (data === null || data === void 0 ? void 0 : data.postId) || "li_".concat(Date.now(), "_").concat(Math.floor(Math.random() * 1000))
            });
            setLastSharedPost(post);
            setSharingStats((prev)=>({
                    ...prev,
                    linkedin: prev.linkedin + 1
                }));
            await showToast('success', 'Shared to LinkedIn successfully!');
            return true;
        } catch (error) {
            console.error('❌ Error sharing to LinkedIn:', error);
            await showToast('error', 'Failed to share to LinkedIn. Please try again.');
            return false;
        } finally{
            setIsSharing(false);
        }
    };
    // Function to share to all platforms
    const shareToAllPlatforms = async (post)=>{
        if (!isClient) {
            await showToast('error', 'Social sharing only available on client side');
            return {
                facebook: false,
                instagram: false,
                linkedin: false
            };
        }
        setIsSharing(true);
        console.log('🔄 Sharing to all platforms:', post.title);
        try {
            // Share to all platforms sequentially to avoid rate limiting
            const facebookResult = await shareToFacebook(post).catch(()=>false);
            await new Promise((resolve)=>setTimeout(resolve, 500)); // Small delay between shares
            const instagramResult = await shareToInstagram(post).catch(()=>false);
            await new Promise((resolve)=>setTimeout(resolve, 500));
            const linkedinResult = await shareToLinkedIn(post).catch(()=>false);
            // Count successful shares
            const successCount = [
                facebookResult,
                instagramResult,
                linkedinResult
            ].filter(Boolean).length;
            if (successCount === 3) {
                await showToast('success', 'Successfully shared to all platforms!');
            } else if (successCount > 0) {
                await showToast('info', "Shared to ".concat(successCount, " out of 3 platforms"));
            } else {
                await showToast('error', 'Failed to share to any platform');
            }
            return {
                facebook: facebookResult,
                instagram: instagramResult,
                linkedin: linkedinResult
            };
        } catch (error) {
            console.error('❌ Error sharing to all platforms:', error);
            await showToast('error', 'An error occurred while sharing');
            return {
                facebook: false,
                instagram: false,
                linkedin: false
            };
        } finally{
            setIsSharing(false);
        }
    };
    // Function to send email notification to subscribers
    const sendEmailNotification = async (post)=>{
        try {
            setIsSharing(true);
            console.log('📧 Sending email notification for post:', post.title);
            if (!isClient) {
                throw new Error('Email notifications only available on client side');
            }
            const emailData = {
                post: {
                    id: post.id,
                    title: post.title,
                    excerpt: post.excerpt,
                    featuredImage: post.featuredImage,
                    url: "".concat(getBaseUrl(), "/news/").concat(post.id),
                    content: post.content ? post.content.substring(0, 200) + '...' : post.excerpt,
                    author: post.author,
                    publishedAt: post.publishedAt
                }
            };
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].functions.invoke('send-email-notification', {
                body: emailData
            });
            if (error) {
                console.error('Supabase function error:', error);
                throw error;
            }
            await new Promise((resolve)=>setTimeout(resolve, 2000));
            const recipientCount = (data === null || data === void 0 ? void 0 : data.recipientCount) || Math.floor(Math.random() * 100) + 50;
            console.log('✅ Email notification sent successfully:', {
                postId: post.id,
                postTitle: post.title,
                timestamp: new Date().toISOString(),
                recipientCount
            });
            setSharingStats((prev)=>({
                    ...prev,
                    email: prev.email + 1
                }));
            await showToast('success', "Email notification sent to ".concat(recipientCount, " subscribers!"));
            return true;
        } catch (error) {
            console.error('❌ Error sending email notification:', error);
            await showToast('error', 'Failed to send email notification. Please try again.');
            return false;
        } finally{
            setIsSharing(false);
        }
    };
    const value = {
        shareToFacebook,
        shareToInstagram,
        shareToLinkedIn,
        shareToAllPlatforms,
        sendEmailNotification,
        isSharing,
        lastSharedPost,
        sharingStats
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialShareContext.Provider, {
        value: value,
        children: [
            children,
            isClient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastContainer, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                newestOnTop: false,
                closeOnClick: true,
                rtl: false,
                pauseOnFocusLoss: true,
                draggable: true,
                pauseOnHover: true,
                theme: "light"
            }, void 0, false, {
                fileName: "[project]/src/contexts/SocialShareContext.tsx",
                lineNumber: 385,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/contexts/SocialShareContext.tsx",
        lineNumber: 382,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(SocialShareProvider, "OGeKBwEg6efSnWgEisQIPJciZSs=");
_c1 = SocialShareProvider;
const ClientOnlySocialShareProvider = (param)=>{
    let { children } = param;
    _s2();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientOnlySocialShareProvider.useEffect": ()=>{
            setMounted(true);
        }
    }["ClientOnlySocialShareProvider.useEffect"], []);
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialShareProvider, {
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/SocialShareContext.tsx",
        lineNumber: 414,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s2(ClientOnlySocialShareProvider, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c2 = ClientOnlySocialShareProvider;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ToastContainer");
__turbopack_context__.k.register(_c1, "SocialShareProvider");
__turbopack_context__.k.register(_c2, "ClientOnlySocialShareProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/contexts/PostContext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "PostProvider": ()=>PostProvider,
    "usePost": ()=>usePost,
    "withPostProvider": ()=>withPostProvider
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$DatabaseContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/DatabaseContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const PostContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const usePost = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(PostContext);
    if (!context) {
        throw new Error('usePost must be used within a PostProvider');
    }
    return context;
};
_s(usePost, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const PostProvider = (param)=>{
    let { children } = param;
    _s1();
    const [posts, setPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Get database context with fallback
    let subscribeToChanges;
    let broadcastChange;
    try {
        const dbContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$DatabaseContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDatabase"])();
        subscribeToChanges = dbContext === null || dbContext === void 0 ? void 0 : dbContext.subscribeToChanges;
        broadcastChange = dbContext === null || dbContext === void 0 ? void 0 : dbContext.broadcastChange;
    } catch (err) {
        console.warn('DatabaseContext not available, running without real-time sync');
    }
    // Client-side detection
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PostProvider.useEffect": ()=>{
            setIsClient(true);
        }
    }["PostProvider.useEffect"], []);
    // Load posts with error handling
    const loadPosts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PostProvider.useCallback[loadPosts]": async ()=>{
            if (!isClient) return;
            try {
                setIsLoading(true);
                setError(null);
                const { data, error: fetchError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('posts').select('*').order('published_at', {
                    ascending: false
                });
                if (fetchError) {
                    throw new Error("Failed to fetch posts: ".concat(fetchError.message));
                }
                if (data) {
                    setPosts(data);
                    console.log('✅ Posts loaded successfully:', data.length);
                }
            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
                console.error('❌ Failed to load posts:', errorMessage);
                setError(errorMessage);
            } finally{
                setIsLoading(false);
            }
        }
    }["PostProvider.useCallback[loadPosts]"], [
        isClient
    ]);
    // Setup real-time synchronization
    const setupRealTimeSync = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PostProvider.useCallback[setupRealTimeSync]": ()=>{
            if (!isClient || !subscribeToChanges) {
                return ({
                    "PostProvider.useCallback[setupRealTimeSync]": ()=>{}
                })["PostProvider.useCallback[setupRealTimeSync]"]; // Return empty cleanup function
            }
            try {
                return subscribeToChanges({
                    "PostProvider.useCallback[setupRealTimeSync]": (records)=>{
                        const postRecords = records.filter({
                            "PostProvider.useCallback[setupRealTimeSync].postRecords": (record)=>record.type === 'posts'
                        }["PostProvider.useCallback[setupRealTimeSync].postRecords"]);
                        if (postRecords.length > 0) {
                            console.log('🔄 Syncing posts from real-time updates');
                            loadPosts();
                        }
                    }
                }["PostProvider.useCallback[setupRealTimeSync]"]);
            } catch (err) {
                console.warn('Failed to setup real-time sync:', err);
                return ({
                    "PostProvider.useCallback[setupRealTimeSync]": ()=>{}
                })["PostProvider.useCallback[setupRealTimeSync]"]; // Return empty cleanup function
            }
        }
    }["PostProvider.useCallback[setupRealTimeSync]"], [
        isClient,
        subscribeToChanges,
        loadPosts
    ]);
    // Check and update scheduled posts
    const checkScheduledPosts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PostProvider.useCallback[checkScheduledPosts]": ()=>{
            if (!isClient || posts.length === 0) return;
            const now = new Date();
            let hasChanges = false;
            const updatedPosts = posts.map({
                "PostProvider.useCallback[checkScheduledPosts].updatedPosts": (post)=>{
                    if (post.status === 'scheduled' && post.scheduledAt) {
                        const scheduledTime = new Date(post.scheduledAt);
                        if (scheduledTime <= now) {
                            hasChanges = true;
                            return {
                                ...post,
                                status: 'published',
                                publishedAt: now.toISOString()
                            };
                        }
                    }
                    return post;
                }
            }["PostProvider.useCallback[checkScheduledPosts].updatedPosts"]);
            if (hasChanges) {
                setPosts(updatedPosts);
                // Broadcast changes if available
                if (broadcastChange) {
                    try {
                        broadcastChange({
                            id: 'posts-scheduled-update',
                            type: 'posts',
                            data: updatedPosts,
                            createdAt: new Date().toISOString(),
                            updatedAt: new Date().toISOString(),
                            createdBy: 'system',
                            version: 1
                        }, 'update');
                    } catch (err) {
                        console.warn('Failed to broadcast scheduled post changes:', err);
                    }
                }
                console.log('✅ Scheduled posts updated');
            }
        }
    }["PostProvider.useCallback[checkScheduledPosts]"], [
        isClient,
        posts,
        broadcastChange
    ]);
    // Initialize context
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PostProvider.useEffect": ()=>{
            if (!isClient) return;
            let unsubscribe;
            let interval;
            const initialize = {
                "PostProvider.useEffect.initialize": async ()=>{
                    await loadPosts();
                    unsubscribe = setupRealTimeSync();
                    // Check scheduled posts every minute
                    interval = setInterval(checkScheduledPosts, 60000);
                }
            }["PostProvider.useEffect.initialize"];
            initialize();
            return ({
                "PostProvider.useEffect": ()=>{
                    if (unsubscribe) {
                        try {
                            unsubscribe();
                        } catch (err) {
                            console.warn('Error during cleanup:', err);
                        }
                    }
                    if (interval) {
                        clearInterval(interval);
                    }
                }
            })["PostProvider.useEffect"];
        }
    }["PostProvider.useEffect"], [
        isClient,
        loadPosts,
        setupRealTimeSync,
        checkScheduledPosts
    ]);
    // Add new post
    const addPost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PostProvider.useCallback[addPost]": async (postData)=>{
            if (!isClient) return;
            try {
                setError(null);
                // Generate UUID safely for client-side
                const generateId = {
                    "PostProvider.useCallback[addPost].generateId": ()=>{
                        if (typeof crypto !== 'undefined' && crypto.randomUUID) {
                            return crypto.randomUUID();
                        }
                        // Fallback for environments without crypto.randomUUID
                        return 'post-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
                    }
                }["PostProvider.useCallback[addPost].generateId"];
                const newPost = {
                    id: generateId(),
                    ...postData,
                    author: postData.author || 'SLK Admin',
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                    publishedAt: postData.status === 'published' ? new Date().toISOString() : undefined,
                    scheduledAt: postData.status === 'scheduled' ? postData.scheduledAt : undefined
                };
                // Insert into Supabase
                const { error: insertError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('posts').insert([
                    newPost
                ]);
                if (insertError) {
                    throw new Error("Failed to create post: ".concat(insertError.message));
                }
                // Update local state
                setPosts({
                    "PostProvider.useCallback[addPost]": (prev)=>[
                            newPost,
                            ...prev
                        ]
                }["PostProvider.useCallback[addPost]"]);
                // Broadcast change if available
                if (broadcastChange) {
                    try {
                        broadcastChange({
                            id: 'posts-add',
                            type: 'posts',
                            data: newPost,
                            createdAt: new Date().toISOString(),
                            updatedAt: new Date().toISOString(),
                            createdBy: 'user',
                            version: 1
                        }, 'insert');
                    } catch (err) {
                        console.warn('Failed to broadcast post addition:', err);
                    }
                }
                console.log('✅ Post added successfully:', newPost.title);
            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : 'Failed to add post';
                console.error('❌ Error adding post:', errorMessage);
                setError(errorMessage);
                throw err; // Re-throw for component error handling
            }
        }
    }["PostProvider.useCallback[addPost]"], [
        isClient,
        broadcastChange
    ]);
    // Update existing post
    const updatePost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PostProvider.useCallback[updatePost]": async (id, postData)=>{
            if (!isClient) return;
            try {
                setError(null);
                const existing = posts.find({
                    "PostProvider.useCallback[updatePost].existing": (p)=>p.id === id
                }["PostProvider.useCallback[updatePost].existing"]);
                if (!existing) {
                    throw new Error('Post not found');
                }
                const updatedPost = {
                    ...existing,
                    ...postData,
                    updatedAt: new Date().toISOString(),
                    scheduledAt: postData.status === 'scheduled' ? postData.scheduledAt : undefined,
                    publishedAt: postData.status === 'published' && !existing.publishedAt ? new Date().toISOString() : existing.publishedAt
                };
                // Update in Supabase
                const { error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('posts').update(updatedPost).eq('id', id);
                if (updateError) {
                    throw new Error("Failed to update post: ".concat(updateError.message));
                }
                // Update local state
                const updatedPosts = posts.map({
                    "PostProvider.useCallback[updatePost].updatedPosts": (p)=>p.id === id ? updatedPost : p
                }["PostProvider.useCallback[updatePost].updatedPosts"]);
                setPosts(updatedPosts);
                // Broadcast change if available
                if (broadcastChange) {
                    try {
                        broadcastChange({
                            id: 'posts-update',
                            type: 'posts',
                            data: updatedPost,
                            createdAt: new Date().toISOString(),
                            updatedAt: new Date().toISOString(),
                            createdBy: 'user',
                            version: 1
                        }, 'update');
                    } catch (err) {
                        console.warn('Failed to broadcast post update:', err);
                    }
                }
                console.log('✅ Post updated successfully:', id);
            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : 'Failed to update post';
                console.error('❌ Error updating post:', errorMessage);
                setError(errorMessage);
                throw err; // Re-throw for component error handling
            }
        }
    }["PostProvider.useCallback[updatePost]"], [
        isClient,
        posts,
        broadcastChange
    ]);
    // Delete post
    const deletePost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PostProvider.useCallback[deletePost]": async (id)=>{
            if (!isClient) return;
            try {
                setError(null);
                // Delete from Supabase
                const { error: deleteError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('posts').delete().eq('id', id);
                if (deleteError) {
                    throw new Error("Failed to delete post: ".concat(deleteError.message));
                }
                // Update local state
                const updatedPosts = posts.filter({
                    "PostProvider.useCallback[deletePost].updatedPosts": (p)=>p.id !== id
                }["PostProvider.useCallback[deletePost].updatedPosts"]);
                setPosts(updatedPosts);
                // Broadcast change if available
                if (broadcastChange) {
                    try {
                        broadcastChange({
                            id: 'posts-delete',
                            type: 'posts',
                            data: {
                                id
                            },
                            createdAt: new Date().toISOString(),
                            updatedAt: new Date().toISOString(),
                            createdBy: 'user',
                            version: 1
                        }, 'delete');
                    } catch (err) {
                        console.warn('Failed to broadcast post deletion:', err);
                    }
                }
                console.log('✅ Post deleted successfully:', id);
            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : 'Failed to delete post';
                console.error('❌ Error deleting post:', errorMessage);
                setError(errorMessage);
                throw err; // Re-throw for component error handling
            }
        }
    }["PostProvider.useCallback[deletePost]"], [
        isClient,
        posts,
        broadcastChange
    ]);
    // Utility functions
    const getPost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PostProvider.useCallback[getPost]": (id)=>{
            return posts.find({
                "PostProvider.useCallback[getPost]": (p)=>p.id === id
            }["PostProvider.useCallback[getPost]"]);
        }
    }["PostProvider.useCallback[getPost]"], [
        posts
    ]);
    const getPublishedPosts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PostProvider.useCallback[getPublishedPosts]": ()=>{
            return posts.filter({
                "PostProvider.useCallback[getPublishedPosts]": (p)=>p.status === 'published'
            }["PostProvider.useCallback[getPublishedPosts]"]);
        }
    }["PostProvider.useCallback[getPublishedPosts]"], [
        posts
    ]);
    const getScheduledPosts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PostProvider.useCallback[getScheduledPosts]": ()=>{
            return posts.filter({
                "PostProvider.useCallback[getScheduledPosts]": (p)=>p.status === 'scheduled'
            }["PostProvider.useCallback[getScheduledPosts]"]);
        }
    }["PostProvider.useCallback[getScheduledPosts]"], [
        posts
    ]);
    const getPostsByCategory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PostProvider.useCallback[getPostsByCategory]": (category)=>{
            return posts.filter({
                "PostProvider.useCallback[getPostsByCategory]": (p)=>p.category === category && p.status === 'published'
            }["PostProvider.useCallback[getPostsByCategory]"]);
        }
    }["PostProvider.useCallback[getPostsByCategory]"], [
        posts
    ]);
    // Refresh posts manually
    const refreshPosts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PostProvider.useCallback[refreshPosts]": async ()=>{
            await loadPosts();
        }
    }["PostProvider.useCallback[refreshPosts]"], [
        loadPosts
    ]);
    const value = {
        posts,
        isLoading,
        error,
        addPost,
        updatePost,
        deletePost,
        getPost,
        getPublishedPosts,
        getScheduledPosts,
        getPostsByCategory,
        checkScheduledPosts,
        refreshPosts
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PostContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/PostContext.tsx",
        lineNumber: 400,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(PostProvider, "gai/vZTpb8ONkKd3SOBsDcRrRNQ=");
_c = PostProvider;
const withPostProvider = (Component)=>{
    const WrappedComponent = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PostProvider, {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
                ...props
            }, void 0, false, {
                fileName: "[project]/src/contexts/PostContext.tsx",
                lineNumber: 412,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/contexts/PostContext.tsx",
            lineNumber: 411,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    WrappedComponent.displayName = "withPostProvider(".concat(Component.displayName || Component.name, ")");
    return WrappedComponent;
};
var _c;
__turbopack_context__.k.register(_c, "PostProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/pages/api/reminder-email-template.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>handler,
    "getAppointmentForCandidate": ()=>getAppointmentForCandidate,
    "getReminderEmailTemplate": ()=>getReminderEmailTemplate
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-client] (ecmascript)");
;
async function getAppointmentForCandidate(candidateEmail) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("appointments").select("date, time").eq("candidate_email", candidateEmail).eq("status", "confirmed").single();
    if (error || !data) {
        return {
            slotSelected: false
        };
    }
    return {
        slotSelected: true,
        interviewDate: data.date,
        interviewTime: data.time
    };
}
function getReminderEmailTemplate(param) {
    let { candidateName, interviewDate, interviewTime, slotSelected } = param;
    let subject = "Interview Appointment Reminder";
    let message = "";
    const footer = "\n------------------------------------------------------------\nThis message was sent by SLK Trading & Design Construction Co., Ltd.\nWebsite: www.slklaos.la\nEmail: info@slklaos.la | hr@slklaos.la\nLocation: Vientiane, Laos\n© ".concat(new Date().getFullYear(), " SLK Trading & Design Construction Co., Ltd. All rights reserved.\n");
    if (!slotSelected) {
        message = "Dear ".concat(candidateName, ",\n\nWe hope this message finds you well.\n\nYou have been shortlisted for an interview at SLK Trading & Design Construction Co., Ltd. But you haven't selected your interview appointment slot yet. To proceed, please select your preferred interview appointment slot as soon as possible using the link provided in your previous email.\n\nIf you have any questions or require assistance, feel free to contact our HR team.\n\nBest regards,\nSLK HR Team\n").concat(footer);
    } else {
        message = "Dear ".concat(candidateName, ",\n\nThis is a friendly reminder of your upcoming interview at SLK Trading & Design Construction Co., Ltd.\n\nInterview Date: ").concat(interviewDate, "\nInterview Time: ").concat(interviewTime, "\n\nPlease ensure you arrive on time and bring any necessary documents.\n\nIf you need to reschedule or have any questions, please go to the appointment link in your previous email then enter your name and cancel/reschedule your appointment or contact our HR team.\n\nBest regards,\nSLK HR Team\n").concat(footer);
    }
    return {
        subject,
        message
    };
}
async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }
    const { candidateName, candidateEmail } = req.body;
    if (!candidateName || !candidateEmail) {
        return res.status(400).json({
            error: "Missing candidateName or candidateEmail"
        });
    }
    const appointment = await getAppointmentForCandidate(candidateEmail);
    const email = getReminderEmailTemplate({
        candidateName,
        interviewDate: appointment.interviewDate,
        interviewTime: appointment.interviewTime,
        slotSelected: appointment.slotSelected
    });
    res.status(200).json(email);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_fc4c942d._.js.map
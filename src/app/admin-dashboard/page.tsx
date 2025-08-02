"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../contexts/AuthContext';
import { useDatabase } from '../../contexts/DatabaseContext';
import {
  Users, FolderOpen, CheckSquare, MessageSquare, FileText, Settings, BarChart3, Shield, Crown,
  Building2, LogOut, Home, Search, TrendingUp, Clock, Package, Mail, Briefcase, FilePlus, Eye,
  Calendar, CheckCircle, AlertCircle, Activity, DollarSign, Menu, X, ChevronRight, Database,
  CreditCard, Image, Plus, Filter, Download, RefreshCw, Star, Zap, Target, PieChart, ArrowUpRight,
  ArrowDownRight, Bookmark, Globe, Moon, Sun, ChevronDown, AlertTriangle, BarChart2, MapPin, Bell, User, Info
} from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';
import dynamic from 'next/dynamic';
import toast, { Toaster } from 'react-hot-toast';

// Import separate page components
import ProjectManagement from './projects/page';
import ProductManagement from './Products/page';
import ContactManagement from './contacts/page';
import QuoteManagement from './quotes/page';
import SubscriberManagement from './subscribers/page';
import PostsPage from './posts/page';
import UserManagement from './users/page';
import SettingsManagement from './settings/page';
import CareerPage from './careers/page';

// Temporarily simplified chart components to prevent build timeout
const SimpleChart = ({ data, title }: { data: any[]; title: string }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
      <p className="text-gray-500">Chart will be available after deployment</p>
    </div>
  </div>
);

const AdminDashboard = () => {
  const router = useRouter();
  const { user, isAuthenticated, logout } = useAuth();
  const { isOnline, getStatistics, lastSyncTime } = useDatabase();
  
  // State variables
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [stats, setStats] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [recentActivity, setRecentActivity] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('overview');
  const [selectedTimeRange, setSelectedTimeRange] = useState('This Month');
  const [refreshing, setRefreshing] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showError, setShowError] = useState(false);
  const [chartData, setChartData] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Welcome!',
      message: 'You have successfully logged in.',
      time: new Date(),
      unread: true,
      type: 'success',
    }
  ]);
  const [showNotifications, setShowNotifications] = useState(false);

  // Sidebar categories
  const sidebarCategories = [
    {
      title: 'General',
      items: [
        { title: 'Dashboard', href: '/admin-dashboard', icon: Home, badge: null, description: 'Overview of your account' },
        { title: 'Projects', href: '/admin-dashboard/projects', icon: Building2, description: 'Manage all your projects' },
        { title: 'Products', href: '/admin-dashboard/products', icon: Package, badge: null, description: 'Manage products and inventory' },
        { title: 'Contacts', href: '/admin-dashboard/contacts', icon: Mail, badge: null, description: 'Client and supplier contacts' },
        { title: 'Quotes', href: '/admin-dashboard/quotes', icon: FileText, badge: null, description: 'Manage your quotes' },
        { title: 'Posts', href: '/admin-dashboard/posts', icon: FilePlus, badge: null, description: 'Manage news & blog posts' },
        { title: 'Subscribers', href: '/admin-dashboard/subscribers', icon: User, badge: null, description: 'Newsletter subscribers' },
        { title: 'Careers', href: '/admin-dashboard/careers', icon: Briefcase, badge: null, description: 'Job openings and applications' },
        { title: 'Users', href: '/admin-dashboard/users', icon: Users, badge: null, description: 'Team members and roles' },
      ]
    },
    {
      title: 'Management',
      items: [
        { title: 'Settings', href: '/admin-dashboard/settings', icon: Settings, badge: null, description: 'System configuration' }
      ]
    }
  ];

  // Client-side hydration check
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isAuthenticated || !user) {
      router.push('/admin-login');
      return;
    }
    if (user.role !== 'admin') {
      router.push('/admin-login');
      return;
    }
    loadDashboardData();
  }, [isAuthenticated, user, router]);

  // Update current time every minute
  useEffect(() => {
    if (!isClient) return;

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, [isClient]);

  // Detect mobile screens
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const loadChartData = async () => {
    try {
      const baseData = [
        { name: 'Jan', projects: 4, tasks: 65, quotes: 2 },
        { name: 'Feb', projects: 7, tasks: 78, quotes: 5 },
        { name: 'Mar', projects: 5, tasks: 98, quotes: 8 },
        { name: 'Apr', projects: 9, tasks: 87, quotes: 10 },
        { name: 'May', projects: 12, tasks: 140, quotes: 14 },
        { name: 'Jun', projects: 8, tasks: 120, quotes: 7 },
      ];
      
      let data = baseData;
      if (selectedTimeRange === 'Last Month') {
        data = baseData.map(item => ({
          ...item,
          projects: Math.max(1, item.projects - Math.floor(Math.random() * 3)),
          tasks: Math.max(10, item.tasks - Math.floor(Math.random() * 20)),
          quotes: Math.max(1, item.quotes - Math.floor(Math.random() * 2))
        }));
      } else if (selectedTimeRange === 'This Quarter') {
        data = baseData.map(item => ({
          ...item,
          projects: Math.floor(item.projects * 1.2),
          tasks: Math.floor(item.tasks * 1.15),
          quotes: Math.floor(item.quotes * 1.3)
        }));
      } else if (selectedTimeRange === 'This Year') {
        data = baseData.map(item => ({
          ...item,
          projects: Math.floor(item.projects * 1.5),
          tasks: Math.floor(item.tasks * 1.4),
          quotes: Math.floor(item.quotes * 1.6)
        }));
      }
      
      setChartData(data);
    } catch (error) {
      console.error('Failed to load chart data:', error);
    }
  };

  const loadRecentActivity = async () => {
    try {
      const response = await fetch('/api/recent-activity');
      if (!response.ok) throw new Error('Failed to fetch activity');
      const data = await response.json();

      const iconMap = {
        Building2,
        CheckSquare,
        FileText,
        Users,
      };

      const activityWithIcons = data.map(item => ({
        ...item,
        icon: iconMap[item.icon] || Users,
      }));

      return activityWithIcons; // <-- always return the array
    } catch (error) {
      console.error('Failed to load recent activity:', error);
      return []; // <-- always return an array on error
    }
  };

  const loadDashboardData = async () => {
    try {
      setIsLoading(true);
      
      try {
        const dashboardStats = await getStatistics();
        setStats(dashboardStats);
      } catch (error) {
        setStats({
          totalProjects: 47,
          totalUsers: 23,
          totalTasks: 156,
          newContacts: 12,
          totalQuotes: 34,
          totalMaterials: 248,
          totalSubscribers: 1247
        });
        console.error('Some dashboard statistics could not be loaded.');
      }
      
      try {
        const activity = await loadRecentActivity();
        setRecentActivity(activity);
      } catch (error) {
        setRecentActivity([]);
      }
      
      try {
        await loadChartData();
      } catch (error) {
        // Already handled in loadChartData
      }
      
    } catch (error) {
      console.error('Some dashboard data could not be loaded. The system will continue with limited functionality.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    router.push('/admin-login');
  };

  const handleGoHome = () => {
    router.push('/');
  };

  const handleNavigation = (href) => {
    const isComingSoon = [
      '/admin-dashboard/analytics',
      '/admin-dashboard/reports',
      '/admin-dashboard/team',
      '/admin-dashboard/billing',
      '/admin-dashboard/clients',
      '/admin-dashboard/media',
      '/admin-dashboard/blog',
      '/admin-dashboard/pages',
      '/admin-dashboard/newsletter',
      '/admin-dashboard/database',
      '/admin-dashboard/activity',
      '/admin-dashboard/notifications',
      '/admin-dashboard/backup'
    ].includes(href);

    if (isComingSoon) {
      console.log("This feature is coming soon!");
      return;
    }

    if (href === '/admin-dashboard/projects') {
      setCurrentPage('projects');
      return;
    }

    if (href === '/admin-dashboard/products') {
      setCurrentPage('products');
      return;
    }

    const pageName = href.split('/').pop();
    if (pageName && href.startsWith('/admin-dashboard')) {
      setCurrentPage(pageName);
    } else {
      router.push(href);
    }
  };

  const handleQuickAction = (actionId) => {
    setShowQuickActions(false);
    const actions = {
      'new-project': () => {
        addNotification({
          title: "New Project",
          message: "Opening new project form...",
          type: "info"
        });
        setCurrentPage('projects');
      },
      'new-product': () => {
        addNotification({
          title: "New Product",
          message: "Opening new product form...",
          type: "info"
        });
        setCurrentPage('products');
      },
      'add-user': () => {
        addNotification({
          title: "Add User",
          message: "Opening user creation form...",
          type: "info"
        });
        setCurrentPage('users');
      },
      'new-task': () => {
        addNotification({
          title: "New Task",
          message: "Opening task creation form...",
          type: "info"
        });
        setCurrentPage('tasks');
      },
      'create-quote': () => {
        addNotification({
          title: "Create Quote",
          message: "Opening quote creation form...",
          type: "info"
        });
        setCurrentPage('quotes');
      },
      'inventory': () => {
        handleNavigation('/admin-dashboard/materials');
      },
      'settings': () => {
        handleNavigation('/admin-dashboard/settings');
      }
    };
    const action = actions[actionId];
    if (action) {
      action();
    } else {
      addNotification({
        title: "Feature Coming Soon",
        message: `${actionId} feature is being prepared...`,
        type: "info"
      });
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      await loadDashboardData();
      addNotification({
        title: "Dashboard Refreshed",
        message: "Dashboard refreshed successfully!",
        type: "success"
      });
    } catch (error) {
      addNotification({
        title: "Refresh Failed",
        message: "Failed to refresh dashboard data. Please try again.",
        type: "error"
      });
    } finally {
      setRefreshing(false);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    const newMode = !darkMode;
    if (typeof window !== 'undefined') {
      localStorage.setItem('slk-dark-mode', newMode.toString());
    }
    if (newMode) {
      document.documentElement.classList.add('dark');
      addNotification({
        title: "Dark Mode",
        message: "Dark mode activated",
        type: "success"
      });
    } else {
      document.documentElement.classList.remove('dark');
      addNotification({
        title: "Light Mode",
        message: "Light mode activated",
        type: "success"
      });
    }
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case 'projects':
        return <ProjectManagement onBack={() => setCurrentPage('dashboard')} />;
      case 'products':
        return <ProductManagement onBack={() => setCurrentPage('dashboard')} />;
      case 'contacts':
        return <ContactManagement />;
      case 'users':
        return <UserManagement />;
      case 'tasks':
        return <TasksPageContent />;
      case 'quotes':
        return <QuoteManagement />;
      case 'materials':
        return <MaterialsPageContent />;
      case 'settings':
        return <SettingsManagement />;
      case 'subscribers':
        return <SubscriberManagement />;
      case 'posts':
        return <PostsPage />;
      case 'careers':
        return <CareerPage />;
      default:
        return <DashboardContent />;
    }
  };

  const DashboardContent = () => {
    const dashboardStats = [
      {
        title: 'Total Projects',
        value: typeof stats.totalProjects === 'number' ? stats.totalProjects : 0,
        target: 60,
        change: '+12%',
        description: 'vs last month',
        icon: Building2,
        gradient: 'from-emerald-500 to-emerald-600',
        onClick: () => handleNavigation('/admin-dashboard/projects')
      },
      {
        title: 'Active Users',
        value: typeof stats.totalUsers === 'number' ? stats.totalUsers : 0,
        target: 30,
        change: '+8%',
        description: 'team members',
        icon: Users,
        gradient: 'from-blue-500 to-blue-600',
        onClick: () => handleNavigation('/admin-dashboard/users')
      },
      {
        title: 'Pending Tasks',
        value: typeof stats.totalTasks === 'number' ? stats.totalTasks : 0,
        target: 200,
        change: '+15%',
        description: 'across projects',
        icon: CheckSquare,
        gradient: 'from-purple-500 to-purple-600',
        onClick: () => handleNavigation('/admin-dashboard/tasks')
      },
      {
        title: 'New Contacts',
        value: typeof stats.newContacts === 'number' ? stats.newContacts : 0,
        target: 20,
        change: '+5%',
        description: 'this week',
        icon: Mail,
        gradient: 'from-amber-500 to-amber-600',
        onClick: () => handleNavigation('/admin-dashboard/contacts')
      }
    ];

    return (
      <>
        {/* Welcome Section */}
        <AnimatedSection animation="fade-down" delay={100} duration={600}>
          <div className="mb-8">
            <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
              </div>
              
              <div className="relative flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-3">Welcome back, {user?.name}! 👋</h2>
                  <p className="text-white/90 text-lg">Here's your SLK Trading & Construction overview for today.</p>
                  <div className="mt-4 flex items-center space-x-4">
                    <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {currentTime.toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Stats Grid */}
        <AnimatedSection animation="fade-up" delay={200} duration={600}>
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-slate-900">System Overview</h3>
              <div className="relative dropdown-container">
                <button 
                  onClick={() => setShowQuickActions(!showQuickActions)}
                  className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-lg hover:shadow-lg transition-all duration-200 flex items-center space-x-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New</span>
                </button>
                
                {showQuickActions && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-2xl border border-slate-200 z-50 p-2">
                    {[
                      { id: 'new-project', title: 'New Project', icon: Building2, color: 'text-emerald-600' },
                      { id: 'new-product', title: 'New Product', icon: Package, color: 'text-indigo-600' },
                      { id: 'add-user', title: 'Add User', icon: Users, color: 'text-blue-600' },
                      { id: 'new-task', title: 'New Task', icon: CheckSquare, color: 'text-purple-600' },
                      { id: 'create-quote', title: 'Create Quote', icon: FileText, color: 'text-amber-600' },
                      { id: 'inventory', title: 'Manage Inventory', icon: Package, color: 'text-teal-600' },
                      { id: 'settings', title: 'Settings', icon: Settings, color: 'text-slate-600' }
                    ].map((action) => {
                      const IconComponent = action.icon;
                      return (
                        <button
                          key={action.id}
                          onClick={() => handleQuickAction(action.id)}
                          className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors text-left"
                        >
                          <IconComponent className={`w-4 h-4 ${action.color}`} />
                          <span className="text-sm font-medium text-slate-900">{action.title}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            
            <div className="grid lg:grid-cols-4 gap-8">
              {dashboardStats.map((stat, index) => {
                const IconComponent = stat.icon;
                const progress = (stat.value / stat.target) * 100;
                return (
                  <AnimatedSection 
                    key={index}
                    animation="scale" 
                    delay={300 + (index * 100)} 
                    duration={500}
                  >
                    <div 
                      onClick={stat.onClick}
                      className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-all duration-200 cursor-pointer hover:scale-105"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-slate-500 mb-2">{stat.title}</p>
                          <p className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</p>
                          <div className="flex items-center space-x-1 mb-2">
                            <ArrowUpRight className="w-3 h-3 text-emerald-500" />
                            <span className="text-sm font-medium text-emerald-600">{stat.change}</span>
                          </div>
                          <p className="text-xs text-slate-400">{stat.description}</p>
                        </div>
                        <div className={`bg-gradient-to-r ${stat.gradient} p-3 rounded-lg`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-medium text-slate-500">Progress</span>
                          <span className="text-xs font-bold text-slate-900">{Math.round(progress)}%</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2">
                          <div 
                            className={`bg-gradient-to-r ${stat.gradient} h-2 rounded-full transition-all duration-1000`}
                            style={{ width: `${Math.min(progress, 100)}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Recent Activity */}
        <AnimatedSection animation="fade-up" delay={400} duration={600}>
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 mb-8">
            <div className="px-6 py-4 border-b border-slate-100">
              <h3 className="text-xl font-semibold text-slate-900 flex items-center">
                <Activity className="w-5 h-5 mr-2 text-blue-600" />
                Recent Activity
              </h3>
            </div>
            <div className="p-6">
              {recentActivity.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {recentActivity.slice(0, 4).map((activity, index) => {
                    const IconComponent = activity.icon;
                    return (
                      <div key={index} className="bg-slate-50 rounded-lg p-4 hover:bg-slate-100 transition-all duration-200 cursor-pointer">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center">
                            <IconComponent className={`w-5 h-5 ${activity.color}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-slate-900 truncate">{activity.action}</p>
                            <p className="text-xs text-slate-500 flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {activity.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Activity className="w-6 h-6 text-slate-400" />
                  </div>
                  <p className="text-slate-600 font-medium">No recent activity</p>
                  <p className="text-slate-400 text-sm">Activity will appear here when actions are performed</p>
                </div>
              )}
            </div>
          </div>
        </AnimatedSection>
      </>
    );
  };

  // Placeholder page components
  const UsersPageContent = () => (
    <div className="space-y-6">
      <div>
        <button onClick={() => setCurrentPage('dashboard')} className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors mb-4">
          <ChevronRight className="w-5 h-5 rotate-180" />
          <span>Back to Dashboard</span>
        </button>
        <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <p className="text-gray-600 text-center py-8">User management coming soon...</p>
      </div>
    </div>
  );

  const TasksPageContent = () => (
    <div className="space-y-6">
      <div>
        <button onClick={() => setCurrentPage('dashboard')} className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors mb-4">
          <ChevronRight className="w-5 h-5 rotate-180" />
          <span>Back to Dashboard</span>
        </button>
        <h1 className="text-3xl font-bold text-gray-900">Task Management</h1>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <p className="text-gray-600 text-center py-8">Task management coming soon...</p>
      </div>
    </div>
  );

  const ContactsPageContent = () => (
    <div className="space-y-6">
      <div>
        <button onClick={() => setCurrentPage('dashboard')} className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors mb-4">
          <ChevronRight className="w-5 h-5 rotate-180" />
          <span>Back to Dashboard</span>
        </button>
        <h1 className="text-3xl font-bold text-gray-900">Contact Management</h1>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <p className="text-gray-600 text-center py-8">Contact management coming soon...</p>
      </div>
    </div>
  );

  const QuotesPageContent = () => (
    <div className="space-y-6">
      <div>
        <button onClick={() => setCurrentPage('dashboard')} className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors mb-4">
          <ChevronRight className="w-5 h-5 rotate-180" />
          <span>Back to Dashboard</span>
        </button>
        <h1 className="text-3xl font-bold text-gray-900">Quote Management</h1>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <p className="text-gray-600 text-center py-8">Quote management coming soon...</p>
      </div>
    </div>
  );

  const MaterialsPageContent = () => (
    <div className="space-y-6">
      <div>
        <button onClick={() => setCurrentPage('dashboard')} className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors mb-4">
          <ChevronRight className="w-5 h-5 rotate-180" />
          <span>Back to Dashboard</span>
        </button>
        <h1 className="text-3xl font-bold text-gray-900">Materials & Inventory</h1>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <p className="text-gray-600 text-center py-8">Inventory management coming soon...</p>
      </div>
    </div>
  );

  const SettingsPageContent = () => (
    <div className="space-y-6">
      <div>
        <button onClick={() => setCurrentPage('dashboard')} className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors mb-4">
          <ChevronRight className="w-5 h-5 rotate-180" />
          <span>Back to Dashboard</span>
        </button>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <p className="text-gray-600 text-center py-8">Settings coming soon...</p>
      </div>
    </div>
  );

  const updateSidebarCategories = () => {
    return sidebarCategories.map(category => ({
      ...category,
      items: category.items.map(item => {
        const pageName = item.href.split('/').pop();
        return {
          ...item,
          active: (currentPage === 'dashboard' && item.href === '/admin-dashboard') || 
                  (currentPage === pageName)
        };
      })
    }));
  };

  const sidebarLinks = [
    { name: "Dashboard", href: "/admin-dashboard", icon: <Home className="w-5 h-5" /> },
    { name: "Projects", href: "/admin-dashboard/projects", icon: <Building2 className="w-5 h-5" /> },
    { name: "Products", href: "/admin-dashboard/products", icon: <Package className="w-5 h-5" /> },
    { name: "Contacts", href: "/admin-dashboard/contacts", icon: <Mail className="w-5 h-5" /> },
    { name: "Quotes", href: "/admin-dashboard/quotes", icon: <FileText className="w-5 h-5" /> },
    { name: "Posts", href: "/admin-dashboard/posts", icon: <FilePlus className="w-5 h-5" /> },
    { name: "Subscribers", href: "/admin-dashboard/subscribers", icon: <User className="w-5 h-5" /> },
    { name: "Careers", href: "/admin-dashboard/careers", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Users", href: "/admin-dashboard/users", icon: <Users className="w-5 h-5" /> },
    { name: "Settings", href: "/admin-dashboard/settings", icon: <Settings className="w-5 h-5" /> }
  ];

  const AdminSidebar = () => (
    <nav>
      <ul>
        {sidebarLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="flex items-center px-4 py-2 hover:bg-gray-100 rounded transition"
            >
              {link.icon && <span className="mr-2">{link.icon}</span>}
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );

  const addNotification = (notif) => {
    setNotifications((prev) => [
      { ...notif, id: Date.now(), unread: true, time: new Date() },
      ...prev,
    ]);
    toast(notif.message, {
      icon: notif.type === "success" ? "✅" : notif.type === "error" ? "❌" : "🔔",
      style: { fontWeight: "bold" },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Sidebar */}
      <div
        className={`
          ${sidebarOpen ? 'w-72' : 'w-20'}
          fixed top-0 left-0 h-screen
          transition-all duration-300
          bg-white/80 backdrop-blur-xl shadow-2xl border-r border-slate-200/50
          flex flex-col z-40
        `}
      >
        {/* Enhanced Sidebar Header */}
        <div className="p-6 border-b border-slate-200/50 bg-gradient-to-r from-orange-500 to-red-500">
          <div className="flex items-center justify-between">
            {sidebarOpen && (
              <div className="flex items-center space-x-3">
                {/* Clickable Logo Container */}
                <button
                  onClick={handleGoHome}
                  className="relative group transition-transform hover:scale-105"
                  title="Go to Homepage"
                >
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg border border-white/30 overflow-hidden group-hover:bg-white/30 transition-colors">
                    <img
                      src="/SLK-logo.png"
                      alt="SLK Trading Logo"
                      className="w-10 h-10 object-contain rounded-lg"
                      onError={(e) => {
                        console.log('Logo failed to load, showing fallback icon');
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'block';
                      }}
                    />
                    <Building2 
                      className="w-7 h-7 text-white hidden" 
                      style={{ display: 'none' }}
                    />
                  </div>
                </button>
                
                {/* Company Info - Separate clickable area */}
                <button
                  onClick={handleGoHome}
                  className="text-left group transition-transform hover:scale-105"
                  title="Go to Homepage"
                >
                  <div className="flex items-center space-x-2">
                    <h2 className="text-lg font-bold text-white group-hover:text-white/90 transition-colors">SLK Trading</h2>
                    <span className="text-xs bg-white/20 text-white/90 px-2 py-0.5 rounded-full font-medium group-hover:bg-white/30 transition-colors">
                      Admin
                    </span>
                  </div>
                  <p className="text-sm text-white/90 font-medium group-hover:text-white/80 transition-colors">& Construction</p>
                  <div className="flex items-center mt-1 space-x-1">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-white/80 font-medium">System Online</span>
                    <span className="text-xs text-white/60">•</span>
                    <span className="text-xs text-white/60">
                      {new Date().toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                </button>
              </div>
            )}
            
            {/* Collapsed State Logo - Also clickable */}
            {!sidebarOpen && (
              <button
                onClick={handleGoHome}
                className="relative mx-auto group transition-transform hover:scale-110"
                title="Go to Homepage"
              >
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg border border-white/30 overflow-hidden group-hover:bg-white/30 transition-colors">
                  <img
                    src="/SLK-logo.png"
                    alt="SLK Trading Logo"
                    className="w-8 h-8 object-contain rounded-lg"
                    onError={(e) => {
                      console.log('Logo failed to load, showing fallback icon');
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'block';
                    }}
                  />
                  <Building2 
                    className="w-6 h-6 text-white hidden" 
                    style={{ display: 'none' }}
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white">
                  <div className="w-1 h-1 bg-white rounded-full mx-auto mt-0.5 animate-pulse"></div>
                </div>
              </button>
            )}

            {/* Menu Toggle Button */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white group"
              title={sidebarOpen ? "Collapse Sidebar" : "Expand Sidebar"}
            >
              <Menu className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav
          className="relative flex-1 px-4 py-4 space-y-6 overflow-y-auto luxury-card-glass shadow-gold border-l-4 border-gradient-to-b from-yellow-400 via-amber-300 to-yellow-100/60 bg-white/60 backdrop-blur-2xl"
          style={{
            boxShadow: '0 8px 32px 0 rgba(255, 215, 0, 0.18), 0 1.5px 0 0 #FFD700',
            borderImage: 'linear-gradient(to bottom, #FFD700, #FFB300, #FFF7E0) 1',
            borderLeftWidth: '4px',
            borderLeftStyle: 'solid',
            borderLeftColor: 'transparent',
          }}
        >
          {updateSidebarCategories().map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {sidebarOpen && (
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
                  {category.title}
                </h3>
              )}
              <div className="space-y-1">
                {category.items.map((item, index) => {
                  const IconComponent = item.icon;
                  const isComingSoon = [
                    '/admin-dashboard/analytics',
                    '/admin-dashboard/reports',
                    '/admin-dashboard/team',
                    '/admin-dashboard/billing',
                    '/admin-dashboard/clients',
                    '/admin-dashboard/media',
                    '/admin-dashboard/blog',
                    '/admin-dashboard/pages',
                    '/admin-dashboard/newsletter',
                    '/admin-dashboard/database',
                    '/admin-dashboard/activity',
                    '/admin-dashboard/notifications',
                    '/admin-dashboard/backup'
                  ].includes(item.href);
                  
                  return (
                    <div key={index} className="relative group">
                      <button
                        onClick={() => handleNavigation(item.href)}
                        className={`w-full flex items-center space-x-3 px-3 py-3 rounded-xl transition-all duration-200 relative ${
                          item.active
                            ? 'bg-gradient-to-r from-orange-500/10 to-red-500/10 text-orange-700 border border-orange-200/50 shadow-sm' 
                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                        }`}
                      >
                        <IconComponent className={`w-5 h-5 ${
                          item.active ? 'text-orange-600' : 'group-hover:text-slate-700'
                        }`} />
                        {sidebarOpen && (
                          <>
                            <div className="flex-1 text-left">
                              <div className="font-medium text-sm flex items-center">
                                {item.title}
                                {isComingSoon && (
                                  <span className="ml-2 text-xs bg-amber-100 text-amber-600 px-2 py-0.5 rounded-full">
                                    Soon
                                  </span>
                                )}
                              </div>
                              {item.description && (
                                <div className="text-xs text-slate-400 mt-0.5">{item.description}</div>
                              )}
                            </div>
                            {item.badge && (
                              <span className={`px-2 py-1 text-xs rounded-lg font-semibold ${
                                item.active
                                  ? 'bg-orange-100 text-orange-700' 
                                  : 'bg-emerald-100 text-emerald-700'
                              }`}>
                                {item.badge}
                              </span>
                            )}
                          </>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Enhanced Sidebar Footer */}
        <div className="border-t border-slate-200/50 bg-slate-50/50">
          {/* User Profile Section */}
          <div className="p-4">
            <div className="flex items-center space-x-3">
              {sidebarOpen ? (
                <>
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-lg">
                      {user?.name?.charAt(0)?.toUpperCase() || 'A'}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-slate-900 truncate">{user?.name || 'Admin User'}</p>
                    <p className="text-xs text-slate-500 truncate">{user?.email || 'admin@slk.com'}</p>
                    <div className="flex items-center mt-1">
                      <Crown className="w-3 h-3 text-amber-500 mr-1" />
                      <span className="text-xs font-medium text-amber-600">Administrator</span>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <button
                      onClick={toggleDarkMode}
                      className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                      title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    >
                      {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={handleLogout}
                      className="p-2 text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Logout"
                    >
                      <LogOut className="w-4 h-4" />
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center space-y-3 w-full">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-lg">
                      {user?.name?.charAt(0)?.toUpperCase() || 'A'}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <button
                      onClick={toggleDarkMode}
                      className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                      title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    >
                      {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={handleLogout}
                      className="p-1.5 text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Logout"
                    >
                      <LogOut className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer Links */}
          {sidebarOpen && (
            <div className="px-4 pb-4">
              <div className="flex justify-between items-center text-xs text-slate-400">
                <span>© 2024 SLK Trading</span>
                <div className="flex space-x-3">
                  <button 
                    onClick={() => handleNavigation('/admin-dashboard/settings')}
                    className="hover:text-slate-600 transition-colors"
                  >
                    Settings
                  </button>
                  <button 
                    onClick={() => window.open('/help', '_blank')}
                    className="hover:text-slate-600 transition-colors"
                  >
                    Help
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`
          flex-1 flex flex-col overflow-hidden
          ${sidebarOpen ? 'ml-72' : 'ml-20'}
          transition-all duration-300
          h-screen
        `}
      >
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-xl shadow-lg border-b border-slate-200/50">
          <div className="px-8 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-slate-900">
                  {currentPage === 'dashboard' ? 'Dashboard' : currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
                </h1>
                <p className="text-slate-500">Welcome to SLK Admin Dashboard</p>
              </div>
              <div className="flex items-center space-x-4 relative">
                <button
                  onClick={handleRefresh}
                  className={`p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors ${refreshing ? 'animate-spin' : ''}`}
                  title="Refresh"
                >
                  <RefreshCw className="w-5 h-5" />
                </button>
                <div className="relative">
                  <button
                    onClick={() => setShowNotifications((prev) => !prev)}
                    className="relative p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                    title="Notifications"
                  >
                    <Bell className="w-5 h-5" />
                    {notifications.filter(n => n.unread).length > 0 && (
                      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
                    )}
                  </button>
                </div>
                <button
                  onClick={handleLogout}
                  className="p-2 text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  title="Logout"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-8">
          {renderPageContent()}
        </div>
      </div>

      {showNotifications && (
  <div className="fixed top-20 right-10 w-80 bg-white rounded-xl shadow-2xl border border-slate-200 z-[99999] p-4">
    {/* ...dropdown content... */}
  </div>
)}

      <Toaster position="top-right" />
    </div>
  );
};

export default AdminDashboard;
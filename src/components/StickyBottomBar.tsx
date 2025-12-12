import React, { useState, useEffect } from 'react';
import { X, ArrowRight, TrendingUp, CheckCircle, Users, Sparkles, Heart } from 'lucide-react';

interface Activity {
  name: string;
  location: string;
  amount: number;
  purpose: string;
  activity_type: string;
  minutes_ago: number;
}

interface Stats {
  total_applications: number;
  total_approvals: number;
  average_amount: number;
}

const StickyBottomBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);

  // Generate realistic activities with random timing
  const generateActivities = (): Activity[] => {
    const names = [
      'Sarah M.', 'Mike R.', 'Jennifer L.', 'David K.', 'Lisa T.',
      'James P.', 'Amanda S.', 'Robert W.', 'Maria G.', 'Tom H.',
      'Emily C.', 'John D.', 'Rachel B.', 'Chris M.', 'Anna K.'
    ];
    
    const cities = [
      'Austin, TX', 'Denver, CO', 'Miami, FL', 'Phoenix, AZ', 'Seattle, WA',
      'Boston, MA', 'Chicago, IL', 'Atlanta, GA', 'Portland, OR', 'Dallas, TX',
      'San Diego, CA', 'Nashville, TN', 'Tampa, FL', 'Orlando, FL', 'Houston, TX'
    ];
    
    const purposes = [
      'Home Repairs', 'Debt Consolidation', 'Medical Bills', 'Car Repairs',
      'Emergency Expenses', 'Home Improvements', 'Moving Costs', 'Wedding Expenses',
      'Education Costs', 'Business Expenses', 'Travel Expenses', 'Major Purchase'
    ];

    const activities: Activity[] = [];
    const now = Date.now();
    
    for (let i = 0; i < 15; i++) {
      const minutesAgo = Math.floor(Math.random() * 60) + 2; // 2-62 minutes ago
      activities.push({
        name: names[Math.floor(Math.random() * names.length)],
        location: cities[Math.floor(Math.random() * cities.length)],
        amount: Math.floor(Math.random() * 4000) + 1500, // $1,500 - $5,500
        purpose: purposes[Math.floor(Math.random() * purposes.length)],
        activity_type: 'approval',
        minutes_ago: minutesAgo
      });
    }
    
    // Sort by time (most recent first)
    return activities.sort((a, b) => a.minutes_ago - b.minutes_ago);
  };

  const [activities] = useState<Activity[]>(generateActivities());

  // Generate realistic daily stats
  const stats: Stats = {
    total_applications: Math.floor(Math.random() * 50) + 320, // 320-370
    total_approvals: Math.floor(Math.random() * 40) + 290, // 290-330
    average_amount: Math.floor(Math.random() * 500) + 2500 // $2,500-$3,000
  };

  // Check if dismissed in localStorage
  useEffect(() => {
    const dismissed = localStorage.getItem('stickyBarDismissed');
    const dismissedTime = localStorage.getItem('stickyBarDismissedTime');

    if (dismissed && dismissedTime) {
      const hoursSinceDismissed = (Date.now() - parseInt(dismissedTime)) / (1000 * 60 * 60);
      if (hoursSinceDismissed < 24) {
        setIsDismissed(true);
        return;
      }
    }

    let scrollDepthReached = false;

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      if (scrollPercent > 30 && !scrollDepthReached) {
        scrollDepthReached = true;
        setTimeout(() => {
          setIsVisible(true);
        }, 2000);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Rotate through activities
  useEffect(() => {
    if (activities.length > 0) {
      const interval = setInterval(() => {
        setCurrentActivityIndex((prev) => (prev + 1) % activities.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [activities]);

  // Handle scroll behavior - hide when near footer
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const footer = document.querySelector('footer');
          if (!footer) {
            ticking = false;
            return;
          }

          const footerTop = footer.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          if (footerTop < windowHeight + 100) {
            setIsVisible(false);
          } else if (!isDismissed) {
            setIsVisible(true);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('stickyBarDismissed', 'true');
    localStorage.setItem('stickyBarDismissedTime', Date.now().toString());
  };

  const handleApplyClick = () => {
    if ((window as any).navigateToApply) {
      (window as any).navigateToApply();
    }
  };

  if (isDismissed) return null;

  const currentActivity = activities[currentActivityIndex];
  const approvalRate = Math.round((stats.total_approvals / stats.total_applications) * 100);

  return (
    <>
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsExpanded(false)}
        />
      )}

      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        } ${isExpanded ? 'h-auto' : ''}`}
      >
        {isExpanded && (
          <div className="bg-white border-t-4 border-emerald-400 shadow-2xl">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-4 border border-emerald-200">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-2" />
                    <h4 className="font-bold text-gray-800">Recent Approvals</h4>
                  </div>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {activities.slice(0, 5).map((activity, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-2 text-sm border border-emerald-100">
                        <div className="font-semibold text-gray-800">{activity.name} - {activity.location}</div>
                        <div className="text-emerald-600 font-bold">${activity.amount.toLocaleString()}</div>
                        <div className="text-gray-600 text-xs">{activity.purpose} &#8226; {activity.minutes_ago}m ago</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-200">
                  <div className="flex items-center mb-3">
                    <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
                    <h4 className="font-bold text-gray-800">Today's Activity</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3 border border-blue-100">
                      <div className="text-3xl font-black text-blue-600">{stats.total_applications}</div>
                      <div className="text-sm text-gray-600">Applications Today</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-blue-100">
                      <div className="text-3xl font-black text-emerald-600">{stats.total_approvals}</div>
                      <div className="text-sm text-gray-600">Approved Today</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-blue-100">
                      <div className="text-2xl font-black text-amber-600">${stats.average_amount.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">Average Amount</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-200">
                  <div className="flex items-center mb-3">
                    <Heart className="h-5 w-5 text-rose-600 mr-2" />
                    <h4 className="font-bold text-gray-800">Why Choose Us</h4>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center bg-white rounded-lg p-2 border border-amber-100">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">No hidden fees</span>
                    </div>
                    <div className="flex items-center bg-white rounded-lg p-2 border border-amber-100">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Fast approval</span>
                    </div>
                    <div className="flex items-center bg-white rounded-lg p-2 border border-amber-100">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">BBB A+ Rating</span>
                    </div>
                    <div className="flex items-center bg-white rounded-lg p-2 border border-amber-100">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">75,000+ customers helped</span>
                    </div>
                    <div className="flex items-center bg-white rounded-lg p-2 border border-amber-100">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Licensed lender</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 text-white shadow-2xl backdrop-blur-lg border-t border-slate-600">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
            <div className="flex items-center justify-between gap-2 sm:gap-4">
              <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                <div className="hidden sm:flex items-center justify-center w-10 h-10 bg-white/20 rounded-full backdrop-blur-sm flex-shrink-0">
                  <Sparkles className="h-5 w-5 text-yellow-300 animate-pulse" />
                </div>
                
                <div className="flex-1 min-w-0">
                  {currentActivity && (
                    <div className="animate-fade-in">
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle className="h-4 w-4 text-emerald-300 flex-shrink-0" />
                        <span className="font-bold text-sm sm:text-base truncate">
                          {currentActivity.name} from {currentActivity.location}
                        </span>
                      </div>
                      <div className="text-xs sm:text-sm text-emerald-100 flex items-center gap-2">
                        <span className="truncate">Got approved for ${currentActivity.amount.toLocaleString()}</span>
                        <span className="hidden sm:inline">&#8226;</span>
                        <span className="hidden sm:inline text-xs">{currentActivity.minutes_ago}m ago</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="hidden md:flex items-center gap-4 px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-yellow-300" />
                  <div className="text-center">
                    <div className="text-lg font-black">{stats.total_applications}</div>
                    <div className="text-xs text-emerald-100">Applied Today</div>
                  </div>
                </div>
                <div className="w-px h-8 bg-white/20"></div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-yellow-300" />
                  <div className="text-center">
                    <div className="text-lg font-black">{approvalRate}%</div>
                    <div className="text-xs text-emerald-100">Approved</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={handleApplyClick}
                  className="group bg-white/10 text-white border border-white/30 hover:bg-white/20 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 flex items-center gap-2"
                >
                  <span className="hidden sm:inline">Return to Application</span>
                  <span className="sm:hidden">Apply</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="hidden sm:flex items-center justify-center w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full transition-colors backdrop-blur-sm"
                  aria-label="Show more details"
                >
                  <TrendingUp className={`h-5 w-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                </button>

                <button
                  onClick={handleDismiss}
                  className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-white/20 hover:bg-white/30 rounded-full transition-colors backdrop-blur-sm"
                  aria-label="Close notification"
                >
                  <X className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StickyBottomBar;

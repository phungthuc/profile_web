// Firebase Analytics Tracking for User Actions
const DEBUG_MODE = false;

// Track page views
function trackPageView(pageName, pagePath) {
  if (window.FirebaseAnalytics && typeof window.FirebaseAnalytics.logEvent === 'function') {
    window.FirebaseAnalytics.logEvent('page_view', {
      page_title: pageName,
      page_location: pagePath || window.location.pathname,
      page_path: pagePath || window.location.pathname
    });
    if (DEBUG_MODE) {
      console.log('📊 Analytics: Page view tracked -', pageName);
    }
  }
}

// Track section views (About, Resume, etc.)
function trackSectionView(sectionName) {
  if (window.FirebaseAnalytics && typeof window.FirebaseAnalytics.logEvent === 'function') {
    window.FirebaseAnalytics.logEvent('section_view', {
      section_name: sectionName
    });
    if (DEBUG_MODE) {
      console.log('📊 Analytics: Section view tracked -', sectionName);
    }
  }
}

// Track link clicks
function trackLinkClick(linkName, linkUrl, linkType) {
  if (window.FirebaseAnalytics && typeof window.FirebaseAnalytics.logEvent === 'function') {
    window.FirebaseAnalytics.logEvent('click', {
      content_type: linkType || 'link',
      item_name: linkName,
      item_url: linkUrl
    });
    if (DEBUG_MODE) {
      console.log('📊 Analytics: Link click tracked -', linkName);
    }
  }
}

// Track CV download
function trackDownload(cvName) {
  if (window.FirebaseAnalytics && typeof window.FirebaseAnalytics.logEvent === 'function') {
    window.FirebaseAnalytics.logEvent('file_download', {
      file_name: cvName,
      file_extension: 'pdf'
    });
    if (DEBUG_MODE) {
      console.log('📊 Analytics: Download tracked -', cvName);
    }
  }
}

// Track social media clicks
function trackSocialClick(socialPlatform) {
  if (window.FirebaseAnalytics && typeof window.FirebaseAnalytics.logEvent === 'function') {
    window.FirebaseAnalytics.logEvent('social', {
      social_network: socialPlatform
    });
    if (DEBUG_MODE) {
      console.log('📊 Analytics: Social click tracked -', socialPlatform);
    }
  }
}

// Track game/project link clicks
function trackProjectClick(projectName, projectUrl) {
  if (window.FirebaseAnalytics && typeof window.FirebaseAnalytics.logEvent === 'function') {
    window.FirebaseAnalytics.logEvent('project_click', {
      project_name: projectName,
      project_url: projectUrl
    });
    if (DEBUG_MODE) {
      console.log('📊 Analytics: Project click tracked -', projectName);
    }
  }
}

// Track contact actions
function trackContact(method) {
  if (window.FirebaseAnalytics && typeof window.FirebaseAnalytics.logEvent === 'function') {
    window.FirebaseAnalytics.logEvent('contact', {
      contact_method: method
    });
    if (DEBUG_MODE) {
      console.log('📊 Analytics: Contact tracked -', method);
    }
  }
}

// Track language toggle
function trackLanguageToggle(language) {
  if (window.FirebaseAnalytics && typeof window.FirebaseAnalytics.logEvent === 'function') {
    window.FirebaseAnalytics.logEvent('language_change', {
      language: language
    });
    if (DEBUG_MODE) {
      console.log('📊 Analytics: Language change tracked -', language);
    }
  }
}

// Track navigation clicks
function trackNavClick(navItem) {
  if (window.FirebaseAnalytics && typeof window.FirebaseAnalytics.logEvent === 'function') {
    window.FirebaseAnalytics.logEvent('navigation', {
      nav_item: navItem
    });
    if (DEBUG_MODE) {
      console.log('📊 Analytics: Navigation tracked -', navItem);
    }
  }
}

// Session time tracking (start time)
let sessionStartTime = Date.now();

// Track any button or link click automatically
function trackAllClicks() {
  // Track all <a> tags
  document.addEventListener('click', function(event) {
    const target = event.target.closest('a');
    
    if (target) {
      const linkText = target.textContent.trim() || target.getAttribute('aria-label') || target.title || 'Unnamed Link';
      const linkUrl = target.href || target.getAttribute('href') || '';
      const linkId = target.id || '';
      
      // Get parent elements to identify project context
      let projectContext = '';
      const parentSection = target.closest('.resume-item');
      if (parentSection) {
        const projectTitle = parentSection.querySelector('.project-title');
        if (projectTitle) {
          projectContext = projectTitle.textContent.trim();
        }
      }
      
      // Track link click
      if (window.FirebaseAnalytics && typeof window.FirebaseAnalytics.logEvent === 'function') {
        window.FirebaseAnalytics.logEvent('link_click', {
          link_text: linkText,
          link_url: linkUrl,
          link_id: linkId,
          project_context: projectContext,
          timestamp: new Date().toISOString()
        });
        if (DEBUG_MODE) {
          console.log('📊 Analytics: Link clicked:', {
          text: linkText,
            url: linkUrl,
            project: projectContext
          });
        }
      }
    }
  });
  
  // Track all buttons
  document.addEventListener('click', function(event) {
    const target = event.target.closest('button');
    
    if (target && target.type !== 'submit') {
      const buttonText = target.textContent.trim() || target.getAttribute('aria-label') || target.title || 'Unnamed Button';
      const buttonId = target.id || '';
      const buttonClass = target.className || '';
      
      if (window.FirebaseAnalytics && typeof window.FirebaseAnalytics.logEvent === 'function') {
        window.FirebaseAnalytics.logEvent('button_click', {
          button_text: buttonText,
          button_id: buttonId,
          button_class: buttonClass,
          timestamp: new Date().toISOString()
        });
        if (DEBUG_MODE) {
          console.log('📊 Analytics: Button clicked:', {
            text: buttonText,
            id: buttonId
          });
        }
      }
    }
  });
}

// Track session duration on page unload or visibility change
function trackSessionDuration() {
  // Track when user leaves the page
  window.addEventListener('beforeunload', function() {
    const sessionEndTime = Date.now();
    const sessionDuration = Math.floor((sessionEndTime - sessionStartTime) / 1000); // in seconds
    
    if (window.FirebaseAnalytics && typeof window.FirebaseAnalytics.logEvent === 'function') {
      // Use sendBeacon for reliable tracking even during page unload
      navigator.sendBeacon = navigator.sendBeacon || function() {};
      
      window.FirebaseAnalytics.logEvent('session_duration', {
        duration_seconds: sessionDuration,
        page_url: window.location.href,
        timestamp: new Date().toISOString()
      });
      if (DEBUG_MODE) {
        console.log('📊 Analytics: Session duration tracked:', sessionDuration, 'seconds');
      }
    }
  });
  
  // Track when user switches tabs (visibility change)
  document.addEventListener('visibilitychange', function() {
    const currentTime = Date.now();
    const sessionDuration = Math.floor((currentTime - sessionStartTime) / 1000);
    
    if (document.hidden) {
      // User left the tab
      if (window.FirebaseAnalytics && typeof window.FirebaseAnalytics.logEvent === 'function') {
        window.FirebaseAnalytics.logEvent('visibility_change', {
          action: 'hidden',
          session_duration: sessionDuration,
          timestamp: new Date().toISOString()
        });
        if (DEBUG_MODE) {
          console.log('📊 Analytics: User left tab - Session duration:', sessionDuration, 'seconds');
        }
      }
    } else {
      // User returned to the tab
      if (window.FirebaseAnalytics && typeof window.FirebaseAnalytics.logEvent === 'function') {
        window.FirebaseAnalytics.logEvent('visibility_change', {
          action: 'visible',
          session_duration: sessionDuration,
          timestamp: new Date().toISOString()
        });
        if (DEBUG_MODE) {
          console.log('📊 Analytics: User returned to tab - Session duration:', sessionDuration, 'seconds');
        }
      }
    }
  });
  
  // Track session duration periodically (every 30 seconds)
  setInterval(function() {
    const currentTime = Date.now();
    const sessionDuration = Math.floor((currentTime - sessionStartTime) / 1000);
    
    if (window.FirebaseAnalytics && typeof window.FirebaseAnalytics.logEvent === 'function') {
      window.FirebaseAnalytics.logEvent('active_session_time', {
        duration_seconds: sessionDuration,
        timestamp: new Date().toISOString()
      });
    }
  }, 30000); // Every 30 seconds
}

// Auto-add target="_blank" to external links
function addTargetBlank() {
  const allLinks = document.querySelectorAll('a[href^="http"]');
  let configuredCount = 0;
  
  allLinks.forEach(link => {
    const href = link.getAttribute('href');
    // Check if it's an external link (not same domain)
    if (href && !href.includes(window.location.hostname)) {
      // Add target="_blank" if not already set
      if (!link.hasAttribute('target')) {
        link.setAttribute('target', '_blank');
        configuredCount++;
      }
      
      // Add rel="noopener noreferrer" for security (prevent window.opener exploits)
      const currentRel = link.getAttribute('rel') || '';
      if (!currentRel.includes('noopener')) {
        const newRel = currentRel ? `${currentRel} noopener noreferrer` : 'noopener noreferrer';
        link.setAttribute('rel', newRel);
      }
    }
  });
  
  if (configuredCount > 0) {
    if (DEBUG_MODE) {
      console.log(`🔗 Analytics: Configured ${configuredCount} external links to open in new tabs with security attributes`);
    }
  }
}

// Initialize tracking when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Track initial page view
  trackPageView('Home', '/');
  
  // Add target="_blank" to all external links
  addTargetBlank();
  
  // Track scroll depth
  let maxScroll = 0;
  window.addEventListener('scroll', function() {
    const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
    if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
      maxScroll = scrollPercent;
      if (window.FirebaseAnalytics && typeof window.FirebaseAnalytics.logEvent === 'function') {
        window.FirebaseAnalytics.logEvent('scroll', {
          scroll_depth: scrollPercent
        });
      }
    }
  });
  
  // Track all clicks automatically
  trackAllClicks();
  
  // Track session duration
  trackSessionDuration();
  
  if (DEBUG_MODE) {
    console.log('📊 Analytics: Firebase Analytics tracking initialized');
    console.log('📊 Analytics: Session started at:', new Date(sessionStartTime).toISOString());
  }
});

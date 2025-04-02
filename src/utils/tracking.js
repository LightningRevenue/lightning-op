const trackEvent = async (event, section, additionalData = {}) => {
  try {
    const response = await fetch('https://backend-logic-lght-849100326888.europe-west1.run.app/api/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        event,
        section,
        timestamp: new Date().toISOString(),
        ...additionalData
      })
    });
    
    if (!response.ok) {
      console.error('Error tracking event');
    }
  } catch (error) {
    console.error('Tracking error:', error);
  }
};

export const trackPageView = (page) => trackEvent('page_view', page);
export const trackClick = (section, data = {}) => trackEvent('click', section, data);
export const trackScroll = (section) => trackEvent('scroll_to', section);

export default {
  trackPageView,
  trackClick,
  trackScroll
};
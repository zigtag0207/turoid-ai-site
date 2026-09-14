// Contact clicks are enquiries started, never confirmed leads or booked meetings.
document.querySelectorAll('[data-enquiry]').forEach(link => {
  link.addEventListener('click', () => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'enquiry_started', {contact_method: link.dataset.enquiry, campaign: 'hk_family_office_search'});
    }
  });
});

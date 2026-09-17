(() => {
  const tagId = 'AW-18450203666';
  const destination = 'AW-18450203666/AY-bCJm-0focEJKI391E';
  const choiceKey = 'turoid_ad_measurement_v1';
  const notice = document.querySelector('[data-consent-notice]');
  let allowed = false;
  let loaded = false;
  try { allowed = localStorage.getItem(choiceKey) === 'allow'; } catch (_) {}
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('consent', 'default', {
    ad_storage: 'denied', ad_user_data: 'denied',
    ad_personalization: 'denied', analytics_storage: 'denied'
  });
  function enable() {
    window.gtag('consent', 'update', {ad_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'denied', analytics_storage: 'denied'});
    if (loaded) return;
    loaded = true;
    window.gtag('js', new Date());
    window.gtag('config', tagId, {allow_ad_personalization_signals: false});
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + tagId;
    document.head.appendChild(script);
  }
  if (allowed) enable();
  try { notice.hidden = localStorage.getItem(choiceKey) !== null; } catch (_) {}
  document.querySelectorAll('[data-consent-choice]').forEach(button => {
    button.addEventListener('click', () => {
      allowed = button.dataset.consentChoice === 'allow';
      try { localStorage.setItem(choiceKey, allowed ? 'allow' : 'decline'); } catch (_) {}
      if (allowed) enable();
      else if (loaded) window.gtag('consent', 'update', {ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'denied'});
      notice.hidden = true;
    });
  });
  document.querySelector('[data-consent-open]').addEventListener('click', () => {
    notice.hidden = false;
    notice.querySelector('button').focus();
  });
  // A click starts an enquiry; it is not a sent message or confirmed booking.
  document.querySelectorAll('[data-enquiry]').forEach(link => {
    link.addEventListener('click', event => {
      if (!allowed || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      let navigated = false;
      const proceed = () => { if (!navigated) { navigated = true; window.location.href = link.href; } };
      window.gtag('event', 'conversion', {send_to: destination, contact_method: link.dataset.enquiry, event_callback: proceed, event_timeout: 800});
      setTimeout(proceed, 900);
    });
  });
})();

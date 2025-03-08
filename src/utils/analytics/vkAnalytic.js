!(function () {
  const t = document.createElement('script');
  t.type = 'text/javascript';
  t.async = !0;
  t.src = 'https://vk.com/js/api/openapi.js?173';
  t.onload = function () {
    VK.Retargeting.Init('VK-RTRG-1938929-dtZIg');
    VK.Retargeting.Hit();
  };
  document.head.appendChild(t);
}());

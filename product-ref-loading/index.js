/**
 * Instanciate Caast with a defined product reference
 */
window.caastSettings = {
  app_id: '3U5OkGemVa0lBH_DeW6Kd5uENJawQUAcXRtL_cXWSBk',
  app_key: '15tRHIOhrLdc6oPy1Ji6sumWnJiOc2N4H1SCcPAKKR4',
  autoboot: true,
  product_id: 'HEADSETMAIN', // Enter your product reference here to load Caast and display any content related to that product
};
(function (c, a, A, s, t, J, S) {
  if (!a.getElementById('caast_library')) {
    (c[t] = c[t]), (J = a.createElement(A)), (S = a.getElementsByTagName(A)[0]);
    J.async = 1;
    J.src = s;
    J.id = 'caast_library';
    S.parentNode.insertBefore(J, S);
  }
})(window, document, 'script', 'https://cdn.caast.tv/caast-latest/caast.js', 'caast');

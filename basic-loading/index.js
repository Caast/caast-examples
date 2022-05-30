/**
 * Instanciate Caast on a defined URL
 * This will display Caast only on that URL
 */
var APP_ID = '3U5OkGemVa0lBH_DeW6Kd5uENJawQUAcXRtL_cXWSBk';
var APP_KEY = '15tRHIOhrLdc6oPy1Ji6sumWnJiOc2N4H1SCcPAKKR4';
(function (c, a, A, s, t, J, S) {
  (c[t] = c[t]), (J = a.createElement(A)), (S = a.getElementsByTagName(A)[0]);
  J.async = 1;
  J.src = s;
  J.id = 'caast_library';
  S.parentNode.insertBefore(J, S);
})(window, document, 'script', 'https://cdn.caast.tv/caast-latest/caast.js?APP_ID=' + APP_ID + '&APP_KEY=' + APP_KEY, 'caast');

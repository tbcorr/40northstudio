import Vue from 'vue';
import MQ from 'vue-match-media/src';

Vue.use(MQ);

Vue.prototype.mq = {
  mobile: '(max-width: 479px)',
  mobileLarge: '(min-width: 480px) and (max-width: 991px)',
  desktop: '(min-width: 992px) and (max-width: 1919px)',
  desktopHD: '(min-width: 1920px) and (max-width: 2559px)',
  desktopUHD: '(min-width: 2560)'
};
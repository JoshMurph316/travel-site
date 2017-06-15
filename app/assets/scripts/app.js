import $ from 'jquery';
import MobileMenu from './modules/mobile-menu';
import StickyHeader from './modules/sticky-header';
import RevealOnScroll from './modules/reveal-on-scroll';

const mobileMenu = new MobileMenu();
new RevealOnScroll($('.feature-item'), '85%');
new RevealOnScroll($('.testimonial'), '65%');
var stickyHeader = new StickyHeader;



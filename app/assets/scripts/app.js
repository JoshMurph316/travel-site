import $ from 'jquery';
import MobileMenu from './modules/mobile-menu';
import StickyHeader from './modules/sticky-header';
import RevealOnScroll from './modules/reveal-on-scroll';
import Modal from './modules/modal';

const mobileMenu = new MobileMenu();
new RevealOnScroll($('.feature-item'), '85%');
new RevealOnScroll($('.testimonial'), '65%');
var stickyHeader = new StickyHeader();
var modal = new Modal();



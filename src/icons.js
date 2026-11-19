/* 공통 아이콘 · 단말 일러스트 · 체크 마크 */
let _dg=0;
/* iPhone Duo 일러스트 (예시 이미지) · color: white | black */
function dev(color){ const k=++_dg, w=color!=='black';
  const frame=w?'#dcdee2':'#2a2c31', edge=w?'#b9bcc3':'#121316', hinge=w?'#c9ccd1':'#1b1c20';
  return `<svg viewBox="0 0 88 72" fill="none"><defs>
  <linearGradient id="sk${k}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f7ead8"/><stop offset=".42" stop-color="#e8c59c"/><stop offset="1" stop-color="#a36c45"/></linearGradient>
  <linearGradient id="sh${k}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#000" stop-opacity=".16"/><stop offset=".46" stop-color="#000" stop-opacity="0"/><stop offset=".54" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#fff" stop-opacity=".12"/></linearGradient></defs>
  <ellipse cx="44" cy="67" rx="34" ry="2.6" fill="#000" opacity=".08"/>
  <path d="M8 10.5 L43 7 V65 L8 61.5 Q4 61 4 57 V15 Q4 11 8 10.5Z" fill="${frame}" stroke="${edge}"/>
  <path d="M80 10.5 L45 7 V65 L80 61.5 Q84 61 84 57 V15 Q84 11 80 10.5Z" fill="${frame}" stroke="${edge}"/>
  <rect x="42.6" y="6.6" width="2.8" height="58.8" rx="1.2" fill="${hinge}"/>
  <path d="M10 13.2 L43 10 V62 L10 58.8 Q7 58.5 7 55.5 V16.5 Q7 13.5 10 13.2Z" fill="url(#sk${k})"/>
  <path d="M78 13.2 L45 10 V62 L78 58.8 Q81 58.5 81 55.5 V16.5 Q81 13.5 78 13.2Z" fill="url(#sk${k})"/>
  <path d="M7 44 C20 37 33 40 43 35 V62 L10 58.8 Q7 58.5 7 55.5Z M45 34 C57 30 69 34 81 28 V55.5 Q81 58.5 78 58.8 L45 62Z" fill="#c38a5b" opacity=".5"/>
  <path d="M7 51 C22 46 34 50 43 46 V62 L10 58.8 Q7 58.5 7 55.5Z M45 45 C60 41 70 46 81 41 V55.5 Q81 58.5 78 58.8 L45 62Z" fill="#8a5434" opacity=".45"/>
  <path d="M7 16.5 Q7 13.5 10 13.2 L43 10 V62 L10 58.8 Q7 58.5 7 55.5Z M45 10 L78 13.2 Q81 13.5 81 16.5 V55.5 Q81 58.5 78 58.8 L45 62Z" fill="url(#sh${k})"/>
  <circle cx="62" cy="15.4" r="1.3" fill="#111"/></svg>`; }
const DEVICE = dev('white');
const CHECK = '<svg viewBox="0 0 12 12" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 6.2l2.3 2.3 4.7-5"/></svg>';
const BANG = '<svg viewBox="0 0 12 12" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><path d="M6 2.5v4.2M6 9.3v.1"/></svg>';
const CM = '<svg class="cm" viewBox="0 0 20 20" fill="none" stroke="#e5007e" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 10.5l3.5 3.5 7.5-8"/></svg>';
const I = {
  phone:'<svg viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" stroke-width="1.7"><rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M10.5 18.5h3" stroke-linecap="round"/></svg>',
  spark:'<svg viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" stroke-width="1.7" stroke-linejoin="round"><path d="M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2z"/></svg>',
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  bell:'<svg viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" stroke-width="1.7" stroke-linejoin="round"><path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 20.5h4" stroke-linecap="round"/></svg>',
  shield:'<svg viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" stroke-width="1.7" stroke-linejoin="round"><path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6z"/><path d="M9 12l2 2 4-4" stroke-linecap="round"/></svg>',
  chart:'<svg viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" stroke-width="1.7" stroke-linecap="round"><path d="M4 20h16M7 16v-5M12 16V7M17 16v-8"/></svg>',
  doc:'<svg viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" stroke-width="1.7" stroke-linejoin="round"><path d="M6 3h8l4 4v14H6z"/><path d="M9 12h6M9 16h6" stroke-linecap="round"/></svg>',
  box:'<svg viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" stroke-width="1.7" stroke-linejoin="round"><path d="M3.5 7.5L12 3l8.5 4.5v9L12 21l-8.5-4.5z"/><path d="M3.5 7.5L12 12l8.5-4.5M12 12v9"/></svg>',
  card:'<svg viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" stroke-width="1.7"><rect x="3" y="5.5" width="18" height="13" rx="2.5"/><path d="M3 10h18"/></svg>',
  gift:'<svg viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" stroke-width="1.7" stroke-linejoin="round"><rect x="3.5" y="8" width="17" height="4"/><path d="M5 12v8.5h14V12M12 8v12.5M12 8c-2-4-6-3-5 0M12 8c2-4 6-3 5 0"/></svg>',
  star:'<svg viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" stroke-width="1.7" stroke-linejoin="round"><path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.8z"/></svg>',
  truck:'<svg viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" stroke-width="1.7" stroke-linejoin="round"><path d="M2.5 6.5h11v9h-11zM13.5 9.5h4l3 3v3h-7z"/><circle cx="6.5" cy="17.5" r="1.8" fill="#fff"/><circle cx="16.5" cy="17.5" r="1.8" fill="#fff"/></svg>',
  ticket:'<svg viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" stroke-width="1.7" stroke-linejoin="round"><path d="M3.5 7.5h17v3a2 2 0 0 0 0 3v3h-17v-3a2 2 0 0 0 0-3z"/><path d="M14.5 7.5v9" stroke-dasharray="1.6 1.8"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M8 12.3l2.7 2.7L16 9.5"/></svg>',
};

/* 공통 아이콘 · 단말 일러스트 · 체크 마크 */
let _dg=0;
/* iPhone Duo 일러스트 (예시 이미지) · color: white | black */
function dev(color){ const k=++_dg, w=color!=='black';
  const frame=w?'#e6e7ea':'#2a2c31', edge=w?'#c3c6cc':'#15161a', back=w?'#f3f3f5':'#3a3d44';
  return `<svg viewBox="0 0 64 86" fill="none"><defs><linearGradient id="sk${k}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6e7d3"/><stop offset=".45" stop-color="#e7c39a"/><stop offset="1" stop-color="#a8714a"/></linearGradient></defs>
  <rect x="4" y="8" width="30" height="70" rx="7" fill="${back}" stroke="${edge}"/>
  <rect x="9" y="13" width="13" height="22" rx="5" fill="${w?'#e2e3e6':'#2b2d33'}" stroke="${edge}" stroke-width=".8"/>
  <circle cx="15.5" cy="19.5" r="3.6" fill="#1c1d21"/><circle cx="15.5" cy="29" r="3.6" fill="#1c1d21"/>
  <rect x="24" y="5" width="36" height="76" rx="8" fill="${frame}" stroke="${edge}"/>
  <rect x="26.5" y="7.5" width="31" height="71" rx="6" fill="url(#sk${k})"/>
  <path d="M26.5 52c8-6 17-4 31-12v38.5h-31z" fill="#c08a5c" opacity=".55"/>
  <path d="M26.5 62c10-5 20-2 31-8v24.5h-31z" fill="#8e5a37" opacity=".5"/>
  <rect x="38" y="10" width="8" height="2.4" rx="1.2" fill="#111"/></svg>`; }
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
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M8 12.3l2.7 2.7L16 9.5"/></svg>',
};

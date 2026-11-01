/* ---------- 렌더 ---------- */
const $ = id => document.getElementById(id);
const conv = $('conv');
function el(html){ const d=document.createElement('div'); d.innerHTML=html.trim(); return d.firstElementChild; }

function cardHTML(c){
  let h = `<div class="card in"><div><div class="ch-t">${I[c.icon]||''}<span>${c.title}</span></div>${c.sub?`<div class="ch-s">${c.sub}</div>`:''}</div>`;
  if(c.cmp) h += `<div class="cmp">${c.cmp.map(x=>`<div class="${x.win?'win':''}"><div class="l">${x.l}</div><div class="v">${x.v}</div><div class="n">${x.n}</div></div>`).join('')}</div>`;
  if(c.warn) h += `<div class="warnbox"><div class="reason warn"><span class="ck">${BANG}</span><div><b>${c.warn[0]}</b><small>${c.warn[1]}</small></div></div></div>`;
  if(c.reasons) h += `<div class="reasons">${c.reasons.map(r=>`<div class="reason"><span class="ck">${CHECK}</span><div>${r[0]}</div></div>`).join('')}</div>`;
  if(c.bars){ const m=12; h += `<div><div class="bars">${c.bars.map((v,i)=>`<div><span style="height:${v/m*100}%"></span><em>${['5월','6월','7월','8월','9월','10월'][i]}</em></div>`).join('')}</div><div class="bar-legend" style="margin-top:8px"><span>${c.barLegend[0]}</span><span>${c.barLegend[1]}</span></div></div>`; }
  if(c.rec) h += `<div class="rec"><b>${c.rec[0]}</b>${c.rec[1]}</div>`;
  if(c.otp) h += `<div class="otp"><span>${c.otp[0]}</span><em>${c.otp[1]}</em></div>`;
  if(c.cons) h += `<div class="cons">${c.cons.map(x=>`<div><i>${CHECK}</i><span>${x}</span><u>보기</u></div>`).join('')}</div>`;
  if(c.rows && c.thumb) h += `<div class="thumbrow"><div class="thumb">${I.phone}</div><div class="rows" style="flex:1;min-width:0">${c.rows.map(r=>`<div class="row"><div class="l">${r[0]}</div><div class="v">${r[1]}</div></div>`).join('')}</div></div>`;
  else if(c.rows) h += `<div class="rows">${c.rows.map(r=>`<div class="row"><div class="l">${r[0]}</div><div class="v">${r[1]}</div></div>`).join('')}</div>`;
  if(c.steps) h += `<div class="steps">${c.steps.map(s=>`<div class="st ${s[0]}"><span class="dot">${s[0]==='done'?CHECK:s[0]==='hold'?BANG:''}</span><div><div class="tt">${s[1]}</div>${s[2]?`<div class="dd">${s[2]}</div>`:''}</div></div>`).join('')}</div>`;
  if(c.ben) h += `<div class="ben">${c.ben.map(b=>`<div><div class="bt"><p>${b[0]}</p><span>${b[1]}</span></div><span class="dday ${b[3]?'hot':''}">${b[2]}</span></div>`).join('')}</div>`;
  if(c.review) h += `<div class="review"><div class="stars">${c.review[0]}</div>${c.review[1]}</div>`;
  if(c.quote) h += `<div class="quote">${c.quote}</div>`;
  if(c.pills) h += `<div class="pills">${c.pills.map(p=>`<div class="pill ${p.p?'p':''}">${p.t}</div>`).join('')}</div>`;
  return h + '</div>';
}

/* ---------- 재생 엔진 ---------- */
let si=0, sc=0, run=0, paused=false, speed=1, sceneStart=0, sceneDur=1;
class Stop extends Error{}
let instant=false;
const sleep = ms => instant ? Promise.resolve() : new Promise((res,rej)=>{
  const my=run; let left=ms/speed, last=performance.now();
  (function tick(now){
    if(my!==run) return rej(new Stop());
    const t=now||performance.now();
    if(!paused){ left -= t-last; }
    last=t;
    if(left<=0) return res();
    requestAnimationFrame(tick);
  })();
});
function add(node){ if(instant) node.classList.remove('in'); conv.appendChild(node); requestAnimationFrame(()=>{ conv.scrollTop = conv.scrollHeight; }); return node; }
async function typing(){ if(instant) return; const t=add(el('<div class="typing in"><i></i><i></i><i></i></div>')); await sleep(650); t.remove(); }

async function playStep(s){
  if(s.u){ add(el(`<div class="u-row in"><div class="u">${s.u}</div></div>`)); await sleep(900); }
  else if(s.a){ await typing(); add(el(`<div class="a in">${s.a}</div>`)); await sleep(1300 + s.a.length*18); }
  else if(s.card){ await typing(); const n=add(el(cardHTML(s.card))); await sleep(1600 + (s.card.rows||s.card.steps||s.card.reasons||[]).length*350);
    if(s.card.press!=null){ const p=n.querySelectorAll('.pill')[s.card.press]; p.classList.add('press'); await sleep(260); p.classList.remove('press'); await sleep(700); } }
  else if(s.choice){ await typing();
    const n=add(el(`<div class="choice in"><div class="q">${s.choice}</div>${s.o.map((o,i)=>`<div class="opt"><span class="n">${i+1}</span><span class="lb">${o}</span>${CM}</div>`).join('')}</div>`));
    await sleep(1600); n.querySelectorAll('.opt').forEach((o,i)=>o.classList.add(i===s.sel?'sel':'dim'));
    await sleep(600); add(el(`<div class="u-row in"><div class="u">${s.o[s.sel]}</div></div>`)); await sleep(800); }
  else if(s.div){ add(el(`<div class="div in">${s.div}</div>`)); await sleep(700); }
  else if(s.push){ if(instant) return; $('pt').innerHTML=s.push.t; $('px').innerHTML=s.push.x; const p=$('push'); p.classList.add('show'); await sleep(2600); p.classList.remove('show'); await sleep(500); }
}
function estimate(steps){ return steps.reduce((t,s)=> t + (s.u?900: s.a?1950+s.a.length*18: s.card?2250+(s.card.rows||s.card.steps||s.card.reasons||[]).length*350+(s.card.press!=null?960:0): s.choice?3650: s.div?700: s.push?3100:0),0) + 1800; }

async function playScene(cont){
  const my=++run; paused=false; syncPlay(); instant=false;
  $('push').classList.remove('show');
  if(!cont){
    /* 바로 점프한 경우: 이전 씬 대화를 즉시 그려두고 이어서 재생 */
    conv.innerHTML=''; instant=true;
    try{ for(let j=0;j<sc;j++) for(const st of S[si].scenes[j].steps) await playStep(st); }finally{ instant=false; }
    conv.style.scrollBehavior='auto'; conv.scrollTop=conv.scrollHeight; conv.style.scrollBehavior='';
  }
  const scen=S[si].scenes[sc];
  renderMeta(); sceneDur=estimate(scen.steps); sceneStart=performance.now(); elapsed=0;
  try{
    for(const st of scen.steps){ await playStep(st); }
    await sleep(1600);
    if(my!==run) return;
    if(sc < S[si].scenes.length-1){ sc++; playScene(true); }
    else { await sleep(800); si=(si+1)%S.length; sc=0; playScene(false); }
  }catch(e){ if(!(e instanceof Stop)) console.error(e); }
}

/* 진행 바 */
let elapsed=0, lastT=performance.now();
(function loop(t){
  if(!paused) elapsed += (t-lastT)*speed; lastT=t;
  const cur=document.querySelector('.prog i.cur'); if(cur) cur.style.setProperty('--p', Math.min(1, elapsed/sceneDur));
  requestAnimationFrame(loop);
})(performance.now());

/* ---------- 메타 / 목록 ---------- */
const num = i => S[i].tag ? S[i].tag : i + (S[0].tag ? 0 : 1);
function renderList(){
  $('list').innerHTML = S.map((s,i)=>`<button class="sc ${i===si?'on':''}" data-i="${i}">
    <div class="sc-top"><span class="sc-num ${s.tag?'tag':''}">${num(i)}</span><div style="min-width:0"><div class="sc-name">${s.name}</div><div class="sc-title">${s.title}</div></div><span class="sc-stage">${s.stage}</span></div>
    <div class="sc-body"><p class="sc-what">${s.what}</p><p class="sc-quote">${s.quote}</p>
    <ol class="scenes">${s.scenes.map((c,j)=>`<li data-j="${j}" class="${i===si&&j===sc?'cur':(i===si&&j<sc?'done':'')}"><b>SCENE ${j+1}</b>${c.t}</li>`).join('')}</ol></div></button>`).join('');
}
function renderMeta(){
  const s=S[si];
  $('capK').textContent = `${s.tag?'['+s.tag+']':num(si)+'.'} ${s.name} · SCENE ${sc+1}/${s.scenes.length}`;
  $('capT').textContent = s.scenes[sc].t;
  $('prog').innerHTML = s.scenes.map((_,j)=>`<i class="${j<sc?'done':j===sc?'cur':''}"></i>`).join('');
  renderList();
  const on=document.querySelector('.sc.on'); if(on && window.matchMedia('(max-width:860px)').matches) on.scrollIntoView({inline:'center',block:'nearest',behavior:'smooth'});
}
$('list').addEventListener('click', e=>{
  const li=e.target.closest('li[data-j]'); const b=e.target.closest('.sc'); if(!b) return;
  const i=+b.dataset.i;
  if(li && i===si){ sc=+li.dataset.j; } else if(i!==si){ si=i; sc=0; } else return;
  playScene();
});

/* ---------- 컨트롤 ---------- */
function syncPlay(){ $('bPlay').textContent = paused?'재생':'일시정지'; }
$('bPlay').onclick=()=>{ paused=!paused; syncPlay(); };
$('bRestart').onclick=()=>{ sc=0; playScene(); };
$('bPrev').onclick=()=>{ if(sc>0) sc--; else { si=(si-1+S.length)%S.length; sc=S[si].scenes.length-1; } playScene(); };
$('bNext').onclick=()=>{ if(sc<S[si].scenes.length-1) sc++; else { si=(si+1)%S.length; sc=0; } playScene(); };
$('bSpeed').onclick=()=>{ speed = speed===1?1.5: speed===1.5?2:1; $('bSpeed').textContent=speed+'x'; };
document.addEventListener('keydown', e=>{
  if(e.target.closest('button') && e.key===' ') return;
  if(e.key===' '){ e.preventDefault(); $('bPlay').click(); }
  if(e.key==='ArrowRight') $('bNext').click();
  if(e.key==='ArrowLeft') $('bPrev').click();
});

/* ---------- 폰 스케일 ---------- */
function fit(){
  const w=$('wrap'), r=w.getBoundingClientRect();
  const s=Math.min(1, (r.height-24)/844, (r.width-24)/390);
  const k=Math.max(.4,s);
  $('phone').style.transform=`scale(${k})`;
  $('box').style.width=390*k+'px'; $('box').style.height=844*k+'px';
}
new ResizeObserver(fit).observe($('wrap')); fit();

playScene();

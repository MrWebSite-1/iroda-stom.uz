/* ===== RENDER (uz / ru) ===== */
const $=id=>document.getElementById(id),C=CONFIG;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const tel=s=>"tel:"+s.replace(/[^\d+]/g,"");
const clean=u=>u.replace(/^@/,"");
const phones=C.phones||[];
let LANG="uz",L=C.lang.uz,U=L.ui;
try{const s=localStorage.getItem("lang");LANG=C.lang[s]?s:(C.lang[C.defaultLang]?C.defaultLang:"uz")}catch(e){LANG=C.defaultLang||"uz"}

/* --- statik matnlar: data-i="kalit" --- */
function applyStatic(){
 document.querySelectorAll("[data-i]").forEach(el=>{const v=U[el.dataset.i];if(v!=null)el.textContent=v});
 $("sheet").setAttribute("aria-label",U.sheetAria);$("sheetClose").setAttribute("aria-label",U.close);
 $("map").title=U.map;$("langBox").setAttribute("aria-label",U.langAria);
}
/* --- logo --- */
function renderBrand(){
 const b=$("brand");
 b.innerHTML=C.logo?`<img src="${esc(C.logo)}" alt="${esc(L.brand)}">`:esc(L.short||L.brand);
 if(C.logo)b.firstChild.addEventListener("error",()=>{b.textContent=L.short||L.brand});
}
/* --- xizmatlar kartalari: dumaloq rasm bilan --- */
function renderServices(){
 $("serviceGrid").innerHTML=L.services.map((s,i)=>`<article class="card svc" data-service="${i}" tabindex="0" role="button" aria-label="${esc(s.t)}: ${esc(U.more)}"><span class="svc-pic"><img src="${esc(s.img)}" alt="" loading="lazy" width="440" height="440"></span><h3>${esc(s.t)}</h3><p class="muted">${esc(s.d)}</p><ul>${s.items.slice(0,3).map(x=>`<li>${esc(x)}</li>`).join("")}</ul><span class="svc-more">${esc(U.more)} <i aria-hidden="true">→</i></span></article>`).join("");
}
/* --- mutaxassislar: avtomatik aylanuvchi slayder + nuqtalar --- */
/* --- umumiy aylanma (slayder): shifokorlar, yangiliklar, sertifikatlar --- */
const OFF={};
function makeCarousel(id,slides,o){
 o=o||{};if(OFF[id])OFF[id]();
 const old=$(id),el=old.cloneNode(false);old.replaceWith(el);el.className="docs-car "+(o.cls||"");
 const n=slides.length;
 el.innerHTML=`<div class="car-stage"><div class="docs-track" tabindex="0" role="region" aria-roledescription="carousel" aria-label="${esc(o.aria||"")}">${slides.join("")}</div>${o.nav&&n>1?`<button class="car-nav prev" type="button" data-nav="-1" aria-label="${esc(U.prev)}">‹</button><button class="car-nav next" type="button" data-nav="1" aria-label="${esc(U.next)}">›</button>`:""}</div><div class="docs-dots" role="tablist" aria-label="${esc(o.pick||"")}">${slides.map((_,i)=>`<button type="button" role="tab" aria-label="${esc((o.labels&&o.labels[i])||String(i+1))}" data-dot="${i}"></button>`).join("")}</div>`;
 const tr=el.querySelector(".docs-track"),dots=[...el.querySelectorAll("[data-dot]")],DELAY=o.delay||3000;
 const reduce=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;
 let cur=0,timer=null,hold=false,inView=true,raf=0,io=null;
 const mark=i=>{cur=i;dots.forEach((b,j)=>{b.classList.toggle("on",j===i);b.setAttribute("aria-selected",j===i)})};
 const go=(i,instant)=>{i=(i+n)%n;tr.scrollTo({left:tr.children[i].offsetLeft,behavior:instant?"auto":"smooth"});mark(i)};
 const stop=()=>{clearInterval(timer);timer=null};
 const start=()=>{stop();if(reduce||n<2)return;timer=setInterval(()=>{if(!hold&&inView&&!document.hidden)go(cur+1)},DELAY)};
 tr.addEventListener("scroll",()=>{cancelAnimationFrame(raf);raf=requestAnimationFrame(()=>{const step=tr.children[0].offsetWidth+16,i=Math.max(0,Math.min(n-1,Math.round(tr.scrollLeft/step)));if(i!==cur)mark(i)})},{passive:true});
 el.addEventListener("click",e=>{const b=e.target.closest("[data-dot]");if(b){go(+b.dataset.dot);start();return}const nv=e.target.closest("[data-nav]");if(nv){go(cur+ +nv.dataset.nav);start()}});
 const pause=()=>{hold=true},resume=()=>{hold=false;start()};
 tr.addEventListener("touchstart",pause,{passive:true});tr.addEventListener("touchend",resume,{passive:true});tr.addEventListener("touchcancel",resume,{passive:true});
 el.addEventListener("mouseenter",pause);el.addEventListener("mouseleave",resume);
 tr.addEventListener("focusin",pause);tr.addEventListener("focusout",resume);
 tr.addEventListener("keydown",e=>{if(e.key==="ArrowRight"){e.preventDefault();go(cur+1);start()}if(e.key==="ArrowLeft"){e.preventDefault();go(cur-1);start()}});
 if("IntersectionObserver" in window){io=new IntersectionObserver(es=>{inView=es[0].isIntersecting},{threshold:.25});io.observe(el)}
 const onResize=()=>go(cur,true);addEventListener("resize",onResize);
 mark(0);start();
 OFF[id]=()=>{stop();removeEventListener("resize",onResize);if(io)io.disconnect()};
}
function renderDocs(){
 const D=L.doctors;
 const ini=n=>{const w=n.split(" ");return esc(((w[0]||"")[0]||"")+((w[1]||"")[0]||""))};
 const slide=d=>`<div class="card doc-slide">${d.img?`<img class="doc-photo" src="${esc(d.img)}" alt="${esc(d.n)}" loading="lazy" width="360" height="450">`:`<div class="avatar" aria-hidden="true">${ini(d.n)}</div>`}<div class="doc-info"><h3>${esc(d.n)}</h3><div class="tag">${esc(d.r)}${d.e?" · "+esc(d.e):""}</div><p class="muted">${esc(d.b||"").replace(/\n/g,"<br>")}</p><button class="btn ghost" type="button" data-book>${esc(U.signup)}</button></div></div>`;
 makeCarousel("docs",D.map(slide),{aria:U.docsAria,pick:U.docsPick,labels:D.map(d=>d.n),delay:3000});
}
/* --- ikonkalar --- */
const ICO={
 phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
 mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
 pin:'<path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
 globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3.500 3.500 3.500 14.500 0 18M12 3c-3.500 3.500-3.500 14.500 0 18"/>',
 facebook:'<path d="M14 8.500h2.500V5H14c-2.500 0-4 1.600-4 4v2H8v3.500h2V21h3.500v-6.500h2.600l.5-3.500h-3.100V9.300c0-.5.200-.8.500-.8z"/>',
 instagram:'<rect x="3.500" y="3.500" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r=".8"/>',
 youtube:'<rect x="2.500" y="5.500" width="19" height="13" rx="4"/><path d="M10 9.500v5l4.500-2.500z"/>',
 telegram:'<path d="M21 4L3 11l5.500 2L10 19l3-4 4.500 3.500z"/><path d="M8.500 13L21 4"/>',
 whatsapp:'<path d="M4 20l1.200-4A8 8 0 1 1 8 18.800z"/><path d="M9 9c0 3 3 6 6 6l1-1.500-2-1-1 .8c-1-.4-2-1.400-2.400-2.400l.8-1-1-2z"/>'
};
const ico=k=>`<span class="ci"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICO[k]}</svg></span>`;
const host=u=>u.replace(/^https?:\/\//,"").replace(/\/.*$/,"");
const mapUrl=()=>C.mapLink||("https://www.google.com/maps?q="+encodeURIComponent(C.mapQuery||""));
/* --- aloqa --- */
function renderContacts(){
 const items=[
  ...phones.map(p=>["phone",tel(p),U.phone,p]),
  C.email&&["mail","mailto:"+C.email,"Email",C.email],
  L.heroBadge&&["clock",null,U.hours,L.heroBadge],
  (L.address||C.mapQuery)&&["pin",mapUrl(),U.addr,L.address||C.mapQuery],
  C.website&&["globe",C.website,U.site,host(C.website)]
 ].filter(Boolean);
 $("contactList").innerHTML=items.map(c=>{const inner=`${ico(c[0])}<span class="ct"><span class="muted">${esc(c[2])}</span><b>${esc(c[3])}</b></span>`;
  return c[1]?`<a class="card cc" href="${esc(c[1])}"${c[1].indexOf("http")===0?' target="_blank" rel="noopener"':""}>${inner}</a>`:`<div class="card cc">${inner}</div>`}).join("");
 const so=[
  C.instagram&&["instagram","https://instagram.com/"+C.instagram,"Instagram"],
  C.facebook&&["facebook",C.facebook,"Facebook"],
  C.youtube&&["youtube",C.youtube,"YouTube"],
  C.telegram&&["telegram","https://t.me/"+clean(C.telegram),"Telegram"],
  C.whatsapp&&["whatsapp","https://wa.me/"+C.whatsapp.replace(/\D/g,""),"WhatsApp"]
 ].filter(Boolean);
 $("socialList").innerHTML=so.map(c=>`<a class="soc" href="${esc(c[1])}" target="_blank" rel="noopener">${ico(c[0])}<span>${esc(c[2])}</span></a>`).join("");
}
/* --- yangiliklar va sertifikatlar --- */
function renderAbout(){
 makeCarousel("aboutCar",(C.aboutPhotos||[]).map(src=>`<div class="car-slide about-slide"><button class="gal" type="button" data-zoom="${esc(src)}" aria-label="${esc(U.zoom)}"><img src="${esc(src)}" alt="${esc(L.brand)}" loading="lazy" width="1200" height="800"></button></div>`),{cls:"gallery",aria:L.aboutT,pick:L.aboutT,delay:3500});
}
function renderNews(){
 const ph=C.newsPhotos||[],nw=(L.news||[])[0]||{};
 makeCarousel("newsList",ph.map(src=>`<div class="car-slide news-slide"><img src="${esc(src)}" alt="${esc(nw.t||"")}" loading="lazy"></div>`),{cls:"news",aria:U.news,pick:U.news,delay:3500});
 $("newsCap").innerHTML=nw.t?`<h3>${esc(nw.t)}</h3><span class="muted">${esc(nw.date||"")}</span>`:"";
}
function renderCerts(){
 const cs=C.certs||[];
 makeCarousel("certList",cs.map((src,i)=>`<div class="car-slide cert-slide"><button class="cert" type="button" data-zoom="${esc(src)}" aria-label="${esc(U.zoom)} ${i+1}"><img src="${esc(src)}" alt="" loading="lazy"></button></div>`),{cls:"certs",aria:U.certs,pick:U.certs,delay:4000});
}
document.addEventListener("click",e=>{
 const z=e.target.closest("[data-zoom]");if(z){$("zoomImg").src=z.dataset.zoom;$("zoom").hidden=false;document.body.style.overflow="hidden";return}
 if(e.target.closest("#zoomClose")||e.target===$("zoom")){$("zoom").hidden=true;document.body.style.overflow=$("reader").hidden?"":"hidden"}
});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!$("zoom").hidden){$("zoom").hidden=true;document.body.style.overflow=$("reader").hidden?"":"hidden"}});
function renderFoot(){
 $("copy").textContent="© "+new Date().getFullYear()+" "+L.brand+". "+U.rights;
 const m=$("map"),src="https://www.google.com/maps?q="+encodeURIComponent(C.mapQuery||"")+"&output=embed&hl="+LANG;
 if(C.mapQuery&&m.getAttribute("src")!==src)m.src=src;
 $("mapOpen").href=mapUrl();
}
function renderAll(){
 L=C.lang[LANG];U=L.ui;
 document.documentElement.lang=LANG;document.title=L.title;
 $("heroBadge").textContent=L.heroBadge;$("heroTitle").textContent=L.heroTitle;$("heroText").textContent=L.heroText;
 $("heroImg").alt=L.brand;$("aboutT").textContent=L.aboutT;$("aboutP1").textContent=L.aboutP1;$("aboutP2").textContent=L.aboutP2;
 $("menu").innerHTML=L.menu.map(m=>`<a href="${m[1]}">${esc(m[0])}</a>`).join("");
 document.querySelectorAll("[data-lang]").forEach(b=>{const on=b.dataset.lang===LANG;b.classList.toggle("on",on);b.setAttribute("aria-pressed",on)});
 applyStatic();renderBrand();renderServices();renderDocs();renderAbout();renderNews();renderCerts();renderContacts();renderFoot();
 if(window.__refreshReader)window.__refreshReader();
}
function setLang(l){if(!C.lang[l]||l===LANG)return;LANG=l;try{localStorage.setItem("lang",l)}catch(e){}renderAll()}
document.addEventListener("click",e=>{const b=e.target.closest("[data-lang]");if(b)setLang(b.dataset.lang)});

/* ===== XIZMAT PANELI ===== */
(function(){const rd=$("reader"),back=$("readerClose"),cta=rd.querySelector(".reader-cta");let open=false,curIdx=-1;
 const hash=i=>"#xizmat-"+L.services[i].k;
 function show(i,push){const v=L.services[i];open=true;curIdx=i;back.textContent=U.back;
  $("rt").textContent=v.t;{const im=$("rimg");im.src=v.img;im.alt=v.t;im.classList.add("sq");im.hidden=false}
  $("rbody").innerHTML=`<p class="lead">${esc(v.intro)}</p><div class="note"><b>${esc(U.who)}</b> ${esc(v.who)}</div><h3>${esc(U.incl)}</h3><ul>${v.items.map(x=>`<li>${esc(x)}</li>`).join("")}</ul><p class="muted">${esc(U.price)}</p><p><button class="btn" type="button" data-book>${esc(U.bookSvc)}</button>${phones[0]?` <a class="btn ghost" href="${tel(phones[0])}">${esc(U.call)}</a>`:""}</p>`;
  cta.hidden=true;
  rd.hidden=false;document.body.style.overflow="hidden";if(push||!rd.dataset.shown)rd.scrollTop=0;rd.dataset.shown="1";
  if(push&&location.hash!==hash(i))history.pushState(null,"",hash(i))}
 function hide(fromHash){if(!open)return;open=false;curIdx=-1;rd.hidden=true;delete rd.dataset.shown;document.body.style.overflow="";
  if(!fromHash&&location.hash.indexOf("#xizmat-")==0)history.back()}
 function fromHash(){const m=location.hash.match(/^#xizmat-(.+)$/);
  if(m){const i=L.services.findIndex(x=>x.k===m[1]);if(i>-1){show(i,false);return}}
  hide(true)}
 window.__refreshReader=()=>{if(open&&curIdx>-1)show(curIdx,false)};
 document.addEventListener("click",e=>{
  const c=e.target.closest("[data-service]");if(c){show(+c.dataset.service,true);return}
  if(e.target.closest("#readerClose"))hide(false)});
 document.addEventListener("keydown",e=>{
  if((e.key==="Enter"||e.key===" ")&&e.target.closest){const c=e.target.closest("[data-service]");if(c&&c.tagName==="ARTICLE"){e.preventDefault();show(+c.dataset.service,true)}}
  if(e.key==="Escape"&&open&&$("sheet").hidden)hide(false)});
 addEventListener("hashchange",fromHash);
 renderAll();fromHash();
})();
/* ===== ONLAYN YOZILISH (Blaze Dental) ===== */
const sheet=$("sheet"),frame=$("sheetFrame");
function openBook(){
 if(C.bookingMode==="tab"){window.open(C.bookingUrl,"_blank","noopener");return}
 if(!frame.getAttribute("src"))frame.src=C.bookingUrl;
 $("sheetOpen").href=C.bookingUrl;
 sheet.hidden=false;document.body.style.overflow="hidden";$("sheetClose").focus();
}
function closeBook(){sheet.hidden=true;document.body.style.overflow=$("reader").hidden?"":"hidden"}
document.addEventListener("click",e=>{
 if(e.target.closest("[data-book]")){openBook();return}
 if(e.target.closest("#sheetClose")||e.target===sheet)closeBook();
});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!sheet.hidden)closeBook()});

/* ===== SCROLL ANIMATSIYA ===== */
(function(){
 const io="IntersectionObserver" in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12,rootMargin:"0px 0px -6% 0px"}):null;
 function watch(el,delay){el.classList.add("reveal");el.style.setProperty("--d",(delay||0)+"ms");io?io.observe(el):el.classList.add("in")}
 function init(root){
  root.querySelectorAll(".hero .wrap > *, section h2, section .muted:not(.card .muted), .banner, .logos, form, .tabs").forEach((el,i)=>{if(!el.classList.contains("reveal"))watch(el,0)});
  root.querySelectorAll(".grid, .slider, .contact-grid, .socials").forEach(g=>{[...g.children].forEach((c,i)=>{if(!c.classList.contains("reveal"))watch(c,Math.min(i,5)*110)})});
 }
 init(document);
 document.querySelectorAll(".about-text > *").forEach((el,i)=>{el.classList.add("reveal-l");watch(el,i*120)});
 {const r=document.getElementById("aboutCar");if(r){r.classList.add("reveal-r");watch(r,150)}}
 document.querySelectorAll(".map-box, .news-cap, #newsList, #certList, #docs").forEach(el=>{if(!el.classList.contains("reveal"))watch(el,0)});
 const nav=document.querySelector("header.nav");
 const onScroll=()=>nav.classList.toggle("scrolled",scrollY>10);
 addEventListener("scroll",onScroll,{passive:true});onScroll();
})();

/* ===== HERO: bino va bolalar rasmi har 2 soniyada almashadi ===== */
(function(){const imgs=[$("heroImg"),$("heroImg2")];let k=0;
 setInterval(()=>{if(document.hidden)return;imgs[k].classList.remove("on");k=(k+1)%imgs.length;imgs[k].classList.add("on")},2000);
})();

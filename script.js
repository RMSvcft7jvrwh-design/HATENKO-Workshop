'use strict';
// Layout preview: asset and copy finalization are intentionally out of scope.
const header=document.getElementById('siteHeader');
const updateHeader=()=>header.classList.toggle('scrolled',window.scrollY>96);
window.addEventListener('scroll',updateHeader,{passive:true});updateHeader();
const menu=document.getElementById('mobileNav');
const setMenu=open=>{menu.classList.toggle('open',open);document.getElementById('menuButton').setAttribute('aria-expanded',String(open));document.body.style.overflow=open?'hidden':''};
document.getElementById('menuButton').addEventListener('click',()=>setMenu(true));document.getElementById('menuClose').addEventListener('click',()=>setMenu(false));menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
document.querySelectorAll('[data-gallery]').forEach(gallery=>{const track=gallery.querySelector('.gallery-track');const step=()=>track.firstElementChild.getBoundingClientRect().width+32;gallery.querySelector('[data-prev]').addEventListener('click',()=>track.scrollBy({left:-step(),behavior:'smooth'}));gallery.querySelector('[data-next]').addEventListener('click',()=>track.scrollBy({left:step(),behavior:'smooth'}));});
document.querySelectorAll('.faq-list details').forEach(item=>item.addEventListener('toggle',()=>{if(item.open)document.querySelectorAll('.faq-list details').forEach(other=>{if(other!==item)other.open=false})}));
const walks={classic:{title:'王道',intro:'雷門から浅草寺へ。江戸の賑わいを感じながら歩くモデルコース。',places:[['雷門','浅草を象徴する門から散策を始めます。歴史解説は公式資料確認後に編集します。'],['仲見世通り','店先や通りの賑わいを楽しみながら進みます。人形焼などの名物は、飲食可能な場所で。'],['浅草寺','境内を巡り、浅草の長い歴史に思いを馳せます。']]},alley:{title:'裏路地',intro:'小さな路地の先で、下町の知らない表情に出会うモデルコース。',places:[['たぬき通り','小さな通りに残る風情を楽しみます。'],['浅草六区通り','劇場文化の面影を感じる街並みへ。'],['ひさご通り','下町の日常が見える通り。'],['浅草演芸ホール','浅草の大衆芸能に触れる、散策の締めくくり。']]},river:{title:'水辺',intro:'隅田川の風を感じて、ゆったりと浅草を楽しむモデルコース。',places:[['隅田公園','川沿いの開放的な風景を楽しみます。'],['桜橋','川をまたぐ歩行者向けの橋。'],['隅田川の対岸','両岸から異なる街の景色を眺めます。'],['吾妻橋','水辺の風景をもう一度味わう場所。']]}};
const modal=document.getElementById('walkModal');const close=()=>{modal.hidden=true;document.body.style.overflow=''};
document.querySelectorAll('[data-walk]').forEach(el=>el.addEventListener('click',()=>{const w=walks[el.dataset.walk];document.getElementById('modalTitle').textContent=w.title;document.getElementById('modalIntro').textContent=w.intro;document.getElementById('modalPlaces').replaceChildren(...w.places.map(([title,desc])=>{const item=document.createElement('article');item.className='place-item';const h=document.createElement('h3');h.textContent=title;const p=document.createElement('p');p.textContent=desc;item.append(h,p);return item}));modal.hidden=false;document.body.style.overflow='hidden';document.getElementById('modalClose').focus()}));
document.getElementById('modalClose').addEventListener('click',close);modal.addEventListener('click',e=>{if(e.target===modal)close()});window.addEventListener('keydown',e=>{if(e.key==='Escape'&&!modal.hidden)close()});
document.querySelectorAll('[data-art]').forEach(el=>el.addEventListener('click',()=>{}));

// Keep the Asakusa layering carousel independent of perfume and walk galleries.
document.querySelectorAll('[data-kikigasane]').forEach(carousel=>{
  const track=carousel.querySelector('.kikigasane-track');
  const prev=carousel.querySelector('[data-kikigasane-prev]');
  const next=carousel.querySelector('[data-kikigasane-next]');
  const updateControls=()=>{
    prev.disabled=track.scrollLeft<=1;
    next.disabled=track.scrollLeft>=track.scrollWidth-track.clientWidth-1;
  };
  const move=direction=>{
    const gap=parseFloat(getComputedStyle(track).columnGap)||0;
    const step=track.firstElementChild.getBoundingClientRect().width+gap;
    track.scrollBy({left:direction*step,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  };
  prev.addEventListener('click',()=>move(-1));
  next.addEventListener('click',()=>move(1));
  track.addEventListener('scroll',updateControls,{passive:true});
  window.addEventListener('resize',updateControls);
  updateControls();
});
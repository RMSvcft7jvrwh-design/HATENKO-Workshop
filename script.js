'use strict';
// Layout preview: asset and copy finalization are intentionally out of scope.
const header=document.getElementById('siteHeader');
const sectionNavLinks=[...document.querySelectorAll('.desktop-nav a[href^="#"],.mobile-nav a[href^="#"]')];
const pageSections=[...document.querySelectorAll('main section[id]')];
const updateHeader=()=>{
  header.classList.toggle('scrolled',window.scrollY>96);
  const readingLine=header.getBoundingClientRect().bottom+24;
  const currentSection=pageSections.filter(section=>section.getBoundingClientRect().top<=readingLine).at(-1);
  sectionNavLinks.forEach(link=>{
    if(currentSection&&link.hash==='#'+currentSection.id)link.setAttribute('aria-current','location');
    else link.removeAttribute('aria-current');
  });
};
window.addEventListener('scroll',updateHeader,{passive:true});updateHeader();
window.addEventListener('resize',updateHeader);
window.addEventListener('load',updateHeader);
const menu=document.getElementById('mobileNav');
const setMenu=open=>{menu.classList.toggle('open',open);document.getElementById('menuButton').setAttribute('aria-expanded',String(open));document.body.style.overflow=open?'hidden':''};
document.getElementById('menuButton').addEventListener('click',()=>setMenu(true));document.getElementById('menuClose').addEventListener('click',()=>setMenu(false));menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
document.querySelectorAll('[data-gallery]').forEach(gallery=>{const track=gallery.querySelector('.gallery-track');const step=()=>track.firstElementChild.getBoundingClientRect().width+32;gallery.querySelector('[data-prev]').addEventListener('click',()=>track.scrollBy({left:-step(),behavior:'smooth'}));gallery.querySelector('[data-next]').addEventListener('click',()=>track.scrollBy({left:step(),behavior:'smooth'}));});
document.querySelectorAll('.faq-list details').forEach(item=>item.addEventListener('toggle',()=>{if(item.open)document.querySelectorAll('.faq-list details').forEach(other=>{if(other!==item)other.open=false})}));
const walks={
  "classic": {
    "title": "門前",
    "reading": "もんぜん",
    "subtitle": "浅草の顔を、もう一歩奥へ",
    "lead": "選んだ香りをまとって、浅草の参道へ。",
    "intro": "雷門から仲見世、宝蔵門を抜けて浅草寺へ。\n\nふと見上げたり、通り抜けた門を振り返ったり、線香の香りに足を止めたり。\n\n賑わいの中にある小さな発見を、ひとつずつ楽しみながら歩きます。",
    "numbered": true,
    "places": [
      [
        "雷門",
        "浅草の入口に立つ雷門。門をくぐるときは、提灯の底に刻まれた龍も探してみてください。",
        "大提灯の下にも、龍がいる。"
      ],
      [
        "仲見世通り",
        "江戸時代から続く門前の商店街。人形焼や土産物が並ぶ店先を眺めながら、本堂へ向かいます。",
        "参拝の道は、商いの道。"
      ],
      [
        "宝蔵門",
        "門の裏には、仁王さまの力を表す巨大なわらじ。魔除けとして奉納されてきた、もうひとつの見どころです。",
        "通り抜けたら、振り返って。"
      ],
      [
        "浅草寺",
        "本堂の前では、常香炉から煙が立ちのぼります。\n\n散策の締めくくりに、浅草寺で手を合わせます。",
        "祈りのそばに、線香の香り。"
      ]
    ]
  },
  "alley": {
    "title": "抜裏",
    "reading": "ぬけうら",
    "subtitle": "笑いの街の舞台裏へ",
    "lead": "狸に願いをかけて、浅草の笑いへ。",
    "intro": "江戸の洒落が残る伝法院通りから、願かけ狸のいる小道、芸人たちの歴史が息づく六区へ。\n\n賑やかな観光名所から少し外れて、浅草の遊び心と人情を訪ねる散歩道です。",
    "numbered": true,
    "places": [
      [
        "伝法院通り",
        "ことわざや言葉をもじった「地口行灯」が並ぶ通り。江戸の遊び心を探しながら歩きます。",
        "江戸の洒落が、街灯に。"
      ],
      [
        "鎮護堂",
        "狸を祀る「おたぬきさま」。「他を抜く」の語呂合わせから、芸能関係者にも親しまれてきました。",
        "いたずら狸が、街の守り神に。"
      ],
      [
        "たぬき通り",
        "街灯に並ぶ11種類の願かけ狸。それぞれ違うご利益を持つ狸たちから、お気に入りを探してみましょう。",
        "小さな路地に、願かけ狸。"
      ],
      [
        "浅草六区通り",
        "往年の芸人や俳優の写真が並ぶ通り。かつて劇場街として栄えた六区の歴史を伝えています。",
        "街灯に残る、浅草のスターたち。"
      ],
      [
        "浅草演芸ホール",
        "落語に漫才、曲芸まで。かつて日本一の劇場街と呼ばれた浅草で、今も寄席の文化が続いています。",
        "浅草の笑いは、今も現役。"
      ]
    ],
    "outro": {
      "title": "ひと笑い、その先に。",
      "paragraphs": [
        "寄席に立ち寄るもよし。もう少し足を延ばして、ひさご通りで食事をするもよし。",
        "浅草の午後は、まだ続きます。"
      ]
    }
  },
  "river": {
    "title": "河岸",
    "reading": "かし",
    "subtitle": "川の向こうの浅草へ",
    "lead": "浅草の香りをまとい、江戸の香りを訪ねる。",
    "intro": "浅草寺ゆかりの槐から、300年以上愛される桜もちまで。二天門を抜けて隅田川へ向かい、両岸に残る江戸の文化と香りをたどります。",
    "numbered": true,
    "places": [
      [
        "槐の木",
        "浅草寺の縁起にも登場する槐（えんじゅ）。破天荒の香水「浅草」では、槐を香料と木製キャップの素材に採用しています。",
        "香水になった、浅草の歴史。"
      ],
      [
        "二天門",
        "浅草寺の東に立つ門を抜けて、隅田川へ。浅草のもうひとつの表情を訪ねます。",
        "寺の賑わいを背に、川へ。"
      ],
      [
        "隅田公園",
        "徳川吉宗の時代から続く桜の名所。浮世絵にも描かれた水辺を歩きます。",
        "江戸の人々も、この川で春を待った。"
      ],
      [
        "桜橋",
        "隅田川に架かるX字型の歩行者専用橋。ゆっくり渡りながら、街を眺めてみましょう。",
        "川の真ん中で、浅草を振り返る。"
      ],
      [
        "長命寺桜もち",
        "1717年、隅田川の桜葉を塩漬けにして生まれた桜もち。花ではなく葉から生まれる甘い香りが、300年以上にわたり受け継がれています。",
        "江戸から続く、桜の香り。"
      ],
      [
        "三囲神社",
        "宝井其角が雨乞いの句を奉納すると、雨が降ったという伝説が残ります。境内には今も句碑が。",
        "江戸の俳人が、雨を呼んだ神社。"
      ],
      [
        "隅田川の対岸",
        "川越しに眺める浅草の街並み。歩いてきた場所も、少し違って見えるかもしれません。",
        "川の向こうから、浅草を見返す。"
      ],
      [
        "吾妻橋",
        "1774年、町人たちの出資で架けられた「大川橋」がその始まり。橋を渡れば、再び浅草です。",
        "江戸の町人たちが架けた橋。"
      ]
    ]
  }
};
const walkPhotoTemplates={classic:`<figure><img src="assets/photos/walk/01_monzen/monzen_kaminarimon_crowd_04.png" alt="大提灯のある雷門と門前を行き交う人々" loading="lazy"><figcaption>雷門の風景</figcaption></figure>
<figure><img src="assets/photos/walk/01_monzen/monzen_nakamise_crowd_03.png" alt="買い物や散策を楽しむ人々で賑わう仲見世通り" loading="lazy"><figcaption>仲見世通りの賑わい</figcaption></figure>
<figure><img src="assets/photos/walk/01_monzen/monzen_nakamise_lantern_detail_02.png" alt="仲見世通りの軒先に並ぶ赤い提灯" loading="lazy"><figcaption>仲見世通りの提灯</figcaption></figure>

<figure><img src="assets/photos/walk/01_monzen/monzen_hozomon_waraji_06.png" alt="宝蔵門の裏側に掛けられた大きなわらじ" width="1152" height="1536" loading="lazy"><figcaption>宝蔵門の裏の大わらじ</figcaption></figure>
`,alley:`
  <figure><img src="assets/photos/walk/02_nukeura/tanuki.jpeg" alt="店先に設けられた、たぬきの像と赤い祠" width="900" height="1200" loading="lazy"><figcaption>たぬき通りの風景</figcaption></figure>
  <figure><img src="assets/photos/walk/02_nukeura/hisagost.jpeg" alt="飾りが並ぶひさご通りのアーケード" width="900" height="1200" loading="lazy"><figcaption>ひさご通りの風景</figcaption></figure>

`,river:`
  <figure><img src="assets/reference/enju_tree_origin_sign_reference.png" alt="槐の幹の前に設置された「神木 槐の木の由来」の案内板" loading="lazy"><figcaption>立ち寄りポイントの補足：槐の木の由来</figcaption></figure>
  <figure><img src="assets/photos/walk/03_kashi/kashi_sumida_river_skytree_01.png" alt="隅田川と橋の向こうにそびえる東京スカイツリー" loading="lazy"><figcaption>隅田川と東京スカイツリー</figcaption></figure>
  <figure><img src="assets/photos/walk/03_kashi/suimon.jpeg" alt="水路に設けられた水門の風景" width="900" height="1200" loading="lazy"><figcaption>水門の風景</figcaption></figure>
`};
const modal=document.getElementById('walkModal');const close=()=>{modal.hidden=true;document.body.style.overflow=''};
document.querySelectorAll('[data-walk]').forEach(el=>el.addEventListener('click',()=>{
  const w=walks[el.dataset.walk];
  const photos=document.getElementById('modalWalkPhotos');
  photos.innerHTML=walkPhotoTemplates[el.dataset.walk];
  photos.setAttribute('aria-label',w.title+'コースの風景と補足資料');
  photos.hidden=false;
  document.querySelector('.modal-reading').scrollTop=0;
  const heading=document.getElementById('modalTitle');
  heading.textContent=w.title;
  if(w.subtitle){const subtitle=document.createElement('span');subtitle.className='walk-subtitle';subtitle.textContent='— '+w.subtitle;heading.append(subtitle)}
  const accessibleTitle=w.title+'（'+w.reading+'）'+(w.subtitle?' — '+w.subtitle:'');
  heading.title=accessibleTitle;
  heading.setAttribute('aria-label',accessibleTitle);
  const intro=document.getElementById('modalIntro');
  intro.replaceChildren();
  if(w.lead){const lead=document.createElement('strong');lead.className='walk-intro-lead';lead.textContent=w.lead;intro.append(lead)}
  w.intro.split('\n\n').forEach((paragraph,index)=>{if(index)intro.append(document.createElement('br'),document.createElement('br'));const text=document.createElement('span');text.textContent=paragraph;intro.append(text)});
  document.getElementById('modalPlaces').replaceChildren(...w.places.map(([title,desc,lead],index)=>{
    const item=document.createElement('article');item.className='place-item';
    const h=document.createElement('h3');h.textContent=(w.numbered?String(index+1).padStart(2,'0')+'｜':'')+title;item.append(h);
    if(lead){const tagline=document.createElement('p');tagline.className='walk-place-lead';const strong=document.createElement('strong');strong.textContent=lead;tagline.append(strong);item.append(tagline)}
    desc.split('\n\n').forEach((text,index)=>{const p=document.createElement('p');p.textContent=text;if(index)p.style.marginTop='12px';item.append(p)});return item;
  }));
  if(w.outro){
    const outro=document.createElement('article');outro.className='place-item walk-outro';
    const title=document.createElement('h3');title.textContent=w.outro.title;outro.append(title);
    w.outro.paragraphs.forEach((text,index)=>{const p=document.createElement('p');p.textContent=text;if(index)p.style.marginTop='12px';outro.append(p)});
    document.getElementById('modalPlaces').append(outro);
  }
  modal.hidden=false;document.body.style.overflow='hidden';document.getElementById('modalClose').focus();
}));
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

// Booking is a local demo only: no navigation or submission.
const demoBookingModal=document.getElementById('demoBookingModal');
let demoBookingPreviousOverflow='';
document.querySelectorAll('[data-demo-booking]').forEach(button=>{
  button.addEventListener('click',()=>{
    demoBookingPreviousOverflow=document.body.style.overflow;
    demoBookingModal.showModal();
    document.body.style.overflow='hidden';
  });
});
document.getElementById('demoBookingClose').addEventListener('click',()=>demoBookingModal.close());
demoBookingModal.addEventListener('close',()=>{
  document.body.style.overflow=demoBookingPreviousOverflow;
});

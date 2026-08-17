
(() => {
  const root=document.documentElement;
  const themeKey='is229.theme';
  const savedTheme=localStorage.getItem(themeKey);
  if(savedTheme) root.dataset.theme=savedTheme;
  document.querySelectorAll('[data-theme-toggle]').forEach(btn=>btn.addEventListener('click',()=>{
    const next=root.dataset.theme==='dark'?'light':'dark'; root.dataset.theme=next; localStorage.setItem(themeKey,next);
  }));
  const side=document.querySelector('.sidebar');
  document.querySelectorAll('[data-menu-toggle]').forEach(b=>b.addEventListener('click',()=>side?.classList.toggle('open')));
  document.querySelectorAll('.side-nav a').forEach(a=>a.addEventListener('click',()=>side?.classList.remove('open')));

  const progressKey='is229.progress.weeks';
  const getProgress=()=>{try{return JSON.parse(localStorage.getItem(progressKey)||'[]')}catch{return []}};
  const setProgress=x=>localStorage.setItem(progressKey,JSON.stringify([...new Set(x)].sort((a,b)=>a-b)));
  function refreshProgress(){
    const p=getProgress();
    document.querySelectorAll('[data-course-progress]').forEach(el=>el.textContent=`${p.length} / 13 Weeks Completed — ${Math.round(p.length/13*100)}%`);
    document.querySelectorAll('[data-progress-fill]').forEach(el=>el.style.width=`${p.length/13*100}%`);
    document.querySelectorAll('[data-week-card]').forEach(card=>{
      const n=Number(card.dataset.weekCard), dot=card.querySelector('.status-dot'), label=card.querySelector('[data-status-label]');
      const started=localStorage.getItem(`is229.week.${n}.started`)==='1';
      if(p.includes(n)){dot?.classList.add('completed');dot?.classList.remove('in-progress');if(label)label.textContent='Completed'}
      else if(started){dot?.classList.add('in-progress');if(label)label.textContent='In Progress'}
    });
    const current=Number(document.body.dataset.week||0);
    document.querySelectorAll('[data-complete-week]').forEach(btn=>{
      btn.textContent=p.includes(current)?'✓ Week completed':'Mark week complete';
      btn.setAttribute('aria-pressed',String(p.includes(current)));
    });
  }
  const current=Number(document.body.dataset.week||0); if(current)localStorage.setItem(`is229.week.${current}.started`,'1');
  document.querySelectorAll('[data-complete-week]').forEach(btn=>btn.addEventListener('click',()=>{
    let p=getProgress(); p=p.includes(current)?p.filter(n=>n!==current):[...p,current]; setProgress(p); refreshProgress();
  }));
  refreshProgress();

  document.querySelectorAll('[data-copy]').forEach(btn=>btn.addEventListener('click',async()=>{
    const pre=btn.closest('.code-card')?.querySelector('code'); if(!pre)return;
    try{await navigator.clipboard.writeText(pre.textContent);btn.textContent='Copied';setTimeout(()=>btn.textContent='Copy',1200)}catch{btn.textContent='Select & copy'}
  }));

  document.querySelectorAll('[data-tabs]').forEach(group=>{
    const buttons=[...group.querySelectorAll('.tab-btn')], panels=[...group.querySelectorAll('.tab-panel')];
    buttons.forEach((b,i)=>b.addEventListener('click',()=>{buttons.forEach(x=>x.classList.remove('active'));panels.forEach(x=>x.hidden=true);b.classList.add('active');panels[i].hidden=false}));
  });

  document.querySelectorAll('[data-playground]').forEach(pg=>{
    const h=pg.querySelector('[data-editor-html]'),c=pg.querySelector('[data-editor-css]'),j=pg.querySelector('[data-editor-js]'),frame=pg.querySelector('iframe');
    const defaults={h:h?.value||'',c:c?.value||'',j:j?.value||''};
    const run=()=>{if(!frame)return;const safeJs=(j?.value||'').replace(/<\/script/gi,'<\\/script');frame.srcdoc=`<!doctype html><html><head><meta charset="utf-8"><style>body{font-family:Arial,sans-serif;padding:1rem;line-height:1.5}${c?.value||''}</style></head><body>${h?.value||''}<script>${safeJs}</script></body></html>`};
    pg.querySelector('[data-run]')?.addEventListener('click',run);pg.querySelector('[data-reset]')?.addEventListener('click',()=>{if(h)h.value=defaults.h;if(c)c.value=defaults.c;if(j)j.value=defaults.j;run()});run();
  });

  document.querySelectorAll('[data-checkpoint]').forEach(cb=>{
    const key=`is229.check.${cb.dataset.checkpoint}`;cb.checked=localStorage.getItem(key)==='1';cb.addEventListener('change',()=>localStorage.setItem(key,cb.checked?'1':'0'));
  });

  document.querySelectorAll('[data-quiz]').forEach(q=>{
    q.querySelector('[data-check-quiz]')?.addEventListener('click',()=>{
      let score=0,total=0;q.querySelectorAll('[data-quiz-q]').forEach(block=>{total++;const answer=Number(block.dataset.answer),chosen=block.querySelector('input:checked'),fb=block.querySelector('.feedback');if(chosen&&Number(chosen.value)===answer){score++;fb.textContent='Correct — good reasoning.';fb.className='feedback ok'}else{fb.textContent='Not yet. Review the concept above and try again.';fb.className='feedback bad'}});q.querySelector('[data-quiz-score]').textContent=`Score: ${score}/${total}`;
    });
  });
  document.querySelectorAll('[data-reveal]').forEach(b=>b.addEventListener('click',()=>{const t=document.getElementById(b.dataset.reveal);if(t){t.hidden=!t.hidden;b.textContent=t.hidden?'Reveal solution':'Hide solution'}}));
  document.querySelectorAll('[data-filter]').forEach(input=>input.addEventListener('input',()=>{const term=input.value.toLowerCase();document.querySelectorAll(input.dataset.filter).forEach(x=>x.hidden=!x.textContent.toLowerCase().includes(term))}));
  document.querySelectorAll('[data-modal-open]').forEach(b=>b.addEventListener('click',()=>document.getElementById(b.dataset.modalOpen)?.classList.remove('hidden')));
  document.querySelectorAll('[data-modal-close]').forEach(b=>b.addEventListener('click',()=>b.closest('.modal-backdrop')?.classList.add('hidden')));
})();

(() => {
  const root=document.documentElement;
  const menu=document.querySelector('[data-menu-button]');
  const nav=document.querySelector('[data-site-nav]');
  const theme=document.querySelector('[data-theme-toggle]');
  root.dataset.theme='light';
  menu?.addEventListener('click',()=>{const open=nav?.dataset.open==='true';if(!nav)return;nav.dataset.open=String(!open);menu.setAttribute('aria-expanded',String(!open));});
  theme?.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';
  });
  document.querySelectorAll('[data-faq-button]').forEach(button=>button.addEventListener('click',()=>{const panel=document.getElementById(button.getAttribute('aria-controls'));const open=button.getAttribute('aria-expanded')==='true';button.setAttribute('aria-expanded',String(!open));if(panel) panel.hidden=open;}));
})();

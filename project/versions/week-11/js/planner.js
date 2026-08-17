(() => {
  const form=document.querySelector('#trip-form');
  if(!form) return;
  const total=document.querySelector('[data-total]');
  const summary=document.querySelector('[data-summary]');
  function calculate(){
    const destination=form.destination;
    const option=destination.options[destination.selectedIndex];
    const price=Number(option?.dataset.price || 0);
    const travellers=Number(form.travellers.value || 0);
    const days=Number(form.days.value || 0);
    return price * travellers * days;
  }
  form.addEventListener('submit',(event)=>{
    event.preventDefault();
    clearErrors();
    if(!validate()) return;
    const value=calculate();
    if(total) total.textContent=`K${value.toFixed(2)}`;
    if(summary) summary.textContent=`Estimate for ${form.travellers.value} traveller(s) over ${form.days.value} day(s).`;
  });
  const status=document.querySelector('[data-form-status]');
  function setError(id,message){const input=document.getElementById(id);const out=document.querySelector(`[data-error-for="${id}"]`);if(input) input.setAttribute('aria-invalid','true');if(out) out.textContent=message;}
  function clearErrors(){document.querySelectorAll('[aria-invalid="true"]').forEach(el=>el.removeAttribute('aria-invalid'));document.querySelectorAll('.error').forEach(el=>el.textContent='');}
  function validate(){let ok=true;if(form.travellerName.value.trim().length<2){setError('traveller-name','Enter at least two characters.');ok=false;}if(!form.destination.value){setError('destination','Choose a destination.');ok=false;}if(Number(form.travellers.value)<1){setError('travellers','Enter at least one traveller.');ok=false;}if(Number(form.days.value)<1){setError('days','Enter at least one day.');ok=false;}if(status) status.textContent=ok?'Form ready.':'Correct the highlighted fields.';return ok;}
  const key='morobe-planner-draft';
  document.querySelector('[data-save-draft]')?.addEventListener('click',()=>{const data={travellerName:form.travellerName.value,destination:form.destination.value,travellers:form.travellers.value,days:form.days.value};localStorage.setItem(key,JSON.stringify(data));if(status) status.textContent='Draft saved in this browser.';});
  document.querySelector('[data-clear-draft]')?.addEventListener('click',()=>{localStorage.removeItem(key);form.reset();if(status) status.textContent='Saved draft cleared.';});
  const saved=JSON.parse(localStorage.getItem(key)||'null');if(saved){Object.entries(saved).forEach(([name,value])=>{if(form.elements[name]) form.elements[name].value=value;});if(status) status.textContent='Saved draft restored.';}
})();

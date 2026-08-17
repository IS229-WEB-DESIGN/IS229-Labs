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
    const value=calculate();
    if(total) total.textContent=`K${value.toFixed(2)}`;
    if(summary) summary.textContent=`Estimate for ${form.travellers.value} traveller(s) over ${form.days.value} day(s).`;
  });
})();

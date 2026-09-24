const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
const motionToggle=document.getElementById('motion-toggle');
let revealObserver;
function setMotion(off){
  document.body.classList.toggle('motion-off',off);
  motionToggle.setAttribute('aria-pressed',String(!off));
  motionToggle.innerHTML='Motion '+(off?'off':'on')+' <span>'+(off?'○':'◉')+'</span>';
  if(off){revealObserver?.disconnect();document.querySelectorAll('.reveal-enter').forEach(el=>el.classList.remove('reveal-enter'))}
  else prepareMotion();
}
if('IntersectionObserver' in window){
  revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('reveal-enter');revealObserver.unobserve(entry.target)}
  }),{threshold:0.01});
}
function prepareMotion(){
  revealObserver?.disconnect();
  if(!revealObserver||reduceMotion.matches||document.body.classList.contains('motion-off'))return;
  document.querySelectorAll('.exhibit-main,.exhibit-side,.creative-strip,.work-card,.brief,.funding-card,.perk,.feature-group').forEach(el=>{
    if(el.dataset.motionReady)return;
    el.dataset.motionReady='true';revealObserver.observe(el);
  });
}
setMotion(reduceMotion.matches);
motionToggle.addEventListener('click',()=>setMotion(!document.body.classList.contains('motion-off')));
reduceMotion.addEventListener('change',e=>setMotion(e.matches));
new MutationObserver(prepareMotion).observe(document.getElementById('app'),{childList:true});
document.addEventListener('pointermove',e=>{
  if(reduceMotion.matches||document.body.classList.contains('motion-off')||e.pointerType==='touch')return;
  const target=e.target.closest('.exhibit-image');if(!target)return;
  const r=target.getBoundingClientRect();
  target.style.setProperty('--pointer-x',((e.clientX-r.left)/r.width-.5)*8+'px');
  target.style.setProperty('--pointer-y',((e.clientY-r.top)/r.height-.5)*6+'px');
},{passive:true});

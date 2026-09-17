document.body.classList.add('motion-ready');
const revealItems=document.querySelectorAll('.overview,.categories,.student-programs,.about,.schedule,.countdown,.rsvp,.location');
const staggerItems=document.querySelectorAll('.info-cards,.category-grid,.program-grid,.timeline');
const motionObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');motionObserver.unobserve(entry.target)}}),{threshold:.14,rootMargin:'0px 0px -8%'});
revealItems.forEach(item=>{item.classList.add('reveal');motionObserver.observe(item)});staggerItems.forEach(item=>{item.classList.add('reveal-stagger');motionObserver.observe(item)});
if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches&&!window.matchMedia('(max-width: 800px)').matches){const art=document.querySelector('.hero-art');window.addEventListener('mousemove',event=>{if(!art)return;const x=((event.clientX/window.innerWidth)-.5)*12;const y=((event.clientY/window.innerHeight)-.5)*10;art.style.setProperty('--parallax-x',`${x}px`);art.style.setProperty('--parallax-y',`${y}px`)},{passive:true})}

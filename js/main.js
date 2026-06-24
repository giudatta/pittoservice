// Mobile nav
function toggleMobileNav(){
  const nav=document.getElementById('mobileNav');
  nav.classList.toggle('active');
  document.body.style.overflow=nav.classList.contains('active')?'hidden':'';
}

// FAQ accordion
function toggleFaq(btn){
  const answer=btn.nextElementSibling;
  const arrow=btn.querySelector('.faq-arrow');
  const isOpen=answer.classList.contains('open');
  document.querySelectorAll('.faq-answer.open').forEach(a=>{
    a.classList.remove('open');
    a.previousElementSibling.querySelector('.faq-arrow').classList.remove('open');
    a.previousElementSibling.setAttribute('aria-expanded','false');
  });
  if(!isOpen){
    answer.classList.add('open');
    if(arrow)arrow.classList.add('open');
    btn.setAttribute('aria-expanded','true');
  }
}

// Portfolio filter
function filterPortfolio(cat){
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  event.currentTarget.classList.add('active');
  document.querySelectorAll('.portfolio-item').forEach(item=>{
    if(cat==='tutti'||item.dataset.cat===cat){
      item.style.display='';
    } else {
      item.style.display='none';
    }
  });
}

// Smooth scroll
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const t=document.querySelector(a.getAttribute('href'));
      if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'});}
    });
  });

  // Active nav link
  const path=window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(a=>{
    if(a.getAttribute('href')&&path.includes(a.getAttribute('href').replace('../','').replace('./','')))
      a.classList.add('active');
  });
});

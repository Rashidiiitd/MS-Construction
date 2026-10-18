
(function(){
let lang='en';
const langBtn=document.getElementById('langBtn');
const menuToggle=document.getElementById('menuToggle');
const nav=document.getElementById('navlinks');
function setLanguage(next){
 lang=next;document.documentElement.lang=lang;
 document.querySelectorAll('[data-en][data-hi]').forEach(el=>{el.textContent=el.dataset[lang]});
 document.querySelectorAll('[data-placeholder-en][data-placeholder-hi]').forEach(el=>{el.placeholder=el.dataset['placeholder'+(lang==='en'?'En':'Hi')]});
 langBtn.textContent=lang==='en'?'हिंदी':'English';
 document.title=lang==='en'?'MS Construction | Steel Structure & Fabrication':'MS Construction | स्टील स्ट्रक्चर और फैब्रिकेशन';
}
langBtn.addEventListener('click',()=>setLanguage(lang==='en'?'hi':'en'));
menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.textContent=open?'✕':'☰';menuToggle.setAttribute('aria-label',open?'Close menu':'Open menu')});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.textContent='☰'}));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('enquiryForm').addEventListener('submit',function(e){
 e.preventDefault();const data=new FormData(this);
 const name=String(data.get('name')||'').trim(),service=String(data.get('service')||'').trim(),location=String(data.get('location')||'').trim(),details=String(data.get('details')||'').trim();
 const message=(lang==='hi'?'नमस्ते, मुझे अपने प्रोजेक्ट के लिए जानकारी चाहिए।':'Hello, I would like to enquire about a project.')+'\n'+(lang==='hi'?'नाम: ':'Name: ')+name+'\n'+(lang==='hi'?'काम: ':'Work: ')+service+'\n'+(lang==='hi'?'साइट लोकेशन: ':'Site location: ')+location+(details?'\n'+(lang==='hi'?'जानकारी: ':'Details: ')+details:'');
 window.open('https://wa.me/918534915638?text='+encodeURIComponent(message),'_blank','noopener,noreferrer');
});
})();

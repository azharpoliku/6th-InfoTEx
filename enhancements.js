const departments = ['Pengurusan','Jabatan Kejuruteraan Awam','Jabatan Kejuruteraan Mekanikal','Jabatan Kejuruteraan Petrokimia','Jabatan Kejuruteraan Elektrik','Jabatan Teknologi Maklumat & Komunikasi','Jabatan Perdagangan','Jabatan Matematik Sains & Komputer','Jabatan Pengajian Am'];
const mapsUrl = 'https://maps.app.goo.gl/oiZ6mvZwu7RBYft28';
const ecardMarkup = `<div class="ecard-overlay" id="ecardOverlay" role="dialog" aria-modal="true" aria-labelledby="ecardTitle"><div class="ecard"><div class="ecard-inner"><p class="ecard-kicker">JEMPUTAN</p><h2 id="ecardTitle">6th INFORMATION TECHNOLOGY <span>INNOVATION EXPO</span></h2><div class="ecard-event">6th INFOTEX<small>29 SEPTEMBER 2026<br>DEWAN JUBLI PERAK<br>POLITEKNIK KUCHING SARAWAK</small></div><p class="ecard-copy">“Anda dijemput untuk bersama-sama memeriahkan 6th INFOTEX.”</p><div class="ecard-actions"><button class="button primary ecard-close" type="button">Tutup &amp; Lihat Laman Web →</button><button class="ecard-music" type="button" aria-pressed="false">♪ Mainkan Muzik</button></div><div class="ecard-mark">6</div></div></div></div>`;
document.body.insertAdjacentHTML('afterbegin', ecardMarkup);
const ecardOverlay = document.getElementById('ecardOverlay');
const ecardClose = ecardOverlay.querySelector('.ecard-close');
const ecardMusic = ecardOverlay.querySelector('.ecard-music');
let ambientContext;
let ambientNodes = [];
const audioMuted = localStorage.getItem('infotex-audio-muted') === 'true';
const startAmbient = () => { if (audioMuted || ambientContext) return; ambientContext = new (window.AudioContext || window.webkitAudioContext)(); const master=ambientContext.createGain(); master.gain.value=.055; master.connect(ambientContext.destination); [110,164.81,220].forEach((frequency,index)=>{const oscillator=ambientContext.createOscillator();const gain=ambientContext.createGain();oscillator.type=index===1?'sine':'triangle';oscillator.frequency.value=frequency;gain.gain.value=index===0?.45:.18;oscillator.connect(gain);gain.connect(master);oscillator.start();ambientNodes.push(oscillator,gain)}); ecardMusic.textContent='♪ Muzik dimainkan'; ecardMusic.classList.add('is-playing'); ecardMusic.setAttribute('aria-pressed','true'); };
const stopAmbient = () => { if (!ambientContext) return; const context=ambientContext; const now=context.currentTime; const master=context.destination; ambientNodes.filter(node=>node.gain).forEach(node=>{node.gain.cancelScheduledValues(now);node.gain.setTargetAtTime(0,now,.8)}); setTimeout(()=>{ambientNodes.filter(node=>node.stop).forEach(node=>node.stop());context.close();ambientNodes=[];ambientContext=null},850); };
const closeEcard = () => { sessionStorage.setItem('infotex-ecard-seen','true'); stopAmbient(); ecardOverlay.classList.remove('is-open'); setTimeout(()=>ecardOverlay.remove(),650); };
ecardMusic.addEventListener('click',()=>{if(ambientContext){stopAmbient();ecardMusic.textContent='♪ Mainkan Muzik';ecardMusic.classList.remove('is-playing');ecardMusic.setAttribute('aria-pressed','false');localStorage.setItem('infotex-audio-muted','true');}else{localStorage.setItem('infotex-audio-muted','false');startAmbient();}});
ecardClose.addEventListener('click',closeEcard); document.addEventListener('keydown',event=>{if(event.key==='Escape'&&ecardOverlay.classList.contains('is-open'))closeEcard();});
if(sessionStorage.getItem('infotex-ecard-seen')!=='true'){requestAnimationFrame(()=>ecardOverlay.classList.add('is-open'));}else{ecardOverlay.remove();}

// Luxury Tech Lounge: a quiet, procedural lounge bed for the invitation card.
let loungeContext=null; let loungeTimer=null; let loungeMaster=null;
const loungeChords=[[261.63,329.63,392], [220,277.18,329.63], [174.61,220,261.63], [196,246.94,293.66]];
const startLuxuryLounge=()=>{if(audioMuted||loungeContext)return; loungeContext=new(window.AudioContext||window.webkitAudioContext)(); loungeMaster=loungeContext.createGain(); loungeMaster.gain.value=.045; loungeMaster.connect(loungeContext.destination); const beat=60/80; let step=0; const playBar=()=>{if(!loungeContext)return;const now=loungeContext.currentTime;const chord=loungeChords[step%loungeChords.length];chord.forEach((frequency,index)=>{const osc=loungeContext.createOscillator();const gain=loungeContext.createGain();const filter=loungeContext.createBiquadFilter();osc.type=index===0?'sine':'triangle';osc.frequency.value=frequency/2;filter.type='lowpass';filter.frequency.value=1800;gain.gain.setValueAtTime(0,now);gain.gain.linearRampToValueAtTime(index===0?.18:.095,now+1.4);gain.gain.setTargetAtTime(0,now+beat*3.5,1.2);osc.connect(filter);filter.connect(gain);gain.connect(loungeMaster);osc.start(now);osc.stop(now+beat*4+2)});const bass=loungeContext.createOscillator();const bassGain=loungeContext.createGain();bass.type='sine';bass.frequency.value=chord[0]/4;bassGain.gain.setValueAtTime(0,now);bassGain.gain.linearRampToValueAtTime(.12,now+1);bassGain.gain.setTargetAtTime(0,now+beat*3,1);bass.connect(bassGain);bassGain.connect(loungeMaster);bass.start(now);bass.stop(now+beat*4+1.5);step++};playBar();loungeTimer=setInterval(playBar,beat*4000);ecardMusic.textContent='♪ Muzik dimainkan';ecardMusic.classList.add('is-playing');ecardMusic.setAttribute('aria-pressed','true');};
const stopLuxuryLounge=()=>{if(!loungeContext)return;clearInterval(loungeTimer);const context=loungeContext;const master=loungeMaster;master.gain.setTargetAtTime(0,context.currentTime,.8);setTimeout(()=>context.close(),900);loungeContext=null;loungeMaster=null;loungeTimer=null;};
ecardMusic.addEventListener('click',event=>{event.stopImmediatePropagation();if(loungeContext){stopLuxuryLounge();ecardMusic.textContent='♪ Mainkan Muzik';ecardMusic.classList.remove('is-playing');ecardMusic.setAttribute('aria-pressed','false');localStorage.setItem('infotex-audio-muted','true');}else{localStorage.setItem('infotex-audio-muted','false');startLuxuryLounge();}},true);
ecardClose.addEventListener('click',()=>stopLuxuryLounge(),true);
ecardMusic.remove();
const mapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.2044650823113!2d110.19255957584667!3d1.6297012606105936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31fb046717ef2c0b%3A0xebffa18850af01eb!2sKuching%20Polytechnic!5e0!3m2!1sen!2smy!4v1789616679412!5m2!1sen!2smy';
document.title = '6th INFOTEX | RSVP';
const heroTitle = document.querySelector('.hero h1 span');
const heroNumber = document.querySelector('.hero h1 em');
if (heroTitle) heroTitle.textContent = '6th INFOTEX';
if (heroNumber) heroNumber.style.display = 'none';
document.querySelectorAll('body *').forEach(element => { if (element.children.length === 0 && element.textContent.includes('INFOTEX 2026')) element.textContent = element.textContent.replaceAll('INFOTEX 2026', '6th INFOTEX'); });
document.querySelectorAll('[alt],[title],[aria-label]').forEach(element => ['alt','title','aria-label'].forEach(attribute => { const value = element.getAttribute(attribute); if (value?.includes('INFOTEX 2026')) element.setAttribute(attribute, value.replaceAll('INFOTEX 2026', '6th INFOTEX')); }));
const mapsLink = document.querySelector('#lokasi a[target="_blank"]');
const mapsFrame = document.querySelector('#lokasi iframe');
if (mapsLink) mapsLink.href = mapsUrl;
if (mapsFrame) mapsFrame.src = `https://www.google.com/maps?q=${encodeURIComponent(mapsUrl)}&output=embed`;
if (mapsFrame) mapsFrame.src = mapEmbedUrl;
const orgInput = document.querySelector('#rsvpForm input[name="org"]');
const emailInput = document.querySelector('#rsvpForm input[name="email"]');
if (emailInput) { emailInput.pattern='^[^\\s@]+@poliku\\.edu\\.my$'; emailInput.title='Sila gunakan emel rasmi @poliku.edu.my'; }
if (orgInput) { const select = document.createElement('select'); select.name='org'; select.required=true; select.innerHTML='<option value="">Pilih jabatan / unit</option>'+departments.map(value=>`<option>${value}</option>`).join(''); orgInput.replaceWith(select); }
document.querySelector('#rsvpForm input[name="guests"]')?.closest('label')?.remove();

const about = document.querySelector('#tentang');
const overview = document.querySelector('.overview');
if (overview && !overview.querySelector('.split-title h2')) overview.querySelector('.split-title')?.replaceChildren(Object.assign(document.createElement('h2'), { innerHTML: '6th INFOTEX<br><span>DALAM SATU PANDANGAN</span>' }), Object.assign(document.createElement('p'), { textContent: 'Satu hari untuk meraikan kreativiti, teknologi dan pencapaian warga JTMK.' }));
const overviewTitle = document.querySelector('.overview .split-title h2');
if (overviewTitle) overviewTitle.innerHTML = '6TH INFOTEX<br><span>INFO AM</span>';
const categoryTitle = document.querySelector('.categories .split-title h2');
if (categoryTitle) categoryTitle.innerHTML = 'TIGA<br><span>KATEGORI UTAMA</span>';
const scheduleIntro = document.querySelector('#aturcara .schedule-head p');
if (scheduleIntro) scheduleIntro.innerHTML = 'Tentatif majlis penutupan<br>6TH INFOTEX';
if (about) {
  about.insertAdjacentHTML('beforebegin', `<section class="categories wrap"><div class="section-label">02 / KATEGORI PERTANDINGAN</div><div class="split-title"><h2>TIGA<br><span>KATEGORI UTAMA</span></h2><p>Tiga kategori utama untuk mengetengahkan solusi teknologi pelajar.</p></div><div class="category-grid"><article><span>01</span><h3>Internet<br>of Things</h3><p>Peranti terhubung, automasi dan penyelesaian pintar.</p></article><article><span>02</span><h3>Web<br>Solution</h3><p>Platform digital yang menyelesaikan masalah sebenar.</p></article><article><span>03</span><h3>Mobile<br>Application</h3><p>Aplikasi mudah alih yang praktikal dan berimpak.</p></article></div></section><section class="student-programs wrap"><div class="section-label">03 / PROGRAM PELAJAR</div><div class="program-grid"><article><div><small>ENTREPRENEURSHIP SHOWCASE</small><h3>DigiTechPreneur<br>2026</h3><p>28–29 September 2026<br>8:00 pagi – 5:00 petang<br>Dewan Jubli Perak</p></div><b>01</b></article><article><div><small>EXPERT TRAINING SESSION</small><h3>AI-Marketeer:<br>From Idea to Impact</h3><p>29 September 2026<br>8:30 – 11:30 pagi<br>Dewan Jubli Perak<br>Trainer: PC Image Sdn Bhd</p></div><b>02</b></article></div></section>`);
}
[['#tentang .section-label','04 / TENTANG INFOTEX'],['#aturcara .section-label','05 / ATUR CARA MAJLIS PENUTUPAN'],['.countdown .section-label','06 / COUNTDOWN'],['#rsvp .section-label','07 / RSVP'],['#lokasi .section-label','08 / LOKASI']].forEach(([selector,text])=>{const element=document.querySelector(selector);if(element)element.textContent=text;});

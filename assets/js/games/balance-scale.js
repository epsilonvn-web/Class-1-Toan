// ==========================================
// GAME 01: BALANCE SCALE - CÂN BẰNG TOÁN HỌC
// Toán 1 - Cô giáo Thỏ Hồng
// ==========================================
let bsRound = 0;
let bsScore = 0;
let bsLocked = false;
let bsCurrent = null;
let bsMode = 'mixed';
const BS_TOTAL_ROUNDS = 10;

function startBalanceScaleGame() {
    bsRound = 0;
    bsScore = 0;
    bsLocked = false;
    bsCurrent = null;
    bsRenderStartScreen();
}

function bsRenderStartScreen() {
    const container = document.getElementById('game-play-container');
    if (!container) return;
    container.innerHTML = `
        <div class="bg-gradient-to-br from-pink-50 via-white to-emerald-50 border-2 border-pink-200 rounded-[28px] p-4 md:p-6 shadow-sm">
            <div class="text-center max-w-xl mx-auto">
                <div class="text-6xl mb-2">⚖️</div>
                <h3 class="text-xl md:text-2xl font-black text-pink-700">Cân bằng Toán học</h3>
                <p class="mt-2 text-sm md:text-base text-gray-600 font-bold leading-relaxed">Hai đĩa cân chỉ đứng ngang khi giá trị hai bên bằng nhau. Bé hãy tìm số còn thiếu để giúp chiếc cân thăng bằng nhé!</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto mt-5">
                <button onclick="bsChooseMode('within10')" class="pastel-btn rounded-2xl border-2 border-sky-200 bg-sky-50 hover:bg-sky-100 p-4 text-center">
                    <div class="text-3xl">🔟</div><div class="font-black text-sky-700 mt-1">Trong phạm vi 10</div><div class="text-xs text-gray-500 font-bold mt-1">Cộng - trừ cơ bản</div>
                </button>
                <button onclick="bsChooseMode('within20')" class="pastel-btn rounded-2xl border-2 border-violet-200 bg-violet-50 hover:bg-violet-100 p-4 text-center">
                    <div class="text-3xl">➕➖</div><div class="font-black text-violet-700 mt-1">Trong phạm vi 20</div><div class="text-xs text-gray-500 font-bold mt-1">Tìm số còn thiếu</div>
                </button>
                <button onclick="bsChooseMode('mixed')" class="pastel-btn rounded-2xl border-2 border-amber-200 bg-amber-50 hover:bg-amber-100 p-4 text-center">
                    <div class="text-3xl">🧠</div><div class="font-black text-amber-700 mt-1">Trộn thử thách</div><div class="text-xs text-gray-500 font-bold mt-1">Cộng - trừ đến 100</div>
                </button>
            </div>
            <div class="mt-5 max-w-xl mx-auto bg-white/80 border border-pink-200 rounded-2xl p-3 text-xs md:text-sm text-gray-600 font-bold leading-relaxed">
                <strong class="text-pink-700">Luật chơi:</strong> Mỗi ván có ${BS_TOTAL_ROUNDS} lượt. Chọn đúng được 1 điểm. Nếu chọn sai, cân sẽ nghiêng và bé được thử lại cho tới khi tìm ra đáp án đúng.
            </div>
        </div>`;
}

function bsChooseMode(mode) { bsMode = mode; bsRound = 0; bsScore = 0; bsNextRound(); }
function bsRand(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function bsShuffle(arr) { const a=arr.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; }
function bsBuildChoices(answer, maxValue) {
    const set = new Set([answer]); let guard=0;
    while(set.size<4 && guard++<80){ const delta=bsRand(1, Math.max(2, Math.min(8,maxValue))); const v=Math.max(0,Math.min(maxValue,answer+(Math.random()<.5?-delta:delta))); set.add(v); }
    for(let v=0;set.size<4 && v<=maxValue;v++) set.add(v);
    return bsShuffle([...set]);
}

function bsGenerate(maxValue) {
    const isAdd = Math.random() < 0.58;
    if (isAdd) {
        const a = bsRand(0, Math.max(0, maxValue - 1));
        const x = bsRand(0, maxValue - a);
        const total = a + x;
        return { left:`${a} + ?`, right:String(total), answer:x, explain:`${a} + ${x} = ${total}`, maxValue };
    }
    const total = bsRand(1, maxValue);
    const x = bsRand(0, total);
    const result = total - x;
    return { left:`${total} − ?`, right:String(result), answer:x, explain:`${total} − ${x} = ${result}`, maxValue };
}

function bsGenerateQuestion() {
    if (bsMode === 'within10') return bsGenerate(10);
    if (bsMode === 'within20') return bsGenerate(20);
    return Math.random() < 0.45 ? bsGenerate(20) : bsGenerate(100);
}

function bsNextRound() {
    if (bsRound >= BS_TOTAL_ROUNDS) return bsFinish();
    bsRound++; bsLocked=false; bsCurrent=bsGenerateQuestion();
    bsCurrent.choices=bsBuildChoices(bsCurrent.answer, bsCurrent.maxValue);
    bsRenderRound();
}

function bsRenderRound() {
    const container=document.getElementById('game-play-container'); if(!container||!bsCurrent)return;
    container.innerHTML=`
        <div class="bg-white border-2 border-pink-200 rounded-[28px] p-3 md:p-5 shadow-sm overflow-hidden">
            <div class="flex items-center justify-between gap-2 mb-3">
                <span class="px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-pink-700 font-black text-xs md:text-sm">Lượt ${bsRound}/${BS_TOTAL_ROUNDS}</span>
                <div class="flex-1 h-2.5 bg-pink-100 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-pink-400 to-rose-500 rounded-full transition-all" style="width:${Math.round((bsRound-1)/BS_TOTAL_ROUNDS*100)}%"></div></div>
                <span class="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-black text-xs md:text-sm">⭐ ${bsScore}</span>
            </div>
            <p class="text-center text-sm md:text-base font-extrabold text-gray-600 mb-2">Số nào làm chiếc cân cân bằng?</p>
            <div class="relative max-w-2xl mx-auto h-[235px] md:h-[280px] select-none">
                <div id="bs-beam" class="absolute left-1/2 top-[98px] md:top-[118px] w-[78%] h-3 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 rounded-full origin-center transition-transform duration-500" style="transform:translateX(-50%) rotate(-7deg)"></div>
                <div class="absolute left-1/2 top-[94px] md:top-[114px] -translate-x-1/2 z-20"><div class="w-7 h-7 rounded-full bg-pink-500 border-4 border-white shadow-md"></div><div class="w-4 h-[92px] md:h-[112px] bg-pink-500 mx-auto -mt-1 rounded-b-lg"></div><div class="w-28 h-4 bg-rose-500 rounded-full -ml-[42px]"></div></div>
                <div id="bs-left-pan" class="absolute left-[4%] top-[100px] md:top-[120px] w-[38%] transition-all duration-500"><div class="h-[64px] border-l-2 border-r-2 border-amber-500 mx-7"></div><div class="bg-sky-50 border-2 border-sky-300 rounded-b-[36px] rounded-t-xl p-3 text-center shadow-sm font-black text-sky-700 text-xl md:text-2xl">${bsCurrent.left}</div></div>
                <div id="bs-right-pan" class="absolute right-[4%] top-[72px] md:top-[92px] w-[38%] transition-all duration-500"><div class="h-[64px] border-l-2 border-r-2 border-amber-500 mx-7"></div><div class="bg-emerald-50 border-2 border-emerald-300 rounded-b-[36px] rounded-t-xl p-3 text-center shadow-sm font-black text-emerald-700 text-xl md:text-2xl">${bsCurrent.right}</div></div>
            </div>
            <div id="bs-choices" class="grid grid-cols-4 gap-2 md:gap-3 max-w-xl mx-auto mt-1">${bsCurrent.choices.map(v=>`<button onclick="bsChooseAnswer(${v}, this)" class="bs-choice pastel-btn py-3 md:py-4 rounded-2xl border-2 border-pink-200 bg-pink-50 hover:bg-pink-100 text-pink-700 font-black text-lg md:text-xl">${v}</button>`).join('')}</div>
            <div id="bs-feedback" class="min-h-[42px] mt-3 text-center text-sm md:text-base font-black"></div>
            <div class="flex justify-center mt-1"><button onclick="bsRenderStartScreen()" class="text-xs md:text-sm font-black text-gray-500 hover:text-pink-600 px-3 py-1.5 rounded-xl hover:bg-pink-50">↩ Đổi chế độ chơi</button></div>
        </div>`;
}

function bsSetBalanceState(state) {
    const beam=document.getElementById('bs-beam'),left=document.getElementById('bs-left-pan'),right=document.getElementById('bs-right-pan'); if(!beam||!left||!right)return;
    if(state==='balanced'){beam.style.transform='translateX(-50%) rotate(0deg)';left.style.top=window.innerWidth>=768?'105px':'85px';right.style.top=window.innerWidth>=768?'105px':'85px';}
    else if(state==='wrong-left'){beam.style.transform='translateX(-50%) rotate(9deg)';left.style.top=window.innerWidth>=768?'132px':'112px';right.style.top=window.innerWidth>=768?'78px':'58px';}
    else{beam.style.transform='translateX(-50%) rotate(-9deg)';left.style.top=window.innerWidth>=768?'78px':'58px';right.style.top=window.innerWidth>=768?'132px':'112px';}
}

function bsChooseAnswer(value, button) {
    if(bsLocked||!bsCurrent)return; const feedback=document.getElementById('bs-feedback');
    if(Number(value)===Number(bsCurrent.answer)){
        bsLocked=true;bsScore++; if(typeof starGreenCount!=='undefined'){starGreenCount++;const el=document.getElementById('star-green-count');if(el)el.textContent=starGreenCount;}
        document.querySelectorAll('.bs-choice').forEach(b=>b.disabled=true);button.classList.remove('bg-pink-50','border-pink-200','text-pink-700');button.classList.add('bg-emerald-100','border-emerald-400','text-emerald-800','scale-105');bsSetBalanceState('balanced');
        if(feedback)feedback.innerHTML=`<span class="text-emerald-600">🎉 Chính xác! ${bsCurrent.explain}. Cân đã thăng bằng!</span>`;if(typeof playAudio==='function')playAudio('correct');if(typeof confetti==='function')confetti({particleCount:45,spread:60,origin:{y:.65}});setTimeout(bsNextRound,1050);
    } else {
        if(typeof starRedCount!=='undefined'){starRedCount++;const el=document.getElementById('star-red-count');if(el)el.textContent=starRedCount;}
        button.disabled=true;button.classList.remove('bg-pink-50','border-pink-200','text-pink-700');button.classList.add('bg-red-100','border-red-400','text-red-700','opacity-70');bsSetBalanceState(value>bsCurrent.answer?'wrong-left':'wrong-right');if(feedback)feedback.innerHTML='<span class="text-rose-600">Chưa cân bằng rồi! Quan sát hai vế và thử số khác nhé.</span>';if(typeof playAudio==='function')playAudio('wrong');
    }
}

function bsFinish() {
    const container=document.getElementById('game-play-container');if(!container)return;const pct=Math.round(bsScore/BS_TOTAL_ROUNDS*100);const message=pct===100?'Tuyệt đối chính xác!':pct>=80?'Rất tốt!':pct>=60?'Khá lắm!':'Cố thêm một chút nữa nhé!';if(typeof confetti==='function'&&pct>=80)confetti({particleCount:100,spread:80,origin:{y:.6}});if(typeof playAudio==='function'&&pct>=80)playAudio('win');
    container.innerHTML=`<div class="bg-gradient-to-br from-pink-50 via-white to-emerald-50 border-2 border-pink-200 rounded-[28px] p-6 text-center shadow-sm"><div class="text-6xl mb-2">🏆</div><h3 class="text-2xl font-black text-pink-700">${message}</h3><p class="mt-2 text-gray-600 font-bold">Bé cân bằng đúng <strong class="text-emerald-600">${bsScore}/${BS_TOTAL_ROUNDS}</strong> lượt.</p><div class="text-4xl font-black text-pink-600 mt-3">${pct}%</div><div class="flex flex-col sm:flex-row gap-2 justify-center mt-5"><button onclick="bsChooseMode(bsMode)" class="pastel-btn px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-black">🔄 Chơi lại</button><button onclick="bsRenderStartScreen()" class="pastel-btn px-5 py-2.5 rounded-xl bg-white border-2 border-pink-300 text-pink-700 font-black">⚙️ Đổi chế độ</button><button onclick="openMiniGameHub()" class="pastel-btn px-5 py-2.5 rounded-xl bg-white border-2 border-rose-300 text-rose-700 font-black">🎮 Chọn game khác</button></div></div>`;
}

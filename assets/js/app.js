// ==========================================
// CẤU HÌNH 12 MỤC KHÁM PHÁ & MA TRẬN NĂNG LỰC TOAN_C1-C6 (TOÁN LỚP 1)
// ==========================================
const TOPICS_CONFIG = [
    { id: 1, title: "1. Các số đến 10", desc: "Đọc, viết, đếm và so sánh số 0-10", icon: "🔢", color: "pink" },
    { id: 2, title: "2. Phép cộng và phép trừ", desc: "Tách - gộp và thực hiện phép cộng, phép trừ", icon: "➕", color: "purple" },
    { id: 3, title: "3. Các số trong phạm vi 100", desc: "Đọc, viết và cấu tạo các số đến 100", icon: "💯", color: "indigo" },
    { id: 4, title: "4. Hình học", desc: "Nhận biết hình phẳng và một số hình khối", icon: "📐", color: "amber" },
    { id: 5, title: "5. Dãy số và quy luật", desc: "Số liền trước, liền sau và quy luật dãy số", icon: "🔗", color: "cyan" },
    { id: 6, title: "6. Vị trí và không gian", desc: "Xác định vị trí và quan hệ trong không gian", icon: "🧭", color: "violet" },
    { id: 7, title: "7. Độ dài và đơn vị đo", desc: "So sánh, ước lượng và đo độ dài bằng cm", icon: "📏", color: "emerald" },
    { id: 8, title: "8. Thời gian, lịch và kiểm đếm", desc: "Xem giờ, ngày trong tuần và kiểm đếm", icon: "⏰", color: "blue" },
    { id: 9, title: "9. Giải toán có lời văn", desc: "Đọc hiểu, chọn phép tính và trình bày bài giải", icon: "📝", color: "rose" },
    { id: 10, title: "10. Toán tư duy nâng cao và IQ", desc: "Suy luận logic, quy luật và bài toán nâng cao", icon: "🧠", color: "yellow" },
    { id: 11, title: "11. Ôn tập", desc: "Ôn tập theo học kỳ và tổng ôn cuối năm", icon: "📚", color: "purple" },
    { id: 12, title: "12. Math Lab - Toán tư duy Mỹ", desc: "Khám phá • Mô hình • Nhiều cách giải", icon: "✨", color: "fuchsia", engine: "epsilon-method" }
];

const SUBTOPIC_PALETTES = [
    { card: "bg-pink-50/80 hover:bg-pink-100 border-pink-300 text-pink-800", num: "text-pink-600", badge: "bg-white text-pink-600 border-pink-200" },
    { card: "bg-emerald-50/80 hover:bg-emerald-100 border-emerald-300 text-emerald-800", num: "text-emerald-600", badge: "bg-white text-emerald-600 border-emerald-200" },
    { card: "bg-purple-50/80 hover:bg-purple-100 border-purple-300 text-purple-800", num: "text-purple-600", badge: "bg-white text-purple-600 border-purple-200" },
    { card: "bg-amber-50/80 hover:bg-amber-100 border-amber-300 text-amber-800", num: "text-amber-600", badge: "bg-white text-amber-600 border-amber-200" },
    { card: "bg-indigo-50/80 hover:bg-indigo-100 border-indigo-300 text-indigo-800", num: "text-indigo-600", badge: "bg-white text-indigo-600 border-indigo-200" },
    { card: "bg-rose-50/80 hover:bg-rose-100 border-rose-300 text-rose-800", num: "text-rose-600", badge: "bg-white text-rose-600 border-rose-200" }
];

// Roadmap tuần cũ đã được thay bằng Bài tập theo từng bài SGK trong bai_hoc_toan_1.json.
const examFileMap = {
    hocky1: { file: 'de_thi_toan_1.json', idPrefix: '12.1.', sheet: 'LichSuBaiThi_HK1', label: 'Học kỳ 1', color: 'pink' },
    hocky2: { file: 'de_thi_toan_1.json', idPrefix: '12.2.', sheet: 'LichSuBaiThi_HK2', label: 'Học kỳ 2', color: 'purple' },
    hsg:    { file: 'de_thi_toan_1.json', idPrefix: '12.3.', sheet: 'LichSuBaiThi_HSG', label: 'Học sinh giỏi', color: 'amber' }
};

// 6 nhóm năng lực Toán lớp 1 (TOAN_C1 - TOAN_C6) — khoá nội bộ vẫn dùng C1..C6,
// việc trích tag từ chuỗi "TOAN_C1" sang "C1" được xử lý bằng regex ở nơi dùng.
const SKILL_TAXONOMY = {
    C1: { code: 'C1', sheetCol: 'C1_SoHocHinhHoc', totalCol: 'C1_SoHocHinhHoc_Tong', name: 'Số học cơ bản và Hình học', advice: 'Cần ôn lại cách đọc viết đếm số phạm vi 10 và 100, cấu tạo số chục - đơn vị, và nhận diện hình phẳng, hình khối cơ bản.' },
    C2: { code: 'C2', sheetCol: 'C2_PhepTinh', totalCol: 'C2_PhepTinh_Tong', name: 'Phép tính cộng và phép trừ', advice: 'Rèn luyện thêm sơ đồ tách - gộp số, bảng cộng trừ và kỹ năng đặt tính rồi tính không nhớ.' },
    C3: { code: 'C3', sheetCol: 'C3_DoLuongThoiGian', totalCol: 'C3_DoLuongThoiGian_Tong', name: 'Đo lường, Thời gian và Lịch', advice: 'Luyện tập thêm về đo độ dài bằng thước kẻ (cm), xem giờ đúng trên đồng hồ kim và xem lịch tuần.' },
    C4: { code: 'C4', sheetCol: 'C4_ViTriSoSanh', totalCol: 'C4_ViTriSoSanh_Tong', name: 'Vị trí không gian và So sánh', advice: 'Cần luyện thêm về xác định vị trí không gian (trên dưới, trái phải) và so sánh giá trị số bằng dấu >, <, =.' },
    C5: { code: 'C5', sheetCol: 'C5_GiaiToan', totalCol: 'C5_GiaiToan_Tong', name: 'Giải toán có lời văn', advice: 'Tăng cường đọc hiểu đề bài toán đố, tìm đúng từ khóa thêm/bớt và trình bày bài giải đầy đủ 3 phần.' },
    C6: { code: 'C6', sheetCol: 'C6_TuDuy', totalCol: 'C6_TuDuy_Tong', name: 'Dãy số, Quy luật và Tư duy', advice: 'Rèn kỹ năng tìm số liền trước/sau, phân biệt chẵn lẻ, phát hiện quy luật dãy số và tư duy logic IQ.' }
};

const GREETINGS_STUDENT = [
    "Chào {name}, cô Thỏ Hồng đố con hôm nay mình tính nhanh và chính xác đến đâu nhé!",
    "Chào mừng {name} quay lại! Não bộ đã khởi động, sẵn sàng chinh phục những con số chưa nào!",
    "Cô Thỏ Hồng chào {name}! Kính đã đeo, bút đã cầm, giờ là lúc bứt phá điểm 10 Toán học!",
    "Chào con yêu {name}, hôm nay chúng mình cùng khám phá xem con số nào đang trốn ở đâu nhé!",
    "Chào mừng {name} đến với giờ học Toán! Cô Thỏ Hồng tin con sẽ giải đề nhanh như chớp!"
];

const GREETINGS_GUEST = [
    "Chào bé yêu, cô Thỏ Hồng rất vui được cùng con luyện Toán hôm nay!",
    "Chào mừng bé đến với lớp Toán của cô Thỏ Hồng! Mình cùng thử sức xem sao nhé!",
    "Cô Thỏ Hồng chào bé! Đeo kính vào là tư duy lên hạng liền, cùng bắt đầu nào!",
    "Chào thiên tài nhí! Cô Thỏ Hồng đang chờ xem con giải bài nhanh cỡ nào đây!",
    "Chào mừng con đến với Đấu trường Toán học! Chúc con tính toán thật minh mẫn và vui vẻ!"
];


// ==========================================
// ĐỊNH DANH MÁY CHỦ APPS SCRIPT & BIẾN TOÀN CỤC
// ==========================================
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx6luXbpetnrlr0oUfUsOjRMcsraIQ2x1Cwuo9zI1lhGbI2lAd35yZDTmjAtgwXeigl/exec";
let allTopicsDataCache = null;
let allQuestionsFlatCache = null;
// Bật/tắt đọc câu hỏi TỰ ĐỘNG khi vào câu mới — nút "Nghe câu hỏi" thủ công vẫn luôn hoạt động
// dù tắt tính năng này (đây chỉ tắt phần tự động phát, không tắt hẳn tính năng nghe).
let autoSpeechEnabled = localStorage.getItem('autoSpeechEnabled') !== 'false';
const examsCache = {};

// ==========================================
// BÀI HỌC & BÀI TẬP THEO SGK TOÁN 1
// ==========================================
const BAI_HOC_DATA_FILE = 'assets/data/bai_hoc_toan_1.json';
let baiHocDataCache = null;
let activeBaiHocContext = null;
let exerciseSemesterFilter = 1;

let currentUser = null;
let starGreenCount = 0;
let starRedCount = 0;
let activeTopicId = null;
let activeExamContext = null;
let activeRoadmapContext = null;
let activeQuestionsList = [];
let practiceCycleRawPool = [];
let pendingTopicQuiz = null;
let currentQIndex = 0;
let score = 0;
let userAnswers = {};
let wrongAttemptsByQ = {};
let quizWrongAnswers = [];
let quizAnsweredLog = [];
let quizStartTime = null;
let quizTimerInterval = null;
let quizRemainingSeconds = 40 * 60;

let audioCtx = null;
const banMaiAudio = new Audio();
banMaiAudio.referrerPolicy = 'no-referrer';

let histLineChartInstance = null;
let histBarChartInstance = null;

// ==========================================
// HỘP THOẠI ĐẸP DÙNG CHUNG - thay toàn bộ alert()/confirm() trình duyệt
// ==========================================
let appDialogResolver_ = null;

function showAppDialog(message, options = {}) {
    const modal = document.getElementById('modal-app-dialog');
    if (!modal) {
        // Fallback hiếm gặp nếu HTML cũ chưa có modal.
        console.warn('[Thông báo]', message);
        return Promise.resolve(options.confirm ? false : true);
    }

    const title = options.title || (options.confirm ? 'Xác nhận' : 'Thông báo');
    const icon = options.icon || (options.confirm ? '❓' : '🐰');
    const okText = options.okText || (options.confirm ? 'Đồng ý' : 'Đã hiểu');
    const cancelText = options.cancelText || 'Để sau';
    const tone = options.tone || 'pink';

    const iconEl = document.getElementById('app-dialog-icon');
    const titleEl = document.getElementById('app-dialog-title');
    const msgEl = document.getElementById('app-dialog-message');
    const okBtn = document.getElementById('app-dialog-ok');
    const cancelBtn = document.getElementById('app-dialog-cancel');
    const panel = document.getElementById('app-dialog-panel');

    if (iconEl) iconEl.textContent = icon;
    if (titleEl) titleEl.textContent = title;
    if (msgEl) msgEl.innerHTML = escapeHtml(String(message || '')).replace(/\n/g, '<br>');
    if (okBtn) okBtn.textContent = okText;
    if (cancelBtn) {
        cancelBtn.textContent = cancelText;
        cancelBtn.classList.toggle('hidden', !options.confirm);
    }

    if (panel) {
        panel.classList.remove('ring-rose-200', 'ring-amber-200', 'ring-emerald-200', 'ring-purple-200', 'ring-pink-200');
        const ring = tone === 'rose' ? 'ring-rose-200' : tone === 'amber' ? 'ring-amber-200' : tone === 'emerald' ? 'ring-emerald-200' : tone === 'purple' ? 'ring-purple-200' : 'ring-pink-200';
        panel.classList.add(ring);
    }

    modal.classList.remove('hidden');
    modal.classList.add('flex');

    return new Promise(resolve => {
        appDialogResolver_ = resolve;
        setTimeout(() => okBtn?.focus(), 20);
    });
}

function closeAppDialog(result = true) {
    const modal = document.getElementById('modal-app-dialog');
    modal?.classList.add('hidden');
    modal?.classList.remove('flex');
    if (appDialogResolver_) {
        const resolve = appDialogResolver_;
        appDialogResolver_ = null;
        resolve(!!result);
    }
}

function showAppNotice(message, options = {}) {
    return showAppDialog(message, { ...options, confirm: false });
}

function showAppConfirm(message, options = {}) {
    return showAppDialog(message, { ...options, confirm: true });
}

function escapeJsString_(value) {
    return String(value ?? '').replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\r?\n/g, ' ');
}

// ==========================================
// HÀM TIỆN ÍCH DỮ LIỆU
// ==========================================
function getStudentFirstName() {
    if (!currentUser || currentUser.isGuest || !currentUser.hoTen) return "Bé";
    const parts = currentUser.hoTen.trim().split(/\s+/);
    return parts[parts.length - 1] || "Bé";
}

function normalizeQuestion(q) {
    if (!q) return null;
    return {
        question_id: q.id ?? q.question_id ?? q.question_no ?? 0,
        // Kho dữ liệu Toán 1 (bản mới) đã tách riêng "sub" = TÊN đầy đủ chủ đề con và "sub_code" = MÃ "X.Y"
        // (dùng để khớp Bài tập theo SGK). Vẫn dự phòng cho định dạng cũ (chỉ có "sub" là mã) để không vỡ dữ liệu cũ.
        sub_topic: String(q.sub_code ?? q.sub ?? q.sub_topic ?? 'Câu hỏi chung').trim(),
        sub_topic_label: String(q.sub ?? q.sub_code ?? q.sub_topic ?? 'Câu hỏi chung').trim(),
        week: q.week ?? q.w ?? null,
        question_text: q.q ?? q.question_text ?? '',
        options: Array.isArray(q.o) ? q.o : (Array.isArray(q.options) ? q.options : []),
        answer: q.a ?? q.answer ?? '',
        hint: q.h ?? q.hint ?? '',
        image_url: q.img ?? q.image_url ?? '',
        audio_text: q.aud ?? q.audio_text ?? '',
        reading_title: q.r_title ?? q.reading_title ?? '',
        reading_passage: q.r_passage ?? q.reading_passage ?? q.passage_text ?? '',
        skill_tag: q.skill_tag ?? q.tag ?? 'TOAN_C1',
        diem: Number(q.diem ?? q.score ?? 0.5),
        explanation: q.explanation ?? q.h ?? 'Không có giải thích chi tiết.',
        muc1_type: q.muc1_type ?? ''
    };
}

function normalizeTopic(t) {
    if (!t) return null;
    const rawQuestions = t.qs || t.questions || [];
    return {
        topic_id: Number(t.id ?? t.topic_id),
        topic_name: t.name ?? t.topic_name ?? '',
        description: t.desc ?? t.description ?? '',
        lecture_title: t.l_title ?? t.lecture_title ?? '',
        lecture_content: t.l_content ?? t.lecture_content ?? '',
        lecture_audio_text: t.l_audio ?? t.lecture_audio_text ?? '',
        questions: rawQuestions.map(normalizeQuestion).filter(Boolean)
    };
}

function shuffleArray(arr) {
    if (!arr) return [];
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function buildTrickyChoices(correctAnswer, sameGroupPool, allPool, count = 3) {
    let same = [...new Set(sameGroupPool.filter(x => x !== correctAnswer))];
    same = shuffleArray(same);
    let picks = same.slice(0, count);
    if (picks.length < count) {
        let rest = [...new Set(allPool.filter(x => x !== correctAnswer && !picks.includes(x)))];
        rest = shuffleArray(rest);
        picks = picks.concat(rest.slice(0, count - picks.length));
    }
    return shuffleArray([correctAnswer, ...picks]);
}

function capitalizeFirstLetter(val) {
    if (!val) return '';
    const s = String(val).trim();
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function beautifySubtopicName(name) {
    if (!name) return '';
    let s = String(name).trim();
    if (/đa giác quan/i.test(s)) return 'Trải nghiệm đa giác quan';
    if (/trái nghĩa.*đồng nghĩa/i.test(s) || /đồng nghĩa.*trái nghĩa/i.test(s)) return 'Trái nghĩa - đồng nghĩa';
    if (s.length > 40 && s.includes('(')) {
        s = s.replace(/\s*\([^)]*\)/g, '').trim();
    }
    return s;
}

const TOPICS_DATA_FILES = [
    'assets/data/kho_hoc_toan_1_part1.json',
    'assets/data/kho_hoc_toan_1_part2.json'
];

// Kho học liệu Toán 1 là MẢNG PHẲNG câu hỏi (mỗi câu tự mang "sub": "X.Y" và "tag": "TOAN_Cx"),
// không bọc sẵn theo từng Mục lớn như bản gốc — nên cần tự gom nhóm theo số Mục (phần trước dấu chấm của "sub").
async function fetchAllQuestionsFlat() {
    if (allQuestionsFlatCache) return allQuestionsFlatCache;

    const results = await Promise.all(TOPICS_DATA_FILES.map(async (file) => {
        const res = await fetch(file);
        if (!res.ok) throw new Error(`Không thể tải file dữ liệu ${file}`);
        return res.json();
    }));

    const rawQuestions = results.flatMap(data => {
        if (Array.isArray(data)) return data;
        if (data && Array.isArray(data.topics)) return data.topics.flatMap(t => t.qs || t.questions || []);
        return [];
    });

    allQuestionsFlatCache = rawQuestions.map(normalizeQuestion).filter(Boolean);
    return allQuestionsFlatCache;
}

async function fetchAllTopicsData() {
    if (allTopicsDataCache) return allTopicsDataCache;

    const flat = await fetchAllQuestionsFlat();
    const byMuc = {};
    flat.forEach(q => {
        const mucNum = parseInt(String(q.sub_topic).split('.')[0], 10);
        if (!byMuc[mucNum]) byMuc[mucNum] = [];
        byMuc[mucNum].push(q);
    });

    allTopicsDataCache = TOPICS_CONFIG.map(t => ({
        topic_id: t.id,
        topic_name: t.title,
        description: t.desc,
        lecture_title: '',
        lecture_content: '',
        lecture_audio_text: '',
        questions: byMuc[t.id] || []
    }));
    return allTopicsDataCache;
}

async function loadExamDataFile(file) {
    if (examsCache[file]) return examsCache[file];
    const res = await fetch(`assets/data/${file}`);
    if (!res.ok) throw new Error("Không thể tải file đề thi");
    const data = await res.json();
    if (data && Array.isArray(data.exams)) {
        data.exams = data.exams.map(ex => ({
            ...ex,
            questions: (ex.qs || ex.questions || []).map(normalizeQuestion).filter(Boolean)
        }));
    }
    examsCache[file] = data;
    return data;
}

// ==========================================
// RENDER GIAO DIỆN TRANG CHỦ & ĐẤU TRƯỜNG
// ==========================================
async function renderDashboardGrid() {
    const container = document.getElementById('view-dashboard-grid');
    if (!container) return;
    
    let topicsData = [];
    try { topicsData = await fetchAllTopicsData(); } catch (e) {}

    let html = '';
    // Tab Khám phá hiển thị Mục 1-10 và Mục 12 (Epsilon Method).
    // Mục 11 (Ôn tập) vẫn có tab chính riêng trên header.
    TOPICS_CONFIG.filter(t => Number(t.id) !== 11).forEach(t => {
        const topicObj = topicsData.find(item => Number(item.topic_id) === Number(t.id));
        const totalCount = topicObj && topicObj.questions ? topicObj.questions.length : 0;
        const countLabel = t.engine === 'epsilon-method' ? '6 Lab' : (totalCount > 0 ? `${totalCount} câu` : 'Đang cập nhật');

        const iconHtml = t.isCustomTextIcon 
            ? `<div class="w-8 h-8 bg-rose-100 rounded-xl flex items-center justify-center text-[11px] font-black text-rose-600 shadow-inner group-hover:scale-110 transition-transform shrink-0 tracking-tight">S/X</div>`
            : `<div class="w-8 h-8 bg-${t.color}-100 rounded-xl flex items-center justify-center text-sm font-extrabold text-${t.color}-600 shadow-inner group-hover:scale-110 transition-transform shrink-0">${t.icon}</div>`;

        html += `
            <div onclick="openTopic(${t.id}, '${t.title}', '${t.icon}')" class="pastel-card p-3.5 md:p-4 flex flex-col justify-between cursor-pointer hover:border-${t.color}-400 transition-all group min-h-[128px] md:min-h-[142px]">
                <div class="flex items-start space-x-2.5">
                    ${iconHtml}
                    <h3 class="font-extrabold text-${t.color}-700 text-base md:text-lg leading-snug overflow-hidden" style="display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;">${t.title}</h3>
                </div>
                <div class="flex justify-between items-end gap-2 mt-2.5 pt-2 border-t border-pink-100 font-bold text-gray-600">
                    <span class="flex-1 text-sm md:text-[15px] leading-snug overflow-hidden" style="display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;">${t.desc}</span>
                    <span class="shrink-0 bg-${t.color}-50 text-${t.color}-600 px-2.5 py-1 rounded-full text-xs md:text-sm font-extrabold">${countLabel}</span>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

async function startRandomExam(categoryKey) {
    stopSpeaking();
    // Dữ liệu đề thi Toán 1 phân loại HK1/HK2/HSG theo tiền tố exam_id
    // dựa đúng theo TIỀN TỐ của "exam_id" (12.1.x = HK1, 12.2.x = HK2, 12.3.x = HSG),
    // khớp với ma trận exam_id đã chuẩn hoá trong file dữ liệu.
    const idPrefix = examFileMap[categoryKey]?.idPrefix || '';

    showLoadingOverlay("Đang chuẩn bị đề thi...");
    try {
        const examData = await loadExamDataFile('de_thi_toan_1.json');
        hideLoadingOverlay();

        const pool = (examData && Array.isArray(examData.exams)) ? examData.exams : [];
        let candidates = pool.filter(e => String(e.exam_id || '').startsWith(idPrefix));
        if (!candidates.length) { showAppNotice('Đang cập nhật thêm đề thi cho mục này, bé quay lại sau nhé!', { title: 'Đề thi', icon: '🏆', tone: 'amber' }); return; }

        const exam = candidates[Math.floor(Math.random() * candidates.length)];
        const examIndex = pool.indexOf(exam);
        const examLabel = examFileMap[categoryKey]?.label || 'Đề thi';
        const examTitle = exam.exam_title || exam.name || exam.title || `${examLabel} - Đề số ${examIndex + 1}`;

        activeExamContext = { categoryKey, examIndex, examTitle };
        activeRoadmapContext = null;
        pendingTopicQuiz = null;

        const questions = Array.isArray(exam.questions) && exam.questions.length ? exam.questions : [];
        if (!questions.length) { showAppNotice('Đề thi này chưa có câu hỏi, bé chọn đề khác nhé!', { title: 'Đề thi', icon: '🏆', tone: 'amber' }); return; }

        updateNavTabs("12. Đấu trường đề thi", "🏆", examTitle);
        startTopicQuiz(0, examTitle, shuffleArray(questions), null);
    } catch (err) {
        hideLoadingOverlay();
        showAppNotice(`Không thể tải đề thi: ${err.message}`, { title: 'Đề thi', icon: '🏆', tone: 'rose' });
    }
}

function startExamCountdown() {
    quizRemainingSeconds = 40 * 60;
    updateExamTimerDisplay();
    clearInterval(quizTimerInterval);
    quizTimerInterval = setInterval(() => {
        quizRemainingSeconds--;
        updateExamTimerDisplay();
        if (quizRemainingSeconds <= 0) {
            clearInterval(quizTimerInterval);
            showAppNotice('Đã hết giờ làm bài! Bài thi sẽ được nộp lại nhé bé.', { title: 'Hết giờ', icon: '⏰', tone: 'amber' });
            showResultScreen();
        }
    }, 1000);
}

function updateExamTimerDisplay() {
    const el = document.getElementById('quiz-timer-display');
    if (!el) return;
    const m = Math.floor(Math.max(0, quizRemainingSeconds) / 60);
    const s = Math.max(0, quizRemainingSeconds) % 60;
    el.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function openExamHub() {
    if (!requirePremium('Đấu trường đề thi')) return;
    setAppShellRootMode_(true);
    setMainTabActive_('exams');
    stopSpeaking();
    activeBaiHocContext = null;
    activeExamContext = null;
    activeRoadmapContext = null;
    activeTopicId = null;
    pendingTopicQuiz = null;
    updateNavTabs("12. Đấu trường đề thi", "🏆", null);
    switchAppView('view-exam-hub');
    showLoadingOverlay("Đang tải kho đề thi...");
    renderExamHubGrid().finally(() => hideLoadingOverlay());
}

async function renderExamHubGrid() {
    const container = document.getElementById('exam-categories-grid');
    if (!container) return;

    let examData = null;
    try { examData = await loadExamDataFile('de_thi_toan_1.json'); } catch (e) {}

    const getCountForPrefix = (idPrefix) => {
        if (!examData || !examData.exams) return 3;
        return examData.exams.filter(e => String(e.exam_id || '').startsWith(idPrefix)).length || 0;
    };

    const countHK1 = getCountForPrefix(examFileMap.hocky1.idPrefix);
    const countHK2 = getCountForPrefix(examFileMap.hocky2.idPrefix);
    const countHSG = getCountForPrefix(examFileMap.hsg.idPrefix);

    let html = `
        <div class="bg-pink-50/70 p-5 rounded-3xl border-2 border-pink-200 flex flex-col justify-between items-center text-center group min-h-[250px] pastel-card">
            <div>
                <div class="text-4xl mb-1.5 group-hover:scale-110 transition-transform">🔢</div>
                <h3 class="font-extrabold text-pink-600 text-lg mb-1">Học kỳ 1</h3>
                <p class="text-xs text-gray-500 font-bold mb-2">Kiểm tra kiến thức HK1</p>
                <span class="inline-block bg-pink-100 text-pink-700 px-3 py-0.5 rounded-full text-xs font-black mb-3">${countHK1} đề thi chuẩn</span>
            </div>
            <div class="w-full space-y-2">
                <button onclick="startRandomExam('hocky1')" class="w-full py-2.5 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-extrabold rounded-xl text-xs pastel-btn shadow-sm">
                    🚀 Vào thi thử
                </button>
                <button onclick="openHistoryModal('LichSuBaiThi_HK1')" class="w-full py-2 bg-white text-pink-700 border border-pink-300 font-extrabold rounded-xl text-xs pastel-btn hover:bg-pink-50">
                    📊 Xem lịch sử thi
                </button>
            </div>
        </div>

        <div class="bg-purple-50/70 p-5 rounded-3xl border-2 border-purple-200 flex flex-col justify-between items-center text-center group min-h-[250px] pastel-card">
            <div>
                <div class="text-4xl mb-1.5 group-hover:scale-110 transition-transform">⭐</div>
                <h3 class="font-extrabold text-purple-600 text-lg mb-1">Học kỳ 2</h3>
                <p class="text-xs text-gray-500 font-bold mb-2">Kiểm tra kiến thức HK2</p>
                <span class="inline-block bg-purple-100 text-purple-700 px-3 py-0.5 rounded-full text-xs font-black mb-3">${countHK2} đề thi chuẩn</span>
            </div>
            <div class="w-full space-y-2">
                <button onclick="startRandomExam('hocky2')" class="w-full py-2.5 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-extrabold rounded-xl text-xs pastel-btn shadow-sm">
                    🚀 Vào thi thử
                </button>
                <button onclick="openHistoryModal('LichSuBaiThi_HK2')" class="w-full py-2 bg-white text-purple-700 border border-purple-300 font-extrabold rounded-xl text-xs pastel-btn hover:bg-purple-50">
                    📊 Xem lịch sử thi
                </button>
            </div>
        </div>

        <div class="bg-amber-50/70 p-5 rounded-3xl border-2 border-amber-200 flex flex-col justify-between items-center text-center group min-h-[250px] pastel-card">
            <div>
                <div class="text-4xl mb-1.5 group-hover:scale-110 transition-transform">🏆</div>
                <h3 class="font-extrabold text-amber-600 text-lg mb-1">Học sinh giỏi</h3>
                <p class="text-xs text-gray-500 font-bold mb-2">Thử thách nâng cao IQ</p>
                <span class="inline-block bg-amber-100 text-amber-700 px-3 py-0.5 rounded-full text-xs font-black mb-3">${countHSG} đề thi tuyển chọn</span>
            </div>
            <div class="w-full space-y-2">
                <button onclick="startRandomExam('hsg')" class="w-full py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold rounded-xl text-xs pastel-btn shadow-sm">
                    🚀 Vào thi thử
                </button>
                <button onclick="openHistoryModal('LichSuBaiThi_HSG')" class="w-full py-2 bg-white text-amber-700 border border-amber-300 font-extrabold rounded-xl text-xs pastel-btn hover:bg-amber-50">
                    📊 Xem lịch sử thi
                </button>
            </div>
        </div>
    `;
    container.innerHTML = html;
}

// ==========================================
// ĐIỀU HƯỚNG VIEW & BREADCRUMB
// ==========================================
function updateNavTabs(level2Title, level2Icon, level3Title, level4Title) {
    // 6 tab chinh da nam co dinh tren header, breadcrumb chi hien cac cap noi dung ben trong.
    const mainTabBreadcrumbAliases = {
        discover: ['khám phá'],
        lessons: ['bài học'],
        exercises: ['bài tập'],
        review: ['ôn tập'],
        exams: ['đề thi'],
        games: ['mini game', 'mini games', 'trò chơi']
    };
    const normalizeBreadcrumbLabel = (value) => String(value || '').trim().toLowerCase();
    const aliases = mainTabBreadcrumbAliases[currentMainTab] || [];
    if (level2Title && aliases.includes(normalizeBreadcrumbLabel(level2Title))) {
        level2Title = level3Title || null;
        level3Title = level4Title || null;
        level4Title = null;
    }

    const tab2 = document.getElementById('header-level2-tab');
    const tab3 = document.getElementById('header-level3-tab');
    const tab4 = document.getElementById('header-level4-tab');
    const homeBtn = document.getElementById('btn-header-home');

    if (level2Title) {
        document.getElementById('header-level2-title').textContent = level2Title;
        document.getElementById('header-level2-icon').textContent = level2Icon || '🔢';
        tab2.classList.remove('hidden');
        tab2.classList.add('flex');
        homeBtn.classList.add('opacity-80', 'hover:opacity-100');
    } else {
        tab2.classList.add('hidden');
        tab2.classList.remove('flex');
        homeBtn.classList.remove('opacity-80');
    }

    if (level3Title) {
        document.getElementById('header-level3-title').textContent = level3Title;
        tab3.classList.remove('hidden');
        tab3.classList.add('flex');
        const box = tab3.querySelector('div');
        if (box && currentMainTab === 'discover' && activeTopicId) {
            box.setAttribute('role', 'button');
            box.setAttribute('tabindex', '0');
            box.setAttribute('title', 'Quay lại chuyên mục');
            box.classList.add('cursor-pointer','hover:bg-purple-100','transition-colors');
            box.onclick = returnToCurrentDiscoverTopic_;
            box.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); returnToCurrentDiscoverTopic_(); } };
        } else if (box) {
            box.removeAttribute('role'); box.removeAttribute('tabindex'); box.removeAttribute('title');
            box.classList.remove('cursor-pointer','hover:bg-purple-100','transition-colors');
            box.onclick = null; box.onkeydown = null;
        }
    } else {
        const box = tab3.querySelector('div');
        if (box) { box.onclick = null; box.onkeydown = null; box.removeAttribute('role'); box.removeAttribute('tabindex'); box.removeAttribute('title'); }
        tab3.classList.add('hidden');
        tab3.classList.remove('flex');
    }

    if (level4Title && tab4) {
        document.getElementById('header-level4-title').textContent = level4Title;
        tab4.classList.remove('hidden');
        tab4.classList.add('flex');
    } else if (tab4) {
        tab4.classList.add('hidden');
        tab4.classList.remove('flex');
    }
}

let appShellRootMode_ = true;
function setAppShellRootMode_(isRoot) {
    appShellRootMode_ = !!isRoot;
    const mainBanner = document.getElementById('app-main-banner');
    const contextBanner = document.getElementById('app-context-banner');
    if (mainBanner) mainBanner.classList.toggle('hidden', !appShellRootMode_);
    if (contextBanner) contextBanner.classList.toggle('hidden', appShellRootMode_);
}

let currentMainTab = 'discover';
function setMainTabActive_(tabName) {
    currentMainTab = tabName || 'discover';
    document.querySelectorAll('.main-module-tab').forEach(btn => {
        const active = btn.dataset.tab === currentMainTab;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-selected', active ? 'true' : 'false');
    });
}

function updateDiscoverBreadcrumb_(topicTitle = null, topicIcon = '🔢', subTitle = null) {
    updateNavTabs('Khám phá', '🧭', topicTitle || null, subTitle || null);
}

function returnToCurrentDiscoverTopic_() {
    stopSpeaking();
    clearInterval(quizTimerInterval);
    const topicId = Number(activeTopicId || pendingTopicQuiz?.topicNum || 0);
    if (!topicId) return goHome();
    const cfg = TOPICS_CONFIG.find(t => Number(t.id) === topicId);
    openTopic(topicId, pendingTopicQuiz?.topicName || cfg?.title || `Chủ đề ${topicId}`, cfg?.icon || '🔢');
}

function openReviewTab() {
    if (!requirePremium('Ôn tập')) return;
    setMainTabActive_('review');
    openTopic(11, '11. Ôn tập', '🧠');
    setAppShellRootMode_(true);
}

function openMainTab(tabName) {
    stopSpeaking();
    clearInterval(quizTimerInterval);
    switch (tabName) {
        case 'discover': goHome(); break;
        case 'lessons': openBaiHocHub(1); break;
        case 'exercises': openRoadmap(1); break;
        case 'review': openReviewTab(); break;
        case 'exams': openExamHub(); break;
        case 'games': openMiniGameHub(); break;
        default: goHome();
    }
}

function returnToTopicLecture() {
    stopSpeaking();
    clearInterval(quizTimerInterval);
    if (currentMainTab === 'discover') {
        if (activeTopicId) return returnToCurrentDiscoverTopic_();
        return goHome();
    }
    if (activeBaiHocContext?.bai) return openBaiHocHub(activeBaiHocContext.semester || 1);
    if (activeBaiHocContext) return openBaiHocHub(activeBaiHocContext.semester || 1);
    if (activeExamContext) return openExamHub();
    if (activeRoadmapContext) return openRoadmap(exerciseSemesterFilter || 1);
    if (typeof inMiniGameFlow !== 'undefined' && inMiniGameFlow) return openMiniGameHub();
    if (pendingTopicQuiz) return switchAppView('view-lecture');
    goHome();
}

function switchAppView(viewId) {
    stopSpeaking();
    ['view-dashboard-grid', 'view-epsilon-method-hub', 'view-number-sense', 'view-operation-sense', 'view-bai-hoc-hub', 'view-bai-hoc-lesson', 'view-lecture', 'view-quiz', 'view-roadmap', 'view-minigame-hub', 'view-game-play', 'view-exam-hub', 'view-result'].forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        if (id === viewId) el.classList.remove('hidden');
        else el.classList.add('hidden');
    });
}

function goHome() {
    setAppShellRootMode_(true);
    stopSpeaking();
    clearInterval(quizTimerInterval);
    activeBaiHocContext = null;
    activeRoadmapContext = null;
    activeExamContext = null;
    activeTopicId = null;
    pendingTopicQuiz = null;
    updateNavTabs('Khám phá', '🧭', null);
    setMainTabActive_('discover');
    switchAppView('view-dashboard-grid');
}

// ==========================================
// MINI GAMES - giữ entry point ổn định trong UI 6 tab
// ==========================================
let inMiniGameFlow = false;
function openMiniGameHub() {
    if (!requirePremium('Mini games')) return;
    setAppShellRootMode_(true);
    setMainTabActive_('games');
    stopSpeaking();
    clearInterval(quizTimerInterval);
    inMiniGameFlow = true;
    activeBaiHocContext = null;
    activeRoadmapContext = null;
    activeExamContext = null;
    activeTopicId = null;
    pendingTopicQuiz = null;
    updateNavTabs('Mini games', '🎮', null);
    switchAppView('view-minigame-hub');
    const grid = document.getElementById('minigame-grid');
    if (grid && !grid.children.length) {
        grid.innerHTML = '<div class="col-span-full rounded-2xl border-2 border-teal-100 bg-teal-50/60 p-5 text-center"><div class="text-3xl">🎮</div><div class="mt-2 font-black text-teal-700">Kho Mini games Toán 1</div><div class="mt-1 text-xs md:text-sm font-bold text-slate-500">Nội dung Mini game hiện tại sẽ được giữ độc lập và nối vào khu vực này.</div></div>';
    }
}

// ==========================================
// HỆ THỐNG XÁC THỰC TÀI KHOẢN & LỜI CHÀO ĐÓN
// ==========================================
function switchAuthTab(tab) {
    const isLogin = tab === 'login';
    document.getElementById('form-login').classList.toggle('hidden', !isLogin);
    document.getElementById('form-register').classList.toggle('hidden', isLogin);
    document.getElementById('tab-btn-login').className = `py-2.5 rounded-xl font-extrabold text-sm pastel-btn ${isLogin ? 'bg-white text-pink-600 shadow-sm' : 'text-gray-400'}`;
    document.getElementById('tab-btn-register').className = `py-2.5 rounded-xl font-extrabold text-sm pastel-btn ${!isLogin ? 'bg-white text-pink-600 shadow-sm' : 'text-gray-400'}`;
    hideAuthError();
}

function updateMaHSPreview() {
    const lop = document.getElementById('reg-lop').value.trim().toUpperCase();
    const stt = document.getElementById('reg-stt').value.trim();
    document.getElementById('mahs-preview').textContent = (lop && stt) ? `${lop}-${stt.padStart(2, '0')}` : '--';
}

function showAuthError(msg) {
    const el = document.getElementById('auth-error-msg');
    if (!el) return;
    el.textContent = msg;
    el.classList.remove('hidden');
}
function hideAuthError() { 
    const el = document.getElementById('auth-error-msg');
    if (el) el.classList.add('hidden'); 
}

let accountSessionToken = localStorage.getItem('toan1_session_token') || '';
let adminStudentsCache = [];
let adminSortState = { key: 'maHS', dir: 1 };

function makeGuestUser() {
    return { name: 'Khách (Guest)', isGuest: true, tuanHienTai: 1, hoTen: 'Khách', lop: '', maHS: 'KHACH', vaiTro: 'guest', loaiTaiKhoan: 'guest' };
}

async function callAppsScript(action, payload = {}) {
    const res = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action, payload, sessionToken: accountSessionToken || '' })
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const rawText = await res.text();
    try {
        return JSON.parse(rawText);
    } catch (e) {
        throw new Error('Google Apps Script trả về dữ liệu không hợp lệ. Anh kiểm tra lại Deploy > Manage deployments và quyền truy cập Web App nhé.');
    }
}

function ensureAuthOverlay() {
    let overlay = document.getElementById('auth-modal-overlay');
    const card = document.getElementById('screen-login');
    if (!card) return null;
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'auth-modal-overlay';
        overlay.className = 'hidden fixed inset-0 z-[80] bg-slate-900/50 backdrop-blur-sm p-3 overflow-y-auto';
        overlay.innerHTML = '<div id="auth-modal-holder" class="min-h-full flex items-center justify-center"></div>';
        document.body.appendChild(overlay);
        document.getElementById('auth-modal-holder').appendChild(card);
        if (!document.getElementById('btn-close-auth-modal')) {
            const closeBtn = document.createElement('button');
            closeBtn.id = 'btn-close-auth-modal';
            closeBtn.type = 'button';
            closeBtn.className = 'absolute top-3 right-3 w-9 h-9 rounded-full bg-white border border-pink-200 text-pink-500 shadow flex items-center justify-center hover:bg-pink-50';
            closeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            closeBtn.onclick = closeAuthModal;
            card.style.position = 'relative';
            card.appendChild(closeBtn);
        }
    }
    return overlay;
}

function openAuthModal(tab = 'login') {
    const overlay = ensureAuthOverlay();
    const card = document.getElementById('screen-login');
    if (!overlay || !card) return;
    switchAuthTab(tab);
    hideAuthError();
    overlay.classList.remove('hidden');
    card.classList.remove('hidden');
}

function closeAuthModal() {
    document.getElementById('auth-modal-overlay')?.classList.add('hidden');
    document.getElementById('screen-login')?.classList.add('hidden');
    hideAuthError();
}

function isAdminUser() {
    return !!currentUser && !currentUser.isGuest && String(currentUser.vaiTro || '').toLowerCase() === 'admin';
}

function hasPremiumAccess() {
    if (isAdminUser()) return true;
    if (!currentUser || currentUser.isGuest) return false;
    const tier = String(currentUser.loaiTaiKhoan || 'regular').toLowerCase();
    if (tier === 'trial') {
        const d = currentUser.hanDungThu ? new Date(currentUser.hanDungThu + 'T23:59:59') : null;
        return !!d && !isNaN(d.getTime()) && d.getTime() >= Date.now();
    }
    if (tier === 'vip') {
        const d = currentUser.hanVIP ? new Date(currentUser.hanVIP + 'T23:59:59') : null;
        return !!d && !isNaN(d.getTime()) && d.getTime() >= Date.now();
    }
    return false;
}

function showPremiumModal(featureName = 'Nội dung này') {
    let modal = document.getElementById('premium-access-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'premium-access-modal';
        modal.className = 'hidden fixed inset-0 z-[90] bg-slate-900/55 backdrop-blur-sm flex items-center justify-center p-4';
        document.body.appendChild(modal);
    }

    const guest = !currentUser || currentUser.isGuest;
    const currentTier = String(currentUser?.loaiTaiKhoan || 'regular').toLowerCase();
    const tierText = currentTier === 'regular' ? 'Regular' : capitalizeFirstLetter(currentTier);

    modal.innerHTML = `
        <div class="w-full max-w-[350px] bg-[#fffdf4] rounded-[26px] border-2 border-amber-300 shadow-2xl overflow-hidden">
            <div class="px-5 pt-5 pb-4 text-center">
                <div class="mx-auto w-[70px] h-[70px] rounded-full bg-white border border-amber-300 flex items-center justify-center text-[38px] shadow-sm mb-3">🐝</div>
                <h3 class="text-[17px] font-black text-orange-600 mb-2.5">${escapeHtml(featureName)}</h3>
                <div class="text-[13px] leading-[1.7] font-extrabold text-slate-700">
                    ${guest
                        ? `Đây là ${escapeHtml(featureName)} dành cho tài khoản Trial hoặc VIP.<br>Con có thể Sign in nếu đã có tài khoản hoặc Sign up để đăng ký nhé!<br>Các chuyên đề cơ bản vẫn học miễn phí bình thường.`
                        : `Tài khoản hiện tại của con là <span class="text-orange-600">${escapeHtml(tierText)}</span>.<br>${escapeHtml(featureName)} dành cho tài khoản Trial hoặc VIP.<br>Các chuyên đề cơ bản vẫn học miễn phí bình thường.`}
                </div>
                <div class="mt-3.5 px-3 py-2.5 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-700 text-[11px] leading-snug font-black flex items-center justify-center gap-1.5">
                    <span>🌻</span><span>Các chuyên đề cơ bản vẫn học miễn phí bình thường</span>
                </div>
            </div>
            <div class="bg-white/80 border-t border-pink-100 px-3.5 py-3 space-y-2">
                ${guest ? `<div class="grid grid-cols-2 gap-2">
                    <button onclick="closePremiumModal();openAuthModal('login')" class="h-10 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-400 text-white font-black text-sm shadow-sm">Sign in</button>
                    <button onclick="closePremiumModal();openAuthModal('register')" class="h-10 rounded-2xl bg-white border border-fuchsia-300 text-fuchsia-500 font-black text-sm">Sign up</button>
                </div>` : ''}
                <button onclick="closePremiumModal()" class="w-full h-10 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-500 text-sm font-black">Để sau nhé</button>
            </div>
        </div>`;
    modal.classList.remove('hidden');
}

function closePremiumModal() {
    document.getElementById('premium-access-modal')?.classList.add('hidden');
}

function requirePremium(featureName) {
    if (hasPremiumAccess()) return true;
    showPremiumModal(featureName);
    return false;
}

function formatAccountDate(v) {
    if (!v) return '--';
    const s = String(v).trim();
    const m = s.match(/^(\d{1,2})[-\/]([0-9]{1,2})[-\/]([0-9]{2,4})$/);
    if (m) return `${String(m[1]).padStart(2,'0')}-${String(m[2]).padStart(2,'0')}-${String(m[3]).slice(-2)}`;
    const d = new Date(v);
    if (isNaN(d.getTime())) return s;
    return `${String(d.getDate()).padStart(2,'0')}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getFullYear()).slice(-2)}`;
}

async function doLogin() {
    hideAuthError();
    const maHS = (document.getElementById('login-mahs')?.value || '').trim().toUpperCase();
    const maPin = (document.getElementById('login-mapin')?.value || '').trim();
    if (!maHS || !maPin) {
        showAuthError('Bé nhập đủ mã ID và mã PIN nhé!');
        return;
    }
    if (!/^\d{4,6}$/.test(maPin)) {
        showAuthError('Mã PIN phải gồm 4 số (tài khoản cũ) hoặc 6 số.');
        return;
    }
    const btn = document.getElementById('btn-do-login');
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-1"></i> Đang đăng nhập...';
    try {
        const result = await callAppsScript('login', { maHS, maPin });
        if (!result.ok) {
            showAuthError(result.error || 'Mã ID hoặc mã PIN không đúng!');
            return;
        }
        accountSessionToken = result.sessionToken || '';
        if (accountSessionToken) localStorage.setItem('toan1_session_token', accountSessionToken);
        localStorage.removeItem('tv1_mahs');
        localStorage.removeItem('tv1_mapin');
        currentUser = { ...result.student, isGuest: false };
        closeAuthModal();
        enterDashboard();
    } catch (err) {
        showAuthError('Lỗi kết nối máy chủ: ' + err.message);
    } finally {
        btn.disabled = false;
        btn.innerHTML = '<i class="fa-solid fa-right-to-bracket mr-1"></i> Đăng nhập';
    }
}

async function doRegister() {
    hideAuthError();
    const hoTen = document.getElementById('reg-hoten').value.trim();
    const ngaySinhRaw = document.getElementById('reg-ngaysinh').value;
    const lop = document.getElementById('reg-lop').value.trim().toUpperCase();
    const soThuTu = document.getElementById('reg-stt').value.trim();
    const maPin = document.getElementById('reg-mapin').value.trim();
    if (!hoTen || !ngaySinhRaw || !lop || !soThuTu || !maPin) {
        showAuthError('Bé điền đủ tất cả các ô có dấu * nhé!');
        return;
    }
    if (!/^\d{6}$/.test(maPin)) {
        showAuthError('Tài khoản đăng ký mới phải dùng mã PIN đúng 6 chữ số!');
        return;
    }
    const [y, m, d] = ngaySinhRaw.split('-');
    const ngaySinh = `${d}-${m}-${y.slice(2)}`;
    const btn = document.getElementById('btn-do-register');
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-1"></i> Đang đăng ký...';
    try {
        const result = await callAppsScript('register', { hoTen, ngaySinh, lop, soThuTu, maPin });
        if (!result.ok) {
            showAuthError(result.error || 'Đăng ký chưa thành công.');
            return;
        }
        document.getElementById('login-mahs').value = result.student.maHS;
        document.getElementById('login-mapin').value = '';
        switchAuthTab('login');
        showAppNotice(`Đăng ký thành công!\nMã ID thực tế của bé là: ${result.student.maHS}\nTài khoản mới ở hạng Regular.`, { title: 'Đăng ký thành công', icon: '🎉', tone: 'emerald' });
    } catch (err) {
        showAuthError('Lỗi kết nối: ' + err.message);
    } finally {
        btn.disabled = false;
        btn.innerHTML = '<i class="fa-solid fa-user-plus mr-1"></i> Đăng ký ngay';
    }
}

async function tryAutoLogin() {
    currentUser = makeGuestUser();
    enterDashboard(true);
    if (!accountSessionToken) return;
    showLoadingOverlay('Đang khôi phục phiên đăng nhập...');
    try {
        const res = await callAppsScript('session', {});
        if (res.ok && res.student) {
            currentUser = { ...res.student, isGuest: false };
            enterDashboard(true);
        } else {
            accountSessionToken = '';
            localStorage.removeItem('toan1_session_token');
        }
    } catch (e) {
        // Mất mạng hoặc token hết hạn: giữ chế độ Khách, không chặn ứng dụng.
    } finally {
        hideLoadingOverlay();
    }
}

async function logout() {
    try { if (accountSessionToken) await callAppsScript('logout', {}); } catch (e) {}
    accountSessionToken = '';
    localStorage.removeItem('toan1_session_token');
    localStorage.removeItem('tv1_mahs');
    localStorage.removeItem('tv1_mapin');
    currentUser = makeGuestUser();
    enterDashboard(true);
}

function handleGuestMode() {
    currentUser = makeGuestUser();
    closeAuthModal();
    enterDashboard(true);
}

function enterDashboard(isSilent = false) {
    document.getElementById('screen-login')?.classList.add('hidden');
    document.getElementById('screen-dashboard')?.classList.remove('hidden');
    updateUserInfoBox();
    updatePremiumLockDecorations();
    resetStars();
    Promise.resolve(renderDashboardGrid()).then(updatePremiumLockDecorations);
    Promise.resolve(renderExamHubGrid()).catch(() => {});
    goHome();
    if (!isSilent && currentUser && !currentUser.isGuest) {
        setTimeout(() => {
            const template = GREETINGS_STUDENT[Math.floor(Math.random() * GREETINGS_STUDENT.length)];
            speakVietnamese(template.replace('{name}', currentUser.hoTen), 0.96);
        }, 450);
    }
}

function updateUserInfoBox() {
    const box = document.getElementById('user-info-box');
    if (!box) return;
    if (currentUser && !currentUser.isGuest) {
        const role = String(currentUser.vaiTro || 'student').toLowerCase();
        const tier = String(currentUser.loaiTaiKhoan || 'regular').toLowerCase();
        const tierLabel = role === 'admin' ? 'Admin' : tier.toUpperCase();
        const tierCls = role === 'admin' ? 'text-amber-600' : tier === 'vip' ? 'text-rose-600' : tier === 'trial' ? 'text-purple-600' : 'text-slate-500';
        box.innerHTML = `
            <div class="flex items-center space-x-2">
                <div class="text-right">
                    <div class="text-pink-600 font-extrabold text-xs md:text-sm leading-tight">${escapeHtml(currentUser.hoTen)}</div>
                    <div class="font-semibold text-[10px] ${tierCls}">${tierLabel} · ID ${escapeHtml(currentUser.maHS)}</div>
                </div>
                ${role === 'admin' ? `<button onclick="openAdminManager()" title="Quản lý tài khoản" class="h-9 px-3 bg-amber-100 hover:bg-amber-200 text-amber-700 rounded-xl border border-amber-300 text-xs font-black"><i class="fa-solid fa-users-gear mr-1"></i>Quản lý</button>` : ''}
                <button onclick="logout()" title="Đăng xuất" class="w-8 h-8 flex items-center justify-center bg-rose-100 hover:bg-rose-200 text-rose-500 rounded-xl border border-rose-200 text-xs"><i class="fa-solid fa-right-from-bracket"></i></button>
            </div>`;
    } else {
        box.innerHTML = `
            <div class="flex items-center gap-2">
                <span class="text-amber-600 font-extrabold text-xs">Khách</span>
                <button onclick="openAuthModal('login')" class="h-9 px-3 bg-gradient-to-r from-orange-400 to-amber-500 text-white rounded-xl text-xs font-black shadow">Sign in</button>
                <button onclick="openAuthModal('register')" class="h-9 px-3 bg-white border border-purple-300 text-purple-600 rounded-xl text-xs font-black">Sign up</button>
            </div>`;
    }
    updatePremiumLockDecorations();
}

function updatePremiumLockDecorations() {
    const locked = !hasPremiumAccess();
    ['bai-hoc-lock-icon','roadmap-lock-icon','review-lock-icon','exam-lock-icon','minigame-lock-icon'].forEach(id => {
        document.getElementById(id)?.classList.toggle('hidden', !locked);
    });

    const grid = document.getElementById('view-dashboard-grid');
    if (!grid) return;
    grid.querySelectorAll('[data-premium-lock-badge]').forEach(x => x.remove());
}

function ensureAdminModal() {
    let modal = document.getElementById('admin-manager-modal');
    if (modal) return modal;
    modal = document.createElement('div');
    modal.id = 'admin-manager-modal';
    modal.className = 'hidden fixed inset-0 z-[95] bg-slate-900/55 backdrop-blur-sm flex items-center justify-center p-3';
    modal.innerHTML = `
        <div class="bg-white w-full max-w-6xl max-h-[92vh] rounded-3xl border-2 border-amber-200 shadow-2xl overflow-hidden flex flex-col">
            <div class="px-5 py-4 bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-200 flex items-center justify-between gap-3">
                <div class="flex items-center gap-3"><h3 class="text-xl font-black text-amber-700">Quản lý tài khoản</h3><span id="admin-account-count" class="px-2.5 py-1 rounded-full bg-white border border-amber-200 text-xs font-black text-amber-700">0</span></div>
                <button onclick="closeAdminManager()" class="w-9 h-9 rounded-full bg-white border border-amber-200 text-slate-500"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="p-4 border-b border-slate-100 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
                <div class="relative w-full sm:max-w-md"><i class="fa-solid fa-magnifying-glass absolute left-3 top-3 text-slate-400"></i><input id="admin-search-input" oninput="renderAdminTable()" placeholder="Tìm ID, họ tên, lớp, loại tài khoản..." class="w-full pl-10 pr-3 py-2.5 rounded-xl border-2 border-slate-200 focus:border-amber-300 outline-none text-sm font-bold"></div>
                <button onclick="loadAdminStudents(true)" class="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-black text-sm"><i class="fa-solid fa-rotate mr-1"></i>Làm mới</button>
            </div>
            <div class="overflow-auto flex-1">
                <table class="w-full text-sm border-collapse min-w-[860px]">
                    <thead class="sticky top-0 bg-slate-50 z-10 text-slate-700 font-black">
                        <tr class="border-b border-slate-200">
                            <th onclick="setAdminSort('maHS')" class="p-3 text-left cursor-pointer">Mã HS ↕</th>
                            <th onclick="setAdminSort('hoTen')" class="p-3 text-left cursor-pointer">Họ tên ↕</th>
                            <th onclick="setAdminSort('lop')" class="p-3 text-left cursor-pointer">Lớp ↕</th>
                            <th onclick="setAdminSort('loaiTaiKhoan')" class="p-3 text-left cursor-pointer">Loại tài khoản ↕</th>
                            <th onclick="setAdminSort('hanDungThu')" class="p-3 text-left cursor-pointer">Hạn dùng thử ↕</th>
                            <th onclick="setAdminSort('hanVIP')" class="p-3 text-left cursor-pointer">Hạn VIP ↕</th>
                        </tr>
                    </thead>
                    <tbody id="admin-account-tbody"></tbody>
                </table>
            </div>
            <div class="px-5 py-3 bg-slate-50 border-t border-slate-200 text-xs font-bold text-slate-600">Regular: miễn phí · <span class="text-purple-600">Trial: Premium 1 tháng</span> · <span class="text-rose-600">VIP: Premium 1 năm</span></div>
        </div>`;
    document.body.appendChild(modal);
    return modal;
}

async function openAdminManager() {
    if (!isAdminUser()) return;
    ensureAdminModal().classList.remove('hidden');
    await loadAdminStudents();
}
function closeAdminManager() { document.getElementById('admin-manager-modal')?.classList.add('hidden'); }

async function loadAdminStudents(showBusy = false) {
    if (!isAdminUser()) return;
    const tbody = document.getElementById('admin-account-tbody');
    if (tbody) tbody.innerHTML = '<tr><td colspan="6" class="p-6 text-center text-amber-600 font-bold"><i class="fa-solid fa-spinner fa-spin mr-2"></i>Đang tải danh sách tài khoản...</td></tr>';
    if (showBusy) showLoadingOverlay('Đang làm mới danh sách tài khoản...');
    try {
        const res = await callAppsScript('getStudents', { includeAdmin: true });
        if (!res.ok) throw new Error(res.error || 'Không tải được danh sách');
        // Bảng Quản lý chỉ hiển thị học sinh; tài khoản Admin không nằm trong danh sách này.
        adminStudentsCache = (Array.isArray(res.students) ? res.students : [])
            .filter(s => String(s.vaiTro || 'student').toLowerCase() !== 'admin');
        renderAdminTable();
        if (!adminStudentsCache.length && tbody) {
            tbody.innerHTML = '<tr><td colspan="6" class="p-6 text-center text-rose-500 font-bold">Backend đã kết nối nhưng chưa đọc được dữ liệu sheet học sinh. Hãy cập nhật Apps Script v7.2 và Deploy lại.</td></tr>';
        }
    } catch (e) {
        adminStudentsCache = [];
        if (tbody) tbody.innerHTML = `<tr><td colspan="6" class="p-6 text-center text-rose-500 font-bold">Không tải được danh sách: ${escapeHtml(e.message)}</td></tr>`;
        showAppNotice('Không thể tải danh sách tài khoản: ' + e.message, { title: 'Quản lý tài khoản', icon: '⚠️', tone: 'rose' });
    } finally { if (showBusy) hideLoadingOverlay(); }
}

function setAdminSort(key) {
    if (adminSortState.key === key) adminSortState.dir *= -1;
    else adminSortState = { key, dir: 1 };
    renderAdminTable();
}

function renderAdminTable() {
    const tbody = document.getElementById('admin-account-tbody');
    if (!tbody) return;
    const q = (document.getElementById('admin-search-input')?.value || '').trim().toLowerCase();
    let rows = adminStudentsCache.filter(x => [x.maHS, x.hoTen, x.lop, x.loaiTaiKhoan, x.vaiTro].some(v => String(v || '').toLowerCase().includes(q)));
    const { key, dir } = adminSortState;
    rows.sort((a,b) => String(a[key] || '').localeCompare(String(b[key] || ''), 'vi', {numeric:true}) * dir);
    document.getElementById('admin-account-count').textContent = adminStudentsCache.length;
    if (!rows.length) {
        tbody.innerHTML = '<tr><td colspan="6" class="p-6 text-center text-slate-400 font-bold">Không có tài khoản phù hợp</td></tr>';
        return;
    }
    tbody.innerHTML = rows.map(s => {
        const role = String(s.vaiTro || 'student').toLowerCase();
        const tier = String(s.loaiTaiKhoan || 'regular').toLowerCase();
        const tierColor = tier === 'vip' ? 'text-rose-600 bg-rose-50 border-rose-200' : tier === 'trial' ? 'text-purple-600 bg-purple-50 border-purple-200' : 'text-slate-600 bg-slate-50 border-slate-200';
        return `<tr class="border-b border-slate-100 hover:bg-amber-50/30">
            <td class="p-3 font-black text-slate-700">${escapeHtml(s.maHS || '')}</td>
            <td class="p-3 font-bold text-slate-800">${escapeHtml(s.hoTen || '')}${role === 'admin' ? ' <span class="text-amber-600 text-xs">(Admin)</span>' : ''}</td>
            <td class="p-3 font-bold">${escapeHtml(s.lop || '')}</td>
            <td class="p-3">${role === 'admin' ? '<span class="font-black text-amber-600">ADMIN</span>' : `<select onchange="changeAccountTier('${String(s.maHS).replace(/'/g,"\\'")}', this.value)" class="px-2.5 py-1.5 rounded-lg border font-black ${tierColor}"><option value="regular" ${tier==='regular'?'selected':''}>Regular</option><option value="trial" ${tier==='trial'?'selected':''}>Trial</option><option value="vip" ${tier==='vip'?'selected':''}>VIP</option></select>`}</td>
            <td class="p-3 font-bold text-purple-600">${formatAccountDate(s.hanDungThu)}</td>
            <td class="p-3 font-bold text-rose-600">${formatAccountDate(s.hanVIP)}</td>
        </tr>`;
    }).join('');
}

async function changeAccountTier(maHS, tier) {
    try {
        const res = await callAppsScript('updateAccountTier', { maHS, loaiTaiKhoan: tier });
        if (!res.ok) throw new Error(res.error || 'Không cập nhật được tài khoản');
        const idx = adminStudentsCache.findIndex(x => String(x.maHS).toUpperCase() === String(maHS).toUpperCase());
        if (idx >= 0) adminStudentsCache[idx] = { ...adminStudentsCache[idx], ...res.student };
        renderAdminTable();
    } catch (e) {
        showAppNotice('Cập nhật thất bại: ' + e.message, { title: 'Cập nhật tài khoản', icon: '⚠️', tone: 'rose' });
        await loadAdminStudents();
    }
}

function resetStars() {
    starGreenCount = 0; starRedCount = 0;
    const greenEl = document.getElementById('star-green-count');
    const redEl = document.getElementById('star-red-count');
    if (greenEl) greenEl.textContent = 0;
    if (redEl) redEl.textContent = 0;
}

async function loadBaiHocData() {
    if (baiHocDataCache) return baiHocDataCache;
    const res = await fetch(BAI_HOC_DATA_FILE);
    if (!res.ok) throw new Error('Không thể tải dữ liệu Bài học Toán 1');
    baiHocDataCache = await res.json();
    return baiHocDataCache;
}

function findBaiHocByNumber_(data, baiNumber) {
    return (data?.bai_hoc || []).find(x => Number(x.bai) === Number(baiNumber)) || null;
}

async function openBaiHocHub(semesterNumber = 1) {
    if (!requirePremium('Bài học')) return;
    setAppShellRootMode_(true);
    setMainTabActive_('lessons');
    stopSpeaking();
    clearInterval(quizTimerInterval);
    activeBaiHocContext = { semester: Number(semesterNumber) || 1, bai: null, pageNo: 1 };
    activeRoadmapContext = null;
    activeExamContext = null;
    pendingTopicQuiz = null;
    updateNavTabs('Bài học', '📖', null);
    switchAppView('view-bai-hoc-hub');
    showLoadingOverlay('Đang mở Bài học Toán 1...');
    try {
        const data = await loadBaiHocData();
        renderBaiHocHub_(data, activeBaiHocContext.semester);
    } catch (err) {
        showAppNotice(`Không thể mở Bài học: ${err.message}`, { title: 'Bài học', icon: '📖', tone: 'rose' });
    } finally {
        hideLoadingOverlay();
    }
}

function renderBaiHocHub_(data, semesterNumber) {
    const tabs = document.getElementById('bai-hoc-semester-tabs');
    const grid = document.getElementById('bai-hoc-grid');
    const subtitle = document.getElementById('bai-hoc-hub-subtitle');
    if (!tabs || !grid) return;

    const semesters = [1, 2].filter(sem => (data?.bai_hoc || []).some(x => Number(x.semester) === sem));
    tabs.innerHTML = semesters.map(sem => `<button onclick="openBaiHocHub(${sem})" class="semester-switch-btn ${Number(sem) === Number(semesterNumber) ? 'is-active' : 'is-inactive'}">Học kỳ ${sem}</button>`).join('');

    const lessons = (data?.bai_hoc || []).filter(x => Number(x.semester) === Number(semesterNumber));
    if (subtitle) subtitle.textContent = `Học kỳ ${semesterNumber} · ${lessons.length} bài`;
    grid.className = 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2';
    grid.innerHTML = lessons.map((lesson, idx) => {
        const alt = idx % 2 === 0;
        return `<button onclick="openBaiHocLesson(${lesson.bai},1)" class="text-left min-h-[82px] rounded-2xl border-2 ${alt ? 'border-pink-200 bg-gradient-to-br from-white to-pink-50' : 'border-purple-200 bg-gradient-to-br from-white to-purple-50'} px-3 py-2.5 hover:border-fuchsia-400 hover:shadow-md transition-shadow">
            <div class="font-black text-purple-700 text-base">Bài ${lesson.bai}</div>
            <div class="mt-1 text-[12px] md:text-[13px] leading-5 font-bold text-slate-700 line-clamp-2">${escapeHtml(lesson.source_title || '')}</div>
        </button>`;
    }).join('');
}

async function openBaiHocLesson(baiNumber, pageNo = 1) {
    if (!requirePremium('Bài học')) return;
    setAppShellRootMode_(false);
    stopSpeaking();
    showLoadingOverlay('Đang mở bài học...');
    try {
        const data = await loadBaiHocData();
        const lesson = findBaiHocByNumber_(data, baiNumber);
        if (!lesson) throw new Error(`Không tìm thấy Bài ${baiNumber}`);
        const safePage = Math.min(3, Math.max(1, Number(pageNo) || 1));
        activeBaiHocContext = { semester: Number(lesson.semester), bai: Number(lesson.bai), pageNo: safePage };
        setMainTabActive_('lessons');
        updateNavTabs('Bài học', '📖', `Bài ${lesson.bai}`, lesson.source_title || '');
        renderBaiHocLesson_(lesson, safePage);
        switchAppView('view-bai-hoc-lesson');
    } catch (err) {
        showAppNotice(`Không thể mở bài học: ${err.message}`, { title: 'Bài học', icon: '📖', tone: 'rose' });
    } finally {
        hideLoadingOverlay();
    }
}

function renderBaiHocLesson_(lesson, pageNo) {
    const title = document.getElementById('bai-hoc-lesson-title');
    const meta = document.getElementById('bai-hoc-lesson-meta');
    const tabs = document.getElementById('bai-hoc-page-tabs');
    const content = document.getElementById('bai-hoc-page-content');
    if (!content) return;
    if (title) { title.textContent = ''; title.className = 'hidden'; }
    if (meta) { meta.textContent = `Bài ${lesson.bai} · ${lesson.theme || ''}`; meta.className = 'text-base md:text-lg font-extrabold text-purple-600'; }
    const back = document.getElementById('btn-back-bai-hoc-list');
    if (back) back.onclick = () => openBaiHocHub(lesson.semester);

    const labels = [['🔎','Khám phá'], ['✏️','Luyện cùng cô'], ['🌟','Ghi nhớ & Vận dụng']];
    if (tabs) tabs.innerHTML = labels.map((x, i) => {
        const n = i + 1, active = n === Number(pageNo);
        return `<button onclick="openBaiHocLesson(${lesson.bai}, ${n})" class="h-10 rounded-xl border font-black text-[11px] md:text-xs ${active ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white border-purple-400 shadow-md' : 'bg-pink-50/70 text-purple-700 border-pink-200 hover:bg-purple-50'}">${x[0]} ${x[1]}</button>`;
    }).join('');

    const page = (lesson.pages || []).find(p => Number(p.page_no) === Number(pageNo)) || lesson.pages?.[pageNo - 1] || {};
    if (page.page_type === 'guided_practice') content.innerHTML = renderMathGuidedPage_(page, lesson);
    else if (page.page_type === 'summary') content.innerHTML = renderMathSummaryPage_(page, lesson);
    else content.innerHTML = renderMathDiscoveryPage_(page, lesson);

    const nav = document.getElementById('bai-hoc-bottom-nav');
    if (nav) {
        const prev = pageNo > 1 ? `<button onclick="openBaiHocLesson(${lesson.bai}, ${pageNo - 1})" class="px-4 py-2.5 rounded-xl bg-white border border-purple-200 text-purple-700 font-black text-xs">← Trang trước</button>` : '<span></span>';
        const next = pageNo < 3 ? `<button onclick="openBaiHocLesson(${lesson.bai}, ${pageNo + 1})" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-black text-xs shadow-sm">Trang tiếp →</button>` : `<button onclick="openRoadmap(${lesson.semester})" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-black text-xs shadow-sm">✏️ Sang Bài tập</button>`;
        nav.innerHTML = `${prev}<div class="text-[11px] font-black text-slate-400">${pageNo}/3</div>${next}`;
    }
}

function renderMathDiscoveryPage_(page, lesson) {
    const blocks = (page.concept_blocks || []).map((b, i) => `
        <div class="rounded-2xl border ${i % 2 ? 'border-purple-100 bg-purple-50/60' : 'border-pink-100 bg-pink-50/60'} p-3.5">
            <div class="font-black text-slate-800 text-sm md:text-base">${i + 1}. ${escapeHtml(b.heading || '')}</div>
            <div class="text-sm md:text-base text-slate-700 font-semibold leading-7 mt-1">${escapeHtml(b.text || '')}</div>
            ${b.example ? `<div class="mt-2 px-3 py-2 rounded-xl bg-white border border-white text-purple-700 font-bold text-sm">💡 Ví dụ: ${escapeHtml(b.example)}</div>` : ''}
        </div>`).join('');
    const models = (page.visual_models || []).map(m => `<div class="rounded-xl bg-white border border-emerald-100 px-3 py-2.5 text-sm font-semibold text-slate-700">🧩 ${escapeHtml(m.instruction || '')}</div>`).join('');
    return `<div class="space-y-3">
        <section class="rounded-2xl bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 p-4 text-center">
            <div class="text-[11px] font-black text-pink-600">🎯 MỤC TIÊU BÀI HỌC</div>
            <div class="font-black text-slate-800 text-base md:text-lg leading-7 mt-1">${escapeHtml(page.goal || page.intro || lesson.source_title || '')}</div>
        </section>
        <section class="grid gap-3">${blocks}</section>
        ${models ? `<section class="rounded-2xl bg-emerald-50/60 border border-emerald-100 p-3.5"><div class="font-black text-emerald-700 mb-2">👀 Mô hình trực quan</div><div class="grid gap-2">${models}</div></section>` : ''}
    </div>`;
}

function renderMathGuidedPage_(page, lesson) {
    const items = (page.items || []).map((item, i) => renderMathLessonItem_(item, i, lesson)).join('');
    return `<div class="space-y-3">
        <section class="rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 p-3.5">
            <div class="font-black text-purple-700">🐰 Cùng Cô Thỏ Hồng làm từng bước</div>
            <div class="text-sm md:text-base font-semibold text-slate-700 mt-1 leading-7">${escapeHtml(page.recall || '')}</div>
        </section>
        <section class="space-y-3">${items}</section>
    </div>`;
}

function renderMathLessonItem_(item, index, lesson) {
    const id = `bh-${lesson.bai}-${index}`;
    if (item.type === 'choice') {
        return `<div id="${id}" class="rounded-2xl bg-pink-50/60 border border-pink-100 p-3.5">
            <div class="font-black text-slate-800 text-sm md:text-base mb-2">${index + 1}. ${escapeHtml(item.prompt || '')}</div>
            <div class="grid gap-2">${(item.options || []).map((op, j) => `<button onclick="checkMathLessonChoice_('${id}', ${j}, ${Number(item.answer || 0)}, '${escapeJsString_(item.explanation || '')}')" class="bh-choice w-full text-left px-3 py-2.5 rounded-xl bg-white border border-pink-200 font-bold text-sm md:text-base">${String.fromCharCode(65 + j)}. ${escapeHtml(op)}</button>`).join('')}</div>
            <div class="bh-feedback hidden mt-2 text-sm font-bold"></div>
        </div>`;
    }
    if (item.type === 'fill') {
        return `<div id="${id}" class="rounded-2xl bg-sky-50/60 border border-sky-100 p-3.5">
            <div class="font-black text-slate-800 text-sm md:text-base">${index + 1}. ${escapeHtml(item.prompt || '')}</div>
            <div class="flex gap-2 mt-2"><input class="bh-fill flex-1 min-w-0 px-3 py-2 rounded-xl border border-sky-200 bg-white font-black text-center" inputmode="numeric" placeholder="Điền đáp án"><button onclick="checkMathLessonFill_('${id}', '${escapeJsString_(String(item.answer ?? ''))}', '${escapeJsString_(item.hint || '')}')" class="px-4 py-2 rounded-xl bg-sky-500 text-white font-black text-xs">Kiểm tra</button></div>
            <div class="bh-feedback hidden mt-2 text-sm font-bold"></div>
        </div>`;
    }
    if (item.type === 'sequence') {
        return `<div id="${id}" class="rounded-2xl bg-purple-50/60 border border-purple-100 p-3.5"><div class="font-black text-slate-800 text-sm md:text-base">${index + 1}. ${escapeHtml(item.prompt || '')}</div><button onclick="toggleMathLessonAnswer_('${id}', '${escapeJsString_(String(item.answer ?? ''))}')" class="mt-2 px-3 py-2 rounded-xl bg-white border border-purple-200 text-purple-700 font-black text-xs">💡 Kiểm tra cách làm</button><div class="bh-feedback hidden mt-2 text-sm font-bold text-emerald-700"></div></div>`;
    }
    return `<div class="rounded-2xl bg-emerald-50/60 border border-emerald-100 p-3.5"><div class="font-black text-slate-800 text-sm md:text-base">${index + 1}. 🌱 ${escapeHtml(item.prompt || '')}</div><div class="text-xs text-emerald-700 font-bold mt-1">Con nói hoặc làm bằng đồ vật thật quanh mình nhé.</div></div>`;
}

function checkMathLessonChoice_(boxId, selected, answer, explanation) {
    const box = document.getElementById(boxId);
    if (!box) return;
    const buttons = [...box.querySelectorAll('.bh-choice')];
    buttons.forEach((b, i) => {
        b.disabled = true;
        if (i === Number(answer)) b.classList.add('bg-emerald-100','border-emerald-400','text-emerald-800');
        else if (i === Number(selected)) b.classList.add('bg-rose-100','border-rose-400','text-rose-800');
    });
    const ok = Number(selected) === Number(answer);
    const fb = box.querySelector('.bh-feedback');
    if (fb) {
        fb.textContent = ok ? `✅ Chính xác! ${explanation || ''}` : `💡 Chưa đúng. ${explanation || 'Con xem lại phần Khám phá rồi thử lại nhé.'}`;
        fb.className = `bh-feedback mt-2 text-sm font-bold ${ok ? 'text-emerald-700' : 'text-rose-700'}`;
    }
}

function checkMathLessonFill_(boxId, answer, hint) {
    const box = document.getElementById(boxId);
    const input = box?.querySelector('.bh-fill');
    const fb = box?.querySelector('.bh-feedback');
    if (!box || !input || !fb) return;
    const ok = String(input.value || '').trim().toLowerCase() === String(answer || '').trim().toLowerCase();
    input.classList.toggle('border-emerald-400', ok);
    input.classList.toggle('border-rose-400', !ok);
    fb.textContent = ok ? '✅ Đúng rồi!' : `💡 Con thử lại nhé. ${hint || ''}`;
    fb.className = `bh-feedback mt-2 text-sm font-bold ${ok ? 'text-emerald-700' : 'text-rose-700'}`;
}

function toggleMathLessonAnswer_(boxId, answer) {
    const fb = document.getElementById(boxId)?.querySelector('.bh-feedback');
    if (!fb) return;
    fb.textContent = `✅ Đáp án để con tự kiểm tra: ${answer}`;
    fb.classList.remove('hidden');
}

function renderMathSummaryPage_(page, lesson) {
    const points = (page.key_points || []).map(x => `<li>${escapeHtml(x)}</li>`).join('');
    const mistakes = (page.common_mistakes || []).map(x => `<li>${escapeHtml(x)}</li>`).join('');
    const checks = (page.self_check || []).map(x => `<label class="flex gap-2 items-start text-sm font-semibold text-slate-700"><input type="checkbox" class="mt-1 accent-emerald-500"><span>${escapeHtml(x)}</span></label>`).join('');
    return `<div class="space-y-3">
        <section class="rounded-3xl bg-gradient-to-br from-amber-50 via-pink-50 to-purple-50 border-2 border-amber-200 p-4 md:p-5"><div class="text-[11px] font-black text-amber-600">🌟 CON CẦN NHỚ</div><ul class="list-disc pl-5 mt-3 space-y-2 text-sm md:text-base text-slate-700 font-semibold leading-7">${points}</ul></section>
        ${mistakes ? `<section class="rounded-2xl bg-rose-50/70 border border-rose-100 p-4"><div class="font-black text-rose-700 mb-2">⚠️ Lỗi dễ mắc</div><ul class="list-disc pl-5 space-y-1.5 text-sm font-semibold text-slate-700">${mistakes}</ul></section>` : ''}
        <section class="rounded-2xl bg-emerald-50/70 border border-emerald-100 p-4"><div class="font-black text-emerald-700 mb-2">✅ Con tự kiểm tra</div><div class="grid gap-2">${checks}</div></section>
        <section class="rounded-2xl bg-purple-50 border border-purple-100 p-4"><div class="font-black text-purple-700">🌱 Vận dụng</div><div class="text-sm md:text-base font-semibold text-slate-700 mt-1 leading-7">${escapeHtml(page.finish_prompt || '')}</div></section>
    </div>`;
}

function clickProgressOrExam(type) {
    if (type === 'progress') openRoadmap();
    else if (type === 'exam') openExamHub();
}


// ==========================================
// MATH LAB - MỤC 12: TOÁN TƯ DUY MỸ - GRADE 1
// Nội dung kiến thức vẫn bám Toán 1 Việt Nam; cấu trúc trải nghiệm tham chiếu
// Common Core Grade 1 + Mathematical Practices và tiến trình sư phạm IES/NCTM.
// 12.1/12.2 giữ nguyên ID nội bộ để không phá dữ liệu tiến độ hiện có.
// ==========================================
const EPSILON_GRADE1_LABS_ = [
    { code:'12.1', internal_id:'EPSILON_NUMBER_SENSE', engine:'number_sense', icon:'🔢', title:'Number Sense Lab - Cảm nhận số', description:'Nhìn lượng, đếm có ý nghĩa, so sánh, biểu diễn và cấu tạo số bằng nhiều mô hình.', planned_journeys:12, status:'active' },
    { code:'12.2', internal_id:'EPSILON_OPERATION_SENSE', engine:'operation_sense', icon:'➕', title:'Addition & Subtraction Lab - Tư duy cộng trừ', description:'Hiểu thêm - bớt - gộp - tách, số còn thiếu, bằng nhau, gia đình phép tính và chiến lược làm 10.', planned_journeys:14, status:'active' },
    { code:'12.3', engine:'place_value', icon:'🔟', title:'Place Value Lab - Chục, đơn vị & số đến 100', description:'Nhóm chục, giá trị hàng, biểu diễn số, so sánh và tính dựa trên cấu trúc chục - đơn vị.', planned_journeys:12, status:'active' },
    { code:'12.4', engine:'measurement_data', icon:'📏', title:'Measurement & Data Lab - Đo lường, thời gian & dữ liệu', description:'Đo bằng đơn vị lặp, so sánh độ dài, xem giờ, lịch và đọc - tổ chức dữ liệu trực quan.', planned_journeys:10, status:'active' },
    { code:'12.5', engine:'geometry_spatial', icon:'🔷', title:'Geometry & Spatial Lab - Hình học & không gian', description:'Thuộc tính hình, xoay - ghép - tách hình, vị trí không gian và chia hình thành các phần bằng nhau.', planned_journeys:10, status:'active' },
    { code:'12.6', engine:'modeling_reasoning', icon:'🧠', title:'Modeling & Reasoning Lab - Mô hình hóa & lập luận', description:'Giải tình huống bằng vật thật, sơ đồ và phương trình; giải thích cách nghĩ, kiểm tra và tìm nhiều cách giải.', planned_journeys:14, status:'active' }
];

const EPSILON_GRADE1_BLUEPRINTS_ = {
    '12.3': {
        code:'12.3',
        icon:'🔟',
        title:'Place Value Lab - Chục, đơn vị & số đến 100',
        tagline:'Nhìn số theo cấu trúc chục - đơn vị, không chỉ đọc thuộc lòng.',
        focus:'Trọng tâm là gom 10 thành 1 chục, đọc - viết - biểu diễn số, so sánh số và dùng cấu trúc chục đơn vị để tính.',
        vn_link:'Bám mục 3 Toán 1: số đến 100, cấu tạo số, bảng số, số tròn chục, so sánh và tính không nhớ.',
        pedagogy:['Concrete → Pictorial → Abstract', 'Giải thích bằng lời: “vì sao con biết?”', 'Từ mô hình bó chục sang kí hiệu toán học'],
        journeys:[
            ['1','Bó chục đầu tiên','Con gom 10 que/đồ vật thành 1 bó chục và nhận ra 1 chục = 10 đơn vị.'],
            ['2','10 và mấy','Con đọc các số dạng 10 và mấy bằng mô hình bó chục + đồ rời.'],
            ['3','Viết số bằng chục và đơn vị','Con nối mô hình với số đúng, ví dụ 3 chục 8 đơn vị = 38.'],
            ['4','Một số có nhiều cách biểu diễn','Con biểu diễn cùng một số bằng que tính, khung chục và sơ đồ.'],
            ['5','So sánh theo hàng chục','Con biết số nào lớn hơn khi hàng chục khác nhau.'],
            ['6','So sánh theo hàng đơn vị','Khi cùng số chục, con so sánh tiếp hàng đơn vị.'],
            ['7','Số liền trước - liền sau','Con dùng tia số và bảng số để tìm số trước, sau, ở giữa.'],
            ['8','Số tròn chục','Con nhận ra các số 10, 20, 30... và vị trí của chúng.'],
            ['9','Tách số theo chục - đơn vị','Con tách 46 thành 40 và 6; 70 thành 7 chục và 0 đơn vị.'],
            ['10','Cộng theo cấu trúc chục','Con tính 23 + 4, 31 + 20 bằng cách gộp chục và đơn vị.'],
            ['11','Trừ theo cấu trúc chục','Con tính 57 - 3, 80 - 20 bằng cách bớt đơn vị hoặc bớt chục.'],
            ['12','Giải thích và khái quát','Con chọn chiến lược hợp lí rồi giải thích được vì sao kết quả đúng.']
        ]
    },
    '12.4': {
        code:'12.4',
        icon:'📏',
        title:'Measurement & Data Lab - Đo lường, thời gian & dữ liệu',
        tagline:'Đo để so sánh, đọc dữ liệu để kể lại bằng toán.',
        focus:'Trọng tâm là đo độ dài bằng đơn vị lặp, ước lượng, xem giờ đúng, lịch và đọc bảng tranh/cột đơn giản.',
        vn_link:'Kết nối các mạch độ dài, thời gian, lịch và bảng thống kê trực quan trong Toán 1.',
        pedagogy:['Học qua thao tác đo thật', 'So sánh trước khi tính', 'Đọc dữ liệu rồi nói thành câu'],
        journeys:[
            ['1','Dài hơn - ngắn hơn','Con so sánh hai đồ vật bằng quan sát và đặt chồng.'],
            ['2','Đo bằng đơn vị lặp','Con đo chiều dài bằng que, kẹp giấy hoặc ô vuông.'],
            ['3','Vì sao phải đặt sát đầu mút?','Con sửa lỗi khi đo và hiểu cách đo đúng.'],
            ['4','Ước lượng rồi kiểm tra','Con đoán trước rồi mới đo thật để kiểm chứng.'],
            ['5','So sánh ba độ dài','Con sắp xếp theo thứ tự ngắn → dài hoặc ngược lại.'],
            ['6','Giờ đúng trên đồng hồ','Con đọc giờ đúng và ghép với hoạt động hằng ngày.'],
            ['7','Ngày - tuần - lịch','Con xác định hôm qua, hôm nay, ngày mai và đọc lịch đơn giản.'],
            ['8','Bảng tranh','Con đếm dữ liệu bằng tranh rồi trả lời câu hỏi.'],
            ['9','Biểu đồ cột đơn giản','Con đọc cột cao thấp để biết nhiều hơn/ít hơn.'],
            ['10','Dự án mini','Con đo, ghi dữ liệu và kể lại kết quả bằng câu toán học.']
        ]
    },
    '12.5': {
        code:'12.5',
        icon:'🔷',
        title:'Geometry & Spatial Lab - Hình học & không gian',
        tagline:'Nhìn hình, gọi tên, mô tả thuộc tính và thao tác với hình.',
        focus:'Trọng tâm là nhận dạng hình phẳng, hình khối, ghép - tách hình, mô tả vị trí và chia hình thành phần bằng nhau.',
        vn_link:'Liên hệ chặt với mục 4 Hình học và mục 6 Vị trí - không gian của chương trình Toán 1.',
        pedagogy:['Nhìn thuộc tính trước khi nhớ tên', 'Xoay hình nhưng tên không đổi', 'Ghép - tách để thấy cấu tạo của hình'],
        journeys:[
            ['1','Nhìn và gọi tên hình','Con nhận ra hình tròn, tam giác, vuông, chữ nhật trong nhiều tư thế.'],
            ['2','Nói về đặc điểm của hình','Con mô tả số cạnh, góc, cạnh bằng nhau hoặc dài - ngắn.'],
            ['3','Hình nào khác loại?','Con phân loại theo dấu hiệu hình học chứ không theo màu sắc.'],
            ['4','Ghép hình mới từ hình quen','Con dùng các mảnh nhỏ để ghép thành hình lớn.'],
            ['5','Tách hình lớn thành hình nhỏ','Con tìm các hình ẩn trong một hình ghép.'],
            ['6','Hình khối trong đời sống','Con nối đồ vật thật với khối lập phương hoặc khối hộp chữ nhật.'],
            ['7','Vị trí trong không gian','Con nói được trên - dưới, trái - phải, trước - sau, trong - ngoài.'],
            ['8','Xoay và lật hình','Con nhận ra hình vẫn là cùng một hình khi thay đổi hướng.'],
            ['9','Chia hình thành hai phần bằng nhau','Con gấp/tô/chia hình thành các phần bằng nhau.'],
            ['10','Giải thích bằng lời','Con trả lời vì sao một hình là hình vuông hay vì sao hai cách ghép là giống nhau.']
        ]
    },
    '12.6': {
        code:'12.6',
        icon:'🧠',
        title:'Modeling & Reasoning Lab - Mô hình hóa & lập luận',
        tagline:'Biến tình huống thành mô hình toán và nói ra cách nghĩ của mình.',
        focus:'Trọng tâm là đọc tình huống, chọn mô hình phù hợp, viết câu số, thử nhiều chiến lược và kiểm tra lại lời giải.',
        vn_link:'Bổ trợ mạnh cho giải toán có lời văn, toán tư duy, mô hình thanh/sơ đồ và năng lực diễn đạt.',
        pedagogy:['Dùng vật thật → tranh → sơ đồ → phương trình', 'Nhiều chiến lược cùng đúng', 'Khuyến khích trẻ tự giải thích'],
        journeys:[
            ['1','Chuyện gì đang xảy ra?','Con đọc tranh/tình huống và xác định đây là gộp, bớt, so sánh hay tìm phần thiếu.'],
            ['2','Chọn mô hình đúng','Con chọn khung chục, sơ đồ phần - toàn thể hay đồ vật để biểu diễn.'],
            ['3','Viết câu số từ tranh','Con chuyển mô hình thành phép tính phù hợp.'],
            ['4','Một bài - nhiều cách làm','Con giải cùng bài bằng đồ vật, sơ đồ và câu số.'],
            ['5','Tìm số còn thiếu','Con dùng quan hệ giữa các số để tìm ô trống.'],
            ['6','So sánh để lập luận','Con nêu vì sao nhóm A nhiều hơn B, hay số này lớn hơn số kia.'],
            ['7','Kiểm tra lời giải','Con thay kết quả vào tình huống để xem có hợp lí không.'],
            ['8','Sửa một lời giải sai','Con tìm chỗ sai trong cách làm của bạn và nói vì sao sai.'],
            ['9','Gia đình phép tính','Con nhìn ba số để lập các phép cộng trừ liên quan.'],
            ['10','Bài toán hai bước rất nhẹ','Con giải tình huống cần suy nghĩ qua 2 ý nhỏ.'],
            ['11','Ước lượng hợp lí','Con đoán kết quả gần đúng trước khi giải.'],
            ['12','Giải thích bằng câu đầy đủ','Con không chỉ nói đáp án mà còn nói “Con làm thế nào”.'],
            ['13','Tạo bài toán của riêng con','Con tự đặt một bài toán từ tranh hoặc vật thật.'],
            ['14','Chuyển giao tình huống mới','Con dùng chiến lược đã học cho bài toán lạ nhưng cùng cấu trúc.']
        ]
    }
};


function getEpsilonLabAction_(lab) {
    if (!lab) return '';
    if (lab.engine === 'number_sense') return 'openNumberSenseHub()';
    if (lab.engine === 'operation_sense') return 'openOperationSenseHub()';
    return `openGenericMathLab_('${lab.code}')`;
}

function renderEpsilonLabBlueprint_(lab) {
    if (!lab) return '';
    const pedagogy = (lab.pedagogy || []).map(item => `<span class="em-stat-pill">${escapeHtml(item)}</span>`).join('');
    const journeys = (lab.journeys || []).map(item => `
        <div class="rounded-3xl border border-violet-200 bg-white/90 px-4 py-4 shadow-sm">
            <div class="flex items-start justify-between gap-3">
                <div class="min-w-0">
                    <div class="text-xs font-black uppercase tracking-wider text-fuchsia-600">Hành trình ${escapeHtml(item[0])}</div>
                    <h3 class="mt-1 text-lg md:text-xl font-black text-slate-900 leading-tight">${escapeHtml(item[1])}</h3>
                </div>
                <span class="inline-flex shrink-0 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-[11px] font-black text-violet-600">Khung sư phạm</span>
            </div>
            <p class="mt-2 text-sm md:text-base font-bold text-slate-600 leading-relaxed">${escapeHtml(item[2])}</p>
        </div>`).join('');
    return `<div class="w-full max-w-6xl mx-auto">
        <div class="mb-3"><button onclick="openEpsilonMethodHub_()" class="ns-secondary-btn">← Về Math Lab Grade 1</button></div>
        <section class="em-hero">
            <div class="min-w-0 flex-1">
                <div class="text-[11px] md:text-xs font-black uppercase tracking-[.26em] text-fuchsia-600">${escapeHtml(lab.code)} • ${escapeHtml(lab.icon || '✨')} GRADE 1 LAB</div>
                <h2 class="mt-1 text-2xl md:text-4xl font-black text-slate-900">${escapeHtml(lab.title)}</h2>
                <p class="mt-2 max-w-4xl text-sm md:text-base font-bold text-slate-600 leading-relaxed">${escapeHtml(lab.tagline || '')}</p>
                <div class="mt-3 text-sm md:text-base font-black text-fuchsia-700">${escapeHtml(lab.focus || '')}</div>
            </div>
            <div class="shrink-0 min-w-[210px] rounded-3xl border border-violet-200 bg-white/75 px-5 py-4 text-center shadow-sm">
                <div class="text-3xl md:text-4xl font-black text-violet-600">${(lab.journeys || []).length}</div>
                <div class="mt-1 text-xs md:text-sm font-black text-violet-600">hành trình đã lên khung</div>
                <div class="mt-1 text-[11px] font-bold text-slate-400">Sẵn sàng để phát triển hoạt động</div>
            </div>
        </section>

        <div class="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-4 mt-4">
            <div class="rounded-[28px] border border-pink-100 bg-white/90 px-5 py-5 shadow-sm">
                <div class="text-sm font-black uppercase tracking-wider text-pink-600">Ý tưởng lớn</div>
                <p class="mt-2 text-sm md:text-base font-bold text-slate-600 leading-relaxed">${escapeHtml(lab.focus || '')}</p>
                <div class="mt-4 text-sm font-black uppercase tracking-wider text-pink-600">Liên hệ chương trình Việt Nam</div>
                <p class="mt-2 text-sm md:text-base font-bold text-slate-600 leading-relaxed">${escapeHtml(lab.vn_link || '')}</p>
                <div class="mt-4 text-sm font-black uppercase tracking-wider text-pink-600">Nguyên tắc sư phạm</div>
                <div class="mt-3 flex flex-wrap gap-2">${pedagogy}</div>
            </div>
            <div class="rounded-[28px] border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 px-5 py-5 shadow-sm">
                <div class="text-sm font-black uppercase tracking-wider text-violet-600">Cách dùng trong app</div>
                <ul class="mt-3 space-y-2 text-sm md:text-base font-bold text-slate-600 leading-relaxed list-disc pl-5">
                    <li>Mỗi hành trình đi theo trình tự: thao tác → mô hình → nói ra cách nghĩ → ký hiệu toán.</li>
                    <li>Ưu tiên câu hỏi giúp bé giải thích “vì sao”, không chỉ chọn đáp án.</li>
                    <li>Cho phép nhiều chiến lược đúng để nuôi tư duy linh hoạt.</li>
                    <li>Kết nối lại với bài học SGK hiện hành để bé vừa chắc kiến thức vừa mở rộng tư duy.</li>
                </ul>
            </div>
        </div>

        <section class="mt-5">
            <div class="flex items-center justify-between gap-3 flex-wrap">
                <h3 class="text-xl md:text-2xl font-black text-slate-900">Lộ trình hành trình</h3>
                <span class="em-method-badge">${(lab.journeys || []).length} hành trình</span>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-3">${journeys}</div>
        </section>
    </div>`;
}

function openEpsilonLabBlueprint_(labCode) {
    stopSpeaking();
    clearInterval(quizTimerInterval);
    setAppShellRootMode_(false);
    setMainTabActive_('discover');
    activeTopicId = 12;
    const lab = EPSILON_GRADE1_BLUEPRINTS_[labCode];
    if (!lab) return openEpsilonMethodHub_();
    updateNavTabs('12. Math Lab - Toán tư duy Mỹ', '✨', `${lab.code} ${lab.title}`, null);
    switchAppView('view-epsilon-method-hub');
    const host = document.getElementById('epsilon-method-content');
    if (host) host.innerHTML = renderEpsilonLabBlueprint_(lab);
}

async function openEpsilonMethodHub_() {
    setAppShellRootMode_(false);
    setMainTabActive_('discover');
    stopSpeaking();
    clearInterval(quizTimerInterval);
    activeBaiHocContext = null;
    activeExamContext = null;
    activeRoadmapContext = null;
    activeTopicId = 12;
    pendingTopicQuiz = null;
    activeNumberSense = null;
    activeOperationSense = null;
    activeGenericLab = null;
    updateDiscoverBreadcrumb_('12. Math Lab - Toán tư duy Mỹ', '✨', null);
    switchAppView('view-epsilon-method-hub');
    const host = document.getElementById('epsilon-method-content');
    if (host) host.innerHTML = '<div class="py-16 text-center font-black text-purple-600">✨ Đang mở không gian học theo phương pháp Epsilon...</div>';
    try {
        const data = await loadEpsilonMuc12Data_();
        renderEpsilonMethodHub_(data);
    } catch (err) {
        if (host) host.innerHTML = `<div class="rounded-3xl border-2 border-rose-200 bg-rose-50 p-6 text-center font-bold text-rose-700">${escapeHtml(err.message)}</div>`;
    }
}

function renderEpsilonMethodHub_(data) {
    const host = document.getElementById('epsilon-method-content');
    if (!host) return;

    const activeByEngine = {};
    (data.tracks || []).forEach(track => { activeByEngine[track.engine] = track; });
    const plannedTotal = EPSILON_GRADE1_LABS_.reduce((sum, lab) => sum + Number(lab.planned_journeys || 0), 0);
    const openJourneyCount = (data.tracks || []).reduce((sum, track) => sum + ((track.content?.journeys || []).length), 0);

    const cards = EPSILON_GRADE1_LABS_.map(lab => {
        const track = activeByEngine[lab.engine];
        const isActive = !!track && lab.status === 'active';
        const isBlueprint = lab.status === 'blueprint';
        const blueprint = EPSILON_GRADE1_BLUEPRINTS_[lab.code];
        const content = track?.content || {};
        const journeyCount = isActive ? (content.journeys || []).length : Number((blueprint?.journeys || []).length || lab.planned_journeys || 0);
        const activityCount = isActive ? (content.journeys || []).reduce((sum, j) => sum + (Array.isArray(j.activities) ? j.activities.length : 0), 0) : 0;
        const action = getEpsilonLabAction_(lab);

        if (isActive) {
            return `<button onclick="${action}" class="em-track-card text-left">
                <div class="flex items-start justify-between gap-3">
                    <div class="flex items-center gap-3 min-w-0">
                        <div class="em-track-icon">${escapeHtml(lab.icon || '✨')}</div>
                        <div class="min-w-0">
                            <div class="text-xs font-black uppercase tracking-wider text-fuchsia-600">${escapeHtml(lab.code)}</div>
                            <h3 class="font-black text-slate-900 text-lg md:text-xl leading-tight mt-0.5">${escapeHtml(lab.title)}</h3>
                        </div>
                    </div>
                    <span class="em-method-badge">${journeyCount} hành trình</span>
                </div>
                <p class="mt-3 text-sm md:text-base font-bold text-slate-600 leading-relaxed">${escapeHtml(lab.description)}</p>
                <div class="mt-4 flex flex-wrap gap-2 text-[11px] font-black text-slate-500">
                    <span class="em-stat-pill">${activityCount} hoạt động</span>
                    <span class="em-stat-pill">Có âm thanh hướng dẫn</span>
                    <span class="em-stat-pill">Đang mở</span>
                </div>
            </button>`;
        }

        if (isBlueprint) {
            return `<button onclick="${action}" class="em-track-card text-left bg-violet-50/50 hover:bg-violet-50 transition-colors">
                <div class="flex items-start justify-between gap-3">
                    <div class="flex items-center gap-3 min-w-0">
                        <div class="em-track-icon">${escapeHtml(lab.icon || '✨')}</div>
                        <div class="min-w-0">
                            <div class="text-xs font-black uppercase tracking-wider text-fuchsia-600">${escapeHtml(lab.code)}</div>
                            <h3 class="font-black text-slate-900 text-lg md:text-xl leading-tight mt-0.5">${escapeHtml(lab.title)}</h3>
                        </div>
                    </div>
                    <span class="inline-flex shrink-0 rounded-full border border-violet-200 bg-white px-3 py-1 text-[11px] font-black text-violet-600">Đã lên khung</span>
                </div>
                <p class="mt-3 text-sm md:text-base font-bold text-slate-600 leading-relaxed">${escapeHtml(lab.description)}</p>
                <div class="mt-4 flex flex-wrap gap-2 text-[11px] font-black text-slate-500">
                    <span class="em-stat-pill">${journeyCount} hành trình</span>
                    <span class="em-stat-pill">Khung sư phạm Mỹ</span>
                    <span class="em-stat-pill">Bấm để xem roadmap</span>
                </div>
            </button>`;
        }

        return `<div class="em-track-card text-left opacity-75 cursor-default bg-slate-50/70">
            <div class="flex items-start justify-between gap-3">
                <div class="flex items-center gap-3 min-w-0">
                    <div class="em-track-icon grayscale-[25%]">${escapeHtml(lab.icon || '✨')}</div>
                    <div class="min-w-0">
                        <div class="text-xs font-black uppercase tracking-wider text-fuchsia-500">${escapeHtml(lab.code)}</div>
                        <h3 class="font-black text-slate-700 text-lg md:text-xl leading-tight mt-0.5">${escapeHtml(lab.title)}</h3>
                    </div>
                </div>
                <span class="inline-flex shrink-0 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-[11px] font-black text-violet-500">Sắp ra mắt</span>
            </div>
            <p class="mt-3 text-sm md:text-base font-bold text-slate-500 leading-relaxed">${escapeHtml(lab.description)}</p>
            <div class="mt-4 flex flex-wrap gap-2 text-[11px] font-black text-slate-400">
                <span class="em-stat-pill">Dự kiến ${journeyCount} hành trình</span>
            </div>
        </div>`;
    }).join('');

    host.innerHTML = `<div class="w-full max-w-6xl mx-auto">
        <section class="em-hero">
            <div class="min-w-0 flex-1">
                <div class="text-[11px] md:text-xs font-black uppercase tracking-[.26em] text-fuchsia-600">MATH LAB • GRADE 1</div>
                <h2 class="mt-1 text-2xl md:text-4xl font-black text-slate-900">Math Lab - Toán tư duy Mỹ</h2>
                <p class="mt-2 max-w-4xl text-sm md:text-base font-bold text-slate-600 leading-relaxed">Cùng kiến thức Toán 1 Việt Nam, nhưng con học bằng khám phá, thao tác, mô hình, giải thích và nhiều cách giải.</p>
                <div class="mt-3 text-sm md:text-base font-black text-fuchsia-700">Khám phá • Mô hình • Nhiều cách giải</div>
            </div>
            <div class="shrink-0 min-w-[210px] rounded-3xl border border-violet-200 bg-white/75 px-5 py-4 text-center shadow-sm">
                <div class="text-3xl md:text-4xl font-black text-violet-600">${plannedTotal}</div>
                <div class="mt-1 text-xs md:text-sm font-black text-violet-600">hành trình trong khung Grade 1</div>
                <div class="mt-1 text-[11px] font-bold text-slate-400">${openJourneyCount} hành trình đang mở</div>
            </div>
        </section>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">${cards}</div>
    </div>`;
}

function epsilonActivityNarration_(activity) {
    if (!activity) return '';
    const teacher = String(activity.teacher_audio || activity.teacher || '').trim();
    const instruction = String(activity.instruction_audio || activity.prompt || '').trim();
    if (!teacher) return instruction;
    if (!instruction || instruction === teacher) return teacher;
    return `${teacher} ${instruction}`;
}

function speakNumberSenseActivity_() {
    speakVietnamese(epsilonActivityNarration_(currentNumberSenseActivity_()), 0.94);
}

function speakOperationSenseActivity_() {
    speakVietnamese(epsilonActivityNarration_(currentOperationSenseActivity_()), 0.94);
}


// ==========================================
// GENERIC GRADE 1 MATH LAB ENGINE - 12.3 to 12.6
// Mỗi hành trình có chu trình: mô hình -> lựa chọn -> giải thích -> transfer.
// Trả lời sai không khóa đáp án: hệ thống tăng dần gợi ý rồi cho thử lại.
// ==========================================
let activeGenericLab = null;
let genericLabHintLevel_ = 0;
let genericLabWrongCount_ = 0;
let genericLabSolved_ = false;

function genericLabEvidenceKey_(labCode) {
    const id = String(currentUser?.maHS || 'KHACH').toUpperCase();
    return `epsilon_grade1_${String(labCode || '').replace(/\./g,'_')}_evidence_${id}`;
}

function readGenericLabEvidence_(labCode) {
    try { return JSON.parse(localStorage.getItem(genericLabEvidenceKey_(labCode)) || '{}') || {}; }
    catch (e) { return {}; }
}

function writeGenericLabEvidence_(labCode, data) {
    try { localStorage.setItem(genericLabEvidenceKey_(labCode), JSON.stringify(data || {})); } catch (e) {}
}

function genericLabMasteryLabel_(state) {
    return numberSenseMasteryLabel_(state);
}

function genericLabMasteryClass_(state) {
    return numberSenseMasteryClass_(state);
}

async function loadGenericMathLabTrack_(labCode) {
    const root = await loadEpsilonMuc12Data_();
    const lab = EPSILON_GRADE1_LABS_.find(x => x.code === labCode);
    if (!lab) throw new Error(`Không tìm thấy ${labCode}`);
    const track = (root.tracks || []).find(t => t.display_code === labCode || t.engine === lab.engine);
    if (!track?.content?.journeys?.length) throw new Error(`${labCode} chưa có dữ liệu hành trình`);
    return { lab, track, data: track.content };
}

async function openGenericMathLab_(labCode) {
    stopSpeaking();
    clearInterval(quizTimerInterval);
    setAppShellRootMode_(false);
    setMainTabActive_('discover');
    activeTopicId = 12;
    switchAppView('view-epsilon-method-hub');
    const host = document.getElementById('epsilon-method-content');
    if (host) host.innerHTML = '<div class="py-14 text-center font-black text-violet-600">✨ Đang mở Math Lab...</div>';
    try {
        const {lab, track, data} = await loadGenericMathLabTrack_(labCode);
        activeGenericLab = { labCode, lab, track, data, journeyId:null, activityIndex:0 };
        updateNavTabs('12. Math Lab - Toán tư duy Mỹ','✨',`${lab.code} ${lab.title}`,null);
        renderGenericMathLabHub_();
    } catch (err) {
        if (host) host.innerHTML = `<div class="rounded-3xl border-2 border-rose-200 bg-rose-50 p-6 text-center font-bold text-rose-700">${escapeHtml(err.message)}</div>`;
    }
}

function genericLabJourneyState_(journeyId) {
    if (!activeGenericLab) return {mastery:'not_observed',completed:[],attempts:0,hint_uses:0,transfer_correct:0};
    const ev = readGenericLabEvidence_(activeGenericLab.labCode);
    return ev[journeyId] || {mastery:'not_observed',completed:[],attempts:0,hint_uses:0,transfer_correct:0};
}

function renderGenericMathLabHub_() {
    const host = document.getElementById('epsilon-method-content');
    if (!host || !activeGenericLab) return;
    const {lab, data} = activeGenericLab;
    const evidence = readGenericLabEvidence_(activeGenericLab.labCode);
    const completedJourneys = (data.journeys || []).filter(j => {
        const st = evidence[j.id];
        return st && Array.isArray(st.completed) && st.completed.length >= (j.activities || []).length;
    }).length;
    const cards = (data.journeys || []).map(j => {
        const st = genericLabJourneyState_(j.id);
        const done = Array.isArray(st.completed) ? st.completed.length : 0;
        const total = (j.activities || []).length;
        const pct = total ? Math.round(done/total*100) : 0;
        const standards = (j.standards || []).map(s=>`<span class="em-stat-pill">${escapeHtml(s)}</span>`).join('');
        const practices = (j.math_practices || []).map(s=>`<span class="em-stat-pill">${escapeHtml(s)}</span>`).join('');
        return `<button onclick="startGenericMathLabJourney_('${escapeHtml(j.id)}')" class="em-track-card text-left">
            <div class="flex items-start justify-between gap-3">
                <div class="flex items-center gap-3 min-w-0">
                    <div class="em-track-icon">${escapeHtml(j.icon || lab.icon || '✨')}</div>
                    <div class="min-w-0"><div class="text-xs font-black uppercase tracking-wider text-fuchsia-600">${escapeHtml(lab.code)}.${j.order}</div><h3 class="font-black text-slate-900 text-lg md:text-xl leading-tight">${escapeHtml(j.title)}</h3></div>
                </div>
                <span class="inline-flex rounded-full border px-3 py-1 text-[11px] font-black ${genericLabMasteryClass_(st.mastery)}">${escapeHtml(genericLabMasteryLabel_(st.mastery))}</span>
            </div>
            <p class="mt-3 text-sm md:text-base font-bold text-slate-600 leading-relaxed">${escapeHtml(j.goal)}</p>
            <div class="mt-3 flex flex-wrap gap-1.5">${standards}${practices}</div>
            <div class="mt-4 h-2 rounded-full bg-slate-100 overflow-hidden"><div class="h-full bg-gradient-to-r from-fuchsia-400 to-violet-500" style="width:${pct}%"></div></div>
            <div class="mt-1 text-[11px] font-black text-slate-400">${done}/${total} hoạt động</div>
        </button>`;
    }).join('');

    host.innerHTML = `<div class="w-full max-w-6xl mx-auto">
        <div class="mb-3"><button onclick="openEpsilonMethodHub_()" class="ns-secondary-btn">← Math Lab Grade 1</button></div>
        <section class="em-hero">
            <div class="min-w-0 flex-1">
                <div class="text-[11px] md:text-xs font-black uppercase tracking-[.26em] text-fuchsia-600">${escapeHtml(lab.code)} • MATH LAB • GRADE 1</div>
                <h2 class="mt-1 text-2xl md:text-4xl font-black text-slate-900">${escapeHtml(lab.title)}</h2>
                <p class="mt-2 max-w-4xl text-sm md:text-base font-bold text-slate-600 leading-relaxed">${escapeHtml(lab.description)}</p>
                <div class="mt-3 text-sm md:text-base font-black text-fuchsia-700">${escapeHtml(data.pedagogy || 'Thao tác → mô hình → giải thích → kí hiệu → transfer')}</div>
            </div>
            <div class="shrink-0 min-w-[210px] rounded-3xl border border-violet-200 bg-white/75 px-5 py-4 text-center shadow-sm">
                <div class="text-3xl md:text-4xl font-black text-violet-600">${completedJourneys}/${(data.journeys||[]).length}</div>
                <div class="mt-1 text-xs md:text-sm font-black text-violet-600">hành trình hoàn thành</div>
                <div class="mt-1 text-[11px] font-bold text-slate-400">Theo dõi theo từng kỹ năng nhỏ</div>
            </div>
        </section>
        <div class="mt-4 rounded-[24px] border border-amber-200 bg-amber-50/70 px-4 py-3 text-sm md:text-base font-bold text-amber-900">
            🐰 <strong>Cách học:</strong> con nhìn và thao tác với mô hình trước, tự chọn cách nghĩ, được gợi ý nếu cần, rồi mới giải thích bằng kí hiệu. Sai không bị khóa bài; con được thử lại.
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">${cards}</div>
    </div>`;
}

function startGenericMathLabJourney_(journeyId) {
    if (!activeGenericLab) return;
    const journey = (activeGenericLab.data.journeys || []).find(j => j.id === journeyId);
    if (!journey) return;
    activeGenericLab.journeyId = journeyId;
    activeGenericLab.activityIndex = 0;
    genericLabHintLevel_ = 0;
    genericLabWrongCount_ = 0;
    genericLabSolved_ = false;
    updateNavTabs('12. Math Lab - Toán tư duy Mỹ','✨',`${activeGenericLab.lab.code} ${activeGenericLab.lab.title}`,`${journey.order}. ${journey.title}`);
    renderGenericMathLabActivity_();
}

function currentGenericLabJourney_() {
    if (!activeGenericLab?.journeyId) return null;
    return (activeGenericLab.data.journeys || []).find(j => j.id === activeGenericLab.journeyId) || null;
}

function currentGenericLabActivity_() {
    const j = currentGenericLabJourney_();
    return j?.activities?.[activeGenericLab.activityIndex] || null;
}

function genericLabSpeakCurrent_() {
    const a = currentGenericLabActivity_();
    if (!a) return;
    const teacher = String(a.teacher_audio || a.teacher || '').trim();
    const prompt = String(a.instruction_audio || a.prompt || '').trim();
    speakVietnamese(`${teacher}${teacher && prompt ? ' ' : ''}${prompt}`,0.94);
}

function genericBaseTenHtml_(tens=0, ones=0) {
    const rods = Array.from({length:Math.max(0,Number(tens)||0)},()=>`<div class="grid grid-rows-5 grid-cols-2 gap-[2px] rounded-xl border-2 border-violet-300 bg-violet-50 p-1 w-10 md:w-12">${Array.from({length:10},()=>'<span class="block aspect-square rounded-[3px] bg-violet-400"></span>').join('')}</div>`).join('');
    const dots = Array.from({length:Math.max(0,Number(ones)||0)},()=>'<span class="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-pink-300 bg-pink-100 inline-flex"></span>').join('');
    return `<div class="flex flex-wrap items-end justify-center gap-3"><div class="flex flex-wrap justify-center gap-2">${rods}</div><div class="flex flex-wrap justify-center gap-2 max-w-[260px]">${dots}</div></div>`;
}

function genericNumberLineHtml_(v) {
    const start=Number(v.start||0), end=Number(v.end||10), step=Number(v.step||1);
    const nums=[]; for(let n=start;n<=end;n+=step) nums.push(n);
    return `<div class="flex flex-wrap items-center justify-center">${nums.map((n,i)=>`<div class="flex items-center"><div class="w-11 h-11 md:w-12 md:h-12 rounded-full border-2 ${n===Number(v.highlight)?'bg-pink-500 border-pink-500 text-white':'bg-white border-violet-200 text-violet-700'} flex items-center justify-center font-black text-lg">${v.hide_highlight_label && n===Number(v.highlight)?'?':n}</div>${i<nums.length-1?'<div class="w-5 md:w-7 h-1 bg-violet-200"></div>':''}</div>`).join('')}</div>`;
}

function genericClockSvg_(hour=3, minute=0) {
    const cx=100, cy=100, r=78;
    const minAng=(Number(minute||0)*6-90)*Math.PI/180;
    const hourAng=((Number(hour||0)%12)*30 + Number(minute||0)*0.5 - 90)*Math.PI/180;
    const hx=cx+Math.cos(hourAng)*42, hy=cy+Math.sin(hourAng)*42;
    const mx=cx+Math.cos(minAng)*62, my=cy+Math.sin(minAng)*62;
    const labels=Array.from({length:12},(_,i)=>{const n=i+1; const a=(n*30-90)*Math.PI/180; return `<text x="${cx+Math.cos(a)*60}" y="${cy+Math.sin(a)*60+5}" text-anchor="middle" font-size="12" font-weight="800" fill="#6d28d9">${n}</text>`}).join('');
    return `<svg viewBox="0 0 200 200" class="w-[210px] md:w-[250px] h-auto"><circle cx="100" cy="100" r="82" fill="#fff" stroke="#ddd6fe" stroke-width="6"/>${labels}<line x1="100" y1="100" x2="${hx}" y2="${hy}" stroke="#ec4899" stroke-width="7" stroke-linecap="round"/><line x1="100" y1="100" x2="${mx}" y2="${my}" stroke="#7c3aed" stroke-width="5" stroke-linecap="round"/><circle cx="100" cy="100" r="6" fill="#111827"/></svg>`;
}

function genericBarChartHtml_(data) {
    const max=Math.max(1,...(data||[]).map(x=>Number(x.count||0)));
    return `<div class="flex items-end justify-center gap-5 h-[220px]">${(data||[]).map(x=>`<div class="flex flex-col items-center justify-end h-full"><div class="font-black text-violet-700 mb-1">${x.count}</div><div class="w-12 md:w-16 rounded-t-xl bg-violet-300 border-2 border-violet-400" style="height:${40+Number(x.count||0)/max*120}px"></div><div class="mt-2 font-black text-slate-600 text-sm">${escapeHtml(x.label)}</div></div>`).join('')}</div>`;
}

function renderGenericLabVisual_(a) {
    const v=a?.visual||{}, k=v.kind||'';
    if(k==='base_ten') return `<div>${genericBaseTenHtml_(v.tens,v.ones)}${v.action==='bundle'?'<div class="mt-3 text-center text-sm font-black text-violet-700">10 đơn vị ↔ 1 chục</div>':''}</div>`;
    if(k==='ten_frame') { const f=Math.max(0,Math.min(10,Number(v.filled||0))); return `<div class="grid grid-cols-5 gap-2 max-w-[330px] mx-auto">${Array.from({length:10},(_,i)=>`<div class="aspect-square rounded-xl border-2 ${i<f?'bg-pink-100 border-pink-300':'bg-white border-sky-200'} flex items-center justify-center">${i<f?'<span class="w-5 h-5 rounded-full bg-pink-500"></span>':''}</div>`).join('')}</div>`; }
    if(k==='place_value_card') return buildTopic3PlaceValueCard_(Number(v.number||0),'violet');
    if(k==='compare_base_ten') return `<div class="grid grid-cols-2 gap-5"><div><div class="text-center text-xl font-black text-violet-700 mb-2">${v.left}</div>${genericBaseTenHtml_(Math.floor(v.left/10),v.left%10)}</div><div><div class="text-center text-xl font-black text-rose-600 mb-2">${v.right}</div>${genericBaseTenHtml_(Math.floor(v.right/10),v.right%10)}</div></div>`;
    if(k==='compare_numbers') return `<div class="flex items-center justify-center gap-5"><div class="rounded-3xl border-2 border-violet-200 bg-violet-50 px-8 py-6 text-4xl font-black text-violet-700">${v.left}</div><div class="text-4xl font-black text-pink-500">?</div><div class="rounded-3xl border-2 border-rose-200 bg-rose-50 px-8 py-6 text-4xl font-black text-rose-700">${v.right}</div></div>`;
    if(k==='representation_pair') return `<div class="grid md:grid-cols-2 gap-4 items-center"><div class="rounded-2xl border border-violet-200 bg-white p-4">${genericBaseTenHtml_(Math.floor(v.number/10),v.number%10)}</div><div class="text-center text-6xl font-black text-violet-700">${v.number}</div></div>`;
    if(k==='number_line'||k==='number_line_jump') return genericNumberLineHtml_(v.kind==='number_line_jump'?{start:Number(v.start)-2,end:Number(v.start)+Number(v.jump)+2,highlight:Number(v.start)+Number(v.jump)}:v);
    if(k==='number_cards') return `<div class="flex flex-wrap justify-center gap-3">${(v.numbers||[]).map(n=>`<div class="w-20 h-20 rounded-2xl border-2 border-violet-200 bg-white flex items-center justify-center text-3xl font-black text-violet-700">${n}</div>`).join('')}</div>`;
    if(k==='part_whole') return buildMuc2NumberBond_(v.whole,v.left,v.right);
    if(k==='base_ten_add'||k==='base_ten_sub') { const start=Number(v.start||0), delta=Number(k==='base_ten_add'?v.add:v.take); return `<div class="space-y-4"><div><div class="text-center font-black text-slate-500 mb-2">Ban đầu: ${start}</div>${genericBaseTenHtml_(Math.floor(start/10),start%10)}</div><div class="text-center text-3xl font-black ${k==='base_ten_add'?'text-emerald-600':'text-rose-600'}">${k==='base_ten_add'?'+':'−'} ${delta}</div></div>`; }
    if(k==='equation') return `<div class="text-center text-4xl md:text-5xl font-black text-violet-700">${escapeHtml(v.text||'')}</div>`;
    if(k==='strategy_cards') return `<div class="grid gap-3">${(v.items||[]).map(x=>`<div class="rounded-2xl border-2 border-violet-100 bg-white px-4 py-3 text-left font-black text-slate-700">${escapeHtml(x)}</div>`).join('')}</div>`;
    if(k==='length_bars') return `<div class="space-y-4 max-w-xl mx-auto">${(v.items||[]).map(x=>`<div class="flex items-center gap-3"><span class="w-8 font-black text-violet-700">${escapeHtml(x.label)}</span><div class="h-8 rounded-xl bg-sky-200 border-2 border-sky-300" style="width:${40+Number(x.length||1)*34}px"></div></div>`).join('')}</div>`;
    if(k==='length_offset') return `<div class="space-y-5 max-w-xl mx-auto"><div class="ml-4 h-8 rounded-xl bg-violet-200 border-2 border-violet-300" style="width:${60+Number(v.a||1)*34}px"></div><div class="ml-24 h-8 rounded-xl bg-rose-200 border-2 border-rose-300" style="width:${60+Number(v.b||1)*34}px"></div></div>`;
    if(k==='logic_chain') return `<div class="flex flex-wrap items-center justify-center gap-3">${(v.items||[]).map((x,i)=>`<div class="rounded-2xl border-2 border-violet-200 bg-white px-5 py-3 font-black text-violet-700">${escapeHtml(x)}</div>${i<(v.items||[]).length-1?'<span class="text-2xl text-pink-500">→</span>':''}`).join('')}</div>`;
    if(k==='unit_measure') { const units=Number(v.units||0); const sym=v.unit_symbol||''; return `<div class="flex flex-wrap justify-center gap-0">${Array.from({length:units},(_,i)=>`<div class="w-12 h-12 border-2 border-sky-300 bg-sky-100 flex items-center justify-center font-black text-sky-700">${sym||i+1}</div>`).join('')}</div>`; }
    if(k==='measure_methods') return `<div class="grid grid-cols-2 gap-3">${(v.methods||[]).map((m,i)=>`<div class="rounded-2xl border-2 border-violet-100 bg-white p-3 text-center"><div class="flex justify-center ${i===1?'gap-2':i===2?'-space-x-3':'gap-0'}">${Array.from({length:4},()=>'<span class="w-10 h-10 border-2 border-sky-300 bg-sky-100"></span>').join('')}</div><div class="mt-2 font-black text-sm text-slate-600">${escapeHtml(m)}</div></div>`).join('')}</div>`;
    if(k==='measure_error') { const err=v.error; const gap=err==='gap'?'gap-3':err==='overlap'?'-space-x-3':'gap-0'; return `<div class="flex justify-center ${gap}">${Array.from({length:5},(_,i)=>`<span class="h-12 border-2 border-rose-300 bg-rose-100 ${err==='unequal'&&i===2?'w-16':'w-11'}"></span>`).join('')}</div>`; }
    if(k==='estimate_bar') return `<div class="mx-auto h-10 rounded-xl bg-amber-200 border-2 border-amber-300" style="width:${80+Number(v.approx||1)*34}px"></div>`;
    if(k==='clock') return genericClockSvg_(v.hour,v.minute);
    if(k==='digital_clock') return `<div class="text-center text-6xl font-black tracking-wider text-violet-700 bg-white border-2 border-violet-200 rounded-3xl px-8 py-5">${escapeHtml(v.text||'')}</div>`;
    if(k==='calendar_strip') return `<div class="flex justify-center gap-2">${(v.days||[]).map(d=>`<div class="w-16 h-16 rounded-2xl border-2 ${d===v.highlight?'bg-pink-500 border-pink-500 text-white':'bg-white border-violet-200 text-violet-700'} flex items-center justify-center text-2xl font-black">${d}</div>`).join('')}</div>`;
    if(k==='week_strip') { const days=['Thứ Hai','Thứ Ba','Thứ Tư','Thứ Năm','Thứ Sáu','Thứ Bảy','Chủ nhật']; return `<div class="grid grid-cols-4 md:grid-cols-7 gap-2">${days.map(d=>`<div class="rounded-xl border-2 ${d===v.highlight?'bg-pink-500 text-white border-pink-500':'bg-white text-violet-700 border-violet-200'} px-2 py-3 text-center text-xs font-black">${d}</div>`).join('')}</div>`; }
    if(k==='pictograph') return `<div class="space-y-2">${(v.data||[]).map(x=>`<div class="flex items-center gap-3"><div class="w-20 text-right font-black text-slate-600">${escapeHtml(x.label)}</div><div class="flex flex-wrap gap-1 text-3xl">${Array.from({length:Number(x.count||0)},()=>escapeHtml(x.emoji||'●')).join('')}</div></div>`).join('')}</div>`;
    if(k==='bar_chart') return genericBarChartHtml_(v.data);
    if(k==='data_table') return `<div class="max-w-md mx-auto overflow-hidden rounded-2xl border-2 border-violet-100 bg-white">${(v.rows||[]).map(r=>`<div class="grid grid-cols-2 border-b last:border-b-0 border-violet-100"><div class="px-4 py-3 font-black text-slate-600">${escapeHtml(r.label)}</div><div class="px-4 py-3 text-center font-black text-violet-700">${escapeHtml(r.value)}</div></div>`).join('')}</div>`;
    if(k==='shape') return `<div class="flex justify-center">${muc4ShapeSvg_(v.shape,{size:180,color:v.color||'#c4b5fd',rotate:v.rotate||0})}</div>`;
    if(k==='shape_set') return `<div class="grid grid-cols-4 gap-3">${(v.shapes||[]).map((s,i)=>`<div class="rounded-2xl bg-white border-2 border-violet-100 p-2 text-center"><div class="font-black text-pink-600">${String.fromCharCode(65+i)}</div>${muc4ShapeSvg_(s,{size:90,color:['#fde68a','#bfdbfe','#bbf7d0','#fecdd3'][i%4],rotate:(v.rotates||[])[i]||0})}</div>`).join('')}</div>`;
    if(k==='real_object_shape') return `<div class="text-center"><div class="text-8xl">${escapeHtml(v.emoji||'📦')}</div>${v.shape?`<div class="mt-3">${muc4ShapeSvg_(v.shape,{size:110,color:'#dbeafe'})}</div>`:''}${v.solid?`<div class="mt-3">${muc4SolidSvg_(v.solid,{size:130})}</div>`:''}</div>`;
    if(k==='compose_shapes') return `<div class="flex items-center justify-center gap-3">${(v.parts||[]).map((s,i)=>muc4ShapeSvg_(s,{size:100,color:['#fecdd3','#bfdbfe'][i%2],rotate:i?180:0})).join('')}<span class="text-3xl font-black text-violet-500">→</span>${muc4ShapeSvg_(v.result,{size:130,color:'#bbf7d0'})}</div>`;
    if(k==='compose_scene') return muc4ComposeSceneSvg_(v.scene,v.missing,true);
    if(k==='pattern') return muc4AdvancedCountSvg_(v.pattern);
    if(k==='solid') return `<div class="flex justify-center">${muc4SolidSvg_(v.solid,{size:180,fill1:'#dbeafe',fill2:'#93c5fd',fill3:'#60a5fa'})}</div>`;
    if(k==='position') return `<div class="flex items-center justify-center gap-20 text-7xl"><span>${escapeHtml(v.left||'')}</span><span>${escapeHtml(v.right||'')}</span></div>`;
    if(k==='inside_outside') return `<div class="relative w-64 h-44 mx-auto rounded-[28px] border-4 border-amber-300 bg-amber-50 flex items-center justify-center"><div class="absolute -top-8 text-5xl">${escapeHtml(v.container||'📦')}</div><div class="text-7xl">${escapeHtml(v.inside||'⚽')}</div></div>`;
    if(k==='shape_pair') return `<div class="grid grid-cols-2 gap-8">${muc4ShapeSvg_(v.left,{size:145,color:'#bfdbfe'})}${muc4ShapeSvg_(v.right,{size:145,color:'#fecdd3',rotate:v.right_rotate||0})}</div>`;
    if(k==='partition_options') return `<svg viewBox="0 0 300 180" class="w-full max-w-[380px]"><rect x="30" y="35" width="240" height="110" rx="8" fill="#f5f3ff" stroke="#7c3aed" stroke-width="4"/><line x1="150" y1="35" x2="150" y2="145" stroke="#ec4899" stroke-width="4" stroke-dasharray="8 6"/></svg>`;
    if(k==='circle_partition') return `<svg viewBox="0 0 220 220" class="w-full max-w-[260px]"><circle cx="110" cy="110" r="82" fill="#fdf2f8" stroke="#ec4899" stroke-width="5"/><line x1="28" y1="110" x2="192" y2="110" stroke="#7c3aed" stroke-width="4" stroke-dasharray="8 6"/><circle cx="110" cy="110" r="5" fill="#7c3aed"/></svg>`;
    if(k==='partition_compare') return `<div class="grid grid-cols-2 gap-5"><div>${renderGenericLabVisual_({visual:{kind:'partition_options'}})}</div><div><svg viewBox="0 0 300 180" class="w-full"><rect x="30" y="35" width="240" height="110" rx="8" fill="#ecfeff" stroke="#0891b2" stroke-width="4"/><line x1="30" y1="90" x2="270" y2="90" stroke="#ec4899" stroke-width="4" stroke-dasharray="8 6"/></svg></div></div>`;
    if(k==='story') { const start=Number(v.start||0), change=Number(v.change||0), obj=v.object||'●'; return `<div class="text-center"><div class="text-sm font-black text-slate-500 mb-2">BAN ĐẦU</div><div class="text-4xl leading-relaxed">${Array.from({length:start},()=>escapeHtml(obj)).join(' ')}</div><div class="my-3 text-xl font-black ${v.action==='take'?'text-rose-600':'text-emerald-600'}">${v.action==='take'?'Bớt':'Thêm'} ${change}</div><div class="text-sm font-bold text-slate-400">Con hãy hình dung hành động đang xảy ra.</div></div>`; }
    if(k==='compare_groups') { const l=Number(v.left||0),r=Number(v.right||0),lo=v.left_object||'🔵',ro=v.right_object||'🟡'; return `<div class="grid grid-cols-2 gap-5"><div class="rounded-2xl border-2 border-violet-100 bg-white p-4 text-center"><div class="font-black text-violet-700 mb-2">Nhóm A</div><div class="text-3xl ${v.spread?'tracking-[.35em]':''}">${Array.from({length:l},()=>escapeHtml(lo)).join(' ')}</div></div><div class="rounded-2xl border-2 border-rose-100 bg-white p-4 text-center"><div class="font-black text-rose-700 mb-2">Nhóm B</div><div class="text-3xl">${Array.from({length:r},()=>escapeHtml(ro)).join(' ')}</div></div></div>`; }
    if(k==='equation_set') return `<div class="grid grid-cols-2 gap-3">${(v.items||[]).map(x=>`<div class="rounded-2xl border-2 border-violet-100 bg-white px-3 py-4 text-center text-xl font-black text-violet-700">${escapeHtml(x)}</div>`).join('')}</div>`;
    return `<div class="rounded-2xl border border-violet-100 bg-white p-6 text-center font-black text-violet-600">Mô hình toán học</div>`;
}

function genericLabChoiceButtons_(a) {
    return (a.choices || []).map((c,i)=>`<button data-value="${escapeHtml(String(c))}" onclick="genericLabChooseFromButton_(this)" class="generic-lab-option w-full min-h-[60px] md:min-h-[68px] px-3 py-2.5 rounded-2xl border-2 border-pink-200 bg-pink-50/40 hover:bg-pink-100/70 font-black text-slate-800 text-sm md:text-base transition-all"><span class="text-pink-600 mr-1.5">${String.fromCharCode(65+i)}.</span>${escapeHtml(String(c))}</button>`).join('');
}

function renderGenericMathLabActivity_() {
    const host=document.getElementById('epsilon-method-content');
    const j=currentGenericLabJourney_(), a=currentGenericLabActivity_();
    if(!host||!j||!a) return;
    genericLabHintLevel_=0; genericLabWrongCount_=0; genericLabSolved_=false;
    const total=j.activities.length, idx=activeGenericLab.activityIndex;
    host.innerHTML=`<div class="w-full max-w-6xl mx-auto">
        <div class="flex items-center justify-between gap-3 mb-3 flex-wrap"><button onclick="renderGenericMathLabHub_()" class="ns-secondary-btn">← Bản đồ ${escapeHtml(activeGenericLab.lab.code)}</button><div class="text-sm font-black text-violet-600">Hoạt động ${idx+1}/${total}</div></div>
        <div class="h-2 rounded-full bg-slate-100 overflow-hidden mb-4"><div class="h-full bg-gradient-to-r from-fuchsia-400 to-violet-500" style="width:${Math.round((idx+1)/total*100)}%"></div></div>
        <div class="rounded-[28px] border-2 border-violet-100 bg-gradient-to-br from-white via-violet-50/40 to-pink-50/40 p-4 md:p-5 shadow-sm">
            <div class="flex flex-wrap items-center justify-between gap-3"><div><div class="text-xs font-black uppercase tracking-wider text-fuchsia-600">${escapeHtml(j.icon||'✨')} ${escapeHtml(j.title)}</div><h2 class="mt-1 text-xl md:text-2xl font-black text-slate-900">${escapeHtml(a.teacher||'')}</h2></div><button onclick="genericLabSpeakCurrent_()" class="ns-secondary-btn">🔊 Nghe cô đọc</button></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-4 mt-4 items-stretch">
            <div class="min-h-[330px] rounded-[28px] border-2 border-pink-100 bg-gradient-to-br from-amber-50 via-white to-sky-50 p-4 md:p-6 flex items-center justify-center overflow-hidden shadow-sm">${renderGenericLabVisual_(a)}</div>
            <div class="rounded-[28px] border border-pink-100 bg-white p-4 md:p-5 flex flex-col justify-center shadow-sm">
                <h3 class="text-lg md:text-xl font-black text-slate-900 text-center leading-snug">${escapeHtml(a.prompt||'')}</h3>
                <div class="grid grid-cols-2 gap-2.5 mt-4">${genericLabChoiceButtons_(a)}</div>
                <div id="generic-lab-feedback" class="mt-3"></div>
                <div class="mt-4 flex items-center justify-between gap-2"><button onclick="genericLabShowHint_()" class="ns-secondary-btn">💡 Gợi ý</button><button onclick="renderGenericMathLabActivity_()" class="ns-secondary-btn">↻ Làm lại</button><button id="generic-lab-next" onclick="genericLabNext_()" class="hidden ns-primary-btn">Tiếp tục →</button></div>
            </div>
        </div>
    </div>`;
}

function genericLabShowHint_() {
    const a=currentGenericLabActivity_(); if(!a||genericLabSolved_) return;
    const hints=a.hints||[]; if(!hints.length) return;
    const idx=Math.min(genericLabHintLevel_,hints.length-1); genericLabHintLevel_++;
    const fb=document.getElementById('generic-lab-feedback');
    if(fb) fb.innerHTML=`<div class="rounded-2xl border-2 border-amber-200 bg-amber-50 px-4 py-3 text-sm md:text-base font-black text-amber-800">💡 ${escapeHtml(hints[idx])}</div>`;
    const st=genericLabJourneyState_(activeGenericLab.journeyId); st.hint_uses=(st.hint_uses||0)+1; saveGenericLabJourneyState_(st);
    speakVietnamese((a.hints_audio||hints)[idx]||hints[idx],0.94);
}

function saveGenericLabJourneyState_(state) {
    const ev=readGenericLabEvidence_(activeGenericLab.labCode); ev[activeGenericLab.journeyId]=state; writeGenericLabEvidence_(activeGenericLab.labCode,ev);
}

function genericLabChooseFromButton_(btn) {
    genericLabChoose_(btn?.dataset?.value ?? '');
}

function genericLabChoose_(selected) {
    const a=currentGenericLabActivity_(); if(!a||genericLabSolved_) return;
    const selectedStr=String(selected), answerStr=String(a.answer);
    const fb=document.getElementById('generic-lab-feedback');
    if(selectedStr===answerStr) {
        genericLabSolved_=true;
        document.querySelectorAll('.generic-lab-option').forEach(b=>{ b.disabled=true; if(String(b.dataset.value)===answerStr){b.classList.remove('bg-pink-50/40','border-pink-200');b.classList.add('bg-emerald-100','border-emerald-400','text-emerald-900');}});
        const st=genericLabJourneyState_(activeGenericLab.journeyId); st.completed=Array.isArray(st.completed)?st.completed:[]; if(!st.completed.includes(a.id)) st.completed.push(a.id); st.attempts=(st.attempts||0)+genericLabWrongCount_; if(a.transfer) st.transfer_correct=(st.transfer_correct||0)+1;
        const total=currentGenericLabJourney_().activities.length;
        if(st.completed.length>=total) st.mastery=(st.hint_uses||0)>0?'supported':((st.transfer_correct||0)>0?'generalized':'independent'); else st.mastery=(st.hint_uses||0)>0?'supported':'emerging';
        saveGenericLabJourneyState_(st);
        if(fb) fb.innerHTML=`<div class="rounded-2xl border-2 border-emerald-300 bg-emerald-50 px-4 py-3 text-sm md:text-base font-black text-emerald-800">✅ ${escapeHtml(a.success||'Đúng rồi!')}${a.explanation?`<div class="mt-2 text-slate-700">${escapeHtml(a.explanation)}</div>`:''}${a.reflection?`<div class="mt-2 rounded-xl bg-white/70 px-3 py-2 text-violet-700">🗣️ ${escapeHtml(a.reflection)}</div>`:''}</div>`;
        document.getElementById('generic-lab-next')?.classList.remove('hidden');
        speakVietnamese(a.success_audio||a.success||'Đúng rồi!',0.94);
    } else {
        genericLabWrongCount_++;
        const hints=a.hints||[]; const idx=Math.min(genericLabWrongCount_-1,hints.length-1); const hint=hints[idx]||'Con nhìn lại mô hình rồi thử lại nhé.';
        if(fb) fb.innerHTML=`<div class="rounded-2xl border-2 border-rose-200 bg-rose-50 px-4 py-3 text-sm md:text-base font-black text-rose-700">Chưa khớp rồi. <span class="text-amber-800">${escapeHtml(hint)}</span><div class="mt-1 text-xs text-slate-500">Con vẫn được chọn lại, chưa khóa đáp án.</div></div>`;
        speakVietnamese(`${a.wrong_audio||'Chưa khớp rồi.'} ${hint}`,0.94);
    }
}

function genericLabNext_() {
    if(!activeGenericLab||!genericLabSolved_) return;
    const j=currentGenericLabJourney_();
    if(activeGenericLab.activityIndex < j.activities.length-1) { activeGenericLab.activityIndex++; renderGenericMathLabActivity_(); return; }
    renderGenericMathLabJourneyComplete_();
}

function renderGenericMathLabJourneyComplete_() {
    const host=document.getElementById('epsilon-method-content'), j=currentGenericLabJourney_(); if(!host||!j) return;
    const st=genericLabJourneyState_(j.id);
    const next=(activeGenericLab.data.journeys||[]).find(x=>Number(x.order)===Number(j.order)+1);
    host.innerHTML=`<div class="w-full max-w-3xl mx-auto text-center py-8"><div class="text-7xl">🌟</div><h2 class="mt-3 text-2xl md:text-3xl font-black text-violet-700">Con vừa hoàn thành “${escapeHtml(j.title)}”!</h2><p class="mt-3 font-bold text-slate-600 leading-relaxed">${escapeHtml(j.goal)}</p><div class="mt-4 inline-flex rounded-full border px-4 py-2 text-sm font-black ${genericLabMasteryClass_(st.mastery)}">${escapeHtml(genericLabMasteryLabel_(st.mastery))}</div><div class="mt-5 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-left"><div class="font-black text-amber-800">Bằng chứng học tập</div><ul class="mt-2 list-disc pl-5 text-sm font-bold text-slate-600">${(j.evidence||[]).map(e=>`<li>${escapeHtml(e)}</li>`).join('')}</ul></div><div class="mt-6 flex flex-wrap justify-center gap-3"><button onclick="renderGenericMathLabHub_()" class="ns-secondary-btn">← Bản đồ ${escapeHtml(activeGenericLab.lab.code)}</button>${next?`<button onclick="startGenericMathLabJourney_('${escapeHtml(next.id)}')" class="ns-primary-btn">Hành trình tiếp theo →</button>`:''}</div></div>`;
}

// EPSILON METHOD 12.1 - NUMBER SENSE
// Trải nghiệm -> thao tác -> nhìn thấy -> diễn đạt -> ký hiệu -> transfer
// ==========================================
const EPSILON_MUC12_DATA_FILE = 'assets/data/Toan 1 - Muc 12 part 1.json';
let epsilonMuc12DataCache = null;
let numberSenseDataCache = null;
let activeNumberSense = null;
let numberSenseHintLevel = 0;
let numberSenseTouched = new Set();
let numberSenseBuildCount = 0;
let numberSenseFrameFilled = new Set();
let numberSenseFlashTimer = null;

async function loadEpsilonMuc12Data_() {
    if (epsilonMuc12DataCache) return epsilonMuc12DataCache;
    const res = await fetch(EPSILON_MUC12_DATA_FILE, { cache: 'no-store' });
    if (!res.ok) throw new Error('Không thể tải dữ liệu Mục 12');
    const data = await res.json();
    if (!data || Number(data.topic_id) !== 12 || !Array.isArray(data.tracks)) throw new Error('Dữ liệu Mục 12 chưa đúng cấu trúc');
    epsilonMuc12DataCache = data;
    return data;
}

async function loadNumberSenseData_() {
    if (numberSenseDataCache) return numberSenseDataCache;
    const root = await loadEpsilonMuc12Data_();
    const track = root.tracks.find(t => t.internal_id === 'EPSILON_NUMBER_SENSE' || t.engine === 'number_sense');
    const data = track?.content;
    if (!data || !Array.isArray(data.journeys)) throw new Error('Dữ liệu 12.1 chưa đúng cấu trúc');
    numberSenseDataCache = data;
    return data;
}

function numberSenseEvidenceKey_() {
    const id = String(currentUser?.maHS || 'KHACH').toUpperCase();
    return `epsilon_ns1_evidence_${id}`;
}

function readNumberSenseEvidence_() {
    try { return JSON.parse(localStorage.getItem(numberSenseEvidenceKey_()) || '{}') || {}; }
    catch (e) { return {}; }
}

function writeNumberSenseEvidence_(data) {
    try { localStorage.setItem(numberSenseEvidenceKey_(), JSON.stringify(data || {})); } catch (e) {}
}

function getNumberSenseJourneyState_(journeyId) {
    const ev = readNumberSenseEvidence_();
    return ev[journeyId] || { mastery: 'not_observed', completed: [], attempts: 0, hint_uses: 0, transfer_correct: 0 };
}

function numberSenseMasteryLabel_(state) {
    const map = {
        not_observed: 'Chưa học',
        emerging: 'Đang hình thành',
        supported: 'Làm được khi có hỗ trợ',
        independent: 'Làm được độc lập',
        generalized: 'Hiểu ở dạng khác',
        retained: 'Ghi nhớ bền vững'
    };
    return map[state] || map.not_observed;
}

function numberSenseMasteryClass_(state) {
    if (state === 'generalized' || state === 'retained') return 'bg-emerald-100 text-emerald-700 border-emerald-200';
    if (state === 'independent') return 'bg-sky-100 text-sky-700 border-sky-200';
    if (state === 'supported') return 'bg-amber-100 text-amber-700 border-amber-200';
    if (state === 'emerging') return 'bg-purple-100 text-purple-700 border-purple-200';
    return 'bg-slate-100 text-slate-500 border-slate-200';
}

async function openNumberSenseHub() {
    setAppShellRootMode_(false);
    setMainTabActive_('discover');
    stopSpeaking();
    clearInterval(quizTimerInterval);
    clearTimeout(numberSenseFlashTimer);
    activeBaiHocContext = null;
    activeExamContext = null;
    activeRoadmapContext = null;
    activeTopicId = 12;
    pendingTopicQuiz = null;
    activeNumberSense = null;
    updateNavTabs('12. Math Lab - Toán tư duy Mỹ', '✨', '12.1 Number Sense Lab - Cảm nhận số', null);
    switchAppView('view-number-sense');
    const host = document.getElementById('number-sense-content');
    if (host) host.innerHTML = '<div class="py-16 text-center font-black text-purple-600">🌱 Đang mở thế giới số lượng...</div>';
    try {
        const data = await loadNumberSenseData_();
        renderNumberSenseHub_(data);
    } catch (err) {
        if (host) host.innerHTML = `<div class="rounded-3xl border-2 border-rose-200 bg-rose-50 p-6 text-center font-bold text-rose-700">${escapeHtml(err.message)}</div>`;
    }
}

function renderNumberSenseHub_(data) {
    const host = document.getElementById('number-sense-content');
    if (!host) return;
    const evidence = readNumberSenseEvidence_();
    const cards = data.journeys.map(j => {
        const st = evidence[j.id] || { mastery: 'not_observed', completed: [] };
        const done = Array.isArray(st.completed) ? st.completed.length : 0;
        const total = Array.isArray(j.activities) ? j.activities.length : 0;
        return `<button onclick="startNumberSenseJourney_('${escapeJsString_(j.id)}')" class="ns-journey-card text-left">
            <div class="flex items-start justify-between gap-3">
                <div class="flex items-center gap-3 min-w-0">
                    <div class="ns-journey-icon">${escapeHtml(j.icon || '🌱')}</div>
                    <div class="min-w-0">
                        <div class="text-[11px] font-black uppercase tracking-wider text-purple-500">Hành trình ${j.order}</div>
                        <h3 class="font-black text-slate-800 text-base md:text-lg leading-tight mt-0.5">${escapeHtml(j.title)}</h3>
                    </div>
                </div>
                <span class="shrink-0 rounded-full border px-2 py-1 text-[10px] md:text-xs font-black ${numberSenseMasteryClass_(st.mastery)}">${escapeHtml(numberSenseMasteryLabel_(st.mastery))}</span>
            </div>
            <p class="mt-3 text-xs md:text-sm font-bold text-slate-500 leading-relaxed">${escapeHtml(j.goal)}</p>
            <div class="mt-3 flex items-center gap-2">
                <div class="h-2 flex-1 rounded-full bg-slate-100 overflow-hidden"><div class="h-full rounded-full bg-gradient-to-r from-pink-400 to-purple-500" style="width:${total ? Math.round(done/total*100) : 0}%"></div></div>
                <span class="text-[11px] font-black text-slate-400">${done}/${total}</span>
            </div>
        </button>`;
    }).join('');

    host.innerHTML = `<div class="w-full max-w-6xl mx-auto">
        <div class="mb-3"><button onclick="openEpsilonMethodHub_()" class="ns-secondary-btn">← Mục 12 · Phương pháp mới</button></div>
        <section class="ns-hero">
            <div>
                <div class="text-xs md:text-sm font-black uppercase tracking-[.16em] text-pink-500">Epsilon Number Sense</div>
                <h2 class="mt-1 text-2xl md:text-3xl font-black text-slate-900">Con hiểu số nghĩa là gì</h2>
                <p class="mt-2 max-w-3xl text-sm md:text-base font-bold text-slate-600 leading-relaxed">Không bắt đầu bằng ký hiệu. Con nhìn lượng, thao tác, đếm có ý nghĩa, tự tạo nhóm, rồi mới nối với từ số và chữ số.</p>
            </div>
            <div class="ns-hero-flow">Trải nghiệm → Thao tác → Nhìn thấy → Diễn đạt → Ký hiệu</div>
        </section>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 mt-4">${cards}</div>
    </div>`;
}

async function startNumberSenseJourney_(journeyId) {
    clearTimeout(numberSenseFlashTimer);
    const data = await loadNumberSenseData_();
    const journey = data.journeys.find(j => j.id === journeyId);
    if (!journey) return;
    activeNumberSense = { journeyId, journey, activityIndex: 0, activityStartedAt: Date.now() };
    const st = getNumberSenseJourneyState_(journeyId);
    if (Array.isArray(st.completed) && st.completed.length) {
        const firstOpen = journey.activities.findIndex(a => !st.completed.includes(a.id));
        activeNumberSense.activityIndex = firstOpen >= 0 ? firstOpen : 0;
    }
    updateNavTabs('12. Math Lab - Toán tư duy Mỹ', '✨', '12.1 Number Sense Lab - Cảm nhận số', `${journey.order}. ${journey.title}`);
    renderNumberSenseActivity_();
}

function currentNumberSenseActivity_() {
    return activeNumberSense?.journey?.activities?.[activeNumberSense.activityIndex] || null;
}

function resetNumberSenseInteraction_() {
    clearTimeout(numberSenseFlashTimer);
    numberSenseHintLevel = 0;
    numberSenseTouched = new Set();
    numberSenseBuildCount = 0;
    numberSenseFrameFilled = new Set();
    if (activeNumberSense) activeNumberSense.activityStartedAt = Date.now();
}

function renderNumberSenseActivity_() {
    const host = document.getElementById('number-sense-content');
    const activity = currentNumberSenseActivity_();
    const journey = activeNumberSense?.journey;
    if (!host || !activity || !journey) return;
    resetNumberSenseInteraction_();
    const step = activeNumberSense.activityIndex + 1;
    const total = journey.activities.length;
    const evidenceList = (journey.evidence || []).map(x => `<span class="ns-evidence-pill">✓ ${escapeHtml(x)}</span>`).join('');
    host.innerHTML = `<div class="w-full max-w-5xl mx-auto">
        <div class="flex items-center justify-between gap-3 mb-3">
            <button onclick="openNumberSenseHub()" class="ns-secondary-btn">← 12 hành trình</button>
            <div class="text-center min-w-0">
                <div class="text-xs font-black text-purple-500">${escapeHtml(journey.icon)} Hành trình ${journey.order} · Bước ${step}/${total}</div>
                <h2 class="text-lg md:text-xl font-black text-slate-800 truncate">${escapeHtml(journey.title)}</h2>
            </div>
            <div class="w-[108px] text-right text-xs font-black text-slate-400">${Math.round(step/total*100)}%</div>
        </div>
        <div class="h-2 bg-slate-100 rounded-full overflow-hidden mb-3"><div class="h-full bg-gradient-to-r from-pink-400 via-purple-400 to-sky-400" style="width:${Math.round(step/total*100)}%"></div></div>
        <section class="ns-teacher-bubble"><span class="text-2xl">🐰</span><div class="flex-1 min-w-0"><div class="text-[10px] font-black uppercase tracking-wider text-pink-500">Cô Thỏ Hồng</div><div class="font-extrabold text-slate-700 leading-relaxed">${escapeHtml(activity.teacher || '')}</div></div><button onclick="speakNumberSenseActivity_()" class="ns-listen-btn" title="Nghe lại hướng dẫn">🔊 <span>Nghe cô nói</span></button></section>
        <section class="ns-workspace mt-3">
            <h3 class="text-center text-lg md:text-xl font-black text-slate-900 mb-3">${escapeHtml(activity.prompt || '')}</h3>
            <div id="ns-activity-stage" class="w-full">${renderNumberSenseActivityBody_(activity)}</div>
            <div id="ns-feedback" class="hidden mt-3 rounded-2xl border-2 p-3 text-center font-black"></div>
            <div id="ns-hint" class="hidden mt-3 rounded-2xl border border-amber-200 bg-amber-50 p-3 text-center font-bold text-amber-800"></div>
        </section>
        <div class="mt-3 flex flex-wrap justify-center gap-2">${evidenceList}</div>
        <div class="mt-4 flex items-center justify-between gap-2">
            <button onclick="numberSenseShowHint_()" class="ns-secondary-btn">💡 Gợi ý</button>
            <button onclick="renderNumberSenseActivity_()" class="ns-secondary-btn">↻ Làm lại</button>
            <button id="ns-next-btn" onclick="numberSenseNext_()" class="hidden ns-primary-btn">Tiếp tục →</button>
        </div>
    </div>`;
    activateNumberSenseActivity_(activity);
    if (autoSpeechEnabled) setTimeout(() => speakNumberSenseActivity_(), 120);
}

function nsChoiceButtons_(choices) {
    return `<div class="grid grid-cols-1 sm:grid-cols-3 gap-2 max-w-2xl mx-auto">${(choices || []).map(c => {
        const value = typeof c === 'object' ? c.value : c;
        const label = typeof c === 'object' ? c.label : c;
        return `<button class="ns-choice" onclick="numberSenseChoose_('${escapeJsString_(String(value))}', this)">${escapeHtml(String(label))}</button>`;
    }).join('')}</div>`;
}

function nsObjects_(count, object, extraClass = '') {
    return Array.from({length: Number(count) || 0}, (_, i) => `<span class="ns-static-object ${extraClass}" data-i="${i}">${escapeHtml(object || '●')}</span>`).join('');
}

function renderNumberSenseActivityBody_(a) {
    if (a.type === 'flash_quantity') {
        return `<div class="text-center"><div id="ns-flash-box" class="ns-visual-box"><div class="ns-object-row">${nsObjects_(a.quantity,a.object)}</div></div><div id="ns-choice-zone" class="hidden mt-4">${nsChoiceButtons_(a.choices)}</div></div>`;
    }
    if (a.type === 'touch_count') {
        const positions = a.scatter ? ['translate-y-2','-translate-y-3','translate-y-5','-translate-y-1','translate-y-1','-translate-y-4'] : [];
        const objs = Array.from({length:a.quantity},(_,i)=>`<button class="ns-touch-object ${positions[i%positions.length]||''}" onclick="numberSenseTouchCount_(this,${i})"><span>${escapeHtml(a.object)}</span><b class="ns-count-badge hidden"></b></button>`).join('');
        return `<div class="ns-visual-box"><div class="flex flex-wrap justify-center items-center gap-3 md:gap-5">${objs}</div></div><div id="ns-touch-summary" class="mt-3 text-center text-sm font-black text-slate-500">Đã chạm: 0/${a.quantity}</div>`;
    }
    if (a.type === 'build_quantity') {
        const model = a.target_mode === 'model' ? `<div class="mb-3 text-center"><div class="text-xs font-black text-purple-500 mb-1">NHÓM MẪU</div><div class="ns-object-row">${nsObjects_(a.target,a.model_object||'⭐')}</div></div>` : '';
        const bank = Array.from({length: Math.max(6,a.target+3)},(_,i)=>`<button draggable="true" ondragstart="numberSenseDragStart_(event)" onclick="numberSenseAddObject_()" class="ns-bank-object">${escapeHtml(a.object)}</button>`).join('');
        return `${model}<div class="grid md:grid-cols-[1fr_1.2fr] gap-3"><div class="ns-bank"><div class="text-xs font-black text-slate-500 mb-2">KHO ĐỒ VẬT</div><div class="flex flex-wrap justify-center gap-2">${bank}</div></div><div id="ns-build-tray" class="ns-tray" ondragover="event.preventDefault()" ondrop="numberSenseDropObject_(event)"><div class="text-xs font-black text-pink-500">NHÓM CỦA CON</div><div id="ns-build-items" class="flex flex-wrap justify-center gap-2 mt-2 min-h-[62px]"></div><button onclick="numberSenseRemoveObject_()" class="mt-2 text-xs font-black text-slate-400 hover:text-rose-500">Bớt 1 vật</button></div></div><div class="text-center mt-3"><button onclick="numberSenseCheckBuild_()" class="ns-primary-btn">Con làm xong rồi</button></div>`;
    }
    if (a.type === 'hidden_cardinality') {
        return `<div class="text-center"><div id="ns-hidden-group" class="ns-visual-box"><div class="ns-object-row">${nsObjects_(a.quantity,a.object)}</div></div><button id="ns-hide-btn" onclick="numberSenseHideGroup_()" class="mt-3 ns-primary-btn">🙈 Che lại</button><div id="ns-hidden-choices" class="hidden mt-4">${nsChoiceButtons_(a.choices)}</div></div>`;
    }
    if (a.type === 'conservation') {
        const before = nsObjects_(a.quantity,a.object);
        return `<div class="text-center"><div class="text-xs font-black text-slate-400 mb-1">TRƯỚC KHI XẾP LẠI</div><div class="ns-visual-box"><div class="ns-object-row">${before}</div></div><button id="ns-rearrange-btn" onclick="numberSenseRearrange_()" class="mt-3 ns-primary-btn">🔄 Xếp lại</button><div id="ns-conservation-after" class="hidden mt-3"></div><div id="ns-conservation-choices" class="hidden mt-4">${nsChoiceButtons_(a.choices)}</div></div>`;
    }
    if (a.type === 'representation_choice') {
        return `<div class="text-center"><div class="ns-symbol-card whitespace-pre-line">${escapeHtml(a.stimulus || '')}</div><div class="mt-4">${nsChoiceButtons_(a.choices)}</div></div>`;
    }
    if (a.type === 'frame_build') {
        const cells = Array.from({length:a.frame_size},(_,i)=>`<button class="ns-frame-cell" onclick="numberSenseToggleFrame_(this,${i})"></button>`).join('');
        return `<div class="text-center"><div class="ns-frame ${a.frame_size===10?'ns-frame-10':''}">${cells}</div><div id="ns-frame-count" class="mt-2 text-xs font-black text-slate-400">Đã đặt 0 chấm</div><button onclick="numberSenseCheckFrame_()" class="mt-3 ns-primary-btn">Con làm xong rồi</button></div>`;
    }
    if (a.type === 'compare_groups') {
        const leftGap = a.left?.spread ? 'gap-7 md:gap-10' : 'gap-2 md:gap-3';
        const rightGap = a.right?.spread ? 'gap-7 md:gap-10' : 'gap-2 md:gap-3';
        return `<div class="grid md:grid-cols-2 gap-3"><div class="ns-group-card"><div class="text-xs font-black text-sky-600 mb-2">${escapeHtml(a.left.label||'Nhóm A')}</div><div class="flex flex-wrap justify-center ${leftGap}">${nsObjects_(a.left.count,a.left.object)}</div></div><div class="ns-group-card"><div class="text-xs font-black text-amber-600 mb-2">${escapeHtml(a.right.label||'Nhóm B')}</div><div class="flex flex-wrap justify-center ${rightGap}">${nsObjects_(a.right.count,a.right.object)}</div></div></div><div class="mt-4">${nsChoiceButtons_(a.choices)}</div>`;
    }
    if (a.type === 'one_more_less') {
        const after = a.action === 'more' ? a.start + 1 : a.start - 1;
        return `<div class="text-center"><div class="ns-visual-box"><div class="ns-object-row">${nsObjects_(a.start,a.object)}</div></div><div class="my-2 text-sm font-black ${a.action==='more'?'text-emerald-600':'text-rose-500'}">${a.action==='more'?'➕ thêm 1':'➖ bớt 1'}</div><div class="ns-visual-box bg-white"><div class="ns-object-row">${nsObjects_(after,a.object)}</div></div><div class="mt-4">${nsChoiceButtons_(a.choices)}</div></div>`;
    }
    if (a.type === 'part_whole') {
        const known = nsObjects_(a.part,a.object);
        const unknownCount = Math.max(0,a.whole-a.part);
        const unknown = nsObjects_(unknownCount,a.object);
        return `<div class="text-center"><div class="ns-whole-card"><div class="text-xs font-black text-purple-500">CẢ NHÓM</div><div class="ns-object-row mt-2">${nsObjects_(a.whole,a.object)}</div></div><div class="text-2xl my-2">↙️ &nbsp; ↘️</div><div class="grid grid-cols-2 gap-3 max-w-xl mx-auto"><div class="ns-part-card"><div class="text-xs font-black text-sky-600">PHẦN ĐÃ BIẾT</div><div class="ns-object-row mt-2">${known}</div></div><div class="ns-part-card"><div class="text-xs font-black text-pink-600">PHẦN CÒN LẠI</div><div class="text-3xl md:text-5xl font-black text-pink-400 mt-3">?</div><div class="hidden">${unknown}</div></div></div><div class="mt-4">${nsChoiceButtons_(a.choices)}</div></div>`;
    }
    return '<div class="text-center font-bold text-slate-500">Hoạt động đang được hoàn thiện.</div>';
}

function activateNumberSenseActivity_(a) {
    if (a.type === 'flash_quantity') {
        const box = document.getElementById('ns-flash-box');
        const choices = document.getElementById('ns-choice-zone');
        numberSenseFlashTimer = setTimeout(() => {
            if (box) box.innerHTML = '<div class="text-5xl">☁️</div><div class="mt-2 text-base md:text-lg font-black text-slate-400">Hình đã được che</div>';
            choices?.classList.remove('hidden');
        }, Math.max(700, Number(a.display_ms)||1000));
    }
}

function numberSenseShowHint_() {
    const a = currentNumberSenseActivity_();
    if (!a) return;
    numberSenseHintLevel = Math.min(3, numberSenseHintLevel + 1);
    const hint = (a.hints || [])[numberSenseHintLevel - 1] || 'Con thử quan sát lại từng bước nhé.';
    const box = document.getElementById('ns-hint');
    if (box) { box.textContent = `💡 ${hint}`; box.classList.remove('hidden'); }
    speakVietnamese((a.hints_audio || [])[operationSenseHintLevel - 1] || hint, 0.94);
    speakVietnamese((a.hints_audio || [])[numberSenseHintLevel - 1] || hint, 0.94);
    if (a.type === 'flash_quantity' && numberSenseHintLevel >= 2) {
        const flash = document.getElementById('ns-flash-box');
        if (flash) flash.innerHTML = `<div class="ns-object-row">${nsObjects_(a.quantity,a.object)}</div>`;
    }
    if (a.type === 'hidden_cardinality' && numberSenseHintLevel >= 3) {
        const group = document.getElementById('ns-hidden-group');
        if (group) group.innerHTML = `<div class="ns-object-row">${nsObjects_(a.quantity,a.object)}</div>`;
    }
}

function numberSenseChoose_(value, btn) {
    const a = currentNumberSenseActivity_();
    if (!a) return;
    document.querySelectorAll('#ns-activity-stage .ns-choice').forEach(x => x.classList.remove('ring-4','ring-pink-200'));
    btn?.classList.add('ring-4','ring-pink-200');
    const ok = String(value) === String(a.answer);
    if (ok) numberSenseCompleteActivity_();
    else numberSenseWrong_();
}

function numberSenseTouchCount_(btn, index) {
    const a = currentNumberSenseActivity_();
    if (!a || numberSenseTouched.has(index)) return;
    numberSenseTouched.add(index);
    btn.classList.add('is-counted');
    const badge = btn.querySelector('.ns-count-badge');
    if (badge) { badge.textContent = String(numberSenseTouched.size); badge.classList.remove('hidden'); }
    const summary = document.getElementById('ns-touch-summary');
    if (summary) summary.textContent = `Đã chạm: ${numberSenseTouched.size}/${a.quantity}`;
    speakVietnamese(String(numberSenseTouched.size), 0.98);
    if (numberSenseTouched.size === Number(a.quantity)) numberSenseCompleteActivity_();
}

function numberSenseDragStart_(event) {
    if (event?.dataTransfer) event.dataTransfer.setData('text/plain','ns-object');
}
function numberSenseDropObject_(event) { event.preventDefault(); numberSenseAddObject_(); }
function numberSenseAddObject_() {
    const a = currentNumberSenseActivity_();
    if (!a || a.type !== 'build_quantity' || numberSenseBuildCount >= 10) return;
    numberSenseBuildCount++;
    renderNumberSenseBuildItems_();
    speakVietnamese(String(numberSenseBuildCount), 0.98);
}
function numberSenseRemoveObject_() {
    numberSenseBuildCount = Math.max(0, numberSenseBuildCount - 1);
    renderNumberSenseBuildItems_();
}
function renderNumberSenseBuildItems_() {
    const a = currentNumberSenseActivity_();
    const host = document.getElementById('ns-build-items');
    if (!a || !host) return;
    host.innerHTML = nsObjects_(numberSenseBuildCount,a.object);
}
function numberSenseCheckBuild_() {
    const a = currentNumberSenseActivity_();
    if (!a) return;
    if (numberSenseBuildCount === Number(a.target)) numberSenseCompleteActivity_();
    else numberSenseWrong_(numberSenseBuildCount < Number(a.target) ? 'Nhóm của con còn ít hơn nhóm cần tạo.' : 'Nhóm của con đang nhiều hơn nhóm cần tạo.');
}

function numberSenseHideGroup_() {
    const a = currentNumberSenseActivity_();
    const group = document.getElementById('ns-hidden-group');
    if (group) group.innerHTML = '<div class="text-5xl">🙈</div><div class="mt-2 text-base md:text-lg font-black text-slate-400">Cô đã che nhóm lại</div>';
    document.getElementById('ns-hide-btn')?.classList.add('hidden');
    document.getElementById('ns-hidden-choices')?.classList.remove('hidden');
}

function numberSenseRearrange_() {
    const a = currentNumberSenseActivity_();
    const after = document.getElementById('ns-conservation-after');
    if (!a || !after) return;
    const cls = a.compact ? 'gap-0.5 md:gap-1' : 'gap-7 md:gap-12';
    after.innerHTML = `<div class="text-xs font-black text-slate-400 mb-1">SAU KHI XẾP LẠI</div><div class="ns-visual-box"><div class="flex flex-wrap justify-center items-center ${cls}">${nsObjects_(a.quantity,a.object)}</div></div>`;
    after.classList.remove('hidden');
    document.getElementById('ns-rearrange-btn')?.classList.add('hidden');
    document.getElementById('ns-conservation-choices')?.classList.remove('hidden');
}

function numberSenseToggleFrame_(btn, index) {
    if (numberSenseFrameFilled.has(index)) {
        numberSenseFrameFilled.delete(index); btn.classList.remove('is-filled'); btn.textContent = '';
    } else {
        numberSenseFrameFilled.add(index); btn.classList.add('is-filled'); btn.textContent = '●';
    }
    const label = document.getElementById('ns-frame-count');
    if (label) label.textContent = `Đã đặt ${numberSenseFrameFilled.size} chấm`;
    speakVietnamese(String(numberSenseFrameFilled.size), 0.98);
}
function numberSenseCheckFrame_() {
    const a = currentNumberSenseActivity_();
    if (!a) return;
    if (numberSenseFrameFilled.size === Number(a.target)) numberSenseCompleteActivity_();
    else numberSenseWrong_(`Con đang có ${numberSenseFrameFilled.size} chấm. Hãy quan sát lại yêu cầu.`);
}

function numberSenseWrong_(message = '') {
    const a = currentNumberSenseActivity_();
    const fb = document.getElementById('ns-feedback');
    if (fb) {
        fb.className = 'mt-3 rounded-2xl border-2 border-amber-200 bg-amber-50 p-3 text-center font-black text-amber-800';
        fb.textContent = `Chưa khớp rồi. ${message || 'Con thử quan sát lại nhé.'}`;
    }
    speakVietnamese(a?.wrong_audio || message || 'Chưa khớp rồi. Con thử quan sát lại nhé.', 0.94);
    const ev = readNumberSenseEvidence_();
    const jid = activeNumberSense?.journeyId;
    if (jid) {
        const st = ev[jid] || { mastery:'not_observed', completed:[], attempts:0, hint_uses:0, transfer_correct:0 };
        st.attempts = Number(st.attempts||0) + 1;
        if (st.mastery === 'not_observed') st.mastery = 'emerging';
        ev[jid] = st; writeNumberSenseEvidence_(ev);
    }
}

function numberSenseCompleteActivity_() {
    const a = currentNumberSenseActivity_();
    if (!a || !activeNumberSense) return;
    const fb = document.getElementById('ns-feedback');
    if (fb) {
        fb.className = 'mt-3 rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-3 text-center font-black text-emerald-700';
        fb.textContent = `✅ ${a.success || 'Con làm đúng rồi!'}`;
    }
    speakVietnamese(a.success_audio || a.success || 'Con làm đúng rồi!', 0.94);
    document.getElementById('ns-next-btn')?.classList.remove('hidden');
    document.querySelectorAll('#ns-activity-stage button').forEach(b => { if (!b.id?.includes('next')) b.disabled = true; });

    const ev = readNumberSenseEvidence_();
    const jid = activeNumberSense.journeyId;
    const st = ev[jid] || { mastery:'not_observed', completed:[], attempts:0, hint_uses:0, transfer_correct:0 };
    st.attempts = Number(st.attempts||0) + 1;
    st.hint_uses = Number(st.hint_uses||0) + numberSenseHintLevel;
    st.completed = Array.isArray(st.completed) ? st.completed : [];
    if (!st.completed.includes(a.id)) st.completed.push(a.id);
    if (a.transfer && numberSenseHintLevel === 0) st.transfer_correct = Number(st.transfer_correct||0) + 1;
    const allDone = activeNumberSense.journey.activities.every(x => st.completed.includes(x.id));
    if (allDone && Number(st.transfer_correct||0) > 0) st.mastery = 'generalized';
    else if (allDone && numberSenseHintLevel === 0) st.mastery = 'independent';
    else if (allDone) st.mastery = 'supported';
    else if (numberSenseHintLevel === 0) st.mastery = 'independent';
    else st.mastery = 'supported';
    st.last_seen = new Date().toISOString();
    st.last_activity = a.id;
    st.last_hint_level = numberSenseHintLevel;
    st.last_latency_ms = Math.max(0, Date.now() - Number(activeNumberSense.activityStartedAt||Date.now()));
    ev[jid] = st;
    writeNumberSenseEvidence_(ev);
}

function numberSenseNext_() {
    if (!activeNumberSense) return;
    const journey = activeNumberSense.journey;
    if (activeNumberSense.activityIndex < journey.activities.length - 1) {
        activeNumberSense.activityIndex++;
        renderNumberSenseActivity_();
        return;
    }
    const host = document.getElementById('number-sense-content');
    const state = getNumberSenseJourneyState_(journey.id);
    if (host) host.innerHTML = `<div class="w-full max-w-3xl mx-auto text-center py-6"><div class="text-6xl">🌟</div><h2 class="mt-3 text-2xl md:text-3xl font-black text-purple-700">Con vừa hoàn thành một hành trình!</h2><p class="mt-2 font-bold text-slate-600">${escapeHtml(journey.goal)}</p><div class="mt-4 inline-flex rounded-full border px-4 py-2 text-sm font-black ${numberSenseMasteryClass_(state.mastery)}">${escapeHtml(numberSenseMasteryLabel_(state.mastery))}</div><div class="mt-6 flex flex-wrap justify-center gap-3"><button onclick="openNumberSenseHub()" class="ns-secondary-btn">← Bản đồ 12.1</button>${journey.order < 12 ? `<button onclick="startNumberSenseJourney_('NS1.${journey.order+1}')" class="ns-primary-btn">Hành trình tiếp theo →</button>` : ''}</div></div>`;
}


// ==========================================
// EPSILON METHOD 12.2 - OPERATIONAL SENSE
// Tình huống -> thao tác -> nhìn thấy -> diễn đạt -> ký hiệu -> chiến lược -> transfer
// ==========================================
let operationSenseDataCache = null;
let activeOperationSense = null;
let operationSenseHintLevel = 0;
let operationSenseMovedCount = 0;
let operationSenseRemoved = new Set();
let operationSenseSplit = new Set();
let operationSensePathCount = 0;
let operationSenseMakeTenMoved = 0;

async function loadOperationSenseData_() {
    if (operationSenseDataCache) return operationSenseDataCache;
    const root = await loadEpsilonMuc12Data_();
    const track = root.tracks.find(t => t.internal_id === 'EPSILON_OPERATION_SENSE' || t.engine === 'operation_sense');
    const data = track?.content;
    if (!data || !Array.isArray(data.journeys)) throw new Error('Dữ liệu 12.2 chưa đúng cấu trúc');
    operationSenseDataCache = data;
    return data;
}

function operationSenseEvidenceKey_() {
    const id = String(currentUser?.maHS || 'KHACH').toUpperCase();
    return `epsilon_os2_evidence_${id}`;
}
function readOperationSenseEvidence_() {
    try { return JSON.parse(localStorage.getItem(operationSenseEvidenceKey_()) || '{}') || {}; }
    catch (e) { return {}; }
}
function writeOperationSenseEvidence_(data) {
    try { localStorage.setItem(operationSenseEvidenceKey_(), JSON.stringify(data || {})); } catch (e) {}
}
function getOperationSenseJourneyState_(journeyId) {
    const ev = readOperationSenseEvidence_();
    return ev[journeyId] || { mastery:'not_observed', completed:[], attempts:0, hint_uses:0, transfer_correct:0 };
}
function operationSenseMasteryLabel_(state) { return numberSenseMasteryLabel_(state); }
function operationSenseMasteryClass_(state) { return numberSenseMasteryClass_(state); }

async function openOperationSenseHub() {
    setAppShellRootMode_(false);
    setMainTabActive_('discover');
    stopSpeaking();
    clearInterval(quizTimerInterval);
    activeBaiHocContext = null;
    activeExamContext = null;
    activeRoadmapContext = null;
    activeTopicId = 12;
    pendingTopicQuiz = null;
    activeOperationSense = null;
    updateNavTabs('12. Math Lab - Toán tư duy Mỹ', '✨', '12.2 Addition & Subtraction Lab - Tư duy cộng trừ', null);
    switchAppView('view-operation-sense');
    const host = document.getElementById('operation-sense-content');
    if (host) host.innerHTML = '<div class="py-16 text-center font-black text-purple-600">🧩 Đang mở thế giới của những thay đổi...</div>';
    try {
        const data = await loadOperationSenseData_();
        renderOperationSenseHub_(data);
    } catch (err) {
        if (host) host.innerHTML = `<div class="rounded-3xl border-2 border-rose-200 bg-rose-50 p-6 text-center font-bold text-rose-700">${escapeHtml(err.message)}</div>`;
    }
}

function renderOperationSenseHub_(data) {
    const host = document.getElementById('operation-sense-content');
    if (!host) return;
    const evidence = readOperationSenseEvidence_();
    const cards = data.journeys.map(j => {
        const st = evidence[j.id] || { mastery:'not_observed', completed:[] };
        const done = Array.isArray(st.completed) ? st.completed.length : 0;
        const total = Array.isArray(j.activities) ? j.activities.length : 0;
        return `<button onclick="startOperationSenseJourney_('${escapeJsString_(j.id)}')" class="ns-journey-card text-left">
            <div class="flex items-start justify-between gap-3">
                <div class="flex items-center gap-3 min-w-0">
                    <div class="os-journey-icon">${escapeHtml(j.icon || '🧩')}</div>
                    <div class="min-w-0">
                        <div class="text-[11px] font-black uppercase tracking-wider text-indigo-500">Hành trình ${j.order}</div>
                        <h3 class="font-black text-slate-800 text-base md:text-lg leading-tight mt-0.5">${escapeHtml(j.title)}</h3>
                    </div>
                </div>
                <span class="shrink-0 rounded-full border px-2 py-1 text-[10px] md:text-xs font-black ${operationSenseMasteryClass_(st.mastery)}">${escapeHtml(operationSenseMasteryLabel_(st.mastery))}</span>
            </div>
            <p class="mt-3 text-xs md:text-sm font-bold text-slate-500 leading-relaxed">${escapeHtml(j.goal)}</p>
            <div class="mt-3 flex items-center gap-2"><div class="h-2 flex-1 rounded-full bg-slate-100 overflow-hidden"><div class="h-full rounded-full bg-gradient-to-r from-violet-400 via-indigo-400 to-sky-400" style="width:${total ? Math.round(done/total*100) : 0}%"></div></div><span class="text-[11px] font-black text-slate-400">${done}/${total}</span></div>
        </button>`;
    }).join('');
    host.innerHTML = `<div class="w-full max-w-6xl mx-auto">
        <div class="mb-3"><button onclick="openEpsilonMethodHub_()" class="ns-secondary-btn">← Mục 12 · Phương pháp mới</button></div>
        <section class="os-hero">
            <div>
                <div class="text-xs md:text-sm font-black uppercase tracking-[.16em] text-violet-500">Epsilon Operational Sense</div>
                <h2 class="mt-1 text-2xl md:text-3xl font-black text-slate-900">Con hiểu điều gì xảy ra khi số lượng thay đổi</h2>
                <p class="mt-2 max-w-3xl text-sm md:text-base font-bold text-slate-600 leading-relaxed">Không bắt đầu bằng 3 + 2 = ?. Con thêm, bớt, gộp, tách, so sánh và kể lại điều mình thấy; ký hiệu chỉ xuất hiện sau khi ý nghĩa đã rõ.</p>
            </div>
            <div class="os-hero-flow">Câu chuyện → Hành động → Mô hình → Lời nói → Ký hiệu → Chiến lược</div>
        </section>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 mt-4">${cards}</div>
    </div>`;
}

async function startOperationSenseJourney_(journeyId) {
    const data = await loadOperationSenseData_();
    const journey = data.journeys.find(j => j.id === journeyId);
    if (!journey) return;
    activeOperationSense = { journeyId, journey, activityIndex:0, activityStartedAt:Date.now() };
    const st = getOperationSenseJourneyState_(journeyId);
    if (Array.isArray(st.completed) && st.completed.length) {
        const firstOpen = journey.activities.findIndex(a => !st.completed.includes(a.id));
        activeOperationSense.activityIndex = firstOpen >= 0 ? firstOpen : 0;
    }
    updateNavTabs('12. Math Lab - Toán tư duy Mỹ', '✨', '12.2 Addition & Subtraction Lab - Tư duy cộng trừ', `${journey.order}. ${journey.title}`);
    renderOperationSenseActivity_();
}

function currentOperationSenseActivity_() {
    return activeOperationSense?.journey?.activities?.[activeOperationSense.activityIndex] || null;
}
function resetOperationSenseInteraction_() {
    operationSenseHintLevel = 0;
    operationSenseMovedCount = 0;
    operationSenseRemoved = new Set();
    operationSenseSplit = new Set();
    operationSensePathCount = 0;
    operationSenseMakeTenMoved = 0;
    if (activeOperationSense) activeOperationSense.activityStartedAt = Date.now();
}

function renderOperationSenseActivity_() {
    const host = document.getElementById('operation-sense-content');
    const activity = currentOperationSenseActivity_();
    const journey = activeOperationSense?.journey;
    if (!host || !activity || !journey) return;
    resetOperationSenseInteraction_();
    const step = activeOperationSense.activityIndex + 1;
    const total = journey.activities.length;
    const evidenceList = (journey.evidence || []).map(x => `<span class="ns-evidence-pill">✓ ${escapeHtml(x)}</span>`).join('');
    host.innerHTML = `<div class="w-full max-w-5xl mx-auto">
        <div class="flex items-center justify-between gap-3 mb-3">
            <button onclick="openOperationSenseHub()" class="ns-secondary-btn">← 14 hành trình</button>
            <div class="text-center min-w-0"><div class="text-xs font-black text-indigo-500">${escapeHtml(journey.icon)} Hành trình ${journey.order} · Bước ${step}/${total}</div><h2 class="text-lg md:text-xl font-black text-slate-800 truncate">${escapeHtml(journey.title)}</h2></div>
            <div class="w-[108px] text-right text-xs font-black text-slate-400">${Math.round(step/total*100)}%</div>
        </div>
        <div class="h-2 bg-slate-100 rounded-full overflow-hidden mb-3"><div class="h-full bg-gradient-to-r from-violet-400 via-indigo-400 to-sky-400" style="width:${Math.round(step/total*100)}%"></div></div>
        <section class="ns-teacher-bubble os-teacher-bubble"><span class="text-2xl">🐰</span><div class="flex-1 min-w-0"><div class="text-[10px] font-black uppercase tracking-wider text-violet-500">Cô Thỏ Hồng</div><div class="font-extrabold text-slate-700 leading-relaxed">${escapeHtml(activity.teacher || '')}</div></div><button onclick="speakOperationSenseActivity_()" class="ns-listen-btn" title="Nghe lại hướng dẫn">🔊 <span>Nghe cô nói</span></button></section>
        <section class="ns-workspace mt-3">
            <h3 class="text-center text-lg md:text-xl font-black text-slate-900 mb-3">${escapeHtml(activity.prompt || '')}</h3>
            <div id="os-activity-stage" class="w-full">${renderOperationSenseActivityBody_(activity)}</div>
            <div id="os-feedback" class="hidden mt-3 rounded-2xl border-2 p-3 text-center font-black"></div>
            <div id="os-hint" class="hidden mt-3 rounded-2xl border border-amber-200 bg-amber-50 p-3 text-center font-bold text-amber-800"></div>
        </section>
        <div class="mt-3 flex flex-wrap justify-center gap-2">${evidenceList}</div>
        <div class="mt-4 flex items-center justify-between gap-2"><button onclick="operationSenseShowHint_()" class="ns-secondary-btn">💡 Gợi ý</button><button onclick="renderOperationSenseActivity_()" class="ns-secondary-btn">↻ Làm lại</button><button id="os-next-btn" onclick="operationSenseNext_()" class="hidden ns-primary-btn">Tiếp tục →</button></div>
    </div>`;
    if (autoSpeechEnabled) setTimeout(() => speakOperationSenseActivity_(), 120);
}

function osChoiceButtons_(choices) {
    return `<div class="grid grid-cols-1 sm:grid-cols-3 gap-2 max-w-3xl mx-auto">${(choices || []).map(c => `<button class="ns-choice" onclick="operationSenseChoose_('${escapeJsString_(String(c))}', this)">${escapeHtml(String(c))}</button>`).join('')}</div>`;
}
function osObjects_(count, object, cls='') { return nsObjects_(count, object, cls); }
function osStoryStrip_(a) {
    const opText = a.operation === 'take' ? 'BỚT ĐI' : 'THÊM VÀO';
    const start = a.start == null ? '?' : a.start;
    const change = a.change == null ? '?' : a.change;
    const result = a.result == null ? '?' : a.result;
    return `<div class="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2 max-w-3xl mx-auto">
        <div class="os-story-card"><div class="os-story-label">LÚC ĐẦU</div><div class="os-story-value">${escapeHtml(String(start))}</div></div>
        <div class="text-[10px] md:text-xs font-black ${a.operation==='take'?'text-rose-500':'text-emerald-600'}"><div class="text-2xl mb-1">${a.operation==='take'?'↘':'↗'}</div>${opText}</div>
        <div class="os-story-card"><div class="os-story-label">THAY ĐỔI</div><div class="os-story-value">${escapeHtml(String(change))}</div></div>
        <div class="text-2xl text-slate-300">→</div>
        <div class="os-story-card"><div class="os-story-label">KẾT QUẢ</div><div class="os-story-value">${escapeHtml(String(result))}</div></div>
    </div>`;
}

function renderOperationSenseActivityBody_(a) {
    if (a.type === 'join_story') {
        const bank = Array.from({length:Number(a.bank||a.change||3)},(_,i)=>`<button class="os-bank-object" onclick="operationSenseAddJoinObject_(this)">${escapeHtml(a.object)}</button>`).join('');
        return `<div><div class="text-center text-xs font-black text-slate-400 mb-2">LÚC ĐẦU</div><div class="ns-visual-box"><div id="os-join-group" class="ns-object-row">${osObjects_(a.start,a.object)}</div></div><div class="mt-3 grid md:grid-cols-[1fr_1.2fr] gap-3"><div class="ns-bank"><div class="text-xs font-black text-violet-500 mb-2">CÁC BẠN CÓ THỂ ĐẾN THÊM</div><div class="flex flex-wrap justify-center gap-2">${bank}</div></div><div class="ns-tray"><div class="text-xs font-black text-pink-500">NHÓM SAU KHI THÊM</div><div id="os-join-final" class="ns-object-row mt-2">${osObjects_(a.start,a.object)}</div><div id="os-join-count" class="mt-2 text-xs font-black text-slate-400">Đã thêm: 0</div></div></div><div class="text-center mt-3"><button onclick="operationSenseCheckJoin_()" class="ns-primary-btn">Con làm xong rồi</button></div></div>`;
    }
    if (a.type === 'take_story') {
        const objs = Array.from({length:Number(a.start)},(_,i)=>`<button class="os-action-object" onclick="operationSenseToggleRemove_(this,${i})"><span>${escapeHtml(a.object)}</span><span class="os-away-mark hidden">↗</span></button>`).join('');
        return `<div><div class="ns-visual-box"><div class="flex flex-wrap justify-center gap-3">${objs}</div></div><div id="os-take-summary" class="mt-2 text-center text-xs font-black text-slate-400">Đã lấy ra: 0/${a.change}</div><div class="text-center mt-3"><button onclick="operationSenseCheckTake_()" class="ns-primary-btn">Con làm xong rồi</button></div></div>`;
    }
    if (a.type === 'combine_story') {
        return `<div><div id="os-combine-before" class="grid grid-cols-2 gap-3 max-w-3xl mx-auto"><div class="ns-group-card"><div class="text-xs font-black text-rose-500 mb-2">PHẦN 1</div><div class="ns-object-row">${osObjects_(a.left,a.left_object)}</div></div><div class="ns-group-card"><div class="text-xs font-black text-emerald-600 mb-2">PHẦN 2</div><div class="ns-object-row">${osObjects_(a.right,a.right_object)}</div></div></div><div class="text-center mt-3"><button id="os-combine-btn" onclick="operationSenseCombine_()" class="ns-primary-btn">🤲 Gộp hai nhóm</button></div><div id="os-combine-after" class="hidden mt-3"></div><div id="os-combine-choices" class="hidden mt-4">${osChoiceButtons_(a.choices)}</div></div>`;
    }
    if (a.type === 'split_story') {
        const objs = Array.from({length:Number(a.whole)},(_,i)=>`<button class="os-action-object" onclick="operationSenseToggleSplit_(this,${i})"><span>${escapeHtml(a.object)}</span></button>`).join('');
        return `<div class="grid md:grid-cols-2 gap-3"><div class="ns-group-card"><div class="text-xs font-black text-violet-500 mb-2">WHOLE ${a.whole}</div><div class="flex flex-wrap justify-center gap-2">${objs}</div></div><div class="ns-part-card"><div class="text-xs font-black text-pink-500">PHẦN ĐƯỢC TÁCH RA</div><div id="os-split-target" class="ns-object-row min-h-[70px] mt-2"></div><div id="os-split-count" class="text-xs font-black text-slate-400 mt-2">Đã tách: 0/${a.target_part}</div></div><div class="md:col-span-2 text-center"><button onclick="operationSenseCheckSplit_()" class="ns-primary-btn">Con tách xong rồi</button></div></div>`;
    }
    if (a.type === 'missing_part') {
        return `<div class="text-center"><div class="ns-whole-card max-w-3xl mx-auto"><div class="text-xs font-black text-violet-500">CẢ NHÓM CÓ ${a.whole}</div><div class="ns-object-row mt-2">${osObjects_(a.whole,a.object)}</div></div><div class="text-2xl my-2">↙️ &nbsp; ↘️</div><div class="grid grid-cols-2 gap-3 max-w-2xl mx-auto"><div class="ns-part-card"><div class="text-xs font-black text-sky-600">PHẦN NHÌN THẤY</div><div class="ns-object-row mt-2">${osObjects_(a.known,a.object)}</div></div><div class="ns-part-card"><div class="text-xs font-black text-pink-600">PHẦN BỊ CHE</div><div class="text-5xl mt-3">📦</div><div class="text-3xl font-black text-pink-500">?</div></div></div><div class="mt-4">${osChoiceButtons_(a.choices)}</div></div>`;
    }
    if (a.type === 'compare_difference') {
        const max = Math.max(Number(a.left),Number(a.right));
        const row = (n,obj) => Array.from({length:max},(_,i)=>`<div class="os-pair-cell">${i<n?`<span>${escapeHtml(obj)}</span>`:'<span class="text-slate-200">○</span>'}</div>`).join('');
        return `<div><div class="max-w-3xl mx-auto rounded-2xl border border-indigo-100 bg-indigo-50/40 p-3"><div class="grid gap-2"><div class="os-pair-row">${row(a.left,a.left_object)}</div><div class="os-pair-row">${row(a.right,a.right_object)}</div></div><div class="mt-2 text-center text-[11px] font-black text-slate-500">Ghép theo từng cột. Phần không có cặp chính là độ chênh.</div></div><div class="mt-4">${osChoiceButtons_(a.choices)}</div></div>`;
    }
    if (a.type === 'story_unknown') {
        return `<div>${osStoryStrip_(a)}<div class="mt-4">${osChoiceButtons_(a.choices)}</div></div>`;
    }
    if (a.type === 'equation_choice') {
        const symbol = a.operation === 'take' ? '−' : '+';
        return `<div class="text-center"><div class="ns-visual-box"><div><div class="ns-object-row">${osObjects_(a.start,a.object)}</div><div class="my-2 text-2xl font-black ${a.operation==='take'?'text-rose-500':'text-emerald-600'}">${symbol} ${a.change}</div><div class="text-sm font-black text-slate-500">Kết quả của câu chuyện: ${a.result}</div></div></div><div class="mt-4">${osChoiceButtons_(a.choices)}</div></div>`;
    }
    if (a.type === 'equality_balance') {
        return `<div class="text-center"><div class="os-balance"><div class="os-balance-pan"><span>${escapeHtml(a.left)}</span></div><div class="text-5xl">⚖️</div><div class="os-balance-pan"><span>${escapeHtml(a.right)}</span></div></div><div class="mt-4">${osChoiceButtons_(a.choices)}</div></div>`;
    }
    if (a.type === 'equality_missing') {
        return `<div class="text-center"><div class="ns-symbol-card">3 + 2 &nbsp; = &nbsp; □ + 1</div><div class="mt-4">${osChoiceButtons_(a.choices)}</div></div>`;
    }
    if (a.type === 'fact_family') {
        return `<div class="text-center"><div class="max-w-xl mx-auto"><div class="ns-whole-card"><div class="text-xs font-black text-violet-500">WHOLE</div><div class="text-4xl font-black text-violet-700">${a.whole}</div></div><div class="text-2xl my-1">↙️ &nbsp; ↘️</div><div class="grid grid-cols-2 gap-3"><div class="ns-part-card"><div class="text-xs font-black text-sky-600">PART</div><div class="text-3xl font-black">${a.part1}</div></div><div class="ns-part-card"><div class="text-xs font-black text-pink-600">PART</div><div class="text-3xl font-black">${a.part2}</div></div></div></div><div class="mt-4">${osChoiceButtons_(a.choices)}</div></div>`;
    }
    if (a.type === 'count_path') {
        const min = Math.max(0, Number(a.start) - 4), max = Math.min(20, Number(a.start) + Math.max(6,Number(a.steps)+3));
        const cells = Array.from({length:max-min+1},(_,k)=>{ const n=min+k; return `<div id="os-path-${n}" class="os-path-cell ${n===Number(a.start)?'is-current':''}">${n}</div>`; }).join('');
        return `<div class="text-center"><div class="flex flex-wrap justify-center gap-1.5">${cells}</div><div id="os-path-status" class="mt-3 font-black text-indigo-600">Bắt đầu ở ${a.start} · đã đi 0/${a.steps} bước</div><button onclick="operationSensePathStep_()" class="mt-3 ns-primary-btn">${Number(a.direction)>0?'➡️ Tiến 1 bước':'⬅️ Lùi 1 bước'}</button></div>`;
    }
    if (a.type === 'strategy_choice') {
        return `<div class="text-center"><div class="ns-symbol-card">${escapeHtml(a.problem || '')}</div><div class="mt-4">${osChoiceButtons_(a.choices)}</div></div>`;
    }
    if (a.type === 'structured_choice') {
        const max=Math.max(Number(a.a),Number(a.b));
        const row=(n)=>Array.from({length:max},(_,i)=>`<span class="ns-static-object ${i<n?'':'opacity-0'}">${escapeHtml(a.object||'●')}</span>`).join('');
        return `<div class="text-center"><div class="max-w-2xl mx-auto rounded-2xl border border-indigo-100 bg-indigo-50/40 p-4"><div class="ns-object-row">${row(a.a)}</div><div class="ns-object-row mt-2">${row(a.b)}</div></div><div class="mt-4">${osChoiceButtons_(a.choices)}</div></div>`;
    }
    if (a.type === 'make_ten') {
        const cells = Array.from({length:10},(_,i)=>`<div class="ns-frame-cell ${i<Number(a.start)?'is-filled':''}" id="os-ten-cell-${i}">${i<Number(a.start)?'●':''}</div>`).join('');
        const bank = Array.from({length:Number(a.addend)},(_,i)=>`<button id="os-ten-bank-${i}" class="os-bank-object" onclick="operationSenseMakeTenMove_(this)">●</button>`).join('');
        return `<div><div class="ns-frame ns-frame-10">${cells}</div><div class="mt-3 ns-bank max-w-xl mx-auto"><div class="text-xs font-black text-indigo-500 mb-2">NHÓM ${a.addend} Ở NGOÀI KHUNG</div><div class="flex justify-center gap-2">${bank}</div></div><div id="os-ten-status" class="mt-2 text-center text-xs font-black text-slate-500">Đã chuyển 0 chấm vào khung.</div><div class="text-center mt-3"><button onclick="operationSenseCheckMakeTen_()" class="ns-primary-btn">Con làm đầy 10 rồi</button></div></div>`;
    }
    return '<div class="text-center font-bold text-slate-500">Hoạt động đang được cập nhật.</div>';
}

function operationSenseShowHint_() {
    const a = currentOperationSenseActivity_();
    if (!a) return;
    operationSenseHintLevel = Math.min(3, operationSenseHintLevel + 1);
    const hint = (a.hints || [])[operationSenseHintLevel - 1] || 'Con thử dựng lại câu chuyện bằng đồ vật nhé.';
    const box = document.getElementById('os-hint');
    if (box) { box.textContent = `💡 ${hint}`; box.classList.remove('hidden'); }
}
function operationSenseChoose_(value, btn) {
    const a = currentOperationSenseActivity_();
    if (!a) return;
    document.querySelectorAll('#os-activity-stage .ns-choice').forEach(x=>x.classList.remove('ring-4','ring-violet-200'));
    btn?.classList.add('ring-4','ring-violet-200');
    if (String(value) === String(a.answer)) operationSenseCompleteActivity_();
    else operationSenseWrong_();
}

function operationSenseAddJoinObject_(btn) {
    const a=currentOperationSenseActivity_();
    if(!a || a.type!=='join_story' || btn.disabled) return;
    if(operationSenseMovedCount >= Number(a.bank||10)) return;
    operationSenseMovedCount++;
    btn.disabled=true; btn.classList.add('opacity-30','scale-90');
    const final=document.getElementById('os-join-final');
    if(final) final.innerHTML=osObjects_(Number(a.start)+operationSenseMovedCount,a.object);
    const label=document.getElementById('os-join-count');
    if(label) label.textContent=`Đã thêm: ${operationSenseMovedCount}`;
    speakVietnamese(`Thêm ${operationSenseMovedCount}`, 0.98);
}
function operationSenseCheckJoin_() {
    const a=currentOperationSenseActivity_(); if(!a) return;
    if(operationSenseMovedCount===Number(a.change)) operationSenseCompleteActivity_();
    else operationSenseWrong_(operationSenseMovedCount<Number(a.change)?'Con mới thêm chưa đủ số vật của câu chuyện.':'Con đã thêm nhiều hơn câu chuyện nói.');
}

function operationSenseToggleRemove_(btn,index) {
    if(operationSenseRemoved.has(index)){operationSenseRemoved.delete(index);btn.classList.remove('is-removed');btn.querySelector('.os-away-mark')?.classList.add('hidden');}
    else {operationSenseRemoved.add(index);btn.classList.add('is-removed');btn.querySelector('.os-away-mark')?.classList.remove('hidden');}
    const a=currentOperationSenseActivity_(); const label=document.getElementById('os-take-summary');
    if(a&&label) label.textContent=`Đã lấy ra: ${operationSenseRemoved.size}/${a.change}`;
    if (a) speakVietnamese(`Đã lấy ra ${operationSenseRemoved.size}`, 0.98);
}
function operationSenseCheckTake_(){const a=currentOperationSenseActivity_();if(!a)return;if(operationSenseRemoved.size===Number(a.change))operationSenseCompleteActivity_();else operationSenseWrong_(`Con đang lấy ra ${operationSenseRemoved.size} vật; câu chuyện cần lấy ra ${a.change}.`);}

function operationSenseCombine_(){const a=currentOperationSenseActivity_();if(!a)return;document.getElementById('os-combine-btn')?.classList.add('hidden');const after=document.getElementById('os-combine-after');if(after){after.innerHTML=`<div class="ns-visual-box"><div class="ns-object-row">${osObjects_(a.left,a.left_object)}${osObjects_(a.right,a.right_object)}</div></div>`;after.classList.remove('hidden');}document.getElementById('os-combine-choices')?.classList.remove('hidden');}

function operationSenseToggleSplit_(btn,index){const a=currentOperationSenseActivity_();if(!a)return;if(operationSenseSplit.has(index)){operationSenseSplit.delete(index);btn.classList.remove('is-selected');}else{operationSenseSplit.add(index);btn.classList.add('is-selected');}const target=document.getElementById('os-split-target');if(target)target.innerHTML=osObjects_(operationSenseSplit.size,a.object);const label=document.getElementById('os-split-count');if(label)label.textContent=`Đã tách: ${operationSenseSplit.size}/${a.target_part}`;speakVietnamese(`Đã tách ${operationSenseSplit.size}`,0.98);}
function operationSenseCheckSplit_(){const a=currentOperationSenseActivity_();if(!a)return;if(operationSenseSplit.size===Number(a.target_part))operationSenseCompleteActivity_();else operationSenseWrong_(`Con đang tách ${operationSenseSplit.size} vật; cần tách ${a.target_part}.`);}

function operationSensePathStep_(){const a=currentOperationSenseActivity_();if(!a||operationSensePathCount>=Number(a.steps))return;const old=Number(a.start)+operationSensePathCount*Number(a.direction);document.getElementById(`os-path-${old}`)?.classList.remove('is-current');operationSensePathCount++;const now=Number(a.start)+operationSensePathCount*Number(a.direction);document.getElementById(`os-path-${now}`)?.classList.add('is-current');const st=document.getElementById('os-path-status');if(st)st.textContent=`Đang ở ${now} · đã đi ${operationSensePathCount}/${a.steps} bước`;speakVietnamese(String(now),0.98);if(operationSensePathCount===Number(a.steps)&&now===Number(a.answer))operationSenseCompleteActivity_();}

function operationSenseMakeTenMove_(btn){const a=currentOperationSenseActivity_();if(!a||btn.disabled)return;const needed=10-Number(a.start);if(operationSenseMakeTenMoved>=needed)return;operationSenseMakeTenMoved++;btn.disabled=true;btn.classList.add('opacity-30','scale-90');const idx=Number(a.start)+operationSenseMakeTenMoved-1;const cell=document.getElementById(`os-ten-cell-${idx}`);if(cell){cell.textContent='●';cell.classList.add('is-filled');}const st=document.getElementById('os-ten-status');if(st)st.textContent=`Đã chuyển ${operationSenseMakeTenMoved} chấm vào khung · còn ${Number(a.addend)-operationSenseMakeTenMoved} chấm ở ngoài.`;speakVietnamese(`Chuyển ${operationSenseMakeTenMoved}`,0.98);}
function operationSenseCheckMakeTen_(){const a=currentOperationSenseActivity_();if(!a)return;if(operationSenseMakeTenMoved===Number(a.answer_needed))operationSenseCompleteActivity_();else operationSenseWrong_(`Khung 10 cần đúng ${a.answer_needed} chấm nữa để đầy.`);}

function operationSenseWrong_(message='') {
    const fb=document.getElementById('os-feedback');
    if(fb){fb.className='mt-3 rounded-2xl border-2 border-amber-200 bg-amber-50 p-3 text-center font-black text-amber-800';fb.textContent=`Chưa khớp với câu chuyện rồi. ${message || 'Con thử dựng lại điều đang xảy ra nhé.'}`;}
    const a=currentOperationSenseActivity_(); speakVietnamese(a?.wrong_audio || message || 'Chưa khớp với câu chuyện rồi. Con thử dựng lại điều đang xảy ra nhé.',0.94);
    const ev=readOperationSenseEvidence_(); const jid=activeOperationSense?.journeyId;
    if(jid){const st=ev[jid]||{mastery:'not_observed',completed:[],attempts:0,hint_uses:0,transfer_correct:0};st.attempts=Number(st.attempts||0)+1;if(st.mastery==='not_observed')st.mastery='emerging';st.last_error_activity=currentOperationSenseActivity_()?.id||'';ev[jid]=st;writeOperationSenseEvidence_(ev);}
}

function operationSenseCompleteActivity_() {
    const a=currentOperationSenseActivity_(); if(!a||!activeOperationSense)return;
    const fb=document.getElementById('os-feedback');
    if(fb){fb.className='mt-3 rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-3 text-center font-black text-emerald-700';fb.textContent=`✅ ${a.success || 'Con đã hiểu đúng điều đang xảy ra!'}`;}
    speakVietnamese(a.success_audio || a.success || 'Con đã hiểu đúng điều đang xảy ra!',0.94);
    document.getElementById('os-next-btn')?.classList.remove('hidden');
    document.querySelectorAll('#os-activity-stage button').forEach(b=>b.disabled=true);
    const ev=readOperationSenseEvidence_(); const jid=activeOperationSense.journeyId;
    const st=ev[jid]||{mastery:'not_observed',completed:[],attempts:0,hint_uses:0,transfer_correct:0};
    st.attempts=Number(st.attempts||0)+1; st.hint_uses=Number(st.hint_uses||0)+operationSenseHintLevel; st.completed=Array.isArray(st.completed)?st.completed:[];
    if(!st.completed.includes(a.id))st.completed.push(a.id); if(a.transfer&&operationSenseHintLevel===0)st.transfer_correct=Number(st.transfer_correct||0)+1;
    const allDone=activeOperationSense.journey.activities.every(x=>st.completed.includes(x.id));
    if(allDone&&Number(st.transfer_correct||0)>0)st.mastery='generalized'; else if(allDone&&operationSenseHintLevel===0)st.mastery='independent'; else if(allDone)st.mastery='supported'; else if(operationSenseHintLevel===0)st.mastery='independent'; else st.mastery='supported';
    st.last_seen=new Date().toISOString();st.last_activity=a.id;st.last_hint_level=operationSenseHintLevel;st.last_latency_ms=Math.max(0,Date.now()-Number(activeOperationSense.activityStartedAt||Date.now()));
    st.last_evidence_type = a.transfer ? 'transfer' : (a.type.includes('story') ? 'meaning_action' : (['equation_choice','equality_balance','equality_missing','fact_family'].includes(a.type)?'representation':'strategy'));
    ev[jid]=st;writeOperationSenseEvidence_(ev);
}

function operationSenseNext_() {
    if(!activeOperationSense)return; const journey=activeOperationSense.journey;
    if(activeOperationSense.activityIndex<journey.activities.length-1){activeOperationSense.activityIndex++;renderOperationSenseActivity_();return;}
    const host=document.getElementById('operation-sense-content');const state=getOperationSenseJourneyState_(journey.id);
    if(host)host.innerHTML=`<div class="w-full max-w-3xl mx-auto text-center py-6"><div class="text-6xl">🌟</div><h2 class="mt-3 text-2xl md:text-3xl font-black text-indigo-700">Con vừa hiểu thêm một mảnh của phép cộng và phép trừ!</h2><p class="mt-2 font-bold text-slate-600">${escapeHtml(journey.goal)}</p><div class="mt-4 inline-flex rounded-full border px-4 py-2 text-sm font-black ${operationSenseMasteryClass_(state.mastery)}">${escapeHtml(operationSenseMasteryLabel_(state.mastery))}</div><div class="mt-6 flex flex-wrap justify-center gap-3"><button onclick="openOperationSenseHub()" class="ns-secondary-btn">← Bản đồ 12.2</button>${journey.order<14?`<button onclick="startOperationSenseJourney_('OS2.${journey.order+1}')" class="ns-primary-btn">Hành trình tiếp theo →</button>`:''}</div></div>`;
}



// ==========================================
// MỞ CÁC MỤC KHÁM PHÁ
// ==========================================
function openTopic(topicNum, topicName, icon) {
    if (Number(topicNum) === 12) return openEpsilonMethodHub_();
    setAppShellRootMode_(false);
    if (Number(topicNum) === 11 && !requirePremium('Ôn tập')) return;
    if (Number(topicNum) === 11) setMainTabActive_('review');
    else setMainTabActive_('discover');
    stopSpeaking();
    activeBaiHocContext = null; activeTopicId = topicNum; activeExamContext = null; activeRoadmapContext = null;
    if (Number(topicNum) === 11) updateNavTabs('Ôn tập', '🧠', null);
    else updateDiscoverBreadcrumb_(topicName, icon || '🔢', null);

    showLoadingOverlay(`Đang tải chủ đề "${topicName}"...`);
    fetchAllTopicsData().then(topics => {
        hideLoadingOverlay();
        const topicObj = topics.find(t => Number(t.topic_id) === Number(topicNum));
        if (!topicObj || !topicObj.questions || !topicObj.questions.length) throw new Error("Chủ đề không có câu hỏi nào");
        showLectureAndSubtopics(topicNum, topicName, topicObj);
    }).catch(err => {
        hideLoadingOverlay();
        // Tải lỗi thì đưa header về đúng trạng thái trang chủ (không để lại tab/gạch breadcrumb thừa)
        activeTopicId = null;
        setAppShellRootMode_(true);
        updateNavTabs(null, null, null);
        showAppNotice(`Không thể tải chủ đề: ${err.message}`, { title: 'Khám phá', icon: '🧭', tone: 'rose' });
    });
}

function setSubtopicGridColumns(count) {
    const el = document.getElementById('lecture-subtopics-list');
    if (!el) return;
    if (count > 6) {
        el.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full max-w-4xl';
    } else {
        el.className = 'grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-5xl';
    }
}


function formatSubtopicLabelWithCode_(code, label) {
    const safeCode = String(code || '').trim();
    const safeLabel = beautifySubtopicName(label || safeCode || '');
    if (!safeCode) return safeLabel;
    if (safeLabel.startsWith(`${safeCode} `) || safeLabel.startsWith(`${safeCode}.`) || safeLabel.startsWith(`${safeCode} -`)) return safeLabel;
    return `${safeCode} ${safeLabel}`.trim();
}

function mapMuc2Stage_(q) {
    const src = String(q?._source_sub_topic || q?.sub_topic || '');
    const id = Number(q?.question_id ?? q?.id ?? 0);

    if (['2.1', '2.2', '2.3'].includes(src)) return { code: '2.1', name: 'Hiểu phép cộng' };
    if (src === '2.4') return { code: '2.2', name: 'Phép cộng trong phạm vi 10' };
    if (['2.6', '2.7', '2.8'].includes(src)) return { code: '2.3', name: 'Hiểu phép trừ' };
    if (src === '2.9') return { code: '2.4', name: 'Phép trừ trong phạm vi 10' };
    if (src === '2.5') return { code: '2.5', name: 'Luyện tập có hỗ trợ' };

    // Ngân hàng tổng hợp cũ: các câu trừ tìm số thiếu được đưa vào 2.5
    // để phần luyện có hỗ trợ có cả cộng và trừ. Phần còn lại là thực hành độc lập.
    if (src === '2.10' && [2291, 2293, 2295, 2297, 2299].includes(id)) {
        return { code: '2.5', name: 'Luyện tập có hỗ trợ' };
    }
    if (src === '2.10') return { code: '2.6', name: 'Thực hành tổng hợp' };

    return { code: src || '2.6', name: q?.sub_topic_label || 'Thực hành tổng hợp' };
}

function remapMuc2Questions_(questions) {
    return (questions || []).map(q => {
        const stage = mapMuc2Stage_(q);
        return {
            ...q,
            _source_sub_topic: String(q?._source_sub_topic || q?.sub_topic || ''),
            _muc2_stage: stage.code,
            sub_topic: stage.code,
            sub_topic_label: stage.name
        };
    });
}

// ==========================================
// MỤC 4 - HÌNH HỌC
// 4.1 Bài giảng nhập môn -> 4.2 nhận biết hình phẳng -> 4.3 lắp ghép -> 4.4 hình khối -> 4.5 đếm hình nâng cao
// Trọng tâm là NHẬN DẠNG / PHÂN LOẠI / CẤU TẠO. 4.5 mới dùng đếm hình trong hình nhiều nét, không đếm emoji rời.
// ==========================================
const MUC4_INTRO_AUDIO_ = `Cô Thỏ Hồng chào con. Hôm nay mình làm quen với hình học nhé. Hình tròn có đường bao cong và không có góc. Hình tam giác có ba cạnh và ba góc. Hình vuông có bốn cạnh bằng nhau. Hình chữ nhật có bốn cạnh, thường nhìn thấy hai cạnh dài và hai cạnh ngắn. Đây là các hình phẳng, giống như hình con vẽ trên giấy. Còn khối lập phương và khối hộp chữ nhật là hình khối, con có thể tưởng tượng như xúc xắc và hộp giày. Khi nhận biết hình, con hãy nhìn vào dạng của hình, đừng dựa vào màu sắc, kích thước hay việc hình đang xoay nghiêng. Sau bài giới thiệu này, mình sẽ luyện nhận biết hình phẳng, ghép hình, nhận biết hình khối trong cuộc sống, rồi thử sức với bài đếm hình nhiều nét nâng cao.`;

function muc4ShapeName_(shape) {
    return ({ circle: 'Hình tròn', triangle: 'Hình tam giác', square: 'Hình vuông', rectangle: 'Hình chữ nhật' })[shape] || shape;
}

function muc4ShapeSvg_(shape, options = {}) {
    const size = Number(options.size || 100);
    const color = options.color || '#60a5fa';
    const stroke = options.stroke || '#334155';
    const rotate = Number(options.rotate || 0);
    const common = `fill="${color}" stroke="${stroke}" stroke-width="4"`;
    let body = '';
    if (shape === 'circle') body = `<circle cx="50" cy="50" r="31" ${common}></circle>`;
    else if (shape === 'triangle') body = `<polygon points="50,15 86,82 14,82" ${common}></polygon>`;
    else if (shape === 'rectangle') body = `<rect x="12" y="27" width="76" height="46" rx="6" ${common}></rect>`;
    else body = `<rect x="20" y="20" width="60" height="60" rx="6" ${common}></rect>`;
    return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" class="block" aria-hidden="true"><g transform="rotate(${rotate} 50 50)">${body}</g></svg>`;
}

function muc4SolidSvg_(solid, options = {}) {
    const size = Number(options.size || 120);
    const fill1 = options.fill1 || '#bfdbfe';
    const fill2 = options.fill2 || '#93c5fd';
    const fill3 = options.fill3 || '#60a5fa';
    const stroke = options.stroke || '#334155';
    if (solid === 'cuboid') {
        return `<svg viewBox="0 0 140 105" width="${size}" height="${Math.round(size*0.75)}" class="block" aria-hidden="true">
            <polygon points="18,35 90,35 122,18 50,18" fill="${fill1}" stroke="${stroke}" stroke-width="3"></polygon>
            <polygon points="90,35 122,18 122,72 90,89" fill="${fill2}" stroke="${stroke}" stroke-width="3"></polygon>
            <rect x="18" y="35" width="72" height="54" fill="${fill3}" stroke="${stroke}" stroke-width="3"></rect>
        </svg>`;
    }
    return `<svg viewBox="0 0 120 110" width="${size}" height="${Math.round(size*0.92)}" class="block" aria-hidden="true">
        <polygon points="20,35 70,35 98,18 48,18" fill="${fill1}" stroke="${stroke}" stroke-width="3"></polygon>
        <polygon points="70,35 98,18 98,70 70,88" fill="${fill2}" stroke="${stroke}" stroke-width="3"></polygon>
        <rect x="20" y="35" width="50" height="53" fill="${fill3}" stroke="${stroke}" stroke-width="3"></rect>
    </svg>`;
}

function muc4BaseQuestion_(id, sub, label, q, options, answer, extra = {}) {
    return {
        question_id: id,
        sub_topic: sub,
        sub_topic_label: label,
        question_text: q,
        options,
        answer,
        hint: extra.hint || '',
        explanation: extra.explanation || '',
        audio_text: extra.audio_text || q,
        skill_tag: 'TOAN_C1',
        diem: 0.5,
        ...extra
    };
}

function buildMuc4Questions_() {
    const out = [];
    const shapes = ['circle', 'triangle', 'square', 'rectangle'];
    const colors = ['#fbbf24', '#60a5fa', '#34d399', '#f472b6', '#a78bfa', '#fb7185'];
    const rotations = [0, 18, 35, 45, 72, 90];
    const flatOptions = shapes.map(muc4ShapeName_);

    // 4.2 - Nhận biết và phân loại hình phẳng: 40 câu.
    for (let i = 0; i < 40; i++) {
        const target = shapes[i % shapes.length];
        const mode = i % 3;
        if (mode === 0) {
            out.push(muc4BaseQuestion_(4200+i, '4.2', 'Nhận biết và phân loại hình phẳng',
                'Hình dưới đây có tên là gì?', flatOptions, muc4ShapeName_(target), {
                    muc4_type: 'flat_identify',
                    muc4_visual: { target, color: colors[i % colors.length], rotate: rotations[i % rotations.length] },
                    explanation: `Dù đổi màu, kích thước hoặc xoay nghiêng, đây vẫn là ${muc4ShapeName_(target).toLowerCase()}.`
                }));
        } else if (mode === 1) {
            const optionShapes = [target, ...shapes.filter(s => s !== target)];
            const shift = i % 4;
            const arranged = optionShapes.slice(shift).concat(optionShapes.slice(0, shift));
            const answerIndex = arranged.indexOf(target);
            out.push(muc4BaseQuestion_(4200+i, '4.2', 'Nhận biết và phân loại hình phẳng',
                `Hình mẫu là ${muc4ShapeName_(target).toLowerCase()}. Con chọn hình cùng loại với hình mẫu nhé.`, ['A','B','C','D'], String.fromCharCode(65+answerIndex), {
                    muc4_type: 'flat_match',
                    muc4_visual: { target, optionShapes: arranged, color: colors[i % colors.length], rotate: rotations[(i+2) % rotations.length] },
                    explanation: `Con nhận ra ${muc4ShapeName_(target).toLowerCase()} bằng dạng của đường bao, không phải bằng màu.`
                }));
        } else {
            const common = target;
            const odd = shapes[(shapes.indexOf(target)+1+(i%2)) % shapes.length];
            let arranged = [common, common, common, odd];
            const shift = i % 4;
            arranged = arranged.slice(shift).concat(arranged.slice(0, shift));
            const answerIndex = arranged.indexOf(odd);
            out.push(muc4BaseQuestion_(4200+i, '4.2', 'Nhận biết và phân loại hình phẳng',
                'Hình nào khác loại với ba hình còn lại?', ['A','B','C','D'], String.fromCharCode(65+answerIndex), {
                    muc4_type: 'flat_odd',
                    muc4_visual: { optionShapes: arranged, color: colors[i % colors.length], rotate: rotations[(i+1) % rotations.length] },
                    explanation: `Ba hình cùng loại là ${muc4ShapeName_(common).toLowerCase()}; hình còn lại là ${muc4ShapeName_(odd).toLowerCase()}.`
                }));
        }
    }


    // Bổ sung các câu hỏi quan sát đặc điểm hình để trẻ không chỉ gọi tên hình,
    // mà còn chú ý tới số cạnh và quan hệ giữa các cạnh.
    const deepShapeQuestions = [
        {
            q: 'Hình vuông có mấy cạnh?',
            target: 'square',
            options: ['3 cạnh', '4 cạnh', '5 cạnh', 'Không có cạnh'],
            answer: '4 cạnh',
            explanation: 'Hình vuông có 4 cạnh.'
        },
        {
            q: 'Con quan sát hình vuông. Bốn cạnh của hình vuông như thế nào?',
            target: 'square',
            options: ['4 cạnh bằng nhau', 'Chỉ 2 cạnh bằng nhau', '3 cạnh bằng nhau', 'Không có cạnh bằng nhau'],
            answer: '4 cạnh bằng nhau',
            explanation: 'Hình vuông có 4 cạnh bằng nhau.'
        },
        {
            q: 'Hình tam giác có mấy cạnh?',
            target: 'triangle',
            options: ['2 cạnh', '3 cạnh', '4 cạnh', '5 cạnh'],
            answer: '3 cạnh',
            explanation: 'Hình tam giác có 3 cạnh.'
        },
        {
            q: 'Hình tam giác có mấy góc?',
            target: 'triangle',
            options: ['2 góc', '3 góc', '4 góc', 'Không có góc'],
            answer: '3 góc',
            explanation: 'Hình tam giác có 3 cạnh và 3 góc.'
        },
        {
            q: 'Hình chữ nhật có tất cả mấy cạnh?',
            target: 'rectangle',
            options: ['3 cạnh', '4 cạnh', '5 cạnh', '6 cạnh'],
            answer: '4 cạnh',
            explanation: 'Hình chữ nhật có 4 cạnh.'
        },
        {
            q: 'Hình chữ nhật thường có mấy cạnh dài và mấy cạnh ngắn?',
            target: 'rectangle',
            options: ['2 cạnh dài và 2 cạnh ngắn', '1 cạnh dài và 3 cạnh ngắn', '4 cạnh dài', '2 cạnh dài và 1 cạnh ngắn'],
            answer: '2 cạnh dài và 2 cạnh ngắn',
            explanation: 'Ở hình chữ nhật quen thuộc, con thường thấy 2 cạnh dài và 2 cạnh ngắn.'
        },
        {
            q: 'Hai cạnh dài của hình chữ nhật nằm như thế nào với nhau?',
            target: 'rectangle',
            options: ['Đối diện nhau', 'Nằm liền nhau', 'Chỉ có 1 cạnh dài', 'Không xác định'],
            answer: 'Đối diện nhau',
            explanation: 'Hai cạnh dài nằm đối diện nhau; hai cạnh ngắn cũng nằm đối diện nhau.'
        },
        {
            q: 'Con nhìn hình chữ nhật. Hai cạnh ngắn nằm như thế nào với nhau?',
            target: 'rectangle',
            options: ['Đối diện nhau', 'Nằm cùng một phía', 'Không có cạnh ngắn', 'Chỉ có 1 cạnh ngắn'],
            answer: 'Đối diện nhau',
            explanation: 'Hai cạnh ngắn của hình chữ nhật nằm đối diện nhau.'
        },
        {
            q: 'Hình vuông có mấy góc?',
            target: 'square',
            options: ['3 góc', '4 góc', '5 góc', 'Không có góc'],
            answer: '4 góc',
            explanation: 'Hình vuông có 4 cạnh và 4 góc.'
        },
        {
            q: 'Hình nào có 3 cạnh?',
            target: 'triangle',
            options: ['Hình tròn', 'Hình tam giác', 'Hình vuông', 'Hình chữ nhật'],
            answer: 'Hình tam giác',
            explanation: 'Hình tam giác có 3 cạnh.'
        }
    ];
    deepShapeQuestions.forEach((item, idx) => {
        out.push(muc4BaseQuestion_(4240 + idx, '4.2', 'Nhận biết và phân loại hình phẳng',
            item.q, item.options, item.answer, {
                muc4_type: 'shape_property',
                muc4_visual: {
                    target: item.target,
                    color: colors[(idx + 2) % colors.length],
                    rotate: rotations[(idx + 1) % rotations.length]
                },
                explanation: item.explanation
            }));
    });

    // 4.3 - Lắp ghép và xếp hình: mỗi cảnh có 2 câu khác nhau, không lặp để đủ số lượng.
    const scenes = [
        { name:'ngôi nhà', missing:'triangle', placed:['square'], components:'1 hình vuông và 1 hình tam giác' },
        { name:'cây kem', missing:'triangle', placed:['circle'], components:'1 hình tròn và 1 hình tam giác' },
        // Hình rô-bốt đang vẽ gồm: 1 đầu vuông + 1 thân chữ nhật + 2 tay chữ nhật.
        { name:'chú rô-bốt', missing:'square', placed:['rectangle','rectangle','rectangle'], components:'1 hình vuông và 3 hình chữ nhật' },
        { name:'cây cờ', missing:'rectangle', placed:['rectangle'], components:'2 hình chữ nhật' },
        { name:'chiếc thuyền', missing:'triangle', placed:['rectangle'], components:'1 hình chữ nhật và 1 hình tam giác' },
        { name:'cửa sổ', missing:'square', placed:['square','square','square'], components:'4 hình vuông' },
        { name:'bông hoa', missing:'circle', placed:['rectangle'], components:'1 hình tròn và 1 hình chữ nhật' },
        { name:'mũi tên', missing:'triangle', placed:['rectangle'], components:'1 hình chữ nhật và 1 hình tam giác' }
    ];
    const componentOptions = [
        '1 hình vuông và 1 hình tam giác', '1 hình tròn và 1 hình tam giác',
        '1 hình vuông và 3 hình chữ nhật', '2 hình chữ nhật',
        '1 hình chữ nhật và 1 hình tam giác', '4 hình vuông',
        '1 hình tròn và 1 hình chữ nhật', '2 hình vuông và 1 hình chữ nhật'
    ];
    const rotateOpts = (arr, shift) => {
        const a = [...arr];
        const k = ((Number(shift) || 0) % a.length + a.length) % a.length;
        return a.slice(k).concat(a.slice(0, k));
    };
    for (let i = 0; i < scenes.length * 2; i++) {
        const scene = scenes[Math.floor(i / 2) % scenes.length];
        if (i % 2 === 0) {
            const options = rotateOpts(flatOptions, (Math.floor(i / 2) + 1) % 4);
            out.push(muc4BaseQuestion_(4300+i, '4.3', 'Lắp ghép và xếp hình',
                `Mảnh nào còn thiếu để hoàn thành ${scene.name}?`, options, muc4ShapeName_(scene.missing), {
                    muc4_type: 'compose_missing',
                    muc4_visual: { scene: scene.name, missing: scene.missing, placed: scene.placed, color: colors[i % colors.length] },
                    explanation: `Chỗ trống có dạng ${muc4ShapeName_(scene.missing).toLowerCase()}, nên con chọn đúng mảnh có cùng dạng.`
                }));
        } else {
            const distractors = componentOptions.filter(x => x !== scene.components);
            const picked = [
                distractors[(i + 0) % distractors.length],
                distractors[(i + 2) % distractors.length],
                distractors[(i + 4) % distractors.length]
            ];
            let options = [...new Set([scene.components, ...picked])];
            for (const d of distractors) {
                if (options.length >= 4) break;
                if (!options.includes(d)) options.push(d);
            }
            options = rotateOpts(options.slice(0,4), (Math.floor(i / 2) + 2) % 4);
            out.push(muc4BaseQuestion_(4300+i, '4.3', 'Lắp ghép và xếp hình',
                `${scene.name.charAt(0).toUpperCase()+scene.name.slice(1)} được ghép từ những mảnh nào?`, options, scene.components, {
                    muc4_type: 'compose_parts',
                    muc4_visual: { scene: scene.name, missing: null, placed: [...scene.placed, scene.missing], color: colors[i % colors.length] },
                    explanation: `Con tách hình lớn thành từng mảnh nhỏ rồi gọi đúng tên từng hình.`
                }));
        }
    }

    // 4.4 - Nhận biết hình khối qua mô hình và đồ vật thật.
    const solidOptions = ['Khối lập phương', 'Khối hộp chữ nhật', 'Hình vuông', 'Hình chữ nhật'];
    const objects = [
        { label:'Xúc xắc', emoji:'🎲', solid:'cube' },
        { label:'Khối Rubik', emoji:'🧊', solid:'cube' },
        { label:'Hộp giày', emoji:'📦', solid:'cuboid' },
        { label:'Viên gạch', emoji:'🧱', solid:'cuboid' }
    ];
    for (let i = 0; i < 40; i++) {
        const solid = i % 2 === 0 ? 'cube' : 'cuboid';
        if (i % 3 === 0) {
            out.push(muc4BaseQuestion_(4400+i, '4.4', 'Nhận biết hình khối trong đời sống',
                'Khối dưới đây có tên là gì?', solidOptions, solid === 'cube' ? 'Khối lập phương' : 'Khối hộp chữ nhật', {
                    muc4_type: 'solid_identify',
                    muc4_visual: { solid },
                    explanation: solid === 'cube'
                        ? 'Khối lập phương có dạng đều như xúc xắc hoặc khối Rubik.'
                        : 'Khối hộp chữ nhật thường dài theo một hoặc hai chiều như hộp giày.'
                }));
        } else {
            const obj = objects[i % objects.length];
            out.push(muc4BaseQuestion_(4400+i, '4.4', 'Nhận biết hình khối trong đời sống',
                `${obj.label} gần với dạng khối nào?`, solidOptions, obj.solid === 'cube' ? 'Khối lập phương' : 'Khối hộp chữ nhật', {
                    muc4_type: 'solid_object',
                    muc4_visual: { solid: obj.solid, objectLabel: obj.label, objectEmoji: obj.emoji },
                    explanation: `${obj.label} là đồ vật có dạng gần với ${obj.solid === 'cube' ? 'khối lập phương' : 'khối hộp chữ nhật'}.`
                }));
        }
    }


    // 4.5 - Đếm hình nâng cao: đếm hình trong một hình nhiều nét, không phải đếm các emoji rời.
    // Dùng ít câu nhưng mỗi hình có cấu trúc rõ và đáp án đã kiểm tra bằng tay.
    const advancedPatterns = [
        { pattern:'tri_fan_2', target:'tam giác', answer:3, explanation:'Có 2 tam giác nhỏ và 1 tam giác lớn: 2 + 1 = 3.' },
        { pattern:'tri_fan_3', target:'tam giác', answer:6, explanation:'Có 3 tam giác nhỏ, 2 tam giác ghép từ hai phần liền nhau và 1 tam giác lớn: 3 + 2 + 1 = 6.' },
        { pattern:'tri_fan_4', target:'tam giác', answer:10, explanation:'Đếm theo tầng: 4 tam giác nhỏ + 3 tam giác ghép 2 phần + 2 tam giác ghép 3 phần + 1 tam giác lớn = 10.' },
        { pattern:'square_diagonals', target:'tam giác', answer:8, explanation:'Có 4 tam giác nhỏ quanh tâm và 4 tam giác lớn bằng nửa hình vuông: tổng cộng 8.' },
        { pattern:'square_grid_2', target:'hình vuông', answer:5, explanation:'Có 4 hình vuông nhỏ và 1 hình vuông lớn: 4 + 1 = 5.' },
        { pattern:'square_grid_3', target:'hình vuông', answer:14, explanation:'Có 9 hình vuông nhỏ, 4 hình vuông cỡ 2 ô và 1 hình vuông lớn: 9 + 4 + 1 = 14.' },
        { pattern:'nested_squares_2', target:'hình vuông', answer:2, explanation:'Có 1 hình vuông ngoài và 1 hình vuông bên trong: tổng cộng 2.' },
        { pattern:'nested_squares_3', target:'hình vuông', answer:3, explanation:'Có 3 hình vuông lồng vào nhau.' },
        { pattern:'rect_cols_3', target:'hình chữ nhật', answer:6, explanation:'Có 3 hình chữ nhật một ô, 2 hình ghép hai ô và 1 hình lớn: 3 + 2 + 1 = 6.' },
        { pattern:'rect_cols_4', target:'hình chữ nhật', answer:10, explanation:'Có 4 hình một ô + 3 hình hai ô + 2 hình ba ô + 1 hình lớn = 10.' },
        { pattern:'rect_grid_2x2', target:'hình chữ nhật', answer:9, explanation:'Có 4 hình nhỏ, 2 hình ghép ngang, 2 hình ghép dọc và 1 hình lớn: tổng cộng 9.' },
        { pattern:'rect_grid_3x2', target:'hình chữ nhật', answer:18, explanation:'Đếm đủ các kích thước: 6 + 4 + 2 + 3 + 2 + 1 = 18 hình chữ nhật.' }
    ];
    const countOptions = (correct, seed) => {
        const c = Number(correct);
        let vals = [c, Math.max(1, c - 1), c + 1, c + 2];
        vals = [...new Set(vals)];
        let d = 2;
        while (vals.length < 4) {
            const v = Math.max(1, c - d);
            if (!vals.includes(v)) vals.push(v);
            d++;
        }
        vals = vals.slice(0,4).map(String);
        return rotateOpts(vals, seed % 4);
    };
    advancedPatterns.forEach((item, idx) => {
        const opts = countOptions(item.answer, idx + 1);
        out.push(muc4BaseQuestion_(4500 + idx, '4.5', 'Đếm hình nâng cao',
            `Trong hình có tất cả bao nhiêu ${item.target}?`, opts, String(item.answer), {
                muc4_type: 'shape_count_advanced',
                muc4_visual: { pattern: item.pattern, target: item.target },
                explanation: item.explanation,
                audio_text: `Trong hình có tất cả bao nhiêu ${item.target}?`
            }));
    });
    return out;
}

function openMuc4IntroLesson_() {
    stopSpeaking();
    setAppShellRootMode_(false);
    updateDiscoverBreadcrumb_('4. Hình học', '📐', '4.1 Làm quen với các hình');
    switchAppView('view-quiz');
    document.getElementById('quiz-top-bar')?.classList.add('hidden');
    document.getElementById('quiz-card-header')?.classList.add('hidden');
    document.getElementById('nav-group-practice')?.classList.add('hidden');
    document.getElementById('nav-group-exam')?.classList.add('hidden');
    const host = document.getElementById('question-box');
    if (!host) return;
    host.innerHTML = `
        <div class="w-full max-w-5xl mx-auto py-2">
            <div class="rounded-[28px] border-2 border-pink-100 bg-gradient-to-br from-sky-50 via-white to-amber-50 px-4 py-5 md:px-7 md:py-6 shadow-sm">
                <div class="text-center">
                    <div class="text-sm md:text-base font-black text-pink-600">🐰 Cô Thỏ Hồng cùng con làm quen với hình học</div>
                    <h2 class="mt-1 text-xl md:text-2xl font-black text-slate-800">Nhìn dạng của hình trước khi nhớ tên</h2>
                    <button onclick="speakVietnamese(MUC4_INTRO_AUDIO_, 0.94)" class="mt-3 px-5 py-2 bg-pink-50 hover:bg-pink-100 text-pink-700 border border-pink-200 rounded-2xl font-black pastel-btn shadow-xs">
                        <i class="fa-solid fa-volume-high mr-1.5"></i> Nghe Cô Thỏ Hồng giảng
                    </button>
                </div>

                <div class="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3">
                    ${[
                        ['circle','Hình tròn','Đường bao cong, không có góc.'],
                        ['triangle','Hình tam giác','Có 3 cạnh và 3 góc.'],
                        ['square','Hình vuông','Có 4 cạnh bằng nhau.'],
                        ['rectangle','Hình chữ nhật','Có 4 góc; hai cặp cạnh đối diện bằng nhau.']
                    ].map((x,i)=>`<div class="rounded-2xl border-2 border-violet-100 bg-white p-3 flex flex-col items-center text-center shadow-xs">
                        ${muc4ShapeSvg_(x[0], {size:82, color:['#fde68a','#fca5a5','#93c5fd','#86efac'][i], rotate:i===1?12:(i===2?25:0)})}
                        <div class="mt-1 font-black text-violet-700">${x[1]}</div>
                        <div class="mt-0.5 text-xs md:text-sm font-bold text-slate-600">${x[2]}</div>
                    </div>`).join('')}
                </div>

                <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl mx-auto">
                    <div class="rounded-2xl border-2 border-sky-100 bg-white p-3 flex items-center gap-3 shadow-xs">
                        ${muc4SolidSvg_('cube',{size:92})}
                        <div><div class="font-black text-sky-700">Khối lập phương</div><div class="text-xs md:text-sm font-bold text-slate-600">Dạng gần giống xúc xắc hoặc khối Rubik.</div></div>
                    </div>
                    <div class="rounded-2xl border-2 border-emerald-100 bg-white p-3 flex items-center gap-3 shadow-xs">
                        ${muc4SolidSvg_('cuboid',{size:112,fill1:'#d1fae5',fill2:'#a7f3d0',fill3:'#6ee7b7'})}
                        <div><div class="font-black text-emerald-700">Khối hộp chữ nhật</div><div class="text-xs md:text-sm font-bold text-slate-600">Dạng gần giống hộp giày hoặc viên gạch.</div></div>
                    </div>
                </div>

                <div class="mt-4 rounded-2xl bg-amber-50 border border-amber-200 px-4 py-3 text-center text-sm md:text-base font-black text-amber-800">
                    Mẹo: màu sắc, kích thước và việc xoay nghiêng không làm đổi tên của hình.
                </div>
                <div class="mt-5 flex flex-wrap justify-center gap-3">
                    <button onclick="switchAppView('view-lecture'); updateDiscoverBreadcrumb_('4. Hình học','📐',null)" class="px-5 py-2 bg-white border border-slate-200 rounded-2xl font-black text-slate-600 pastel-btn">← Về Mục 4</button>
                    <button onclick="switchAppView('view-lecture'); selectSubtopic(0)" class="px-6 py-2 bg-gradient-to-r from-pink-500 to-violet-500 text-white rounded-2xl font-black shadow-md pastel-btn">Học xong – vào 4.2 →</button>
                </div>
            </div>
        </div>`;
}

function showLectureAndSubtopics(topicNum, topicName, topicObj) {
    const topicQuestions = Number(topicNum) === 2
        ? remapMuc2Questions_(topicObj.questions)
        : Number(topicNum) === 4
            ? buildMuc4Questions_()
            : (topicObj.questions || []);
    pendingTopicQuiz = { topicNum, topicName, questions: topicQuestions };

    const isMuc4 = Number(topicNum) === 4;
    document.getElementById('lecture-title').textContent = isMuc4 ? 'Hình học' : (topicObj.lecture_title || topicName);
    document.getElementById('lecture-content').textContent = isMuc4
        ? 'Làm quen tên gọi → nhận biết và phân loại → lắp ghép → nhận biết hình khối → đếm hình nâng cao.'
        : (topicObj.lecture_content || topicObj.description || 'Chào mừng bé yêu! Hãy chọn một mục nhỏ bên dưới để bắt đầu luyện tập nhé.');
    document.getElementById('lecture-content')?.classList.add('text-base', 'md:text-lg');
    document.getElementById('view-lecture').dataset.audioText = isMuc4
        ? 'Mục Hình học gồm năm bước. Trước tiên con làm quen tên gọi và cách nhận biết các hình. Sau đó con luyện phân loại hình phẳng, lắp ghép xếp hình, nhận biết hình khối trong đời sống và cuối cùng thử đếm hình trong các hình nhiều nét.'
        : (topicObj.lecture_audio_text || topicObj.lecture_content || topicObj.description || '');

    const groups = [], groupMap = {}, groupLabels = {};
    topicQuestions.forEach(q => {
        const k = (q.sub_topic || 'Câu hỏi chung').trim();
        if (!groupMap[k]) { groupMap[k] = []; groups.push(k); groupLabels[k] = q.sub_topic_label || k; }
        groupMap[k].push(q);
    });
    groups.sort((a, b) => {
        const pa = String(a).split('.').map(x => Number(x));
        const pb = String(b).split('.').map(x => Number(x));
        const len = Math.max(pa.length, pb.length);
        for (let i = 0; i < len; i++) {
            const va = Number.isFinite(pa[i]) ? pa[i] : 9999;
            const vb = Number.isFinite(pb[i]) ? pb[i] : 9999;
            if (va !== vb) return va - vb;
        }
        return String(a).localeCompare(String(b), 'vi');
    });
    pendingTopicQuiz.groups = groups; 
    pendingTopicQuiz.groupMap = groupMap;
    pendingTopicQuiz.groupLabels = groupLabels;

    let subHtml = '';
    if (Number(topicNum) === 4) {
        const introStyle = SUBTOPIC_PALETTES[0];
        subHtml += `
            <button onclick="openMuc4IntroLesson_()" class="px-3 py-2.5 ${introStyle.card} border-2 rounded-xl font-bold text-left transition-all flex items-center justify-between gap-2 shadow-sm pastel-btn">
                <span class="text-base md:text-lg leading-tight sm:whitespace-nowrap"><strong class="${introStyle.num} mr-1.5">1.</strong> Làm quen với các hình</span>
                <span class="text-xs md:text-sm font-extrabold ${introStyle.badge} px-2.5 py-0.5 rounded-full border shrink-0 ml-1.5 shadow-inner">🎧 Bài giảng</span>
            </button>`;
    }
    groups.forEach((subName, idx) => {
        const displayIndex = idx + (Number(topicNum) === 4 ? 2 : 1);
        const style = SUBTOPIC_PALETTES[(displayIndex - 1) % SUBTOPIC_PALETTES.length];
        const hideInternalCode = [3,4,5,6,7,8,9,10,11].includes(Number(topicNum));
        const displayTitle = hideInternalCode ? beautifySubtopicName(groupLabels[subName]) : formatSubtopicLabelWithCode_(subName, groupLabels[subName]);
        const count = groupMap[subName].length;

        subHtml += `
            <button onclick="selectSubtopic(${idx})" class="px-3 py-2.5 ${style.card} border-2 rounded-xl font-bold text-left transition-all flex items-center justify-between gap-2 shadow-sm pastel-btn">
                <span class="text-base md:text-lg leading-tight sm:whitespace-nowrap"><strong class="${style.num} mr-1.5">${displayIndex}.</strong> ${escapeHtml(displayTitle)}</span>
                <span class="text-sm md:text-base font-extrabold ${style.badge} px-2.5 py-0.5 rounded-full border shrink-0 ml-1.5 shadow-inner">${count} câu</span>
            </button>`;
    });
    setSubtopicGridColumns(groups.length + (Number(topicNum) === 4 ? 1 : 0));
    document.getElementById('lecture-subtopics-list').innerHTML = subHtml;

    if (Number(topicNum) === 11) updateNavTabs('Ôn tập', '🧠', topicName);
    else updateDiscoverBreadcrumb_(topicName, TOPICS_CONFIG.find(t => t.id === topicNum)?.icon || '🔢', null);
    switchAppView('view-lecture');
}

function speakLecture() {
    speakVietnamese(document.getElementById('view-lecture').dataset.audioText || '', 0.96);
}

function selectSubtopic(idx) {
    stopSpeaking();
    if (!pendingTopicQuiz) return;
    const { topicNum, topicName, questions, groups, groupMap, groupLabels } = pendingTopicQuiz;
    const subLabel = idx !== null ? groups[idx] : null;
    const pool = idx !== null ? groupMap[subLabel] : questions;
    const displayLabel = subLabel ? formatSubtopicLabelWithCode_(subLabel, groupLabels[subLabel]) : null;
    const finalTitle = displayLabel ? `${topicName} - ${displayLabel}` : topicName;

    practiceCycleRawPool = [...pool];
    const firstCycleQuestions = shuffleArray([...pool]);

    if (Number(topicNum) === 11) updateNavTabs('Ôn tập', '🧠', topicName, displayLabel || 'Tất cả các mục');
    else updateDiscoverBreadcrumb_(topicName, TOPICS_CONFIG.find(t => t.id === topicNum)?.icon || '🔢', displayLabel || 'Tất cả các mục');
    startTopicQuiz(topicNum, finalTitle, firstCycleQuestions, subLabel);
}

// ==========================================
// BÀI TẬP THEO TỪNG BÀI SGK - thay roadmap tuần cũ
// ==========================================
function handleNextExamFromReport() {
    stopSpeaking();
    if (activeRoadmapContext) {
        activeRoadmapContext = null;
        openRoadmap(exerciseSemesterFilter || 1);
    } else if (activeExamContext) {
        activeExamContext = null;
        openExamHub();
    } else {
        goHome();
    }
}

function getExerciseProgressKey_() {
    const id = String(currentUser?.maHS || 'KHACH').toUpperCase();
    return `toan1_bai_tap_unlocked_${id}`;
}

function getCurrentExerciseIndex_() {
    if (!currentUser || currentUser.isGuest) return 1;
    const stored = Number(localStorage.getItem(getExerciseProgressKey_()) || 1);
    return Math.max(1, Number.isFinite(stored) ? stored : 1);
}

function setCurrentExerciseIndex_(idx) {
    if (!currentUser || currentUser.isGuest) return;
    try { localStorage.setItem(getExerciseProgressKey_(), String(Math.max(1, Number(idx) || 1))); } catch (e) {}
}

async function openRoadmap(semesterNumber = exerciseSemesterFilter || 1) {
    if (!requirePremium('Bài tập')) return;
    setAppShellRootMode_(true);
    setMainTabActive_('exercises');
    stopSpeaking();
    clearInterval(quizTimerInterval);
    exerciseSemesterFilter = Number(semesterNumber) || 1;
    activeBaiHocContext = null;
    activeExamContext = null;
    pendingTopicQuiz = null;
    updateNavTabs('Bài tập', '✏️', null);
    switchAppView('view-roadmap');
    showLoadingOverlay('Đang mở Bài tập theo SGK...');
    try {
        const data = await loadBaiHocData();
        renderRoadmapSVG(data);
    } catch (err) {
        showAppNotice(`Không thể mở Bài tập: ${err.message}`, { title: 'Bài tập', icon: '✏️', tone: 'rose' });
    } finally {
        hideLoadingOverlay();
    }
}

function renderRoadmapSVG(data) {
    const container = document.getElementById('roadmap-svg-container');
    if (!container) return;
    const lessons = (data?.bai_tap || []).filter(x => Number(x.semester) === Number(exerciseSemesterFilter));
    const seq = data?.learning_sequence || [];
    const unlockedIndex = getCurrentExerciseIndex_();
    const tabHost = document.getElementById('roadmap-semester-tabs');
    if (tabHost) {
        tabHost.innerHTML = [1,2].filter(sem => (data?.bai_tap || []).some(x => Number(x.semester) === sem)).map(sem => `<button onclick="openRoadmap(${sem})" class="semester-switch-btn ${Number(sem) === Number(exerciseSemesterFilter) ? 'is-active' : 'is-inactive'}">Học kỳ ${sem}</button>`).join('');
    }

    container.className = 'w-full bg-gradient-to-br from-pink-50/70 via-white to-purple-50/70 rounded-3xl border-2 border-pink-200 p-3 shadow-sm';
    container.innerHTML = `<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2">${lessons.map((ex, idx) => {
        const seqIndex = seq.indexOf(Number(ex.bai)) + 1;
        const locked = seqIndex > unlockedIndex;
        const open = !locked;
        return `<button onclick="${open ? `selectRoadmapWeek(${seqIndex})` : `showLockedExercise_(${ex.bai})`}" class="relative text-left min-h-[92px] rounded-2xl border-2 p-3 ${open ? (idx % 2 ? 'bg-purple-50 border-purple-200 hover:border-purple-400' : 'bg-pink-50 border-pink-200 hover:border-pink-400') : 'bg-slate-50 border-slate-200 opacity-60'} hover:shadow-md transition-shadow">
            <div class="flex justify-between gap-2"><span class="font-black ${open ? 'text-purple-700' : 'text-slate-500'}">Bài ${ex.bai}</span><span>${open ? '' : '🔒'}</span></div>
            <div class="text-[12px] md:text-[13px] font-bold text-slate-600 mt-1 line-clamp-2">${escapeHtml(ex.title || '')}</div>
            <div class="text-[10px] mt-1 ${open ? 'text-emerald-600' : 'text-slate-400'} font-black">${open ? '20 câu' : 'Cần ≥80% bài trước'}</div>
        </button>`;
    }).join('')}</div>`;
}

function showLockedExercise_(bai) {
    showAppNotice(`Bài tập ${bai} chưa mở. Bé cần đạt từ 80% ở Bài tập trước để mở khóa nhé!`, { title:'Bài tập đang khóa', icon:'🔒', tone:'amber' });
}

function questionMatchesFilter_(q, filter) {
    if (!q || !filter) return false;
    if (filter.sub_id && String(q.sub_topic) !== String(filter.sub_id)) return false;
    const c = filter.constraints || {};
    const text = `${q.question_text || ''} ${(q.options || []).join(' ')} ${q.answer || ''}`.toLowerCase();
    const nums = [...text.matchAll(/\b\d+\b/g)].map(m => Number(m[0])).filter(Number.isFinite);
    const answerNum = Number(String(q.answer || '').replace(',', '.'));

    if (c.number_min != null && Number.isFinite(answerNum) && answerNum < Number(c.number_min)) return false;
    if (c.number_max != null && Number.isFinite(answerNum) && answerNum > Number(c.number_max)) return false;

    if (c.operation) {
        const op = String(c.operation);
        const hasPlus = /\+|cộng|thêm|tất cả|gộp/.test(text);
        const hasMinus = /-|−|trừ|bớt|còn lại|lấy đi/.test(text);
        if (op === 'addition' && !hasPlus) return false;
        if (op === 'subtraction' && !hasMinus) return false;
        if (op === 'add_subtract_facts' && !(hasPlus || hasMinus)) return false;
    }

    if (c.left_digits || c.right_digits || c.no_carry || c.no_borrow) {
        const m = String(q.question_text || '').match(/(\d+)\s*([+\-−])\s*(\d+)/);
        if (m) {
            const a = Number(m[1]), op = m[2], b = Number(m[3]);
            if (c.left_digits && String(a).length !== Number(c.left_digits)) return false;
            if (c.right_digits && String(b).length !== Number(c.right_digits)) return false;
            if (c.no_carry && op === '+' && ((a % 10) + (b % 10) >= 10)) return false;
            if (c.no_borrow && (op === '-' || op === '−') && ((a % 10) < (b % 10))) return false;
        }
    }

    if (Array.isArray(c.operators) && c.operators.length && !c.operators.some(op => text.includes(op))) {
        // Một số câu so sánh viết bằng lời; vẫn cho qua nếu chứa từ khóa so sánh.
        if (!/so sánh|lớn hơn|bé hơn|nhỏ hơn|bằng nhau/.test(text)) return false;
    }

    if (Array.isArray(c.units) && c.units.length && !c.units.some(u => text.includes(String(u).toLowerCase()))) {
        return false;
    }

    if (c.time_mode === 'whole_hour' && !/giờ|đồng hồ/.test(text)) return false;
    if (c.calendar_mode && !/ngày|tuần|thứ|lịch|hôm qua|hôm nay|ngày mai|giờ/.test(text)) return false;

    return true;
}

function buildExerciseQuestions_(exercise, allQuestions) {
    const selected = [];
    const used = new Set();
    const filters = [...(exercise?.question_bank_filters || [])].sort((a,b) => Number(a.priority || 9) - Number(b.priority || 9));

    for (const filter of filters) {
        const pool = shuffleArray(allQuestions.filter(q => questionMatchesFilter_(q, filter)));
        for (const q of pool) {
            const key = String(q.question_id);
            if (used.has(key)) continue;
            used.add(key);
            selected.push(q);
            if (selected.length >= Number(exercise.question_count || 20)) break;
        }
        if (selected.length >= Number(exercise.question_count || 20)) break;
    }

    // Nếu bộ lọc chi tiết quá chặt, bù từ đúng sub_id của bài, tuyệt đối không lấy ngoài phạm vi chủ đề.
    if (selected.length < Number(exercise.question_count || 20)) {
        const allowed = new Set((exercise.sub_ids || []).map(String));
        const fallback = shuffleArray(allQuestions.filter(q => allowed.has(String(q.sub_topic))));
        for (const q of fallback) {
            const key = String(q.question_id);
            if (used.has(key)) continue;
            used.add(key);
            selected.push(q);
            if (selected.length >= Number(exercise.question_count || 20)) break;
        }
    }

    return shuffleArray(selected).slice(0, Number(exercise.question_count || 20));
}

async function selectRoadmapWeek(sequenceIndex) {
    setAppShellRootMode_(false);
    stopSpeaking();
    const data = await loadBaiHocData();
    const seq = data?.learning_sequence || [];
    const baiNumber = seq[Number(sequenceIndex) - 1];
    const exercise = (data?.bai_tap || []).find(x => Number(x.bai) === Number(baiNumber));
    if (!exercise) return;

    const unlockedIndex = getCurrentExerciseIndex_();
    if (Number(sequenceIndex) > unlockedIndex) {
        const currentBai = seq[unlockedIndex - 1] || seq[0];
        showAppNotice(`Bài tập ${exercise.bai} đang được khóa. Con hãy hoàn thành Bài tập ${currentBai} đạt từ 80% trở lên để mở bài tiếp theo nhé!`, { title: 'Bài tập chưa mở', icon: '🔒', tone: 'purple' });
        return;
    }

    activeRoadmapContext = {
        week: Number(sequenceIndex),
        bai: Number(exercise.bai),
        topicId: exercise.sub_ids?.[0] || '',
        chuDe: `Bài ${exercise.bai}. ${exercise.title}`,
        exerciseId: exercise.exercise_id,
        semester: Number(exercise.semester)
    };
    exerciseSemesterFilter = Number(exercise.semester) || exerciseSemesterFilter;
    activeBaiHocContext = null;
    pendingTopicQuiz = null;
    activeExamContext = null;
    updateNavTabs('Bài tập', '✏️', `Bài ${exercise.bai}`, exercise.title);

    showLoadingOverlay(`Đang chuẩn bị 20 câu Bài tập ${exercise.bai}...`);
    try {
        const allQuestions = await fetchAllQuestionsFlat();
        const questions = buildExerciseQuestions_(exercise, allQuestions);
        if (!questions.length) {
            showAppNotice('Bài này đang được bổ sung thêm câu hỏi phù hợp, bé quay lại sau nhé!', { title: 'Bài tập', icon: '✏️', tone: 'amber' });
            return;
        }
        if (questions.length < Number(exercise.question_count || 20)) {
            showAppNotice(`Hiện bài này có ${questions.length} câu phù hợp trong kho. Hệ thống sẽ cho bé luyện các câu đã được kiểm tra trước nhé!`, { title: 'Kho câu hỏi', icon: '🧩', tone: 'amber' });
        }
        startTopicQuiz(sequenceIndex, activeRoadmapContext.chuDe, questions, null);
    } catch (err) {
        showAppNotice(`Không thể tải Bài tập: ${err.message}`, { title: 'Bài tập', icon: '✏️', tone: 'rose' });
    } finally {
        hideLoadingOverlay();
    }
}

// ==========================================
// LOGIC CHẤM ĐIỂM & ĐIỀU KHIỂN CÂU HỎI
// ==========================================
function startTopicQuiz(topicNum, topicName, questions, subLabel) {
    setAppShellRootMode_(false);
    stopSpeaking();
    clearInterval(quizTimerInterval);
    activeQuestionsList = questions; 
    currentQIndex = 0; 
    score = 0;
    userAnswers = {};
    wrongAttemptsByQ = {};
    quizWrongAnswers = []; 
    quizAnsweredLog = []; 
    quizStartTime = Date.now();

    const topBar = document.getElementById('quiz-top-bar');
    const cardHeader = document.getElementById('quiz-card-header');
    const navPractice = document.getElementById('nav-group-practice');
    const navExam = document.getElementById('nav-group-exam');

    const submitBtn = document.getElementById('btn-submit-quiz');
    if (submitBtn) {
        if (activeRoadmapContext) submitBtn.classList.add('hidden');
        else submitBtn.classList.remove('hidden');
    }

    const roadmapHistoryBtn = document.getElementById('btn-roadmap-history');
    if (roadmapHistoryBtn) {
        if (activeRoadmapContext) { roadmapHistoryBtn.classList.remove('hidden'); roadmapHistoryBtn.classList.add('flex'); }
        else { roadmapHistoryBtn.classList.add('hidden'); roadmapHistoryBtn.classList.remove('flex'); }
    }

    if (activeRoadmapContext || activeExamContext) {
        if (topBar) {
            if (activeExamContext) topBar.classList.remove('hidden');
            else topBar.classList.add('hidden');
        }
        const timerBox = document.getElementById('quiz-timer-container');
        if (activeExamContext) {
            if (timerBox) timerBox.classList.remove('hidden');
            startExamCountdown();
        } else {
            if (timerBox) timerBox.classList.add('hidden');
        }
        if (cardHeader) { cardHeader.classList.remove('hidden'); cardHeader.classList.add('flex'); }
        if (navPractice) navPractice.classList.add('hidden');
        if (navExam) { navExam.classList.remove('hidden'); navExam.classList.add('flex'); }
        initQuizPallet();
    } else {
        if (topBar) topBar.classList.add('hidden');
        if (cardHeader) { cardHeader.classList.add('hidden'); cardHeader.classList.remove('flex'); }
        if (navPractice) { navPractice.classList.remove('hidden'); navPractice.classList.add('flex'); }
        if (navExam) { navExam.classList.add('hidden'); navExam.classList.remove('flex'); }
    }

    switchAppView('view-quiz');
    loadQuestion();
}


// ==========================================
// FOUNDATION UI - MUC 1 & 2: TRUC QUAN CHO BE LOP 1
// Giữ engine/breadcrumb hiện tại, chỉ thay cách trình bày câu luyện tập.
// ==========================================
function getFoundationEmojiSeed(q) {
    const text = String(q?.question_text || '').toLowerCase();
    const matches = String(q?.question_text || '').match(/\p{Extended_Pictographic}/gu) || [];
    const ignored = new Set(['❌','❓','❔','➕','➖','✖️','✔️','✅','🧺','📦','🏠','🅿️']);
    const found = matches.find(x => !ignored.has(x));
    if (found) return found;

    const rules = [
        [/bút|bút chì|viết/, '✏️'], [/táo/, '🍎'], [/cam/, '🍊'], [/dâu/, '🍓'],
        [/kẹo/, '🍬'], [/bánh/, '🍪'], [/cá/, '🐟'], [/chim/, '🐦'], [/thỏ/, '🐰'],
        [/gà|gà con/, '🐥'], [/hoa/, '🌼'], [/bóng bay|quả bóng/, '🎈'], [/ô tô|xe/, '🚗'],
        [/cà rốt/, '🥕'], [/bướm/, '🦋'], [/sao/, '⭐'], [/quả/, '🍎']
    ];
    for (const [re, emoji] of rules) if (re.test(text)) return emoji;
    return '⭐';
}

function repeatFoundationEmoji(emoji, count, underlinedCount = 0) {
    const n = Number(count);
    const u = Math.max(0, Math.min(n, Number(underlinedCount) || 0));
    if (!Number.isFinite(n) || n < 0 || n > 10) return '<span class="text-4xl md:text-5xl">❔</span>';
    if (n === 0) return '<span class="text-4xl md:text-5xl font-black text-slate-300">∅</span>';

    // Một hàng ngang duy nhất. Kích thước vừa phải để toàn bộ 0-10 luôn nằm gọn trong khung.
    const sizeClass = n >= 9
        ? 'text-[27px] md:text-[32px] lg:text-[36px]'
        : n >= 7
            ? 'text-[30px] md:text-[36px] lg:text-[40px]'
            : 'text-[34px] md:text-[40px] lg:text-[44px]';

    return `<span class="inline-flex flex-nowrap items-end justify-center gap-1 md:gap-1.5 ${sizeClass} leading-none whitespace-nowrap">${Array.from({ length: n }, (_, i) => {
        const underline = i >= (n - u);
        return underline
            ? `<span class="inline-flex items-end border-b-[3px] md:border-b-[4px] border-rose-500 pb-1">${emoji}</span>`
            : `<span class="inline-flex items-end pb-[4px] md:pb-[5px]">${emoji}</span>`;
    }).join('')}</span>`;
}

function buildFoundationEquationVisual(q, expression) {
    const m = String(expression || '').match(/(\d+|\?)\s*([+−-])\s*(\d+|\?)\s*=\s*(\d+|\?)/);
    if (!m) return '';
    const [, left, opRaw, right, result] = m;
    const op = opRaw === '-' ? '−' : opRaw;
    const emoji = getFoundationEmojiSeed(q);
    const isMinus = op === '−';
    const leftN = Number(left);
    const rightN = Number(right);
    const canUnderline = isMinus && Number.isFinite(leftN) && Number.isFinite(rightN) && rightN >= 0 && rightN <= leftN;

    // Mỗi số chỉ xuất hiện MỘT lần. Emoji đặt ngay dưới đúng số tương ứng.
    // Với phép trừ, gạch chân đúng số vật bị bớt trong nhóm bên trái để bé đếm phần còn lại.
    const operand = (value, underlineCount = 0, showEmoji = true) => `
        <div class="min-w-0 flex flex-col items-center justify-start">
            <div class="text-[46px] md:text-[54px] lg:text-[60px] font-black text-indigo-700 leading-none mb-3">${escapeHtml(value)}</div>
            <div class="min-h-[54px] md:min-h-[62px] flex items-center justify-center">
                ${showEmoji ? (value === '?' ? '<span class="text-4xl md:text-5xl">❔</span>' : repeatFoundationEmoji(emoji, value, underlineCount)) : ''}
            </div>
        </div>`;

    return `
        <div class="w-full flex items-start justify-center gap-2 md:gap-4 lg:gap-5 px-1 overflow-hidden">
            ${operand(left, canUnderline ? rightN : 0, true)}
            <div class="pt-1 text-[42px] md:text-[50px] lg:text-[56px] font-black ${isMinus ? 'text-rose-500' : 'text-emerald-500'} leading-none">${op}</div>
            ${operand(right, 0, true)}
            <div class="pt-1 text-[42px] md:text-[50px] lg:text-[56px] font-black text-slate-300 leading-none">=</div>
            <div class="pt-0 min-w-[52px] text-center text-[46px] md:text-[54px] lg:text-[60px] font-black text-pink-600 leading-none">${escapeHtml(result)}</div>
        </div>`;
}

function buildFoundationEmptyScene(q) {
    const text = String(q?.question_text || '').toLowerCase();
    const objectEmoji = getFoundationEmojiSeed(q);
    let container = '';
    if (/giỏ/.test(text)) container = '🧺';
    else if (/hộp/.test(text)) container = '📦';
    else if (/phòng/.test(text)) container = '🏠';
    else if (/bãi đỗ/.test(text)) container = '🅿️';
    else if (/đĩa/.test(text)) container = '🍽️';
    else if (/bể cá/.test(text)) container = '🫙';
    else if (/cành/.test(text)) container = '🌿';
    else if (/chậu|luống/.test(text)) container = '🪴';

    return `
        <div class="flex flex-col items-center justify-center gap-4">
            <div class="text-[110px] md:text-[145px] lg:text-[170px] leading-none">${container || '∅'}</div>
            <div class="flex items-center gap-4 md:gap-6">
                <span class="text-[70px] md:text-[88px] font-black text-indigo-700 leading-none">0</span>
                <span class="text-4xl md:text-5xl font-black text-slate-300">×</span>
                <span class="text-[64px] md:text-[82px] leading-none opacity-45">${objectEmoji}</span>
            </div>
        </div>`;
}

function buildFoundationSceneVisual(q) {
    const text = String(q?.question_text || '');
    const lower = text.toLowerCase();
    const lines = text.split(/\n/).map(x => x.trim()).filter(Boolean);

    // Câu về số 0: minh họa đúng ngữ nghĩa, tuyệt đối không dùng emoji ngẫu nhiên.
    if (/không có|trống|hết sạch|đã hết|không còn|rỗng|số 0|“không có”|"không có"/.test(lower) && !/giỏ a.*giỏ b/i.test(lower)) {
        return buildFoundationEmptyScene(q);
    }

    const groupLine = lines.find(line => /nhìn nhóm hình\s*:/i.test(line));
    if (groupLine) {
        const scene = groupLine.replace(/^.*?:\s*/, '').trim();
        return `<div class="w-full flex items-center justify-center text-[78px] md:text-[105px] lg:text-[128px] leading-[1.25] break-words select-none">${escapeHtml(scene)}</div>`;
    }

    const emojiLines = lines.filter(line => /\p{Extended_Pictographic}/u.test(line));
    if (emojiLines.length) {
        return emojiLines.map(line => {
            let scene = line;
            const colon = line.indexOf(':');
            if (colon >= 0 && colon < 28) scene = line.slice(colon + 1).trim();

            const hasQuestionWords = /(có bao nhiêu|chọn số|đếm|quan sát|con hãy|hãy|tất cả|biểu diễn đúng)/i.test(line);
            const emojisOnly = (scene.match(/\p{Extended_Pictographic}/gu) || []).join(' ');
            const nonEmojiText = scene.replace(/\p{Extended_Pictographic}/gu, '').replace(/[\s?.,:;!"'“”‘’()+\-]/g, '').trim();

            // Dòng câu hỏi có lẫn emoji chỉ thuộc prompt bên phải, không đưa vào khung trực quan.
            if (hasQuestionWords && nonEmojiText.length > 6 && colon < 0) return '';

            // Nếu một dòng vừa có chữ mô tả vừa có emoji, ưu tiên chỉ giữ hình để tránh chữ bị phóng lớn.
            if (emojisOnly && nonEmojiText.length > 0) scene = emojisOnly;

            const parts = scene.split(/\s+và\s+/i);
            if (parts.length === 2) {
                return `<div class="w-full flex items-center justify-center gap-4 md:gap-8 my-2">
                    <div class="flex-1 text-center text-[60px] md:text-[78px] lg:text-[92px] leading-[1.22] break-words select-none">${escapeHtml(parts[0])}</div>
                    <div class="text-2xl md:text-3xl font-black text-pink-500">và</div>
                    <div class="flex-1 text-center text-[60px] md:text-[78px] lg:text-[92px] leading-[1.22] break-words select-none">${escapeHtml(parts[1])}</div>
                </div>`;
            }
            return `<div class="w-full text-center text-[60px] md:text-[80px] lg:text-[96px] leading-[1.24] break-words select-none">${escapeHtml(scene)}</div>`;
        }).filter(Boolean).join('');
    }

    // Hai giỏ / hai nhóm đặc biệt.
    if (/giỏ a.*giỏ b/i.test(lower)) {
        return `<div class="w-full flex items-end justify-center gap-10 md:gap-16">
            <div class="text-center"><div class="text-2xl font-black text-slate-600 mb-2">A</div><div class="text-[110px] md:text-[145px]">🧺</div><div class="text-5xl font-black text-indigo-700">0</div></div>
            <div class="text-center"><div class="text-2xl font-black text-slate-600 mb-2">B</div><div class="text-[110px] md:text-[145px]">🧺</div><div class="text-[70px] md:text-[88px]">🍎</div></div>
        </div>`;
    }

    const comparison = text.match(/(?:chọn dấu thích hợp:\s*)?(\d+)\s*\?\s*(\d+)/i);
    if (comparison) {
        return `<div class="text-[82px] md:text-[105px] lg:text-[126px] font-black text-indigo-700 tracking-[0.06em]">${comparison[1]} <span class="text-pink-500">?</span> ${comparison[2]}</div>`;
    }

    const seq = text.match(/(?:điền số[^:]*:\s*)?([0-9?,\s]+)/i);
    if (seq && /\d/.test(seq[1]) && (seq[1].includes(',') || seq[1].includes('?'))) {
        return `<div class="px-4 text-[52px] md:text-[68px] lg:text-[82px] font-black text-indigo-700 leading-relaxed tracking-wide">${escapeHtml(seq[1].trim())}</div>`;
    }

    const quoted = text.match(/[“"]([^”"]+)[”"]/);
    if (quoted) {
        return `<div class="flex flex-col items-center gap-4"><div class="text-[95px] md:text-[120px]">👂</div><div class="text-[58px] md:text-[76px] lg:text-[90px] font-black text-indigo-700">${escapeHtml(quoted[1])}</div></div>`;
    }

    // Fallback có nghĩa: vật thể được suy ra từ từ khóa, không random theo ID.
    const icon = getFoundationEmojiSeed(q);
    const nums = text.match(/\b(?:10|[0-9])\b/g) || [];
    return `<div class="flex flex-col items-center justify-center gap-4">
        <div class="text-[120px] md:text-[155px] lg:text-[180px] leading-none">${icon}</div>
        ${nums.length ? `<div class="text-[58px] md:text-[76px] font-black text-indigo-700">${escapeHtml(nums.slice(0, 3).join('   '))}</div>` : ''}
    </div>`;
}

function getFoundationPrompt(q) {
    const text = String(q?.question_text || '');
    const lines = text.split(/\n/).map(x => x.trim()).filter(Boolean);
    const expressionRe = /(?:\d+|\?)\s*[+−-]\s*(?:\d+|\?)\s*=\s*(?:\d+|\?)/;
    const cleaned = [];
    for (const line of lines) {
        if (expressionRe.test(line)) continue;
        if (/^\s*[\p{Extended_Pictographic}∅\s❌]+\s*$/u.test(line)) continue;
        if (/^(ban đầu|bớt đi)\s*:/i.test(line)) continue;
        if (/nhìn nhóm hình\s*:/i.test(line)) {
            const after = line.replace(/^.*?:\s*/, '').replace(/\p{Extended_Pictographic}/gu, '').replace(/∅/g,'').trim();
            if (after) cleaned.push(after);
            continue;
        }
        if (/\p{Extended_Pictographic}/u.test(line)) {
            const noEmoji = line.replace(/\p{Extended_Pictographic}/gu, '').replace(/[|]+/g, ' ').replace(/\s+/g, ' ').trim();
            if (noEmoji && !/^(và|a:|b:)$/i.test(noEmoji)) cleaned.push(noEmoji);
            continue;
        }
        cleaned.push(line);
    }
    let prompt = [...new Set(cleaned)].join(' ').replace(/\s+/g,' ').trim();
    // Rút gọn vài câu nền tảng để bé tập trung vào hình.
    prompt = prompt
        .replace(/^gộp hai nhóm\.\s*/i, '')
        .replace(/^nhìn hình rồi\s*/i, '')
        .replace(/^bé hãy\s*/i, '')
        .replace(/^hãy\s*/i, '')
        .replace(/\s*[+−-]\s*$/u, '')
        .replace(/\s+/g, ' ')
        .trim();
    return prompt || 'Con chọn đáp án đúng nhé!';
}



let muc1UiState = null;

function getMuc1QuestionKey_(q) {
    return `${q?.id ?? 'q'}::${q?.sub_topic || ''}::${q?.question_text || ''}`;
}

function extractEmojiTokens_(text) {
    return String(text || '').match(/\p{Extended_Pictographic}/gu) || [];
}

function getMuc1NumericAnswer_(q) {
    const raw = String(q?.answer ?? '').trim();
    if (!raw) return null;
    const n = Number(raw.replace(',', '.'));
    return Number.isFinite(n) ? n : null;
}

function getMuc1ReadablePrompt(q) {
    const lines = String(q?.question_text || '').split('\n').map(x => x.trim()).filter(Boolean);
    const sub = String(q?.sub_topic || '');
    if (sub === '1.1' || sub === '1.2') {
        const lastQuestionLine = [...lines].reverse().find(line => /\?$/.test(line)) || lines[lines.length - 1] || 'Con hãy đếm thật kĩ nhé!';
        return lastQuestionLine.replace(/^Số nào biểu diễn đúng số lượng này\??\s*/i, 'Có bao nhiêu hình? ');
    }
    if (sub === '1.3') return lines[lines.length - 1] || 'Con hãy so sánh hai nhóm nhé!';
    if (sub === '1.4') return lines[lines.length - 1] || lines[0] || 'Con hãy so sánh thật kĩ nhé!';
    if (sub === '1.5') return lines.find(line => /\?$/.test(line)) || lines[0] || 'Con hãy tìm phần còn lại nhé!';
    return getFoundationPrompt(q);
}

function initMuc1UiState_(q) {
    const key = getMuc1QuestionKey_(q);
    if (muc1UiState && muc1UiState.key === key) return muc1UiState;

    const sub = String(q?.sub_topic || '');
    const state = { key, sub, mode: sub, dragType: null };

    if (sub === '1.1' || sub === '1.2') {
        let target = getMuc1NumericAnswer_(q);
        if (!Number.isFinite(target)) {
            const emojiCount = extractEmojiTokens_(q?.question_text || '').length;
            target = emojiCount;
        }
        const frameSize = sub === '1.1' ? 5 : 10;
        state.frameSize = frameSize;
        state.target = Math.max(0, Math.min(frameSize, Number(target) || 0));
        state.placed = 0;
        state.emoji = getFoundationEmojiSeed(q);
    } else if (sub === '1.5') {
        const text = String(q?.question_text || '');
        const nums = [...text.matchAll(/\d+/g)].map(m => Number(m[0]));
        const whole = Number(nums[0] || getMuc1NumericAnswer_(q) || 0);
        const known = Number(nums[1] || 0);
        state.whole = Math.max(0, Math.min(10, whole));
        state.known = Math.max(0, Math.min(state.whole, known));
        state.missing = Math.max(0, state.whole - state.known);
        state.placed = 0;
        state.emoji = getFoundationEmojiSeed(q);
    }

    muc1UiState = state;
    return state;
}

function resetMuc1UiState_() {
    muc1UiState = null;
}

function buildMuc1TopNumberStrip_(count, showFilledOnly = true) {
    return Array.from({ length: count }, (_, i) => `
        <div class="w-11 md:w-12 text-center text-sm md:text-base font-black ${showFilledOnly ? 'text-slate-400' : 'text-violet-500'}">
            ${showFilledOnly ? '' : i + 1}
        </div>`).join('');
}

function getMuc1FrameCellTone_(index, frameSize) {
    if (frameSize !== 10) return 'bg-pink-50 border-pink-200';
    return index < 5 ? 'bg-amber-50 border-amber-200' : 'bg-sky-50 border-sky-200';
}

function buildMuc1CountingVisual_(q) {
    const state = initMuc1UiState_(q);
    const cellSizeClass = state.frameSize === 10 ? 'w-11 h-12 md:w-12 md:h-12 lg:w-[52px] lg:h-[54px]' : 'w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16';
    const emojiSizeClass = 'text-[24px] md:text-[26px] lg:text-[28px]';
    const slots = Array.from({ length: state.frameSize }, (_, i) => {
        const filled = i < state.placed;
        const tone = getMuc1FrameCellTone_(i, state.frameSize);
        return `
            <div class="flex flex-col items-center gap-1 shrink-0">
                <div class="h-8 md:h-9 text-lg md:text-xl lg:text-2xl font-black leading-none ${filled ? 'text-violet-700' : 'text-transparent'}">${i + 1}</div>
                <button type="button" onclick="muc1PlaceCountItem()" ondragover="event.preventDefault()" ondrop="muc1HandleDrop(event, 'count')" class="${cellSizeClass} rounded-xl border-2 ${tone} flex items-center justify-center shadow-inner">
                    ${filled ? `<span class="${emojiSizeClass} leading-none">${state.emoji}</span>` : '<span class="text-pink-200 text-lg font-black">+</span>'}
                </button>
            </div>`;
    }).join('');

    const remaining = Math.max(0, state.target - state.placed);
    const sourceItems = Array.from({ length: remaining }, (_, i) => `
        <button type="button" draggable="true" ondragstart="muc1HandleDragStart(event, 'count', ${i})" onclick="muc1PlaceCountItem()" class="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-white border-2 border-violet-200 hover:border-violet-400 shadow-sm flex items-center justify-center text-[24px] md:text-[26px] lg:text-[28px] leading-none transition-transform hover:scale-105">${state.emoji}</button>
    `).join('');

    const doneHtml = state.placed >= state.target
        ? `<div class="text-center text-sm md:text-base font-black text-emerald-600 mt-2">Con đã đếm xong rồi. Bây giờ con chọn đáp án nhé!</div>`
        : `<div class="text-center text-base md:text-lg font-black text-violet-600 mt-2">Con kéo từng hình lên các ô từ trái sang phải nhé.</div>`;

    return `
        <div class="w-full flex flex-col items-center justify-center">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-base md:text-lg font-black mb-3 shadow-sm">
                <span>🐰</span><span>Bước 1: Kéo từng hình lên hàng ô để đếm.</span>
            </div>
            <div class="grid grid-cols-5 md:grid-cols-10 gap-1 md:gap-1.5 justify-items-center w-full max-w-[760px] px-1 md:px-2 overflow-visible">${slots}</div>
            <div class="w-full max-w-[640px] h-px bg-pink-100 my-4"></div>
            <div class="flex flex-wrap items-center justify-center gap-3 md:gap-4 min-h-[70px] w-full px-2">${sourceItems || '<span class="text-base md:text-lg font-black text-slate-400">Không còn hình nào để kéo.</span>'}</div>
            <div class="mt-3 flex items-center gap-2">
                <button type="button" onclick="muc1ResetInteraction()" class="px-3 py-1.5 rounded-full border border-pink-200 bg-pink-50 text-pink-700 text-base md:text-lg font-black pastel-btn shadow-xs">Làm lại</button>
                <div class="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-base md:text-lg font-black shadow-xs">Đã kéo: ${state.placed} / ${state.target}</div>
            </div>
            ${doneHtml}
        </div>`;
}

function parseMuc1CompareFrameData_(q) {
    const text = String(q?.question_text || '');
    const lines = text.split('\n').map(x => x.trim()).filter(Boolean);
    const emojiLines = lines.filter(line => extractEmojiTokens_(line).length > 0);
    let topTokens = extractEmojiTokens_(emojiLines[0] || '');
    let bottomTokens = extractEmojiTokens_(emojiLines[1] || '');
    if (!topTokens.length || !bottomTokens.length) {
        const nums = [...text.matchAll(/\d+/g)].map(m => Number(m[0]));
        const a = Number(nums[0] || 0), b = Number(nums[1] || 0);
        topTokens = Array.from({ length: a }, () => '🍊');
        bottomTokens = Array.from({ length: b }, () => '🍎');
    }
    return {
        topEmoji: topTokens[0] || '🍊',
        bottomEmoji: bottomTokens[0] || '🍎',
        topCount: topTokens.length,
        bottomCount: bottomTokens.length
    };
}

function buildMuc1CompareWithFrameVisual_(q) {
    const data = parseMuc1CompareFrameData_(q);
    const numbers = Array.from({ length: 10 }, (_, i) => `<div class="w-11 md:w-12 lg:w-[52px] text-center text-lg md:text-xl lg:text-2xl font-black text-violet-700">${i + 1}</div>`).join('');
    const buildRow = (count, emoji, rowTone) => Array.from({ length: 10 }, (_, i) => {
        const filled = i < count;
        const tone = i < 5 ? rowTone[0] : rowTone[1];
        return `<div class="w-11 h-11 md:w-12 md:h-12 lg:w-[52px] lg:h-[52px] rounded-xl border-2 ${tone} flex items-center justify-center shadow-inner">${filled ? `<span class="text-[24px] md:text-[26px] lg:text-[28px] leading-none">${emoji}</span>` : ''}</div>`;
    }).join('');

    return `
        <div class="w-full flex flex-col items-center justify-center">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-base md:text-lg font-black mb-3 shadow-sm">
                <span>👀</span><span>Con nhìn xem hàng nào dài hơn nhé.</span>
            </div>
            <div class="grid grid-cols-5 md:grid-cols-10 gap-1 md:gap-1.5 justify-items-center w-full max-w-[760px] px-1 md:px-2 mb-1">${numbers}</div>
            <div class="grid grid-cols-5 md:grid-cols-10 gap-1 md:gap-1.5 justify-items-center w-full max-w-[760px] px-1 md:px-2 mb-3">${buildRow(data.topCount, data.topEmoji, ['bg-amber-50 border-amber-200','bg-orange-50 border-orange-200'])}</div>
            <div class="grid grid-cols-5 md:grid-cols-10 gap-1 md:gap-1.5 justify-items-center w-full max-w-[760px] px-1 md:px-2">${buildRow(data.bottomCount, data.bottomEmoji, ['bg-sky-50 border-sky-200','bg-violet-50 border-violet-200'])}</div>
            <div class="mt-3 text-center text-base md:text-lg font-black text-slate-700">Hàng nào dài hơn thì nhóm đó nhiều hơn.</div>
        </div>`;
}

function parseMuc1CompareNumbers_(q) {
    const text = String(q?.question_text || '');
    let m = text.match(/số\s+(\d+)\s+và\s+(\d+)/i);
    if (!m) m = text.match(/(\d+)\s*\?\s*(\d+)/);
    if (!m) {
        const nums = [...text.matchAll(/\d+/g)].map(x => Number(x[0]));
        if (nums.length >= 2) m = [null, nums[0], nums[1]];
    }
    const a = Number(m?.[1] || 0);
    const b = Number(m?.[2] || 0);
    return { a, b, topEmoji: '🍊', bottomEmoji: '🍎' };
}

function buildMuc1EmojiRowWithoutFrame_(count, emoji) {
    const n = Math.max(0, Math.min(10, Number(count) || 0));
    const sizeClass = 'text-[24px] md:text-[26px] lg:text-[28px]';
    // Giữ 10 vị trí cố định để số lượng ít hay nhiều đều có cùng kích thước emoji.
    return `<div class="grid grid-cols-5 md:grid-cols-10 items-center w-full max-w-[660px] px-1 md:px-2 ${sizeClass}">${Array.from({ length: 10 }, (_, i) => `
        <div class="min-w-0 h-[50px] md:h-[58px] flex items-center justify-center">${i < n ? `<span class="leading-none">${emoji}</span>` : ''}</div>
    `).join('')}</div>`;
}

function buildMuc1CompareWithoutFrameVisual_(q) {
    const data = parseMuc1CompareNumbers_(q);
    return `
        <div class="w-full flex flex-col items-center justify-center gap-4">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-base md:text-lg font-black shadow-sm">
                <span>🧠</span><span>Con tự đếm từng hàng rồi so sánh nhé.</span>
            </div>
            <div class="w-full max-w-[660px] rounded-2xl bg-white/85 border border-pink-100 px-4 md:px-6 py-4 shadow-sm">
                <div class="flex justify-center mb-3">${buildMuc1EmojiRowWithoutFrame_(data.a, data.topEmoji)}</div>
                <div class="w-3/4 mx-auto h-px bg-pink-100 mb-3"></div>
                <div class="flex justify-center">${buildMuc1EmojiRowWithoutFrame_(data.b, data.bottomEmoji)}</div>
            </div>
        </div>`;
}

function buildMuc1PartWholeVisual_(q) {
    const state = initMuc1UiState_(q);
    const selectedKnown = Math.min(state.placed, state.known);
    const done = selectedKnown >= state.known;

    // Bé bấm lần lượt các hình ở "Nhóm đã biết".
    // Mỗi lần bấm, một hình tương ứng ở hàng tổng được gạch chân từ trái sang phải.
    // Khi đã bấm đủ phần biết, phần KHÔNG gạch chân chính là phần còn lại.
    const wholeStrip = Array.from({ length: state.whole }, (_, i) => {
        const underlined = i < selectedKnown;
        const isRemaining = done && i >= state.known;
        const remainingClass = isRemaining
            ? 'bg-amber-100 ring-2 ring-amber-300 rounded-lg px-1 py-1'
            : '';
        return `
            <span class="inline-flex items-end text-[24px] md:text-[26px] lg:text-[28px] leading-none ${remainingClass} ${underlined ? 'border-b-[4px] md:border-b-[5px] border-rose-500 pb-1' : 'pb-[5px] md:pb-[6px]'}">
                ${state.emoji}
            </span>`;
    }).join('');

    const knownStrip = Array.from({ length: state.known }, (_, i) => {
        const used = i < selectedKnown;
        return `
            <button type="button" onclick="muc1PlacePartItem()" ${used ? 'disabled' : ''}
                class="w-11 h-11 md:w-12 md:h-12 rounded-full border-2 ${used ? 'border-emerald-100 bg-emerald-50 opacity-30' : 'border-emerald-200 bg-white hover:border-emerald-400 hover:scale-105'} flex items-center justify-center shadow-sm transition-all">
                <span class="text-[24px] md:text-[26px] lg:text-[28px] leading-none">${state.emoji}</span>
            </button>`;
    }).join('');

    const remainingStrip = done
        ? Array.from({ length: state.missing }, () => `
            <span class="w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-pink-200 bg-white flex items-center justify-center shadow-sm">
                <span class="text-[24px] md:text-[26px] lg:text-[28px] leading-none">${state.emoji}</span>
            </span>`).join('')
        : `<div class="text-3xl md:text-4xl font-black text-pink-300 leading-none">?</div>`;

    return `
        <div class="w-full flex flex-col items-center justify-center">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-base md:text-lg font-black mb-2 shadow-sm">
                <span>🐰</span><span>Con ấn lần lượt vào các hình ở phần đã biết nhé.</span>
            </div>

            <div class="rounded-2xl border border-amber-200 bg-amber-50/70 px-4 py-2.5 shadow-sm mb-2.5 w-full max-w-[640px]">
                <div class="text-center text-base md:text-lg font-black text-amber-700 mb-1.5">Nhóm ban đầu</div>
                <div class="flex flex-wrap items-center justify-center gap-1.5">${wholeStrip}</div>
                ${done ? `<div class="text-center text-sm md:text-base font-black text-pink-600 mt-1.5">Phần không gạch chân là nhóm còn lại.</div>` : ''}
            </div>

            <div class="grid grid-cols-2 gap-2.5 md:gap-4 w-full max-w-[640px]">
                <div class="rounded-2xl border border-emerald-200 bg-emerald-50/70 px-3 py-2.5 shadow-sm">
                    <div class="text-center text-base md:text-lg font-black text-emerald-700 mb-1">Nhóm đã biết</div>
                    <div class="text-center text-xs md:text-sm font-bold text-emerald-600 mb-2">Ấn vào từng hình</div>
                    <div class="flex flex-wrap items-center justify-center gap-1.5 min-h-[48px]">${knownStrip || '<span class="text-xs font-black text-slate-400">0 hình</span>'}</div>
                </div>

                <div class="rounded-2xl border border-pink-200 bg-pink-50/70 px-3 py-2.5 shadow-sm">
                    <div class="text-center text-base md:text-lg font-black text-pink-700 mb-1">Nhóm còn lại</div>
                    <div class="text-center text-xs md:text-sm font-bold ${done ? 'text-pink-600' : 'text-slate-400'} mb-2">${done ? 'Con đã tìm thấy' : 'Chưa lộ ra'}</div>
                    <div class="flex flex-wrap items-center justify-center gap-1.5 min-h-[48px]">${remainingStrip}</div>
                </div>
            </div>

            <div class="mt-2.5 flex items-center gap-2">
                <button type="button" onclick="muc1ResetInteraction()" class="px-3 py-1.5 rounded-full border border-pink-200 bg-pink-50 text-pink-700 text-base md:text-lg font-black pastel-btn shadow-xs">Làm lại</button>
                <div class="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-base md:text-lg font-black shadow-xs">Đã chọn: ${selectedKnown} / ${state.known}</div>
            </div>
        </div>`;
}

function parseMuc1PartWholeStaticData_(q) {
    const text = String(q?.question_text || '');
    const nums = [...text.matchAll(/\d+/g)].map(m => Number(m[0]));
    const whole = Math.max(0, Math.min(10, Number(nums[0] || 0)));
    const known = Math.max(0, Math.min(whole, Number(nums[1] || 0)));
    return {
        whole,
        known,
        missing: Math.max(0, whole - known),
        emoji: getFoundationEmojiSeed(q)
    };
}

function isMuc1PartWholeStaticQuestion_(q) {
    const text = String(q?.question_text || '').toLowerCase();
    const hasWhole = /có\s+\d+/.test(text);
    const hasKnownPart = /một nhóm có\s+\d+/.test(text) || /đã xếp\s+\d+/.test(text);
    const asksMissing = /nhóm còn lại/.test(text) && /(mấy|bao nhiêu)/.test(text);
    return hasWhole && hasKnownPart && asksMissing;
}

function buildMuc1StaticTenFrame_(count, emoji) {
    const n = Math.max(0, Math.min(10, Number(count) || 0));
    return `
        <div class="grid grid-cols-5 md:grid-cols-10 gap-1 md:gap-1.5 w-full max-w-[660px] px-1 md:px-2">
            ${Array.from({ length: 10 }, (_, i) => {
                const tone = i < 5
                    ? 'bg-pink-50 border-pink-200'
                    : 'bg-sky-50 border-sky-200';
                return `
                    <div class="w-11 h-11 md:w-12 md:h-12 lg:w-[52px] lg:h-[52px] rounded-xl border-2 ${tone} flex items-center justify-center shadow-inner">
                        ${i < n ? `<span class="text-[24px] md:text-[26px] lg:text-[28px] leading-none">${emoji}</span>` : ''}
                    </div>`;
            }).join('')}
        </div>`;
}

function buildMuc1StaticNumberBond_(whole, known) {
    // Nút tròn có đường kính đúng bằng ô của ten-frame bên trên.
    const nodeClass = 'w-11 h-11 md:w-12 md:h-12 lg:w-[52px] lg:h-[52px] rounded-full border-[3px] flex items-center justify-center text-xl md:text-2xl lg:text-[28px] font-black shadow-sm z-10';
    return `
        <div class="relative w-[260px] md:w-[300px] h-[145px] md:h-[160px]">
            <svg class="absolute inset-0 w-full h-full" viewBox="0 0 300 160" preserveAspectRatio="none" aria-hidden="true">
                <line x1="150" y1="36" x2="95" y2="112" stroke="#4f46e5" stroke-width="4" stroke-linecap="round"></line>
                <line x1="150" y1="36" x2="205" y2="112" stroke="#4f46e5" stroke-width="4" stroke-linecap="round"></line>
            </svg>
            <div class="absolute left-1/2 top-0 -translate-x-1/2 ${nodeClass} bg-violet-50 border-violet-600 text-violet-700">${whole}</div>
            <div class="absolute left-[44px] md:left-[55px] bottom-0 ${nodeClass} bg-pink-50 border-pink-500 text-violet-700">${known}</div>
            <div class="absolute right-[44px] md:right-[55px] bottom-0 ${nodeClass} bg-amber-50 border-amber-400 text-violet-700"></div>
        </div>`;
}

function buildMuc1PartWholeStaticVisual_(q) {
    const data = parseMuc1PartWholeStaticData_(q);
    return `
        <div class="w-full flex flex-col items-center justify-center gap-5 md:gap-6">
            ${buildMuc1StaticTenFrame_(data.whole, data.emoji)}
            ${buildMuc1StaticNumberBond_(data.whole, data.known)}
        </div>`;
}

function getMuc1EmojiLines_(q) {
    return String(q?.question_text || '')
        .split('\n')
        .map(x => x.trim())
        .filter(Boolean)
        .filter(line => extractEmojiTokens_(line).length > 0);
}

function buildMuc1UniformEmojiLinesVisual_(q) {
    const emojiLines = getMuc1EmojiLines_(q);
    if (!emojiLines.length) return buildFoundationSceneVisual(q);

    const rows = emojiLines.slice(0, 2).map((line, rowIndex) => {
        const tokens = extractEmojiTokens_(line).slice(0, 10);
        const rowLabel = rowIndex === 0 ? 'A' : 'B';
        return `
            <div class="grid grid-cols-[42px_1fr] md:grid-cols-[52px_1fr] items-center w-full max-w-[700px] px-1 md:px-2">
                <div class="text-2xl md:text-3xl font-black text-violet-700 text-center">${rowLabel}</div>
                <div class="flex flex-wrap items-center justify-center gap-1.5 md:gap-2 min-w-0">
                    ${tokens.map(token => `
                        <div class="w-9 h-9 md:w-11 md:h-11 lg:w-12 lg:h-12 flex items-center justify-center shrink-0">
                            <span class="text-[24px] md:text-[26px] lg:text-[28px] leading-none">${token}</span>
                        </div>`).join('')}
                </div>
            </div>`;
    }).join('<div class="w-3/4 h-px bg-pink-100"></div>');

    return `<div class="w-full flex flex-col items-center justify-center gap-3">${rows}</div>`;
}

function buildMuc1TipText_(q) {
    const sub = String(q?.sub_topic || '');
    const state = initMuc1UiState_(q);
    if (sub === '1.1' || sub === '1.2') {
        if (state.placed < state.target) return 'Cô Thỏ Hồng: Con đếm lần lượt từng hình một nhé. Mỗi hình ứng với một số đếm.';
        return 'Cô Thỏ Hồng: Số cuối cùng con đếm được chính là số lượng của cả nhóm đó.';
    }
    if (sub === '1.3') return 'Cô Thỏ Hồng: Con nhìn xem hàng nào dài hơn. Hàng dài hơn là nhóm nhiều hơn.';
    if (sub === '1.4') return 'Cô Thỏ Hồng: Con tự đếm từng hàng rồi so sánh nhé. Không cần khung ô nữa đâu!';
    if (sub === '1.5') {
        if (state.placed < state.known) return 'Cô Thỏ Hồng: Con ấn lần lượt vào từng hình ở phần đã biết nhé!';
        return 'Cô Thỏ Hồng: Giỏi lắm! Một số có thể tách thành hai phần nhỏ hơn.';
    }
    if (sub === '1.6' && isMuc1PartWholeStaticQuestion_(q)) {
        const data = parseMuc1PartWholeStaticData_(q);
        return `Cô Thỏ Hồng: Cả nhóm có ${data.whole}. Một phần là ${data.known}. Con tìm phần còn lại nhé!`;
    }
    return 'Cô Thỏ Hồng: Con suy nghĩ thật kĩ rồi chọn đáp án đúng nhé!';
}

function buildMuc1VisualOnly_(q) {
    const sub = String(q?.sub_topic || '');
    if (sub === '1.1' || sub === '1.2') return buildMuc1CountingVisual_(q);
    if (sub === '1.3') return buildMuc1CompareWithFrameVisual_(q);
    if (sub === '1.4') return buildMuc1CompareWithoutFrameVisual_(q);
    if (sub === '1.5') return buildMuc1PartWholeVisual_(q);
    if (sub === '1.6') {
        if (isMuc1PartWholeStaticQuestion_(q)) return buildMuc1PartWholeStaticVisual_(q);
        if (getMuc1EmojiLines_(q).length) return buildMuc1UniformEmojiLinesVisual_(q);
    }
    return buildFoundationSceneVisual(q);
}

function refreshMuc1InteractiveZone_() {
    const q = activeQuestionsList?.[currentQIndex];
    if (!q) return;
    const host = document.getElementById('muc1-visual-host');
    if (host) host.innerHTML = buildMuc1VisualOnly_(q);
    const tipHost = document.getElementById('muc1-tip-host');
    if (tipHost) tipHost.innerHTML = `<div class="mt-2 bg-amber-50 border border-amber-200 rounded-2xl px-3 py-2 text-base md:text-lg font-black text-amber-800 text-center shadow-xs">${escapeHtml(buildMuc1TipText_(q))}</div>`;
}

function muc1HandleDragStart(event, type, index) {
    if (!event?.dataTransfer) return;
    event.dataTransfer.setData('text/plain', `${type}:${index}`);
    event.dataTransfer.effectAllowed = 'move';
}

function muc1HandleDrop(event, type) {
    event.preventDefault();
    if (type === 'count') muc1PlaceCountItem();
    if (type === 'part') muc1PlacePartItem();
}

function muc1PlaceCountItem() {
    const q = activeQuestionsList?.[currentQIndex];
    if (!q) return;
    const state = initMuc1UiState_(q);
    if (state.placed >= state.target) return;
    state.placed += 1;
    refreshMuc1InteractiveZone_();
    try { speakVietnamese(String(state.placed), 0.94); } catch (e) {}
}

function muc1PlacePartItem() {
    const q = activeQuestionsList?.[currentQIndex];
    if (!q) return;
    const state = initMuc1UiState_(q);
    if (state.placed >= state.known) return;
    state.placed += 1;
    refreshMuc1InteractiveZone_();
}

function muc1ResetInteraction() {
    const q = activeQuestionsList?.[currentQIndex];
    if (!q) return;
    const state = initMuc1UiState_(q);
    state.placed = 0;
    refreshMuc1InteractiveZone_();
}

function formatMuc1PromptHtml_(q, prompt) {
    const safe = escapeHtml(prompt);
    if (String(q?.sub_topic || '') !== '1.4') return safe;
    // Ở Mục 1.4, làm nổi bật chính hai số cần so sánh để trẻ 4-6 tuổi
    // tập trung vào lượng/số thay vì bị lẫn với dấu hỏi hoặc câu dẫn.
    return safe.replace(/\d+/g, m => `<span class="text-rose-600 font-black">${m}</span>`);
}

function buildMuc1QuestionLayout(q, speakerHtml) {
    initMuc1UiState_(q);
    const prompt = getMuc1ReadablePrompt(q);
    const optionSizeClass = 'min-h-[50px] md:min-h-[56px] py-1.5';
    const optionTextClass = 'text-lg md:text-xl lg:text-[22px]';

    let optionsHtml = '';
    q.options.forEach((opt, idx) => {
        const formattedOpt = capitalizeFirstLetter(opt);
        const letter = String.fromCharCode(65 + idx);
        optionsHtml += `
            <button data-opt="${escapeHtml(opt)}" onclick="checkAnswer('${opt.replace(/'/g, "\\'")}')" class="option-btn w-full ${optionSizeClass} px-3 bg-pink-50/40 hover:bg-pink-100/70 border-2 border-pink-200 rounded-2xl font-extrabold text-gray-800 transition-all flex items-center justify-center text-center shadow-xs pastel-btn">
                <span class="flex items-center justify-center gap-2 leading-tight"><strong class="text-pink-600 text-lg md:text-xl">${letter}.</strong><span class="opt-text ${optionTextClass}">${escapeHtml(formattedOpt)}</span></span>
                <span class="option-icon text-pink-500 text-lg md:text-xl ml-1"></span>
            </button>`;
    });

    return `
        <div class="w-full max-w-none grid grid-cols-1 md:grid-cols-[1.38fr_0.62fr] gap-3 md:gap-4 items-stretch py-1">
            <div class="min-h-[250px] md:min-h-[300px] rounded-[28px] border-2 border-pink-100 bg-gradient-to-br from-amber-50 via-white to-sky-50 px-3 py-4 md:px-5 md:py-6 flex flex-col items-center justify-center overflow-hidden shadow-sm">
                <div id="muc1-visual-host" class="w-full flex items-center justify-center">${buildMuc1VisualOnly_(q)}</div>
            </div>
            <div class="rounded-[28px] border border-pink-100 bg-white/95 px-3 py-4 md:px-4 md:py-5 flex flex-col justify-center shadow-sm">
                <h3 class="text-lg md:text-xl lg:text-[22px] font-black text-slate-900 leading-snug text-center mb-1">${escapeHtml(prompt)}</h3>
                ${speakerHtml}
                <div id="muc1-tip-host">${`<div class="mt-2 bg-amber-50 border border-amber-200 rounded-2xl px-3 py-2 text-base md:text-lg font-black text-amber-800 text-center shadow-xs">${escapeHtml(buildMuc1TipText_(q))}</div>`}</div>
                <div class="w-full grid grid-cols-2 gap-2.5 md:gap-3 mt-3">${optionsHtml}</div>
            </div>
        </div>`;
}


// ==========================================
// MỤC 2 - PHÉP CỘNG VÀ PHÉP TRỪ
// Mô hình sư phạm: thao tác -> nhìn thấy -> ký hiệu -> giảm hỗ trợ -> thực hành độc lập
// ==========================================
let muc2UiState = null;

function getMuc2QuestionKey_(q) {
    return `${q?.question_id ?? q?.id ?? 'q'}::${q?._muc2_stage || q?.sub_topic || ''}::${q?.question_text || ''}`;
}

function getMuc2Stage_(q) {
    return String(q?._muc2_stage || q?.sub_topic || '2.6');
}

function getMuc2Equation_(q) {
    const text = String(q?.question_text || '');
    const m = text.match(/(10|[0-9]|\?)\s*([+−-])\s*(10|[0-9]|\?)\s*=\s*(10|[0-9]|\?)/);
    if (!m) return null;
    return {
        left: m[1] === '?' ? null : Number(m[1]),
        op: m[2] === '−' ? '-' : m[2],
        right: m[3] === '?' ? null : Number(m[3]),
        result: m[4] === '?' ? null : Number(m[4]),
        raw: m[0]
    };
}

function getMuc2Emoji_(q) {
    const tokens = extractEmojiTokens_(String(q?.question_text || '')).filter(x => x !== '❌');
    return tokens[0] || getFoundationEmojiSeed(q) || '●';
}

function parseMuc2Addition_(q) {
    const text = String(q?.question_text || '');
    const eq = getMuc2Equation_(q);
    if (eq && eq.op === '+' && Number.isFinite(eq.left) && Number.isFinite(eq.right)) {
        return { a: eq.left, b: eq.right, emoji: getMuc2Emoji_(q), equation: eq.raw };
    }

    const lines = text.split('\n').map(x => x.trim()).filter(Boolean);
    const visualLine = lines.find(line => extractEmojiTokens_(line).length > 0) || '';
    let parts = visualLine.split(/\s+và\s+|\s*\+\s*/i);
    if (parts.length < 2) parts = text.split(/\s+và\s+|\s*\+\s*/i);
    const a = Math.min(10, extractEmojiTokens_(parts[0] || '').filter(x => x !== '❌').length);
    const b = Math.min(10 - a, extractEmojiTokens_(parts[1] || '').filter(x => x !== '❌').length);
    return { a, b, emoji: getMuc2Emoji_(q), equation: `${a} + ${b} = ?` };
}

function parseMuc2Subtraction_(q) {
    const text = String(q?.question_text || '');
    const eq = getMuc2Equation_(q);
    if (eq && eq.op === '-' && Number.isFinite(eq.left) && Number.isFinite(eq.right)) {
        return { whole: eq.left, take: eq.right, emoji: getMuc2Emoji_(q), equation: eq.raw };
    }

    const lines = text.split('\n').map(x => x.trim()).filter(Boolean);
    const startLine = lines.find(line => /^ban đầu\s*:/i.test(line));
    const takeLine = lines.find(line => /^bớt đi\s*:/i.test(line));
    let whole = startLine ? extractEmojiTokens_(startLine).filter(x => x !== '❌').length : 0;
    let take = takeLine ? extractEmojiTokens_(takeLine).filter(x => x !== '❌').length : 0;
    if (!take) {
        const m = text.match(/bớt đi\s+(10|[0-9])/i);
        if (m) take = Number(m[1]);
    }
    return {
        whole: Math.max(0, Math.min(10, whole)),
        take: Math.max(0, Math.min(whole, take)),
        emoji: getMuc2Emoji_(q),
        equation: `${whole} − ${take} = ?`
    };
}

function initMuc2UiState_(q) {
    const key = getMuc2QuestionKey_(q);
    if (muc2UiState && muc2UiState.key === key) return muc2UiState;

    const stage = getMuc2Stage_(q);
    const eq = getMuc2Equation_(q);
    const state = { key, stage, moved: new Set(), removed: 0 };
    if ((stage === '2.1' || stage === '2.2') || eq?.op === '+') {
        Object.assign(state, parseMuc2Addition_(q));
        state.mode = 'add';
    } else {
        Object.assign(state, parseMuc2Subtraction_(q));
        state.mode = 'sub';
    }
    muc2UiState = state;
    return state;
}

function resetMuc2UiState_() {
    muc2UiState = null;
}

function buildMuc2TenFrameRow_(filled, emoji, numbered = false) {
    return `
        <div class="grid grid-cols-5 md:grid-cols-10 gap-1 md:gap-1.5 w-full max-w-[720px]">
            ${Array.from({ length: 10 }, (_, i) => {
                const active = i < filled;
                const tone = i < 5 ? 'bg-pink-50 border-pink-200' : 'bg-sky-50 border-sky-200';
                return `
                    <div class="flex flex-col items-center gap-1 min-w-0">
                        <div class="h-6 md:h-7 text-sm md:text-base font-black ${active && numbered ? 'text-violet-700' : 'text-transparent'}">${i + 1}</div>
                        <div class="w-10 h-10 md:w-12 md:h-12 lg:w-[54px] lg:h-[54px] rounded-xl border-2 ${tone} flex items-center justify-center shadow-inner">
                            ${active ? `<span class="text-[24px] md:text-[27px] lg:text-[30px] leading-none">${emoji}</span>` : '<span class="text-pink-200 text-lg font-black">+</span>'}
                        </div>
                    </div>`;
            }).join('')}
        </div>`;
}

function buildMuc2AddSourceRow_(count, emoji, group, state, label) {
    return `
        <div class="w-full max-w-[620px]">
            <div class="text-center text-sm md:text-base font-black text-slate-500 mb-1">${label}</div>
            <div class="flex flex-wrap justify-center gap-2 md:gap-2.5 min-h-[52px]">
                ${Array.from({ length: count }, (_, i) => {
                    const key = `${group}:${i}`;
                    const moved = state.moved.has(key);
                    return `
                        <button type="button" onclick="muc2MoveAddItem_('${group}', ${i})" ${moved ? 'disabled' : ''}
                            class="w-11 h-11 md:w-12 md:h-12 rounded-full border-2 ${moved ? 'border-slate-100 bg-slate-50 opacity-25' : 'border-violet-200 bg-white hover:border-violet-400 hover:scale-105'} flex items-center justify-center shadow-sm transition-all">
                            <span class="text-[24px] md:text-[27px] lg:text-[30px] leading-none">${emoji}</span>
                        </button>`;
                }).join('')}
            </div>
        </div>`;
}

function buildMuc2AdditionInteractive_(q) {
    const s = initMuc2UiState_(q);
    const placed = s.moved.size;
    const done = placed >= s.a + s.b;
    return `
        <div class="w-full flex flex-col items-center justify-center gap-3">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-sm md:text-base font-black shadow-sm">
                <span>🐰</span><span>Con đưa từng hình lên hàng trên để gộp hai nhóm nhé.</span>
            </div>
            ${buildMuc2TenFrameRow_(placed, s.emoji, true)}
            <div class="w-4/5 h-px bg-pink-100 my-1"></div>
            ${buildMuc2AddSourceRow_(s.a, s.emoji, 'a', s, `Nhóm 1: <span class="inline-block ml-1 text-2xl md:text-3xl font-black text-red-500 leading-none align-middle">${s.a}</span>`)}
            ${buildMuc2AddSourceRow_(s.b, s.emoji, 'b', s, `Nhóm 2: <span class="inline-block ml-1 text-2xl md:text-3xl font-black text-red-500 leading-none align-middle">${s.b}</span>`)}
            <div class="flex items-center gap-2 mt-1">
                <button type="button" onclick="muc2ResetInteraction_()" class="px-3 py-1.5 rounded-full border border-pink-200 bg-pink-50 text-pink-700 text-sm md:text-base font-black">Làm lại</button>
                <div class="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-sm md:text-base font-black">Đã gộp: ${placed} / ${s.a + s.b}</div>
            </div>
            ${done && s.stage === '2.1' ? `<div class="text-lg md:text-xl font-black text-emerald-600">${s.a} + ${s.b} = ${s.a + s.b}</div>` : ''}
        </div>`;
}

function buildMuc2SubtractionInteractive_(q) {
    const s = initMuc2UiState_(q);
    const remaining = Math.max(0, s.whole - s.removed);
    return `
        <div class="w-full flex flex-col items-center justify-center gap-4">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-sm md:text-base font-black shadow-sm">
                <span>🐰</span><span>Con bấm từng hình ở hàng dưới để bớt đi nhé.</span>
            </div>
            <div class="w-full max-w-[680px]">
                <div class="text-center text-sm md:text-base font-black text-slate-500 mb-2">Ban đầu có <span class="inline-block ml-1 text-2xl md:text-3xl font-black text-red-500 leading-none align-middle">${s.whole}</span></div>
                <div class="flex flex-wrap justify-center gap-2 md:gap-2.5">
                    ${Array.from({ length: s.whole }, (_, i) => {
                        const crossed = i >= s.whole - s.removed;
                        return `
                            <div class="relative w-11 h-11 md:w-12 md:h-12 rounded-full border-2 ${crossed ? 'border-slate-200 bg-slate-50 opacity-45' : 'border-violet-200 bg-white'} flex items-center justify-center shadow-sm">
                                <span class="text-[24px] md:text-[27px] lg:text-[30px] leading-none">${s.emoji}</span>
                                ${crossed ? '<span class="absolute inset-0 flex items-center justify-center text-rose-500 text-4xl md:text-5xl font-black leading-none">╱</span>' : ''}
                            </div>`;
                    }).join('')}
                </div>
            </div>
            <div class="w-3/4 h-px bg-pink-100"></div>
            <div class="w-full max-w-[620px]">
                <div class="text-center text-sm md:text-base font-black text-slate-500 mb-2">Bớt đi <span class="inline-block ml-1 text-2xl md:text-3xl font-black text-red-500 leading-none align-middle">${s.take}</span></div>
                <div class="flex flex-wrap justify-center gap-2 md:gap-2.5">
                    ${Array.from({ length: s.take }, (_, i) => {
                        const used = i < s.removed;
                        return `
                            <button type="button" onclick="muc2RemoveSubItem_(${i})" ${used ? 'disabled' : ''}
                                class="w-11 h-11 md:w-12 md:h-12 rounded-full border-2 ${used ? 'border-slate-100 bg-slate-50 opacity-25' : 'border-rose-200 bg-white hover:border-rose-400 hover:scale-105'} flex items-center justify-center shadow-sm transition-all">
                                <span class="text-[24px] md:text-[27px] lg:text-[30px] leading-none">${s.emoji}</span>
                            </button>`;
                    }).join('')}
                </div>
            </div>
            <div class="flex items-center gap-2">
                <button type="button" onclick="muc2ResetInteraction_()" class="px-3 py-1.5 rounded-full border border-pink-200 bg-pink-50 text-pink-700 text-sm md:text-base font-black">Làm lại</button>
                <div class="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-sm md:text-base font-black">Đã bớt: ${s.removed} / ${s.take}</div>
            </div>
            ${s.removed >= s.take && s.stage === '2.3' ? `<div class="text-lg md:text-xl font-black text-emerald-600">Còn lại ${remaining}: &nbsp; ${s.whole} − ${s.take} = ${remaining}</div>` : ''}
        </div>`;
}

function buildMuc2StaticEmojiRow_(count, emoji, label, tone = 'violet') {
    const toneClass = tone === 'rose' ? 'border-rose-200 bg-rose-50/40' : 'border-violet-200 bg-violet-50/40';
    return `
        <div class="w-full max-w-[650px] rounded-2xl border ${toneClass} px-3 py-3">
            <div class="text-center text-sm md:text-base font-black text-slate-500 mb-2">${label}</div>
            <div class="flex flex-wrap justify-center gap-2 md:gap-2.5">
                ${Array.from({ length: Math.max(0, count) }, () => `
                    <div class="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center">
                        <span class="text-[24px] md:text-[27px] lg:text-[30px] leading-none">${emoji}</span>
                    </div>`).join('')}
            </div>
        </div>`;
}

function buildMuc2NumberBond_(topValue, leftValue, rightValue) {
    const nodeClass = 'w-11 h-11 md:w-12 md:h-12 lg:w-[52px] lg:h-[52px] rounded-full border-[3px] flex items-center justify-center text-xl md:text-2xl lg:text-[30px] font-black shadow-sm';
    const renderValue = (v) => (v == null ? '' : v);
    return `
        <div class="relative w-[260px] md:w-[300px] h-[160px] md:h-[175px]">
            <svg class="absolute inset-0 w-full h-full" viewBox="0 0 300 175" preserveAspectRatio="none" aria-hidden="true">
                <line x1="150" y1="36" x2="98" y2="110" stroke="#4f46e5" stroke-width="4" stroke-linecap="round"></line>
                <line x1="150" y1="36" x2="202" y2="110" stroke="#4f46e5" stroke-width="4" stroke-linecap="round"></line>
            </svg>
            <div class="absolute left-1/2 top-0 -translate-x-1/2 ${nodeClass} bg-violet-50 border-violet-600 text-violet-700">${renderValue(topValue)}</div>
            <div class="absolute left-[45px] md:left-[52px] top-[88px] md:top-[98px] ${nodeClass} bg-pink-50 border-pink-500 text-violet-700">${renderValue(leftValue)}</div>
            <div class="absolute right-[45px] md:right-[52px] top-[88px] md:top-[98px] ${nodeClass} bg-amber-50 border-amber-400 text-violet-700">${renderValue(rightValue)}</div>
        </div>`;
}

function deriveMuc2ReducedSupportModel_(q) {
    const eq = getMuc2Equation_(q);
    if (!eq) return null;
    const emoji = getMuc2Emoji_(q);

    if (eq.op === '+') {
        const a = Number.isFinite(eq.left) ? eq.left : null;
        const b = Number.isFinite(eq.right) ? eq.right : null;
        const c = Number.isFinite(eq.result) ? eq.result : null;
        const whole = c != null ? c : ((a != null && b != null) ? a + b : null);
        if (whole == null) return null;
        let topValue = c != null ? c : null;
        let leftValue = a;
        let rightValue = b;
        return { op: '+', whole: Math.max(0, Math.min(10, whole)), topValue, leftValue, rightValue, emoji };
    }

    if (eq.op === '-') {
        const whole = Number.isFinite(eq.left) ? eq.left : ((Number.isFinite(eq.right) && Number.isFinite(eq.result)) ? eq.right + eq.result : null);
        if (whole == null) return null;
        const topValue = Number.isFinite(eq.left) ? eq.left : null;
        const leftValue = Number.isFinite(eq.result) ? eq.result : null;
        const rightValue = Number.isFinite(eq.right) ? eq.right : null;
        return { op: '-', whole: Math.max(0, Math.min(10, whole)), topValue, leftValue, rightValue, emoji };
    }

    return null;
}

function buildMuc2ReducedSupport_(q) {
    const model = deriveMuc2ReducedSupportModel_(q);
    if (model) {
        return `
            <div class="w-full flex flex-col items-center gap-4">
                <div class="inline-flex px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-sm md:text-base font-black">Con nhìn hình rồi tự tính nhé.</div>
                ${buildMuc1StaticTenFrame_(model.whole, model.emoji)}
                ${buildMuc2NumberBond_(model.topValue, model.leftValue, model.rightValue)}
            </div>`;
    }

    const eq = getMuc2Equation_(q);
    if (eq?.op === '-') {
        const s = parseMuc2Subtraction_(q);
        return `
            <div class="w-full flex flex-col items-center gap-4">
                <div class="inline-flex px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-sm md:text-base font-black">Nhìn hình và tự nghĩ cách tính nhé.</div>
                ${buildMuc2StaticEmojiRow_(s.whole, s.emoji, `Số bị trừ: ${s.whole}`, 'violet')}
                ${buildMuc2StaticEmojiRow_(s.take, s.emoji, `Số trừ: ${s.take}`, 'rose')}
            </div>`;
    }

    const s = parseMuc2Addition_(q);
    return `
        <div class="w-full flex flex-col items-center gap-4">
            <div class="inline-flex px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-sm md:text-base font-black">Nhìn hình và tự gộp trong đầu nhé.</div>
            ${buildMuc2StaticEmojiRow_(s.a, s.emoji, `Số hạng thứ nhất: ${s.a}`, 'violet')}
            ${buildMuc2StaticEmojiRow_(s.b, s.emoji, `Số hạng thứ hai: ${s.b}`, 'rose')}
        </div>`;
}

function getMuc2Prompt_(q) {
    const text = String(q?.question_text || '');
    const eq = getMuc2Equation_(q);
    const stage = getMuc2Stage_(q);
    if (stage === '2.6') return text;
    const lines = text.split('\n').map(x => x.trim()).filter(Boolean);
    const verbal = lines.find(line => !extractEmojiTokens_(line).length && !/(10|[0-9]|\?)\s*[+−-]/.test(line));
    if (stage === '2.1') return verbal || 'Gộp hai nhóm. Có tất cả bao nhiêu?';
    if (stage === '2.2') return eq?.raw || verbal || 'Con tính phép cộng nhé.';
    if (stage === '2.3') return verbal || 'Bớt đi rồi xem còn lại bao nhiêu.';
    if (stage === '2.4') return eq?.raw || verbal || 'Con tính phép trừ nhé.';
    if (stage === '2.5') return eq?.raw || verbal || 'Con tìm số còn thiếu nhé.';
    return verbal || text;
}

function buildMuc2Tip_(q) {
    const stage = getMuc2Stage_(q);
    if (stage === '2.1') return 'Cô Thỏ Hồng: Cộng là gộp hai nhóm lại thành một nhóm lớn hơn.';
    if (stage === '2.2') return 'Cô Thỏ Hồng: Con có thể dùng hàng ô để kiểm tra kết quả phép cộng.';
    if (stage === '2.3') return 'Cô Thỏ Hồng: Trừ là bớt đi. Những hình không bị gạch chính là phần còn lại.';
    if (stage === '2.4') return 'Cô Thỏ Hồng: Con nhìn phần còn lại rồi liên hệ với phép trừ.';
    if (stage === '2.5') return 'Cô Thỏ Hồng: Con nhìn sơ đồ số và hình rồi tìm số còn thiếu nhé!';
    return '';
}

function buildMuc2Options_(q, compact = true) {
    return (q.options || []).map((opt, idx) => {
        const letter = String.fromCharCode(65 + idx);
        const formattedOpt = capitalizeFirstLetter(opt);
        return `
            <button data-opt="${escapeHtml(opt)}" onclick="checkAnswer('${String(opt).replace(/'/g, "\\'")}')"
                class="option-btn w-full ${compact ? 'min-h-[52px] md:min-h-[58px]' : 'min-h-[64px] md:min-h-[72px]'} px-3 bg-pink-50/40 hover:bg-pink-100/70 border-2 border-pink-200 rounded-2xl font-extrabold text-gray-800 transition-all flex items-center justify-center text-center shadow-xs pastel-btn">
                <span class="flex items-center justify-center gap-2 leading-tight"><strong class="text-pink-600 text-lg md:text-xl">${letter}.</strong><span class="opt-text text-lg md:text-xl lg:text-[22px]">${escapeHtml(formattedOpt)}</span></span>
                <span class="option-icon text-pink-500 text-lg md:text-xl ml-1"></span>
            </button>`;
    }).join('');
}

function buildMuc2ExamLikeLayout_(q, speakerHtml) {
    const text = String(q?.question_text || '');
    const lines = text.split('\n').map(x => x.trim()).filter(Boolean);
    const visualLines = lines.filter(line => extractEmojiTokens_(line).length > 0);
    const textLines = lines.filter(line => !extractEmojiTokens_(line).length);
    const visual = visualLines.length
        ? `<div class="w-full max-w-3xl rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-4 text-center text-[26px] md:text-[30px] leading-relaxed">${visualLines.map(escapeHtml).join('<br>')}</div>`
        : '';
    return `
        <div class="w-full max-w-4xl mx-auto flex flex-col items-center gap-3 py-2">
            ${visual}
            <h3 class="text-lg md:text-xl lg:text-2xl font-black text-slate-900 text-center leading-snug">${escapeHtml(textLines.join(' ') || text)}</h3>
            ${speakerHtml}
            <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">${buildMuc2Options_(q, false)}</div>
        </div>`;
}

function buildMuc2QuestionLayout_(q, speakerHtml) {
    const stage = getMuc2Stage_(q);
    if (stage === '2.6') return buildMuc2ExamLikeLayout_(q, speakerHtml);

    let visual = '';
    if (stage === '2.1' || stage === '2.2') visual = buildMuc2AdditionInteractive_(q);
    else if (stage === '2.3' || stage === '2.4') visual = buildMuc2SubtractionInteractive_(q);
    else visual = buildMuc2ReducedSupport_(q);

    const prompt = getMuc2Prompt_(q);
    const tip = buildMuc2Tip_(q);
    return `
        <div class="w-full max-w-none grid grid-cols-1 md:grid-cols-[1.4fr_0.6fr] gap-3 md:gap-4 items-stretch py-1">
            <div class="min-h-[300px] md:min-h-[360px] rounded-[28px] border-2 border-pink-100 bg-gradient-to-br from-amber-50 via-white to-sky-50 px-3 py-4 md:px-5 md:py-5 flex flex-col items-center justify-center overflow-hidden shadow-sm">
                <div id="muc2-visual-host" class="w-full flex items-center justify-center">${visual}</div>
            </div>
            <div class="rounded-[28px] border border-pink-100 bg-white/95 px-3 py-4 md:px-4 md:py-5 flex flex-col justify-center shadow-sm">
                <h3 class="text-lg md:text-xl lg:text-[22px] font-black text-slate-900 leading-snug text-center mb-1">${escapeHtml(prompt)}</h3>
                ${speakerHtml}
                ${tip ? `<div id="muc2-tip-host" class="mt-2 bg-amber-50 border border-amber-200 rounded-2xl px-3 py-2 text-sm md:text-base font-black text-amber-800 text-center shadow-xs">${escapeHtml(tip)}</div>` : ''}
                <div class="w-full grid grid-cols-2 gap-2.5 md:gap-3 mt-3">${buildMuc2Options_(q, true)}</div>
            </div>
        </div>`;
}

function refreshMuc2InteractiveZone_() {
    const q = activeQuestionsList?.[currentQIndex];
    if (!q) return;
    const stage = getMuc2Stage_(q);
    const host = document.getElementById('muc2-visual-host');
    if (!host) return;
    if (stage === '2.1' || stage === '2.2') host.innerHTML = buildMuc2AdditionInteractive_(q);
    else if (stage === '2.3' || stage === '2.4') host.innerHTML = buildMuc2SubtractionInteractive_(q);
    else if (stage === '2.5') host.innerHTML = buildMuc2ReducedSupport_(q);
}

function muc2MoveAddItem_(group, index) {
    const q = activeQuestionsList?.[currentQIndex];
    if (!q) return;
    const s = initMuc2UiState_(q);
    const key = `${group}:${index}`;
    if (s.moved.has(key)) return;
    s.moved.add(key);
    refreshMuc2InteractiveZone_();
    try { speakVietnamese(String(s.moved.size), 0.94); } catch (e) {}
}

function muc2RemoveSubItem_(index) {
    const q = activeQuestionsList?.[currentQIndex];
    if (!q) return;
    const s = initMuc2UiState_(q);
    if (index !== s.removed || s.removed >= s.take) return;
    s.removed += 1;
    refreshMuc2InteractiveZone_();
    try { speakVietnamese(`Bớt ${s.removed}`, 0.94); } catch (e) {}
}

function muc2ResetInteraction_() {
    const q = activeQuestionsList?.[currentQIndex];
    if (!q) return;
    const s = initMuc2UiState_(q);
    s.moved = new Set();
    s.removed = 0;
    refreshMuc2InteractiveZone_();
}

function buildFoundationQuestionLayout(q, speakerHtml) {
    const text = String(q?.question_text || '');
    const expressionMatch = text.match(/(?:\d+|\?)\s*[+−-]\s*(?:\d+|\?)\s*=\s*(?:\d+|\?)/);
    const visual = expressionMatch ? buildFoundationEquationVisual(q, expressionMatch[0]) : buildFoundationSceneVisual(q);
    const prompt = getFoundationPrompt(q);
    // Mục 1 chủ yếu là nhận biết/đếm số 0-10: thu gọn để hình, câu hỏi và đáp án
    // cùng nằm cân đối trên màn hình laptop; không ảnh hưởng Foundation UI của Mục 2.
    const isMuc1Compact = Number(activeTopicId) === 1 || /^1\./.test(String(q?.sub_topic || ''));
    const visualWrapClass = isMuc1Compact
        ? 'w-full flex items-center justify-center origin-center scale-[0.58] md:scale-[0.62] lg:scale-[0.68]'
        : 'w-full flex items-center justify-center';
    const visualPanelClass = isMuc1Compact
        ? 'min-h-[180px] md:min-h-[210px]'
        : 'min-h-[300px] md:min-h-[360px]';
    const optionSizeClass = isMuc1Compact
        ? 'min-h-[50px] md:min-h-[56px] py-1.5'
        : 'min-h-[72px] md:min-h-[84px] py-3';
    const optionTextClass = isMuc1Compact
        ? 'text-lg md:text-xl lg:text-[22px]'
        : 'text-2xl md:text-3xl lg:text-[34px]';

    let optionsHtml = '';
    q.options.forEach((opt, idx) => {
        const formattedOpt = capitalizeFirstLetter(opt);
        const letter = String.fromCharCode(65 + idx);
        optionsHtml += `
            <button data-opt="${escapeHtml(opt)}" onclick="checkAnswer('${opt.replace(/'/g, "\\'")}')" class="option-btn w-full ${optionSizeClass} px-3 bg-pink-50/40 hover:bg-pink-100/70 border-2 border-pink-200 rounded-2xl font-extrabold text-gray-800 transition-all flex items-center justify-center text-center shadow-xs pastel-btn">
                <span class="flex items-center justify-center gap-2 leading-tight"><strong class="text-pink-600 text-lg md:text-xl">${letter}.</strong><span class="opt-text ${optionTextClass}">${escapeHtml(formattedOpt)}</span></span>
                <span class="option-icon text-pink-500 text-lg md:text-xl ml-1"></span>
            </button>`;
    });

    return `
        <div class="w-full max-w-5xl grid grid-cols-1 md:grid-cols-[1.08fr_0.92fr] gap-4 md:gap-5 items-stretch py-1">
            <div class="${visualPanelClass} rounded-[28px] border-2 border-pink-100 bg-gradient-to-br from-amber-50 via-white to-sky-50 px-3 py-5 md:px-6 md:py-7 flex flex-col items-center justify-center overflow-hidden shadow-sm">
                <div class="${visualWrapClass}">${visual}</div>
            </div>
            <div class="rounded-[28px] border border-pink-100 bg-white/95 px-3 py-4 md:px-5 md:py-5 flex flex-col justify-center shadow-sm">
                <h3 class="text-base md:text-lg lg:text-xl font-black text-slate-900 leading-snug text-center mb-1">${formatMuc1PromptHtml_(q, prompt)}</h3>
                ${speakerHtml}
                <div class="w-full grid grid-cols-2 gap-2.5 md:gap-3 mt-2">${optionsHtml}</div>
            </div>
        </div>`;
}

function getTopic3Stage_(q) {
    return String(q?.sub_topic || '');
}

function extractTopic3FocusNumber_(q) {
    const text = String(q?.question_text || '');
    const stage = getTopic3Stage_(q);
    let match = null;
    if (stage === '3.2') match = text.match(/Số\s+(\d+)/i);
    else if (stage === '3.3') match = text.match(/liền\s+(?:trước|sau)\s+số\s+(\d+)/i);
    if (!match) {
        const numbers = text.match(/\d+/g) || [];
        const pick = stage === '3.3' && numbers.length >= 3 ? numbers[2] : numbers[numbers.length - 1];
        return pick ? Number(pick) : null;
    }
    return Number(match[1]);
}

function formatTopic3PromptHtml_(q, promptText) {
    const stage = getTopic3Stage_(q);
    const safe = escapeHtml(promptText || q?.question_text || '');
    const focus = extractTopic3FocusNumber_(q);
    if ((stage === '3.1' || stage === '3.2') && Number.isFinite(focus)) {
        return safe.replace(String(focus), `<span class="text-rose-600 font-black">${escapeHtml(String(focus))}</span>`);
    }
    return safe;
}

function getTopic3NeighbourMeta_(q) {
    const text = String(q?.question_text || '');
    const base = extractTopic3FocusNumber_(q);
    if (!Number.isFinite(base)) return null;
    const direction = /liền\s+trước/i.test(text) ? 'before' : (/liền\s+sau/i.test(text) ? 'after' : null);
    if (!direction) return null;
    return { base, direction };
}

function getTopic3NumberStrip_(base) {
    let start = Number(base) - 3;
    if (start < 1) start = 1;
    let end = start + 6;
    if (end > 100) {
        end = 100;
        start = Math.max(1, end - 6);
    }
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

function buildTopic3Sub33SolutionHtml_(q) {
    const chosen = userAnswers[currentQIndex];
    if (chosen === undefined || chosen !== q?.answer) return '';
    const meta = getTopic3NeighbourMeta_(q);
    if (!meta) return '';
    const answerNum = Number(q.answer);
    if (!Number.isFinite(answerNum)) return '';
    const formula = meta.direction === 'before'
        ? `${answerNum} = ${meta.base} - 1`
        : `${answerNum} = ${meta.base} + 1`;
    return `<div class="mt-3 rounded-2xl border-2 border-emerald-300 bg-emerald-50 px-4 py-2.5 text-center font-black text-emerald-800 text-xl md:text-2xl shadow-sm">${escapeHtml(formula)}</div>`;
}

function buildTopic3Sub33Layout_(q, speakerHtml) {
    const meta = getTopic3NeighbourMeta_(q);
    if (!meta) return '';
    const numbers = getTopic3NumberStrip_(meta.base);
    const prompt = meta.direction === 'before'
        ? `Bé ơi, hãy tìm số liền trước của ${meta.base} nhé!`
        : `Bé ơi, hãy tìm số liền sau của ${meta.base} nhé!`;

    const stripHtml = numbers.map((num, idx) => {
        const active = num === meta.base;
        const bubbleClass = active
            ? 'w-14 h-14 md:w-16 md:h-16 rounded-full bg-pink-500 text-white border-2 border-pink-500 shadow-sm'
            : 'w-14 h-14 md:w-16 md:h-16 rounded-full bg-white text-purple-700 border-2 border-purple-200 shadow-sm';
        return `
            <div class="flex items-center ${idx < numbers.length - 1 ? 'mr-0.5 md:mr-1' : ''}">
                <div class="${bubbleClass} flex items-center justify-center text-lg md:text-xl font-black">${num}</div>
                ${idx < numbers.length - 1 ? '<div class="w-5 md:w-7 h-1 bg-purple-200"></div>' : ''}
            </div>`;
    }).join('');

    const optionsHtml = q.options.map((opt, idx) => {
        const formattedOpt = capitalizeFirstLetter(opt);
        const letter = String.fromCharCode(65 + idx);
        return `
            <button data-opt="${escapeHtml(opt)}" onclick="checkAnswer('${opt.replace(/'/g, "\'")}')" class="option-btn w-full min-h-[60px] md:min-h-[68px] px-2 py-2 bg-pink-50/40 hover:bg-pink-100/70 border-2 border-pink-200 rounded-2xl font-extrabold text-gray-800 transition-all flex items-center justify-center text-center shadow-xs pastel-btn">
                <span class="flex items-center justify-center gap-1.5 leading-tight"><strong class="text-pink-600 text-base md:text-lg">${letter}.</strong><span class="opt-text text-lg md:text-xl lg:text-[22px]">${escapeHtml(formattedOpt)}</span></span>
                <span class="option-icon text-pink-500 text-lg md:text-xl ml-1"></span>
            </button>`;
    }).join('');

    return `
        <div class="w-full max-w-5xl mx-auto py-1">
            <div class="w-full max-w-4xl mx-auto rounded-[28px] border-2 border-pink-100 bg-white/80 px-3 py-4 md:px-5 md:py-5 shadow-sm">
                <div class="flex items-center justify-center flex-wrap">${stripHtml}</div>
                <div id="topic3-sub33-solution-host">${buildTopic3Sub33SolutionHtml_(q)}</div>
            </div>
            <div class="flex flex-col items-center justify-center max-w-4xl mx-auto text-center px-2 mt-3 mb-1">
                <h3 class="text-base md:text-lg lg:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-700 via-fuchsia-600 to-purple-700 leading-snug">${formatTopic3PromptHtml_(q, prompt)}</h3>
                ${speakerHtml}
            </div>
            <div class="w-full max-w-5xl mx-auto grid grid-cols-4 gap-2.5 mt-2">${optionsHtml}</div>
        </div>`;
}

function refreshTopic3Sub33SolutionHost_(q) {
    if (Number(activeTopicId) !== 3 || getTopic3Stage_(q) !== '3.3') return;
    const host = document.getElementById('topic3-sub33-solution-host');
    if (!host) return;
    host.innerHTML = buildTopic3Sub33SolutionHtml_(q);
}

function getTopic3CompareMeta_(q) {
    const text = String(q?.question_text || '');
    const m = text.match(/(\d{1,2})\s*\.{2,}\s*(\d{1,2})/);
    if (!m) return null;
    return { a: Number(m[1]), b: Number(m[2]) };
}

function buildTopic3Sub34SolutionHtml_(q) {
    const chosen = userAnswers[currentQIndex];
    if (chosen === undefined || chosen !== q?.answer) return '';
    const meta = getTopic3CompareMeta_(q);
    if (!meta) return '';

    const tensA = Math.floor(meta.a / 10);
    const onesA = meta.a % 10;
    const tensB = Math.floor(meta.b / 10);
    const onesB = meta.b % 10;
    const sign = String(q.answer || '');

    let explanation = '';
    if (tensA !== tensB) {
        explanation = `${tensA} chục ${sign} ${tensB} chục nên ${meta.a} ${sign} ${meta.b}`;
    } else {
        explanation = `Cùng ${tensA} chục, so sánh đơn vị: ${onesA} ${sign} ${onesB} nên ${meta.a} ${sign} ${meta.b}`;
    }

    return `<div class="mt-4 rounded-2xl border-2 border-emerald-300 bg-emerald-50 px-4 py-3 text-center font-black text-emerald-800 text-lg md:text-xl lg:text-[22px] shadow-sm">${escapeHtml(explanation)}</div>`;
}

function buildTopic3PlaceValueCard_(num, tone = 'violet') {
    const tens = Math.floor(num / 10);
    const ones = num % 10;
    const toneClass = tone === 'rose'
        ? 'border-rose-200 bg-rose-50/50 text-rose-700'
        : 'border-violet-200 bg-violet-50/50 text-violet-700';
    return `
        <div class="rounded-2xl border-2 ${toneClass} px-4 py-3 min-w-[180px] md:min-w-[210px] shadow-sm">
            <div class="text-center text-3xl md:text-4xl font-black mb-2">${num}</div>
            <div class="grid grid-cols-2 gap-2 text-center">
                <div class="rounded-xl bg-white/80 border border-current/20 px-2 py-2">
                    <div class="text-xs md:text-sm font-bold opacity-70">Chục</div>
                    <div class="text-xl md:text-2xl font-black">${tens}</div>
                </div>
                <div class="rounded-xl bg-white/80 border border-current/20 px-2 py-2">
                    <div class="text-xs md:text-sm font-bold opacity-70">Đơn vị</div>
                    <div class="text-xl md:text-2xl font-black">${ones}</div>
                </div>
            </div>
        </div>`;
}

function buildTopic3Sub34Layout_(q, speakerHtml) {
    const meta = getTopic3CompareMeta_(q);
    if (!meta) return '';

    const optionsHtml = q.options.map((opt, idx) => {
        const formattedOpt = capitalizeFirstLetter(opt);
        const letter = String.fromCharCode(65 + idx);
        return `
            <button data-opt="${escapeHtml(opt)}" onclick="checkAnswer('${opt.replace(/'/g, "\'")}')" class="option-btn w-full min-h-[60px] md:min-h-[68px] px-2 py-2 bg-pink-50/40 hover:bg-pink-100/70 border-2 border-pink-200 rounded-2xl font-extrabold text-gray-800 transition-all flex items-center justify-center text-center shadow-xs pastel-btn">
                <span class="flex items-center justify-center gap-1.5 leading-tight"><strong class="text-pink-600 text-base md:text-lg">${letter}.</strong><span class="opt-text text-lg md:text-xl lg:text-[24px]">${escapeHtml(formattedOpt)}</span></span>
                <span class="option-icon text-pink-500 text-lg md:text-xl ml-1"></span>
            </button>`;
    }).join('');

    return `
        <div class="w-full max-w-5xl mx-auto py-1">
            <div class="w-full max-w-4xl mx-auto rounded-[28px] border-2 border-pink-100 bg-white/80 px-3 py-4 md:px-5 md:py-5 shadow-sm">
                <div class="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                    ${buildTopic3PlaceValueCard_(meta.a, 'violet')}
                    <div class="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-pink-300 bg-pink-50 flex items-center justify-center text-3xl md:text-4xl font-black text-pink-500">?</div>
                    ${buildTopic3PlaceValueCard_(meta.b, 'rose')}
                </div>
                <div id="topic3-sub34-solution-host">${buildTopic3Sub34SolutionHtml_(q)}</div>
            </div>
            <div class="flex flex-col items-center justify-center max-w-4xl mx-auto text-center px-2 mt-3 mb-1">
                <h3 class="text-lg md:text-xl lg:text-[24px] font-black text-violet-700 leading-snug">Bé hãy chọn dấu thích hợp nhé!</h3>
                ${speakerHtml}
            </div>
            <div class="w-full max-w-5xl mx-auto grid grid-cols-4 gap-2.5 mt-2">${optionsHtml}</div>
        </div>`;
}

function refreshTopic3Sub34SolutionHost_(q) {
    if (Number(activeTopicId) !== 3 || getTopic3Stage_(q) !== '3.4') return;
    const host = document.getElementById('topic3-sub34-solution-host');
    if (!host) return;
    host.innerHTML = buildTopic3Sub34SolutionHtml_(q);
}

function buildMuc4SolutionHtml_(q) {
    const chosen = userAnswers[currentQIndex];
    if (chosen === undefined || chosen !== q?.answer || !q?.explanation) return '';
    return `<div class="mt-3 rounded-2xl border-2 border-emerald-300 bg-emerald-50 px-4 py-2.5 text-center text-sm md:text-base font-black text-emerald-800 shadow-sm">💡 ${escapeHtml(q.explanation)}</div>`;
}

function muc4OptionIcon_(opt) {
    const map = {
        'Hình tròn':'circle', 'Hình tam giác':'triangle', 'Hình vuông':'square', 'Hình chữ nhật':'rectangle'
    };
    if (map[opt]) return muc4ShapeSvg_(map[opt], {size:52, color:'#fbcfe8', stroke:'#7c3aed'});
    if (opt === 'Khối lập phương') return muc4SolidSvg_('cube',{size:58});
    if (opt === 'Khối hộp chữ nhật') return muc4SolidSvg_('cuboid',{size:68,fill1:'#d1fae5',fill2:'#a7f3d0',fill3:'#6ee7b7'});
    if (opt === 'Hình vuông') return muc4ShapeSvg_('square',{size:52,color:'#bfdbfe'});
    if (opt === 'Hình chữ nhật') return muc4ShapeSvg_('rectangle',{size:52,color:'#fde68a'});
    return '';
}

function muc4ComposeSceneSvg_(scene, missingShape = null, showMissing = false) {
    const W = 240, H = 180;
    const filled = (shape, attrs, color) => {
        const stroke = '#475569';
        if (shape === 'triangle') return `<polygon ${attrs} fill="${color}" stroke="${stroke}" stroke-width="3"></polygon>`;
        if (shape === 'circle') return `<circle ${attrs} fill="${color}" stroke="${stroke}" stroke-width="3"></circle>`;
        return `<rect ${attrs} fill="${color}" stroke="${stroke}" stroke-width="3" rx="5"></rect>`;
    };
    const dashed = (shape, attrs) => {
        const common = `fill="#fff1f2" stroke="#f43f5e" stroke-width="4" stroke-dasharray="8 7"`;
        if (shape === 'triangle') return `<polygon ${attrs} ${common}></polygon>`;
        if (shape === 'circle') return `<circle ${attrs} ${common}></circle>`;
        return `<rect ${attrs} ${common} rx="5"></rect>`;
    };
    const part = (shape, attrs, color) => (showMissing && missingShape === shape ? dashed(shape, attrs) : filled(shape, attrs, color));
    let body = '';
    if (scene === 'ngôi nhà') {
        body += part('square','x="75" y="82" width="90" height="76"','#93c5fd');
        body += part('triangle','points="120,24 52,86 188,86"','#fca5a5');
    } else if (scene === 'cây kem') {
        body += part('triangle','points="120,158 78,76 162,76"','#fbbf24');
        body += part('circle','cx="120" cy="62" r="38"','#f9a8d4');
    } else if (scene === 'chú rô-bốt') {
        body += part('square','x="88" y="20" width="64" height="55"','#c4b5fd');
        body += filled('rectangle','x="72" y="82" width="96" height="66"','#93c5fd');
        body += filled('rectangle','x="38" y="92" width="32" height="45"','#86efac');
        body += filled('rectangle','x="170" y="92" width="32" height="45"','#86efac');
    } else if (scene === 'cây cờ') {
        body += filled('rectangle','x="64" y="24" width="18" height="134"','#94a3b8');
        body += part('rectangle','x="82" y="30" width="102" height="58"','#fb7185');
    } else if (scene === 'chiếc thuyền') {
        body += filled('rectangle','x="58" y="108" width="124" height="42"','#60a5fa');
        body += part('triangle','points="120,28 120,108 182,108"','#fde68a');
        body += `<line x1="120" y1="28" x2="120" y2="108" stroke="#475569" stroke-width="4"></line>`;
    } else if (scene === 'cửa sổ') {
        const coords=[[72,32],[122,32],[72,82],[122,82]];
        coords.forEach((c,idx)=>{
            const attrs=`x="${c[0]}" y="${c[1]}" width="46" height="46"`;
            body += (showMissing && missingShape === 'square' && idx === 3) ? dashed('square',attrs) : filled('square',attrs,'#bfdbfe');
        });
    } else if (scene === 'bông hoa') {
        body += filled('rectangle','x="112" y="86" width="16" height="70"','#86efac');
        body += part('circle','cx="120" cy="62" r="38"','#fde68a');
    } else {
        body += filled('rectangle','x="54" y="70" width="104" height="42"','#93c5fd');
        body += part('triangle','points="158,48 210,91 158,134"','#fca5a5');
    }
    return `<svg viewBox="0 0 ${W} ${H}" class="w-full max-w-[330px] h-auto" aria-hidden="true">${body}</svg>`;
}

function muc4AdvancedCountSvg_(pattern) {
    const stroke = '#4338ca';
    const sw = 4;
    const line = (x1,y1,x2,y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round"></line>`;
    const rect = (x,y,w,h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" stroke="${stroke}" stroke-width="${sw}" rx="2"></rect>`;
    let body = '';

    if (pattern === 'tri_fan_2' || pattern === 'tri_fan_3' || pattern === 'tri_fan_4') {
        const parts = pattern === 'tri_fan_2' ? 2 : (pattern === 'tri_fan_3' ? 3 : 4);
        const left = 25, right = 215, baseY = 160, apexX = 120, apexY = 20;
        body += `<polygon points="${apexX},${apexY} ${left},${baseY} ${right},${baseY}" fill="#eef2ff" stroke="${stroke}" stroke-width="${sw}"></polygon>`;
        for (let i = 1; i < parts; i++) {
            const x = left + (right-left) * i / parts;
            body += line(apexX, apexY, x, baseY);
        }
    } else if (pattern === 'square_diagonals') {
        body += rect(45,20,150,150);
        body += line(45,20,195,170) + line(195,20,45,170);
    } else if (pattern === 'square_grid_2') {
        body += rect(45,20,150,150);
        body += line(120,20,120,170) + line(45,95,195,95);
    } else if (pattern === 'square_grid_3') {
        body += rect(45,15,150,150);
        body += line(95,15,95,165) + line(145,15,145,165);
        body += line(45,65,195,65) + line(45,115,195,115);
    } else if (pattern === 'nested_squares_2' || pattern === 'nested_squares_3') {
        body += rect(40,15,160,160);
        body += rect(75,50,90,90);
        if (pattern === 'nested_squares_3') body += rect(98,73,44,44);
    } else if (pattern === 'rect_cols_3' || pattern === 'rect_cols_4') {
        const cols = pattern === 'rect_cols_3' ? 3 : 4;
        const x0=25, y0=48, w=190, h=82;
        body += rect(x0,y0,w,h);
        for (let i=1;i<cols;i++) body += line(x0+w*i/cols,y0,x0+w*i/cols,y0+h);
    } else if (pattern === 'rect_grid_2x2') {
        const x0=25,y0=40,w=190,h=100;
        body += rect(x0,y0,w,h);
        body += line(x0+w/2,y0,x0+w/2,y0+h) + line(x0,y0+h/2,x0+w,y0+h/2);
    } else if (pattern === 'rect_grid_3x2') {
        const x0=15,y0=40,w=210,h=100;
        body += rect(x0,y0,w,h);
        body += line(x0+w/3,y0,x0+w/3,y0+h) + line(x0+2*w/3,y0,x0+2*w/3,y0+h);
        body += line(x0,y0+h/2,x0+w,y0+h/2);
    }

    return `<svg viewBox="0 0 240 190" class="w-full max-w-[430px] h-auto" aria-hidden="true">${body}</svg>`;
}

function buildMuc4SceneVisual_(q) {
    const v = q?.muc4_visual || {};
    const t = q?.muc4_type || '';
    if (t === 'flat_identify') {
        return `<div class="flex flex-col items-center"><div class="rounded-3xl border-2 border-violet-100 bg-white p-5 shadow-sm">${muc4ShapeSvg_(v.target,{size:150,color:v.color||'#93c5fd',rotate:v.rotate||0})}</div><div class="mt-2 text-sm font-bold text-slate-500">Con nhìn đường bao của hình nhé.</div></div>`;
    }
    if (t === 'flat_match') {
        return `<div class="flex flex-col items-center"><div class="text-sm md:text-base font-black text-slate-500 mb-2">Hình mẫu</div><div class="rounded-3xl border-2 border-violet-200 bg-violet-50/50 p-4 shadow-sm">${muc4ShapeSvg_(v.target,{size:130,color:v.color||'#93c5fd',rotate:v.rotate||0})}</div></div>`;
    }
    if (t === 'flat_odd') {
        return `<div class="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-center font-black text-amber-800">Ba hình cùng loại, chỉ có một hình khác. Con quan sát từng đáp án nhé.</div>`;
    }
    if (t === 'shape_property') {
        return `<div class="flex flex-col items-center"><div class="rounded-3xl border-2 border-violet-100 bg-white p-5 shadow-sm">${muc4ShapeSvg_(v.target,{size:150,color:v.color||'#93c5fd',rotate:v.rotate||0})}</div><div class="mt-2 text-sm font-bold text-slate-500">Con nhìn kĩ số cạnh và các góc của hình nhé.</div></div>`;
    }
    if (t === 'compose_missing' || t === 'compose_parts') {
        return `<div class="w-full max-w-xl rounded-[28px] border-2 border-pink-100 bg-gradient-to-br from-white to-sky-50 p-4 shadow-sm"><div class="text-center text-sm md:text-base font-black text-violet-700 mb-2">${t === 'compose_missing' ? 'Chỗ trống cần mảnh nào?' : 'Con tách hình lớn thành các mảnh nhỏ nhé.'}</div><div class="flex items-center justify-center">${muc4ComposeSceneSvg_(v.scene, v.missing, t === 'compose_missing')}</div><div class="mt-1 text-center text-xs md:text-sm font-bold text-slate-500">${escapeHtml(v.scene||'hình ghép')} · Có thể xoay mảnh khi ghép.</div></div>`;
    }
    if (t === 'solid_identify') {
        return `<div class="rounded-[28px] border-2 border-sky-100 bg-white p-5 shadow-sm">${muc4SolidSvg_(v.solid,{size:v.solid==='cuboid'?180:155,fill1:'#dbeafe',fill2:'#93c5fd',fill3:'#60a5fa'})}</div>`;
    }
    if (t === 'solid_object') {
        return `<div class="flex flex-col items-center rounded-[28px] border-2 border-emerald-100 bg-white p-5 shadow-sm"><div class="text-7xl md:text-8xl leading-none">${escapeHtml(v.objectEmoji||'📦')}</div><div class="mt-2 text-lg md:text-xl font-black text-emerald-700">${escapeHtml(v.objectLabel||'Đồ vật')}</div><div class="mt-2 text-xs md:text-sm font-bold text-slate-500">Hãy nghĩ tới dạng khối của đồ vật.</div></div>`;
    }
    if (t === 'shape_count_advanced') {
        return `<div class="w-full max-w-xl rounded-[28px] border-2 border-violet-100 bg-gradient-to-br from-white to-violet-50 p-4 shadow-sm"><div class="text-center text-sm md:text-base font-black text-violet-700 mb-2">🔎 Con đếm cả hình nhỏ và hình ghép lớn nhé.</div><div class="flex items-center justify-center">${muc4AdvancedCountSvg_(v.pattern)}</div><div class="mt-1 text-center text-xs md:text-sm font-bold text-slate-500">Mẹo: đếm theo kích thước để không bỏ sót.</div></div>`;
    }
    return '';
}

function buildMuc4QuestionLayout_(q, speakerHtml) {
    const v = q?.muc4_visual || {};
    const visual = buildMuc4SceneVisual_(q);
    const isVisualChoice = Array.isArray(v.optionShapes) && v.optionShapes.length === q.options.length;
    const optionsHtml = q.options.map((opt, idx) => {
        let icon = '';
        if (isVisualChoice) {
            icon = muc4ShapeSvg_(v.optionShapes[idx], {size:62,color:['#fde68a','#bfdbfe','#bbf7d0','#fecdd3'][idx%4],rotate:[0,18,35,50][idx%4]});
        } else {
            icon = muc4OptionIcon_(opt);
        }
        const letter = String.fromCharCode(65+idx);
        const label = isVisualChoice ? '' : capitalizeFirstLetter(opt);
        return `<button data-opt="${escapeHtml(opt)}" onclick="checkAnswer('${String(opt).replace(/'/g,"\\'")}')" class="option-btn w-full min-h-[74px] px-2.5 py-2 bg-pink-50/40 hover:bg-pink-100/70 border-2 border-pink-200 rounded-2xl font-extrabold text-slate-800 transition-all flex items-center justify-center gap-2 text-center shadow-xs pastel-btn"><strong class="text-pink-600 text-base md:text-lg">${letter}.</strong>${icon}<span class="opt-text text-sm md:text-base lg:text-lg">${escapeHtml(label)}</span><span class="option-icon text-pink-500"></span></button>`;
    }).join('');

    return `<div class="w-full max-w-6xl grid grid-cols-1 md:grid-cols-[1.12fr_0.88fr] gap-4 items-stretch py-1">
        <div class="min-h-[280px] rounded-[28px] border-2 border-pink-100 bg-gradient-to-br from-amber-50 via-white to-sky-50 px-3 py-4 md:px-5 md:py-5 flex items-center justify-center overflow-hidden shadow-sm">${visual}</div>
        <div class="rounded-[28px] border border-pink-100 bg-white/95 px-3 py-4 md:px-5 md:py-5 flex flex-col justify-center shadow-sm">
            <h3 class="text-lg md:text-xl lg:text-[22px] font-black text-slate-900 leading-snug text-center">${escapeHtml(q.question_text)}</h3>
            ${speakerHtml}
            <div class="grid grid-cols-2 gap-2.5 mt-3">${optionsHtml}</div>
            <div id="muc4-solution-host">${buildMuc4SolutionHtml_(q)}</div>
        </div>
    </div>`;
}

function refreshMuc4SolutionHost_(q) {
    if (Number(activeTopicId) !== 4 || !/^4\.[2345]$/.test(String(q?.sub_topic||''))) return;
    const host = document.getElementById('muc4-solution-host');
    if (host) host.innerHTML = buildMuc4SolutionHtml_(q);
}


function speakMuc4SelectedShape_(q, selectedOpt) {
    if (Number(activeTopicId) !== 4 || String(q?.sub_topic || '') !== '4.2' || q?.muc4_type !== 'flat_odd') return false;
    const optionShapes = q?.muc4_visual?.optionShapes;
    if (!Array.isArray(optionShapes)) return false;
    const idx = (q.options || []).indexOf(selectedOpt);
    if (idx < 0 || !optionShapes[idx]) return false;
    const shapeName = muc4ShapeName_(optionShapes[idx]);
    setTimeout(() => speakVietnamese(shapeName, 0.94), 180);
    return true;
}

function formatQuestionPromptHtml_(q) {
    if (Number(activeTopicId) === 3 && /^3\.[12]$/.test(String(q?.sub_topic || ''))) {
        return formatTopic3PromptHtml_(q, q?.question_text || '');
    }
    return escapeHtml(q?.question_text || '');
}

function loadQuestion() {
    stopSpeaking();
    const q = activeQuestionsList[currentQIndex];
    if (!q) return;

    const isEvaluationMode = !!activeExamContext || !!activeRoadmapContext;
    const isFoundationPractice = !isEvaluationMode && ([1, 2].includes(Number(activeTopicId)) || /^[12]\./.test(String(q.sub_topic || '')));
    const isTopic3Practice = !isEvaluationMode && Number(activeTopicId) === 3 && /^3\./.test(String(q.sub_topic || ''));
    const isTopic4Practice = !isEvaluationMode && Number(activeTopicId) === 4 && /^4\.[2345]$/.test(String(q.sub_topic || ''));

    if (isEvaluationMode) {
        document.getElementById('q-badge-index').textContent = `CÂU ${currentQIndex + 1} / ${activeQuestionsList.length}`;
        const isRoadmap = !!activeRoadmapContext;
        const skillName = isRoadmap
            ? (beautifySubtopicName(q.sub_topic_label) || 'Kiến thức tổng hợp')
            : (SKILL_TAXONOMY[q.skill_tag]?.name || beautifySubtopicName(q.sub_topic_label) || 'Kiến thức tổng hợp');
        document.getElementById('q-skill-text').textContent = skillName;

        const scoreBadge = document.getElementById('q-badge-score');
        if (scoreBadge) {
            if (isRoadmap) {
                scoreBadge.classList.add('hidden');
            } else {
                scoreBadge.classList.remove('hidden');
                scoreBadge.textContent = `(${q.diem ?? 0.5} điểm)`;
            }
        }
    } else {
        const stepEl = document.getElementById('practice-step-text');
        if (stepEl) stepEl.textContent = `Câu ${currentQIndex + 1} / ${activeQuestionsList.length}`;
    }

    let mediaHtml = '';
    if (q.image_url && !activeExamContext) {
        mediaHtml = `<img src="${q.image_url}" alt="minh họa" class="w-14 h-14 md:w-16 md:h-16 object-contain mb-1 floating" onerror="this.remove()">`;
    }

    const pText = q.reading_passage;
    const pTitle = q.reading_title;
    const passageLines = pText ? pText.split('\n').map(l => l.trim()).filter(Boolean) : [];
    const avgLineLen = passageLines.length ? passageLines.reduce((a, l) => a + l.length, 0) / passageLines.length : 0;
    const isPoemLike = passageLines.length >= 4 && avgLineLen > 0 && avgLineLen < 35;
    const useTwoColumns = isPoemLike;
    const passageHtml = pText ? `
        <div class="w-full max-w-3xl bg-pink-50/70 border-2 border-pink-200 rounded-2xl p-3 mb-1.5 text-left shadow-xs">
            ${pTitle ? `<p class="font-black text-pink-700 text-sm md:text-base mb-1">${escapeHtml(pTitle)}</p>` : ''}
            <p class="text-gray-800 text-sm md:text-base font-bold whitespace-pre-line leading-relaxed ${useTwoColumns ? 'md:columns-2 md:gap-6' : ''}">${escapeHtml(pText)}</p>
        </div>` : '';

    const practiceSpeakerBtnHtml = !isEvaluationMode ? `
        <div class="flex items-center justify-center mt-1 mb-1">
            <button onclick="speakCurrentQuestion()" class="px-4 py-1.5 bg-pink-50 hover:bg-pink-100 text-pink-700 border border-pink-200 rounded-2xl text-xs md:text-sm font-extrabold flex items-center space-x-1.5 pastel-btn shadow-xs">
                <i class="fa-solid fa-volume-high text-pink-600"></i>
                <span>Nghe câu hỏi</span>
            </button>
        </div>
    ` : '';

    const isLetterListen = q.render_style === 'letter_listen';

    let html;
    if (isFoundationPractice) {
        if (Number(activeTopicId) === 1 && /^1\./.test(String(q.sub_topic || ''))) {
            html = buildMuc1QuestionLayout(q, practiceSpeakerBtnHtml);
        } else if (Number(activeTopicId) === 2 && /^2\./.test(String(q.sub_topic || ''))) {
            html = buildMuc2QuestionLayout_(q, practiceSpeakerBtnHtml);
        } else {
            html = buildFoundationQuestionLayout(q, practiceSpeakerBtnHtml);
        }
    } else if (isTopic3Practice && getTopic3Stage_(q) === '3.3') {
        html = buildTopic3Sub33Layout_(q, practiceSpeakerBtnHtml);
    } else if (isTopic3Practice && getTopic3Stage_(q) === '3.4') {
        html = buildTopic3Sub34Layout_(q, practiceSpeakerBtnHtml);
    } else if (isTopic4Practice) {
        html = buildMuc4QuestionLayout_(q, practiceSpeakerBtnHtml);
    } else if (isLetterListen) {
        html = `
            ${mediaHtml}
            <div class="w-full max-w-3xl border-2 border-dashed border-pink-200 bg-pink-50/40 rounded-3xl px-4 py-4 md:py-5 flex flex-col items-center text-center mb-3">
                <div class="text-3xl md:text-4xl mb-1.5 space-x-2">
                    <span>🎧</span><span>👂</span><span>🔢</span>
                </div>
                <p class="text-sm md:text-base lg:text-lg font-black text-rose-600 leading-snug">${formatQuestionPromptHtml_(q)}</p>
                ${practiceSpeakerBtnHtml}
            </div>

            <div class="w-full max-w-3xl flex flex-wrap items-center justify-center gap-3 mt-1">
        `;
        q.options.forEach(opt => {
            html += `
                <button data-opt="${escapeHtml(opt)}" onclick="checkAnswer('${opt.replace(/'/g, "\\'")}')" class="option-btn min-w-[140px] px-6 py-3 bg-white hover:bg-emerald-50 border-2 border-emerald-400 rounded-full font-black text-emerald-700 text-base md:text-lg transition-all pastel-btn shadow-xs">
                    ${escapeHtml(opt)}
                </button>`;
        });
        html += `</div>`;
        if (q.mascot_text) {
            html += `
                <div class="mt-4 inline-flex items-center space-x-1.5 bg-pink-50 border border-pink-200 rounded-full px-3.5 py-1.5">
                    <span>🐰</span>
                    <span class="text-xs md:text-sm font-extrabold text-rose-600">${escapeHtml(q.mascot_text)}</span>
                </div>`;
        }
    } else {
        html = `
        ${mediaHtml}
        ${passageHtml}
        <div class="flex flex-col items-center justify-center max-w-3xl text-center px-2 mb-0.5">
            <h3 class="text-sm md:text-base lg:text-lg font-black text-slate-900 leading-snug">
                ${formatQuestionPromptHtml_(q)}
            </h3>
            ${practiceSpeakerBtnHtml}
        </div>
        
        <div class="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-2.5 mt-1">
    `;

    q.options.forEach((opt, idx) => {
        const formattedOpt = capitalizeFirstLetter(opt);
        const letter = String.fromCharCode(65 + idx);

        if (activeExamContext) {
            html += `
                <button data-opt="${escapeHtml(opt)}" onclick="checkAnswer('${opt.replace(/'/g, "\\'")}')" class="option-btn w-full p-2.5 md:p-3 bg-white hover:bg-pink-50/50 border border-pink-200 rounded-2xl font-extrabold text-gray-800 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs">
                    <div class="flex items-center space-x-2.5">
                        <span class="opt-badge w-7 h-7 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center font-black text-sm shrink-0">${letter}</span>
                        <span class="opt-text">${escapeHtml(formattedOpt)}</span>
                    </div>
                    <span class="option-icon text-pink-500 text-base md:text-lg"></span>
                </button>`;
        } else {
            html += `
                <button data-opt="${escapeHtml(opt)}" onclick="checkAnswer('${opt.replace(/'/g, "\\'")}')" class="option-btn w-full p-3 md:p-3.5 bg-pink-50/40 hover:bg-pink-100/70 border-2 border-pink-200 rounded-2xl font-extrabold text-gray-800 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs pastel-btn">
                    <span><strong class="text-pink-600 mr-2 text-base md:text-lg">${letter}.</strong> ${escapeHtml(formattedOpt)}</span>
                    <span class="option-icon text-pink-500 text-base md:text-lg"></span>
                </button>`;
        }
    });
        html += `</div>`;
    }

    document.getElementById('question-box').innerHTML = html;

    restoreQuestionState(q);
    refreshTopic3Sub33SolutionHost_(q);
    refreshTopic3Sub34SolutionHost_(q);
    refreshMuc4SolutionHost_(q);
    updateNavButtons();
    updateQuizPalletUI();

    if (autoSpeechEnabled) speakCurrentQuestion();
}

function restoreQuestionState(q) {
    const isExam = !!activeExamContext;
    const completedAnswer = userAnswers[currentQIndex];
    const wrongAttempts = wrongAttemptsByQ[currentQIndex] || [];

    if (isExam) {
        document.querySelectorAll('.option-btn').forEach(b => {
            const bOpt = b.getAttribute('data-opt');
            const badge = b.querySelector('.opt-badge');
            const iconSpan = b.querySelector('.option-icon');

            if (completedAnswer !== undefined && bOpt === completedAnswer) {
                b.className = "option-btn w-full p-2.5 md:p-3 bg-pink-50/30 border-2 border-pink-500 rounded-2xl font-extrabold text-gray-900 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs";
                if (badge) badge.className = "opt-badge w-7 h-7 rounded-xl bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-xs";
                if (iconSpan) iconSpan.innerHTML = '<i class="fa-regular fa-circle-check text-pink-600 text-lg"></i>';
            } else {
                b.className = "option-btn w-full p-2.5 md:p-3 bg-white hover:bg-pink-50/50 border border-pink-200 rounded-2xl font-extrabold text-gray-800 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs";
                if (badge) badge.className = "opt-badge w-7 h-7 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center font-black text-sm shrink-0";
                if (iconSpan) iconSpan.innerHTML = '';
            }
        });
        return;
    }

    if (!!activeRoadmapContext) {
        if (completedAnswer === undefined) return;
        const isCorrect = completedAnswer === q.answer;
        document.querySelectorAll('.option-btn').forEach(b => {
            b.disabled = true;
            const bOpt = b.getAttribute('data-opt');
            if (bOpt === q.answer) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-green-100', 'border-green-400', 'text-green-800');
            } else if (!isCorrect && bOpt === completedAnswer) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-red-200', 'border-red-500', 'text-red-900');
            }
        });
        return;
    }

    if (wrongAttempts.length > 0) {
        document.querySelectorAll('.option-btn').forEach(b => {
            const bOpt = b.getAttribute('data-opt');
            if (wrongAttempts.includes(bOpt)) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-red-200', 'border-red-500', 'text-red-900');
                b.disabled = true;
            }
        });
    }

    if (completedAnswer !== undefined) {
        document.querySelectorAll('.option-btn').forEach(b => {
            const bOpt = b.getAttribute('data-opt');
            if (bOpt === completedAnswer) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-green-100', 'border-green-400', 'text-green-800');
                b.disabled = true;
            }
        });
    }
}

function updateNavButtons() {
    const isEvaluationMode = !!activeExamContext || !!activeRoadmapContext;
    const btnPrev = isEvaluationMode ? document.getElementById('btn-prev-q-exam') : document.getElementById('btn-prev-q-prac');
    const nextText = isEvaluationMode ? document.getElementById('btn-next-text-exam') : document.getElementById('btn-next-text-prac');
    const nextIcon = isEvaluationMode ? document.getElementById('btn-next-icon-exam') : document.getElementById('btn-next-icon-prac');

    if (!btnPrev) return;

    if (currentQIndex === 0) {
        btnPrev.disabled = true;
        btnPrev.classList.add('opacity-40', 'cursor-not-allowed');
    } else {
        btnPrev.disabled = false;
        btnPrev.classList.remove('opacity-40', 'cursor-not-allowed');
    }

    if (currentQIndex === activeQuestionsList.length - 1) {
        if (isEvaluationMode) {
            nextText.textContent = "Hoàn thành";
            nextIcon.className = "fa-solid fa-trophy ml-1.5";
        } else {
            nextText.textContent = "Vòng tiếp theo";
            nextIcon.className = "fa-solid fa-rotate-right ml-1.5";
        }
    } else {
        nextText.textContent = "Câu tiếp theo";
        nextIcon.className = "fa-solid fa-chevron-right ml-1.5";
    }
}

function checkAnswer(selectedOpt) {
    const q = activeQuestionsList[currentQIndex];
    const isExam = !!activeExamContext;
    const isRoadmap = !!activeRoadmapContext;

    // RIÊNG ĐỀ THI: YÊN TĨNH TUYỆT ĐỐI, SÁNG VIỀN HỒNG, KHÔNG PHÁT ÂM THANH
    if (isExam) {
        userAnswers[currentQIndex] = selectedOpt;

        document.querySelectorAll('.option-btn').forEach(b => {
            const bOpt = b.getAttribute('data-opt');
            const badge = b.querySelector('.opt-badge');
            const iconSpan = b.querySelector('.option-icon');

            if (bOpt === selectedOpt) {
                b.className = "option-btn w-full p-2.5 md:p-3 bg-pink-50/30 border-2 border-pink-500 rounded-2xl font-extrabold text-gray-900 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs";
                if (badge) badge.className = "opt-badge w-7 h-7 rounded-xl bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-xs";
                if (iconSpan) iconSpan.innerHTML = '<i class="fa-regular fa-circle-check text-pink-600 text-lg"></i>';
            } else {
                b.className = "option-btn w-full p-2.5 md:p-3 bg-white hover:bg-pink-50/50 border border-pink-200 rounded-2xl font-extrabold text-gray-800 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs";
                if (badge) badge.className = "opt-badge w-7 h-7 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center font-black text-sm shrink-0";
                if (iconSpan) iconSpan.innerHTML = '';
            }
        });

        updateQuizPalletUI();
        return;
    }

    // RIÊNG TIẾN TRÌNH TUẦN: CHỈ ĐƯỢC CHỌN 1 LẦN DUY NHẤT ĐỂ GHI NHẬN ĐÚNG/SAI CHÍNH XÁC
    if (isRoadmap) {
        if (userAnswers[currentQIndex] !== undefined) return;

        const isCorrect = selectedOpt === q.answer;
        userAnswers[currentQIndex] = selectedOpt;

        if (isCorrect) {
            score += (q.diem ?? 0.5);
            starGreenCount++;
            document.getElementById('star-green-count').textContent = starGreenCount;
        } else {
            starRedCount++;
            document.getElementById('star-red-count').textContent = starRedCount;
        }

        document.querySelectorAll('.option-btn').forEach(b => {
            b.disabled = true;
            const bOpt = b.getAttribute('data-opt');
            if (bOpt === q.answer) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-green-100', 'border-green-400', 'text-green-800');
            } else if (bOpt === selectedOpt) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-red-200', 'border-red-500', 'text-red-900');
            }
        });
        if (isCorrect) refreshTopic3Sub33SolutionHost_(q);

        if (isCorrect) {
            playAudio('correct');
            confetti({ particleCount: 30, spread: 55, origin: { y: 0.7 } });
            if (!speakMuc4SelectedShape_(q, selectedOpt)) setTimeout(() => speakVietnamese(`${q.answer}`), 180);
        } else {
            playAudio('wrong');
            speakMuc4SelectedShape_(q, selectedOpt);
        }

        updateQuizPalletUI();
        return;
    }

    // CHẾ ĐỘ LUYỆN TẬP TỰ DO
    const isCorrect = selectedOpt === q.answer;
    if (userAnswers[currentQIndex] !== undefined) return;

    if (isCorrect) {
        userAnswers[currentQIndex] = selectedOpt;
        score += (q.diem ?? 0.5);
        starGreenCount++;
        document.getElementById('star-green-count').textContent = starGreenCount;

        document.querySelectorAll('.option-btn').forEach(b => {
            b.disabled = true;
            if (b.getAttribute('data-opt') === q.answer) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-green-100', 'border-green-400', 'text-green-800');
            }
        });
        refreshTopic3Sub33SolutionHost_(q);
        refreshTopic3Sub34SolutionHost_(q);
        refreshMuc4SolutionHost_(q);

        playAudio('correct');
        confetti({ particleCount: 30, spread: 55, origin: { y: 0.7 } });

        // Riêng Mục 1-2: trả lời đúng thì tự chuyển câu để giữ nhịp học liên tục cho bé.
        const isFoundationPractice = /^[12]\./.test(String(q.sub_topic || ''));
        if (isFoundationPractice) {
            setTimeout(() => nextQuestion(), 650);
        } else if (!speakMuc4SelectedShape_(q, selectedOpt)) {
            setTimeout(() => speakVietnamese(`${q.answer}`), 180);
        }
    } else {
        if (!wrongAttemptsByQ[currentQIndex]) wrongAttemptsByQ[currentQIndex] = [];
        if (!wrongAttemptsByQ[currentQIndex].includes(selectedOpt)) {
            wrongAttemptsByQ[currentQIndex].push(selectedOpt);
            starRedCount++;
            document.getElementById('star-red-count').textContent = starRedCount;
        }

        document.querySelectorAll('.option-btn').forEach(b => {
            if (b.getAttribute('data-opt') === selectedOpt) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-red-200', 'border-red-500', 'text-red-900');
                b.disabled = true;
            }
        });

        playAudio('wrong');
        speakMuc4SelectedShape_(q, selectedOpt);
    }

    updateQuizPalletUI();
}

function prevQuestion() {
    stopSpeaking();
    if (currentQIndex > 0) {
        currentQIndex--;
        loadQuestion();
    }
}

function nextQuestion() {
    stopSpeaking();
    const isEvaluationMode = !!activeExamContext || !!activeRoadmapContext;

    if (!isEvaluationMode && userAnswers[currentQIndex] === undefined) {
        showAppNotice('Bé hãy tìm đáp án đúng để hoàn thành câu này nhé!', { title: 'Cố lên bé!', icon: '🐰', tone: 'pink' });
        return;
    }

    if (currentQIndex < activeQuestionsList.length - 1) {
        currentQIndex++;
        loadQuestion();
    } else {
        if (isEvaluationMode) {
            showResultScreen();
        } else {
            confetti({ particleCount: 75, spread: 75, origin: { y: 0.6 } });
            playAudio('win');
            showAppNotice(`🎉 Chúc mừng bé đã hoàn thành trọn vẹn 1 vòng luyện tập (${activeQuestionsList.length} câu)!\nBây giờ Cô Thỏ Hồng sẽ xáo trộn để con bước vào vòng luyện tập tiếp theo nhé!`, { title: 'Hoàn thành vòng luyện tập', icon: '🎉', tone: 'emerald' });

            const basePool = practiceCycleRawPool.length ? practiceCycleRawPool : activeQuestionsList;
            activeQuestionsList = shuffleArray([...basePool]);
            currentQIndex = 0;
            userAnswers = {};
            wrongAttemptsByQ = {};
            loadQuestion();
        }
    }
}

async function triggerSubmitQuizPrompt() {
    const answeredCount = Object.keys(userAnswers).length;
    const total = activeQuestionsList.length;
    const ok = await showAppConfirm(`Bé đã làm ${answeredCount}/${total} câu. Bé có chắc chắn muốn nộp bài thi ngay không?`, {
        title: 'Nộp bài thi', icon: '✅', okText: 'Nộp bài', cancelText: 'Làm tiếp', tone: 'purple'
    });
    if (ok) showResultScreen();
}

function showResultScreen() {
    stopSpeaking();
    clearInterval(quizTimerInterval);

    let correctCount = 0;
    score = 0;
    quizAnsweredLog = [];
    quizWrongAnswers = [];

    activeQuestionsList.forEach((q, idx) => {
        const studentAns = userAnswers[idx];
        const isCorrect = studentAns === q.answer;
        if (isCorrect) {
            correctCount++;
            score += (q.diem ?? 0.5);
        } else {
            quizWrongAnswers.push({
                question_id: q.question_id,
                question_number: idx + 1,
                question_text: q.question_text,
                sub_topic: q.sub_topic || 'Chủ đề tổng hợp',
                skill_tag: q.skill_tag || 'C1',
                dap_an_chon: studentAns || 'Chưa trả lời',
                dap_an_dung: q.answer,
                explanation: q.explanation || 'Không có giải thích chi tiết.'
            });
        }
        quizAnsweredLog.push({
            question_id: q.question_id,
            question_text: q.question_text,
            skill_tag: q.skill_tag || 'C1',
            source_topic_id: q.source_topic_id,
            diem: q.diem ?? 0.5,
            isCorrect,
            dap_an_chon: studentAns || '',
            dap_an_dung: q.answer
        });
    });

    switchAppView('view-result');
    const totalQ = activeQuestionsList.length;
    const percent = Math.round((correctCount / totalQ) * 100);

    // Bài tập theo SGK: điểm tính riêng theo công thức 10/tổng số câu
    const displayScore = activeRoadmapContext
        ? Math.round((correctCount * 10 / totalQ) * 10) / 10
        : score;

    const examBadgeText = activeExamContext ? activeExamContext.examTitle : (activeRoadmapContext ? activeRoadmapContext.chuDe : 'Bài luyện tập chủ đề');
    document.getElementById('report-exam-badge').textContent = examBadgeText;
    document.getElementById('report-student-display').textContent = `Học sinh: ${currentUser?.hoTen || 'Khách'}`;
    const durationStr = quizStartTime ? formatDuration(Date.now() - quizStartTime) : '35 phút';
    document.getElementById('report-meta-display').textContent = `Lớp: ${currentUser?.lop || '1A'} | Mã số: ${currentUser?.maHS || 'KHACH'} | Thời gian: ${durationStr}`;
    document.getElementById('report-total-score-val').textContent = displayScore.toFixed(1);
    document.getElementById('report-correct-ratio-val').textContent = `${correctCount}/${totalQ}`;

    renderReportTopicsBreakdown();

    const nextActionLabel = document.getElementById('report-next-action-label');
    if (nextActionLabel) {
        nextActionLabel.textContent = activeRoadmapContext ? '🔙 Quay lại Bài tập' : '🚀 Làm đề thi tiếp theo';
    }

    const historyBtn = document.getElementById('report-history-btn');
    if (historyBtn) {
        const targetSheet = activeRoadmapContext
            ? 'LichSuTienTrinhTuan'
            : (examFileMap[activeExamContext?.categoryKey]?.sheet || 'LichSuBaiThi_HK1');
        historyBtn.setAttribute('onclick', `openHistoryModal('${targetSheet}')`);
    }

    if (percent >= 80) {
        confetti({ particleCount: 130, spread: 85, origin: { y: 0.6 } });
        playAudio('win');
    }

    if (currentUser && !currentUser.isGuest) {
        if (activeExamContext) saveExamResultToSheet();
        else if (activeRoadmapContext) saveWeeklyProgressToSheet(percent, starCountFromPercent(percent), displayScore);
    }
}

function starCountFromPercent(percent) {
    if (percent === 100) return 3;
    if (percent >= 85) return 2;
    if (percent >= 80) return 1;
    return 0;
}

function renderReportTopicsBreakdown() {
    const container = document.getElementById('report-topics-list');
    if (!container) return;

    const isRoadmap = !!activeRoadmapContext;
    const skillKeys = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6'];
    const skillStats = {};
    skillKeys.forEach(k => {
        skillStats[k] = { total: 0, correct: 0, maxScore: 0, earnedScore: 0 };
    });

    activeQuestionsList.forEach((q, idx) => {
        let rawTag = String(q.skill_tag || 'TOAN_C1').toUpperCase();
        let m = rawTag.match(/C([1-6])/);
        let tag = m ? 'C' + m[1] : 'C1';

        if (!skillStats[tag]) skillStats[tag] = { total: 0, correct: 0, maxScore: 0, earnedScore: 0 };
        skillStats[tag].total++;
        skillStats[tag].maxScore += (q.diem ?? 0.5);
        if (userAnswers[idx] === q.answer) {
            skillStats[tag].correct++;
            skillStats[tag].earnedScore += (q.diem ?? 0.5);
        }
    });

    let html = '';
    skillKeys.forEach(k => {
        const data = skillStats[k];
        const pct = isRoadmap
            ? (data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0)
            : (data.maxScore > 0 ? Math.round((data.earnedScore / data.maxScore) * 100) : 0);
        const isPassed = pct >= 50;
        const badgeClass = isPassed ? 'bg-amber-100 text-amber-800 border border-amber-200' : 'bg-rose-50 text-rose-700 border border-rose-200';
        const badgeText = isPassed ? 'Đạt yêu cầu' : 'Cần luyện tập thêm';
        const barColor = isPassed ? 'bg-gradient-to-r from-amber-400 to-orange-400' : 'bg-gradient-to-r from-pink-400 to-rose-400';
        const scoreLine = isRoadmap
            ? `<span>Số câu đúng: <strong class="text-pink-600">${data.correct}/${data.total} câu</strong></span>`
            : `<span>Điểm đạt: <strong class="text-pink-600">${data.earnedScore.toFixed(1)} / ${data.maxScore.toFixed(1)}đ</strong></span>`;

        html += `
            <div class="bg-pink-50/40 border border-pink-100 rounded-2xl p-3 flex flex-col justify-between space-y-2">
                <div class="flex items-center justify-between">
                    <span class="font-black text-slate-800 text-xs sm:text-sm">${SKILL_TAXONOMY[k].name}</span>
                    <span class="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold ${badgeClass}">${badgeText}</span>
                </div>
                <div class="flex items-center justify-between text-xs font-bold text-slate-600">
                    ${scoreLine}
                    <span class="font-math font-black">${pct}%</span>
                </div>
                <div class="w-full bg-pink-100 rounded-full h-2 overflow-hidden">
                    <div class="${barColor} h-full rounded-full transition-all duration-500" style="width: ${pct}%"></div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function openReviewWrongModal() {
    const modal = document.getElementById('modal-review-wrong');
    const content = document.getElementById('review-wrong-content');
    if (!modal || !content) return;

    if (!quizWrongAnswers.length) {
        content.innerHTML = `<div class="text-center py-8 text-emerald-600 font-extrabold text-base"><i class="fa-solid fa-circle-check text-3xl mb-2 block"></i>Tuyệt vời! Bé không làm sai câu nào trong bài thi này!</div>`;
    } else {
        let html = '';
        quizWrongAnswers.forEach((item, idx) => {
            html += `
                <div class="bg-rose-50/40 border border-rose-200 rounded-2xl p-3.5 space-y-2">
                    <div class="flex items-center justify-between">
                        <span class="px-2.5 py-0.5 bg-rose-100 text-rose-800 font-black text-xs rounded-lg">CÂU ${item.question_number || (idx + 1)}</span>
                        <span class="text-xs font-bold text-slate-500">${escapeHtml(beautifySubtopicName(item.sub_topic_label) || 'Chủ đề tổng hợp')}</span>
                    </div>
                    <p class="font-extrabold text-slate-800 text-sm">${escapeHtml(item.question_text)}</p>
                    <div class="text-xs space-y-1 font-semibold">
                        <p class="text-rose-600"><i class="fa-solid fa-xmark mr-1"></i> Đáp án con chọn: <strong>${escapeHtml(item.dap_an_chon)}</strong></p>
                        <p class="text-emerald-700"><i class="fa-solid fa-check mr-1"></i> Đáp án đúng chuẩn: <strong>${escapeHtml(item.dap_an_dung)}</strong></p>
                    </div>
                    <div class="p-2.5 bg-amber-50/80 border border-amber-200 rounded-xl text-xs text-amber-900 font-semibold flex items-start gap-2">
                        <i class="fa-solid fa-lightbulb text-amber-600 mt-0.5"></i>
                        <span><strong>Lời giải sư phạm:</strong> ${escapeHtml(item.explanation)}</span>
                    </div>
                </div>
            `;
        });
        content.innerHTML = html;
    }
    modal.classList.remove('hidden');
}

function closeReviewWrongModal() {
    document.getElementById('modal-review-wrong').classList.add('hidden');
}

// ==========================================
// LƯU KẾT QUẢ & ĐỒNG BỘ ĐIỂM C1-C6 LÊN GOOGLE SHEETS
// ==========================================
async function saveExamResultToSheet() {
    const { categoryKey, examIndex } = activeExamContext;
    const thoiGianLamBai = quizStartTime ? formatDuration(Date.now() - quizStartTime) : '';
    
    const skillScores = { C1: 0, C2: 0, C3: 0, C4: 0, C5: 0, C6: 0 };
    quizAnsweredLog.forEach(item => {
        let rawTag = String(item.skill_tag || 'C1').toUpperCase();
        let m = rawTag.match(/C([1-6])/);
        let tag = m ? 'C' + m[1] : 'C1';

        if (item.isCorrect && skillScores[tag] !== undefined) {
            skillScores[tag] += (item.diem || 0.5);
        }
    });

    const payload = {
        maHS: currentUser.maHS,
        hoTen: currentUser.hoTen,
        lop: currentUser.lop,
        examCategory: categoryKey,
        sheetName: examFileMap[categoryKey]?.sheet || 'LichSuBaiThi_HK1',
        deSo: examIndex + 1,
        thoiGianLamBai,
        tongDiem: score.toFixed(1),
        soCauDung: quizAnsweredLog.filter(x => x.isCorrect).length,
        tongCauHoi: activeQuestionsList.length,
        diemC1: skillScores.C1.toFixed(1),
        diemC2: skillScores.C2.toFixed(1),
        diemC3: skillScores.C3.toFixed(1),
        diemC4: skillScores.C4.toFixed(1),
        diemC5: skillScores.C5.toFixed(1),
        diemC6: skillScores.C6.toFixed(1),
        wrongQuestions: quizWrongAnswers
    };
    // Ghi điểm từng nhóm năng lực vào ĐÚNG tên cột khai báo trong SKILL_TAXONOMY (C1_NhanBiet, C2_PhepTinh...)
    // — không hard-code tên cột, tránh lệch dữ liệu nếu sau này đổi lại taxonomy.
    Object.keys(SKILL_TAXONOMY).forEach(k => {
        payload[SKILL_TAXONOMY[k].sheetCol] = skillScores[k].toFixed(1);
    });
    try { await callAppsScript('saveExamResult', payload); } catch (e) {}
}

async function saveWeeklyProgressToSheet(percent, starCount, scoreVal) {
    const { week, topicId, chuDe } = activeRoadmapContext;
    const thoiGianLamBai = quizStartTime ? formatDuration(Date.now() - quizStartTime) : '';
    const scoreThang10 = (scoreVal ?? ((score / activeQuestionsList.length) * 10)).toFixed(1);

    // Đếm CHÍNH XÁC số câu đúng / tổng số câu của từng nhóm năng lực, dựa theo skill_tag
    // (TOAN_C1-C6) mà mỗi câu tự mang sẵn — không ước lượng chia đều, không suy luận gián tiếp qua chủ đề Mục lớn.
    const skillCorrect = { C1: 0, C2: 0, C3: 0, C4: 0, C5: 0, C6: 0 };
    const skillTotal = { C1: 0, C2: 0, C3: 0, C4: 0, C5: 0, C6: 0 };
    quizAnsweredLog.forEach(item => {
        let rawTag = String(item.skill_tag || 'TOAN_C1').toUpperCase();
        let m = rawTag.match(/C([1-6])/);
        const tag = m ? 'C' + m[1] : 'C1';
        if (skillTotal[tag] === undefined) return;
        skillTotal[tag]++;
        if (item.isCorrect) skillCorrect[tag]++;
    });
    const payload = {
        student_id: currentUser.maHS,
        maHS: currentUser.maHS,
        hoTen: currentUser.hoTen,
        lop: currentUser.lop,
        sheetName: 'LichSuTienTrinhTuan',
        week_completed: week,
        tuan: week,
        chuDe,
        topicId,
        score: scoreThang10,
        stars_earned: starCount,
        tongCauHoi: activeQuestionsList.length,
        soCauDung: quizAnsweredLog.filter(x => x.isCorrect).length,
        percent,
        thoiGianLamBai,
        wrongQuestions: quizWrongAnswers
    };
    Object.keys(SKILL_TAXONOMY).forEach(k => {
        payload[SKILL_TAXONOMY[k].sheetCol] = skillCorrect[k];
        payload[SKILL_TAXONOMY[k].totalCol] = skillTotal[k];
    });

    try {
        await callAppsScript('saveWeeklyProgress', payload);
        if (percent >= 80) {
            const data = await loadBaiHocData();
            const seq = data?.learning_sequence || [];
            const nextIndex = Number(week) + 1;
            const currentUnlocked = getCurrentExerciseIndex_();
            if (nextIndex > currentUnlocked && nextIndex <= seq.length) {
                setCurrentExerciseIndex_(nextIndex);
                const nextBai = seq[nextIndex - 1];
                setTimeout(() => showAppNotice(`🎉 Chúc mừng bé đạt ${percent}%! Bài tập ${nextBai} đã được mở khóa.`, { title: 'Mở khóa bài mới', icon: '🌟', tone: 'emerald' }), 350);
            }
        }
    } catch (e) {}
}

async function openHistoryModal(sheetName = 'LichSuTienTrinhTuan') {
    if (!currentUser || currentUser.isGuest) {
        showAppNotice('Bé vui lòng đăng nhập để xem lịch sử Bài tập nhé!', { title: 'Cần đăng nhập', icon: '🔐', tone: 'purple' }); return;
    }

    const modal = document.getElementById('modal-history-progress');
    modal.classList.remove('hidden');

    document.getElementById('hist-info-name').textContent = currentUser.hoTen || '--';
    document.getElementById('hist-info-class').textContent = currentUser.lop || '--';
    document.getElementById('hist-info-code').textContent = currentUser.maHS || '--';
    document.getElementById('hist-info-dob').textContent = currentUser.ngaySinh || '03/09/2019';
    document.getElementById('hist-report-date').textContent = new Date().toLocaleDateString('vi-VN');

    const titleMap = {
        LichSuTienTrinhTuan: "Báo cáo tiến trình Bài tập theo SGK",
        LichSuBaiThi_HK1: "Báo cáo kết quả đấu trường — Học kỳ 1",
        LichSuBaiThi_HK2: "Báo cáo kết quả đấu trường — Học kỳ 2",
        LichSuBaiThi_HSG: "Báo cáo kết quả đấu trường — Học sinh giỏi"
    };
    document.getElementById('hist-modal-title').textContent = titleMap[sheetName] || "Kết quả tiến trình học tập";

    showLoadingOverlay('Đang trích xuất dữ liệu và vẽ biểu đồ năng lực...');
    try {
        const res = await callAppsScript('getHistory', { maHS: currentUser.maHS, sheetName });
        hideLoadingOverlay();
        const rows = (res && res.history) ? res.history : [];
        renderHistoryReport(rows, sheetName);
    } catch (err) {
        hideLoadingOverlay();
        showAppNotice('Không thể tải lịch sử: ' + err.message, { title: 'Lịch sử học tập', icon: '📊', tone: 'rose' });
    }
}

function closeHistoryModal() {
    document.getElementById('modal-history-progress').classList.add('hidden');
    if (histLineChartInstance) { histLineChartInstance.destroy(); histLineChartInstance = null; }
    if (histBarChartInstance) { histBarChartInstance.destroy(); histBarChartInstance = null; }
}

// ==========================================
// BIỂU ĐỒ THANH NGANG & BẢNG KÈM HÀNG TRUNG BÌNH
// ==========================================
function getSkillCell(row, skillKey) {
    const taxo = SKILL_TAXONOMY[skillKey];
    const correct = Number(row[taxo.sheetCol]);
    const total = Number(row[taxo.totalCol]);
    if (!row[taxo.totalCol] || isNaN(total) || total <= 0) return null;
    return { correct: isNaN(correct) ? 0 : correct, total };
}

function formatDateOnly(value) {
    if (!value) return '--';
    const d = new Date(value);
    if (isNaN(d.getTime())) return String(value).split('T')[0] || String(value);
    return d.toLocaleDateString('vi-VN');
}

function formatDateShort(value) {
    const d = value ? new Date(value) : null;
    if (!d || isNaN(d.getTime())) return '';
    return `${String(d.getDate()).padStart(2, '0')}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}

function renderHistoryReport(rows, sheetName) {
    const isWeekly = sheetName === 'LichSuTienTrinhTuan';
    const labels = rows.map((r, i) => {
        const dm = formatDateShort(r.Timestamp || r.ngayLam);
        const label = isWeekly ? (r.chuDe || r.chude || `Bài tập ${r.tuan || i + 1}`) : (r.deSo ? `Đề ${r.deSo}` : `Bài tập ${r.tuan || i + 1}`);
        return dm ? `${dm} ${label}` : label;
    });
    const scores = rows.map(r => Number(r.score || r.tongDiem || ((r.soCauDung / (r.tongCauHoi || 30)) * 10).toFixed(1)));

    const ctxLine = document.getElementById('progressChartCanvas').getContext('2d');
    if (histLineChartInstance) histLineChartInstance.destroy();

    histLineChartInstance = new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: labels.length ? labels : ['Chưa có bài thi'],
            datasets: [{
                label: 'Điểm số (/10)',
                data: scores.length ? scores : [0],
                borderColor: '#e11d48',
                backgroundColor: 'rgba(254, 226, 226, 0.5)',
                borderWidth: 3.5,
                pointBackgroundColor: '#be123c',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 8,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    min: 0, max: 10.5,
                    ticks: { stepSize: 2, color: '#000000', font: { family: 'Quicksand', weight: 'bold' } }
                },
                x: {
                    grid: { display: false },
                    ticks: {
                        color: '#000000',
                        font: { family: 'Quicksand', weight: 'bold', size: 11 },
                        maxRotation: 90,
                        minRotation: 90
                    }
                }
            },
            plugins: { legend: { display: false } }
        }
    });

    const skillKeys = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6'];
    // Chưa có dữ liệu thật (chưa làm bài nào) thì để 0 hết, không dùng số ảo mẫu nữa
    // (trước đây để tạm {85,78,92,70,80,75} gây hiểu lầm là đã có kết quả thật).
    const skillAverages = { C1: 0, C2: 0, C3: 0, C4: 0, C5: 0, C6: 0 };
    const touchedSkills = [];

    if (rows.length && isWeekly) {
        // Bài tập: % = tổng số câu đúng / tổng số câu đã làm THẬT của nhóm kỹ năng đó
        skillKeys.forEach((k) => {
            let sumCorrect = 0, sumTotal = 0;
            rows.forEach(r => {
                const cell = getSkillCell(r, k);
                if (!cell) return;
                sumCorrect += cell.correct;
                sumTotal += cell.total;
            });
            if (sumTotal > 0) {
                skillAverages[k] = Math.min(100, Math.round((sumCorrect / sumTotal) * 100));
                touchedSkills.push(k);
            }
        });
    } else if (rows.length) {
        // Điểm tối đa THẬT của từng nhóm năng lực trong 1 đề thi, đúng theo ma trận đề thi 13 câu / 10 điểm:
        // C1 (Q1,Q3,Q7)=2.0đ | C2 (Q4,Q8)=1.5đ | C3 (Q6,Q9)=1.5đ | C4 (Q2,Q5,Q10)=2.0đ | C5 (Q11)=1.0đ | C6 (Q12,Q13)=2.0đ
        const SKILL_MAX_POINTS = { C1: 2.0, C2: 1.5, C3: 1.5, C4: 2.0, C5: 1.0, C6: 2.0 };
        skillKeys.forEach((k) => {
            const colName = SKILL_TAXONOMY[k].sheetCol;
            const vals = rows.map(r => {
                const val = r[`diem${k}`] ?? r[colName] ?? r[`diem_${k.toLowerCase()}`] ?? r[k];
                return (val !== undefined && val !== null && val !== '--') ? Number(val) : 0;
            });
            const sum = vals.reduce((a, b) => a + b, 0);
            const maxTotal = SKILL_MAX_POINTS[k] * vals.length;
            // Không dùng "|| 75" nữa: điểm 0 thật sự phải hiển thị 0%, không được tự nhảy về giá trị mặc định.
            if (vals.length > 0 && maxTotal > 0) {
                skillAverages[k] = Math.min(100, Math.round((sum / maxTotal) * 100));
                touchedSkills.push(k);
            }
        });
    }

    const ctxBar = document.getElementById('topicRadarChartCanvas').getContext('2d');
    if (histBarChartInstance) histBarChartInstance.destroy();

    histBarChartInstance = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: skillKeys.map(k => SKILL_TAXONOMY[k].name),
            datasets: [{
                label: 'Độ thành thạo (%)',
                data: skillKeys.map(k => skillAverages[k]),
                backgroundColor: ['#f472b6', '#fb7185', '#f59e0b', '#a855f7', '#ec4899', '#e11d48'],
                borderRadius: 8,
                borderSkipped: false,
                barThickness: 16
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    min: 0,
                    max: 100,
                    ticks: { stepSize: 20, callback: (v) => v + '%', color: '#000000', font: { family: 'Quicksand', weight: 'bold' } },
                    grid: { color: 'rgba(251, 207, 232, 0.3)' }
                },
                y: {
                    grid: { display: false },
                    ticks: { font: { family: 'Quicksand', weight: 'bold', size: 14 }, color: '#000000' }
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: { callbacks: { label: (ctx) => ` Độ thành thạo: ${ctx.raw}%` } }
            }
        },
        plugins: [{
            id: 'barValueLabels',
            afterDatasetsDraw(chart) {
                const { ctx } = chart;
                chart.data.datasets[0].data.forEach((val, i) => {
                    const meta = chart.getDatasetMeta(0).data[i];
                    if (!meta) return;
                    ctx.save();
                    ctx.font = 'bold 12px Quicksand, sans-serif';
                    ctx.fillStyle = '#1e293b';
                    ctx.textAlign = 'left';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(`${val}%`, meta.x + 6, meta.y);
                    ctx.restore();
                });
            }
        }]
    });

    renderPedagogicalEvaluation(rows, skillAverages, touchedSkills);
    renderHistoryTable(rows, sheetName);
}

function renderPedagogicalEvaluation(rows, skillAverages, touchedSkills) {
    const box = document.getElementById('pedagogical-evaluation-box');
    if (!box) return;

    const studentName = getStudentFirstName();
    const count = rows.length;
    const avgScore = count ? (rows.reduce((acc, r) => acc + Number(r.score || r.tongDiem || 0), 0) / count) : 0;
    const avgScoreStr = avgScore.toFixed(1);

    // 1. Đánh giá tổng quan — phải khớp thật với điểm số, không khen chung chung bất kể kết quả
    let overviewText;
    if (avgScore >= 8) {
        overviewText = `Con nắm rất vững kiến thức trọng tâm, làm bài nghiêm túc và đạt kết quả xuất sắc.`;
    } else if (avgScore >= 6.5) {
        overviewText = `Con nắm khá tốt kiến thức trọng tâm, tuy nhiên vẫn còn một vài chỗ cần luyện thêm để đạt kết quả cao hơn.`;
    } else if (avgScore >= 5) {
        overviewText = `Con đã nắm được kiến thức cơ bản nhưng chưa thật chắc, cần ôn luyện thêm để tiến bộ hơn.`;
    } else {
        overviewText = `Con còn gặp khó khăn với nội dung này, ba mẹ nên đồng hành ôn luyện thêm cùng con nhé.`;
    }

    // 2 & 3. Thế mạnh / điểm cần khắc phục — CHỈ lấy từ những nhóm bé đã thực sự luyện tập,
    // tuyệt đối không nhận xét về nhóm bé chưa hề động tới (tránh nói sai với thực tế).
    const validSkills = (touchedSkills && touchedSkills.length) ? touchedSkills : [];
    const sortedValid = [...validSkills].sort((a, b) => skillAverages[b] - skillAverages[a]);

    let strengthHtml, weaknessHtml;
    if (sortedValid.length >= 2) {
        const top1 = SKILL_TAXONOMY[sortedValid[0]].name;
        const top2 = SKILL_TAXONOMY[sortedValid[1]].name;
        strengthHtml = `Con đạt độ thành thạo tốt ở các nhóm: <strong>${escapeHtml(top1)}</strong> (${skillAverages[sortedValid[0]]}%) và <strong>${escapeHtml(top2)}</strong> (${skillAverages[sortedValid[1]]}%).`;

        const weak1 = sortedValid[sortedValid.length - 1];
        weaknessHtml = `Con cần luyện thêm ở mảng: <strong>${escapeHtml(SKILL_TAXONOMY[weak1].name)}</strong> (${skillAverages[weak1]}%). ${escapeHtml(SKILL_TAXONOMY[weak1].advice)}`;
    } else if (sortedValid.length === 1) {
        const only1 = sortedValid[0];
        strengthHtml = `Con đạt ${skillAverages[only1]}% ở nhóm <strong>${escapeHtml(SKILL_TAXONOMY[only1].name)}</strong> — mảng duy nhất bé đã luyện tập tới thời điểm này.`;
        weaknessHtml = `Bé mới luyện tập 1 nhóm kỹ năng, cô chưa đủ dữ liệu để đánh giá toàn diện. Ba mẹ khuyến khích con hoàn thành thêm các Bài tập khác nhé!`;
    } else {
        strengthHtml = `Bé chưa có đủ dữ liệu luyện tập để đánh giá thế mạnh.`;
        weaknessHtml = `Bé chưa có đủ dữ liệu luyện tập để đánh giá điểm cần khắc phục.`;
    }

    const plainTextForSpeech =
        `Đánh giá tổng quan năng lực và xu hướng tiến bộ. Học sinh ${currentUser.hoTen} đã hoàn thành ${count} bài kiểm tra với điểm số trung bình tích lũy đạt ${avgScoreStr} trên 10 điểm. ${overviewText} `
        + `Khen ngợi và thế mạnh nổi trội. ${strengthHtml.replace(/<[^>]+>/g, '')} `
        + `Điểm cần lưu ý và khắc phục. ${weaknessHtml.replace(/<[^>]+>/g, '')} `
        + `Kế hoạch bồi dưỡng và hướng dẫn phụ huynh. Ba mẹ nên dành 15 phút mỗi tối cùng con ôn lại các phép tính, đặt câu hỏi gợi mở và khen ngợi kịp thời để giúp ${studentName} giữ vững niềm yêu thích môn Toán nhé!`;
    currentPedagogicalText = plainTextForSpeech;

    box.innerHTML = `
        <div class="bg-white/80 p-3 rounded-xl border border-amber-200">
            <span class="text-amber-700 font-extrabold block mb-0.5">🌟 1. Đánh giá tổng quan năng lực & xu hướng tiến bộ:</span>
            <p class="text-gray-700">Học sinh <strong>${escapeHtml(currentUser.hoTen)}</strong> đã hoàn thành <strong>${count} bài kiểm tra</strong> với điểm số trung bình tích lũy đạt <strong class="text-pink-600">${avgScoreStr}/10 điểm</strong>. ${overviewText}</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div class="bg-emerald-50/70 p-3 rounded-xl border border-emerald-200">
                <span class="text-emerald-700 font-extrabold block mb-0.5">✅ 2. Khen ngợi & thế mạnh nổi trội:</span>
                <p class="text-gray-700">${strengthHtml}</p>
            </div>

            <div class="bg-rose-50/70 p-3 rounded-xl border border-rose-200">
                <span class="text-rose-700 font-extrabold block mb-0.5">⚠️ 3. Điểm cần lưu ý & khắc phục:</span>
                <p class="text-gray-700">${weaknessHtml}</p>
            </div>
        </div>

        <div class="bg-white/80 p-3 rounded-xl border border-purple-200">
            <span class="text-purple-700 font-extrabold block mb-0.5">💡 4. Kế hoạch bồi dưỡng & hướng dẫn phụ huynh:</span>
            <p class="text-gray-700">Ba mẹ nên dành 15 phút mỗi tối cùng con ôn lại các phép tính, đặt câu hỏi gợi mở và khen ngợi kịp thời để giúp ${studentName} giữ vững niềm yêu thích môn Toán nhé!</p>
        </div>
    `;
}

function renderHistoryTable(rows, sheetName) {
    const tbody = document.getElementById('hist-table-body');
    if (!tbody) return;

    if (!rows.length) {
        tbody.innerHTML = `<tr><td colspan="11" class="py-4 text-gray-400">Chưa ghi nhận lịch sử bài làm nào</td></tr>`;
        return;
    }

    const isWeekly = sheetName === 'LichSuTienTrinhTuan';
    const skillKeys = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6'];

    const getScoreVal = (r, num, colName) => {
        const val = r[`diemC${num}`] ?? r[colName] ?? r[`diem_c${num}`] ?? r[`C${num}`];
        return (val !== undefined && val !== null && val !== '') ? Number(val) : 0;
    };

    const totalRows = rows.length;
    let sumTongDiem = 0;
    rows.forEach(r => { sumTongDiem += Number(r.tongDiem || r.score || 0); });
    const avgTong = (sumTongDiem / totalRows).toFixed(1);

    let summaryCells = '';
    let bodyRows = '';

    if (isWeekly) {
        // Tổng hợp: % = tổng câu đúng / tổng câu đã làm THẬT của đúng nhóm kỹ năng đó
        const agg = {};
        skillKeys.forEach(k => { agg[k] = { correct: 0, total: 0 }; });
        rows.forEach(r => {
            skillKeys.forEach(k => {
                const cell = getSkillCell(r, k);
                if (!cell) return;
                agg[k].correct += cell.correct;
                agg[k].total += cell.total;
            });
        });
        skillKeys.forEach(k => {
            const a = agg[k];
            summaryCells += `<td class="py-2 px-1">${a.total > 0 ? Math.round((a.correct / a.total) * 100) + '%' : '--'}</td>`;
        });

        rows.forEach((r, idx) => {
            const itemDiem = r.tongDiem || r.score || '--';
            const dateStr = formatDateOnly(r.Timestamp || r.ngayLam);
            const durationStr = r.thoiGianLamBai || '--';

            let skillCells = '';
            skillKeys.forEach(k => {
                const cell = getSkillCell(r, k);
                if (!cell) { skillCells += `<td class="py-2 px-1 text-gray-300">--</td>`; return; }
                const pct = cell.total > 0 ? Math.round((cell.correct / cell.total) * 100) : 0;
                skillCells += `<td class="py-2 px-1">${cell.correct}/${cell.total} <span class="text-gray-400">(${pct}%)</span></td>`;
            });

            bodyRows += `
                <tr class="hover:bg-pink-50/30 transition-colors">
                    <td class="py-2.5 px-2">${idx + 1}</td>
                    <td class="py-2.5 px-2 font-black">${escapeHtml(r.chuDe || r.chude || `Bài tập ${r.tuan || (idx + 1)}`)}</td>
                    <td class="py-2.5 px-2 font-black text-rose-600">${itemDiem}</td>
                    ${skillCells}
                    <td class="py-2.5 px-2 text-gray-500">${dateStr}</td>
                    <td class="py-2.5 px-2 text-gray-500">${durationStr}</td>
                </tr>
            `;
        });
    } else {
        skillKeys.forEach((k, i) => {
            const sum = rows.reduce((acc, r) => acc + getScoreVal(r, i + 1, SKILL_TAXONOMY[k].sheetCol), 0);
            summaryCells += `<td class="py-2 px-1">${(sum / totalRows).toFixed(1)}</td>`;
        });

        rows.forEach((r, idx) => {
            const itemDiem = r.tongDiem || r.score || '--';
            const dateStr = formatDateOnly(r.Timestamp || r.ngayLam);
            const durationStr = r.thoiGianLamBai || '--';

            let examSkillCells = '';
            skillKeys.forEach((k, i) => {
                examSkillCells += `<td class="py-2 px-1">${getScoreVal(r, i + 1, SKILL_TAXONOMY[k].sheetCol)}</td>`;
            });

            bodyRows += `
                <tr class="hover:bg-pink-50/30 transition-colors">
                    <td class="py-2.5 px-2">${idx + 1}</td>
                    <td class="py-2.5 px-2 font-black">${r.deSo ? `Đề ${r.deSo}` : `Bài tập ${r.tuan || (idx + 1)}`}</td>
                    <td class="py-2.5 px-2 font-black text-rose-600">${itemDiem}</td>
                    ${examSkillCells}
                    <td class="py-2.5 px-2 text-gray-500">${dateStr}</td>
                    <td class="py-2.5 px-2 text-gray-500">${durationStr}</td>
                </tr>
            `;
        });
    }

    const html = `
        <tr class="bg-amber-100/90 text-amber-950 font-black border-b-2 border-amber-200">
            <td class="py-2.5 px-2" colspan="2">Điểm trung bình</td>
            <td class="py-2.5 px-2 text-rose-600">${avgTong}</td>
            ${summaryCells}
            <td class="py-2.5 px-2" colspan="2">--</td>
        </tr>
        ${bodyRows}
    `;
    tbody.innerHTML = html;
}

function exportReportToPDF() {
    const area = document.getElementById('printable-report-area');
    if (!area) return;
    showLoadingOverlay('Đang khởi tạo file PDF chuẩn in ấn...');
    
    const opt = {
        margin: [5, 5, 5, 5],
        filename: `Bao_Cao_Tien_Trinh_${currentUser?.maHS || 'HocSinh'}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' },
        pagebreak: { mode: ['css', 'legacy'] }
    };

    html2pdf().set(opt).from(area).save().then(() => {
        hideLoadingOverlay();
    }).catch(err => {
        hideLoadingOverlay();
        window.print();
    });
}

// ==========================================
// ĐỘNG CƠ ÂM THANH: GOOGLE TTS CHỊ BAN MAI
// ==========================================
function stopSpeaking() {
    try {
        if (banMaiAudio) {
            banMaiAudio.pause();
            banMaiAudio.currentTime = 0;
            banMaiAudio.onended = null;
        }
    } catch (e) {}
}

function speakVietnamese(text, rate = 0.96) {
    if (!text) return;
    try {
        stopSpeaking();

        let cleanText = String(text)
            .replace(/<[^>]*>/g, '')
            // Chuẩn hóa ký hiệu toán học để Google TTS đọc đúng bằng tiếng Việt.
            // Chỉ thay dấu khi nó nằm giữa số / dấu ?, tránh làm hỏng dấu gạch nối trong chữ.
            .replace(/(\d|\?)\s*[−–—-]\s*(?=\d|\?)/g, '$1 trừ ')
            .replace(/(\d|\?)\s*\+\s*(?=\d|\?)/g, '$1 cộng ')
            .replace(/(\d|\?)\s*=\s*(?=\d|\?)/g, '$1 bằng ')
            .replace(/b-a/g, 'bờ a ba')
            .replace(/c\/k/g, 'cờ hoặc ca')
            .replace(/g\/gh/g, 'gờ đơn hoặc gờ kép')
            .replace(/ng\/ngh/g, 'ngờ đơn hoặc ngờ kép')
            .trim();

        if (!cleanText) return;

        if (cleanText.length <= 180) {
            const encoded = encodeURIComponent(cleanText);
            banMaiAudio.src = `https://translate.google.com/translate_tts?ie=UTF-8&tl=vi&client=tw-ob&q=${encoded}`;
            banMaiAudio.playbackRate = rate;
            const playPromise = banMaiAudio.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {});
            }
            return;
        }

        const sentences = cleanText.match(/[^.!?\n]+[.!?\n]*/g) || [cleanText];
        let sIdx = 0;
        function playSentence() {
            if (sIdx >= sentences.length) return;
            const s = sentences[sIdx++].trim();
            if (!s) { playSentence(); return; }
            const encoded = encodeURIComponent(s);
            banMaiAudio.src = `https://translate.google.com/translate_tts?ie=UTF-8&tl=vi&client=tw-ob&q=${encoded}`;
            banMaiAudio.playbackRate = rate;
            banMaiAudio.onended = playSentence;
            const playPromise = banMaiAudio.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {});
            }
        }
        playSentence();
    } catch (err) {}
}

function speakCurrentQuestion() {
    const q = activeQuestionsList[currentQIndex];
    if (!q) return;
    const textToRead = q.audio_text || q.reading_passage || q.question_text;
    speakVietnamese(textToRead, 0.96);
}

let currentPedagogicalText = '';
function speakPedagogicalEvaluation() {
    if (!currentPedagogicalText) return;
    speakVietnamese(currentPedagogicalText, 0.96);
}

function playAudio(type) {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!audioCtx && AudioContext) audioCtx = new AudioContext();
        if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
        if (!audioCtx) return;

        const now = audioCtx.currentTime;

        if (type === 'correct') {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(523.25, now);
            osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.12);
            osc.frequency.exponentialRampToValueAtTime(1046.50, now + 0.25);
            gain.gain.setValueAtTime(0.3, now);
            gain.gain.linearRampToValueAtTime(0.01, now + 0.35);
            osc.start(now);
            osc.stop(now + 0.35);
        } else if (type === 'wrong') {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.type = 'square';
            osc.frequency.setValueAtTime(300, now);
            gain.gain.setValueAtTime(0.001, now);
            gain.gain.linearRampToValueAtTime(0.22, now + 0.01);
            gain.gain.setValueAtTime(0.22, now + 0.09);
            gain.gain.linearRampToValueAtTime(0.001, now + 0.1);
            gain.gain.setValueAtTime(0.001, now + 0.14);
            gain.gain.linearRampToValueAtTime(0.22, now + 0.15);
            gain.gain.setValueAtTime(0.22, now + 0.23);
            gain.gain.linearRampToValueAtTime(0.001, now + 0.24);
            osc.start(now);
            osc.stop(now + 0.25);
        } else if (type === 'win') {
            [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
                setTimeout(() => {
                    const o = audioCtx.createOscillator(), g = audioCtx.createGain();
                    o.connect(g); g.connect(audioCtx.destination);
                    o.frequency.value = freq; g.gain.setValueAtTime(0.2, audioCtx.currentTime);
                    g.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
                    o.start(); o.stop(audioCtx.currentTime + 0.3);
                }, i * 150);
            });
        }
    } catch (e) {}
}

function initQuizPallet() {
    updateQuizPalletUI();
}

function updateQuizPalletUI() {
    const container = document.getElementById('quiz-pallet-container');
    if (!container) return;
    if (!activeQuestionsList || !activeQuestionsList.length) { container.innerHTML = ''; return; }

    const isRoadmap = !!activeRoadmapContext;
    const isExam = !!activeExamContext;
    const total = activeQuestionsList.length;

    if (isExam) {
        container.className = `grid gap-1 max-w-xl mx-2`;
        container.style.gridTemplateColumns = `repeat(${total}, minmax(0, 1fr))`;
    } else {
        container.className = 'grid grid-cols-10 gap-1.5 max-w-xl mx-2';
        container.style.gridTemplateColumns = '';
    }

    const btnSize = isExam ? 'w-6 h-6 md:w-7 md:h-7 text-[10px] md:text-xs' : 'w-8 h-8 text-xs';

    let html = '';
    activeQuestionsList.forEach((q, idx) => {
        const answer = userAnswers[idx];
        const isAnswered = answer !== undefined;
        const isCurrent = idx === currentQIndex;
        let cls = 'bg-white text-pink-400 border-pink-200 hover:bg-pink-50';

        if (isAnswered) {
            if (isRoadmap) {
                const isCorrect = answer === q.answer;
                cls = isCorrect
                    ? 'bg-emerald-400 text-white border-emerald-500 hover:bg-emerald-500'
                    : 'bg-red-200 text-red-800 border-red-400 hover:bg-red-300';
            } else {
                // Chế độ thi: không lộ đúng/sai, nhưng câu ĐÃ TRẢ LỜI phải đổi màu KHÁC HẲN
                // với câu ĐANG LÀM (đang dùng gradient pink->purple) để không bị lẫn khi nhìn nhanh.
                cls = 'bg-emerald-500 text-white border-emerald-600 hover:bg-emerald-600';
            }
        }
        if (isCurrent) cls = 'bg-gradient-to-br from-pink-500 to-purple-500 text-white border-pink-500 shadow-md';
        html += `<button onclick="jumpToQuestion(${idx})" class="${btnSize} shrink-0 rounded-xl border-2 font-black flex items-center justify-center transition-colors duration-150 ${cls}">${idx + 1}</button>`;
    });
    container.innerHTML = html;
}

function jumpToQuestion(idx) {
    stopSpeaking();
    if (idx < 0 || idx >= activeQuestionsList.length) return;
    currentQIndex = idx;
    loadQuestion();
}

function formatDuration(ms) {
    const s = Math.round(ms / 1000);
    return `${Math.floor(s / 60)} phút ${s % 60} giây`;
}

function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function showLoadingOverlay(msg) {
    let el = document.getElementById('loading-overlay');
    if (!el) {
        el = document.createElement('div');
        el.id = 'loading-overlay';
        el.className = 'fixed inset-0 bg-black/30 flex items-center justify-center z-50';
        el.innerHTML = `<div class="bg-white px-6 py-4 rounded-2xl shadow-xl font-extrabold text-pink-600 flex items-center space-x-3"><i class="fa-solid fa-spinner fa-spin"></i><span id="loading-overlay-text"></span></div>`;
        document.body.appendChild(el);
    }
    document.getElementById('loading-overlay-text').textContent = msg;
    el.classList.remove('hidden');
}
function hideLoadingOverlay() { document.getElementById('loading-overlay')?.classList.add('hidden'); }

function toggleAutoSpeech() {
    autoSpeechEnabled = !autoSpeechEnabled;
    localStorage.setItem('autoSpeechEnabled', autoSpeechEnabled ? 'true' : 'false');
    if (!autoSpeechEnabled) stopSpeaking();
    updateAutoSpeechButtonUI();
}

function updateAutoSpeechButtonUI() {
    const btn = document.getElementById('btn-toggle-autospeech');
    if (!btn) return;
    const icon = btn.querySelector('i');
    if (autoSpeechEnabled) {
        icon.className = 'fa-solid fa-volume-high';
        btn.title = 'Đang BẬT tự động đọc câu hỏi — bấm để tắt';
        btn.classList.remove('bg-gray-100', 'text-gray-400', 'border-gray-200');
        btn.classList.add('bg-pink-50', 'text-pink-600', 'border-pink-200');
    } else {
        icon.className = 'fa-solid fa-volume-xmark';
        btn.title = 'Đang TẮT tự động đọc câu hỏi — bấm để bật';
        btn.classList.remove('bg-pink-50', 'text-pink-600', 'border-pink-200');
        btn.classList.add('bg-gray-100', 'text-gray-400', 'border-gray-200');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('login-mapin')?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') doLogin();
    });
    document.getElementById('login-mahs')?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') doLogin();
    });

    window.addEventListener('click', () => {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!audioCtx && AudioContext) audioCtx = new AudioContext();
        if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
    }, { once: true });

    updateAutoSpeechButtonUI();
    if ('serviceWorker' in navigator) { navigator.serviceWorker.register('./service-worker.js').catch(() => {}); }
});

tryAutoLogin();
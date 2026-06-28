const dhikrItems = [
  {
    category: "التسبيح",
    text: "سبحان الله",
    note: "من أحب الكلام إلى الله.",
  },
  {
    category: "التحميد",
    text: "الحمد لله",
    note: "احمد الله على نعمه في كل وقت.",
  },
  {
    category: "التكبير",
    text: "الله أكبر",
    note: "استحضر عظمة الله مع كل ضغطة.",
  },
  {
    category: "الاستغفار",
    text: "أستغفر الله العظيم وأتوب إليه",
    note: "ذكر عظيم لتجديد التوبة.",
  },
  {
    category: "الحوقلة",
    text: "لا حول ولا قوة إلا بالله",
    note: "كنز من كنوز الجنة.",
  },
  {
    category: "الصلاة على النبي",
    text: "اللهم صل وسلم على نبينا محمد",
    note: "أكثر منها في يومك وليلتك.",
  },
  {
    category: "التوحيد",
    text: "لا إله إلا الله وحده لا شريك له",
    note: "أفضل الذكر شهادة التوحيد.",
  },
  {
    category: "الباقيات الصالحات",
    text: "سبحان الله والحمد لله ولا إله إلا الله والله أكبر",
    note: "كلمات جامعة عظيمة الأجر.",
  },
  {
    category: "الدعاء",
    text: "رب اغفر لي وتب علي إنك أنت التواب الرحيم",
    note: "دعاء يجمع الاستغفار وطلب التوبة.",
  },
  {
    category: "الذكر",
    text: "سبحان الله وبحمده سبحان الله العظيم",
    note: "كلمتان خفيفتان على اللسان.",
  },
];

const azkar = [
  {
    type: "morning",
    title: "ذكر الصباح",
    text: "أصبحنا وأصبح الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له.",
    repeat: "مرة واحدة",
  },
  {
    type: "morning",
    title: "آية الكرسي",
    text: "الله لا إله إلا هو الحي القيوم، لا تأخذه سنة ولا نوم.",
    repeat: "مرة واحدة",
  },
  {
    type: "morning",
    title: "الإخلاص والمعوذتان",
    text: "قل هو الله أحد، قل أعوذ برب الفلق، قل أعوذ برب الناس.",
    repeat: "ثلاث مرات",
  },
  {
    type: "morning",
    title: "طلب العافية",
    text: "اللهم إني أسألك العفو والعافية في الدنيا والآخرة.",
    repeat: "مرة واحدة",
  },
  {
    type: "morning",
    title: "العافية والحفظ",
    text: "اللهم عافني في بدني، اللهم عافني في سمعي، اللهم عافني في بصري، لا إله إلا أنت.",
    repeat: "ثلاث مرات",
  },
  {
    type: "morning",
    title: "التوكل",
    text: "حسبي الله لا إله إلا هو عليه توكلت وهو رب العرش العظيم.",
    repeat: "سبع مرات",
  },
  {
    type: "morning",
    title: "كلمة الإخلاص",
    text: "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد، وهو على كل شيء قدير.",
    repeat: "عشر مرات",
  },
  {
    type: "morning",
    title: "تنزيه الله",
    text: "سبحان الله وبحمده.",
    repeat: "مئة مرة",
  },
  {
    type: "evening",
    title: "ذكر المساء",
    text: "أمسينا وأمسى الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له.",
    repeat: "مرة واحدة",
  },
  {
    type: "evening",
    title: "آية الكرسي",
    text: "الله لا إله إلا هو الحي القيوم، لا تأخذه سنة ولا نوم.",
    repeat: "مرة واحدة",
  },
  {
    type: "evening",
    title: "الإخلاص والمعوذتان",
    text: "قل هو الله أحد، قل أعوذ برب الفلق، قل أعوذ برب الناس.",
    repeat: "ثلاث مرات",
  },
  {
    type: "evening",
    title: "كلمات الله التامات",
    text: "أعوذ بكلمات الله التامات من شر ما خلق.",
    repeat: "ثلاث مرات",
  },
  {
    type: "evening",
    title: "طلب العافية",
    text: "اللهم إني أسألك العفو والعافية في الدنيا والآخرة.",
    repeat: "مرة واحدة",
  },
  {
    type: "evening",
    title: "الاستعاذة من الشر",
    text: "بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء وهو السميع العليم.",
    repeat: "ثلاث مرات",
  },
  {
    type: "evening",
    title: "التوكل",
    text: "حسبي الله لا إله إلا هو عليه توكلت وهو رب العرش العظيم.",
    repeat: "سبع مرات",
  },
  {
    type: "evening",
    title: "الصلاة على النبي",
    text: "اللهم صل وسلم على نبينا محمد.",
    repeat: "عشر مرات",
  },
  {
    type: "morning",
    title: "سيد الاستغفار",
    text: "اللهم أنت ربي لا إله إلا أنت، خلقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت.",
    repeat: "مرة واحدة",
  },
  {
    type: "evening",
    title: "المعوذات",
    text: "قل هو الله أحد، قل أعوذ برب الفلق، قل أعوذ برب الناس.",
    repeat: "ثلاث مرات",
  },
  {
    type: "after-prayer",
    title: "بعد الصلاة",
    text: "أستغفر الله، أستغفر الله، أستغفر الله، اللهم أنت السلام ومنك السلام تباركت يا ذا الجلال والإكرام.",
    repeat: "بعد كل صلاة",
  },
  {
    type: "after-prayer",
    title: "الدعاء بعد السلام",
    text: "اللهم أعني على ذكرك وشكرك وحسن عبادتك.",
    repeat: "بعد كل صلاة",
  },
  {
    type: "after-prayer",
    title: "الثناء على الله",
    text: "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير.",
    repeat: "بعد كل صلاة",
  },
  {
    type: "after-prayer",
    title: "لا مانع لما أعطيت",
    text: "اللهم لا مانع لما أعطيت، ولا معطي لما منعت، ولا ينفع ذا الجد منك الجد.",
    repeat: "بعد كل صلاة",
  },
  {
    type: "after-prayer",
    title: "آية الكرسي",
    text: "الله لا إله إلا هو الحي القيوم، لا تأخذه سنة ولا نوم.",
    repeat: "بعد كل صلاة",
  },
  {
    type: "after-prayer",
    title: "الإخلاص والمعوذتان",
    text: "قل هو الله أحد، قل أعوذ برب الفلق، قل أعوذ برب الناس.",
    repeat: "بعد كل صلاة",
  },
  {
    type: "after-prayer",
    title: "تسبيح ما بعد الصلاة",
    text: "سبحان الله 33، الحمد لله 33، الله أكبر 34.",
    repeat: "بعد الفريضة",
  },
  {
    type: "after-prayer",
    title: "تمام المئة",
    text: "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير.",
    repeat: "مرة بعد التسبيح",
  },
  {
    type: "morning",
    title: "الحفظ",
    text: "بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء وهو السميع العليم.",
    repeat: "ثلاث مرات",
  },
  {
    type: "evening",
    title: "الرضا بالله",
    text: "رضيت بالله ربا، وبالإسلام دينا، وبمحمد صلى الله عليه وسلم نبيا.",
    repeat: "ثلاث مرات",
  },
  {
    type: "evening",
    title: "خاتمة المساء",
    text: "اللهم بك أمسينا وبك أصبحنا وبك نحيا وبك نموت وإليك المصير.",
    repeat: "مرة واحدة",
  },
  {
    type: "morning",
    title: "خاتمة الصباح",
    text: "اللهم بك أصبحنا وبك أمسينا وبك نحيا وبك نموت وإليك النشور.",
    repeat: "مرة واحدة",
  },
];

const state = {
  count: Number(localStorage.getItem("tasbeeh-count")) || 0,
  target: Number(localStorage.getItem("tasbeeh-target")) || 33,
  dhikrIndex: Number(localStorage.getItem("tasbeeh-dhikr")) || 0,
  sound: localStorage.getItem("tasbeeh-sound") === "true",
  filter: "all",
  done: JSON.parse(localStorage.getItem("tasbeeh-done") || "{}"),
};

const countValue = document.querySelector("#count-value");
const progressValue = document.querySelector("#progress-value");
const progressBar = document.querySelector("#progress-bar");
const dhikrCategory = document.querySelector("#dhikr-category");
const dhikrText = document.querySelector("#dhikr-text");
const dhikrNote = document.querySelector("#dhikr-note");
const countButton = document.querySelector("#count-button");
const resetButton = document.querySelector("#reset-button");
const nextButton = document.querySelector("#next-button");
const soundToggle = document.querySelector("#sound-toggle");
const targetChoices = document.querySelectorAll(".target-choice");
const tabs = document.querySelectorAll(".tab");
const azkarList = document.querySelector("#azkar-list");

let audioContext;

function saveState() {
  localStorage.setItem("tasbeeh-count", String(state.count));
  localStorage.setItem("tasbeeh-target", String(state.target));
  localStorage.setItem("tasbeeh-dhikr", String(state.dhikrIndex));
  localStorage.setItem("tasbeeh-sound", String(state.sound));
  localStorage.setItem("tasbeeh-done", JSON.stringify(state.done));
}

function playTick() {
  if (!state.sound) return;

  audioContext ||= new AudioContext();
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = "sine";
  oscillator.frequency.value = 620;
  gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.08, audioContext.currentTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.08);
  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.09);
}

function updateCounter() {
  const progress = Math.min(100, Math.round((state.count / state.target) * 100));
  const currentDhikr = dhikrItems[state.dhikrIndex] || dhikrItems[0];

  countValue.textContent = state.count.toLocaleString("ar");
  progressValue.textContent = progress.toLocaleString("ar");
  progressBar.style.width = `${progress}%`;
  dhikrCategory.textContent = currentDhikr.category;
  dhikrText.textContent = currentDhikr.text;
  dhikrNote.textContent =
    state.count >= state.target ? "أتممت الهدف. يمكنك التصفير أو اختيار ذكر آخر." : currentDhikr.note;

  targetChoices.forEach((choice) => {
    choice.classList.toggle("is-active", Number(choice.dataset.target) === state.target);
  });

  soundToggle.classList.toggle("is-active", state.sound);
  soundToggle.setAttribute("aria-label", state.sound ? "إيقاف الصوت" : "تشغيل الصوت");
}

function renderAzkar() {
  const filteredAzkar = azkar.filter((item) => state.filter === "all" || item.type === state.filter);
  azkarList.innerHTML = "";

  filteredAzkar.forEach((item, index) => {
    const key = `${item.type}-${item.title}`;
    const card = document.createElement("article");
    card.className = "azkar-card";
    card.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <div class="azkar-meta">
        <span>${item.repeat}</span>
        <button type="button" class="${state.done[key] ? "is-done" : ""}" data-key="${key}">
          ${state.done[key] ? "تم" : "تحديد"}
        </button>
      </div>
    `;

    const button = card.querySelector("button");
    button.addEventListener("click", () => {
      state.done[key] = !state.done[key];
      saveState();
      renderAzkar();
    });

    card.style.animationDelay = `${index * 35}ms`;
    azkarList.append(card);
  });
}

countButton.addEventListener("click", () => {
  state.count += 1;
  if (state.count % state.target === 0 && navigator.vibrate) {
    navigator.vibrate(90);
  }
  playTick();
  saveState();
  updateCounter();
});

resetButton.addEventListener("click", () => {
  state.count = 0;
  saveState();
  updateCounter();
});

nextButton.addEventListener("click", () => {
  state.dhikrIndex = (state.dhikrIndex + 1) % dhikrItems.length;
  state.count = 0;
  saveState();
  updateCounter();
});

soundToggle.addEventListener("click", () => {
  state.sound = !state.sound;
  saveState();
  updateCounter();
});

targetChoices.forEach((choice) => {
  choice.addEventListener("click", () => {
    state.target = Number(choice.dataset.target);
    state.count = 0;
    saveState();
    updateCounter();
  });
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    state.filter = tab.dataset.filter;
    tabs.forEach((item) => item.classList.toggle("is-active", item === tab));
    renderAzkar();
  });
});

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    event.preventDefault();
    countButton.click();
  }
});

updateCounter();
renderAzkar();

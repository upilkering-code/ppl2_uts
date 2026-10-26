(() => {
  "use strict";

  /*
   * CARA MENGISI LAMPIRAN ANALISIS:
   * Tempel tautan Google Drive publik atau path file lokal pada properti url.
   * Tambah objek baru di dalam items jika satu siklus memiliki lebih dari satu file.
   */
  const analysisCycles = [
    {
      id: "1",
      number: "01",
      title: "Analisis Rancangan Pembelajaran",
      items: [
        { title: "analisis produk rancangan/perencanaan pembelajaran untuk praktik mengajar mandiri", description: "", url: "https://drive.google.com/file/d/1Wqznw0JU7wMtHwi1eHbpT3iwqO4AUPnt/view?usp=drive_link" }
      ]
    },
    {
      id: "2",
      number: "02",
      title: "Analisis Materi Pembelajaran",
      items: [
        { title: "analisis materi pembelajaran yang sudah disusun dan diterapkan praktik mengajar mandiri", description: "", url: "https://drive.google.com/file/d/1i4k7jcaAyCyE8Mlq3jCKPJQ9Byht1gaK/view?usp=drive_link" }
      ]
    },
    {
      id: "3",
      number: "03",
      title: "Analisis Media Pembelajaran",
      items: [
        { title: "analisis media pembelajaran yang dipergunakan dalam praktik mengajar mandiri", description: "", url: "https://drive.google.com/file/d/1gKGAceUP_DWl1fQpg6DLwDZm_65CtdCB/view?usp=drive_link" }
      ]
    },
        {
      id: "4",
      number: "04",
      title: "Analisis Video",
      items: [
        { title: "analisis video pelaksanaan praktik mengajar mandiri", description: "", url: "https://drive.google.com/file/d/1UULDSnRwSnFOoO0S4hGeXJiRXCdg1_6V/view?usp=drive_link" }
      ]
    },
        {
      id: "5",
      number: "05",
      title: "Analisis kegiatan nonmengajar",
      items: [
        { title: "analisis kegiatan nonmengajar", description: "", url: "https://drive.google.com/file/d/1UKZXLcLZrpuL95fgZB_yW07UDkVaulyB/view?usp=drive_link" }
      ]
    },
    {
      id: "6",
      number: "06",
      title: "Instrumen penilaian",
      items: [
        { title: "Instrumen penilaian yang dirancang berserta analisisnya.", description: "", url: "https://drive.google.com/file/d/1yx6_st47Sky8R6LzHde2UmzL4qAZjSG9/view?usp=drive_link" }
      ]
    }
  ];

  const selector = document.querySelector("#analysisSelector");
  const content = document.querySelector("#analysisContent");
  if (!selector || !content) return;

  const previewUrl = value => {
    if (!value) return "";
    const url = value.trim();
    const patterns = [
      /drive\.google\.com\/file\/d\/([^/?#]+)/i,
      /drive\.google\.com\/open\?id=([^&#]+)/i,
      /drive\.google\.com\/uc\?.*id=([^&#]+)/i
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return "https://drive.google.com/file/d/" + match[1] + "/preview";
    }
    return url;
  };

  const fileMarkup = item => {
    const source = previewUrl(item.url);
    const preview = source
      ? '<div class="analysis-file-preview"><iframe class="analysis-lazy-frame" data-src="' + source + '" title="Pratinjau ' + item.title + '" loading="lazy"></iframe></div>'
      : '<div class="analysis-file-placeholder"><span>PDF</span><small>FILE BELUM DILAMPIRKAN</small></div>';
    const action = source
      ? '<a href="' + item.url + '" target="_blank" rel="noopener">Buka file</a>'
      : '<span>Tambahkan tautan pada assets/js/analisis.js</span>';

    return '<article class="analysis-file-card">' + preview + '<p><strong>' + item.title + '</strong> — ' + item.description + ' ' + action + '</p></article>';
  };

  const cycleMarkup = cycle =>
    '<article class="analysis-vault" id="analisis-' + cycle.id + '" data-analysis-section="' + cycle.id + '" data-reveal>' +
      '<header class="vault-heading"><div class="course-code">S' + cycle.id + '</div><div><span class="eyebrow">LAMPIRAN ANALISIS</span><h2>' + cycle.title + '</h2></div></header>' +
      '<div class="analysis-file-grid">' + cycle.items.map(fileMarkup).join("") + '</div>' +
    '</article>';

  const setActive = id => {
    selector.querySelectorAll(".cycle-query-card").forEach(button => {
      const active = button.dataset.analysis === id;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    const url = new URL(location.href);
    url.searchParams.set("siklus", id);
    history.replaceState({}, "", url);
  };

  selector.innerHTML = analysisCycles.map(cycle =>
    '<button class="cycle-query-card" type="button" data-analysis="' + cycle.id + '" aria-pressed="false"><span>' + cycle.number + '</span><strong>Siklus ' + cycle.id + '</strong><small>Lampiran analisis</small></button>'
  ).join("");
  content.innerHTML = analysisCycles.map(cycleMarkup).join("");

  const revealObserver = "IntersectionObserver" in window
    ? new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        });
      }, { rootMargin: "0px 0px -8%", threshold: 0.08 })
    : null;
  content.querySelectorAll("[data-reveal]").forEach(section => {
    if (revealObserver) revealObserver.observe(section);
    else section.classList.add("revealed");
  });

  const loadFrame = frame => {
    frame.src = frame.dataset.src;
    frame.removeAttribute("data-src");
  };
  const frames = content.querySelectorAll(".analysis-lazy-frame[data-src]");
  if ("IntersectionObserver" in window) {
    const frameObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        loadFrame(entry.target);
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "350px 0px" });
    frames.forEach(frame => frameObserver.observe(frame));
  } else {
    frames.forEach(loadFrame);
  }

  const requested = new URLSearchParams(location.search).get("siklus");
  setActive(analysisCycles.some(cycle => cycle.id === requested) ? requested : "1");

  selector.addEventListener("click", event => {
    const button = event.target.closest(".cycle-query-card");
    if (!button) return;
    const id = button.dataset.analysis;
    const target = document.querySelector("#analisis-" + id);
    if (!target) return;
    setActive(id);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  if ("IntersectionObserver" in window) {
    const activeObserver = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.dataset.analysisSection);
    }, { rootMargin: "-20% 0px -55%", threshold: [0.1, 0.35, 0.6] });
    content.querySelectorAll("[data-analysis-section]").forEach(section => activeObserver.observe(section));
  }
})();

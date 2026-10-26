(() => {
  "use strict";

  /*
   * DATA LAMPIRAN
   * Tambah atau hapus kelompok pada array attachmentGroups.
   * Isi url dengan:
   * - Link Google Drive publik
   * - Link YouTube
   * - Path lokal, contoh: assets/files/sertifikat.pdf
   * type: "pdf", "video", "image", atau "website"
   */
  const attachmentGroups = [
    {
      id: "penilaian",
      number: "01",
      title: "Dokumen Penilaian",
      subtitle: "Bukti evaluasi perangkat dan praktik pembelajaran",
      items: [
        {
          icon: "PP",
          title: "Lembar Penilaian Perangkat Pembelajaran",
          description: "Penilaian kualitas perencanaan dan perangkat pembelajaran.",
          type: "pdf",
          url: "https://drive.google.com/file/d/1vQ54F3w-vI2MkqqtafrI4a13UtkG1NEm/view?usp=drive_link"
        },
        {
          icon: "PM",
          title: "Lembar Penilaian Praktik Mengajar",
          description: "Penilaian observasi pelaksanaan pembelajaran di kelas.",
          type: "pdf",
          url: "https://drive.google.com/file/d/1uP3qNsiZDl8WNNW5v7MG0tICuwwOgwOz/view?usp=drive_link"
        }
      ]
    },
    {
      id: "laporan",
      number: "03",
      title: "Dokumentasi",
      subtitle: "",
      items: [
        {
          icon: "LP",
          title: "Dokumentasi 1",
          description: "",
          type: "pdf",
          url: "https://drive.google.com/file/d/1nxpuNm2P_jiIoMa4SZ8rWkIrj_saqEtr/view?usp=drive_link"
        },
                {
          icon: "LP",
          title: "Dokumentasi 2",
          description: "",
          type: "pdf",
          url: "https://drive.google.com/file/d/1n4dUOimve9Q5pCbdjrefDmYUtdW3G4ac/view?usp=drive_link"
        },
                {
          icon: "LP",
          title: "Dokumentasi 3",
          description: "",
          type: "pdf",
          url: "https://drive.google.com/file/d/1sYVrCwZuZ3SfABPhvDCTyr0VVcVoEj4E/view?usp=sharing"
        },
        {
          icon: "MD",
          title: "Dokumentasi 4",
          description: "Slide, video, atau media pendukung kegiatan profesional.",
          type: "video",
          url: "https://drive.google.com/file/d/1J9n-VCOPRlwOfthsZinckG0uJsziuI8P/view?usp=drive_link"
        }
      ]
    }
  ];

  const selector = document.querySelector("#attachmentSelector");
  const content = document.querySelector("#attachmentContent");
  if (!selector || !content) return;

  const getPreviewUrl = value => {
    if (!value) return "";
    const url = value.trim();

    const drivePatterns = [
      /drive\.google\.com\/file\/d\/([^/?#]+)/i,
      /drive\.google\.com\/open\?id=([^&#]+)/i,
      /drive\.google\.com\/uc\?.*id=([^&#]+)/i
    ];

    for (const pattern of drivePatterns) {
      const match = url.match(pattern);
      if (match) return "https://drive.google.com/file/d/" + match[1] + "/preview";
    }

    const youtubeMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/i);
    if (youtubeMatch) return "https://www.youtube.com/embed/" + youtubeMatch[1];

    return url;
  };

  const itemMarkup = item => {
    const previewUrl = getPreviewUrl(item.url);
    let preview;

    if (!previewUrl) {
      preview = '<div class="attachment-source-placeholder" aria-hidden="true"><span>' +
        item.icon + '</span><small>SUMBER BELUM DILAMPIRKAN</small></div>';
    } else if (item.type === "image") {
      preview = '<div class="attachment-source-preview"><img class="attachment-lazy-image" data-src="' +
        previewUrl + '" alt="Pratinjau ' + item.title + '"></div>';
    } else {
      preview = '<div class="attachment-source-preview"><iframe class="attachment-lazy-frame" data-src="' +
        previewUrl + '" title="Pratinjau ' + item.title +
        '" loading="lazy" allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div>';
    }

    const action = previewUrl
      ? '<a href="' + item.url + '" target="_blank" rel="noopener">Buka file</a>'
      : '<span>File belum dilampirkan</span>';

    return '<article class="attachment-source-card">' + preview +
      '<p class="attachment-file-caption"><strong>' + item.title + '</strong> — ' +
      item.description + ' ' + action + '</p></article>';
  };

  const groupMarkup = group =>
    '<article class="attachment-vault" id="lampiran-' + group.id +
    '" data-attachment-section="' + group.id + '" data-reveal>' +
    '<header class="vault-heading"><div class="course-code">' + group.number +
    '</div><div><span class="eyebrow">KELOMPOK LAMPIRAN</span><h2>' + group.title +
    '</h2><p>' + group.subtitle + '</p></div></header>' +
    '<div class="attachment-source-grid">' + group.items.map(itemMarkup).join("") +
    '</div></article>';

  const setActiveGroup = groupId => {
    selector.querySelectorAll(".attachment-query-card").forEach(button => {
      const active = button.dataset.attachment === groupId;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    const url = new URL(location.href);
    url.searchParams.set("bagian", groupId);
    history.replaceState({}, "", url);
  };

  const activateLazySources = () => {
    const sources = document.querySelectorAll(
      ".attachment-lazy-frame[data-src], .attachment-lazy-image[data-src]"
    );

    const load = element => {
      element.src = element.dataset.src;
      element.removeAttribute("data-src");
    };

    if (!("IntersectionObserver" in window)) {
      sources.forEach(load);
      return;
    }

    const observer = new IntersectionObserver((entries, sourceObserver) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        load(entry.target);
        sourceObserver.unobserve(entry.target);
      });
    }, { rootMargin: "350px 0px" });

    sources.forEach(source => observer.observe(source));
  };

  const activateReveal = () => {
    const sections = document.querySelectorAll("#attachmentContent [data-reveal]");

    if (!("IntersectionObserver" in window)) {
      sections.forEach(section => section.classList.add("revealed"));
      return;
    }

    const observer = new IntersectionObserver((entries, revealObserver) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("revealed");
        revealObserver.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8%", threshold: 0.08 });

    sections.forEach(section => observer.observe(section));
  };

  selector.innerHTML = attachmentGroups.map(group =>
    '<button class="attachment-query-card" type="button" data-attachment="' + group.id +
    '" aria-pressed="false"><span>' + group.number + '</span><strong>' + group.title +
    '</strong><small>' + group.items.length + ' sumber</small></button>'
  ).join("");

  content.innerHTML = attachmentGroups.map(groupMarkup).join("");
  activateReveal();
  activateLazySources();

  const requested = new URLSearchParams(location.search).get("bagian");
  const initial = attachmentGroups.some(group => group.id === requested)
    ? requested
    : attachmentGroups[0].id;
  setActiveGroup(initial);

  selector.addEventListener("click", event => {
    const button = event.target.closest(".attachment-query-card");
    if (!button) return;
    const groupId = button.dataset.attachment;
    const target = document.querySelector("#lampiran-" + groupId);
    if (!target) return;
    setActiveGroup(groupId);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  if ("IntersectionObserver" in window) {
    const sections = document.querySelectorAll("[data-attachment-section]");
    const observer = new IntersectionObserver(entries => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible) setActiveGroup(visible.target.dataset.attachmentSection);
    }, { rootMargin: "-20% 0px -55%", threshold: [0.1, 0.35, 0.6] });

    sections.forEach(section => observer.observe(section));
  }
})();


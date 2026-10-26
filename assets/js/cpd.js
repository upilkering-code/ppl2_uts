(() => {
  "use strict";

  /*
   * DATA AKSI CPD
   * Isi url dengan tautan publik Google Drive, YouTube, atau dokumen PDF.
   * Tautan Google Drive akan otomatis diubah menjadi tampilan preview.
   */
  const actions = [
    {
      id: "garut",
      number: "01",
      code: "AI",
      title: "Pengabdian Pemanfaatan Teknologi AI",
      location: "SMKS Plus Qurrota A’yun Garut",
      subtitle: "Literasi teknologi yang kritis, etis, dan bertanggung jawab",
      sdgs: ["SDG 4", "SDG 9", "SDG 17"],
      context: "Kegiatan pengabdian memperkenalkan pemanfaatan AI untuk mendukung pembelajaran sekaligus membuka ruang diskusi mengenai batas dan tanggung jawab penggunaannya.",
      role: "Berpartisipasi dalam edukasi pemanfaatan AI, penyampaian materi, diskusi, pendampingan praktik, dan refleksi bersama peserta.",
      contribution: "Kegiatan memperluas wawasan peserta tentang peluang AI serta menekankan verifikasi informasi, privasi data, bias, etika akademik, dan tanggung jawab manusia.",
      reflection: "Keberhasilan pengabdian tidak cukup dilihat dari terlaksananya kegiatan. Dampak perlu dibuktikan melalui perubahan pengetahuan, sikap, produk, dan praktik peserta.",
      followUp: "Menambahkan asesmen awal–akhir, mengumpulkan contoh produk peserta, menyediakan panduan singkat, dan merancang tindak lanjut setelah pelatihan.",
      artifacts: [
        { icon: "ST", title: "Sertifikat", note: "Sertifikat peserta kegiatan P2M.", url: "https://drive.google.com/file/d/16RnCVT-M1JwaeYY6KTrF-Sq60txPFr01/view?usp=drive_link", kind: "document" },
        { icon: "MT", title: "Materi Literasi AI", note: "Slide, panduan, atau bahan edukasi yang digunakan.", url: "https://drive.google.com/file/d/1uPeQhb4t_uK7ODD37Lp_QXnciiO9Kr5h/view?usp=drive_link", kind: "document" },
        { icon: "DK", title: "Dokumentasi Kegiatan", note: "Foto kegiatan.", url: "https://drive.google.com/file/d/1AJiXGlBxex6hlF80uy9_qdaBRIK0oYPR/view?usp=drive_link", kind: "document" },
        { icon: "UB", title: "Laporan Kegiatan Pengabdian Garut", note: "Laporan Kegiatan.", url: "https://drive.google.com/file/d/1H9F6Zcz2B5RGoT6pvOh0RsS687Ony6MT/view?usp=drive_link", kind: "document" }
      ]
    },
    {
      id: "simaedu",
      number: "02",
      code: "SE",
      title: "Pengembangan SIMAEDU",
      location: "SMPN 1 Cimahi",
      subtitle: "Sistem pembelajaran adaptif untuk mata pelajaran Informatika",
      sdgs: ["SDG 4", "SDG 9", "SDG 10", "SDG 17"],
      context: "SIMAEDU dikembangkan dalam Projek Kepemimpinan sebagai alternatif pembelajaran yang memetakan kebutuhan melalui pre-test, memberi latihan adaptif, dan merekam progres hingga post-test.",
      role: "Berkontribusi bersama tim dalam analisis kebutuhan, pembagian peran, komunikasi dengan sekolah, desain konten, pengembangan sistem, uji coba, dan perbaikan.",
      contribution: "Teknologi diarahkan menjadi solusi pedagogis yang memberi penguatan dasar kepada murid yang memerlukan bantuan dan tantangan lanjutan kepada murid yang telah menguasai materi.",
      reflection: "Tersedianya sistem belum otomatis membuktikan dampak. Efektivitas SIMAEDU perlu dilihat dari ketuntasan, keterlibatan, kemudahan penggunaan, dan kesenjangan capaian.",
      followUp: "Menyempurnakan materi adaptif, memperjelas indikator progres, mengumpulkan data awal–akhir, menjaga privasi data murid, dan menindaklanjuti umpan balik sekolah.",
      artifacts: [
        { icon: "WB", title: "Tampilan SIMAEDU", note: "Tangkapan layar fitur utama.", url: "https://drive.google.com/file/d/1dyvRk-TzgogtDsyQkAkAl1-m4uia7atd/view?usp=drive_link", kind: "website" },
        { icon: "LP", title: "Proposal dan Laporan", note: "Dokumen perencanaan, pembagian peran, proses, dan hasil projek.", url: "https://drive.google.com/file/d/1fu8imVyUY6LJE9YEkCNkizSUQ0S76fhc/view?usp=drive_link", kind: "document" },
        { icon: "UJ", title: "Instrumen Uji Coba", note: "Instrumen, hasil pengujian, dan umpan balik pengguna.", url: "https://drive.google.com/file/d/1ExTDd4DFOiw-4yrKT7hbc8xMrQJmmKCJ/view?usp=sharing", kind: "document" },
        { icon: "DK", title: "Dokumentasi Projek", note: "Dokumentasi pelaksanaan.", url: "https://drive.google.com/file/d/1E1bKK51IHtgu0apbqwYPOauvfp8aTwTx/view?usp=sharing", kind: "media" }
      ]
    },
    {
      id: "kolaboratif",
      number: "03",
      code: "BK",
      title: "Pembelajaran Kolaboratif Berpikir Komputasional",
      location: "Praktik Pembelajaran Informatika",
      subtitle: "Permainan sistem bilangan biner dan desimal",
      sdgs: ["SDG 4", "SDG 10"],
      context: "Diskusi kelompok dipadukan dengan permainan untuk memecahkan masalah sistem bilangan. Setiap anggota tidak hanya menyelesaikan tugas, tetapi juga bertanggung jawab menjelaskan strategi kelompok.",
      role: "Merancang masalah, aturan permainan, pembagian peran, diskusi, presentasi acak anggota, dan asesmen individual untuk menjaga tanggung jawab setiap peserta.",
      contribution: "Aktivitas mendorong berpikir komputasional, komunikasi, tutor sebaya, partisipasi, serta kesempatan belajar yang lebih merata.",
      reflection: "Suasana permainan dapat membuat kelas kurang kondusif apabila tahapan dan peran belum jelas. Keterlibatan kelompok juga perlu diperiksa melalui bukti individual.",
      followUp: "Memperjelas peran, batas waktu, aturan volume suara, indikator perpindahan tahap, rubrik partisipasi, dan asesmen individual.",
      artifacts: [
        { icon: "MA", title: "Modul Ajar", note: "Rancangan pembelajaran dan urutan aktivitas.", url: "https://drive.google.com/file/d/1boiuwQIQm25p066YxODcEWqMNchrHS0v/view?usp=drive_link", kind: "document" },
        { icon: "LK", title: "LKPD Kelompok", note: "Lembar Kerja tugas kelompok.", url: "https://drive.google.com/file/d/1W06lc-rwWV09ewB9vhthXmyQJbx3rAFh/view?usp=drive_link", kind: "document" },
        { icon: "HS", title: "Hasil Kerja", note: "Bukti proses.", url: "https://drive.google.com/file/d/1J9n-VCOPRlwOfthsZinckG0uJsziuI8P/view?usp=drive_link", kind: "document" },
        { icon: "RF", title: "Dokumentasi dan Refleksi", note: "Foto kegiatan", url: "https://drive.google.com/file/d/1sYVrCwZuZ3SfABPhvDCTyr0VVcVoEj4E/view?usp=sharing", kind: "media" }
      ]
    }
  ];

  const selector = document.querySelector("#cpdActionSelector");
  const detail = document.querySelector("#cpdActionDetail");
  if (!selector || !detail) return;

  const getPreviewUrl = value => {
    if (!/^https?:\/\//i.test(value || "")) return "";
    const url = value.trim();
    const driveMatch = url.match(/drive\.google\.com\/file\/d\/([^/?#]+)/i);
    if (driveMatch) return "https://drive.google.com/file/d/" + driveMatch[1] + "/preview";
    const youtubeMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/i);
    if (youtubeMatch) return "https://www.youtube.com/embed/" + youtubeMatch[1];
    return url;
  };

  const artifactMarkup = artifact => {
    const previewUrl = getPreviewUrl(artifact.url);
    const preview = previewUrl
      ? '<div class="cpd-proof-preview"><iframe class="cpd-lazy-frame" data-src="' + previewUrl + '" title="Pratinjau ' + artifact.title + '" loading="lazy" allowfullscreen></iframe></div>'
      : '<div class="cpd-proof-placeholder" aria-hidden="true"><span>' + artifact.icon + '</span><small>TAUTAN BELUM DILAMPIRKAN</small></div>';

    return '<article class="cpd-proof-card">' + preview +
      '<div><span class="eyebrow">' + artifact.kind.toUpperCase() + '</span>' +
      '<h3>' + artifact.title + '</h3><p>' + artifact.note + '</p></div></article>';
  };

  const activateLazyFrames = () => {
    const frames = detail.querySelectorAll(".cpd-lazy-frame[data-src]");
    if (!("IntersectionObserver" in window)) {
      frames.forEach(frame => {
        frame.src = frame.dataset.src;
        frame.removeAttribute("data-src");
      });
      return;
    }

    const observer = new IntersectionObserver((entries, frameObserver) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.src = entry.target.dataset.src;
        entry.target.removeAttribute("data-src");
        frameObserver.unobserve(entry.target);
      });
    }, { rootMargin: "300px 0px" });

    frames.forEach(frame => observer.observe(frame));
  };

  const render = actionId => {
    const action = actions.find(item => item.id === actionId) || actions[0];

    detail.innerHTML =
      '<article class="cpd-action-panel soft-query-enter">' +
      '<header class="cpd-action-heading"><div class="course-code">' + action.code + '</div><div>' +
      '<span class="eyebrow">AKSI ' + action.number + ' · ' + action.location.toUpperCase() + '</span>' +
      '<h2>' + action.title + '</h2><p>' + action.subtitle + '</p></div></header>' +
      '<div class="sdg-badges">' + action.sdgs.map(sdg => '<span>' + sdg + '</span>').join("") + '</div>' +
      '<div class="cpd-story-grid">' +
      '<section><span class="eyebrow">KONTEKS</span><p>' + action.context + '</p></section>' +
      '<section><span class="eyebrow">PERAN SAYA</span><p>' + action.role + '</p></section>' +
      '<section><span class="eyebrow">KONTRIBUSI & DAMPAK</span><p>' + action.contribution + '</p></section>' +
      '<section><span class="eyebrow">REFLEKSI</span><p>' + action.reflection + '</p></section>' +
      '<section class="cpd-follow-up"><span>RENCANA TINDAK LANJUT</span><p>' + action.followUp + '</p></section>' +
      '</div><div class="resource-section-heading"><span class="eyebrow">BUKTI PENDUKUNG</span>' +
      '<h3>Artefak ' + action.title + '</h3><p></p></div>' +
      '<div class="cpd-proof-grid">' + action.artifacts.map(artifactMarkup).join("") + '</div></article>';

    selector.querySelectorAll(".cpd-action-card").forEach(button => {
      const active = button.dataset.action === action.id;
      button.classList.toggle("active", active);
      button.setAttribute("aria-selected", String(active));
    });

    const url = new URL(location.href);
    url.searchParams.set("aksi", action.id);
    history.replaceState({}, "", url);
    activateLazyFrames();
  };

  const requested = new URLSearchParams(location.search).get("aksi");
  render(actions.some(action => action.id === requested) ? requested : actions[0].id);

  selector.addEventListener("click", event => {
    const button = event.target.closest(".cpd-action-card");
    if (!button || button.classList.contains("active")) return;
    render(button.dataset.action);
    requestAnimationFrame(() => {
      detail.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
})();

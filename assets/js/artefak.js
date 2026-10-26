(() => {
  "use strict";

  /*
   * CARA MENGISI:
   * Tempel tautan publik pada properti url. Biarkan "" jika belum tersedia.
   * Contoh: url: "https://drive.google.com/file/d/ID_FILE/preview"
   * Untuk YouTube, gunakan format: https://www.youtube.com/embed/ID_VIDEO
   */
  const cycles = {
    1: {
      title: "Siklus 1",
      subtitle: "",
      context: "Pembelajaran Informatika kelas VIII di SMP Negeri 1 Cimahi membahas pengenalan sistem bilangan desimal dan biner serta konversi desimal ke biner. Murid belajar dalam 10 kelompok heterogen beranggotakan empat orang menggunakan Cooperative Learning tipe Numbered Heads Together (NHT). Kegiatan dilakukan secara unplugged dengan kartu digit, kartu basis, dan papan nilai tempat. Permasalahan yang menjadi perhatian ialah partisipasi kelompok yang belum merata. Murid yang lebih cepat memahami materi cenderung menentukan jawaban, sedangkan sebagian anggota masih mengikuti atau menyalin tanpa memahami seluruh proses.",
      objectives: "Membangun tanggung jawab individual agar setiap anggota ikut berpikir, berdiskusi, dan siap menjelaskan hasil kelompok. Pemberian nomor kepala serta pemanggilan secara acak digunakan untuk mendorong kelompok saling membantu memahami materi. Dalam pembelajaran, murid diarahkan mengenali perbedaan basis dan digit, menentukan nilai tempat, serta menjelaskan alasan penulisan digit 0 dan 1 dalam konversi desimal ke biner. Keberhasilan kelompok dilihat dari ketepatan jawaban dan kesiapan anggotanya menjelaskan proses.",
      reflection: "Media konkret membantu murid memahami hubungan antara nilai tempat dan digit biner. Diskusi serta pemanggilan nomor mulai mendorong kesiapan anggota untuk menjawab. Suasana belajar juga memberi ruang bagi murid untuk mencoba dan memperbaiki kesalahan. Namun, dominasi anggota yang lebih cepat masih terlihat. Beberapa murid dapat mengikuti jawaban kelompok, tetapi belum mampu mengulang proses secara mandiri. Kesulitan terutama muncul saat menentukan sisa bilangan dan menuliskan digit 0 pada posisi yang tidak digunakan. Pendampingan membutuhkan waktu lebih lama sehingga refleksi penutup belum optimal.",
      followUp: "Saya akan memperjelas kontribusi setiap anggota melalui pembagian peran dan giliran penggunaan media. Sebelum pemanggilan nomor, kelompok perlu memastikan setiap anggota mampu menjelaskan setidaknya satu langkah penyelesaian. Instruksi akan disederhanakan menggunakan kartu langkah dan disertai cek pemahaman di tengah kegiatan. Bantuan diberikan sesuai jenis kesalahan, sedangkan exit ticket tetap digunakan untuk memeriksa pemahaman individual. Waktu penutup juga akan dijaga agar simpulan dan refleksi dapat terlaksana.",
      focus: "Saya akan memperjelas kontribusi setiap anggota melalui pembagian peran dan giliran penggunaan media. Sebelum pemanggilan nomor, kelompok perlu memastikan setiap anggota mampu menjelaskan setidaknya satu langkah penyelesaian. Instruksi akan disederhanakan menggunakan kartu langkah dan disertai cek pemahaman di tengah kegiatan. Bantuan diberikan sesuai jenis kesalahan, sedangkan exit ticket tetap digunakan untuk memeriksa pemahaman individual. Waktu penutup juga akan dijaga agar simpulan dan refleksi dapat terlaksana.",
      items: [
        { icon: "MA", title: "Modul Ajar", note: "Modul ajar yang digunakan pada pelaksanaan Siklus 1.", url: "https://drive.google.com/file/d/1EKQllp2JDIo47H34G1gXjl6TBs-j9wKd/view?usp=drive_link", kind: "document" },
        { icon: "LK", title: "LKPD", note: "Lembar kerja dan kartu pembagian peran kelompok.", url: "https://drive.google.com/drive/u/1/folders/1Z3c-vhyfdEZnWYHBDroiPAfa7xqmMNT", kind: "document" }
      ]
    }
  };

  const selector = document.querySelector("#cycleSelector");
  const content = document.querySelector("#cycleContent");
  if (!selector || !content) return;

  const getPreviewUrl = value => {
    if (!/^https?:\/\//i.test(value || "")) return "";

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

    return url;
  };

  const itemMarkup = item => {
    const url = getPreviewUrl(item.url);
    const preview = url
      ? '<div class="resource-preview"><iframe class="lazy-resource-frame" data-src="' + url + '" title="Pratinjau ' + item.title + '" loading="lazy" allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div>'
      : '<div class="resource-placeholder" aria-hidden="true"><span>' + item.icon + '</span><p>Pratinjau akan muncul di sini</p></div>';
    const status = url ? "" : '<div class="resource-action"><span class="resource-empty">TAUTAN BELUM DILAMPIRKAN</span></div>';
    return '<article class="resource-card"><div class="resource-heading"><span class="resource-icon">' + item.icon + '</span><div><span class="eyebrow">' + (item.kind === "video" ? "MEDIA VIDEO" : "DOKUMEN PDF") + '</span><h3>' + item.title + '</h3></div></div>' + preview + '<p class="muted">' + item.note + '</p>' + status + '</article>';
  };

  const cycleMarkup = cycleNumber => {
    const data = cycles[cycleNumber];
    return '<article class="cycle-vault" id="siklus-' + cycleNumber + '" data-cycle-section="' + cycleNumber + '" data-reveal><header class="vault-heading"><div class="course-code">S' + cycleNumber + '</div><div><span class="eyebrow">ARSIP · ' + data.title.toUpperCase() + '</span><h2>' + data.title + '</h2><p>' + data.subtitle + '</p></div></header><div class="cycle-focus"><strong>Fokus tindakan</strong><p>' + data.focus + '</p></div><div class="cycle-story-grid"><section><span class="eyebrow">KONTEKS PEMBELAJARAN</span><p>' + data.context + '</p></section><section><span class="eyebrow">TUJUAN UTAMA</span><p>' + data.objectives + '</p></section><section><span class="eyebrow">REFLEKSI KEGIATAN</span><p>' + data.reflection + '</p></section><section><span class="eyebrow">RENCANA TINDAK LANJ</span><p>' + data.followUp + '</p></section></div><div class="resource-section-heading"><span class="eyebrow">DOKUMEN & MEDIA</span><h3>lampiran ' + data.title + '</h3><p></p></div><div class="resource-grid">' + data.items.map(itemMarkup).join("") + '</div></article>';
  };

  const setActiveCycle = cycleNumber => {
    document.querySelectorAll(".cycle-query-card").forEach(button => {
      const active = button.dataset.cycle === String(cycleNumber);
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    const url = new URL(location.href);
    url.searchParams.set("siklus", cycleNumber);
    history.replaceState({}, "", url);
  };

  const renderAllCycles = () => {
    content.innerHTML = Object.keys(cycles).map(cycleMarkup).join("");
  };

  const loadFrame = frame => {
    if (!frame.dataset.src) return;
    frame.src = frame.dataset.src;
    frame.removeAttribute("data-src");
  };

  const activateLazyFrames = () => {
    const frames = document.querySelectorAll(".lazy-resource-frame[data-src]");
    if (!("IntersectionObserver" in window)) {
      frames.forEach(loadFrame);
      return;
    }
    const frameObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        loadFrame(entry.target);
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "350px 0px" });
    frames.forEach(frame => frameObserver.observe(frame));
  };

  const activateCycleReveal = () => {
    const cycleSections = document.querySelectorAll("#cycleContent [data-reveal]");

    if (!("IntersectionObserver" in window)) {
      cycleSections.forEach(section => section.classList.add("revealed"));
      return;
    }

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8%", threshold: 0.08 });

    cycleSections.forEach(section => revealObserver.observe(section));
  };

  renderAllCycles();
  activateCycleReveal();
  activateLazyFrames();

  const requested = new URLSearchParams(location.search).get("siklus");
  const initialCycle = cycles[requested] ? requested : "1";
  setActiveCycle(initialCycle);

  selector.addEventListener("click", event => {
    const button = event.target.closest(".cycle-query-card");
    if (!button) return;
    const cycleNumber = button.dataset.cycle;
    const target = document.querySelector("#siklus-" + cycleNumber);
    if (!target) return;
    setActiveCycle(cycleNumber);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  if ("IntersectionObserver" in window) {
    const sections = document.querySelectorAll("[data-cycle-section]");
    const sectionObserver = new IntersectionObserver(entries => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveCycle(visible.target.dataset.cycleSection);
    }, { rootMargin: "-20% 0px -55%", threshold: [0.1, 0.35, 0.6] });
    sections.forEach(section => sectionObserver.observe(section));
  }
})();

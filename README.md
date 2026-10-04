# Tugas 1: CV / Biodata Mahasiswa Semantik & Responsif
**Program Studi S1 Sistem Informasi — Fakultas Ilmu Komputer**  
**Universitas Nahdlatul Ulama Al Ghazali (UNUGHA) Cilacap**

---

### Identitas Mahasiswa
- **Nama Lengkap**: Rizqi Ghani Adinata
- **NIM**: 24ep10007
- **Semester**: 5 (Lima)
- **Program Studi**: S1 Sistem Informasi
- **Repositori GitHub**: [https://github.com/ghani24ep10007-spec/cv-online-unugha](https://github.com/ghani24ep10007-spec/cv-online-unugha)
- **Live URL Cloudflare Pages**: `https://cv-online-unugha.pages.dev` (atau custom domain `sahir.my.id`)

---

### Sorotan Profil
- **Fokus Studi**: Pengembangan Web, Basis Data, Analisis Sistem, Junior Data Science
- **Gaya Kerja**: Mobile & Web-First, Rapi, Terstruktur, dan Terdokumentasi
- **Tujuan Karier**: Web Developer / Systems Analyst

---

### Kepatuhan Rubrik Penilaian Tugas (100%)

| Kriteria Penilaian | Bobot | Implementasi pada Halaman |
| :--- | :---: | :--- |
| **Kepatuhan Semantik HTML & Aksesibilitas** | **30%** | Menggunakan elemen semantik lengkap (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<time>`, `<address>`, `<footer>`), hierarki heading terstruktur (`<h1>` hingga `<h4>`), skip-link aksesibilitas keyboard, atribut ARIA, dan rasio kontras warna standar WCAG AA/AAA. |
| **Desain Responsif Mobile-First** | **30%** | Dibuat dengan pendekatan CSS murni *mobile-first*, navigasi drawer sentuh yang lancar di layar smartphone (375px+), layout fluid untuk tablet dan desktop, serta stylesheet khusus cetak (`@media print`) untuk menghasilkan PDF CV rapi. |
| **Kelengkapan Konten Mahasiswa SI** | **20%** | Mencakup biodata resmi, mata kuliah unggulan SI, keahlian teknis (Web, Database MySQL, Python Junior Data Science, Analisis SRS/UML), 4 portofolio projek SI, pengalaman organisasi HIMASI UNUGHA, dan asisten praktikum. |
| **Keberhasilan Deployment Cloudflare Pages** | **20%** | Struktur proyek statis mandiri (`index.html`, `style.css`, `script.js`) yang langsung dapat di-deploy ke Cloudflare Pages tanpa kompilasi rumit, serta terhubung dengan GitHub. |

---

### Panduan Deployment ke Cloudflare Pages

1. **Push ke GitHub**:
   ```bash
   git add .
   git commit -m "feat: complete Tugas 1 CV Mahasiswa Semantik & Responsif"
   git push origin main
   ```
2. **Setup di Cloudflare Dashboard**:
   - Buka [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
   - Pilih repositori `cv-online-unugha`.
   - Pada **Build settings**:
     - *Framework preset*: `None` (Static HTML)
     - *Build command*: (kosongkan)
     - *Build output directory*: `/` (Root directory)
   - Klik **Save and Deploy**.
   - Website akan aktif di `https://<nama-projek>.pages.dev`.

---

© 2026 Rizqi Ghani Adinata — Mahasiswa Sistem Informasi UNUGHA Cilacap.

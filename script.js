/**
 * Script Interaktif CV Online Mahasiswa SI UNUGHA
 * Rizqi Ghani Adinata — NIM 24ep10007
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle via JavaScript (enhancement over CSS checkbox)
  const navToggle = document.getElementById('nav-toggle');
  const navList = document.querySelector('.nav-list');
  const navLinks = document.querySelectorAll('.nav-list a');

  if (navToggle && navList) {
    // Close menu when clicking navigation link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
          navToggle.checked = false;
        }
      });
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navToggle.checked) {
        navToggle.checked = false;
      }
    });
  }

  // 2. Tombol Cetak / Simpan PDF
  const printButtons = document.querySelectorAll('.btn-print-cv');
  printButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.print();
    });
  });

  // 3. Tombol Salin Kontak (Email & No WhatsApp)
  const copyButtons = document.querySelectorAll('[data-copy]');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      const originalText = btn.innerHTML;

      try {
        await navigator.clipboard.writeText(textToCopy);
        btn.innerHTML = '<span class="icon" aria-hidden="true">✓</span> Tersalin!';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.classList.remove('copied');
        }, 2000);
      } catch (err) {
        console.warn('Clipboard write failed, fallbacking...', err);
        // Fallback prompt
        window.prompt('Salin teks berikut:', textToCopy);
      }
    });
  });

  // 4. Filter Kategori Projek Mahasiswa SI
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterBtns.length > 0 && projectCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        // Update active class on buttons
        filterBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');

        // Filter cards
        projectCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter || category.includes(filter)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 5. Salin URL Pengumpulan Praktikum
  const copyUrlBtns = document.querySelectorAll('.btn-copy-input');
  copyUrlBtns.forEach(btn => {
    btn.addEventListener('click', async () => {
      const targetInputId = btn.getAttribute('data-target');
      const targetInput = document.getElementById(targetInputId);
      if (targetInput) {
        targetInput.select();
        try {
          await navigator.clipboard.writeText(targetInput.value);
          const originalText = btn.innerText;
          btn.innerText = 'Tersalin!';
          setTimeout(() => {
            btn.innerText = originalText;
          }, 1800);
        } catch (err) {
          document.execCommand('copy');
        }
      }
    });
  });
});

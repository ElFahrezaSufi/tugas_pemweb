document.addEventListener("DOMContentLoaded", () => {

  // 1. Tombol Back to Top
  const backToTop = document.createElement("button");
  backToTop.textContent = "⬆️ Top";
  backToTop.id = "backToTopBtn";
  backToTop.style.position = "fixed";
  backToTop.style.bottom = "20px";
  backToTop.style.right = "20px";
  backToTop.style.padding = "0.7rem 1rem";
  backToTop.style.border = "none";
  backToTop.style.borderRadius = "8px";
  backToTop.style.background = "#3498db";
  backToTop.style.color = "#fff";
  backToTop.style.fontSize = "1rem";
  backToTop.style.cursor = "pointer";
  backToTop.style.display = "none";
  backToTop.style.boxShadow = "0 4px 6px rgba(0,0,0,0.2)";
  document.body.appendChild(backToTop);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });


  // 2. Efek Scroll Reveal
  const sections = document.querySelectorAll(".section");
  const revealOnScroll = () => {
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        section.classList.add("visible");
      }
    });
  };
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  // 3. Toggle Show/Hide Jadwal
  const scheduleSection = document.querySelector(".section:nth-of-type(2)");
  const scheduleTable = scheduleSection.querySelector(".schedule-table");
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "Tampilkan/Sembunyikan Jadwal";
  toggleBtn.style.marginBottom = "1rem";
  toggleBtn.style.padding = "0.5rem 1rem";
  toggleBtn.style.borderRadius = "5px";
  toggleBtn.style.border = "none";
  toggleBtn.style.cursor = "pointer";
  toggleBtn.style.background = "#2c3e50";
  toggleBtn.style.color = "#fff";
  scheduleSection.insertBefore(toggleBtn, scheduleTable);

  toggleBtn.addEventListener("click", () => {
    if (scheduleTable.style.display === "none") {
      scheduleTable.style.display = "table";
    } else {
      scheduleTable.style.display = "none";
    }
  });


  // 4. Efek Hover Zoom Foto Profil
  const profileImg = document.querySelector(".profile-img");
  if (profileImg) {
    profileImg.style.transition = "transform 0.3s ease";
    profileImg.addEventListener("mouseenter", () => {
      profileImg.style.transform = "scale(1.1)";
    });
    profileImg.addEventListener("mouseleave", () => {
      profileImg.style.transform = "scale(1)";
    });
  }


  // 5. Tanggal & Jam Real-time
  const header = document.querySelector(".header");
  const clock = document.createElement("p");
  clock.style.marginTop = "1rem";
  clock.style.fontSize = "1.1rem";
  clock.style.fontWeight = "bold";
  header.appendChild(clock);

  const updateClock = () => {
    const now = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const dateStr = now.toLocaleDateString("id-ID", options);
    const timeStr = now.toLocaleTimeString("id-ID");
    clock.textContent = `${dateStr} | ${timeStr}`;
  };
  setInterval(updateClock, 1000);
  updateClock();
});

// 6. Typing effect di header
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const typingText = document.createElement("p");
  typingText.id = "typingEffect";
  typingText.style.fontSize = "1.2rem";
  typingText.style.marginTop = "0.5rem";
  header.appendChild(typingText);

  const texts = [
    "Mahasiswa Ilmu Komputer",
    "Pemrograman Web",
    "Website Pribadi",
    "Always Learning Something New"
  ];

  let textIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const type = () => {
    let currentText = texts[textIndex];

    if (!deleting) {
      typingText.textContent = currentText.slice(0, ++charIndex);
      if (charIndex === currentText.length) {
        deleting = true;
        setTimeout(type, 1500);
        return;
      }
    } else {
      typingText.textContent = currentText.slice(0, --charIndex);
      if (charIndex === 0) {
        deleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }
    }
    setTimeout(type, deleting ? 80 : 120);
  };

  type();
});

// 7. Animasi Social Links
document.addEventListener("DOMContentLoaded", () => {
  const socialLinks = document.querySelectorAll(".social-links a");

  socialLinks.forEach(link => {
    link.style.transition = "transform 0.3s ease, color 0.3s ease";

    link.addEventListener("mouseenter", () => {
      link.style.transform = "scale(1.3) rotate(10deg)";
      link.style.color = "#ffeaa7";
    });

    link.addEventListener("mouseleave", () => {
      link.style.transform = "scale(1) rotate(0deg)";
      link.style.color = "white";
    });
  });
});
const burger = document.querySelector(".hi-burger");
      const links = document.querySelector(".hi-links");
      burger?.addEventListener("click", () => {
        const open = links.classList.toggle("show");
        burger.setAttribute("aria-expanded", open ? "true" : "false");
      });

      const bar = document.querySelector(".hi-navbar");
      let lastY = 0;
      window.addEventListener("scroll", () => {
        const y = window.scrollY || 0;
        if (!bar) return;
        if (y > 30 && y > lastY) bar.classList.add("shrink");
        else if (y < 10) bar.classList.remove("shrink");
        lastY = y;
      });
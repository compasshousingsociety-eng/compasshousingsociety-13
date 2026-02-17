
fetch("header.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("site-header").innerHTML = html;

    const page = document.body.dataset.page;

    document.querySelectorAll(".nav-link").forEach(link => {
      if (link.dataset.page === page) {
        link.classList.add("text-primary", "font-semibold");
      }
    });

    const bread = {
      home1: "Home 1",
      home2: "Home 2",
      services: "Services",
      servicesDetails:"Service Details",
      blog: "Blog",
      blogdetails:"Blog Details",
      contact: "Contact",
      about: "About",
      signup: "Sign Up",
      login: "Log In",
      comingsoon:"Coming Soon",
      404:"404 Page"
    };

    document.getElementById("breadcrumbPage").innerText =
      bread[page] || "Page";

    document.getElementById("mobileMenuBtn")
      .addEventListener("click", () => {
        document.getElementById("mobileMenu").classList.toggle("hidden");
      });

    const themeToggle = document.getElementById("themeToggle");
    const themeToggleHost = document.getElementById("themeToggleHost");

    if (themeToggle && themeToggleHost) {
      themeToggleHost.appendChild(themeToggle);
      themeToggle.className =
        "p-2 rounded-md border border-gray-300 dark:border-gray-600 text-secondary dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition";
      themeToggle.removeAttribute("style");
    }
  });

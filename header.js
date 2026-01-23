// Load header.html into #site-header
fetch("header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("site-header").innerHTML = data;

    // After load → activate nav + breadcrumb + mobile menu

    const page = document.body.getAttribute("data-page");

    // Highlight active nav link
    document.querySelectorAll(".nav-link").forEach(link => {
      if (link.dataset.page === page) {
        link.classList.add("text-primary", "font-semibold");
      }
    });

    // Breadcrumb text update
    const bread = {
      home1: "Home 1",
      home2: "Home 2",
      listing: "Listing",
      contact: "Contact",
      about: "About",
      blog: "Blog",
      signup: "Sign Up",
      login: "Log In",
      home1:"Home1",
      listingDetails:"Listing Details",
      blogdetails:"blog details",
      404:"404",
      comingsoon:"Creating Listing"

    };

    if (bread[page]) {
      document.getElementById("breadcrumbPage").innerText = bread[page];
    }

    // Mobile menu toggle
    const btn = document.getElementById("mobileMenuBtn");
    const menu = document.getElementById("mobileMenu");

    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  });

// footer.js — reusable global footer

export function loadFooter(selector = "site-footer") {
  const container = document.getElementById(selector);

  if (!container) {
    console.warn(`Footer container #${selector} not found`);
    return;
  }

  container.innerHTML = `
<footer class="w-full bg-gray-100 dark:bg-gray-900 py-10 border-t border-gray-300 dark:border-gray-700">
  <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">

    <!-- LEFT COLUMN -->
    <div class="space-y-4">
      <div class="flex items-center gap-2">
        <img src="Images/transparent-logo-1.png" class="w-10 h-10" />
        <h3 class="text-2xl font-bold text-secondary dark:text-white">Compass Housing</h3>
      </div>

      <ul class="space-y-3 text-gray-600 dark:text-gray-300 text-sm">
        <li class="flex items-start gap-3">
          <i class="fa-solid fa-location-dot text-primary text-lg"></i>
          <span>3755 St SE Salem, Corner with Sunny Boulevard,<br>37557, Australia</span>
        </li>

        <li class="flex items-center gap-3">
          <i class="fa-solid fa-phone text-primary text-lg"></i>
          (305) 555-4446
        </li>

        <li class="flex items-center gap-3">
          <i class="fa-solid fa-envelope text-primary text-lg"></i>
          youremail@gmail.com
        </li>
      </ul>

      <!-- SOCIAL ICONS -->
      <div class="flex items-center gap-4 text-2xl mt-4">
       <a href="https://twitter.com" target="_blank"
     class="hover:text-primary transition flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" 
         fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
      <path d="M18.3 2H21l-6.6 7.6 7.8 12.4h-6.1L12.7 15l-5.3 6.9H2l7.8-9.7L2.7 2h6.2l4.1 5.9L18.3 2z"/>
    </svg>
  </a>

  <!-- Facebook -->
  <a href="https://facebook.com" target="_blank"
     class="hover:text-primary transition flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" 
         fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
      <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 2 .1v2.3h-1.1c-1 0-1.3.6-1.3 1.2V12h2.6l-.4 3h-2.2v7A10 10 0 0 0 22 12z"/>
    </svg>
  </a>

  <!-- Instagram -->
  <a href="https://instagram.com" target="_blank"
     class="hover:text-primary transition flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" 
         fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
      <path d="M12 2c2.7 0 3 0 4 .1 1 .1 1.7.3 2.3.6.6.3 1.1.7 1.6 1.2.5.5.9 1 1.2 1.6.3.6.5 1.3.6 2.3.1 1 .1 1.3.1 4s0 3-.1 4c-.1 1-.3 1.7-.6 2.3-.3.6-.7 1.1-1.2 1.6-.5.5-1 .9-1.6 1.2-.6.3-1.3.5-2.3.6-1 .1-1.3.1-4 .1s-3 0-4-.1c-1-.1-1.7-.3-2.3-.6a5.4 5.4 0 0 1-1.6-1.2A5.4 5.4 0 0 1 2.7 18c-.3-.6-.5-1.3-.6-2.3C2 15 2 14.7 2 12s0-3 .1-4c.1-1 .3-1.7.6-2.3.3-.6.7-1.1 1.2-1.6.5-.5 1-.9 1.6-1.2.6-.3 1.3-.5 2.3-.6C9 2 9.3 2 12 2zm0 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm7.5-1.8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
    </svg>
  </a>

  <!-- YouTube -->
  <a href="https://youtube.com" target="_blank"
     class="hover:text-primary transition flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg"
         fill="currentColor" viewBox="0 0 24 24" class="w-7 h-7">
      <path d="M10 15l5-3-5-3v6zm12-3c0 2.5-.2 4-1 5-1 1-2 1-3 1H6c-1 0-2 0-3-1-1-1-1-2.5-1-5s0-4 1-5c1-1 2-1 3-1h12c1 0 2 0 3 1 1 1 1 2.5 1 5z"/>
    </svg>
  </a>
      </div>
    </div>

    <!-- EXPLORE -->
    <div class="space-y-3">
      <h4 class="text-lg font-semibold text-secondary dark:text-white">Explore</h4>
      <ul class="text-gray-600 dark:text-gray-300 space-y-2 text-sm">
        <li><a href="about.html" class="hover:text-primary">About Us</a></li>
        <li><a href="litings.html" class="hover:text-primary">Our Projects</a></li>
        <li><a href="coming-soon.html" class="hover:text-primary">Pricing</a></li>
        <li><a href="coming-soon.html" class="hover:text-primary">Testimonials</a></li>
        <li><a href="coming-soon.html" class="hover:text-primary">Appointment</a></li>
      </ul>
    </div>

    <!-- LINKS -->
    <div class="space-y-3">
      <h4 class="text-lg font-semibold text-secondary dark:text-white">Links</h4>
      <ul class="text-gray-600 dark:text-gray-300 space-y-2 text-sm">
        <li><a href="listings.html" class="hover:text-primary">Services</a></li>
        <li><a href="contact.html" class="hover:text-primary">Contact</a></li>
        <li><a href="listing-details.html" class="hover:text-primary">Home Buying</a></li>
        <li><a href="coming-soon.html" class="hover:text-primary">Home Selling</a></li>
        <li><a href="404.html" class="hover:text-primary">Real Estate</a></li>
      </ul>
    </div>

    <!-- T&C + SUBSCRIBE -->
    <div class="space-y-3">
      <h4 class="text-lg font-semibold text-secondary dark:text-white">Useful Links</h4>
      <ul class="text-gray-600 dark:text-gray-300 space-y-2 text-sm">
        <li><a href="#" class="hover:text-primary">Property on Sale</a></li>
        <li><a href="about.html" class="hover:text-primary">About Us</a></li>
        <li><a href="coming-soon.html" class="hover:text-primary">Our Team</a></li>
        <li><a href="404.html" class="hover:text-primary">Terms of Use</a></li>
        <li><a href="404.html" class="hover:text-primary">Privacy Policy</a></li>
      </ul>

      <h4 class="text-lg font-semibold text-secondary dark:text-white mt-4">Subscribe</h4>

      <div class="flex">
        <input
          type="email"
          placeholder="Your Email"
          class="px-4 py-2 w-full rounded-l-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-secondary dark:text-white focus:ring-2 focus:ring-primary outline-none"
        />
        <button id="subscribe-btn" class="px-6 bg-primary hover:bg-primary/90 text-white rounded-r-md">
          Subscribe
        </button>
      </div>
    </div>

  </div>
</footer>
  `;

  // Subscribe functionality
  const btn = document.getElementById("subscribe-btn");
  if (btn) {
    btn.addEventListener("click", () => {
      const input = btn.previousElementSibling;
      const email = input.value.trim();

      if (!email) {
        alert("Please enter a valid email.");
        return;
      }

      alert("Subscribed successfully with: " + email);
      input.value = "";
    });
  }
}

document.addEventListener("DOMContentLoaded", () => loadFooter());




 



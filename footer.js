// footer.js — reusable global footer

export function loadFooter(selector = "site-footer") {
  const container = document.getElementById(selector);

  if (!container) {
    console.warn(`Footer container #${selector} not found`);
    return;
  }

  container.innerHTML = `
<footer class="w-full bg-gray-100 dark:bg-gray-900 py-12 border-t border-gray-300 dark:border-gray-700">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 items-start">
      
      <!-- LEFT COLUMN - Company Info -->
      <div class="md:col-span-2 lg:col-span-3 space-y-4">
        <div class="flex items-center gap-2">
          <img src="Images/transparent-logo-1.png" class="w-10 h-10 flex-shrink-0" alt="Logo" />
          <h3 class="text-2xl font-bold text-secondary dark:text-white whitespace-nowrap">Compass Housing</h3>
        </div>

        <ul class="space-y-3 text-gray-600 dark:text-gray-300 text-sm">
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-location-dot text-primary text-lg mt-1 flex-shrink-0"></i>
            <span class="leading-tight">3755 St SE Salem, Corner with Sunny Boulevard, 37557, Australia</span>
          </li>
          <li class="flex items-center gap-3">
            <i class="fa-solid fa-phone text-primary text-lg flex-shrink-0"></i>
            (305) 555-4446
          </li>
          <li class="flex items-center gap-3">
            <i class="fa-solid fa-envelope text-primary text-lg flex-shrink-0"></i>
            youremail@gmail.com
          </li>
        </ul>

        <!-- SOCIAL ICONS -->
        <div class="flex items-center gap-4 text-2xl mt-6">
          <a href="https://twitter.com" target="_blank" class="hover:text-primary transition flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5">
              <path d="M18.3 2H21l-6.6 7.6 7.8 12.4h-6.1L12.7 15l-5.3 6.9H2l7.8-9.7L2.7 2h6.2l4.1 5.9L18.3 2z"/>
            </svg>
          </a>
          <a href="https://facebook.com" target="_blank" class="hover:text-primary transition flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5">
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 2 .1v2.3h-1.1c-1 0-1.3.6-1.3 1.2V12h2.6l-.4 3h-2.2v7A10 10 0 0 0 22 12z"/>
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" class="hover:text-primary transition flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5">
              <path d="M12 2c2.7 0 3 0 4 .1 1 .1 1.7.3 2.3.6.6.3 1.1.7 1.6 1.2.5.5.9 1 1.2 1.6.3.6.5 1.3.6 2.3.1 1 .1 1.3.1 4s0 3-.1 4c-.1 1-.3 1.7-.6 2.3-.3.6-.7 1.1-1.2 1.6-.5.5-1 .9-1.6 1.2-.6.3-1.3.5-2.3.6-1 .1-1.3.1-4 .1s-3 0-4-.1c-1-.1-1.7-.3-2.3-.6a5.4 5.4 0 0 1-1.6-1.2A5.4 5.4 0 0 1 2.7 18c-.3-.6-.5-1.3-.6-2.3C2 15 2 14.7 2 12s0-3 .1-4c.1-1 .3-1.7.6-2.3.3-.6.7-1.1 1.2-1.6.5-.5 1-.9 1.6-1.2.6-.3 1.3-.5 2.3-.6C9 2 9.3 2 12 2zm0 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm7.5-1.8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
            </svg>
          </a>
          <a href="https://youtube.com" target="_blank" class="hover:text-primary transition flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
              <path d="M10 15l5-3-5-3v6zm12-3c0 2.5-.2 4-1 5-1 1-2 1-3 1H6c-1 0-2 0-3-1-1-1-1-2.5-1-5s0-4 1-5c1-1 2-1 3-1h12c1 0 2 0 3 1 1 1 1 2.5 1 5z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- EXPLORE -->
      <div class="md:col-span-1 lg:col-span-2 space-y-4">
        <h4 class="text-lg font-semibold text-secondary dark:text-white">Explore</h4>
        <ul class="text-gray-600 dark:text-gray-300 space-y-3 text-sm">
          <li><a href="about.html" class="hover:text-primary transition-colors">About Us</a></li>
          <li><a href="litings.html" class="hover:text-primary transition-colors">Our Projects</a></li>
          <li><a href="coming-soon.html" class="hover:text-primary transition-colors">Pricing</a></li>
          <li><a href="coming-soon.html" class="hover:text-primary transition-colors">Testimonials</a></li>
          <li><a href="coming-soon.html" class="hover:text-primary transition-colors">Appointment</a></li>
        </ul>
      </div>

      <!-- LINKS -->
      <div class="md:col-span-1 lg:col-span-2 space-y-4">
        <h4 class="text-lg font-semibold text-secondary dark:text-white">Links</h4>
        <ul class="text-gray-600 dark:text-gray-300 space-y-3 text-sm">
          <li><a href="services.html" class="hover:text-primary transition-colors">Services</a></li>
          <li><a href="contact.html" class="hover:text-primary transition-colors">Contact</a></li>
          <li><a href="services-details.html" class="hover:text-primary transition-colors">Home Buying</a></li>
          <li><a href="coming-soon.html" class="hover:text-primary transition-colors">Home Selling</a></li>
          <li><a href="404.html" class="hover:text-primary transition-colors">Real Estate</a></li>
        </ul>
      </div>

      <!-- LOCATION -->
      <div class="md:col-span-2 lg:col-span-2 space-y-4">
        <h4 class="text-lg font-semibold text-secondary dark:text-white">Our Location</h4>
        <p class="text-gray-600 dark:text-gray-300 text-sm">
          Visit our nearest branch or reach us directly through our map.
        </p>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508612!2d144.9556513156896!3d-37.81732397975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAyLjQiUyAxNDTCsDU3JzIyLjQiRQ!5e0!3m2!1sen!2sin!4v1700000000000" 
          width="100%" 
          height="100" 
          style="border:0; border-radius:8px;" 
          allowfullscreen="" 
          loading="lazy"
          class="w-full">
        </iframe>
      </div>

      <!-- SUBSCRIBE -->
      <div class="md:col-span-2 lg:col-span-3 space-y-4">
        <h4 class="text-lg font-semibold text-secondary dark:text-white">Subscribe</h4>
        <p class="text-gray-600 dark:text-gray-300 text-sm">Get insider updates, special announcements, and valuable resources — no spam, only useful content.</p>

        <div class="flex w-full max-w-md">
          <input
            type="email"
            placeholder="Your Email"
            class="flex-grow px-4 py-2.5 min-w-0 rounded-l-md border border-gray-300 
                   dark:border-gray-700 bg-white dark:bg-gray-800 text-secondary 
                   dark:text-white focus:ring-2 focus:ring-primary outline-none text-sm"
          />
          <button
            id="subscribe-btn"
            class="px-6 py-2.5 bg-primary hover:bg-secondary text-white rounded-r-md 
                   whitespace-nowrap transition-colors font-medium text-sm"
          >
            Subscribe
          </button>
        </div>
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

      // Empty check
      if (email === "") {
        alert("Please enter your email address.");
        return;
      }

      // Email format validation
       const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|org|net)$/;
      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      // Success
      alert("✅ Subscribed successfully with: " + email);
      input.value = "";
    });
  }
}

document.addEventListener("DOMContentLoaded", () => loadFooter());

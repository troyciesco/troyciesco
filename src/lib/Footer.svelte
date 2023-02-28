<script lang="ts">
  import { onMount } from "svelte"

  let isDarkModeEnabled = false

  function toggleDarkMode() {
    isDarkModeEnabled = !isDarkModeEnabled
    localStorage.setItem("theme", isDarkModeEnabled ? "dark" : "light")

    isDarkModeEnabled
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark")
  }

  onMount(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      isDarkModeEnabled = true
    }
  })
</script>

<footer class="px-4 py-4 text-center font-mono text-xs flex flex-col sm:flex-row items-center justify-between">
  <div class="flex flex-col sm:flex-row sm:gap-2 mb-2 sm:mb-0">
    <p>© {new Date().getFullYear()} Troy Ciesco. All rights reserved.</p>
    <p>Made with 🍕 in New England.</p>
  </div>
  <button on:click={toggleDarkMode}>Switch to {isDarkModeEnabled ? "light mode" : "dark mode"}</button>
</footer>

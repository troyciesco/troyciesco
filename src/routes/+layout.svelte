<script lang="ts">
  import Footer from "$lib/Footer.svelte"
  // import Header from "$lib/components/Header.svelte"
  import Nav from "$lib/Nav.svelte"
  import "../styles/index.scss"
</script>

<svelte:head>
  <title>Troy Ciesco</title>
  <script>
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  </script>
</svelte:head>

<div class="flex flex-col min-h-screen dark:bg-slate-800 dark:text-primary-100">
  <!-- <Header /> -->
  <div class="flex-grow flex flex-col sm:flex-row w-full pt-10 sm:pt-20 max-w-7xl mx-auto">
    <Nav />
    <div class="px-4 sm:px-0">
      <slot />
    </div>
  </div>
  <Footer />
</div>

<script lang="ts">
  import { page } from "$app/stores"
  import ExternalLinkIcon from "./icons/ExternalLinkIcon.svelte"
  import Logo from "./Logo.svelte"
</script>

<ul class="px-4 sm:px-20 space-y-4 flex justify-between sm:justify-start sm:flex-col">
  <li>
    <a href="/"><Logo /></a>
  </li>
  <li>
    <a
      class="underline p-1"
      class:active={$page.route.id === "/"}
      href="/">Home</a>
  </li>
  <li>
    <a
      class="underline p-1"
      class:active={$page.route.id?.includes("/about")}
      href="/about">About</a>
  </li>
  <li>
    <a
      class="underline p-1"
      class:active={$page.route.id?.includes("/work")}
      href="/work">Work</a>
  </li>
  <!-- <li>
    <a
      class="underline p-1"
      class:active={$page.route.id?.includes("/blog")}
      href="/blog">Blog</a>
  </li> -->
  <li>
    <a
      class="underline p-1 flex items-center gap-1"
      target="_blank"
      rel="noreferrer"
      href="/troy-ciesco-resume.pdf">Resume <ExternalLinkIcon className="h-3 w-3" /></a>
  </li>
</ul>

<style lang="scss">
  .active {
    @apply bg-primary-200 rounded-sm;
  }
  li a.active {
    @apply text-primary-700;
  }
</style>

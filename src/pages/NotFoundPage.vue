<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="min-h-screen overflow-hidden bg-ink text-white">
    <main class="relative flex min-h-screen items-center px-6 py-12 lg:px-10">
      <div class="pointer-events-none absolute left-1/2 top-1/2 h-[min(80vw,48rem)] w-[min(80vw,48rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-electric/20"></div>
      <div class="pointer-events-none absolute left-1/2 top-1/2 h-[min(58vw,34rem)] w-[min(58vw,34rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-electric/20 [transform:translate(-50%,-50%)_rotate(35deg)]"></div>
      <div class="pointer-events-none absolute left-1/2 top-1/2 h-[min(38vw,22rem)] w-[min(38vw,22rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-electric/20 [transform:translate(-50%,-50%)_rotate(-25deg)]"></div>

      <section class="relative z-10 mx-auto w-full max-w-7xl">
        <RouterLink to="/" class="group mb-16 inline-flex items-center gap-2.5" aria-label="Terug naar Project 404 home">
          <span class="grid h-8 w-8 place-items-center rounded-full bg-electric text-ink transition-transform group-hover:rotate-45">
            <span class="h-2.5 w-2.5 rounded-full bg-ink"></span>
          </span>
          <span class="font-display text-xl font-bold tracking-[-0.06em]">project 404<span class="text-electric">.</span></span>
        </RouterLink>

        <div class="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p class="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-electric">
              <span class="relative flex h-2 w-2">
                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#88c66f] opacity-75"></span>
                <span class="relative inline-flex h-2 w-2 rounded-full bg-[#88c66f]"></span>
              </span>
              Deze pagina is verdwaald
            </p>
            <h1 class="font-display text-[clamp(5rem,18vw,15rem)] font-medium leading-[0.75] tracking-[-0.1em] text-electric">
              404<span class="text-white">.</span>
            </h1>
            <h2 class="mt-12 max-w-xl font-display text-4xl font-medium leading-tight tracking-[-0.05em] sm:text-5xl">
              Oeps. Zelfs wij konden deze pagina niet <span class="text-electric">implementeren.</span>
            </h2>
            <p class="mt-6 max-w-md text-base leading-relaxed text-white/60">
              De link bestaat niet, maar geen paniek: onze beste oplossingen beginnen ook vaak met een lege pagina.
            </p>
            <RouterLink
              to="/"
              class="group mt-9 inline-flex items-center gap-3 rounded-full bg-electric px-6 py-3 font-bold text-ink transition-transform hover:-translate-y-1"
            >
              Terug naar de realiteit
              <span class="group-hover:translate-x-1 group-hover:-translate-y-1 text-lg transition-all">↗</span>
            </RouterLink>
          </div>

          <div class="relative mx-auto flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80">
            <div class="absolute inset-8 animate-[spin_18s_linear_infinite] rounded-full border border-dashed border-electric/50"></div>
            <div class="absolute inset-20 rounded-full bg-electric shadow-[0_0_100px_rgba(185,245,82,.3)]"></div>
            <div class="relative text-center font-display text-ink">
              <span class="block text-5xl font-bold tracking-[-0.08em]">404</span>
              <span class="text-xs font-bold uppercase tracking-[0.16em]">out of office</span>
            </div>
          </div>
        </div>

        <p class="absolute bottom-[-4rem] right-0 hidden text-xs uppercase tracking-[0.18em] text-white/30 lg:block">
          Error: destination not found / human touch required
        </p>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const mobileOpen = ref(false)
const flippedCards = ref([])
const currentYear = new Date().getFullYear()

const founders = [
  {
    number: '01',
    name: 'De strateeg',
    role: 'Strategie & richting',
    description: 'Verbindt ambitie aan een helder plan. Ziet waar technologie vandaag al verschil kan maken.',
    initials: 'S',
    accent: 'bg-[#d9f5e6]',
    detail: 'Vraagt door tot de kern helder is en vertaalt complexe vraagstukken naar een richting waar iedereen in mee kan.',
    funFact: 'Wordt enthousiast van een goed whiteboard.',
  },
  {
    number: '02',
    name: 'De bouwer',
    role: 'Technologie & innovatie',
    description: 'Maakt ideeën tastbaar. Bouwt oplossingen die krachtig zijn, maar vooral prettig werken.',
    initials: 'B',
    accent: 'bg-[#e7edc9]',
    detail: 'Combineert technische nieuwsgierigheid met pragmatisme: eerst iets werkends maken, daarna samen steeds beter.',
    funFact: 'Heeft altijd nog één prototype in gedachten.',
  },
  {
    number: '03',
    name: 'De verbinder',
    role: 'Mensen & groei',
    description: 'Houdt de menselijke maat scherp. Zorgt dat vernieuwing ook echt landt in je organisatie.',
    initials: 'V',
    accent: 'bg-[#d5e3dc]',
    detail: 'Brengt mensen, ideeën en mogelijkheden bij elkaar zodat verandering niet alleen slim klinkt, maar ook echt gebruikt wordt.',
    funFact: 'Kent waarschijnlijk meer mensen dan LinkedIn.',
  },
]

const toggleCard = (number) => {
  flippedCards.value = flippedCards.value.includes(number)
    ? flippedCards.value.filter((cardNumber) => cardNumber !== number)
    : [...flippedCards.value, number]
}

const isFlipped = (number) => flippedCards.value.includes(number)
</script>

<template>
  <div class="min-h-screen overflow-x-clip bg-[#f7f8f4] text-ink">
    <header class="relative z-20 border-b border-ink/10">
      <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10" aria-label="Hoofdnavigatie">
        <RouterLink to="/" class="group flex items-center gap-2.5" aria-label="Project 404 home">
          <span class="grid h-8 w-8 place-items-center rounded-full bg-ink text-electric transition-transform group-hover:rotate-45">
            <span class="h-2.5 w-2.5 rounded-full bg-electric"></span>
          </span>
          <span class="font-display text-xl font-bold tracking-[-0.06em]">project 404<span class="text-[#6d8f70]">.</span></span>
        </RouterLink>

        <div class="hidden items-center gap-9 text-sm font-medium lg:flex">
          <RouterLink to="/" class="nav-link">Home</RouterLink>
          <RouterLink to="/founders" class="font-bold text-ink">Ons team</RouterLink>
        </div>

        <button
          class="rounded-full border border-ink/15 p-2 lg:hidden"
          :aria-expanded="mobileOpen"
          aria-controls="mobile-menu"
          :aria-label="mobileOpen ? 'Menu sluiten' : 'Menu openen'"
          @click="mobileOpen = !mobileOpen"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path v-if="!mobileOpen" d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            <path v-else d="m5 5 10 10M15 5 5 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
          </svg>
        </button>
      </nav>

      <div v-if="mobileOpen" id="mobile-menu" class="border-t border-ink/10 px-6 py-4 lg:hidden">
        <div class="mx-auto flex max-w-7xl flex-col gap-1 text-sm font-medium">
          <RouterLink to="/" class="rounded-lg px-3 py-3 transition-colors hover:bg-ink/5" @click="mobileOpen = false">Home</RouterLink>
          <RouterLink to="/founders" class="rounded-lg bg-ink/5 px-3 py-3 font-bold" @click="mobileOpen = false">Ons team</RouterLink>
        </div>
      </div>
    </header>

    <main>
      <section
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.75, ease: 'easeOut' }"
        class="relative mx-auto max-w-7xl px-6 pb-16 pt-20 lg:px-10 lg:pb-28 lg:pt-32"
      >
        <div class="absolute -right-32 top-20 -z-0 h-96 w-96 rounded-full bg-sage/70 blur-3xl"></div>
        <div class="relative z-10 max-w-4xl">
          <p class="eyebrow">Aangenaam kennis te maken</p>
          <h1 class="mt-5 font-display text-6xl font-medium leading-[0.92] tracking-[-0.07em] sm:text-8xl">
            Drie mensen.<br /><span class="text-[#73967a]">Eén missie.</span>
          </h1>
          <p class="mt-9 max-w-xl text-lg leading-relaxed text-ink/65">
            Achter Project 404 staan drie nieuwsgierige makers. We combineren strategie, technologie en aandacht voor mensen om vooruitgang werkbaar te maken.
          </p>
        </div>
      </section>

      <section class="bg-white px-6 py-20 lg:px-10 lg:py-28">
        <div class="mx-auto max-w-7xl">
          <div
            v-motion
            :initial="{ opacity: 0, y: 18 }"
            :whileInView="{ opacity: 1, y: 0 }"
            :viewport="{ once: true, amount: 0.3 }"
            class="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"
          >
            <div>
              <p class="eyebrow">De founders</p>
              <h2 class="mt-4 max-w-xl font-display text-4xl font-medium leading-tight tracking-[-0.05em] sm:text-5xl">
                Verschillende perspectieven, <span class="text-[#73967a]">zelfde energie.</span>
              </h2>
            </div>
            <p class="max-w-xs text-sm leading-relaxed text-ink/60">Geen lagen tussen idee en uitvoering. Je werkt direct met de mensen die het verschil maken.</p>
          </div>

          <div class="grid gap-5 md:grid-cols-3">
            <article
              v-for="founder in founders"
              :key="founder.number"
              v-motion
              :initial="{ opacity: 0, y: 28 }"
              :whileInView="{ opacity: 1, y: 0 }"
              :whileHover="{ y: -8 }"
              :viewport="{ once: true, amount: 0.2 }"
              :transition="{ duration: 0.55, delay: (Number(founder.number) - 1) * 0.12 }"
              class="group cursor-pointer [perspective:1200px]"
              :aria-label="`${isFlipped(founder.number) ? 'Toon voorkant van' : 'Toon meer informatie over'} ${founder.name}`"
              tabindex="0"
              @click="toggleCard(founder.number)"
              @keydown.enter.prevent="toggleCard(founder.number)"
              @keydown.space.prevent="toggleCard(founder.number)"
            >
              <div class="relative min-h-108 transform-3d transition-transform duration-700" :class="{ 'transform-[rotateY(180deg)]': isFlipped(founder.number) }">
                <div :class="['absolute inset-0 flex flex-col justify-between overflow-hidden rounded-[1.75rem] border border-ink/10 p-6 backface-hidden', founder.accent]">
                  <div class="relative flex aspect-4/3 items-end">
                    <div class="absolute -right-8 -top-10 h-44 w-44 rounded-full border border-ink/10"></div>
                    <div class="absolute -right-2 top-6 h-32 w-32 rounded-full border border-ink/10"></div>
                    <span class="relative font-display text-[9rem] font-medium leading-none tracking-[-0.12em] text-ink/15">{{ founder.initials }}</span>
                    <span class="absolute right-0 top-0 font-mono text-xs text-ink/50">{{ founder.number }}</span>
                  </div>
                  <div>
                    <p class="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#66816a]">{{ founder.role }}</p>
                    <h3 class="mt-3 font-display text-3xl font-medium tracking-[-0.05em]">{{ founder.name }}</h3>
                    <p class="mt-4 text-sm leading-relaxed text-ink/60">{{ founder.description }}</p>
                    <p class="mt-6 text-xs font-bold uppercase tracking-[0.12em] text-ink/45">Klik voor meer ↗</p>
                  </div>
                </div>
                <div class="absolute inset-0 flex flex-col justify-between rounded-[1.75rem] bg-ink p-6 text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div class="flex items-start justify-between">
                    <span class="font-mono text-xs text-electric">{{ founder.number }}</span>
                    <span class="text-sm text-white/40">Project 404 / inside</span>
                  </div>
                  <div>
                    <p class="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-electric">Meer over {{ founder.name }}</p>
                    <p class="mt-5 font-display text-2xl leading-tight tracking-[-0.04em]">{{ founder.detail }}</p>
                    <p class="mt-6 border-t border-white/15 pt-5 text-sm leading-relaxed text-white/60">
                      <span class="font-bold text-white">Fun fact:</span> {{ founder.funFact }}
                    </p>
                    <p class="mt-6 text-xs font-bold uppercase tracking-[0.12em] text-electric">Klik om terug te draaien ↩</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :viewport="{ once: true, amount: 0.25 }"
        class="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"
      >
        <div class="rounded-[2rem] bg-ink px-7 py-12 text-white sm:px-12 lg:flex lg:items-end lg:justify-between">
          <div>
            <p class="text-xs font-bold uppercase tracking-[0.18em] text-electric">Samen vooruit</p>
            <h2 class="mt-5 max-w-2xl font-display text-4xl font-medium leading-tight tracking-[-0.05em] sm:text-5xl">
              Een goed gesprek is vaak het begin van iets <span class="text-electric">groots.</span>
            </h2>
          </div>
          <RouterLink
            to="/"
            class="group mt-8 inline-flex w-fit items-center gap-3 font-bold text-white transition-transform duration-300 hover:-translate-y-1 lg:mt-0"
          >
            Terug naar home
            <span
              class="grid h-10 w-10 place-items-center rounded-full border border-white/30 transition-all duration-300 group-hover:border-electric group-hover:bg-electric group-hover:text-ink group-hover:rotate-[-8deg]"
            >
              <span class="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </span>
          </RouterLink>
        </div>
      </section>
    </main>

    <footer class="bg-ink px-6 pb-8 text-white lg:px-10">
      <div class="mx-auto flex max-w-7xl flex-col justify-between gap-5 border-t border-white/15 pt-7 text-xs text-white/50 sm:flex-row">
        <span>© {{ currentYear }} Project 404</span><span>Gemaakt met aandacht in Nederland</span>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const mobileOpen = ref(false)
const submitted = ref(false)
const currentYear = new Date().getFullYear()
const contactForm = ref({
  name: '',
  email: '',
  company: '',
  message: '',
})

const navItems = [
  { label: 'Oplossingen', href: '#oplossingen' },
  { label: 'Onze aanpak', href: '#aanpak' },
  { label: 'Over ons', href: '#over-ons' },
]

const solutions = [
  {
    number: '01',
    type: 'AI Strategie',
    title: 'Van idee naar implementatie',
    text: 'We helpen je om AI op een strategische manier in te zetten, zodat het echt waarde toevoegt aan je organisatie.',
    icon: 'compass'
  },
  {
    number: '02',
    type: 'AI Implementatie',
    title: 'Slimme software die werkt',
    text: 'We bouwen AI-oplossingen die naadloos aansluiten op je bestaande systemen en processen.',
    icon: 'spark'
  },
  {
    number: '03',
    type: 'AI Optimalisatie',
    title: 'Blijven verbeteren',
    text: 'We monitoren en optimaliseren je AI-oplossingen continu, zodat ze altijd optimaal presteren.',
    icon: 'chart'
  }
]

const handleSubmit = () => {
  const subject = encodeURIComponent(`Kennismaking via de website - ${contactForm.value.company || contactForm.value.name}`)
  const body = encodeURIComponent(
    `Naam: ${contactForm.value.name}\nE-mail: ${contactForm.value.email}\nOrganisatie: ${contactForm.value.company || 'Niet opgegeven'}\n\nWaar kunnen we mee helpen?\n${contactForm.value.message}`,
  )
  window.location.href = `mailto:hallo@project404.nl?subject=${subject}&body=${body}`
  submitted.value = true
}
</script>

<template>
  <div class="min-h-screen overflow-x-clip bg-[#f7f8f4] text-ink">
    <header class="relative z-20 border-b border-ink/10">
      <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10" aria-label="Hoofdnavigatie">
        <a href="#" class="group flex items-center gap-2.5" aria-label="Project 404 home">
          <span
            class="grid h-8 w-8 place-items-center rounded-full bg-ink text-electric transition-transform group-hover:rotate-45">
            <span class="h-2.5 w-2.5 rounded-full bg-electric"></span>
          </span>
          <span class="font-display text-xl font-bold tracking-[-0.06em]">project 404<span
              class="text-[#6d8f70]">.</span></span>
        </a>

        <div class="hidden items-center gap-9 text-sm font-medium lg:flex">
          <a v-for="item in navItems" :key="item.label" :href="item.href" class="nav-link">{{ item.label }}</a>
          <RouterLink to="/founders" class="nav-link">Ons team</RouterLink>
        </div>

        <button
          class="rounded-full border border-ink/15 p-2 lg:hidden"
          :aria-expanded="mobileOpen"
          aria-controls="mobile-menu"
          :aria-label="mobileOpen ? 'Menu sluiten' : 'Menu openen'"
          @click="mobileOpen = !mobileOpen"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              v-if="!mobileOpen"
              d="M3 6h14M3 10h14M3 14h14"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              v-else
              d="m5 5 10 10M15 5 5 15"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </nav>

      <div v-if="mobileOpen" id="mobile-menu" class="border-t border-ink/10 px-6 py-4 lg:hidden">
        <div class="mx-auto flex max-w-7xl flex-col gap-1 text-sm font-medium">
          <a
            v-for="item in navItems"
            :key="item.label"
            :href="item.href"
            class="rounded-lg px-3 py-3 transition-colors hover:bg-ink/5"
            @click="mobileOpen = false"
          >
            {{ item.label }}
          </a>
          <RouterLink
          to="/founders"
          class="rounded-lg px-3 py-3 transition-colors hover:bg-ink/5"
          @click="mobileOpen = false"
          >
          Ons team
          </RouterLink>
        </div>
      </div>
    </header>

    <main>
      <section class="relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-24">
        <div
          class="scroll-blob absolute -right-28 top-16 -z-0 h-80 w-80 rounded-full bg-sage/60 blur-3xl lg:h-[28rem] lg:w-[28rem]">
        </div>
        <div class="relative z-10 max-w-full">
          <p
            v-motion
            :initial="{ opacity: 0, y: 18 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.6, delay: 0.15 }"
            class="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#66816a]"
          >
            <span class="relative flex h-2 w-2">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#88c66f] opacity-75"></span>
              <span class="relative inline-flex h-2 w-2 rounded-full bg-[#88c66f]"></span>
            </span> Menselijk. Slim. Vooruit.
          </p>
          <h1
            v-motion
            :initial="{ opacity: 0, y: 28 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.8, delay: 0.25 }"
            class="max-w-4xl font-display text-[3.6rem] font-medium leading-[0.94] tracking-[-0.07em] sm:text-7xl lg:text-[7.4rem]">
            AI die <span class="text-[#73967a]">werkt</span><br />
            voor jou!
          </h1>
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.7, delay: 0.45 }"
            class="mt-10 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between"
          >
            <p class="max-w-md text-lg leading-relaxed text-ink/65">Wij helpen ambitieuze teams om met AI concrete
              resultaten te maken. Van strategie tot implementatie, zonder de ruis.</p>
            <a href="#oplossingen" class="group inline-flex w-fit items-center gap-3 font-bold sm:ml-auto">
              Ontdek wat er al mogelijk is
              <span
                class="grid h-10 w-10 place-items-center rounded-full border border-ink/20 transition group-hover:-translate-y-1 group-hover:bg-ink group-hover:text-white">↓</span>
            </a>
          </div>
        </div>
        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.96, y: 24 }"
          :animate="{ opacity: 1, scale: 1, y: 0 }"
          :transition="{ duration: 0.9, delay: 0.55, ease: 'easeOut' }"
          class="relative mt-20 grid min-h-[270px] grid-cols-2 overflow-hidden rounded-[2rem] bg-ink sm:min-h-[340px] lg:mt-28 lg:grid-cols-4"
        >
          <div class="absolute inset-0 opacity-40"
            style="background-image: linear-gradient(rgba(185,245,82,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(185,245,82,.12) 1px, transparent 1px); background-size: 46px 46px;">
          </div>
          <div class="relative col-span-2 flex flex-col justify-between p-7 sm:p-10">
            <span class="text-sm font-medium text-electric">PROJECT 404 / 2025—{{ currentYear }}</span>
            <p class="max-w-xs font-display text-3xl leading-tight tracking-[-0.04em] text-white sm:text-4xl">De beste
              software implementatie begint met de juiste richting.</p>
          </div>
          <div
            class="relative col-span-2 flex items-center justify-center overflow-hidden border-t border-white/10 p-7 sm:border-l sm:border-t-0">
            <div class="orbital orbital-one"></div>
            <div class="orbital orbital-two"></div>
            <div class="orbital orbital-three"></div>
            <div
              class="relative z-10 grid h-24 w-24 place-items-center rounded-full bg-electric shadow-[0_0_70px_rgba(185,245,82,.35)]">
              <span class="font-display text-3xl font-bold tracking-[-0.08em]">404<span
                  class="text-[#5f7e3d]">.</span></span>
            </div>
            <span class="absolute hidden sm:block bottom-7 right-7 text-xs uppercase tracking-[0.18em] text-white/45">Good tech, human
              touch</span>
          </div>
        </div>
      </section>

      <section id="oplossingen" class="bg-white px-6 py-20 lg:px-10 lg:py-28">
        <div class="mx-auto max-w-7xl">
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :whileInView="{ opacity: 1, y: 0 }"
            :viewport="{ once: true, amount: 0.35 }"
            class="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end"
          >
            <div>
              <p class="eyebrow">Onze oplossingen</p>
              <h2 class="mt-4 max-w-xl font-display text-4xl font-medium leading-tight tracking-[-0.05em] sm:text-5xl">
                Werk dat <span class="text-[#73967a]">voor zich spreekt.</span></h2>
            </div>
            <p class="max-w-xs text-sm leading-relaxed text-ink/60">Een selectie van digitale producten en
              AI-oplossingen die we samen met onze klanten hebben gebouwd.</p>
          </div>
          <div class="grid gap-4 md:grid-cols-3" v-if="solutions.length > 1">
            <article
              v-for="(solution, index) in solutions"
              :key="solution.number"
              v-motion
              :initial="{ opacity: 0, y: 28 }"
              :whileInView="{ opacity: 1, y: 0 }"
              :whileHover="{ y: -7, scale: 1.015 }"
              :whilePress="{ scale: 0.98 }"
              :viewport="{ once: true, amount: 0.2 }"
              :transition="{ duration: 0.55, delay: index * 0.1 }"
              class="solution-card group"
            >
              <div class="flex items-start justify-between">
                <span class="font-mono text-xs text-ink/45">{{ solution.number }}</span>
                <div class="icon-box">
                  <svg v-if="solution.icon === 'compass'" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="8.5" />
                    <path d="m14.8 9.2-2.2 4.4-4.4 2.2 2.2-4.4 4.4-2.2Z" />
                  </svg>
                  <svg v-if="solution.icon === 'spark'" viewBox="0 0 24 24" fill="none">
                    <path d="m12 3 1.6 6.4L20 11l-6.4 1.6L12 19l-1.6-6.4L4 11l6.4-1.6L12 3Z" />
                    <path d="m19 17 .6 2.4L22 20l-2.4.6L19 23l-.6-2.4L16 20l2.4-.6L19 17Z" />
                  </svg>
                  <svg v-if="solution.icon === 'chart'" viewBox="0 0 24 24" fill="none">
                    <path d="M4 19V5M4 19h16" />
                    <path d="m7 15 3-4 3 2 5-7" />
                  </svg>
                </div>
              </div>
              <div class="mt-18">
                <p class="mb-2 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#66816a]">{{ solution.type }}
                </p>
                <h3 class="font-display text-2xl font-bold tracking-[-0.04em]">{{ solution.title }}</h3>
                <p class="mt-3 text-sm leading-relaxed text-ink/60">{{ solution.text }}</p>
              </div>
            </article>
          </div>
          <div class="flex items-center justify-center gap-3" v-else>
            <article v-for="index in 3" :key="index" class="solution-card  w-[320px] group">
              <div class="flex items-start justify-between">
                <span class="font-mono text-xs text-ink/45"></span>
                <div class="icon-box">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="8.5" />
                    <path d="m14.8 9.2-2.2 4.4-4.4 2.2 2.2-4.4 4.4-2.2Z" />
                  </svg>
                </div>
              </div>
              <div class="mt-18">
                <p class="mb-2 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#66816a]">
                </p>
                <h3 class="font-display text-2xl font-bold tracking-[-0.04em]"></h3>
                <p class="mt-3 text-sm leading-relaxed text-ink/60"></p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="aanpak" class="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-32">
        <div class="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div
            v-motion
            :initial="{ opacity: 0, x: -24 }"
            :whileInView="{ opacity: 1, x: 0 }"
            :viewport="{ once: true, amount: 0.35 }"
            :transition="{ duration: 0.7 }"
          >
            <p class="eyebrow">Onze aanpak</p>
            <h2 class="mt-5 font-display text-4xl font-medium leading-[1.05] tracking-[-0.05em] sm:text-5xl">Klein
              beginnen.<br /><span class="text-[#73967a]">Groot denken.</span></h2>
          </div>
          <div
            v-motion
            :initial="{ opacity: 0, x: 24 }"
            :whileInView="{ opacity: 1, x: 0 }"
            :viewport="{ once: true, amount: 0.25 }"
            :transition="{ duration: 0.7, delay: 0.15 }"
            class="border-t border-ink/15"
          >
            <div v-for="(step, index) in ['Luisteren & begrijpen', 'Bouwen & testen', 'Groeien & verbeteren']"
              :key="step" class="flex items-center justify-between border-b border-ink/15 py-6">
              <div class="flex items-center gap-6"><span class="font-mono text-xs text-[#73967a]">0{{ index + 1
              }}</span><span class="font-display text-xl font-medium">{{ step }}</span></div>
            
            </div>
            <p class="mt-8 max-w-md text-sm leading-relaxed text-ink/60">We combineren technische kennis met een scherp
              oog voor de mensen die met de oplossing gaan werken. Zo wordt verandering vooruitgang en innovatie.</p>
          </div>
        </div>
      </section>

      <section id="over-ons" class="bg-sage px-6 py-20 lg:px-10 lg:py-28">
        <div class="mx-auto max-w-7xl">
          <p class="eyebrow">Waarom Project 404</p>
          <div class="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 class="mt-5 max-w-lg font-display text-4xl font-medium leading-tight tracking-[-0.05em] sm:text-5xl">
                Technologie met een <span class="text-[#68866d]">menselijk kompas.</span></h2>
            </div>
            <div class="grid grid-cols-2 gap-8 border-l border-ink/15 pl-7 sm:pl-12">
                <div><strong class="font-display text-5xl tracking-[-0.06em]">1</strong>
                  <p class="mt-2 text-sm text-ink/65">team van begin tot eind</p>
              </div>
                <div><strong class="font-display text-5xl tracking-[-0.06em]">0</strong>
                  <p class="mt-2 text-sm text-ink/65">onnodige tussenlagen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="bg-ink px-6 py-20 text-white lg:px-10 lg:py-28">
        <div class="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p class="eyebrow text-electric">Klaar om te beginnen?</p>
              <h2 class="mt-5 max-w-lg font-display text-4xl font-medium leading-tight tracking-[-0.05em] sm:text-5xl">
                Laten we kijken wat er <span class="text-electric">mogelijk is.</span>
              </h2>
              <p class="mt-6 max-w-md text-sm leading-relaxed text-white/60">
                Vertel kort waar je tegenaan loopt. We reageren binnen twee werkdagen met een eerste, concrete gedachte.
              </p>
              <a class="mt-8 inline-flex items-center gap-2 text-sm font-bold text-electric underline-offset-4 hover:underline" href="mailto:hallo@project404.nl">
                hallo@project404.nl <span aria-hidden="true">↗</span>
              </a>
            </div>

            <form v-if="!submitted" class="grid gap-6" @submit.prevent="handleSubmit">
              <div class="grid gap-6 sm:grid-cols-2">
                <label class="grid gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white/60">
                  Naam
                  <input v-model="contactForm.name" class="contact-input" type="text" name="name" autocomplete="name" required placeholder="Jouw naam" />
                </label>
                <label class="grid gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white/60">
                  E-mail
                  <input v-model="contactForm.email" class="contact-input" type="email" name="email" autocomplete="email" required placeholder="jij@organisatie.nl" />
                </label>
              </div>
              <label class="grid gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white/60">
                Organisatie <span class="font-normal normal-case tracking-normal text-white/35">(optioneel)</span>
                <input v-model="contactForm.company" class="contact-input" type="text" name="company" autocomplete="organization" placeholder="De naam van je organisatie" />
              </label>
              <label class="grid gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white/60">
                Waar kunnen we mee helpen?
                <textarea v-model="contactForm.message" class="contact-input min-h-28 resize-y" name="message" required placeholder="Vertel ons over je uitdaging..."></textarea>
              </label>
              <div class="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p class="max-w-xs text-xs leading-relaxed text-white/40">Je e-mailprogramma opent met je bericht. We gebruiken je gegevens alleen om te reageren.</p>
                <button class="group inline-flex items-center gap-3 rounded-full bg-electric px-6 py-3 font-bold text-ink transition-transform hover:-translate-y-1" type="submit">
                  Verstuur bericht <span class="text-lg transition-transform group-hover:translate-x-1">↗</span>
                </button>
              </div>
            </form>
            <div v-else class="flex min-h-64 flex-col justify-center rounded-2xl border border-electric/30 bg-white/5 p-8">
              <p class="text-2xl font-medium">Je mailprogramma staat klaar.</p>
              <p class="mt-3 text-sm leading-relaxed text-white/60">Verstuur het bericht vanuit je e-mailprogramma. We komen binnen twee werkdagen bij je terug.</p>
              <button class="mt-6 w-fit text-sm font-bold text-electric underline-offset-4 hover:underline" type="button" @click="submitted = false">Nog een bericht sturen</button>
            </div>
        </div>
      </section>

    </main>

    <footer class="bg-ink px-6 pb-8 text-white lg:px-10">
      <div
        class="mx-auto flex max-w-7xl flex-col justify-between gap-5 border-t border-white/15 pt-7 text-xs text-white/50 sm:flex-row">
        <span>© {{ currentYear }} Project 404</span><span>Gemaakt met aandacht in Nederland</span><a href="#contact"
            class="text-electric">Neem contact op ↗</a>
      </div>
    </footer>
  </div>
</template>

<style>
.scroll-blob {
  animation: blob-drift linear both;
  animation-timeline: scroll(root block);
  animation-range: 0% 100%;
  will-change: transform;
}

@keyframes blob-drift {
  from {
    transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
  }

  to {
    transform: translate3d(-5rem, 80vh, 0) rotate(180deg) scale(1.25);
  }
}
</style>

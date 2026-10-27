'use client'

import Link from 'next/link'
import { ChevronRight, Play, Search, Sparkles, UserRound } from 'lucide-react'
import { shows } from '../lib/data' // Importando os dados do arquivo que separamos

// Removemos a propriedade "onHome", agora usamos o Link do Next.js
function Header() {
  return (
    <header className="flex items-center justify-between px-5 py-5 md:px-12">
      <Link href="/" className="flex items-center gap-2" aria-label="Ir para o início">
        <span className="grid h-12 w-12 rotate-[-8deg] place-items-center rounded-[18px] bg-[#ffda3e] text-2xl text-[#ff7b54] shadow-[0_5px_0_#f0ae32]">★</span>
        <span className="text-[27px] font-black tracking-[-1.5px] text-[#25305f]">
          cine<span className="text-[#ff6f91]">kids</span>
        </span>
      </Link>
      <nav className="hidden items-center gap-8 text-sm font-extrabold text-[#617098] md:flex">
        <a href="#inicio" className="text-[#25305f]">Início</a>
        <a href="#categorias">Categorias</a>
        <a href="#favoritos">Favoritos</a>
      </nav>
      <div className="flex items-center gap-3">
        <button className="grid h-11 w-11 place-items-center rounded-full bg-white text-[#25305f] shadow-sm" aria-label="Buscar"><Search size={18} /></button>
        <button className="grid h-11 w-11 place-items-center rounded-full bg-[#7c5cff] text-white shadow-[0_4px_0_#5640bd]" aria-label="Perfil"><UserRound size={18} /></button>
      </div>
    </header>
  )
}

// O botão original[cite: 6] foi substituído pelo componente Link direcionando para a rota dinâmica
function ShowCard({ show }: { show: any }) {
  return (
    <Link href={`/show/${show.id}`} className="group min-w-[172px] text-left sm:min-w-[206px]" aria-label={`Ver detalhes de ${show.title}`}>
      <div className="relative aspect-[.82] overflow-hidden rounded-[28px] border-[5px] border-white bg-[#dff9f8] shadow-[0_8px_0_#c5e8e8] transition duration-300 group-hover:-translate-y-2 group-hover:rotate-1">
        <img src={show.image} alt={`Capa de ${show.title}`} className="h-full w-full object-cover" />
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/55 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full bg-[#ffda3e] px-3 py-1 text-[10px] font-black text-[#25305f]">NOVO</span>
        <span className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-white text-[#ff6f91] shadow-lg">
          <Play size={14} fill="currentColor" />
        </span>
      </div>
      <h3 className="mt-4 truncate text-[15px] font-black text-[#25305f]">{show.title}</h3>
      <p className="mt-1 text-xs font-bold text-[#7d89a8]">{show.category}</p>
    </Link>
  )
}

function HomeScreen() {
  return (
    <main id="inicio" className="pb-16">
      <section className="relative mx-5 min-h-[420px] overflow-hidden rounded-[38px] bg-[#72dfe0] shadow-[0_10px_0_#b6e7e3] md:mx-12">
        <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1800&q=90" alt="Céu mágico" className="absolute inset-0 h-full w-full object-cover opacity-35 mix-blend-multiply" />
        <div className="absolute -right-10 -top-16 h-60 w-60 rounded-full bg-[#ffda3e]/80 blur-sm" />
        <div className="absolute bottom-[-90px] right-32 h-52 w-52 rounded-full bg-[#ff8fb1]/70" />
        <div className="relative max-w-xl px-7 py-14 md:px-14 md:py-24">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-black text-[#7c5cff] shadow-sm"><Sparkles size={14} /> HISTÓRIA DA SEMANA</span>
          <h1 className="text-4xl font-black leading-[.95] tracking-[-2px] text-[#25305f] md:text-6xl">Luna e o<br /><span className="text-[#ff6f91]">Reino Mágico</span></h1>
          <p className="mt-5 max-w-md text-sm font-bold leading-relaxed text-[#33467e]">Uma aventura brilhante começa quando a imaginação ganha vida.</p>
          
          {/* Botão de assistir do Hero Banner agora é um Link[cite: 6] */}
          <Link href={`/show/${shows[0].id}`} className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#ff6f91] px-6 py-3 text-sm font-black text-white shadow-[0_5px_0_#d44d76] transition hover:translate-y-0.5">
            <Play size={17} fill="currentColor" /> Assistir agora
          </Link>
        </div>
      </section>
      
      <section id="categorias" className="mt-14 space-y-12 px-5 md:px-12">
        <Rail title="Aventuras incríveis" showsList={[shows[0], shows[2]]} />
        <Rail title="Para os pequeninos" showsList={[shows[1], shows[3]]} />
        <Rail title="Descobrir brincando" showsList={[shows[3], shows[0], shows[2]]} />
      </section>
    </main>
  )
}

function Rail({ title, showsList }: { title: string; showsList: any[] }) { 
  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-2xl font-black tracking-tight text-[#25305f]">{title}</h2>
        <button className="flex items-center gap-1 text-xs font-black text-[#7c5cff]">Ver tudo <ChevronRight size={15} /></button>
      </div>
      <div className="flex gap-5 overflow-x-auto pb-3 [scrollbar-width:none]">
        {showsList.map(show => <ShowCard key={show.id} show={show} />)}
      </div>
    </div> 
  ) 
}

// O componente Home agora renderiza apenas a Header e a HomeScreen
export default function Home() { 
  return (
    <div className="min-h-screen bg-[#fffaf1] font-sans">
      <Header />
      <HomeScreen />
    </div> 
  ) 
}
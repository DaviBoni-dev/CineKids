import Link from 'next/link'
import { ArrowLeft, Play, Star } from 'lucide-react'
import { shows } from '../../../lib/data'
import { Suspense } from 'react' 

// 1. Adicionamos o "async" na função e alteramos o tipo do params para Promise
async function ShowContent({ params }: { params: Promise<{ id: string }> }) {
  
  // 2. Aguardamos o Next.js extrair o ID da URL com segurança
  const resolvedParams = await params;
  
  // 3. Agora procuramos o desenho usando o ID resolvido
  const show = shows.find((s) => s.id === resolvedParams.id)

  if (!show) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fffaf1]">
        <h1 className="text-2xl font-black text-[#25305f]">Desenho não encontrado! 😢</h1>
      </div>
    )
  }

  // 3. Renderiza a interface de Detalhes
  return (
    <main className="min-h-screen bg-[#fffaf1] pb-16 font-sans">
      <section className="relative min-h-[440px] overflow-hidden rounded-b-[42px] bg-[#72dfe0]">
        <img src={show.image} alt={`Banner de ${show.title}`} className="absolute inset-0 h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#25305f] via-[#25305f]/30 to-transparent" />
        
        {/* Botão de voltar para a Home */}
        <Link href="/" className="absolute left-5 top-5 z-10 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-[#25305f] shadow-md transition-transform hover:scale-105 md:left-12">
          <ArrowLeft size={17} /> Voltar
        </Link>

        <div className="relative flex min-h-[440px] items-end px-5 pb-11 md:px-12 md:pb-14">
          <div className="max-w-2xl">
            <span className="mb-3 inline-block rounded-full bg-[#ffda3e] px-4 py-2 text-xs font-black text-[#25305f]">
              SÉRIE ORIGINAL
            </span>
            <h1 className="text-4xl font-black tracking-[-1px] text-white md:text-6xl">{show.title}</h1>
            <p className="mt-4 max-w-xl text-sm font-bold leading-relaxed text-white/85 md:text-base">
              {show.description}
            </p>
            <div className="mt-5 flex items-center gap-5 text-xs font-black text-white/80">
              <span className="flex items-center gap-1">
                <Star size={14} className="fill-[#ffda3e] text-[#ffda3e]" /> 4.9
              </span>
              <span>Livre</span>
              <span>{show.episodes.length} episódios</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pt-10 md:px-12">
        <div className="mb-5 flex items-end justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-[#ff6f91]">Prepare a pipoca</p>
            <h2 className="mt-1 text-3xl font-black text-[#25305f]">Episódios</h2>
          </div>
          <span className="rounded-full bg-[#e7fafa] px-4 py-2 text-xs font-black text-[#11a1ae]">
            Temporada 1
          </span>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {show.episodes.map((episode, index) => (
            <article key={episode.title} className="flex gap-4 rounded-[26px] border-2 border-[#e2f1f2] bg-white p-3 shadow-[0_5px_0_#d7eeee]">
              <div className="relative h-24 w-36 shrink-0 overflow-hidden rounded-2xl">
                <img src={episode.image} alt={`Thumbnail: ${episode.title}`} className="h-full w-full object-cover" />
                <span className="absolute left-2 top-2 rounded-full bg-[#ffda3e] px-2 py-1 text-[10px] font-black text-[#25305f]">
                  EP {index + 1}
                </span>
              </div>
              
              <div className="flex min-w-0 flex-1 flex-col justify-center">
                <h3 className="truncate font-black text-[#25305f]">{episode.title}</h3>
                <p className="mt-1 text-xs font-bold text-[#8490ac]">{episode.duration} · Uma nova aventura</p>
              </div>
              
              {/* Botão de Assistir envia para o experimento DASH */}
              <Link 
                href={`/watch/${show.id}-ep${index + 1}`} 
                className="self-center rounded-full bg-[#ff6f91] p-3 text-white shadow-[0_3px_0_#d44d76] transition-transform hover:scale-110" 
                aria-label={`Assistir ${episode.title}`}
              >
                <Play size={16} fill="currentColor" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default function ShowDetails({ params }: { params: Promise<{ id: string }> }) {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center bg-[#fffaf1]">
        <h1 className="text-2xl font-black text-[#25305f]">Carregando série...</h1>
      </div>
    }>
      <ShowContent params={params} />
    </Suspense>
  );
}
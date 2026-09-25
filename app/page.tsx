'use client';

import { useEffect, useMemo, useState } from 'react';

type Tool = { name: string; category: string; description: string; tags: string[]; color: string; mark: string; price: string; rating: string; url: string; featured?: boolean; };

const tools: Tool[] = [
  { name: 'Perplexity', category: 'Research', description: 'The answer engine that searches the web and cites its sources.', tags: ['Search', 'Research'], color: '#dcebdc', mark: 'P', price: 'Free plan', rating: '4.9', url: 'https://www.perplexity.ai', featured: true },
  { name: 'Runway', category: 'Image & Video', description: 'Turn your ideas into cinematic video with generative AI.', tags: ['Video', 'Creative'], color: '#e8e0f2', mark: 'R', price: 'Free plan', rating: '4.8', url: 'https://runwayml.com' },
  { name: 'Notion AI', category: 'Productivity', description: 'A thinking partner built right into your connected workspace.', tags: ['Writing', 'Notes'], color: '#e8e9e4', mark: 'N', price: 'From $10/mo', rating: '4.7', url: 'https://www.notion.so/product/ai' },
  { name: 'ElevenLabs', category: 'Audio', description: 'Natural, expressive voices for creators and teams.', tags: ['Voice', 'Audio'], color: '#f2e0d3', mark: '11', price: 'Free plan', rating: '4.8', url: 'https://elevenlabs.io' },
  { name: 'Cursor', category: 'Development', description: 'The code editor built for pair programming with AI.', tags: ['Code', 'Developer'], color: '#dbe7ef', mark: 'C', price: 'From $20/mo', rating: '4.9', url: 'https://www.cursor.com' },
  { name: 'Claude', category: 'Writing', description: 'A calm, capable AI assistant for work and everyday tasks.', tags: ['Chat', 'Writing'], color: '#f1e3ca', mark: '✦', price: 'Free plan', rating: '4.9', url: 'https://claude.ai' },
  { name: 'Midjourney', category: 'Image & Video', description: 'Explore your imagination with beautiful AI-generated images.', tags: ['Image', 'Creative'], color: '#eadce8', mark: 'M', price: 'From $10/mo', rating: '4.7', url: 'https://www.midjourney.com' },
  { name: 'Gamma', category: 'Productivity', description: 'Make beautiful presentations and docs in minutes.', tags: ['Slides', 'Design'], color: '#f3e4ce', mark: 'G', price: 'Free plan', rating: '4.6', url: 'https://gamma.app' },
];

const categories = ['All tools', 'Writing', 'Image & Video', 'Productivity', 'Research', 'Development', 'Audio'];

function Icon({ name, size = 18 }: { name: 'search' | 'arrow' | 'plus' | 'spark' | 'close' | 'chevron'; size?: number }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true };
  if (name === 'search') return <svg {...common}><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></svg>;
  if (name === 'arrow') return <svg {...common}><path d="M5 12h13M13 6l6 6-6 6" /></svg>;
  if (name === 'plus') return <svg {...common}><path d="M12 5v14M5 12h14" /></svg>;
  if (name === 'close') return <svg {...common}><path d="m6 6 12 12M18 6 6 18" /></svg>;
  if (name === 'chevron') return <svg {...common}><path d="m7 9 5 5 5-5" /></svg>;
  return <svg {...common}><path d="m12 3 1.5 6.5L20 12l-6.5 1.5L12 20l-1.5-6.5L4 12l6.5-2.5L12 3Z" /></svg>;
}

export default function Home() {
  const [active, setActive] = useState('All tools');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('Featured');
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setShowModal(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, []);

  const filtered = useMemo(() => {
    const result = tools.filter((tool) => (active === 'All tools' || tool.category === active) && `${tool.name} ${tool.description} ${tool.tags.join(' ')}`.toLowerCase().includes(query.toLowerCase()));
    if (sort === 'A–Z') return [...result].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === 'Top rated') return [...result].sort((a, b) => Number(b.rating) - Number(a.rating));
    return result;
  }, [active, query, sort]);

  return <main className="noise min-h-screen overflow-hidden">
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-10">
      <a className="focus-ring flex items-center gap-2 rounded-md text-[17px] font-bold tracking-[-0.04em]" href="#top"><span className="grid h-8 w-8 place-items-center rounded-[10px] bg-ink text-white"><Icon name="spark" size={16} /></span> ai hub</a>
      <div className="hidden items-center gap-8 text-sm font-medium text-ink/65 md:flex"><a className="focus-ring rounded" href="#explore">Explore tools</a><a className="focus-ring rounded" href="#about">How it works</a></div>
      <button onClick={() => setShowModal(true)} className="focus-ring flex min-h-11 items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-ink/80"><Icon name="plus" size={16} /> <span className="hidden sm:inline">Submit a tool</span><span className="sm:hidden">Submit</span></button>
    </nav>

    <section id="top" className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pt-20 lg:px-10 lg:pb-24">
      <div className="max-w-4xl">
        <p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-coral"><span className="h-2 w-2 rounded-full bg-coral" /> The thoughtful AI directory</p>
        <h1 className="max-w-4xl font-display text-[clamp(3.5rem,8vw,7.5rem)] font-medium leading-[.93] tracking-[-0.065em] text-ink">Find the right<br /><em className="text-coral">AI tool</em> for the job.</h1>
        <p className="mt-7 max-w-xl text-[17px] leading-7 text-ink/65">A carefully curated collection of useful, delightful, and actually good AI tools — organized for humans, not algorithms.</p>
      </div>
      <div className="relative mt-10 max-w-2xl"><label className="sr-only" htmlFor="search">Search AI tools</label><Icon name="search" size={21} /><input id="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search tools, categories, use cases..." className="focus-ring ml-3 w-[calc(100%-34px)] border-b border-ink/25 bg-transparent py-4 text-base text-ink placeholder:text-ink/35 outline-none transition focus:border-coral" />{query && <button type="button" onClick={() => setQuery('')} aria-label="Clear search" className="focus-ring absolute right-0 top-3 grid h-10 w-10 place-items-center rounded-full text-ink/50 transition hover:bg-ink/5 hover:text-ink"><Icon name="close" size={16} /></button>}</div>
    </section>

    <section id="explore" className="border-t border-ink/10 bg-white/45 px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
      <div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center"><div className="flex flex-wrap gap-2" role="tablist" aria-label="Tool categories">{categories.map((category) => <button key={category} onClick={() => setActive(category)} role="tab" aria-selected={active === category} className={`focus-ring min-h-10 rounded-full border px-4 py-2 text-sm font-medium transition ${active === category ? 'border-ink bg-ink text-white' : 'border-ink/15 bg-transparent text-ink/65 hover:border-ink/35 hover:text-ink'}`}>{category}</button>)}</div><label className="flex items-center gap-2 text-sm text-ink/55">Sort by <select value={sort} onChange={(e) => setSort(e.target.value)} className="focus-ring min-h-10 rounded-full border border-ink/15 bg-transparent px-3 font-medium text-ink outline-none"><option>Featured</option><option>Top rated</option><option>A–Z</option></select></label></div>
        <div className="mt-12 flex items-end justify-between"><div><p className="text-sm font-bold uppercase tracking-[.14em] text-coral">{active}</p><h2 className="mt-2 font-display text-4xl tracking-[-.045em] sm:text-5xl">Worth your attention</h2></div><p className="hidden text-sm text-ink/50 sm:block">{filtered.length} {filtered.length === 1 ? 'tool' : 'tools'} found</p></div>
        {filtered.length ? <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{filtered.map((tool) => <article key={tool.name} className="lift group flex min-h-[285px] flex-col rounded-[22px] border border-ink/10 bg-white p-5 shadow-[0_8px_30px_rgba(23,33,31,.04)]"><div className="flex items-start justify-between"><div className="grid h-12 w-12 place-items-center rounded-[15px] text-lg font-bold" style={{ backgroundColor: tool.color }}>{tool.mark}</div>{tool.featured && <span className="rounded-full bg-sage px-2.5 py-1 text-[10px] font-bold uppercase tracking-[.12em] text-ink/65">Editor’s pick</span>}</div><div className="mt-6"><div className="flex items-center gap-2"><h3 className="text-[19px] font-bold tracking-[-.03em]">{tool.name}</h3><span className="text-xs text-ink/50">★ {tool.rating}</span></div><p className="mt-2 text-sm leading-6 text-ink/60">{tool.description}</p></div><div className="mt-auto flex items-center justify-between pt-6"><div className="flex gap-1.5">{tool.tags.map((tag) => <span key={tag} className="rounded-md bg-cream px-2 py-1 text-[10px] font-semibold text-ink/55">{tag}</span>)}</div><a href={tool.url} target="_blank" rel="noreferrer" aria-label={`Visit ${tool.name} website`} className="focus-ring grid h-9 w-9 place-items-center rounded-full border border-ink/15 text-ink/70 transition group-hover:border-coral group-hover:bg-coral group-hover:text-white"><Icon name="arrow" size={16} /></a></div></article>)}</div> : <div className="mt-8 rounded-[22px] border border-dashed border-ink/20 p-12 text-center text-ink/60">No tools match that search yet. Try another phrase.</div>}
        <div className="mt-16 flex flex-col items-center justify-between gap-5 rounded-[22px] bg-ink px-6 py-8 text-white sm:flex-row sm:px-10"><div><p className="font-display text-2xl">Know a tool we should know?</p><p className="mt-1 text-sm text-white/60">Help make AI more useful for everyone.</p></div><button onClick={() => setShowModal(true)} className="focus-ring flex min-h-11 items-center gap-2 rounded-full bg-coral px-5 py-3 text-sm font-bold transition hover:bg-[#ff8065]"><Icon name="plus" size={17} /> Recommend a tool</button></div>
      </div>
    </section>

    <footer id="about" className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-10 text-sm text-ink/50 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10"><p>© 2025 ai hub. Made for curious people.</p><div className="flex gap-5"><a className="focus-ring rounded hover:text-ink" href="#top">Back to top</a><a className="focus-ring rounded hover:text-ink" href="mailto:hello@aihub.tools">Contact</a></div></footer>

    {showModal && <div className="fixed inset-0 z-50 grid place-items-center bg-ink/40 p-5 backdrop-blur-sm" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) setShowModal(false); }}><div role="dialog" aria-modal="true" aria-labelledby="dialog-title" className="w-full max-w-lg rounded-[24px] bg-cream p-6 shadow-2xl sm:p-8"><div className="flex items-start justify-between"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-coral">Make the directory better</p><h2 id="dialog-title" className="mt-2 font-display text-4xl tracking-[-.05em]">Recommend a tool</h2></div><button onClick={() => setShowModal(false)} aria-label="Close dialog" className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-ink/10"><Icon name="close" /></button></div>{submitted ? <div className="py-12 text-center"><div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-sage"><Icon name="spark" /></div><h3 className="mt-5 font-display text-3xl">Thank you!</h3><p className="mt-2 text-sm text-ink/60">We’ll take a look at your recommendation.</p></div> : <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="mt-7 space-y-4"><div><label htmlFor="tool-name" className="mb-2 block text-sm font-semibold">Tool name</label><input required id="tool-name" placeholder="e.g. NotebookLM" className="focus-ring w-full rounded-xl border border-ink/15 bg-white px-4 py-3 outline-none" /></div><div><label htmlFor="tool-url" className="mb-2 block text-sm font-semibold">Website URL</label><input required type="url" id="tool-url" placeholder="https://" className="focus-ring w-full rounded-xl border border-ink/15 bg-white px-4 py-3 outline-none" /></div><div><label htmlFor="tool-why" className="mb-2 block text-sm font-semibold">Why is it worth sharing?</label><textarea required id="tool-why" rows={3} placeholder="Tell us what makes it useful..." className="focus-ring w-full resize-none rounded-xl border border-ink/15 bg-white px-4 py-3 outline-none" /></div><button className="focus-ring mt-2 flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-ink/80">Send recommendation <Icon name="arrow" size={16} /></button></form>}</div></div>}
  </main>;
}

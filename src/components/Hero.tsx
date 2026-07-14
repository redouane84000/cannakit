function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function Hero() {
  return (
    <section className="px-4 pt-6 md:px-8 md:pt-10">
      <button
        type="button"
        onClick={() => scrollTo('shop')}
        data-cursor="hover"
        aria-label="Découvrir la boutique — L'essentiel du CBD pour votre bien-être"
        className="group mx-auto block w-full max-w-7xl overflow-hidden rounded-[28px] border border-line bg-white shadow-[0_16px_48px_rgba(46,97,69,0.1)]"
      >
        <div className="aspect-[3/2] w-full overflow-hidden sm:aspect-[21/9] md:aspect-[8/3]">
          <img
            src="/products/gpt.png"
            alt="CannaKit — L'essentiel du CBD pour votre bien-être. Fleurs, huiles et accessoires."
            fetchPriority="high"
            className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          />
        </div>
      </button>
    </section>
  )
}

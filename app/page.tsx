/**
 * Home Page
 * Hero section with large heading and introductory paragraph
 * Responsive typography scales from mobile to desktop
 * Grid layout prepares for future content sections
 */
export default function HomePage() {
  return (
    <main className="py-20">
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7">
            <h1 className="text-4xl sm:text-5xl md:text-[56px] lg:text-[72px] leading-tight font-semibold tracking-tight mb-8">
              Building Africa’s Foundational
              <br />
              Infrastructure
            </h1>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 max-w-3xl">
              PRIMA is an African infrastructure institution that designs, builds,
              acquires, and safeguards the foundational systems upon which
              societies depend — so Africa can own, operate, and sustain its
              infrastructure for generations.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

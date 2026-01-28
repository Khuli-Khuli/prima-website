export default function Domains() {
  return (
    <main className="max-w-5xl mx-auto py-24 px-6">
      <h1 className="text-3xl font-semibold tracking-tight mb-10">
        Infrastructure Domains
      </h1>

      <div className="space-y-12">
        <section>
          <h2 className="text-xl font-medium mb-3">Energy Systems</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Generation, transmission, storage, and governance of energy
            infrastructure designed for long-term national resilience.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium mb-3">Transport & Logistics</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Roads, rail, ports, and logistics networks that enable
            regional integration and economic continuity.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium mb-3">Digital & Data Infrastructure</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Fiber, compute, identity, and data systems treated as sovereign
            infrastructure layers rather than private utilities.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium mb-3">Water & Environmental Systems</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Water security, waste systems, and environmental safeguards
            integrated into long-term national planning.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium mb-3">Institutional Infrastructure</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Legal frameworks, governance mechanisms, and operational
            institutions required to sustain physical infrastructure.
          </p>
        </section>
      </div>
    </main>
  );
}

export default function PillarsPage() {
  const pillars = [
    {
      title: "Digital Infrastructure",
      text:
        "Digital infrastructure determines how information moves, how systems coordinate, and how economies scale. PRIMA develops and acquires digital systems designed for interoperability, institutional continuity, and long-term national use.",
    },
    {
      title: "Energy Systems",
      text:
        "Reliable energy underpins every modern system. PRIMA develops and invests in energy generation, transmission, and resilience infrastructure that supports long-term economic growth and domestic control.",
    },
    {
      title: "Transport & Physical Connectivity",
      text:
        "Movement determines integration. PRIMA focuses on transport and logistics systems that reduce fragmentation, enable trade, and strengthen regional connectivity.",
    },
    {
      title: "Water, Food & Environmental Systems",
      text:
        "Societies endure only when life-sustaining systems are secure. PRIMA safeguards infrastructure related to water access, food systems, and environmental resilience as long-term public assets.",
    },
    {
      title: "Industrial Infrastructure",
      text:
        "Industrial capacity determines economic independence. PRIMA enables infrastructure that supports manufacturing, production, and local value creation across African economies.",
    },
    {
      title: "Institutional Coordination",
      text:
        "Infrastructure without governance deteriorates. PRIMA installs institutional frameworks, standards, and coordination mechanisms that ensure continuity beyond leadership cycles.",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto py-24 text-lg leading-relaxed">
      <h2 className="text-2xl font-medium mb-6">
        The Six Pillars of Africa
      </h2>

      <p className="mb-12 leading-relaxed text-gray-700 max-w-3xl">
        Africa’s long-term development depends on a small number of foundational
        systems. PRIMA organizes its work around six pillars that determine
        societal continuity, economic resilience, and institutional sovereignty.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="border rounded-2xl p-6"
          >
            <h3 className="text-lg font-semibold mb-2">
              {pillar.title}
            </h3>
            <p className="text-gray-700">
              {pillar.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

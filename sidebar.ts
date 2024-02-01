export const sidebar = [
  {
    label: "Missal",
    items: [
      { label: "Dia", link: "/missal/dia" },
      { label: "Ordo", link: "/missal/ordo" },
      {
        label: "Advento",
        collapsed: true,
        autogenerate: { directory: "missal/advento" },
      },
      {
        label: "Natal",
        collapsed: true,
        autogenerate: { directory: "missal/natal" },
      },
      {
        label: "Epifania",
        collapsed: true,
        autogenerate: { directory: "missal/epifania" },
      },
      {
        label: "Quaresma",
        collapsed: true,
        autogenerate: { directory: "missal/quaresma" },
      },
      {
        label: "Páscoa",
        collapsed: true,
        autogenerate: { directory: "missal/pascoa" },
      },
      {
        label: "Pentecostes",
        collapsed: true,
        autogenerate: { directory: "missal/pentecostes" },
      },
      {
        label: "Santos",
        collapsed: true,
        autogenerate: { directory: "missal/santos" },
      },
      {
        label: "Comum",
        collapsed: true,
        autogenerate: { directory: "missal/comum" },
      },
      {
        label: "Votivas",
        collapsed: true,
        autogenerate: { directory: "missal/votivas" },
      },
      {
        label: "Orações Diversas",
        collapsed: true,
        autogenerate: { directory: "missal/oracoesdiversas" },
      },
      {
        label: "Prefácios",
        collapsed: true,
        autogenerate: { directory: "missal/prefacios" },
      },
      {
        label: "Orações Complementares",
        collapsed: true,
        autogenerate: { directory: "missal/complementares" },
      },
    ],
  },
  {
    label: "Devocionario",
    items: [
      { label: "Rosario", link: "/devocionario/rosario" },
      {
        label: "Salterio",
        collapsed: true,
        autogenerate: { directory: "devocionario/salterio" },
      },
      { label: "Adoração", link: "/devocionario/adoracao" },
      {
        label: "Oracões do dia",
        collapsed: true,
        items: [
          { label: "Oração da Manhã", link: "/devocionario/dia/oracaomanha" },
          { label: "Angelus", link: "/devocionario/dia/angelus" },
          { label: "Oração da Noite", link: "/devocionario/dia/oracaonoite" },
        ],
      },
      {
        label: "Pequeno Oficio de Nossa Senhora",
        collapsed: true,
        items: [
          { label: "Matinas", link: "/devocionario/oficio/matinas" },
          { label: "Laudes", link: "/devocionario/oficio/laudes" },
          { label: "Prima", link: "/devocionario/oficio/prima" },
          { label: "Terça", link: "/devocionario/oficio/terca" },
          { label: "Sexta", link: "/devocionario/oficio/sexta" },
          { label: "Noa", link: "/devocionario/oficio/noa" },
          { label: "Vésperas", link: "/devocionario/oficio/vesperas" },
          { label: "Completas", link: "/devocionario/oficio/completas" },
        ],
      },
      {
        label: "Orações",
        collapsed: true,
        autogenerate: { directory: "devocionario/oracoes" },
      },
    ],
  },
  {
    label: "Fé",
    items: [
      {
        label: "Catecismo",
        link: "/fe/catecismo",
      },
      {
        label: "Verdades da Fé",
        link: "/fe/verdades",
      },
      {
        label: "Juramento anti-modernista",
        link: "/fe/juramento",
      },
    ],
  },
  {
    label: "Cãnticos",
    items: [
      {
        label: "Sacros",
        collapsed: true,
        autogenerate: { directory: "populares/sacros" },
      },
      {
        label: "Populares",
        collapsed: true,
        autogenerate: { directory: "canticos/populares" },
      },
    ],
  },
  {
    label: "Ritual",
    collapsed: true,
    autogenerate: { directory: "ritual" },
  },
];

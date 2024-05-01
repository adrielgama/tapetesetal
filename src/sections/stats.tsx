export const Stats = () => {
  const yearsOfExperience = new Date().getFullYear() - 1996

  const stats = [
    { title: 'Clientes Satisfeitos', value: 1200 },
    { title: 'Tapetes Produzidos', value: 3000 },
    { title: 'Anos de Experiência', value: yearsOfExperience },
  ]

  return (
    <div className="w-full bg-slate-50 py-12">
      <div className="container grid place-items-center items-center gap-10 md:grid-cols-3 md:gap-0">
        {stats.map(({ title, value }) => (
          <div className="flex flex-col items-center space-y-4" key={title}>
            <p className="text-4xl font-bold text-tet-gray-400 lg:text-5xl">
              {title.includes('Clientes') || title.includes('Tapetes')
                ? '+'
                : ''}
              {value}
            </p>
            <h3 className="text-gray-500">{title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

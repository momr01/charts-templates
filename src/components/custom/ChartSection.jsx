const ChartSection = ({ chart }) => {
  return (
    <section className="p-5 mb-20 section_shadow">
      <div className="flex justify-center items-center mt-2 mb-5">
        <h2 className="text-xl md:text-2xl text-slate-800 font-bold text-center">
          {chart.title}
        </h2>
      </div>
      <div className="italic text-sm text-center mb-10">{chart.info}</div>

      <section className="grid grid-cols-12 gap-6">
        {chart.data.map((comp) => comp.component())}
      </section>
    </section>
  );
};

export default ChartSection;

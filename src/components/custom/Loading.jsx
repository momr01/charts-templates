const Loading = () => {
  return (
    <section
      className="flex justify-center items-center mb-5"
      //className="justify-center items-center flex orders-table"
    >
      <div className="loader"></div>
      <span
        className="text-indigo-500 ml-3 font-semibold"
        //className="ml-3 text-primary font-semibold"
      >
        Loading
      </span>
    </section>
  );
};

export default Loading;

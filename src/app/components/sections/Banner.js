export default function Banner() {
  return (
    <div className="hero py-10 bg-black text-white rounded-lg my-10 flex justify-center items-center text-center">
      <div className="max-w-2xl p-8">
        <h1 className="text-5xl font-bold">Vous avez aimé cette démo ?</h1>
        <p className="py-6 text-gray-400">
          Alors foncez voir ce qui se trouve sur mon portfolio
        </p>
        <a
          href="https://pphilibert-web.eu/"
          target="_blank"
          className="text-sm font-semibold leading-6 text-white uppercase bg-gradient-to-r from-blue-500 to-blue-700 py-2 px-4 rounded-lg"
        >
          Mon portfolio<span aria-hidden="true"> →</span>
        </a>
      </div>
    </div>
  );
}

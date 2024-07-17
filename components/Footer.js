const sunIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="24"
    fill="none"
    viewBox="0 0 25 24"
    className="dark:opacity-50"
  >
    <g
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      clipPath="url(#clip0_192_823)"
    >
      <path d="M12.5 17a5 5 0 100-10 5 5 0 000 10zM12.5 1v2M12.5 21v2M4.72 4.22l1.42 1.42M18.86 18.36l1.42 1.42M1.5 12h2M21.5 12h2M4.72 19.78l1.42-1.42M18.86 5.64l1.42-1.42"></path>
    </g>
    <defs>
      <clipPath id="clip0_192_823">
        <path
          className="fill-current text-white"
          d="M0 0H24V24H0z"
          transform="translate(.5)"
        ></path>
      </clipPath>
    </defs>
  </svg>
);

const moonIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    fill="none"
    viewBox="0 0 21 20"
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="stroke-current text-gray-400 dark:text-white"
      d="M19.5 10.79A9 9 0 119.71 1a7 7 0 009.79 9.79v0z"
    ></path>
  </svg>
);

const ThemeSwitcher = () => {
  return (
    <div className="flex mt-6 bg-white h-12 justify-center dark:bg-gray-300 rounded-3xl p-1">
      <button
        type="button"
        aria-label="Use Dark Mode"
        onClick={() => {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        }}
        className="flex items-center h-full pr-2 bg-gray-500 dark:bg-black  rounded-l-3xl  justify-center align-center p-2 w-24  transition"
      >
        {moonIcon}
      </button>

      <button
        type="button"
        aria-label="Use Light Mode"
        onClick={() => {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }}
        className="flex items-center h-full pr-2 bg-black dark:bg-gray-500  rounded-r-3xl  justify-center align-center p-2 w-24  transition"
      >
        {sunIcon}
      </button>
    </div>
  );
};

export default function Footer({ copyrightText }) {
  return (
    <footer className="py-16 flex flex-col items-center my-32">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
        Request a alert!  🚀
      </h2>
      <p className="text-sm text-gray-700 dark:text-gray-200 mt-1 mb-10">
        Send me you requested character and famous quote...
      </p>
      <form name="contact" class="max-w-lg mx-auto p-4 bg-white/10 opacity-1 shadow-md rounded-lg mb-32 w-96" ethod="POST" data-netlify="true">
        <div class="mb-4">
          <label class="block text-gray-200 text-sm font-bold mb-2" for="name">Character</label>
          <input
            type="text"
            name="character"
            id="character"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-200 text-sm font-bold mb-2" for="name">Famous quote</label>
          <input
            type="text"
            name="quote"
            id="quote"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        {/* <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div> */}
        <div class="flex items-center justify-between">
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send
          </button>
        </div>
      </form>

      <ThemeSwitcher />
      {/* <p className="text-white mb-3 opacity-60 bg-red-800 rounded-md px-3 mt-6">
        {copyrightText}
      </p> */}
    </footer>
  );
}

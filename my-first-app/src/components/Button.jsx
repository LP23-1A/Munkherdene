function Button() {
  return (
    <div className="flex gap-3 flex-col">
      <div className="flex gap-3">
        <button className="w-28 h-7 rounded-lg bg-gray-200 dark:bg-gray-700  dark:text-white">
          React
        </button>
        <button className="w-28 h-7 rounded-lg bg-gray-200  dark:bg-gray-700   dark:text-white">
          Next.js
        </button>
        <button className="w-28 h-7 rounded-lg bg-gray-200  dark:bg-gray-700   dark:text-white">
          Typescript
        </button>
        <button className="w-28 h-7 rounded-lg bg-gray-200  dark:bg-gray-700   dark:text-white">
          Nest.js
        </button>
      </div>
      <div className="flex gap-3">
        <button className="w-28 h-7 rounded-lg bg-gray-200  dark:bg-gray-700   dark:text-white">
          PostgreSQL
        </button>
        <button className="w-28 h-7 rounded-lg bg-gray-200  dark:bg-gray-700   dark:text-white">
          Tailwindcss
        </button>
        <button className="w-28 h-7 rounded-lg bg-gray-200  dark:bg-gray-700   dark:text-white">
          Figma
        </button>
        <button className="w-28 h-7 rounded-lg bg-gray-200  dark:bg-gray-700   dark:text-white">
          Cypress
        </button>
      </div>
      <div className="flex gap-3">
        <button className="w-28 h-7 rounded-lg bg-gray-200  dark:bg-gray-700  dark:text-white">
          Storybook
        </button>
        <button className="w-28 h-7 rounded-lg bg-gray-200  dark:bg-gray-700  dark:text-white">
          Git
        </button>
      </div>
    </div>
  );
}
export default Button;

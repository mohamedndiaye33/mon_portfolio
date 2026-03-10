const ThemeToggle = ({ isDark, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className={`px-4 py-2 rounded-full border-2 font-semibold transition-all ${
        isDark
          ? "border-white hover:bg-white hover:text-black"
          : "border-black hover:bg-black hover:text-white "
      }`}
    >
      {isDark ? "Light" : "Dark"}
    </button>
  );
};

export default ThemeToggle;
function getRoundedType(rounded) {
  if (!rounded) return "rounded-md";
  return "rounded-full";
}

function getTypeClass(type) {
  if (type === "primary") return "bg-pm-cyan text-white";
  if (type === "secondary") return "text-nt-grayish-violet";
  return "";
}

function getSizeClass(size) {
  if (size === "large") return "px-6 py-3 font-bold text-lg";

  return "";
}
function Button({ children, rounded = false, type = "", size, width }) {
  return (
    <button
      className={`${getRoundedType(rounded)} ${getTypeClass(
        type
      )} ${getSizeClass(
        size
      )} px-4 py-2 text-sm hover:opacity-60 ${width} transition-all`}
    >
      {children}
    </button>
  );
}

export default Button;

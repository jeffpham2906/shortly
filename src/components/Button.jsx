function getRoundedType(rounded) {
  if (!rounded) return "rounded-md";
  return "rounded-full";
}

function getTypeClass(type) {
  if (type === "primary")
    return "bg-pm-cyan text-white hover:bg-[hsl(180,57%,75%)]";
  if (type === "secondary") return "text-nt-grayish-violet hover:opacity-50";
  if (type === "actived")
    return "bg-pm-dark-violet text-white hover:opacity-90";
  return "hover:opacity-50";
}

function getSizeClass(size) {
  if (size === "large") return "px-6 py-3 font-bold text-lg";
  return "";
}
function Button({
  children,
  rounded = false,
  type = "",
  size,
  width,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`${getRoundedType(rounded)} ${getTypeClass(
        type
      )} ${getSizeClass(size)} px-4 py-2 text-sm ${width} transition-all `}
    >
      {children}
    </button>
  );
}

export default Button;

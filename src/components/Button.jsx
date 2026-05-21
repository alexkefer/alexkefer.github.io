import { Link } from "react-router-dom";

const BASE =
  "inline-flex items-center gap-2 px-4 py-2 rounded-lg " +
  "bg-black/25 hover:bg-black/40 " +
  "text-white font-semibold transition";

/**
 * Unified button component.
 * - Pass `to` for an internal React Router link.
 * - Pass `href` for an external anchor (add `target` / `rel` as needed).
 * - Omit both to render a plain <button>.
 * - Extra Tailwind classes can be added via `className`.
 */
// eslint-disable-next-line react/prop-types
const Button = ({
  to,
  href,
  target,
  rel,
  onClick,
  className = "",
  children,
}) => {
  const cls = className ? `${BASE} ${className}` : BASE;

  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
};

export default Button;

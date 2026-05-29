type CircleArrowButtonProps = {
  direction: "previous" | "next";
  ariaLabel: string;
  onClick?: () => void;
  className?: string;
};

export function CircleArrowButton({
  direction,
  ariaLabel,
  onClick,
  className = "flex",
}: CircleArrowButtonProps) {
  const path =
    direction === "previous" ? "M15 18L9 12L15 6" : "M9 6L15 12L9 18";

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={`h-10 w-10 items-center justify-center rounded-full border border-surface-container-high text-on-surface-variant ${className}`}
    >
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          d={path}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    </button>
  );
}

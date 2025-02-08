import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  link?: string; // Optional for cases where it's not a link
  disabled?: boolean;
  type?: "button" | "submit" | "reset"; // Defaults to 'button'
  onClick?: () => void; // Optional for additional behavior
}

function Button({
  text,
  link,
  disabled = false,
  type = "button",
  onClick,
}: ButtonProps) {
  if (link) {
    return (
      <Link
        className={`btn ${disabled ? "btn-disabled" : "btn-primary"}`}
        href={link}
      >
        {text}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={`btn ${disabled ? "btn-disabled" : "btn-primary"}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;

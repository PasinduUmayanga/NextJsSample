import Link from "next/link";

type BackButtonProps = {
  href: string;
  label: string;
};

export default function BackButton({ href, label }: BackButtonProps) {
  return (
    <div style={styles.wrapper}>
      <Link href={href} style={styles.button}>
        {label}
      </Link>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    marginBottom: 16,
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
  button: {
    alignItems: "center",
    background: "#ffffff",
    border: "1px solid #d1d5db",
    borderRadius: 8,
    boxShadow: "0 8px 16px rgba(15, 23, 42, 0.08)",
    color: "#111827",
    display: "inline-flex",
    fontSize: 14,
    fontWeight: 800,
    justifyContent: "center",
    minHeight: 40,
    padding: "9px 13px",
    textDecoration: "none",
  },
};

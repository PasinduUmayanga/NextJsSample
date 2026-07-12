type SharedUiCardProps = {
  description: string;
  title: string;
};

export default function SharedUiCard({ description, title }: SharedUiCardProps) {
  // Shared UI components receive data through props.
  // Keep them reusable so pages can compose the same UI in many places.
  return (
    <article style={styles.card}>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
    </article>
  );
}

const styles: Record<string, React.CSSProperties> = {
  card: {
    background: "#ecfdf5",
    border: "1px solid #a7f3d0",
    borderRadius: 8,
    padding: 12,
  },
  title: {
    color: "#047857",
    fontSize: 16,
    fontWeight: 800,
    margin: 0,
  },
  description: {
    color: "#374151",
    fontSize: 14,
    lineHeight: 1.5,
    margin: "8px 0 0",
  },
};

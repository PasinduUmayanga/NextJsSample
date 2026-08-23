import styles from "./code-block.module.css";

type Token = {
  color: string;
  text: string;
};

type CodeBlockProps = {
  children: string;
  compact?: boolean;
};

const TOKEN_PATTERN =
  /(\{\/\*.*?\*\/\}|\/\*.*?\*\/|\/\/.*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|<\/?[A-Z][A-Za-z0-9]*(?=[\s>/])|<\/?[a-z][A-Za-z0-9-]*(?=[\s>/])|\b(?:async|await|const|export|default|function|import|from|return|type|if|else|null|true|false|new|class|extends|interface)\b|\b\d+\b)/g;

const COLORS = {
  base: "#d6deeb",
  comment: "#637777",
  keyword: "#c792ea",
  number: "#f78c6c",
  string: "#ecc48d",
  tag: "#ff6363",
};

export default function CodeBlock({ children, compact = false }: CodeBlockProps) {
  const className = compact
    ? `${styles.block} ${styles.compact}`
    : styles.block;

  return (
    <pre className={className}>
      <code>
        {children.split("\n").map((line, lineIndex, lines) => (
          <span key={`${line}-${lineIndex}`}>
            {highlightLine(line).map((token, tokenIndex) => (
              <span
                key={`${token.text}-${tokenIndex}`}
                style={{ color: token.color }}
              >
                {token.text}
              </span>
            ))}
            {lineIndex < lines.length - 1 ? "\n" : null}
          </span>
        ))}
      </code>
    </pre>
  );
}

function highlightLine(line: string) {
  const tokens: Token[] = [];
  let cursor = 0;

  for (const match of line.matchAll(TOKEN_PATTERN)) {
    const text = match[0];
    const index = match.index ?? 0;

    if (index > cursor) {
      tokens.push({ color: COLORS.base, text: line.slice(cursor, index) });
    }

    tokens.push({ color: getTokenColor(text), text });
    cursor = index + text.length;
  }

  if (cursor < line.length) {
    tokens.push({ color: COLORS.base, text: line.slice(cursor) });
  }

  return tokens.length > 0 ? tokens : [{ color: COLORS.base, text: line }];
}

function getTokenColor(token: string) {
  if (
    token.startsWith("//") ||
    token.startsWith("/*") ||
    token.startsWith("{/*")
  ) {
    return COLORS.comment;
  }

  if (
    token.startsWith('"') ||
    token.startsWith("'") ||
    token.startsWith("`")
  ) {
    return COLORS.string;
  }

  if (token.startsWith("<")) {
    return COLORS.tag;
  }

  if (/^\d+$/.test(token)) {
    return COLORS.number;
  }

  return COLORS.keyword;
}

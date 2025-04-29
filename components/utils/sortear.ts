export function sortear(): "cara" | "coroa" {
  return Math.random() < 0.5 ? "cara" : "coroa";
}

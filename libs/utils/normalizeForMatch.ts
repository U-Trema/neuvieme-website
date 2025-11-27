export function normalizeForMatch(str: string): string {
  return str
    ?.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // accents
    .toLowerCase()
    .replace(/[^a-z0-9]/g, ""); // on garde que lettres/chiffres
}

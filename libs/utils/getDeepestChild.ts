export function getDeepestChild(element: any) {
  // Si l'élément n'existe pas, on retourne null
  if (!element) return null;

  if (Array.isArray(element)) return getDeepestChild(element[0]);

  // Si l'élément n'a pas de props ou de children, c'est une feuille
  if (!element.props || !element.props.children) return element.replace(' ', '_');

  const children = element.props.children;

  // Si children est un tableau, on prend le premier élément
  if (Array.isArray(children)) return getDeepestChild(children[0]);

  // Sinon, on continue avec children directement
  return getDeepestChild(children);
}
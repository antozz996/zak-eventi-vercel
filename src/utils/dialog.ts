export function isolateDialog(dialog: HTMLElement | null) {
  const elements: HTMLElement[] = [];
  let node = dialog;
  while (node?.parentElement) {
    for (const sibling of node.parentElement.children) {
      if (sibling !== node && sibling instanceof HTMLElement) elements.push(sibling);
    }
    if (node.parentElement === document.body) break;
    node = node.parentElement;
  }
  const prior = elements.map((element) => element.inert);
  elements.forEach((element) => { element.inert = true; });
  return () => elements.forEach((element, index) => { element.inert = prior[index]; });
}

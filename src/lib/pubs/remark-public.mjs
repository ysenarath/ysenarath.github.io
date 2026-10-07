// Render-time touches for exported publication summaries:
//  - drops the TL;DR section (the page shows it as the lede)
//  - puts each figure's caption and a credit line inside the figure block
//  - highlights bold text that states a result (contains a number other than a label like RQ1)
const textOf = (n) => (n.type === 'text' || n.type === 'inlineCode' ? n.value : (n.children || []).map(textOf).join(''));

function shortCite(fm) {
  const authors = fm.authors || [];
  const last = (authors[0] || '').split(' ').pop();
  return `${last}${authors.length > 1 ? ' et al.' : ''}, ${fm.venue_short} ${fm.year}`;
}

export default function remarkPublic() {
  return (tree, file) => {
    const fm = file.data?.astro?.frontmatter || {};
    if (!fm.bibkey) return; // only publication summaries

    const out = [];
    let skipping = false;
    for (const node of tree.children) {
      if (node.type === 'heading' && node.depth <= 2) skipping = /^tl;dr/i.test(textOf(node).trim());
      if (!skipping) out.push(node);
    }

    const credit = `Figure from ${shortCite(fm)}.`;
    const kept = [];
    for (let i = 0; i < out.length; i++) {
      const n = out[i];
      const isImg = n.type === 'paragraph' && n.children.some((c) => c.type === 'image');
      if (!isImg) { kept.push(n); continue; }
      const next = out[i + 1];
      if (next && next.type === 'paragraph' && next.children.length === 1 && next.children[0].type === 'emphasis') {
        n.children.push(...next.children);
        i++;
      }
      n.children.push({ type: 'html', value: `<span class="fig-credit">${credit}</span>` });
      kept.push(n);
    }
    tree.children = kept;

    const mark = (node) => {
      if (node.type === 'strong' && /\d/.test(textOf(node).replace(/\b(RQ|Eq|Eqs|Fig|Table|M|D_?[A-Z]|T)\.?\s?\d+\b/gi, '')))
        node.data = { ...(node.data || {}), hProperties: { className: ['hl'] } };
      (node.children || []).forEach(mark);
    };
    mark(tree);
  };
}

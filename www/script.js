document.getElementById('loadSite').addEventListener('click', () => {
  const site = document.getElementById('siteSelector').value;
  const frame = document.getElementById('browserFrame');
  frame.src = site;

  frame.onload = () => {
    const blockScript = `
      // Hide YouTube Shorts
      document.querySelectorAll('ytd-rich-section-renderer[section-identifier="shorts"]').forEach(e => e.remove());
      // Hide Facebook Reels
      document.querySelectorAll('[aria-label="Reels"], a[href*="/reel/"]').forEach(e => e.remove());
    `;
    frame.contentWindow.eval(blockScript);
  };
});

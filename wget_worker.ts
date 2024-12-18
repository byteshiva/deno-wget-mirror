self.onmessage = (e) => {
  const { url, outputDir } = e.data;

  console.log(`🚀 Mirroring website: ${url} -> ${outputDir}`);

  try {
    const cmd = new Deno.Command("wget", {
      args: [
        "--mirror",
        "--convert-links",
        "--adjust-extension",
        "--page-requisites",
        "--no-parent",
        "--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "--no-check-certificate",
        "-e", "robots=off",
        "--directory-prefix", outputDir,
        url,
      ],
    });

    const { success, stderr } = cmd.outputSync();

    if (success) {
      self.postMessage(`✅ Successfully mirrored website to ${outputDir}`);
    } else {
      const errorMsg = new TextDecoder().decode(stderr);
      self.postMessage(`❌ Failed to mirror website: ${url}\nError: ${errorMsg}`);
    }
  } catch (err) {
    self.postMessage(`❌ Error: ${err.message}`);
  }
};


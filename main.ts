const url = Deno.args[0];
const outputDir = Deno.args[1] || "./mirrored_website";

if (!url) {
  console.error("Usage: deno run --allow-run main.ts <URL> [output_directory]");
  Deno.exit(1);
}

const worker = new Worker(
  new URL("./wget_worker.ts", import.meta.url).href,
  { type: "module", deno: { permissions: "inherit" } },
);

worker.postMessage({ url, outputDir });

worker.onmessage = (e) => {
  console.log(e.data);
  worker.terminate();
};

worker.onerror = (err) => {
  console.error(`❌ Worker error: ${err.message}`);
  worker.terminate();
};


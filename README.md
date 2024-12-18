# Deno Website Mirroring

Automate website mirroring with Deno Workers and `wget`. This project provides a simple and efficient solution for offline backups, local testing, and web archiving.

## Features

- Complete website clones with CSS, JavaScript, images, and proper file extensions.
- Automated execution with no manual intervention.
- Scalable handling of multiple websites.
- Reliable performance with `wget` and Deno.
- Customizable for various use cases.

## Quick Installation

1. **Open your terminal**.
2. **Run the following command** to install Deno and `wget`:

   ```sh
   nix-shell -I nixpkgs=https://github.com/NixOS/nixpkgs/archive/nixos-unstable.tar.gz -p deno wget -v
   ```

3. **Clone the repository**:

   ```sh
   git clone https://github.com/byteshiva/deno-wget-mirror
   cd deno-wget-mirror
   ```

4. **Run the script**:

   ```sh
   deno run --allow-read --allow-write --allow-run --unstable-worker-options main.ts <URL> [output_directory]
   ```
    
    Example:
    ```sh
    deno run --allow-read --unstable-worker-options --allow-run main.ts http://www.example.com/ ./my_website_clone
    ```
   

   Replace `<URL>` with the website you want to mirror and `[output_directory]` with your desired output path.

5. **Alternatively, run the script directly from the repository**:

   ```sh
   deno run --allow-read --unstable-worker-options --allow-run https://raw.githubusercontent.com/byteshiva/deno-wget-mirror/refs/heads/main/main.ts http://www.example.com/ ./my_website_clone_repo
   ```

## Why Use This Approach?

- **Reliability**: Combines `wget`’s performance with Deno’s scripting.
- **Efficiency**: Runs mirroring processes in isolated workers.
- **Automation**: Perfect for CI/CD pipelines and batch archiving.
- **Customizable**: Easily extend for multiple websites, logging, or retries.

## Use Cases

- Offline backups
- Local content testing
- Web archiving

## Conclusion

Simplify your website mirroring workflows with Deno Workers and `wget`. This solution is easy to use, scalable, and ready for production.

Try it today and enhance your productivity! 🚀

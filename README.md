# Haskell-Pandoc Project

This is a simple Haskell-based automation tool that uses **Pandoc** to convert Markdown files into HTML.  
It’s a practical demonstration of combining Haskell scripting, Markdown documentation, and static site generation.

---

##  Features

- ✅ Converts Markdown to clean, structured HTML using [Pandoc](https://pandoc.org/)
- ✅ Written in pure Haskell, using basic system utilities
- ✅ Produces readable, standalone HTML output
- ✅ Lightweight and easy to extend for additional formats or templates

---

##  Project Structure

Hspandoc/
├── Main.hs         -- The Haskell script that drives the conversion
├── README.md       -- The input Markdown file to be converted
├── output.html     -- The generated HTML output file
├── template.html   -- Custom HTML template used by Pandoc
├── style.css       -- Stylesheet to beautify the HTML output
└── script.js       -- JavaScript file for interactivity or behavior

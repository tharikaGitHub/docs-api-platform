# API Platform Documentation

This is the WSO2 API Platform documentation repository. This repository is open and we welcome your contributions!

To see the API Platform documentation site, go to [https://wso2.com/api-platform/docs/](https://wso2.com/api-platform/docs/)

## Important: `docs-shared-hooks` pin in this branch

`en/requirements.txt` installs the shared build-hook logic straight from a
git tag:
```
docs-shared-hooks @ git+https://github.com/senthuran16/docs-api-platform.git@shared-v5
```

That URL currently points at a personal fork (`senthuran16/docs-api-platform`),
used for this experiment. **When this moves to WSO2's own repository, this
line has to be updated on every product+version branch** — easy to miss,
since it's one line inside one config file, with no build-time error to
catch it (pip will happily keep installing from the old fork forever).

Separately: the `@shared-vN` tag itself needs bumping whenever
`docs_shared_hooks`'s actual code changes — a branch pinned to an old tag
silently keeps using old hook logic, with no warning either.

## Local Development Setup

This documentation site is built using [MkDocs](https://www.mkdocs.org/) with the Material theme. Follow these steps to set up and run the documentation locally.

### Prerequisites

- **Python 3.12** (required)
- **Node.js** (for spell checking and link validation tools)
- **Git** (for version control)

### Setup Instructions

#### Option 1: Automated Setup (Recommended)

Run the setup script for automatic environment configuration:

```bash
./setup-dev.sh
```

This script will:
- Check for Python 3.12+ 
- Create a virtual environment
- Install all Python dependencies
- Install Node.js validation tools (if Node.js is available)
- Provide next steps

#### Option 2: Manual Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/wso2/docs-api-platform.git
   cd docs-api-platform
   git checkout cloud-api-platform
   ```

2. **Create and activate a Python virtual environment:**
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install Python dependencies:**
   ```bash
   cd en
   pip install -r requirements.txt
   ```

4. **Install Node.js tools for spell checking and link validation (optional):**
   ```bash
   npm install -g markdown-spellcheck markdown-link-check
   ```

### Running the Documentation Locally

#### Quick Start (Documentation Only)
To start the development server with live reload:

```bash
cd en
python -m mkdocs serve
```

The documentation will be available at: [http://localhost:8000/api-platform/docs/cloud/platform/](http://localhost:8000/api-platform/docs/cloud/platform/)

This branch builds only the API Platform Cloud docs, so `http://localhost:8000/api-platform/docs/` itself returns 404. The Overview and Get Started links in the nav point at the `platform-common` deployment.

#### Custom Port
If port 8000 is already in use, specify a different port:

```bash
python -m mkdocs serve --dev-addr localhost:8001
```

#### Full Validation (with spell check and link validation)
If you have the Node.js tools installed, you can run the complete validation script:

```bash
./serve.sh
```

This script will:
- Run spell checking on all markdown files
- Validate all links in the documentation
- Build the static site
- List the generated files

### Building for Production

To build the static site for deployment:

```bash
cd en
python -m mkdocs build
```

The built site will be generated in the `site/` directory.

### Project Structure

```
docs-api-platform/               # cloud-api-platform branch
├── en/                          # English documentation
│   ├── docs/                    # Documentation source files
│   │   └── cloud/platform/      # API Platform Cloud pages
│   ├── theme/                   # Custom theme files
│   ├── devportal-theming/       # Theming assets
│   ├── mkdocs.yml               # MkDocs configuration
│   ├── redirects.yml            # Redirect map, loaded by the shared hooks
│   ├── requirements.txt         # Python dependencies
│   └── serve.sh                 # Validation and build script
├── Dockerfile                   # Choreo build for this branch
├── nginx.conf                   # Serves the built site
└── README.md                    # This file
```

### Making Changes

1. Edit markdown files in the `en/docs/` directory
2. The development server will automatically reload changes
3. Preview your changes at the local development URL
4. Test links and spelling using the validation tools
5. Submit a pull request with your changes

### Troubleshooting

**Virtual environment activation issues:**
- On macOS/Linux: `source venv/bin/activate`
- On Windows: `venv\Scripts\activate`

**Port conflicts:**
Use a different port with `--dev-addr localhost:XXXX`

**Missing Node.js tools:**
The spell checking and link validation are optional. You can still build and serve the documentation without them.

**Python version issues:**
This project requires Python 3.12. Check your version with `python3 --version`

## Documentation validation skill

This repository ships a Claude skill at `.claude/skills/wso2-doc-frontmatter/` that
writes and validates page frontmatter, and reports broken links and images. Claude
Code and Cowork discover it automatically when you open the repo — there is nothing
to install, and the scripts need only Python 3.8+ with no third-party packages.

It works on any part of the docs. Everywhere below, `<scope>` is a path under
`en/docs/` — a whole product, a single version, or one section within a version.

### Using it through Claude

From the repository root, name the scope you are working on:

> Use the wso2-doc-frontmatter skill on `<scope>`. Write the frontmatter for every
> page that needs it, and put the broken links in a separate report with fixes and
> an agent prompt.

Frontmatter is written in place. Link breakage goes into its own report file, so the
two can be reviewed, assigned, and merged separately.

### Running the checks directly

The checkers are plain Python and modify nothing, so they are safe to run at any
time. Each takes `--json <path>` for the full findings list and `--gate` to exit
non-zero when there is a blocking issue, which is what makes them usable in CI.

```bash
SK=.claude/skills/wso2-doc-frontmatter/scripts

python3 $SK/fm_audit.py en/docs                        # frontmatter fields
python3 $SK/check_links.py en/docs                     # links, images, anchors
python3 $SK/check_redirects.py en/mkdocs.yml en/docs   # redirects vs canonical_url
python3 $SK/check_style.py en/docs                     # mechanical style rules
```

Add `--files <paths…>` to narrow the frontmatter audit to the pages a pull request
touches.

### Writing frontmatter

Always inspect before writing. `--dry-run` is the default, so nothing changes until
you pass `--apply`, and `git checkout -- en/docs` undoes a run.

```bash
# Inspect first. Add --files <paths…> to limit the run to one scope.
python3 $SK/fm_fix.py en/docs --dry-run

# Write it, creating a block on pages that have none.
python3 $SK/fm_fix.py en/docs --scaffold --apply --worklist work.json

# Apply the title/description/content_type values decided after reading the pages.
python3 $SK/fm_fix.py en/docs --fill filled.json --apply
```

The scripts fill in everything derivable from the page's path, its first heading,
and git history. They deliberately do not invent `title` or `description` — those
are what a reader and a search engine actually see, and a generated one looks
finished so nobody revisits it. Those come back in `work.json` for you or Claude to
write after reading the page.

### Generating a link fix plan

```bash
python3 $SK/report_links.py en/docs --scope <scope> --out BROKEN-LINKS-<scope>.md
```

Name the report after its scope; a single repo-wide report goes stale immediately
and nobody can tell which parts are theirs. The report groups findings by cause,
proposes an exact replacement where one exists, separates the tiers that need a
human decision, and ends with a prompt scoped to only the tiers that are safe to
automate.

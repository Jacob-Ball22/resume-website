# Getting Started with Claude Code

## Prerequisites

1. **Install VS Code**: Download from [code.visualstudio.com](https://code.visualstudio.com)
2. **Install Claude Desktop App**: Download from [claude.ai](https://claude.ai)
3. **Install Node.js**: Download from [nodejs.org](https://nodejs.org) (LTS version recommended)

## Step 1: Set Up Claude Code CLI

### Option A: Using Claude Desktop App (Easiest)
1. Open Claude Desktop App
2. Click on your profile icon (bottom left)
3. Select "Enable Claude Code"
4. Follow the installation prompts

### Option B: Manual Installation
1. Open Terminal (Mac/Linux) or Command Prompt (Windows)
2. Run: `npm install -g @anthropic/claude-code`
3. Authenticate: `claude-code auth`
4. Follow the browser authentication flow

## Step 2: Create Your Project

1. Create a new folder for your resume website:
   ```bash
   mkdir my-resume-website
   cd my-resume-website
   ```

2. Copy all the template files (*.md files) into this folder

## Step 3: Open VS Code

### From Terminal/Command Line:
```bash
code .
```
This opens VS Code in the current directory

### From VS Code:
1. Launch VS Code
2. Click "File" → "Open Folder"
3. Navigate to your `my-resume-website` folder
4. Click "Select Folder"

## Step 4: Open Terminal in VS Code

### Method 1: Keyboard Shortcut
- **Windows/Linux**: Press `Ctrl + ` ` (backtick)
- **Mac**: Press `Cmd + ` ` (backtick)

### Method 2: Menu
- Click "View" → "Terminal"

### Method 3: Command Palette
1. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
2. Type "Terminal: Create New Terminal"
3. Press Enter

## Step 5: Run Claude Code

In the VS Code terminal, type:
```bash
claude
```

Or for a specific task:
```bash
claude "Build me a resume website using the specifications in the markdown files"
```

## Common Claude Code Commands

### Basic Usage
```bash
# Start Claude Code interactive mode
claude

# Run a specific command
claude "Your instruction here"

# Get help
claude --help

# Check version
claude --version
```

### Example Commands for Your Resume Site
```bash
# Initial setup
claude "Create a Next.js project with TypeScript and Tailwind CSS"

# Build the website
claude "Build a resume website using the markdown specifications"

# Add features
claude "Add dark mode toggle to the website"

# Fix issues
claude "Fix the mobile responsive layout"

# Deploy
claude "Prepare the site for Vercel deployment"
```

## VS Code Tips

### Useful Extensions for Web Development
1. **ES7+ React/Redux/React-Native snippets** - Quick React snippets
2. **Tailwind CSS IntelliSense** - Tailwind class suggestions
3. **Prettier** - Code formatter
4. **ESLint** - JavaScript linter
5. **Auto Rename Tag** - Rename paired HTML/JSX tags

### Keyboard Shortcuts
- **Open file**: `Ctrl+P` (Windows/Linux) or `Cmd+P` (Mac)
- **Open command palette**: `Ctrl+Shift+P` or `Cmd+Shift+P`
- **Toggle sidebar**: `Ctrl+B` or `Cmd+B`
- **Save file**: `Ctrl+S` or `Cmd+S`
- **Save all files**: `Ctrl+K S` or `Cmd+K S`
- **Format document**: `Shift+Alt+F` or `Shift+Option+F`

### Split Terminal
1. Click the split terminal icon in the terminal panel
2. Or right-click in terminal → "Split Terminal"
3. Useful for running dev server in one terminal and Claude in another

## Running Your Website Locally

After Claude builds your site, you'll typically run:

```bash
# Install dependencies
npm install
# or
bun install

# Start development server
npm run dev
# or
bun dev
```

Then open your browser to `http://localhost:3000`

## Troubleshooting

### Claude Code Not Found
If `claude` command is not recognized:
1. Check if it's installed: `npm list -g @anthropic/claude-code`
2. Reinstall if needed: `npm install -g @anthropic/claude-code`
3. Make sure npm global bin is in your PATH

### Terminal Not Working in VS Code
1. Try restarting VS Code
2. Check default shell settings: `Ctrl+Shift+P` → "Terminal: Select Default Profile"
3. On Windows, try using PowerShell or Git Bash instead of Command Prompt

### Permission Errors
- On Mac/Linux: Use `sudo` for global installs
- On Windows: Run terminal as Administrator

## Best Practices

1. **Save Often**: Claude Code works best with saved files
2. **Use Version Control**: Initialize git in your project
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
3. **Test Frequently**: Run your dev server and check changes in browser
4. **Be Specific**: Give Claude clear, detailed instructions
5. **Iterate**: Don't hesitate to refine and adjust

## Getting Help

- **Claude Code Issues**: [github.com/anthropics/claude-code/issues](https://github.com/anthropics/claude-code/issues)
- **VS Code Docs**: [code.visualstudio.com/docs](https://code.visualstudio.com/docs)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS Docs**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
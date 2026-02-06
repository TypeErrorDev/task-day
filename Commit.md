# 📝 Commit Message Guidelines

## 🎯 Standard Format

```
<type>: <subject> #<issue-number>

[optional body]

[optional footer]
```

---

## 🏷️ Commit Types

Use these prefixes to categorize your commits:

| Type       | When to Use                              | Example                                    |
| ---------- | ---------------------------------------- | ------------------------------------------ |
| `feat`     | New feature or functionality             | `feat: add user authentication #23`        |
| `fix`      | Bug fix                                  | `fix: resolve login redirect issue #45`    |
| `docs`     | Documentation changes                    | `docs: update API documentation #12`       |
| `style`    | Code style/formatting (no logic change)  | `style: format code with prettier #8`      |
| `refactor` | Code refactoring (no feature/bug change) | `refactor: simplify validation logic #31`  |
| `test`     | Adding or updating tests                 | `test: add unit tests for auth module #23` |
| `chore`    | Maintenance tasks, dependencies          | `chore: update dependencies #19`           |
| `perf`     | Performance improvements                 | `perf: optimize database queries #52`      |
| `ci`       | CI/CD configuration changes              | `ci: add test workflow for PRs #7`         |
| `build`    | Build system or external dependencies    | `build: update webpack config #14`         |
| `revert`   | Revert a previous commit                 | `revert: revert commit abc123 #29`         |

---

## ✅ Good Examples

```bash
✅ feat: add password reset functionality #34
✅ fix: correct calculation error in checkout #56
✅ docs: add installation instructions to README #12
✅ refactor: extract validation into separate module #28
✅ test: add integration tests for payment flow #45
✅ chore: bump react version to 18.2.0 #67
```

---

## ❌ Bad Examples

```bash
❌ fixed stuff
❌ updates
❌ WIP
❌ asdfasdf
❌ minor changes
❌ Fixed bug (no issue number, vague)
```

---

## 📐 Rules

### Subject Line (First Line)

- **Keep it under 50 characters** (aim for clarity)
- **Use lowercase** for the type prefix
- **Use imperative mood** ("add" not "added" or "adds")
- **Don't end with a period**
- **Always reference the issue number** with `#<number>`

### Body (Optional)

- **Separate from subject with a blank line**
- **Wrap at 72 characters**
- **Explain what and why, not how**
- Use bullet points for multiple changes

### Examples with Body

```bash
feat: add email notification system #42

- Implement SendGrid integration
- Add email templates for user actions
- Configure environment variables for API keys

This allows users to receive notifications for important events
instead of only seeing in-app alerts.
```

```bash
fix: resolve memory leak in image upload #78

The previous implementation didn't properly clean up file streams
after upload completion, causing memory to accumulate over time.

Added proper stream cleanup and error handling.
```

---

## 🔄 Multi-Change Commits (Try to Avoid)

If a commit addresses multiple issues (not recommended, but sometimes necessary):

```bash
feat: add dashboard widgets #23 #24 #25
```

**Better approach**: Make separate commits for each issue when possible.

---

## 🎨 Quick Tips

- ✅ **Commit often** - Small, focused commits are better than large ones
- ✅ **One logical change per commit** - Easier to review and revert
- ✅ **Write for your future self** - You'll thank yourself later
- ✅ **Be consistent** - Follow this guide for all commits

---

## 🚀 Setting Up Commit Templates (Optional)

Create a template to remind yourself of the format:

```bash
# Create a commit template file
echo "# <type>: <subject> #<issue>
#
# Type: feat, bug, docs, style, refactor, test, chore, perf, ci, build
# Subject: imperative, lowercase, no period, <50 chars
# Issue: reference issue number with #
#
# [optional body]
#
# [optional footer]" > ~/.gitmessage

# Configure git to use it
git config --global commit.template ~/.gitmessage
```

Now when you run `git commit` (without `-m`), your editor will open with this template!

---

## 📚 Additional Resources

- [Conventional Commits Specification](https://www.conventionalcommits.org/)
- [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)

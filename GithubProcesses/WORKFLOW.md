# 🚀 Development Workflow

## 📋 Overview

This project follows the standard GitHub Flow workflow with issue tracking and automated testing.

---

## 🔄 Step-by-Step Workflow

### 1️⃣ **Create an Issue**

- Navigate to the **Issues** tab on GitHub
- Click **New Issue**
- Describe the feature, bug, or task
- Assign labels, milestones, and assignees as needed
- Note the issue number (e.g., `#23`)

---

### 2️⃣ **Create a Feature Branch**

```bash
# Make sure you're on main and it's up to date
git checkout main
git pull

# Create and switch to a new feature branch
git checkout -b feature/23-your-feature-name
```

> 💡 **Naming Convention**: `feature/#<issue-number>-<brief-description>`

---

### 3️⃣ **Develop & Commit**

```bash
# Make your changes, then stage them
git add .

# Commit with a descriptive message
git commit -m "Add feature: your description #23"

# Push to remote
git push -u origin feature/23-your-feature-name
```

> 💡 **Tip**: Reference the issue number in commits using `#23`

---

### 4️⃣ **Create a Pull Request**

- Go to your repository on GitHub
- Click **Pull Requests** → **New Pull Request**
- Select your feature branch
- Write a clear description
- Add `Closes #23` in the PR description to auto-close the issue on merge
- Request reviewers if needed

---

### 5️⃣ **Automated Testing**

✅ GitHub Actions will automatically:

- Run all tests
- Check code quality
- Report results on the PR

⚠️ **PRs must pass all checks before merging**

---

### 6️⃣ **Code Review & Merge**

- Wait for review approval
- Address any requested changes
- Once approved and tests pass, **merge the PR** via GitHub
- Delete the feature branch (GitHub will prompt you)

---

### 7️⃣ **Update Local Main**

```bash
# Switch back to main
git checkout main

# Pull the latest changes
git pull

# Delete local feature branch (optional cleanup)
git branch -d feature/23-your-feature-name
```

---

## 🎯 Quick Reference

| Command                          | Purpose                       |
| -------------------------------- | ----------------------------- |
| `git checkout -b feature/X-name` | Create & switch to new branch |
| `git add .`                      | Stage all changes             |
| `git commit -m "message #X"`     | Commit with issue reference   |
| `git push -u origin branch-name` | Push new branch to remote     |
| `git checkout main`              | Switch to main branch         |
| `git pull`                       | Update local main             |

---

## 📌 Best Practices

- ✅ Always create a branch from an up-to-date `main`
- ✅ Keep commits small and focused
- ✅ Write clear, descriptive commit messages
- ✅ Reference issue numbers in commits and PRs
- ✅ Ensure tests pass before requesting review
- ✅ Keep PRs focused on a single feature/fix
- ✅ Delete branches after merging

---

## 🔗 Useful Links

- [GitHub Issues](../../issues)
- [Pull Requests](../../pulls)
- [GitHub Actions](../../actions)

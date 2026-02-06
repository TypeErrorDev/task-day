# 🔀 Pull Request (PR) Guidelines

## 🎯 PR Title Format

```
<type>: <brief description> (Closes #<issue-number>)
```

**Examples:**

```
feat: Add user authentication (Closes #23)
fix: Resolve login redirect bug (Closes #45)
docs: Update API documentation (Closes #12)
```

---

## 📋 PR Description Template

When creating a Pull Request, use this template:

```markdown
## 📌 Related Issue

Closes #<issue-number>

## 🎯 Description

<!-- Provide a brief description of what this PR does -->

## 🔄 Type of Change

- [ ] 🐛 Bug fix (non-breaking change which fixes an issue)
- [ ] ✨ New feature (non-breaking change which adds functionality)
- [ ] 💥 Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] 📝 Documentation update
- [ ] 🎨 Style/UI update (no functional changes)
- [ ] ♻️ Code refactoring (no functional changes)
- [ ] ⚡ Performance improvement
- [ ] ✅ Test update

## 🧪 Testing

<!-- Describe the tests you ran and how to reproduce them -->

- [ ] All existing tests pass
- [ ] Added new tests for new functionality
- [ ] Manual testing completed

**Test steps:**

1.
2.
3.

## 📸 Screenshots (if applicable)

<!-- Add screenshots or GIFs to demonstrate changes -->

**Before:**

**After:**

## ✅ Checklist

- [ ] My code follows the project's style guidelines
- [ ] I have performed a self-review of my code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
- [ ] Any dependent changes have been merged and published

## 📝 Additional Notes

<!-- Any additional information that reviewers should know -->
```

---

## 🚀 How to Use This Template

### Option 1: Manual Copy-Paste

Simply copy the template above when creating each PR.

### Option 2: Automated PR Template (Recommended)

Create a file in your repository:

```bash
# Create the .github directory if it doesn't exist
mkdir -p .github

# Create the PR template file
touch .github/PULL_REQUEST_TEMPLATE.md
```

Then paste the template content into `.github/PULL_REQUEST_TEMPLATE.md`

**GitHub will automatically populate this template when creating new PRs!** ✨

---

## 📖 Example PR

Here's what a completed PR might look like:

```markdown
## 📌 Related Issue

Closes #23

## 🎯 Description

This PR implements user authentication using JWT tokens. Users can now
register, log in, and access protected routes. Session management is
handled via HTTP-only cookies for security.

## 🔄 Type of Change

- [x] ✨ New feature (non-breaking change which adds functionality)

## 🧪 Testing

- [x] All existing tests pass
- [x] Added new tests for new functionality
- [x] Manual testing completed

**Test steps:**

1. Register a new user at `/register`
2. Log in with credentials at `/login`
3. Access protected route `/dashboard`
4. Verify token is stored in HTTP-only cookie
5. Log out and verify session is cleared

## 📸 Screenshots

**Login Page:**
![Login](./screenshots/login.png)

**Dashboard (Protected Route):**
![Dashboard](./screenshots/dashboard.png)

## ✅ Checklist

- [x] My code follows the project's style guidelines
- [x] I have performed a self-review of my code
- [x] I have commented my code, particularly in hard-to-understand areas
- [x] I have made corresponding changes to the documentation
- [x] My changes generate no new warnings
- [x] I have added tests that prove my fix is effective or that my feature works
- [x] New and existing unit tests pass locally with my changes
- [x] Any dependent changes have been merged and published

## 📝 Additional Notes

- Added bcrypt for password hashing
- JWT secret should be configured in environment variables
- Session expires after 24 hours
```

---

## 🎨 PR Best Practices

### Do's ✅

- ✅ **Keep PRs focused** - One feature/fix per PR
- ✅ **Keep PRs small** - Easier to review (aim for <400 lines changed)
- ✅ **Write descriptive titles** - Clear and concise
- ✅ **Fill out the template** - Help reviewers understand your changes
- ✅ **Reference the issue** - Use `Closes #<number>` or `Fixes #<number>`
- ✅ **Add screenshots** - For UI changes
- ✅ **Self-review first** - Check your own code before requesting review
- ✅ **Respond to feedback** - Address all review comments

### Don'ts ❌

- ❌ **Don't submit WIP PRs** - Wait until it's ready for review
- ❌ **Don't ignore CI failures** - Fix all test failures
- ❌ **Don't mix unrelated changes** - Keep it focused
- ❌ **Don't force push after review** - Use regular commits to address feedback
- ❌ **Don't leave template sections blank** - Fill them out or remove them

---

## 🔗 Merge Strategies

When merging your PR, GitHub offers three options:

### 1. **Create a Merge Commit** (Recommended for teams)

```
All commits from the branch are added to main with a merge commit
```

- ✅ Preserves complete history
- ✅ Shows who approved and merged
- ❌ Can clutter history with many small commits

### 2. **Squash and Merge** (Recommended for clean history)

```
All commits are combined into one commit on main
```

- ✅ Keeps main branch history clean
- ✅ One commit per feature/fix
- ❌ Loses individual commit history

### 3. **Rebase and Merge**

```
All commits are replayed on top of main
```

- ✅ Linear history
- ❌ Can be confusing for beginners
- ❌ Changes commit hashes

**Most teams use "Squash and Merge"** for a clean, readable main branch history.

---

## 🎯 Auto-Closing Issues

Use these keywords in your PR description to automatically close issues when merged:

- `Closes #23`
- `Fixes #23`
- `Resolves #23`

You can close multiple issues:

- `Closes #23, #24, #25`
- `Closes #23, fixes #24`

---

## 📚 Additional Resources

- [GitHub PR Best Practices](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests)
- [Code Review Guidelines](https://google.github.io/eng-practices/review/)

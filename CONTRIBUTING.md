# 👥 Contributing Guidelines

Welcome to our project! We follow a clean and scalable branching, commit, and PR convention to ensure smooth collaboration across all team members (frontend, backend, DevOps).

---

## 📂 Branching Strategy

We follow a structured branching model for feature development and bug fixing.

### 🔀 Branches

- `main`: **Production branch**
- `development`: Integration branch for upcoming release
- `feature/*`: For new features (fe = frontend, be = backend)
- `fix/*`: For bug fixes
- `test/*`: For test case related branches

### 🧾 Branch Naming Convention

Use the following pattern:

``` bash
git checkout -b {type}/{scope}/{github username} 

example: git checkout -b feat/be/SuyashSoundatte 
```

| Type   | Description                      |
|--------|----------------------------------|
| feat   | New feature                      |
| fix    | Bug fix                          |
| test   | Test cases                       |
| docs   | Update Docs                      |

| Scope  | Description                      |
|--------|----------------------------------|
| fe     | Frontend                         |
| be     | Backend                          |
| ops    | Devops                           |

### ✅ Examples

- `feat/fe/sahil` → Frontend feature by Sahil  
- `feat/be/suyash` → Backend feature by Suyash  
- `fix/fe/neeraj` → Frontend bug fix by Sahil  
- `test/be/rahul` → Backend test cases by Rahul  

---

## 💬 Commit Message Convention

Follow this format for your commit messages:

``` bash 
git commit -m 'feat: improve performance with lazy load implementation for images'
```

| Type     | Meaning                    |
|----------|----------------------------|
| feat     | A new feature              |
| fix      | A bug fix                  |
| docs     | Documentation only changes |

### ✅ Examples

- `feat(fe): add user registration form`
- `fix(be): resolve null pointer in booking logic`
- `docs: update contributing guide`
- `test(be): add test for order service`

---

## 🔁 Pull Request Process

### 🔃 Base Branch

- PRs should be made to `development` **(default)**
- Only assigned maintainers can create PRs to `main`

### 📌 PR Checklist

- [ ] Follows branch and commit conventions
- [ ] Includes tests (if applicable)
- [ ] Includes or updates relevant documentation
- [ ] Has been tested locally or on staging

### 🔗 Assign PRs

- Assign appropriate reviewers (as per the feature or service)
- Mention the related Issue ID (if any)

---

## 📄 Documentation Expectations

- For **new utilities/config files**, mention usage in code comments or a separate `README.md` (if significant)
- For **API changes**, update the relevant API docs or Swagger specs / OpenAPI  
- For **test cases**, ensure coverage and proper naming of test files

---

## 💡 Additional Tips

- Sync your branch with `development` often to avoid merge conflicts
- Keep PRs small and focused

---

Happy contributing! 🚀
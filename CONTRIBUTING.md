# Contributing to CTT

Thanks for helping with CTT!

## 1. Clone the repo

```bash
git clone https://github.com/MRCYODev/CTT.git
cd CTT
```

## 2. Install dependencies

```bash
npm install
```

## 3. Run CTT

```bash
npm run start
```

**Open:**

```text
http://localhost:3000
```

## 4. Make your changes

You can add guides, fix bugs, improve the website, add tools, or add new information.

## 5. Test your changes

```bash
npm run build
```

Make sure the build finishes without errors.

## 6. Configure Git

:::note
Configure Git with the name and email associated with your GitHub account so GitHub can correctly attribute your commits to you.
:::

Set your Git username:

```bash
git config --global user.name "Your GitHub Username"
```

Set your Git email:

```bash
git config --global user.email "your-email@example.com"
```

You can check your current configuration with:

```bash
git config --global user.name
git config --global user.email
```

### Using a private GitHub email

You can find your GitHub email settings here:

https://github.com/settings/emails

You can enable:

**Keep my email addresses private**

GitHub will then provide you with a private `noreply` email address. You can use that address for Git commits:

```bash
git config --global user.email "12345678+username@users.noreply.github.com"
```

Using your GitHub `noreply` address helps keep your personal email private while still allowing GitHub to associate your commits with your account.

## 7. Commit and push

```bash
git add .
git commit -m "Added new changes"
git push
```

For larger changes, create a branch and open a Pull Request.

Thank you for contributing to CTT!
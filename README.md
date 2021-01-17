# Git Commit Bot 

Given a repo, this bot commits random stuff to a readme file so you can get a commit everyday and get that green check box ✅ 🤖

## Installation


```bash
git clone {THIS_REPO}
```
```bash
npm install
```
### Add and modify .env file
```
PORT=8000
REPO=https://github.com/XXXX/XXXXXBOT_CODE_CHANGE
USERNAME=XXXX
PASSWORD=XXXXX

HEADLESS=
COMMIT_MESSAGE=
COMMIT_CHANGE=
```
The last three are optional it follows
```
process.env.HEADLESS ? true : false
process.env.COMMIT_MESSAGE ? process.env.COMMIT_MESSAGE : "Bleep Bloop, bot commit"
process.env.COMMIT_CHANGE ? process.env.COMMIT_CHANGE : "Good Day, Sir!"
```

```bash
npm start
```

## Try it
🐛 Report an issue for any bugs 🐛



## License
[MIT](https://choosealicense.com/licenses/mit/)

# markdown-previewer

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Run `yarn install && yarn start`.

## Notes

Test #4 fails. The following can be seen in the test suite details:

```none
The markdown in #editor is not being interpreted correctly and/or rendered into #preview : expected '<p>testing and…</p>' to equal '<p>testing and...</p>'
```

This is because I have set my Marked's smartypants to true, thus turning quotes into smart quotes and three periods into actual ellipses.

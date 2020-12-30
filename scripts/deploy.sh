yarn build
rm -rf ../knockkk.github.io/docs/note
mv docs/.vuepress/dist ../knockkk.github.io/docs/note

cd ../knockkk.github.io/
git add .
git commit -m "deploy:notes"
git push origin master
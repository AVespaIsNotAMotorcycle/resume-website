FORCE:

tests: FORCE
	npm run test -- --watchAll=false

#todo: make a staging branch
staging: tests
	-git commit -a
	git push origin master
	npm run deploy

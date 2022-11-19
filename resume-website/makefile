FORCE:

tests: FORCE
	npm run test -- --watchAll=false

github: tests
	-git commit -a
	git push origin master
	npm run deploy

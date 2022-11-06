FORCE:

tests: FORCE
	npm run test -- --watchAll=false

#todo: make a staging branch
staging: tests
	-get commit -a
	git push origin master

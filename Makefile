build:
	JEKYLL_ENVIRONMENT=production jekyll build
	cp _site/app.yaml .

deploy:
	gcloud app deploy

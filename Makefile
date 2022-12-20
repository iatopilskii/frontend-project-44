install: # установка зависимостей
	npm ci
brain-games: # запуск игры
	node bin/brain-games.js
publish: # публикация пакета
	npm publish --dry-run
lint: # запуск линтера
	npx eslint

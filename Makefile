install: # установка зависимостей
	npm ci
brain-games: # запуск игры
	node bin/brain-games.js
brain-even: # запуск игры "Проверка на четность"
	node bin/brain-even.js
brain-even: # запуск игры "Калькулятор"
	node bin/brain-calc.js
publish: # публикация пакета
	npm publish --dry-run
lint: # запуск линтера
	npx eslint

install: # установка зависимостей
	npm ci
brain-games: # запуск игры
	node bin/brain-games.js
brain-even: # запуск игры "Проверка на четность"
	node bin/brain-even.js
brain-calc: # запуск игры "Калькулятор"
	node bin/brain-calc.js
brain-gcd: # запуск игры "НОД"
	node bin/brain-gcd.js
brain-progression: # запуск игры "Арифметическая прогрессия"
	node bin/brain-progression.js
brain-prime: # запуск игры "Простое ли число?"
	node bin/brain-prime.js
publish: # публикация пакета
	npm publish --dry-run
lint: # запуск линтера
	npx eslint

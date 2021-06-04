# pcf-interview-task

frontend build:

`./node_modules/.bin/rollup -c`

backend:

`poetry run python manage.py migrate`

`poetry run python manage.py collectstatic`

`poetry run python manage.py runserver`

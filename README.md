# nodejs test runner

commands

```
npm init -y
npm pkg set type="module"

node index.js 1073741824

node --test
node --test --test-name-pattern @large
node --test --experimental-test-coverage

node --test --test-reporter tap
node --test --test-reporter spec
node --test --test-reporter tap --test-reporter-destination report.txt

```


Testing a basic http server

```
npm install fastify

node --test tests/app.test.js


```
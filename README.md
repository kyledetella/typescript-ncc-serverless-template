# TypeScript ncc serverless Template

Get up and running quickly with TypeScript (via [ncc](https://github.com/zeit/ncc)) + API Gateway + AWS Lambda using the [serverless](https://serverless.com/) framework.

<details>
<summary><strong>Table of Contents</strong></summary>

- [TypeScript ncc serverless Template](#typescript-ncc-serverless-template)
  - [Usage](#usage)
  - [Development](#development)
    - [Install dependencies](#install-dependencies)
    - [Testing locally](#testing-locally)
  - [Testing](#testing)
  - [Deployment](#deployment)

</details>

## Usage

```sh
npx serverless create --template-url https://github.com/kyledetella/typescript-ncc-serverless-template --path <your_app> && \
cd <your_app>
```

Inside of your new app directory, run:

```sh
nvm use && npm i
```

**Make sure to change the `service` and `name` fields in the `serverless.yml` and `package.json` files!**

## Development

### Install dependencies

```bash
nvm use && npm i
```

### Testing locally

This project uses [serverless-offline](https://github.com/dherault/serverless-offline) to emulate API Gateway and Lambda functionality.

```sh
npm start
```

The service will be available at http://localhost:4144.

```sh
curl -X POST -d '{"foo": "bar"}' http://localhost:4144
```

## Testing

```sh
npm t
```

To run in watch mode:

```sh
npm run test:watch
```

## Deployment

```bash
npm run deploy
```

# Microfrontend-Showcase

## Installation

```shell
cd react-microfrontend
cd host
yarn install
cd ../mfe1
yarn install
cd ../mfe2
yarn install
```

## Running the app

```shell
# Install concurrently in the host application if you haven't already
cd host
yarn add -D concurrently

# Run all applications using the dev:all script
yarn dev:all
```
# Training Setup

## Run these commands at the terminal.

```bash
pnpm install
pnpm dlx @bigcommerce/create-catalyst@0.21.0 init
```

## What is pnpm

pnpm stands for "Performant Node Package Manager". This reads the list of packages in package.json and installs them into a folder called node_modules. We don't save this node modules folder into source control and so this pnpm install needs to be run each time we setup a new environment.

## What is pnpm dlx @bigcommerce/create-catalyst@0.21.0 init

This is a custom install script from BigCommerce that helps you to connect to your specific BigCommerce store. It builds a .env.local file with all the API keys and codes that are secret but needed to connect to your specific store. Again we don't want our .env.local to be saved into source control.

# When you are ready to run your copy of Catalyst in this environment use the code below.

```bash
pnpm run dev
```

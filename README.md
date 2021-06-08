[![Build_Test_Deploy_To_Blobs_NG_Dev](https://github.com/IATI/angular-az-blobs-template/actions/workflows/develop.yml/badge.svg?branch=develop)](https://github.com/IATI/angular-az-blobs-template/actions/workflows/develop.yml)

# IATI Angular Frontend Application Template Repo

This is the template for any Frontend Angular SPA's that will live on the IATI Unified Infrastructure on Azure

## Getting Started

1. Create a new repository from the template
1. Follow instructions for nvm/node prerequisties above
1. Update package.json with application name, repository, etc.
1. See below for Angular commands

## Deployment

The SPA is served as a static site from GitHub Pages, deployed using GitHub Actions

### CI CD Setup

- uses [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages) to deploy the SPA to GitHub Pages. Check that documentation for additional troubleshooting tips.

#### Deployment

1. Ensure "Build application" step is builing for the correct environment in `develop.yml` or `main.yml`
1. Update `cname:` with your expected custom domain name
1. Push changes/code to `develop` branch
1. `develop.yml` will build the Angular application to `/dist` then the `actions-gh-pages` will push it to the `gh-pages` branch
1. GitHub Pages will serve the static site from the `gh-pages` branch

#### Custom Domain/DNS

1. Once your page is deployed go to GitHub Repo -> Settings -> Pages.
1. Make sure Source: is set to `Branch:gh-pages` and `/(root)`
1. You should see your custom domain populated there and a warning that your domain is not setup correctly with your DNS provider
1. Go to Cloudflare -> DNS. Add a CNAME record from `yoursubdomain` to `iati.github.io`. MAKE SURE TO CLICK THE ORANGE CLOUD TO TURN IT FROM "Proxied" to GREY FOR A "DNS only" ENTRY.
1. Go back to GitHub Repo -> Settings -> Pages. You should be able to click re-check your custom domain, and it should provision you a certificate.
1. Once provisioned check the Enforce HTTPS checkbox
1. Some of this may take a while for the DNS entries to propagate

#### No Custom Domain

- If you decide not to use a custom domain, GitHub serves your site at `iati.github.io/<repo-name>`, so you will need to build the Angular application with the option `--base-href=/<repo-name>/` so that it can find the resources that aren't located in the root directory.

GitHub Actions Example (repo: angular-template ):

```yaml
- name: Build application
  run: npm run build:develop -- --base-href=/angular-template/
```

# Angular Framework Information

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

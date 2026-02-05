<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

This project is a backend application built using **NestJS**.  
It follows a modular, scalable architecture and is intended for API development.

---

## Project setup

```bash
npm install
````

---

## Compile and run the project

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

Application runs on:

```
http://localhost:4000
```

> `Cannot GET /` is expected if no root controller is defined.

---

## Run tests

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

---

## NestJS CLI Commands

Make sure NestJS CLI is installed:

```bash
npm install -g @nestjs/cli
```

---

### Generate a Module

```bash
nest g module users
nest g module users/profile
```

---

### Generate a Controller

```bash
nest g controller users
nest g controller users/profile
```

Without test file:

```bash
nest g controller users/profile --no-spec
```

---

### Generate a Service

```bash
nest g service users
nest g service users/profile
```

---

### Generate a Full Resource (Recommended)

```bash
nest g resource users/profile
```

---

### Generate DTOs, Interfaces, Guards, Pipes, Decorators

```bash
# DTO
nest g class users/dto/create-user.dto

# Interface
nest g interface common/interfaces/success-response

# Guard
nest g guard common/guards/auth

# Pipe
nest g pipe common/pipes/validation

# Decorator
nest g decorator common/decorators/current-user
```

## Branch Naming Convention

To keep our Git history clean and easy to understand, please create new branches using the following rules.

### 1. New Features

Use the `feature/` prefix followed by a short, descriptive name.

**Format**

```
feature/<feature-name>
```

**Example**

```
feature/user-management
```

---

### 2. Bug Fixes

Use the `bug/` prefix with a brief description of the issue being fixed.

**Format**

```
bug/<bug-description>
```

**Example**

```
bug/fix-undefined-issue
```

---

### 3. Jira Tasks

For work tied directly to a Jira ticket, use the `task/` prefix followed by the Jira ID.

**Format**

```
task/<JIRA-ID>
```

**Example**

```
task/NB-2345
```

---

### 4. Clean Code / Refactoring (Recommended)

For non-functional changes like refactoring, formatting, or improving readability, use the `refactor/` prefix.

**Format**

```
refactor/<scope-or-description>
```

**Examples**

```
refactor/auth-service-cleanup
refactor/remove-duplicate-logic
```

---

Ah, yeah — that error is a sandbox hiccup, not you 😅
Let’s bypass the upload entirely and do this the **reliable way**.

Below is the **exact README.md file content** in **plain Markdown**, identical to what was generated.
Just **create a file named `README.md`** in your project root and paste this in.

---

````md
<p align="center">
  <a href="https://nestjs.com" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
</p>

<p align="center">
  A backend API built with <a href="https://nestjs.com" target="_blank">NestJS</a>
</p>

---

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

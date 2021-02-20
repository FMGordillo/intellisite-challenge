# Fullstack challenge

## STACK

- Backend
  - Express.js + Apollo Server (GraphQL)
  - Typescript
  - Prisma (ORM) + PostgreSQL
- Frontend
  - Next.js
  - Typescript
  - `styled-components`
  - `swr` + `graphql-request`

## BACKEND (Server)

1. Create an `.env` file inside `prisma` folder (take `.example.env` as a baseline, that one uses Docker).

1. `npx prisma migrate dev --preview-feature` (this one will create the necessary tables in Postgres, and generate the resolvers + types for GraphQL)

1. `npm run server`

## BACKEND (CLI)

TBD

## FRONTEND

1. `cd frontend`

1. `npm run dev`

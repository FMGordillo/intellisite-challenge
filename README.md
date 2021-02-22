# Fullstack challenge

## Pendings

- [ ] Create `docker-compose.yml` with the FE + BE + DB
- Backend 
  - [ ] Handle the "create CSV" part of the challenge
  - [ ] Improve `Dockerfile` to handle Prisma migrations (aka more steps for the process)
  - [ ] Finish the interaction with the CLI
  - [ ] Normalize fallback messages (ie "Cannot fullfill the request" in all the operations)
  - [ ] Create Swagger API documentation
- Frontend
  - [ ] Mock design for the page
  - [ ] Create the needed components ] SEO
  - [ ] Create `<Table />` component with sorting
  - [ ] Add testing with Jest, and Cypress for E2E
   

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

1. `npm run seed` OR using the CLI

1. `npm run server`

## BACKEND (CLI)

TBD

## FRONTEND

1. `cd frontend`

1. `npm run dev`

# NotaryApp_Assignment
# Candidate Status API

This repository contains a Node.js API built using Express and MySQL that retrieves the candidate status for a given user.

## Task Overview

Create a RESTful API in Node.js using Express and MySQL that allows users to query the status of candidates they have created. The API should take a `uid` (user ID) as input and return the total count of candidates along with the count of candidates in the "Joined" and "Interview" statuses.

## Task Details

### User Table

The `users` table contains information about the primary users of the software.

| uid | name   |
| --- | ------ |
| 4   | Rahul  |

### Candidate Table

The `candidates` table contains information about candidates created by users. Each candidate is associated with a user using a foreign key `uid`.

| cid | uid | candidateName |
| --- | --- | ------------- |
| 1   | 4   | Priyanka      |
| 2   | 4   | Manish        |
| 3   | 4   | Vedant        |

### Candidate Status Table

The `candidate_status` table tracks the status of candidates and includes the date when the status was updated.

| id  | cid | status   | statusUpdatedAt |
| --- | --- | -------- | --------------- |
| 1   | 1   | joined   | 24/03/2023      |
| 2   | 2   | joined   | 12/12/2022      |
| 3   | 3   | interview | 28/06/2023      |

## API Endpoints

### Get Candidate Status Count

Endpoint: `POST /getStatus`

Input:

```json
{
  "uid": 4
}

# MT7 Backend API Documentation

## Base URL

```
http://localhost:5000/api
```

---

## Prerequisites

- Node.js + Express.js server running on port 5000
- MongoDB instance connected via Mongoose
- JWT secret configured in environment variables
- bcryptjs for password hashing

---

## Authentication

Authentication uses **JWT (JSON Web Tokens)**. Most routes are protected and require a valid token.

Protected routes require the following header:

```
Authorization: Bearer <TOKEN>
```

### Error Responses (Authentication)

| Scenario                | Response                                        |
| ----------------------- | ----------------------------------------------- |
| No token provided       | `{ "message": "Not authorized, no token" }`     |
| Invalid / expired token | `{ "message": "Not authorized, token failed" }` |
| Missing required fields | `{ "message": "Please fill all fields" }`       |

---

## Endpoints

### 1. Register User

- **Method:** `POST`
- **Endpoint:** `/auth/register`
- **Use:** Register a new user (client or agency) to the platform.

**Headers:**

```
Content-Type: application/json
```

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@test.com",
  "password": "123456",
  "role": "client"
}
```

**Request Keys:**

| Key        | Type   | Required | Description                                 |
| ---------- | ------ | -------- | ------------------------------------------- |
| `name`     | string | ✅       | Full name of the user                       |
| `email`    | string | ✅       | Email address (must be unique)              |
| `password` | string | ✅       | User password (hashed via bcryptjs)         |
| `role`     | string | ✅       | Role of the user — `"client"` or `"agency"` |

**Response:**

```json
{
  "message": "User registered successfully",
  "user": {
    "id": "USER_ID",
    "email": "john@test.com",
    "name": "John Doe",
    "role": "client"
  }
}
```

**Response Keys:**

| Key          | Description                                |
| ------------ | ------------------------------------------ |
| `message`    | Success message                            |
| `user.id`    | MongoDB ObjectId of the newly created user |
| `user.email` | Registered email                           |
| `user.name`  | Registered name                            |
| `user.role`  | Assigned role                              |

---

### 2. Login User

- **Method:** `POST`
- **Endpoint:** `/auth/login`
- **Use:** Authenticate an existing user and receive a JWT token for use in protected routes.

**Headers:**

```
Content-Type: application/json
```

**Request Body:**

```json
{
  "email": "john@test.com",
  "password": "123456"
}
```

**Request Keys:**

| Key        | Type   | Required | Description              |
| ---------- | ------ | -------- | ------------------------ |
| `email`    | string | ✅       | Registered email address |
| `password` | string | ✅       | User password            |

**Response:**

```json
{
  "message": "Login successful",
  "token": "JWT_TOKEN"
}
```

**Response Keys:**

| Key       | Description                                                                                       |
| --------- | ------------------------------------------------------------------------------------------------- |
| `message` | Success confirmation                                                                              |
| `token`   | JWT token — use this as `Bearer <token>` in the `Authorization` header for all protected requests |

> ⚠️ **Note:** Store the JWT token securely. It must be included in all subsequent requests to protected endpoints.

---

### 3. Create Client Profile

- **Method:** `POST`
- **Endpoint:** `/client-profile`
- **Use:** Create a detailed profile for a client user. This profile is used to match the client with relevant agencies.
- **Auth Required:** ✅ Yes

**Headers:**

```
Authorization: Bearer JWT_TOKEN
Content-Type: application/json
```

**Request Body:**

```json
{
  "company": "AI Startup",
  "phone": "9999999999",
  "budget": "₹2L – ₹5L",
  "plan": "Full Stack",
  "stage": "Seed",
  "services": ["Marketing"],
  "description": "Need marketing help",
  "urgency": "ASAP"
}
```

**Request Keys:**

| Key           | Type   | Required | Description                                                     |
| ------------- | ------ | -------- | --------------------------------------------------------------- |
| `company`     | string | ✅       | Name of the client's company                                    |
| `phone`       | string | ✅       | Contact phone number                                            |
| `budget`      | string | ✅       | Budget range for services (e.g. `"₹2L – ₹5L"`)                  |
| `plan`        | string | ✅       | Type of plan required (e.g. `"Full Stack"`, `"Marketing Only"`) |
| `stage`       | string | ✅       | Startup stage (e.g. `"Seed"`, `"Series A"`, `"Growth"`)         |
| `services`    | array  | ✅       | List of services needed (e.g. `["Marketing", "Development"]`)   |
| `description` | string | ✅       | Brief description of the client's needs                         |
| `urgency`     | string | ✅       | Timeline urgency (e.g. `"ASAP"`, `"3 months"`)                  |

**Response:**

```json
{
  "message": "Client profile created",
  "profile": {
    "company": "AI Startup",
    "services": ["Marketing"],
    "budget": "₹2L – ₹5L"
  }
}
```

**Response Keys:**

| Key                | Description                      |
| ------------------ | -------------------------------- |
| `message`          | Confirmation of profile creation |
| `profile.company`  | Company name stored              |
| `profile.services` | Services list stored             |
| `profile.budget`   | Budget range stored              |

---

### 4. Create Agency Profile

- **Method:** `POST`
- **Endpoint:** `/agency-profile`
- **Use:** Create a detailed profile for an agency user. This profile is used to surface the agency in client match results.
- **Auth Required:** ✅ Yes

**Headers:**

```
Authorization: Bearer JWT_TOKEN
Content-Type: application/json
```

**Request Body:**

```json
{
  "agencyName": "Growth Marketing Co",
  "services": ["Marketing"],
  "industries": ["SaaS"],
  "pricingRange": "₹2L – ₹5L",
  "teamSize": 12,
  "experienceYears": 6,
  "description": "Marketing agency for SaaS startups"
}
```

**Request Keys:**

| Key               | Type   | Required | Description                                                       |
| ----------------- | ------ | -------- | ----------------------------------------------------------------- |
| `agencyName`      | string | ✅       | Name of the agency                                                |
| `services`        | array  | ✅       | Services offered (e.g. `["Marketing", "SEO", "Branding"]`)        |
| `industries`      | array  | ✅       | Industries the agency specialises in (e.g. `["SaaS", "FinTech"]`) |
| `pricingRange`    | string | ✅       | Pricing range the agency operates in (e.g. `"₹2L – ₹5L"`)         |
| `teamSize`        | number | ✅       | Number of people in the agency team                               |
| `experienceYears` | number | ✅       | Years of experience the agency has                                |
| `description`     | string | ✅       | Short description of the agency and what it does                  |

**Response:**

```json
{
  "message": "Agency profile created",
  "profile": {
    "agencyName": "Growth Marketing Co"
  }
}
```

**Response Keys:**

| Key                  | Description                      |
| -------------------- | -------------------------------- |
| `message`            | Confirmation of profile creation |
| `profile.agencyName` | Agency name stored               |

---

### 5. Get Agency Matches

- **Method:** `GET`
- **Endpoint:** `/match/agencies`
- **Use:** Fetch a ranked list of agencies that match the authenticated client's profile. Agencies are sorted by `matchScore` in descending order (highest match first).
- **Auth Required:** ✅ Yes

**Headers:**

```
Authorization: Bearer JWT_TOKEN
```

**Request Body:** None

**Response:**

```json
{
  "matches": [
    {
      "agencyId": "AGENCY_ID",
      "agencyName": "Startup Growth Hub",
      "matchScore": 90
    },
    {
      "agencyId": "AGENCY_ID",
      "agencyName": "Growth Marketing Co",
      "matchScore": 75
    },
    {
      "agencyId": "AGENCY_ID",
      "agencyName": "Finance Experts",
      "matchScore": 35
    }
  ]
}
```

**Response Keys:**

| Key                    | Description                                                                                |
| ---------------------- | ------------------------------------------------------------------------------------------ |
| `matches`              | Array of agency match objects, sorted by `matchScore` descending                           |
| `matches[].agencyId`   | MongoDB ObjectId of the matched agency                                                     |
| `matches[].agencyName` | Name of the matched agency                                                                 |
| `matches[].matchScore` | Compatibility score (0–100) based on services, budget, industry, and other profile factors |

> 💡 **Note:** A `matchScore` of 75 or above is generally considered a strong match. Scores below 40 indicate low compatibility.

---

### 6. Get All Clients

- **Method:** `GET`
- **Endpoint:** `/users/clients`
- **Use:** Fetch a list of all clients registered on the platform. Useful for admin dashboards or agency-side views to browse available clients.
- **Auth Required:** ✅ Yes

**Headers:**

```
Authorization: Bearer JWT_TOKEN
```

**Request Body:** None

**Response:**

```json
{
  "clients": [
    {
      "id": "USER_ID",
      "name": "John Doe",
      "email": "john@test.com",
      "role": "client",
      "profile": {
        "company": "AI Startup",
        "budget": "₹2L – ₹5L",
        "services": ["Marketing"],
        "stage": "Seed",
        "urgency": "ASAP"
      }
    }
  ]
}
```

**Response Keys:**

| Key                 | Description                                                          |
| ------------------- | -------------------------------------------------------------------- |
| `clients`           | Array of all registered client objects                               |
| `clients[].id`      | MongoDB ObjectId of the client user                                  |
| `clients[].name`    | Full name of the client                                              |
| `clients[].email`   | Email address of the client                                          |
| `clients[].role`    | Will always be `"client"`                                            |
| `clients[].profile` | The client's profile details (populated if profile has been created) |

> ⚠️ **Note:** This endpoint is sourced from `user.controller.js` → `getAllClients`. Ensure the route is mounted under `/users` or update the base path according to your router mounting configuration.

---

### 7. Get All Agencies

- **Method:** `GET`
- **Endpoint:** `/users/agencies`
- **Use:** Fetch a list of all agencies registered on the platform. Useful for admin views or client-side browsing of available agencies.
- **Auth Required:** ✅ Yes

**Headers:**

```
Authorization: Bearer JWT_TOKEN
```

**Request Body:** None

**Response:**

```json
{
  "agencies": [
    {
      "id": "AGENCY_ID",
      "name": "Jane Smith",
      "email": "jane@agency.com",
      "role": "agency",
      "profile": {
        "agencyName": "Growth Marketing Co",
        "services": ["Marketing"],
        "industries": ["SaaS"],
        "pricingRange": "₹2L – ₹5L",
        "teamSize": 12,
        "experienceYears": 6
      }
    }
  ]
}
```

**Response Keys:**

| Key                  | Description                                                          |
| -------------------- | -------------------------------------------------------------------- |
| `agencies`           | Array of all registered agency objects                               |
| `agencies[].id`      | MongoDB ObjectId of the agency user                                  |
| `agencies[].name`    | Full name of the agency account holder                               |
| `agencies[].email`   | Email address of the agency                                          |
| `agencies[].role`    | Will always be `"agency"`                                            |
| `agencies[].profile` | The agency's profile details (populated if profile has been created) |

> ⚠️ **Note:** This endpoint is sourced from `user.controller.js` → `getAllAgencies`. Ensure the route is mounted under `/users` or update the base path according to your router mounting configuration.

---

## Tech Stack

| Layer            | Technology            |
| ---------------- | --------------------- |
| Runtime          | Node.js               |
| Framework        | Express.js            |
| Database         | MongoDB               |
| ODM              | Mongoose              |
| Auth             | JWT (JSON Web Tokens) |
| Password Hashing | bcryptjs              |

---

## Notes

- All request bodies should use `Content-Type: application/json` unless otherwise specified.
- JWT tokens do not have a refresh mechanism documented — re-login to get a new token when expired.
- The `role` field during registration (`"client"` or `"agency"`) determines which profile endpoint the user should call next (`/client-profile` or `/agency-profile`).
- The `/match/agencies` endpoint uses the logged-in client's profile to compute scores — ensure the client profile is created before calling this endpoint.
- The `/users/clients` and `/users/agencies` endpoints return all registered users of that role — confirm the exact mount path in your `app.js` / `server.js` router setup.

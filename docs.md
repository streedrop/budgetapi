# API Documentation

## Transactions

### GET /api/transactions
Returns all transactions.

**Query Parameters:**

None

**Response:**
```json
[
  {
    "id": 1,
    "amount": "3000.00",
    "description": "Monthly salary",
    "category_id": 1,
    "date": "2026-01-01T05:00:00.000Z",
    "created_at": "2026-02-09T16:45:11.000Z",
    "category_name": "Salary",
    "is_income": 1
  },
  ...
]
```
### GET /api/transactions/:id
Returns a specific transaction.

**Query Parameters:**

None

**Response:**
```json
{
    "id": 1,
    "amount": "12.50",
    "description": "Spending quite a lot of money",
    "category_id": 1,
    "date": "2026-01-01T05:00:00.000Z",
    "created_at": "2026-02-09T19:58:30.000Z",
    "category_name": "Salary",
    "is_income": 1
}
```

### GET /api/transactions/category/:id
Returns all transactions that match a specific category.

**Query Parameters:**

None

**Response:**
```json
[
  {
    "id": 1,
    "amount": "3000.00",
    "description": "Monthly salary #1",
    "category_id": 1,
    "date": "2026-01-01T05:00:00.000Z",
    "created_at": "2026-02-09T16:45:11.000Z",
    "is_income": 1
  },
  {
    "id": 4,
    "amount": "3000.00",
    "description": "Monthly salary #2",
    "category_id": 1,
    "date": "2026-01-15T05:00:00.000Z",
    "created_at": "2026-02-09T16:45:11.000Z",
    "is_income": 1
  },
  ...
]
```

### POST /api/transactions
Creates a new transaction.

**Query Parameters:**
- `amount` : Amount of the transation (positive or negative)
- `description` : What the transaction is about
- `category` : The ID of the category to which the transaction is related
- `date` : The date at which the transaction took place

**Response:**
```json
{
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": ...,
    "info": "",
    "serverStatus": 2,
    "warningStatus": 0,
    "changedRows": 0
}
```

### PUT /api/transactions/:id
Edits an existing transaction.

**Query Parameters:**
- `amount` : Amount of the transation (positive or negative)
- `description` : What the transaction is about
- `category` : The ID of the category to which the transaction is related
- `date` : The date at which the transaction took place

**Response:**
```json
{
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 0,
    "info": "Rows matched: 1  Changed: 1  Warnings: 0",
    "serverStatus": 2,
    "warningStatus": 0,
    "changedRows": 1
}
```

### DELETE /api/transactions/:id
Deletes an existing transaction.

**Query Parameters:**

None

**Response:**
```json
{
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 0,
    "info": "",
    "serverStatus": 2,
    "warningStatus": 0,
    "changedRows": 0
}
```

### DELETE /api/transactions/category/:id
Deletes all the transactions that have the passed ID as their category_id.

**Query Parameters:**

None

**Response:**
```json
{
    "fieldCount": 0,
    "affectedRows": 4,
    "insertId": 0,
    "info": "",
    "serverStatus": 2,
    "warningStatus": 0,
    "changedRows": 0
}
```

## Categories

### GET /api/categories
Returns all categories.

**Query Parameters:**

None

**Response:**
```json
[
    {
        "id": 1,
        "name": "Salary",
        "description": "My salary working at McDonald's",
        "is_income": 1,
        "goal": 1500,
        "created_at": "2026-02-26T15:26:44.000Z"
    },
    ...
]
```
### GET /api/categories/:id
Returns a specific category.

**Query Parameters:**

None

**Response:**
```json
{
    "id": 1,
    "name": "Salary",
    "description": "My salary working at McDonald's",
    "is_income": 1,
    "goal": 1500,
    "created_at": "2026-02-26T15:26:44.000Z"
}
```

### POST /api/categories
Creates a new category.

**Query Parameters:**
- `name` : Name for the category
- `description` : More info about this specific category
- `is_income` : Whether or not the category stores income transactions
- `goal` : How much you wish to earn/spend in this category in a month

**Response:**
```json
{
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": ...,
    "info": "",
    "serverStatus": 2,
    "warningStatus": 0,
    "changedRows": 0
}
```

### PUT /api/categories/:id
Edits an existing category.

**Query Parameters:**
- `name` : Name for the category
- `description` : More info about this specific category
- `is_income` : Whether or not the category stores income transactions
- `goal` : How much you wish to earn/spend in this category in a month

**Response:**
```json
{
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 0,
    "info": "Rows matched: 1  Changed: 1  Warnings: 0",
    "serverStatus": 2,
    "warningStatus": 0,
    "changedRows": 1
}
```

### DELETE /api/categories/:id
Deletes an existing category.

**Query Parameters:**

None

**Response:**
```json
{
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 0,
    "info": "",
    "serverStatus": 2,
    "warningStatus": 0,
    "changedRows": 0
}
```
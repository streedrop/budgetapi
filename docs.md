# API Documentation

## Transactions

### GET /api/transactions
Returns all transactions for a user.

**Query Parameters:**

None

**Response:**
```json
[
  {
    "id": 1,
    "amount": "3000.00",
    "description": "Monthly salary",
    "created_at": "2026-02-09T16:45:11.000Z"
  },
  ...
]
```

### POST /api/transactions
Creates a new transaction.

**Query Parameters:**
- `amount` : Amount of the transation (positive or negative)
- `description` : What the transaction is about

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

### PUT /api/transaction/id
Edits an existing transaction.

**Query Parameters:**
- `amount` : Amount of the transation (positive or negative)
- `description` : What the transaction is about

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
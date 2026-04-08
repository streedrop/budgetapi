# API Documentation

## Transactions

### GET /api/transactions
Returns all transactions.

**Query Parameters:**

None

**Query Body:**

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
    "category_name": "Salary",
    "is_income": 1
  },
  ...
]
```
### GET /api/transactions/:id
Returns a specific transaction.

**Query Parameters:**

- `id` : The ID of the transaction to retrieve.

**Query Body:**

None

**Response:**
```json
{
    "id": 1,
    "amount": "12.50",
    "description": "Spending quite a lot of money",
    "category_id": 1,
    "date": "2026-01-01T05:00:00.000Z",
    "category_name": "Salary",
    "is_income": 1
}
```

### GET /api/transactions/category/:id
Returns all transactions that match a specific category. The ID can be 'null' to get all uncategorized transactions.

**Query Parameters:**

- `id` : The ID of the category to retrieve its transactions.

**Query Body:**

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
    "is_income": 1
  },
  {
    "id": 4,
    "amount": "3000.00",
    "description": "Monthly salary #2",
    "category_id": 1,
    "date": "2026-01-15T05:00:00.000Z",
    "is_income": 1
  },
  ...
]
```

### POST /api/transactions
Creates a new transaction.

**Query Parameters:**

None

**Query Body:**
- `amount` : Amount of the transation (positive or negative)
- `description` : What the transaction is about
- `category_id` : The ID of the category to which the transaction is related
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

- `id` : The ID of the transaction to update.

**Query Body:**
- `amount` : Amount of the transation (positive or negative)
- `description` : What the transaction is about
- `category_id` : The ID of the category to which the transaction is related
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

- `id` : The ID of the transaction to delete.

**Query Body:**

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

## Categories

### GET /api/categories
Returns all categories.

**Query Parameters:**

None

**Query Body:**

None

**Response:**
```json
[
    {
        "id": 1,
        "name": "Salary",
        "description": "My salary working at McDonald's",
        "is_income": 1,
        "icon": 1,
        "count": 4
    },
    ...
]
```
### GET /api/categories/:id
Returns a specific category.

**Query Parameters:**

- `id` : The ID of the category to retrieve.

**Query Body:**

None

**Response:**
```json
{
    "id": 1,
    "name": "Salary",
    "description": "My salary working at McDonald's",
    "is_income": 1,
    "icon": 1
}
```

### POST /api/categories
Creates a new category.

**Query Parameters:**

None

**Query Body:**
- `name` : Name for the category
- `description` : More info about this specific category
- `is_income` : Whether or not the category stores income transactions
- `icon` : The icon ID for this category

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

- `id` : The ID of the category to update.

**Query Body:**
- `name` : Name for the category
- `description` : More info about this specific category
- `is_income` : Whether or not the category stores income transactions
- `icon` : The icon ID for this category

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

- `id` : The ID of the category to delete.

**Query Body:**

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

## Rules

### GET /api/rules
Returns all rules.

**Query Parameters:**

None

**Query Body:**

None

**Response:**
```json
[
    {
        "id": 1,
        "source": "description",
        "match_type": "equals",
        "keyword": "Salary",
        "action": "move",
        "category_id": 1,
        "new_string": null,
    },
    ...
]
```

### POST /api/rules
Creates a new rule.

**Query Parameters:**

None

**Query Body:**
- `source` : 'description' or 'category': Where to look for the keyword.
- `condition` : 'contains' or 'equals': How should the keyword match the source.
- `keyword` : Keyword.
- `action` : 'move', 'ignore', 'rename' or 'replace': What to do once the keyword is found.
- `category_id` : If the action is 'move', ID of the category to move it to.
- `new_string` : If the action is 'rename', new name for the transaction.

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

### DELETE /api/rules/:id
Deletes an existing rule.

**Query Parameters:**

- `id` : The id matching the rule.

**Query Body:**

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

## Monthly budget

### GET /api/budget
Returns all monthly budget entries for a every category.

**Query Parameters:**

None

**Query Body:**

None

**Response:**
```json
[
    {
        "category_id": 1,
        "month": "2025-01-01T05:00:00.000Z",
        "amount": "3.50"
    },
    ...
]
```

### GET /api/budget/:id
Returns all monthly budget entries for a given category ID.

**Query Parameters:**

- `id` : The ID of the category for which we want to retrieve all monthly budget entries.

**Query Body:**

None

**Response:**
```json
[
    {
        "category_id": 1,
        "month": "2025-01-01T05:00:00.000Z",
        "amount": "3.50"
    },
    ...
]
```

### GET /api/budget/:id/:month
Returns the monthly budget for a given month of a given category.

**Query Parameters:**

- `id` : The ID of the category that the monthly budget entry relates to.
- `month` : The month of the monthly budget entry to be fetched.

**Query Body:**

None

**Response:**
```json
{
    "category_id": 1,
    "month": "2025-01-01T05:00:00.000Z",
    "amount": "3.50"
}
```

### PUT /api/budget/:id/:month
Creates a new monthly budget entry for a given month of a given category, or updates it if it already exists.

**Query Parameters:**

- `id` : The ID of the category that the monthly budget entry relates to.
- `month` : The month of the monthly budget entry to be upserted.

**Query Body:**
- `amount` : The new amount for the monthly budget.

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

### DELETE /api/budget/:id/:month
Deletes an existing monthly budget entry.

**Query Parameters:**

- `id` : The ID of the category that the monthly budget entry relates to.
- `month` : The month of the monthly budget entry to be deleted.

**Query Body:**

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
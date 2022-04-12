# Firebase Inventory API

A simple REST API using Firebase Cloud Functions with Express

## Development Setup

### Install

- [Git](https://git-scm.com/downloads)
- [Node 16.x.x](https://nodejs.org)
- [NPM 8.x.x](https://nodejs.org)
- [Firebase](https://www.npmjs.com/package/firebase)

---
**NOTE**
- In order to the run the app , please switch to:
- [Pay as you go](https://firebase.google.com/pricing)
---

### Steps

- Clone repository

	```bash
	git clone git@github.com:sadb01/firebase-inventory-api.git
	```

- Access application directory

	```
	cd firebase-inventory-api/functions
	```

- Install dependencies
    ```
    npm install
    ```
- Login to Firebase and initialize the app

	```
    firebase login
    firebase init
	```

- Deploy
    ```
    firebase deploy --only functions
    ```

## Documentation

# GET /api/inventory/

Endpoint to get list of inventory items

### Response Body

### Success

| Name | Type | Required | Default | Description |
| -------- | -- | ----- | ---------- | ---------------- |
| status | int | T | *none* | HTTP response code |
| items | Array<object> | T | *none* | List of inventory items |

### Sample response

```json
{
    "items": [
        {
            "id": "test-item-id-1",
            "name": "milk",
            "basePrice": 50,
            "quantity": 15
        },
        {
            "id": "test-item-id-2",
            "name": "shampoo",
            "basePrice": 12,
            "quantity": 95
        }
    ]
}
```

### Errors

| Name | Type | Required | Default | Description |
| -------- | -- | ----- | ---------- | ---------------- |
| status | int | T | *none* | HTTP error code |
| message | string | T | *none* | HTTP response message |
| errors | Array<string> | T | *none* | List of error messages |

### Sample error response

```json
{
    "message": "Something went wrong: Some error...",
    "errors": []
}
```

# GET /api/inventory/:id

Endpoint to get an inventory item

### Response Body

### Success

| Name | Type | Required | Default | Description |
| -------- | -- | ----- | ---------- | ---------------- |
| status | int | T | *none* | HTTP response code |
| item | object | T | *none* | Inventory item |

### Sample response

```json
{
    "item": {
        "id": "test-item-id-1",
        "name": "milk",
        "basePrice": 50,
        "quantity": 15
    }
}
```

### Errors

| Name | Type | Required | Default | Description |
| -------- | -- | ----- | ---------- | ---------------- |
| status | int | T | *none* | HTTP error code |
| message | string | T | *none* | HTTP response message |
| errors | Array<string> | T | *none* | List of error messages |

### Sample error response

```json
{
    "message": "Something went wrong: Some error...",
    "errors": []
}
```

# POST /api/inventory/

Endpoint to create an inventory item

## Request Body

| Name | Type | Required | Default | Description |
| -------- | -- | ----- | ---------- | ---------------- |
| name | string | T | *none* | Inventory item name |
| basePrice | number | T | *none* | Inventory item base price |
| quantity | number | T | *none* | Inventory item quantity |


### Sample request to create an inventory item

```json
{
    "name": "Alienware Laptop",
    "basePrice": 110000,
    "quantity": 3
}
```

### Response Body

### Success

| Name | Type | Required | Default | Description |
| -------- | -- | ----- | ---------- | ---------------- |
| status | int | T | *none* | HTTP response code |
| message | string | T | *none* | HTTP response message |
| item | object | T | *none* | Inventory item |
| item.name | string | T | *none* | Inventory item name |
| item.basePrice | number | T | *none* | Inventory item base price |
| item.quantity | number | T | *none* | Inventory item quantity |

### Sample response

```json
{
    "message": "Successfully created an item",
    "item": {
        "name": "Alienware Laptop",
        "basePrice": 110000,
        "quantity": 3
    }
}
```

### Errors

| Name | Type | Required | Default | Description |
| -------- | -- | ----- | ---------- | ---------------- |
| status | int | T | *none* | HTTP error code |
| message | string | T | *none* | Response message |
| errors | Array<string> | T | *none* | List of error messages |

### Sample error response

```json
{
    "message": "Something went wrong: Some error...",
    "errors": []
}
```

# PUT /api/inventory/:id

Endpoint to update an inventory item

## Request Body

| Name | Type | Required | Default | Description |
| -------- | -- | ----- | ---------- | ---------------- |
| name | string | F | *none* | Inventory item name |
| basePrice | number | F | *none* | Inventory item base price |
| quantity | number | F | *none* | Inventory item quantity |


### Sample request to update an inventory item

```json
{
    "quantity": 20
}
```

### Response Body

### Success

| Name | Type | Required | Default | Description |
| -------- | -- | ----- | ---------- | ---------------- |
| status | int | T | *none* | HTTP response code |
| message | string | T | *none* | HTTP response message |
| item | object | T | *none* | Inventory item |
| item.name | string | T | *none* | Inventory item name |
| item.basePrice | number | T | *none* | Inventory item base price |
| item.quantity | number | T | *none* | Inventory item quantity |

### Sample response

```json
{
    "message": "Successfully updated an item: test-id-id",
    "item": {
        "name": "Alienware Laptop",
        "basePrice": 110000,
        "quantity": 20
    }
}
```

### Errors

| Name | Type | Required | Default | Description |
| -------- | -- | ----- | ---------- | ---------------- |
| status | int | T | *none* | HTTP error code |
| message | string | T | *none* | HTTP response message |
| errors | Array<string> | T | *none* | List of error messages |

### Sample error response

```json
{
    "message": "Something went wrong: Some error...",
    "errors": []
}
```

# DELETE /api/inventory/:id

Endpoint to delete an inventory item

### Response Body

### Success

| Name | Type | Required | Default | Description |
| -------- | -- | ----- | ---------- | ---------------- |
| status | int | T | *none* | HTTP response code |
| message | string | T | *none* | HTTP response message |

### Sample response

```json
{
    "message": "Successfully deleted an item: test-id-1"
}
```

### Errors

| Name | Type | Required | Default | Description |
| -------- | -- | ----- | ---------- | ---------------- |
| status | int | T | *none* | HTTP error code |
| message | string | T | *none* | HTTP response message |
| errors | Array<string> | T | *none* | List of error messages |

### Sample error response

```json
{
    "message": "Something went wrong: Some error...",
    "errors": []
}
```

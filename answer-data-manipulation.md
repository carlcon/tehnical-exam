Technical Exam

Using the initial data below create a function that will achieve the expected result data show it to console:

Initial data:

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "status": 1
  },
  {
    "id": 2,
    "name": "Jane Doe",
    "status": 2
  },
  {
    "id": 3,
    "name": "Adam Rocket",
    "status": 2
  },
  {
    "id": 4,
    "name": "Luis Rocket",
    "status": 1
  }
]
```

Expected Result Data:

```json
{
  "status-1": [
    {
      "id": 1,
      "name": "John Doe",
      "status": 1
    },
    {
      "id": 4,
      "name": "Luis Rocket",
      "status": 1
    }
  ],
  "status-2": [
    {
      "id": 2,
      "name": "Jane Doe",
      "status": 2
    },
    {
      "id": 3,
      "name": "Adam Rocket",
      "status": 2
    }
  ]
}
```

===
ANSWER
===

```js
function transformData(data) {
  const STATUSES = [1, 2];
  const statusObj = {};

  for (let i = 0; i < STATUSES.length; i++) {
    const person = data.filter((person) => person.status === STATUSES[i]);

    statusObj["status-" + parseInt(i + 1)] = person;
  }

  console.log(statusObj);

  return statusObj;
}
```

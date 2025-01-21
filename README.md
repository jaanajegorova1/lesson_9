## Get Test Orders

| #   | Test name                                                 | Should receive code | Received code | Status |
| --- |-----------------------------------------------------------| ------------------- | ------------- | ------ |
| 1   | Get test orders with correct data                         | 200                 | 200           | Passed |
| 2   | Get test orders with correct similar data                 | 200                 | 200           | Passed |
| 3   | Get test orders with username and password equals 0       | 400                 | 200           | Failed |
| 4   | Get test orders with data contains specific symbols       | 400                 | 200           | Failed |
| 5   | Get test orders with password in float type               | 400                 | 200           | Failed |
| 6   | Get test orders with string username and numbers password | 200                 | 200           | Passed |
| 7   | Get test orders without required parameter password       | 500                 | 500           | Passed |
| 8   | Get test orders without required parameter username       | 500                 | 500           | Passed |
| 9   | Get test orders with password = &                         | 500                 | 200           | Failed |
| 10  | Get test orders when parameters = numbers                 | 500                 | 200           | Failed |
| 11  | Get test orders with parameters = string                  | 500                 | 200           | Failed |
| 12  | Get test orders when username and password are missing.   | 500                 | 500           | Passed |

## Delete Test Orders

| #   | Test name                                                    | Should receive code | Received code | Status |
| --- | ------------------------------------------------------------ | ------------------- | ------------- | ------ |
| 1   | Delete an order by providing a valid order ID                | 204                 | 204           | Passed |
| 2   | Delete an order by providing a invalid order ID              | 400                 | 400           | Passed |
| 3   | Delete an order without providing API key for authentication | 400                 | 400           | Passed |
| 4   | Delete an order without providing required parameter ID      | 405                 | 405           | Passed |
| 5   | Delete an order with ID = 0                                  | 400                 | 400           | Passed |
| 6   | Delete an order with API key less than 16 digits             | 401                 | 401           | Passed |

## Put Test Orders

| #   | Test name                                                 | Should receive code | Received code | Status |
| --- | --------------------------------------------------------- | ------------------- | ------------- | ------ |
| 1   | Update order with correct data                            | 200                 | 200           | Passed |
| 2   | Update order by providing a invalid order ID              | 400                 | 400           | Passed |
| 3   | Update order without providing API key for authentication | 401                 | 401           | Passed |
| 4   | Update order without providing required parameter ID      | 405                 | 405           | Passed |
| 5   | Update order with ID = 0                                  | 400                 | 400           | Passed |
| 6   | Update order with API key less than 16 digits             | 401                 | 401           | Passed |

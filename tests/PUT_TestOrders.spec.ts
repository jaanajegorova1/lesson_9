import { expect, test } from "@playwright/test";
import { StatusCodes } from "http-status-codes";
//Update an order by providing a valid order ID. Requires a valid 16-digit API key in the 'api_key' header
//#1.
test("Update order with correct data should receive code 200", async ({
  request,
}) => {
  const requestHeaders = {
    api_key: "1234567890123456",
  };
  const requestBody = {
    status: "OPEN",
    courierId: 0,
    customerName: "Daniel Ro",
    customerPhone: "555112233",
    comment: "This user data update was done using API request",
    id: 5,
  };
  const response = await request.put(
    "https://backend.tallinn-learning.ee/test-orders/5",
    {
      data: requestBody,
      headers: requestHeaders,
    },
  );
  console.log("response status:", response.status());
  console.log("response body:", await response.json());
  console.log("response headers: ", response.headers());
  expect(response.status()).toBe(StatusCodes.OK);
});
//#2
test("Update order by providing a invalid order ID should receive code 400", async ({
  request,
}) => {
  const requestHeaders = {
    api_key: "1234567890123456",
  };
  const requestBody = {
    status: "OPEN",
    courierId: 0,
    customerName: "Daniel Ro",
    customerPhone: "555112233",
    comment: "This user data update was done using API request",
    id: -1,
  };
  const response = await request.put(
    "https://backend.tallinn-learning.ee/test-orders/-1",
    {
      data: requestBody,
      headers: requestHeaders,
    },
  );
  console.log("response status:", response.status());
  console.log("response body:", await response.json());
  console.log("response headers: ", response.headers());
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST);
});
//#3
test("Update order without providing API key for authentication should receive code 401", async ({
  request,
}) => {
  const requestHeaders = {
    api_key: "",
  };
  const requestBody = {
    status: "OPEN",
    courierId: 0,
    customerName: "Daniel Ro",
    customerPhone: "555112233",
    comment: "This user data update was done using API request",
    id: 3,
  };
  const response = await request.put(
    "https://backend.tallinn-learning.ee/test-orders/3",
    {
      data: requestBody,
      headers: requestHeaders,
    },
  );
  console.log("response status:", response.status());
  console.log("response headers: ", response.headers());
  expect(response.status()).toBe(StatusCodes.UNAUTHORIZED);
});
//#4
test("Update order without providing required parameter ID should receive code 405", async ({
  request,
}) => {
  const requestHeaders = {
    api_key: "1234567890123456",
  };
  const requestBody = {
    status: "OPEN",
    courierId: 0,
    customerName: "Daniel Ro",
    customerPhone: "555112233",
    comment: "This user data update was done using API request",
    id: 5,
  };
  const response = await request.put(
    "https://backend.tallinn-learning.ee/test-orders/",
    {
      data: requestBody,
      headers: requestHeaders,
    },
  );
  console.log("response status:", response.status());
  console.log("response body:", await response.json());
  console.log("response headers: ", response.headers());
  expect(response.status()).toBe(StatusCodes.METHOD_NOT_ALLOWED);
});
//#5
test("Update order with ID = 0 should receive code 400", async ({
  request,
}) => {
  const requestHeaders = {
    api_key: "1234567890123456",
  };
  const requestBody = {
    status: "OPEN",
    courierId: 0,
    customerName: "Daniel Ro",
    customerPhone: "555112233",
    comment: "This user data update was done using API request",
    id: 5,
  };
  const response = await request.put(
    "https://backend.tallinn-learning.ee/test-orders/0",
    {
      data: requestBody,
      headers: requestHeaders,
    },
  );
  console.log("response status:", response.status());
  console.log("response body:", await response.json());
  console.log("response headers: ", response.headers());
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST);
});
//#6
test("Update order with API key less than 16 digits should receive code 401", async ({
  request,
}) => {
  const requestHeaders = {
    api_key: "12345",
  };
  const requestBody = {
    status: "OPEN",
    courierId: 0,
    customerName: "Daniel Ro",
    customerPhone: "555112233",
    comment: "This user data update was done using API request",
    id: 5,
  };
  const response = await request.put(
    "https://backend.tallinn-learning.ee/test-orders/5",
    {
      data: requestBody,
      headers: requestHeaders,
    },
  );
  console.log("response status:", response.status());
  console.log("response headers: ", response.headers());
  expect(response.status()).toBe(StatusCodes.UNAUTHORIZED);
});

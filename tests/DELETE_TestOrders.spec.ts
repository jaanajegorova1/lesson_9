import { expect, test } from "@playwright/test";
import { StatusCodes } from "http-status-codes";
//Delete an order by providing a valid order ID. Requires a valid 16-digit API key in the 'api_key' header.
//#1
test("Delete an order by providing a valid order ID should receive code 204", async ({
  request,
}) => {
  const requestHeaders = {
    api_key: "1234567890123456",
  };
  const response = await request.delete(
    "https://backend.tallinn-learning.ee/test-orders/6",
    {
      headers: requestHeaders,
    },
  );
  console.log("response status:", response.status());
  console.log("response headers: ", response.headers());
  expect(response.status()).toBe(StatusCodes.NO_CONTENT);
});
//#2
test("Delete an order by providing a invalid order ID should receive code 400", async ({
  request,
}) => {
  const requestHeaders = {
    api_key: "1234567890123456",
  };
  const response = await request.delete(
    "https://backend.tallinn-learning.ee/test-orders/-1",
    {
      headers: requestHeaders,
    },
  );
  console.log("response status:", response.status());
  console.log("response headers: ", response.headers());
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST);
});
//#3
test("Delete an order without providing API key for authentication should receive code 400", async ({
  request,
}) => {
  const requestHeaders = {
    api_key: "",
  };
  const response = await request.delete(
    "https://backend.tallinn-learning.ee/test-orders/-1",
    {
      headers: requestHeaders,
    },
  );
  console.log("response status:", response.status());
  console.log("response headers: ", response.headers());
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST);
});
//#4
test("Delete an order without providing required parameter ID should receive code 405", async ({
  request,
}) => {
  const requestHeaders = {
    api_key: "1234567890123456",
  };
  const response = await request.delete(
    "https://backend.tallinn-learning.ee/test-orders/",
    {
      headers: requestHeaders,
    },
  );
  console.log("response status:", response.status());
  console.log("response headers: ", response.headers());
  expect(response.status()).toBe(StatusCodes.METHOD_NOT_ALLOWED);
});
//#5
test("Delete an order with ID = 0 should receive code 400", async ({
  request,
}) => {
  const requestHeaders = {
    api_key: "1234567890123456",
  };
  const response = await request.delete(
    "https://backend.tallinn-learning.ee/test-orders/0",
    {
      headers: requestHeaders,
    },
  );
  console.log("response status:", response.status());
  console.log("response headers: ", response.headers());
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST);
});
//#6
test("Delete an order with API key less than 16 digits should receive code 401", async ({
  request,
}) => {
  const requestHeaders = {
    api_key: "12345",
  };
  const response = await request.delete(
    "https://backend.tallinn-learning.ee/test-orders/5",
    {
      headers: requestHeaders,
    },
  );
  console.log("response status:", response.status());
  console.log("response headers: ", response.headers());
  expect(response.status()).toBe(StatusCodes.UNAUTHORIZED);
});

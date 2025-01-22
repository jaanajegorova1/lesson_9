import { expect, test } from "@playwright/test";
import { StatusCodes } from "http-status-codes";
//Authenticate a user by providing a valid username and password. Returns an API key.
//#1
test("Get test orders with correct data should receive code 200", async ({
  request,
}) => {
  const requestParameters = {
    username: "Tester1",
    password: "passwordTester1",
  };
  const response = await request.get(
    "https://backend.tallinn-learning.ee/test-orders",
    {
      params: requestParameters,
    },
  );
  const responseBody = await response.json();
  console.log("response status:", response.status());
  console.log("response body:", await response.json());
  console.log("response headers:", response.headers());
  expect(response.status()).toBe(StatusCodes.OK);
  expect(responseBody.apiKey).not.toBe(null);
});
//#2
test("Get test orders with correct similar data should receive code 200", async ({
  request,
}) => {
  const requestParameters = {
    username: "Tester/123",
    password: "Tester/123",
  };
  const response = await request.get(
    "https://backend.tallinn-learning.ee/test-orders",
    {
      params: requestParameters,
    },
  );
  const responseBody = await response.json();
  console.log("response status:", response.status());
  console.log("response body:", await response.json());
  console.log("response headers:", response.headers());
  expect(response.status()).toBe(StatusCodes.OK);
  expect(responseBody.apiKey).not.toBe(null);
});
//#3
test("Get test orders with username and password equals 0 should receive code 400", async ({
  request,
}) => {
  const requestParameters = {
    username: "0",
    password: "0",
  };
  const response = await request.get(
    "https://backend.tallinn-learning.ee/test-orders",
    {
      params: requestParameters,
    },
  );
  const responseBody = await response.json();
  console.log("response status:", response.status());
  console.log("response body:", await response.json());
  console.log("response headers:", response.headers());
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST);
  console.log(response); //Expected: 400, Received: 200
  expect(responseBody.apiKey).not.toBe(null);
});
//#4
test("Get test orders with data contains specific symbols should receive code 400", async ({
  request,
}) => {
  const requestParameters = {
    username: "//",
    password: "Te./123",
  };
  const response = await request.get(
    "https://backend.tallinn-learning.ee/test-orders",
    {
      params: requestParameters,
    },
  );
  const responseBody = await response.json();
  console.log("response status:", response.status());
  console.log("response body:", await response.json());
  console.log("response headers:", response.headers());
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST);
  console.log(response); //Expected: 400, Received: 200
  expect(responseBody.apiKey).not.toBe(null);
});
//#5
test("Get test orders with password in float type should receive code 400", async ({
  request,
}) => {
  const requestParameters = {
    username: "Tre1",
    password: "32,3+e18",
  };
  const response = await request.get(
    "https://backend.tallinn-learning.ee/test-orders",
    {
      params: requestParameters,
    },
  );
  const responseBody = await response.json();
  console.log("response status:", response.status());
  console.log("response body:", await response.json());
  console.log("response headers:", response.headers());
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST);
  console.log(response); //Expected: 400, Received: 200
  expect(responseBody.apiKey).not.toBe(null);
});
//#6
test("Get test orders with string username and numbers password should receive code 200", async ({
  request,
}) => {
  const requestParameters = {
    username: "abc",
    password: "444",
  };
  const response = await request.get(
    "https://backend.tallinn-learning.ee/test-orders",
    {
      params: requestParameters,
    },
  );
  const responseBody = await response.json();
  console.log("response status:", response.status());
  console.log("response body:", await response.json());
  console.log("response headers:", response.headers());
  expect(response.status()).toBe(StatusCodes.OK);
  expect(responseBody.apiKey).not.toBe(null);
});
//#7
test("Get test orders without required parameter password should receive code 500", async ({
  request,
}) => {
  const requestParameters = {
    username: "Tester1",
    password: "",
  };
  const response = await request.get(
    "https://backend.tallinn-learning.ee/test-orders",
    {
      params: requestParameters,
    },
  );
  const responseBody = await response.json();
  console.log("response status:", response.status()); //Expected: 500, Received: 200
  console.log("response body:", await response.json());
  console.log("response headers:", response.headers());
  expect(response.status()).toBe(StatusCodes.INTERNAL_SERVER_ERROR);
  expect(responseBody.apiKey).toBe(null);
});
//#8
test("Get test orders without required parameter username should receive code 500", async ({
  request,
}) => {
  const requestParameters = {
    username: "",
    password: "Tester1",
  };
  const response = await request.get(
    "https://backend.tallinn-learning.ee/test-orders",
    {
      params: requestParameters,
    },
  );
  const responseBody = await response.json();
  console.log("response status:", response.status());
  console.log("response body:", await response.json());
  console.log("response headers:", response.headers());
  expect(response.status()).toBe(StatusCodes.INTERNAL_SERVER_ERROR);
  expect(responseBody.apiKey).toBe(null);
});
//#9
test("Get test orders with password = & should receive code 400", async ({
  request,
}) => {
  const requestParameters = {
    username: "Tester1",
    password: "&",
  };
  const response = await request.get(
    "https://backend.tallinn-learning.ee/test-orders",
    {
      params: requestParameters,
    },
  );
  const responseBody = await response.json();
  console.log("response status:", response.status());
  console.log("response body:", await response.json());
  console.log("response headers:", response.headers());
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST);
  console.log(response); //Expected: 400, Received: 200
  expect(responseBody.apiKey).not.toBe(null);
});
//#10
test("Get test orders when both parameters = numbers should receive code 400", async ({
  request,
}) => {
  const requestParameters = {
    username: "123456789",
    password: "123456789",
  };
  const response = await request.get(
    "https://backend.tallinn-learning.ee/test-orders",
    {
      params: requestParameters,
    },
  );
  const responseBody = await response.json();
  console.log("response status:", response.status());
  console.log("response body:", await response.json());
  console.log("response headers:", response.headers());
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST);
  console.log(response); //Expected: 400, Received: 200
  expect(responseBody.apiKey).not.toBe(null);
});
//#11
test("Get test orders with both parameters = string should receive code 400", async ({
  request,
}) => {
  const requestParameters = {
    username: "textusername",
    password: "textpassword",
  };
  const response = await request.get(
    "https://backend.tallinn-learning.ee/test-orders",
    {
      params: requestParameters,
    },
  );
  const responseBody = await response.json();
  console.log("response status:", response.status());
  console.log("response body:", await response.json());
  console.log("response headers:", response.headers());
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST);
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST);
  console.log(response); //Expected: 400, Received: 200
  expect(responseBody.apiKey).not.toBe(null);
});
//#12
test("Get test orders when username and password are missing should receive code 500", async ({
  request,
}) => {
  const requestParameters = {
    username: "",
    password: "",
  };
  const response = await request.get(
    "https://backend.tallinn-learning.ee/test-orders",
    {
      params: requestParameters,
    },
  );
  const responseBody = await response.json();
  console.log("response status:", response.status());
  console.log("response body:", await response.json());
  console.log("response headers:", response.headers());
  expect(response.status()).toBe(StatusCodes.INTERNAL_SERVER_ERROR);
  expect(responseBody.apiKey).toBe(null);
});

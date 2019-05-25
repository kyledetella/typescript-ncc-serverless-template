import { main } from "./";
import {
  APIGatewayProxyEvent,
  APIGatewayEventRequestContext
} from "aws-lambda";

describe("Main", () => {
  let fakeApPIGatewayEvent: APIGatewayProxyEvent;
  let body: string;

  beforeEach(() => {
    body = JSON.stringify({ now: Date.now() });

    // TODO: Properly stub AWS constructs
    fakeApPIGatewayEvent = {
      body,
      headers: {},
      httpMethod: "POST",
      isBase64Encoded: false,
      multiValueHeaders: {},
      multiValueQueryStringParameters: null,
      path: "/",
      pathParameters: null,
      queryStringParameters: null,
      stageVariables: null,
      requestContext: {} as APIGatewayEventRequestContext,
      resource: ""
    };
  });

  test("returns body", async () => {
    expect(await main(fakeApPIGatewayEvent)).toEqual({
      statusCode: 200,
      body: JSON.stringify({ youSent: body })
    });
  });
});

if (process.env.NODE_ENV === "production") {
  // tslint:disable:no-var-requires
  const awsXRay = require("aws-xray-sdk");
  awsXRay.captureAWS(require("aws-sdk"));
  // tslint:enable:no-var-requires
}

import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const main = async ({
  body
}: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => ({
  statusCode: 200,
  body: JSON.stringify({ youSent: body })
});

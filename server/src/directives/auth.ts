/* eslint-disable @typescript-eslint/no-explicit-any */
import { SchemaDirectiveVisitor } from "graphql-tools";
import { defaultFieldResolver } from "graphql";
import { verify } from "jsonwebtoken";
import { AuthenticationError } from "apollo-server-koa";
import { DebugToken } from "../generated/graphql";

const AUTH_SECRET_KEY = process.env.SECRET_KEY || "development";

export default class AuthDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field: any): any {
    const { resolve = defaultFieldResolver } = field;
    field.resolve = async function(...args: any[]): Promise<any> {
      const context = args[2];
      if (context && context.headers.authorization) {
        try {
          const authToken = verify(
            context.headers.authorization,
            AUTH_SECRET_KEY
          ) as DebugToken;
          context.authToken = authToken;
        } catch (err) {
          throw new AuthenticationError("Unable to verify token" + err);
        }
        const result = await resolve.apply(this, args);
        return result;
      } else {
        throw new AuthenticationError("No token provided");
      }
    };
  }
}

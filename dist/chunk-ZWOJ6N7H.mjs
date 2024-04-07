import {
  BadRequest
} from "./chunk-EMNCJOCG.mjs";

// src/error-handler.ts
import { ZodError } from "zod";
var errorHandler = (error, request, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: "Error during validation",
      errors: error.flatten().fieldErrors
    });
  }
  if (error instanceof BadRequest) {
    return reply.status(400).send({
      message: error.message
    });
  }
  return reply.status(500).send({
    message: "An error occurred. Please try again later."
  });
};

export {
  errorHandler
};

import {
  registForEvent
} from "./chunk-WAXLD4G7.mjs";
import {
  errorHandler
} from "./chunk-ZWOJ6N7H.mjs";
import {
  checkIn
} from "./chunk-FTZYZWWR.mjs";
import {
  createEvent
} from "./chunk-EBP5NCOX.mjs";
import "./chunk-RX5D2CAN.mjs";
import {
  getAttendeeBadge
} from "./chunk-O4SA35N5.mjs";
import {
  getEventAttendees
} from "./chunk-EAZ46QFS.mjs";
import {
  getEvent
} from "./chunk-CTIWQ2DO.mjs";
import "./chunk-EMNCJOCG.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import { jsonSchemaTransform, serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import fastifyCors from "@fastify/cors";
var app = fastify();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass.in",
      description: "Especifica\xE7\xF5es da API para o backend da aplica\xE7\xE3o do pass.in construido durante o NLW Unite da RocketSeat",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUI, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("The server is running on port 3333");
});
export {
  app
};

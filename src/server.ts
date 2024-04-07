import fastify from "fastify";
import { serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod';

import { createEvent } from "./routes/create-events";
import { registForEvent } from "./routes/register-for-event";
import { getEvent } from "./routes/get-event";
import { getAttendeeBadge } from "./routes/get-attendee-badge";

const app = fastify();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createEvent)
app.register(registForEvent)
app.register(getEvent)
app.register(getAttendeeBadge)

app.listen({port: 3333 }).then(() => {
  console.log('The server is running on port 3333')
})
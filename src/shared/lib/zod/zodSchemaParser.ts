import type { ZodObject } from "zod";
interface ZodShemaParserI {
  schema: ZodObject;
  data: unknown;
}
export async function zodSchemaParser({ schema, data }: ZodShemaParserI) {
  const parseResult = await schema.safeParseAsync(data);
  if (parseResult.success) {
    return parseResult;
  } else {
    throw parseResult.error;
  }
}

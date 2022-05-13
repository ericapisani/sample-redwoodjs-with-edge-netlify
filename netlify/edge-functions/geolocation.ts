import type { Context } from "netlify:edge";

const handler = async (request: Request , context: Context) => {
  const data = {
    country: context.geo.country?.code,
    region: context.geo.subdivision?.code,
    city: context.geo.city,
  }

  return context.json(data)
}
export default handler;

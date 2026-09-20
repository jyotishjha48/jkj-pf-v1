import awardsJson from "../content/awards.json";

export const awards = awardsJson.items as {
  id: string;
  title: string;
  issuer: string;
  period: string;
  description: string;
  image?: string;
}[];

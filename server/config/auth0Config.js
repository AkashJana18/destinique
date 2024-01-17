import { auth } from "express-oauth2-jwt-bearer";

const jwtCheck = auth({
  audience: "http://localhost:8000",
  issuerBaseURL: "https://dev-vj2kn2b0cewv5lug.us.auth0.com",
  tokenSigningAlg: "RS256",
});

export default jwtCheck;

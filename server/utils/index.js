import jwt from "jsonwebtoken";
export const createJWT = (res, userId) => {
  const token = jwt.sign({ userId }, "3c7d18c452a864c9b6983ec4e30587fed88c83d5bf87b2367835a2a6858e03f6", {
    expiresIn: "1d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    // secure: false,
    secure: process.env.NODE_ENV !== "development",
    maxAge: 1000 * 60 * 60 * 24 * 1, //1 day
    sameSite: "strict", //prevent csrf attack
    // sameSite: "none",
  });
};

import jwt from "jsonwebtoken";

const protect = (req, res, next) => {
  // 1. Header se token uthao
  const authHeader = req.headers.authorization;

  // 2. Token hai hi nahi? Bahar karo!
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token nahi diya! Pehle login karo." });
  }

  // 3. "Bearer eyJhbGci..." mein se sirf token part nikalo
  const token = authHeader.split(" ")[1];

  try {
    // 4. Token verify karo - sahi stamp hai?
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 5. User ki ID token se nikal ke req mein rakh do
    req.user = decoded;

    // 6. Guard ne pass kar diya - aage jao!
    next();
  } catch (error) {
    res.status(401).json({ message: "Token fake hai ya expire ho gaya!" });
  }
};

export default protect;

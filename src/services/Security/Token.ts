function setExpirationDate(days: number): Date {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + days);
  return currentDate;
}

export function createToken(email: string): string {
  const expiresIn = setExpirationDate(10);
  return JSON.stringify({ expiresIn, email });
}

export function validateToken(token: string): boolean {
  try {
    const decoded = JSON.parse(token);
    const currentDate = new Date();
    return currentDate <= new Date(decoded.expiresIn);
  } catch {
    return false;
  }
}

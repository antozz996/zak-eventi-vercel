export function validateContact(data: FormData) {
  const errors: Record<string, string> = {};
  const value = (key: string) => String(data.get(key) ?? "").trim();
  if (!value("name")) errors.name = "Inserisci nome e cognome.";
  const phone = value("phone");
  if (!/^[+\d\s().-]+$/.test(phone) || phone.replace(/\D/g, "").length < 7 || phone.replace(/\D/g, "").length > 15) errors.phone = "Inserisci un numero telefonico valido.";
  if (value("email") && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value("email"))) errors.email = "Inserisci un indirizzo email valido.";
  if (value("guests") && (!/^\d+$/.test(value("guests")) || Number(value("guests")) < 1)) errors.guests = "Inserisci un numero intero di invitati maggiore di zero.";
  const date = value("date");
  if (date && (!/^\d{4}-\d{2}-\d{2}$/.test(date) || Number.isNaN(Date.parse(`${date}T00:00:00`)) || new Date(`${date}T00:00:00`).toLocaleDateString("sv-SE") !== date)) errors.date = "Inserisci una data valida.";
  return errors;
}

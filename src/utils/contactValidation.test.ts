import { describe, expect, it } from "vitest";
import { validateContact } from "./contactValidation";

function form(values: Record<string, string>) {
  const data = new FormData();
  for (const [key, value] of Object.entries(values)) data.set(key, value);
  return data;
}

const valid = { name: "Maria Rossi", phone: "+39 353 319 8020" };

describe("validateContact", () => {
  it("accetta nome e telefono, gli unici campi obbligatori", () => {
    expect(validateContact(form(valid))).toEqual({});
  });

  it("accetta tutti i campi facoltativi compilati correttamente", () => {
    expect(validateContact(form({ ...valid, email: "maria@example.com", guests: "80", date: "2027-06-12" }))).toEqual({});
  });

  it("richiede il nome", () => {
    expect(validateContact(form({ ...valid, name: "   " }))).toHaveProperty("name");
  });

  it.each(["", "abc", "12345", "1234567890123456", "353-319<script>"])("rifiuta il telefono %j", (phone) => {
    expect(validateContact(form({ ...valid, phone }))).toHaveProperty("phone");
  });

  it.each(["081 123 4567", "(081) 123.45.67", "3533198020"])("accetta il telefono %j", (phone) => {
    expect(validateContact(form({ ...valid, phone }))).toEqual({});
  });

  it("rifiuta un'email malformata ma non la richiede", () => {
    expect(validateContact(form({ ...valid, email: "maria@" }))).toHaveProperty("email");
    expect(validateContact(form({ ...valid, email: "" }))).toEqual({});
  });

  it.each(["0", "-3", "1.5", "tanti"])("rifiuta %j come numero di invitati", (guests) => {
    expect(validateContact(form({ ...valid, guests }))).toHaveProperty("guests");
  });

  it.each(["2027-02-31", "31/12/2027", "2027-13-01"])("rifiuta la data %j", (date) => {
    expect(validateContact(form({ ...valid, date }))).toHaveProperty("date");
  });

  it("accetta il 29 febbraio solo negli anni bisestili", () => {
    expect(validateContact(form({ ...valid, date: "2028-02-29" }))).toEqual({});
    expect(validateContact(form({ ...valid, date: "2027-02-29" }))).toHaveProperty("date");
  });
});

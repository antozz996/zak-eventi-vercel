import { describe, expect, it } from "vitest";
import { siteConfig } from "../data/siteConfig";
import { getContactWhatsAppMessage, getEventWhatsAppMessage, getWhatsAppLink } from "./whatsapp";

describe("getWhatsAppLink", () => {
  it("punta al numero ufficiale, senza simboli", () => {
    const link = getWhatsAppLink();
    expect(link).toMatch(/^https:\/\/wa\.me\/\d+\?text=/);
    expect(link).toContain(`wa.me/${siteConfig.contact.whatsapp}`);
  });

  it("codifica il messaggio nell'indirizzo", () => {
    const message = "Ciao, vorrei info per il 12/06 & 80 invitati?";
    const link = getWhatsAppLink(message);
    expect(link).not.toBeNull();
    expect(new URL(link!).searchParams.get("text")).toBe(message);
  });
});

describe("getEventWhatsAppMessage", () => {
  it("cita il tipo di evento in minuscolo", () => {
    expect(getEventWhatsAppMessage("Un Diciottesimo")).toBe("Ciao ZAK, vorrei ricevere informazioni per un diciottesimo.");
  });
});

describe("getContactWhatsAppMessage", () => {
  it("riporta i dati compilati nel modulo", () => {
    const message = getContactWhatsAppMessage({
      name: "Maria Rossi",
      phone: "353 319 8020",
      email: "maria@example.com",
      eventType: "Diciottesimo",
      eventDate: "2027-06-12",
      guests: "80",
      message: "Vorremmo la terrazza.",
    });
    for (const expected of ["Maria Rossi", "353 319 8020", "maria@example.com", "Diciottesimo", "2027-06-12", "80", "Vorremmo la terrazza."]) {
      expect(message).toContain(expected);
    }
  });

  it("omette le righe dei campi lasciati vuoti", () => {
    const message = getContactWhatsAppMessage({ name: "Maria Rossi", phone: "353 319 8020" });
    expect(message).toContain("Nome e cognome: Maria Rossi");
    expect(message).not.toContain("Email:");
    expect(message).not.toContain("Tipologia di evento:");
    expect(message).not.toContain("Data indicativa:");
  });
});

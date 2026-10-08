import { useState, useSyncExternalStore } from "react";
import { Link } from "../lib/router";
import { setMarketingConsent } from "../lib/metaPixel";
export function CookieBanner() {
  const choice=useSyncExternalStore(
    (onStoreChange)=>{
      window.addEventListener("storage",onStoreChange);
      return ()=>window.removeEventListener("storage",onStoreChange);
    },
    ()=>{
      try {
        const stored=localStorage.getItem("zak-marketing-consent");
        return stored==="accepted"||stored==="rejected" ? stored : "unknown";
      }
      catch { return "unknown"; }
    },
    ()=>"unknown",
  );
  const [editing,setEditing]=useState(false);
  const open=choice==="unknown"||editing;
  const choose=(accepted:boolean)=>{setMarketingConsent(accepted);setEditing(false)};
  return <>
    {open&&<aside className="zak-consent" role="dialog" aria-label="Preferenze cookie">
      <strong>La tua privacy</strong>
      <p>Usiamo tecnologie necessarie al sito. Solo con il consenso attiviamo Meta Pixel per misurare visite e interazioni pubblicitarie. Puoi modificare la scelta quando vuoi. <Link to="/cookie-policy">Cookie Policy</Link>.</p>
      <div className="zak-consent__actions"><button type="button" className="button button--outline-dark" onClick={()=>choose(false)}>Rifiuta</button><button type="button" className="button button--gold" onClick={()=>choose(true)}>Accetta marketing</button></div>
    </aside>}
    {!open&&<button type="button" className="zak-consent-settings" onClick={()=>setEditing(true)}>Preferenze cookie</button>}
  </>;
}

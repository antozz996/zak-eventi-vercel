import { useEffect, useState } from "react";
import { Link } from "../lib/router";
import { setMarketingConsent } from "../lib/metaPixel";
export function CookieBanner() {
  const [choice,setChoice]=useState("unknown");
  const [open,setOpen]=useState(false);
  useEffect(()=>{let stored=null;try{stored=localStorage.getItem("zak-marketing-consent")}catch{/* denied */}setChoice(stored??"unknown");setOpen(stored===null)},[]);
  const choose=(accepted:boolean)=>{setMarketingConsent(accepted);setChoice(accepted?"accepted":"rejected");setOpen(false)};
  return <>
    {open&&<aside className="zak-consent" role="dialog" aria-label="Preferenze cookie">
      <strong>La tua privacy</strong>
      <p>Usiamo tecnologie necessarie al sito. Solo con il consenso attiviamo Meta Pixel per misurare visite e interazioni pubblicitarie. Puoi modificare la scelta quando vuoi. <Link to="/cookie-policy">Cookie Policy</Link>.</p>
      <div className="zak-consent__actions"><button type="button" className="button button--outline-dark" onClick={()=>choose(false)}>Rifiuta</button><button type="button" className="button button--gold" onClick={()=>choose(true)}>Accetta marketing</button></div>
    </aside>}
    {!open&&choice!=="unknown"&&<button type="button" className="zak-consent-settings" onClick={()=>setOpen(true)}>Preferenze cookie</button>}
  </>;
}
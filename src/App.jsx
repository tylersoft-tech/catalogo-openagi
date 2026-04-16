import { useState } from "react";

const PHONE = "573332643231";
const EMAIL = "admin@openagi.com.co";
const WEB = "https://openagi.com.co";
const WA = `https://wa.me/${PHONE}`;
const isMob = typeof navigator!=="undefined" && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
const CITIES = "Barrancabermeja · San Francisco · Bucaramanga · Miami · Houston · Melbourne";

function WaIcon({size=16,color="#fff"}){
  return <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>;
}

function WALink({children,className,style,message=""}){
  return <a href={message?`${WA}?text=${encodeURIComponent(message)}`:WA} target="_blank" rel="noopener noreferrer" style={style}>{children}</a>;
}
function EmailLink({children,style}){
  return <a href={`mailto:${EMAIL}?subject=Consulta%20Servicios%20OpenAGI`} style={style}>{children}</a>;
}
function PhoneLink({children,style}){
  return <a href={isMob?`tel:+${PHONE}`:WA} target={isMob?"_self":"_blank"} rel="noopener noreferrer" style={style}>{children}</a>;
}
function WebLink({children,style}){
  return <a href={WEB} target="_blank" rel="noopener noreferrer" style={style}>{children}</a>;
}

const services = [
  {cat:"ia",catName:"IA & Automatización",name:"Automatización n8n",code:"SVC-N8N",tag:"POPULAR",tagCl:"popular",
   desc:"Flujos que eliminan tareas repetitivas y conectan sistemas 24/7.",
   forEng:"Workflows orquestados con +200 conectores nativos. Triggers, webhooks, branching condicional. Self-hosted o cloud. Monitoreo con alertas en tiempo real.",
   forBiz:"Su equipo deja de copiar datos entre sistemas. Las tareas que hoy toman horas se ejecutan solas, sin errores, 24/7. El ROI se mide en semanas.",
   deliverables:["Mapa de procesos","Workflows documentados","Monitoreo continuo"],
   integrations:["HubSpot","Salesforce","Slack","Google Workspace","OpenAI","PostgreSQL","WooCommerce"],
   price:"$4.5M – $8M",market:"$5M – $15M",icon:"⚡"},
  {cat:"ia",catName:"IA & Automatización",name:"Agentes IA Locales",code:"SVC-AGENTESIA",tag:"NUEVO",tagCl:"nuevo",
   desc:"Agentes IA privados con modelos open-source, bases vectoriales y analítica.",
   forEng:"Modelos locales/híbridos (Ollama, vLLM), RAG con Qdrant/pgvector, SSO, audit logs, observabilidad completa. Sin dependencia de APIs comerciales.",
   forBiz:"Su empresa tiene su propio asistente IA que conoce sus documentos, procesos y datos — sin enviar información a terceros. Control total.",
   deliverables:["Arquitectura del agente","Base de conocimiento","Panel de observabilidad"],
   integrations:["Ollama","Qdrant","PostgreSQL","APIs internas","SSO","Logs"],
   price:"$6M – $12M",market:"$8M – $25M",icon:"🧠"},
  {cat:"ia",catName:"IA & Automatización",name:"Web + SEO + LLM",code:"SVC-WEBSEO",tag:"ANCLA",tagCl:"ancla",
   desc:"Sitios web a la medida, optimizados para Google y para asistentes de IA. Desarrollo propio, infraestructura propia.",
   forEng:"Stack full-stack (Astro/React/Next), deploy en infra propia (Coolify/VPS), CI/CD, Schema markup, datos estructurados, contenido LLM-ready, analítica Umami. Sin WordPress, sin plantillas.",
   forBiz:"Su sitio web se convierte en una máquina de captación. Aparece en Google, aparece cuando alguien le pregunta a ChatGPT, y convierte visitantes en clientes. Todo medible.",
   deliverables:["Sitio a la medida","SEO técnico y contenido","VPS propio 1 año","Capacitación","Documentación"],
   integrations:["Search Console","GA4/Umami","CRM","Schema markup","LLM optimization"],
   price:"Desde $7.500.000",market:"$6M – $18M",icon:"🌐"},
  {cat:"ia",catName:"IA & Automatización",name:"Apps Móviles",code:"SVC-APPS",tag:"",tagCl:"",
   desc:"Apps iOS/Android integradas con procesos reales de negocio.",
   forEng:"React Native / Flutter, APIs REST, Firebase, push notifications, CI/CD para stores.",
   forBiz:"Su operación en el bolsillo de su equipo y sus clientes. Profesional, rápida, integrada con lo que ya usa.",
   deliverables:["UX/UI funcional","App en stores","Mantenimiento evolutivo"],
   integrations:["Firebase","APIs REST","CRM","ERP","Push notifications"],
   price:"$8M – $20M",market:"$12M – $40M",icon:"📱"},
  {cat:"ia",catName:"IA & Automatización",name:"Desarrollo de Software",code:"SVC-DEVSOFT",tag:"",tagCl:"",
   desc:"Desarrollo full-stack con CI/CD, documentación y entregables definidos.",
   forEng:"React + Node.js + PostgreSQL + Docker. Pipeline CI/CD, tests, documentación técnica, código limpio y entregado.",
   forBiz:"Software que resuelve su problema real, no un genérico. Entregado con documentación para que su equipo lo entienda y lo mantenga.",
   deliverables:["Aplicación productiva","Documentación técnica","Pipeline CI/CD"],
   integrations:["React","Node.js","PostgreSQL","Docker","CI/CD"],
   price:"$7M – $25M",market:"$10M – $50M",icon:"💻"},
  {cat:"ia",catName:"IA & Automatización",name:"Consultoría IA",code:"SVC-CONSULTIA",tag:"",tagCl:"",
   desc:"Roadmap para transformar procesos con IA — priorizado por impacto y viabilidad.",
   forEng:"Assessment técnico, evaluación de madurez, selección de modelos, arquitectura propuesta, roadmap trimestral con dependencias.",
   forBiz:"Deja de adivinar dónde invertir en IA. Le entregamos un plan claro con prioridades, tiempos y costos reales.",
   deliverables:["Diagnóstico","Roadmap tecnológico","Plan de ejecución"],
   integrations:["Workshops ejecutivos","Priorización por impacto","Roadmap trimestral"],
   price:"$3.5M – $8M",market:"$5M – $15M",icon:"🗺️"},
  {cat:"ia",catName:"IA & Automatización",name:"eCommerce",code:"SVC-ECOMMERCE",tag:"",tagCl:"",
   desc:"Tiendas online sin comisiones altas de terceros.",
   forEng:"WooCommerce / Shopify headless, pasarelas de pago (ePayco, Mercado Pago, Stripe), catálogo dinámico, analytics de conversión.",
   forBiz:"Venda en línea sin pagar comisiones excesivas. Control total del canal, más margen, más datos sobre sus clientes.",
   deliverables:["Tienda en producción","Pasarelas configuradas","Analítica de conversión"],
   integrations:["Shopify","WooCommerce","Pasarelas de pago","Inventario","CRM"],
   price:"$6M – $15M",market:"$8M – $30M",icon:"🛒"},
  {cat:"ia",catName:"IA & Automatización",name:"Instalaciones IA Empresariales",code:"SVC-INSTALACIONES",tag:"NUEVO",tagCl:"nuevo",
   desc:"OpenClaw / NemoClaw para operar agentes empresariales con control y seguridad.",
   forEng:"Deploy de plataformas OpenClaw/NemoClaw en VPS propio. Control de costos por modelo, RBAC, audit logs, dashboards de uso, API gateway.",
   forBiz:"Su empresa opera agentes IA como un servicio interno: controlado, medible, escalable por equipos. -35% tiempo operativo, +28% productividad.",
   deliverables:["Arquitectura y despliegue","Hardening","Control de costos","Manual operativo"],
   integrations:["OpenClaw","NemoClaw","VPS","CRM","ERP","APIs internas"],
   price:"$5M – $12M",market:"$8M – $20M",icon:"🏗️"},
  {cat:"ia",catName:"IA & Automatización",name:"Chatbots Empresariales",code:"SVC-CHATBOTS",tag:"POPULAR",tagCl:"popular",
   desc:"Chatbots que agendan, venden y consultan datos en tiempo real. Multicanal.",
   forEng:"Arquitectura conversacional con NLP, integración WhatsApp API / Telegram / web chat, CRM sync, calendar booking, métricas de intención y conversión.",
   forBiz:"Sus clientes obtienen respuestas inmediatas 24/7. El bot agenda citas, responde preguntas y califica leads. Su equipo solo atiende lo que importa.",
   deliverables:["Diseño conversacional","Integración CRM/calendarios","Tablero de métricas"],
   integrations:["WhatsApp API","Telegram","Slack","Signal","Web chat","CRM"],
   price:"$4M – $9M",market:"$5M – $18M",icon:"💬"},
  {cat:"infra",catName:"Infraestructura & Ciberseguridad",name:"Ciberseguridad",code:"SVC-CIBER",tag:"URGENTE",tagCl:"urgente",
   desc:"Protección activa, hardening, VPN y respuesta orientada a riesgo real.",
   forEng:"CrowdSec, Wazuh SIEM, WireGuard VPN, EDR, hardening baseline CIS, MFA enforcement, alertas automáticas, DRP integrado.",
   forBiz:"Proteja su empresa de ataques reales. No compliance de papel: monitoreo continuo, respuesta rápida, recuperación verificada.",
   deliverables:["Assessment técnico","Plan de mitigación","Seguimiento continuo"],
   integrations:["CrowdSec","Wazuh","WireGuard VPN","EDR","Alertas"],
   price:"$3.5M – $8M",market:"$5M – $15M",icon:"🛡️"},
  {cat:"infra",catName:"Infraestructura & Ciberseguridad",name:"Backup & DRP",code:"SVC-BACKUP",tag:"",tagCl:"",
   desc:"Recuperación real ante incidentes. Continuidad del negocio verificada.",
   forEng:"BorgBackup, snapshots, replicación multi-site, pruebas de restauración automatizadas, runbooks DRP con RTO/RPO definidos.",
   forBiz:"Si algo falla, su negocio sigue operando. Recuperación probada, no solo prometida.",
   deliverables:["Estrategia de backup","Pruebas de restauración","Runbooks DRP"],
   integrations:["BorgBackup","Snapshots","Cloud backup","NAS","Alertas"],
   price:"$3M – $7M",market:"$4M – $12M",icon:"💾"},
  {cat:"infra",catName:"Infraestructura & Ciberseguridad",name:"Redes Enterprise",code:"SVC-REDES",tag:"",tagCl:"",
   desc:"Diseño y optimización de red para disponibilidad y rendimiento.",
   forEng:"MikroTik/UniFi, VLANs por área, WireGuard VPN site-to-site, SNMP monitoring, QoS, failover.",
   forBiz:"Red estable que no se cae. Segmentada, monitoreada, con acceso remoto seguro.",
   deliverables:["Topología optimizada","Políticas de red","Monitoreo activo"],
   integrations:["MikroTik","UniFi","VLAN","WireGuard VPN","SNMP"],
   price:"$3M – $8M",market:"$5M – $15M",icon:"🔌"},
  {cat:"infra",catName:"Infraestructura & Ciberseguridad",name:"Soporte Premium 24/7",code:"SVC-SOPORTE247",tag:"",tagCl:"",
   desc:"Mesa de ayuda continua con SLA garantizado y escalamiento por niveles.",
   forEng:"Triage L1/L2/L3, helpdesk multicanal, SLA con penalización, guardias técnicas, reportes operativos mensuales.",
   forBiz:"Soporte real cuando lo necesita. Si no respondemos en 2 horas, el siguiente ticket es gratis.",
   deliverables:["Mesa de ayuda 24/7","Guardias técnicas","Reportes mensuales"],
   integrations:["Helpdesk","Soporte multicanal","SLA","Escalamiento"],
   price:"$1.5M – $3M/mes",market:"$2M – $5M/mes",icon:"🎧"},
  {cat:"infra",catName:"Infraestructura & Ciberseguridad",name:"Infraestructura TI",code:"SVC-INFRA",tag:"",tagCl:"",
   desc:"Infraestructura nube, on-premise o híbrida. Diseñada para durar.",
   forEng:"Provisioning cloud (AWS/GCP/Azure) u on-prem, hardening baseline, WireGuard VPN, observabilidad (Grafana/Prometheus), IaC.",
   forBiz:"Base tecnológica sólida para 5 años. Escalable, segura, con costos controlados.",
   deliverables:["Arquitectura objetivo","Implementación","Soporte evolutivo"],
   integrations:["AWS/GCP/Azure","On-premise","Docker","WireGuard VPN","Monitoreo"],
   price:"$4M – $12M",market:"$6M – $20M",icon:"☁️"},
  {cat:"infra",catName:"Infraestructura & Ciberseguridad",name:"Telefonía IP / VoIP",code:"SVC-VOIP",tag:"",tagCl:"",
   desc:"Comunicaciones empresariales confiables, medibles e integradas.",
   forEng:"Asterisk / Cloud PBX, IVR configurado, CRM integration, grabación y retención, QoS monitoring.",
   forBiz:"Llamadas más baratas, mejor trazabilidad, integración con su CRM.",
   deliverables:["PBX configurada","Flujos IVR","Monitoreo de calidad"],
   integrations:["Asterisk","Cloud PBX","IVR","CRM","Grabación"],
   price:"$2.5M – $6M",market:"$4M – $10M",icon:"📞"},
  {cat:"infra",catName:"Infraestructura & Ciberseguridad",name:"CCTV & Videovigilancia",code:"SVC-CCTV",tag:"",tagCl:"",
   desc:"Video inteligente para seguridad y control operativo.",
   forEng:"NVR, cámaras IP, analítica de video, alertas por eventos, políticas de retención configurables.",
   forBiz:"Seguridad con inteligencia. Alertas tempranas, evidencia útil, cobertura completa.",
   deliverables:["Diseño de cobertura","Implementación","Políticas de retención"],
   integrations:["NVR","Cámaras IP","Analítica de video","Alertas"],
   price:"$3M – $10M",market:"$5M – $15M",icon:"📹"},
  {cat:"infra",catName:"Infraestructura & Ciberseguridad",name:"Migración Linux",code:"SVC-LINUX",tag:"AHORRA",tagCl:"ahorra",
   desc:"Migración Windows → Linux. Hasta 70% de ahorro en licencias.",
   forEng:"Ubuntu/Debian, migración escalonada, rollback seguro, verificación de compatibilidad, Docker, monitoreo post-migración.",
   forBiz:"Deje de pagar licencias Microsoft que no necesita. Ahorro verificable desde el primer año. Cero downtime en la migración.",
   deliverables:["Plan de migración","Ejecución escalonada","Capacitación"],
   integrations:["Ubuntu","Debian","Docker","Monitoreo","Backups"],
   price:"$3M – $8M",market:"$5M – $12M",icon:"🐧"},
  {cat:"infra",catName:"Infraestructura & Ciberseguridad",name:"Microsoft 365",code:"SVC-M365",tag:"",tagCl:"",
   desc:"Administración y gobierno de entornos M365.",
   forEng:"Entra ID, Exchange Online, SharePoint, Teams, Defender, políticas de acceso condicional, DLP.",
   forBiz:"Entorno M365 organizado, seguro y productivo. Sin cuentas sin gobernar.",
   deliverables:["Configuración","Políticas de seguridad","Soporte continuo"],
   integrations:["Entra ID","Exchange","SharePoint","Teams","Defender"],
   price:"$2M – $5M",market:"$3M – $8M",icon:"Ⓜ️"},
  {cat:"infra",catName:"Infraestructura & Ciberseguridad",name:"Mantenimiento Preventivo",code:"SVC-MANTPREV",tag:"",tagCl:"",
   desc:"Health checks, parches, actualizaciones y pruebas de integridad.",
   forEng:"Calendario preventivo, firmware/patch management, health checks automatizados, verificación de backups.",
   forBiz:"Prevenir cuesta menos que reparar. Menos incidentes, mayor vida útil de sus activos.",
   deliverables:["Calendario preventivo","Checklist técnico","Informes de salud"],
   integrations:["Inventario TI","Checklists","Alertas","Historial técnico"],
   price:"$1.2M – $2.5M/mes",market:"$1.5M – $4M/mes",icon:"🔧"},
  {cat:"infra",catName:"Infraestructura & Ciberseguridad",name:"Mantenimiento Correctivo",code:"SVC-MANTGEN",tag:"",tagCl:"",
   desc:"Correcciones, mejoras y optimización en endpoints y servidores.",
   forEng:"Intervenciones documentadas, parches de seguridad, optimización de rendimiento, reportes ejecutivos.",
   forBiz:"Cuando algo falla, respondemos rápido. Documentado, medido, resuelto.",
   deliverables:["Intervenciones documentadas","Actualizaciones","Reporte ejecutivo"],
   integrations:["Endpoints","Servidores","Parches","Optimización"],
   price:"$800K – $2M/mes",market:"$1.2M – $3M/mes",icon:"🔩"},
  {cat:"infra",catName:"Infraestructura & Ciberseguridad",name:"Drones Industriales",code:"SVC-DRONES",tag:"DEMANDA",tagCl:"demanda",
   desc:"Inspección y captura aérea para procesos de alto valor industrial.",
   forEng:"Fotogrametría, GIS, procesamiento de datos aéreos, reportes técnicos con hallazgos geolocalizados.",
   forBiz:"Inspeccione sin riesgo. Datos aéreos de calidad industrial en menos tiempo.",
   deliverables:["Plan de vuelo","Captura y procesamiento","Informe técnico"],
   integrations:["Fotogrametría","GIS","Reportes técnicos","Alertas"],
   price:"$3.5M – $10M",market:"$5M – $15M",icon:"🚁"}
];

const cases = [
  {client:"CORPROTES",sector:"Educación",city:"Barrancabermeja",
   result:"Posición #1 en Google · Tráfico orgánico +300%",
   detail:"De un blog sin visibilidad a liderazgo orgánico. Presencia consolidada en 10 sedes."},
  {client:"Empresa Industrial",sector:"Oil & Gas",city:"Barrancabermeja",
   result:"Respuesta ransomware en 40 min · Recuperación 100% en 3h",
   detail:"Recuperación total de datos con continuidad operativa garantizada."},
  {client:"Empresa de Logística",sector:"Logística",city:"Bogotá (80 empleados)",
   result:"IA ahorró 120 horas/mes · 3x más órdenes procesadas",
   detail:"Automatización con n8n + Ollama que transformó la capacidad operativa."},
  {client:"Empresa de Servicios",sector:"Servicios",city:"Bucaramanga (45 usuarios)",
   result:"Windows→Linux: cero downtime · Ahorro $8,400 USD/año",
   detail:"Migración completa con rollback seguro y capacitación al equipo."}
];

const tagStyles = {
  popular:{bg:"rgba(0,229,160,.12)",border:"rgba(0,229,160,.3)",color:"#00e5a0"},
  nuevo:{bg:"rgba(0,201,255,.12)",border:"rgba(0,201,255,.3)",color:"#00c9ff"},
  urgente:{bg:"rgba(255,77,106,.12)",border:"rgba(255,77,106,.3)",color:"#ff4d6a"},
  ahorra:{bg:"rgba(255,210,63,.12)",border:"rgba(255,210,63,.3)",color:"#ffd23f"},
  demanda:{bg:"rgba(255,140,66,.12)",border:"rgba(255,140,66,.3)",color:"#ff8c42"},
  ancla:{bg:"rgba(0,229,160,.15)",border:"rgba(0,229,160,.4)",color:"#00e5a0"}
};

function Tag({tag,tagCl}){
  if(!tag)return null;
  const s=tagStyles[tagCl]||{};
  return <span style={{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:1,
    padding:"3px 10px",borderRadius:4,background:s.bg,border:`1px solid ${s.border}`,color:s.color}}>{tag}</span>;
}

function ServiceCard({svc}){
  const [open,setOpen]=useState(false);
  const [view,setView]=useState("biz"); // biz or eng
  return(
    <div style={{background:"#111119",border:"1px solid #252536",borderRadius:14,padding:"1.5rem",
      transition:"all .35s",position:"relative",overflow:"hidden"}}
      onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(0,229,160,.3)";e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow="0 12px 40px rgba(0,229,160,.07)"}}
      onMouseLeave={e=>{e.currentTarget.style.borderColor="#252536";e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="none"}}>
      <div style={{position:"absolute",top:0,left:0,right:0,height:3,background:"linear-gradient(90deg,#00e5a0,#00c9ff)"}}/>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:8,marginBottom:10}}>
        <span style={{fontFamily:"monospace",fontSize:11,color:"#00c9ff",background:"rgba(0,201,255,.07)",
          padding:"3px 8px",borderRadius:4,border:"1px solid rgba(0,201,255,.12)"}}>{svc.code}</span>
        <Tag tag={svc.tag} tagCl={svc.tagCl}/>
      </div>
      <div style={{fontSize:28,marginBottom:4}}>{svc.icon}</div>
      <h3 style={{fontSize:"1.1rem",fontWeight:700,marginBottom:6}}>{svc.name}</h3>
      <p style={{fontSize:14,color:"#9a9ab4",lineHeight:1.65,marginBottom:14}}>{svc.desc}</p>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",padding:"10px 0",borderTop:"1px solid #252536"}}>
        <div>
          <div style={{fontSize:10,color:"#6a6a82",textTransform:"uppercase",letterSpacing:1}}>OpenAGI</div>
          <div style={{fontFamily:"monospace",fontSize:15,fontWeight:700,color:"#00e5a0"}}>{svc.price}</div>
        </div>
        <div style={{textAlign:"right"}}>
          <div style={{fontSize:10,color:"#6a6a82",textTransform:"uppercase",letterSpacing:1}}>Mercado</div>
          <div style={{fontFamily:"monospace",fontSize:13,color:"#555",textDecoration:"line-through"}}>{svc.market}</div>
        </div>
      </div>
      <button onClick={()=>setOpen(!open)} style={{background:"none",border:"none",color:"#00c9ff",cursor:"pointer",
        fontFamily:"monospace",fontSize:12,padding:"6px 0",width:"100%",textAlign:"left"}}>
        {open?"▲ Cerrar":"▼ Ver detalle técnico y comercial"}
      </button>
      {open&&(
        <div style={{paddingTop:12,borderTop:"1px solid #252536",animation:"fadeIn .3s ease"}}>
          <div style={{display:"flex",gap:4,marginBottom:12}}>
            <button onClick={()=>setView("biz")} style={{padding:"5px 12px",borderRadius:6,fontSize:11,fontWeight:600,cursor:"pointer",
              border:"1px solid",transition:"all .2s",
              ...(view==="biz"?{background:"rgba(0,229,160,.1)",borderColor:"rgba(0,229,160,.25)",color:"#00e5a0"}:{background:"transparent",borderColor:"#333",color:"#777"})}}>
              📊 Para Comerciales
            </button>
            <button onClick={()=>setView("eng")} style={{padding:"5px 12px",borderRadius:6,fontSize:11,fontWeight:600,cursor:"pointer",
              border:"1px solid",transition:"all .2s",
              ...(view==="eng"?{background:"rgba(0,201,255,.1)",borderColor:"rgba(0,201,255,.25)",color:"#00c9ff"}:{background:"transparent",borderColor:"#333",color:"#777"})}}>
              ⚙️ Para Ingenieros
            </button>
          </div>
          <p style={{fontSize:13,color:"#b0b0c8",lineHeight:1.7,marginBottom:12,padding:12,background:"rgba(255,255,255,.02)",borderRadius:8,border:"1px solid #1e1e30"}}>
            {view==="biz"?svc.forBiz:svc.forEng}
          </p>
          <div style={{marginBottom:10}}>
            <div style={{fontSize:10,color:"#6a6a82",fontFamily:"monospace",marginBottom:4,textTransform:"uppercase",letterSpacing:1}}>Entregables</div>
            {svc.deliverables.map((d,i)=><div key={i} style={{fontSize:13,color:"#9a9ab4",paddingLeft:14,position:"relative",marginBottom:3}}>
              <span style={{position:"absolute",left:0,color:"#00c9ff"}}>✓</span>{d}
            </div>)}
          </div>
          <div style={{display:"flex",flexWrap:"wrap",gap:4,marginBottom:12}}>
            {svc.integrations.map((ig,i)=><span key={i} style={{fontSize:10,padding:"2px 7px",borderRadius:4,
              background:"rgba(123,97,255,.07)",border:"1px solid rgba(123,97,255,.12)",color:"#8a8ab8"}}>{ig}</span>)}
          </div>
          <WALink message={`Hola OpenAGI, me interesa ${svc.name} (${svc.code}). ¿Pueden enviarme cotización?`}
            style={{display:"inline-flex",alignItems:"center",gap:6,padding:"10px 20px",borderRadius:8,
              background:"#25d366",color:"#fff",fontSize:13,fontWeight:700,textDecoration:"none",
              boxShadow:"0 4px 15px rgba(37,211,102,.3)",transition:"transform .2s"}}>
            <WaIcon size={16}/> Cotizar por WhatsApp
          </WALink>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════
// LANDING PAGE
// ═══════════════════════════════════════════
function LandingPage({setPage}){
  return(
    <div>
      {/* HERO */}
      <section style={{position:"relative",padding:"6rem 2rem 4rem",textAlign:"center",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 80% 50% at 50% 30%,rgba(0,229,160,.06) 0%,transparent 60%),radial-gradient(ellipse 50% 40% at 80% 60%,rgba(0,201,255,.04) 0%,transparent 50%)",pointerEvents:"none"}}/>
        <div style={{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(42,42,62,.2) 1px,transparent 1px),linear-gradient(90deg,rgba(42,42,62,.2) 1px,transparent 1px)",backgroundSize:"50px 50px",maskImage:"radial-gradient(ellipse 60% 50% at 50% 50%,black 20%,transparent 70%)",WebkitMaskImage:"radial-gradient(ellipse 60% 50% at 50% 50%,black 20%,transparent 70%)",pointerEvents:"none"}}/>
        <div style={{position:"relative",maxWidth:900,margin:"0 auto"}}>
          <h1 style={{fontSize:"clamp(2.2rem,5.5vw,4rem)",fontWeight:900,letterSpacing:"-.03em",lineHeight:1.1,marginBottom:20}}>
            Descubre cómo escalar<br/>
            <span style={{background:"linear-gradient(135deg,#00e5a0,#00c9ff)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
              con Inteligencia Artificial.
            </span>
          </h1>
          <p style={{fontSize:"clamp(.95rem,1.8vw,1.2rem)",color:"#9a9ab4",maxWidth:700,margin:"0 auto 2.5rem",lineHeight:1.75,fontWeight:300}}>
            Chatbots que venden 24/7. Automatizaciones que eliminan trabajo manual.
            Sitios web que aparecen en Google y en ChatGPT.
            Desarrollo a la medida con infraestructura propia — no plantillas, no WordPress.
          </p>

          {/* CTA BUTTONS */}
          <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap",marginBottom:"1.5rem"}}>
            <WALink message="Hola OpenAGI, quiero saber más sobre sus servicios de automatización y web." style={{
              display:"inline-flex",alignItems:"center",gap:8,padding:"14px 28px",borderRadius:12,
              background:"#25d366",color:"#fff",fontWeight:700,fontSize:15,textDecoration:"none",
              boxShadow:"0 6px 25px rgba(37,211,102,.35)",transition:"transform .2s"}}>
              <WaIcon size={20}/> Escribir por WhatsApp
            </WALink>
            <EmailLink style={{display:"inline-flex",alignItems:"center",gap:8,padding:"14px 28px",borderRadius:12,
              background:"linear-gradient(135deg,#0066ff,#00c9ff)",color:"#fff",fontWeight:700,fontSize:15,textDecoration:"none",
              boxShadow:"0 6px 25px rgba(0,102,255,.25)"}}>
              📧 Enviar Correo
            </EmailLink>
            <PhoneLink style={{display:"inline-flex",alignItems:"center",gap:8,padding:"14px 28px",borderRadius:12,
              background:"rgba(123,97,255,.15)",border:"1px solid rgba(123,97,255,.3)",color:"#b8a5ff",fontWeight:700,fontSize:15,textDecoration:"none"}}>
              📞 {isMob?"Llamar Ahora":"Llamar / WhatsApp"}
            </PhoneLink>
          </div>
          <div style={{position:"relative",display:"inline-block",marginBottom:"2rem"}}>
            <style>{`
              @keyframes pulseGlow{0%,100%{box-shadow:0 0 20px rgba(0,229,160,.2),0 0 40px rgba(0,229,160,.1)}50%{box-shadow:0 0 35px rgba(0,229,160,.4),0 0 70px rgba(0,229,160,.15)}}
              @keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
              @keyframes clickDown{0%,100%{transform:translate(0,0) rotate(-8deg) scale(1)}35%{transform:translate(3px,6px) rotate(-4deg) scale(.88)}65%{transform:translate(1px,2px) rotate(-8deg) scale(1.04)}}
              @keyframes ringBurst{0%{transform:scale(.4);opacity:1;border-width:4px}100%{transform:scale(3.5);opacity:0;border-width:1px}}
              @keyframes ringBurst2{0%{transform:scale(.3);opacity:.7;border-width:3px}100%{transform:scale(2.8);opacity:0;border-width:1px}}
              @keyframes neonFlicker{0%,19%,21%,23%,25%,54%,56%,100%{text-shadow:0 0 7px #00e5a0,0 0 14px #00e5a0,0 0 28px #00e5a0,0 0 42px #00c9ff,0 0 56px #00c9ff;opacity:1}20%,24%,55%{text-shadow:none;opacity:.7}}
              @keyframes neonBorder{0%,19%,21%,23%,25%,54%,56%,100%{box-shadow:inset 0 0 8px rgba(0,229,160,.4),0 0 8px rgba(0,229,160,.3),0 0 20px rgba(0,229,160,.15)}20%,24%,55%{box-shadow:none}}
              @keyframes bulbChase{0%{background:rgba(0,229,160,.9);box-shadow:0 0 6px #00e5a0}49%{background:rgba(0,229,160,.9);box-shadow:0 0 6px #00e5a0}50%{background:rgba(0,229,160,.15);box-shadow:none}100%{background:rgba(0,229,160,.15);box-shadow:none}}
              @keyframes arrowBlink{0%,100%{opacity:1;color:#00e5a0;text-shadow:0 0 10px #00e5a0}50%{opacity:.4;color:#00c9ff;text-shadow:none}}
              .explore-btn3{position:relative;padding:18px 40px;border-radius:16px;border:2px solid rgba(0,229,160,.4);cursor:pointer;
                background:linear-gradient(135deg,rgba(0,229,160,.1),rgba(0,201,255,.06));
                animation:pulseGlow 2.5s ease-in-out infinite;transition:all .3s;overflow:visible}
              .explore-btn3:hover{transform:scale(1.06);border-color:#00e5a0;background:linear-gradient(135deg,rgba(0,229,160,.22),rgba(0,201,255,.12))}
              .explore-btn3::after{content:'';position:absolute;top:0;left:0;right:0;bottom:0;
                background:linear-gradient(90deg,transparent,rgba(255,255,255,.07),transparent);
                background-size:200% 100%;animation:shimmer 2.5s linear infinite;pointer-events:none;border-radius:14px}
              .click-cursor{position:absolute;right:-34px;bottom:-18px;pointer-events:none;z-index:4;animation:clickDown 1.4s ease-in-out infinite}
              .click-ring{position:absolute;right:-8px;bottom:8px;width:20px;height:20px;border-radius:50%;
                border:4px solid #00e5a0;pointer-events:none;z-index:3;animation:ringBurst 1.4s ease-out infinite}
              .click-ring-2{border-color:#00c9ff;animation:ringBurst2 1.4s ease-out infinite .25s}
              .vegas-sign{position:absolute;top:-52px;left:50%;transform:translateX(-50%);
                padding:6px 20px 8px;border-radius:8px;border:3px solid #00e5a0;
                background:rgba(10,10,15,.92);pointer-events:none;z-index:5;white-space:nowrap;
                animation:neonBorder 3s ease-in-out infinite}
              .vegas-text{font-family:'Arial Black',sans-serif;font-size:18px;font-weight:900;
                color:#00e5a0;letter-spacing:3px;text-transform:uppercase;
                animation:neonFlicker 3s ease-in-out infinite}
              .vegas-arrow{display:block;text-align:center;font-size:16px;line-height:1;margin-top:2px;
                animation:arrowBlink 1s ease-in-out infinite}
              .vegas-bulbs{position:absolute;top:-2px;left:8px;right:8px;display:flex;justify-content:space-between;pointer-events:none}
              .vegas-bulbs-b{position:absolute;bottom:-2px;left:8px;right:8px;display:flex;justify-content:space-between;pointer-events:none}
              .bulb{width:5px;height:5px;border-radius:50%;animation:bulbChase .8s linear infinite}
              .b1{animation-delay:0s}.b2{animation-delay:.1s}.b3{animation-delay:.2s}.b4{animation-delay:.3s}
              .b5{animation-delay:.4s}.b6{animation-delay:.5s}.b7{animation-delay:.6s}.b8{animation-delay:.7s}
            `}</style>
            <button onClick={()=>setPage("all")} className="explore-btn3">
              <span style={{position:"relative",zIndex:1,display:"flex",alignItems:"center",gap:12}}>
                <span style={{fontSize:24}}>🚀</span>
                <span style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
                  <span style={{fontSize:17,fontWeight:700,color:"#00e5a0",letterSpacing:"-.02em"}}>Explorar los 21 servicios</span>
                  <span style={{fontSize:11,color:"#6a8a7a",fontWeight:400}}>IA · Automatización · Infraestructura · Seguridad</span>
                </span>
                <span style={{fontSize:20,color:"#00e5a0",marginLeft:6}}>→</span>
              </span>
            </button>
            {/* VEGAS SIGN */}
            <div className="vegas-sign">
              <div className="vegas-bulbs">
                <span className="bulb b1"/><span className="bulb b2"/><span className="bulb b3"/><span className="bulb b4"/>
                <span className="bulb b5"/><span className="bulb b6"/><span className="bulb b7"/><span className="bulb b8"/>
              </div>
              <span className="vegas-text">Click Aquí</span>
              <span className="vegas-arrow">▼</span>
              <div className="vegas-bulbs-b">
                <span className="bulb b8"/><span className="bulb b7"/><span className="bulb b6"/><span className="bulb b5"/>
                <span className="bulb b4"/><span className="bulb b3"/><span className="bulb b2"/><span className="bulb b1"/>
              </div>
            </div>
            {/* CURSOR */}
            <span className="click-cursor">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M4 0L4 17.39L8.57 13.19L12.85 22.36L15.72 21.16L11.44 11.99L17.31 11.99L4 0Z" fill="#00e5a0" stroke="#0a0a0f" strokeWidth="1.2"/>
                <path d="M4 0L4 17.39L8.57 13.19L12.85 22.36L15.72 21.16L11.44 11.99L17.31 11.99L4 0Z" fill="url(#cGrad)" opacity=".5"/>
                <defs><linearGradient id="cGrad" x1="4" y1="0" x2="16" y2="22"><stop stopColor="#00e5a0"/><stop offset="1" stopColor="#00c9ff"/></linearGradient></defs>
              </svg>
            </span>
            <span className="click-ring"></span>
            <span className="click-ring click-ring-2"></span>
          </div>
        </div>
      </section>

      {/* 3 PILLARS */}
      <section style={{maxWidth:1100,margin:"0 auto",padding:"0 2rem 3rem",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"1.5rem"}}>
        {[
          {icon:"💬",title:"Chatbots & Automatización",sub:"Bots que agendan, venden y responden. Workflows n8n que conectan todo.",
           detail:"WhatsApp API · Telegram · Web chat · CRM sync · +200 conectores n8n",
           cta:"Desde $4M COP",page:"ia"},
          {icon:"🌐",title:"Web + SEO + LLM",sub:"Sitios a la medida. Aparezca en Google y en asistentes de IA. Cero plantillas.",
           detail:"Desarrollo full-stack propio · Hosting propio · Schema · Analytics · LLM-ready",
           cta:"Desde $7.5M COP",page:"ia"},
          {icon:"🛡️",title:"Infraestructura & Seguridad",sub:"Servidores, redes, backup, ciberseguridad. Todo con SLA de 2 horas.",
           detail:"Cloud/on-prem · WireGuard VPN · Wazuh SIEM · BorgBackup · DRP",
           cta:"Desde $3M COP",page:"infra"}
        ].map((p,i)=>(
          <div key={i} onClick={()=>setPage(p.page)} style={{background:"#111119",border:"1px solid #252536",borderRadius:16,padding:"2rem",
            cursor:"pointer",transition:"all .35s",position:"relative",overflow:"hidden"}}
            onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(0,229,160,.3)";e.currentTarget.style.transform="translateY(-4px)"}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor="#252536";e.currentTarget.style.transform=""}}>
            <div style={{position:"absolute",top:0,left:0,right:0,height:3,background:"linear-gradient(90deg,#00e5a0,#00c9ff)"}}/>
            <div style={{fontSize:40,marginBottom:12}}>{p.icon}</div>
            <h3 style={{fontSize:"1.15rem",fontWeight:700,marginBottom:6}}>{p.title}</h3>
            <p style={{fontSize:14,color:"#9a9ab4",lineHeight:1.6,marginBottom:10}}>{p.sub}</p>
            <p style={{fontSize:11,color:"#6a6a82",fontFamily:"monospace",marginBottom:12}}>{p.detail}</p>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <span style={{fontFamily:"monospace",fontSize:14,fontWeight:700,color:"#00e5a0"}}>{p.cta}</span>
              <span style={{fontSize:12,color:"#00c9ff"}}>Ver servicios →</span>
            </div>
          </div>
        ))}
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section style={{maxWidth:1100,margin:"0 auto",padding:"2rem 2rem 3rem"}}>
        <h2 style={{fontSize:"1.6rem",fontWeight:800,marginBottom:6,textAlign:"center"}}>¿Por qué <span style={{color:"#00e5a0"}}>OpenAGI</span>?</h2>
        <p style={{textAlign:"center",color:"#6a6a82",fontSize:14,marginBottom:"2rem"}}>Lo que nos diferencia de un proveedor web convencional</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:"1rem"}}>
          {[
            ["🏗️","Desarrollo propio","Sin plantillas, sin WordPress. Stack full-stack con deploy en infraestructura propia."],
            ["📊","Resultados medibles","SEO verificable en Search Console. Conversión medida. ROI calculado antes de empezar."],
            ["🤖","IA integrada","No vendemos solo webs. Integramos chatbots, automatización e IA desde el diseño."],
            ["⚡","2h de respuesta","SLA garantizado. Si no cumplimos, el siguiente ticket es gratis."],
            ["📝","Todo documentado","Código entregado, documentación técnica, capacitación incluida. Sin dependencia."],
            ["🔒","Seguridad real","Hardening, VPN, backup, DRP. No es un addon: es parte de cada proyecto."]
          ].map(([icon,title,desc],i)=>(
            <div key={i} style={{padding:"1.2rem",background:"rgba(255,255,255,.02)",border:"1px solid #1e1e30",borderRadius:12}}>
              <div style={{fontSize:24,marginBottom:6}}>{icon}</div>
              <div style={{fontSize:14,fontWeight:700,marginBottom:4}}>{title}</div>
              <div style={{fontSize:13,color:"#8a8aa4",lineHeight:1.6}}>{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* METRICS */}
      <section style={{maxWidth:1100,margin:"0 auto",padding:"0 2rem 3rem"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",gap:1,background:"#252536",border:"1px solid #252536",borderRadius:14,overflow:"hidden"}}>
          {[["47","Empresas"],["99%","SLA cumplido"],["2h","Respuesta máx."],["3 años","Sin perder cliente"],["70%","Ahorro vs Microsoft"]].map(([n,l])=>
            <div key={l} style={{background:"#111119",padding:"1.4rem",textAlign:"center"}}>
              <div style={{fontFamily:"monospace",fontSize:"1.5rem",fontWeight:800,color:"#00e5a0"}}>{n}</div>
              <div style={{fontSize:11,color:"#6a6a82",textTransform:"uppercase",letterSpacing:1,marginTop:4}}>{l}</div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function ServicesPage({filter}){
  const filtered=filter==="all"?services:services.filter(s=>s.cat===filter);
  const groups={};
  filtered.forEach(s=>{if(!groups[s.catName])groups[s.catName]=[];groups[s.catName].push(s);});
  return(
    <div style={{maxWidth:1200,margin:"0 auto",padding:"2rem"}}>
      {Object.entries(groups).map(([catName,items])=>(
        <div key={catName}>
          <div style={{display:"flex",alignItems:"center",gap:12,margin:"2rem 0 1.2rem"}}>
            <span style={{fontFamily:"monospace",fontSize:11,letterSpacing:2,textTransform:"uppercase",color:"#00e5a0",
              padding:"4px 12px",border:"1px solid rgba(0,229,160,.15)",borderRadius:6,background:"rgba(0,229,160,.04)"}}>{catName}</span>
            <div style={{flex:1,height:1,background:"linear-gradient(90deg,#252536,transparent)"}}/>
            <span style={{fontSize:11,color:"#6a6a82",fontFamily:"monospace"}}>{items.length} servicios</span>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(340px,1fr))",gap:"1.2rem"}}>
            {items.map(svc=><ServiceCard key={svc.code} svc={svc}/>)}
          </div>
        </div>
      ))}
    </div>
  );
}

function CasesPage(){
  return(
    <div style={{maxWidth:900,margin:"0 auto",padding:"2rem"}}>
      <h2 style={{fontSize:"1.8rem",fontWeight:800,marginBottom:8}}>Casos de <span style={{color:"#00e5a0"}}>Éxito</span></h2>
      <p style={{color:"#9a9ab4",marginBottom:"2rem",fontSize:14}}>Resultados verificables en clientes reales de la región.</p>
      {cases.map((c,i)=>(
        <div key={i} style={{background:"#111119",border:"1px solid #252536",borderRadius:14,padding:"1.5rem",marginBottom:"1rem",borderLeft:"3px solid #00e5a0"}}>
          <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:8,marginBottom:8}}>
            <h3 style={{fontSize:"1.05rem",fontWeight:700}}>{c.client}</h3>
            <div style={{display:"flex",gap:6}}>
              <span style={{fontSize:11,padding:"2px 8px",borderRadius:4,background:"rgba(0,201,255,.07)",border:"1px solid rgba(0,201,255,.12)",color:"#00c9ff"}}>{c.sector}</span>
              <span style={{fontSize:11,padding:"2px 8px",borderRadius:4,background:"rgba(123,97,255,.07)",border:"1px solid rgba(123,97,255,.12)",color:"#7b61ff"}}>{c.city}</span>
            </div>
          </div>
          <div style={{fontSize:15,color:"#00e5a0",fontWeight:600,marginBottom:6}}>{c.result}</div>
          <p style={{fontSize:13,color:"#9a9ab4",lineHeight:1.6}}>{c.detail}</p>
        </div>
      ))}
    </div>
  );
}

function ContactPage(){
  return(
    <div style={{maxWidth:800,margin:"0 auto",padding:"2rem"}}>
      <h2 style={{fontSize:"1.8rem",fontWeight:800,marginBottom:20}}>Contacto</h2>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:"1rem",marginBottom:"2rem"}}>
        <WALink message="Hola OpenAGI, quiero más información." style={{background:"#25d366",borderRadius:14,padding:"1.8rem",textDecoration:"none",
          display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",boxShadow:"0 8px 30px rgba(37,211,102,.2)",transition:"transform .2s",color:"#fff"}}>
          <div style={{marginBottom:8}}><WaIcon size={36}/></div>
          <div style={{fontSize:16,fontWeight:700}}>WhatsApp</div>
          <div style={{fontSize:13,opacity:.85}}>+57 333 264 3231</div>
          <div style={{fontSize:11,opacity:.7,marginTop:6}}>Respuesta en menos de 2h</div>
        </WALink>
        <EmailLink style={{background:"linear-gradient(135deg,#0055cc,#0088ff)",borderRadius:14,padding:"1.8rem",textDecoration:"none",
          display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",boxShadow:"0 8px 30px rgba(0,85,204,.2)",color:"#fff"}}>
          <div style={{fontSize:36,marginBottom:8}}>📧</div>
          <div style={{fontSize:16,fontWeight:700}}>Correo</div>
          <div style={{fontSize:13,opacity:.85}}>{EMAIL}</div>
          <div style={{fontSize:11,opacity:.7,marginTop:6}}>Propuestas y documentación</div>
        </EmailLink>
        <PhoneLink style={{background:"linear-gradient(135deg,#5b3cc4,#7b61ff)",borderRadius:14,padding:"1.8rem",textDecoration:"none",
          display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",boxShadow:"0 8px 30px rgba(123,97,255,.2)",color:"#fff"}}>
          <div style={{fontSize:36,marginBottom:8}}>📞</div>
          <div style={{fontSize:16,fontWeight:700}}>{isMob?"Llamar":"WhatsApp"}</div>
          <div style={{fontSize:13,opacity:.85}}>+57 333 264 3231</div>
          <div style={{fontSize:11,opacity:.7,marginTop:6}}>{isMob?"Toque para llamar":"Abre WhatsApp Web"}</div>
        </PhoneLink>
        <WebLink style={{background:"linear-gradient(135deg,#006644,#00e5a0)",borderRadius:14,padding:"1.8rem",textDecoration:"none",
          display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",boxShadow:"0 8px 30px rgba(0,229,160,.15)",color:"#fff"}}>
          <div style={{fontSize:36,marginBottom:8}}>🌐</div>
          <div style={{fontSize:16,fontWeight:700}}>Sitio Web</div>
          <div style={{fontSize:13,opacity:.85}}>openagi.com.co</div>
          <div style={{fontSize:11,opacity:.7,marginTop:6}}>Abre en nueva pestaña</div>
        </WebLink>
      </div>
    </div>
  );
}

function AuditorPage(){
  const [loading,setLoading]=useState(null);
  const [reports,setReports]=useState({});
  const [err,setErr]=useState(null);
  const [activeTab,setActiveTab]=useState(null);

  const audits = [
    {id:"pm",label:"Jefe de Producto",icon:"📋",color:"#00c9ff",
     prompt:"Eres jefe de producto senior de una agencia tech colombiana. Audita este catálogo evaluando: completitud del portafolio, coherencia entre servicios, claridad de propuesta de valor, gaps de mercado, oportunidades de cross-sell y diferenciación competitiva. Sé crítico y específico."},
    {id:"user",label:"Usuario / Cliente",icon:"👤",color:"#00e5a0",
     prompt:"Eres un gerente de empresa colombiana que nunca ha contratado servicios tech. Evalúa este catálogo desde la perspectiva del cliente: ¿entiendes qué te ofrecen? ¿los precios son claros? ¿confías en la empresa? ¿sabes cuál servicio necesitas? ¿qué te confunde o te frena? Sé honesto."},
    {id:"ceo",label:"CEO / Inversionista",icon:"🏛️",color:"#7b61ff",
     prompt:"Eres CEO de un fondo de inversión evaluando a OpenAGI Colombia como potencial partner tecnológico. Evalúa: modelo de negocio, escalabilidad, pricing power, riesgos operativos, defensibilidad, equipo, y si los servicios justifican una relación de largo plazo. Sé exigente."},
    {id:"cro",label:"Conversión / CRO",icon:"🎯",color:"#ff8c42",
     prompt:`Eres experto en CRO (Conversion Rate Optimization) y landing pages de alta conversión. Estás auditando un catálogo web de una agencia tech colombiana que quiere convertir visitantes en leads calificados (WhatsApp, email, llamada).

La página tiene: hero con headline "Descubre cómo escalar con IA", 3 pilares (Chatbots desde $4M, Web+SEO+LLM desde $7.5M, Infraestructura desde $3M), 21 fichas de servicio expandibles con toggle "Para Comerciales / Para Ingenieros", botón animado "Explorar los 21 servicios", CTAs de WhatsApp con mensajes pre-escritos, botón flotante de WhatsApp, sección de casos de éxito, página de contacto con tarjetas de color, auditor IA integrado, métricas de respaldo (47 empresas, 99% SLA, 2h respuesta, 3 años retención).

Evalúa: ¿la página convierte o solo informa? ¿el flujo lleva al visitante a actuar? ¿los CTAs son suficientes y están bien posicionados? ¿hay fricción innecesaria? ¿qué elementos faltan para maximizar conversión? ¿qué haría que un gerente colombiano presione el botón de WhatsApp AHORA? Propón mejoras concretas y accionables. Sé específico, piensa en mobile primero.`}
  ];

  async function runAudit(audit){
    setLoading(audit.id);setErr(null);
    try{
      const summary=services.map(s=>`${s.name}(${s.code}): ${s.desc} | ${s.price} COP | Mercado: ${s.market}`).join("\n");
      const r=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},
        body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:1000,
          messages:[{role:"user",content:`${audit.prompt}

CATÁLOGO OpenAGI Colombia (Barrancabermeja/San Francisco, presencia en Bucaramanga/Miami/Houston/Melbourne):
${summary}

MÉTRICAS: 47 empresas, 99% SLA, 2h respuesta máx, 3 años sin perder cliente. Web+SEO+LLM desde $7.5M (desarrollo a medida, sin plantillas, infra propia).

Genera JSON puro (sin markdown, sin backticks):
{"score":85,"verdict":"frase de 5-8 palabras","strengths":["str1","str2","str3"],"weaknesses":["weak1","weak2","weak3"],"recommendations":["rec1","rec2","rec3"],"summary":"resumen ejecutivo 3-4 frases desde tu perspectiva"}`}]})});
      const d=await r.json();
      const t=d.content?.map(b=>b.text||"").join("")||"";
      const parsed=JSON.parse(t.replace(/```json|```/g,"").trim());
      setReports(prev=>({...prev,[audit.id]:parsed}));
      setActiveTab(audit.id);
    }catch(e){setErr(`Error en auditoría ${audit.label}.`);console.error(e)}
    setLoading(null);
  }

  async function runAll(){
    for(const a of audits) await runAudit(a);
  }

  const rpt = activeTab ? reports[activeTab] : null;
  const activeAudit = audits.find(a=>a.id===activeTab);

  return(
    <div style={{maxWidth:1000,margin:"0 auto",padding:"2rem"}}>
      <h2 style={{fontSize:"1.8rem",fontWeight:800,marginBottom:4}}>Auditor <span style={{color:"#7b61ff"}}>IA</span> ×4</h2>
      <p style={{color:"#9a9ab4",marginBottom:24,fontSize:14}}>Cuatro perspectivas distintas analizan el catálogo: Producto, Usuario, CEO y Conversión.</p>

      {/* Audit cards */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",gap:12,marginBottom:24}}>
        {audits.map(a=>{
          const done=!!reports[a.id];
          const isLoading=loading===a.id;
          return(
            <div key={a.id} style={{background:"#111119",border:`1px solid ${done?"rgba(0,229,160,.25)":"#252536"}`,borderRadius:14,
              padding:"1.4rem",textAlign:"center",cursor:isLoading?"wait":"pointer",transition:"all .3s",position:"relative",overflow:"hidden"}}
              onClick={()=>done?setActiveTab(a.id):!loading&&runAudit(a)}
              onMouseEnter={e=>e.currentTarget.style.borderColor=a.color} onMouseLeave={e=>e.currentTarget.style.borderColor=done?"rgba(0,229,160,.25)":"#252536"}>
              {done&&<div style={{position:"absolute",top:0,left:0,right:0,height:3,background:a.color}}/>}
              <div style={{fontSize:32,marginBottom:8}}>{isLoading?"⏳":a.icon}</div>
              <div style={{fontSize:14,fontWeight:700,color:done?a.color:"#e8e8f0",marginBottom:4}}>{a.label}</div>
              {done && <div style={{fontFamily:"monospace",fontSize:24,fontWeight:900,
                color:reports[a.id].score>=80?"#00e5a0":reports[a.id].score>=60?"#ffd23f":"#ff4d6a"}}>{reports[a.id].score}<span style={{fontSize:12,color:"#555"}}>/100</span></div>}
              {done && <div style={{fontSize:11,color:"#9a9ab4",marginTop:4,fontStyle:"italic"}}>{reports[a.id].verdict}</div>}
              {!done && !isLoading && <div style={{fontSize:11,color:"#555",marginTop:4}}>Click para auditar</div>}
              {isLoading && <div style={{fontSize:11,color:"#ffd23f",marginTop:4}}>Analizando...</div>}
            </div>
          );
        })}
      </div>

      {/* Run all */}
      {Object.keys(reports).length<4 && !loading && (
        <button onClick={runAll} style={{padding:"12px 28px",borderRadius:10,background:"linear-gradient(135deg,#7b61ff,#00c9ff)",
          color:"#fff",fontWeight:700,fontSize:14,border:"none",cursor:"pointer",boxShadow:"0 6px 25px rgba(123,97,255,.25)",
          marginBottom:24,display:"block"}}>
          🔍 Ejecutar las 4 auditorías
        </button>
      )}

      {err && <div style={{color:"#ff4d6a",background:"rgba(255,77,106,.07)",padding:16,borderRadius:10,border:"1px solid rgba(255,77,106,.2)",marginBottom:16}}>{err}</div>}

      {/* Report tabs */}
      {Object.keys(reports).length>0 && (
        <div>
          <div style={{display:"flex",gap:4,marginBottom:16}}>
            {audits.filter(a=>reports[a.id]).map(a=>(
              <button key={a.id} onClick={()=>setActiveTab(a.id)} style={{padding:"8px 16px",borderRadius:8,fontSize:13,fontWeight:600,
                cursor:"pointer",border:"1px solid",transition:"all .2s",
                ...(activeTab===a.id?{background:`${a.color}22`,borderColor:`${a.color}44`,color:a.color}:{background:"transparent",borderColor:"#333",color:"#777"})}}>
                {a.icon} {a.label}
              </button>
            ))}
          </div>

          {rpt && (
            <div style={{display:"flex",flexDirection:"column",gap:"1rem",animation:"fadeIn .3s ease"}}>
              <div style={{background:"#111119",border:"1px solid #252536",borderRadius:14,padding:"1.4rem"}}>
                <div style={{fontSize:11,color:activeAudit.color,fontFamily:"monospace",textTransform:"uppercase",letterSpacing:1,marginBottom:8}}>Resumen — {activeAudit.label}</div>
                <p style={{color:"#c8c8e0",lineHeight:1.7,fontSize:14}}>{rpt.summary}</p>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"}}>
                <div style={{background:"#111119",border:"1px solid #252536",borderRadius:14,padding:"1.4rem"}}>
                  <div style={{fontSize:11,color:"#00e5a0",fontFamily:"monospace",textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>✓ Fortalezas</div>
                  {rpt.strengths.map((s,i)=><div key={i} style={{fontSize:13,color:"#9a9ab4",marginBottom:6,paddingLeft:14,position:"relative"}}><span style={{position:"absolute",left:0,color:"#00e5a0"}}>›</span>{s}</div>)}
                </div>
                <div style={{background:"#111119",border:"1px solid #252536",borderRadius:14,padding:"1.4rem"}}>
                  <div style={{fontSize:11,color:"#ff4d6a",fontFamily:"monospace",textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>⚠ Debilidades</div>
                  {rpt.weaknesses.map((w,i)=><div key={i} style={{fontSize:13,color:"#9a9ab4",marginBottom:6,paddingLeft:14,position:"relative"}}><span style={{position:"absolute",left:0,color:"#ff4d6a"}}>!</span>{w}</div>)}
                </div>
              </div>
              <div style={{background:"#111119",border:"1px solid #252536",borderRadius:14,padding:"1.4rem"}}>
                <div style={{fontSize:11,color:"#00c9ff",fontFamily:"monospace",textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>💡 Recomendaciones</div>
                {rpt.recommendations.map((r,i)=><div key={i} style={{fontSize:13,color:"#9a9ab4",marginBottom:6,paddingLeft:18,position:"relative"}}><span style={{position:"absolute",left:0,color:"#00c9ff"}}>{i+1}.</span>{r}</div>)}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ═══ MAIN ═══
export default function App(){
  const [page,setPage]=useState("home");
  const [mobMenu,setMobMenu]=useState(false);
  const nav=[
    {id:"home",label:"Inicio"},
    {id:"all",label:"Todos",group:"Servicios"},
    {id:"ia",label:"IA & Bots",group:"Servicios"},
    {id:"infra",label:"Infraestructura",group:"Servicios"},
    {id:"cases",label:"Casos de Éxito"},
    {id:"audit",label:"Auditor IA"},
    {id:"contact",label:"Contacto"}
  ];

  return(
    <div style={{fontFamily:"'Outfit',system-ui,sans-serif",background:"#0a0a0f",color:"#e8e8f0",minHeight:"100vh"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
        @keyframes fadeIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
        *{margin:0;padding:0;box-sizing:border-box}a{transition:opacity .15s}a:hover{opacity:.9}
        @media(max-width:768px){
          .desk-nav{display:none !important}
          .desk-cta{display:none !important}
          .mob-burger{display:flex !important}
        }
        @media(min-width:769px){
          .mob-burger{display:none !important}
          .mob-dropdown{display:none !important}
        }
      `}</style>

      {/* ═══ NAV ═══ */}
      <nav style={{position:"sticky",top:0,zIndex:200,background:"rgba(10,10,15,.92)",backdropFilter:"blur(16px)",
        borderBottom:"1px solid #1e1e30"}}>
        <div style={{maxWidth:1200,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",
          padding:"0 1.5rem",height:54}}>
          {/* Logo */}
          <span onClick={()=>{setPage("home");setMobMenu(false)}} style={{fontWeight:800,fontSize:"1.1rem",color:"#00e5a0",
            fontFamily:"monospace",cursor:"pointer",flexShrink:0}}>OpenAGI_</span>

          {/* Desktop nav links */}
          <div style={{display:"flex",alignItems:"center",gap:2}} className="desk-nav">
            {nav.map(n=>(
              <button key={n.id} onClick={()=>setPage(n.id)} style={{
                padding:"6px 12px",borderRadius:6,fontSize:13,fontWeight:page===n.id?600:400,
                cursor:"pointer",transition:"all .2s",border:"none",whiteSpace:"nowrap",
                color:page===n.id?"#00e5a0":"#8a8aa4",
                background:page===n.id?"rgba(0,229,160,.08)":"transparent"
              }}>{n.label}</button>
            ))}
          </div>

          {/* CTA Buttons desktop */}
          <div style={{display:"flex",gap:6,flexShrink:0}} className="desk-cta">
            <WALink message="Hola OpenAGI" style={{display:"inline-flex",alignItems:"center",gap:5,
              padding:"6px 14px",borderRadius:8,background:"#25d366",color:"#fff",
              fontSize:12,fontWeight:700,textDecoration:"none",whiteSpace:"nowrap"}}>
              <WaIcon size={14}/> WhatsApp
            </WALink>
            <EmailLink style={{display:"inline-flex",alignItems:"center",gap:4,
              padding:"6px 14px",borderRadius:8,background:"#0066ff",color:"#fff",
              fontSize:12,fontWeight:700,textDecoration:"none",whiteSpace:"nowrap"}}>
              📧 Email
            </EmailLink>
            <WebLink style={{display:"inline-flex",alignItems:"center",gap:4,
              padding:"6px 14px",borderRadius:8,background:"rgba(0,229,160,.12)",border:"1px solid rgba(0,229,160,.25)",
              color:"#00e5a0",fontSize:12,fontWeight:600,textDecoration:"none",whiteSpace:"nowrap"}}>
              🌐 Web
            </WebLink>
          </div>

          {/* Mobile hamburger */}
          <button onClick={()=>setMobMenu(!mobMenu)} className="mob-burger" style={{display:"none",flexDirection:"column",gap:4,
            background:"none",border:"none",cursor:"pointer",padding:8}}>
            <span style={{width:22,height:2,background:mobMenu?"#00e5a0":"#8a8aa4",transition:"all .2s",
              transform:mobMenu?"rotate(45deg) translate(4px,4px)":"none"}}/>
            <span style={{width:22,height:2,background:"#8a8aa4",transition:"all .2s",opacity:mobMenu?0:1}}/>
            <span style={{width:22,height:2,background:mobMenu?"#00e5a0":"#8a8aa4",transition:"all .2s",
              transform:mobMenu?"rotate(-45deg) translate(4px,-4px)":"none"}}/>
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobMenu && (
          <div className="mob-dropdown" style={{background:"#0d0d16",borderTop:"1px solid #1e1e30",padding:"1rem 1.5rem",
            animation:"fadeIn .2s ease"}}>
            <div style={{display:"flex",flexDirection:"column",gap:2,marginBottom:16}}>
              {nav.map(n=>(
                <button key={n.id} onClick={()=>{setPage(n.id);setMobMenu(false)}} style={{
                  padding:"12px 16px",borderRadius:8,fontSize:15,fontWeight:page===n.id?600:400,textAlign:"left",
                  cursor:"pointer",border:"none",
                  color:page===n.id?"#00e5a0":"#9a9ab4",
                  background:page===n.id?"rgba(0,229,160,.06)":"transparent"
                }}>{n.label}</button>
              ))}
            </div>
            <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
              <WALink message="Hola OpenAGI" style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,
                padding:"12px",borderRadius:10,background:"#25d366",color:"#fff",fontWeight:700,fontSize:14,textDecoration:"none",
                minWidth:140}}>
                <WaIcon size={18}/> WhatsApp
              </WALink>
              <EmailLink style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,
                padding:"12px",borderRadius:10,background:"#0066ff",color:"#fff",fontWeight:700,fontSize:14,textDecoration:"none",
                minWidth:100}}>
                📧 Email
              </EmailLink>
              <WebLink style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,
                padding:"12px",borderRadius:10,background:"rgba(0,229,160,.12)",border:"1px solid rgba(0,229,160,.25)",
                color:"#00e5a0",fontWeight:700,fontSize:14,textDecoration:"none",minWidth:80}}>
                🌐 Web
              </WebLink>
            </div>
          </div>
        )}
      </nav>

      {/* ═══ CONTENT ═══ */}
      <main key={page} style={{animation:"fadeIn .35s ease"}}>
        {page==="home"&&<LandingPage setPage={setPage}/>}
        {page==="all"&&<ServicesPage filter="all"/>}
        {page==="ia"&&<ServicesPage filter="ia"/>}
        {page==="infra"&&<ServicesPage filter="infra"/>}
        {page==="cases"&&<CasesPage/>}
        {page==="contact"&&<ContactPage/>}
        {page==="audit"&&<AuditorPage/>}
      </main>

      {/* ═══ FLOATING WA ═══ */}
      <WALink message="Hola OpenAGI" style={{position:"fixed",bottom:24,right:24,zIndex:300,
        width:60,height:60,borderRadius:30,background:"#25d366",display:"flex",alignItems:"center",justifyContent:"center",
        textDecoration:"none",boxShadow:"0 6px 25px rgba(37,211,102,.4)",transition:"transform .2s"}}>
        <WaIcon size={30} color="#fff"/>
      </WALink>

      {/* ═══ FOOTER ═══ */}
      <footer style={{background:"#0d0d14",borderTop:"1px solid #1e1e30",padding:"2.5rem 1.5rem",marginTop:"3rem"}}>
        <div style={{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",gap:"2rem"}}>
          <div>
            <div style={{fontSize:"1.3rem",fontWeight:800,marginBottom:8}}>
              Open<span style={{color:"#00e5a0"}}>AGI</span>
            </div>
            <p style={{fontSize:13,color:"#6a6a82",lineHeight:1.7}}>
              Agencia DevSecOps, IA e Infraestructura.<br/>
              Barrancabermeja · San Francisco<br/>
              Bucaramanga · Miami · Houston · Melbourne
            </p>
          </div>
          <div>
            <div style={{fontSize:12,fontWeight:700,color:"#8a8aa4",textTransform:"uppercase",letterSpacing:1,marginBottom:12}}>Contacto directo</div>
            <div style={{display:"flex",flexDirection:"column",gap:8}}>
              <WALink message="Hola OpenAGI" style={{display:"flex",alignItems:"center",gap:8,padding:"10px 16px",borderRadius:8,
                background:"#25d366",color:"#fff",fontWeight:600,fontSize:14,textDecoration:"none",width:"fit-content"}}>
                <WaIcon size={16}/> WhatsApp: +57 333 264 3231
              </WALink>
              <EmailLink style={{display:"flex",alignItems:"center",gap:8,padding:"10px 16px",borderRadius:8,
                background:"#0066ff",color:"#fff",fontWeight:600,fontSize:14,textDecoration:"none",width:"fit-content"}}>
                📧 {EMAIL}
              </EmailLink>
              <WebLink style={{display:"flex",alignItems:"center",gap:8,padding:"10px 16px",borderRadius:8,
                background:"rgba(0,229,160,.12)",border:"1px solid rgba(0,229,160,.2)",color:"#00e5a0",
                fontWeight:600,fontSize:14,textDecoration:"none",width:"fit-content"}}>
                🌐 openagi.com.co
              </WebLink>
            </div>
          </div>
          <div>
            <div style={{fontSize:12,fontWeight:700,color:"#8a8aa4",textTransform:"uppercase",letterSpacing:1,marginBottom:12}}>Servicios</div>
            {[["all","Todos los Servicios"],["ia","IA & Automatización"],["infra","Infraestructura"],["cases","Casos de Éxito"],["audit","Auditor IA"]].map(([id,label])=>
              <div key={id} onClick={()=>setPage(id)} style={{fontSize:13,color:"#6a6a82",cursor:"pointer",marginBottom:6,
                transition:"color .2s"}} onMouseEnter={e=>e.target.style.color="#00e5a0"} onMouseLeave={e=>e.target.style.color="#6a6a82"}>{label}</div>
            )}
          </div>
        </div>
        <div style={{maxWidth:1100,margin:"1.5rem auto 0",paddingTop:"1.5rem",borderTop:"1px solid #1a1a28",textAlign:"center"}}>
          <p style={{fontSize:11,color:"#4a4a62",lineHeight:1.7,marginBottom:8}}>
            Lun–Sáb 8am–7pm COT · Rangos referenciales · Cotización sujeta a alcance · Abril 2026
          </p>
          <p style={{fontSize:11,color:"#3a3a52"}}>
            © 2026 OpenAGI Mr Linux. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

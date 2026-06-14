import { SectionHeader, StatusDot, Waveform } from './UI'

const metrics = [
  ['Oxygen Flow', '94', '%', 'pink'],
  ['Neural Signal', '78', 'Hz', 'cyan'],
  ['Armor Integrity', '87', '%', 'green'],
  ['Visor Calibration', '99', '%', 'yellow'],
]

function InterfaceHUD() {
  return (
    <section className="section hud-section" id="interface">
      <div className="container">
        <SectionHeader
          number="05"
          label="Human-Machine Sync"
          title={<>Human-Machine<br />Synchronization</>}
          description="The NEURA//SHELL interface connects helmet, visor, respirator and body sensors in real time - forming a seamless data bridge between biology and equipment. Every breath, blink, and heartbeat is monitored and responded to within 0.3 ms."
          dark
        />
        <div className="hud-console">
          <div className="hud-console__bar">
            <span><StatusDot /> NS-HUD V4.2 - Live Feed</span>
            <span>Operator: A. Kira / Unit 01</span>
          </div>
          <div className="hud-grid">
            {metrics.map(([label, value, unit, color], index) => (
              <article className={`hud-metric hud-metric--${color}`} key={label}>
                <span>{label}</span>
                <strong>{value}<small>{unit}</small></strong>
                <div className="hud-meter"><i style={{ width: `${value}%` }} /></div>
                <b>{index % 2 === 0 ? 'System Flow - Waveform' : 'Signal Pattern - Waveform'}</b>
                <Waveform color={color} seed={index} />
              </article>
            ))}
          </div>
          <p className="hud-console__status">Sync status: Nominal · 0.3 ms latency</p>
        </div>
      </div>
    </section>
  )
}

export default InterfaceHUD

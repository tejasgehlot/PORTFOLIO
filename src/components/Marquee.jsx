export default function Marquee({ items }) {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {[0, 1].map((rep) => (
          <div key={rep} style={{ display: 'inline-flex' }}>
            {items.map((item, i) => (
              <span className="marquee-item" key={rep + '-' + i}>
                {item}
                <i />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

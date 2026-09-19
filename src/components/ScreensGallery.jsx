export default function ScreensGallery({ labels, images = [] }) {
  return (
    <div className="screens-gallery">
      {labels.map((label, i) => (
        <div
          className={`screens-gallery-item${images[i] ? ' has-image' : ''}`}
          key={label}
        >
          {images[i] && <img src={images[i]} alt={label} loading="lazy" />}
          <span>{label}</span>
        </div>
      ))}
    </div>
  )
}
export default function ScreensGallery({ labels }) {
  return (
    <div className="screens-gallery">
      {labels.map((label) => (
        <div className="screens-gallery-item" key={label}>
          <span>{label}</span>
        </div>
      ))}
    </div>
  )
}

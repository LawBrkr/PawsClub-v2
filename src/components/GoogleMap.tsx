interface GoogleMapProps {
  lat: number;
  lng: number;
  title: string;
  className?: string;
}

export default function GoogleMap({ lat, lng, title, className = "" }: GoogleMapProps) {
  const src = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3000!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1`;

  return (
    <iframe
      src={src}
      title={`Mapa de ${title}`}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className={className}
    />
  );
}

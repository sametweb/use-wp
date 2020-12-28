import React, { useEffect } from "react";
import { useMedia } from "use-wp";

type Props = {
  id: string | number;
  width?: number | string;
};

function FeaturedImage({ id, width }: Props) {
  const [media, fetchMedia] = useMedia();

  useEffect(() => {
    fetchMedia(id);
  }, [fetchMedia, id]);

  return (
    <img
      style={{ maxWidth: width }}
      src={media.data.source_url}
      alt={media.data.alt_text}
      title={media.data.alt_text}
    />
  );
}

export default FeaturedImage;

import React, { useEffect } from "react";
import useMedia from "../dist/useMedia";

type Props = {
  id: string | number;
  width?: number | string;
};

function FeaturedImage({ id, width }: Props) {
  const [media, fetchMedia] = useMedia();

  useEffect(() => {
    fetchMedia(id);
  }, []);

  return (
    <img
      width={width}
      src={media.data.source_url}
      alt={media.data.alt_text}
      title={media.data.alt_text}
    />
  );
}

export default FeaturedImage;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";

const Listing = () => {
  SwiperCore.use([Navigation]);
  const { id } = useParams();
  const [dataLoadingError, setDataLoadingError] = useState(null);
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        setDataLoadingError(null);
        const res = await fetch(`/api/listing/get/${id}`);
        const data = await res.json();
        if (data.success === false) {
          setDataLoadingError(data.message);
          return;
        }
        setListing(data);
      } catch (error) {
        setDataLoadingError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchListing();
  }, [id]);
  return (
    <main>
      {loading && <p className="text-center my-7">Loading...</p>}
      {dataLoadingError && (
        <p className="text-red-700 text-sm mb-4">{dataLoadingError}</p>
      )}
      {listing && !loading && !dataLoadingError && (
        <Swiper navigation>
          {listing.image?.map((url) => (
            <SwiperSlide key={url}>
              <div
                className="h-[550px]"
                style={{
                  background: `url(${url}) center no-repeat`,
                  backgroundSize: "cover",
                }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </main>
  );
};

export default Listing;

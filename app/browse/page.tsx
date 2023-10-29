"use client";

import Billboard from "@/components/Billboard";
import InfoModal from "@/components/InfoModal";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/navbar/Navbar";
import useFavorites from "@/hooks/useFavorites";
import useInfoModal from "@/hooks/useInfoModal";
import useMovieList from "@/hooks/useMovieList";
import React from "react";

const NetflixHome = () => {
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();

  const { isOpen, onClose } = useInfoModal();
  return (
    <>
      <InfoModal visible={isOpen} onClose={onClose} />
      <Navbar />
      <Billboard />
      <div className="pb-40 flex flex-col gap-4">
        <MovieList data={movies} title="Trending Now" />
        <MovieList data={favorites} title="My List" />
        <MovieList data={movies} title="New Release" />
        <MovieList data={movies} title="Sci-Fi & Pantasy Movies" />
        <MovieList data={movies} title="Blockbuster Movies" />
        <MovieList data={movies} title="Voilent Movies" />
        <MovieList data={movies} title="Epic World" />
      </div>
    </>
  );
};

export default NetflixHome;

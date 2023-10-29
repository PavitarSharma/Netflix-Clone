import React from "react";

import { isEmpty } from "lodash";
import MovieCard from "./MovieCard";

interface MovieListProp {
  data: Record<string, any>[];
  title: string;
}

const MovieList: React.FC<MovieListProp> = ({ data, title }) => {
  if (isEmpty(data)) {
    return null;
  }

  return (
    <div className="px-4 md:px-12 mt-4 space-y-4">
      <p className="text-wg=hite text-lg md:text-xl lg:text-xl font-semibold">
        {title}
      </p>

      <div className="grid grid-cols-4 gap-2">
        {data?.map((movie) => (
          <MovieCard key={movie?.id} data={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;

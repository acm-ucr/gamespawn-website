"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import Card from "./Card";

const Cards = ({ yearFilters, tagFilters, projData }) => {
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page") ?? 0);
  const search = searchParams.get("search") ?? "";
  const searchString = search.toLowerCase();

  const filteredCards = projData
    .filter(
      ({ title, schoolyear, tags }) =>
        title.toLowerCase().includes(searchString) &&
        (yearFilters.length === 0 || yearFilters.includes(schoolyear)) &&
        (tagFilters.length === 0 ||
          tagFilters.some((tag) => tags.includes(tag)))
    )
    .slice(10 * page, 10 * page + 10);

  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-10/12 justify-center my-6 items-center ">
        {filteredCards.map(({ title, thumbnail, id }) => (
          <Card key={id} id={id} name={title} image={thumbnail} />
        ))}
      </div>
    </div>
  );
};

export default Cards;

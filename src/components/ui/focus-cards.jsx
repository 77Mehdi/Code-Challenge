"use client";
import React, { useState } from "react";
import { cn } from "./utils";
import useFetch from "../../hooks/useFetchData";
import { HiArrowNarrowRight } from "react-icons/hi";
import { TiWarning } from "react-icons/ti";
import { useNavigate } from "react-router-dom";




const images = [
  { id: 1, src: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg" },
  { id: 2, src: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/5-yarder-skip.jpg" },
  { id: 3, src: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/20-yarder-skip.jpg " },
  { id: 4, src: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/6-yarder-skip.jpg" },
  { id: 5, src: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg" },
  { id: 6, src: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/5-yarder-skip.jpg" },
];




export const Card = React.memo(({ card, index, hovered, setHovered, image, isSelected, onSelect }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "relative rounded-xl overflow-hidden h-96 w-full transition-all duration-300 ease-out shadow-lg group",
      hovered !== null && hovered !== index && "blur-sm scale-[0.97]"
    )}
  >
    <img src={image} alt={`Skip image ${index + 1}`} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />

    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end">
      <h2 className="text-white text-2xl font-bold mb-2">Skip Size: {card.size} Yards</h2>
      <ul className="text-sm text-gray-200 space-y-1">
        <li><strong>Hire Period:</strong> {card.hire_period_days} days</li>
        <li className="absolute top-4 right-4 bg-opacity-90 bg-purple-600 font-semibold px-3 py-1 rounded shadow-lg">£{card.price_before_vat}</li>
        <li><strong>Heavy Waste:</strong> {card.allows_heavy_waste ? "Yes" : "No"}</li>
        {!card.allowed_on_road && (
          <li className="flex items-center gap-1">
            <strong>Not Allowed On The Road</strong><TiWarning className="text-amber-300 text-[19px]" />
          </li>
        )}
      </ul>
      <button
        onClick={onSelect}
        className={cn(
          "mt-4 self-start px-4 py-2 rounded transition flex items-center gap-2",
          isSelected
            ? "bg-green-600 text-white hover:bg-green-700"
            : "bg-white text-black hover:bg-gray-200"
        )}
      >
        {isSelected ? "Selected" : <>Select Skip <HiArrowNarrowRight /></>}
      </button>
    </div>
  </div>
));


Card.displayName = "Card";

export function FocusCards() {
  const [hovered, setHovered] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();
  const { data, loading, error } = useFetch();

  if (loading) return <p className="text-center">Loading skips...</p>;
  if (error) return <p className="text-center text-red-500">Failed to load skips</p>;
  

  return (
    <div className="px-4 py-10 max-w-6xl mx-auto border-t border-gray-700 pb-4">
      <div className="text-center mb-10 ">
        <h1 className="text-3xl font-bold text-gray-300">Choose Your Skip Size</h1>
        <p className="text-gray-500 mt-2 text-xl">Select the skip size that best suits your needs</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data?.map((card, index) => (
          <Card
            key={card.id}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
            image={images[index % images.length].src}
            isSelected={selectedCard?.id === card.id}
            onSelect={() => setSelectedCard(card)}
          />

        ))}
      </div>
      {selectedCard && (
        <div className="fixed bottom-0 left-0 right-0 bg-white p-4 sm:p-6 shadow-lg border-t border-gray-300 transition-transform translate-y-0 z-50">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <img
                src={images[selectedCard.id % images.length]?.src}
                alt="Selected Skip"
                className="w-full sm:w-32 h-24 object-cover rounded shadow"
              />
              <div>
                <p className="text-gray-800 font-bold text-lg">{selectedCard.size} Yard Skip</p>
                <p className="text-gray-600">{selectedCard.hire_period_days} day hire</p>
                <p className="text-blue-700 font-semibold mt-1 text-md">£{selectedCard.price_before_vat}</p>
                <p className="text-xs text-gray-500 mt-1 italic">
                  Imagery and information shown may not reflect exact shape or size. Options/accessories may be extra.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-4 sm:mt-0">
              <button
                onClick={() => setSelectedCard(null)}
                className="w-full sm:w-auto bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
              >
                Back
              </button>
              <button
                onClick={() => navigate("/permit-check")}
                className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

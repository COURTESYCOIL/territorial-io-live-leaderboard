
import React from 'react';

interface RankIconProps {
  rank: number;
}

export const RankIcon: React.FC<RankIconProps> = ({ rank }) => {
  const baseTrophyIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M8 21l8 0" />
        <path d="M12 17l0 4" />
        <path d="M7 4l10 0" />
        <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />
        <path d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    </svg>
  );

  switch (rank) {
    case 1:
      return (
        <span title="Rank 1" className="text-yellow-400">
          {baseTrophyIcon}
        </span>
      );
    case 2:
      return (
        <span title="Rank 2" className="text-gray-300">
          {baseTrophyIcon}
        </span>
      );
    case 3:
      return (
        <span title="Rank 3" className="text-amber-600">
          {baseTrophyIcon}
        </span>
      );
    default:
      return <span className="font-bold text-sm text-gray-400 w-6 text-center">{rank}</span>;
  }
};

interface TrendIconProps {
  change: number;
}

export const TrendIcon: React.FC<TrendIconProps> = ({ change }) => {
  if (change > 0) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
      </svg>
    );
  }
  if (change < 0) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
      </svg>
    );
  }
  return null;
};

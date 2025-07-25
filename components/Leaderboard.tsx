import React from 'react';
import { TrackedClan } from '../types';
import { RankIcon, TrendIcon } from './icons';

interface LeaderboardProps {
  data: TrackedClan[];
  isLoading: boolean;
}

const PointChangeDisplay: React.FC<{ change: number }> = ({ change }) => {
  // Use a small epsilon for floating point comparison to avoid showing -0.000 or +0.000
  if (Math.abs(change) < 0.0001) {
    return <span className="text-gray-500 text-center">-</span>;
  }

  const isGain = change > 0;
  const color = isGain ? 'text-green-400' : 'text-red-400';
  const sign = isGain ? '+' : '';

  return (
    <div className={`flex items-center justify-center font-semibold text-sm ${color}`}>
      <TrendIcon change={change} />
      <span className="ml-1">{`${sign}${change.toFixed(3)}`}</span>
    </div>
  );
};

const Leaderboard: React.FC<LeaderboardProps> = ({ data, isLoading }) => {
  const formatScore = (score: number) => {
    return score.toFixed(3);
  };

  return (
    <div className="w-full relative">
      {isLoading && (
        <div className="absolute inset-x-0 top-0 h-1 bg-purple-500 animate-pulse"></div>
      )}
      {/* Header */}
      <div className="grid grid-cols-12 gap-4 px-4 py-3 text-sm font-bold text-gray-400 border-b-2 border-gray-700">
        <div className="col-span-1 text-center">#</div>
        <div className="col-span-7">Clan</div>
        <div className="col-span-2 text-center">Change</div>
        <div className="col-span-2 text-right">Score</div>
      </div>

      {/* Rows */}
      <div className="divide-y divide-gray-700/50">
        {data.map((clan, index) => {
          const rank = index + 1;
          const { name, score, pointChange } = clan;

          return (
            <div
              key={name}
              className="grid grid-cols-12 gap-4 px-4 py-3 items-center hover:bg-gray-700/50 transition-colors duration-200"
            >
              <div className="col-span-1 flex justify-center items-center">
                <RankIcon rank={rank} />
              </div>
              <div className="col-span-7 font-medium text-white truncate pr-2 flex items-center">
                <span>{name}</span>
              </div>
              <div className="col-span-2 text-center">
                <PointChangeDisplay change={pointChange} />
              </div>
              <div className="col-span-2 text-right font-semibold text-purple-300">
                {formatScore(score)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Leaderboard;

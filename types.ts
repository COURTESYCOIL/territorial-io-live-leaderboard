export type Clan = {
  name: string;
  score: number;
};

export type TrackedClan = Clan & {
  pointChange: number;
};

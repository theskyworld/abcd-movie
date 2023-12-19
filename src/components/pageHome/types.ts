export interface Data {
  videoTitles: string[];
  imgURLs: string[];
  videoEpisodes?: string[];
  videoScores?: string[];
  videoTags?: string[];
}

export interface PageHomeProps {
  getDatasFnName: string;
  episode?: boolean;
  tag?: boolean;
}

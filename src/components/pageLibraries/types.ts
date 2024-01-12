import { VideoSelectorData } from "@/components/base/videoSelectors/types";

export interface PageLibrariesProps {
  videoSelectorsData?: Array<VideoSelectorData>;
  getDatasFnName: string;
  tv?: boolean;
}

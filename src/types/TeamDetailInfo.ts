// types/TeamDetailInfo.ts
import { TeamLeaderInfo } from "./TeamLeaderInfo";

export interface TeamDetailInfo {
  id: string;
  teamName: string;
  teamDescription: string;
  projectDescription: string;
  deadline: string;
  recruitmentParts: {
    partName: string;
    numberNeeded: number;
  }[];
  techStacks: string[];
  currentMembers: {
    id: string;
    name: string;
    partName: string;
    profileImageUrl?: string;
  }[];
  leaderInfo: TeamLeaderInfo;
}

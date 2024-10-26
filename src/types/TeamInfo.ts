// types/TeamInfo.ts

import { TeamLeaderInfo } from './TeamLeaderInfo';
import { TeamCardInfo } from './TeamCardInfo';
import { TeamDetailInfo } from './TeamDetailInfo';

export interface TeamInfo {
    cardInfo: TeamCardInfo;
    detailInfo: TeamDetailInfo;
}

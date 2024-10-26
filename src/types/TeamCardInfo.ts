// types/TeamCardInfo.ts

export interface TeamCardInfo {
    id: string;
    teamName: string;
    shortDescription: string;
    deadline: string; // 모집 마감일 (ISO 형식 문자열)
    recruitmentParts: {
        partName: string;
        numberNeeded: number;
    }[];
}

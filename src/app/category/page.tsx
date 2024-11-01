"use client";

import React from "react";
import { useState } from "react";
import {
  Stack,
  Typography,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Chip,
} from "@mui/material";

const techStacks = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Vue.js",
  "Angular",
  "Node.js",
  "Django",
  "Ruby on Rails",
  "Java",
  "Spring Boot",
  "PHP",
  "MySQL",
  "MongoDB",
  "AWS",
  "Docker",
];

const Category = () => {
  const [area, setArea] = React.useState("");
  const [part, setPart] = React.useState("");
  const [selectedChips, setSelectedChips] = useState<string[]>([]);
  const [sort, setSort] = useState("");

  const handleChipChange = (label: string) => {
    setSelectedChips((prev) => {
      if (prev.includes(label)) {
        return prev.filter((chip) => chip !== label);
      }
      return [...prev, label];
    });
  };

  const handlePartChange = (event: SelectChangeEvent) => {
    setPart(event.target.value as string);
  };

  const handleAreaChange = (event: SelectChangeEvent) => {
    setArea(event.target.value as string);
  };

  const handleSortChange = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
  };

  return (
    <Stack>
      <Typography
        sx={{ pl: "2rem", pt: "1rem", fontWeight: "bold", fontSize: "1.2rem" }}
      >
        지역
      </Typography>
      <div>
        <FormControl sx={{ m: 1, minWidth: 120, pl: "1rem" }}>
          <Select
            native
            defaultValue=""
            id="grouped-native-select"
            onChange={handleAreaChange}
          >
            <option aria-label="None" value="" />
            <optgroup label="특별시">
              <option value="서울특별시">서울특별시</option>
            </optgroup>
            <optgroup label="광역시">
              <option value="부산광역시">부산광역시</option>
              <option value="대구광역시">대구광역시</option>
              <option value="인천광역시">인천광역시</option>
              <option value="광주광역시">광주광역시</option>
              <option value="대전광역시">대전광역시</option>
              <option value="울산광역시">울산광역시</option>
            </optgroup>
            <optgroup label="경기도">
              <option value="수원시">수원시</option>
              <option value="성남시">성남시</option>
              <option value="고양시">고양시</option>
              <option value="용인시">용인시</option>
              <option value="화성시">화성시</option>
              <option value="평택시">평택시</option>
              <option value="남양주시">남양주시</option>
              <option value="안산시">안산시</option>
              <option value="의정부시">의정부시</option>
              <option value="파주시">파주시</option>
              <option value="광명시">광명시</option>
              <option value="시흥시">시흥시</option>
              <option value="군포시">군포시</option>
              <option value="오산시">오산시</option>
              <option value="이천시">이천시</option>
              <option value="양주시">양주시</option>
              <option value="안성시">안성시</option>
              <option value="여주시">여주시</option>
              <option value="김포시">김포시</option>
              <option value="하남시">하남시</option>
              <option value="구리시">구리시</option>
              <option value="양평군">양평군</option>
              <option value="포천시">포천시</option>
              <option value="동두천시">동두천시</option>
              <option value="의왕시">의왕시</option>
            </optgroup>
            <optgroup label="강원도">
              <option value="춘천시">춘천시</option>
              <option value="강릉시">강릉시</option>
              <option value="원주시">원주시</option>
              <option value="동해시">동해시</option>
              <option value="속초시">속초시</option>
            </optgroup>
            <optgroup label="충청북도">
              <option value="청주시">청주시</option>
              <option value="충주시">충주시</option>
              <option value="제천시">제천시</option>
            </optgroup>
            <optgroup label="충청남도">
              <option value="천안시">천안시</option>
              <option value="공주시">공주시</option>
              <option value="보령시">보령시</option>
              <option value="아산시">아산시</option>
              <option value="서산시">서산시</option>
              <option value="논산시">논산시</option>
              <option value="계룡시">계룡시</option>
              <option value="당진시">당진시</option>
            </optgroup>
            <optgroup label="전라북도">
              <option value="전주시">전주시</option>
              <option value="익산시">익산시</option>
              <option value="군산시">군산시</option>
              <option value="정읍시">정읍시</option>
              <option value="남원시">남원시</option>
            </optgroup>
            <optgroup label="전라남도">
              <option value="광양시">광양시</option>
              <option value="여수시">여수시</option>
              <option value="목포시">목포시</option>
              <option value="순천시">순천시</option>
              <option value="나주시">나주시</option>
            </optgroup>
            <optgroup label="경상북도">
              <option value="포항시">포항시</option>
              <option value="경주시">경주시</option>
              <option value="안동시">안동시</option>
              <option value="구미시">구미시</option>
              <option value="영주시">영주시</option>
            </optgroup>
            <optgroup label="경상남도">
              <option value="창원시">창원시</option>
              <option value="김해시">김해시</option>
              <option value="양산시">양산시</option>
              <option value="진주시">진주시</option>
              <option value="사천시">사천시</option>
            </optgroup>
            <optgroup label="제주도">
              <option value="제주시">제주시</option>
              <option value="서귀포시">서귀포시</option>
            </optgroup>
          </Select>
        </FormControl>
      </div>
      <FormControl>
        <Typography
          sx={{
            pl: "2rem",
            pt: "1rem",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          모집 분야
        </Typography>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="Frontend"
          name="radio-buttons-group"
          onChange={handlePartChange}
        >
          <FormControlLabel
            value="Frontend"
            control={<Radio />}
            label="Frontend"
            sx={{ pl: "2rem" }}
          />
          <FormControlLabel
            value="Backend"
            control={<Radio />}
            label="Backend"
            sx={{ pl: "2rem" }}
          />
          <FormControlLabel
            value="Mobile"
            control={<Radio />}
            label="Mobile"
            sx={{ pl: "2rem" }}
          />
        </RadioGroup>
      </FormControl>
      <Stack spacing={1.5}>
        <Typography
          sx={{
            pl: "2rem",
            pt: "1rem",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          기술 스택
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          flexWrap="wrap"
          sx={{ pl: "1.4rem" }}
        >
          {techStacks.map((label) => (
            <Chip
              key={label}
              label={label}
              onClick={() => handleChipChange(label)}
              color={selectedChips.includes(label) ? "primary" : "default"}
            />
          ))}
        </Stack>
      </Stack>
      <FormControl>
        <Typography
          sx={{
            pl: "2rem",
            pt: "1.5rem",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          정렬
        </Typography>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="추천순"
          name="radio-buttons-group"
          onChange={handleSortChange}
        >
          <FormControlLabel
            value="추천순"
            control={<Radio />}
            label="추천순"
            sx={{ pl: "2rem" }}
          />
          <FormControlLabel
            value="최신순"
            control={<Radio />}
            label="최신순"
            sx={{ pl: "2rem" }}
          />
          <FormControlLabel
            value="마감순"
            control={<Radio />}
            label="마감순"
            sx={{ pl: "2rem" }}
          />
        </RadioGroup>
      </FormControl>
    </Stack>
  );
};

export default Category;

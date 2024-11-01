// src/components/Category.tsx

"use client";

import React, { useState } from "react";
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    SelectChangeEvent,
    Chip,
    Box,
    Button,
    Collapse,
    Menu,
    Typography,
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

interface CategoryProps {
    onFilterChange: (field: string, value: string | string[]) => void;
}

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

const sortOptions = ["추천순", "최신순", "마감순"];

const Category: React.FC<CategoryProps> = ({ onFilterChange }) => {
    const [area, setArea] = useState("");
    const [part, setPart] = useState("");
    const [selectedTechStacks, setSelectedTechStacks] = useState<string[]>([]);
    const [sort, setSort] = useState("");
    const [filtersOpen, setFiltersOpen] = useState(false);

    // 정렬 메뉴 상태 관리
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const openSortMenu = Boolean(anchorEl);

    const handleTechStackChange = (event: SelectChangeEvent<typeof selectedTechStacks>) => {
        const { value } = event.target;
        const newSelected = typeof value === "string" ? value.split(",") : value;
        setSelectedTechStacks(newSelected);
        onFilterChange("stack", newSelected);
    };

    const handlePartChange = (event: SelectChangeEvent) => {
        const newPart = event.target.value as string;
        setPart(newPart);
        onFilterChange("field", newPart);
    };

    const handleAreaChange = (event: SelectChangeEvent) => {
        const newArea = event.target.value as string;
        setArea(newArea);
        onFilterChange("region", newArea);
    };

    const handleSortChange = (option: string) => {
        setSort(option);
        onFilterChange("sort", option);
        handleSortMenuClose();
    };

    const toggleFilters = () => {
        setFiltersOpen((prev) => !prev);
    };

    // 정렬 메뉴 열기
    const handleSortMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    // 정렬 메뉴 닫기
    const handleSortMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ width: "100%", padding: "1rem 0" }}>
            {/* 필터 버튼과 정렬 버튼을 가로로 배치 */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 1,
                }}
            >
                {/* 필터 열기/닫기 버튼 */}
                <Button
                    variant="outlined"
                    onClick={toggleFilters}
                    endIcon={filtersOpen ? <ExpandLess /> : <ExpandMore />}
                >
                    {filtersOpen ? "필터 닫기" : "필터 열기"}
                </Button>

                {/* 정렬 버튼 */}
                <Button
                    variant="outlined"
                    onClick={handleSortMenuOpen}
                    endIcon={openSortMenu ? <ExpandLess /> : <ExpandMore />}
                >
                    {sort ? `정렬: ${sort}` : "정렬"}
                </Button>

                {/* 정렬 옵션 메뉴 */}
                <Menu
                    anchorEl={anchorEl}
                    open={openSortMenu}
                    onClose={handleSortMenuClose}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                >
                    {sortOptions.map((option) => (
                        <MenuItem
                            key={option}
                            selected={option === sort}
                            onClick={() => handleSortChange(option)}
                        >
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
            </Box>

            {/* 필터링 콤보박스 */}
            <Collapse in={filtersOpen} timeout="auto" unmountOnExit>
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 2,
                        alignItems: "center",
                        justifyContent: "space-between",
                        overflowX: "auto",
                        backgroundColor: "#ffffff",
                        padding: "1rem",
                        borderRadius: "8px",
                        boxShadow: 1,
                    }}
                >
                    {/* 지역 필터 */}
                    <FormControl variant="outlined" sx={{ flex: "1 1 200px", minWidth: 200 }}>
                        <InputLabel id="area-label">지역</InputLabel>
                        <Select
                            labelId="area-label"
                            id="area-select"
                            value={area}
                            label="지역"
                            onChange={handleAreaChange}
                        >
                            <MenuItem value="">
                                <em>모든 지역</em>
                            </MenuItem>
                            <MenuItem value="서울특별시">서울특별시</MenuItem>
                            <MenuItem value="부산광역시">부산광역시</MenuItem>
                            <MenuItem value="대구광역시">대구광역시</MenuItem>
                            <MenuItem value="인천광역시">인천광역시</MenuItem>
                            <MenuItem value="광주광역시">광주광역시</MenuItem>
                            <MenuItem value="대전광역시">대전광역시</MenuItem>
                            <MenuItem value="울산광역시">울산광역시</MenuItem>
                            <MenuItem value="경기도">경기도</MenuItem>
                            <MenuItem value="강원도">강원도</MenuItem>
                            <MenuItem value="충청북도">충청북도</MenuItem>
                            <MenuItem value="충청남도">충청남도</MenuItem>
                            <MenuItem value="전라북도">전라북도</MenuItem>
                            <MenuItem value="전라남도">전라남도</MenuItem>
                            <MenuItem value="경상북도">경상북도</MenuItem>
                            <MenuItem value="경상남도">경상남도</MenuItem>
                            <MenuItem value="제주도">제주도</MenuItem>
                        </Select>
                    </FormControl>

                    {/* 모집 분야 필터 */}
                    <FormControl variant="outlined" sx={{ flex: "1 1 200px", minWidth: 200 }}>
                        <InputLabel id="part-label">모집 분야</InputLabel>
                        <Select
                            labelId="part-label"
                            id="part-select"
                            value={part}
                            label="모집 분야"
                            onChange={handlePartChange}
                        >
                            <MenuItem value="">
                                <em>모든 분야</em>
                            </MenuItem>
                            <MenuItem value="Frontend">Frontend</MenuItem>
                            <MenuItem value="Backend">Backend</MenuItem>
                            <MenuItem value="Mobile">Mobile</MenuItem>
                            {/* 필요에 따라 추가 분야를 여기에 추가하세요 */}
                        </Select>
                    </FormControl>

                    {/* 기술 스택 필터 */}
                    <FormControl variant="outlined" sx={{ flex: "2 1 400px", minWidth: 200 }}>
                        <InputLabel id="tech-stack-label">기술 스택</InputLabel>
                        <Select
                            labelId="tech-stack-label"
                            id="tech-stack-select"
                            multiple
                            value={selectedTechStacks}
                            onChange={handleTechStackChange}
                            renderValue={(selected) => (
                                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                                    {(selected as string[]).map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                </Box>
                            )}
                            label="기술 스택"
                        >
                            {techStacks.map((tech) => (
                                <MenuItem key={tech} value={tech}>
                                    {tech}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
            </Collapse>
        </Box>
    );

};

export default Category;

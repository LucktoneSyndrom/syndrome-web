import React from "react";
import styles from "./ProfileCard.module.css";
import { Typography, Box, Grid, Stack, Divider, Avatar } from "@mui/material";
import { UserCardInfo } from "../types/ProfileCardInfo";
import Image from "../components/Image";

interface ProfileCardProps {
  userInfo: UserCardInfo;
  divider?: boolean;
}

const style = {
  container: {
    paddingTop: "18px",
    zIndex: 0,
  },
};

const ProfileCard: React.FC<ProfileCardProps> = ({ userInfo, divider }) => {
  return (
    <Box sx={style.container}>
      <Grid container spacing={5}>
        <Grid item xs={3}>
          <Avatar
            src={userInfo.profileImage}
            alt={`${userInfo.name}의 프로필 사진`}
            sx={{ marginTop: "5px", height: "80px", width: "80px" }}
          />
        </Grid>
        <Grid item xs={9}>
          <div className={styles.info}>
            <Stack>
              <Typography sx={{ fontWeight: "bold" }}>
                {userInfo.name}
                <span className={styles.temperature}>
                  {userInfo.temperature}℃
                </span>
              </Typography>
              <Typography variant="body2">
                {userInfo.school} - {userInfo.major}
              </Typography>
              <Typography
                variant="body2"
                style={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                {userInfo.intro}
              </Typography>
              <div className={styles.stacks}>
                {userInfo.stack.slice(0, 2).map((stackItem, index) => (
                  <span key={index} className={styles.stackItem}>
                    {stackItem}
                  </span>
                ))}
                {userInfo.stack.length > 2 && (
                  <span className={styles.stackItem}>...</span>
                )}
              </div>

              <div className={styles.skills}>
                {userInfo.skills.slice(0, 3).map((skill, index) => (
                  <span key={index} className={styles.skillItem}>
                    {skill}
                  </span>
                ))}
                {userInfo.skills.length > 3 && (
                  <span className={styles.skillItem}>...</span>
                )}
              </div>
            </Stack>
          </div>
        </Grid>
      </Grid>
      {divider && <Divider sx={{ pt: "20px" }} />}
    </Box>
  );
};

export default ProfileCard;

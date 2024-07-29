import useCustomNavigate from "@hooks/useCustomNavigate";
import { join } from "@libs/join";
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { isNil } from "@utils/isNil";
import { useEffect, useState } from "react";

const questions = [
  { question: "Describe your first job experience.", answers: 10 },
  { question: "What motivated you to pursue your current career?", answers: 8 },
  { question: "Share a significant milestone in your career.", answers: 12 },
];

function InterviewDetail() {
  const { forward } = useCustomNavigate();
  const [question, setQuestion] = useState<Partial<QuestionCardProps>>({});

  useEffect(() => {
    setQuestion;
  }, []);

  return (
    <Stack flex={1} sx={{ maxWidth: 800, mx: "auto", width: "100%" }}>
      <Paper sx={{ p: 4, my: 4 }}>
        {/* each question */}
        <Typography
          component='h3'
          fontSize={30}
          fontWeight={700}
          color='#333'
          gutterBottom
          my={2}>
          Introduce yourself
        </Typography>
        <List>
          {join(
            questions.map((question) => (
              <ListItem>
                <ListItemText
                  color='#777'
                  primaryTypographyProps={{ fontSize: 20, fontWeight: 700 }}
                  secondaryTypographyProps={{ fontSize: 16 }}
                  primary={question.question}
                  secondary={`${question.answers} answer${
                    question.answers > 1 ? "s" : ""
                  }`}
                />
              </ListItem>
            )),
            <Divider />
          )}
        </List>
        <Button
          fullWidth
          size='large'
          variant='contained'
          onClick={() =>
            forward(["/interview", "list", String(question.id), "answer"])
          }
          sx={{
            px: "1.6rem",
            py: "0.6rem",
            fontSize: "1.2rem",
          }}>
          이 질문{!isNil(question.questions) && " 묶음"}에 답하기
        </Button>
      </Paper>
      <Toolbar />
    </Stack>
  );
}

export default InterviewDetail;

export declare global {
  type QuestionCardProps = {
    id: number;
    questions?: number;
    title: string;
    contents: string;
    categories: string[];
    answered: number;
    createdAt: Date;
  };
}

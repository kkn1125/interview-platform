export declare global {
  type QuestionCardProps = {
    id: number;
    questions?: number;
    title: string;
    categories: string[];
    answered: number;
    createdAt: Date;
  };
}

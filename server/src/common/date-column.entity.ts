export abstract class DateColumnEntity {
  abstract createdAt: Date;
  abstract updatedAt: Date;
  abstract deletedAt: Date | null;
}

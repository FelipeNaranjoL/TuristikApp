import { Request, Response } from 'express';

export const getAllTours = (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    data: {
      tours: []
    }
  });
};

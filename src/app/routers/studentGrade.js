import { Router } from 'express';
import StudentGradeController from '../controllers/StudentGradeController';

const routes = new Router();

// console.log(StudentGradeController.index);
routes.get('/student/:studentId/grade', StudentGradeController.index);
routes.get('/student/:studentId/grade/:gradeId', StudentGradeController.show);
routes.post('/student/:studentId/grade', StudentGradeController.store);
routes.put('/student/:studentId/grade/:gradeId', StudentGradeController.update);
routes.delete(
  '/student/:studentId/grade/:gradeId',
  StudentGradeController.delete
);

export default routes;

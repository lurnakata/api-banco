import StudentGradeService from '../services/StudentGradeService';

const gradeService = new StudentGradeService();

class StudentGradeController {
  async index(request, response) {
    const { studentId } = request.params;
    response.json(await gradeService.get(studentId));
  }

  async show(request, response) {
    const { studentId, gradeId } = request.params;
    return response.json(await gradeService.getGrade(studentId, gradeId));
  }

  async store(request, response) {
    const { studentId } = request.params;
    const { descricao, nota, materiaId } = request.body;
    response.json(
      await gradeService.create(descricao, nota, studentId, materiaId)
    );
  }

  async update(request, response) {
    const { studentId, gradeId } = request.params;
    const { nota, descricao, materiaId } = request.body;
    const result = await gradeService.update(
      studentId,
      gradeId,
      nota,
      descricao,
      materiaId
    );
    return response.json(result);
  }

  async delete(request, response) {
    const { studentId, gradeId } = request.params;
    await gradeService.delete(studentId, gradeId);
    return response.send(202);
  }
}

export default new StudentGradeController();

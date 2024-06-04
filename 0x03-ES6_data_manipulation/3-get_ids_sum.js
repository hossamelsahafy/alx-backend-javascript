function getStudentIdsSum(list) {
  if (!Array.isArray(list)) {
    return [];
  }
  return list.reduce((Total, student) => Total + student.id, 0);
}

export default getStudentIdsSum;

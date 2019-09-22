const ENDPOINT="http://localhost:9091/projectmanager/user/getAllUsers"
module.exports = {
  get: jest.fn((url) => {
    return Promise.resolve({
    data: [
      {
        userId: 1,
        firstName: 'madhu',
        lastName: 'kundo',
        empId: '678987',
        projectId: 1,
        taskId: 4
      }
    ]
    })
  })
}
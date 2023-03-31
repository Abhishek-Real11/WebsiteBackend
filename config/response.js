const response = (method, status, success, data, message) => {
  return method
    .status(status)
    .send({ success: success, data: data, message: message });
};

module.exports = response;

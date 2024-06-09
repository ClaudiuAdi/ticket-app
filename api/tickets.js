const { axiosAuth } = require('../lib');

const createTicket = async (data) => {
  return await axiosAuth.post('/tickets', data);
};

const assignEmployee = async (id, data) => {
  return await axiosAuth.put(`admin/tickets/${id}/assign`, data);
};

const answerTicket = async (id, data) => {
  return await axiosAuth.put(`admin/tickets/${id}/answer`, data);
};

const closeTicket = async (id, data) => {
  return await axiosAuth.put(`admin/tickets/${id}/close`, data);
};

export { answerTicket, assignEmployee, closeTicket, createTicket };

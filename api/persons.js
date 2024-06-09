const { axiosAuth } = require('@lib');

const createAdmin = async (data) => {
  return await axiosAuth.post('/admin/identities', data);
};

const updateAdmin = async (id, data) => {
  return await axiosAuth.put(`/admin/identities/${id}`, data);
};

export { createAdmin, updateAdmin };

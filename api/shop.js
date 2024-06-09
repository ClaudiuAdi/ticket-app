import { axiosAuth } from '@lib';

export const approveOrder = async (id) => {
  return axiosAuth.put(`admin/orders/${id}/approve`);
};

export const rejectOrder = async (id) => {
  return axiosAuth.put(`admin/orders/${id}/reject`);
};

export const deleteOrder = async (id) => {
  return axiosAuth.delete(`admin/orders/${id}`);
};

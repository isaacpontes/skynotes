import Api from './api';

const NotesService = {
  findAll: () => Api.get('/notes', {
    headers: { 'x-access-token': localStorage.getItem('token') },
  }),
  create: () => Api.post('/notes', {
    title: 'New Note',
    body: 'Turn me into something amazing!',
  }, {
    headers: { 'x-access-token': localStorage.getItem('token') },
  }),
  update: (id, params) => Api.put(`/notes/${id}`, params, {
    headers: { 'x-access-token': localStorage.getItem('token') },
  }),
  delete: (id) => Api.delete(`/notes/${id}`, {
    headers: { 'x-access-token': localStorage.getItem('token') },
  }),
};

export default NotesService;

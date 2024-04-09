import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const ProjectApi = createApi({
  reducerPath: 'projectApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }), // Remove space before http
  endpoints: (builder) => ({
    getProject: builder.query({
      
      query: ()=> '/project/details' ,
      
    }),
  })
});

export const {
  useGetProjectQuery
} = ProjectApi;

export { ProjectApi };

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type TodoType = {
  id: string
  title: string
  completed: boolean
}

export const todosApi = createApi({
  reducerPath: 'todosApi',
  tagTypes: ['Todos'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://661c178ae7b95ad7fa69ab18.mockapi.io/api/v1/',
  }),
  endpoints: (builder) => ({
    getTodos: builder.query<TodoType[], void>({
      query: () => `todos`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Todos' as const, id })),
              'Todos',
            ]
          : ['Todos'],
    }),
    addTodo: builder.mutation<void, TodoType>({
      query: (todo) => ({
        url: 'todos',
        method: 'POST',
        body: todo,
      }),
      invalidatesTags: ['Todos'],
    }),
    updateTodo: builder.mutation<void, TodoType>({
      query: (todo) => ({
        url: `todos/${todo.id}`,
        method: 'PUT',
        body: todo,
      }),
      invalidatesTags: ['Todos'],
    }),
    deleteTodo: builder.mutation<void, string>({
      query: (id) => ({
        url: `todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todos'],
    }),
  }),
})

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todosApi

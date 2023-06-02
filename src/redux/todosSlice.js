import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  // Ім'я слайсу
  name: 'todos',
  // Початковий стан редюсера слайсу
  initialState:{items:[]},
  // Об'єкт редюсерів
  reducers: {
      addTodo(state, action) {
          state.items.push(action.payload)
    },
      deleteTodo(state, action) {
        state.items = state.items.filter(item=>item.id !== action.payload)
    },
    toggleCompleted(state, action) {},
  },
});

// Генератори екшенів
export const { addTodo, deleteTodo, toggleCompleted } = todosSlice.actions;
// Редюсер слайсу
export const todosReducer = todosSlice.reducer;
